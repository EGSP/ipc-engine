"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayServiceClient = exports.GatewayServiceService = exports.MoveGatewayMetadata = exports.MoveGatewayRequest = exports.DeleteGatewayMetadata = exports.DeleteGatewayRequest = exports.UpdateGatewayMetadata = exports.UpdateGatewayRequest_LabelsEntry = exports.UpdateGatewayRequest = exports.CreateGatewayMetadata = exports.CreateGatewayRequest_LabelsEntry = exports.CreateGatewayRequest = exports.SharedEgressGatewaySpec = exports.ListGatewayOperationsResponse = exports.ListGatewayOperationsRequest = exports.ListGatewaysResponse = exports.ListGatewaysRequest = exports.GetGatewayRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const gateway_1 = require("../../../../yandex/cloud/vpc/v1/gateway");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.vpc.v1";
const baseGetGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.GetGatewayRequest",
    gatewayId: "",
};
exports.GetGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.GetGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetGatewayRequest);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetGatewayRequest);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGatewayRequest.$type, exports.GetGatewayRequest);
const baseListGatewaysRequest = {
    $type: "yandex.cloud.vpc.v1.ListGatewaysRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListGatewaysRequest = {
    $type: "yandex.cloud.vpc.v1.ListGatewaysRequest",
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
        const message = Object.assign({}, baseListGatewaysRequest);
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
        const message = Object.assign({}, baseListGatewaysRequest);
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
        const message = Object.assign({}, baseListGatewaysRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGatewaysRequest.$type, exports.ListGatewaysRequest);
const baseListGatewaysResponse = {
    $type: "yandex.cloud.vpc.v1.ListGatewaysResponse",
    nextPageToken: "",
};
exports.ListGatewaysResponse = {
    $type: "yandex.cloud.vpc.v1.ListGatewaysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.gateways) {
            gateway_1.Gateway.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGatewaysResponse);
        message.gateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gateways.push(gateway_1.Gateway.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGatewaysResponse);
        message.gateways = ((_a = object.gateways) !== null && _a !== void 0 ? _a : []).map((e) => gateway_1.Gateway.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.gateways) {
            obj.gateways = message.gateways.map((e) => e ? gateway_1.Gateway.toJSON(e) : undefined);
        }
        else {
            obj.gateways = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGatewaysResponse);
        message.gateways =
            ((_a = object.gateways) === null || _a === void 0 ? void 0 : _a.map((e) => gateway_1.Gateway.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGatewaysResponse.$type, exports.ListGatewaysResponse);
const baseListGatewayOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest",
    gatewayId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListGatewayOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
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
        const message = Object.assign({}, baseListGatewayOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
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
        const message = Object.assign({}, baseListGatewayOperationsRequest);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
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
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListGatewayOperationsRequest);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGatewayOperationsRequest.$type, exports.ListGatewayOperationsRequest);
const baseListGatewayOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse",
    nextPageToken: "",
};
exports.ListGatewayOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListGatewayOperationsResponse",
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
        const message = Object.assign({}, baseListGatewayOperationsResponse);
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
        const message = Object.assign({}, baseListGatewayOperationsResponse);
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
        const message = Object.assign({}, baseListGatewayOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGatewayOperationsResponse.$type, exports.ListGatewayOperationsResponse);
const baseSharedEgressGatewaySpec = {
    $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec",
};
exports.SharedEgressGatewaySpec = {
    $type: "yandex.cloud.vpc.v1.SharedEgressGatewaySpec",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSharedEgressGatewaySpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseSharedEgressGatewaySpec);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseSharedEgressGatewaySpec);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SharedEgressGatewaySpec.$type, exports.SharedEgressGatewaySpec);
const baseCreateGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest",
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
            exports.CreateGatewayRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.sharedEgressGatewaySpec !== undefined) {
            exports.SharedEgressGatewaySpec.encode(message.sharedEgressGatewaySpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGatewayRequest);
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
                    const entry4 = exports.CreateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.sharedEgressGatewaySpec = exports.SharedEgressGatewaySpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateGatewayRequest);
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined &&
                object.sharedEgressGatewaySpec !== null
                ? exports.SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
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
        message.sharedEgressGatewaySpec !== undefined &&
            (obj.sharedEgressGatewaySpec = message.sharedEgressGatewaySpec
                ? exports.SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateGatewayRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined &&
                object.sharedEgressGatewaySpec !== null
                ? exports.SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGatewayRequest.$type, exports.CreateGatewayRequest);
const baseCreateGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateGatewayRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGatewayRequest_LabelsEntry.$type, exports.CreateGatewayRequest_LabelsEntry);
const baseCreateGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata",
    gatewayId: "",
};
exports.CreateGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGatewayMetadata);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateGatewayMetadata);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGatewayMetadata.$type, exports.CreateGatewayMetadata);
const baseUpdateGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest",
    gatewayId: "",
    name: "",
    description: "",
};
exports.UpdateGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
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
            exports.UpdateGatewayRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.sharedEgressGatewaySpec !== undefined) {
            exports.SharedEgressGatewaySpec.encode(message.sharedEgressGatewaySpec, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGatewayRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
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
                    const entry5 = exports.UpdateGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.sharedEgressGatewaySpec = exports.SharedEgressGatewaySpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateGatewayRequest);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined &&
                object.sharedEgressGatewaySpec !== null
                ? exports.SharedEgressGatewaySpec.fromJSON(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
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
        message.sharedEgressGatewaySpec !== undefined &&
            (obj.sharedEgressGatewaySpec = message.sharedEgressGatewaySpec
                ? exports.SharedEgressGatewaySpec.toJSON(message.sharedEgressGatewaySpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateGatewayRequest);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
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
        message.sharedEgressGatewaySpec =
            object.sharedEgressGatewaySpec !== undefined &&
                object.sharedEgressGatewaySpec !== null
                ? exports.SharedEgressGatewaySpec.fromPartial(object.sharedEgressGatewaySpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGatewayRequest.$type, exports.UpdateGatewayRequest);
const baseUpdateGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateGatewayRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateGatewayRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateGatewayRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGatewayRequest_LabelsEntry.$type, exports.UpdateGatewayRequest_LabelsEntry);
const baseUpdateGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata",
    gatewayId: "",
};
exports.UpdateGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGatewayMetadata);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGatewayMetadata);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGatewayMetadata.$type, exports.UpdateGatewayMetadata);
const baseDeleteGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest",
    gatewayId: "",
};
exports.DeleteGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGatewayRequest);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGatewayRequest);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGatewayRequest.$type, exports.DeleteGatewayRequest);
const baseDeleteGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata",
    gatewayId: "",
};
exports.DeleteGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGatewayMetadata);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGatewayMetadata);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGatewayMetadata.$type, exports.DeleteGatewayMetadata);
const baseMoveGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.MoveGatewayRequest",
    gatewayId: "",
    destinationFolderId: "",
};
exports.MoveGatewayRequest = {
    $type: "yandex.cloud.vpc.v1.MoveGatewayRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveGatewayRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
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
        const message = Object.assign({}, baseMoveGatewayRequest);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
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
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveGatewayRequest);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveGatewayRequest.$type, exports.MoveGatewayRequest);
const baseMoveGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata",
    gatewayId: "",
};
exports.MoveGatewayMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveGatewayMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gatewayId !== "") {
            writer.uint32(10).string(message.gatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveGatewayMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveGatewayMetadata);
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMoveGatewayMetadata);
        message.gatewayId = (_a = object.gatewayId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveGatewayMetadata.$type, exports.MoveGatewayMetadata);
exports.GatewayServiceService = {
    /**
     * Returns the specified Gateway resource.
     *
     * To get the list of all available Gateway resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.vpc.v1.GatewayService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.Gateway.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.Gateway.decode(value),
    },
    /** Retrieves the list of Gateway resources in the specified folder. */
    list: {
        path: "/yandex.cloud.vpc.v1.GatewayService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGatewaysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGatewaysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGatewaysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGatewaysResponse.decode(value),
    },
    /** Creates a gateway in the specified folder. */
    create: {
        path: "/yandex.cloud.vpc.v1.GatewayService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified gateway. */
    update: {
        path: "/yandex.cloud.vpc.v1.GatewayService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified gateway. */
    delete: {
        path: "/yandex.cloud.vpc.v1.GatewayService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified gateway. */
    listOperations: {
        path: "/yandex.cloud.vpc.v1.GatewayService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGatewayOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGatewayOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGatewayOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGatewayOperationsResponse.decode(value),
    },
    /** Move a gateway to another folder */
    move: {
        path: "/yandex.cloud.vpc.v1.GatewayService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.GatewayServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GatewayServiceService, "yandex.cloud.vpc.v1.GatewayService");
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
