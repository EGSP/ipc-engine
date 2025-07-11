"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricSignatureKeyServiceClient = exports.AsymmetricSignatureKeyServiceService = exports.ListAsymmetricSignatureKeyOperationsResponse = exports.ListAsymmetricSignatureKeyOperationsRequest = exports.DeleteAsymmetricSignatureKeyMetadata = exports.DeleteAsymmetricSignatureKeyRequest = exports.UpdateAsymmetricSignatureKeyMetadata = exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry = exports.UpdateAsymmetricSignatureKeyRequest = exports.ListAsymmetricSignatureKeysResponse = exports.ListAsymmetricSignatureKeysRequest = exports.GetAsymmetricSignatureKeyRequest = exports.CreateAsymmetricSignatureKeyMetadata = exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry = exports.CreateAsymmetricSignatureKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const asymmetric_signature_key_1 = require("../../../../../yandex/cloud/kms/v1/asymmetricsignature/asymmetric_signature_key");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
const baseCreateAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest",
    folderId: "",
    name: "",
    description: "",
    signatureAlgorithm: 0,
    deletionProtection: false,
};
exports.CreateAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest",
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
            exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.signatureAlgorithm !== 0) {
            writer.uint32(40).int32(message.signatureAlgorithm);
        }
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest);
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
                    const entry4 = exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.signatureAlgorithm = reader.int32();
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest);
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
        message.signatureAlgorithm =
            object.signatureAlgorithm !== undefined &&
                object.signatureAlgorithm !== null
                ? (0, asymmetric_signature_key_1.asymmetricSignatureAlgorithmFromJSON)(object.signatureAlgorithm)
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
        message.signatureAlgorithm !== undefined &&
            (obj.signatureAlgorithm = (0, asymmetric_signature_key_1.asymmetricSignatureAlgorithmToJSON)(message.signatureAlgorithm));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.signatureAlgorithm = (_e = object.signatureAlgorithm) !== null && _e !== void 0 ? _e : 0;
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricSignatureKeyRequest.$type, exports.CreateAsymmetricSignatureKeyRequest);
const baseCreateAsymmetricSignatureKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry.$type, exports.CreateAsymmetricSignatureKeyRequest_LabelsEntry);
const baseCreateAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata",
    keyId: "",
};
exports.CreateAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.CreateAsymmetricSignatureKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseCreateAsymmetricSignatureKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAsymmetricSignatureKeyMetadata.$type, exports.CreateAsymmetricSignatureKeyMetadata);
const baseGetAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest",
    keyId: "",
};
exports.GetAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.GetAsymmetricSignatureKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAsymmetricSignatureKeyRequest);
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
        const message = Object.assign({}, baseGetAsymmetricSignatureKeyRequest);
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
        const message = Object.assign({}, baseGetAsymmetricSignatureKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAsymmetricSignatureKeyRequest.$type, exports.GetAsymmetricSignatureKeyRequest);
const baseListAsymmetricSignatureKeysRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAsymmetricSignatureKeysRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysRequest",
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeysRequest);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeysRequest);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeysRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricSignatureKeysRequest.$type, exports.ListAsymmetricSignatureKeysRequest);
const baseListAsymmetricSignatureKeysResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse",
    nextPageToken: "",
};
exports.ListAsymmetricSignatureKeysResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            asymmetric_signature_key_1.AsymmetricSignatureKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAsymmetricSignatureKeysResponse);
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(asymmetric_signature_key_1.AsymmetricSignatureKey.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeysResponse);
        message.keys = ((_a = object.keys) !== null && _a !== void 0 ? _a : []).map((e) => asymmetric_signature_key_1.AsymmetricSignatureKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? asymmetric_signature_key_1.AsymmetricSignatureKey.toJSON(e) : undefined);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeysResponse);
        message.keys =
            ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => asymmetric_signature_key_1.AsymmetricSignatureKey.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricSignatureKeysResponse.$type, exports.ListAsymmetricSignatureKeysResponse);
const baseUpdateAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest",
    keyId: "",
    name: "",
    description: "",
    status: 0,
    deletionProtection: false,
};
exports.UpdateAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest",
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
            exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest);
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
                    const entry6 = exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest);
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
                ? (0, asymmetric_signature_key_1.asymmetricSignatureKey_StatusFromJSON)(object.status)
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
            (obj.status = (0, asymmetric_signature_key_1.asymmetricSignatureKey_StatusToJSON)(message.status));
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricSignatureKeyRequest.$type, exports.UpdateAsymmetricSignatureKeyRequest);
const baseUpdateAsymmetricSignatureKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry.$type, exports.UpdateAsymmetricSignatureKeyRequest_LabelsEntry);
const baseUpdateAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata",
    keyId: "",
};
exports.UpdateAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.UpdateAsymmetricSignatureKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseUpdateAsymmetricSignatureKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAsymmetricSignatureKeyMetadata.$type, exports.UpdateAsymmetricSignatureKeyMetadata);
const baseDeleteAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest",
    keyId: "",
};
exports.DeleteAsymmetricSignatureKeyRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyRequest);
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
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyRequest);
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
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAsymmetricSignatureKeyRequest.$type, exports.DeleteAsymmetricSignatureKeyRequest);
const baseDeleteAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata",
    keyId: "",
};
exports.DeleteAsymmetricSignatureKeyMetadata = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.DeleteAsymmetricSignatureKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyMetadata);
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
        const message = Object.assign({}, baseDeleteAsymmetricSignatureKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAsymmetricSignatureKeyMetadata.$type, exports.DeleteAsymmetricSignatureKeyMetadata);
const baseListAsymmetricSignatureKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAsymmetricSignatureKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsRequest",
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsRequest);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsRequest);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricSignatureKeyOperationsRequest.$type, exports.ListAsymmetricSignatureKeyOperationsRequest);
const baseListAsymmetricSignatureKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse",
    nextPageToken: "",
};
exports.ListAsymmetricSignatureKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.ListAsymmetricSignatureKeyOperationsResponse",
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsResponse);
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
        const message = Object.assign({}, baseListAsymmetricSignatureKeyOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAsymmetricSignatureKeyOperationsResponse.$type, exports.ListAsymmetricSignatureKeyOperationsResponse);
/** Set of methods for managing asymmetric signature keys. */
exports.AsymmetricSignatureKeyServiceService = {
    /**
     * control plane
     * Creates an asymmetric KMS key in the specified folder.
     */
    create: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAsymmetricSignatureKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAsymmetricSignatureKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified asymmetric KMS key.
     *
     *  To get the list of available asymmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAsymmetricSignatureKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAsymmetricSignatureKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(asymmetric_signature_key_1.AsymmetricSignatureKey.encode(value).finish()),
        responseDeserialize: (value) => asymmetric_signature_key_1.AsymmetricSignatureKey.decode(value),
    },
    /** Returns the list of asymmetric KMS keys in the specified folder. */
    list: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAsymmetricSignatureKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAsymmetricSignatureKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAsymmetricSignatureKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAsymmetricSignatureKeysResponse.decode(value),
    },
    /** Updates the specified asymmetric KMS key. */
    update: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAsymmetricSignatureKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAsymmetricSignatureKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified asymmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [AsymmetricSignatureKeyService.Get] and [AsymmetricSignatureKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAsymmetricSignatureKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAsymmetricSignatureKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified asymmetric KMS key. */
    listOperations: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAsymmetricSignatureKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAsymmetricSignatureKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAsymmetricSignatureKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAsymmetricSignatureKeyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the key. */
    setAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified key. */
    updateAccessBindings: {
        path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AsymmetricSignatureKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AsymmetricSignatureKeyServiceService, "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService");
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
