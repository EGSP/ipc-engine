"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderServiceClient = exports.ProviderServiceService = exports.ListActivatedProvidersResponse = exports.ListActivatedProvidersRequest = exports.ActivateProviderMetadata = exports.ActivateProviderRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.backup.v1";
const baseActivateProviderRequest = {
    $type: "yandex.cloud.backup.v1.ActivateProviderRequest",
    folderId: "",
    name: "",
};
exports.ActivateProviderRequest = {
    $type: "yandex.cloud.backup.v1.ActivateProviderRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateProviderRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseActivateProviderRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseActivateProviderRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateProviderRequest.$type, exports.ActivateProviderRequest);
const baseActivateProviderMetadata = {
    $type: "yandex.cloud.backup.v1.ActivateProviderMetadata",
    folderId: "",
};
exports.ActivateProviderMetadata = {
    $type: "yandex.cloud.backup.v1.ActivateProviderMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateProviderMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateProviderMetadata);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateProviderMetadata);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateProviderMetadata.$type, exports.ActivateProviderMetadata);
const baseListActivatedProvidersRequest = {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest",
    folderId: "",
};
exports.ListActivatedProvidersRequest = {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListActivatedProvidersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListActivatedProvidersRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListActivatedProvidersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListActivatedProvidersRequest.$type, exports.ListActivatedProvidersRequest);
const baseListActivatedProvidersResponse = {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse",
    folderId: "",
    names: "",
};
exports.ListActivatedProvidersResponse = {
    $type: "yandex.cloud.backup.v1.ListActivatedProvidersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        for (const v of message.names) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListActivatedProvidersResponse);
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseListActivatedProvidersResponse);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.names = ((_a = object.names) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        const message = Object.assign({}, baseListActivatedProvidersResponse);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListActivatedProvidersResponse.$type, exports.ListActivatedProvidersResponse);
/** A set of methods for managing [backup providers](/docs/backup/concepts/#providers). */
exports.ProviderServiceService = {
    /** Activate provider for specified client. */
    activate: {
        path: "/yandex.cloud.backup.v1.ProviderService/Activate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List activated providers for specified client. */
    listActivated: {
        path: "/yandex.cloud.backup.v1.ProviderService/ListActivated",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListActivatedProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListActivatedProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListActivatedProvidersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListActivatedProvidersResponse.decode(value),
    },
};
exports.ProviderServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProviderServiceService, "yandex.cloud.backup.v1.ProviderService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
