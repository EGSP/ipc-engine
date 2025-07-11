"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionSpec = exports.Extension = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
const baseExtension = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Extension",
    name: "",
    id: "",
    clusterId: "",
    version: 0,
    active: false,
};
exports.Extension = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.Extension",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.clusterId !== "") {
            writer.uint32(26).string(message.clusterId);
        }
        if (message.version !== 0) {
            writer.uint32(32).int64(message.version);
        }
        if (message.active === true) {
            writer.uint32(40).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExtension);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.clusterId = reader.string();
                    break;
                case 4:
                    message.version = longToNumber(reader.int64());
                    break;
                case 5:
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
        const message = Object.assign({}, baseExtension);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.version =
            object.version !== undefined && object.version !== null
                ? Number(object.version)
                : 0;
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.version !== undefined &&
            (obj.version = Math.round(message.version));
        message.active !== undefined && (obj.active = message.active);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseExtension);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.clusterId = (_c = object.clusterId) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : 0;
        message.active = (_e = object.active) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Extension.$type, exports.Extension);
const baseExtensionSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec",
    name: "",
    uri: "",
    disabled: false,
};
exports.ExtensionSpec = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ExtensionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        if (message.disabled === true) {
            writer.uint32(24).bool(message.disabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExtensionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseExtensionSpec);
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
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseExtensionSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.uri = (_b = object.uri) !== null && _b !== void 0 ? _b : "";
        message.disabled = (_c = object.disabled) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExtensionSpec.$type, exports.ExtensionSpec);
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
