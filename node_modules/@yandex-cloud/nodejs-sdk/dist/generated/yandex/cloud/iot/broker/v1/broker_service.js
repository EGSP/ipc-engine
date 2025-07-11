"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerServiceClient = exports.BrokerServiceService = exports.ListBrokerOperationsResponse = exports.ListBrokerOperationsRequest = exports.DeleteBrokerPasswordMetadata = exports.DeleteBrokerPasswordRequest = exports.AddBrokerPasswordMetadata = exports.AddBrokerPasswordRequest = exports.ListBrokerPasswordsResponse = exports.ListBrokerPasswordsRequest = exports.DeleteBrokerCertificateMetadata = exports.DeleteBrokerCertificateRequest = exports.AddBrokerCertificateMetadata = exports.AddBrokerCertificateRequest = exports.ListBrokerCertificatesResponse = exports.ListBrokerCertificatesRequest = exports.DeleteBrokerMetadata = exports.DeleteBrokerRequest = exports.UpdateBrokerMetadata = exports.UpdateBrokerRequest_LabelsEntry = exports.UpdateBrokerRequest = exports.CreateBrokerMetadata = exports.CreateBrokerRequest_Certificate = exports.CreateBrokerRequest_LabelsEntry = exports.CreateBrokerRequest = exports.ListBrokersResponse = exports.ListBrokersRequest = exports.GetBrokerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const broker_1 = require("../../../../../yandex/cloud/iot/broker/v1/broker");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.iot.broker.v1";
const baseGetBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest",
    brokerId: "",
};
exports.GetBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.GetBrokerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBrokerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBrokerRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBrokerRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBrokerRequest.$type, exports.GetBrokerRequest);
const baseListBrokersRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListBrokersRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersRequest",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokersRequest);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBrokersRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListBrokersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokersRequest.$type, exports.ListBrokersRequest);
const baseListBrokersResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse",
    nextPageToken: "",
};
exports.ListBrokersResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.brokers) {
            broker_1.Broker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokersResponse);
        message.brokers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokers.push(broker_1.Broker.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBrokersResponse);
        message.brokers = ((_a = object.brokers) !== null && _a !== void 0 ? _a : []).map((e) => broker_1.Broker.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.brokers) {
            obj.brokers = message.brokers.map((e) => e ? broker_1.Broker.toJSON(e) : undefined);
        }
        else {
            obj.brokers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBrokersResponse);
        message.brokers = ((_a = object.brokers) === null || _a === void 0 ? void 0 : _a.map((e) => broker_1.Broker.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokersResponse.$type, exports.ListBrokersResponse);
const baseCreateBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest",
    folderId: "",
    name: "",
    description: "",
    password: "",
};
exports.CreateBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest",
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
            exports.CreateBrokerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.certificates) {
            exports.CreateBrokerRequest_Certificate.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.password !== "") {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBrokerRequest);
        message.labels = {};
        message.certificates = [];
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
                    const entry4 = exports.CreateBrokerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificates.push(exports.CreateBrokerRequest_Certificate.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateBrokerRequest);
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
        message.certificates = ((_b = object.certificates) !== null && _b !== void 0 ? _b : []).map((e) => exports.CreateBrokerRequest_Certificate.fromJSON(e));
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.CreateBrokerRequest_Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateBrokerRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.certificates =
            ((_e = object.certificates) === null || _e === void 0 ? void 0 : _e.map((e) => exports.CreateBrokerRequest_Certificate.fromPartial(e))) || [];
        message.password = (_f = object.password) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBrokerRequest.$type, exports.CreateBrokerRequest);
const baseCreateBrokerRequest_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateBrokerRequest_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateBrokerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateBrokerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateBrokerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBrokerRequest_LabelsEntry.$type, exports.CreateBrokerRequest_LabelsEntry);
const baseCreateBrokerRequest_Certificate = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate",
    certificateData: "",
};
exports.CreateBrokerRequest_Certificate = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerRequest.Certificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateData !== "") {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBrokerRequest_Certificate);
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
        const message = Object.assign({}, baseCreateBrokerRequest_Certificate);
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
        const message = Object.assign({}, baseCreateBrokerRequest_Certificate);
        message.certificateData = (_a = object.certificateData) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBrokerRequest_Certificate.$type, exports.CreateBrokerRequest_Certificate);
const baseCreateBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata",
    brokerId: "",
};
exports.CreateBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.CreateBrokerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBrokerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateBrokerMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateBrokerMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBrokerMetadata.$type, exports.CreateBrokerMetadata);
const baseUpdateBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest",
    brokerId: "",
    name: "",
    description: "",
};
exports.UpdateBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
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
            exports.UpdateBrokerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBrokerRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
                    const entry5 = exports.UpdateBrokerRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateBrokerRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
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
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
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
        const message = Object.assign({}, baseUpdateBrokerRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBrokerRequest.$type, exports.UpdateBrokerRequest);
const baseUpdateBrokerRequest_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateBrokerRequest_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateBrokerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateBrokerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateBrokerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBrokerRequest_LabelsEntry.$type, exports.UpdateBrokerRequest_LabelsEntry);
const baseUpdateBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata",
    brokerId: "",
};
exports.UpdateBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.UpdateBrokerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBrokerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateBrokerMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateBrokerMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBrokerMetadata.$type, exports.UpdateBrokerMetadata);
const baseDeleteBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest",
    brokerId: "",
};
exports.DeleteBrokerRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBrokerRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBrokerRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerRequest.$type, exports.DeleteBrokerRequest);
const baseDeleteBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata",
    brokerId: "",
};
exports.DeleteBrokerMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBrokerMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBrokerMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerMetadata.$type, exports.DeleteBrokerMetadata);
const baseListBrokerCertificatesRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest",
    brokerId: "",
};
exports.ListBrokerCertificatesRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokerCertificatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBrokerCertificatesRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBrokerCertificatesRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerCertificatesRequest.$type, exports.ListBrokerCertificatesRequest);
const baseListBrokerCertificatesResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse",
};
exports.ListBrokerCertificatesResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerCertificatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            broker_1.BrokerCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokerCertificatesResponse);
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(broker_1.BrokerCertificate.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBrokerCertificatesResponse);
        message.certificates = ((_a = object.certificates) !== null && _a !== void 0 ? _a : []).map((e) => broker_1.BrokerCertificate.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? broker_1.BrokerCertificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBrokerCertificatesResponse);
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => broker_1.BrokerCertificate.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerCertificatesResponse.$type, exports.ListBrokerCertificatesResponse);
const baseAddBrokerCertificateRequest = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest",
    brokerId: "",
    certificateData: "",
};
exports.AddBrokerCertificateRequest = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.certificateData !== "") {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBrokerCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseAddBrokerCertificateRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddBrokerCertificateRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.certificateData = (_b = object.certificateData) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBrokerCertificateRequest.$type, exports.AddBrokerCertificateRequest);
const baseAddBrokerCertificateMetadata = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata",
    brokerId: "",
    fingerprint: "",
};
exports.AddBrokerCertificateMetadata = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBrokerCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseAddBrokerCertificateMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddBrokerCertificateMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBrokerCertificateMetadata.$type, exports.AddBrokerCertificateMetadata);
const baseDeleteBrokerCertificateRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest",
    brokerId: "",
    fingerprint: "",
};
exports.DeleteBrokerCertificateRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseDeleteBrokerCertificateRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBrokerCertificateRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerCertificateRequest.$type, exports.DeleteBrokerCertificateRequest);
const baseDeleteBrokerCertificateMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata",
    brokerId: "",
    fingerprint: "",
};
exports.DeleteBrokerCertificateMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseDeleteBrokerCertificateMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBrokerCertificateMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerCertificateMetadata.$type, exports.DeleteBrokerCertificateMetadata);
const baseListBrokerPasswordsRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest",
    brokerId: "",
};
exports.ListBrokerPasswordsRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokerPasswordsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBrokerPasswordsRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBrokerPasswordsRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerPasswordsRequest.$type, exports.ListBrokerPasswordsRequest);
const baseListBrokerPasswordsResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse",
};
exports.ListBrokerPasswordsResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerPasswordsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passwords) {
            broker_1.BrokerPassword.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBrokerPasswordsResponse);
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(broker_1.BrokerPassword.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBrokerPasswordsResponse);
        message.passwords = ((_a = object.passwords) !== null && _a !== void 0 ? _a : []).map((e) => broker_1.BrokerPassword.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e ? broker_1.BrokerPassword.toJSON(e) : undefined);
        }
        else {
            obj.passwords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBrokerPasswordsResponse);
        message.passwords =
            ((_a = object.passwords) === null || _a === void 0 ? void 0 : _a.map((e) => broker_1.BrokerPassword.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerPasswordsResponse.$type, exports.ListBrokerPasswordsResponse);
const baseAddBrokerPasswordRequest = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest",
    brokerId: "",
    password: "",
};
exports.AddBrokerPasswordRequest = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBrokerPasswordRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseAddBrokerPasswordRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddBrokerPasswordRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBrokerPasswordRequest.$type, exports.AddBrokerPasswordRequest);
const baseAddBrokerPasswordMetadata = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata",
    brokerId: "",
    passwordId: "",
};
exports.AddBrokerPasswordMetadata = {
    $type: "yandex.cloud.iot.broker.v1.AddBrokerPasswordMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddBrokerPasswordMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseAddBrokerPasswordMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddBrokerPasswordMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBrokerPasswordMetadata.$type, exports.AddBrokerPasswordMetadata);
const baseDeleteBrokerPasswordRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest",
    brokerId: "",
    passwordId: "",
};
exports.DeleteBrokerPasswordRequest = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerPasswordRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseDeleteBrokerPasswordRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBrokerPasswordRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerPasswordRequest.$type, exports.DeleteBrokerPasswordRequest);
const baseDeleteBrokerPasswordMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata",
    brokerId: "",
    passwordId: "",
};
exports.DeleteBrokerPasswordMetadata = {
    $type: "yandex.cloud.iot.broker.v1.DeleteBrokerPasswordMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.passwordId !== "") {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBrokerPasswordMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseDeleteBrokerPasswordMetadata);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.passwordId =
            object.passwordId !== undefined && object.passwordId !== null
                ? String(object.passwordId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.passwordId !== undefined && (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBrokerPasswordMetadata);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.passwordId = (_b = object.passwordId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBrokerPasswordMetadata.$type, exports.DeleteBrokerPasswordMetadata);
const baseListBrokerOperationsRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest",
    brokerId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListBrokerOperationsRequest = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
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
        const message = Object.assign({}, baseListBrokerOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseListBrokerOperationsRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
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
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListBrokerOperationsRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerOperationsRequest.$type, exports.ListBrokerOperationsRequest);
const baseListBrokerOperationsResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse",
    nextPageToken: "",
};
exports.ListBrokerOperationsResponse = {
    $type: "yandex.cloud.iot.broker.v1.ListBrokerOperationsResponse",
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
        const message = Object.assign({}, baseListBrokerOperationsResponse);
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
        const message = Object.assign({}, baseListBrokerOperationsResponse);
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
        const message = Object.assign({}, baseListBrokerOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBrokerOperationsResponse.$type, exports.ListBrokerOperationsResponse);
/** A set of methods for managing broker. */
exports.BrokerServiceService = {
    /**
     * Returns the specified broker.
     *
     * To get the list of available brokers, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBrokerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBrokerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(broker_1.Broker.encode(value).finish()),
        responseDeserialize: (value) => broker_1.Broker.decode(value),
    },
    /** Retrieves the list of brokers in the specified folder. */
    list: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBrokersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBrokersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBrokersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBrokersResponse.decode(value),
    },
    /** Creates a broker in the specified folder. */
    create: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateBrokerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateBrokerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified broker. */
    update: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBrokerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBrokerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified broker. */
    delete: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBrokerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBrokerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of broker certificates for the specified broker. */
    listCertificates: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/ListCertificates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBrokerCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBrokerCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBrokerCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBrokerCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/AddCertificate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddBrokerCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddBrokerCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified broker certificate. */
    deleteCertificate: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/DeleteCertificate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBrokerCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBrokerCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified broker. */
    listPasswords: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/ListPasswords",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBrokerPasswordsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBrokerPasswordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBrokerPasswordsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBrokerPasswordsResponse.decode(value),
    },
    /** Adds password for the specified broker. */
    addPassword: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/AddPassword",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddBrokerPasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddBrokerPasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/DeletePassword",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBrokerPasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBrokerPasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified broker. */
    listOperations: {
        path: "/yandex.cloud.iot.broker.v1.BrokerService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBrokerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBrokerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBrokerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBrokerOperationsResponse.decode(value),
    },
};
exports.BrokerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BrokerServiceService, "yandex.cloud.iot.broker.v1.BrokerService");
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
