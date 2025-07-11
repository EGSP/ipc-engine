"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledRule = exports.PushRule = exports.ScanRules = exports.ScanPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseScanPolicy = {
    $type: "yandex.cloud.containerregistry.v1.ScanPolicy",
    id: "",
    registryId: "",
    name: "",
    description: "",
    disabled: false,
};
exports.ScanPolicy = {
    $type: "yandex.cloud.containerregistry.v1.ScanPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.registryId !== "") {
            writer.uint32(18).string(message.registryId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.rules !== undefined) {
            exports.ScanRules.encode(message.rules, writer.uint32(42).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.disabled === true) {
            writer.uint32(56).bool(message.disabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScanPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.registryId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.rules = exports.ScanRules.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.disabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScanPolicy);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? exports.ScanRules.fromJSON(object.rules)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.rules !== undefined &&
            (obj.rules = message.rules ? exports.ScanRules.toJSON(message.rules) : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseScanPolicy);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.registryId = (_b = object.registryId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.rules =
            object.rules !== undefined && object.rules !== null
                ? exports.ScanRules.fromPartial(object.rules)
                : undefined;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.disabled = (_f = object.disabled) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanPolicy.$type, exports.ScanPolicy);
const baseScanRules = {
    $type: "yandex.cloud.containerregistry.v1.ScanRules",
};
exports.ScanRules = {
    $type: "yandex.cloud.containerregistry.v1.ScanRules",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pushRule !== undefined) {
            exports.PushRule.encode(message.pushRule, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.scheduleRules) {
            exports.ScheduledRule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScanRules);
        message.scheduleRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pushRule = exports.PushRule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.scheduleRules.push(exports.ScheduledRule.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseScanRules);
        message.pushRule =
            object.pushRule !== undefined && object.pushRule !== null
                ? exports.PushRule.fromJSON(object.pushRule)
                : undefined;
        message.scheduleRules = ((_a = object.scheduleRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.ScheduledRule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pushRule !== undefined &&
            (obj.pushRule = message.pushRule
                ? exports.PushRule.toJSON(message.pushRule)
                : undefined);
        if (message.scheduleRules) {
            obj.scheduleRules = message.scheduleRules.map((e) => e ? exports.ScheduledRule.toJSON(e) : undefined);
        }
        else {
            obj.scheduleRules = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScanRules);
        message.pushRule =
            object.pushRule !== undefined && object.pushRule !== null
                ? exports.PushRule.fromPartial(object.pushRule)
                : undefined;
        message.scheduleRules =
            ((_a = object.scheduleRules) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ScheduledRule.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanRules.$type, exports.ScanRules);
const basePushRule = {
    $type: "yandex.cloud.containerregistry.v1.PushRule",
    repositoryPrefixes: "",
    disabled: false,
};
exports.PushRule = {
    $type: "yandex.cloud.containerregistry.v1.PushRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.repositoryPrefixes) {
            writer.uint32(10).string(v);
        }
        if (message.disabled === true) {
            writer.uint32(16).bool(message.disabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePushRule);
        message.repositoryPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryPrefixes.push(reader.string());
                    break;
                case 2:
                    message.disabled = reader.bool();
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
        const message = Object.assign({}, basePushRule);
        message.repositoryPrefixes = ((_a = object.repositoryPrefixes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.repositoryPrefixes) {
            obj.repositoryPrefixes = message.repositoryPrefixes.map((e) => e);
        }
        else {
            obj.repositoryPrefixes = [];
        }
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePushRule);
        message.repositoryPrefixes = ((_a = object.repositoryPrefixes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.disabled = (_b = object.disabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PushRule.$type, exports.PushRule);
const baseScheduledRule = {
    $type: "yandex.cloud.containerregistry.v1.ScheduledRule",
    repositoryPrefixes: "",
    disabled: false,
};
exports.ScheduledRule = {
    $type: "yandex.cloud.containerregistry.v1.ScheduledRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.repositoryPrefixes) {
            writer.uint32(10).string(v);
        }
        if (message.rescanPeriod !== undefined) {
            duration_1.Duration.encode(message.rescanPeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.disabled === true) {
            writer.uint32(24).bool(message.disabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScheduledRule);
        message.repositoryPrefixes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryPrefixes.push(reader.string());
                    break;
                case 2:
                    message.rescanPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.disabled = reader.bool();
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
        const message = Object.assign({}, baseScheduledRule);
        message.repositoryPrefixes = ((_a = object.repositoryPrefixes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.rescanPeriod =
            object.rescanPeriod !== undefined && object.rescanPeriod !== null
                ? duration_1.Duration.fromJSON(object.rescanPeriod)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.repositoryPrefixes) {
            obj.repositoryPrefixes = message.repositoryPrefixes.map((e) => e);
        }
        else {
            obj.repositoryPrefixes = [];
        }
        message.rescanPeriod !== undefined &&
            (obj.rescanPeriod = message.rescanPeriod
                ? duration_1.Duration.toJSON(message.rescanPeriod)
                : undefined);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseScheduledRule);
        message.repositoryPrefixes = ((_a = object.repositoryPrefixes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.rescanPeriod =
            object.rescanPeriod !== undefined && object.rescanPeriod !== null
                ? duration_1.Duration.fromPartial(object.rescanPeriod)
                : undefined;
        message.disabled = (_b = object.disabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScheduledRule.$type, exports.ScheduledRule);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
