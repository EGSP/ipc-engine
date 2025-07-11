"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redisconfigset50 = exports.Redisconfig50_ClientOutputBufferLimit = exports.Redisconfig50 = exports.redisconfig50_MaxmemoryPolicyToJSON = exports.redisconfig50_MaxmemoryPolicyFromJSON = exports.Redisconfig50_MaxmemoryPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.redis.v1.config";
var Redisconfig50_MaxmemoryPolicy;
(function (Redisconfig50_MaxmemoryPolicy) {
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["MAXMEMORY_POLICY_UNSPECIFIED"] = 0] = "MAXMEMORY_POLICY_UNSPECIFIED";
    /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["VOLATILE_LRU"] = 1] = "VOLATILE_LRU";
    /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["ALLKEYS_LRU"] = 2] = "ALLKEYS_LRU";
    /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["VOLATILE_LFU"] = 3] = "VOLATILE_LFU";
    /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["ALLKEYS_LFU"] = 4] = "ALLKEYS_LFU";
    /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["VOLATILE_RANDOM"] = 5] = "VOLATILE_RANDOM";
    /** ALLKEYS_RANDOM - Remove keys randomly. */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["ALLKEYS_RANDOM"] = 6] = "ALLKEYS_RANDOM";
    /**
     * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
     * and shorter TTL first.
     */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["VOLATILE_TTL"] = 7] = "VOLATILE_TTL";
    /**
     * NOEVICTION - Return errors when memory limit was reached and commands could require
     * more memory to be used.
     */
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["NOEVICTION"] = 8] = "NOEVICTION";
    Redisconfig50_MaxmemoryPolicy[Redisconfig50_MaxmemoryPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Redisconfig50_MaxmemoryPolicy = exports.Redisconfig50_MaxmemoryPolicy || (exports.Redisconfig50_MaxmemoryPolicy = {}));
