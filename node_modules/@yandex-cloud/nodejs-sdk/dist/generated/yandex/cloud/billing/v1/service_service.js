"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceServiceClient = exports.ServiceServiceService = exports.ListServicesResponse = exports.ListServicesRequest = exports.GetServiceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const service_1 = require("../../../../yandex/cloud/billing/v1/service");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseGetServiceRequest = {
    $type: "yandex.cloud.billing.v1.GetServiceRequest",
    id: "",
};
exports.GetServiceRequest = {
    $type: "yandex.cloud.billing.v1.GetServiceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetServiceRequest);
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
        const message = Object.assign({}, baseGetServiceRequest);
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
        const message = Object.assign({}, baseGetServiceRequest);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetServiceRequest.$type, exports.GetServiceRequest);
const baseListServicesRequest = {
    $type: "yandex.cloud.billing.v1.ListServicesRequest",
    filter: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListServicesRequest = {
    $type: "yandex.cloud.billing.v1.ListServicesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filter !== "") {
            writer.uint32(10).string(message.filter);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListServicesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
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
        const message = Object.assign({}, baseListServicesRequest);
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
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
        message.filter !== undefined && (obj.filter = message.filter);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListServicesRequest);
        message.filter = (_a = object.filter) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServicesRequest.$type, exports.ListServicesRequest);
const baseListServicesResponse = {
    $type: "yandex.cloud.billing.v1.ListServicesResponse",
    nextPageToken: "",
};
exports.ListServicesResponse = {
    $type: "yandex.cloud.billing.v1.ListServicesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.services) {
            service_1.Service.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListServicesResponse);
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.services.push(service_1.Service.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListServicesResponse);
        message.services = ((_a = object.services) !== null && _a !== void 0 ? _a : []).map((e) => service_1.Service.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.services) {
            obj.services = message.services.map((e) => e ? service_1.Service.toJSON(e) : undefined);
        }
        else {
            obj.services = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListServicesResponse);
        message.services =
            ((_a = object.services) === null || _a === void 0 ? void 0 : _a.map((e) => service_1.Service.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListServicesResponse.$type, exports.ListServicesResponse);
/** A set of methods for managing Service resources. */
exports.ServiceServiceService = {
    /** Returns the specified service. */
    get: {
        path: "/yandex.cloud.billing.v1.ServiceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetServiceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetServiceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(service_1.Service.encode(value).finish()),
        responseDeserialize: (value) => service_1.Service.decode(value),
    },
    /** Retrieves the list of services. */
    list: {
        path: "/yandex.cloud.billing.v1.ServiceService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListServicesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListServicesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListServicesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListServicesResponse.decode(value),
    },
};
exports.ServiceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ServiceServiceService, "yandex.cloud.billing.v1.ServiceService");
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
