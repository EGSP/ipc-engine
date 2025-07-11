"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawLogsServiceClient = exports.RawLogsServiceService = exports.UpdateRawLogsMetadata = exports.UpdateRawLogsResponse = exports.UpdateRawLogsRequest = exports.GetRawLogsResponse = exports.GetRawLogsRequest = exports.DeactivateRawLogsMetadata = exports.DeactivateRawLogsRequest = exports.ActivateRawLogsResponse = exports.ActivateRawLogsMetadata = exports.ActivateRawLogsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const raw_logs_1 = require("../../../../yandex/cloud/cdn/v1/raw_logs");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseActivateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest",
    resourceId: "",
};
exports.ActivateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.settings !== undefined) {
            raw_logs_1.RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateRawLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.settings = raw_logs_1.RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateRawLogsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? raw_logs_1.RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateRawLogsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateRawLogsRequest.$type, exports.ActivateRawLogsRequest);
const baseActivateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata",
    resourceId: "",
};
exports.ActivateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateRawLogsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseActivateRawLogsMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateRawLogsMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateRawLogsMetadata.$type, exports.ActivateRawLogsMetadata);
const baseActivateRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse",
    status: 0,
};
exports.ActivateRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.ActivateRawLogsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            raw_logs_1.RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateRawLogsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.settings = raw_logs_1.RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateRawLogsResponse);
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, raw_logs_1.rawLogsStatusFromJSON)(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = (0, raw_logs_1.rawLogsStatusToJSON)(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? raw_logs_1.RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateRawLogsResponse);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateRawLogsResponse.$type, exports.ActivateRawLogsResponse);
const baseDeactivateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest",
    resourceId: "",
};
exports.DeactivateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateRawLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeactivateRawLogsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateRawLogsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateRawLogsRequest.$type, exports.DeactivateRawLogsRequest);
const baseDeactivateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata",
    resourceId: "",
};
exports.DeactivateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.DeactivateRawLogsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateRawLogsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeactivateRawLogsMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateRawLogsMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateRawLogsMetadata.$type, exports.DeactivateRawLogsMetadata);
const baseGetRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.GetRawLogsRequest",
    resourceId: "",
};
exports.GetRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.GetRawLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRawLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetRawLogsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRawLogsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRawLogsRequest.$type, exports.GetRawLogsRequest);
const baseGetRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.GetRawLogsResponse",
    status: 0,
};
exports.GetRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.GetRawLogsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            raw_logs_1.RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRawLogsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.settings = raw_logs_1.RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRawLogsResponse);
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, raw_logs_1.rawLogsStatusFromJSON)(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = (0, raw_logs_1.rawLogsStatusToJSON)(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? raw_logs_1.RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRawLogsResponse);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRawLogsResponse.$type, exports.GetRawLogsResponse);
const baseUpdateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest",
    resourceId: "",
};
exports.UpdateRawLogsRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.settings !== undefined) {
            raw_logs_1.RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRawLogsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.settings = raw_logs_1.RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateRawLogsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? raw_logs_1.RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateRawLogsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRawLogsRequest.$type, exports.UpdateRawLogsRequest);
const baseUpdateRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse",
    status: 0,
};
exports.UpdateRawLogsResponse = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.settings !== undefined) {
            raw_logs_1.RawLogsSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRawLogsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.settings = raw_logs_1.RawLogsSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateRawLogsResponse);
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, raw_logs_1.rawLogsStatusFromJSON)(object.status)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = (0, raw_logs_1.rawLogsStatusToJSON)(message.status));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? raw_logs_1.RawLogsSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateRawLogsResponse);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? raw_logs_1.RawLogsSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRawLogsResponse.$type, exports.UpdateRawLogsResponse);
const baseUpdateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata",
    resourceId: "",
};
exports.UpdateRawLogsMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateRawLogsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRawLogsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseUpdateRawLogsMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateRawLogsMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRawLogsMetadata.$type, exports.UpdateRawLogsMetadata);
exports.RawLogsServiceService = {
    activate: {
        path: "/yandex.cloud.cdn.v1.RawLogsService/Activate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateRawLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    deactivate: {
        path: "/yandex.cloud.cdn.v1.RawLogsService/Deactivate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeactivateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeactivateRawLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    get: {
        path: "/yandex.cloud.cdn.v1.RawLogsService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRawLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetRawLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetRawLogsResponse.decode(value),
    },
    update: {
        path: "/yandex.cloud.cdn.v1.RawLogsService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRawLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRawLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RawLogsServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RawLogsServiceService, "yandex.cloud.cdn.v1.RawLogsService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
