"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaTargetTopic = exports.KafkaTargetTopicSettings = exports.KafkaTarget = exports.KafkaSource = exports.KafkaSaslSecurity = exports.KafkaAuth = exports.OnPremiseKafka = exports.KafkaConnectionOptions = exports.kafkaMechanismToJSON = exports.kafkaMechanismFromJSON = exports.KafkaMechanism = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
const parsers_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/parsers");
const serializers_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/serializers");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
var KafkaMechanism;
(function (KafkaMechanism) {
    KafkaMechanism[KafkaMechanism["KAFKA_MECHANISM_UNSPECIFIED"] = 0] = "KAFKA_MECHANISM_UNSPECIFIED";
    KafkaMechanism[KafkaMechanism["KAFKA_MECHANISM_SHA256"] = 1] = "KAFKA_MECHANISM_SHA256";
    KafkaMechanism[KafkaMechanism["KAFKA_MECHANISM_SHA512"] = 2] = "KAFKA_MECHANISM_SHA512";
    KafkaMechanism[KafkaMechanism["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KafkaMechanism = exports.KafkaMechanism || (exports.KafkaMechanism = {}));
function kafkaMechanismFromJSON(object) {
    switch (object) {
        case 0:
        case "KAFKA_MECHANISM_UNSPECIFIED":
            return KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED;
        case 1:
        case "KAFKA_MECHANISM_SHA256":
            return KafkaMechanism.KAFKA_MECHANISM_SHA256;
        case 2:
        case "KAFKA_MECHANISM_SHA512":
            return KafkaMechanism.KAFKA_MECHANISM_SHA512;
        case -1:
        case "UNRECOGNIZED":
        default:
            return KafkaMechanism.UNRECOGNIZED;
    }
}
exports.kafkaMechanismFromJSON = kafkaMechanismFromJSON;
function kafkaMechanismToJSON(object) {
    switch (object) {
        case KafkaMechanism.KAFKA_MECHANISM_UNSPECIFIED:
            return "KAFKA_MECHANISM_UNSPECIFIED";
        case KafkaMechanism.KAFKA_MECHANISM_SHA256:
            return "KAFKA_MECHANISM_SHA256";
        case KafkaMechanism.KAFKA_MECHANISM_SHA512:
            return "KAFKA_MECHANISM_SHA512";
        default:
            return "UNKNOWN";
    }
}
exports.kafkaMechanismToJSON = kafkaMechanismToJSON;
const baseKafkaConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions",
};
exports.KafkaConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== undefined) {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.onPremise !== undefined) {
            exports.OnPremiseKafka.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaConnectionOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = exports.OnPremiseKafka.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKafkaConnectionOptions);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseKafka.fromJSON(object.onPremise)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? exports.OnPremiseKafka.toJSON(message.onPremise)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseKafkaConnectionOptions);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseKafka.fromPartial(object.onPremise)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaConnectionOptions.$type, exports.KafkaConnectionOptions);
const baseOnPremiseKafka = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka",
    brokerUrls: "",
    subnetId: "",
};
exports.OnPremiseKafka = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.brokerUrls) {
            writer.uint32(10).string(v);
        }
        if (message.tlsMode !== undefined) {
            common_1.TLSMode.encode(message.tlsMode, writer.uint32(42).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(34).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOnPremiseKafka);
        message.brokerUrls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerUrls.push(reader.string());
                    break;
                case 5:
                    message.tlsMode = common_1.TLSMode.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
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
        const message = Object.assign({}, baseOnPremiseKafka);
        message.brokerUrls = ((_a = object.brokerUrls) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromJSON(object.tlsMode)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.brokerUrls) {
            obj.brokerUrls = message.brokerUrls.map((e) => e);
        }
        else {
            obj.brokerUrls = [];
        }
        message.tlsMode !== undefined &&
            (obj.tlsMode = message.tlsMode
                ? common_1.TLSMode.toJSON(message.tlsMode)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOnPremiseKafka);
        message.brokerUrls = ((_a = object.brokerUrls) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromPartial(object.tlsMode)
                : undefined;
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OnPremiseKafka.$type, exports.OnPremiseKafka);
const baseKafkaAuth = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth",
};
exports.KafkaAuth = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sasl !== undefined) {
            exports.KafkaSaslSecurity.encode(message.sasl, writer.uint32(10).fork()).ldelim();
        }
        if (message.noAuth !== undefined) {
            common_1.NoAuth.encode(message.noAuth, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaAuth);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sasl = exports.KafkaSaslSecurity.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.noAuth = common_1.NoAuth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKafkaAuth);
        message.sasl =
            object.sasl !== undefined && object.sasl !== null
                ? exports.KafkaSaslSecurity.fromJSON(object.sasl)
                : undefined;
        message.noAuth =
            object.noAuth !== undefined && object.noAuth !== null
                ? common_1.NoAuth.fromJSON(object.noAuth)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sasl !== undefined &&
            (obj.sasl = message.sasl
                ? exports.KafkaSaslSecurity.toJSON(message.sasl)
                : undefined);
        message.noAuth !== undefined &&
            (obj.noAuth = message.noAuth ? common_1.NoAuth.toJSON(message.noAuth) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseKafkaAuth);
        message.sasl =
            object.sasl !== undefined && object.sasl !== null
                ? exports.KafkaSaslSecurity.fromPartial(object.sasl)
                : undefined;
        message.noAuth =
            object.noAuth !== undefined && object.noAuth !== null
                ? common_1.NoAuth.fromPartial(object.noAuth)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaAuth.$type, exports.KafkaAuth);
