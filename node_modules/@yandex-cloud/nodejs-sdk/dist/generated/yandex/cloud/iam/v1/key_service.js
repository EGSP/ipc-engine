"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyServiceClient = exports.KeyServiceService = exports.ListKeyOperationsResponse = exports.ListKeyOperationsRequest = exports.DeleteKeyMetadata = exports.DeleteKeyRequest = exports.UpdateKeyMetadata = exports.UpdateKeyRequest = exports.CreateKeyResponse = exports.CreateKeyRequest = exports.ListKeysResponse = exports.ListKeysRequest = exports.GetKeyRequest = exports.keyFormatToJSON = exports.keyFormatFromJSON = exports.KeyFormat = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const key_1 = require("../../../../yandex/cloud/iam/v1/key");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.iam.v1";
var KeyFormat;
(function (KeyFormat) {
    /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
    KeyFormat[KeyFormat["PEM_FILE"] = 0] = "PEM_FILE";
    KeyFormat[KeyFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyFormat = exports.KeyFormat || (exports.KeyFormat = {}));
function keyFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "PEM_FILE":
            return KeyFormat.PEM_FILE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KeyFormat.UNRECOGNIZED;
    }
}
exports.keyFormatFromJSON = keyFormatFromJSON;
function keyFormatToJSON(object) {
    switch (object) {
        case KeyFormat.PEM_FILE:
            return "PEM_FILE";
        default:
            return "UNKNOWN";
    }
}
exports.keyFormatToJSON = keyFormatToJSON;
const baseGetKeyRequest = {
    $type: "yandex.cloud.iam.v1.GetKeyRequest",
    keyId: "",
    format: 0,
};
exports.GetKeyRequest = {
    $type: "yandex.cloud.iam.v1.GetKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.format = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? keyFormatFromJSON(object.format)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetKeyRequest.$type, exports.GetKeyRequest);
const baseListKeysRequest = {
    $type: "yandex.cloud.iam.v1.ListKeysRequest",
    format: 0,
    serviceAccountId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListKeysRequest = {
    $type: "yandex.cloud.iam.v1.ListKeysRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.format !== 0) {
            writer.uint32(8).int32(message.format);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListKeysRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
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
        const message = Object.assign({}, baseListKeysRequest);
        message.format =
            object.format !== undefined && object.format !== null
                ? keyFormatFromJSON(object.format)
                : 0;
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
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListKeysRequest);
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.serviceAccountId = (_b = object.serviceAccountId) !== null && _b !== void 0 ? _b : "";
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListKeysRequest.$type, exports.ListKeysRequest);
const baseListKeysResponse = {
    $type: "yandex.cloud.iam.v1.ListKeysResponse",
    nextPageToken: "",
};
exports.ListKeysResponse = {
    $type: "yandex.cloud.iam.v1.ListKeysResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            key_1.Key.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListKeysResponse);
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(key_1.Key.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListKeysResponse);
        message.keys = ((_a = object.keys) !== null && _a !== void 0 ? _a : []).map((e) => key_1.Key.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? key_1.Key.toJSON(e) : undefined));
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
        const message = Object.assign({}, baseListKeysResponse);
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => key_1.Key.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListKeysResponse.$type, exports.ListKeysResponse);
const baseCreateKeyRequest = {
    $type: "yandex.cloud.iam.v1.CreateKeyRequest",
    serviceAccountId: "",
    description: "",
    format: 0,
    keyAlgorithm: 0,
};
exports.CreateKeyRequest = {
    $type: "yandex.cloud.iam.v1.CreateKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        if (message.keyAlgorithm !== 0) {
            writer.uint32(32).int32(message.keyAlgorithm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateKeyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.format = reader.int32();
                    break;
                case 4:
                    message.keyAlgorithm = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateKeyRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? keyFormatFromJSON(object.format)
                : 0;
        message.keyAlgorithm =
            object.keyAlgorithm !== undefined && object.keyAlgorithm !== null
                ? (0, key_1.key_AlgorithmFromJSON)(object.keyAlgorithm)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        message.keyAlgorithm !== undefined &&
            (obj.keyAlgorithm = (0, key_1.key_AlgorithmToJSON)(message.keyAlgorithm));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateKeyRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.format = (_c = object.format) !== null && _c !== void 0 ? _c : 0;
        message.keyAlgorithm = (_d = object.keyAlgorithm) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateKeyRequest.$type, exports.CreateKeyRequest);
const baseCreateKeyResponse = {
    $type: "yandex.cloud.iam.v1.CreateKeyResponse",
    privateKey: "",
};
exports.CreateKeyResponse = {
    $type: "yandex.cloud.iam.v1.CreateKeyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined) {
            key_1.Key.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.privateKey !== "") {
            writer.uint32(18).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateKeyResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = key_1.Key.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateKeyResponse);
        message.key =
            object.key !== undefined && object.key !== null
                ? key_1.Key.fromJSON(object.key)
                : undefined;
        message.privateKey =
            object.privateKey !== undefined && object.privateKey !== null
                ? String(object.privateKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = message.key ? key_1.Key.toJSON(message.key) : undefined);
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateKeyResponse);
        message.key =
            object.key !== undefined && object.key !== null
                ? key_1.Key.fromPartial(object.key)
                : undefined;
        message.privateKey = (_a = object.privateKey) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateKeyResponse.$type, exports.CreateKeyResponse);
