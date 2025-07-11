"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinkServiceClient = exports.SinkServiceService = exports.ListSinkOperationsResponse = exports.ListSinkOperationsRequest = exports.DeleteSinkMetadata = exports.DeleteSinkRequest = exports.UpdateSinkMetadata = exports.UpdateSinkRequest_LabelsEntry = exports.UpdateSinkRequest = exports.CreateSinkMetadata = exports.CreateSinkRequest_LabelsEntry = exports.CreateSinkRequest = exports.ListSinksResponse = exports.ListSinksRequest = exports.GetSinkRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const sink_1 = require("../../../../yandex/cloud/logging/v1/sink");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseGetSinkRequest = {
    $type: "yandex.cloud.logging.v1.GetSinkRequest",
    sinkId: "",
};
exports.GetSinkRequest = {
    $type: "yandex.cloud.logging.v1.GetSinkRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSinkRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSinkRequest);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSinkRequest);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSinkRequest.$type, exports.GetSinkRequest);
const baseListSinksRequest = {
    $type: "yandex.cloud.logging.v1.ListSinksRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListSinksRequest = {
    $type: "yandex.cloud.logging.v1.ListSinksRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSinksRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListSinksRequest);
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
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListSinksRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSinksRequest.$type, exports.ListSinksRequest);
const baseListSinksResponse = {
    $type: "yandex.cloud.logging.v1.ListSinksResponse",
    nextPageToken: "",
};
exports.ListSinksResponse = {
    $type: "yandex.cloud.logging.v1.ListSinksResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.sinks) {
            sink_1.Sink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSinksResponse);
        message.sinks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinks.push(sink_1.Sink.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSinksResponse);
        message.sinks = ((_a = object.sinks) !== null && _a !== void 0 ? _a : []).map((e) => sink_1.Sink.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sinks) {
            obj.sinks = message.sinks.map((e) => (e ? sink_1.Sink.toJSON(e) : undefined));
        }
        else {
            obj.sinks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSinksResponse);
        message.sinks = ((_a = object.sinks) === null || _a === void 0 ? void 0 : _a.map((e) => sink_1.Sink.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSinksResponse.$type, exports.ListSinksResponse);
const baseCreateSinkRequest = {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest",
    folderId: "",
    name: "",
    description: "",
    serviceAccountId: "",
};
exports.CreateSinkRequest = {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest",
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
            exports.CreateSinkRequest_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.serviceAccountId !== "") {
            writer.uint32(42).string(message.serviceAccountId);
        }
        if (message.yds !== undefined) {
            sink_1.Sink_Yds.encode(message.yds, writer.uint32(50).fork()).ldelim();
        }
        if (message.s3 !== undefined) {
            sink_1.Sink_S3.encode(message.s3, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSinkRequest);
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
                    const entry4 = exports.CreateSinkRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.serviceAccountId = reader.string();
                    break;
                case 6:
                    message.yds = sink_1.Sink_Yds.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.s3 = sink_1.Sink_S3.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateSinkRequest);
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
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? sink_1.Sink_Yds.fromJSON(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? sink_1.Sink_S3.fromJSON(object.s3)
                : undefined;
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.yds !== undefined &&
            (obj.yds = message.yds ? sink_1.Sink_Yds.toJSON(message.yds) : undefined);
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? sink_1.Sink_S3.toJSON(message.s3) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateSinkRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? sink_1.Sink_Yds.fromPartial(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? sink_1.Sink_S3.fromPartial(object.s3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSinkRequest.$type, exports.CreateSinkRequest);
const baseCreateSinkRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSinkRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSinkRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSinkRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSinkRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSinkRequest_LabelsEntry.$type, exports.CreateSinkRequest_LabelsEntry);
const baseCreateSinkMetadata = {
    $type: "yandex.cloud.logging.v1.CreateSinkMetadata",
    sinkId: "",
};
exports.CreateSinkMetadata = {
    $type: "yandex.cloud.logging.v1.CreateSinkMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSinkMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSinkMetadata);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateSinkMetadata);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSinkMetadata.$type, exports.CreateSinkMetadata);
const baseUpdateSinkRequest = {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest",
    sinkId: "",
    name: "",
    description: "",
    serviceAccountId: "",
};
exports.UpdateSinkRequest = {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
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
            exports.UpdateSinkRequest_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.serviceAccountId !== "") {
            writer.uint32(50).string(message.serviceAccountId);
        }
        if (message.yds !== undefined) {
            sink_1.Sink_Yds.encode(message.yds, writer.uint32(58).fork()).ldelim();
        }
        if (message.s3 !== undefined) {
            sink_1.Sink_S3.encode(message.s3, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSinkRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
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
                    const entry5 = exports.UpdateSinkRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.serviceAccountId = reader.string();
                    break;
                case 7:
                    message.yds = sink_1.Sink_Yds.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.s3 = sink_1.Sink_S3.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateSinkRequest);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
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
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? sink_1.Sink_Yds.fromJSON(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? sink_1.Sink_S3.fromJSON(object.s3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.yds !== undefined &&
            (obj.yds = message.yds ? sink_1.Sink_Yds.toJSON(message.yds) : undefined);
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? sink_1.Sink_S3.toJSON(message.s3) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateSinkRequest);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
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
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? sink_1.Sink_Yds.fromPartial(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? sink_1.Sink_S3.fromPartial(object.s3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSinkRequest.$type, exports.UpdateSinkRequest);
const baseUpdateSinkRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSinkRequest_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSinkRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSinkRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSinkRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSinkRequest_LabelsEntry.$type, exports.UpdateSinkRequest_LabelsEntry);
const baseUpdateSinkMetadata = {
    $type: "yandex.cloud.logging.v1.UpdateSinkMetadata",
    sinkId: "",
};
exports.UpdateSinkMetadata = {
    $type: "yandex.cloud.logging.v1.UpdateSinkMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSinkMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSinkMetadata);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateSinkMetadata);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSinkMetadata.$type, exports.UpdateSinkMetadata);
const baseDeleteSinkRequest = {
    $type: "yandex.cloud.logging.v1.DeleteSinkRequest",
    sinkId: "",
};
exports.DeleteSinkRequest = {
    $type: "yandex.cloud.logging.v1.DeleteSinkRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSinkRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSinkRequest);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSinkRequest);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSinkRequest.$type, exports.DeleteSinkRequest);
const baseDeleteSinkMetadata = {
    $type: "yandex.cloud.logging.v1.DeleteSinkMetadata",
    sinkId: "",
};
exports.DeleteSinkMetadata = {
    $type: "yandex.cloud.logging.v1.DeleteSinkMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSinkMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSinkMetadata);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSinkMetadata);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSinkMetadata.$type, exports.DeleteSinkMetadata);
const baseListSinkOperationsRequest = {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest",
    sinkId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListSinkOperationsRequest = {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sinkId !== "") {
            writer.uint32(10).string(message.sinkId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSinkOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sinkId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListSinkOperationsRequest);
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListSinkOperationsRequest);
        message.sinkId = (_a = object.sinkId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSinkOperationsRequest.$type, exports.ListSinkOperationsRequest);
const baseListSinkOperationsResponse = {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse",
    nextPageToken: "",
};
exports.ListSinkOperationsResponse = {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse",
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
        const message = Object.assign({}, baseListSinkOperationsResponse);
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
        const message = Object.assign({}, baseListSinkOperationsResponse);
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
        const message = Object.assign({}, baseListSinkOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSinkOperationsResponse.$type, exports.ListSinkOperationsResponse);
/** A set of methods for managing log sinks. */
exports.SinkServiceService = {
    /**
     * Returns the specified sink.
     *
     * To get the list of all available sinks, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.logging.v1.SinkService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSinkRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSinkRequest.decode(value),
        responseSerialize: (value) => Buffer.from(sink_1.Sink.encode(value).finish()),
        responseDeserialize: (value) => sink_1.Sink.decode(value),
    },
    /** Retrieves the list of sinks in the specified folder. */
    list: {
        path: "/yandex.cloud.logging.v1.SinkService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSinksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSinksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSinksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSinksResponse.decode(value),
    },
    /** Creates a sink in the specified folder. */
    create: {
        path: "/yandex.cloud.logging.v1.SinkService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSinkRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSinkRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified sink. */
    update: {
        path: "/yandex.cloud.logging.v1.SinkService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSinkRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSinkRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified sink. */
    delete: {
        path: "/yandex.cloud.logging.v1.SinkService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSinkRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSinkRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified sink. */
    listOperations: {
        path: "/yandex.cloud.logging.v1.SinkService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSinkOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSinkOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSinkOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSinkOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified sink. */
    listAccessBindings: {
        path: "/yandex.cloud.logging.v1.SinkService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified sink. */
    setAccessBindings: {
        path: "/yandex.cloud.logging.v1.SinkService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified sink. */
    updateAccessBindings: {
        path: "/yandex.cloud.logging.v1.SinkService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.SinkServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SinkServiceService, "yandex.cloud.logging.v1.SinkService");
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
