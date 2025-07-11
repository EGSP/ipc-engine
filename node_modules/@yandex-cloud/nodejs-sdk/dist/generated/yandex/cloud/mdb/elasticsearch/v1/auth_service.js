"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceClient = exports.AuthServiceService = exports.DeleteAuthProvidersMetadata = exports.UpdateAuthProvidersMetadata = exports.AddAuthProvidersMetadata = exports.DeleteAuthProviderRequest = exports.UpdateAuthProviderRequest = exports.DeleteAuthProvidersRequest = exports.UpdateAuthProvidersRequest = exports.AddAuthProvidersRequest = exports.GetAuthProviderRequest = exports.ListAuthProvidersResponse = exports.ListAuthProvidersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auth_1 = require("../../../../../yandex/cloud/mdb/elasticsearch/v1/auth");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
const baseListAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest",
    clusterId: "",
};
exports.ListAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAuthProvidersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListAuthProvidersRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListAuthProvidersRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAuthProvidersRequest.$type, exports.ListAuthProvidersRequest);
const baseListAuthProvidersResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse",
};
exports.ListAuthProvidersResponse = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            auth_1.AuthProvider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAuthProvidersResponse);
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(auth_1.AuthProvider.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListAuthProvidersResponse);
        message.providers = ((_a = object.providers) !== null && _a !== void 0 ? _a : []).map((e) => auth_1.AuthProvider.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? auth_1.AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListAuthProvidersResponse);
        message.providers =
            ((_a = object.providers) === null || _a === void 0 ? void 0 : _a.map((e) => auth_1.AuthProvider.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAuthProvidersResponse.$type, exports.ListAuthProvidersResponse);
const baseGetAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest",
    clusterId: "",
    name: "",
};
exports.GetAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAuthProviderRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAuthProviderRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetAuthProviderRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAuthProviderRequest.$type, exports.GetAuthProviderRequest);
const baseAddAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest",
    clusterId: "",
};
exports.AddAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providers) {
            auth_1.AuthProvider.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddAuthProvidersRequest);
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providers.push(auth_1.AuthProvider.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAddAuthProvidersRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.providers = ((_a = object.providers) !== null && _a !== void 0 ? _a : []).map((e) => auth_1.AuthProvider.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? auth_1.AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddAuthProvidersRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.providers =
            ((_b = object.providers) === null || _b === void 0 ? void 0 : _b.map((e) => auth_1.AuthProvider.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddAuthProvidersRequest.$type, exports.AddAuthProvidersRequest);
const baseUpdateAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest",
    clusterId: "",
};
exports.UpdateAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providers) {
            auth_1.AuthProvider.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAuthProvidersRequest);
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providers.push(auth_1.AuthProvider.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateAuthProvidersRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.providers = ((_a = object.providers) !== null && _a !== void 0 ? _a : []).map((e) => auth_1.AuthProvider.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? auth_1.AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateAuthProvidersRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.providers =
            ((_b = object.providers) === null || _b === void 0 ? void 0 : _b.map((e) => auth_1.AuthProvider.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAuthProvidersRequest.$type, exports.UpdateAuthProvidersRequest);
const baseDeleteAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest",
    clusterId: "",
    providerNames: "",
};
exports.DeleteAuthProvidersRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providerNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAuthProvidersRequest);
        message.providerNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providerNames.push(reader.string());
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
        const message = Object.assign({}, baseDeleteAuthProvidersRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.providerNames = ((_a = object.providerNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providerNames) {
            obj.providerNames = message.providerNames.map((e) => e);
        }
        else {
            obj.providerNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteAuthProvidersRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.providerNames = ((_b = object.providerNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAuthProvidersRequest.$type, exports.DeleteAuthProvidersRequest);
const baseUpdateAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest",
    clusterId: "",
    name: "",
};
exports.UpdateAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.provider !== undefined) {
            auth_1.AuthProvider.encode(message.provider, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAuthProviderRequest);
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
                    message.provider = auth_1.AuthProvider.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateAuthProviderRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? auth_1.AuthProvider.fromJSON(object.provider)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.provider !== undefined &&
            (obj.provider = message.provider
                ? auth_1.AuthProvider.toJSON(message.provider)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateAuthProviderRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.provider =
            object.provider !== undefined && object.provider !== null
                ? auth_1.AuthProvider.fromPartial(object.provider)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAuthProviderRequest.$type, exports.UpdateAuthProviderRequest);
const baseDeleteAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest",
    clusterId: "",
    name: "",
};
exports.DeleteAuthProviderRequest = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAuthProviderRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAuthProviderRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteAuthProviderRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAuthProviderRequest.$type, exports.DeleteAuthProviderRequest);
const baseAddAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata",
    clusterId: "",
    names: "",
};
exports.AddAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddAuthProvidersMetadata);
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
        const message = Object.assign({}, baseAddAuthProvidersMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.names = ((_a = object.names) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddAuthProvidersMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddAuthProvidersMetadata.$type, exports.AddAuthProvidersMetadata);
const baseUpdateAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata",
    clusterId: "",
    names: "",
};
exports.UpdateAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateAuthProvidersMetadata);
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
        const message = Object.assign({}, baseUpdateAuthProvidersMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.names = ((_a = object.names) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateAuthProvidersMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAuthProvidersMetadata.$type, exports.UpdateAuthProvidersMetadata);
const baseDeleteAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata",
    clusterId: "",
    names: "",
};
exports.DeleteAuthProvidersMetadata = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAuthProvidersMetadata);
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
        const message = Object.assign({}, baseDeleteAuthProvidersMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.names = ((_a = object.names) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteAuthProvidersMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAuthProvidersMetadata.$type, exports.DeleteAuthProvidersMetadata);
/** A set of methods for managing Elasticsearch Authentication resources. */
exports.AuthServiceService = {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAuthProvidersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAuthProvidersResponse.decode(value),
    },
    /** Returns registered auth provider by name. */
    getProvider: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(auth_1.AuthProvider.encode(value).finish()),
        responseDeserialize: (value) => auth_1.AuthProvider.decode(value),
    },
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Replase the list of auth providers. */
    updateProviders: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates registered auth provider. */
    updateProvider: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider: {
        path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AuthServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AuthServiceService, "yandex.cloud.mdb.elasticsearch.v1.AuthService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
