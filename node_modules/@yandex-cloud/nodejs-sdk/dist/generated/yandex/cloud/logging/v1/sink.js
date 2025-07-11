"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sink_S3 = exports.Sink_Yds = exports.Sink_LabelsEntry = exports.Sink = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseSink = {
    $type: "yandex.cloud.logging.v1.Sink",
    id: "",
    folderId: "",
    cloudId: "",
    name: "",
    description: "",
    serviceAccountId: "",
};
exports.Sink = {
    $type: "yandex.cloud.logging.v1.Sink",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== "") {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Sink_LabelsEntry.encode({
                $type: "yandex.cloud.logging.v1.Sink.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.serviceAccountId !== "") {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.yds !== undefined) {
            exports.Sink_Yds.encode(message.yds, writer.uint32(74).fork()).ldelim();
        }
        if (message.s3 !== undefined) {
            exports.Sink_S3.encode(message.s3, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSink);
        message.labels = {};
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
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = exports.Sink_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.yds = exports.Sink_Yds.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.s3 = exports.Sink_S3.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseSink);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
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
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? exports.Sink_Yds.fromJSON(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? exports.Sink_S3.fromJSON(object.s3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.yds !== undefined &&
            (obj.yds = message.yds ? exports.Sink_Yds.toJSON(message.yds) : undefined);
        message.s3 !== undefined &&
            (obj.s3 = message.s3 ? exports.Sink_S3.toJSON(message.s3) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseSink);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.cloudId = (_c = object.cloudId) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.labels = Object.entries((_g = object.labels) !== null && _g !== void 0 ? _g : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.serviceAccountId = (_h = object.serviceAccountId) !== null && _h !== void 0 ? _h : "";
        message.yds =
            object.yds !== undefined && object.yds !== null
                ? exports.Sink_Yds.fromPartial(object.yds)
                : undefined;
        message.s3 =
            object.s3 !== undefined && object.s3 !== null
                ? exports.Sink_S3.fromPartial(object.s3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Sink.$type, exports.Sink);
const baseSink_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.Sink.LabelsEntry",
    key: "",
    value: "",
};
exports.Sink_LabelsEntry = {
    $type: "yandex.cloud.logging.v1.Sink.LabelsEntry",
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
        const message = Object.assign({}, baseSink_LabelsEntry);
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
        const message = Object.assign({}, baseSink_LabelsEntry);
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
        const message = Object.assign({}, baseSink_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Sink_LabelsEntry.$type, exports.Sink_LabelsEntry);
const baseSink_Yds = {
    $type: "yandex.cloud.logging.v1.Sink.Yds",
    streamName: "",
};
exports.Sink_Yds = {
    $type: "yandex.cloud.logging.v1.Sink.Yds",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.streamName !== "") {
            writer.uint32(10).string(message.streamName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSink_Yds);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseSink_Yds);
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.streamName !== undefined && (obj.streamName = message.streamName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSink_Yds);
        message.streamName = (_a = object.streamName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Sink_Yds.$type, exports.Sink_Yds);
const baseSink_S3 = {
    $type: "yandex.cloud.logging.v1.Sink.S3",
    bucket: "",
    prefix: "",
};
exports.Sink_S3 = {
    $type: "yandex.cloud.logging.v1.Sink.S3",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucket !== "") {
            writer.uint32(10).string(message.bucket);
        }
        if (message.prefix !== "") {
            writer.uint32(18).string(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSink_S3);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                case 2:
                    message.prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSink_S3);
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? String(object.bucket)
                : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSink_S3);
        message.bucket = (_a = object.bucket) !== null && _a !== void 0 ? _a : "";
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Sink_S3.$type, exports.Sink_S3);
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
