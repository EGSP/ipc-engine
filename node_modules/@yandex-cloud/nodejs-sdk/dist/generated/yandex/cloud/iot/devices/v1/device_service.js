"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceServiceClient = exports.DeviceServiceService = exports.ListDeviceOperationsResponse = exports.ListDeviceOperationsRequest = exports.DeleteDevicePasswordMetadata = exports.DeleteDevicePasswordRequest = exports.AddDevicePasswordMetadata = exports.AddDevicePasswordRequest = exports.ListDevicePasswordsResponse = exports.ListDevicePasswordsRequest = exports.DeleteDeviceCertificateMetadata = exports.DeleteDeviceCertificateRequest = exports.AddDeviceCertificateMetadata = exports.AddDeviceCertificateRequest = exports.ListDeviceCertificatesResponse = exports.ListDeviceCertificatesRequest = exports.DeleteDeviceMetadata = exports.DeleteDeviceRequest = exports.UpdateDeviceMetadata = exports.UpdateDeviceRequest_TopicAliasesEntry = exports.UpdateDeviceRequest = exports.CreateDeviceMetadata = exports.CreateDeviceRequest_Certificate = exports.CreateDeviceRequest_TopicAliasesEntry = exports.CreateDeviceRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.GetByNameDeviceRequest = exports.GetDeviceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const device_1 = require("../../../../../yandex/cloud/iot/devices/v1/device");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.iot.devices.v1";
const baseGetDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest",
    deviceId: "",
    deviceView: 0,
};
exports.GetDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.deviceView !== 0) {
            writer.uint32(16).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDeviceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.deviceView = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDeviceRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.deviceView =
            object.deviceView !== undefined && object.deviceView !== null
                ? (0, device_1.deviceViewFromJSON)(object.deviceView)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.deviceView !== undefined &&
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetDeviceRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.deviceView = (_b = object.deviceView) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDeviceRequest.$type, exports.GetDeviceRequest);
const baseGetByNameDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest",
    registryId: "",
    deviceName: "",
    deviceView: 0,
};
exports.GetByNameDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.deviceView !== 0) {
            writer.uint32(24).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetByNameDeviceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.deviceView = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetByNameDeviceRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.deviceView =
            object.deviceView !== undefined && object.deviceView !== null
                ? (0, device_1.deviceViewFromJSON)(object.deviceView)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.deviceView !== undefined &&
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetByNameDeviceRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.deviceView = (_c = object.deviceView) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetByNameDeviceRequest.$type, exports.GetByNameDeviceRequest);
const baseListDevicesRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest",
    pageSize: 0,
    pageToken: "",
    deviceView: 0,
};
exports.ListDevicesRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== undefined) {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.deviceView !== 0) {
            writer.uint32(40).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDevicesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.deviceView = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDevicesRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.deviceView =
            object.deviceView !== undefined && object.deviceView !== null
                ? (0, device_1.deviceViewFromJSON)(object.deviceView)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.deviceView !== undefined &&
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListDevicesRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : undefined;
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : undefined;
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        message.deviceView = (_e = object.deviceView) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicesRequest.$type, exports.ListDevicesRequest);
const baseListDevicesResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse",
    nextPageToken: "",
};
exports.ListDevicesResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.devices) {
            device_1.Device.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDevicesResponse);
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.devices.push(device_1.Device.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDevicesResponse);
        message.devices = ((_a = object.devices) !== null && _a !== void 0 ? _a : []).map((e) => device_1.Device.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.devices) {
            obj.devices = message.devices.map((e) => e ? device_1.Device.toJSON(e) : undefined);
        }
        else {
            obj.devices = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDevicesResponse);
        message.devices = ((_a = object.devices) === null || _a === void 0 ? void 0 : _a.map((e) => device_1.Device.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicesResponse.$type, exports.ListDevicesResponse);
const baseCreateDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest",
    registryId: "",
    name: "",
    description: "",
    password: "",
};
exports.CreateDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.certificates) {
            exports.CreateDeviceRequest_Certificate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.CreateDeviceRequest_TopicAliasesEntry.encode({
                $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.password !== "") {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDeviceRequest);
        message.certificates = [];
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.certificates.push(exports.CreateDeviceRequest_Certificate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    const entry5 = exports.CreateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.password = reader.string();
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
        const message = Object.assign({}, baseCreateDeviceRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.certificates = ((_a = object.certificates) !== null && _a !== void 0 ? _a : []).map((e) => exports.CreateDeviceRequest_Certificate.fromJSON(e));
        message.topicAliases = Object.entries((_b = object.topicAliases) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.CreateDeviceRequest_Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateDeviceRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.certificates =
            ((_d = object.certificates) === null || _d === void 0 ? void 0 : _d.map((e) => exports.CreateDeviceRequest_Certificate.fromPartial(e))) || [];
        message.topicAliases = Object.entries((_e = object.topicAliases) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.password = (_f = object.password) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest.$type, exports.CreateDeviceRequest);
const baseCreateDeviceRequest_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
    key: "",
    value: "",
};
exports.CreateDeviceRequest_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry",
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
        const message = Object.assign({}, baseCreateDeviceRequest_TopicAliasesEntry);
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
        const message = Object.assign({}, baseCreateDeviceRequest_TopicAliasesEntry);
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
        const message = Object.assign({}, baseCreateDeviceRequest_TopicAliasesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest_TopicAliasesEntry.$type, exports.CreateDeviceRequest_TopicAliasesEntry);
const baseCreateDeviceRequest_Certificate = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate",
    certificateData: "",
};
exports.CreateDeviceRequest_Certificate = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateData !== "") {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDeviceRequest_Certificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDeviceRequest_Certificate);
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDeviceRequest_Certificate);
        message.certificateData = (_a = object.certificateData) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest_Certificate.$type, exports.CreateDeviceRequest_Certificate);
const baseCreateDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata",
    deviceId: "",
};
exports.CreateDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDeviceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDeviceMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDeviceMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceMetadata.$type, exports.CreateDeviceMetadata);
const baseUpdateDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest",
    deviceId: "",
    name: "",
    description: "",
};
exports.UpdateDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
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
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.UpdateDeviceRequest_TopicAliasesEntry.encode({
                $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDeviceRequest);
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
                    const entry5 = exports.UpdateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
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
        const message = Object.assign({}, baseUpdateDeviceRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
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
        message.topicAliases = Object.entries((_a = object.topicAliases) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateDeviceRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.topicAliases = Object.entries((_d = object.topicAliases) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceRequest.$type, exports.UpdateDeviceRequest);
const baseUpdateDeviceRequest_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
    key: "",
    value: "",
};
exports.UpdateDeviceRequest_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry",
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
        const message = Object.assign({}, baseUpdateDeviceRequest_TopicAliasesEntry);
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
        const message = Object.assign({}, baseUpdateDeviceRequest_TopicAliasesEntry);
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
        const message = Object.assign({}, baseUpdateDeviceRequest_TopicAliasesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceRequest_TopicAliasesEntry.$type, exports.UpdateDeviceRequest_TopicAliasesEntry);
const baseUpdateDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata",
    deviceId: "",
};
exports.UpdateDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDeviceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDeviceMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateDeviceMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceMetadata.$type, exports.UpdateDeviceMetadata);
const baseDeleteDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest",
    deviceId: "",
};
exports.DeleteDeviceRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDeviceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDeviceRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDeviceRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceRequest.$type, exports.DeleteDeviceRequest);
const baseDeleteDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata",
    deviceId: "",
};
exports.DeleteDeviceMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDeviceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDeviceMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDeviceMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceMetadata.$type, exports.DeleteDeviceMetadata);
const baseListDeviceCertificatesRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest",
    deviceId: "",
};
exports.ListDeviceCertificatesRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDeviceCertificatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDeviceCertificatesRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListDeviceCertificatesRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceCertificatesRequest.$type, exports.ListDeviceCertificatesRequest);
const baseListDeviceCertificatesResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse",
};
exports.ListDeviceCertificatesResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            device_1.DeviceCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDeviceCertificatesResponse);
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(device_1.DeviceCertificate.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDeviceCertificatesResponse);
        message.certificates = ((_a = object.certificates) !== null && _a !== void 0 ? _a : []).map((e) => device_1.DeviceCertificate.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? device_1.DeviceCertificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListDeviceCertificatesResponse);
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => device_1.DeviceCertificate.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceCertificatesResponse.$type, exports.ListDeviceCertificatesResponse);
const baseAddDeviceCertificateRequest = {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest",
    deviceId: "",
    certificateData: "",
};
exports.AddDeviceCertificateRequest = {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.certificateData !== "") {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDeviceCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDeviceCertificateRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddDeviceCertificateRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.certificateData = (_b = object.certificateData) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDeviceCertificateRequest.$type, exports.AddDeviceCertificateRequest);
const baseAddDeviceCertificateMetadata = {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata",
    deviceId: "",
    fingerprint: "",
};
exports.AddDeviceCertificateMetadata = {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDeviceCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDeviceCertificateMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddDeviceCertificateMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDeviceCertificateMetadata.$type, exports.AddDeviceCertificateMetadata);
const baseDeleteDeviceCertificateRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest",
    deviceId: "",
    fingerprint: "",
};
exports.DeleteDeviceCertificateRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDeviceCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDeviceCertificateRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDeviceCertificateRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceCertificateRequest.$type, exports.DeleteDeviceCertificateRequest);
const baseDeleteDeviceCertificateMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata",
    deviceId: "",
    fingerprint: "",
};
exports.DeleteDeviceCertificateMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDeviceCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDeviceCertificateMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDeviceCertificateMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceCertificateMetadata.$type, exports.DeleteDeviceCertificateMetadata);
const baseListDevicePasswordsRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest",
    deviceId: "",
};
exports.ListDevicePasswordsRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDevicePasswordsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDevicePasswordsRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListDevicePasswordsRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicePasswordsRequest.$type, exports.ListDevicePasswordsRequest);
const baseListDevicePasswordsResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse",
};
exports.ListDevicePasswordsResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passwords) {
            device_1.DevicePassword.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDevicePasswordsResponse);
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(device_1.DevicePassword.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListDevicePasswordsResponse);
        message.passwords = ((_a = object.passwords) !== null && _a !== void 0 ? _a : []).map((e) => device_1.DevicePassword.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e ? device_1.DevicePassword.toJSON(e) : undefined);
        }
        else {
            obj.passwords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListDevicePasswordsResponse);
        message.passwords =
            ((_a = object.passwords) === null || _a === void 0 ? void 0 : _a.map((e) => device_1.DevicePassword.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicePasswordsResponse.$type, exports.ListDevicePasswordsResponse);
const baseAddDevicePasswordRequest = {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest",
    deviceId: "",
    password: "",
};
exports.AddDevicePasswordRequest = {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDevicePasswordRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDevicePasswordRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddDevicePasswordRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDevicePasswordRequest.$type, exports.AddDevicePasswordRequest);
const baseAddDevicePasswordMetadata = {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata",
    deviceId: "",
    passwordId: "",
};
exports.AddDevicePasswordMetadata = {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddDevicePasswordMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddDevicePasswordMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddDevicePasswordMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDevicePasswordMetadata.$type, exports.AddDevicePasswordMetadata);
const baseDeleteDevicePasswordRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest",
    deviceId: "",
    passwordId: "",
};
exports.DeleteDevicePasswordRequest = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDevicePasswordRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDevicePasswordRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDevicePasswordRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDevicePasswordRequest.$type, exports.DeleteDevicePasswordRequest);
const baseDeleteDevicePasswordMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata",
    deviceId: "",
    passwordId: "",
};
exports.DeleteDevicePasswordMetadata = {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDevicePasswordMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDevicePasswordMetadata);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDevicePasswordMetadata);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDevicePasswordMetadata.$type, exports.DeleteDevicePasswordMetadata);
const baseListDeviceOperationsRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest",
    deviceId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListDeviceOperationsRequest = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
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
        const message = Object.assign({}, baseListDeviceOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
        const message = Object.assign({}, baseListDeviceOperationsRequest);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
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
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListDeviceOperationsRequest);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceOperationsRequest.$type, exports.ListDeviceOperationsRequest);
const baseListDeviceOperationsResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse",
    nextPageToken: "",
};
exports.ListDeviceOperationsResponse = {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse",
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
        const message = Object.assign({}, baseListDeviceOperationsResponse);
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
        const message = Object.assign({}, baseListDeviceOperationsResponse);
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
        const message = Object.assign({}, baseListDeviceOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceOperationsResponse.$type, exports.ListDeviceOperationsResponse);
/** A set of methods for managing devices. */
exports.DeviceServiceService = {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(device_1.Device.encode(value).finish()),
        responseDeserialize: (value) => device_1.Device.decode(value),
    },
    getByName: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetByNameDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetByNameDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(device_1.Device.encode(value).finish()),
        responseDeserialize: (value) => device_1.Device.decode(value),
    },
    /** Retrieves the list of devices in the specified registry. */
    list: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDevicesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDevicesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDevicesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDevicesResponse.decode(value),
    },
    /** Creates a device in the specified registry. */
    create: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified device. */
    update: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified device. */
    delete: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDeviceCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDeviceCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDeviceCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDeviceCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified device certificate. */
    deleteCertificate: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDevicePasswordsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDevicePasswordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDevicePasswordsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDevicePasswordsResponse.decode(value),
    },
    /** Adds password for the specified device. */
    addPassword: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified device. */
    listOperations: {
        path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDeviceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDeviceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDeviceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDeviceOperationsResponse.decode(value),
    },
};
exports.DeviceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DeviceServiceService, "yandex.cloud.iot.devices.v1.DeviceService");
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
