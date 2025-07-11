"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessBindingsOperationResult = exports.AccessBindingDelta = exports.UpdateAccessBindingsMetadata = exports.UpdateAccessBindingsRequest = exports.SetAccessBindingsMetadata = exports.SetAccessBindingsRequest = exports.ListAccessBindingsResponse = exports.ListAccessBindingsRequest = exports.AccessBinding = exports.Subject = exports.accessBindingActionToJSON = exports.accessBindingActionFromJSON = exports.AccessBindingAction = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.access";
var AccessBindingAction;
(function (AccessBindingAction) {
    AccessBindingAction[AccessBindingAction["ACCESS_BINDING_ACTION_UNSPECIFIED"] = 0] = "ACCESS_BINDING_ACTION_UNSPECIFIED";
    /** ADD - Addition of an access binding. */
    AccessBindingAction[AccessBindingAction["ADD"] = 1] = "ADD";
    /** REMOVE - Removal of an access binding. */
    AccessBindingAction[AccessBindingAction["REMOVE"] = 2] = "REMOVE";
    AccessBindingAction[AccessBindingAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessBindingAction = exports.AccessBindingAction || (exports.AccessBindingAction = {}));
function accessBindingActionFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_BINDING_ACTION_UNSPECIFIED":
            return AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED;
        case 1:
        case "ADD":
            return AccessBindingAction.ADD;
        case 2:
        case "REMOVE":
            return AccessBindingAction.REMOVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessBindingAction.UNRECOGNIZED;
    }
}
exports.accessBindingActionFromJSON = accessBindingActionFromJSON;
function accessBindingActionToJSON(object) {
    switch (object) {
        case AccessBindingAction.ACCESS_BINDING_ACTION_UNSPECIFIED:
            return "ACCESS_BINDING_ACTION_UNSPECIFIED";
        case AccessBindingAction.ADD:
            return "ADD";
        case AccessBindingAction.REMOVE:
            return "REMOVE";
        default:
            return "UNKNOWN";
    }
}
exports.accessBindingActionToJSON = accessBindingActionToJSON;
const baseSubject = {
    $type: "yandex.cloud.access.Subject",
    id: "",
    type: "",
};
exports.Subject = {
    $type: "yandex.cloud.access.Subject",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSubject);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSubject);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSubject);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subject.$type, exports.Subject);
