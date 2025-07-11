"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMappingServiceClient = exports.GroupMappingServiceService = exports.ListGroupMappingItemsResponse = exports.ListGroupMappingItemsRequest = exports.UpdateGroupMappingItemsResponse = exports.UpdateGroupMappingItemsMetadata = exports.GroupMappingItemDelta = exports.UpdateGroupMappingItemsRequest = exports.DeleteGroupMappingMetadata = exports.DeleteGroupMappingRequest = exports.UpdateGroupMappingMetadata = exports.UpdateGroupMappingRequest = exports.CreateGroupMappingMetadata = exports.CreateGroupMappingRequest = exports.GetGroupMappingResponse = exports.GetGroupMappingRequest = exports.groupMappingItemDelta_ActionToJSON = exports.groupMappingItemDelta_ActionFromJSON = exports.GroupMappingItemDelta_Action = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const group_mapping_1 = require("../../../../yandex/cloud/organizationmanager/v1/group_mapping");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
var GroupMappingItemDelta_Action;
(function (GroupMappingItemDelta_Action) {
    GroupMappingItemDelta_Action[GroupMappingItemDelta_Action["ACTION_UNSPECIFIED"] = 0] = "ACTION_UNSPECIFIED";
    /** ADD - Group mapping item is to be added */
    GroupMappingItemDelta_Action[GroupMappingItemDelta_Action["ADD"] = 1] = "ADD";
    /** REMOVE - Group mapping item is to be removed */
    GroupMappingItemDelta_Action[GroupMappingItemDelta_Action["REMOVE"] = 2] = "REMOVE";
    GroupMappingItemDelta_Action[GroupMappingItemDelta_Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GroupMappingItemDelta_Action = exports.GroupMappingItemDelta_Action || (exports.GroupMappingItemDelta_Action = {}));
function groupMappingItemDelta_ActionFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_UNSPECIFIED":
            return GroupMappingItemDelta_Action.ACTION_UNSPECIFIED;
        case 1:
        case "ADD":
            return GroupMappingItemDelta_Action.ADD;
        case 2:
        case "REMOVE":
            return GroupMappingItemDelta_Action.REMOVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GroupMappingItemDelta_Action.UNRECOGNIZED;
    }
}
exports.groupMappingItemDelta_ActionFromJSON = groupMappingItemDelta_ActionFromJSON;
function groupMappingItemDelta_ActionToJSON(object) {
    switch (object) {
        case GroupMappingItemDelta_Action.ACTION_UNSPECIFIED:
            return "ACTION_UNSPECIFIED";
        case GroupMappingItemDelta_Action.ADD:
            return "ADD";
        case GroupMappingItemDelta_Action.REMOVE:
            return "REMOVE";
        default:
            return "UNKNOWN";
    }
}
exports.groupMappingItemDelta_ActionToJSON = groupMappingItemDelta_ActionToJSON;
const baseGetGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest",
    federationId: "",
};
exports.GetGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetGroupMappingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetGroupMappingRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetGroupMappingRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGroupMappingRequest.$type, exports.GetGroupMappingRequest);
const baseGetGroupMappingResponse = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse",
};
exports.GetGroupMappingResponse = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupMappingResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupMapping !== undefined) {
            group_mapping_1.GroupMapping.encode(message.groupMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetGroupMappingResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupMapping = group_mapping_1.GroupMapping.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetGroupMappingResponse);
        message.groupMapping =
            object.groupMapping !== undefined && object.groupMapping !== null
                ? group_mapping_1.GroupMapping.fromJSON(object.groupMapping)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupMapping !== undefined &&
            (obj.groupMapping = message.groupMapping
                ? group_mapping_1.GroupMapping.toJSON(message.groupMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGetGroupMappingResponse);
        message.groupMapping =
            object.groupMapping !== undefined && object.groupMapping !== null
                ? group_mapping_1.GroupMapping.fromPartial(object.groupMapping)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGroupMappingResponse.$type, exports.GetGroupMappingResponse);
const baseCreateGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest",
    federationId: "",
    enabled: false,
};
exports.CreateGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGroupMappingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGroupMappingRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateGroupMappingRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGroupMappingRequest.$type, exports.CreateGroupMappingRequest);
const baseCreateGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata",
    federationId: "",
};
exports.CreateGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMappingMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGroupMappingMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGroupMappingMetadata);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateGroupMappingMetadata);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGroupMappingMetadata.$type, exports.CreateGroupMappingMetadata);
const baseUpdateGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest",
    federationId: "",
    enabled: false,
};
exports.UpdateGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMappingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupMappingRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateGroupMappingRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMappingRequest.$type, exports.UpdateGroupMappingRequest);
const baseUpdateGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata",
    federationId: "",
};
exports.UpdateGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMappingMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupMappingMetadata);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGroupMappingMetadata);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMappingMetadata.$type, exports.UpdateGroupMappingMetadata);
const baseDeleteGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest",
    federationId: "",
};
exports.DeleteGroupMappingRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGroupMappingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGroupMappingRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGroupMappingRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGroupMappingRequest.$type, exports.DeleteGroupMappingRequest);
const baseDeleteGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata",
    federationId: "",
};
exports.DeleteGroupMappingMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMappingMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGroupMappingMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGroupMappingMetadata);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGroupMappingMetadata);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGroupMappingMetadata.$type, exports.DeleteGroupMappingMetadata);
const baseUpdateGroupMappingItemsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest",
    federationId: "",
};
exports.UpdateGroupMappingItemsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.groupMappingItemDeltas) {
            exports.GroupMappingItemDelta.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMappingItemsRequest);
        message.groupMappingItemDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 4:
                    message.groupMappingItemDeltas.push(exports.GroupMappingItemDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateGroupMappingItemsRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        message.groupMappingItemDeltas = ((_a = object.groupMappingItemDeltas) !== null && _a !== void 0 ? _a : []).map((e) => exports.GroupMappingItemDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        if (message.groupMappingItemDeltas) {
            obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) => e ? exports.GroupMappingItemDelta.toJSON(e) : undefined);
        }
        else {
            obj.groupMappingItemDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateGroupMappingItemsRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.groupMappingItemDeltas =
            ((_b = object.groupMappingItemDeltas) === null || _b === void 0 ? void 0 : _b.map((e) => exports.GroupMappingItemDelta.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMappingItemsRequest.$type, exports.UpdateGroupMappingItemsRequest);
const baseGroupMappingItemDelta = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta",
    action: 0,
};
exports.GroupMappingItemDelta = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItemDelta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.item !== undefined) {
            group_mapping_1.GroupMappingItem.encode(message.item, writer.uint32(10).fork()).ldelim();
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupMappingItemDelta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.item = group_mapping_1.GroupMappingItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGroupMappingItemDelta);
        message.item =
            object.item !== undefined && object.item !== null
                ? group_mapping_1.GroupMappingItem.fromJSON(object.item)
                : undefined;
        message.action =
            object.action !== undefined && object.action !== null
                ? groupMappingItemDelta_ActionFromJSON(object.action)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.item !== undefined &&
            (obj.item = message.item
                ? group_mapping_1.GroupMappingItem.toJSON(message.item)
                : undefined);
        message.action !== undefined &&
            (obj.action = groupMappingItemDelta_ActionToJSON(message.action));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGroupMappingItemDelta);
        message.item =
            object.item !== undefined && object.item !== null
                ? group_mapping_1.GroupMappingItem.fromPartial(object.item)
                : undefined;
        message.action = (_a = object.action) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupMappingItemDelta.$type, exports.GroupMappingItemDelta);
const baseUpdateGroupMappingItemsMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata",
    federationId: "",
};
exports.UpdateGroupMappingItemsMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMappingItemsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupMappingItemsMetadata);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGroupMappingItemsMetadata);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMappingItemsMetadata.$type, exports.UpdateGroupMappingItemsMetadata);
const baseUpdateGroupMappingItemsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse",
};
exports.UpdateGroupMappingItemsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMappingItemsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.groupMappingItemDeltas) {
            exports.GroupMappingItemDelta.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMappingItemsResponse);
        message.groupMappingItemDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.groupMappingItemDeltas.push(exports.GroupMappingItemDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateGroupMappingItemsResponse);
        message.groupMappingItemDeltas = ((_a = object.groupMappingItemDeltas) !== null && _a !== void 0 ? _a : []).map((e) => exports.GroupMappingItemDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.groupMappingItemDeltas) {
            obj.groupMappingItemDeltas = message.groupMappingItemDeltas.map((e) => e ? exports.GroupMappingItemDelta.toJSON(e) : undefined);
        }
        else {
            obj.groupMappingItemDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGroupMappingItemsResponse);
        message.groupMappingItemDeltas =
            ((_a = object.groupMappingItemDeltas) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GroupMappingItemDelta.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMappingItemsResponse.$type, exports.UpdateGroupMappingItemsResponse);
const baseListGroupMappingItemsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest",
    federationId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListGroupMappingItemsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
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
        const message = Object.assign({}, baseListGroupMappingItemsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
        const message = Object.assign({}, baseListGroupMappingItemsRequest);
        message.federationId =
            object.federationId !== undefined && object.federationId !== null
                ? String(object.federationId)
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
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListGroupMappingItemsRequest);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupMappingItemsRequest.$type, exports.ListGroupMappingItemsRequest);
const baseListGroupMappingItemsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse",
    nextPageToken: "",
};
exports.ListGroupMappingItemsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMappingItemsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.groupMappingItems) {
            group_mapping_1.GroupMappingItem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGroupMappingItemsResponse);
        message.groupMappingItems = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupMappingItems.push(group_mapping_1.GroupMappingItem.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGroupMappingItemsResponse);
        message.groupMappingItems = ((_a = object.groupMappingItems) !== null && _a !== void 0 ? _a : []).map((e) => group_mapping_1.GroupMappingItem.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.groupMappingItems) {
            obj.groupMappingItems = message.groupMappingItems.map((e) => e ? group_mapping_1.GroupMappingItem.toJSON(e) : undefined);
        }
        else {
            obj.groupMappingItems = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGroupMappingItemsResponse);
        message.groupMappingItems =
            ((_a = object.groupMappingItems) === null || _a === void 0 ? void 0 : _a.map((e) => group_mapping_1.GroupMappingItem.fromPartial(e))) ||
                [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupMappingItemsResponse.$type, exports.ListGroupMappingItemsResponse);
/** RPC service dedicated for federation group mapping. */
exports.GroupMappingServiceService = {
    /**
     * Returns a group mapping configured for the specific federation
     * If a federation does not exist this call will return an error
     *    NOT_FOUND will be returned
     * If a federation exist, but has not ever been configured for group mapping
     *   the call FAILED_PRECONDITION will be returned.
     */
    get: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetGroupMappingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetGroupMappingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetGroupMappingResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetGroupMappingResponse.decode(value),
    },
    /**
     * Adds a group mapping for a federation
     * If mapping already exist, ALREADY_EXISTS will be returned
     */
    create: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateGroupMappingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateGroupMappingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates an existing group mapping for a federation
     * Errors:
     * - if federation is not found
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - enabling when already enabled
     * - disabling when disabled
     * Such parts of request will be ignored. Others will be applied.
     */
    update: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGroupMappingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGroupMappingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes a group mapping. This will remove all the mapping items
     * cascade.
     */
    delete: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteGroupMappingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteGroupMappingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns all the group mappings items
     *
     * Filtering is only supported by external_group_id or internal_group_id
     */
    listItems: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/ListItems",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGroupMappingItemsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGroupMappingItemsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGroupMappingItemsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGroupMappingItemsResponse.decode(value),
    },
    /**
     * Updates group mapping items for a specified federation
     * Errors:
     * - if federation is not found
     * - if internal group in the mapping added does not exist
     * In case of any error, no changes are applied to existing group mapping
     *
     * This call is idempotent. The following actions do nothing:
     * - adding group mapping items that are already present
     * - removing group mapping items that are not present
     * Such parts of request will be ignored. Others will be applied.
     */
    updateItems: {
        path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/UpdateItems",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGroupMappingItemsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGroupMappingItemsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.GroupMappingServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GroupMappingServiceService, "yandex.cloud.organizationmanager.v1.GroupMappingService");
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
