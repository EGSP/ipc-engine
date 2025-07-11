"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.Destination = exports.LogEntryDefaults = exports.IncomingLogEntry = exports.LogEntry = exports.logLevel_LevelToJSON = exports.logLevel_LevelFromJSON = exports.LogLevel_Level = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const log_resource_1 = require("../../../../yandex/cloud/logging/v1/log_resource");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const struct_1 = require("../../../../google/protobuf/struct");
exports.protobufPackage = "yandex.cloud.logging.v1";
/** Possible log levels for entries. */
var LogLevel_Level;
(function (LogLevel_Level) {
    /**
     * LEVEL_UNSPECIFIED - Default log level.
     *
     * Equivalent to not specifying log level at all.
     */
    LogLevel_Level[LogLevel_Level["LEVEL_UNSPECIFIED"] = 0] = "LEVEL_UNSPECIFIED";
    /**
     * TRACE - Trace log level.
     *
     * Possible use case: verbose logging of some business logic.
     */
    LogLevel_Level[LogLevel_Level["TRACE"] = 1] = "TRACE";
    /**
     * DEBUG - Debug log level.
     *
     * Possible use case: debugging special cases in application logic.
     */
    LogLevel_Level[LogLevel_Level["DEBUG"] = 2] = "DEBUG";
    /**
     * INFO - Info log level.
     *
     * Mostly used for information messages.
     */
    LogLevel_Level[LogLevel_Level["INFO"] = 3] = "INFO";
    /**
     * WARN - Warn log level.
     *
     * May be used to alert about significant events.
     */
    LogLevel_Level[LogLevel_Level["WARN"] = 4] = "WARN";
    /**
     * ERROR - Error log level.
     *
     * May be used to alert about errors in infrastructure, logic, etc.
     */
    LogLevel_Level[LogLevel_Level["ERROR"] = 5] = "ERROR";
    /**
     * FATAL - Fatal log level.
     *
     * May be used to alert about unrecoverable failures and events.
     */
    LogLevel_Level[LogLevel_Level["FATAL"] = 6] = "FATAL";
    LogLevel_Level[LogLevel_Level["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogLevel_Level = exports.LogLevel_Level || (exports.LogLevel_Level = {}));
function logLevel_LevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LEVEL_UNSPECIFIED":
            return LogLevel_Level.LEVEL_UNSPECIFIED;
        case 1:
        case "TRACE":
            return LogLevel_Level.TRACE;
        case 2:
        case "DEBUG":
            return LogLevel_Level.DEBUG;
        case 3:
        case "INFO":
            return LogLevel_Level.INFO;
        case 4:
        case "WARN":
            return LogLevel_Level.WARN;
        case 5:
        case "ERROR":
            return LogLevel_Level.ERROR;
        case 6:
        case "FATAL":
            return LogLevel_Level.FATAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LogLevel_Level.UNRECOGNIZED;
    }
}
exports.logLevel_LevelFromJSON = logLevel_LevelFromJSON;
function logLevel_LevelToJSON(object) {
    switch (object) {
        case LogLevel_Level.LEVEL_UNSPECIFIED:
            return "LEVEL_UNSPECIFIED";
        case LogLevel_Level.TRACE:
            return "TRACE";
        case LogLevel_Level.DEBUG:
            return "DEBUG";
        case LogLevel_Level.INFO:
            return "INFO";
        case LogLevel_Level.WARN:
            return "WARN";
        case LogLevel_Level.ERROR:
            return "ERROR";
        case LogLevel_Level.FATAL:
            return "FATAL";
        default:
            return "UNKNOWN";
    }
}
exports.logLevel_LevelToJSON = logLevel_LevelToJSON;
const baseLogEntry = {
    $type: "yandex.cloud.logging.v1.LogEntry",
    uid: "",
    level: 0,
    message: "",
    streamName: "",
};
exports.LogEntry = {
    $type: "yandex.cloud.logging.v1.LogEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uid !== "") {
            writer.uint32(10).string(message.uid);
        }
        if (message.resource !== undefined) {
            log_resource_1.LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.ingestedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.ingestedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.savedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.savedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(48).int32(message.level);
        }
        if (message.message !== "") {
            writer.uint32(58).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.jsonPayload), writer.uint32(66).fork()).ldelim();
        }
        if (message.streamName !== "") {
            writer.uint32(74).string(message.streamName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.resource = log_resource_1.LogEntryResource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ingestedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.savedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.level = reader.int32();
                    break;
                case 7:
                    message.message = reader.string();
                    break;
                case 8:
                    message.jsonPayload = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.streamName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogEntry);
        message.uid =
            object.uid !== undefined && object.uid !== null ? String(object.uid) : "";
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? log_resource_1.LogEntryResource.fromJSON(object.resource)
                : undefined;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.ingestedAt =
            object.ingestedAt !== undefined && object.ingestedAt !== null
                ? fromJsonTimestamp(object.ingestedAt)
                : undefined;
        message.savedAt =
            object.savedAt !== undefined && object.savedAt !== null
                ? fromJsonTimestamp(object.savedAt)
                : undefined;
        message.level =
            object.level !== undefined && object.level !== null
                ? logLevel_LevelFromJSON(object.level)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        message.jsonPayload =
            typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? log_resource_1.LogEntryResource.toJSON(message.resource)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.ingestedAt !== undefined &&
            (obj.ingestedAt = message.ingestedAt.toISOString());
        message.savedAt !== undefined &&
            (obj.savedAt = message.savedAt.toISOString());
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.message !== undefined && (obj.message = message.message);
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseLogEntry);
        message.uid = (_a = object.uid) !== null && _a !== void 0 ? _a : "";
        message.resource =
            object.resource !== undefined && object.resource !== null
                ? log_resource_1.LogEntryResource.fromPartial(object.resource)
                : undefined;
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        message.ingestedAt = (_c = object.ingestedAt) !== null && _c !== void 0 ? _c : undefined;
        message.savedAt = (_d = object.savedAt) !== null && _d !== void 0 ? _d : undefined;
        message.level = (_e = object.level) !== null && _e !== void 0 ? _e : 0;
        message.message = (_f = object.message) !== null && _f !== void 0 ? _f : "";
        message.jsonPayload = (_g = object.jsonPayload) !== null && _g !== void 0 ? _g : undefined;
        message.streamName = (_h = object.streamName) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogEntry.$type, exports.LogEntry);