const baseAccessBinding = {
    $type: "yandex.cloud.access.AccessBinding",
    roleId: "",
};
exports.AccessBinding = {
    $type: "yandex.cloud.access.AccessBinding",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        if (message.subject !== undefined) {
            exports.Subject.encode(message.subject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccessBinding);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                case 2:
                    message.subject = exports.Subject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccessBinding);
        message.roleId =
            object.roleId !== undefined && object.roleId !== null
                ? String(object.roleId)
                : "";
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? exports.Subject.fromJSON(object.subject)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.subject !== undefined &&
            (obj.subject = message.subject
                ? exports.Subject.toJSON(message.subject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAccessBinding);
        message.roleId = (_a = object.roleId) !== null && _a !== void 0 ? _a : "";
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? exports.Subject.fromPartial(object.subject)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccessBinding.$type, exports.AccessBinding);
const baseListAccessBindingsRequest = {
    $type: "yandex.cloud.access.ListAccessBindingsRequest",
    resourceId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListAccessBindingsRequest = {
    $type: "yandex.cloud.access.ListAccessBindingsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
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
        const message = Object.assign({}, baseListAccessBindingsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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
        const message = Object.assign({}, baseListAccessBindingsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
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
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListAccessBindingsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessBindingsRequest.$type, exports.ListAccessBindingsRequest);
const baseListAccessBindingsResponse = {
    $type: "yandex.cloud.access.ListAccessBindingsResponse",
    nextPageToken: "",
};
exports.ListAccessBindingsResponse = {
    $type: "yandex.cloud.access.ListAccessBindingsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accessBindings) {
            exports.AccessBinding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAccessBindingsResponse);
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessBindings.push(exports.AccessBinding.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAccessBindingsResponse);
        message.accessBindings = ((_a = object.accessBindings) !== null && _a !== void 0 ? _a : []).map((e) => exports.AccessBinding.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) => e ? exports.AccessBinding.toJSON(e) : undefined);
        }
        else {
            obj.accessBindings = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListAccessBindingsResponse);
        message.accessBindings =
            ((_a = object.accessBindings) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AccessBinding.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessBindingsResponse.$type, exports.ListAccessBindingsResponse);
const baseSetAccessBindingsRequest = {
    $type: "yandex.cloud.access.SetAccessBindingsRequest",
    resourceId: "",
};
exports.SetAccessBindingsRequest = {
    $type: "yandex.cloud.access.SetAccessBindingsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindings) {
            exports.AccessBinding.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetAccessBindingsRequest);
        message.accessBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindings.push(exports.AccessBinding.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSetAccessBindingsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.accessBindings = ((_a = object.accessBindings) !== null && _a !== void 0 ? _a : []).map((e) => exports.AccessBinding.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        if (message.accessBindings) {
            obj.accessBindings = message.accessBindings.map((e) => e ? exports.AccessBinding.toJSON(e) : undefined);
        }
        else {
            obj.accessBindings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetAccessBindingsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.accessBindings =
            ((_b = object.accessBindings) === null || _b === void 0 ? void 0 : _b.map((e) => exports.AccessBinding.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetAccessBindingsRequest.$type, exports.SetAccessBindingsRequest);
const baseSetAccessBindingsMetadata = {
    $type: "yandex.cloud.access.SetAccessBindingsMetadata",
    resourceId: "",
};
exports.SetAccessBindingsMetadata = {
    $type: "yandex.cloud.access.SetAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetAccessBindingsMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetAccessBindingsMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetAccessBindingsMetadata.$type, exports.SetAccessBindingsMetadata);
const baseUpdateAccessBindingsRequest = {
    $type: "yandex.cloud.access.UpdateAccessBindingsRequest",
    resourceId: "",
};
exports.UpdateAccessBindingsRequest = {
    $type: "yandex.cloud.access.UpdateAccessBindingsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.accessBindingDeltas) {
            exports.AccessBindingDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAccessBindingsRequest);
        message.accessBindingDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.accessBindingDeltas.push(exports.AccessBindingDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateAccessBindingsRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.accessBindingDeltas = ((_a = object.accessBindingDeltas) !== null && _a !== void 0 ? _a : []).map((e) => exports.AccessBindingDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        if (message.accessBindingDeltas) {
            obj.accessBindingDeltas = message.accessBindingDeltas.map((e) => e ? exports.AccessBindingDelta.toJSON(e) : undefined);
        }
        else {
            obj.accessBindingDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateAccessBindingsRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.accessBindingDeltas =
            ((_b = object.accessBindingDeltas) === null || _b === void 0 ? void 0 : _b.map((e) => exports.AccessBindingDelta.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessBindingsRequest.$type, exports.UpdateAccessBindingsRequest);
const baseUpdateAccessBindingsMetadata = {
    $type: "yandex.cloud.access.UpdateAccessBindingsMetadata",
    resourceId: "",
};
exports.UpdateAccessBindingsMetadata = {
    $type: "yandex.cloud.access.UpdateAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAccessBindingsMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateAccessBindingsMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessBindingsMetadata.$type, exports.UpdateAccessBindingsMetadata);
const baseAccessBindingDelta = {
    $type: "yandex.cloud.access.AccessBindingDelta",
    action: 0,
};
exports.AccessBindingDelta = {
    $type: "yandex.cloud.access.AccessBindingDelta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        if (message.accessBinding !== undefined) {
            exports.AccessBinding.encode(message.accessBinding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccessBindingDelta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.accessBinding = exports.AccessBinding.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAccessBindingDelta);
        message.action =
            object.action !== undefined && object.action !== null
                ? accessBindingActionFromJSON(object.action)
                : 0;
        message.accessBinding =
            object.accessBinding !== undefined && object.accessBinding !== null
                ? exports.AccessBinding.fromJSON(object.accessBinding)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = accessBindingActionToJSON(message.action));
        message.accessBinding !== undefined &&
            (obj.accessBinding = message.accessBinding
                ? exports.AccessBinding.toJSON(message.accessBinding)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAccessBindingDelta);
        message.action = (_a = object.action) !== null && _a !== void 0 ? _a : 0;
        message.accessBinding =
            object.accessBinding !== undefined && object.accessBinding !== null
                ? exports.AccessBinding.fromPartial(object.accessBinding)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccessBindingDelta.$type, exports.AccessBindingDelta);
const baseAccessBindingsOperationResult = {
    $type: "yandex.cloud.access.AccessBindingsOperationResult",
};
exports.AccessBindingsOperationResult = {
    $type: "yandex.cloud.access.AccessBindingsOperationResult",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.effectiveDeltas) {
            exports.AccessBindingDelta.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAccessBindingsOperationResult);
        message.effectiveDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveDeltas.push(exports.AccessBindingDelta.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAccessBindingsOperationResult);
        message.effectiveDeltas = ((_a = object.effectiveDeltas) !== null && _a !== void 0 ? _a : []).map((e) => exports.AccessBindingDelta.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.effectiveDeltas) {
            obj.effectiveDeltas = message.effectiveDeltas.map((e) => e ? exports.AccessBindingDelta.toJSON(e) : undefined);
        }
        else {
            obj.effectiveDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAccessBindingsOperationResult);
        message.effectiveDeltas =
            ((_a = object.effectiveDeltas) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AccessBindingDelta.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AccessBindingsOperationResult.$type, exports.AccessBindingsOperationResult);
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
