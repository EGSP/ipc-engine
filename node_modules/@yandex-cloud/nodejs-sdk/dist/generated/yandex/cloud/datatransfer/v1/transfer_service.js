"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferServiceClient = exports.TransferServiceService = exports.ActivateTransferMetadata = exports.ActivateTransferRequest = exports.DeactivateTransferMetadata = exports.DeactivateTransferRequest = exports.GetTransferRequest = exports.ListTransfersResponse = exports.ListTransfersRequest = exports.DeleteTransferMetadata = exports.DeleteTransferRequest = exports.UpdateTransferMetadata = exports.UpdateTransferRequest_LabelsEntry = exports.UpdateTransferRequest = exports.CreateTransferMetadata = exports.CreateTransferRequest_LabelsEntry = exports.CreateTransferRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const transfer_1 = require("../../../../yandex/cloud/datatransfer/v1/transfer");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.datatransfer.v1";
const baseCreateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest",
    sourceId: "",
    targetId: "",
    name: "",
    description: "",
    folderId: "",
    type: 0,
};
exports.CreateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceId !== "") {
            writer.uint32(10).string(message.sourceId);
        }
        if (message.targetId !== "") {
            writer.uint32(18).string(message.targetId);
        }
        if (message.name !== "") {
            writer.uint32(58).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateTransferRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.folderId !== "") {
            writer.uint32(34).string(message.folderId);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTransferRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceId = reader.string();
                    break;
                case 2:
                    message.targetId = reader.string();
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 8:
                    const entry8 = exports.CreateTransferRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.type = reader.int32();
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
        const message = Object.assign({}, baseCreateTransferRequest);
        message.sourceId =
            object.sourceId !== undefined && object.sourceId !== null
                ? String(object.sourceId)
                : "";
        message.targetId =
            object.targetId !== undefined && object.targetId !== null
                ? String(object.targetId)
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
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, transfer_1.transferTypeFromJSON)(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        message.targetId !== undefined && (obj.targetId = message.targetId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.type !== undefined && (obj.type = (0, transfer_1.transferTypeToJSON)(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseCreateTransferRequest);
        message.sourceId = (_a = object.sourceId) !== null && _a !== void 0 ? _a : "";
        message.targetId = (_b = object.targetId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.folderId = (_f = object.folderId) !== null && _f !== void 0 ? _f : "";
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTransferRequest.$type, exports.CreateTransferRequest);
const baseCreateTransferRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateTransferRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateTransferRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTransferRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateTransferRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTransferRequest_LabelsEntry.$type, exports.CreateTransferRequest_LabelsEntry);
const baseCreateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata",
    transferId: "",
};
exports.CreateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTransferMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTransferMetadata);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateTransferMetadata);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTransferMetadata.$type, exports.CreateTransferMetadata);
const baseUpdateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest",
    transferId: "",
    description: "",
    name: "",
};
exports.UpdateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateTransferRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTransferRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.UpdateTransferRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateTransferRequest);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateTransferRequest);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTransferRequest.$type, exports.UpdateTransferRequest);
const baseUpdateTransferRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateTransferRequest_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateTransferRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTransferRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateTransferRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTransferRequest_LabelsEntry.$type, exports.UpdateTransferRequest_LabelsEntry);
const baseUpdateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata",
    transferId: "",
};
exports.UpdateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTransferMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTransferMetadata);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateTransferMetadata);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTransferMetadata.$type, exports.UpdateTransferMetadata);
const baseDeleteTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest",
    transferId: "",
};
exports.DeleteTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTransferRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTransferRequest);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTransferRequest);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTransferRequest.$type, exports.DeleteTransferRequest);
const baseDeleteTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata",
    transferId: "",
};
exports.DeleteTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTransferMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTransferMetadata);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteTransferMetadata);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTransferMetadata.$type, exports.DeleteTransferMetadata);
const baseListTransfersRequest = {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListTransfersRequest = {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTransfersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
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
        const message = Object.assign({}, baseListTransfersRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListTransfersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTransfersRequest.$type, exports.ListTransfersRequest);
const baseListTransfersResponse = {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse",
    nextPageToken: "",
};
exports.ListTransfersResponse = {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.transfers) {
            transfer_1.Transfer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTransfersResponse);
        message.transfers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(transfer_1.Transfer.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListTransfersResponse);
        message.transfers = ((_a = object.transfers) !== null && _a !== void 0 ? _a : []).map((e) => transfer_1.Transfer.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => e ? transfer_1.Transfer.toJSON(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListTransfersResponse);
        message.transfers =
            ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map((e) => transfer_1.Transfer.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTransfersResponse.$type, exports.ListTransfersResponse);
const baseGetTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.GetTransferRequest",
    transferId: "",
};
exports.GetTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.GetTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTransferRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTransferRequest);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetTransferRequest);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTransferRequest.$type, exports.GetTransferRequest);
const baseDeactivateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest",
    transferId: "",
};
exports.DeactivateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateTransferRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeactivateTransferRequest);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateTransferRequest);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateTransferRequest.$type, exports.DeactivateTransferRequest);
const baseDeactivateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata",
    transferId: "",
};
exports.DeactivateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeactivateTransferMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeactivateTransferMetadata);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeactivateTransferMetadata);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeactivateTransferMetadata.$type, exports.DeactivateTransferMetadata);
const baseActivateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest",
    transferId: "",
};
exports.ActivateTransferRequest = {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateTransferRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateTransferRequest);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateTransferRequest);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateTransferRequest.$type, exports.ActivateTransferRequest);
const baseActivateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata",
    transferId: "",
};
exports.ActivateTransferMetadata = {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateTransferMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transferId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateTransferMetadata);
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? String(object.transferId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateTransferMetadata);
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateTransferMetadata.$type, exports.ActivateTransferMetadata);
exports.TransferServiceService = {
    create: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    list: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTransfersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTransfersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTransfersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTransfersResponse.decode(value),
    },
    get: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(transfer_1.Transfer.encode(value).finish()),
        responseDeserialize: (value) => transfer_1.Transfer.decode(value),
    },
    deactivate: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeactivateTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeactivateTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    activate: {
        path: "/yandex.cloud.datatransfer.v1.TransferService/Activate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateTransferRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateTransferRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.TransferServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TransferServiceService, "yandex.cloud.datatransfer.v1.TransferService");
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
