"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lock = exports.lock_StateToJSON = exports.lock_StateFromJSON = exports.Lock_State = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
var Lock_State;
(function (Lock_State) {
    Lock_State[Lock_State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    Lock_State[Lock_State["UNLOCKED"] = 1] = "UNLOCKED";
    Lock_State[Lock_State["LOCKED"] = 2] = "LOCKED";
    Lock_State[Lock_State["DELETED"] = 3] = "DELETED";
    Lock_State[Lock_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Lock_State = exports.Lock_State || (exports.Lock_State = {}));
function lock_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return Lock_State.STATE_UNSPECIFIED;
        case 1:
        case "UNLOCKED":
            return Lock_State.UNLOCKED;
        case 2:
        case "LOCKED":
            return Lock_State.LOCKED;
        case 3:
        case "DELETED":
            return Lock_State.DELETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Lock_State.UNRECOGNIZED;
    }
}
exports.lock_StateFromJSON = lock_StateFromJSON;
function lock_StateToJSON(object) {
    switch (object) {
        case Lock_State.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case Lock_State.UNLOCKED:
            return "UNLOCKED";
        case Lock_State.LOCKED:
            return "LOCKED";
        case Lock_State.DELETED:
            return "DELETED";
        default:
            return "UNKNOWN";
    }
}
exports.lock_StateToJSON = lock_StateToJSON;
const baseLock = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Lock",
    id: "",
    instanceId: "",
    resourceId: "",
    state: 0,
};
exports.Lock = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Lock",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.instanceId !== "") {
            writer.uint32(18).string(message.instanceId);
        }
        if (message.resourceId !== "") {
            writer.uint32(26).string(message.resourceId);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(64).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.instanceId = reader.string();
                    break;
                case 3:
                    message.resourceId = reader.string();
                    break;
                case 4:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLock);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? fromJsonTimestamp(object.endTime)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.state =
            object.state !== undefined && object.state !== null
                ? lock_StateFromJSON(object.state)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.state !== undefined &&
            (obj.state = lock_StateToJSON(message.state));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseLock);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.instanceId = (_b = object.instanceId) !== null && _b !== void 0 ? _b : "";
        message.resourceId = (_c = object.resourceId) !== null && _c !== void 0 ? _c : "";
        message.startTime = (_d = object.startTime) !== null && _d !== void 0 ? _d : undefined;
        message.endTime = (_e = object.endTime) !== null && _e !== void 0 ? _e : undefined;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : undefined;
        message.state = (_h = object.state) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Lock.$type, exports.Lock);
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
