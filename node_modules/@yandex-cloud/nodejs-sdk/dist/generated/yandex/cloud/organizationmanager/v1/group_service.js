"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupServiceClient = exports.GroupServiceService = exports.MemberDelta = exports.UpdateGroupMembersMetadata = exports.UpdateGroupMembersRequest = exports.GroupMember = exports.ListGroupMembersResponse = exports.ListGroupMembersRequest = exports.ListGroupOperationsResponse = exports.ListGroupOperationsRequest = exports.DeleteGroupMetadata = exports.DeleteGroupRequest = exports.UpdateGroupMetadata = exports.UpdateGroupRequest = exports.CreateGroupMetadata = exports.CreateGroupRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.GetGroupRequest = exports.memberDelta_MemberActionToJSON = exports.memberDelta_MemberActionFromJSON = exports.MemberDelta_MemberAction = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const group_1 = require("../../../../yandex/cloud/organizationmanager/v1/group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
var MemberDelta_MemberAction;
(function (MemberDelta_MemberAction) {
    MemberDelta_MemberAction[MemberDelta_MemberAction["MEMBER_ACTION_UNSPECIFIED"] = 0] = "MEMBER_ACTION_UNSPECIFIED";
    /** ADD - Addition of a group member. */
    MemberDelta_MemberAction[MemberDelta_MemberAction["ADD"] = 1] = "ADD";
    /** REMOVE - Removal of a group member. */
    MemberDelta_MemberAction[MemberDelta_MemberAction["REMOVE"] = 2] = "REMOVE";
    MemberDelta_MemberAction[MemberDelta_MemberAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MemberDelta_MemberAction = exports.MemberDelta_MemberAction || (exports.MemberDelta_MemberAction = {}));
function memberDelta_MemberActionFromJSON(object) {
    switch (object) {
        case 0:
        case "MEMBER_ACTION_UNSPECIFIED":
            return MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED;
        case 1:
        case "ADD":
            return MemberDelta_MemberAction.ADD;
        case 2:
        case "REMOVE":
            return MemberDelta_MemberAction.REMOVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MemberDelta_MemberAction.UNRECOGNIZED;
    }
}
exports.memberDelta_MemberActionFromJSON = memberDelta_MemberActionFromJSON;
function memberDelta_MemberActionToJSON(object) {
    switch (object) {
        case MemberDelta_MemberAction.MEMBER_ACTION_UNSPECIFIED:
            return "MEMBER_ACTION_UNSPECIFIED";
        case MemberDelta_MemberAction.ADD:
            return "ADD";
        case MemberDelta_MemberAction.REMOVE:
            return "REMOVE";
        default:
            return "UNKNOWN";
    }
}
exports.memberDelta_MemberActionToJSON = memberDelta_MemberActionToJSON;
const baseGetGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest",
    groupId: "",
};
exports.GetGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetGroupRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetGroupRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGroupRequest.$type, exports.GetGroupRequest);
const baseListGroupsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListGroupsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
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
        const message = Object.assign({}, baseListGroupsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = Object.assign({}, baseListGroupsRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListGroupsRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupsRequest.$type, exports.ListGroupsRequest);
const baseListGroupsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse",
    nextPageToken: "",
};
exports.ListGroupsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.groups) {
            group_1.Group.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGroupsResponse);
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(group_1.Group.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGroupsResponse);
        message.groups = ((_a = object.groups) !== null && _a !== void 0 ? _a : []).map((e) => group_1.Group.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => (e ? group_1.Group.toJSON(e) : undefined));
        }
        else {
            obj.groups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGroupsResponse);
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => group_1.Group.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupsResponse.$type, exports.ListGroupsResponse);
const baseCreateGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest",
    organizationId: "",
    name: "",
    description: "",
};
exports.CreateGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGroupRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateGroupRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGroupRequest.$type, exports.CreateGroupRequest);
const baseCreateGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata",
    groupId: "",
};
exports.CreateGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.CreateGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateGroupMetadata);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateGroupMetadata);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateGroupMetadata.$type, exports.CreateGroupMetadata);
const baseUpdateGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest",
    groupId: "",
    name: "",
    description: "",
};
exports.UpdateGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateGroupRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupRequest.$type, exports.UpdateGroupRequest);
const baseUpdateGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata",
    groupId: "",
};
exports.UpdateGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupMetadata);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGroupMetadata);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMetadata.$type, exports.UpdateGroupMetadata);
const baseDeleteGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest",
    groupId: "",
};
exports.DeleteGroupRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGroupRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGroupRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGroupRequest.$type, exports.DeleteGroupRequest);
const baseDeleteGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata",
    groupId: "",
};
exports.DeleteGroupMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteGroupMetadata);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteGroupMetadata);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteGroupMetadata.$type, exports.DeleteGroupMetadata);
const baseListGroupOperationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest",
    groupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListGroupOperationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
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
        const message = Object.assign({}, baseListGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
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
        const message = Object.assign({}, baseListGroupOperationsRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
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
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListGroupOperationsRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupOperationsRequest.$type, exports.ListGroupOperationsRequest);
const baseListGroupOperationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListGroupOperationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupOperationsResponse",
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
        const message = Object.assign({}, baseListGroupOperationsResponse);
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
        const message = Object.assign({}, baseListGroupOperationsResponse);
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
        const message = Object.assign({}, baseListGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupOperationsResponse.$type, exports.ListGroupOperationsResponse);
const baseListGroupMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest",
    groupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListGroupMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
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
        const message = Object.assign({}, baseListGroupMembersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
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
        const message = Object.assign({}, baseListGroupMembersRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
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
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListGroupMembersRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupMembersRequest.$type, exports.ListGroupMembersRequest);
const baseListGroupMembersResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse",
    nextPageToken: "",
};
exports.ListGroupMembersResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListGroupMembersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.members) {
            exports.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListGroupMembersResponse);
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(exports.GroupMember.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListGroupMembersResponse);
        message.members = ((_a = object.members) !== null && _a !== void 0 ? _a : []).map((e) => exports.GroupMember.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? exports.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListGroupMembersResponse);
        message.members =
            ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GroupMember.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGroupMembersResponse.$type, exports.ListGroupMembersResponse);
