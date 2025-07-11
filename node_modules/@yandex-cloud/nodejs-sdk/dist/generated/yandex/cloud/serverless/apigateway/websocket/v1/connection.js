"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = exports.Connection = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";
const baseConnection = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection",
    id: "",
    gatewayId: "",
};
exports.Connection = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.gatewayId !== "") {
            writer.uint32(18).string(message.gatewayId);
        }
        if (message.identity !== undefined) {
            exports.Identity.encode(message.identity, writer.uint32(26).fork()).ldelim();
        }
        if (message.connectedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.connectedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastActiveAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastActiveAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.gatewayId = reader.string();
                    break;
                case 3:
                    message.identity = exports.Identity.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastActiveAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnection);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.gatewayId =
            object.gatewayId !== undefined && object.gatewayId !== null
                ? String(object.gatewayId)
                : "";
        message.identity =
            object.identity !== undefined && object.identity !== null
                ? exports.Identity.fromJSON(object.identity)
                : undefined;
        message.connectedAt =
            object.connectedAt !== undefined && object.connectedAt !== null
                ? fromJsonTimestamp(object.connectedAt)
                : undefined;
        message.lastActiveAt =
            object.lastActiveAt !== undefined && object.lastActiveAt !== null
                ? fromJsonTimestamp(object.lastActiveAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.gatewayId !== undefined && (obj.gatewayId = message.gatewayId);
        message.identity !== undefined &&
            (obj.identity = message.identity
                ? exports.Identity.toJSON(message.identity)
                : undefined);
        message.connectedAt !== undefined &&
            (obj.connectedAt = message.connectedAt.toISOString());
        message.lastActiveAt !== undefined &&
            (obj.lastActiveAt = message.lastActiveAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseConnection);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.gatewayId = (_b = object.gatewayId) !== null && _b !== void 0 ? _b : "";
        message.identity =
            object.identity !== undefined && object.identity !== null
                ? exports.Identity.fromPartial(object.identity)
                : undefined;
        message.connectedAt = (_c = object.connectedAt) !== null && _c !== void 0 ? _c : undefined;
        message.lastActiveAt = (_d = object.lastActiveAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Connection.$type, exports.Connection);
const baseIdentity = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity",
    sourceIp: "",
    userAgent: "",
};
exports.Identity = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceIp !== "") {
            writer.uint32(10).string(message.sourceIp);
        }
        if (message.userAgent !== "") {
            writer.uint32(18).string(message.userAgent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIdentity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceIp = reader.string();
                    break;
                case 2:
                    message.userAgent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIdentity);
        message.sourceIp =
            object.sourceIp !== undefined && object.sourceIp !== null
                ? String(object.sourceIp)
                : "";
        message.userAgent =
            object.userAgent !== undefined && object.userAgent !== null
                ? String(object.userAgent)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceIp !== undefined && (obj.sourceIp = message.sourceIp);
        message.userAgent !== undefined && (obj.userAgent = message.userAgent);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseIdentity);
        message.sourceIp = (_a = object.sourceIp) !== null && _a !== void 0 ? _a : "";
        message.userAgent = (_b = object.userAgent) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Identity.$type, exports.Identity);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
