"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretServiceClient = exports.SecretServiceService = exports.ListSecretOperationsResponse = exports.ListSecretOperationsRequest = exports.CancelVersionDestructionMetadata = exports.CancelVersionDestructionRequest = exports.ScheduleVersionDestructionMetadata = exports.ScheduleVersionDestructionRequest = exports.ListVersionsResponse = exports.ListVersionsRequest = exports.AddVersionMetadata = exports.AddVersionRequest = exports.DeactivateSecretMetadata = exports.DeactivateSecretRequest = exports.ActivateSecretMetadata = exports.ActivateSecretRequest = exports.DeleteSecretMetadata = exports.DeleteSecretRequest = exports.UpdateSecretMetadata = exports.UpdateSecretRequest_LabelsEntry = exports.UpdateSecretRequest = exports.CreateSecretMetadata = exports.CreateSecretRequest_LabelsEntry = exports.CreateSecretRequest = exports.ListSecretsResponse = exports.ListSecretsRequest = exports.GetSecretRequest = exports.PayloadEntryChange = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const secret_1 = require("../../../../yandex/cloud/lockbox/v1/secret");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.lockbox.v1";
const basePayloadEntryChange = {
    $type: "yandex.cloud.lockbox.v1.PayloadEntryChange",
    key: "",
};
exports.PayloadEntryChange = {
    $type: "yandex.cloud.lockbox.v1.PayloadEntryChange",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePayloadEntryChange);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePayloadEntryChange);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.textValue =
            object.textValue !== undefined && object.textValue !== null
                ? String(object.textValue)
                : undefined;
        message.binaryValue =
            object.binaryValue !== undefined && object.binaryValue !== null
                ? Buffer.from(bytesFromBase64(object.binaryValue))
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePayloadEntryChange);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.textValue = (_b = object.textValue) !== null && _b !== void 0 ? _b : undefined;
        message.binaryValue = (_c = object.binaryValue) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PayloadEntryChange.$type, exports.PayloadEntryChange);
const baseGetSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.GetSecretRequest",
    secretId: "",
};
exports.GetSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.GetSecretRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSecretRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSecretRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSecretRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSecretRequest.$type, exports.GetSecretRequest);
const baseListSecretsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListSecretsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSecretsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListSecretsRequest",
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
        const message = Object.assign({}, baseListSecretsRequest);
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
        const message = Object.assign({}, baseListSecretsRequest);
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
        const message = Object.assign({}, baseListSecretsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecretsRequest.$type, exports.ListSecretsRequest);
const baseListSecretsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListSecretsResponse",
    nextPageToken: "",
};
exports.ListSecretsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListSecretsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.secrets) {
            secret_1.Secret.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSecretsResponse);
        message.secrets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secrets.push(secret_1.Secret.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSecretsResponse);
        message.secrets = ((_a = object.secrets) !== null && _a !== void 0 ? _a : []).map((e) => secret_1.Secret.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) => e ? secret_1.Secret.toJSON(e) : undefined);
        }
        else {
            obj.secrets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSecretsResponse);
        message.secrets = ((_a = object.secrets) === null || _a === void 0 ? void 0 : _a.map((e) => secret_1.Secret.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecretsResponse.$type, exports.ListSecretsResponse);
const baseCreateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest",
    folderId: "",
    name: "",
    description: "",
    kmsKeyId: "",
    versionDescription: "",
    deletionProtection: false,
};
exports.CreateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest",
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
            exports.CreateSecretRequest_LabelsEntry.encode({
                $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.kmsKeyId !== "") {
            writer.uint32(42).string(message.kmsKeyId);
        }
        if (message.versionDescription !== "") {
            writer.uint32(50).string(message.versionDescription);
        }
        for (const v of message.versionPayloadEntries) {
            exports.PayloadEntryChange.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSecretRequest);
        message.labels = {};
        message.versionPayloadEntries = [];
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
                    const entry4 = exports.CreateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.kmsKeyId = reader.string();
                    break;
                case 6:
                    message.versionDescription = reader.string();
                    break;
                case 7:
                    message.versionPayloadEntries.push(exports.PayloadEntryChange.decode(reader, reader.uint32()));
                    break;
                case 8:
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
        var _a, _b;
        const message = Object.assign({}, baseCreateSecretRequest);
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
        message.kmsKeyId =
            object.kmsKeyId !== undefined && object.kmsKeyId !== null
                ? String(object.kmsKeyId)
                : "";
        message.versionDescription =
            object.versionDescription !== undefined &&
                object.versionDescription !== null
                ? String(object.versionDescription)
                : "";
        message.versionPayloadEntries = ((_b = object.versionPayloadEntries) !== null && _b !== void 0 ? _b : []).map((e) => exports.PayloadEntryChange.fromJSON(e));
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
        message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
        message.versionDescription !== undefined &&
            (obj.versionDescription = message.versionDescription);
        if (message.versionPayloadEntries) {
            obj.versionPayloadEntries = message.versionPayloadEntries.map((e) => e ? exports.PayloadEntryChange.toJSON(e) : undefined);
        }
        else {
            obj.versionPayloadEntries = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateSecretRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.kmsKeyId = (_e = object.kmsKeyId) !== null && _e !== void 0 ? _e : "";
        message.versionDescription = (_f = object.versionDescription) !== null && _f !== void 0 ? _f : "";
        message.versionPayloadEntries =
            ((_g = object.versionPayloadEntries) === null || _g === void 0 ? void 0 : _g.map((e) => exports.PayloadEntryChange.fromPartial(e))) || [];
        message.deletionProtection = (_h = object.deletionProtection) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecretRequest.$type, exports.CreateSecretRequest);
const baseCreateSecretRequest_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSecretRequest_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSecretRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSecretRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSecretRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecretRequest_LabelsEntry.$type, exports.CreateSecretRequest_LabelsEntry);
const baseCreateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata",
    secretId: "",
    versionId: "",
};
exports.CreateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.CreateSecretMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSecretMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSecretMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateSecretMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecretMetadata.$type, exports.CreateSecretMetadata);
const baseUpdateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest",
    secretId: "",
    name: "",
    description: "",
    deletionProtection: false,
};
exports.UpdateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
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
            exports.UpdateSecretRequest_LabelsEntry.encode({
                $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecretRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
                    const entry5 = exports.UpdateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
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
        const message = Object.assign({}, baseUpdateSecretRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
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
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
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
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateSecretRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
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
        message.deletionProtection = (_e = object.deletionProtection) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecretRequest.$type, exports.UpdateSecretRequest);
const baseUpdateSecretRequest_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSecretRequest_LabelsEntry = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSecretRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecretRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecretRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecretRequest_LabelsEntry.$type, exports.UpdateSecretRequest_LabelsEntry);
const baseUpdateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata",
    secretId: "",
};
exports.UpdateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.UpdateSecretMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecretMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSecretMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSecretMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecretMetadata.$type, exports.UpdateSecretMetadata);
const baseDeleteSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest",
    secretId: "",
};
exports.DeleteSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSecretRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSecretRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSecretRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSecretRequest.$type, exports.DeleteSecretRequest);
const baseDeleteSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata",
    secretId: "",
};
exports.DeleteSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.DeleteSecretMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSecretMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSecretMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSecretMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSecretMetadata.$type, exports.DeleteSecretMetadata);
const baseActivateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest",
    secretId: "",
};
exports.ActivateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateSecretRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateSecretRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateSecretRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateSecretRequest.$type, exports.ActivateSecretRequest);
const baseActivateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata",
    secretId: "",
};
exports.ActivateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.ActivateSecretMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateSecretMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateSecretMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateSecretMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateSecretMetadata.$type, exports.ActivateSecretMetadata);
const baseDeactivateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest",
    secretId: "",
};
exports.DeactivateSecretRequest = {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateSecretRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeactivateSecretRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateSecretRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateSecretRequest.$type, exports.DeactivateSecretRequest);
const baseDeactivateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata",
    secretId: "",
};
exports.DeactivateSecretMetadata = {
    $type: "yandex.cloud.lockbox.v1.DeactivateSecretMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateSecretMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeactivateSecretMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateSecretMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateSecretMetadata.$type, exports.DeactivateSecretMetadata);
const baseAddVersionRequest = {
    $type: "yandex.cloud.lockbox.v1.AddVersionRequest",
    secretId: "",
    description: "",
    baseVersionId: "",
};
exports.AddVersionRequest = {
    $type: "yandex.cloud.lockbox.v1.AddVersionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.payloadEntries) {
            exports.PayloadEntryChange.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.baseVersionId !== "") {
            writer.uint32(34).string(message.baseVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddVersionRequest);
        message.payloadEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.payloadEntries.push(exports.PayloadEntryChange.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.baseVersionId = reader.string();
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
        const message = Object.assign({}, baseAddVersionRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.payloadEntries = ((_a = object.payloadEntries) !== null && _a !== void 0 ? _a : []).map((e) => exports.PayloadEntryChange.fromJSON(e));
        message.baseVersionId =
            object.baseVersionId !== undefined && object.baseVersionId !== null
                ? String(object.baseVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.payloadEntries) {
            obj.payloadEntries = message.payloadEntries.map((e) => e ? exports.PayloadEntryChange.toJSON(e) : undefined);
        }
        else {
            obj.payloadEntries = [];
        }
        message.baseVersionId !== undefined &&
            (obj.baseVersionId = message.baseVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAddVersionRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.payloadEntries =
            ((_c = object.payloadEntries) === null || _c === void 0 ? void 0 : _c.map((e) => exports.PayloadEntryChange.fromPartial(e))) ||
                [];
        message.baseVersionId = (_d = object.baseVersionId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddVersionRequest.$type, exports.AddVersionRequest);
const baseAddVersionMetadata = {
    $type: "yandex.cloud.lockbox.v1.AddVersionMetadata",
    secretId: "",
    versionId: "",
};
exports.AddVersionMetadata = {
    $type: "yandex.cloud.lockbox.v1.AddVersionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddVersionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddVersionMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddVersionMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddVersionMetadata.$type, exports.AddVersionMetadata);
const baseListVersionsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListVersionsRequest",
    secretId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListVersionsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListVersionsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
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
        const message = Object.assign({}, baseListVersionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
        const message = Object.assign({}, baseListVersionsRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListVersionsRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsRequest.$type, exports.ListVersionsRequest);
const baseListVersionsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListVersionsResponse",
    nextPageToken: "",
};
exports.ListVersionsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            secret_1.Version.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(secret_1.Version.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions = ((_a = object.versions) !== null && _a !== void 0 ? _a : []).map((e) => secret_1.Version.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? secret_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions =
            ((_a = object.versions) === null || _a === void 0 ? void 0 : _a.map((e) => secret_1.Version.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsResponse.$type, exports.ListVersionsResponse);
const baseScheduleVersionDestructionRequest = {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest",
    secretId: "",
    versionId: "",
};
exports.ScheduleVersionDestructionRequest = {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.pendingPeriod !== undefined) {
            duration_1.Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScheduleVersionDestructionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.pendingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScheduleVersionDestructionRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.pendingPeriod =
            object.pendingPeriod !== undefined && object.pendingPeriod !== null
                ? duration_1.Duration.fromJSON(object.pendingPeriod)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.pendingPeriod !== undefined &&
            (obj.pendingPeriod = message.pendingPeriod
                ? duration_1.Duration.toJSON(message.pendingPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseScheduleVersionDestructionRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.pendingPeriod =
            object.pendingPeriod !== undefined && object.pendingPeriod !== null
                ? duration_1.Duration.fromPartial(object.pendingPeriod)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScheduleVersionDestructionRequest.$type, exports.ScheduleVersionDestructionRequest);
const baseScheduleVersionDestructionMetadata = {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata",
    secretId: "",
    versionId: "",
};
exports.ScheduleVersionDestructionMetadata = {
    $type: "yandex.cloud.lockbox.v1.ScheduleVersionDestructionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.destroyAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScheduleVersionDestructionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.destroyAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScheduleVersionDestructionMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.destroyAt =
            object.destroyAt !== undefined && object.destroyAt !== null
                ? fromJsonTimestamp(object.destroyAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseScheduleVersionDestructionMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.destroyAt = (_c = object.destroyAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScheduleVersionDestructionMetadata.$type, exports.ScheduleVersionDestructionMetadata);
const baseCancelVersionDestructionRequest = {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest",
    secretId: "",
    versionId: "",
};
exports.CancelVersionDestructionRequest = {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelVersionDestructionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCancelVersionDestructionRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCancelVersionDestructionRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelVersionDestructionRequest.$type, exports.CancelVersionDestructionRequest);
const baseCancelVersionDestructionMetadata = {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata",
    secretId: "",
    versionId: "",
};
exports.CancelVersionDestructionMetadata = {
    $type: "yandex.cloud.lockbox.v1.CancelVersionDestructionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelVersionDestructionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCancelVersionDestructionMetadata);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCancelVersionDestructionMetadata);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelVersionDestructionMetadata.$type, exports.CancelVersionDestructionMetadata);
const baseListSecretOperationsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest",
    secretId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSecretOperationsRequest = {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== "") {
            writer.uint32(10).string(message.secretId);
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
        const message = Object.assign({}, baseListSecretOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
        const message = Object.assign({}, baseListSecretOperationsRequest);
        message.secretId =
            object.secretId !== undefined && object.secretId !== null
                ? String(object.secretId)
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSecretOperationsRequest);
        message.secretId = (_a = object.secretId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecretOperationsRequest.$type, exports.ListSecretOperationsRequest);
const baseListSecretOperationsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse",
    nextPageToken: "",
};
exports.ListSecretOperationsResponse = {
    $type: "yandex.cloud.lockbox.v1.ListSecretOperationsResponse",
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
        const message = Object.assign({}, baseListSecretOperationsResponse);
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
        const message = Object.assign({}, baseListSecretOperationsResponse);
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
        const message = Object.assign({}, baseListSecretOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecretOperationsResponse.$type, exports.ListSecretOperationsResponse);
/** A set of methods for managing secrets. */
exports.SecretServiceService = {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(secret_1.Secret.encode(value).finish()),
        responseDeserialize: (value) => secret_1.Secret.decode(value),
    },
    /** Retrieves the list of secrets in the specified folder. */
    list: {
        path: "/yandex.cloud.lockbox.v1.SecretService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecretsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecretsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecretsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecretsResponse.decode(value),
    },
    /** Creates a secret in the specified folder. */
    create: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified secret. */
    update: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified secret. */
    delete: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Activates the specified secret. */
    activate: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Activate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deactivates the specified secret. */
    deactivate: {
        path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeactivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeactivateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of versions of the specified secret. */
    listVersions: {
        path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVersionsResponse.decode(value),
    },
    /** Adds new version based on a previous one. */
    addVersion: {
        path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: {
        path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ScheduleVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ScheduleVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: {
        path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified secret. */
    listOperations: {
        path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecretOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecretOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecretOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecretOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: {
        path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the secret. */
    setAccessBindings: {
        path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the secret. */
    updateAccessBindings: {
        path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.SecretServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SecretServiceService, "yandex.cloud.lockbox.v1.SecretService");
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
