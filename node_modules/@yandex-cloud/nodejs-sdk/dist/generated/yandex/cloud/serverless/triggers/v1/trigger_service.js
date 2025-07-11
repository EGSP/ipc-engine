"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerServiceClient = exports.TriggerServiceService = exports.ListTriggerOperationsResponse = exports.ListTriggerOperationsRequest = exports.ResumeTriggerMetadata = exports.ResumeTriggerRequest = exports.PauseTriggerMetadata = exports.PauseTriggerRequest = exports.DeleteTriggerMetadata = exports.DeleteTriggerRequest = exports.UpdateTriggerMetadata = exports.UpdateTriggerRequest_LabelsEntry = exports.UpdateTriggerRequest = exports.CreateTriggerMetadata = exports.CreateTriggerRequest_LabelsEntry = exports.CreateTriggerRequest = exports.ListTriggersResponse = exports.ListTriggersRequest = exports.GetTriggerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const trigger_1 = require("../../../../../yandex/cloud/serverless/triggers/v1/trigger");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.serverless.triggers.v1";
const baseGetTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest",
    triggerId: "",
};
exports.GetTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTriggerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTriggerRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetTriggerRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTriggerRequest.$type, exports.GetTriggerRequest);
const baseListTriggersRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListTriggersRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest",
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
        const message = Object.assign({}, baseListTriggersRequest);
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
        const message = Object.assign({}, baseListTriggersRequest);
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
        const message = Object.assign({}, baseListTriggersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTriggersRequest.$type, exports.ListTriggersRequest);
const baseListTriggersResponse = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse",
    nextPageToken: "",
};
exports.ListTriggersResponse = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.triggers) {
            trigger_1.Trigger.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTriggersResponse);
        message.triggers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggers.push(trigger_1.Trigger.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListTriggersResponse);
        message.triggers = ((_a = object.triggers) !== null && _a !== void 0 ? _a : []).map((e) => trigger_1.Trigger.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.triggers) {
            obj.triggers = message.triggers.map((e) => e ? trigger_1.Trigger.toJSON(e) : undefined);
        }
        else {
            obj.triggers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListTriggersResponse);
        message.triggers =
            ((_a = object.triggers) === null || _a === void 0 ? void 0 : _a.map((e) => trigger_1.Trigger.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTriggersResponse.$type, exports.ListTriggersResponse);
const baseCreateTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest",
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
            exports.CreateTriggerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.rule !== undefined) {
            trigger_1.Trigger_Rule.encode(message.rule, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTriggerRequest);
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
                    const entry4 = exports.CreateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.rule = trigger_1.Trigger_Rule.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateTriggerRequest);
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
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? trigger_1.Trigger_Rule.fromJSON(object.rule)
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
        message.rule !== undefined &&
            (obj.rule = message.rule ? trigger_1.Trigger_Rule.toJSON(message.rule) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateTriggerRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? trigger_1.Trigger_Rule.fromPartial(object.rule)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTriggerRequest.$type, exports.CreateTriggerRequest);
const baseCreateTriggerRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateTriggerRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateTriggerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTriggerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTriggerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTriggerRequest_LabelsEntry.$type, exports.CreateTriggerRequest_LabelsEntry);
const baseCreateTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata",
    triggerId: "",
};
exports.CreateTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTriggerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTriggerMetadata);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateTriggerMetadata);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTriggerMetadata.$type, exports.CreateTriggerMetadata);
const baseUpdateTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest",
    triggerId: "",
    name: "",
    description: "",
};
exports.UpdateTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
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
            exports.UpdateTriggerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.rule !== undefined) {
            trigger_1.Trigger_Rule.encode(message.rule, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTriggerRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
                    const entry5 = exports.UpdateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.rule = trigger_1.Trigger_Rule.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateTriggerRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
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
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? trigger_1.Trigger_Rule.fromJSON(object.rule)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
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
        message.rule !== undefined &&
            (obj.rule = message.rule ? trigger_1.Trigger_Rule.toJSON(message.rule) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateTriggerRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
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
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? trigger_1.Trigger_Rule.fromPartial(object.rule)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTriggerRequest.$type, exports.UpdateTriggerRequest);
const baseUpdateTriggerRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateTriggerRequest_LabelsEntry = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateTriggerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTriggerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTriggerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTriggerRequest_LabelsEntry.$type, exports.UpdateTriggerRequest_LabelsEntry);
const baseUpdateTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata",
    triggerId: "",
};
exports.UpdateTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTriggerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTriggerMetadata);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateTriggerMetadata);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTriggerMetadata.$type, exports.UpdateTriggerMetadata);
const baseDeleteTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest",
    triggerId: "",
};
exports.DeleteTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTriggerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTriggerRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTriggerRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTriggerRequest.$type, exports.DeleteTriggerRequest);
const baseDeleteTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata",
    triggerId: "",
};
exports.DeleteTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTriggerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTriggerMetadata);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTriggerMetadata);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTriggerMetadata.$type, exports.DeleteTriggerMetadata);
const basePauseTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest",
    triggerId: "",
};
exports.PauseTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseTriggerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseTriggerRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePauseTriggerRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseTriggerRequest.$type, exports.PauseTriggerRequest);
const basePauseTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata",
    triggerId: "",
};
exports.PauseTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseTriggerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseTriggerMetadata);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePauseTriggerMetadata);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseTriggerMetadata.$type, exports.PauseTriggerMetadata);
const baseResumeTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest",
    triggerId: "",
};
exports.ResumeTriggerRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeTriggerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeTriggerRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResumeTriggerRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeTriggerRequest.$type, exports.ResumeTriggerRequest);
const baseResumeTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata",
    triggerId: "",
};
exports.ResumeTriggerMetadata = {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeTriggerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeTriggerMetadata);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResumeTriggerMetadata);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeTriggerMetadata.$type, exports.ResumeTriggerMetadata);
const baseListTriggerOperationsRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest",
    triggerId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListTriggerOperationsRequest = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== "") {
            writer.uint32(10).string(message.triggerId);
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
        const message = Object.assign({}, baseListTriggerOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
        const message = Object.assign({}, baseListTriggerOperationsRequest);
        message.triggerId =
            object.triggerId !== undefined && object.triggerId !== null
                ? String(object.triggerId)
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
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListTriggerOperationsRequest);
        message.triggerId = (_a = object.triggerId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTriggerOperationsRequest.$type, exports.ListTriggerOperationsRequest);
const baseListTriggerOperationsResponse = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse",
    nextPageToken: "",
};
exports.ListTriggerOperationsResponse = {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse",
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
        const message = Object.assign({}, baseListTriggerOperationsResponse);
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
        const message = Object.assign({}, baseListTriggerOperationsResponse);
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
        const message = Object.assign({}, baseListTriggerOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTriggerOperationsResponse.$type, exports.ListTriggerOperationsResponse);
/** A set of methods for managing triggers for serverless functions. */
exports.TriggerServiceService = {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(trigger_1.Trigger.encode(value).finish()),
        responseDeserialize: (value) => trigger_1.Trigger.decode(value),
    },
    /** Retrieves the list of triggers in the specified folder. */
    list: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTriggersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTriggersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTriggersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTriggersResponse.decode(value),
    },
    /** Creates a trigger in the specified folder. */
    create: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified trigger. */
    update: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified trigger. */
    delete: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Pauses the specified trigger. */
    pause: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PauseTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PauseTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restarts the specified trigger. */
    resume: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResumeTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResumeTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified trigger. */
    listOperations: {
        path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTriggerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTriggerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTriggerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTriggerOperationsResponse.decode(value),
    },
};
exports.TriggerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TriggerServiceService, "yandex.cloud.serverless.triggers.v1.TriggerService");
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
