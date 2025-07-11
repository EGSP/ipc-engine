"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalS3Storage = exports.S3Connection = exports.ConnectorConfigS3Sink = exports.ExternalClusterConnection = exports.ThisCluster = exports.ClusterConnection = exports.ConnectorConfigMirrorMaker = exports.Connector_PropertiesEntry = exports.Connector = exports.ExternalS3StorageSpec = exports.S3ConnectionSpec = exports.UpdateConnectorConfigS3SinkSpec = exports.ConnectorConfigS3SinkSpec = exports.ExternalClusterConnectionSpec = exports.ThisClusterSpec = exports.ClusterConnectionSpec = exports.ConnectorConfigMirrorMakerSpec = exports.UpdateConnectorSpec_PropertiesEntry = exports.UpdateConnectorSpec = exports.ConnectorSpec_PropertiesEntry = exports.ConnectorSpec = exports.connector_StatusToJSON = exports.connector_StatusFromJSON = exports.Connector_Status = exports.connector_HealthToJSON = exports.connector_HealthFromJSON = exports.Connector_Health = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
var Connector_Health;
(function (Connector_Health) {
    /** HEALTH_UNKNOWN - Health of the connector is unknown. */
    Connector_Health[Connector_Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Connector is running. */
    Connector_Health[Connector_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Connector has failed to start. */
    Connector_Health[Connector_Health["DEAD"] = 2] = "DEAD";
    Connector_Health[Connector_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Connector_Health = exports.Connector_Health || (exports.Connector_Health = {}));
function connector_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNKNOWN":
            return Connector_Health.HEALTH_UNKNOWN;
        case 1:
        case "ALIVE":
            return Connector_Health.ALIVE;
        case 2:
        case "DEAD":
            return Connector_Health.DEAD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Connector_Health.UNRECOGNIZED;
    }
}
exports.connector_HealthFromJSON = connector_HealthFromJSON;
function connector_HealthToJSON(object) {
    switch (object) {
        case Connector_Health.HEALTH_UNKNOWN:
            return "HEALTH_UNKNOWN";
        case Connector_Health.ALIVE:
            return "ALIVE";
        case Connector_Health.DEAD:
            return "DEAD";
        default:
            return "UNKNOWN";
    }
}
exports.connector_HealthToJSON = connector_HealthToJSON;
var Connector_Status;
(function (Connector_Status) {
    /** STATUS_UNKNOWN - Connector state is unknown. */
    Connector_Status[Connector_Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    /** RUNNING - Connector is running normally. */
    Connector_Status[Connector_Status["RUNNING"] = 1] = "RUNNING";
    /** ERROR - Connector has encountered a problem and cannot operate. */
    Connector_Status[Connector_Status["ERROR"] = 2] = "ERROR";
    /** PAUSED - Connector is paused. */
    Connector_Status[Connector_Status["PAUSED"] = 3] = "PAUSED";
    Connector_Status[Connector_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Connector_Status = exports.Connector_Status || (exports.Connector_Status = {}));
function connector_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNKNOWN":
            return Connector_Status.STATUS_UNKNOWN;
        case 1:
        case "RUNNING":
            return Connector_Status.RUNNING;
        case 2:
        case "ERROR":
            return Connector_Status.ERROR;
        case 3:
        case "PAUSED":
            return Connector_Status.PAUSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Connector_Status.UNRECOGNIZED;
    }
}
exports.connector_StatusFromJSON = connector_StatusFromJSON;
function connector_StatusToJSON(object) {
    switch (object) {
        case Connector_Status.STATUS_UNKNOWN:
            return "STATUS_UNKNOWN";
        case Connector_Status.RUNNING:
            return "RUNNING";
        case Connector_Status.ERROR:
            return "ERROR";
        case Connector_Status.PAUSED:
            return "PAUSED";
        default:
            return "UNKNOWN";
    }
}
exports.connector_StatusToJSON = connector_StatusToJSON;
const baseConnectorSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec",
    name: "",
};
exports.ConnectorSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.ConnectorSpec_PropertiesEntry.encode({
                $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            exports.ConnectorConfigMirrorMakerSpec.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            exports.ConnectorConfigS3SinkSpec.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectorSpec);
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    const entry3 = exports.ConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        exports.ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.connectorConfigS3Sink = exports.ConnectorConfigS3SinkSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseConnectorSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.tasksMax =
            object.tasksMax !== undefined && object.tasksMax !== null
                ? Number(object.tasksMax)
                : undefined;
        message.properties = Object.entries((_a = object.properties) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.ConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? exports.ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? exports.ConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConnectorSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.tasksMax = (_b = object.tasksMax) !== null && _b !== void 0 ? _b : undefined;
        message.properties = Object.entries((_c = object.properties) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.ConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorSpec.$type, exports.ConnectorSpec);
const baseConnectorSpec_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
    key: "",
    value: "",
};
exports.ConnectorSpec_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry",
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
        const message = Object.assign({}, baseConnectorSpec_PropertiesEntry);
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
        const message = Object.assign({}, baseConnectorSpec_PropertiesEntry);
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
        const message = Object.assign({}, baseConnectorSpec_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorSpec_PropertiesEntry.$type, exports.ConnectorSpec_PropertiesEntry);
const baseUpdateConnectorSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec",
};
exports.UpdateConnectorSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tasksMax !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax }, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.UpdateConnectorSpec_PropertiesEntry.encode({
                $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            exports.ConnectorConfigMirrorMakerSpec.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            exports.UpdateConnectorConfigS3SinkSpec.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateConnectorSpec);
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tasksMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    const entry2 = exports.UpdateConnectorSpec_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.properties[entry2.key] = entry2.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        exports.ConnectorConfigMirrorMakerSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.connectorConfigS3Sink =
                        exports.UpdateConnectorConfigS3SinkSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateConnectorSpec);
        message.tasksMax =
            object.tasksMax !== undefined && object.tasksMax !== null
                ? Number(object.tasksMax)
                : undefined;
        message.properties = Object.entries((_a = object.properties) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMakerSpec.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.UpdateConnectorConfigS3SinkSpec.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? exports.ConnectorConfigMirrorMakerSpec.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? exports.UpdateConnectorConfigS3SinkSpec.toJSON(message.connectorConfigS3Sink)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateConnectorSpec);
        message.tasksMax = (_a = object.tasksMax) !== null && _a !== void 0 ? _a : undefined;
        message.properties = Object.entries((_b = object.properties) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMakerSpec.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.UpdateConnectorConfigS3SinkSpec.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateConnectorSpec.$type, exports.UpdateConnectorSpec);
const baseUpdateConnectorSpec_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
    key: "",
    value: "",
};
exports.UpdateConnectorSpec_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry",
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
        const message = Object.assign({}, baseUpdateConnectorSpec_PropertiesEntry);
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
        const message = Object.assign({}, baseUpdateConnectorSpec_PropertiesEntry);
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
        const message = Object.assign({}, baseUpdateConnectorSpec_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateConnectorSpec_PropertiesEntry.$type, exports.UpdateConnectorSpec_PropertiesEntry);
const baseConnectorConfigMirrorMakerSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec",
    topics: "",
};
exports.ConnectorConfigMirrorMakerSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceCluster !== undefined) {
            exports.ClusterConnectionSpec.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            exports.ClusterConnectionSpec.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== "") {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicationFactor,
            }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectorConfigMirrorMakerSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = exports.ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = exports.ClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectorConfigMirrorMakerSpec);
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? exports.ClusterConnectionSpec.fromJSON(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? exports.ClusterConnectionSpec.fromJSON(object.targetCluster)
                : undefined;
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : "";
        message.replicationFactor =
            object.replicationFactor !== undefined &&
                object.replicationFactor !== null
                ? Number(object.replicationFactor)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? exports.ClusterConnectionSpec.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? exports.ClusterConnectionSpec.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConnectorConfigMirrorMakerSpec);
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? exports.ClusterConnectionSpec.fromPartial(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? exports.ClusterConnectionSpec.fromPartial(object.targetCluster)
                : undefined;
        message.topics = (_a = object.topics) !== null && _a !== void 0 ? _a : "";
        message.replicationFactor = (_b = object.replicationFactor) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorConfigMirrorMakerSpec.$type, exports.ConnectorConfigMirrorMakerSpec);
const baseClusterConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec",
    alias: "",
};
exports.ClusterConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alias !== "") {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            exports.ThisClusterSpec.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            exports.ExternalClusterConnectionSpec.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConnectionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = exports.ThisClusterSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalCluster = exports.ExternalClusterConnectionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConnectionSpec);
        message.alias =
            object.alias !== undefined && object.alias !== null
                ? String(object.alias)
                : "";
        message.thisCluster =
            object.thisCluster !== undefined && object.thisCluster !== null
                ? exports.ThisClusterSpec.fromJSON(object.thisCluster)
                : undefined;
        message.externalCluster =
            object.externalCluster !== undefined && object.externalCluster !== null
                ? exports.ExternalClusterConnectionSpec.fromJSON(object.externalCluster)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? exports.ThisClusterSpec.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? exports.ExternalClusterConnectionSpec.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClusterConnectionSpec);
        message.alias = (_a = object.alias) !== null && _a !== void 0 ? _a : "";
        message.thisCluster =
            object.thisCluster !== undefined && object.thisCluster !== null
                ? exports.ThisClusterSpec.fromPartial(object.thisCluster)
                : undefined;
        message.externalCluster =
            object.externalCluster !== undefined && object.externalCluster !== null
                ? exports.ExternalClusterConnectionSpec.fromPartial(object.externalCluster)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConnectionSpec.$type, exports.ClusterConnectionSpec);
const baseThisClusterSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec",
};
exports.ThisClusterSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseThisClusterSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseThisClusterSpec);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseThisClusterSpec);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ThisClusterSpec.$type, exports.ThisClusterSpec);
const baseExternalClusterConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec",
    bootstrapServers: "",
    saslUsername: "",
    saslPassword: "",
    saslMechanism: "",
    securityProtocol: "",
    sslTruststoreCertificates: "",
};
exports.ExternalClusterConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bootstrapServers !== "") {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== "") {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslPassword !== "") {
            writer.uint32(26).string(message.saslPassword);
        }
        if (message.saslMechanism !== "") {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== "") {
            writer.uint32(42).string(message.securityProtocol);
        }
        if (message.sslTruststoreCertificates !== "") {
            writer.uint32(50).string(message.sslTruststoreCertificates);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalClusterConnectionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 3:
                    message.saslPassword = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
                    break;
                case 6:
                    message.sslTruststoreCertificates = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalClusterConnectionSpec);
        message.bootstrapServers =
            object.bootstrapServers !== undefined && object.bootstrapServers !== null
                ? String(object.bootstrapServers)
                : "";
        message.saslUsername =
            object.saslUsername !== undefined && object.saslUsername !== null
                ? String(object.saslUsername)
                : "";
        message.saslPassword =
            object.saslPassword !== undefined && object.saslPassword !== null
                ? String(object.saslPassword)
                : "";
        message.saslMechanism =
            object.saslMechanism !== undefined && object.saslMechanism !== null
                ? String(object.saslMechanism)
                : "";
        message.securityProtocol =
            object.securityProtocol !== undefined && object.securityProtocol !== null
                ? String(object.securityProtocol)
                : "";
        message.sslTruststoreCertificates =
            object.sslTruststoreCertificates !== undefined &&
                object.sslTruststoreCertificates !== null
                ? String(object.sslTruststoreCertificates)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined &&
            (obj.saslPassword = message.saslPassword);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        message.sslTruststoreCertificates !== undefined &&
            (obj.sslTruststoreCertificates = message.sslTruststoreCertificates);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseExternalClusterConnectionSpec);
        message.bootstrapServers = (_a = object.bootstrapServers) !== null && _a !== void 0 ? _a : "";
        message.saslUsername = (_b = object.saslUsername) !== null && _b !== void 0 ? _b : "";
        message.saslPassword = (_c = object.saslPassword) !== null && _c !== void 0 ? _c : "";
        message.saslMechanism = (_d = object.saslMechanism) !== null && _d !== void 0 ? _d : "";
        message.securityProtocol = (_e = object.securityProtocol) !== null && _e !== void 0 ? _e : "";
        message.sslTruststoreCertificates = (_f = object.sslTruststoreCertificates) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalClusterConnectionSpec.$type, exports.ExternalClusterConnectionSpec);
