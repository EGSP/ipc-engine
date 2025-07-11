"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginServiceClient = exports.OriginServiceService = exports.DeleteOriginMetadata = exports.DeleteOriginRequest = exports.UpdateOriginMetadata = exports.UpdateOriginRequest = exports.CreateOriginMetadata = exports.CreateOriginRequest = exports.ListOriginsResponse = exports.ListOriginsRequest = exports.GetOriginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseGetOriginRequest = {
    $type: "yandex.cloud.cdn.v1.GetOriginRequest",
    folderId: "",
    originId: 0,
};
exports.GetOriginRequest = {
    $type: "yandex.cloud.cdn.v1.GetOriginRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOriginRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOriginRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetOriginRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originId = (_b = object.originId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOriginRequest.$type, exports.GetOriginRequest);
const baseListOriginsRequest = {
    $type: "yandex.cloud.cdn.v1.ListOriginsRequest",
    folderId: "",
    originGroupId: 0,
};
exports.ListOriginsRequest = {
    $type: "yandex.cloud.cdn.v1.ListOriginsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOriginsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListOriginsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListOriginsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginsRequest.$type, exports.ListOriginsRequest);
const baseListOriginsResponse = {
    $type: "yandex.cloud.cdn.v1.ListOriginsResponse",
};
exports.ListOriginsResponse = {
    $type: "yandex.cloud.cdn.v1.ListOriginsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.origins) {
            origin_1.Origin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOriginsResponse);
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.origins.push(origin_1.Origin.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListOriginsResponse);
        message.origins = ((_a = object.origins) !== null && _a !== void 0 ? _a : []).map((e) => origin_1.Origin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.Origin.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListOriginsResponse);
        message.origins = ((_a = object.origins) === null || _a === void 0 ? void 0 : _a.map((e) => origin_1.Origin.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginsResponse.$type, exports.ListOriginsResponse);
const baseCreateOriginRequest = {
    $type: "yandex.cloud.cdn.v1.CreateOriginRequest",
    folderId: "",
    originGroupId: 0,
    source: "",
};
exports.CreateOriginRequest = {
    $type: "yandex.cloud.cdn.v1.CreateOriginRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enabled }, writer.uint32(34).fork()).ldelim();
        }
        if (message.backup !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.backup }, writer.uint32(42).fork()).ldelim();
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateOriginRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.backup = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.meta = origin_1.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateOriginRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : undefined;
        message.backup =
            object.backup !== undefined && object.backup !== null
                ? Boolean(object.backup)
                : undefined;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromJSON(object.meta)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta ? origin_1.OriginMeta.toJSON(message.meta) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateOriginRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.enabled = (_d = object.enabled) !== null && _d !== void 0 ? _d : undefined;
        message.backup = (_e = object.backup) !== null && _e !== void 0 ? _e : undefined;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromPartial(object.meta)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginRequest.$type, exports.CreateOriginRequest);
const baseCreateOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateOriginMetadata",
    originId: 0,
    originGroupId: 0,
};
exports.CreateOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateOriginMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateOriginMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateOriginMetadata);
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateOriginMetadata);
        message.originId = (_a = object.originId) !== null && _a !== void 0 ? _a : 0;
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginMetadata.$type, exports.CreateOriginMetadata);
const baseUpdateOriginRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginRequest",
    folderId: "",
    originId: 0,
    source: "",
    enabled: false,
    backup: false,
};
exports.UpdateOriginRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOriginRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = origin_1.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateOriginRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.backup =
            object.backup !== undefined && object.backup !== null
                ? Boolean(object.backup)
                : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromJSON(object.meta)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta ? origin_1.OriginMeta.toJSON(message.meta) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateOriginRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originId = (_b = object.originId) !== null && _b !== void 0 ? _b : 0;
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.enabled = (_d = object.enabled) !== null && _d !== void 0 ? _d : false;
        message.backup = (_e = object.backup) !== null && _e !== void 0 ? _e : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromPartial(object.meta)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginRequest.$type, exports.UpdateOriginRequest);
const baseUpdateOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata",
    originId: 0,
    originGroupId: 0,
};
exports.UpdateOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateOriginMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOriginMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateOriginMetadata);
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateOriginMetadata);
        message.originId = (_a = object.originId) !== null && _a !== void 0 ? _a : 0;
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginMetadata.$type, exports.UpdateOriginMetadata);
const baseDeleteOriginRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginRequest",
    folderId: "",
    originId: 0,
};
exports.DeleteOriginRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteOriginRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteOriginRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteOriginRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.originId = (_b = object.originId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginRequest.$type, exports.DeleteOriginRequest);
const baseDeleteOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata",
    originId: 0,
};
exports.DeleteOriginMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteOriginMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteOriginMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteOriginMetadata);
        message.originId =
            object.originId !== undefined && object.originId !== null
                ? Number(object.originId)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined &&
            (obj.originId = Math.round(message.originId));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteOriginMetadata);
        message.originId = (_a = object.originId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginMetadata.$type, exports.DeleteOriginMetadata);
/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
exports.OriginServiceService = {
    /** Get origin in origin group. */
    get: {
        path: "/yandex.cloud.cdn.v1.OriginService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(origin_1.Origin.encode(value).finish()),
        responseDeserialize: (value) => origin_1.Origin.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: "/yandex.cloud.cdn.v1.OriginService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOriginsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOriginsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOriginsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOriginsResponse.decode(value),
    },
    /** Creates origin inside origin group. */
    create: {
        path: "/yandex.cloud.cdn.v1.OriginService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified origin from the origin group.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge cache of the resources that
     * use the origin via a [CacheService.Purge] request.
     */
    update: {
        path: "/yandex.cloud.cdn.v1.OriginService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes origin from origin group. */
    delete: {
        path: "/yandex.cloud.cdn.v1.OriginService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OriginServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OriginServiceService, "yandex.cloud.cdn.v1.OriginService");
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