const baseKafkaSaslSecurity = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity",
    user: "",
    mechanism: 0,
};
exports.KafkaSaslSecurity = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== "") {
            writer.uint32(10).string(message.user);
        }
        if (message.password !== undefined) {
            common_1.Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        if (message.mechanism !== 0) {
            writer.uint32(24).int32(message.mechanism);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaSaslSecurity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = common_1.Secret.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mechanism = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKafkaSaslSecurity);
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromJSON(object.password)
                : undefined;
        message.mechanism =
            object.mechanism !== undefined && object.mechanism !== null
                ? kafkaMechanismFromJSON(object.mechanism)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password
                ? common_1.Secret.toJSON(message.password)
                : undefined);
        message.mechanism !== undefined &&
            (obj.mechanism = kafkaMechanismToJSON(message.mechanism));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseKafkaSaslSecurity);
        message.user = (_a = object.user) !== null && _a !== void 0 ? _a : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.mechanism = (_b = object.mechanism) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaSaslSecurity.$type, exports.KafkaSaslSecurity);
const baseKafkaSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource",
    securityGroups: "",
    topicName: "",
};
exports.KafkaSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.KafkaConnectionOptions.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth !== undefined) {
            exports.KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(26).string(v);
        }
        if (message.topicName !== "") {
            writer.uint32(34).string(message.topicName);
        }
        if (message.transformer !== undefined) {
            common_1.DataTransformationOptions.encode(message.transformer, writer.uint32(42).fork()).ldelim();
        }
        if (message.parser !== undefined) {
            parsers_1.Parser.encode(message.parser, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaSource);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.KafkaConnectionOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth = exports.KafkaAuth.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.securityGroups.push(reader.string());
                    break;
                case 4:
                    message.topicName = reader.string();
                    break;
                case 5:
                    message.transformer = common_1.DataTransformationOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.parser = parsers_1.Parser.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseKafkaSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.KafkaConnectionOptions.fromJSON(object.connection)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? exports.KafkaAuth.fromJSON(object.auth)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        message.transformer =
            object.transformer !== undefined && object.transformer !== null
                ? common_1.DataTransformationOptions.fromJSON(object.transformer)
                : undefined;
        message.parser =
            object.parser !== undefined && object.parser !== null
                ? parsers_1.Parser.fromJSON(object.parser)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.KafkaConnectionOptions.toJSON(message.connection)
                : undefined);
        message.auth !== undefined &&
            (obj.auth = message.auth ? exports.KafkaAuth.toJSON(message.auth) : undefined);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.transformer !== undefined &&
            (obj.transformer = message.transformer
                ? common_1.DataTransformationOptions.toJSON(message.transformer)
                : undefined);
        message.parser !== undefined &&
            (obj.parser = message.parser ? parsers_1.Parser.toJSON(message.parser) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseKafkaSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.KafkaConnectionOptions.fromPartial(object.connection)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? exports.KafkaAuth.fromPartial(object.auth)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.topicName = (_b = object.topicName) !== null && _b !== void 0 ? _b : "";
        message.transformer =
            object.transformer !== undefined && object.transformer !== null
                ? common_1.DataTransformationOptions.fromPartial(object.transformer)
                : undefined;
        message.parser =
            object.parser !== undefined && object.parser !== null
                ? parsers_1.Parser.fromPartial(object.parser)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaSource.$type, exports.KafkaSource);
const baseKafkaTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget",
    securityGroups: "",
};
exports.KafkaTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.KafkaConnectionOptions.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth !== undefined) {
            exports.KafkaAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(26).string(v);
        }
        if (message.topicSettings !== undefined) {
            exports.KafkaTargetTopicSettings.encode(message.topicSettings, writer.uint32(58).fork()).ldelim();
        }
        if (message.serializer !== undefined) {
            serializers_1.Serializer.encode(message.serializer, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaTarget);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.KafkaConnectionOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth = exports.KafkaAuth.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.securityGroups.push(reader.string());
                    break;
                case 7:
                    message.topicSettings = exports.KafkaTargetTopicSettings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.serializer = serializers_1.Serializer.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseKafkaTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.KafkaConnectionOptions.fromJSON(object.connection)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? exports.KafkaAuth.fromJSON(object.auth)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.topicSettings =
            object.topicSettings !== undefined && object.topicSettings !== null
                ? exports.KafkaTargetTopicSettings.fromJSON(object.topicSettings)
                : undefined;
        message.serializer =
            object.serializer !== undefined && object.serializer !== null
                ? serializers_1.Serializer.fromJSON(object.serializer)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.KafkaConnectionOptions.toJSON(message.connection)
                : undefined);
        message.auth !== undefined &&
            (obj.auth = message.auth ? exports.KafkaAuth.toJSON(message.auth) : undefined);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.topicSettings !== undefined &&
            (obj.topicSettings = message.topicSettings
                ? exports.KafkaTargetTopicSettings.toJSON(message.topicSettings)
                : undefined);
        message.serializer !== undefined &&
            (obj.serializer = message.serializer
                ? serializers_1.Serializer.toJSON(message.serializer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseKafkaTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.KafkaConnectionOptions.fromPartial(object.connection)
                : undefined;
        message.auth =
            object.auth !== undefined && object.auth !== null
                ? exports.KafkaAuth.fromPartial(object.auth)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.topicSettings =
            object.topicSettings !== undefined && object.topicSettings !== null
                ? exports.KafkaTargetTopicSettings.fromPartial(object.topicSettings)
                : undefined;
        message.serializer =
            object.serializer !== undefined && object.serializer !== null
                ? serializers_1.Serializer.fromPartial(object.serializer)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaTarget.$type, exports.KafkaTarget);
const baseKafkaTargetTopicSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings",
};
exports.KafkaTargetTopicSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topic !== undefined) {
            exports.KafkaTargetTopic.encode(message.topic, writer.uint32(10).fork()).ldelim();
        }
        if (message.topicPrefix !== undefined) {
            writer.uint32(18).string(message.topicPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaTargetTopicSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topic = exports.KafkaTargetTopic.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.topicPrefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKafkaTargetTopicSettings);
        message.topic =
            object.topic !== undefined && object.topic !== null
                ? exports.KafkaTargetTopic.fromJSON(object.topic)
                : undefined;
        message.topicPrefix =
            object.topicPrefix !== undefined && object.topicPrefix !== null
                ? String(object.topicPrefix)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topic !== undefined &&
            (obj.topic = message.topic
                ? exports.KafkaTargetTopic.toJSON(message.topic)
                : undefined);
        message.topicPrefix !== undefined &&
            (obj.topicPrefix = message.topicPrefix);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseKafkaTargetTopicSettings);
        message.topic =
            object.topic !== undefined && object.topic !== null
                ? exports.KafkaTargetTopic.fromPartial(object.topic)
                : undefined;
        message.topicPrefix = (_a = object.topicPrefix) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaTargetTopicSettings.$type, exports.KafkaTargetTopicSettings);
const baseKafkaTargetTopic = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic",
    topicName: "",
    saveTxOrder: false,
};
exports.KafkaTargetTopic = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topicName !== "") {
            writer.uint32(10).string(message.topicName);
        }
        if (message.saveTxOrder === true) {
            writer.uint32(16).bool(message.saveTxOrder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKafkaTargetTopic);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topicName = reader.string();
                    break;
                case 2:
                    message.saveTxOrder = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKafkaTargetTopic);
        message.topicName =
            object.topicName !== undefined && object.topicName !== null
                ? String(object.topicName)
                : "";
        message.saveTxOrder =
            object.saveTxOrder !== undefined && object.saveTxOrder !== null
                ? Boolean(object.saveTxOrder)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.saveTxOrder !== undefined &&
            (obj.saveTxOrder = message.saveTxOrder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseKafkaTargetTopic);
        message.topicName = (_a = object.topicName) !== null && _a !== void 0 ? _a : "";
        message.saveTxOrder = (_b = object.saveTxOrder) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.KafkaTargetTopic.$type, exports.KafkaTargetTopic);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
