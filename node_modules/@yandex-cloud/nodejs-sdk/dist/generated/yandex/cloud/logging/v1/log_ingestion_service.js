"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIngestionServiceClient = exports.LogIngestionServiceService = exports.WriteResponse_ErrorsEntry = exports.WriteResponse = exports.WriteRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const log_entry_1 = require("../../../../yandex/cloud/logging/v1/log_entry");
const log_resource_1 = require("../../../../yandex/cloud/logging/v1/log_resource");
const status_1 = require("../../../../google/rpc/status");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseWriteRequest = {
    $type: "yandex.cloud.logging.v1.WriteRequest",
};
exports.WriteRequest = {
    $type: "yandex.cloud.logging.v1.WriteRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.destination !== undefined) {
            log_entry_1.Destination.encode(message.destination, writer.uint32(10).fork()).ldelim();
        }
        if (message.resource !== undefined) {
            log_resource_1.LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.entries) {
            log_entry_1.IncomingLogEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaults !== undefined) {
            log_entry_1.LogEntryDefaults.encode(message.defaults, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWriteRequest);
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = log_entry_1.Destination.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resource = log_resource_1.LogEntryResource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.entries.push(log_entry_1.IncomingLogEntry.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.defaults = log_entry_1.LogEntryDefaults.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseWriteRequest);
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? log_entry_1.Destination.fromJSON(object.destination)
                : undefined;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? log_resource_1.LogEntryResource.fromJSON(object.resource)
                : undefined;
        message.entries = ((_a = object.entries) !== null && _a !== void 0 ? _a : []).map((e) => log_entry_1.IncomingLogEntry.fromJSON(e));
        message.defaults =
            object.defaults !== undefined && object.defaults !== null
                ? log_entry_1.LogEntryDefaults.fromJSON(object.defaults)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? log_entry_1.Destination.toJSON(message.destination)
                : undefined);
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? log_resource_1.LogEntryResource.toJSON(message.resource)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? log_entry_1.IncomingLogEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.defaults !== undefined &&
            (obj.defaults = message.defaults
                ? log_entry_1.LogEntryDefaults.toJSON(message.defaults)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseWriteRequest);
        message.destination =
            object.destination !== undefined && object.destination !== null
                ? log_entry_1.Destination.fromPartial(object.destination)
                : undefined;
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? log_resource_1.LogEntryResource.fromPartial(object.resource)
                : undefined;
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => log_entry_1.IncomingLogEntry.fromPartial(e))) || [];
        message.defaults =
            object.defaults !== undefined && object.defaults !== null
                ? log_entry_1.LogEntryDefaults.fromPartial(object.defaults)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WriteRequest.$type, exports.WriteRequest);
const baseWriteResponse = {
    $type: "yandex.cloud.logging.v1.WriteResponse",
};
exports.WriteResponse = {
    $type: "yandex.cloud.logging.v1.WriteResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.errors).forEach(([key, value]) => {
            exports.WriteResponse_ErrorsEntry.encode({
                $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWriteResponse);
        message.errors = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.WriteResponse_ErrorsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.errors[entry1.key] = entry1.value;
                    }
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
        const message = Object.assign({}, baseWriteResponse);
        message.errors = Object.entries((_a = object.errors) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[Number(key)] = status_1.Status.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.errors = {};
        if (message.errors) {
            Object.entries(message.errors).forEach(([k, v]) => {
                obj.errors[k] = status_1.Status.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseWriteResponse);
        message.errors = Object.entries((_a = object.errors) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = status_1.Status.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WriteResponse.$type, exports.WriteResponse);
const baseWriteResponse_ErrorsEntry = {
    $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
    key: 0,
};
exports.WriteResponse_ErrorsEntry = {
    $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).int64(message.key);
        }
        if (message.value !== undefined) {
            status_1.Status.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWriteResponse_ErrorsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = longToNumber(reader.int64());
                    break;
                case 2:
                    message.value = status_1.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWriteResponse_ErrorsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? Number(object.key) : 0;
        message.value =
            object.value !== undefined && object.value !== null
                ? status_1.Status.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined &&
            (obj.value = message.value ? status_1.Status.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseWriteResponse_ErrorsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : 0;
        message.value =
            object.value !== undefined && object.value !== null
                ? status_1.Status.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WriteResponse_ErrorsEntry.$type, exports.WriteResponse_ErrorsEntry);
/** A set of methods for writing to log groups. */
exports.LogIngestionServiceService = {
    /** Write log entries to specified destination. */
    write: {
        path: "/yandex.cloud.logging.v1.LogIngestionService/Write",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.WriteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.WriteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.WriteResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.WriteResponse.decode(value),
    },
};
exports.LogIngestionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LogIngestionServiceService, "yandex.cloud.logging.v1.LogIngestionService");
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
