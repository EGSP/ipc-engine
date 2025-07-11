"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionServiceClient = exports.ExtensionServiceService = exports.CreateExtensionMetadata = exports.CreateExtensionRequest = exports.UpdateExtensionMetadata = exports.UpdateExtensionRequest = exports.DeleteExtensionMetadata = exports.DeleteExtensionRequest = exports.ListExtensionsResponse = exports.ListExtensionsRequest = exports.GetExtensionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const extension_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/extension");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
const baseGetExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest",
    clusterId: "",
    extensionId: "",
};
exports.GetExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetExtensionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetExtensionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetExtensionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetExtensionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetExtensionRequest.$type, exports.GetExtensionRequest);
const baseListExtensionsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListExtensionsRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsRequest",
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
        const message = Object.assign({}, baseListExtensionsRequest);
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
        const message = Object.assign({}, baseListExtensionsRequest);
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
        const message = Object.assign({}, baseListExtensionsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListExtensionsRequest.$type, exports.ListExtensionsRequest);
const baseListExtensionsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse",
    nextPageToken: "",
};
exports.ListExtensionsResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListExtensionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.extensions) {
            extension_1.Extension.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListExtensionsResponse);
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extensions.push(extension_1.Extension.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListExtensionsResponse);
        message.extensions = ((_a = object.extensions) !== null && _a !== void 0 ? _a : []).map((e) => extension_1.Extension.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e ? extension_1.Extension.toJSON(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListExtensionsResponse);
        message.extensions =
            ((_a = object.extensions) === null || _a === void 0 ? void 0 : _a.map((e) => extension_1.Extension.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListExtensionsResponse.$type, exports.ListExtensionsResponse);
const baseDeleteExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest",
    clusterId: "",
    extensionId: "",
};
exports.DeleteExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteExtensionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteExtensionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteExtensionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteExtensionRequest.$type, exports.DeleteExtensionRequest);
const baseDeleteExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata",
    clusterId: "",
    extensionId: "",
};
exports.DeleteExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteExtensionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteExtensionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteExtensionMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteExtensionMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteExtensionMetadata.$type, exports.DeleteExtensionMetadata);
const baseUpdateExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest",
    clusterId: "",
    extensionId: "",
    active: false,
};
exports.UpdateExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateExtensionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateExtensionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        message.active !== undefined && (obj.active = message.active);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateExtensionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateExtensionRequest.$type, exports.UpdateExtensionRequest);
const baseUpdateExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata",
    clusterId: "",
    extensionId: "",
};
exports.UpdateExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateExtensionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateExtensionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateExtensionMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateExtensionMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateExtensionMetadata.$type, exports.UpdateExtensionMetadata);
const baseCreateExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest",
    clusterId: "",
    name: "",
    uri: "",
    disabled: false,
};
exports.CreateExtensionRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.disabled === true) {
            writer.uint32(32).bool(message.disabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateExtensionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.disabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateExtensionRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateExtensionRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : "";
        message.disabled = (_d = object.disabled) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateExtensionRequest.$type, exports.CreateExtensionRequest);
const baseCreateExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata",
    clusterId: "",
    extensionId: "",
};
exports.CreateExtensionMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateExtensionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.extensionId !== "") {
            writer.uint32(18).string(message.extensionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateExtensionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.extensionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateExtensionMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.extensionId =
            object.extensionId !== undefined && object.extensionId !== null
                ? String(object.extensionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.extensionId !== undefined &&
            (obj.extensionId = message.extensionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateExtensionMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.extensionId = (_b = object.extensionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateExtensionMetadata.$type, exports.CreateExtensionMetadata);
exports.ExtensionServiceService = {
    /** Returns the specified extension of Elasticsearch cluster. */
    get: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetExtensionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetExtensionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(extension_1.Extension.encode(value).finish()),
        responseDeserialize: (value) => extension_1.Extension.decode(value),
    },
    /** Returns the list of available extensions for the specified Elasticsearch cluster. */
    list: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListExtensionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListExtensionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListExtensionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListExtensionsResponse.decode(value),
    },
    /** Creates new extension version. */
    create: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateExtensionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateExtensionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified extension. */
    update: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateExtensionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateExtensionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified extension. */
    delete: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteExtensionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteExtensionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ExtensionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ExtensionServiceService, "yandex.cloud.mdb.elasticsearch.v1.ExtensionService");
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
