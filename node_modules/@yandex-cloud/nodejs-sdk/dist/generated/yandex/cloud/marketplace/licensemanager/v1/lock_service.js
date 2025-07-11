"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockServiceClient = exports.LockServiceService = exports.GetLockByInstanceAndResourceRequest = exports.DeleteLockMetadata = exports.DeleteLockRequest = exports.EnsureLockMetadata = exports.CreateLockMetadata = exports.EnsureLockRequest = exports.CreateLockRequest = exports.GetLockRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const lock_1 = require("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
const baseGetLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest",
    lockId: "",
};
exports.GetLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockId !== "") {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLockRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLockRequest);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? String(object.lockId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLockRequest);
        message.lockId = (_a = object.lockId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLockRequest.$type, exports.GetLockRequest);
const baseCreateLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest",
    instanceId: "",
    resourceId: "",
};
exports.CreateLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLockRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateLockRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateLockRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.resourceId = (_b = object.resourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLockRequest.$type, exports.CreateLockRequest);
const baseEnsureLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest",
    instanceId: "",
    resourceId: "",
};
exports.EnsureLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnsureLockRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnsureLockRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEnsureLockRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.resourceId = (_b = object.resourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnsureLockRequest.$type, exports.EnsureLockRequest);
const baseCreateLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata",
    lockId: "",
};
exports.CreateLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.CreateLockMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockId !== "") {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLockMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateLockMetadata);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? String(object.lockId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateLockMetadata);
        message.lockId = (_a = object.lockId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLockMetadata.$type, exports.CreateLockMetadata);
const baseEnsureLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata",
    lockId: "",
};
exports.EnsureLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.EnsureLockMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockId !== "") {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEnsureLockMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEnsureLockMetadata);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? String(object.lockId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseEnsureLockMetadata);
        message.lockId = (_a = object.lockId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EnsureLockMetadata.$type, exports.EnsureLockMetadata);
const baseDeleteLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest",
    lockId: "",
};
exports.DeleteLockRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockId !== "") {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLockRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteLockRequest);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? String(object.lockId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLockRequest);
        message.lockId = (_a = object.lockId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLockRequest.$type, exports.DeleteLockRequest);
const baseDeleteLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata",
    lockId: "",
};
exports.DeleteLockMetadata = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.DeleteLockMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockId !== "") {
            writer.uint32(10).string(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLockMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteLockMetadata);
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? String(object.lockId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = message.lockId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLockMetadata);
        message.lockId = (_a = object.lockId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLockMetadata.$type, exports.DeleteLockMetadata);
const baseGetLockByInstanceAndResourceRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest",
    instanceId: "",
    resourceId: "",
};
exports.GetLockByInstanceAndResourceRequest = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.GetLockByInstanceAndResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLockByInstanceAndResourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLockByInstanceAndResourceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetLockByInstanceAndResourceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.resourceId = (_b = object.resourceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLockByInstanceAndResourceRequest.$type, exports.GetLockByInstanceAndResourceRequest);
exports.LockServiceService = {
    get: {
        path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLockRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLockRequest.decode(value),
        responseSerialize: (value) => Buffer.from(lock_1.Lock.encode(value).finish()),
        responseDeserialize: (value) => lock_1.Lock.decode(value),
    },
    getByInstanceAndResource: {
        path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLockByInstanceAndResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLockByInstanceAndResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(lock_1.Lock.encode(value).finish()),
        responseDeserialize: (value) => lock_1.Lock.decode(value),
    },
    create: {
        path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLockRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLockRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    ensure: {
        path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.EnsureLockRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.EnsureLockRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteLockRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteLockRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.LockServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LockServiceService, "yandex.cloud.marketplace.licensemanager.v1.LockService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
