"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityServiceClient = exports.CommunityServiceService = exports.UpdateCommunityAccessBindingsMetadata = exports.SetCommunityAccessBindingsMetadata = exports.ListCommunitiesResponse = exports.ListCommunitiesRequest = exports.DeleteCommunityMetadata = exports.DeleteCommunityRequest = exports.UpdateCommunityMetadata = exports.UpdateCommunityRequest_LabelsEntry = exports.UpdateCommunityRequest = exports.GetCommunityRequest = exports.CreateCommunityMetadata = exports.CreateCommunityRequest_LabelsEntry = exports.CreateCommunityRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const community_1 = require("../../../../yandex/cloud/datasphere/v2/community");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.datasphere.v2";
const baseCreateCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest",
    name: "",
    description: "",
    organizationId: "",
    billingAccountId: "",
};
exports.CreateCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.organizationId !== "") {
            writer.uint32(26).string(message.organizationId);
        }
        if (message.billingAccountId !== "") {
            writer.uint32(34).string(message.billingAccountId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateCommunityRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCommunityRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.organizationId = reader.string();
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                case 5:
                    const entry5 = exports.CreateCommunityRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateCommunityRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateCommunityRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.organizationId = (_c = object.organizationId) !== null && _c !== void 0 ? _c : "";
        message.billingAccountId = (_d = object.billingAccountId) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCommunityRequest.$type, exports.CreateCommunityRequest);
const baseCreateCommunityRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateCommunityRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateCommunityRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateCommunityRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateCommunityRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCommunityRequest_LabelsEntry.$type, exports.CreateCommunityRequest_LabelsEntry);
const baseCreateCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata",
    communityId: "",
};
exports.CreateCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.CreateCommunityMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCommunityMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateCommunityMetadata);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateCommunityMetadata);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCommunityMetadata.$type, exports.CreateCommunityMetadata);
const baseGetCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.GetCommunityRequest",
    communityId: "",
};
exports.GetCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.GetCommunityRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetCommunityRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetCommunityRequest);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetCommunityRequest);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCommunityRequest.$type, exports.GetCommunityRequest);
const baseUpdateCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest",
    communityId: "",
    name: "",
    description: "",
};
exports.UpdateCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
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
            exports.UpdateCommunityRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCommunityRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
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
                    const entry5 = exports.UpdateCommunityRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateCommunityRequest);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
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
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
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
        const message = Object.assign({}, baseUpdateCommunityRequest);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCommunityRequest.$type, exports.UpdateCommunityRequest);
const baseUpdateCommunityRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateCommunityRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateCommunityRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateCommunityRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateCommunityRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCommunityRequest_LabelsEntry.$type, exports.UpdateCommunityRequest_LabelsEntry);
const baseUpdateCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata",
    communityId: "",
};
exports.UpdateCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCommunityMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateCommunityMetadata);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateCommunityMetadata);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCommunityMetadata.$type, exports.UpdateCommunityMetadata);
const baseDeleteCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest",
    communityId: "",
};
exports.DeleteCommunityRequest = {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCommunityRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCommunityRequest);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteCommunityRequest);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCommunityRequest.$type, exports.DeleteCommunityRequest);
const baseDeleteCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata",
    communityId: "",
};
exports.DeleteCommunityMetadata = {
    $type: "yandex.cloud.datasphere.v2.DeleteCommunityMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCommunityMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCommunityMetadata);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteCommunityMetadata);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCommunityMetadata.$type, exports.DeleteCommunityMetadata);
const baseListCommunitiesRequest = {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest",
    pageSize: 0,
    pageToken: "",
    nameOrDescriptionPattern: "",
    ownedById: "",
    listPublic: false,
    organizationId: "",
};
exports.ListCommunitiesRequest = {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.nameOrDescriptionPattern !== "") {
            writer.uint32(26).string(message.nameOrDescriptionPattern);
        }
        if (message.ownedById !== "") {
            writer.uint32(42).string(message.ownedById);
        }
        if (message.listPublic === true) {
            writer.uint32(48).bool(message.listPublic);
        }
        if (message.organizationId !== "") {
            writer.uint32(58).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCommunitiesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.nameOrDescriptionPattern = reader.string();
                    break;
                case 5:
                    message.ownedById = reader.string();
                    break;
                case 6:
                    message.listPublic = reader.bool();
                    break;
                case 7:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListCommunitiesRequest);
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.nameOrDescriptionPattern =
            object.nameOrDescriptionPattern !== undefined &&
                object.nameOrDescriptionPattern !== null
                ? String(object.nameOrDescriptionPattern)
                : "";
        message.ownedById =
            object.ownedById !== undefined && object.ownedById !== null
                ? String(object.ownedById)
                : "";
        message.listPublic =
            object.listPublic !== undefined && object.listPublic !== null
                ? Boolean(object.listPublic)
                : false;
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.nameOrDescriptionPattern !== undefined &&
            (obj.nameOrDescriptionPattern = message.nameOrDescriptionPattern);
        message.ownedById !== undefined && (obj.ownedById = message.ownedById);
        message.listPublic !== undefined && (obj.listPublic = message.listPublic);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseListCommunitiesRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        message.nameOrDescriptionPattern = (_c = object.nameOrDescriptionPattern) !== null && _c !== void 0 ? _c : "";
        message.ownedById = (_d = object.ownedById) !== null && _d !== void 0 ? _d : "";
        message.listPublic = (_e = object.listPublic) !== null && _e !== void 0 ? _e : false;
        message.organizationId = (_f = object.organizationId) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCommunitiesRequest.$type, exports.ListCommunitiesRequest);
const baseListCommunitiesResponse = {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse",
    nextPageToken: "",
};
exports.ListCommunitiesResponse = {
    $type: "yandex.cloud.datasphere.v2.ListCommunitiesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.communities) {
            community_1.Community.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCommunitiesResponse);
        message.communities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communities.push(community_1.Community.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListCommunitiesResponse);
        message.communities = ((_a = object.communities) !== null && _a !== void 0 ? _a : []).map((e) => community_1.Community.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.communities) {
            obj.communities = message.communities.map((e) => e ? community_1.Community.toJSON(e) : undefined);
        }
        else {
            obj.communities = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListCommunitiesResponse);
        message.communities =
            ((_a = object.communities) === null || _a === void 0 ? void 0 : _a.map((e) => community_1.Community.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCommunitiesResponse.$type, exports.ListCommunitiesResponse);
const baseSetCommunityAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata",
    communityId: "",
};
exports.SetCommunityAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetCommunityAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetCommunityAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetCommunityAccessBindingsMetadata);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetCommunityAccessBindingsMetadata);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetCommunityAccessBindingsMetadata.$type, exports.SetCommunityAccessBindingsMetadata);
const baseUpdateCommunityAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata",
    communityId: "",
};
exports.UpdateCommunityAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateCommunityAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCommunityAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateCommunityAccessBindingsMetadata);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateCommunityAccessBindingsMetadata);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCommunityAccessBindingsMetadata.$type, exports.UpdateCommunityAccessBindingsMetadata);
exports.CommunityServiceService = {
    /** Creates community in specified organization. */
    create: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateCommunityRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateCommunityRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns community. */
    get: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCommunityRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCommunityRequest.decode(value),
        responseSerialize: (value) => Buffer.from(community_1.Community.encode(value).finish()),
        responseDeserialize: (value) => community_1.Community.decode(value),
    },
    /** Updates specified community. */
    update: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateCommunityRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateCommunityRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes specified community. */
    delete: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteCommunityRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteCommunityRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List communities in specified organization. */
    list: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCommunitiesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCommunitiesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCommunitiesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCommunitiesResponse.decode(value),
    },
    /** Lists access bindings for specified community. */
    listAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for specified community. */
    setAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for specified community. */
    updateAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.CommunityService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CommunityServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CommunityServiceService, "yandex.cloud.datasphere.v2.CommunityService");
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
