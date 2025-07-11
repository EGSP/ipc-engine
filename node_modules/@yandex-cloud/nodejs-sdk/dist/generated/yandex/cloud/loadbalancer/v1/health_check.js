"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck_HttpOptions = exports.HealthCheck_TcpOptions = exports.HealthCheck = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
exports.protobufPackage = "yandex.cloud.loadbalancer.v1";
const baseHealthCheck = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck",
    name: "",
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};
exports.HealthCheck = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(32).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(40).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            exports.HealthCheck_TcpOptions.encode(message.tcpOptions, writer.uint32(50).fork()).ldelim();
        }
        if (message.httpOptions !== undefined) {
            exports.HealthCheck_HttpOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 6:
                    message.tcpOptions = exports.HealthCheck_TcpOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.httpOptions = exports.HealthCheck_HttpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromJSON(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromJSON(object.timeout)
                : undefined;
        message.unhealthyThreshold =
            object.unhealthyThreshold !== undefined &&
                object.unhealthyThreshold !== null
                ? Number(object.unhealthyThreshold)
                : 0;
        message.healthyThreshold =
            object.healthyThreshold !== undefined && object.healthyThreshold !== null
                ? Number(object.healthyThreshold)
                : 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? exports.HealthCheck_TcpOptions.fromJSON(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? exports.HealthCheck_HttpOptions.fromJSON(object.httpOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = Math.round(message.unhealthyThreshold));
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = Math.round(message.healthyThreshold));
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? exports.HealthCheck_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? exports.HealthCheck_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHealthCheck);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromPartial(object.interval)
                : undefined;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromPartial(object.timeout)
                : undefined;
        message.unhealthyThreshold = (_b = object.unhealthyThreshold) !== null && _b !== void 0 ? _b : 0;
        message.healthyThreshold = (_c = object.healthyThreshold) !== null && _c !== void 0 ? _c : 0;
        message.tcpOptions =
            object.tcpOptions !== undefined && object.tcpOptions !== null
                ? exports.HealthCheck_TcpOptions.fromPartial(object.tcpOptions)
                : undefined;
        message.httpOptions =
            object.httpOptions !== undefined && object.httpOptions !== null
                ? exports.HealthCheck_HttpOptions.fromPartial(object.httpOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck.$type, exports.HealthCheck);
const baseHealthCheck_TcpOptions = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions",
    port: 0,
};
exports.HealthCheck_TcpOptions = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck_TcpOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck_TcpOptions);
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHealthCheck_TcpOptions);
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck_TcpOptions.$type, exports.HealthCheck_TcpOptions);
const baseHealthCheck_HttpOptions = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions",
    port: 0,
    path: "",
};
exports.HealthCheck_HttpOptions = {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck_HttpOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64());
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck_HttpOptions);
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseHealthCheck_HttpOptions);
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck_HttpOptions.$type, exports.HealthCheck_HttpOptions);
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
