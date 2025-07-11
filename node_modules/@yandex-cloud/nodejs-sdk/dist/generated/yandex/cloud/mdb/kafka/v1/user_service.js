"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = exports.UserServiceService = exports.RevokeUserPermissionMetadata = exports.RevokeUserPermissionRequest = exports.GrantUserPermissionMetadata = exports.GrantUserPermissionRequest = exports.DeleteUserMetadata = exports.DeleteUserRequest = exports.UpdateUserMetadata = exports.UpdateUserRequest = exports.CreateUserMetadata = exports.CreateUserRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.GetUserRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const user_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/user");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
const baseGetUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetUserRequest",
    clusterId: "",
    userName: "",
};
exports.GetUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetUserRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetUserRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetUserRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetUserRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUserRequest.$type, exports.GetUserRequest);
const baseListUsersRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListUsersRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersRequest",
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
        const message = Object.assign({}, baseListUsersRequest);
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
        const message = Object.assign({}, baseListUsersRequest);
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
        const message = Object.assign({}, baseListUsersRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUsersRequest.$type, exports.ListUsersRequest);
const baseListUsersResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersResponse",
    nextPageToken: "",
};
exports.ListUsersResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            user_1.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListUsersResponse);
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(user_1.User.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListUsersResponse);
        message.users = ((_a = object.users) !== null && _a !== void 0 ? _a : []).map((e) => user_1.User.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.users) {
            obj.users = message.users.map((e) => (e ? user_1.User.toJSON(e) : undefined));
        }
        else {
            obj.users = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListUsersResponse);
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => user_1.User.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListUsersResponse.$type, exports.ListUsersResponse);
const baseCreateUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserRequest",
    clusterId: "",
};
exports.CreateUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userSpec !== undefined) {
            user_1.UserSpec.encode(message.userSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateUserRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userSpec = user_1.UserSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateUserRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userSpec =
            object.userSpec !== undefined && object.userSpec !== null
                ? user_1.UserSpec.fromJSON(object.userSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userSpec !== undefined &&
            (obj.userSpec = message.userSpec
                ? user_1.UserSpec.toJSON(message.userSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateUserRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userSpec =
            object.userSpec !== undefined && object.userSpec !== null
                ? user_1.UserSpec.fromPartial(object.userSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateUserRequest.$type, exports.CreateUserRequest);
const baseCreateUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserMetadata",
    clusterId: "",
    userName: "",
};
exports.CreateUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateUserMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateUserMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateUserMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateUserMetadata.$type, exports.CreateUserMetadata);
const baseUpdateUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserRequest",
    clusterId: "",
    userName: "",
    password: "",
};
exports.UpdateUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.password !== "") {
            writer.uint32(34).string(message.password);
        }
        for (const v of message.permissions) {
            user_1.Permission.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateUserRequest);
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.permissions.push(user_1.Permission.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateUserRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => user_1.Permission.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? user_1.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateUserRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        message.permissions =
            ((_d = object.permissions) === null || _d === void 0 ? void 0 : _d.map((e) => user_1.Permission.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateUserRequest.$type, exports.UpdateUserRequest);
const baseUpdateUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserMetadata",
    clusterId: "",
    userName: "",
};
exports.UpdateUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateUserMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateUserMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateUserMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateUserMetadata.$type, exports.UpdateUserMetadata);
const baseDeleteUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserRequest",
    clusterId: "",
    userName: "",
};
exports.DeleteUserRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteUserRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteUserRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteUserRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteUserRequest.$type, exports.DeleteUserRequest);
const baseDeleteUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserMetadata",
    clusterId: "",
    userName: "",
};
exports.DeleteUserMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteUserMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteUserMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteUserMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteUserMetadata.$type, exports.DeleteUserMetadata);
const baseGrantUserPermissionRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionRequest",
    clusterId: "",
    userName: "",
};
exports.GrantUserPermissionRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            user_1.Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrantUserPermissionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = user_1.Permission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrantUserPermissionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? user_1.Permission.fromJSON(object.permission)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? user_1.Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGrantUserPermissionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? user_1.Permission.fromPartial(object.permission)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrantUserPermissionRequest.$type, exports.GrantUserPermissionRequest);
const baseGrantUserPermissionMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionMetadata",
    clusterId: "",
    userName: "",
};
exports.GrantUserPermissionMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrantUserPermissionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrantUserPermissionMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGrantUserPermissionMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrantUserPermissionMetadata.$type, exports.GrantUserPermissionMetadata);
const baseRevokeUserPermissionRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionRequest",
    clusterId: "",
    userName: "",
};
exports.RevokeUserPermissionRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            user_1.Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRevokeUserPermissionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = user_1.Permission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRevokeUserPermissionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? user_1.Permission.fromJSON(object.permission)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? user_1.Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRevokeUserPermissionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? user_1.Permission.fromPartial(object.permission)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RevokeUserPermissionRequest.$type, exports.RevokeUserPermissionRequest);
const baseRevokeUserPermissionMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionMetadata",
    clusterId: "",
    userName: "",
};
exports.RevokeUserPermissionMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== "") {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRevokeUserPermissionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRevokeUserPermissionMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.userName =
            object.userName !== undefined && object.userName !== null
                ? String(object.userName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRevokeUserPermissionMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.userName = (_b = object.userName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RevokeUserPermissionMetadata.$type, exports.RevokeUserPermissionMetadata);
/** A set of methods for managing Kafka users. */
exports.UserServiceService = {
    /**
     * Returns the specified Kafka user.
     *
     * To get the list of available Kafka users, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUserRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(user_1.User.encode(value).finish()),
        responseDeserialize: (value) => user_1.User.decode(value),
    },
    /** Retrieves the list of Kafka users in the specified cluster. */
    list: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListUsersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListUsersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListUsersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListUsersResponse.decode(value),
    },
    /** Creates a Kafka user in the specified cluster. */
    create: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Kafka user. */
    update: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Kafka user. */
    delete: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteUserRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Grants permission to the specified Kafka user. */
    grantPermission: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/GrantPermission",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GrantUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GrantUserPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Revokes permission from the specified Kafka user. */
    revokePermission: {
        path: "/yandex.cloud.mdb.kafka.v1.UserService/RevokePermission",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RevokeUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RevokeUserPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.UserServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserServiceService, "yandex.cloud.mdb.kafka.v1.UserService");
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