const baseIncomingLogEntry = {
    $type: "yandex.cloud.logging.v1.IncomingLogEntry",
    level: 0,
    message: "",
    streamName: "",
};
exports.IncomingLogEntry = {
    $type: "yandex.cloud.logging.v1.IncomingLogEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.jsonPayload), writer.uint32(34).fork()).ldelim();
        }
        if (message.streamName !== "") {
            writer.uint32(42).string(message.streamName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIncomingLogEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.jsonPayload = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.streamName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIncomingLogEntry);
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        message.level =
            object.level !== undefined && object.level !== null
                ? logLevel_LevelFromJSON(object.level)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        message.jsonPayload =
            typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.message !== undefined && (obj.message = message.message);
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseIncomingLogEntry);
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.level = (_b = object.level) !== null && _b !== void 0 ? _b : 0;
        message.message = (_c = object.message) !== null && _c !== void 0 ? _c : "";
        message.jsonPayload = (_d = object.jsonPayload) !== null && _d !== void 0 ? _d : undefined;
        message.streamName = (_e = object.streamName) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IncomingLogEntry.$type, exports.IncomingLogEntry);
const baseLogEntryDefaults = {
    $type: "yandex.cloud.logging.v1.LogEntryDefaults",
    level: 0,
    streamName: "",
};
exports.LogEntryDefaults = {
    $type: "yandex.cloud.logging.v1.LogEntryDefaults",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.jsonPayload), writer.uint32(34).fork()).ldelim();
        }
        if (message.streamName !== "") {
            writer.uint32(42).string(message.streamName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogEntryDefaults);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.jsonPayload = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.streamName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogEntryDefaults);
        message.level =
            object.level !== undefined && object.level !== null
                ? logLevel_LevelFromJSON(object.level)
                : 0;
        message.jsonPayload =
            typeof object.jsonPayload === "object" ? object.jsonPayload : undefined;
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload);
        message.streamName !== undefined && (obj.streamName = message.streamName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLogEntryDefaults);
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : 0;
        message.jsonPayload = (_b = object.jsonPayload) !== null && _b !== void 0 ? _b : undefined;
        message.streamName = (_c = object.streamName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogEntryDefaults.$type, exports.LogEntryDefaults);
const baseDestination = {
    $type: "yandex.cloud.logging.v1.Destination",
};
exports.Destination = {
    $type: "yandex.cloud.logging.v1.Destination",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDestination);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDestination);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDestination);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : undefined;
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Destination.$type, exports.Destination);
const baseLogLevel = {
    $type: "yandex.cloud.logging.v1.LogLevel",
    level: 0,
};
exports.LogLevel = {
    $type: "yandex.cloud.logging.v1.LogLevel",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogLevel);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogLevel);
        message.level =
            object.level !== undefined && object.level !== null
                ? logLevel_LevelFromJSON(object.level)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLogLevel);
        message.level = (_a = object.level) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogLevel.$type, exports.LogLevel);
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
