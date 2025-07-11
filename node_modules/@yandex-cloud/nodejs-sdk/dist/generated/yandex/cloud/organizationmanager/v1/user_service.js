"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = exports.UserServiceService = exports.DeleteMembershipResponse = exports.DeleteMembershipMetadata = exports.DeleteMembershipRequest = exports.ListMembersResponse_OrganizationUser = exports.ListMembersResponse = exports.ListMembersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const claims_1 = require("../../../../yandex/cloud/oauth/claims");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
const baseListMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListMembersRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersRequest",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListMembersRequest);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListMembersRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListMembersRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersRequest.$type, exports.ListMembersRequest);
const baseListMembersResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse",
    nextPageToken: "",
};
exports.ListMembersResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            exports.ListMembersResponse_OrganizationUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListMembersResponse);
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(exports.ListMembersResponse_OrganizationUser.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListMembersResponse);
        message.users = ((_a = object.users) !== null && _a !== void 0 ? _a : []).map((e) => exports.ListMembersResponse_OrganizationUser.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.users) {
            obj.users = message.users.map((e) => e ? exports.ListMembersResponse_OrganizationUser.toJSON(e) : undefined);
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
        const message = Object.assign({}, baseListMembersResponse);
        message.users =
            ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ListMembersResponse_OrganizationUser.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersResponse.$type, exports.ListMembersResponse);
const baseListMembersResponse_OrganizationUser = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser",
};
exports.ListMembersResponse_OrganizationUser = {
    $type: "yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subjectClaims !== undefined) {
            claims_1.SubjectClaims.encode(message.subjectClaims, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListMembersResponse_OrganizationUser);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectClaims = claims_1.SubjectClaims.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListMembersResponse_OrganizationUser);
        message.subjectClaims =
            object.subjectClaims !== undefined && object.subjectClaims !== null
                ? claims_1.SubjectClaims.fromJSON(object.subjectClaims)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subjectClaims !== undefined &&
            (obj.subjectClaims = message.subjectClaims
                ? claims_1.SubjectClaims.toJSON(message.subjectClaims)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseListMembersResponse_OrganizationUser);
        message.subjectClaims =
            object.subjectClaims !== undefined && object.subjectClaims !== null
                ? claims_1.SubjectClaims.fromPartial(object.subjectClaims)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersResponse_OrganizationUser.$type, exports.ListMembersResponse_OrganizationUser);
const baseDeleteMembershipRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest",
    organizationId: "",
    subjectId: "",
};
exports.DeleteMembershipRequest = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== "") {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteMembershipRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = Object.assign({}, baseDeleteMembershipRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteMembershipRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.subjectId = (_b = object.subjectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipRequest.$type, exports.DeleteMembershipRequest);
const baseDeleteMembershipMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata",
    organizationId: "",
    subjectId: "",
};
exports.DeleteMembershipMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== "") {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteMembershipMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = Object.assign({}, baseDeleteMembershipMetadata);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteMembershipMetadata);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.subjectId = (_b = object.subjectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipMetadata.$type, exports.DeleteMembershipMetadata);
const baseDeleteMembershipResponse = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse",
    organizationId: "",
    subjectId: "",
};
exports.DeleteMembershipResponse = {
    $type: "yandex.cloud.organizationmanager.v1.DeleteMembershipResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== "") {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteMembershipResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = Object.assign({}, baseDeleteMembershipResponse);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        message.subjectId =
            object.subjectId !== undefined && object.subjectId !== null
                ? String(object.subjectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteMembershipResponse);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.subjectId = (_b = object.subjectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipResponse.$type, exports.DeleteMembershipResponse);
/** A set of methods for managing Organization users. */
exports.UserServiceService = {
    /** List organization active members. */
    listMembers: {
        path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListMembersResponse.decode(value),
    },
    /** Delete user membership. */
    deleteMembership: {
        path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMembershipRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMembershipRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.UserServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserServiceService, "yandex.cloud.organizationmanager.v1.UserService");
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
