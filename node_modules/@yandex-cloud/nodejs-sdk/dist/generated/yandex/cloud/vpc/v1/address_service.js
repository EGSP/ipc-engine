"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressServiceClient = exports.AddressServiceService = exports.MoveAddressMetadata = exports.MoveAddressRequest = exports.ListAddressOperationsResponse = exports.ListAddressOperationsRequest = exports.DeleteAddressMetadata = exports.DeleteAddressRequest = exports.UpdateAddressMetadata = exports.UpdateAddressRequest_LabelsEntry = exports.UpdateAddressRequest = exports.CreateAddressMetadata = exports.ExternalIpv4AddressSpec = exports.CreateAddressRequest_LabelsEntry = exports.CreateAddressRequest = exports.ListAddressesResponse = exports.ListAddressesRequest = exports.GetAddressByValueRequest = exports.GetAddressRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const address_1 = require("../../../../yandex/cloud/vpc/v1/address");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.vpc.v1";
const baseGetAddressRequest = {
    $type: "yandex.cloud.vpc.v1.GetAddressRequest",
    addressId: "",
};
exports.GetAddressRequest = {
    $type: "yandex.cloud.vpc.v1.GetAddressRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAddressRequest);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAddressRequest);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAddressRequest.$type, exports.GetAddressRequest);
const baseGetAddressByValueRequest = {
    $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest",
};
exports.GetAddressByValueRequest = {
    $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.externalIpv4Address !== undefined) {
            writer.uint32(10).string(message.externalIpv4Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAddressByValueRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAddressByValueRequest);
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined &&
                object.externalIpv4Address !== null
                ? String(object.externalIpv4Address)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAddressByValueRequest);
        message.externalIpv4Address = (_a = object.externalIpv4Address) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAddressByValueRequest.$type, exports.GetAddressByValueRequest);
const baseListAddressesRequest = {
    $type: "yandex.cloud.vpc.v1.ListAddressesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListAddressesRequest = {
    $type: "yandex.cloud.vpc.v1.ListAddressesRequest",
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
        const message = Object.assign({}, baseListAddressesRequest);
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
        const message = Object.assign({}, baseListAddressesRequest);
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
        const message = Object.assign({}, baseListAddressesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAddressesRequest.$type, exports.ListAddressesRequest);
const baseListAddressesResponse = {
    $type: "yandex.cloud.vpc.v1.ListAddressesResponse",
    nextPageToken: "",
};
exports.ListAddressesResponse = {
    $type: "yandex.cloud.vpc.v1.ListAddressesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            address_1.Address.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAddressesResponse);
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(address_1.Address.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAddressesResponse);
        message.addresses = ((_a = object.addresses) !== null && _a !== void 0 ? _a : []).map((e) => address_1.Address.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? address_1.Address.toJSON(e) : undefined);
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
        const message = Object.assign({}, baseListAddressesResponse);
        message.addresses =
            ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => address_1.Address.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAddressesResponse.$type, exports.ListAddressesResponse);
const baseCreateAddressRequest = {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest",
    folderId: "",
    name: "",
    description: "",
    deletionProtection: false,
};
exports.CreateAddressRequest = {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest",
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
            exports.CreateAddressRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.externalIpv4AddressSpec !== undefined) {
            exports.ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAddressRequest);
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
                    const entry4 = exports.CreateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.externalIpv4AddressSpec = exports.ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseCreateAddressRequest);
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
        message.externalIpv4AddressSpec =
            object.externalIpv4AddressSpec !== undefined &&
                object.externalIpv4AddressSpec !== null
                ? exports.ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
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
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? exports.ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateAddressRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.externalIpv4AddressSpec =
            object.externalIpv4AddressSpec !== undefined &&
                object.externalIpv4AddressSpec !== null
                ? exports.ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec)
                : undefined;
        message.deletionProtection = (_e = object.deletionProtection) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAddressRequest.$type, exports.CreateAddressRequest);
const baseCreateAddressRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateAddressRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateAddressRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAddressRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAddressRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAddressRequest_LabelsEntry.$type, exports.CreateAddressRequest_LabelsEntry);
const baseExternalIpv4AddressSpec = {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec",
    address: "",
    zoneId: "",
};
exports.ExternalIpv4AddressSpec = {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== "") {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            address_1.AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = address_1.AddressRequirements.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? address_1.AddressRequirements.fromJSON(object.requirements)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? address_1.AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.zoneId = (_b = object.zoneId) !== null && _b !== void 0 ? _b : "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? address_1.AddressRequirements.fromPartial(object.requirements)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4AddressSpec.$type, exports.ExternalIpv4AddressSpec);
const baseCreateAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateAddressMetadata",
    addressId: "",
};
exports.CreateAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateAddressMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAddressMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateAddressMetadata);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateAddressMetadata);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAddressMetadata.$type, exports.CreateAddressMetadata);
const baseUpdateAddressRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest",
    addressId: "",
    name: "",
    description: "",
    reserved: false,
    deletionProtection: false,
};
exports.UpdateAddressRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
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
            exports.UpdateAddressRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.reserved === true) {
            writer.uint32(48).bool(message.reserved);
        }
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAddressRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
                    const entry5 = exports.UpdateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.reserved = reader.bool();
                    break;
                case 7:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseUpdateAddressRequest);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
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
        message.reserved =
            object.reserved !== undefined && object.reserved !== null
                ? Boolean(object.reserved)
                : false;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
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
        message.reserved !== undefined && (obj.reserved = message.reserved);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateAddressRequest);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
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
        message.reserved = (_e = object.reserved) !== null && _e !== void 0 ? _e : false;
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAddressRequest.$type, exports.UpdateAddressRequest);
const baseUpdateAddressRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateAddressRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateAddressRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAddressRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAddressRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAddressRequest_LabelsEntry.$type, exports.UpdateAddressRequest_LabelsEntry);
const baseUpdateAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata",
    addressId: "",
};
exports.UpdateAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAddressMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAddressMetadata);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAddressMetadata);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAddressMetadata.$type, exports.UpdateAddressMetadata);
const baseDeleteAddressRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteAddressRequest",
    addressId: "",
};
exports.DeleteAddressRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteAddressRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAddressRequest);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAddressRequest);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAddressRequest.$type, exports.DeleteAddressRequest);
const baseDeleteAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata",
    addressId: "",
};
exports.DeleteAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAddressMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAddressMetadata);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAddressMetadata);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAddressMetadata.$type, exports.DeleteAddressMetadata);
const baseListAddressOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest",
    addressId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAddressOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
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
        const message = Object.assign({}, baseListAddressOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
        const message = Object.assign({}, baseListAddressOperationsRequest);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
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
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListAddressOperationsRequest);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAddressOperationsRequest.$type, exports.ListAddressOperationsRequest);
const baseListAddressOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse",
    nextPageToken: "",
};
exports.ListAddressOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse",
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
        const message = Object.assign({}, baseListAddressOperationsResponse);
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
        const message = Object.assign({}, baseListAddressOperationsResponse);
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
        const message = Object.assign({}, baseListAddressOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAddressOperationsResponse.$type, exports.ListAddressOperationsResponse);
const baseMoveAddressRequest = {
    $type: "yandex.cloud.vpc.v1.MoveAddressRequest",
    addressId: "",
    destinationFolderId: "",
};
exports.MoveAddressRequest = {
    $type: "yandex.cloud.vpc.v1.MoveAddressRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveAddressRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
        const message = Object.assign({}, baseMoveAddressRequest);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
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
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveAddressRequest);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveAddressRequest.$type, exports.MoveAddressRequest);
const baseMoveAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveAddressMetadata",
    addressId: "",
};
exports.MoveAddressMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveAddressMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveAddressMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveAddressMetadata);
        message.addressId =
            object.addressId !== undefined && object.addressId !== null
                ? String(object.addressId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMoveAddressMetadata);
        message.addressId = (_a = object.addressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveAddressMetadata.$type, exports.MoveAddressMetadata);
/** A set of methods for managing Address resources. */
exports.AddressServiceService = {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.vpc.v1.AddressService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(address_1.Address.encode(value).finish()),
        responseDeserialize: (value) => address_1.Address.decode(value),
    },
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue: {
        path: "/yandex.cloud.vpc.v1.AddressService/GetByValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAddressByValueRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAddressByValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(address_1.Address.encode(value).finish()),
        responseDeserialize: (value) => address_1.Address.decode(value),
    },
    /** Retrieves the list of Address resources in the specified folder. */
    list: {
        path: "/yandex.cloud.vpc.v1.AddressService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAddressesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAddressesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAddressesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAddressesResponse.decode(value),
    },
    /** Creates an address in the specified folder and network. */
    create: {
        path: "/yandex.cloud.vpc.v1.AddressService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified address. */
    update: {
        path: "/yandex.cloud.vpc.v1.AddressService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified address. */
    delete: {
        path: "/yandex.cloud.vpc.v1.AddressService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified address. */
    listOperations: {
        path: "/yandex.cloud.vpc.v1.AddressService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAddressOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAddressOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAddressOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAddressOperationsResponse.decode(value),
    },
    /** Move an address to another folder */
    move: {
        path: "/yandex.cloud.vpc.v1.AddressService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AddressServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AddressServiceService, "yandex.cloud.vpc.v1.AddressService");
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
