"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAccountServiceClient = exports.ServiceAccountServiceService = exports.ListServiceAccountOperationsResponse = exports.ListServiceAccountOperationsRequest = exports.DeleteServiceAccountMetadata = exports.DeleteServiceAccountRequest = exports.UpdateServiceAccountMetadata = exports.UpdateServiceAccountRequest_LabelsEntry = exports.UpdateServiceAccountRequest = exports.CreateServiceAccountMetadata = exports.CreateServiceAccountRequest_LabelsEntry = exports.CreateServiceAccountRequest = exports.ListServiceAccountsResponse = exports.ListServiceAccountsRequest = exports.GetServiceAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const service_account_1 = require("../../../../yandex/cloud/iam/v1/service_account");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.iam.v1";
const baseGetServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.GetServiceAccountRequest",
    serviceAccountId: "",
};
exports.GetServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.GetServiceAccountRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetServiceAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetServiceAccountRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetServiceAccountRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetServiceAccountRequest.$type, exports.GetServiceAccountRequest);
const baseListServiceAccountsRequest = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListServiceAccountsRequest = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountsRequest",
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
        const message = Object.assign({}, baseListServiceAccountsRequest);
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
        const message = Object.assign({}, baseListServiceAccountsRequest);
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
        const message = Object.assign({}, baseListServiceAccountsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServiceAccountsRequest.$type, exports.ListServiceAccountsRequest);
const baseListServiceAccountsResponse = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountsResponse",
    nextPageToken: "",
};
exports.ListServiceAccountsResponse = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.serviceAccounts) {
            service_account_1.ServiceAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListServiceAccountsResponse);
        message.serviceAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccounts.push(service_account_1.ServiceAccount.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListServiceAccountsResponse);
        message.serviceAccounts = ((_a = object.serviceAccounts) !== null && _a !== void 0 ? _a : []).map((e) => service_account_1.ServiceAccount.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.serviceAccounts) {
            obj.serviceAccounts = message.serviceAccounts.map((e) => e ? service_account_1.ServiceAccount.toJSON(e) : undefined);
        }
        else {
            obj.serviceAccounts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListServiceAccountsResponse);
        message.serviceAccounts =
            ((_a = object.serviceAccounts) === null || _a === void 0 ? void 0 : _a.map((e) => service_account_1.ServiceAccount.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServiceAccountsResponse.$type, exports.ListServiceAccountsResponse);
const baseCreateServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest",
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
            exports.CreateServiceAccountRequest_LabelsEntry.encode({
                $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateServiceAccountRequest);
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
                    const entry4 = exports.CreateServiceAccountRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
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
        const message = Object.assign({}, baseCreateServiceAccountRequest);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateServiceAccountRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateServiceAccountRequest.$type, exports.CreateServiceAccountRequest);
const baseCreateServiceAccountRequest_LabelsEntry = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateServiceAccountRequest_LabelsEntry = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateServiceAccountRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateServiceAccountRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateServiceAccountRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateServiceAccountRequest_LabelsEntry.$type, exports.CreateServiceAccountRequest_LabelsEntry);
const baseCreateServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountMetadata",
    serviceAccountId: "",
};
exports.CreateServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.CreateServiceAccountMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateServiceAccountMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateServiceAccountMetadata);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateServiceAccountMetadata);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateServiceAccountMetadata.$type, exports.CreateServiceAccountMetadata);
const baseUpdateServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest",
    serviceAccountId: "",
    name: "",
    description: "",
};
exports.UpdateServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
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
            exports.UpdateServiceAccountRequest_LabelsEntry.encode({
                $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateServiceAccountRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
                    const entry5 = exports.UpdateServiceAccountRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateServiceAccountRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
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
        const message = Object.assign({}, baseUpdateServiceAccountRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateServiceAccountRequest.$type, exports.UpdateServiceAccountRequest);
const baseUpdateServiceAccountRequest_LabelsEntry = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateServiceAccountRequest_LabelsEntry = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateServiceAccountRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateServiceAccountRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateServiceAccountRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateServiceAccountRequest_LabelsEntry.$type, exports.UpdateServiceAccountRequest_LabelsEntry);
const baseUpdateServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountMetadata",
    serviceAccountId: "",
};
exports.UpdateServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.UpdateServiceAccountMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateServiceAccountMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateServiceAccountMetadata);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateServiceAccountMetadata);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateServiceAccountMetadata.$type, exports.UpdateServiceAccountMetadata);
const baseDeleteServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.DeleteServiceAccountRequest",
    serviceAccountId: "",
};
exports.DeleteServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.DeleteServiceAccountRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteServiceAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteServiceAccountRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteServiceAccountRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteServiceAccountRequest.$type, exports.DeleteServiceAccountRequest);
const baseDeleteServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.DeleteServiceAccountMetadata",
    serviceAccountId: "",
};
exports.DeleteServiceAccountMetadata = {
    $type: "yandex.cloud.iam.v1.DeleteServiceAccountMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteServiceAccountMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteServiceAccountMetadata);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteServiceAccountMetadata);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteServiceAccountMetadata.$type, exports.DeleteServiceAccountMetadata);
const baseListServiceAccountOperationsRequest = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsRequest",
    serviceAccountId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListServiceAccountOperationsRequest = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
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
        const message = Object.assign({}, baseListServiceAccountOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
        const message = Object.assign({}, baseListServiceAccountOperationsRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListServiceAccountOperationsRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServiceAccountOperationsRequest.$type, exports.ListServiceAccountOperationsRequest);
const baseListServiceAccountOperationsResponse = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsResponse",
    nextPageToken: "",
};
exports.ListServiceAccountOperationsResponse = {
    $type: "yandex.cloud.iam.v1.ListServiceAccountOperationsResponse",
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
        const message = Object.assign({}, baseListServiceAccountOperationsResponse);
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
        const message = Object.assign({}, baseListServiceAccountOperationsResponse);
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
        const message = Object.assign({}, baseListServiceAccountOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServiceAccountOperationsResponse.$type, exports.ListServiceAccountOperationsResponse);
/** A set of methods for managing ServiceAccount resources. */
exports.ServiceAccountServiceService = {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(service_account_1.ServiceAccount.encode(value).finish()),
        responseDeserialize: (value) => service_account_1.ServiceAccount.decode(value),
    },
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListServiceAccountsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListServiceAccountsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListServiceAccountsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListServiceAccountsResponse.decode(value),
    },
    /** Creates a service account in the specified folder. */
    create: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified service account. */
    update: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified service account. */
    delete: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists access bindings for the specified service account. */
    listAccessBindings: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the service account. */
    setAccessBindings: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified service account. */
    listOperations: {
        path: "/yandex.cloud.iam.v1.ServiceAccountService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListServiceAccountOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListServiceAccountOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListServiceAccountOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListServiceAccountOperationsResponse.decode(value),
    },
};
exports.ServiceAccountServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ServiceAccountServiceService, "yandex.cloud.iam.v1.ServiceAccountService");
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
