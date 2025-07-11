"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationServiceClient = exports.LocationServiceService = exports.ListLocationsResponse = exports.ListLocationsRequest = exports.GetLocationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const location_1 = require("../../../../yandex/cloud/ydb/v1/location");
exports.protobufPackage = "yandex.cloud.ydb.v1";
const baseGetLocationRequest = {
    $type: "yandex.cloud.ydb.v1.GetLocationRequest",
    locationId: "",
};
exports.GetLocationRequest = {
    $type: "yandex.cloud.ydb.v1.GetLocationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.locationId !== "") {
            writer.uint32(10).string(message.locationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLocationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLocationRequest);
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? String(object.locationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.locationId !== undefined && (obj.locationId = message.locationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLocationRequest);
        message.locationId = (_a = object.locationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLocationRequest.$type, exports.GetLocationRequest);
const baseListLocationsRequest = {
    $type: "yandex.cloud.ydb.v1.ListLocationsRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListLocationsRequest = {
    $type: "yandex.cloud.ydb.v1.ListLocationsRequest",
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
        const message = Object.assign({}, baseListLocationsRequest);
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
        const message = Object.assign({}, baseListLocationsRequest);
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
        const message = Object.assign({}, baseListLocationsRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLocationsRequest.$type, exports.ListLocationsRequest);
const baseListLocationsResponse = {
    $type: "yandex.cloud.ydb.v1.ListLocationsResponse",
    nextPageToken: "",
};
exports.ListLocationsResponse = {
    $type: "yandex.cloud.ydb.v1.ListLocationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locations) {
            location_1.Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListLocationsResponse);
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(location_1.Location.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListLocationsResponse);
        message.locations = ((_a = object.locations) !== null && _a !== void 0 ? _a : []).map((e) => location_1.Location.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? location_1.Location.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListLocationsResponse);
        message.locations =
            ((_a = object.locations) === null || _a === void 0 ? void 0 : _a.map((e) => location_1.Location.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLocationsResponse.$type, exports.ListLocationsResponse);
exports.LocationServiceService = {
    /** Returns the specified location. */
    get: {
        path: "/yandex.cloud.ydb.v1.LocationService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLocationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLocationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(location_1.Location.encode(value).finish()),
        responseDeserialize: (value) => location_1.Location.decode(value),
    },
    /** Returns the list of available locations. */
    list: {
        path: "/yandex.cloud.ydb.v1.LocationService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLocationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLocationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLocationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLocationsResponse.decode(value),
    },
};
exports.LocationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LocationServiceService, "yandex.cloud.ydb.v1.LocationService");
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
