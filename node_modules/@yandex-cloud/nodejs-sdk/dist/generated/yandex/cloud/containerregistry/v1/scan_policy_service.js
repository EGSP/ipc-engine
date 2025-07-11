"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanPolicyServiceClient = exports.ScanPolicyServiceService = exports.DeleteScanPolicyMetadata = exports.UpdateScanPolicyMetadata = exports.CreateScanPolicyMetadata = exports.DeleteScanPolicyRequest = exports.UpdateScanPolicyRequest = exports.CreateScanPolicyRequest = exports.GetScanPolicyByRegistryRequest = exports.GetScanPolicyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const scan_policy_1 = require("../../../../yandex/cloud/containerregistry/v1/scan_policy");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseGetScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest",
    scanPolicyId: "",
};
exports.GetScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetScanPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetScanPolicyRequest);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetScanPolicyRequest);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetScanPolicyRequest.$type, exports.GetScanPolicyRequest);
const baseGetScanPolicyByRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest",
    registryId: "",
};
exports.GetScanPolicyByRegistryRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanPolicyByRegistryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetScanPolicyByRegistryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetScanPolicyByRegistryRequest);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetScanPolicyByRegistryRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetScanPolicyByRegistryRequest.$type, exports.GetScanPolicyByRegistryRequest);
const baseCreateScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest",
    registryId: "",
    name: "",
    description: "",
};
exports.CreateScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyRequest",
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
        if (message.rules !== undefined) {
            scan_policy_1.ScanRules.encode(message.rules, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateScanPolicyRequest);
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
                    message.rules = scan_policy_1.ScanRules.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateScanPolicyRequest);
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
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? scan_policy_1.ScanRules.fromJSON(object.rules)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.rules !== undefined &&
            (obj.rules = message.rules ? scan_policy_1.ScanRules.toJSON(message.rules) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateScanPolicyRequest);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? scan_policy_1.ScanRules.fromPartial(object.rules)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateScanPolicyRequest.$type, exports.CreateScanPolicyRequest);
const baseUpdateScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest",
    scanPolicyId: "",
    name: "",
    description: "",
};
exports.UpdateScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
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
        if (message.rules !== undefined) {
            scan_policy_1.ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateScanPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
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
                    message.rules = scan_policy_1.ScanRules.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateScanPolicyRequest);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
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
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? scan_policy_1.ScanRules.fromJSON(object.rules)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.rules !== undefined &&
            (obj.rules = message.rules ? scan_policy_1.ScanRules.toJSON(message.rules) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateScanPolicyRequest);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? scan_policy_1.ScanRules.fromPartial(object.rules)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateScanPolicyRequest.$type, exports.UpdateScanPolicyRequest);
const baseDeleteScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest",
    scanPolicyId: "",
};
exports.DeleteScanPolicyRequest = {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteScanPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteScanPolicyRequest);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteScanPolicyRequest);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteScanPolicyRequest.$type, exports.DeleteScanPolicyRequest);
const baseCreateScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata",
    scanPolicyId: "",
};
exports.CreateScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.CreateScanPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateScanPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateScanPolicyMetadata);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateScanPolicyMetadata);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateScanPolicyMetadata.$type, exports.CreateScanPolicyMetadata);
const baseUpdateScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata",
    scanPolicyId: "",
};
exports.UpdateScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.UpdateScanPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateScanPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateScanPolicyMetadata);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateScanPolicyMetadata);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateScanPolicyMetadata.$type, exports.UpdateScanPolicyMetadata);
const baseDeleteScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata",
    scanPolicyId: "",
};
exports.DeleteScanPolicyMetadata = {
    $type: "yandex.cloud.containerregistry.v1.DeleteScanPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanPolicyId !== "") {
            writer.uint32(10).string(message.scanPolicyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteScanPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanPolicyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteScanPolicyMetadata);
        message.scanPolicyId =
            object.scanPolicyId !== undefined && object.scanPolicyId !== null
                ? String(object.scanPolicyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanPolicyId !== undefined &&
            (obj.scanPolicyId = message.scanPolicyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteScanPolicyMetadata);
        message.scanPolicyId = (_a = object.scanPolicyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteScanPolicyMetadata.$type, exports.DeleteScanPolicyMetadata);
/** A set of methods for managing scan policy resources. */
exports.ScanPolicyServiceService = {
    /** Returns the specified scan policy. */
    get: {
        path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetScanPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetScanPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scan_policy_1.ScanPolicy.encode(value).finish()),
        responseDeserialize: (value) => scan_policy_1.ScanPolicy.decode(value),
    },
    /** Returns scan policy for the registry if any exists. */
    getByRegistry: {
        path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/GetByRegistry",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetScanPolicyByRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetScanPolicyByRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scan_policy_1.ScanPolicy.encode(value).finish()),
        responseDeserialize: (value) => scan_policy_1.ScanPolicy.decode(value),
    },
    /** Creates a scan policy for the specified registry. */
    create: {
        path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateScanPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateScanPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified scan policy. */
    update: {
        path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateScanPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateScanPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified scan policy. */
    delete: {
        path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteScanPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteScanPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ScanPolicyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ScanPolicyServiceService, "yandex.cloud.containerregistry.v1.ScanPolicyService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
