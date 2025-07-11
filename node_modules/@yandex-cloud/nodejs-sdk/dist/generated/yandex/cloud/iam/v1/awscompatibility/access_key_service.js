"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessKeyServiceClient = exports.AccessKeyServiceService = exports.ListAccessKeyOperationsResponse = exports.ListAccessKeyOperationsRequest = exports.DeleteAccessKeyMetadata = exports.DeleteAccessKeyRequest = exports.UpdateAccessKeyMetadata = exports.UpdateAccessKeyRequest = exports.CreateAccessKeyResponse = exports.CreateAccessKeyRequest = exports.ListAccessKeysResponse = exports.ListAccessKeysRequest = exports.GetAccessKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const access_key_1 = require("../../../../../yandex/cloud/iam/v1/awscompatibility/access_key");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.iam.v1.awscompatibility";
const baseGetAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest",
    accessKeyId: "",
};
exports.GetAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAccessKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAccessKeyRequest);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAccessKeyRequest);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAccessKeyRequest.$type, exports.GetAccessKeyRequest);
const baseListAccessKeysRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest",
    serviceAccountId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAccessKeysRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest",
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
        const message = Object.assign({}, baseListAccessKeysRequest);
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
        const message = Object.assign({}, baseListAccessKeysRequest);
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
        const message = Object.assign({}, baseListAccessKeysRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeysRequest.$type, exports.ListAccessKeysRequest);
const baseListAccessKeysResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse",
    nextPageToken: "",
};
exports.ListAccessKeysResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accessKeys) {
            access_key_1.AccessKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAccessKeysResponse);
        message.accessKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeys.push(access_key_1.AccessKey.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAccessKeysResponse);
        message.accessKeys = ((_a = object.accessKeys) !== null && _a !== void 0 ? _a : []).map((e) => access_key_1.AccessKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accessKeys) {
            obj.accessKeys = message.accessKeys.map((e) => e ? access_key_1.AccessKey.toJSON(e) : undefined);
        }
        else {
            obj.accessKeys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListAccessKeysResponse);
        message.accessKeys =
            ((_a = object.accessKeys) === null || _a === void 0 ? void 0 : _a.map((e) => access_key_1.AccessKey.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeysResponse.$type, exports.ListAccessKeysResponse);
const baseCreateAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest",
    serviceAccountId: "",
    description: "",
};
exports.CreateAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAccessKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateAccessKeyRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateAccessKeyRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAccessKeyRequest.$type, exports.CreateAccessKeyRequest);
const baseCreateAccessKeyResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse",
    secret: "",
};
exports.CreateAccessKeyResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKey !== undefined) {
            access_key_1.AccessKey.encode(message.accessKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== "") {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAccessKeyResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = access_key_1.AccessKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateAccessKeyResponse);
        message.accessKey =
            object.accessKey !== undefined && object.accessKey !== null
                ? access_key_1.AccessKey.fromJSON(object.accessKey)
                : undefined;
        message.secret =
            object.secret !== undefined && object.secret !== null
                ? String(object.secret)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKey !== undefined &&
            (obj.accessKey = message.accessKey
                ? access_key_1.AccessKey.toJSON(message.accessKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateAccessKeyResponse);
        message.accessKey =
            object.accessKey !== undefined && object.accessKey !== null
                ? access_key_1.AccessKey.fromPartial(object.accessKey)
                : undefined;
        message.secret = (_a = object.secret) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAccessKeyResponse.$type, exports.CreateAccessKeyResponse);
const baseUpdateAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest",
    accessKeyId: "",
    description: "",
};
exports.UpdateAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAccessKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAccessKeyRequest);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateAccessKeyRequest);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessKeyRequest.$type, exports.UpdateAccessKeyRequest);
const baseUpdateAccessKeyMetadata = {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata",
    accessKeyId: "",
};
exports.UpdateAccessKeyMetadata = {
    $type: "yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAccessKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAccessKeyMetadata);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAccessKeyMetadata);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessKeyMetadata.$type, exports.UpdateAccessKeyMetadata);
const baseDeleteAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest",
    accessKeyId: "",
};
exports.DeleteAccessKeyRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAccessKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAccessKeyRequest);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAccessKeyRequest);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAccessKeyRequest.$type, exports.DeleteAccessKeyRequest);
const baseDeleteAccessKeyMetadata = {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata",
    accessKeyId: "",
};
exports.DeleteAccessKeyMetadata = {
    $type: "yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAccessKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAccessKeyMetadata);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAccessKeyMetadata);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAccessKeyMetadata.$type, exports.DeleteAccessKeyMetadata);
const baseListAccessKeyOperationsRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest",
    accessKeyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAccessKeyOperationsRequest = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
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
        const message = Object.assign({}, baseListAccessKeyOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
        const message = Object.assign({}, baseListAccessKeyOperationsRequest);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
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
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListAccessKeyOperationsRequest);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeyOperationsRequest.$type, exports.ListAccessKeyOperationsRequest);
const baseListAccessKeyOperationsResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse",
    nextPageToken: "",
};
exports.ListAccessKeyOperationsResponse = {
    $type: "yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse",
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
        const message = Object.assign({}, baseListAccessKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAccessKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAccessKeyOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeyOperationsResponse.$type, exports.ListAccessKeyOperationsResponse);
/** A set of methods for managing access keys. */
exports.AccessKeyServiceService = {
    /** Retrieves the list of access keys for the specified service account. */
    list: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAccessKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAccessKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAccessKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAccessKeysResponse.decode(value),
    },
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_key_1.AccessKey.encode(value).finish()),
        responseDeserialize: (value) => access_key_1.AccessKey.decode(value),
    },
    /** Creates an access key for the specified service account. */
    create: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateAccessKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateAccessKeyResponse.decode(value),
    },
    /** Updates the specified access key. */
    update: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified access key. */
    delete: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified access key. */
    listOperations: {
        path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAccessKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAccessKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAccessKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAccessKeyOperationsResponse.decode(value),
    },
};
exports.AccessKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AccessKeyServiceService, "yandex.cloud.iam.v1.awscompatibility.AccessKeyService");
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
