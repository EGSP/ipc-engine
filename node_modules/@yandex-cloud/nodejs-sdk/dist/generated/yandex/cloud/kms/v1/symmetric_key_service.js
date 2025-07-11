"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricKeyServiceClient = exports.SymmetricKeyServiceService = exports.ListSymmetricKeyOperationsResponse = exports.ListSymmetricKeyOperationsRequest = exports.CancelSymmetricKeyVersionDestructionMetadata = exports.CancelSymmetricKeyVersionDestructionRequest = exports.ScheduleSymmetricKeyVersionDestructionMetadata = exports.ScheduleSymmetricKeyVersionDestructionRequest = exports.RotateSymmetricKeyMetadata = exports.RotateSymmetricKeyRequest = exports.SetPrimarySymmetricKeyVersionMetadata = exports.SetPrimarySymmetricKeyVersionRequest = exports.DeleteSymmetricKeyMetadata = exports.DeleteSymmetricKeyRequest = exports.UpdateSymmetricKeyMetadata = exports.UpdateSymmetricKeyRequest_LabelsEntry = exports.UpdateSymmetricKeyRequest = exports.ListSymmetricKeyVersionsResponse = exports.ListSymmetricKeyVersionsRequest = exports.ListSymmetricKeysResponse = exports.ListSymmetricKeysRequest = exports.GetSymmetricKeyRequest = exports.CreateSymmetricKeyMetadata = exports.CreateSymmetricKeyRequest_LabelsEntry = exports.CreateSymmetricKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const symmetric_key_1 = require("../../../../yandex/cloud/kms/v1/symmetric_key");
const duration_1 = require("../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.kms.v1";
const baseCreateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest",
    folderId: "",
    name: "",
    description: "",
    defaultAlgorithm: 0,
    deletionProtection: false,
};
exports.CreateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest",
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
            exports.CreateSymmetricKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(40).int32(message.defaultAlgorithm);
        }
        if (message.rotationPeriod !== undefined) {
            duration_1.Duration.encode(message.rotationPeriod, writer.uint32(50).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSymmetricKeyRequest);
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
                    const entry4 = exports.CreateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 6:
                    message.rotationPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateSymmetricKeyRequest);
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
        message.defaultAlgorithm =
            object.defaultAlgorithm !== undefined && object.defaultAlgorithm !== null
                ? (0, symmetric_key_1.symmetricAlgorithmFromJSON)(object.defaultAlgorithm)
                : 0;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromJSON(object.rotationPeriod)
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
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = (0, symmetric_key_1.symmetricAlgorithmToJSON)(message.defaultAlgorithm));
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? duration_1.Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateSymmetricKeyRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.defaultAlgorithm = (_e = object.defaultAlgorithm) !== null && _e !== void 0 ? _e : 0;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromPartial(object.rotationPeriod)
                : undefined;
        message.deletionProtection = (_f = object.deletionProtection) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSymmetricKeyRequest.$type, exports.CreateSymmetricKeyRequest);
const baseCreateSymmetricKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSymmetricKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSymmetricKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSymmetricKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSymmetricKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSymmetricKeyRequest_LabelsEntry.$type, exports.CreateSymmetricKeyRequest_LabelsEntry);
const baseCreateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata",
    keyId: "",
    primaryVersionId: "",
};
exports.CreateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.CreateSymmetricKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.primaryVersionId !== "") {
            writer.uint32(18).string(message.primaryVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSymmetricKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.primaryVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSymmetricKeyMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.primaryVersionId =
            object.primaryVersionId !== undefined && object.primaryVersionId !== null
                ? String(object.primaryVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.primaryVersionId !== undefined &&
            (obj.primaryVersionId = message.primaryVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateSymmetricKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.primaryVersionId = (_b = object.primaryVersionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSymmetricKeyMetadata.$type, exports.CreateSymmetricKeyMetadata);
const baseGetSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest",
    keyId: "",
};
exports.GetSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.GetSymmetricKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSymmetricKeyRequest);
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
        const message = Object.assign({}, baseGetSymmetricKeyRequest);
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
        const message = Object.assign({}, baseGetSymmetricKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSymmetricKeyRequest.$type, exports.GetSymmetricKeyRequest);
const baseListSymmetricKeysRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSymmetricKeysRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysRequest",
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
        const message = Object.assign({}, baseListSymmetricKeysRequest);
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
        const message = Object.assign({}, baseListSymmetricKeysRequest);
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
        const message = Object.assign({}, baseListSymmetricKeysRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeysRequest.$type, exports.ListSymmetricKeysRequest);
const baseListSymmetricKeysResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse",
    nextPageToken: "",
};
exports.ListSymmetricKeysResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            symmetric_key_1.SymmetricKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSymmetricKeysResponse);
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(symmetric_key_1.SymmetricKey.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSymmetricKeysResponse);
        message.keys = ((_a = object.keys) !== null && _a !== void 0 ? _a : []).map((e) => symmetric_key_1.SymmetricKey.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? symmetric_key_1.SymmetricKey.toJSON(e) : undefined);
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
        const message = Object.assign({}, baseListSymmetricKeysResponse);
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => symmetric_key_1.SymmetricKey.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeysResponse.$type, exports.ListSymmetricKeysResponse);
const baseListSymmetricKeyVersionsRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSymmetricKeyVersionsRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest",
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
        const message = Object.assign({}, baseListSymmetricKeyVersionsRequest);
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
        const message = Object.assign({}, baseListSymmetricKeyVersionsRequest);
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
        const message = Object.assign({}, baseListSymmetricKeyVersionsRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeyVersionsRequest.$type, exports.ListSymmetricKeyVersionsRequest);
const baseListSymmetricKeyVersionsResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse",
    nextPageToken: "",
};
exports.ListSymmetricKeyVersionsResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keyVersions) {
            symmetric_key_1.SymmetricKeyVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSymmetricKeyVersionsResponse);
        message.keyVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyVersions.push(symmetric_key_1.SymmetricKeyVersion.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSymmetricKeyVersionsResponse);
        message.keyVersions = ((_a = object.keyVersions) !== null && _a !== void 0 ? _a : []).map((e) => symmetric_key_1.SymmetricKeyVersion.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keyVersions) {
            obj.keyVersions = message.keyVersions.map((e) => e ? symmetric_key_1.SymmetricKeyVersion.toJSON(e) : undefined);
        }
        else {
            obj.keyVersions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSymmetricKeyVersionsResponse);
        message.keyVersions =
            ((_a = object.keyVersions) === null || _a === void 0 ? void 0 : _a.map((e) => symmetric_key_1.SymmetricKeyVersion.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeyVersionsResponse.$type, exports.ListSymmetricKeyVersionsResponse);
const baseUpdateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest",
    keyId: "",
    name: "",
    description: "",
    status: 0,
    defaultAlgorithm: 0,
    deletionProtection: false,
};
exports.UpdateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest",
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
            exports.UpdateSymmetricKeyRequest_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(56).int32(message.defaultAlgorithm);
        }
        if (message.rotationPeriod !== undefined) {
            duration_1.Duration.encode(message.rotationPeriod, writer.uint32(66).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest);
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
                    const entry6 = exports.UpdateSymmetricKeyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 8:
                    message.rotationPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
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
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest);
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
                ? (0, symmetric_key_1.symmetricKey_StatusFromJSON)(object.status)
                : 0;
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.defaultAlgorithm =
            object.defaultAlgorithm !== undefined && object.defaultAlgorithm !== null
                ? (0, symmetric_key_1.symmetricAlgorithmFromJSON)(object.defaultAlgorithm)
                : 0;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromJSON(object.rotationPeriod)
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = (0, symmetric_key_1.symmetricKey_StatusToJSON)(message.status));
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = (0, symmetric_key_1.symmetricAlgorithmToJSON)(message.defaultAlgorithm));
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? duration_1.Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest);
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
        message.defaultAlgorithm = (_f = object.defaultAlgorithm) !== null && _f !== void 0 ? _f : 0;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromPartial(object.rotationPeriod)
                : undefined;
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSymmetricKeyRequest.$type, exports.UpdateSymmetricKeyRequest);
const baseUpdateSymmetricKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSymmetricKeyRequest_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSymmetricKeyRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSymmetricKeyRequest_LabelsEntry.$type, exports.UpdateSymmetricKeyRequest_LabelsEntry);
const baseUpdateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata",
    keyId: "",
};
exports.UpdateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.UpdateSymmetricKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSymmetricKeyMetadata);
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
        const message = Object.assign({}, baseUpdateSymmetricKeyMetadata);
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
        const message = Object.assign({}, baseUpdateSymmetricKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSymmetricKeyMetadata.$type, exports.UpdateSymmetricKeyMetadata);
const baseDeleteSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest",
    keyId: "",
};
exports.DeleteSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSymmetricKeyRequest);
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
        const message = Object.assign({}, baseDeleteSymmetricKeyRequest);
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
        const message = Object.assign({}, baseDeleteSymmetricKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSymmetricKeyRequest.$type, exports.DeleteSymmetricKeyRequest);
const baseDeleteSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata",
    keyId: "",
};
exports.DeleteSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.DeleteSymmetricKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSymmetricKeyMetadata);
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
        const message = Object.assign({}, baseDeleteSymmetricKeyMetadata);
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
        const message = Object.assign({}, baseDeleteSymmetricKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSymmetricKeyMetadata.$type, exports.DeleteSymmetricKeyMetadata);
const baseSetPrimarySymmetricKeyVersionRequest = {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest",
    keyId: "",
    versionId: "",
};
exports.SetPrimarySymmetricKeyVersionRequest = {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetPrimarySymmetricKeyVersionRequest.$type, exports.SetPrimarySymmetricKeyVersionRequest);
const baseSetPrimarySymmetricKeyVersionMetadata = {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata",
    keyId: "",
    versionId: "",
};
exports.SetPrimarySymmetricKeyVersionMetadata = {
    $type: "yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetPrimarySymmetricKeyVersionMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetPrimarySymmetricKeyVersionMetadata.$type, exports.SetPrimarySymmetricKeyVersionMetadata);
const baseRotateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest",
    keyId: "",
};
exports.RotateSymmetricKeyRequest = {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRotateSymmetricKeyRequest);
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
        const message = Object.assign({}, baseRotateSymmetricKeyRequest);
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
        const message = Object.assign({}, baseRotateSymmetricKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RotateSymmetricKeyRequest.$type, exports.RotateSymmetricKeyRequest);
const baseRotateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata",
    keyId: "",
    newPrimaryVersionId: "",
};
exports.RotateSymmetricKeyMetadata = {
    $type: "yandex.cloud.kms.v1.RotateSymmetricKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.newPrimaryVersionId !== "") {
            writer.uint32(18).string(message.newPrimaryVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRotateSymmetricKeyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.newPrimaryVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRotateSymmetricKeyMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.newPrimaryVersionId =
            object.newPrimaryVersionId !== undefined &&
                object.newPrimaryVersionId !== null
                ? String(object.newPrimaryVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.newPrimaryVersionId !== undefined &&
            (obj.newPrimaryVersionId = message.newPrimaryVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRotateSymmetricKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.newPrimaryVersionId = (_b = object.newPrimaryVersionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RotateSymmetricKeyMetadata.$type, exports.RotateSymmetricKeyMetadata);
const baseScheduleSymmetricKeyVersionDestructionRequest = {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest",
    keyId: "",
    versionId: "",
};
exports.ScheduleSymmetricKeyVersionDestructionRequest = {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
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
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.pendingPeriod !== undefined &&
            (obj.pendingPeriod = message.pendingPeriod
                ? duration_1.Duration.toJSON(message.pendingPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.pendingPeriod =
            object.pendingPeriod !== undefined && object.pendingPeriod !== null
                ? duration_1.Duration.fromPartial(object.pendingPeriod)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScheduleSymmetricKeyVersionDestructionRequest.$type, exports.ScheduleSymmetricKeyVersionDestructionRequest);
const baseScheduleSymmetricKeyVersionDestructionMetadata = {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata",
    keyId: "",
    versionId: "",
};
exports.ScheduleSymmetricKeyVersionDestructionMetadata = {
    $type: "yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
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
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseScheduleSymmetricKeyVersionDestructionMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.destroyAt = (_c = object.destroyAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScheduleSymmetricKeyVersionDestructionMetadata.$type, exports.ScheduleSymmetricKeyVersionDestructionMetadata);
const baseCancelSymmetricKeyVersionDestructionRequest = {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest",
    keyId: "",
    versionId: "",
};
exports.CancelSymmetricKeyVersionDestructionRequest = {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelSymmetricKeyVersionDestructionRequest.$type, exports.CancelSymmetricKeyVersionDestructionRequest);
const baseCancelSymmetricKeyVersionDestructionMetadata = {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata",
    keyId: "",
    versionId: "",
};
exports.CancelSymmetricKeyVersionDestructionMetadata = {
    $type: "yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
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
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionMetadata);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCancelSymmetricKeyVersionDestructionMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelSymmetricKeyVersionDestructionMetadata.$type, exports.CancelSymmetricKeyVersionDestructionMetadata);
const baseListSymmetricKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSymmetricKeyOperationsRequest = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest",
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsRequest);
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsRequest);
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeyOperationsRequest.$type, exports.ListSymmetricKeyOperationsRequest);
const baseListSymmetricKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse",
    nextPageToken: "",
};
exports.ListSymmetricKeyOperationsResponse = {
    $type: "yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse",
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsResponse);
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsResponse);
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
        const message = Object.assign({}, baseListSymmetricKeyOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSymmetricKeyOperationsResponse.$type, exports.ListSymmetricKeyOperationsResponse);
/** Set of methods for managing symmetric KMS keys. */
exports.SymmetricKeyServiceService = {
    /** Creates a symmetric KMS key in the specified folder. */
    create: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified symmetric KMS key.
     *
     *  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
     */
    get: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(symmetric_key_1.SymmetricKey.encode(value).finish()),
        responseDeserialize: (value) => symmetric_key_1.SymmetricKey.decode(value),
    },
    /** Returns the list of symmetric KMS keys in the specified folder. */
    list: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSymmetricKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSymmetricKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSymmetricKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSymmetricKeysResponse.decode(value),
    },
    /** Returns the list of versions of the specified symmetric KMS key. */
    listVersions: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSymmetricKeyVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSymmetricKeyVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSymmetricKeyVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSymmetricKeyVersionsResponse.decode(value),
    },
    /** Updates the specified symmetric KMS key. */
    update: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified symmetric KMS key. This action also automatically schedules
     * the destruction of all of the key's versions in 72 hours.
     *
     * The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
     * requests, but can be restored within 72 hours with a request to tech support.
     */
    delete: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Sets the primary version for the specified key. The primary version is used
     * by default for all encrypt/decrypt operations where no version ID is specified.
     */
    setPrimaryVersion: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetPrimarySymmetricKeyVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetPrimarySymmetricKeyVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Schedules the specified key version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ScheduleSymmetricKeyVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ScheduleSymmetricKeyVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelSymmetricKeyVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelSymmetricKeyVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Rotates the specified key: creates a new key version and makes it the primary version.
     * The old version remains available for decryption of ciphertext encrypted with it.
     */
    rotate: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RotateSymmetricKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RotateSymmetricKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified symmetric KMS key. */
    listOperations: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSymmetricKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSymmetricKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSymmetricKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSymmetricKeyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified key. */
    listAccessBindings: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the key. */
    setAccessBindings: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified key. */
    updateAccessBindings: {
        path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.SymmetricKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SymmetricKeyServiceService, "yandex.cloud.kms.v1.SymmetricKeyService");
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
