"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricEncryptionKeyServiceClient = exports.AsymmetricEncryptionKeyServiceService = exports.ListAsymmetricEncryptionKeyOperationsResponse = exports.ListAsymmetricEncryptionKeyOperationsRequest = exports.DeleteAsymmetricEncryptionKeyMetadata = exports.DeleteAsymmetricEncryptionKeyRequest = exports.UpdateAsymmetricEncryptionKeyMetadata = exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry = exports.UpdateAsymmetricEncryptionKeyRequest = exports.ListAsymmetricEncryptionKeysResponse = exports.ListAsymmetricEncryptionKeysRequest = exports.GetAsymmetricEncryptionKeyRequest = exports.CreateAsymmetricEncryptionKeyMetadata = exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry = exports.CreateAsymmetricEncryptionKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const asymmetric_encryption_key_1 = require("../../../../../yandex/cloud/kms/v1/asymmetricencryption/asymmetric_encryption_key");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
const baseCreateAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest",
    folderId: "",
    name: "",
    description: "",
    encryptionAlgorithm: 0,
    deletionProtection: false,
};
exports.CreateAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest",
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
            exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.encryptionAlgorithm !== 0) {
            writer.uint32(40).int32(message.encryptionAlgorithm);
        }
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest);
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
                    const entry4 = exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.encryptionAlgorithm = reader.int32();
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
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest);
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
        message.encryptionAlgorithm =
            object.encryptionAlgorithm !== undefined &&
                object.encryptionAlgorithm !== null
                ? (0, asymmetric_encryption_key_1.asymmetricEncryptionAlgorithmFromJSON)(object.encryptionAlgorithm)
                : 0;
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
        message.encryptionAlgorithm !== undefined &&
            (obj.encryptionAlgorithm = (0, asymmetric_encryption_key_1.asymmetricEncryptionAlgorithmToJSON)(message.encryptionAlgorithm));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.encryptionAlgorithm = (_e = object.encryptionAlgorithm) !== null && _e !== void 0 ? _e : 0;
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricEncryptionKeyRequest.$type, exports.CreateAsymmetricEncryptionKeyRequest);
const baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry.$type, exports.CreateAsymmetricEncryptionKeyRequest_LabelsEntry);
const baseCreateAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata",
    keyId: "",
};
exports.CreateAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.CreateAsymmetricEncryptionKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateAsymmetricEncryptionKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricEncryptionKeyMetadata.$type, exports.CreateAsymmetricEncryptionKeyMetadata);
const baseGetAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest",
    keyId: "",
};
exports.GetAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.GetAsymmetricEncryptionKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAsymmetricEncryptionKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAsymmetricEncryptionKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAsymmetricEncryptionKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAsymmetricEncryptionKeyRequest.$type, exports.GetAsymmetricEncryptionKeyRequest);
const baseListAsymmetricEncryptionKeysRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAsymmetricEncryptionKeysRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysRequest",
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysRequest);
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysRequest);
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricEncryptionKeysRequest.$type, exports.ListAsymmetricEncryptionKeysRequest);
const baseListAsymmetricEncryptionKeysResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse",
    nextPageToken: "",
};
exports.ListAsymmetricEncryptionKeysResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            asymmetric_encryption_key_1.AsymmetricEncryptionKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysResponse);
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(asymmetric_encryption_key_1.AsymmetricEncryptionKey.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysResponse);
        message.keys = ((_a = object.keys) !== null && _a !== void 0 ? _a : []).map((e) => asymmetric_encryption_key_1.AsymmetricEncryptionKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? asymmetric_encryption_key_1.AsymmetricEncryptionKey.toJSON(e) : undefined);
        }
        else {
            obj.keys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListAsymmetricEncryptionKeysResponse);
        message.keys =
            ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => asymmetric_encryption_key_1.AsymmetricEncryptionKey.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricEncryptionKeysResponse.$type, exports.ListAsymmetricEncryptionKeysResponse);
const baseUpdateAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest",
    keyId: "",
    name: "",
    description: "",
    status: 0,
    deletionProtection: false,
};
exports.UpdateAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
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
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
                    message.status = reader.int32();
                    break;
                case 6:
                    const entry6 = exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
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
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
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
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, asymmetric_encryption_key_1.asymmetricEncryptionKey_StatusFromJSON)(object.status)
                : 0;
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = (0, asymmetric_encryption_key_1.asymmetricEncryptionKey_StatusToJSON)(message.status));
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
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricEncryptionKeyRequest.$type, exports.UpdateAsymmetricEncryptionKeyRequest);
const baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry.$type, exports.UpdateAsymmetricEncryptionKeyRequest_LabelsEntry);
const baseUpdateAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata",
    keyId: "",
};
exports.UpdateAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.UpdateAsymmetricEncryptionKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAsymmetricEncryptionKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricEncryptionKeyMetadata.$type, exports.UpdateAsymmetricEncryptionKeyMetadata);
const baseDeleteAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest",
    keyId: "",
};
exports.DeleteAsymmetricEncryptionKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAsymmetricEncryptionKeyRequest.$type, exports.DeleteAsymmetricEncryptionKeyRequest);
const baseDeleteAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata",
    keyId: "",
};
exports.DeleteAsymmetricEncryptionKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.DeleteAsymmetricEncryptionKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAsymmetricEncryptionKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAsymmetricEncryptionKeyMetadata.$type, exports.DeleteAsymmetricEncryptionKeyMetadata);
const baseListAsymmetricEncryptionKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAsymmetricEncryptionKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricEncryptionKeyOperationsRequest.$type, exports.ListAsymmetricEncryptionKeyOperationsRequest);
const baseListAsymmetricEncryptionKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse",
    nextPageToken: "",
};
exports.ListAsymmetricEncryptionKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.ListAsymmetricEncryptionKeyOperationsResponse",
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAsymmetricEncryptionKeyOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricEncryptionKeyOperationsResponse.$type, exports.ListAsymmetricEncryptionKeyOperationsResponse);
/** Set of methods for managing asymmetric KMS keys. */
exports.AsymmetricEncryptionKeyServiceService = {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAsymmetricEncryptionKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAsymmetricEncryptionKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAsymmetricEncryptionKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAsymmetricEncryptionKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(asymmetric_encryption_key_1.AsymmetricEncryptionKey.encode(value).finish()),
        responseDeserialize: (value) => asymmetric_encryption_key_1.AsymmetricEncryptionKey.decode(value),
    },
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAsymmetricEncryptionKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAsymmetricEncryptionKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAsymmetricEncryptionKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAsymmetricEncryptionKeysResponse.decode(value),
    },
    /** Updates the specified asymmetric KMS key. */
    update: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAsymmetricEncryptionKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAsymmetricEncryptionKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricEncryptionKeyService.Get] and [AsymmetricEncryptionKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAsymmetricEncryptionKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAsymmetricEncryptionKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAsymmetricEncryptionKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAsymmetricEncryptionKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAsymmetricEncryptionKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAsymmetricEncryptionKeyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the key. */
    setAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified key. */
    updateAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AsymmetricEncryptionKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AsymmetricEncryptionKeyServiceService, "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService");
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
