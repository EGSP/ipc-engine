"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceDiagnosticsServiceClient = exports.PerformanceDiagnosticsServiceService = exports.ListRawStatementsResponse = exports.ListRawSessionStatesResponse = exports.ListRawSessionStatesRequest = exports.ListRawStatementsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const perf_diag_1 = require("../../../../../yandex/cloud/mdb/postgresql/v1/perf_diag");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
const baseListRawStatementsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListRawStatementsRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(42).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRawStatementsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 5:
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
        const message = Object.assign({}, baseListRawStatementsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListRawStatementsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.fromTime = (_b = object.fromTime) !== null && _b !== void 0 ? _b : undefined;
        message.toTime = (_c = object.toTime) !== null && _c !== void 0 ? _c : undefined;
        message.pageSize = (_d = object.pageSize) !== null && _d !== void 0 ? _d : 0;
        message.pageToken = (_e = object.pageToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRawStatementsRequest.$type, exports.ListRawStatementsRequest);
const baseListRawSessionStatesRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListRawSessionStatesRequest = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.fromTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fromTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.toTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.toTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(42).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRawSessionStatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.fromTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.toTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 5:
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
        const message = Object.assign({}, baseListRawSessionStatesRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.fromTime =
            object.fromTime !== undefined && object.fromTime !== null
                ? fromJsonTimestamp(object.fromTime)
                : undefined;
        message.toTime =
            object.toTime !== undefined && object.toTime !== null
                ? fromJsonTimestamp(object.toTime)
                : undefined;
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined && (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListRawSessionStatesRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.fromTime = (_b = object.fromTime) !== null && _b !== void 0 ? _b : undefined;
        message.toTime = (_c = object.toTime) !== null && _c !== void 0 ? _c : undefined;
        message.pageSize = (_d = object.pageSize) !== null && _d !== void 0 ? _d : 0;
        message.pageToken = (_e = object.pageToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRawSessionStatesRequest.$type, exports.ListRawSessionStatesRequest);
const baseListRawSessionStatesResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse",
    nextPageToken: "",
};
exports.ListRawSessionStatesResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.sessionStates) {
            perf_diag_1.SessionState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRawSessionStatesResponse);
        message.sessionStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionStates.push(perf_diag_1.SessionState.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRawSessionStatesResponse);
        message.sessionStates = ((_a = object.sessionStates) !== null && _a !== void 0 ? _a : []).map((e) => perf_diag_1.SessionState.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionStates) {
            obj.sessionStates = message.sessionStates.map((e) => e ? perf_diag_1.SessionState.toJSON(e) : undefined);
        }
        else {
            obj.sessionStates = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRawSessionStatesResponse);
        message.sessionStates =
            ((_a = object.sessionStates) === null || _a === void 0 ? void 0 : _a.map((e) => perf_diag_1.SessionState.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRawSessionStatesResponse.$type, exports.ListRawSessionStatesResponse);
const baseListRawStatementsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse",
    nextPageToken: "",
};
exports.ListRawStatementsResponse = {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.statements) {
            perf_diag_1.QueryStatement.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRawStatementsResponse);
        message.statements = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statements.push(perf_diag_1.QueryStatement.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRawStatementsResponse);
        message.statements = ((_a = object.statements) !== null && _a !== void 0 ? _a : []).map((e) => perf_diag_1.QueryStatement.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.statements) {
            obj.statements = message.statements.map((e) => e ? perf_diag_1.QueryStatement.toJSON(e) : undefined);
        }
        else {
            obj.statements = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRawStatementsResponse);
        message.statements =
            ((_a = object.statements) === null || _a === void 0 ? void 0 : _a.map((e) => perf_diag_1.QueryStatement.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRawStatementsResponse.$type, exports.ListRawStatementsResponse);
/** A set of methods for PostgreSQL performance diagnostics. */
exports.PerformanceDiagnosticsServiceService = {
    /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    listRawSessionStates: {
        path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawSessionStates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRawSessionStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRawSessionStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRawSessionStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRawSessionStatesResponse.decode(value),
    },
    /** Retrieves statistics on planning and execution of SQL statements (queries). */
    listRawStatements: {
        path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawStatements",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRawStatementsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRawStatementsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRawStatementsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRawStatementsResponse.decode(value),
    },
};
exports.PerformanceDiagnosticsServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PerformanceDiagnosticsServiceService, "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService");
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
