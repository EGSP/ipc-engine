"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicServiceClient = exports.TopicServiceService = exports.DeleteTopicMetadata = exports.DeleteTopicRequest = exports.UpdateTopicMetadata = exports.UpdateTopicRequest = exports.CreateTopicMetadata = exports.CreateTopicRequest = exports.ListTopicsResponse = exports.ListTopicsRequest = exports.GetTopicRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const topic_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/topic");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
const baseGetTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest",
    clusterId: "",
    topicName: "",
};
exports.GetTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTopicRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTopicRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetTopicRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTopicRequest.$type, exports.GetTopicRequest);
const baseListTopicsRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListTopicsRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTopicsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListTopicsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListTopicsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTopicsRequest.$type, exports.ListTopicsRequest);
const baseListTopicsResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse",
    nextPageToken: "",
};
exports.ListTopicsResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.topics) {
            topic_1.Topic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListTopicsResponse);
        message.topics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics.push(topic_1.Topic.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListTopicsResponse);
        message.topics = ((_a = object.topics) !== null && _a !== void 0 ? _a : []).map((e) => topic_1.Topic.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.topics) {
            obj.topics = message.topics.map((e) => (e ? topic_1.Topic.toJSON(e) : undefined));
        }
        else {
            obj.topics = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListTopicsResponse);
        message.topics = ((_a = object.topics) === null || _a === void 0 ? void 0 : _a.map((e) => topic_1.Topic.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListTopicsResponse.$type, exports.ListTopicsResponse);
const baseCreateTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest",
    clusterId: "",
};
exports.CreateTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicSpec !== undefined) {
            topic_1.TopicSpec.encode(message.topicSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTopicRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicSpec = topic_1.TopicSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTopicRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicSpec =
            object.topicSpec !== undefined && object.topicSpec !== null
                ? topic_1.TopicSpec.fromJSON(object.topicSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? topic_1.TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateTopicRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicSpec =
            object.topicSpec !== undefined && object.topicSpec !== null
                ? topic_1.TopicSpec.fromPartial(object.topicSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTopicRequest.$type, exports.CreateTopicRequest);
const baseCreateTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata",
    clusterId: "",
    topicName: "",
};
exports.CreateTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTopicMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTopicMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateTopicMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTopicMetadata.$type, exports.CreateTopicMetadata);
const baseUpdateTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest",
    clusterId: "",
    topicName: "",
};
exports.UpdateTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.topicSpec !== undefined) {
            topic_1.TopicSpec.encode(message.topicSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTopicRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.topicSpec = topic_1.TopicSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTopicRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.topicSpec =
            object.topicSpec !== undefined && object.topicSpec !== null
                ? topic_1.TopicSpec.fromJSON(object.topicSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? topic_1.TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateTopicRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.topicSpec =
            object.topicSpec !== undefined && object.topicSpec !== null
                ? topic_1.TopicSpec.fromPartial(object.topicSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTopicRequest.$type, exports.UpdateTopicRequest);
const baseUpdateTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata",
    clusterId: "",
    topicName: "",
};
exports.UpdateTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTopicMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTopicMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateTopicMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTopicMetadata.$type, exports.UpdateTopicMetadata);
const baseDeleteTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest",
    clusterId: "",
    topicName: "",
};
exports.DeleteTopicRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTopicRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTopicRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteTopicRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTopicRequest.$type, exports.DeleteTopicRequest);
const baseDeleteTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata",
    clusterId: "",
    topicName: "",
};
exports.DeleteTopicMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== "") {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteTopicMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteTopicMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteTopicMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteTopicMetadata.$type, exports.DeleteTopicMetadata);
/** A set of methods for managing Kafka topics. */
exports.TopicServiceService = {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.kafka.v1.TopicService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(topic_1.Topic.encode(value).finish()),
        responseDeserialize: (value) => topic_1.Topic.decode(value),
    },
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list: {
        path: "/yandex.cloud.mdb.kafka.v1.TopicService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTopicsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTopicsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTopicsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTopicsResponse.decode(value),
    },
    /** Creates a new Kafka topic in the specified cluster. */
    create: {
        path: "/yandex.cloud.mdb.kafka.v1.TopicService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Kafka topic. */
    update: {
        path: "/yandex.cloud.mdb.kafka.v1.TopicService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Kafka topic. */
    delete: {
        path: "/yandex.cloud.mdb.kafka.v1.TopicService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.TopicServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TopicServiceService, "yandex.cloud.mdb.kafka.v1.TopicService");
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