const baseConnectorConfigS3SinkSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec",
    topics: "",
    fileCompressionType: "",
};
exports.ConnectorConfigS3SinkSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topics !== "") {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileCompressionType !== "") {
            writer.uint32(18).string(message.fileCompressionType);
        }
        if (message.fileMaxRecords !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.fileMaxRecords }, writer.uint32(26).fork()).ldelim();
        }
        if (message.s3Connection !== undefined) {
            exports.S3ConnectionSpec.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectorConfigS3SinkSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.fileCompressionType = reader.string();
                    break;
                case 3:
                    message.fileMaxRecords = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.s3Connection = exports.S3ConnectionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectorConfigS3SinkSpec);
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : "";
        message.fileCompressionType =
            object.fileCompressionType !== undefined &&
                object.fileCompressionType !== null
                ? String(object.fileCompressionType)
                : "";
        message.fileMaxRecords =
            object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
                ? Number(object.fileMaxRecords)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3ConnectionSpec.fromJSON(object.s3Connection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.fileCompressionType !== undefined &&
            (obj.fileCompressionType = message.fileCompressionType);
        message.fileMaxRecords !== undefined &&
            (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? exports.S3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConnectorConfigS3SinkSpec);
        message.topics = (_a = object.topics) !== null && _a !== void 0 ? _a : "";
        message.fileCompressionType = (_b = object.fileCompressionType) !== null && _b !== void 0 ? _b : "";
        message.fileMaxRecords = (_c = object.fileMaxRecords) !== null && _c !== void 0 ? _c : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorConfigS3SinkSpec.$type, exports.ConnectorConfigS3SinkSpec);
const baseUpdateConnectorConfigS3SinkSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec",
    topics: "",
};
exports.UpdateConnectorConfigS3SinkSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topics !== "") {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileMaxRecords !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.fileMaxRecords }, writer.uint32(18).fork()).ldelim();
        }
        if (message.s3Connection !== undefined) {
            exports.S3ConnectionSpec.encode(message.s3Connection, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateConnectorConfigS3SinkSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.fileMaxRecords = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.s3Connection = exports.S3ConnectionSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateConnectorConfigS3SinkSpec);
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : "";
        message.fileMaxRecords =
            object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
                ? Number(object.fileMaxRecords)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3ConnectionSpec.fromJSON(object.s3Connection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.fileMaxRecords !== undefined &&
            (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? exports.S3ConnectionSpec.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateConnectorConfigS3SinkSpec);
        message.topics = (_a = object.topics) !== null && _a !== void 0 ? _a : "";
        message.fileMaxRecords = (_b = object.fileMaxRecords) !== null && _b !== void 0 ? _b : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3ConnectionSpec.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateConnectorConfigS3SinkSpec.$type, exports.UpdateConnectorConfigS3SinkSpec);
const baseS3ConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec",
    bucketName: "",
};
exports.S3ConnectionSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketName !== "") {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.externalS3 !== undefined) {
            exports.ExternalS3StorageSpec.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseS3ConnectionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.externalS3 = exports.ExternalS3StorageSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseS3ConnectionSpec);
        message.bucketName =
            object.bucketName !== undefined && object.bucketName !== null
                ? String(object.bucketName)
                : "";
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? exports.ExternalS3StorageSpec.fromJSON(object.externalS3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketName !== undefined && (obj.bucketName = message.bucketName);
        message.externalS3 !== undefined &&
            (obj.externalS3 = message.externalS3
                ? exports.ExternalS3StorageSpec.toJSON(message.externalS3)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseS3ConnectionSpec);
        message.bucketName = (_a = object.bucketName) !== null && _a !== void 0 ? _a : "";
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? exports.ExternalS3StorageSpec.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.S3ConnectionSpec.$type, exports.S3ConnectionSpec);
const baseExternalS3StorageSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec",
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: "",
    region: "",
};
exports.ExternalS3StorageSpec = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.secretAccessKey !== "") {
            writer.uint32(18).string(message.secretAccessKey);
        }
        if (message.endpoint !== "") {
            writer.uint32(26).string(message.endpoint);
        }
        if (message.region !== "") {
            writer.uint32(34).string(message.region);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalS3StorageSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.secretAccessKey = reader.string();
                    break;
                case 3:
                    message.endpoint = reader.string();
                    break;
                case 4:
                    message.region = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalS3StorageSpec);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        message.secretAccessKey =
            object.secretAccessKey !== undefined && object.secretAccessKey !== null
                ? String(object.secretAccessKey)
                : "";
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        message.region =
            object.region !== undefined && object.region !== null
                ? String(object.region)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.secretAccessKey !== undefined &&
            (obj.secretAccessKey = message.secretAccessKey);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExternalS3StorageSpec);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        message.secretAccessKey = (_b = object.secretAccessKey) !== null && _b !== void 0 ? _b : "";
        message.endpoint = (_c = object.endpoint) !== null && _c !== void 0 ? _c : "";
        message.region = (_d = object.region) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalS3StorageSpec.$type, exports.ExternalS3StorageSpec);
