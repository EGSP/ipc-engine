"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointSettings = exports.Endpoint_LabelsEntry = exports.Endpoint = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const mysql_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/mysql");
const postgres_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/postgres");
const ydb_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb");
const kafka_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka");
const mongo_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/mongo");
const clickhouse_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse");
exports.protobufPackage = "yandex.cloud.datatransfer.v1";
const baseEndpoint = {
    $type: "yandex.cloud.datatransfer.v1.Endpoint",
    id: "",
    folderId: "",
    name: "",
    description: "",
};
exports.Endpoint = {
    $type: "yandex.cloud.datatransfer.v1.Endpoint",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Endpoint_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.settings !== undefined) {
            exports.EndpointSettings.encode(message.settings, writer.uint32(418).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEndpoint);
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
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Endpoint_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 52:
                    message.settings = exports.EndpointSettings.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseEndpoint);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.EndpointSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.EndpointSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseEndpoint);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.EndpointSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Endpoint.$type, exports.Endpoint);
const baseEndpoint_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
    key: "",
    value: "",
};
exports.Endpoint_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry",
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
        const message = Object.assign({}, baseEndpoint_LabelsEntry);
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
        const message = Object.assign({}, baseEndpoint_LabelsEntry);
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
        const message = Object.assign({}, baseEndpoint_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Endpoint_LabelsEntry.$type, exports.Endpoint_LabelsEntry);
