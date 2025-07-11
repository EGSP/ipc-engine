"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderBudgetServiceClient = exports.FolderBudgetServiceService = exports.SetFolderBudgetRequest = exports.GetFolderBudgetResponse = exports.GetFolderBudgetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const empty_1 = require("../../../../google/protobuf/empty");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.datasphere.v1";
const baseGetFolderBudgetRequest = {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest",
    folderId: "",
};
exports.GetFolderBudgetRequest = {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFolderBudgetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFolderBudgetRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetFolderBudgetRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFolderBudgetRequest.$type, exports.GetFolderBudgetRequest);
const baseGetFolderBudgetResponse = {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse",
};
exports.GetFolderBudgetResponse = {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxUnitsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerHour,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerExecution,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetFolderBudgetResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxUnitsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxUnitsPerExecution = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetFolderBudgetResponse);
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined &&
                object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        message.maxUnitsPerHour !== undefined &&
            (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetFolderBudgetResponse);
        message.unitBalance = (_a = object.unitBalance) !== null && _a !== void 0 ? _a : undefined;
        message.maxUnitsPerHour = (_b = object.maxUnitsPerHour) !== null && _b !== void 0 ? _b : undefined;
        message.maxUnitsPerExecution = (_c = object.maxUnitsPerExecution) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFolderBudgetResponse.$type, exports.GetFolderBudgetResponse);
const baseSetFolderBudgetRequest = {
    $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest",
    folderId: "",
};
exports.SetFolderBudgetRequest = {
    $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.setMask !== undefined) {
            field_mask_1.FieldMask.encode(message.setMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxUnitsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerHour,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerExecution,
            }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetFolderBudgetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.setMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxUnitsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.maxUnitsPerExecution = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetFolderBudgetRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.setMask =
            object.setMask !== undefined && object.setMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.setMask)
                : undefined;
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined &&
                object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.setMask !== undefined &&
            (obj.setMask = message.setMask
                ? field_mask_1.FieldMask.toJSON(message.setMask)
                : undefined);
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        message.maxUnitsPerHour !== undefined &&
            (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseSetFolderBudgetRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.setMask =
            object.setMask !== undefined && object.setMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.setMask)
                : undefined;
        message.unitBalance = (_b = object.unitBalance) !== null && _b !== void 0 ? _b : undefined;
        message.maxUnitsPerHour = (_c = object.maxUnitsPerHour) !== null && _c !== void 0 ? _c : undefined;
        message.maxUnitsPerExecution = (_d = object.maxUnitsPerExecution) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetFolderBudgetRequest.$type, exports.SetFolderBudgetRequest);
/** A set of methods for managing Datasphere folder budgets. */
exports.FolderBudgetServiceService = {
    /** Returns the specified folder budget. */
    get: {
        path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFolderBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFolderBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetFolderBudgetResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetFolderBudgetResponse.decode(value),
    },
    /** Sets the unit balance and the limits of the specified folder budget. */
    set: {
        path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Set",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetFolderBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetFolderBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.FolderBudgetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FolderBudgetServiceService, "yandex.cloud.datasphere.v1.FolderBudgetService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