const baseConnector = {
    $type: "yandex.cloud.mdb.kafka.v1.Connector",
    name: "",
    health: 0,
    status: 0,
    clusterId: "",
};
exports.Connector = {
    $type: "yandex.cloud.mdb.kafka.v1.Connector",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tasksMax }, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.Connector_PropertiesEntry.encode({
                $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.health !== 0) {
            writer.uint32(32).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.clusterId !== "") {
            writer.uint32(50).string(message.clusterId);
        }
        if (message.connectorConfigMirrormaker !== undefined) {
            exports.ConnectorConfigMirrorMaker.encode(message.connectorConfigMirrormaker, writer.uint32(82).fork()).ldelim();
        }
        if (message.connectorConfigS3Sink !== undefined) {
            exports.ConnectorConfigS3Sink.encode(message.connectorConfigS3Sink, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnector);
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    const entry3 = exports.Connector_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.health = reader.int32();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.clusterId = reader.string();
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        exports.ConnectorConfigMirrorMaker.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.connectorConfigS3Sink = exports.ConnectorConfigS3Sink.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseConnector);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.tasksMax =
            object.tasksMax !== undefined && object.tasksMax !== null
                ? Number(object.tasksMax)
                : undefined;
        message.properties = Object.entries((_a = object.properties) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.health =
            object.health !== undefined && object.health !== null
                ? connector_HealthFromJSON(object.health)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? connector_StatusFromJSON(object.status)
                : 0;
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMaker.fromJSON(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.ConnectorConfigS3Sink.fromJSON(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.health !== undefined &&
            (obj.health = connector_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = connector_StatusToJSON(message.status));
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? exports.ConnectorConfigMirrorMaker.toJSON(message.connectorConfigMirrormaker)
                : undefined);
        message.connectorConfigS3Sink !== undefined &&
            (obj.connectorConfigS3Sink = message.connectorConfigS3Sink
                ? exports.ConnectorConfigS3Sink.toJSON(message.connectorConfigS3Sink)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseConnector);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.tasksMax = (_b = object.tasksMax) !== null && _b !== void 0 ? _b : undefined;
        message.properties = Object.entries((_c = object.properties) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.health = (_d = object.health) !== null && _d !== void 0 ? _d : 0;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.clusterId = (_f = object.clusterId) !== null && _f !== void 0 ? _f : "";
        message.connectorConfigMirrormaker =
            object.connectorConfigMirrormaker !== undefined &&
                object.connectorConfigMirrormaker !== null
                ? exports.ConnectorConfigMirrorMaker.fromPartial(object.connectorConfigMirrormaker)
                : undefined;
        message.connectorConfigS3Sink =
            object.connectorConfigS3Sink !== undefined &&
                object.connectorConfigS3Sink !== null
                ? exports.ConnectorConfigS3Sink.fromPartial(object.connectorConfigS3Sink)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Connector.$type, exports.Connector);
const baseConnector_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
    key: "",
    value: "",
};
exports.Connector_PropertiesEntry = {
    $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry",
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
        const message = Object.assign({}, baseConnector_PropertiesEntry);
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
        const message = Object.assign({}, baseConnector_PropertiesEntry);
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
        const message = Object.assign({}, baseConnector_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Connector_PropertiesEntry.$type, exports.Connector_PropertiesEntry);
const baseConnectorConfigMirrorMaker = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker",
    topics: "",
};
exports.ConnectorConfigMirrorMaker = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceCluster !== undefined) {
            exports.ClusterConnection.encode(message.sourceCluster, writer.uint32(10).fork()).ldelim();
        }
        if (message.targetCluster !== undefined) {
            exports.ClusterConnection.encode(message.targetCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.topics !== "") {
            writer.uint32(26).string(message.topics);
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicationFactor,
            }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectorConfigMirrorMaker);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = exports.ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.targetCluster = exports.ClusterConnection.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectorConfigMirrorMaker);
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? exports.ClusterConnection.fromJSON(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? exports.ClusterConnection.fromJSON(object.targetCluster)
                : undefined;
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : "";
        message.replicationFactor =
            object.replicationFactor !== undefined &&
                object.replicationFactor !== null
                ? Number(object.replicationFactor)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? exports.ClusterConnection.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? exports.ClusterConnection.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConnectorConfigMirrorMaker);
        message.sourceCluster =
            object.sourceCluster !== undefined && object.sourceCluster !== null
                ? exports.ClusterConnection.fromPartial(object.sourceCluster)
                : undefined;
        message.targetCluster =
            object.targetCluster !== undefined && object.targetCluster !== null
                ? exports.ClusterConnection.fromPartial(object.targetCluster)
                : undefined;
        message.topics = (_a = object.topics) !== null && _a !== void 0 ? _a : "";
        message.replicationFactor = (_b = object.replicationFactor) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorConfigMirrorMaker.$type, exports.ConnectorConfigMirrorMaker);
