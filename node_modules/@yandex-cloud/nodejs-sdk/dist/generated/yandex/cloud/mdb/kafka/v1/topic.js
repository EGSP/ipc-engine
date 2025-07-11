"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicConfig3 = exports.Topicconfig28 = exports.Topicconfig26 = exports.Topicconfig21 = exports.TopicSpec = exports.Topic = exports.topicConfig3_CleanupPolicyToJSON = exports.topicConfig3_CleanupPolicyFromJSON = exports.TopicConfig3_CleanupPolicy = exports.topicconfig28_CleanupPolicyToJSON = exports.topicconfig28_CleanupPolicyFromJSON = exports.Topicconfig28_CleanupPolicy = exports.topicconfig26_CleanupPolicyToJSON = exports.topicconfig26_CleanupPolicyFromJSON = exports.Topicconfig26_CleanupPolicy = exports.topicconfig21_CleanupPolicyToJSON = exports.topicconfig21_CleanupPolicyFromJSON = exports.Topicconfig21_CleanupPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/common");
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
var Topicconfig21_CleanupPolicy;
(function (Topicconfig21_CleanupPolicy) {
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig21_CleanupPolicy = exports.Topicconfig21_CleanupPolicy || (exports.Topicconfig21_CleanupPolicy = {}));
function topicconfig21_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "CLEANUP_POLICY_DELETE":
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case "CLEANUP_POLICY_COMPACT":
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case "CLEANUP_POLICY_COMPACT_AND_DELETE":
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Topicconfig21_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig21_CleanupPolicyFromJSON = topicconfig21_CleanupPolicyFromJSON;
function topicconfig21_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return "CLEANUP_POLICY_DELETE";
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return "CLEANUP_POLICY_COMPACT";
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return "CLEANUP_POLICY_COMPACT_AND_DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.topicconfig21_CleanupPolicyToJSON = topicconfig21_CleanupPolicyToJSON;
var Topicconfig26_CleanupPolicy;
(function (Topicconfig26_CleanupPolicy) {
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig26_CleanupPolicy = exports.Topicconfig26_CleanupPolicy || (exports.Topicconfig26_CleanupPolicy = {}));
function topicconfig26_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "CLEANUP_POLICY_DELETE":
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case "CLEANUP_POLICY_COMPACT":
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case "CLEANUP_POLICY_COMPACT_AND_DELETE":
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Topicconfig26_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig26_CleanupPolicyFromJSON = topicconfig26_CleanupPolicyFromJSON;
function topicconfig26_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return "CLEANUP_POLICY_DELETE";
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return "CLEANUP_POLICY_COMPACT";
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return "CLEANUP_POLICY_COMPACT_AND_DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.topicconfig26_CleanupPolicyToJSON = topicconfig26_CleanupPolicyToJSON;
var Topicconfig28_CleanupPolicy;
(function (Topicconfig28_CleanupPolicy) {
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig28_CleanupPolicy = exports.Topicconfig28_CleanupPolicy || (exports.Topicconfig28_CleanupPolicy = {}));
function topicconfig28_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "CLEANUP_POLICY_DELETE":
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case "CLEANUP_POLICY_COMPACT":
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case "CLEANUP_POLICY_COMPACT_AND_DELETE":
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Topicconfig28_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig28_CleanupPolicyFromJSON = topicconfig28_CleanupPolicyFromJSON;
function topicconfig28_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return "CLEANUP_POLICY_DELETE";
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return "CLEANUP_POLICY_COMPACT";
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return "CLEANUP_POLICY_COMPACT_AND_DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.topicconfig28_CleanupPolicyToJSON = topicconfig28_CleanupPolicyToJSON;
var TopicConfig3_CleanupPolicy;
(function (TopicConfig3_CleanupPolicy) {
    TopicConfig3_CleanupPolicy[TopicConfig3_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig3.log_retention_ms] and other similar parameters. */
    TopicConfig3_CleanupPolicy[TopicConfig3_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    TopicConfig3_CleanupPolicy[TopicConfig3_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    TopicConfig3_CleanupPolicy[TopicConfig3_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    TopicConfig3_CleanupPolicy[TopicConfig3_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TopicConfig3_CleanupPolicy = exports.TopicConfig3_CleanupPolicy || (exports.TopicConfig3_CleanupPolicy = {}));
function topicConfig3_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "CLEANUP_POLICY_DELETE":
            return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case "CLEANUP_POLICY_COMPACT":
            return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case "CLEANUP_POLICY_COMPACT_AND_DELETE":
            return TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TopicConfig3_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicConfig3_CleanupPolicyFromJSON = topicConfig3_CleanupPolicyFromJSON;
function topicConfig3_CleanupPolicyToJSON(object) {
    switch (object) {
        case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return "CLEANUP_POLICY_DELETE";
        case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return "CLEANUP_POLICY_COMPACT";
        case TopicConfig3_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return "CLEANUP_POLICY_COMPACT_AND_DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.topicConfig3_CleanupPolicyToJSON = topicConfig3_CleanupPolicyToJSON;
const baseTopic = {
    $type: "yandex.cloud.mdb.kafka.v1.Topic",
    name: "",
    clusterId: "",
};
exports.Topic = {
    $type: "yandex.cloud.mdb.kafka.v1.Topic",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.partitions !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.partitions }, writer.uint32(26).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicationFactor,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            exports.Topicconfig21.encode(message.topicConfig21, writer.uint32(42).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            exports.Topicconfig26.encode(message.topicConfig26, writer.uint32(50).fork()).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            exports.Topicconfig28.encode(message.topicConfig28, writer.uint32(58).fork()).ldelim();
        }
        if (message.topicConfig3 !== undefined) {
            exports.TopicConfig3.encode(message.topicConfig3, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopic);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.partitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.topicConfig21 = exports.Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.topicConfig26 = exports.Topicconfig26.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.topicConfig28 = exports.Topicconfig28.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.topicConfig3 = exports.TopicConfig3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopic);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.partitions =
            object.partitions !== undefined && object.partitions !== null
                ? Number(object.partitions)
                : undefined;
        message.replicationFactor =
            object.replicationFactor !== undefined &&
                object.replicationFactor !== null
                ? Number(object.replicationFactor)
                : undefined;
        message.topicConfig21 =
            object.topicConfig_2_1 !== undefined && object.topicConfig_2_1 !== null
                ? exports.Topicconfig21.fromJSON(object.topicConfig_2_1)
                : undefined;
        message.topicConfig26 =
            object.topicConfig_2_6 !== undefined && object.topicConfig_2_6 !== null
                ? exports.Topicconfig26.fromJSON(object.topicConfig_2_6)
                : undefined;
        message.topicConfig28 =
            object.topicConfig_2_8 !== undefined && object.topicConfig_2_8 !== null
                ? exports.Topicconfig28.fromJSON(object.topicConfig_2_8)
                : undefined;
        message.topicConfig3 =
            object.topicConfig_3 !== undefined && object.topicConfig_3 !== null
                ? exports.TopicConfig3.fromJSON(object.topicConfig_3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.partitions !== undefined && (obj.partitions = message.partitions);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        message.topicConfig21 !== undefined &&
            (obj.topicConfig_2_1 = message.topicConfig21
                ? exports.Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig_2_6 = message.topicConfig26
                ? exports.Topicconfig26.toJSON(message.topicConfig26)
                : undefined);
        message.topicConfig28 !== undefined &&
            (obj.topicConfig_2_8 = message.topicConfig28
                ? exports.Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        message.topicConfig3 !== undefined &&
            (obj.topicConfig_3 = message.topicConfig3
                ? exports.TopicConfig3.toJSON(message.topicConfig3)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseTopic);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.partitions = (_c = object.partitions) !== null && _c !== void 0 ? _c : undefined;
        message.replicationFactor = (_d = object.replicationFactor) !== null && _d !== void 0 ? _d : undefined;
        message.topicConfig21 =
            object.topicConfig21 !== undefined && object.topicConfig21 !== null
                ? exports.Topicconfig21.fromPartial(object.topicConfig21)
                : undefined;
        message.topicConfig26 =
            object.topicConfig26 !== undefined && object.topicConfig26 !== null
                ? exports.Topicconfig26.fromPartial(object.topicConfig26)
                : undefined;
        message.topicConfig28 =
            object.topicConfig28 !== undefined && object.topicConfig28 !== null
                ? exports.Topicconfig28.fromPartial(object.topicConfig28)
                : undefined;
        message.topicConfig3 =
            object.topicConfig3 !== undefined && object.topicConfig3 !== null
                ? exports.TopicConfig3.fromPartial(object.topicConfig3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Topic.$type, exports.Topic);
const baseTopicSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicSpec",
    name: "",
};
exports.TopicSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.partitions !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.partitions }, writer.uint32(18).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicationFactor,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            exports.Topicconfig21.encode(message.topicConfig21, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            exports.Topicconfig26.encode(message.topicConfig26, writer.uint32(42).fork()).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            exports.Topicconfig28.encode(message.topicConfig28, writer.uint32(50).fork()).ldelim();
        }
        if (message.topicConfig3 !== undefined) {
            exports.TopicConfig3.encode(message.topicConfig3, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopicSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.partitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.topicConfig21 = exports.Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.topicConfig26 = exports.Topicconfig26.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.topicConfig28 = exports.Topicconfig28.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.topicConfig3 = exports.TopicConfig3.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopicSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.partitions =
            object.partitions !== undefined && object.partitions !== null
                ? Number(object.partitions)
                : undefined;
        message.replicationFactor =
            object.replicationFactor !== undefined &&
                object.replicationFactor !== null
                ? Number(object.replicationFactor)
                : undefined;
        message.topicConfig21 =
            object.topicConfig_2_1 !== undefined && object.topicConfig_2_1 !== null
                ? exports.Topicconfig21.fromJSON(object.topicConfig_2_1)
                : undefined;
        message.topicConfig26 =
            object.topicConfig_2_6 !== undefined && object.topicConfig_2_6 !== null
                ? exports.Topicconfig26.fromJSON(object.topicConfig_2_6)
                : undefined;
        message.topicConfig28 =
            object.topicConfig_2_8 !== undefined && object.topicConfig_2_8 !== null
                ? exports.Topicconfig28.fromJSON(object.topicConfig_2_8)
                : undefined;
        message.topicConfig3 =
            object.topicConfig_3 !== undefined && object.topicConfig_3 !== null
                ? exports.TopicConfig3.fromJSON(object.topicConfig_3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.partitions !== undefined && (obj.partitions = message.partitions);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        message.topicConfig21 !== undefined &&
            (obj.topicConfig_2_1 = message.topicConfig21
                ? exports.Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig_2_6 = message.topicConfig26
                ? exports.Topicconfig26.toJSON(message.topicConfig26)
                : undefined);
        message.topicConfig28 !== undefined &&
            (obj.topicConfig_2_8 = message.topicConfig28
                ? exports.Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        message.topicConfig3 !== undefined &&
            (obj.topicConfig_3 = message.topicConfig3
                ? exports.TopicConfig3.toJSON(message.topicConfig3)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTopicSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.partitions = (_b = object.partitions) !== null && _b !== void 0 ? _b : undefined;
        message.replicationFactor = (_c = object.replicationFactor) !== null && _c !== void 0 ? _c : undefined;
        message.topicConfig21 =
            object.topicConfig21 !== undefined && object.topicConfig21 !== null
                ? exports.Topicconfig21.fromPartial(object.topicConfig21)
                : undefined;
        message.topicConfig26 =
            object.topicConfig26 !== undefined && object.topicConfig26 !== null
                ? exports.Topicconfig26.fromPartial(object.topicConfig26)
                : undefined;
        message.topicConfig28 =
            object.topicConfig28 !== undefined && object.topicConfig28 !== null
                ? exports.Topicconfig28.fromPartial(object.topicConfig28)
                : undefined;
        message.topicConfig3 =
            object.topicConfig3 !== undefined && object.topicConfig3 !== null
                ? exports.TopicConfig3.fromPartial(object.topicConfig3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TopicSpec.$type, exports.TopicSpec);
const baseTopicconfig21 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_1",
    cleanupPolicy: 0,
    compressionType: 0,
};
exports.Topicconfig21 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_1",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deleteRetentionMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fileDeleteDelayMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCompactionLagMs,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxMessageBytes,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsyncReplicas,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopicconfig21);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopicconfig21);
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? topicconfig21_CleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.deleteRetentionMs =
            object.deleteRetentionMs !== undefined &&
                object.deleteRetentionMs !== null
                ? Number(object.deleteRetentionMs)
                : undefined;
        message.fileDeleteDelayMs =
            object.fileDeleteDelayMs !== undefined &&
                object.fileDeleteDelayMs !== null
                ? Number(object.fileDeleteDelayMs)
                : undefined;
        message.flushMessages =
            object.flushMessages !== undefined && object.flushMessages !== null
                ? Number(object.flushMessages)
                : undefined;
        message.flushMs =
            object.flushMs !== undefined && object.flushMs !== null
                ? Number(object.flushMs)
                : undefined;
        message.minCompactionLagMs =
            object.minCompactionLagMs !== undefined &&
                object.minCompactionLagMs !== null
                ? Number(object.minCompactionLagMs)
                : undefined;
        message.retentionBytes =
            object.retentionBytes !== undefined && object.retentionBytes !== null
                ? Number(object.retentionBytes)
                : undefined;
        message.retentionMs =
            object.retentionMs !== undefined && object.retentionMs !== null
                ? Number(object.retentionMs)
                : undefined;
        message.maxMessageBytes =
            object.maxMessageBytes !== undefined && object.maxMessageBytes !== null
                ? Number(object.maxMessageBytes)
                : undefined;
        message.minInsyncReplicas =
            object.minInsyncReplicas !== undefined &&
                object.minInsyncReplicas !== null
                ? Number(object.minInsyncReplicas)
                : undefined;
        message.segmentBytes =
            object.segmentBytes !== undefined && object.segmentBytes !== null
                ? Number(object.segmentBytes)
                : undefined;
        message.preallocate =
            object.preallocate !== undefined && object.preallocate !== null
                ? Boolean(object.preallocate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig21_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseTopicconfig21);
        message.cleanupPolicy = (_a = object.cleanupPolicy) !== null && _a !== void 0 ? _a : 0;
        message.compressionType = (_b = object.compressionType) !== null && _b !== void 0 ? _b : 0;
        message.deleteRetentionMs = (_c = object.deleteRetentionMs) !== null && _c !== void 0 ? _c : undefined;
        message.fileDeleteDelayMs = (_d = object.fileDeleteDelayMs) !== null && _d !== void 0 ? _d : undefined;
        message.flushMessages = (_e = object.flushMessages) !== null && _e !== void 0 ? _e : undefined;
        message.flushMs = (_f = object.flushMs) !== null && _f !== void 0 ? _f : undefined;
        message.minCompactionLagMs = (_g = object.minCompactionLagMs) !== null && _g !== void 0 ? _g : undefined;
        message.retentionBytes = (_h = object.retentionBytes) !== null && _h !== void 0 ? _h : undefined;
        message.retentionMs = (_j = object.retentionMs) !== null && _j !== void 0 ? _j : undefined;
        message.maxMessageBytes = (_k = object.maxMessageBytes) !== null && _k !== void 0 ? _k : undefined;
        message.minInsyncReplicas = (_l = object.minInsyncReplicas) !== null && _l !== void 0 ? _l : undefined;
        message.segmentBytes = (_m = object.segmentBytes) !== null && _m !== void 0 ? _m : undefined;
        message.preallocate = (_o = object.preallocate) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Topicconfig21.$type, exports.Topicconfig21);
const baseTopicconfig26 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_6",
    cleanupPolicy: 0,
    compressionType: 0,
};
exports.Topicconfig26 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deleteRetentionMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fileDeleteDelayMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCompactionLagMs,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxMessageBytes,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsyncReplicas,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopicconfig26);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopicconfig26);
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? topicconfig26_CleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.deleteRetentionMs =
            object.deleteRetentionMs !== undefined &&
                object.deleteRetentionMs !== null
                ? Number(object.deleteRetentionMs)
                : undefined;
        message.fileDeleteDelayMs =
            object.fileDeleteDelayMs !== undefined &&
                object.fileDeleteDelayMs !== null
                ? Number(object.fileDeleteDelayMs)
                : undefined;
        message.flushMessages =
            object.flushMessages !== undefined && object.flushMessages !== null
                ? Number(object.flushMessages)
                : undefined;
        message.flushMs =
            object.flushMs !== undefined && object.flushMs !== null
                ? Number(object.flushMs)
                : undefined;
        message.minCompactionLagMs =
            object.minCompactionLagMs !== undefined &&
                object.minCompactionLagMs !== null
                ? Number(object.minCompactionLagMs)
                : undefined;
        message.retentionBytes =
            object.retentionBytes !== undefined && object.retentionBytes !== null
                ? Number(object.retentionBytes)
                : undefined;
        message.retentionMs =
            object.retentionMs !== undefined && object.retentionMs !== null
                ? Number(object.retentionMs)
                : undefined;
        message.maxMessageBytes =
            object.maxMessageBytes !== undefined && object.maxMessageBytes !== null
                ? Number(object.maxMessageBytes)
                : undefined;
        message.minInsyncReplicas =
            object.minInsyncReplicas !== undefined &&
                object.minInsyncReplicas !== null
                ? Number(object.minInsyncReplicas)
                : undefined;
        message.segmentBytes =
            object.segmentBytes !== undefined && object.segmentBytes !== null
                ? Number(object.segmentBytes)
                : undefined;
        message.preallocate =
            object.preallocate !== undefined && object.preallocate !== null
                ? Boolean(object.preallocate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig26_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseTopicconfig26);
        message.cleanupPolicy = (_a = object.cleanupPolicy) !== null && _a !== void 0 ? _a : 0;
        message.compressionType = (_b = object.compressionType) !== null && _b !== void 0 ? _b : 0;
        message.deleteRetentionMs = (_c = object.deleteRetentionMs) !== null && _c !== void 0 ? _c : undefined;
        message.fileDeleteDelayMs = (_d = object.fileDeleteDelayMs) !== null && _d !== void 0 ? _d : undefined;
        message.flushMessages = (_e = object.flushMessages) !== null && _e !== void 0 ? _e : undefined;
        message.flushMs = (_f = object.flushMs) !== null && _f !== void 0 ? _f : undefined;
        message.minCompactionLagMs = (_g = object.minCompactionLagMs) !== null && _g !== void 0 ? _g : undefined;
        message.retentionBytes = (_h = object.retentionBytes) !== null && _h !== void 0 ? _h : undefined;
        message.retentionMs = (_j = object.retentionMs) !== null && _j !== void 0 ? _j : undefined;
        message.maxMessageBytes = (_k = object.maxMessageBytes) !== null && _k !== void 0 ? _k : undefined;
        message.minInsyncReplicas = (_l = object.minInsyncReplicas) !== null && _l !== void 0 ? _l : undefined;
        message.segmentBytes = (_m = object.segmentBytes) !== null && _m !== void 0 ? _m : undefined;
        message.preallocate = (_o = object.preallocate) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Topicconfig26.$type, exports.Topicconfig26);
const baseTopicconfig28 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_8",
    cleanupPolicy: 0,
    compressionType: 0,
};
exports.Topicconfig28 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig2_8",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deleteRetentionMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fileDeleteDelayMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCompactionLagMs,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxMessageBytes,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsyncReplicas,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopicconfig28);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopicconfig28);
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? topicconfig28_CleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.deleteRetentionMs =
            object.deleteRetentionMs !== undefined &&
                object.deleteRetentionMs !== null
                ? Number(object.deleteRetentionMs)
                : undefined;
        message.fileDeleteDelayMs =
            object.fileDeleteDelayMs !== undefined &&
                object.fileDeleteDelayMs !== null
                ? Number(object.fileDeleteDelayMs)
                : undefined;
        message.flushMessages =
            object.flushMessages !== undefined && object.flushMessages !== null
                ? Number(object.flushMessages)
                : undefined;
        message.flushMs =
            object.flushMs !== undefined && object.flushMs !== null
                ? Number(object.flushMs)
                : undefined;
        message.minCompactionLagMs =
            object.minCompactionLagMs !== undefined &&
                object.minCompactionLagMs !== null
                ? Number(object.minCompactionLagMs)
                : undefined;
        message.retentionBytes =
            object.retentionBytes !== undefined && object.retentionBytes !== null
                ? Number(object.retentionBytes)
                : undefined;
        message.retentionMs =
            object.retentionMs !== undefined && object.retentionMs !== null
                ? Number(object.retentionMs)
                : undefined;
        message.maxMessageBytes =
            object.maxMessageBytes !== undefined && object.maxMessageBytes !== null
                ? Number(object.maxMessageBytes)
                : undefined;
        message.minInsyncReplicas =
            object.minInsyncReplicas !== undefined &&
                object.minInsyncReplicas !== null
                ? Number(object.minInsyncReplicas)
                : undefined;
        message.segmentBytes =
            object.segmentBytes !== undefined && object.segmentBytes !== null
                ? Number(object.segmentBytes)
                : undefined;
        message.preallocate =
            object.preallocate !== undefined && object.preallocate !== null
                ? Boolean(object.preallocate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig28_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseTopicconfig28);
        message.cleanupPolicy = (_a = object.cleanupPolicy) !== null && _a !== void 0 ? _a : 0;
        message.compressionType = (_b = object.compressionType) !== null && _b !== void 0 ? _b : 0;
        message.deleteRetentionMs = (_c = object.deleteRetentionMs) !== null && _c !== void 0 ? _c : undefined;
        message.fileDeleteDelayMs = (_d = object.fileDeleteDelayMs) !== null && _d !== void 0 ? _d : undefined;
        message.flushMessages = (_e = object.flushMessages) !== null && _e !== void 0 ? _e : undefined;
        message.flushMs = (_f = object.flushMs) !== null && _f !== void 0 ? _f : undefined;
        message.minCompactionLagMs = (_g = object.minCompactionLagMs) !== null && _g !== void 0 ? _g : undefined;
        message.retentionBytes = (_h = object.retentionBytes) !== null && _h !== void 0 ? _h : undefined;
        message.retentionMs = (_j = object.retentionMs) !== null && _j !== void 0 ? _j : undefined;
        message.maxMessageBytes = (_k = object.maxMessageBytes) !== null && _k !== void 0 ? _k : undefined;
        message.minInsyncReplicas = (_l = object.minInsyncReplicas) !== null && _l !== void 0 ? _l : undefined;
        message.segmentBytes = (_m = object.segmentBytes) !== null && _m !== void 0 ? _m : undefined;
        message.preallocate = (_o = object.preallocate) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Topicconfig28.$type, exports.Topicconfig28);
const baseTopicConfig3 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig3",
    cleanupPolicy: 0,
    compressionType: 0,
};
exports.TopicConfig3 = {
    $type: "yandex.cloud.mdb.kafka.v1.TopicConfig3",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deleteRetentionMs,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fileDeleteDelayMs,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCompactionLagMs,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxMessageBytes,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsyncReplicas,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTopicConfig3);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTopicConfig3);
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? topicConfig3_CleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        message.compressionType =
            object.compressionType !== undefined && object.compressionType !== null
                ? (0, common_1.compressionTypeFromJSON)(object.compressionType)
                : 0;
        message.deleteRetentionMs =
            object.deleteRetentionMs !== undefined &&
                object.deleteRetentionMs !== null
                ? Number(object.deleteRetentionMs)
                : undefined;
        message.fileDeleteDelayMs =
            object.fileDeleteDelayMs !== undefined &&
                object.fileDeleteDelayMs !== null
                ? Number(object.fileDeleteDelayMs)
                : undefined;
        message.flushMessages =
            object.flushMessages !== undefined && object.flushMessages !== null
                ? Number(object.flushMessages)
                : undefined;
        message.flushMs =
            object.flushMs !== undefined && object.flushMs !== null
                ? Number(object.flushMs)
                : undefined;
        message.minCompactionLagMs =
            object.minCompactionLagMs !== undefined &&
                object.minCompactionLagMs !== null
                ? Number(object.minCompactionLagMs)
                : undefined;
        message.retentionBytes =
            object.retentionBytes !== undefined && object.retentionBytes !== null
                ? Number(object.retentionBytes)
                : undefined;
        message.retentionMs =
            object.retentionMs !== undefined && object.retentionMs !== null
                ? Number(object.retentionMs)
                : undefined;
        message.maxMessageBytes =
            object.maxMessageBytes !== undefined && object.maxMessageBytes !== null
                ? Number(object.maxMessageBytes)
                : undefined;
        message.minInsyncReplicas =
            object.minInsyncReplicas !== undefined &&
                object.minInsyncReplicas !== null
                ? Number(object.minInsyncReplicas)
                : undefined;
        message.segmentBytes =
            object.segmentBytes !== undefined && object.segmentBytes !== null
                ? Number(object.segmentBytes)
                : undefined;
        message.preallocate =
            object.preallocate !== undefined && object.preallocate !== null
                ? Boolean(object.preallocate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicConfig3_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseTopicConfig3);
        message.cleanupPolicy = (_a = object.cleanupPolicy) !== null && _a !== void 0 ? _a : 0;
        message.compressionType = (_b = object.compressionType) !== null && _b !== void 0 ? _b : 0;
        message.deleteRetentionMs = (_c = object.deleteRetentionMs) !== null && _c !== void 0 ? _c : undefined;
        message.fileDeleteDelayMs = (_d = object.fileDeleteDelayMs) !== null && _d !== void 0 ? _d : undefined;
        message.flushMessages = (_e = object.flushMessages) !== null && _e !== void 0 ? _e : undefined;
        message.flushMs = (_f = object.flushMs) !== null && _f !== void 0 ? _f : undefined;
        message.minCompactionLagMs = (_g = object.minCompactionLagMs) !== null && _g !== void 0 ? _g : undefined;
        message.retentionBytes = (_h = object.retentionBytes) !== null && _h !== void 0 ? _h : undefined;
        message.retentionMs = (_j = object.retentionMs) !== null && _j !== void 0 ? _j : undefined;
        message.maxMessageBytes = (_k = object.maxMessageBytes) !== null && _k !== void 0 ? _k : undefined;
        message.minInsyncReplicas = (_l = object.minInsyncReplicas) !== null && _l !== void 0 ? _l : undefined;
        message.segmentBytes = (_m = object.segmentBytes) !== null && _m !== void 0 ? _m : undefined;
        message.preallocate = (_o = object.preallocate) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TopicConfig3.$type, exports.TopicConfig3);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
