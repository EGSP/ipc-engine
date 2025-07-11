"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionServiceClient = exports.ConnectionServiceService = exports.DisconnectResponse = exports.DisconnectRequest = exports.SendToConnectionResponse = exports.SendToConnectionRequest = exports.GetConnectionRequest = exports.sendToConnectionRequest_DataTypeToJSON = exports.sendToConnectionRequest_DataTypeFromJSON = exports.SendToConnectionRequest_DataType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const connection_1 = require("../../../../../../yandex/cloud/serverless/apigateway/websocket/v1/connection");
exports.protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";
var SendToConnectionRequest_DataType;
(function (SendToConnectionRequest_DataType) {
    SendToConnectionRequest_DataType[SendToConnectionRequest_DataType["DATA_TYPE_UNSPECIFIED"] = 0] = "DATA_TYPE_UNSPECIFIED";
    /** BINARY - Binary data. */
    SendToConnectionRequest_DataType[SendToConnectionRequest_DataType["BINARY"] = 1] = "BINARY";
    /** TEXT - Text data. */
    SendToConnectionRequest_DataType[SendToConnectionRequest_DataType["TEXT"] = 2] = "TEXT";
    SendToConnectionRequest_DataType[SendToConnectionRequest_DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SendToConnectionRequest_DataType = exports.SendToConnectionRequest_DataType || (exports.SendToConnectionRequest_DataType = {}));
function sendToConnectionRequest_DataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNSPECIFIED":
            return SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED;
        case 1:
        case "BINARY":
            return SendToConnectionRequest_DataType.BINARY;
        case 2:
        case "TEXT":
            return SendToConnectionRequest_DataType.TEXT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SendToConnectionRequest_DataType.UNRECOGNIZED;
    }
}
exports.sendToConnectionRequest_DataTypeFromJSON = sendToConnectionRequest_DataTypeFromJSON;
function sendToConnectionRequest_DataTypeToJSON(object) {
    switch (object) {
        case SendToConnectionRequest_DataType.DATA_TYPE_UNSPECIFIED:
            return "DATA_TYPE_UNSPECIFIED";
        case SendToConnectionRequest_DataType.BINARY:
            return "BINARY";
        case SendToConnectionRequest_DataType.TEXT:
            return "TEXT";
        default:
            return "UNKNOWN";
    }
}
exports.sendToConnectionRequest_DataTypeToJSON = sendToConnectionRequest_DataTypeToJSON;
const baseGetConnectionRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest",
    connectionId: "",
};
exports.GetConnectionRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetConnectionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetConnectionRequest);
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetConnectionRequest);
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetConnectionRequest.$type, exports.GetConnectionRequest);
const baseSendToConnectionRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest",
    connectionId: "",
    type: 0,
};
exports.SendToConnectionRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSendToConnectionRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSendToConnectionRequest);
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        message.type =
            object.type !== undefined && object.type !== null
                ? sendToConnectionRequest_DataTypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.type !== undefined &&
            (obj.type = sendToConnectionRequest_DataTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSendToConnectionRequest);
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SendToConnectionRequest.$type, exports.SendToConnectionRequest);
const baseSendToConnectionResponse = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse",
};
exports.SendToConnectionResponse = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSendToConnectionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseSendToConnectionResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseSendToConnectionResponse);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SendToConnectionResponse.$type, exports.SendToConnectionResponse);
const baseDisconnectRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest",
    connectionId: "",
};
exports.DisconnectRequest = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDisconnectRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDisconnectRequest);
        message.connectionId =
            object.connectionId !== undefined && object.connectionId !== null
                ? String(object.connectionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDisconnectRequest);
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DisconnectRequest.$type, exports.DisconnectRequest);
const baseDisconnectResponse = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse",
};
exports.DisconnectResponse = {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDisconnectResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseDisconnectResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseDisconnectResponse);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DisconnectResponse.$type, exports.DisconnectResponse);
/** A set of methods for managing API Gateway WebSocket connections. */
exports.ConnectionServiceService = {
    /** Returns the specified connection info. */
    get: {
        path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetConnectionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetConnectionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(connection_1.Connection.encode(value).finish()),
        responseDeserialize: (value) => connection_1.Connection.decode(value),
    },
    /** Sends data to the specified connection. */
    send: {
        path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Send",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SendToConnectionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SendToConnectionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SendToConnectionResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SendToConnectionResponse.decode(value),
    },
    /** Disconnects the specified connection. */
    disconnect: {
        path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Disconnect",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DisconnectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DisconnectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DisconnectResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DisconnectResponse.decode(value),
    },
};
exports.ConnectionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ConnectionServiceService, "yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService");
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