const baseClusterConnection = {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection",
    alias: "",
};
exports.ClusterConnection = {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alias !== "") {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            exports.ThisCluster.encode(message.thisCluster, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalCluster !== undefined) {
            exports.ExternalClusterConnection.encode(message.externalCluster, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClusterConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = exports.ThisCluster.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalCluster = exports.ExternalClusterConnection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClusterConnection);
        message.alias =
            object.alias !== undefined && object.alias !== null
                ? String(object.alias)
                : "";
        message.thisCluster =
            object.thisCluster !== undefined && object.thisCluster !== null
                ? exports.ThisCluster.fromJSON(object.thisCluster)
                : undefined;
        message.externalCluster =
            object.externalCluster !== undefined && object.externalCluster !== null
                ? exports.ExternalClusterConnection.fromJSON(object.externalCluster)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? exports.ThisCluster.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? exports.ExternalClusterConnection.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClusterConnection);
        message.alias = (_a = object.alias) !== null && _a !== void 0 ? _a : "";
        message.thisCluster =
            object.thisCluster !== undefined && object.thisCluster !== null
                ? exports.ThisCluster.fromPartial(object.thisCluster)
                : undefined;
        message.externalCluster =
            object.externalCluster !== undefined && object.externalCluster !== null
                ? exports.ExternalClusterConnection.fromPartial(object.externalCluster)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClusterConnection.$type, exports.ClusterConnection);
const baseThisCluster = {
    $type: "yandex.cloud.mdb.kafka.v1.ThisCluster",
};
exports.ThisCluster = {
    $type: "yandex.cloud.mdb.kafka.v1.ThisCluster",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseThisCluster);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseThisCluster);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseThisCluster);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ThisCluster.$type, exports.ThisCluster);
const baseExternalClusterConnection = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection",
    bootstrapServers: "",
    saslUsername: "",
    saslMechanism: "",
    securityProtocol: "",
};
exports.ExternalClusterConnection = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bootstrapServers !== "") {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== "") {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslMechanism !== "") {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== "") {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalClusterConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalClusterConnection);
        message.bootstrapServers =
            object.bootstrapServers !== undefined && object.bootstrapServers !== null
                ? String(object.bootstrapServers)
                : "";
        message.saslUsername =
            object.saslUsername !== undefined && object.saslUsername !== null
                ? String(object.saslUsername)
                : "";
        message.saslMechanism =
            object.saslMechanism !== undefined && object.saslMechanism !== null
                ? String(object.saslMechanism)
                : "";
        message.securityProtocol =
            object.securityProtocol !== undefined && object.securityProtocol !== null
                ? String(object.securityProtocol)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExternalClusterConnection);
        message.bootstrapServers = (_a = object.bootstrapServers) !== null && _a !== void 0 ? _a : "";
        message.saslUsername = (_b = object.saslUsername) !== null && _b !== void 0 ? _b : "";
        message.saslMechanism = (_c = object.saslMechanism) !== null && _c !== void 0 ? _c : "";
        message.securityProtocol = (_d = object.securityProtocol) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalClusterConnection.$type, exports.ExternalClusterConnection);
