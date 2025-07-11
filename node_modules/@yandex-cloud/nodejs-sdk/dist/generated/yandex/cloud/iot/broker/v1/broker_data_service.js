"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerDataServiceClient = exports.BrokerDataServiceService = exports.PublishBrokerDataResponse = exports.PublishBrokerDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.iot.broker.v1";
const basePublishBrokerDataRequest = {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest",
    brokerId: "",
    topic: "",
};
exports.PublishBrokerDataRequest = {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
        }
        if (message.topic !== "") {
            writer.uint32(18).string(message.topic);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePublishBrokerDataRequest);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
                    break;
                case 2:
                    message.topic = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePublishBrokerDataRequest);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
                : "";
        message.topic =
            object.topic !== undefined && object.topic !== null
                ? String(object.topic)
                : "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePublishBrokerDataRequest);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.topic = (_b = object.topic) !== null && _b !== void 0 ? _b : "";
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PublishBrokerDataRequest.$type, exports.PublishBrokerDataRequest);
const basePublishBrokerDataResponse = {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse",
};
exports.PublishBrokerDataResponse = {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePublishBrokerDataResponse);
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
        const message = Object.assign({}, basePublishBrokerDataResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, basePublishBrokerDataResponse);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PublishBrokerDataResponse.$type, exports.PublishBrokerDataResponse);
/** A set of methods to work with IoT Core messages on behalf of broker */
exports.BrokerDataServiceService = {
    /** Publishes message on behalf of specified broker */
    publish: {
        path: "/yandex.cloud.iot.broker.v1.BrokerDataService/Publish",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PublishBrokerDataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PublishBrokerDataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.PublishBrokerDataResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.PublishBrokerDataResponse.decode(value),
    },
};
exports.BrokerDataServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BrokerDataServiceService, "yandex.cloud.iot.broker.v1.BrokerDataService");
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
