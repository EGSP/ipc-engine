"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickhouseTarget = exports.ClickhouseSource = exports.ClickhouseSharding_ColumnValueMapping_ValueToShard = exports.ClickhouseSharding_ColumnValueMapping = exports.ClickhouseSharding_ColumnValueHash = exports.ClickhouseSharding = exports.ClickhouseConnection = exports.ClickhouseConnectionOptions = exports.OnPremiseClickhouse = exports.ClickhouseShard = exports.clickhouseCleanupPolicyToJSON = exports.clickhouseCleanupPolicyFromJSON = exports.ClickhouseCleanupPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
const empty_1 = require("../../../../../google/protobuf/empty");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
var ClickhouseCleanupPolicy;
(function (ClickhouseCleanupPolicy) {
    ClickhouseCleanupPolicy[ClickhouseCleanupPolicy["CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED";
    ClickhouseCleanupPolicy[ClickhouseCleanupPolicy["CLICKHOUSE_CLEANUP_POLICY_DISABLED"] = 1] = "CLICKHOUSE_CLEANUP_POLICY_DISABLED";
    ClickhouseCleanupPolicy[ClickhouseCleanupPolicy["CLICKHOUSE_CLEANUP_POLICY_DROP"] = 2] = "CLICKHOUSE_CLEANUP_POLICY_DROP";
    ClickhouseCleanupPolicy[ClickhouseCleanupPolicy["CLICKHOUSE_CLEANUP_POLICY_TRUNCATE"] = 3] = "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE";
    ClickhouseCleanupPolicy[ClickhouseCleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseCleanupPolicy = exports.ClickhouseCleanupPolicy || (exports.ClickhouseCleanupPolicy = {}));
function clickhouseCleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED":
            return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "CLICKHOUSE_CLEANUP_POLICY_DISABLED":
            return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED;
        case 2:
        case "CLICKHOUSE_CLEANUP_POLICY_DROP":
            return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP;
        case 3:
        case "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE":
            return ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseCleanupPolicy.UNRECOGNIZED;
    }
}
exports.clickhouseCleanupPolicyFromJSON = clickhouseCleanupPolicyFromJSON;
function clickhouseCleanupPolicyToJSON(object) {
    switch (object) {
        case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED:
            return "CLICKHOUSE_CLEANUP_POLICY_UNSPECIFIED";
        case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DISABLED:
            return "CLICKHOUSE_CLEANUP_POLICY_DISABLED";
        case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_DROP:
            return "CLICKHOUSE_CLEANUP_POLICY_DROP";
        case ClickhouseCleanupPolicy.CLICKHOUSE_CLEANUP_POLICY_TRUNCATE:
            return "CLICKHOUSE_CLEANUP_POLICY_TRUNCATE";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseCleanupPolicyToJSON = clickhouseCleanupPolicyToJSON;
const baseClickhouseShard = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard",
    name: "",
    hosts: "",
};
exports.ClickhouseShard = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseShard",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.hosts) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseShard);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.hosts.push(reader.string());
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
        const message = Object.assign({}, baseClickhouseShard);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        }
        else {
            obj.hosts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseShard);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.hosts = ((_b = object.hosts) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseShard.$type, exports.ClickhouseShard);
const baseOnPremiseClickhouse = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse",
    httpPort: 0,
    nativePort: 0,
};
exports.OnPremiseClickhouse = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseClickhouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.shards) {
            exports.ClickhouseShard.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.httpPort !== 0) {
            writer.uint32(24).int64(message.httpPort);
        }
        if (message.nativePort !== 0) {
            writer.uint32(32).int64(message.nativePort);
        }
        if (message.tlsMode !== undefined) {
            common_1.TLSMode.encode(message.tlsMode, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOnPremiseClickhouse);
        message.shards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shards.push(exports.ClickhouseShard.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.httpPort = longToNumber(reader.int64());
                    break;
                case 4:
                    message.nativePort = longToNumber(reader.int64());
                    break;
                case 8:
                    message.tlsMode = common_1.TLSMode.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseOnPremiseClickhouse);
        message.shards = ((_a = object.shards) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseShard.fromJSON(e));
        message.httpPort =
            object.httpPort !== undefined && object.httpPort !== null
                ? Number(object.httpPort)
                : 0;
        message.nativePort =
            object.nativePort !== undefined && object.nativePort !== null
                ? Number(object.nativePort)
                : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromJSON(object.tlsMode)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.shards) {
            obj.shards = message.shards.map((e) => e ? exports.ClickhouseShard.toJSON(e) : undefined);
        }
        else {
            obj.shards = [];
        }
        message.httpPort !== undefined &&
            (obj.httpPort = Math.round(message.httpPort));
        message.nativePort !== undefined &&
            (obj.nativePort = Math.round(message.nativePort));
        message.tlsMode !== undefined &&
            (obj.tlsMode = message.tlsMode
                ? common_1.TLSMode.toJSON(message.tlsMode)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOnPremiseClickhouse);
        message.shards =
            ((_a = object.shards) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ClickhouseShard.fromPartial(e))) || [];
        message.httpPort = (_b = object.httpPort) !== null && _b !== void 0 ? _b : 0;
        message.nativePort = (_c = object.nativePort) !== null && _c !== void 0 ? _c : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromPartial(object.tlsMode)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OnPremiseClickhouse.$type, exports.OnPremiseClickhouse);
const baseClickhouseConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions",
    database: "",
    user: "",
};
exports.ClickhouseConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnectionOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mdbClusterId !== undefined) {
            writer.uint32(42).string(message.mdbClusterId);
        }
        if (message.onPremise !== undefined) {
            exports.OnPremiseClickhouse.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        if (message.database !== "") {
            writer.uint32(66).string(message.database);
        }
        if (message.user !== "") {
            writer.uint32(50).string(message.user);
        }
        if (message.password !== undefined) {
            common_1.Secret.encode(message.password, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConnectionOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.mdbClusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = exports.OnPremiseClickhouse.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.database = reader.string();
                    break;
                case 6:
                    message.user = reader.string();
                    break;
                case 7:
                    message.password = common_1.Secret.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConnectionOptions);
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseClickhouse.fromJSON(object.onPremise)
                : undefined;
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromJSON(object.password)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mdbClusterId !== undefined &&
            (obj.mdbClusterId = message.mdbClusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? exports.OnPremiseClickhouse.toJSON(message.onPremise)
                : undefined);
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password
                ? common_1.Secret.toJSON(message.password)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClickhouseConnectionOptions);
        message.mdbClusterId = (_a = object.mdbClusterId) !== null && _a !== void 0 ? _a : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseClickhouse.fromPartial(object.onPremise)
                : undefined;
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.user = (_c = object.user) !== null && _c !== void 0 ? _c : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConnectionOptions.$type, exports.ClickhouseConnectionOptions);
const baseClickhouseConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection",
};
exports.ClickhouseConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionOptions !== undefined) {
            exports.ClickhouseConnectionOptions.encode(message.connectionOptions, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionOptions = exports.ClickhouseConnectionOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConnection);
        message.connectionOptions =
            object.connectionOptions !== undefined &&
                object.connectionOptions !== null
                ? exports.ClickhouseConnectionOptions.fromJSON(object.connectionOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionOptions !== undefined &&
            (obj.connectionOptions = message.connectionOptions
                ? exports.ClickhouseConnectionOptions.toJSON(message.connectionOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClickhouseConnection);
        message.connectionOptions =
            object.connectionOptions !== undefined &&
                object.connectionOptions !== null
                ? exports.ClickhouseConnectionOptions.fromPartial(object.connectionOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConnection.$type, exports.ClickhouseConnection);
const baseClickhouseSharding = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding",
};
exports.ClickhouseSharding = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.columnValueHash !== undefined) {
            exports.ClickhouseSharding_ColumnValueHash.encode(message.columnValueHash, writer.uint32(10).fork()).ldelim();
        }
        if (message.customMapping !== undefined) {
            exports.ClickhouseSharding_ColumnValueMapping.encode(message.customMapping, writer.uint32(18).fork()).ldelim();
        }
        if (message.transferId !== undefined) {
            empty_1.Empty.encode(message.transferId, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseSharding);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.columnValueHash = exports.ClickhouseSharding_ColumnValueHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.customMapping = exports.ClickhouseSharding_ColumnValueMapping.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transferId = empty_1.Empty.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseSharding);
        message.columnValueHash =
            object.columnValueHash !== undefined && object.columnValueHash !== null
                ? exports.ClickhouseSharding_ColumnValueHash.fromJSON(object.columnValueHash)
                : undefined;
        message.customMapping =
            object.customMapping !== undefined && object.customMapping !== null
                ? exports.ClickhouseSharding_ColumnValueMapping.fromJSON(object.customMapping)
                : undefined;
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? empty_1.Empty.fromJSON(object.transferId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.columnValueHash !== undefined &&
            (obj.columnValueHash = message.columnValueHash
                ? exports.ClickhouseSharding_ColumnValueHash.toJSON(message.columnValueHash)
                : undefined);
        message.customMapping !== undefined &&
            (obj.customMapping = message.customMapping
                ? exports.ClickhouseSharding_ColumnValueMapping.toJSON(message.customMapping)
                : undefined);
        message.transferId !== undefined &&
            (obj.transferId = message.transferId
                ? empty_1.Empty.toJSON(message.transferId)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClickhouseSharding);
        message.columnValueHash =
            object.columnValueHash !== undefined && object.columnValueHash !== null
                ? exports.ClickhouseSharding_ColumnValueHash.fromPartial(object.columnValueHash)
                : undefined;
        message.customMapping =
            object.customMapping !== undefined && object.customMapping !== null
                ? exports.ClickhouseSharding_ColumnValueMapping.fromPartial(object.customMapping)
                : undefined;
        message.transferId =
            object.transferId !== undefined && object.transferId !== null
                ? empty_1.Empty.fromPartial(object.transferId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseSharding.$type, exports.ClickhouseSharding);
const baseClickhouseSharding_ColumnValueHash = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash",
    columnName: "",
};
exports.ClickhouseSharding_ColumnValueHash = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueHash",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.columnName !== "") {
            writer.uint32(10).string(message.columnName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueHash);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.columnName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueHash);
        message.columnName =
            object.columnName !== undefined && object.columnName !== null
                ? String(object.columnName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.columnName !== undefined && (obj.columnName = message.columnName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueHash);
        message.columnName = (_a = object.columnName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseSharding_ColumnValueHash.$type, exports.ClickhouseSharding_ColumnValueHash);
const baseClickhouseSharding_ColumnValueMapping = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping",
    columnName: "",
};
exports.ClickhouseSharding_ColumnValueMapping = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.columnName !== "") {
            writer.uint32(10).string(message.columnName);
        }
        for (const v of message.mapping) {
            exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping);
        message.mapping = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.columnName = reader.string();
                    break;
                case 2:
                    message.mapping.push(exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping);
        message.columnName =
            object.columnName !== undefined && object.columnName !== null
                ? String(object.columnName)
                : "";
        message.mapping = ((_a = object.mapping) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.columnName !== undefined && (obj.columnName = message.columnName);
        if (message.mapping) {
            obj.mapping = message.mapping.map((e) => e
                ? exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.toJSON(e)
                : undefined);
        }
        else {
            obj.mapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping);
        message.columnName = (_a = object.columnName) !== null && _a !== void 0 ? _a : "";
        message.mapping =
            ((_b = object.mapping) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseSharding_ColumnValueMapping.$type, exports.ClickhouseSharding_ColumnValueMapping);
const baseClickhouseSharding_ColumnValueMapping_ValueToShard = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard",
    shardName: "",
};
exports.ClickhouseSharding_ColumnValueMapping_ValueToShard = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSharding.ColumnValueMapping.ValueToShard",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.columnValue !== undefined) {
            common_1.ColumnValue.encode(message.columnValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.shardName !== "") {
            writer.uint32(18).string(message.shardName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping_ValueToShard);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.columnValue = common_1.ColumnValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.shardName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping_ValueToShard);
        message.columnValue =
            object.columnValue !== undefined && object.columnValue !== null
                ? common_1.ColumnValue.fromJSON(object.columnValue)
                : undefined;
        message.shardName =
            object.shardName !== undefined && object.shardName !== null
                ? String(object.shardName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.columnValue !== undefined &&
            (obj.columnValue = message.columnValue
                ? common_1.ColumnValue.toJSON(message.columnValue)
                : undefined);
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseSharding_ColumnValueMapping_ValueToShard);
        message.columnValue =
            object.columnValue !== undefined && object.columnValue !== null
                ? common_1.ColumnValue.fromPartial(object.columnValue)
                : undefined;
        message.shardName = (_a = object.shardName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseSharding_ColumnValueMapping_ValueToShard.$type, exports.ClickhouseSharding_ColumnValueMapping_ValueToShard);
const baseClickhouseSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource",
    subnetId: "",
    securityGroups: "",
    includeTables: "",
    excludeTables: "",
};
exports.ClickhouseSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.ClickhouseConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(74).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(82).string(v);
        }
        for (const v of message.includeTables) {
            writer.uint32(58).string(v);
        }
        for (const v of message.excludeTables) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseSource);
        message.securityGroups = [];
        message.includeTables = [];
        message.excludeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.ClickhouseConnection.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.subnetId = reader.string();
                    break;
                case 10:
                    message.securityGroups.push(reader.string());
                    break;
                case 7:
                    message.includeTables.push(reader.string());
                    break;
                case 8:
                    message.excludeTables.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClickhouseSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ClickhouseConnection.fromJSON(object.connection)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.includeTables = ((_b = object.includeTables) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.excludeTables = ((_c = object.excludeTables) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ClickhouseConnection.toJSON(message.connection)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        if (message.includeTables) {
            obj.includeTables = message.includeTables.map((e) => e);
        }
        else {
            obj.includeTables = [];
        }
        if (message.excludeTables) {
            obj.excludeTables = message.excludeTables.map((e) => e);
        }
        else {
            obj.excludeTables = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseClickhouseSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ClickhouseConnection.fromPartial(object.connection)
                : undefined;
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.securityGroups = ((_b = object.securityGroups) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.includeTables = ((_c = object.includeTables) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.excludeTables = ((_d = object.excludeTables) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseSource.$type, exports.ClickhouseSource);
const baseClickhouseTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget",
    subnetId: "",
    securityGroups: "",
    clickhouseClusterName: "",
    cleanupPolicy: 0,
};
exports.ClickhouseTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ClickhouseTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.ClickhouseConnection.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(98).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(410).string(v);
        }
        if (message.clickhouseClusterName !== "") {
            writer.uint32(402).string(message.clickhouseClusterName);
        }
        for (const v of message.altNames) {
            common_1.AltName.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.sharding !== undefined) {
            exports.ClickhouseSharding.encode(message.sharding, writer.uint32(178).fork()).ldelim();
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(168).int32(message.cleanupPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseTarget);
        message.securityGroups = [];
        message.altNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.connection = exports.ClickhouseConnection.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.subnetId = reader.string();
                    break;
                case 51:
                    message.securityGroups.push(reader.string());
                    break;
                case 50:
                    message.clickhouseClusterName = reader.string();
                    break;
                case 17:
                    message.altNames.push(common_1.AltName.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.sharding = exports.ClickhouseSharding.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.cleanupPolicy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ClickhouseConnection.fromJSON(object.connection)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.clickhouseClusterName =
            object.clickhouseClusterName !== undefined &&
                object.clickhouseClusterName !== null
                ? String(object.clickhouseClusterName)
                : "";
        message.altNames = ((_b = object.altNames) !== null && _b !== void 0 ? _b : []).map((e) => common_1.AltName.fromJSON(e));
        message.sharding =
            object.sharding !== undefined && object.sharding !== null
                ? exports.ClickhouseSharding.fromJSON(object.sharding)
                : undefined;
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? clickhouseCleanupPolicyFromJSON(object.cleanupPolicy)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ClickhouseConnection.toJSON(message.connection)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.clickhouseClusterName !== undefined &&
            (obj.clickhouseClusterName = message.clickhouseClusterName);
        if (message.altNames) {
            obj.altNames = message.altNames.map((e) => e ? common_1.AltName.toJSON(e) : undefined);
        }
        else {
            obj.altNames = [];
        }
        message.sharding !== undefined &&
            (obj.sharding = message.sharding
                ? exports.ClickhouseSharding.toJSON(message.sharding)
                : undefined);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = clickhouseCleanupPolicyToJSON(message.cleanupPolicy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseClickhouseTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ClickhouseConnection.fromPartial(object.connection)
                : undefined;
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.securityGroups = ((_b = object.securityGroups) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.clickhouseClusterName = (_c = object.clickhouseClusterName) !== null && _c !== void 0 ? _c : "";
        message.altNames =
            ((_d = object.altNames) === null || _d === void 0 ? void 0 : _d.map((e) => common_1.AltName.fromPartial(e))) || [];
        message.sharding =
            object.sharding !== undefined && object.sharding !== null
                ? exports.ClickhouseSharding.fromPartial(object.sharding)
                : undefined;
        message.cleanupPolicy = (_e = object.cleanupPolicy) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseTarget.$type, exports.ClickhouseTarget);
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
