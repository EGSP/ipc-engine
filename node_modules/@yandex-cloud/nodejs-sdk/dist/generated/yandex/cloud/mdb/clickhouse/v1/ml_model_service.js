"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlModelServiceClient = exports.MlModelServiceService = exports.DeleteMlModelMetadata = exports.DeleteMlModelRequest = exports.UpdateMlModelMetadata = exports.UpdateMlModelRequest = exports.CreateMlModelMetadata = exports.CreateMlModelRequest = exports.ListMlModelsResponse = exports.ListMlModelsRequest = exports.GetMlModelRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const ml_model_1 = require("../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
const baseGetMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest",
    clusterId: "",
    mlModelName: "",
};
exports.GetMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.GetMlModelRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetMlModelRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetMlModelRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetMlModelRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetMlModelRequest.$type, exports.GetMlModelRequest);
const baseListMlModelsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListMlModelsRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsRequest",
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
        const message = Object.assign({}, baseListMlModelsRequest);
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
        const message = Object.assign({}, baseListMlModelsRequest);
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
        const message = Object.assign({}, baseListMlModelsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMlModelsRequest.$type, exports.ListMlModelsRequest);
const baseListMlModelsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse",
    nextPageToken: "",
};
exports.ListMlModelsResponse = {
    $type: "yandex.cloud.mdb.clickhouse.v1.ListMlModelsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.mlModels) {
            ml_model_1.MlModel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListMlModelsResponse);
        message.mlModels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mlModels.push(ml_model_1.MlModel.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListMlModelsResponse);
        message.mlModels = ((_a = object.mlModels) !== null && _a !== void 0 ? _a : []).map((e) => ml_model_1.MlModel.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.mlModels) {
            obj.mlModels = message.mlModels.map((e) => e ? ml_model_1.MlModel.toJSON(e) : undefined);
        }
        else {
            obj.mlModels = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListMlModelsResponse);
        message.mlModels =
            ((_a = object.mlModels) === null || _a === void 0 ? void 0 : _a.map((e) => ml_model_1.MlModel.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMlModelsResponse.$type, exports.ListMlModelsResponse);
const baseCreateMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest",
    clusterId: "",
    mlModelName: "",
    type: 0,
    uri: "",
};
exports.CreateMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
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
        const message = Object.assign({}, baseCreateMlModelRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
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
        const message = Object.assign({}, baseCreateMlModelRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, ml_model_1.mlModelTypeFromJSON)(object.type)
                : 0;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        message.type !== undefined && (obj.type = (0, ml_model_1.mlModelTypeToJSON)(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateMlModelRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.uri = (_d = object.uri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateMlModelRequest.$type, exports.CreateMlModelRequest);
const baseCreateMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata",
    clusterId: "",
    mlModelName: "",
};
exports.CreateMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.CreateMlModelMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateMlModelMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateMlModelMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateMlModelMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateMlModelMetadata.$type, exports.CreateMlModelMetadata);
const baseUpdateMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest",
    clusterId: "",
    mlModelName: "",
    uri: "",
};
exports.UpdateMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
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
        const message = Object.assign({}, baseUpdateMlModelRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
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
        const message = Object.assign({}, baseUpdateMlModelRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
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
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateMlModelRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateMlModelRequest.$type, exports.UpdateMlModelRequest);
const baseUpdateMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata",
    clusterId: "",
    mlModelName: "",
};
exports.UpdateMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UpdateMlModelMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateMlModelMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateMlModelMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateMlModelMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateMlModelMetadata.$type, exports.UpdateMlModelMetadata);
const baseDeleteMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest",
    clusterId: "",
    mlModelName: "",
};
exports.DeleteMlModelRequest = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteMlModelRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteMlModelRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteMlModelRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMlModelRequest.$type, exports.DeleteMlModelRequest);
const baseDeleteMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata",
    clusterId: "",
    mlModelName: "",
};
exports.DeleteMlModelMetadata = {
    $type: "yandex.cloud.mdb.clickhouse.v1.DeleteMlModelMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.mlModelName !== "") {
            writer.uint32(18).string(message.mlModelName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteMlModelMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.mlModelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteMlModelMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.mlModelName =
            object.mlModelName !== undefined && object.mlModelName !== null
                ? String(object.mlModelName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.mlModelName !== undefined &&
            (obj.mlModelName = message.mlModelName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteMlModelMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.mlModelName = (_b = object.mlModelName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMlModelMetadata.$type, exports.DeleteMlModelMetadata);
/** A set of methods for managing machine learning models. */
exports.MlModelServiceService = {
    /**
     * Returns the specified machine learning model.
     *
     * To get the list of all available models, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ml_model_1.MlModel.encode(value).finish()),
        responseDeserialize: (value) => ml_model_1.MlModel.decode(value),
    },
    /** Retrieves the list of machine learning models in the specified cluster. */
    list: {
        path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListMlModelsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListMlModelsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListMlModelsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListMlModelsResponse.decode(value),
    },
    /** Creates a machine learning model in the specified cluster. */
    create: {
        path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified machine learning model. */
    update: {
        path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified machine learning model. */
    delete: {
        path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMlModelRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMlModelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.MlModelServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MlModelServiceService, "yandex.cloud.mdb.clickhouse.v1.MlModelService");
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
