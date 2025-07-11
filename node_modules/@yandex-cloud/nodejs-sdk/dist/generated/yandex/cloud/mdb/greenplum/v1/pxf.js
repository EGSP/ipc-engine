"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PXFConfigSet = exports.PXFConfig = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
const basePXFConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig",
};
exports.PXFConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.connectionTimeout,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.uploadTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.uploadTimeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxThreads !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxThreads }, writer.uint32(26).fork()).ldelim();
        }
        if (message.poolAllowCoreThreadTimeout !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.poolAllowCoreThreadTimeout,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.poolCoreSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolCoreSize }, writer.uint32(42).fork()).ldelim();
        }
        if (message.poolQueueCapacity !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.poolQueueCapacity,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.poolMaxSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.poolMaxSize }, writer.uint32(58).fork()).ldelim();
        }
        if (message.xmx !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xmx }, writer.uint32(66).fork()).ldelim();
        }
        if (message.xms !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.xms }, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePXFConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.uploadTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.poolAllowCoreThreadTimeout = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.poolCoreSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.poolQueueCapacity = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.poolMaxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.xmx = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.xms = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePXFConfig);
        message.connectionTimeout =
            object.connectionTimeout !== undefined &&
                object.connectionTimeout !== null
                ? Number(object.connectionTimeout)
                : undefined;
        message.uploadTimeout =
            object.uploadTimeout !== undefined && object.uploadTimeout !== null
                ? Number(object.uploadTimeout)
                : undefined;
        message.maxThreads =
            object.maxThreads !== undefined && object.maxThreads !== null
                ? Number(object.maxThreads)
                : undefined;
        message.poolAllowCoreThreadTimeout =
            object.poolAllowCoreThreadTimeout !== undefined &&
                object.poolAllowCoreThreadTimeout !== null
                ? Boolean(object.poolAllowCoreThreadTimeout)
                : undefined;
        message.poolCoreSize =
            object.poolCoreSize !== undefined && object.poolCoreSize !== null
                ? Number(object.poolCoreSize)
                : undefined;
        message.poolQueueCapacity =
            object.poolQueueCapacity !== undefined &&
                object.poolQueueCapacity !== null
                ? Number(object.poolQueueCapacity)
                : undefined;
        message.poolMaxSize =
            object.poolMaxSize !== undefined && object.poolMaxSize !== null
                ? Number(object.poolMaxSize)
                : undefined;
        message.xmx =
            object.xmx !== undefined && object.xmx !== null
                ? Number(object.xmx)
                : undefined;
        message.xms =
            object.xms !== undefined && object.xms !== null
                ? Number(object.xms)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionTimeout !== undefined &&
            (obj.connectionTimeout = message.connectionTimeout);
        message.uploadTimeout !== undefined &&
            (obj.uploadTimeout = message.uploadTimeout);
        message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
        message.poolAllowCoreThreadTimeout !== undefined &&
            (obj.poolAllowCoreThreadTimeout = message.poolAllowCoreThreadTimeout);
        message.poolCoreSize !== undefined &&
            (obj.poolCoreSize = message.poolCoreSize);
        message.poolQueueCapacity !== undefined &&
            (obj.poolQueueCapacity = message.poolQueueCapacity);
        message.poolMaxSize !== undefined &&
            (obj.poolMaxSize = message.poolMaxSize);
        message.xmx !== undefined && (obj.xmx = message.xmx);
        message.xms !== undefined && (obj.xms = message.xms);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, basePXFConfig);
        message.connectionTimeout = (_a = object.connectionTimeout) !== null && _a !== void 0 ? _a : undefined;
        message.uploadTimeout = (_b = object.uploadTimeout) !== null && _b !== void 0 ? _b : undefined;
        message.maxThreads = (_c = object.maxThreads) !== null && _c !== void 0 ? _c : undefined;
        message.poolAllowCoreThreadTimeout =
            (_d = object.poolAllowCoreThreadTimeout) !== null && _d !== void 0 ? _d : undefined;
        message.poolCoreSize = (_e = object.poolCoreSize) !== null && _e !== void 0 ? _e : undefined;
        message.poolQueueCapacity = (_f = object.poolQueueCapacity) !== null && _f !== void 0 ? _f : undefined;
        message.poolMaxSize = (_g = object.poolMaxSize) !== null && _g !== void 0 ? _g : undefined;
        message.xmx = (_h = object.xmx) !== null && _h !== void 0 ? _h : undefined;
        message.xms = (_j = object.xms) !== null && _j !== void 0 ? _j : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PXFConfig.$type, exports.PXFConfig);
const basePXFConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet",
};
exports.PXFConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.PXFConfigSet",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.PXFConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.PXFConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.PXFConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePXFConfigSet);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.PXFConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.PXFConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.PXFConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePXFConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.PXFConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.PXFConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.PXFConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.PXFConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.PXFConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.PXFConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePXFConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.PXFConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.PXFConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.PXFConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PXFConfigSet.$type, exports.PXFConfigSet);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
