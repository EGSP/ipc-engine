"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataprocManagerServiceClient = exports.DataprocManagerServiceService = exports.ReportReply = exports.ReportRequest = exports.Info = exports.InitActs = exports.LivyInfo = exports.OozieInfo = exports.ZookeeperInfo = exports.YarnInfo = exports.YarnNodeInfo = exports.HiveInfo = exports.HDFSInfo = exports.HDFSNodeInfo = exports.HbaseInfo = exports.HbaseNodeInfo = exports.initActsStateToJSON = exports.initActsStateFromJSON = exports.InitActsState = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.dataproc.manager.v1";
var InitActsState;
(function (InitActsState) {
    /** INIT_ACTS_STATE_UNSPECIFIED - No init acts on cluster */
    InitActsState[InitActsState["INIT_ACTS_STATE_UNSPECIFIED"] = 0] = "INIT_ACTS_STATE_UNSPECIFIED";
    /** FAILED - At least one failed init act */
    InitActsState[InitActsState["FAILED"] = 1] = "FAILED";
    /** SUCCESSFUL - All init acts succeeded */
    InitActsState[InitActsState["SUCCESSFUL"] = 2] = "SUCCESSFUL";
    /** IN_PROGRESS - Some init acts not finished */
    InitActsState[InitActsState["IN_PROGRESS"] = 3] = "IN_PROGRESS";
    InitActsState[InitActsState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InitActsState = exports.InitActsState || (exports.InitActsState = {}));
function initActsStateFromJSON(object) {
    switch (object) {
        case 0:
        case "INIT_ACTS_STATE_UNSPECIFIED":
            return InitActsState.INIT_ACTS_STATE_UNSPECIFIED;
        case 1:
        case "FAILED":
            return InitActsState.FAILED;
        case 2:
        case "SUCCESSFUL":
            return InitActsState.SUCCESSFUL;
        case 3:
        case "IN_PROGRESS":
            return InitActsState.IN_PROGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InitActsState.UNRECOGNIZED;
    }
}
exports.initActsStateFromJSON = initActsStateFromJSON;
function initActsStateToJSON(object) {
    switch (object) {
        case InitActsState.INIT_ACTS_STATE_UNSPECIFIED:
            return "INIT_ACTS_STATE_UNSPECIFIED";
        case InitActsState.FAILED:
            return "FAILED";
        case InitActsState.SUCCESSFUL:
            return "SUCCESSFUL";
        case InitActsState.IN_PROGRESS:
            return "IN_PROGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.initActsStateToJSON = initActsStateToJSON;
const baseHbaseNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo",
    name: "",
    requests: 0,
    heapSizeMb: 0,
    maxHeapSizeMb: 0,
};
exports.HbaseNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requests !== 0) {
            writer.uint32(16).int64(message.requests);
        }
        if (message.heapSizeMb !== 0) {
            writer.uint32(24).int64(message.heapSizeMb);
        }
        if (message.maxHeapSizeMb !== 0) {
            writer.uint32(32).int64(message.maxHeapSizeMb);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHbaseNodeInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requests = longToNumber(reader.int64());
                    break;
                case 3:
                    message.heapSizeMb = longToNumber(reader.int64());
                    break;
                case 4:
                    message.maxHeapSizeMb = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHbaseNodeInfo);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.requests =
            object.requests !== undefined && object.requests !== null
                ? Number(object.requests)
                : 0;
        message.heapSizeMb =
            object.heapSizeMb !== undefined && object.heapSizeMb !== null
                ? Number(object.heapSizeMb)
                : 0;
        message.maxHeapSizeMb =
            object.maxHeapSizeMb !== undefined && object.maxHeapSizeMb !== null
                ? Number(object.maxHeapSizeMb)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.requests !== undefined &&
            (obj.requests = Math.round(message.requests));
        message.heapSizeMb !== undefined &&
            (obj.heapSizeMb = Math.round(message.heapSizeMb));
        message.maxHeapSizeMb !== undefined &&
            (obj.maxHeapSizeMb = Math.round(message.maxHeapSizeMb));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseHbaseNodeInfo);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.requests = (_b = object.requests) !== null && _b !== void 0 ? _b : 0;
        message.heapSizeMb = (_c = object.heapSizeMb) !== null && _c !== void 0 ? _c : 0;
        message.maxHeapSizeMb = (_d = object.maxHeapSizeMb) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HbaseNodeInfo.$type, exports.HbaseNodeInfo);
const baseHbaseInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo",
    available: false,
    regions: 0,
    requests: 0,
    averageLoad: 0,
};
exports.HbaseInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.regions !== 0) {
            writer.uint32(16).int64(message.regions);
        }
        if (message.requests !== 0) {
            writer.uint32(24).int64(message.requests);
        }
        if (message.averageLoad !== 0) {
            writer.uint32(33).double(message.averageLoad);
        }
        for (const v of message.liveNodes) {
            exports.HbaseNodeInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            exports.HbaseNodeInfo.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHbaseInfo);
        message.liveNodes = [];
        message.deadNodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.regions = longToNumber(reader.int64());
                    break;
                case 3:
                    message.requests = longToNumber(reader.int64());
                    break;
                case 4:
                    message.averageLoad = reader.double();
                    break;
                case 5:
                    message.liveNodes.push(exports.HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deadNodes.push(exports.HbaseNodeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseHbaseInfo);
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.regions =
            object.regions !== undefined && object.regions !== null
                ? Number(object.regions)
                : 0;
        message.requests =
            object.requests !== undefined && object.requests !== null
                ? Number(object.requests)
                : 0;
        message.averageLoad =
            object.averageLoad !== undefined && object.averageLoad !== null
                ? Number(object.averageLoad)
                : 0;
        message.liveNodes = ((_a = object.liveNodes) !== null && _a !== void 0 ? _a : []).map((e) => exports.HbaseNodeInfo.fromJSON(e));
        message.deadNodes = ((_b = object.deadNodes) !== null && _b !== void 0 ? _b : []).map((e) => exports.HbaseNodeInfo.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.regions !== undefined &&
            (obj.regions = Math.round(message.regions));
        message.requests !== undefined &&
            (obj.requests = Math.round(message.requests));
        message.averageLoad !== undefined &&
            (obj.averageLoad = message.averageLoad);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.HbaseNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => e ? exports.HbaseNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.deadNodes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseHbaseInfo);
        message.available = (_a = object.available) !== null && _a !== void 0 ? _a : false;
        message.regions = (_b = object.regions) !== null && _b !== void 0 ? _b : 0;
        message.requests = (_c = object.requests) !== null && _c !== void 0 ? _c : 0;
        message.averageLoad = (_d = object.averageLoad) !== null && _d !== void 0 ? _d : 0;
        message.liveNodes =
            ((_e = object.liveNodes) === null || _e === void 0 ? void 0 : _e.map((e) => exports.HbaseNodeInfo.fromPartial(e))) || [];
        message.deadNodes =
            ((_f = object.deadNodes) === null || _f === void 0 ? void 0 : _f.map((e) => exports.HbaseNodeInfo.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HbaseInfo.$type, exports.HbaseInfo);
const baseHDFSNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo",
    name: "",
    used: 0,
    remaining: 0,
    capacity: 0,
    numBlocks: 0,
    state: "",
};
exports.HDFSNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.remaining !== 0) {
            writer.uint32(24).int64(message.remaining);
        }
        if (message.capacity !== 0) {
            writer.uint32(32).int64(message.capacity);
        }
        if (message.numBlocks !== 0) {
            writer.uint32(40).int64(message.numBlocks);
        }
        if (message.state !== "") {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHDFSNodeInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.used = longToNumber(reader.int64());
                    break;
                case 3:
                    message.remaining = longToNumber(reader.int64());
                    break;
                case 4:
                    message.capacity = longToNumber(reader.int64());
                    break;
                case 5:
                    message.numBlocks = longToNumber(reader.int64());
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHDFSNodeInfo);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.used =
            object.used !== undefined && object.used !== null
                ? Number(object.used)
                : 0;
        message.remaining =
            object.remaining !== undefined && object.remaining !== null
                ? Number(object.remaining)
                : 0;
        message.capacity =
            object.capacity !== undefined && object.capacity !== null
                ? Number(object.capacity)
                : 0;
        message.numBlocks =
            object.numBlocks !== undefined && object.numBlocks !== null
                ? Number(object.numBlocks)
                : 0;
        message.state =
            object.state !== undefined && object.state !== null
                ? String(object.state)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.remaining !== undefined &&
            (obj.remaining = Math.round(message.remaining));
        message.capacity !== undefined &&
            (obj.capacity = Math.round(message.capacity));
        message.numBlocks !== undefined &&
            (obj.numBlocks = Math.round(message.numBlocks));
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseHDFSNodeInfo);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.used = (_b = object.used) !== null && _b !== void 0 ? _b : 0;
        message.remaining = (_c = object.remaining) !== null && _c !== void 0 ? _c : 0;
        message.capacity = (_d = object.capacity) !== null && _d !== void 0 ? _d : 0;
        message.numBlocks = (_e = object.numBlocks) !== null && _e !== void 0 ? _e : 0;
        message.state = (_f = object.state) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HDFSNodeInfo.$type, exports.HDFSNodeInfo);
const baseHDFSInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo",
    available: false,
    percentRemaining: 0,
    used: 0,
    free: 0,
    totalBlocks: 0,
    missingBlocks: 0,
    missingBlocksReplicaOne: 0,
    safemode: "",
    requestedDecommissionHosts: "",
};
exports.HDFSInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.percentRemaining !== 0) {
            writer.uint32(17).double(message.percentRemaining);
        }
        if (message.used !== 0) {
            writer.uint32(24).int64(message.used);
        }
        if (message.free !== 0) {
            writer.uint32(32).int64(message.free);
        }
        if (message.totalBlocks !== 0) {
            writer.uint32(40).int64(message.totalBlocks);
        }
        if (message.missingBlocks !== 0) {
            writer.uint32(48).int64(message.missingBlocks);
        }
        if (message.missingBlocksReplicaOne !== 0) {
            writer.uint32(56).int64(message.missingBlocksReplicaOne);
        }
        for (const v of message.liveNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.safemode !== "") {
            writer.uint32(90).string(message.safemode);
        }
        for (const v of message.decommissioningNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.decommissionedNodes) {
            exports.HDFSNodeInfo.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(114).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHDFSInfo);
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.percentRemaining = reader.double();
                    break;
                case 3:
                    message.used = longToNumber(reader.int64());
                    break;
                case 4:
                    message.free = longToNumber(reader.int64());
                    break;
                case 5:
                    message.totalBlocks = longToNumber(reader.int64());
                    break;
                case 6:
                    message.missingBlocks = longToNumber(reader.int64());
                    break;
                case 7:
                    message.missingBlocksReplicaOne = longToNumber(reader.int64());
                    break;
                case 8:
                    message.liveNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.deadNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.safemode = reader.string();
                    break;
                case 12:
                    message.decommissioningNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.decommissionedNodes.push(exports.HDFSNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHDFSInfo);
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.percentRemaining =
            object.percentRemaining !== undefined && object.percentRemaining !== null
                ? Number(object.percentRemaining)
                : 0;
        message.used =
            object.used !== undefined && object.used !== null
                ? Number(object.used)
                : 0;
        message.free =
            object.free !== undefined && object.free !== null
                ? Number(object.free)
                : 0;
        message.totalBlocks =
            object.totalBlocks !== undefined && object.totalBlocks !== null
                ? Number(object.totalBlocks)
                : 0;
        message.missingBlocks =
            object.missingBlocks !== undefined && object.missingBlocks !== null
                ? Number(object.missingBlocks)
                : 0;
        message.missingBlocksReplicaOne =
            object.missingBlocksReplicaOne !== undefined &&
                object.missingBlocksReplicaOne !== null
                ? Number(object.missingBlocksReplicaOne)
                : 0;
        message.liveNodes = ((_a = object.liveNodes) !== null && _a !== void 0 ? _a : []).map((e) => exports.HDFSNodeInfo.fromJSON(e));
        message.deadNodes = ((_b = object.deadNodes) !== null && _b !== void 0 ? _b : []).map((e) => exports.HDFSNodeInfo.fromJSON(e));
        message.safemode =
            object.safemode !== undefined && object.safemode !== null
                ? String(object.safemode)
                : "";
        message.decommissioningNodes = ((_c = object.decommissioningNodes) !== null && _c !== void 0 ? _c : []).map((e) => exports.HDFSNodeInfo.fromJSON(e));
        message.decommissionedNodes = ((_d = object.decommissionedNodes) !== null && _d !== void 0 ? _d : []).map((e) => exports.HDFSNodeInfo.fromJSON(e));
        message.requestedDecommissionHosts = ((_e = object.requestedDecommissionHosts) !== null && _e !== void 0 ? _e : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.percentRemaining !== undefined &&
            (obj.percentRemaining = message.percentRemaining);
        message.used !== undefined && (obj.used = Math.round(message.used));
        message.free !== undefined && (obj.free = Math.round(message.free));
        message.totalBlocks !== undefined &&
            (obj.totalBlocks = Math.round(message.totalBlocks));
        message.missingBlocks !== undefined &&
            (obj.missingBlocks = Math.round(message.missingBlocks));
        message.missingBlocksReplicaOne !== undefined &&
            (obj.missingBlocksReplicaOne = Math.round(message.missingBlocksReplicaOne));
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.deadNodes = [];
        }
        message.safemode !== undefined && (obj.safemode = message.safemode);
        if (message.decommissioningNodes) {
            obj.decommissioningNodes = message.decommissioningNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.decommissioningNodes = [];
        }
        if (message.decommissionedNodes) {
            obj.decommissionedNodes = message.decommissionedNodes.map((e) => e ? exports.HDFSNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.decommissionedNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts = message.requestedDecommissionHosts.map((e) => e);
        }
        else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseHDFSInfo);
        message.available = (_a = object.available) !== null && _a !== void 0 ? _a : false;
        message.percentRemaining = (_b = object.percentRemaining) !== null && _b !== void 0 ? _b : 0;
        message.used = (_c = object.used) !== null && _c !== void 0 ? _c : 0;
        message.free = (_d = object.free) !== null && _d !== void 0 ? _d : 0;
        message.totalBlocks = (_e = object.totalBlocks) !== null && _e !== void 0 ? _e : 0;
        message.missingBlocks = (_f = object.missingBlocks) !== null && _f !== void 0 ? _f : 0;
        message.missingBlocksReplicaOne = (_g = object.missingBlocksReplicaOne) !== null && _g !== void 0 ? _g : 0;
        message.liveNodes =
            ((_h = object.liveNodes) === null || _h === void 0 ? void 0 : _h.map((e) => exports.HDFSNodeInfo.fromPartial(e))) || [];
        message.deadNodes =
            ((_j = object.deadNodes) === null || _j === void 0 ? void 0 : _j.map((e) => exports.HDFSNodeInfo.fromPartial(e))) || [];
        message.safemode = (_k = object.safemode) !== null && _k !== void 0 ? _k : "";
        message.decommissioningNodes =
            ((_l = object.decommissioningNodes) === null || _l === void 0 ? void 0 : _l.map((e) => exports.HDFSNodeInfo.fromPartial(e))) ||
                [];
        message.decommissionedNodes =
            ((_m = object.decommissionedNodes) === null || _m === void 0 ? void 0 : _m.map((e) => exports.HDFSNodeInfo.fromPartial(e))) || [];
        message.requestedDecommissionHosts =
            ((_o = object.requestedDecommissionHosts) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HDFSInfo.$type, exports.HDFSInfo);
const baseHiveInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo",
    available: false,
    queriesSucceeded: 0,
    queriesFailed: 0,
    queriesExecuting: 0,
    sessionsOpen: 0,
    sessionsActive: 0,
};
exports.HiveInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.queriesSucceeded !== 0) {
            writer.uint32(16).int64(message.queriesSucceeded);
        }
        if (message.queriesFailed !== 0) {
            writer.uint32(24).int64(message.queriesFailed);
        }
        if (message.queriesExecuting !== 0) {
            writer.uint32(32).int64(message.queriesExecuting);
        }
        if (message.sessionsOpen !== 0) {
            writer.uint32(40).int64(message.sessionsOpen);
        }
        if (message.sessionsActive !== 0) {
            writer.uint32(48).int64(message.sessionsActive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHiveInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.queriesSucceeded = longToNumber(reader.int64());
                    break;
                case 3:
                    message.queriesFailed = longToNumber(reader.int64());
                    break;
                case 4:
                    message.queriesExecuting = longToNumber(reader.int64());
                    break;
                case 5:
                    message.sessionsOpen = longToNumber(reader.int64());
                    break;
                case 6:
                    message.sessionsActive = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHiveInfo);
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.queriesSucceeded =
            object.queriesSucceeded !== undefined && object.queriesSucceeded !== null
                ? Number(object.queriesSucceeded)
                : 0;
        message.queriesFailed =
            object.queriesFailed !== undefined && object.queriesFailed !== null
                ? Number(object.queriesFailed)
                : 0;
        message.queriesExecuting =
            object.queriesExecuting !== undefined && object.queriesExecuting !== null
                ? Number(object.queriesExecuting)
                : 0;
        message.sessionsOpen =
            object.sessionsOpen !== undefined && object.sessionsOpen !== null
                ? Number(object.sessionsOpen)
                : 0;
        message.sessionsActive =
            object.sessionsActive !== undefined && object.sessionsActive !== null
                ? Number(object.sessionsActive)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        message.queriesSucceeded !== undefined &&
            (obj.queriesSucceeded = Math.round(message.queriesSucceeded));
        message.queriesFailed !== undefined &&
            (obj.queriesFailed = Math.round(message.queriesFailed));
        message.queriesExecuting !== undefined &&
            (obj.queriesExecuting = Math.round(message.queriesExecuting));
        message.sessionsOpen !== undefined &&
            (obj.sessionsOpen = Math.round(message.sessionsOpen));
        message.sessionsActive !== undefined &&
            (obj.sessionsActive = Math.round(message.sessionsActive));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseHiveInfo);
        message.available = (_a = object.available) !== null && _a !== void 0 ? _a : false;
        message.queriesSucceeded = (_b = object.queriesSucceeded) !== null && _b !== void 0 ? _b : 0;
        message.queriesFailed = (_c = object.queriesFailed) !== null && _c !== void 0 ? _c : 0;
        message.queriesExecuting = (_d = object.queriesExecuting) !== null && _d !== void 0 ? _d : 0;
        message.sessionsOpen = (_e = object.sessionsOpen) !== null && _e !== void 0 ? _e : 0;
        message.sessionsActive = (_f = object.sessionsActive) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HiveInfo.$type, exports.HiveInfo);
const baseYarnNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo",
    name: "",
    state: "",
    numContainers: 0,
    usedMemoryMb: 0,
    availableMemoryMb: 0,
    updateTime: 0,
};
exports.YarnNodeInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.state !== "") {
            writer.uint32(18).string(message.state);
        }
        if (message.numContainers !== 0) {
            writer.uint32(24).int64(message.numContainers);
        }
        if (message.usedMemoryMb !== 0) {
            writer.uint32(32).int64(message.usedMemoryMb);
        }
        if (message.availableMemoryMb !== 0) {
            writer.uint32(40).int64(message.availableMemoryMb);
        }
        if (message.updateTime !== 0) {
            writer.uint32(48).int64(message.updateTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYarnNodeInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                case 3:
                    message.numContainers = longToNumber(reader.int64());
                    break;
                case 4:
                    message.usedMemoryMb = longToNumber(reader.int64());
                    break;
                case 5:
                    message.availableMemoryMb = longToNumber(reader.int64());
                    break;
                case 6:
                    message.updateTime = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseYarnNodeInfo);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.state =
            object.state !== undefined && object.state !== null
                ? String(object.state)
                : "";
        message.numContainers =
            object.numContainers !== undefined && object.numContainers !== null
                ? Number(object.numContainers)
                : 0;
        message.usedMemoryMb =
            object.usedMemoryMb !== undefined && object.usedMemoryMb !== null
                ? Number(object.usedMemoryMb)
                : 0;
        message.availableMemoryMb =
            object.availableMemoryMb !== undefined &&
                object.availableMemoryMb !== null
                ? Number(object.availableMemoryMb)
                : 0;
        message.updateTime =
            object.updateTime !== undefined && object.updateTime !== null
                ? Number(object.updateTime)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.state !== undefined && (obj.state = message.state);
        message.numContainers !== undefined &&
            (obj.numContainers = Math.round(message.numContainers));
        message.usedMemoryMb !== undefined &&
            (obj.usedMemoryMb = Math.round(message.usedMemoryMb));
        message.availableMemoryMb !== undefined &&
            (obj.availableMemoryMb = Math.round(message.availableMemoryMb));
        message.updateTime !== undefined &&
            (obj.updateTime = Math.round(message.updateTime));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseYarnNodeInfo);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : "";
        message.numContainers = (_c = object.numContainers) !== null && _c !== void 0 ? _c : 0;
        message.usedMemoryMb = (_d = object.usedMemoryMb) !== null && _d !== void 0 ? _d : 0;
        message.availableMemoryMb = (_e = object.availableMemoryMb) !== null && _e !== void 0 ? _e : 0;
        message.updateTime = (_f = object.updateTime) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YarnNodeInfo.$type, exports.YarnNodeInfo);
const baseYarnInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo",
    available: false,
    requestedDecommissionHosts: "",
};
exports.YarnInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        for (const v of message.liveNodes) {
            exports.YarnNodeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseYarnInfo);
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.liveNodes.push(exports.YarnNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseYarnInfo);
        message.available =
            object.available !== undefined && object.available !== null
                ? Boolean(object.available)
                : false;
        message.liveNodes = ((_a = object.liveNodes) !== null && _a !== void 0 ? _a : []).map((e) => exports.YarnNodeInfo.fromJSON(e));
        message.requestedDecommissionHosts = ((_b = object.requestedDecommissionHosts) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.available !== undefined && (obj.available = message.available);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) => e ? exports.YarnNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.liveNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts = message.requestedDecommissionHosts.map((e) => e);
        }
        else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseYarnInfo);
        message.available = (_a = object.available) !== null && _a !== void 0 ? _a : false;
        message.liveNodes =
            ((_b = object.liveNodes) === null || _b === void 0 ? void 0 : _b.map((e) => exports.YarnNodeInfo.fromPartial(e))) || [];
        message.requestedDecommissionHosts =
            ((_c = object.requestedDecommissionHosts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YarnInfo.$type, exports.YarnInfo);
const baseZookeeperInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo",
    alive: false,
};
exports.ZookeeperInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseZookeeperInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseZookeeperInfo);
        message.alive =
            object.alive !== undefined && object.alive !== null
                ? Boolean(object.alive)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseZookeeperInfo);
        message.alive = (_a = object.alive) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ZookeeperInfo.$type, exports.ZookeeperInfo);
const baseOozieInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.OozieInfo",
    alive: false,
};
exports.OozieInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.OozieInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOozieInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOozieInfo);
        message.alive =
            object.alive !== undefined && object.alive !== null
                ? Boolean(object.alive)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOozieInfo);
        message.alive = (_a = object.alive) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OozieInfo.$type, exports.OozieInfo);
const baseLivyInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.LivyInfo",
    alive: false,
};
exports.LivyInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.LivyInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLivyInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLivyInfo);
        message.alive =
            object.alive !== undefined && object.alive !== null
                ? Boolean(object.alive)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLivyInfo);
        message.alive = (_a = object.alive) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LivyInfo.$type, exports.LivyInfo);
