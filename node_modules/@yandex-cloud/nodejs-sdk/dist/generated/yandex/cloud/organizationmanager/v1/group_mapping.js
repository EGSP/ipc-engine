"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMapping = exports.GroupMappingItem = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
const baseGroupMappingItem = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem",
    externalGroupId: "",
    internalGroupId: "",
};
exports.GroupMappingItem = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.externalGroupId !== "") {
            writer.uint32(10).string(message.externalGroupId);
        }
        if (message.internalGroupId !== "") {
            writer.uint32(18).string(message.internalGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupMappingItem);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalGroupId = reader.string();
                    break;
                case 2:
                    message.internalGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGroupMappingItem);
        message.externalGroupId =
            object.externalGroupId !== undefined && object.externalGroupId !== null
                ? String(object.externalGroupId)
                : "";
        message.internalGroupId =
            object.internalGroupId !== undefined && object.internalGroupId !== null
                ? String(object.internalGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalGroupId !== undefined &&
            (obj.externalGroupId = message.externalGroupId);
        message.internalGroupId !== undefined &&
            (obj.internalGroupId = message.internalGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGroupMappingItem);
        message.externalGroupId = (_a = object.externalGroupId) !== null && _a !== void 0 ? _a : "";
        message.internalGroupId = (_b = object.internalGroupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupMappingItem.$type, exports.GroupMappingItem);
const baseGroupMapping = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMapping",
    federationId: "",
    enabled: false,
};
exports.GroupMapping = {
    $type: "yandex.cloud.organizationmanager.v1.GroupMapping",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== "") {
            writer.uint32(10).string(message.federationId);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGroupMapping);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseGroupMapping);
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
        const message = Object.assign({}, baseGroupMapping);
        message.federationId = (_a = object.federationId) !== null && _a !== void 0 ? _a : "";
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GroupMapping.$type, exports.GroupMapping);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
