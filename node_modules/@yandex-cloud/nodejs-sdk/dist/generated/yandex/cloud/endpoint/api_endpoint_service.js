"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndpointServiceClient = exports.ApiEndpointServiceService = exports.ListApiEndpointsResponse = exports.ListApiEndpointsRequest = exports.GetApiEndpointRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const api_endpoint_1 = require("../../../yandex/cloud/endpoint/api_endpoint");
exports.protobufPackage = "yandex.cloud.endpoint";
const baseGetApiEndpointRequest = {
    $type: "yandex.cloud.endpoint.GetApiEndpointRequest",
    apiEndpointId: "",
};
exports.GetApiEndpointRequest = {
    $type: "yandex.cloud.endpoint.GetApiEndpointRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiEndpointId !== "") {
            writer.uint32(10).string(message.apiEndpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetApiEndpointRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiEndpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetApiEndpointRequest);
        message.apiEndpointId =
            object.apiEndpointId !== undefined && object.apiEndpointId !== null
                ? String(object.apiEndpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiEndpointId !== undefined &&
            (obj.apiEndpointId = message.apiEndpointId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetApiEndpointRequest);
        message.apiEndpointId = (_a = object.apiEndpointId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetApiEndpointRequest.$type, exports.GetApiEndpointRequest);
const baseListApiEndpointsRequest = {
    $type: "yandex.cloud.endpoint.ListApiEndpointsRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListApiEndpointsRequest = {
    $type: "yandex.cloud.endpoint.ListApiEndpointsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApiEndpointsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
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
        const message = Object.assign({}, baseListApiEndpointsRequest);
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
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListApiEndpointsRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiEndpointsRequest.$type, exports.ListApiEndpointsRequest);
const baseListApiEndpointsResponse = {
    $type: "yandex.cloud.endpoint.ListApiEndpointsResponse",
    nextPageToken: "",
};
exports.ListApiEndpointsResponse = {
    $type: "yandex.cloud.endpoint.ListApiEndpointsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.endpoints) {
            api_endpoint_1.ApiEndpoint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApiEndpointsResponse);
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(api_endpoint_1.ApiEndpoint.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListApiEndpointsResponse);
        message.endpoints = ((_a = object.endpoints) !== null && _a !== void 0 ? _a : []).map((e) => api_endpoint_1.ApiEndpoint.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? api_endpoint_1.ApiEndpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListApiEndpointsResponse);
        message.endpoints =
            ((_a = object.endpoints) === null || _a === void 0 ? void 0 : _a.map((e) => api_endpoint_1.ApiEndpoint.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiEndpointsResponse.$type, exports.ListApiEndpointsResponse);
exports.ApiEndpointServiceService = {
    get: {
        path: "/yandex.cloud.endpoint.ApiEndpointService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetApiEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetApiEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(api_endpoint_1.ApiEndpoint.encode(value).finish()),
        responseDeserialize: (value) => api_endpoint_1.ApiEndpoint.decode(value),
    },
    list: {
        path: "/yandex.cloud.endpoint.ApiEndpointService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApiEndpointsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApiEndpointsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApiEndpointsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApiEndpointsResponse.decode(value),
    },
};
exports.ApiEndpointServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ApiEndpointServiceService, "yandex.cloud.endpoint.ApiEndpointService");
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