const baseInitActs = {
    $type: "yandex.cloud.dataproc.manager.v1.InitActs",
    state: 0,
    fqdns: "",
};
exports.InitActs = {
    $type: "yandex.cloud.dataproc.manager.v1.InitActs",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        for (const v of message.fqdns) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInitActs);
        message.fqdns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.fqdns.push(reader.string());
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
        const message = Object.assign({}, baseInitActs);
        message.state =
            object.state !== undefined && object.state !== null
                ? initActsStateFromJSON(object.state)
                : 0;
        message.fqdns = ((_a = object.fqdns) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined &&
            (obj.state = initActsStateToJSON(message.state));
        if (message.fqdns) {
            obj.fqdns = message.fqdns.map((e) => e);
        }
        else {
            obj.fqdns = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInitActs);
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.fqdns = ((_b = object.fqdns) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InitActs.$type, exports.InitActs);
const baseInfo = {
    $type: "yandex.cloud.dataproc.manager.v1.Info",
    reportCount: 0,
};
exports.Info = {
    $type: "yandex.cloud.dataproc.manager.v1.Info",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hdfs !== undefined) {
            exports.HDFSInfo.encode(message.hdfs, writer.uint32(10).fork()).ldelim();
        }
        if (message.yarn !== undefined) {
            exports.YarnInfo.encode(message.yarn, writer.uint32(18).fork()).ldelim();
        }
        if (message.hive !== undefined) {
            exports.HiveInfo.encode(message.hive, writer.uint32(26).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            exports.ZookeeperInfo.encode(message.zookeeper, writer.uint32(34).fork()).ldelim();
        }
        if (message.hbase !== undefined) {
            exports.HbaseInfo.encode(message.hbase, writer.uint32(42).fork()).ldelim();
        }
        if (message.oozie !== undefined) {
            exports.OozieInfo.encode(message.oozie, writer.uint32(50).fork()).ldelim();
        }
        if (message.reportCount !== 0) {
            writer.uint32(56).int64(message.reportCount);
        }
        if (message.livy !== undefined) {
            exports.LivyInfo.encode(message.livy, writer.uint32(66).fork()).ldelim();
        }
        if (message.initActs !== undefined) {
            exports.InitActs.encode(message.initActs, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hdfs = exports.HDFSInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.yarn = exports.YarnInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hive = exports.HiveInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zookeeper = exports.ZookeeperInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.hbase = exports.HbaseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oozie = exports.OozieInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.reportCount = longToNumber(reader.int64());
                    break;
                case 8:
                    message.livy = exports.LivyInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.initActs = exports.InitActs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInfo);
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? exports.HDFSInfo.fromJSON(object.hdfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? exports.YarnInfo.fromJSON(object.yarn)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? exports.HiveInfo.fromJSON(object.hive)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ZookeeperInfo.fromJSON(object.zookeeper)
                : undefined;
        message.hbase =
            object.hbase !== undefined && object.hbase !== null
                ? exports.HbaseInfo.fromJSON(object.hbase)
                : undefined;
        message.oozie =
            object.oozie !== undefined && object.oozie !== null
                ? exports.OozieInfo.fromJSON(object.oozie)
                : undefined;
        message.reportCount =
            object.reportCount !== undefined && object.reportCount !== null
                ? Number(object.reportCount)
                : 0;
        message.livy =
            object.livy !== undefined && object.livy !== null
                ? exports.LivyInfo.fromJSON(object.livy)
                : undefined;
        message.initActs =
            object.initActs !== undefined && object.initActs !== null
                ? exports.InitActs.fromJSON(object.initActs)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hdfs !== undefined &&
            (obj.hdfs = message.hdfs ? exports.HDFSInfo.toJSON(message.hdfs) : undefined);
        message.yarn !== undefined &&
            (obj.yarn = message.yarn ? exports.YarnInfo.toJSON(message.yarn) : undefined);
        message.hive !== undefined &&
            (obj.hive = message.hive ? exports.HiveInfo.toJSON(message.hive) : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? exports.ZookeeperInfo.toJSON(message.zookeeper)
                : undefined);
        message.hbase !== undefined &&
            (obj.hbase = message.hbase ? exports.HbaseInfo.toJSON(message.hbase) : undefined);
        message.oozie !== undefined &&
            (obj.oozie = message.oozie ? exports.OozieInfo.toJSON(message.oozie) : undefined);
        message.reportCount !== undefined &&
            (obj.reportCount = Math.round(message.reportCount));
        message.livy !== undefined &&
            (obj.livy = message.livy ? exports.LivyInfo.toJSON(message.livy) : undefined);
        message.initActs !== undefined &&
            (obj.initActs = message.initActs
                ? exports.InitActs.toJSON(message.initActs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseInfo);
        message.hdfs =
            object.hdfs !== undefined && object.hdfs !== null
                ? exports.HDFSInfo.fromPartial(object.hdfs)
                : undefined;
        message.yarn =
            object.yarn !== undefined && object.yarn !== null
                ? exports.YarnInfo.fromPartial(object.yarn)
                : undefined;
        message.hive =
            object.hive !== undefined && object.hive !== null
                ? exports.HiveInfo.fromPartial(object.hive)
                : undefined;
        message.zookeeper =
            object.zookeeper !== undefined && object.zookeeper !== null
                ? exports.ZookeeperInfo.fromPartial(object.zookeeper)
                : undefined;
        message.hbase =
            object.hbase !== undefined && object.hbase !== null
                ? exports.HbaseInfo.fromPartial(object.hbase)
                : undefined;
        message.oozie =
            object.oozie !== undefined && object.oozie !== null
                ? exports.OozieInfo.fromPartial(object.oozie)
                : undefined;
        message.reportCount = (_a = object.reportCount) !== null && _a !== void 0 ? _a : 0;
        message.livy =
            object.livy !== undefined && object.livy !== null
                ? exports.LivyInfo.fromPartial(object.livy)
                : undefined;
        message.initActs =
            object.initActs !== undefined && object.initActs !== null
                ? exports.InitActs.fromPartial(object.initActs)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Info.$type, exports.Info);
const baseReportRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest",
    cid: "",
    topologyRevision: 0,
};
exports.ReportRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cid !== "") {
            writer.uint32(10).string(message.cid);
        }
        if (message.topologyRevision !== 0) {
            writer.uint32(16).int64(message.topologyRevision);
        }
        if (message.info !== undefined) {
            exports.Info.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.collectedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.collectedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseReportRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.topologyRevision = longToNumber(reader.int64());
                    break;
                case 3:
                    message.info = exports.Info.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.collectedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseReportRequest);
        message.cid =
            object.cid !== undefined && object.cid !== null ? String(object.cid) : "";
        message.topologyRevision =
            object.topologyRevision !== undefined && object.topologyRevision !== null
                ? Number(object.topologyRevision)
                : 0;
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.Info.fromJSON(object.info)
                : undefined;
        message.collectedAt =
            object.collectedAt !== undefined && object.collectedAt !== null
                ? fromJsonTimestamp(object.collectedAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cid !== undefined && (obj.cid = message.cid);
        message.topologyRevision !== undefined &&
            (obj.topologyRevision = Math.round(message.topologyRevision));
        message.info !== undefined &&
            (obj.info = message.info ? exports.Info.toJSON(message.info) : undefined);
        message.collectedAt !== undefined &&
            (obj.collectedAt = message.collectedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseReportRequest);
        message.cid = (_a = object.cid) !== null && _a !== void 0 ? _a : "";
        message.topologyRevision = (_b = object.topologyRevision) !== null && _b !== void 0 ? _b : 0;
        message.info =
            object.info !== undefined && object.info !== null
                ? exports.Info.fromPartial(object.info)
                : undefined;
        message.collectedAt = (_c = object.collectedAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReportRequest.$type, exports.ReportRequest);
const baseReportReply = {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply",
    decommissionTimeout: 0,
    yarnHostsToDecommission: "",
    hdfsHostsToDecommission: "",
};
exports.ReportReply = {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.decommissionTimeout !== 0) {
            writer.uint32(8).int64(message.decommissionTimeout);
        }
        for (const v of message.yarnHostsToDecommission) {
            writer.uint32(18).string(v);
        }
        for (const v of message.hdfsHostsToDecommission) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseReportReply);
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                case 2:
                    message.yarnHostsToDecommission.push(reader.string());
                    break;
                case 3:
                    message.hdfsHostsToDecommission.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseReportReply);
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined &&
                object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        message.yarnHostsToDecommission = ((_a = object.yarnHostsToDecommission) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.hdfsHostsToDecommission = ((_b = object.hdfsHostsToDecommission) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        if (message.yarnHostsToDecommission) {
            obj.yarnHostsToDecommission = message.yarnHostsToDecommission.map((e) => e);
        }
        else {
            obj.yarnHostsToDecommission = [];
        }
        if (message.hdfsHostsToDecommission) {
            obj.hdfsHostsToDecommission = message.hdfsHostsToDecommission.map((e) => e);
        }
        else {
            obj.hdfsHostsToDecommission = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseReportReply);
        message.decommissionTimeout = (_a = object.decommissionTimeout) !== null && _a !== void 0 ? _a : 0;
        message.yarnHostsToDecommission =
            ((_b = object.yarnHostsToDecommission) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.hdfsHostsToDecommission =
            ((_c = object.hdfsHostsToDecommission) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReportReply.$type, exports.ReportReply);
/** Data Proc manager service definition. */
exports.DataprocManagerServiceService = {
    /** Sends a status report from a host. */
    report: {
        path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ReportRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ReportRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ReportReply.encode(value).finish()),
        responseDeserialize: (value) => exports.ReportReply.decode(value),
    },
};
exports.DataprocManagerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DataprocManagerServiceService, "yandex.cloud.dataproc.manager.v1.DataprocManagerService");
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
