"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginBalancerMeta = exports.OriginNamedMeta = exports.OriginMeta = exports.OriginParams = exports.Origin = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseOrigin = {
    $type: "yandex.cloud.cdn.v1.Origin",
    id: 0,
    originGroupId: 0,
    source: "",
    enabled: false,
    backup: false,
};
exports.Origin = {
    $type: "yandex.cloud.cdn.v1.Origin",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            exports.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOrigin);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = exports.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOrigin);
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.backup =
            object.backup !== undefined && object.backup !== null
                ? Boolean(object.backup)
                : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? exports.OriginMeta.fromJSON(object.meta)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta ? exports.OriginMeta.toJSON(message.meta) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseOrigin);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : 0;
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.enabled = (_d = object.enabled) !== null && _d !== void 0 ? _d : false;
        message.backup = (_e = object.backup) !== null && _e !== void 0 ? _e : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? exports.OriginMeta.fromPartial(object.meta)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Origin.$type, exports.Origin);
const baseOriginParams = {
    $type: "yandex.cloud.cdn.v1.OriginParams",
    source: "",
    enabled: false,
    backup: false,
};
exports.OriginParams = {
    $type: "yandex.cloud.cdn.v1.OriginParams",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.source !== "") {
            writer.uint32(10).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(24).bool(message.backup);
        }
        if (message.meta !== undefined) {
            exports.OriginMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOriginParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.backup = reader.bool();
                    break;
                case 4:
                    message.meta = exports.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOriginParams);
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.backup =
            object.backup !== undefined && object.backup !== null
                ? Boolean(object.backup)
                : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? exports.OriginMeta.fromJSON(object.meta)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta ? exports.OriginMeta.toJSON(message.meta) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOriginParams);
        message.source = (_a = object.source) !== null && _a !== void 0 ? _a : "";
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        message.backup = (_c = object.backup) !== null && _c !== void 0 ? _c : false;
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? exports.OriginMeta.fromPartial(object.meta)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OriginParams.$type, exports.OriginParams);
const baseOriginMeta = { $type: "yandex.cloud.cdn.v1.OriginMeta" };
exports.OriginMeta = {
    $type: "yandex.cloud.cdn.v1.OriginMeta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.OriginNamedMeta.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message.bucket !== undefined) {
            exports.OriginNamedMeta.encode(message.bucket, writer.uint32(18).fork()).ldelim();
        }
        if (message.website !== undefined) {
            exports.OriginNamedMeta.encode(message.website, writer.uint32(26).fork()).ldelim();
        }
        if (message.balancer !== undefined) {
            exports.OriginBalancerMeta.encode(message.balancer, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOriginMeta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bucket = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.website = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balancer = exports.OriginBalancerMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOriginMeta);
        message.common =
            object.common !== undefined && object.common !== null
                ? exports.OriginNamedMeta.fromJSON(object.common)
                : undefined;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? exports.OriginNamedMeta.fromJSON(object.bucket)
                : undefined;
        message.website =
            object.website !== undefined && object.website !== null
                ? exports.OriginNamedMeta.fromJSON(object.website)
                : undefined;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? exports.OriginBalancerMeta.fromJSON(object.balancer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? exports.OriginNamedMeta.toJSON(message.common)
                : undefined);
        message.bucket !== undefined &&
            (obj.bucket = message.bucket
                ? exports.OriginNamedMeta.toJSON(message.bucket)
                : undefined);
        message.website !== undefined &&
            (obj.website = message.website
                ? exports.OriginNamedMeta.toJSON(message.website)
                : undefined);
        message.balancer !== undefined &&
            (obj.balancer = message.balancer
                ? exports.OriginBalancerMeta.toJSON(message.balancer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseOriginMeta);
        message.common =
            object.common !== undefined && object.common !== null
                ? exports.OriginNamedMeta.fromPartial(object.common)
                : undefined;
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? exports.OriginNamedMeta.fromPartial(object.bucket)
                : undefined;
        message.website =
            object.website !== undefined && object.website !== null
                ? exports.OriginNamedMeta.fromPartial(object.website)
                : undefined;
        message.balancer =
            object.balancer !== undefined && object.balancer !== null
                ? exports.OriginBalancerMeta.fromPartial(object.balancer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OriginMeta.$type, exports.OriginMeta);
const baseOriginNamedMeta = {
    $type: "yandex.cloud.cdn.v1.OriginNamedMeta",
    name: "",
};
exports.OriginNamedMeta = {
    $type: "yandex.cloud.cdn.v1.OriginNamedMeta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOriginNamedMeta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseOriginNamedMeta);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOriginNamedMeta);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OriginNamedMeta.$type, exports.OriginNamedMeta);
const baseOriginBalancerMeta = {
    $type: "yandex.cloud.cdn.v1.OriginBalancerMeta",
    id: "",
};
exports.OriginBalancerMeta = {
    $type: "yandex.cloud.cdn.v1.OriginBalancerMeta",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOriginBalancerMeta);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOriginBalancerMeta);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOriginBalancerMeta);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OriginBalancerMeta.$type, exports.OriginBalancerMeta);
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
