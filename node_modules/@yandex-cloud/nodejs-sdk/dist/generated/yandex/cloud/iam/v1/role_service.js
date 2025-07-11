"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleServiceClient = exports.RoleServiceService = exports.ListRolesResponse = exports.ListRolesRequest = exports.GetRoleRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const role_1 = require("../../../../yandex/cloud/iam/v1/role");
exports.protobufPackage = "yandex.cloud.iam.v1";
const baseGetRoleRequest = {
    $type: "yandex.cloud.iam.v1.GetRoleRequest",
    roleId: "",
};
exports.GetRoleRequest = {
    $type: "yandex.cloud.iam.v1.GetRoleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRoleRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRoleRequest);
        message.roleId =
            object.roleId !== undefined && object.roleId !== null
                ? String(object.roleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRoleRequest);
        message.roleId = (_a = object.roleId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRoleRequest.$type, exports.GetRoleRequest);
const baseListRolesRequest = {
    $type: "yandex.cloud.iam.v1.ListRolesRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListRolesRequest = {
    $type: "yandex.cloud.iam.v1.ListRolesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRolesRequest);
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
        const message = Object.assign({}, baseListRolesRequest);
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
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListRolesRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        message.filter = (_c = object.filter) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRolesRequest.$type, exports.ListRolesRequest);
const baseListRolesResponse = {
    $type: "yandex.cloud.iam.v1.ListRolesResponse",
    nextPageToken: "",
};
exports.ListRolesResponse = {
    $type: "yandex.cloud.iam.v1.ListRolesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.roles) {
            role_1.Role.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRolesResponse);
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles.push(role_1.Role.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRolesResponse);
        message.roles = ((_a = object.roles) !== null && _a !== void 0 ? _a : []).map((e) => role_1.Role.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.roles) {
            obj.roles = message.roles.map((e) => (e ? role_1.Role.toJSON(e) : undefined));
        }
        else {
            obj.roles = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRolesResponse);
        message.roles = ((_a = object.roles) === null || _a === void 0 ? void 0 : _a.map((e) => role_1.Role.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRolesResponse.$type, exports.ListRolesResponse);
/** A set of methods for managing Role resources. */
exports.RoleServiceService = {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.iam.v1.RoleService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRoleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRoleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(role_1.Role.encode(value).finish()),
        responseDeserialize: (value) => role_1.Role.decode(value),
    },
    /** Retrieves the list of Role resources. */
    list: {
        path: "/yandex.cloud.iam.v1.RoleService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRolesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRolesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRolesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRolesResponse.decode(value),
    },
};
exports.RoleServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RoleServiceService, "yandex.cloud.iam.v1.RoleService");
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
