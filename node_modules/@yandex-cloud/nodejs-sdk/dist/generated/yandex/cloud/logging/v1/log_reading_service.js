"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogReadingServiceClient = exports.LogReadingServiceService = exports.Criteria = exports.ReadResponse = exports.ReadRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const log_entry_1 = require("../../../../yandex/cloud/logging/v1/log_entry");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseReadRequest = {
    $type: "yandex.cloud.logging.v1.ReadRequest",
};
exports.ReadRequest = {
    $type: "yandex.cloud.logging.v1.ReadRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageToken !== undefined) {
            writer.uint32(10).string(message.pageToken);
        }
        if (message.criteria !== undefined) {
            exports.Criteria.encode(message.criteria, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseReadRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageToken = reader.string();
                    break;
                case 2:
                    message.criteria = exports.Criteria.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseReadRequest);
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : undefined;
        message.criteria =
            object.criteria !== undefined && object.criteria !== null
                ? exports.Criteria.fromJSON(object.criteria)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.criteria !== undefined &&
            (obj.criteria = message.criteria
                ? exports.Criteria.toJSON(message.criteria)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseReadRequest);
        message.pageToken = (_a = object.pageToken) !== null && _a !== void 0 ? _a : undefined;
        message.criteria =
            object.criteria !== undefined && object.criteria !== null
                ? exports.Criteria.fromPartial(object.criteria)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReadRequest.$type, exports.ReadRequest);
const baseReadResponse = {
    $type: "yandex.cloud.logging.v1.ReadResponse",
    logGroupId: "",
    nextPageToken: "",
    previousPageToken: "",
};
exports.ReadResponse = {
    $type: "yandex.cloud.logging.v1.ReadResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.entries) {
            log_entry_1.LogEntry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(26).string(message.nextPageToken);
        }
        if (message.previousPageToken !== "") {
            writer.uint32(34).string(message.previousPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseReadResponse);
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.entries.push(log_entry_1.LogEntry.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextPageToken = reader.string();
                    break;
                case 4:
                    message.previousPageToken = reader.string();
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
        const message = Object.assign({}, baseReadResponse);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.entries = ((_a = object.entries) !== null && _a !== void 0 ? _a : []).map((e) => log_entry_1.LogEntry.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        message.previousPageToken =
            object.previousPageToken !== undefined &&
                object.previousPageToken !== null
                ? String(object.previousPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? log_entry_1.LogEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        message.previousPageToken !== undefined &&
            (obj.previousPageToken = message.previousPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseReadResponse);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.entries = ((_b = object.entries) === null || _b === void 0 ? void 0 : _b.map((e) => log_entry_1.LogEntry.fromPartial(e))) || [];
        message.nextPageToken = (_c = object.nextPageToken) !== null && _c !== void 0 ? _c : "";
        message.previousPageToken = (_d = object.previousPageToken) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReadResponse.$type, exports.ReadResponse);
const baseCriteria = {
    $type: "yandex.cloud.logging.v1.Criteria",
    logGroupId: "",
    resourceTypes: "",
    resourceIds: "",
    levels: 0,
    filter: "",
    streamNames: "",
    pageSize: 0,
    maxResponseSize: 0,
};
exports.Criteria = {
    $type: "yandex.cloud.logging.v1.Criteria",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.resourceTypes) {
            writer.uint32(18).string(v);
        }
        for (const v of message.resourceIds) {
            writer.uint32(26).string(v);
        }
        if (message.since !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.since), writer.uint32(34).fork()).ldelim();
        }
        if (message.until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.until), writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.levels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.filter !== "") {
            writer.uint32(58).string(message.filter);
        }
        for (const v of message.streamNames) {
            writer.uint32(82).string(v);
        }
        if (message.pageSize !== 0) {
            writer.uint32(64).int64(message.pageSize);
        }
        if (message.maxResponseSize !== 0) {
            writer.uint32(72).int64(message.maxResponseSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCriteria);
        message.resourceTypes = [];
        message.resourceIds = [];
        message.levels = [];
        message.streamNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.resourceTypes.push(reader.string());
                    break;
                case 3:
                    message.resourceIds.push(reader.string());
                    break;
                case 4:
                    message.since = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.levels.push(reader.int32());
                        }
                    }
                    else {
                        message.levels.push(reader.int32());
                    }
                    break;
                case 7:
                    message.filter = reader.string();
                    break;
                case 10:
                    message.streamNames.push(reader.string());
                    break;
                case 8:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.maxResponseSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCriteria);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.resourceTypes = ((_a = object.resourceTypes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.resourceIds = ((_b = object.resourceIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.since =
            object.since !== undefined && object.since !== null
                ? fromJsonTimestamp(object.since)
                : undefined;
        message.until =
            object.until !== undefined && object.until !== null
                ? fromJsonTimestamp(object.until)
                : undefined;
        message.levels = ((_c = object.levels) !== null && _c !== void 0 ? _c : []).map((e) => (0, log_entry_1.logLevel_LevelFromJSON)(e));
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.streamNames = ((_d = object.streamNames) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.maxResponseSize =
            object.maxResponseSize !== undefined && object.maxResponseSize !== null
                ? Number(object.maxResponseSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.resourceTypes) {
            obj.resourceTypes = message.resourceTypes.map((e) => e);
        }
        else {
            obj.resourceTypes = [];
        }
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        }
        else {
            obj.resourceIds = [];
        }
        message.since !== undefined && (obj.since = message.since.toISOString());
        message.until !== undefined && (obj.until = message.until.toISOString());
        if (message.levels) {
            obj.levels = message.levels.map((e) => (0, log_entry_1.logLevel_LevelToJSON)(e));
        }
        else {
            obj.levels = [];
        }
        message.filter !== undefined && (obj.filter = message.filter);
        if (message.streamNames) {
            obj.streamNames = message.streamNames.map((e) => e);
        }
        else {
            obj.streamNames = [];
        }
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.maxResponseSize !== undefined &&
            (obj.maxResponseSize = Math.round(message.maxResponseSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseCriteria);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.resourceTypes = ((_b = object.resourceTypes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.resourceIds = ((_c = object.resourceIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.since = (_d = object.since) !== null && _d !== void 0 ? _d : undefined;
        message.until = (_e = object.until) !== null && _e !== void 0 ? _e : undefined;
        message.levels = ((_f = object.levels) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.filter = (_g = object.filter) !== null && _g !== void 0 ? _g : "";
        message.streamNames = ((_h = object.streamNames) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.pageSize = (_j = object.pageSize) !== null && _j !== void 0 ? _j : 0;
        message.maxResponseSize = (_k = object.maxResponseSize) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Criteria.$type, exports.Criteria);
/** A set of methods for reading from log groups. */
exports.LogReadingServiceService = {
    /** Read log entries from the specified log group. */
    read: {
        path: "/yandex.cloud.logging.v1.LogReadingService/Read",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ReadRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ReadRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ReadResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ReadResponse.decode(value),
    },
};
exports.LogReadingServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LogReadingServiceService, "yandex.cloud.logging.v1.LogReadingService");
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