const baseGroupMember = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMember",
    subjectId: "",
    subjectType: "",
};
exports.GroupMember = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMember",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subjectId !== "") {
            writer.uint32(10).string(message.subjectId);
        }
        if (message.subjectType !== "") {
            writer.uint32(18).string(message.subjectType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupMember);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectId = reader.string();
                    break;
                case 2:
                    message.subjectType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGroupMember);
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : "";
        message.subjectType =
            object.subjectType !== undefined && object.subjectType !== null
                ? String(object.subjectType)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        message.subjectType !== undefined &&
            (obj.subjectType = message.subjectType);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGroupMember);
        message.subjectId = (_a = object.subjectId) !== null && _a !== void 0 ? _a : "";
        message.subjectType = (_b = object.subjectType) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupMember.$type, exports.GroupMember);
const baseUpdateGroupMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest",
    groupId: "",
};
exports.UpdateGroupMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        for (const v of message.memberDeltas) {
            exports.MemberDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMembersRequest);
        message.memberDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.memberDeltas.push(exports.MemberDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateGroupMembersRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        message.memberDeltas = ((_a = object.memberDeltas) !== null && _a !== void 0 ? _a : []).map((e) => exports.MemberDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        if (message.memberDeltas) {
            obj.memberDeltas = message.memberDeltas.map((e) => e ? exports.MemberDelta.toJSON(e) : undefined);
        }
        else {
            obj.memberDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateGroupMembersRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.memberDeltas =
            ((_b = object.memberDeltas) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MemberDelta.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMembersRequest.$type, exports.UpdateGroupMembersRequest);
const baseUpdateGroupMembersMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata",
    groupId: "",
};
exports.UpdateGroupMembersMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateGroupMembersMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateGroupMembersMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateGroupMembersMetadata);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateGroupMembersMetadata);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateGroupMembersMetadata.$type, exports.UpdateGroupMembersMetadata);
const baseMemberDelta = {
    $type: "yandex.cloud.organizationmanager.v1.MemberDelta",
    action: 0,
    subjectId: "",
};
exports.MemberDelta = {
    $type: "yandex.cloud.organizationmanager.v1.MemberDelta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.subjectId !== "") {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMemberDelta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.subjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMemberDelta);
        message.action =
            object.action !== undefined && object.action !== null
                ? memberDelta_MemberActionFromJSON(object.action)
                : 0;
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = memberDelta_MemberActionToJSON(message.action));
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMemberDelta);
        message.action = (_a = object.action) !== null && _a !== void 0 ? _a : 0;
        message.subjectId = (_b = object.subjectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MemberDelta.$type, exports.MemberDelta);
/** A set of methods for managing groups. */
exports.GroupServiceService = {
    /**
     * Returns the specified Group resource.
     *
     * To get the list of available Group resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(group_1.Group.encode(value).finish()),
        responseDeserialize: (value) => group_1.Group.decode(value),
    },
    /** Retrieves the list of group resources. */
    list: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGroupsResponse.decode(value),
    },
    /** Creates a group in the specified organization. */
    create: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified group. */
    update: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified group. */
    delete: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified group. */
    listOperations: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGroupOperationsResponse.decode(value),
    },
    /** List group active members. */
    listMembers: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/ListMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListGroupMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListGroupMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListGroupMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListGroupMembersResponse.decode(value),
    },
    /** Update group members. */
    updateMembers: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateGroupMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateGroupMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists access bindings for the specified group. */
    listAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified group. */
    setAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified group. */
    updateAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.GroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GroupServiceService, "yandex.cloud.organizationmanager.v1.GroupService");
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
