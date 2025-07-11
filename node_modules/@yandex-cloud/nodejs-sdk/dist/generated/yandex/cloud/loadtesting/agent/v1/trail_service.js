"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailServiceClient = exports.TrailServiceService = exports.CreateTrailResponse = exports.Trail_Intervals = exports.Trail_Codes = exports.Trail = exports.CreateTrailRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
const baseCreateTrailRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest",
    computeInstanceId: "",
    jobId: "",
    agentInstanceId: "",
};
exports.CreateTrailRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        for (const v of message.data) {
            exports.Trail.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.jobId !== "") {
            writer.uint32(26).string(message.jobId);
        }
        if (message.agentInstanceId !== "") {
            writer.uint32(34).string(message.agentInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTrailRequest);
        message.data = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.data.push(exports.Trail.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.jobId = reader.string();
                    break;
                case 4:
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
        const message = Object.assign({}, baseCreateTrailRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.data = ((_a = object.data) !== null && _a !== void 0 ? _a : []).map((e) => exports.Trail.fromJSON(e));
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
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
        if (message.data) {
            obj.data = message.data.map((e) => (e ? exports.Trail.toJSON(e) : undefined));
        }
        else {
            obj.data = [];
        }
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateTrailRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.data = ((_b = object.data) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Trail.fromPartial(e))) || [];
        message.jobId = (_c = object.jobId) !== null && _c !== void 0 ? _c : "";
        message.agentInstanceId = (_d = object.agentInstanceId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTrailRequest.$type, exports.CreateTrailRequest);
const baseTrail = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail",
    overall: 0,
    caseId: "",
    time: "",
    reqps: 0,
    resps: 0,
    expect: 0,
    input: 0,
    output: 0,
    connectTime: 0,
    sendTime: 0,
    latency: 0,
    receiveTime: 0,
    threads: 0,
    q50: 0,
    q75: 0,
    q80: 0,
    q85: 0,
    q90: 0,
    q95: 0,
    q98: 0,
    q99: 0,
    q100: 0,
};
exports.Trail = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.overall !== 0) {
            writer.uint32(8).int64(message.overall);
        }
        if (message.caseId !== "") {
            writer.uint32(18).string(message.caseId);
        }
        if (message.time !== "") {
            writer.uint32(26).string(message.time);
        }
        if (message.reqps !== 0) {
            writer.uint32(32).int64(message.reqps);
        }
        if (message.resps !== 0) {
            writer.uint32(40).int64(message.resps);
        }
        if (message.expect !== 0) {
            writer.uint32(49).double(message.expect);
        }
        if (message.input !== 0) {
            writer.uint32(56).int64(message.input);
        }
        if (message.output !== 0) {
            writer.uint32(64).int64(message.output);
        }
        if (message.connectTime !== 0) {
            writer.uint32(73).double(message.connectTime);
        }
        if (message.sendTime !== 0) {
            writer.uint32(81).double(message.sendTime);
        }
        if (message.latency !== 0) {
            writer.uint32(89).double(message.latency);
        }
        if (message.receiveTime !== 0) {
            writer.uint32(97).double(message.receiveTime);
        }
        if (message.threads !== 0) {
            writer.uint32(104).int64(message.threads);
        }
        if (message.q50 !== 0) {
            writer.uint32(113).double(message.q50);
        }
        if (message.q75 !== 0) {
            writer.uint32(121).double(message.q75);
        }
        if (message.q80 !== 0) {
            writer.uint32(129).double(message.q80);
        }
        if (message.q85 !== 0) {
            writer.uint32(137).double(message.q85);
        }
        if (message.q90 !== 0) {
            writer.uint32(145).double(message.q90);
        }
        if (message.q95 !== 0) {
            writer.uint32(153).double(message.q95);
        }
        if (message.q98 !== 0) {
            writer.uint32(161).double(message.q98);
        }
        if (message.q99 !== 0) {
            writer.uint32(169).double(message.q99);
        }
        if (message.q100 !== 0) {
            writer.uint32(177).double(message.q100);
        }
        for (const v of message.httpCodes) {
            exports.Trail_Codes.encode(v, writer.uint32(186).fork()).ldelim();
        }
        for (const v of message.netCodes) {
            exports.Trail_Codes.encode(v, writer.uint32(194).fork()).ldelim();
        }
        for (const v of message.timeIntervals) {
            exports.Trail_Intervals.encode(v, writer.uint32(202).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrail);
        message.httpCodes = [];
        message.netCodes = [];
        message.timeIntervals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = longToNumber(reader.int64());
                    break;
                case 2:
                    message.caseId = reader.string();
                    break;
                case 3:
                    message.time = reader.string();
                    break;
                case 4:
                    message.reqps = longToNumber(reader.int64());
                    break;
                case 5:
                    message.resps = longToNumber(reader.int64());
                    break;
                case 6:
                    message.expect = reader.double();
                    break;
                case 7:
                    message.input = longToNumber(reader.int64());
                    break;
                case 8:
                    message.output = longToNumber(reader.int64());
                    break;
                case 9:
                    message.connectTime = reader.double();
                    break;
                case 10:
                    message.sendTime = reader.double();
                    break;
                case 11:
                    message.latency = reader.double();
                    break;
                case 12:
                    message.receiveTime = reader.double();
                    break;
                case 13:
                    message.threads = longToNumber(reader.int64());
                    break;
                case 14:
                    message.q50 = reader.double();
                    break;
                case 15:
                    message.q75 = reader.double();
                    break;
                case 16:
                    message.q80 = reader.double();
                    break;
                case 17:
                    message.q85 = reader.double();
                    break;
                case 18:
                    message.q90 = reader.double();
                    break;
                case 19:
                    message.q95 = reader.double();
                    break;
                case 20:
                    message.q98 = reader.double();
                    break;
                case 21:
                    message.q99 = reader.double();
                    break;
                case 22:
                    message.q100 = reader.double();
                    break;
                case 23:
                    message.httpCodes.push(exports.Trail_Codes.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.netCodes.push(exports.Trail_Codes.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.timeIntervals.push(exports.Trail_Intervals.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTrail);
        message.overall =
            object.overall !== undefined && object.overall !== null
                ? Number(object.overall)
                : 0;
        message.caseId =
            object.caseId !== undefined && object.caseId !== null
                ? String(object.caseId)
                : "";
        message.time =
            object.time !== undefined && object.time !== null
                ? String(object.time)
                : "";
        message.reqps =
            object.reqps !== undefined && object.reqps !== null
                ? Number(object.reqps)
                : 0;
        message.resps =
            object.resps !== undefined && object.resps !== null
                ? Number(object.resps)
                : 0;
        message.expect =
            object.expect !== undefined && object.expect !== null
                ? Number(object.expect)
                : 0;
        message.input =
            object.input !== undefined && object.input !== null
                ? Number(object.input)
                : 0;
        message.output =
            object.output !== undefined && object.output !== null
                ? Number(object.output)
                : 0;
        message.connectTime =
            object.connectTime !== undefined && object.connectTime !== null
                ? Number(object.connectTime)
                : 0;
        message.sendTime =
            object.sendTime !== undefined && object.sendTime !== null
                ? Number(object.sendTime)
                : 0;
        message.latency =
            object.latency !== undefined && object.latency !== null
                ? Number(object.latency)
                : 0;
        message.receiveTime =
            object.receiveTime !== undefined && object.receiveTime !== null
                ? Number(object.receiveTime)
                : 0;
        message.threads =
            object.threads !== undefined && object.threads !== null
                ? Number(object.threads)
                : 0;
        message.q50 =
            object.q50 !== undefined && object.q50 !== null ? Number(object.q50) : 0;
        message.q75 =
            object.q75 !== undefined && object.q75 !== null ? Number(object.q75) : 0;
        message.q80 =
            object.q80 !== undefined && object.q80 !== null ? Number(object.q80) : 0;
        message.q85 =
            object.q85 !== undefined && object.q85 !== null ? Number(object.q85) : 0;
        message.q90 =
            object.q90 !== undefined && object.q90 !== null ? Number(object.q90) : 0;
        message.q95 =
            object.q95 !== undefined && object.q95 !== null ? Number(object.q95) : 0;
        message.q98 =
            object.q98 !== undefined && object.q98 !== null ? Number(object.q98) : 0;
        message.q99 =
            object.q99 !== undefined && object.q99 !== null ? Number(object.q99) : 0;
        message.q100 =
            object.q100 !== undefined && object.q100 !== null
                ? Number(object.q100)
                : 0;
        message.httpCodes = ((_a = object.httpCodes) !== null && _a !== void 0 ? _a : []).map((e) => exports.Trail_Codes.fromJSON(e));
        message.netCodes = ((_b = object.netCodes) !== null && _b !== void 0 ? _b : []).map((e) => exports.Trail_Codes.fromJSON(e));
        message.timeIntervals = ((_c = object.timeIntervals) !== null && _c !== void 0 ? _c : []).map((e) => exports.Trail_Intervals.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.overall !== undefined &&
            (obj.overall = Math.round(message.overall));
        message.caseId !== undefined && (obj.caseId = message.caseId);
        message.time !== undefined && (obj.time = message.time);
        message.reqps !== undefined && (obj.reqps = Math.round(message.reqps));
        message.resps !== undefined && (obj.resps = Math.round(message.resps));
        message.expect !== undefined && (obj.expect = message.expect);
        message.input !== undefined && (obj.input = Math.round(message.input));
        message.output !== undefined && (obj.output = Math.round(message.output));
        message.connectTime !== undefined &&
            (obj.connectTime = message.connectTime);
        message.sendTime !== undefined && (obj.sendTime = message.sendTime);
        message.latency !== undefined && (obj.latency = message.latency);
        message.receiveTime !== undefined &&
            (obj.receiveTime = message.receiveTime);
        message.threads !== undefined &&
            (obj.threads = Math.round(message.threads));
        message.q50 !== undefined && (obj.q50 = message.q50);
        message.q75 !== undefined && (obj.q75 = message.q75);
        message.q80 !== undefined && (obj.q80 = message.q80);
        message.q85 !== undefined && (obj.q85 = message.q85);
        message.q90 !== undefined && (obj.q90 = message.q90);
        message.q95 !== undefined && (obj.q95 = message.q95);
        message.q98 !== undefined && (obj.q98 = message.q98);
        message.q99 !== undefined && (obj.q99 = message.q99);
        message.q100 !== undefined && (obj.q100 = message.q100);
        if (message.httpCodes) {
            obj.httpCodes = message.httpCodes.map((e) => e ? exports.Trail_Codes.toJSON(e) : undefined);
        }
        else {
            obj.httpCodes = [];
        }
        if (message.netCodes) {
            obj.netCodes = message.netCodes.map((e) => e ? exports.Trail_Codes.toJSON(e) : undefined);
        }
        else {
            obj.netCodes = [];
        }
        if (message.timeIntervals) {
            obj.timeIntervals = message.timeIntervals.map((e) => e ? exports.Trail_Intervals.toJSON(e) : undefined);
        }
        else {
            obj.timeIntervals = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const message = Object.assign({}, baseTrail);
        message.overall = (_a = object.overall) !== null && _a !== void 0 ? _a : 0;
        message.caseId = (_b = object.caseId) !== null && _b !== void 0 ? _b : "";
        message.time = (_c = object.time) !== null && _c !== void 0 ? _c : "";
        message.reqps = (_d = object.reqps) !== null && _d !== void 0 ? _d : 0;
        message.resps = (_e = object.resps) !== null && _e !== void 0 ? _e : 0;
        message.expect = (_f = object.expect) !== null && _f !== void 0 ? _f : 0;
        message.input = (_g = object.input) !== null && _g !== void 0 ? _g : 0;
        message.output = (_h = object.output) !== null && _h !== void 0 ? _h : 0;
        message.connectTime = (_j = object.connectTime) !== null && _j !== void 0 ? _j : 0;
        message.sendTime = (_k = object.sendTime) !== null && _k !== void 0 ? _k : 0;
        message.latency = (_l = object.latency) !== null && _l !== void 0 ? _l : 0;
        message.receiveTime = (_m = object.receiveTime) !== null && _m !== void 0 ? _m : 0;
        message.threads = (_o = object.threads) !== null && _o !== void 0 ? _o : 0;
        message.q50 = (_p = object.q50) !== null && _p !== void 0 ? _p : 0;
        message.q75 = (_q = object.q75) !== null && _q !== void 0 ? _q : 0;
        message.q80 = (_r = object.q80) !== null && _r !== void 0 ? _r : 0;
        message.q85 = (_s = object.q85) !== null && _s !== void 0 ? _s : 0;
        message.q90 = (_t = object.q90) !== null && _t !== void 0 ? _t : 0;
        message.q95 = (_u = object.q95) !== null && _u !== void 0 ? _u : 0;
        message.q98 = (_v = object.q98) !== null && _v !== void 0 ? _v : 0;
        message.q99 = (_w = object.q99) !== null && _w !== void 0 ? _w : 0;
        message.q100 = (_x = object.q100) !== null && _x !== void 0 ? _x : 0;
        message.httpCodes =
            ((_y = object.httpCodes) === null || _y === void 0 ? void 0 : _y.map((e) => exports.Trail_Codes.fromPartial(e))) || [];
        message.netCodes =
            ((_z = object.netCodes) === null || _z === void 0 ? void 0 : _z.map((e) => exports.Trail_Codes.fromPartial(e))) || [];
        message.timeIntervals =
            ((_0 = object.timeIntervals) === null || _0 === void 0 ? void 0 : _0.map((e) => exports.Trail_Intervals.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trail.$type, exports.Trail);
const baseTrail_Codes = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes",
    code: 0,
    count: 0,
};
exports.Trail_Codes = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int64(message.code);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrail_Codes);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = longToNumber(reader.int64());
                    break;
                case 2:
                    message.count = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrail_Codes);
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        message.count =
            object.count !== undefined && object.count !== null
                ? Number(object.count)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTrail_Codes);
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trail_Codes.$type, exports.Trail_Codes);
const baseTrail_Intervals = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals",
    to: 0,
    count: 0,
};
exports.Trail_Intervals = {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.to !== 0) {
            writer.uint32(9).double(message.to);
        }
        if (message.count !== 0) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTrail_Intervals);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.to = reader.double();
                    break;
                case 2:
                    message.count = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTrail_Intervals);
        message.to =
            object.to !== undefined && object.to !== null ? Number(object.to) : 0;
        message.count =
            object.count !== undefined && object.count !== null
                ? Number(object.count)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.to !== undefined && (obj.to = message.to);
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTrail_Intervals);
        message.to = (_a = object.to) !== null && _a !== void 0 ? _a : 0;
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Trail_Intervals.$type, exports.Trail_Intervals);
const baseCreateTrailResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse",
    trailId: "",
    code: 0,
};
exports.CreateTrailResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trailId !== "") {
            writer.uint32(10).string(message.trailId);
        }
        if (message.code !== 0) {
            writer.uint32(16).int64(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTrailResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trailId = reader.string();
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
        const message = Object.assign({}, baseCreateTrailResponse);
        message.trailId =
            object.trailId !== undefined && object.trailId !== null
                ? String(object.trailId)
                : "";
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.trailId !== undefined && (obj.trailId = message.trailId);
        message.code !== undefined && (obj.code = Math.round(message.code));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateTrailResponse);
        message.trailId = (_a = object.trailId) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTrailResponse.$type, exports.CreateTrailResponse);
exports.TrailServiceService = {
    /** Creates trail for specified job. */
    create: {
        path: "/yandex.cloud.loadtesting.agent.v1.TrailService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTrailRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTrailRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateTrailResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateTrailResponse.decode(value),
    },
};
exports.TrailServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TrailServiceService, "yandex.cloud.loadtesting.agent.v1.TrailService");
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
