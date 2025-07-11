"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionServiceClient = exports.FunctionServiceService = exports.RemoveScalingPolicyMetadata = exports.RemoveScalingPolicyRequest = exports.SetScalingPolicyMetadata = exports.SetScalingPolicyRequest = exports.ListScalingPoliciesResponse = exports.ListScalingPoliciesRequest = exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = exports.ListFunctionTagHistoryResponse = exports.ListFunctionTagHistoryRequest = exports.RemoveFunctionTagMetadata = exports.SetFunctionTagMetadata = exports.RemoveFunctionTagRequest = exports.SetFunctionTagRequest = exports.CreateFunctionVersionMetadata = exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry = exports.CreateFunctionVersionRequest_EnvironmentEntry = exports.CreateFunctionVersionRequest = exports.ListFunctionOperationsResponse = exports.ListFunctionOperationsRequest = exports.ListFunctionsVersionsResponse = exports.ListFunctionsVersionsRequest = exports.ListRuntimesResponse = exports.ListRuntimesRequest = exports.DeleteFunctionVersionMetadata = exports.DeleteFunctionVersionRequest = exports.DeleteFunctionMetadata = exports.DeleteFunctionRequest = exports.UpdateFunctionMetadata = exports.UpdateFunctionRequest_LabelsEntry = exports.UpdateFunctionRequest = exports.CreateFunctionMetadata = exports.CreateFunctionRequest_LabelsEntry = exports.CreateFunctionRequest = exports.ListFunctionsResponse = exports.ListFunctionsRequest = exports.GetFunctionVersionByTagRequest = exports.GetFunctionVersionRequest = exports.GetFunctionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const function_1 = require("../../../../../yandex/cloud/serverless/functions/v1/function");
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.serverless.functions.v1";
const baseGetFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest",
    functionId: "",
};
exports.GetFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFunctionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFunctionRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetFunctionRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFunctionRequest.$type, exports.GetFunctionRequest);
const baseGetFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest",
    functionVersionId: "",
};
exports.GetFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFunctionVersionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFunctionVersionRequest);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetFunctionVersionRequest);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFunctionVersionRequest.$type, exports.GetFunctionVersionRequest);
const baseGetFunctionVersionByTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest",
    functionId: "",
    tag: "",
};
exports.GetFunctionVersionByTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFunctionVersionByTagRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFunctionVersionByTagRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetFunctionVersionByTagRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFunctionVersionByTagRequest.$type, exports.GetFunctionVersionByTagRequest);
const baseListFunctionsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListFunctionsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsRequest",
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
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFunctionsRequest);
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
        const message = Object.assign({}, baseListFunctionsRequest);
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
        const message = Object.assign({}, baseListFunctionsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionsRequest.$type, exports.ListFunctionsRequest);
const baseListFunctionsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse",
    nextPageToken: "",
};
exports.ListFunctionsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.functions) {
            function_1.Function.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFunctionsResponse);
        message.functions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functions.push(function_1.Function.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFunctionsResponse);
        message.functions = ((_a = object.functions) !== null && _a !== void 0 ? _a : []).map((e) => function_1.Function.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.functions) {
            obj.functions = message.functions.map((e) => e ? function_1.Function.toJSON(e) : undefined);
        }
        else {
            obj.functions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFunctionsResponse);
        message.functions =
            ((_a = object.functions) === null || _a === void 0 ? void 0 : _a.map((e) => function_1.Function.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionsResponse.$type, exports.ListFunctionsResponse);
const baseCreateFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest",
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
            exports.CreateFunctionRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFunctionRequest);
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
                    const entry4 = exports.CreateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
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
        const message = Object.assign({}, baseCreateFunctionRequest);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateFunctionRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionRequest.$type, exports.CreateFunctionRequest);
const baseCreateFunctionRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateFunctionRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateFunctionRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateFunctionRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateFunctionRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionRequest_LabelsEntry.$type, exports.CreateFunctionRequest_LabelsEntry);
const baseCreateFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata",
    functionId: "",
};
exports.CreateFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFunctionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateFunctionMetadata);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateFunctionMetadata);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionMetadata.$type, exports.CreateFunctionMetadata);
const baseUpdateFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest",
    functionId: "",
    name: "",
    description: "",
};
exports.UpdateFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
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
            exports.UpdateFunctionRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFunctionRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
                    const entry5 = exports.UpdateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
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
        const message = Object.assign({}, baseUpdateFunctionRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateFunctionRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFunctionRequest.$type, exports.UpdateFunctionRequest);
const baseUpdateFunctionRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateFunctionRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateFunctionRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateFunctionRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateFunctionRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFunctionRequest_LabelsEntry.$type, exports.UpdateFunctionRequest_LabelsEntry);
const baseUpdateFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata",
    functionId: "",
};
exports.UpdateFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateFunctionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateFunctionMetadata);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateFunctionMetadata);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFunctionMetadata.$type, exports.UpdateFunctionMetadata);
const baseDeleteFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest",
    functionId: "",
};
exports.DeleteFunctionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFunctionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFunctionRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteFunctionRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFunctionRequest.$type, exports.DeleteFunctionRequest);
const baseDeleteFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata",
    functionId: "",
};
exports.DeleteFunctionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFunctionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFunctionMetadata);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteFunctionMetadata);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFunctionMetadata.$type, exports.DeleteFunctionMetadata);
const baseDeleteFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest",
    functionVersionId: "",
    force: false,
};
exports.DeleteFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(18).string(message.functionVersionId);
        }
        if (message.force === true) {
            writer.uint32(24).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFunctionVersionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.functionVersionId = reader.string();
                    break;
                case 3:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFunctionVersionRequest);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        message.force =
            object.force !== undefined && object.force !== null
                ? Boolean(object.force)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteFunctionVersionRequest);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        message.force = (_b = object.force) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFunctionVersionRequest.$type, exports.DeleteFunctionVersionRequest);
const baseDeleteFunctionVersionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata",
    functionVersionId: "",
};
exports.DeleteFunctionVersionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.DeleteFunctionVersionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(18).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteFunctionVersionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.functionVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteFunctionVersionMetadata);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteFunctionVersionMetadata);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFunctionVersionMetadata.$type, exports.DeleteFunctionVersionMetadata);
const baseListRuntimesRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest",
};
exports.ListRuntimesRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRuntimesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseListRuntimesRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseListRuntimesRequest);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRuntimesRequest.$type, exports.ListRuntimesRequest);
const baseListRuntimesResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse",
    runtimes: "",
};
exports.ListRuntimesResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListRuntimesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.runtimes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRuntimesResponse);
        message.runtimes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.runtimes.push(reader.string());
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
        const message = Object.assign({}, baseListRuntimesResponse);
        message.runtimes = ((_a = object.runtimes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.runtimes) {
            obj.runtimes = message.runtimes.map((e) => e);
        }
        else {
            obj.runtimes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListRuntimesResponse);
        message.runtimes = ((_a = object.runtimes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRuntimesResponse.$type, exports.ListRuntimesResponse);
const baseListFunctionsVersionsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListFunctionsVersionsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.functionId !== undefined) {
            writer.uint32(18).string(message.functionId);
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
        const message = Object.assign({}, baseListFunctionsVersionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.functionId = reader.string();
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
        const message = Object.assign({}, baseListFunctionsVersionsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : undefined;
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
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListFunctionsVersionsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.functionId = (_b = object.functionId) !== null && _b !== void 0 ? _b : undefined;
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        message.filter = (_e = object.filter) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionsVersionsRequest.$type, exports.ListFunctionsVersionsRequest);
const baseListFunctionsVersionsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse",
    nextPageToken: "",
};
exports.ListFunctionsVersionsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            function_1.Version.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFunctionsVersionsResponse);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(function_1.Version.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFunctionsVersionsResponse);
        message.versions = ((_a = object.versions) !== null && _a !== void 0 ? _a : []).map((e) => function_1.Version.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? function_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFunctionsVersionsResponse);
        message.versions =
            ((_a = object.versions) === null || _a === void 0 ? void 0 : _a.map((e) => function_1.Version.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionsVersionsResponse.$type, exports.ListFunctionsVersionsResponse);
const baseListFunctionOperationsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest",
    functionId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListFunctionOperationsRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
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
        const message = Object.assign({}, baseListFunctionOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
        const message = Object.assign({}, baseListFunctionOperationsRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
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
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListFunctionOperationsRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionOperationsRequest.$type, exports.ListFunctionOperationsRequest);
const baseListFunctionOperationsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse",
    nextPageToken: "",
};
exports.ListFunctionOperationsResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse",
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
        const message = Object.assign({}, baseListFunctionOperationsResponse);
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
        const message = Object.assign({}, baseListFunctionOperationsResponse);
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
        const message = Object.assign({}, baseListFunctionOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionOperationsResponse.$type, exports.ListFunctionOperationsResponse);
const baseCreateFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest",
    functionId: "",
    runtime: "",
    description: "",
    entrypoint: "",
    serviceAccountId: "",
    tag: "",
};
exports.CreateFunctionVersionRequest = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.runtime !== "") {
            writer.uint32(18).string(message.runtime);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.entrypoint !== "") {
            writer.uint32(34).string(message.entrypoint);
        }
        if (message.resources !== undefined) {
            function_1.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.package !== undefined) {
            function_1.Package.encode(message.package, writer.uint32(74).fork()).ldelim();
        }
        if (message.content !== undefined) {
            writer.uint32(82).bytes(message.content);
        }
        if (message.versionId !== undefined) {
            writer.uint32(90).string(message.versionId);
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.CreateFunctionVersionRequest_EnvironmentEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
                key: key,
                value,
            }, writer.uint32(98).fork()).ldelim();
        });
        for (const v of message.tag) {
            writer.uint32(106).string(v);
        }
        if (message.connectivity !== undefined) {
            function_1.Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
        }
        Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
            exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry.encode({
                $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
                key: key,
                value,
            }, writer.uint32(122).fork()).ldelim();
        });
        for (const v of message.secrets) {
            function_1.Secret.encode(v, writer.uint32(146).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            function_1.LogOptions.encode(message.logOptions, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.storageMounts) {
            function_1.StorageMount.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.asyncInvocationConfig !== undefined) {
            function_1.AsyncInvocationConfig.encode(message.asyncInvocationConfig, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFunctionVersionRequest);
        message.environment = {};
        message.tag = [];
        message.namedServiceAccounts = {};
        message.secrets = [];
        message.storageMounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.runtime = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.entrypoint = reader.string();
                    break;
                case 5:
                    message.resources = function_1.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.package = function_1.Package.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.content = reader.bytes();
                    break;
                case 11:
                    message.versionId = reader.string();
                    break;
                case 12:
                    const entry12 = exports.CreateFunctionVersionRequest_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.environment[entry12.key] = entry12.value;
                    }
                    break;
                case 13:
                    message.tag.push(reader.string());
                    break;
                case 17:
                    message.connectivity = function_1.Connectivity.decode(reader, reader.uint32());
                    break;
                case 15:
                    const entry15 = exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.namedServiceAccounts[entry15.key] = entry15.value;
                    }
                    break;
                case 18:
                    message.secrets.push(function_1.Secret.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.logOptions = function_1.LogOptions.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.storageMounts.push(function_1.StorageMount.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.asyncInvocationConfig = function_1.AsyncInvocationConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateFunctionVersionRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.runtime =
            object.runtime !== undefined && object.runtime !== null
                ? String(object.runtime)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.entrypoint =
            object.entrypoint !== undefined && object.entrypoint !== null
                ? String(object.entrypoint)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? function_1.Resources.fromJSON(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromJSON(object.executionTimeout)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.package =
            object.package !== undefined && object.package !== null
                ? function_1.Package.fromJSON(object.package)
                : undefined;
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : undefined;
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : undefined;
        message.environment = Object.entries((_a = object.environment) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.tag = ((_b = object.tag) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? function_1.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.namedServiceAccounts = Object.entries((_c = object.namedServiceAccounts) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.secrets = ((_d = object.secrets) !== null && _d !== void 0 ? _d : []).map((e) => function_1.Secret.fromJSON(e));
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? function_1.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.storageMounts = ((_e = object.storageMounts) !== null && _e !== void 0 ? _e : []).map((e) => function_1.StorageMount.fromJSON(e));
        message.asyncInvocationConfig =
            object.asyncInvocationConfig !== undefined &&
                object.asyncInvocationConfig !== null
                ? function_1.AsyncInvocationConfig.fromJSON(object.asyncInvocationConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.description !== undefined &&
            (obj.description = message.description);
        message.entrypoint !== undefined && (obj.entrypoint = message.entrypoint);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? function_1.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.package !== undefined &&
            (obj.package = message.package
                ? function_1.Package.toJSON(message.package)
                : undefined);
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        if (message.tag) {
            obj.tag = message.tag.map((e) => e);
        }
        else {
            obj.tag = [];
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? function_1.Connectivity.toJSON(message.connectivity)
                : undefined);
        obj.namedServiceAccounts = {};
        if (message.namedServiceAccounts) {
            Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
                obj.namedServiceAccounts[k] = v;
            });
        }
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) => e ? function_1.Secret.toJSON(e) : undefined);
        }
        else {
            obj.secrets = [];
        }
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? function_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        if (message.storageMounts) {
            obj.storageMounts = message.storageMounts.map((e) => e ? function_1.StorageMount.toJSON(e) : undefined);
        }
        else {
            obj.storageMounts = [];
        }
        message.asyncInvocationConfig !== undefined &&
            (obj.asyncInvocationConfig = message.asyncInvocationConfig
                ? function_1.AsyncInvocationConfig.toJSON(message.asyncInvocationConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseCreateFunctionVersionRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.entrypoint = (_d = object.entrypoint) !== null && _d !== void 0 ? _d : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? function_1.Resources.fromPartial(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromPartial(object.executionTimeout)
                : undefined;
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.package =
            object.package !== undefined && object.package !== null
                ? function_1.Package.fromPartial(object.package)
                : undefined;
        message.content = (_f = object.content) !== null && _f !== void 0 ? _f : undefined;
        message.versionId = (_g = object.versionId) !== null && _g !== void 0 ? _g : undefined;
        message.environment = Object.entries((_h = object.environment) !== null && _h !== void 0 ? _h : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.tag = ((_j = object.tag) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? function_1.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.namedServiceAccounts = Object.entries((_k = object.namedServiceAccounts) !== null && _k !== void 0 ? _k : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.secrets = ((_l = object.secrets) === null || _l === void 0 ? void 0 : _l.map((e) => function_1.Secret.fromPartial(e))) || [];
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? function_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.storageMounts =
            ((_m = object.storageMounts) === null || _m === void 0 ? void 0 : _m.map((e) => function_1.StorageMount.fromPartial(e))) || [];
        message.asyncInvocationConfig =
            object.asyncInvocationConfig !== undefined &&
                object.asyncInvocationConfig !== null
                ? function_1.AsyncInvocationConfig.fromPartial(object.asyncInvocationConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionVersionRequest.$type, exports.CreateFunctionVersionRequest);
const baseCreateFunctionVersionRequest_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
    key: "",
    value: "",
};
exports.CreateFunctionVersionRequest_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.EnvironmentEntry",
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_EnvironmentEntry);
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_EnvironmentEntry);
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_EnvironmentEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionVersionRequest_EnvironmentEntry.$type, exports.CreateFunctionVersionRequest_EnvironmentEntry);
const baseCreateFunctionVersionRequest_NamedServiceAccountsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
    key: "",
    value: "",
};
exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.NamedServiceAccountsEntry",
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_NamedServiceAccountsEntry);
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_NamedServiceAccountsEntry);
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
        const message = Object.assign({}, baseCreateFunctionVersionRequest_NamedServiceAccountsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry.$type, exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry);
const baseCreateFunctionVersionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata",
    functionVersionId: "",
};
exports.CreateFunctionVersionMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateFunctionVersionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateFunctionVersionMetadata);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateFunctionVersionMetadata);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFunctionVersionMetadata.$type, exports.CreateFunctionVersionMetadata);
const baseSetFunctionTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest",
    functionVersionId: "",
    tag: "",
};
exports.SetFunctionTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetFunctionTagRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetFunctionTagRequest);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetFunctionTagRequest);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetFunctionTagRequest.$type, exports.SetFunctionTagRequest);
const baseRemoveFunctionTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest",
    functionVersionId: "",
    tag: "",
};
exports.RemoveFunctionTagRequest = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveFunctionTagRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveFunctionTagRequest);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveFunctionTagRequest);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveFunctionTagRequest.$type, exports.RemoveFunctionTagRequest);
const baseSetFunctionTagMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata",
    functionVersionId: "",
};
exports.SetFunctionTagMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetFunctionTagMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetFunctionTagMetadata);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetFunctionTagMetadata);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetFunctionTagMetadata.$type, exports.SetFunctionTagMetadata);
const baseRemoveFunctionTagMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata",
    functionVersionId: "",
};
exports.RemoveFunctionTagMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== "") {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveFunctionTagMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveFunctionTagMetadata);
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveFunctionTagMetadata);
        message.functionVersionId = (_a = object.functionVersionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveFunctionTagMetadata.$type, exports.RemoveFunctionTagMetadata);
const baseListFunctionTagHistoryRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest",
    functionId: "",
    tag: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListFunctionTagHistoryRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
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
        const message = Object.assign({}, baseListFunctionTagHistoryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
        const message = Object.assign({}, baseListFunctionTagHistoryRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
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
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListFunctionTagHistoryRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        message.filter = (_e = object.filter) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionTagHistoryRequest.$type, exports.ListFunctionTagHistoryRequest);
const baseListFunctionTagHistoryResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse",
    nextPageToken: "",
};
exports.ListFunctionTagHistoryResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.functionTagHistoryRecord) {
            exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFunctionTagHistoryResponse);
        message.functionTagHistoryRecord = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionTagHistoryRecord.push(exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFunctionTagHistoryResponse);
        message.functionTagHistoryRecord = ((_a = object.functionTagHistoryRecord) !== null && _a !== void 0 ? _a : []).map((e) => exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.functionTagHistoryRecord) {
            obj.functionTagHistoryRecord = message.functionTagHistoryRecord.map((e) => e
                ? exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.toJSON(e)
                : undefined);
        }
        else {
            obj.functionTagHistoryRecord = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListFunctionTagHistoryResponse);
        message.functionTagHistoryRecord =
            ((_a = object.functionTagHistoryRecord) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionTagHistoryResponse.$type, exports.ListFunctionTagHistoryResponse);
const baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord",
    functionId: "",
    functionVersionId: "",
    tag: "",
};
exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
    $type: "yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionVersionId !== "") {
            writer.uint32(26).string(message.functionVersionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        if (message.effectiveFrom !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveFrom), writer.uint32(34).fork()).ldelim();
        }
        if (message.effectiveTo !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveTo), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 3:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 4:
                    message.effectiveFrom = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.effectiveTo = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.functionVersionId =
            object.functionVersionId !== undefined &&
                object.functionVersionId !== null
                ? String(object.functionVersionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        message.effectiveFrom =
            object.effectiveFrom !== undefined && object.effectiveFrom !== null
                ? fromJsonTimestamp(object.effectiveFrom)
                : undefined;
        message.effectiveTo =
            object.effectiveTo !== undefined && object.effectiveTo !== null
                ? fromJsonTimestamp(object.effectiveTo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.effectiveFrom !== undefined &&
            (obj.effectiveFrom = message.effectiveFrom.toISOString());
        message.effectiveTo !== undefined &&
            (obj.effectiveTo = message.effectiveTo.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.functionVersionId = (_b = object.functionVersionId) !== null && _b !== void 0 ? _b : "";
        message.tag = (_c = object.tag) !== null && _c !== void 0 ? _c : "";
        message.effectiveFrom = (_d = object.effectiveFrom) !== null && _d !== void 0 ? _d : undefined;
        message.effectiveTo = (_e = object.effectiveTo) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.$type, exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord);
const baseListScalingPoliciesRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest",
    functionId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListScalingPoliciesRequest = {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
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
        const message = Object.assign({}, baseListScalingPoliciesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
        const message = Object.assign({}, baseListScalingPoliciesRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
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
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListScalingPoliciesRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListScalingPoliciesRequest.$type, exports.ListScalingPoliciesRequest);
const baseListScalingPoliciesResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse",
    nextPageToken: "",
};
exports.ListScalingPoliciesResponse = {
    $type: "yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scalingPolicies) {
            function_1.ScalingPolicy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListScalingPoliciesResponse);
        message.scalingPolicies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scalingPolicies.push(function_1.ScalingPolicy.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListScalingPoliciesResponse);
        message.scalingPolicies = ((_a = object.scalingPolicies) !== null && _a !== void 0 ? _a : []).map((e) => function_1.ScalingPolicy.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.scalingPolicies) {
            obj.scalingPolicies = message.scalingPolicies.map((e) => e ? function_1.ScalingPolicy.toJSON(e) : undefined);
        }
        else {
            obj.scalingPolicies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListScalingPoliciesResponse);
        message.scalingPolicies =
            ((_a = object.scalingPolicies) === null || _a === void 0 ? void 0 : _a.map((e) => function_1.ScalingPolicy.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListScalingPoliciesResponse.$type, exports.ListScalingPoliciesResponse);
const baseSetScalingPolicyRequest = {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest",
    functionId: "",
    tag: "",
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};
exports.SetScalingPolicyRequest = {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        if (message.provisionedInstancesCount !== 0) {
            writer.uint32(32).int64(message.provisionedInstancesCount);
        }
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(40).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(48).int64(message.zoneRequestsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetScalingPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 4:
                    message.provisionedInstancesCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.zoneInstancesLimit = longToNumber(reader.int64());
                    break;
                case 6:
                    message.zoneRequestsLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetScalingPolicyRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        message.provisionedInstancesCount =
            object.provisionedInstancesCount !== undefined &&
                object.provisionedInstancesCount !== null
                ? Number(object.provisionedInstancesCount)
                : 0;
        message.zoneInstancesLimit =
            object.zoneInstancesLimit !== undefined &&
                object.zoneInstancesLimit !== null
                ? Number(object.zoneInstancesLimit)
                : 0;
        message.zoneRequestsLimit =
            object.zoneRequestsLimit !== undefined &&
                object.zoneRequestsLimit !== null
                ? Number(object.zoneRequestsLimit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.provisionedInstancesCount !== undefined &&
            (obj.provisionedInstancesCount = Math.round(message.provisionedInstancesCount));
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit));
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseSetScalingPolicyRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        message.provisionedInstancesCount = (_c = object.provisionedInstancesCount) !== null && _c !== void 0 ? _c : 0;
        message.zoneInstancesLimit = (_d = object.zoneInstancesLimit) !== null && _d !== void 0 ? _d : 0;
        message.zoneRequestsLimit = (_e = object.zoneRequestsLimit) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetScalingPolicyRequest.$type, exports.SetScalingPolicyRequest);
const baseSetScalingPolicyMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata",
    functionId: "",
};
exports.SetScalingPolicyMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetScalingPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetScalingPolicyMetadata);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetScalingPolicyMetadata);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetScalingPolicyMetadata.$type, exports.SetScalingPolicyMetadata);
const baseRemoveScalingPolicyRequest = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest",
    functionId: "",
    tag: "",
};
exports.RemoveScalingPolicyRequest = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveScalingPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveScalingPolicyRequest);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        message.tag =
            object.tag !== undefined && object.tag !== null ? String(object.tag) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveScalingPolicyRequest);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        message.tag = (_b = object.tag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveScalingPolicyRequest.$type, exports.RemoveScalingPolicyRequest);
const baseRemoveScalingPolicyMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata",
    functionId: "",
};
exports.RemoveScalingPolicyMetadata = {
    $type: "yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== "") {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveScalingPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveScalingPolicyMetadata);
        message.functionId =
            object.functionId !== undefined && object.functionId !== null
                ? String(object.functionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined && (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveScalingPolicyMetadata);
        message.functionId = (_a = object.functionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveScalingPolicyMetadata.$type, exports.RemoveScalingPolicyMetadata);
/** A set of methods for managing serverless functions. */
exports.FunctionServiceService = {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Function.encode(value).finish()),
        responseDeserialize: (value) => function_1.Function.decode(value),
    },
    /** Retrieves the list of functions in the specified folder. */
    list: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionsResponse.decode(value),
    },
    /** Creates a function in the specified folder. */
    create: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified function. */
    update: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified function. */
    delete: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Version.encode(value).finish()),
        responseDeserialize: (value) => function_1.Version.decode(value),
    },
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionVersionByTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionVersionByTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Version.encode(value).finish()),
        responseDeserialize: (value) => function_1.Version.decode(value),
    },
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionsVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionsVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionsVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionsVersionsResponse.decode(value),
    },
    /**
     * Deletes the specified version of a function.
     *
     * NOTE: old untagged function versions are deleted automatically.
     */
    deleteVersion: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/DeleteVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFunctionVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFunctionVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Set a tag for the specified version of a function. */
    setTag: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetFunctionTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetFunctionTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Remove a tag from the specified version of a function. */
    removeTag: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveFunctionTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveFunctionTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionTagHistoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionTagHistoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionTagHistoryResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionTagHistoryResponse.decode(value),
    },
    /** Creates a version for the specified function. */
    createVersion: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFunctionVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFunctionVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists available runtime environments for the specified function. */
    listRuntimes: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRuntimesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRuntimesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRuntimesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRuntimesResponse.decode(value),
    },
    /** Lists operations for the specified function. */
    listOperations: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified function. */
    listAccessBindings: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the function. */
    setAccessBindings: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified function. */
    updateAccessBindings: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists existing scaling policies for specified function */
    listScalingPolicies: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListScalingPoliciesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListScalingPoliciesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListScalingPoliciesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListScalingPoliciesResponse.decode(value),
    },
    /** Set scaling policy for specified function and tag */
    setScalingPolicy: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetScalingPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetScalingPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy: {
        path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveScalingPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveScalingPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.FunctionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FunctionServiceService, "yandex.cloud.serverless.functions.v1.FunctionService");
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
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
