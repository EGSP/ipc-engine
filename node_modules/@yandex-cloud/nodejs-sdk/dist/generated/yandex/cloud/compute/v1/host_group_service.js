"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostGroupServiceClient = exports.HostGroupServiceService = exports.ListHostGroupOperationsResponse = exports.ListHostGroupOperationsRequest = exports.ListHostGroupHostsResponse = exports.ListHostGroupHostsRequest = exports.ListHostGroupInstancesResponse = exports.ListHostGroupInstancesRequest = exports.DeleteHostGroupMetadata = exports.DeleteHostGroupRequest = exports.UpdateHostGroupMetadata = exports.UpdateHostGroupRequest_LabelsEntry = exports.UpdateHostGroupRequest = exports.CreateHostGroupMetadata = exports.CreateHostGroupRequest_LabelsEntry = exports.CreateHostGroupRequest = exports.ListHostGroupsResponse = exports.ListHostGroupsRequest = exports.GetHostGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const host_group_1 = require("../../../../yandex/cloud/compute/v1/host_group");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetHostGroupRequest",
    hostGroupId: "",
};
exports.GetHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.GetHostGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetHostGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetHostGroupRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetHostGroupRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetHostGroupRequest.$type, exports.GetHostGroupRequest);
const baseListHostGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListHostGroupsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest",
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
        const message = Object.assign({}, baseListHostGroupsRequest);
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
        const message = Object.assign({}, baseListHostGroupsRequest);
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
        const message = Object.assign({}, baseListHostGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupsRequest.$type, exports.ListHostGroupsRequest);
const baseListHostGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupsResponse",
    nextPageToken: "",
};
exports.ListHostGroupsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hostGroups) {
            host_group_1.HostGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHostGroupsResponse);
        message.hostGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroups.push(host_group_1.HostGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListHostGroupsResponse);
        message.hostGroups = ((_a = object.hostGroups) !== null && _a !== void 0 ? _a : []).map((e) => host_group_1.HostGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hostGroups) {
            obj.hostGroups = message.hostGroups.map((e) => e ? host_group_1.HostGroup.toJSON(e) : undefined);
        }
        else {
            obj.hostGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListHostGroupsResponse);
        message.hostGroups =
            ((_a = object.hostGroups) === null || _a === void 0 ? void 0 : _a.map((e) => host_group_1.HostGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupsResponse.$type, exports.ListHostGroupsResponse);
const baseCreateHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    typeId: "",
    maintenancePolicy: 0,
};
exports.CreateHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest",
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
            exports.CreateHostGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.typeId !== "") {
            writer.uint32(50).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(56).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            host_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateHostGroupRequest);
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
                    const entry4 = exports.CreateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.typeId = reader.string();
                    break;
                case 7:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 8:
                    message.scalePolicy = host_group_1.ScalePolicy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateHostGroupRequest);
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
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? (0, host_group_1.maintenancePolicyFromJSON)(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? host_group_1.ScalePolicy.fromJSON(object.scalePolicy)
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
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = (0, host_group_1.maintenancePolicyToJSON)(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? host_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseCreateHostGroupRequest);
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
        message.typeId = (_f = object.typeId) !== null && _f !== void 0 ? _f : "";
        message.maintenancePolicy = (_g = object.maintenancePolicy) !== null && _g !== void 0 ? _g : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? host_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupRequest.$type, exports.CreateHostGroupRequest);
const baseCreateHostGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateHostGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateHostGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateHostGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateHostGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupRequest_LabelsEntry.$type, exports.CreateHostGroupRequest_LabelsEntry);
const baseCreateHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata",
    hostGroupId: "",
};
exports.CreateHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateHostGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateHostGroupMetadata);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateHostGroupMetadata);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupMetadata.$type, exports.CreateHostGroupMetadata);
const baseUpdateHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest",
    hostGroupId: "",
    name: "",
    description: "",
    maintenancePolicy: 0,
};
exports.UpdateHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
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
            exports.UpdateHostGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.maintenancePolicy !== 0) {
            writer.uint32(48).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            host_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHostGroupRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
                    const entry5 = exports.UpdateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 7:
                    message.scalePolicy = host_group_1.ScalePolicy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateHostGroupRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? (0, host_group_1.maintenancePolicyFromJSON)(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? host_group_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
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
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = (0, host_group_1.maintenancePolicyToJSON)(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? host_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateHostGroupRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.maintenancePolicy = (_e = object.maintenancePolicy) !== null && _e !== void 0 ? _e : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? host_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupRequest.$type, exports.UpdateHostGroupRequest);
const baseUpdateHostGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateHostGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateHostGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateHostGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateHostGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupRequest_LabelsEntry.$type, exports.UpdateHostGroupRequest_LabelsEntry);
const baseUpdateHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata",
    hostGroupId: "",
};
exports.UpdateHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHostGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateHostGroupMetadata);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateHostGroupMetadata);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupMetadata.$type, exports.UpdateHostGroupMetadata);
const baseDeleteHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest",
    hostGroupId: "",
};
exports.DeleteHostGroupRequest = {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteHostGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteHostGroupRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteHostGroupRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHostGroupRequest.$type, exports.DeleteHostGroupRequest);
const baseDeleteHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata",
    hostGroupId: "",
};
exports.DeleteHostGroupMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteHostGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteHostGroupMetadata);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteHostGroupMetadata);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHostGroupMetadata.$type, exports.DeleteHostGroupMetadata);
const baseListHostGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest",
    hostGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListHostGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
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
        const message = Object.assign({}, baseListHostGroupInstancesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
        const message = Object.assign({}, baseListHostGroupInstancesRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListHostGroupInstancesRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupInstancesRequest.$type, exports.ListHostGroupInstancesRequest);
const baseListHostGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse",
    nextPageToken: "",
};
exports.ListHostGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse",
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
        const message = Object.assign({}, baseListHostGroupInstancesResponse);
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
        const message = Object.assign({}, baseListHostGroupInstancesResponse);
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
        const message = Object.assign({}, baseListHostGroupInstancesResponse);
        message.instances =
            ((_a = object.instances) === null || _a === void 0 ? void 0 : _a.map((e) => instance_1.Instance.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupInstancesResponse.$type, exports.ListHostGroupInstancesResponse);
const baseListHostGroupHostsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest",
    hostGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListHostGroupHostsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
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
        const message = Object.assign({}, baseListHostGroupHostsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
        const message = Object.assign({}, baseListHostGroupHostsRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListHostGroupHostsRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupHostsRequest.$type, exports.ListHostGroupHostsRequest);
const baseListHostGroupHostsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse",
    nextPageToken: "",
};
exports.ListHostGroupHostsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            host_group_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHostGroupHostsResponse);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(host_group_1.Host.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListHostGroupHostsResponse);
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => host_group_1.Host.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => (e ? host_group_1.Host.toJSON(e) : undefined));
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
        const message = Object.assign({}, baseListHostGroupHostsResponse);
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => host_group_1.Host.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupHostsResponse.$type, exports.ListHostGroupHostsResponse);
const baseListHostGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest",
    hostGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListHostGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== "") {
            writer.uint32(10).string(message.hostGroupId);
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
        const message = Object.assign({}, baseListHostGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
        const message = Object.assign({}, baseListHostGroupOperationsRequest);
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListHostGroupOperationsRequest);
        message.hostGroupId = (_a = object.hostGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupOperationsRequest.$type, exports.ListHostGroupOperationsRequest);
const baseListHostGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListHostGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse",
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
        const message = Object.assign({}, baseListHostGroupOperationsResponse);
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
        const message = Object.assign({}, baseListHostGroupOperationsResponse);
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
        const message = Object.assign({}, baseListHostGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupOperationsResponse.$type, exports.ListHostGroupOperationsResponse);
/** A set of methods for managing groups of dedicated hosts. */
exports.HostGroupServiceService = {
    /** Returns the specified host group. */
    get: {
        path: "/yandex.cloud.compute.v1.HostGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(host_group_1.HostGroup.encode(value).finish()),
        responseDeserialize: (value) => host_group_1.HostGroup.decode(value),
    },
    /** Retrieves the list of host groups in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.HostGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupsResponse.decode(value),
    },
    /** Creates a host group in the specified folder. */
    create: {
        path: "/yandex.cloud.compute.v1.HostGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified host group. */
    update: {
        path: "/yandex.cloud.compute.v1.HostGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified host group. */
    delete: {
        path: "/yandex.cloud.compute.v1.HostGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified host group. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupOperationsResponse.decode(value),
    },
    /** Lists instances that belongs to the specified host group. */
    listInstances: {
        path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupInstancesResponse.decode(value),
    },
    /** Lists hosts that belongs to the specified host group. */
    listHosts: {
        path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupHostsResponse.decode(value),
    },
};
exports.HostGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.HostGroupServiceService, "yandex.cloud.compute.v1.HostGroupService");
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
