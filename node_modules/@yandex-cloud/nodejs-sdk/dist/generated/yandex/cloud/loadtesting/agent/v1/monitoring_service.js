"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringServiceClient = exports.MonitoringServiceService = exports.AddMetricResponse = exports.Metric = exports.MetricChunk = exports.AddMetricRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
const baseAddMetricRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest",
    computeInstanceId: "",
    jobId: "",
    agentInstanceId: "",
};
exports.AddMetricRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.jobId !== "") {
            writer.uint32(26).string(message.jobId);
        }
        for (const v of message.chunks) {
            exports.MetricChunk.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.agentInstanceId !== "") {
            writer.uint32(42).string(message.agentInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddMetricRequest);
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.jobId = reader.string();
                    break;
                case 4:
                    message.chunks.push(exports.MetricChunk.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.agentInstanceId = reader.string();
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
        const message = Object.assign({}, baseAddMetricRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        message.chunks = ((_a = object.chunks) !== null && _a !== void 0 ? _a : []).map((e) => exports.MetricChunk.fromJSON(e));
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? exports.MetricChunk.toJSON(e) : undefined);
        }
        else {
            obj.chunks = [];
        }
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAddMetricRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        message.chunks =
            ((_c = object.chunks) === null || _c === void 0 ? void 0 : _c.map((e) => exports.MetricChunk.fromPartial(e))) || [];
        message.agentInstanceId = (_d = object.agentInstanceId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddMetricRequest.$type, exports.AddMetricRequest);
const baseMetricChunk = {
    $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk",
    timestamp: 0,
    comment: "",
    instanceHost: "",
};
exports.MetricChunk = {
    $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.data) {
            exports.Metric.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== 0) {
            writer.uint32(16).int64(message.timestamp);
        }
        if (message.comment !== "") {
            writer.uint32(26).string(message.comment);
        }
        if (message.instanceHost !== "") {
            writer.uint32(34).string(message.instanceHost);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMetricChunk);
        message.data = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.Metric.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                case 3:
                    message.comment = reader.string();
                    break;
                case 4:
                    message.instanceHost = reader.string();
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
        const message = Object.assign({}, baseMetricChunk);
        message.data = ((_a = object.data) !== null && _a !== void 0 ? _a : []).map((e) => exports.Metric.fromJSON(e));
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? Number(object.timestamp)
                : 0;
        message.comment =
            object.comment !== undefined && object.comment !== null
                ? String(object.comment)
                : "";
        message.instanceHost =
            object.instanceHost !== undefined && object.instanceHost !== null
                ? String(object.instanceHost)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => (e ? exports.Metric.toJSON(e) : undefined));
        }
        else {
            obj.data = [];
        }
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        message.comment !== undefined && (obj.comment = message.comment);
        message.instanceHost !== undefined &&
            (obj.instanceHost = message.instanceHost);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMetricChunk);
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Metric.fromPartial(e))) || [];
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : 0;
        message.comment = (_c = object.comment) !== null && _c !== void 0 ? _c : "";
        message.instanceHost = (_d = object.instanceHost) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MetricChunk.$type, exports.MetricChunk);
const baseMetric = {
    $type: "yandex.cloud.loadtesting.agent.v1.Metric",
    metricType: "",
    metricName: "",
    metricValue: 0,
};
exports.Metric = {
    $type: "yandex.cloud.loadtesting.agent.v1.Metric",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metricType !== "") {
            writer.uint32(10).string(message.metricType);
        }
        if (message.metricName !== "") {
            writer.uint32(18).string(message.metricName);
        }
        if (message.metricValue !== 0) {
            writer.uint32(25).double(message.metricValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metricType = reader.string();
                    break;
                case 2:
                    message.metricName = reader.string();
                    break;
                case 3:
                    message.metricValue = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMetric);
        message.metricType =
            object.metricType !== undefined && object.metricType !== null
                ? String(object.metricType)
                : "";
        message.metricName =
            object.metricName !== undefined && object.metricName !== null
                ? String(object.metricName)
                : "";
        message.metricValue =
            object.metricValue !== undefined && object.metricValue !== null
                ? Number(object.metricValue)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metricType !== undefined && (obj.metricType = message.metricType);
        message.metricName !== undefined && (obj.metricName = message.metricName);
        message.metricValue !== undefined &&
            (obj.metricValue = message.metricValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMetric);
        message.metricType = (_a = object.metricType) !== null && _a !== void 0 ? _a : "";
        message.metricName = (_b = object.metricName) !== null && _b !== void 0 ? _b : "";
        message.metricValue = (_c = object.metricValue) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Metric.$type, exports.Metric);
const baseAddMetricResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse",
    metricTrailId: "",
    code: 0,
};
exports.AddMetricResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metricTrailId !== "") {
            writer.uint32(10).string(message.metricTrailId);
        }
        if (message.code !== 0) {
            writer.uint32(16).int64(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddMetricResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metricTrailId = reader.string();
                    break;
                case 2:
                    message.code = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddMetricResponse);
        message.metricTrailId =
            object.metricTrailId !== undefined && object.metricTrailId !== null
                ? String(object.metricTrailId)
                : "";
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metricTrailId !== undefined &&
            (obj.metricTrailId = message.metricTrailId);
        message.code !== undefined && (obj.code = Math.round(message.code));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddMetricResponse);
        message.metricTrailId = (_a = object.metricTrailId) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddMetricResponse.$type, exports.AddMetricResponse);
exports.MonitoringServiceService = {
    /** Saves monitoring events for specified job */
    addMetric: {
        path: "/yandex.cloud.loadtesting.agent.v1.MonitoringService/AddMetric",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddMetricRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddMetricRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.AddMetricResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.AddMetricResponse.decode(value),
    },
};
exports.MonitoringServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MonitoringServiceService, "yandex.cloud.loadtesting.agent.v1.MonitoringService");
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