function redisconfig50_MaxmemoryPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "MAXMEMORY_POLICY_UNSPECIFIED":
            return Redisconfig50_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED;
        case 1:
        case "VOLATILE_LRU":
            return Redisconfig50_MaxmemoryPolicy.VOLATILE_LRU;
        case 2:
        case "ALLKEYS_LRU":
            return Redisconfig50_MaxmemoryPolicy.ALLKEYS_LRU;
        case 3:
        case "VOLATILE_LFU":
            return Redisconfig50_MaxmemoryPolicy.VOLATILE_LFU;
        case 4:
        case "ALLKEYS_LFU":
            return Redisconfig50_MaxmemoryPolicy.ALLKEYS_LFU;
        case 5:
        case "VOLATILE_RANDOM":
            return Redisconfig50_MaxmemoryPolicy.VOLATILE_RANDOM;
        case 6:
        case "ALLKEYS_RANDOM":
            return Redisconfig50_MaxmemoryPolicy.ALLKEYS_RANDOM;
        case 7:
        case "VOLATILE_TTL":
            return Redisconfig50_MaxmemoryPolicy.VOLATILE_TTL;
        case 8:
        case "NOEVICTION":
            return Redisconfig50_MaxmemoryPolicy.NOEVICTION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Redisconfig50_MaxmemoryPolicy.UNRECOGNIZED;
    }
}
exports.redisconfig50_MaxmemoryPolicyFromJSON = redisconfig50_MaxmemoryPolicyFromJSON;
function redisconfig50_MaxmemoryPolicyToJSON(object) {
    switch (object) {
        case Redisconfig50_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED:
            return "MAXMEMORY_POLICY_UNSPECIFIED";
        case Redisconfig50_MaxmemoryPolicy.VOLATILE_LRU:
            return "VOLATILE_LRU";
        case Redisconfig50_MaxmemoryPolicy.ALLKEYS_LRU:
            return "ALLKEYS_LRU";
        case Redisconfig50_MaxmemoryPolicy.VOLATILE_LFU:
            return "VOLATILE_LFU";
        case Redisconfig50_MaxmemoryPolicy.ALLKEYS_LFU:
            return "ALLKEYS_LFU";
        case Redisconfig50_MaxmemoryPolicy.VOLATILE_RANDOM:
            return "VOLATILE_RANDOM";
        case Redisconfig50_MaxmemoryPolicy.ALLKEYS_RANDOM:
            return "ALLKEYS_RANDOM";
        case Redisconfig50_MaxmemoryPolicy.VOLATILE_TTL:
            return "VOLATILE_TTL";
        case Redisconfig50_MaxmemoryPolicy.NOEVICTION:
            return "NOEVICTION";
        default:
            return "UNKNOWN";
    }
}
exports.redisconfig50_MaxmemoryPolicyToJSON = redisconfig50_MaxmemoryPolicyToJSON;
const baseRedisconfig50 = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig5_0",
    maxmemoryPolicy: 0,
    password: "",
    notifyKeyspaceEvents: "",
};
exports.Redisconfig50 = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig5_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxmemoryPolicy !== 0) {
            writer.uint32(8).int32(message.maxmemoryPolicy);
        }
        if (message.timeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.timeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        if (message.databases !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.databases }, writer.uint32(34).fork()).ldelim();
        }
        if (message.slowlogLogSlowerThan !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.slowlogLogSlowerThan,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.slowlogMaxLen !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.slowlogMaxLen }, writer.uint32(50).fork()).ldelim();
        }
        if (message.notifyKeyspaceEvents !== "") {
            writer.uint32(58).string(message.notifyKeyspaceEvents);
        }
        if (message.clientOutputBufferLimitPubsub !== undefined) {
            exports.Redisconfig50_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitPubsub, writer.uint32(66).fork()).ldelim();
        }
        if (message.clientOutputBufferLimitNormal !== undefined) {
            exports.Redisconfig50_ClientOutputBufferLimit.encode(message.clientOutputBufferLimitNormal, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRedisconfig50);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxmemoryPolicy = reader.int32();
                    break;
                case 2:
                    message.timeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.databases = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.slowlogLogSlowerThan = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.slowlogMaxLen = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.notifyKeyspaceEvents = reader.string();
                    break;
                case 8:
                    message.clientOutputBufferLimitPubsub =
                        exports.Redisconfig50_ClientOutputBufferLimit.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.clientOutputBufferLimitNormal =
                        exports.Redisconfig50_ClientOutputBufferLimit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRedisconfig50);
        message.maxmemoryPolicy =
            object.maxmemoryPolicy !== undefined && object.maxmemoryPolicy !== null
                ? redisconfig50_MaxmemoryPolicyFromJSON(object.maxmemoryPolicy)
                : 0;
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? Number(object.timeout)
                : undefined;
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.databases =
            object.databases !== undefined && object.databases !== null
                ? Number(object.databases)
                : undefined;
        message.slowlogLogSlowerThan =
            object.slowlogLogSlowerThan !== undefined &&
                object.slowlogLogSlowerThan !== null
                ? Number(object.slowlogLogSlowerThan)
                : undefined;
        message.slowlogMaxLen =
            object.slowlogMaxLen !== undefined && object.slowlogMaxLen !== null
                ? Number(object.slowlogMaxLen)
                : undefined;
        message.notifyKeyspaceEvents =
            object.notifyKeyspaceEvents !== undefined &&
                object.notifyKeyspaceEvents !== null
                ? String(object.notifyKeyspaceEvents)
                : "";
        message.clientOutputBufferLimitPubsub =
            object.clientOutputBufferLimitPubsub !== undefined &&
                object.clientOutputBufferLimitPubsub !== null
                ? exports.Redisconfig50_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitPubsub)
                : undefined;
        message.clientOutputBufferLimitNormal =
            object.clientOutputBufferLimitNormal !== undefined &&
                object.clientOutputBufferLimitNormal !== null
                ? exports.Redisconfig50_ClientOutputBufferLimit.fromJSON(object.clientOutputBufferLimitNormal)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxmemoryPolicy !== undefined &&
            (obj.maxmemoryPolicy = redisconfig50_MaxmemoryPolicyToJSON(message.maxmemoryPolicy));
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.password !== undefined && (obj.password = message.password);
        message.databases !== undefined && (obj.databases = message.databases);
        message.slowlogLogSlowerThan !== undefined &&
            (obj.slowlogLogSlowerThan = message.slowlogLogSlowerThan);
        message.slowlogMaxLen !== undefined &&
            (obj.slowlogMaxLen = message.slowlogMaxLen);
        message.notifyKeyspaceEvents !== undefined &&
            (obj.notifyKeyspaceEvents = message.notifyKeyspaceEvents);
        message.clientOutputBufferLimitPubsub !== undefined &&
            (obj.clientOutputBufferLimitPubsub = message.clientOutputBufferLimitPubsub
                ? exports.Redisconfig50_ClientOutputBufferLimit.toJSON(message.clientOutputBufferLimitPubsub)
                : undefined);
        message.clientOutputBufferLimitNormal !== undefined &&
            (obj.clientOutputBufferLimitNormal = message.clientOutputBufferLimitNormal
                ? exports.Redisconfig50_ClientOutputBufferLimit.toJSON(message.clientOutputBufferLimitNormal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseRedisconfig50);
        message.maxmemoryPolicy = (_a = object.maxmemoryPolicy) !== null && _a !== void 0 ? _a : 0;
        message.timeout = (_b = object.timeout) !== null && _b !== void 0 ? _b : undefined;
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        message.databases = (_d = object.databases) !== null && _d !== void 0 ? _d : undefined;
        message.slowlogLogSlowerThan = (_e = object.slowlogLogSlowerThan) !== null && _e !== void 0 ? _e : undefined;
        message.slowlogMaxLen = (_f = object.slowlogMaxLen) !== null && _f !== void 0 ? _f : undefined;
        message.notifyKeyspaceEvents = (_g = object.notifyKeyspaceEvents) !== null && _g !== void 0 ? _g : "";
        message.clientOutputBufferLimitPubsub =
            object.clientOutputBufferLimitPubsub !== undefined &&
                object.clientOutputBufferLimitPubsub !== null
                ? exports.Redisconfig50_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitPubsub)
                : undefined;
        message.clientOutputBufferLimitNormal =
            object.clientOutputBufferLimitNormal !== undefined &&
                object.clientOutputBufferLimitNormal !== null
                ? exports.Redisconfig50_ClientOutputBufferLimit.fromPartial(object.clientOutputBufferLimitNormal)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Redisconfig50.$type, exports.Redisconfig50);
