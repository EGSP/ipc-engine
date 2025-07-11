"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLServerConfigSet2017ent = exports.SQLServerConfig2017ent = exports.SQLServerConfigSet2017std = exports.SQLServerConfig2017std = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";
const baseSQLServerConfig2017std = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std",
};
exports.SQLServerConfig2017std = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017std",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxDegreeOfParallelism !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxDegreeOfParallelism,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.costThresholdForParallelism,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.auditLevel !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.auditLevel }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fillFactorPercent,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.optimizeForAdHocWorkloads,
            }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSQLServerConfig2017std);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.auditLevel = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fillFactorPercent = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSQLServerConfig2017std);
        message.maxDegreeOfParallelism =
            object.maxDegreeOfParallelism !== undefined &&
                object.maxDegreeOfParallelism !== null
                ? Number(object.maxDegreeOfParallelism)
                : undefined;
        message.costThresholdForParallelism =
            object.costThresholdForParallelism !== undefined &&
                object.costThresholdForParallelism !== null
                ? Number(object.costThresholdForParallelism)
                : undefined;
        message.auditLevel =
            object.auditLevel !== undefined && object.auditLevel !== null
                ? Number(object.auditLevel)
                : undefined;
        message.fillFactorPercent =
            object.fillFactorPercent !== undefined &&
                object.fillFactorPercent !== null
                ? Number(object.fillFactorPercent)
                : undefined;
        message.optimizeForAdHocWorkloads =
            object.optimizeForAdHocWorkloads !== undefined &&
                object.optimizeForAdHocWorkloads !== null
                ? Boolean(object.optimizeForAdHocWorkloads)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxDegreeOfParallelism !== undefined &&
            (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
        message.costThresholdForParallelism !== undefined &&
            (obj.costThresholdForParallelism = message.costThresholdForParallelism);
        message.auditLevel !== undefined && (obj.auditLevel = message.auditLevel);
        message.fillFactorPercent !== undefined &&
            (obj.fillFactorPercent = message.fillFactorPercent);
        message.optimizeForAdHocWorkloads !== undefined &&
            (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseSQLServerConfig2017std);
        message.maxDegreeOfParallelism = (_a = object.maxDegreeOfParallelism) !== null && _a !== void 0 ? _a : undefined;
        message.costThresholdForParallelism =
            (_b = object.costThresholdForParallelism) !== null && _b !== void 0 ? _b : undefined;
        message.auditLevel = (_c = object.auditLevel) !== null && _c !== void 0 ? _c : undefined;
        message.fillFactorPercent = (_d = object.fillFactorPercent) !== null && _d !== void 0 ? _d : undefined;
        message.optimizeForAdHocWorkloads =
            (_e = object.optimizeForAdHocWorkloads) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SQLServerConfig2017std.$type, exports.SQLServerConfig2017std);
const baseSQLServerConfigSet2017std = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std",
};
exports.SQLServerConfigSet2017std = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017std",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.SQLServerConfig2017std.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.SQLServerConfig2017std.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.SQLServerConfig2017std.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSQLServerConfigSet2017std);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.SQLServerConfig2017std.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.SQLServerConfig2017std.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.SQLServerConfig2017std.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSQLServerConfigSet2017std);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.SQLServerConfig2017std.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.SQLServerConfig2017std.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.SQLServerConfig2017std.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.SQLServerConfig2017std.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.SQLServerConfig2017std.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.SQLServerConfig2017std.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSQLServerConfigSet2017std);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.SQLServerConfig2017std.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.SQLServerConfig2017std.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.SQLServerConfig2017std.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SQLServerConfigSet2017std.$type, exports.SQLServerConfigSet2017std);
const baseSQLServerConfig2017ent = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent",
};
exports.SQLServerConfig2017ent = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfig2017ent",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxDegreeOfParallelism !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxDegreeOfParallelism,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.costThresholdForParallelism,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.auditLevel !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.auditLevel }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fillFactorPercent,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.optimizeForAdHocWorkloads,
            }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSQLServerConfig2017ent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.auditLevel = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fillFactorPercent = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSQLServerConfig2017ent);
        message.maxDegreeOfParallelism =
            object.maxDegreeOfParallelism !== undefined &&
                object.maxDegreeOfParallelism !== null
                ? Number(object.maxDegreeOfParallelism)
                : undefined;
        message.costThresholdForParallelism =
            object.costThresholdForParallelism !== undefined &&
                object.costThresholdForParallelism !== null
                ? Number(object.costThresholdForParallelism)
                : undefined;
        message.auditLevel =
            object.auditLevel !== undefined && object.auditLevel !== null
                ? Number(object.auditLevel)
                : undefined;
        message.fillFactorPercent =
            object.fillFactorPercent !== undefined &&
                object.fillFactorPercent !== null
                ? Number(object.fillFactorPercent)
                : undefined;
        message.optimizeForAdHocWorkloads =
            object.optimizeForAdHocWorkloads !== undefined &&
                object.optimizeForAdHocWorkloads !== null
                ? Boolean(object.optimizeForAdHocWorkloads)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxDegreeOfParallelism !== undefined &&
            (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
        message.costThresholdForParallelism !== undefined &&
            (obj.costThresholdForParallelism = message.costThresholdForParallelism);
        message.auditLevel !== undefined && (obj.auditLevel = message.auditLevel);
        message.fillFactorPercent !== undefined &&
            (obj.fillFactorPercent = message.fillFactorPercent);
        message.optimizeForAdHocWorkloads !== undefined &&
            (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseSQLServerConfig2017ent);
        message.maxDegreeOfParallelism = (_a = object.maxDegreeOfParallelism) !== null && _a !== void 0 ? _a : undefined;
        message.costThresholdForParallelism =
            (_b = object.costThresholdForParallelism) !== null && _b !== void 0 ? _b : undefined;
        message.auditLevel = (_c = object.auditLevel) !== null && _c !== void 0 ? _c : undefined;
        message.fillFactorPercent = (_d = object.fillFactorPercent) !== null && _d !== void 0 ? _d : undefined;
        message.optimizeForAdHocWorkloads =
            (_e = object.optimizeForAdHocWorkloads) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SQLServerConfig2017ent.$type, exports.SQLServerConfig2017ent);
const baseSQLServerConfigSet2017ent = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent",
};
exports.SQLServerConfigSet2017ent = {
    $type: "yandex.cloud.mdb.sqlserver.v1.config.SQLServerConfigSet2017ent",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.SQLServerConfig2017ent.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.SQLServerConfig2017ent.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.SQLServerConfig2017ent.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSQLServerConfigSet2017ent);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.SQLServerConfig2017ent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.SQLServerConfig2017ent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.SQLServerConfig2017ent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSQLServerConfigSet2017ent);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.SQLServerConfig2017ent.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.SQLServerConfig2017ent.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.SQLServerConfig2017ent.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.SQLServerConfig2017ent.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.SQLServerConfig2017ent.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.SQLServerConfig2017ent.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSQLServerConfigSet2017ent);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.SQLServerConfig2017ent.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.SQLServerConfig2017ent.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.SQLServerConfig2017ent.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SQLServerConfigSet2017ent.$type, exports.SQLServerConfigSet2017ent);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
