"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const status_1 = require("../../../google/rpc/status");
exports.protobufPackage = "yandex.cloud.operation";
const baseOperation = {
    $type: "yandex.cloud.operation.Operation",
    id: "",
    description: "",
    createdBy: "",
    done: false,
};
exports.Operation = {
    $type: "yandex.cloud.operation.Operation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.createdBy !== "") {
            writer.uint32(34).string(message.createdBy);
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.done === true) {
            writer.uint32(48).bool(message.done);
        }
        if (message.metadata !== undefined) {
            any_1.Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
        }
        if (message.error !== undefined) {
            status_1.Status.encode(message.error, writer.uint32(66).fork()).ldelim();
        }
        if (message.response !== undefined) {
            any_1.Any.encode(message.response, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOperation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createdBy = reader.string();
                    break;
                case 5:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.done = reader.bool();
                    break;
                case 7:
                    message.metadata = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.error = status_1.Status.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.response = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOperation);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : "";
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.done =
            object.done !== undefined && object.done !== null
                ? Boolean(object.done)
                : false;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? any_1.Any.fromJSON(object.metadata)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? status_1.Status.fromJSON(object.error)
                : undefined;
        message.response =
            object.response !== undefined && object.response !== null
                ? any_1.Any.fromJSON(object.response)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.done !== undefined && (obj.done = message.done);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? any_1.Any.toJSON(message.metadata)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error ? status_1.Status.toJSON(message.error) : undefined);
        message.response !== undefined &&
            (obj.response = message.response
                ? any_1.Any.toJSON(message.response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseOperation);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.createdBy = (_d = object.createdBy) !== null && _d !== void 0 ? _d : "";
        message.modifiedAt = (_e = object.modifiedAt) !== null && _e !== void 0 ? _e : undefined;
        message.done = (_f = object.done) !== null && _f !== void 0 ? _f : false;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? any_1.Any.fromPartial(object.metadata)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? status_1.Status.fromPartial(object.error)
                : undefined;
        message.response =
            object.response !== undefined && object.response !== null
                ? any_1.Any.fromPartial(object.response)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Operation.$type, exports.Operation);
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