const baseEndpointSettings = {
    $type: "yandex.cloud.datatransfer.v1.EndpointSettings",
};
exports.EndpointSettings = {
    $type: "yandex.cloud.datatransfer.v1.EndpointSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mysqlSource !== undefined) {
            mysql_1.MysqlSource.encode(message.mysqlSource, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresSource !== undefined) {
            postgres_1.PostgresSource.encode(message.postgresSource, writer.uint32(18).fork()).ldelim();
        }
        if (message.ydbSource !== undefined) {
            ydb_1.YdbSource.encode(message.ydbSource, writer.uint32(26).fork()).ldelim();
        }
        if (message.kafkaSource !== undefined) {
            kafka_1.KafkaSource.encode(message.kafkaSource, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongoSource !== undefined) {
            mongo_1.MongoSource.encode(message.mongoSource, writer.uint32(74).fork()).ldelim();
        }
        if (message.clickhouseSource !== undefined) {
            clickhouse_1.ClickhouseSource.encode(message.clickhouseSource, writer.uint32(130).fork()).ldelim();
        }
        if (message.mysqlTarget !== undefined) {
            mysql_1.MysqlTarget.encode(message.mysqlTarget, writer.uint32(810).fork()).ldelim();
        }
        if (message.postgresTarget !== undefined) {
            postgres_1.PostgresTarget.encode(message.postgresTarget, writer.uint32(818).fork()).ldelim();
        }
        if (message.clickhouseTarget !== undefined) {
            clickhouse_1.ClickhouseTarget.encode(message.clickhouseTarget, writer.uint32(834).fork()).ldelim();
        }
        if (message.ydbTarget !== undefined) {
            ydb_1.YdbTarget.encode(message.ydbTarget, writer.uint32(842).fork()).ldelim();
        }
        if (message.kafkaTarget !== undefined) {
            kafka_1.KafkaTarget.encode(message.kafkaTarget, writer.uint32(882).fork()).ldelim();
        }
        if (message.mongoTarget !== undefined) {
            mongo_1.MongoTarget.encode(message.mongoTarget, writer.uint32(890).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEndpointSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mysqlSource = mysql_1.MysqlSource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresSource = postgres_1.PostgresSource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ydbSource = ydb_1.YdbSource.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kafkaSource = kafka_1.KafkaSource.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.mongoSource = mongo_1.MongoSource.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.clickhouseSource = clickhouse_1.ClickhouseSource.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.mysqlTarget = mysql_1.MysqlTarget.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.postgresTarget = postgres_1.PostgresTarget.decode(reader, reader.uint32());
                    break;
                case 104:
                    message.clickhouseTarget = clickhouse_1.ClickhouseTarget.decode(reader, reader.uint32());
                    break;
                case 105:
                    message.ydbTarget = ydb_1.YdbTarget.decode(reader, reader.uint32());
                    break;
                case 110:
                    message.kafkaTarget = kafka_1.KafkaTarget.decode(reader, reader.uint32());
                    break;
                case 111:
                    message.mongoTarget = mongo_1.MongoTarget.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEndpointSettings);
        message.mysqlSource =
            object.mysqlSource !== undefined && object.mysqlSource !== null
                ? mysql_1.MysqlSource.fromJSON(object.mysqlSource)
                : undefined;
        message.postgresSource =
            object.postgresSource !== undefined && object.postgresSource !== null
                ? postgres_1.PostgresSource.fromJSON(object.postgresSource)
                : undefined;
        message.ydbSource =
            object.ydbSource !== undefined && object.ydbSource !== null
                ? ydb_1.YdbSource.fromJSON(object.ydbSource)
                : undefined;
        message.kafkaSource =
            object.kafkaSource !== undefined && object.kafkaSource !== null
                ? kafka_1.KafkaSource.fromJSON(object.kafkaSource)
                : undefined;
        message.mongoSource =
            object.mongoSource !== undefined && object.mongoSource !== null
                ? mongo_1.MongoSource.fromJSON(object.mongoSource)
                : undefined;
        message.clickhouseSource =
            object.clickhouseSource !== undefined && object.clickhouseSource !== null
                ? clickhouse_1.ClickhouseSource.fromJSON(object.clickhouseSource)
                : undefined;
        message.mysqlTarget =
            object.mysqlTarget !== undefined && object.mysqlTarget !== null
                ? mysql_1.MysqlTarget.fromJSON(object.mysqlTarget)
                : undefined;
        message.postgresTarget =
            object.postgresTarget !== undefined && object.postgresTarget !== null
                ? postgres_1.PostgresTarget.fromJSON(object.postgresTarget)
                : undefined;
        message.clickhouseTarget =
            object.clickhouseTarget !== undefined && object.clickhouseTarget !== null
                ? clickhouse_1.ClickhouseTarget.fromJSON(object.clickhouseTarget)
                : undefined;
        message.ydbTarget =
            object.ydbTarget !== undefined && object.ydbTarget !== null
                ? ydb_1.YdbTarget.fromJSON(object.ydbTarget)
                : undefined;
        message.kafkaTarget =
            object.kafkaTarget !== undefined && object.kafkaTarget !== null
                ? kafka_1.KafkaTarget.fromJSON(object.kafkaTarget)
                : undefined;
        message.mongoTarget =
            object.mongoTarget !== undefined && object.mongoTarget !== null
                ? mongo_1.MongoTarget.fromJSON(object.mongoTarget)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mysqlSource !== undefined &&
            (obj.mysqlSource = message.mysqlSource
                ? mysql_1.MysqlSource.toJSON(message.mysqlSource)
                : undefined);
        message.postgresSource !== undefined &&
            (obj.postgresSource = message.postgresSource
                ? postgres_1.PostgresSource.toJSON(message.postgresSource)
                : undefined);
        message.ydbSource !== undefined &&
            (obj.ydbSource = message.ydbSource
                ? ydb_1.YdbSource.toJSON(message.ydbSource)
                : undefined);
        message.kafkaSource !== undefined &&
            (obj.kafkaSource = message.kafkaSource
                ? kafka_1.KafkaSource.toJSON(message.kafkaSource)
                : undefined);
        message.mongoSource !== undefined &&
            (obj.mongoSource = message.mongoSource
                ? mongo_1.MongoSource.toJSON(message.mongoSource)
                : undefined);
        message.clickhouseSource !== undefined &&
            (obj.clickhouseSource = message.clickhouseSource
                ? clickhouse_1.ClickhouseSource.toJSON(message.clickhouseSource)
                : undefined);
        message.mysqlTarget !== undefined &&
            (obj.mysqlTarget = message.mysqlTarget
                ? mysql_1.MysqlTarget.toJSON(message.mysqlTarget)
                : undefined);
        message.postgresTarget !== undefined &&
            (obj.postgresTarget = message.postgresTarget
                ? postgres_1.PostgresTarget.toJSON(message.postgresTarget)
                : undefined);
        message.clickhouseTarget !== undefined &&
            (obj.clickhouseTarget = message.clickhouseTarget
                ? clickhouse_1.ClickhouseTarget.toJSON(message.clickhouseTarget)
                : undefined);
        message.ydbTarget !== undefined &&
            (obj.ydbTarget = message.ydbTarget
                ? ydb_1.YdbTarget.toJSON(message.ydbTarget)
                : undefined);
        message.kafkaTarget !== undefined &&
            (obj.kafkaTarget = message.kafkaTarget
                ? kafka_1.KafkaTarget.toJSON(message.kafkaTarget)
                : undefined);
        message.mongoTarget !== undefined &&
            (obj.mongoTarget = message.mongoTarget
                ? mongo_1.MongoTarget.toJSON(message.mongoTarget)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEndpointSettings);
        message.mysqlSource =
            object.mysqlSource !== undefined && object.mysqlSource !== null
                ? mysql_1.MysqlSource.fromPartial(object.mysqlSource)
                : undefined;
        message.postgresSource =
            object.postgresSource !== undefined && object.postgresSource !== null
                ? postgres_1.PostgresSource.fromPartial(object.postgresSource)
                : undefined;
        message.ydbSource =
            object.ydbSource !== undefined && object.ydbSource !== null
                ? ydb_1.YdbSource.fromPartial(object.ydbSource)
                : undefined;
        message.kafkaSource =
            object.kafkaSource !== undefined && object.kafkaSource !== null
                ? kafka_1.KafkaSource.fromPartial(object.kafkaSource)
                : undefined;
        message.mongoSource =
            object.mongoSource !== undefined && object.mongoSource !== null
                ? mongo_1.MongoSource.fromPartial(object.mongoSource)
                : undefined;
        message.clickhouseSource =
            object.clickhouseSource !== undefined && object.clickhouseSource !== null
                ? clickhouse_1.ClickhouseSource.fromPartial(object.clickhouseSource)
                : undefined;
        message.mysqlTarget =
            object.mysqlTarget !== undefined && object.mysqlTarget !== null
                ? mysql_1.MysqlTarget.fromPartial(object.mysqlTarget)
                : undefined;
        message.postgresTarget =
            object.postgresTarget !== undefined && object.postgresTarget !== null
                ? postgres_1.PostgresTarget.fromPartial(object.postgresTarget)
                : undefined;
        message.clickhouseTarget =
            object.clickhouseTarget !== undefined && object.clickhouseTarget !== null
                ? clickhouse_1.ClickhouseTarget.fromPartial(object.clickhouseTarget)
                : undefined;
        message.ydbTarget =
            object.ydbTarget !== undefined && object.ydbTarget !== null
                ? ydb_1.YdbTarget.fromPartial(object.ydbTarget)
                : undefined;
        message.kafkaTarget =
            object.kafkaTarget !== undefined && object.kafkaTarget !== null
                ? kafka_1.KafkaTarget.fromPartial(object.kafkaTarget)
                : undefined;
        message.mongoTarget =
            object.mongoTarget !== undefined && object.mongoTarget !== null
                ? mongo_1.MongoTarget.fromPartial(object.mongoTarget)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EndpointSettings.$type, exports.EndpointSettings);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
