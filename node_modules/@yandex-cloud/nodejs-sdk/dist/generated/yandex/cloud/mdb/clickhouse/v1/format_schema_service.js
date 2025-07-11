"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatSchemaServiceClient = exports.FormatSchemaServiceService = exports.DeleteFormatSchemaMetadata = exports.DeleteFormatSchemaRequest = exports.UpdateFormatSchemaMetadata = exports.UpdateFormatSchemaRequest = exports.CreateFormatSchemaMetadata = exports.CreateFormatSchemaRequest = exports.ListFormatSchemasResponse = exports.ListFormatSchemasRequest = exports.GetFormatSchemaRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const format_schema_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
const baseGetFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
};
exports.GetFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetFormatSchemaRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFormatSchemaRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFormatSchemaRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetFormatSchemaRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFormatSchemaRequest.$type, exports.GetFormatSchemaRequest);
const baseListFormatSchemasRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListFormatSchemasRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        const message = Object.assign({}, baseListFormatSchemasRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseListFormatSchemasRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListFormatSchemasRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFormatSchemasRequest.$type, exports.ListFormatSchemasRequest);
const baseListFormatSchemasResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse",
    nextPageToken: "",
};
exports.ListFormatSchemasResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListFormatSchemasResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.formatSchemas) {
            format_schema_1.FormatSchema.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFormatSchemasResponse);
        message.formatSchemas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.formatSchemas.push(format_schema_1.FormatSchema.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFormatSchemasResponse);
        message.formatSchemas = ((_a = object.formatSchemas) !== null && _a !== void 0 ? _a : []).map((e) => format_schema_1.FormatSchema.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.formatSchemas) {
            obj.formatSchemas = message.formatSchemas.map((e) => e ? format_schema_1.FormatSchema.toJSON(e) : undefined);
        }
        else {
            obj.formatSchemas = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFormatSchemasResponse);
        message.formatSchemas =
            ((_a = object.formatSchemas) === null || _a === void 0 ? void 0 : _a.map((e) => format_schema_1.FormatSchema.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFormatSchemasResponse.$type, exports.ListFormatSchemasResponse);
const baseCreateFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
    type: 0,
    uri: "",
};
exports.CreateFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== "") {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFormatSchemaRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateFormatSchemaRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, format_schema_1.formatSchemaTypeFromJSON)(object.type)
                : 0;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.type !== undefined &&
            (obj.type = (0, format_schema_1.formatSchemaTypeToJSON)(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateFormatSchemaRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.uri = (_d = object.uri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFormatSchemaRequest.$type, exports.CreateFormatSchemaRequest);
const baseCreateFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata",
    clusterId: "",
    formatSchemaName: "",
};
exports.CreateFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateFormatSchemaMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFormatSchemaMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateFormatSchemaMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateFormatSchemaMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFormatSchemaMetadata.$type, exports.CreateFormatSchemaMetadata);
const baseUpdateFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
    uri: "",
};
exports.UpdateFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.uri !== "") {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFormatSchemaRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateFormatSchemaRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateFormatSchemaRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFormatSchemaRequest.$type, exports.UpdateFormatSchemaRequest);
const baseUpdateFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata",
    clusterId: "",
    formatSchemaName: "",
};
exports.UpdateFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateFormatSchemaMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFormatSchemaMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateFormatSchemaMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateFormatSchemaMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFormatSchemaMetadata.$type, exports.UpdateFormatSchemaMetadata);
const baseDeleteFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest",
    clusterId: "",
    formatSchemaName: "",
};
exports.DeleteFormatSchemaRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFormatSchemaRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFormatSchemaRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteFormatSchemaRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFormatSchemaRequest.$type, exports.DeleteFormatSchemaRequest);
const baseDeleteFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata",
    clusterId: "",
    formatSchemaName: "",
};
exports.DeleteFormatSchemaMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteFormatSchemaMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== "") {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFormatSchemaMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFormatSchemaMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.formatSchemaName =
            object.formatSchemaName !== undefined && object.formatSchemaName !== null
                ? String(object.formatSchemaName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteFormatSchemaMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.formatSchemaName = (_b = object.formatSchemaName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFormatSchemaMetadata.$type, exports.DeleteFormatSchemaMetadata);
exports.FormatSchemaServiceService = {
    get: {
        path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(format_schema_1.FormatSchema.encode(value).finish()),
        responseDeserialize: (value) => format_schema_1.FormatSchema.decode(value),
    },
    list: {
        path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFormatSchemasRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFormatSchemasRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFormatSchemasResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFormatSchemasResponse.decode(value),
    },
    create: {
        path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.FormatSchemaServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FormatSchemaServiceService, "yandex.cloud.mdb.clickhouse.v1.FormatSchemaService");
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