const baseRedisconfig50_ClientOutputBufferLimit = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig5_0.ClientOutputBufferLimit",
};
exports.Redisconfig50_ClientOutputBufferLimit = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfig5_0.ClientOutputBufferLimit",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hardLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.hardLimit }, writer.uint32(10).fork()).ldelim();
        }
        if (message.softLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.softLimit }, writer.uint32(26).fork()).ldelim();
        }
        if (message.softSeconds !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.softSeconds }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRedisconfig50_ClientOutputBufferLimit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.softLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.softSeconds = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRedisconfig50_ClientOutputBufferLimit);
        message.hardLimit =
            object.hardLimit !== undefined && object.hardLimit !== null
                ? Number(object.hardLimit)
                : undefined;
        message.softLimit =
            object.softLimit !== undefined && object.softLimit !== null
                ? Number(object.softLimit)
                : undefined;
        message.softSeconds =
            object.softSeconds !== undefined && object.softSeconds !== null
                ? Number(object.softSeconds)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hardLimit !== undefined && (obj.hardLimit = message.hardLimit);
        message.softLimit !== undefined && (obj.softLimit = message.softLimit);
        message.softSeconds !== undefined &&
            (obj.softSeconds = message.softSeconds);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRedisconfig50_ClientOutputBufferLimit);
        message.hardLimit = (_a = object.hardLimit) !== null && _a !== void 0 ? _a : undefined;
        message.softLimit = (_b = object.softLimit) !== null && _b !== void 0 ? _b : undefined;
        message.softSeconds = (_c = object.softSeconds) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Redisconfig50_ClientOutputBufferLimit.$type, exports.Redisconfig50_ClientOutputBufferLimit);
const baseRedisconfigset50 = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet5_0",
};
exports.Redisconfigset50 = {
    $type: "yandex.cloud.mdb.redis.v1.config.RedisConfigSet5_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Redisconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Redisconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Redisconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRedisconfigset50);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Redisconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Redisconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Redisconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRedisconfigset50);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Redisconfig50.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Redisconfig50.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Redisconfig50.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Redisconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Redisconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Redisconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRedisconfigset50);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Redisconfig50.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Redisconfig50.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Redisconfig50.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Redisconfigset50.$type, exports.Redisconfigset50);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