const baseUpdateKeyRequest = {
    $type: "yandex.cloud.iam.v1.UpdateKeyRequest",
    keyId: "",
    description: "",
};
exports.UpdateKeyRequest = {
    $type: "yandex.cloud.iam.v1.UpdateKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
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
        const message = Object.assign({}, baseUpdateKeyRequest);
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
        const message = Object.assign({}, baseUpdateKeyRequest);
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
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
        message.keyId !== undefined && (obj.keyId = message.keyId);
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
        const message = Object.assign({}, baseUpdateKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateKeyRequest.$type, exports.UpdateKeyRequest);
const baseUpdateKeyMetadata = {
    $type: "yandex.cloud.iam.v1.UpdateKeyMetadata",
    keyId: "",
};
exports.UpdateKeyMetadata = {
    $type: "yandex.cloud.iam.v1.UpdateKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateKeyMetadata);
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
        const message = Object.assign({}, baseUpdateKeyMetadata);
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
        const message = Object.assign({}, baseUpdateKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateKeyMetadata.$type, exports.UpdateKeyMetadata);
const baseDeleteKeyRequest = {
    $type: "yandex.cloud.iam.v1.DeleteKeyRequest",
    keyId: "",
};
exports.DeleteKeyRequest = {
    $type: "yandex.cloud.iam.v1.DeleteKeyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteKeyRequest);
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
        const message = Object.assign({}, baseDeleteKeyRequest);
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
        const message = Object.assign({}, baseDeleteKeyRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteKeyRequest.$type, exports.DeleteKeyRequest);
const baseDeleteKeyMetadata = {
    $type: "yandex.cloud.iam.v1.DeleteKeyMetadata",
    keyId: "",
};
exports.DeleteKeyMetadata = {
    $type: "yandex.cloud.iam.v1.DeleteKeyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteKeyMetadata);
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
        const message = Object.assign({}, baseDeleteKeyMetadata);
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
        const message = Object.assign({}, baseDeleteKeyMetadata);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteKeyMetadata.$type, exports.DeleteKeyMetadata);
const baseListKeyOperationsRequest = {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest",
    keyId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListKeyOperationsRequest = {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsRequest",
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
        const message = Object.assign({}, baseListKeyOperationsRequest);
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
        const message = Object.assign({}, baseListKeyOperationsRequest);
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
        const message = Object.assign({}, baseListKeyOperationsRequest);
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListKeyOperationsRequest.$type, exports.ListKeyOperationsRequest);
const baseListKeyOperationsResponse = {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse",
    nextPageToken: "",
};
exports.ListKeyOperationsResponse = {
    $type: "yandex.cloud.iam.v1.ListKeyOperationsResponse",
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
        const message = Object.assign({}, baseListKeyOperationsResponse);
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
        const message = Object.assign({}, baseListKeyOperationsResponse);
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
        const message = Object.assign({}, baseListKeyOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListKeyOperationsResponse.$type, exports.ListKeyOperationsResponse);
/** A set of methods for managing Key resources. */
exports.KeyServiceService = {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iam.v1.KeyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(key_1.Key.encode(value).finish()),
        responseDeserialize: (value) => key_1.Key.decode(value),
    },
    /** Retrieves the list of Key resources for the specified service account. */
    list: {
        path: "/yandex.cloud.iam.v1.KeyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListKeysResponse.decode(value),
    },
    /** Creates a key pair for the specified service account. */
    create: {
        path: "/yandex.cloud.iam.v1.KeyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateKeyResponse.decode(value),
    },
    /** Updates the specified key pair. */
    update: {
        path: "/yandex.cloud.iam.v1.KeyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified key pair. */
    delete: {
        path: "/yandex.cloud.iam.v1.KeyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified key. */
    listOperations: {
        path: "/yandex.cloud.iam.v1.KeyService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListKeyOperationsResponse.decode(value),
    },
};
exports.KeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.KeyServiceService, "yandex.cloud.iam.v1.KeyService");
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
