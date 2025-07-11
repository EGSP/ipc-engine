"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubnetServiceClient = exports.SubnetServiceService = exports.UsedAddress = exports.ListUsedAddressesResponse = exports.ListUsedAddressesRequest = exports.MoveSubnetMetadata = exports.MoveSubnetRequest = exports.ListSubnetOperationsResponse = exports.ListSubnetOperationsRequest = exports.DeleteSubnetMetadata = exports.DeleteSubnetRequest = exports.RemoveSubnetCidrBlocksMetadata = exports.RemoveSubnetCidrBlocksRequest = exports.AddSubnetCidrBlocksMetadata = exports.AddSubnetCidrBlocksRequest = exports.UpdateSubnetMetadata = exports.UpdateSubnetRequest_LabelsEntry = exports.UpdateSubnetRequest = exports.CreateSubnetMetadata = exports.CreateSubnetRequest_LabelsEntry = exports.CreateSubnetRequest = exports.ListSubnetsResponse = exports.ListSubnetsRequest = exports.GetSubnetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const subnet_1 = require("../../../../yandex/cloud/vpc/v1/subnet");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const reference_1 = require("../../../../yandex/cloud/reference/reference");
exports.protobufPackage = "yandex.cloud.vpc.v1";
const baseGetSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.GetSubnetRequest",
    subnetId: "",
};
exports.GetSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.GetSubnetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSubnetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSubnetRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSubnetRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSubnetRequest.$type, exports.GetSubnetRequest);
const baseListSubnetsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSubnetsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListSubnetsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSubnetsRequest",
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
        const message = Object.assign({}, baseListSubnetsRequest);
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
        const message = Object.assign({}, baseListSubnetsRequest);
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
        const message = Object.assign({}, baseListSubnetsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSubnetsRequest.$type, exports.ListSubnetsRequest);
const baseListSubnetsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSubnetsResponse",
    nextPageToken: "",
};
exports.ListSubnetsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSubnetsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subnets) {
            subnet_1.Subnet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSubnetsResponse);
        message.subnets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnets.push(subnet_1.Subnet.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSubnetsResponse);
        message.subnets = ((_a = object.subnets) !== null && _a !== void 0 ? _a : []).map((e) => subnet_1.Subnet.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subnets) {
            obj.subnets = message.subnets.map((e) => e ? subnet_1.Subnet.toJSON(e) : undefined);
        }
        else {
            obj.subnets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSubnetsResponse);
        message.subnets = ((_a = object.subnets) === null || _a === void 0 ? void 0 : _a.map((e) => subnet_1.Subnet.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSubnetsResponse.$type, exports.ListSubnetsResponse);
const baseCreateSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest",
    folderId: "",
    name: "",
    description: "",
    networkId: "",
    zoneId: "",
    v4CidrBlocks: "",
    routeTableId: "",
};
exports.CreateSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest",
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
            exports.CreateSubnetRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== "") {
            writer.uint32(42).string(message.networkId);
        }
        if (message.zoneId !== "") {
            writer.uint32(50).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(58).string(v);
        }
        if (message.routeTableId !== "") {
            writer.uint32(74).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            subnet_1.DhcpOptions.encode(message.dhcpOptions, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSubnetRequest);
        message.labels = {};
        message.v4CidrBlocks = [];
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
                    const entry4 = exports.CreateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 9:
                    message.routeTableId = reader.string();
                    break;
                case 10:
                    message.dhcpOptions = subnet_1.DhcpOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateSubnetRequest);
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
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.v4CidrBlocks = ((_b = object.v4CidrBlocks) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? subnet_1.DhcpOptions.fromJSON(object.dhcpOptions)
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? subnet_1.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateSubnetRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.networkId = (_e = object.networkId) !== null && _e !== void 0 ? _e : "";
        message.zoneId = (_f = object.zoneId) !== null && _f !== void 0 ? _f : "";
        message.v4CidrBlocks = ((_g = object.v4CidrBlocks) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.routeTableId = (_h = object.routeTableId) !== null && _h !== void 0 ? _h : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? subnet_1.DhcpOptions.fromPartial(object.dhcpOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSubnetRequest.$type, exports.CreateSubnetRequest);
const baseCreateSubnetRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSubnetRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSubnetRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSubnetRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSubnetRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSubnetRequest_LabelsEntry.$type, exports.CreateSubnetRequest_LabelsEntry);
const baseCreateSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata",
    subnetId: "",
};
exports.CreateSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateSubnetMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSubnetMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSubnetMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateSubnetMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSubnetMetadata.$type, exports.CreateSubnetMetadata);
const baseUpdateSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest",
    subnetId: "",
    name: "",
    description: "",
    routeTableId: "",
};
exports.UpdateSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
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
            exports.UpdateSubnetRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.routeTableId !== "") {
            writer.uint32(50).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            subnet_1.DhcpOptions.encode(message.dhcpOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSubnetRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
                    const entry5 = exports.UpdateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.routeTableId = reader.string();
                    break;
                case 7:
                    message.dhcpOptions = subnet_1.DhcpOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateSubnetRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
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
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? subnet_1.DhcpOptions.fromJSON(object.dhcpOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? subnet_1.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateSubnetRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
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
        message.routeTableId = (_e = object.routeTableId) !== null && _e !== void 0 ? _e : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? subnet_1.DhcpOptions.fromPartial(object.dhcpOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSubnetRequest.$type, exports.UpdateSubnetRequest);
const baseUpdateSubnetRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSubnetRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSubnetRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSubnetRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSubnetRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSubnetRequest_LabelsEntry.$type, exports.UpdateSubnetRequest_LabelsEntry);
const baseUpdateSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata",
    subnetId: "",
};
exports.UpdateSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSubnetMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSubnetMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSubnetMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSubnetMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSubnetMetadata.$type, exports.UpdateSubnetMetadata);
const baseAddSubnetCidrBlocksRequest = {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest",
    subnetId: "",
    v4CidrBlocks: "",
};
exports.AddSubnetCidrBlocksRequest = {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddSubnetCidrBlocksRequest);
        message.v4CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.v4CidrBlocks.push(reader.string());
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
        const message = Object.assign({}, baseAddSubnetCidrBlocksRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.v4CidrBlocks = ((_a = object.v4CidrBlocks) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddSubnetCidrBlocksRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.v4CidrBlocks = ((_b = object.v4CidrBlocks) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddSubnetCidrBlocksRequest.$type, exports.AddSubnetCidrBlocksRequest);
const baseAddSubnetCidrBlocksMetadata = {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata",
    subnetId: "",
};
exports.AddSubnetCidrBlocksMetadata = {
    $type: "yandex.cloud.vpc.v1.AddSubnetCidrBlocksMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddSubnetCidrBlocksMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddSubnetCidrBlocksMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddSubnetCidrBlocksMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddSubnetCidrBlocksMetadata.$type, exports.AddSubnetCidrBlocksMetadata);
const baseRemoveSubnetCidrBlocksRequest = {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest",
    subnetId: "",
    v4CidrBlocks: "",
};
exports.RemoveSubnetCidrBlocksRequest = {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksRequest);
        message.v4CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.v4CidrBlocks.push(reader.string());
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
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.v4CidrBlocks = ((_a = object.v4CidrBlocks) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.v4CidrBlocks = ((_b = object.v4CidrBlocks) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSubnetCidrBlocksRequest.$type, exports.RemoveSubnetCidrBlocksRequest);
const baseRemoveSubnetCidrBlocksMetadata = {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata",
    subnetId: "",
};
exports.RemoveSubnetCidrBlocksMetadata = {
    $type: "yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveSubnetCidrBlocksMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSubnetCidrBlocksMetadata.$type, exports.RemoveSubnetCidrBlocksMetadata);
const baseDeleteSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest",
    subnetId: "",
};
exports.DeleteSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSubnetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSubnetRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSubnetRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSubnetRequest.$type, exports.DeleteSubnetRequest);
const baseDeleteSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata",
    subnetId: "",
};
exports.DeleteSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteSubnetMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSubnetMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSubnetMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSubnetMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSubnetMetadata.$type, exports.DeleteSubnetMetadata);
const baseListSubnetOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest",
    subnetId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSubnetOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
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
        const message = Object.assign({}, baseListSubnetOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
        const message = Object.assign({}, baseListSubnetOperationsRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSubnetOperationsRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSubnetOperationsRequest.$type, exports.ListSubnetOperationsRequest);
const baseListSubnetOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse",
    nextPageToken: "",
};
exports.ListSubnetOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSubnetOperationsResponse",
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
        const message = Object.assign({}, baseListSubnetOperationsResponse);
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
        const message = Object.assign({}, baseListSubnetOperationsResponse);
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
        const message = Object.assign({}, baseListSubnetOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSubnetOperationsResponse.$type, exports.ListSubnetOperationsResponse);
const baseMoveSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.MoveSubnetRequest",
    subnetId: "",
    destinationFolderId: "",
};
exports.MoveSubnetRequest = {
    $type: "yandex.cloud.vpc.v1.MoveSubnetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveSubnetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
        const message = Object.assign({}, baseMoveSubnetRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveSubnetRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveSubnetRequest.$type, exports.MoveSubnetRequest);
const baseMoveSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata",
    subnetId: "",
};
exports.MoveSubnetMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveSubnetMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveSubnetMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveSubnetMetadata);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMoveSubnetMetadata);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveSubnetMetadata.$type, exports.MoveSubnetMetadata);
const baseListUsedAddressesRequest = {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest",
    subnetId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListUsedAddressesRequest = {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
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
        const message = Object.assign({}, baseListUsedAddressesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
        const message = Object.assign({}, baseListUsedAddressesRequest);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListUsedAddressesRequest);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUsedAddressesRequest.$type, exports.ListUsedAddressesRequest);
const baseListUsedAddressesResponse = {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse",
    nextPageToken: "",
};
exports.ListUsedAddressesResponse = {
    $type: "yandex.cloud.vpc.v1.ListUsedAddressesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            exports.UsedAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListUsedAddressesResponse);
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(exports.UsedAddress.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListUsedAddressesResponse);
        message.addresses = ((_a = object.addresses) !== null && _a !== void 0 ? _a : []).map((e) => exports.UsedAddress.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? exports.UsedAddress.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListUsedAddressesResponse);
        message.addresses =
            ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UsedAddress.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUsedAddressesResponse.$type, exports.ListUsedAddressesResponse);
const baseUsedAddress = {
    $type: "yandex.cloud.vpc.v1.UsedAddress",
    address: "",
    ipVersion: 0,
};
exports.UsedAddress = {
    $type: "yandex.cloud.vpc.v1.UsedAddress",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.references) {
            reference_1.Reference.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUsedAddress);
        message.references = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                case 3:
                    message.references.push(reference_1.Reference.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUsedAddress);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? (0, subnet_1.ipVersionFromJSON)(object.ipVersion)
                : 0;
        message.references = ((_a = object.references) !== null && _a !== void 0 ? _a : []).map((e) => reference_1.Reference.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, subnet_1.ipVersionToJSON)(message.ipVersion));
        if (message.references) {
            obj.references = message.references.map((e) => e ? reference_1.Reference.toJSON(e) : undefined);
        }
        else {
            obj.references = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUsedAddress);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.ipVersion = (_b = object.ipVersion) !== null && _b !== void 0 ? _b : 0;
        message.references =
            ((_c = object.references) === null || _c === void 0 ? void 0 : _c.map((e) => reference_1.Reference.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UsedAddress.$type, exports.UsedAddress);
/** A set of methods for managing Subnet resources. */
exports.SubnetServiceService = {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.vpc.v1.SubnetService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(subnet_1.Subnet.encode(value).finish()),
        responseDeserialize: (value) => subnet_1.Subnet.decode(value),
    },
    /** Retrieves the list of Subnet resources in the specified folder. */
    list: {
        path: "/yandex.cloud.vpc.v1.SubnetService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSubnetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSubnetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSubnetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSubnetsResponse.decode(value),
    },
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: "/yandex.cloud.vpc.v1.SubnetService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: "/yandex.cloud.vpc.v1.SubnetService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Adds CIDR blocks to the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addCidrBlocks: {
        path: "/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddSubnetCidrBlocksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddSubnetCidrBlocksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Removes CIDR blocks from the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeCidrBlocks: {
        path: "/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveSubnetCidrBlocksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveSubnetCidrBlocksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified subnet. */
    delete: {
        path: "/yandex.cloud.vpc.v1.SubnetService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified subnet. */
    listOperations: {
        path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSubnetOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSubnetOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSubnetOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSubnetOperationsResponse.decode(value),
    },
    /** Move subnet to another folder. */
    move: {
        path: "/yandex.cloud.vpc.v1.SubnetService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List used addresses in specified subnet. */
    listUsedAddresses: {
        path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListUsedAddressesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListUsedAddressesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListUsedAddressesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListUsedAddressesResponse.decode(value),
    },
};
exports.SubnetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SubnetServiceService, "yandex.cloud.vpc.v1.SubnetService");
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
