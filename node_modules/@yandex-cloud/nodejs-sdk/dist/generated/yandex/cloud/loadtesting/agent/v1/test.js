"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = exports.LoadSchedule = exports.Test_LabelsEntry = exports.Test = exports.test_GeneratorToJSON = exports.test_GeneratorFromJSON = exports.Test_Generator = exports.test_StatusToJSON = exports.test_StatusFromJSON = exports.Test_Status = exports.scheduleTypeToJSON = exports.scheduleTypeFromJSON = exports.ScheduleType = exports.loadTypeToJSON = exports.loadTypeFromJSON = exports.LoadType = exports.ammoTypeToJSON = exports.ammoTypeFromJSON = exports.AmmoType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
/**
 * Ammo type for generators: phantom.ammo_type,
 * ammo.type in pandora.config_content.pool
 */
var AmmoType;
(function (AmmoType) {
    AmmoType[AmmoType["AMMO_TYPE_UNSPECIFIED"] = 0] = "AMMO_TYPE_UNSPECIFIED";
    AmmoType[AmmoType["HTTP_JSON"] = 1] = "HTTP_JSON";
    AmmoType[AmmoType["RAW"] = 2] = "RAW";
    AmmoType[AmmoType["URI"] = 3] = "URI";
    AmmoType[AmmoType["URIPOST"] = 4] = "URIPOST";
    AmmoType[AmmoType["PHANTOM"] = 5] = "PHANTOM";
    AmmoType[AmmoType["ACCESS"] = 6] = "ACCESS";
    AmmoType[AmmoType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AmmoType = exports.AmmoType || (exports.AmmoType = {}));
function ammoTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AMMO_TYPE_UNSPECIFIED":
            return AmmoType.AMMO_TYPE_UNSPECIFIED;
        case 1:
        case "HTTP_JSON":
            return AmmoType.HTTP_JSON;
        case 2:
        case "RAW":
            return AmmoType.RAW;
        case 3:
        case "URI":
            return AmmoType.URI;
        case 4:
        case "URIPOST":
            return AmmoType.URIPOST;
        case 5:
        case "PHANTOM":
            return AmmoType.PHANTOM;
        case 6:
        case "ACCESS":
            return AmmoType.ACCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AmmoType.UNRECOGNIZED;
    }
}
exports.ammoTypeFromJSON = ammoTypeFromJSON;
function ammoTypeToJSON(object) {
    switch (object) {
        case AmmoType.AMMO_TYPE_UNSPECIFIED:
            return "AMMO_TYPE_UNSPECIFIED";
        case AmmoType.HTTP_JSON:
            return "HTTP_JSON";
        case AmmoType.RAW:
            return "RAW";
        case AmmoType.URI:
            return "URI";
        case AmmoType.URIPOST:
            return "URIPOST";
        case AmmoType.PHANTOM:
            return "PHANTOM";
        case AmmoType.ACCESS:
            return "ACCESS";
        default:
            return "UNKNOWN";
    }
}
exports.ammoTypeToJSON = ammoTypeToJSON;
/** Load type: phantom.load_profile.load_type, */
var LoadType;
(function (LoadType) {
    LoadType[LoadType["LOAD_TYPE_UNSPECIFIED"] = 0] = "LOAD_TYPE_UNSPECIFIED";
    LoadType[LoadType["RPS"] = 1] = "RPS";
    LoadType[LoadType["INSTANCES"] = 2] = "INSTANCES";
    LoadType[LoadType["STPD_FILE"] = 3] = "STPD_FILE";
    LoadType[LoadType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LoadType = exports.LoadType || (exports.LoadType = {}));
function loadTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LOAD_TYPE_UNSPECIFIED":
            return LoadType.LOAD_TYPE_UNSPECIFIED;
        case 1:
        case "RPS":
            return LoadType.RPS;
        case 2:
        case "INSTANCES":
            return LoadType.INSTANCES;
        case 3:
        case "STPD_FILE":
            return LoadType.STPD_FILE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LoadType.UNRECOGNIZED;
    }
}
exports.loadTypeFromJSON = loadTypeFromJSON;
function loadTypeToJSON(object) {
    switch (object) {
        case LoadType.LOAD_TYPE_UNSPECIFIED:
            return "LOAD_TYPE_UNSPECIFIED";
        case LoadType.RPS:
            return "RPS";
        case LoadType.INSTANCES:
            return "INSTANCES";
        case LoadType.STPD_FILE:
            return "STPD_FILE";
        default:
            return "UNKNOWN";
    }
}
exports.loadTypeToJSON = loadTypeToJSON;
/**
 * Schedule type: phantom.load_profile.schedule,
 * rps.schedule.type in pandora.config_content.pool
 */
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["SCHEDULE_TYPE_UNSPECIFIED"] = 0] = "SCHEDULE_TYPE_UNSPECIFIED";
    ScheduleType[ScheduleType["ONCE"] = 1] = "ONCE";
    ScheduleType[ScheduleType["CONST"] = 2] = "CONST";
    ScheduleType[ScheduleType["LINE"] = 3] = "LINE";
    ScheduleType[ScheduleType["STEP"] = 4] = "STEP";
    ScheduleType[ScheduleType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
function scheduleTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SCHEDULE_TYPE_UNSPECIFIED":
            return ScheduleType.SCHEDULE_TYPE_UNSPECIFIED;
        case 1:
        case "ONCE":
            return ScheduleType.ONCE;
        case 2:
        case "CONST":
            return ScheduleType.CONST;
        case 3:
        case "LINE":
            return ScheduleType.LINE;
        case 4:
        case "STEP":
            return ScheduleType.STEP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScheduleType.UNRECOGNIZED;
    }
}
exports.scheduleTypeFromJSON = scheduleTypeFromJSON;
function scheduleTypeToJSON(object) {
    switch (object) {
        case ScheduleType.SCHEDULE_TYPE_UNSPECIFIED:
            return "SCHEDULE_TYPE_UNSPECIFIED";
        case ScheduleType.ONCE:
            return "ONCE";
        case ScheduleType.CONST:
            return "CONST";
        case ScheduleType.LINE:
            return "LINE";
        case ScheduleType.STEP:
            return "STEP";
        default:
            return "UNKNOWN";
    }
}
exports.scheduleTypeToJSON = scheduleTypeToJSON;
var Test_Status;
(function (Test_Status) {
    Test_Status[Test_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Test_Status[Test_Status["CREATED"] = 1] = "CREATED";
    Test_Status[Test_Status["INITIATED"] = 2] = "INITIATED";
    Test_Status[Test_Status["PREPARING"] = 3] = "PREPARING";
    Test_Status[Test_Status["RUNNING"] = 4] = "RUNNING";
    Test_Status[Test_Status["FINISHING"] = 5] = "FINISHING";
    Test_Status[Test_Status["DONE"] = 6] = "DONE";
    Test_Status[Test_Status["POST_PROCESSING"] = 7] = "POST_PROCESSING";
    Test_Status[Test_Status["FAILED"] = 8] = "FAILED";
    Test_Status[Test_Status["STOPPING"] = 9] = "STOPPING";
    Test_Status[Test_Status["STOPPED"] = 10] = "STOPPED";
    Test_Status[Test_Status["AUTOSTOPPED"] = 11] = "AUTOSTOPPED";
    Test_Status[Test_Status["WAITING"] = 12] = "WAITING";
    Test_Status[Test_Status["DELETING"] = 13] = "DELETING";
    Test_Status[Test_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Test_Status = exports.Test_Status || (exports.Test_Status = {}));
function test_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Test_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATED":
            return Test_Status.CREATED;
        case 2:
        case "INITIATED":
            return Test_Status.INITIATED;
        case 3:
        case "PREPARING":
            return Test_Status.PREPARING;
        case 4:
        case "RUNNING":
            return Test_Status.RUNNING;
        case 5:
        case "FINISHING":
            return Test_Status.FINISHING;
        case 6:
        case "DONE":
            return Test_Status.DONE;
        case 7:
        case "POST_PROCESSING":
            return Test_Status.POST_PROCESSING;
        case 8:
        case "FAILED":
            return Test_Status.FAILED;
        case 9:
        case "STOPPING":
            return Test_Status.STOPPING;
        case 10:
        case "STOPPED":
            return Test_Status.STOPPED;
        case 11:
        case "AUTOSTOPPED":
            return Test_Status.AUTOSTOPPED;
        case 12:
        case "WAITING":
            return Test_Status.WAITING;
        case 13:
        case "DELETING":
            return Test_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Test_Status.UNRECOGNIZED;
    }
}
exports.test_StatusFromJSON = test_StatusFromJSON;
function test_StatusToJSON(object) {
    switch (object) {
        case Test_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Test_Status.CREATED:
            return "CREATED";
        case Test_Status.INITIATED:
            return "INITIATED";
        case Test_Status.PREPARING:
            return "PREPARING";
        case Test_Status.RUNNING:
            return "RUNNING";
        case Test_Status.FINISHING:
            return "FINISHING";
        case Test_Status.DONE:
            return "DONE";
        case Test_Status.POST_PROCESSING:
            return "POST_PROCESSING";
        case Test_Status.FAILED:
            return "FAILED";
        case Test_Status.STOPPING:
            return "STOPPING";
        case Test_Status.STOPPED:
            return "STOPPED";
        case Test_Status.AUTOSTOPPED:
            return "AUTOSTOPPED";
        case Test_Status.WAITING:
            return "WAITING";
        case Test_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.test_StatusToJSON = test_StatusToJSON;
var Test_Generator;
(function (Test_Generator) {
    Test_Generator[Test_Generator["GENERATOR_UNSPECIFIED"] = 0] = "GENERATOR_UNSPECIFIED";
    Test_Generator[Test_Generator["PANDORA"] = 1] = "PANDORA";
    Test_Generator[Test_Generator["PHANTOM"] = 2] = "PHANTOM";
    Test_Generator[Test_Generator["JMETER"] = 3] = "JMETER";
    Test_Generator[Test_Generator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Test_Generator = exports.Test_Generator || (exports.Test_Generator = {}));
function test_GeneratorFromJSON(object) {
    switch (object) {
        case 0:
        case "GENERATOR_UNSPECIFIED":
            return Test_Generator.GENERATOR_UNSPECIFIED;
        case 1:
        case "PANDORA":
            return Test_Generator.PANDORA;
        case 2:
        case "PHANTOM":
            return Test_Generator.PHANTOM;
        case 3:
        case "JMETER":
            return Test_Generator.JMETER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Test_Generator.UNRECOGNIZED;
    }
}
exports.test_GeneratorFromJSON = test_GeneratorFromJSON;
function test_GeneratorToJSON(object) {
    switch (object) {
        case Test_Generator.GENERATOR_UNSPECIFIED:
            return "GENERATOR_UNSPECIFIED";
        case Test_Generator.PANDORA:
            return "PANDORA";
        case Test_Generator.PHANTOM:
            return "PHANTOM";
        case Test_Generator.JMETER:
            return "JMETER";
        default:
            return "UNKNOWN";
    }
}
exports.test_GeneratorToJSON = test_GeneratorToJSON;
const baseTest = {
    $type: "yandex.cloud.loadtesting.agent.v1.Test",
    id: "",
    folderId: "",
    name: "",
    description: "",
    generator: 0,
    agentInstanceId: "",
    targetAddress: "",
    targetPort: 0,
    targetVersion: "",
    config: "",
    cases: "",
    status: 0,
    errors: "",
    favorite: false,
};
exports.Test = {
    $type: "yandex.cloud.loadtesting.agent.v1.Test",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Test_LabelsEntry.encode({
                $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.generator !== 0) {
            writer.uint32(80).int32(message.generator);
        }
        if (message.agentInstanceId !== "") {
            writer.uint32(90).string(message.agentInstanceId);
        }
        if (message.targetAddress !== "") {
            writer.uint32(98).string(message.targetAddress);
        }
        if (message.targetPort !== 0) {
            writer.uint32(104).int64(message.targetPort);
        }
        if (message.targetVersion !== "") {
            writer.uint32(114).string(message.targetVersion);
        }
        if (message.config !== "") {
            writer.uint32(122).string(message.config);
        }
        if (message.ammoUrls !== undefined) {
            writer.uint32(130).string(message.ammoUrls);
        }
        if (message.ammoId !== undefined) {
            writer.uint32(138).string(message.ammoId);
        }
        for (const v of message.cases) {
            writer.uint32(146).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(152).int32(message.status);
        }
        for (const v of message.errors) {
            writer.uint32(162).string(v);
        }
        if (message.favorite === true) {
            writer.uint32(168).bool(message.favorite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTest);
        message.labels = {};
        message.cases = [];
        message.errors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.Test_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.finishedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.generator = reader.int32();
                    break;
                case 11:
                    message.agentInstanceId = reader.string();
                    break;
                case 12:
                    message.targetAddress = reader.string();
                    break;
                case 13:
                    message.targetPort = longToNumber(reader.int64());
                    break;
                case 14:
                    message.targetVersion = reader.string();
                    break;
                case 15:
                    message.config = reader.string();
                    break;
                case 16:
                    message.ammoUrls = reader.string();
                    break;
                case 17:
                    message.ammoId = reader.string();
                    break;
                case 18:
                    message.cases.push(reader.string());
                    break;
                case 19:
                    message.status = reader.int32();
                    break;
                case 20:
                    message.errors.push(reader.string());
                    break;
                case 21:
                    message.favorite = reader.bool();
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
        const message = Object.assign({}, baseTest);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.finishedAt =
            object.finishedAt !== undefined && object.finishedAt !== null
                ? fromJsonTimestamp(object.finishedAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.generator =
            object.generator !== undefined && object.generator !== null
                ? test_GeneratorFromJSON(object.generator)
                : 0;
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        message.targetAddress =
            object.targetAddress !== undefined && object.targetAddress !== null
                ? String(object.targetAddress)
                : "";
        message.targetPort =
            object.targetPort !== undefined && object.targetPort !== null
                ? Number(object.targetPort)
                : 0;
        message.targetVersion =
            object.targetVersion !== undefined && object.targetVersion !== null
                ? String(object.targetVersion)
                : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? String(object.config)
                : "";
        message.ammoUrls =
            object.ammoUrls !== undefined && object.ammoUrls !== null
                ? String(object.ammoUrls)
                : undefined;
        message.ammoId =
            object.ammoId !== undefined && object.ammoId !== null
                ? String(object.ammoId)
                : undefined;
        message.cases = ((_b = object.cases) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? test_StatusFromJSON(object.status)
                : 0;
        message.errors = ((_c = object.errors) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.favorite =
            object.favorite !== undefined && object.favorite !== null
                ? Boolean(object.favorite)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined &&
            (obj.finishedAt = message.finishedAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.generator !== undefined &&
            (obj.generator = test_GeneratorToJSON(message.generator));
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        message.targetAddress !== undefined &&
            (obj.targetAddress = message.targetAddress);
        message.targetPort !== undefined &&
            (obj.targetPort = Math.round(message.targetPort));
        message.targetVersion !== undefined &&
            (obj.targetVersion = message.targetVersion);
        message.config !== undefined && (obj.config = message.config);
        message.ammoUrls !== undefined && (obj.ammoUrls = message.ammoUrls);
        message.ammoId !== undefined && (obj.ammoId = message.ammoId);
        if (message.cases) {
            obj.cases = message.cases.map((e) => e);
        }
        else {
            obj.cases = [];
        }
        message.status !== undefined &&
            (obj.status = test_StatusToJSON(message.status));
        if (message.errors) {
            obj.errors = message.errors.map((e) => e);
        }
        else {
            obj.errors = [];
        }
        message.favorite !== undefined && (obj.favorite = message.favorite);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = Object.assign({}, baseTest);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.startedAt = (_g = object.startedAt) !== null && _g !== void 0 ? _g : undefined;
        message.finishedAt = (_h = object.finishedAt) !== null && _h !== void 0 ? _h : undefined;
        message.updatedAt = (_j = object.updatedAt) !== null && _j !== void 0 ? _j : undefined;
        message.generator = (_k = object.generator) !== null && _k !== void 0 ? _k : 0;
        message.agentInstanceId = (_l = object.agentInstanceId) !== null && _l !== void 0 ? _l : "";
        message.targetAddress = (_m = object.targetAddress) !== null && _m !== void 0 ? _m : "";
        message.targetPort = (_o = object.targetPort) !== null && _o !== void 0 ? _o : 0;
        message.targetVersion = (_p = object.targetVersion) !== null && _p !== void 0 ? _p : "";
        message.config = (_q = object.config) !== null && _q !== void 0 ? _q : "";
        message.ammoUrls = (_r = object.ammoUrls) !== null && _r !== void 0 ? _r : undefined;
        message.ammoId = (_s = object.ammoId) !== null && _s !== void 0 ? _s : undefined;
        message.cases = ((_t = object.cases) === null || _t === void 0 ? void 0 : _t.map((e) => e)) || [];
        message.status = (_u = object.status) !== null && _u !== void 0 ? _u : 0;
        message.errors = ((_v = object.errors) === null || _v === void 0 ? void 0 : _v.map((e) => e)) || [];
        message.favorite = (_w = object.favorite) !== null && _w !== void 0 ? _w : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Test.$type, exports.Test);
const baseTest_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry",
    key: "",
    value: "",
};
exports.Test_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Test_LabelsEntry.$type, exports.Test_LabelsEntry);
const baseLoadSchedule = {
    $type: "yandex.cloud.loadtesting.agent.v1.LoadSchedule",
    type: 0,
    instances: 0,
    duration: "",
    rpsFrom: 0,
    rpsTo: 0,
    step: 0,
    ops: 0,
    stpdPath: "",
};
exports.LoadSchedule = {
    $type: "yandex.cloud.loadtesting.agent.v1.LoadSchedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.instances !== 0) {
            writer.uint32(16).int64(message.instances);
        }
        if (message.duration !== "") {
            writer.uint32(26).string(message.duration);
        }
        if (message.rpsFrom !== 0) {
            writer.uint32(32).int64(message.rpsFrom);
        }
        if (message.rpsTo !== 0) {
            writer.uint32(40).int64(message.rpsTo);
        }
        if (message.step !== 0) {
            writer.uint32(48).int64(message.step);
        }
        if (message.ops !== 0) {
            writer.uint32(56).int64(message.ops);
        }
        if (message.stpdPath !== "") {
            writer.uint32(66).string(message.stpdPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadSchedule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.instances = longToNumber(reader.int64());
                    break;
                case 3:
                    message.duration = reader.string();
                    break;
                case 4:
                    message.rpsFrom = longToNumber(reader.int64());
                    break;
                case 5:
                    message.rpsTo = longToNumber(reader.int64());
                    break;
                case 6:
                    message.step = longToNumber(reader.int64());
                    break;
                case 7:
                    message.ops = longToNumber(reader.int64());
                    break;
                case 8:
                    message.stpdPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoadSchedule);
        message.type =
            object.type !== undefined && object.type !== null
                ? scheduleTypeFromJSON(object.type)
                : 0;
        message.instances =
            object.instances !== undefined && object.instances !== null
                ? Number(object.instances)
                : 0;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? String(object.duration)
                : "";
        message.rpsFrom =
            object.rpsFrom !== undefined && object.rpsFrom !== null
                ? Number(object.rpsFrom)
                : 0;
        message.rpsTo =
            object.rpsTo !== undefined && object.rpsTo !== null
                ? Number(object.rpsTo)
                : 0;
        message.step =
            object.step !== undefined && object.step !== null
                ? Number(object.step)
                : 0;
        message.ops =
            object.ops !== undefined && object.ops !== null ? Number(object.ops) : 0;
        message.stpdPath =
            object.stpdPath !== undefined && object.stpdPath !== null
                ? String(object.stpdPath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = scheduleTypeToJSON(message.type));
        message.instances !== undefined &&
            (obj.instances = Math.round(message.instances));
        message.duration !== undefined && (obj.duration = message.duration);
        message.rpsFrom !== undefined &&
            (obj.rpsFrom = Math.round(message.rpsFrom));
        message.rpsTo !== undefined && (obj.rpsTo = Math.round(message.rpsTo));
        message.step !== undefined && (obj.step = Math.round(message.step));
        message.ops !== undefined && (obj.ops = Math.round(message.ops));
        message.stpdPath !== undefined && (obj.stpdPath = message.stpdPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseLoadSchedule);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.instances = (_b = object.instances) !== null && _b !== void 0 ? _b : 0;
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : "";
        message.rpsFrom = (_d = object.rpsFrom) !== null && _d !== void 0 ? _d : 0;
        message.rpsTo = (_e = object.rpsTo) !== null && _e !== void 0 ? _e : 0;
        message.step = (_f = object.step) !== null && _f !== void 0 ? _f : 0;
        message.ops = (_g = object.ops) !== null && _g !== void 0 ? _g : 0;
        message.stpdPath = (_h = object.stpdPath) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadSchedule.$type, exports.LoadSchedule);
const baseSchedule = {
    $type: "yandex.cloud.loadtesting.agent.v1.Schedule",
    loadType: 0,
    loadProfile: "",
};
exports.Schedule = {
    $type: "yandex.cloud.loadtesting.agent.v1.Schedule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadType !== 0) {
            writer.uint32(8).int32(message.loadType);
        }
        for (const v of message.loadSchedule) {
            exports.LoadSchedule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.loadProfile) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSchedule);
        message.loadSchedule = [];
        message.loadProfile = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadType = reader.int32();
                    break;
                case 2:
                    message.loadSchedule.push(exports.LoadSchedule.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.loadProfile.push(reader.string());
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
        const message = Object.assign({}, baseSchedule);
        message.loadType =
            object.loadType !== undefined && object.loadType !== null
                ? loadTypeFromJSON(object.loadType)
                : 0;
        message.loadSchedule = ((_a = object.loadSchedule) !== null && _a !== void 0 ? _a : []).map((e) => exports.LoadSchedule.fromJSON(e));
        message.loadProfile = ((_b = object.loadProfile) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadType !== undefined &&
            (obj.loadType = loadTypeToJSON(message.loadType));
        if (message.loadSchedule) {
            obj.loadSchedule = message.loadSchedule.map((e) => e ? exports.LoadSchedule.toJSON(e) : undefined);
        }
        else {
            obj.loadSchedule = [];
        }
        if (message.loadProfile) {
            obj.loadProfile = message.loadProfile.map((e) => e);
        }
        else {
            obj.loadProfile = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSchedule);
        message.loadType = (_a = object.loadType) !== null && _a !== void 0 ? _a : 0;
        message.loadSchedule =
            ((_b = object.loadSchedule) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LoadSchedule.fromPartial(e))) || [];
        message.loadProfile = ((_c = object.loadProfile) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Schedule.$type, exports.Schedule);
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