const baseConnectorConfigS3Sink = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink",
    topics: "",
    fileCompressionType: "",
};
exports.ConnectorConfigS3Sink = {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topics !== "") {
            writer.uint32(10).string(message.topics);
        }
        if (message.fileCompressionType !== "") {
            writer.uint32(18).string(message.fileCompressionType);
        }
        if (message.fileMaxRecords !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.fileMaxRecords }, writer.uint32(26).fork()).ldelim();
        }
        if (message.s3Connection !== undefined) {
            exports.S3Connection.encode(message.s3Connection, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectorConfigS3Sink);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics = reader.string();
                    break;
                case 2:
                    message.fileCompressionType = reader.string();
                    break;
                case 3:
                    message.fileMaxRecords = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.s3Connection = exports.S3Connection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectorConfigS3Sink);
        message.topics =
            object.topics !== undefined && object.topics !== null
                ? String(object.topics)
                : "";
        message.fileCompressionType =
            object.fileCompressionType !== undefined &&
                object.fileCompressionType !== null
                ? String(object.fileCompressionType)
                : "";
        message.fileMaxRecords =
            object.fileMaxRecords !== undefined && object.fileMaxRecords !== null
                ? Number(object.fileMaxRecords)
                : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3Connection.fromJSON(object.s3Connection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topics !== undefined && (obj.topics = message.topics);
        message.fileCompressionType !== undefined &&
            (obj.fileCompressionType = message.fileCompressionType);
        message.fileMaxRecords !== undefined &&
            (obj.fileMaxRecords = message.fileMaxRecords);
        message.s3Connection !== undefined &&
            (obj.s3Connection = message.s3Connection
                ? exports.S3Connection.toJSON(message.s3Connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConnectorConfigS3Sink);
        message.topics = (_a = object.topics) !== null && _a !== void 0 ? _a : "";
        message.fileCompressionType = (_b = object.fileCompressionType) !== null && _b !== void 0 ? _b : "";
        message.fileMaxRecords = (_c = object.fileMaxRecords) !== null && _c !== void 0 ? _c : undefined;
        message.s3Connection =
            object.s3Connection !== undefined && object.s3Connection !== null
                ? exports.S3Connection.fromPartial(object.s3Connection)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectorConfigS3Sink.$type, exports.ConnectorConfigS3Sink);
const baseS3Connection = {
    $type: "yandex.cloud.mdb.kafka.v1.S3Connection",
    bucketName: "",
};
exports.S3Connection = {
    $type: "yandex.cloud.mdb.kafka.v1.S3Connection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketName !== "") {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.externalS3 !== undefined) {
            exports.ExternalS3Storage.encode(message.externalS3, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseS3Connection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.externalS3 = exports.ExternalS3Storage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseS3Connection);
        message.bucketName =
            object.bucketName !== undefined && object.bucketName !== null
                ? String(object.bucketName)
                : "";
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? exports.ExternalS3Storage.fromJSON(object.externalS3)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketName !== undefined && (obj.bucketName = message.bucketName);
        message.externalS3 !== undefined &&
            (obj.externalS3 = message.externalS3
                ? exports.ExternalS3Storage.toJSON(message.externalS3)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseS3Connection);
        message.bucketName = (_a = object.bucketName) !== null && _a !== void 0 ? _a : "";
        message.externalS3 =
            object.externalS3 !== undefined && object.externalS3 !== null
                ? exports.ExternalS3Storage.fromPartial(object.externalS3)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.S3Connection.$type, exports.S3Connection);
const baseExternalS3Storage = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage",
    accessKeyId: "",
    endpoint: "",
    region: "",
};
exports.ExternalS3Storage = {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== "") {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.endpoint !== "") {
            writer.uint32(18).string(message.endpoint);
        }
        if (message.region !== "") {
            writer.uint32(26).string(message.region);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalS3Storage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                case 2:
                    message.endpoint = reader.string();
                    break;
                case 3:
                    message.region = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalS3Storage);
        message.accessKeyId =
            object.accessKeyId !== undefined && object.accessKeyId !== null
                ? String(object.accessKeyId)
                : "";
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        message.region =
            object.region !== undefined && object.region !== null
                ? String(object.region)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.region !== undefined && (obj.region = message.region);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseExternalS3Storage);
        message.accessKeyId = (_a = object.accessKeyId) !== null && _a !== void 0 ? _a : "";
        message.endpoint = (_b = object.endpoint) !== null && _b !== void 0 ? _b : "";
        message.region = (_c = object.region) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalS3Storage.$type, exports.ExternalS3Storage);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
