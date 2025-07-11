"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStatement = exports.QueryStats = exports.PrimaryKey = exports.SessionState = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
const baseSessionState = {
    $type: "yandex.cloud.mdb.postgresql.v1.SessionState",
    host: "",
    pid: 0,
    database: "",
    user: "",
    applicationName: "",
    waitEventType: "",
    waitEvent: "",
    state: "",
    query: "",
    backendType: "",
    clientAddr: "",
    clientHostname: "",
    clientPort: 0,
    backendXid: 0,
    backendXmin: 0,
    blockingPids: "",
    queryId: "",
};
exports.SessionState = {
    $type: "yandex.cloud.mdb.postgresql.v1.SessionState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.host !== "") {
            writer.uint32(18).string(message.host);
        }
        if (message.pid !== 0) {
            writer.uint32(24).int64(message.pid);
        }
        if (message.database !== "") {
            writer.uint32(34).string(message.database);
        }
        if (message.user !== "") {
            writer.uint32(42).string(message.user);
        }
        if (message.applicationName !== "") {
            writer.uint32(50).string(message.applicationName);
        }
        if (message.backendStart !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.backendStart), writer.uint32(58).fork()).ldelim();
        }
        if (message.xactStart !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.xactStart), writer.uint32(66).fork()).ldelim();
        }
        if (message.queryStart !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.queryStart), writer.uint32(74).fork()).ldelim();
        }
        if (message.stateChange !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.stateChange), writer.uint32(82).fork()).ldelim();
        }
        if (message.waitEventType !== "") {
            writer.uint32(90).string(message.waitEventType);
        }
        if (message.waitEvent !== "") {
            writer.uint32(98).string(message.waitEvent);
        }
        if (message.state !== "") {
            writer.uint32(106).string(message.state);
        }
        if (message.query !== "") {
            writer.uint32(114).string(message.query);
        }
        if (message.backendType !== "") {
            writer.uint32(122).string(message.backendType);
        }
        if (message.clientAddr !== "") {
            writer.uint32(130).string(message.clientAddr);
        }
        if (message.clientHostname !== "") {
            writer.uint32(138).string(message.clientHostname);
        }
        if (message.clientPort !== 0) {
            writer.uint32(144).int64(message.clientPort);
        }
        if (message.backendXid !== 0) {
            writer.uint32(152).int64(message.backendXid);
        }
        if (message.backendXmin !== 0) {
            writer.uint32(160).int64(message.backendXmin);
        }
        if (message.blockingPids !== "") {
            writer.uint32(178).string(message.blockingPids);
        }
        if (message.queryId !== "") {
            writer.uint32(186).string(message.queryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSessionState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.pid = longToNumber(reader.int64());
                    break;
                case 4:
                    message.database = reader.string();
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.applicationName = reader.string();
                    break;
                case 7:
                    message.backendStart = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.xactStart = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.queryStart = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.stateChange = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.waitEventType = reader.string();
                    break;
                case 12:
                    message.waitEvent = reader.string();
                    break;
                case 13:
                    message.state = reader.string();
                    break;
                case 14:
                    message.query = reader.string();
                    break;
                case 15:
                    message.backendType = reader.string();
                    break;
                case 16:
                    message.clientAddr = reader.string();
                    break;
                case 17:
                    message.clientHostname = reader.string();
                    break;
                case 18:
                    message.clientPort = longToNumber(reader.int64());
                    break;
                case 19:
                    message.backendXid = longToNumber(reader.int64());
                    break;
                case 20:
                    message.backendXmin = longToNumber(reader.int64());
                    break;
                case 22:
                    message.blockingPids = reader.string();
                    break;
                case 23:
                    message.queryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSessionState);
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.pid =
            object.pid !== undefined && object.pid !== null ? Number(object.pid) : 0;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.applicationName =
            object.applicationName !== undefined && object.applicationName !== null
                ? String(object.applicationName)
                : "";
        message.backendStart =
            object.backendStart !== undefined && object.backendStart !== null
                ? fromJsonTimestamp(object.backendStart)
                : undefined;
        message.xactStart =
            object.xactStart !== undefined && object.xactStart !== null
                ? fromJsonTimestamp(object.xactStart)
                : undefined;
        message.queryStart =
            object.queryStart !== undefined && object.queryStart !== null
                ? fromJsonTimestamp(object.queryStart)
                : undefined;
        message.stateChange =
            object.stateChange !== undefined && object.stateChange !== null
                ? fromJsonTimestamp(object.stateChange)
                : undefined;
        message.waitEventType =
            object.waitEventType !== undefined && object.waitEventType !== null
                ? String(object.waitEventType)
                : "";
        message.waitEvent =
            object.waitEvent !== undefined && object.waitEvent !== null
                ? String(object.waitEvent)
                : "";
        message.state =
            object.state !== undefined && object.state !== null
                ? String(object.state)
                : "";
        message.query =
            object.query !== undefined && object.query !== null
                ? String(object.query)
                : "";
        message.backendType =
            object.backendType !== undefined && object.backendType !== null
                ? String(object.backendType)
                : "";
        message.clientAddr =
            object.clientAddr !== undefined && object.clientAddr !== null
                ? String(object.clientAddr)
                : "";
        message.clientHostname =
            object.clientHostname !== undefined && object.clientHostname !== null
                ? String(object.clientHostname)
                : "";
        message.clientPort =
            object.clientPort !== undefined && object.clientPort !== null
                ? Number(object.clientPort)
                : 0;
        message.backendXid =
            object.backendXid !== undefined && object.backendXid !== null
                ? Number(object.backendXid)
                : 0;
        message.backendXmin =
            object.backendXmin !== undefined && object.backendXmin !== null
                ? Number(object.backendXmin)
                : 0;
        message.blockingPids =
            object.blockingPids !== undefined && object.blockingPids !== null
                ? String(object.blockingPids)
                : "";
        message.queryId =
            object.queryId !== undefined && object.queryId !== null
                ? String(object.queryId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.host !== undefined && (obj.host = message.host);
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.applicationName !== undefined &&
            (obj.applicationName = message.applicationName);
        message.backendStart !== undefined &&
            (obj.backendStart = message.backendStart.toISOString());
        message.xactStart !== undefined &&
            (obj.xactStart = message.xactStart.toISOString());
        message.queryStart !== undefined &&
            (obj.queryStart = message.queryStart.toISOString());
        message.stateChange !== undefined &&
            (obj.stateChange = message.stateChange.toISOString());
        message.waitEventType !== undefined &&
            (obj.waitEventType = message.waitEventType);
        message.waitEvent !== undefined && (obj.waitEvent = message.waitEvent);
        message.state !== undefined && (obj.state = message.state);
        message.query !== undefined && (obj.query = message.query);
        message.backendType !== undefined &&
            (obj.backendType = message.backendType);
        message.clientAddr !== undefined && (obj.clientAddr = message.clientAddr);
        message.clientHostname !== undefined &&
            (obj.clientHostname = message.clientHostname);
        message.clientPort !== undefined &&
            (obj.clientPort = Math.round(message.clientPort));
        message.backendXid !== undefined &&
            (obj.backendXid = Math.round(message.backendXid));
        message.backendXmin !== undefined &&
            (obj.backendXmin = Math.round(message.backendXmin));
        message.blockingPids !== undefined &&
            (obj.blockingPids = message.blockingPids);
        message.queryId !== undefined && (obj.queryId = message.queryId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        const message = Object.assign({}, baseSessionState);
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.host = (_b = object.host) !== null && _b !== void 0 ? _b : "";
        message.pid = (_c = object.pid) !== null && _c !== void 0 ? _c : 0;
        message.database = (_d = object.database) !== null && _d !== void 0 ? _d : "";
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.applicationName = (_f = object.applicationName) !== null && _f !== void 0 ? _f : "";
        message.backendStart = (_g = object.backendStart) !== null && _g !== void 0 ? _g : undefined;
        message.xactStart = (_h = object.xactStart) !== null && _h !== void 0 ? _h : undefined;
        message.queryStart = (_j = object.queryStart) !== null && _j !== void 0 ? _j : undefined;
        message.stateChange = (_k = object.stateChange) !== null && _k !== void 0 ? _k : undefined;
        message.waitEventType = (_l = object.waitEventType) !== null && _l !== void 0 ? _l : "";
        message.waitEvent = (_m = object.waitEvent) !== null && _m !== void 0 ? _m : "";
        message.state = (_o = object.state) !== null && _o !== void 0 ? _o : "";
        message.query = (_p = object.query) !== null && _p !== void 0 ? _p : "";
        message.backendType = (_q = object.backendType) !== null && _q !== void 0 ? _q : "";
        message.clientAddr = (_r = object.clientAddr) !== null && _r !== void 0 ? _r : "";
        message.clientHostname = (_s = object.clientHostname) !== null && _s !== void 0 ? _s : "";
        message.clientPort = (_t = object.clientPort) !== null && _t !== void 0 ? _t : 0;
        message.backendXid = (_u = object.backendXid) !== null && _u !== void 0 ? _u : 0;
        message.backendXmin = (_v = object.backendXmin) !== null && _v !== void 0 ? _v : 0;
        message.blockingPids = (_w = object.blockingPids) !== null && _w !== void 0 ? _w : "";
        message.queryId = (_x = object.queryId) !== null && _x !== void 0 ? _x : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SessionState.$type, exports.SessionState);
const basePrimaryKey = {
    $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey",
    host: "",
    user: "",
    database: "",
    toplevel: false,
    queryId: "",
    planId: "",
};
exports.PrimaryKey = {
    $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.user !== "") {
            writer.uint32(18).string(message.user);
        }
        if (message.database !== "") {
            writer.uint32(34).string(message.database);
        }
        if (message.toplevel === true) {
            writer.uint32(40).bool(message.toplevel);
        }
        if (message.queryId !== "") {
            writer.uint32(50).string(message.queryId);
        }
        if (message.planId !== "") {
            writer.uint32(58).string(message.planId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrimaryKey);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 4:
                    message.database = reader.string();
                    break;
                case 5:
                    message.toplevel = reader.bool();
                    break;
                case 6:
                    message.queryId = reader.string();
                    break;
                case 7:
                    message.planId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePrimaryKey);
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.toplevel =
            object.toplevel !== undefined && object.toplevel !== null
                ? Boolean(object.toplevel)
                : false;
        message.queryId =
            object.queryId !== undefined && object.queryId !== null
                ? String(object.queryId)
                : "";
        message.planId =
            object.planId !== undefined && object.planId !== null
                ? String(object.planId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.user !== undefined && (obj.user = message.user);
        message.database !== undefined && (obj.database = message.database);
        message.toplevel !== undefined && (obj.toplevel = message.toplevel);
        message.queryId !== undefined && (obj.queryId = message.queryId);
        message.planId !== undefined && (obj.planId = message.planId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, basePrimaryKey);
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.user = (_b = object.user) !== null && _b !== void 0 ? _b : "";
        message.database = (_c = object.database) !== null && _c !== void 0 ? _c : "";
        message.toplevel = (_d = object.toplevel) !== null && _d !== void 0 ? _d : false;
        message.queryId = (_e = object.queryId) !== null && _e !== void 0 ? _e : "";
        message.planId = (_f = object.planId) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryKey.$type, exports.PrimaryKey);
const baseQueryStats = {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStats",
    query: "",
    normalizedPlan: "",
    examplePlan: "",
    plans: 0,
    totalPlanTime: 0,
    minPlanTime: 0,
    maxPlanTime: 0,
    meanPlanTime: 0,
    stddevPlanTime: 0,
    calls: 0,
    totalTime: 0,
    minTime: 0,
    maxTime: 0,
    meanTime: 0,
    stddevTime: 0,
    rows: 0,
    sharedBlksHit: 0,
    sharedBlksRead: 0,
    sharedBlksDirtied: 0,
    sharedBlksWritten: 0,
    localBlksHit: 0,
    localBlksRead: 0,
    localBlksDirtied: 0,
    localBlksWritten: 0,
    tempBlksRead: 0,
    tempBlksWritten: 0,
    blkReadTime: 0,
    blkWriteTime: 0,
    tempBlkReadTime: 0,
    tempBlkWriteTime: 0,
    walRecords: 0,
    walFpi: 0,
    walBytes: 0,
    jitFunctions: 0,
    jitGenerationTime: 0,
    jitInliningCount: 0,
    jitInliningTime: 0,
    jitOptimizationCount: 0,
    jitOptimizationTime: 0,
    jitEmissionCount: 0,
    jitEmissionTime: 0,
    startupCost: 0,
    totalCost: 0,
    planRows: 0,
    planWidth: 0,
    reads: 0,
    writes: 0,
    userTime: 0,
    systemTime: 0,
};
exports.QueryStats = {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStats",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        if (message.normalizedPlan !== "") {
            writer.uint32(26).string(message.normalizedPlan);
        }
        if (message.examplePlan !== "") {
            writer.uint32(34).string(message.examplePlan);
        }
        if (message.plans !== 0) {
            writer.uint32(40).int64(message.plans);
        }
        if (message.totalPlanTime !== 0) {
            writer.uint32(49).double(message.totalPlanTime);
        }
        if (message.minPlanTime !== 0) {
            writer.uint32(57).double(message.minPlanTime);
        }
        if (message.maxPlanTime !== 0) {
            writer.uint32(65).double(message.maxPlanTime);
        }
        if (message.meanPlanTime !== 0) {
            writer.uint32(73).double(message.meanPlanTime);
        }
        if (message.stddevPlanTime !== 0) {
            writer.uint32(81).double(message.stddevPlanTime);
        }
        if (message.calls !== 0) {
            writer.uint32(88).int64(message.calls);
        }
        if (message.totalTime !== 0) {
            writer.uint32(97).double(message.totalTime);
        }
        if (message.minTime !== 0) {
            writer.uint32(105).double(message.minTime);
        }
        if (message.maxTime !== 0) {
            writer.uint32(113).double(message.maxTime);
        }
        if (message.meanTime !== 0) {
            writer.uint32(121).double(message.meanTime);
        }
        if (message.stddevTime !== 0) {
            writer.uint32(129).double(message.stddevTime);
        }
        if (message.rows !== 0) {
            writer.uint32(136).int64(message.rows);
        }
        if (message.sharedBlksHit !== 0) {
            writer.uint32(144).int64(message.sharedBlksHit);
        }
        if (message.sharedBlksRead !== 0) {
            writer.uint32(152).int64(message.sharedBlksRead);
        }
        if (message.sharedBlksDirtied !== 0) {
            writer.uint32(160).int64(message.sharedBlksDirtied);
        }
        if (message.sharedBlksWritten !== 0) {
            writer.uint32(168).int64(message.sharedBlksWritten);
        }
        if (message.localBlksHit !== 0) {
            writer.uint32(176).int64(message.localBlksHit);
        }
        if (message.localBlksRead !== 0) {
            writer.uint32(184).int64(message.localBlksRead);
        }
        if (message.localBlksDirtied !== 0) {
            writer.uint32(192).int64(message.localBlksDirtied);
        }
        if (message.localBlksWritten !== 0) {
            writer.uint32(200).int64(message.localBlksWritten);
        }
        if (message.tempBlksRead !== 0) {
            writer.uint32(208).int64(message.tempBlksRead);
        }
        if (message.tempBlksWritten !== 0) {
            writer.uint32(216).int64(message.tempBlksWritten);
        }
        if (message.blkReadTime !== 0) {
            writer.uint32(225).double(message.blkReadTime);
        }
        if (message.blkWriteTime !== 0) {
            writer.uint32(233).double(message.blkWriteTime);
        }
        if (message.tempBlkReadTime !== 0) {
            writer.uint32(241).double(message.tempBlkReadTime);
        }
        if (message.tempBlkWriteTime !== 0) {
            writer.uint32(249).double(message.tempBlkWriteTime);
        }
        if (message.walRecords !== 0) {
            writer.uint32(256).int64(message.walRecords);
        }
        if (message.walFpi !== 0) {
            writer.uint32(264).int64(message.walFpi);
        }
        if (message.walBytes !== 0) {
            writer.uint32(272).int64(message.walBytes);
        }
        if (message.jitFunctions !== 0) {
            writer.uint32(280).int64(message.jitFunctions);
        }
        if (message.jitGenerationTime !== 0) {
            writer.uint32(289).double(message.jitGenerationTime);
        }
        if (message.jitInliningCount !== 0) {
            writer.uint32(296).int64(message.jitInliningCount);
        }
        if (message.jitInliningTime !== 0) {
            writer.uint32(305).double(message.jitInliningTime);
        }
        if (message.jitOptimizationCount !== 0) {
            writer.uint32(312).int64(message.jitOptimizationCount);
        }
        if (message.jitOptimizationTime !== 0) {
            writer.uint32(321).double(message.jitOptimizationTime);
        }
        if (message.jitEmissionCount !== 0) {
            writer.uint32(328).int64(message.jitEmissionCount);
        }
        if (message.jitEmissionTime !== 0) {
            writer.uint32(337).double(message.jitEmissionTime);
        }
        if (message.startupCost !== 0) {
            writer.uint32(344).int64(message.startupCost);
        }
        if (message.totalCost !== 0) {
            writer.uint32(352).int64(message.totalCost);
        }
        if (message.planRows !== 0) {
            writer.uint32(360).int64(message.planRows);
        }
        if (message.planWidth !== 0) {
            writer.uint32(368).int64(message.planWidth);
        }
        if (message.reads !== 0) {
            writer.uint32(376).int64(message.reads);
        }
        if (message.writes !== 0) {
            writer.uint32(384).int64(message.writes);
        }
        if (message.userTime !== 0) {
            writer.uint32(393).double(message.userTime);
        }
        if (message.systemTime !== 0) {
            writer.uint32(401).double(message.systemTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryStats);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.query = reader.string();
                    break;
                case 3:
                    message.normalizedPlan = reader.string();
                    break;
                case 4:
                    message.examplePlan = reader.string();
                    break;
                case 5:
                    message.plans = longToNumber(reader.int64());
                    break;
                case 6:
                    message.totalPlanTime = reader.double();
                    break;
                case 7:
                    message.minPlanTime = reader.double();
                    break;
                case 8:
                    message.maxPlanTime = reader.double();
                    break;
                case 9:
                    message.meanPlanTime = reader.double();
                    break;
                case 10:
                    message.stddevPlanTime = reader.double();
                    break;
                case 11:
                    message.calls = longToNumber(reader.int64());
                    break;
                case 12:
                    message.totalTime = reader.double();
                    break;
                case 13:
                    message.minTime = reader.double();
                    break;
                case 14:
                    message.maxTime = reader.double();
                    break;
                case 15:
                    message.meanTime = reader.double();
                    break;
                case 16:
                    message.stddevTime = reader.double();
                    break;
                case 17:
                    message.rows = longToNumber(reader.int64());
                    break;
                case 18:
                    message.sharedBlksHit = longToNumber(reader.int64());
                    break;
                case 19:
                    message.sharedBlksRead = longToNumber(reader.int64());
                    break;
                case 20:
                    message.sharedBlksDirtied = longToNumber(reader.int64());
                    break;
                case 21:
                    message.sharedBlksWritten = longToNumber(reader.int64());
                    break;
                case 22:
                    message.localBlksHit = longToNumber(reader.int64());
                    break;
                case 23:
                    message.localBlksRead = longToNumber(reader.int64());
                    break;
                case 24:
                    message.localBlksDirtied = longToNumber(reader.int64());
                    break;
                case 25:
                    message.localBlksWritten = longToNumber(reader.int64());
                    break;
                case 26:
                    message.tempBlksRead = longToNumber(reader.int64());
                    break;
                case 27:
                    message.tempBlksWritten = longToNumber(reader.int64());
                    break;
                case 28:
                    message.blkReadTime = reader.double();
                    break;
                case 29:
                    message.blkWriteTime = reader.double();
                    break;
                case 30:
                    message.tempBlkReadTime = reader.double();
                    break;
                case 31:
                    message.tempBlkWriteTime = reader.double();
                    break;
                case 32:
                    message.walRecords = longToNumber(reader.int64());
                    break;
                case 33:
                    message.walFpi = longToNumber(reader.int64());
                    break;
                case 34:
                    message.walBytes = longToNumber(reader.int64());
                    break;
                case 35:
                    message.jitFunctions = longToNumber(reader.int64());
                    break;
                case 36:
                    message.jitGenerationTime = reader.double();
                    break;
                case 37:
                    message.jitInliningCount = longToNumber(reader.int64());
                    break;
                case 38:
                    message.jitInliningTime = reader.double();
                    break;
                case 39:
                    message.jitOptimizationCount = longToNumber(reader.int64());
                    break;
                case 40:
                    message.jitOptimizationTime = reader.double();
                    break;
                case 41:
                    message.jitEmissionCount = longToNumber(reader.int64());
                    break;
                case 42:
                    message.jitEmissionTime = reader.double();
                    break;
                case 43:
                    message.startupCost = longToNumber(reader.int64());
                    break;
                case 44:
                    message.totalCost = longToNumber(reader.int64());
                    break;
                case 45:
                    message.planRows = longToNumber(reader.int64());
                    break;
                case 46:
                    message.planWidth = longToNumber(reader.int64());
                    break;
                case 47:
                    message.reads = longToNumber(reader.int64());
                    break;
                case 48:
                    message.writes = longToNumber(reader.int64());
                    break;
                case 49:
                    message.userTime = reader.double();
                    break;
                case 50:
                    message.systemTime = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryStats);
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
        message.query =
            object.query !== undefined && object.query !== null
                ? String(object.query)
                : "";
        message.normalizedPlan =
            object.normalizedPlan !== undefined && object.normalizedPlan !== null
                ? String(object.normalizedPlan)
                : "";
        message.examplePlan =
            object.examplePlan !== undefined && object.examplePlan !== null
                ? String(object.examplePlan)
                : "";
        message.plans =
            object.plans !== undefined && object.plans !== null
                ? Number(object.plans)
                : 0;
        message.totalPlanTime =
            object.totalPlanTime !== undefined && object.totalPlanTime !== null
                ? Number(object.totalPlanTime)
                : 0;
        message.minPlanTime =
            object.minPlanTime !== undefined && object.minPlanTime !== null
                ? Number(object.minPlanTime)
                : 0;
        message.maxPlanTime =
            object.maxPlanTime !== undefined && object.maxPlanTime !== null
                ? Number(object.maxPlanTime)
                : 0;
        message.meanPlanTime =
            object.meanPlanTime !== undefined && object.meanPlanTime !== null
                ? Number(object.meanPlanTime)
                : 0;
        message.stddevPlanTime =
            object.stddevPlanTime !== undefined && object.stddevPlanTime !== null
                ? Number(object.stddevPlanTime)
                : 0;
        message.calls =
            object.calls !== undefined && object.calls !== null
                ? Number(object.calls)
                : 0;
        message.totalTime =
            object.totalTime !== undefined && object.totalTime !== null
                ? Number(object.totalTime)
                : 0;
        message.minTime =
            object.minTime !== undefined && object.minTime !== null
                ? Number(object.minTime)
                : 0;
        message.maxTime =
            object.maxTime !== undefined && object.maxTime !== null
                ? Number(object.maxTime)
                : 0;
        message.meanTime =
            object.meanTime !== undefined && object.meanTime !== null
                ? Number(object.meanTime)
                : 0;
        message.stddevTime =
            object.stddevTime !== undefined && object.stddevTime !== null
                ? Number(object.stddevTime)
                : 0;
        message.rows =
            object.rows !== undefined && object.rows !== null
                ? Number(object.rows)
                : 0;
        message.sharedBlksHit =
            object.sharedBlksHit !== undefined && object.sharedBlksHit !== null
                ? Number(object.sharedBlksHit)
                : 0;
        message.sharedBlksRead =
            object.sharedBlksRead !== undefined && object.sharedBlksRead !== null
                ? Number(object.sharedBlksRead)
                : 0;
        message.sharedBlksDirtied =
            object.sharedBlksDirtied !== undefined &&
                object.sharedBlksDirtied !== null
                ? Number(object.sharedBlksDirtied)
                : 0;
        message.sharedBlksWritten =
            object.sharedBlksWritten !== undefined &&
                object.sharedBlksWritten !== null
                ? Number(object.sharedBlksWritten)
                : 0;
        message.localBlksHit =
            object.localBlksHit !== undefined && object.localBlksHit !== null
                ? Number(object.localBlksHit)
                : 0;
        message.localBlksRead =
            object.localBlksRead !== undefined && object.localBlksRead !== null
                ? Number(object.localBlksRead)
                : 0;
        message.localBlksDirtied =
            object.localBlksDirtied !== undefined && object.localBlksDirtied !== null
                ? Number(object.localBlksDirtied)
                : 0;
        message.localBlksWritten =
            object.localBlksWritten !== undefined && object.localBlksWritten !== null
                ? Number(object.localBlksWritten)
                : 0;
        message.tempBlksRead =
            object.tempBlksRead !== undefined && object.tempBlksRead !== null
                ? Number(object.tempBlksRead)
                : 0;
        message.tempBlksWritten =
            object.tempBlksWritten !== undefined && object.tempBlksWritten !== null
                ? Number(object.tempBlksWritten)
                : 0;
        message.blkReadTime =
            object.blkReadTime !== undefined && object.blkReadTime !== null
                ? Number(object.blkReadTime)
                : 0;
        message.blkWriteTime =
            object.blkWriteTime !== undefined && object.blkWriteTime !== null
                ? Number(object.blkWriteTime)
                : 0;
        message.tempBlkReadTime =
            object.tempBlkReadTime !== undefined && object.tempBlkReadTime !== null
                ? Number(object.tempBlkReadTime)
                : 0;
        message.tempBlkWriteTime =
            object.tempBlkWriteTime !== undefined && object.tempBlkWriteTime !== null
                ? Number(object.tempBlkWriteTime)
                : 0;
        message.walRecords =
            object.walRecords !== undefined && object.walRecords !== null
                ? Number(object.walRecords)
                : 0;
        message.walFpi =
            object.walFpi !== undefined && object.walFpi !== null
                ? Number(object.walFpi)
                : 0;
        message.walBytes =
            object.walBytes !== undefined && object.walBytes !== null
                ? Number(object.walBytes)
                : 0;
        message.jitFunctions =
            object.jitFunctions !== undefined && object.jitFunctions !== null
                ? Number(object.jitFunctions)
                : 0;
        message.jitGenerationTime =
            object.jitGenerationTime !== undefined &&
                object.jitGenerationTime !== null
                ? Number(object.jitGenerationTime)
                : 0;
        message.jitInliningCount =
            object.jitInliningCount !== undefined && object.jitInliningCount !== null
                ? Number(object.jitInliningCount)
                : 0;
        message.jitInliningTime =
            object.jitInliningTime !== undefined && object.jitInliningTime !== null
                ? Number(object.jitInliningTime)
                : 0;
        message.jitOptimizationCount =
            object.jitOptimizationCount !== undefined &&
                object.jitOptimizationCount !== null
                ? Number(object.jitOptimizationCount)
                : 0;
        message.jitOptimizationTime =
            object.jitOptimizationTime !== undefined &&
                object.jitOptimizationTime !== null
                ? Number(object.jitOptimizationTime)
                : 0;
        message.jitEmissionCount =
            object.jitEmissionCount !== undefined && object.jitEmissionCount !== null
                ? Number(object.jitEmissionCount)
                : 0;
        message.jitEmissionTime =
            object.jitEmissionTime !== undefined && object.jitEmissionTime !== null
                ? Number(object.jitEmissionTime)
                : 0;
        message.startupCost =
            object.startupCost !== undefined && object.startupCost !== null
                ? Number(object.startupCost)
                : 0;
        message.totalCost =
            object.totalCost !== undefined && object.totalCost !== null
                ? Number(object.totalCost)
                : 0;
        message.planRows =
            object.planRows !== undefined && object.planRows !== null
                ? Number(object.planRows)
                : 0;
        message.planWidth =
            object.planWidth !== undefined && object.planWidth !== null
                ? Number(object.planWidth)
                : 0;
        message.reads =
            object.reads !== undefined && object.reads !== null
                ? Number(object.reads)
                : 0;
        message.writes =
            object.writes !== undefined && object.writes !== null
                ? Number(object.writes)
                : 0;
        message.userTime =
            object.userTime !== undefined && object.userTime !== null
                ? Number(object.userTime)
                : 0;
        message.systemTime =
            object.systemTime !== undefined && object.systemTime !== null
                ? Number(object.systemTime)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.query !== undefined && (obj.query = message.query);
        message.normalizedPlan !== undefined &&
            (obj.normalizedPlan = message.normalizedPlan);
        message.examplePlan !== undefined &&
            (obj.examplePlan = message.examplePlan);
        message.plans !== undefined && (obj.plans = Math.round(message.plans));
        message.totalPlanTime !== undefined &&
            (obj.totalPlanTime = message.totalPlanTime);
        message.minPlanTime !== undefined &&
            (obj.minPlanTime = message.minPlanTime);
        message.maxPlanTime !== undefined &&
            (obj.maxPlanTime = message.maxPlanTime);
        message.meanPlanTime !== undefined &&
            (obj.meanPlanTime = message.meanPlanTime);
        message.stddevPlanTime !== undefined &&
            (obj.stddevPlanTime = message.stddevPlanTime);
        message.calls !== undefined && (obj.calls = Math.round(message.calls));
        message.totalTime !== undefined && (obj.totalTime = message.totalTime);
        message.minTime !== undefined && (obj.minTime = message.minTime);
        message.maxTime !== undefined && (obj.maxTime = message.maxTime);
        message.meanTime !== undefined && (obj.meanTime = message.meanTime);
        message.stddevTime !== undefined && (obj.stddevTime = message.stddevTime);
        message.rows !== undefined && (obj.rows = Math.round(message.rows));
        message.sharedBlksHit !== undefined &&
            (obj.sharedBlksHit = Math.round(message.sharedBlksHit));
        message.sharedBlksRead !== undefined &&
            (obj.sharedBlksRead = Math.round(message.sharedBlksRead));
        message.sharedBlksDirtied !== undefined &&
            (obj.sharedBlksDirtied = Math.round(message.sharedBlksDirtied));
        message.sharedBlksWritten !== undefined &&
            (obj.sharedBlksWritten = Math.round(message.sharedBlksWritten));
        message.localBlksHit !== undefined &&
            (obj.localBlksHit = Math.round(message.localBlksHit));
        message.localBlksRead !== undefined &&
            (obj.localBlksRead = Math.round(message.localBlksRead));
        message.localBlksDirtied !== undefined &&
            (obj.localBlksDirtied = Math.round(message.localBlksDirtied));
        message.localBlksWritten !== undefined &&
            (obj.localBlksWritten = Math.round(message.localBlksWritten));
        message.tempBlksRead !== undefined &&
            (obj.tempBlksRead = Math.round(message.tempBlksRead));
        message.tempBlksWritten !== undefined &&
            (obj.tempBlksWritten = Math.round(message.tempBlksWritten));
        message.blkReadTime !== undefined &&
            (obj.blkReadTime = message.blkReadTime);
        message.blkWriteTime !== undefined &&
            (obj.blkWriteTime = message.blkWriteTime);
        message.tempBlkReadTime !== undefined &&
            (obj.tempBlkReadTime = message.tempBlkReadTime);
        message.tempBlkWriteTime !== undefined &&
            (obj.tempBlkWriteTime = message.tempBlkWriteTime);
        message.walRecords !== undefined &&
            (obj.walRecords = Math.round(message.walRecords));
        message.walFpi !== undefined && (obj.walFpi = Math.round(message.walFpi));
        message.walBytes !== undefined &&
            (obj.walBytes = Math.round(message.walBytes));
        message.jitFunctions !== undefined &&
            (obj.jitFunctions = Math.round(message.jitFunctions));
        message.jitGenerationTime !== undefined &&
            (obj.jitGenerationTime = message.jitGenerationTime);
        message.jitInliningCount !== undefined &&
            (obj.jitInliningCount = Math.round(message.jitInliningCount));
        message.jitInliningTime !== undefined &&
            (obj.jitInliningTime = message.jitInliningTime);
        message.jitOptimizationCount !== undefined &&
            (obj.jitOptimizationCount = Math.round(message.jitOptimizationCount));
        message.jitOptimizationTime !== undefined &&
            (obj.jitOptimizationTime = message.jitOptimizationTime);
        message.jitEmissionCount !== undefined &&
            (obj.jitEmissionCount = Math.round(message.jitEmissionCount));
        message.jitEmissionTime !== undefined &&
            (obj.jitEmissionTime = message.jitEmissionTime);
        message.startupCost !== undefined &&
            (obj.startupCost = Math.round(message.startupCost));
        message.totalCost !== undefined &&
            (obj.totalCost = Math.round(message.totalCost));
        message.planRows !== undefined &&
            (obj.planRows = Math.round(message.planRows));
        message.planWidth !== undefined &&
            (obj.planWidth = Math.round(message.planWidth));
        message.reads !== undefined && (obj.reads = Math.round(message.reads));
        message.writes !== undefined && (obj.writes = Math.round(message.writes));
        message.userTime !== undefined && (obj.userTime = message.userTime);
        message.systemTime !== undefined && (obj.systemTime = message.systemTime);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
        const message = Object.assign({}, baseQueryStats);
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : "";
        message.normalizedPlan = (_c = object.normalizedPlan) !== null && _c !== void 0 ? _c : "";
        message.examplePlan = (_d = object.examplePlan) !== null && _d !== void 0 ? _d : "";
        message.plans = (_e = object.plans) !== null && _e !== void 0 ? _e : 0;
        message.totalPlanTime = (_f = object.totalPlanTime) !== null && _f !== void 0 ? _f : 0;
        message.minPlanTime = (_g = object.minPlanTime) !== null && _g !== void 0 ? _g : 0;
        message.maxPlanTime = (_h = object.maxPlanTime) !== null && _h !== void 0 ? _h : 0;
        message.meanPlanTime = (_j = object.meanPlanTime) !== null && _j !== void 0 ? _j : 0;
        message.stddevPlanTime = (_k = object.stddevPlanTime) !== null && _k !== void 0 ? _k : 0;
        message.calls = (_l = object.calls) !== null && _l !== void 0 ? _l : 0;
        message.totalTime = (_m = object.totalTime) !== null && _m !== void 0 ? _m : 0;
        message.minTime = (_o = object.minTime) !== null && _o !== void 0 ? _o : 0;
        message.maxTime = (_p = object.maxTime) !== null && _p !== void 0 ? _p : 0;
        message.meanTime = (_q = object.meanTime) !== null && _q !== void 0 ? _q : 0;
        message.stddevTime = (_r = object.stddevTime) !== null && _r !== void 0 ? _r : 0;
        message.rows = (_s = object.rows) !== null && _s !== void 0 ? _s : 0;
        message.sharedBlksHit = (_t = object.sharedBlksHit) !== null && _t !== void 0 ? _t : 0;
        message.sharedBlksRead = (_u = object.sharedBlksRead) !== null && _u !== void 0 ? _u : 0;
        message.sharedBlksDirtied = (_v = object.sharedBlksDirtied) !== null && _v !== void 0 ? _v : 0;
        message.sharedBlksWritten = (_w = object.sharedBlksWritten) !== null && _w !== void 0 ? _w : 0;
        message.localBlksHit = (_x = object.localBlksHit) !== null && _x !== void 0 ? _x : 0;
        message.localBlksRead = (_y = object.localBlksRead) !== null && _y !== void 0 ? _y : 0;
        message.localBlksDirtied = (_z = object.localBlksDirtied) !== null && _z !== void 0 ? _z : 0;
        message.localBlksWritten = (_0 = object.localBlksWritten) !== null && _0 !== void 0 ? _0 : 0;
        message.tempBlksRead = (_1 = object.tempBlksRead) !== null && _1 !== void 0 ? _1 : 0;
        message.tempBlksWritten = (_2 = object.tempBlksWritten) !== null && _2 !== void 0 ? _2 : 0;
        message.blkReadTime = (_3 = object.blkReadTime) !== null && _3 !== void 0 ? _3 : 0;
        message.blkWriteTime = (_4 = object.blkWriteTime) !== null && _4 !== void 0 ? _4 : 0;
        message.tempBlkReadTime = (_5 = object.tempBlkReadTime) !== null && _5 !== void 0 ? _5 : 0;
        message.tempBlkWriteTime = (_6 = object.tempBlkWriteTime) !== null && _6 !== void 0 ? _6 : 0;
        message.walRecords = (_7 = object.walRecords) !== null && _7 !== void 0 ? _7 : 0;
        message.walFpi = (_8 = object.walFpi) !== null && _8 !== void 0 ? _8 : 0;
        message.walBytes = (_9 = object.walBytes) !== null && _9 !== void 0 ? _9 : 0;
        message.jitFunctions = (_10 = object.jitFunctions) !== null && _10 !== void 0 ? _10 : 0;
        message.jitGenerationTime = (_11 = object.jitGenerationTime) !== null && _11 !== void 0 ? _11 : 0;
        message.jitInliningCount = (_12 = object.jitInliningCount) !== null && _12 !== void 0 ? _12 : 0;
        message.jitInliningTime = (_13 = object.jitInliningTime) !== null && _13 !== void 0 ? _13 : 0;
        message.jitOptimizationCount = (_14 = object.jitOptimizationCount) !== null && _14 !== void 0 ? _14 : 0;
        message.jitOptimizationTime = (_15 = object.jitOptimizationTime) !== null && _15 !== void 0 ? _15 : 0;
        message.jitEmissionCount = (_16 = object.jitEmissionCount) !== null && _16 !== void 0 ? _16 : 0;
        message.jitEmissionTime = (_17 = object.jitEmissionTime) !== null && _17 !== void 0 ? _17 : 0;
        message.startupCost = (_18 = object.startupCost) !== null && _18 !== void 0 ? _18 : 0;
        message.totalCost = (_19 = object.totalCost) !== null && _19 !== void 0 ? _19 : 0;
        message.planRows = (_20 = object.planRows) !== null && _20 !== void 0 ? _20 : 0;
        message.planWidth = (_21 = object.planWidth) !== null && _21 !== void 0 ? _21 : 0;
        message.reads = (_22 = object.reads) !== null && _22 !== void 0 ? _22 : 0;
        message.writes = (_23 = object.writes) !== null && _23 !== void 0 ? _23 : 0;
        message.userTime = (_24 = object.userTime) !== null && _24 !== void 0 ? _24 : 0;
        message.systemTime = (_25 = object.systemTime) !== null && _25 !== void 0 ? _25 : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryStats.$type, exports.QueryStats);
const baseQueryStatement = {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement",
};
exports.QueryStatement = {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined) {
            exports.PrimaryKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.stats !== undefined) {
            exports.QueryStats.encode(message.stats, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryStatement);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = exports.PrimaryKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stats = exports.QueryStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryStatement);
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.PrimaryKey.fromJSON(object.key)
                : undefined;
        message.stats =
            object.stats !== undefined && object.stats !== null
                ? exports.QueryStats.fromJSON(object.stats)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = message.key ? exports.PrimaryKey.toJSON(message.key) : undefined);
        message.stats !== undefined &&
            (obj.stats = message.stats
                ? exports.QueryStats.toJSON(message.stats)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryStatement);
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.PrimaryKey.fromPartial(object.key)
                : undefined;
        message.stats =
            object.stats !== undefined && object.stats !== null
                ? exports.QueryStats.fromPartial(object.stats)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryStatement.$type, exports.QueryStatement);
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
