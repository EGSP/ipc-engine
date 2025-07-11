"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target_ClickHouse = exports.Target_PostgreSQL = exports.Target = exports.Proxy_LabelsEntry = exports.Proxy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
const baseProxy = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy",
    id: "",
    folderId: "",
    name: "",
    description: "",
};
exports.Proxy = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Proxy_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.target !== undefined) {
            exports.Target.encode(message.target, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProxy);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Proxy_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.target = exports.Target.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseProxy);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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
        message.target =
            object.target !== undefined && object.target !== null
                ? exports.Target.fromJSON(object.target)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        message.target !== undefined &&
            (obj.target = message.target ? exports.Target.toJSON(message.target) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseProxy);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.target =
            object.target !== undefined && object.target !== null
                ? exports.Target.fromPartial(object.target)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Proxy.$type, exports.Proxy);
const baseProxy_LabelsEntry = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry",
    key: "",
    value: "",
};
exports.Proxy_LabelsEntry = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Proxy.LabelsEntry",
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
        const message = Object.assign({}, baseProxy_LabelsEntry);
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
        const message = Object.assign({}, baseProxy_LabelsEntry);
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
        const message = Object.assign({}, baseProxy_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Proxy_LabelsEntry.$type, exports.Proxy_LabelsEntry);
const baseTarget = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target",
};
exports.Target = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clickhouse !== undefined) {
            exports.Target_ClickHouse.encode(message.clickhouse, writer.uint32(10).fork()).ldelim();
        }
        if (message.postgresql !== undefined) {
            exports.Target_PostgreSQL.encode(message.postgresql, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTarget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clickhouse = exports.Target_ClickHouse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.postgresql = exports.Target_PostgreSQL.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTarget);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.Target_ClickHouse.fromJSON(object.clickhouse)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? exports.Target_PostgreSQL.fromJSON(object.postgresql)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clickhouse !== undefined &&
            (obj.clickhouse = message.clickhouse
                ? exports.Target_ClickHouse.toJSON(message.clickhouse)
                : undefined);
        message.postgresql !== undefined &&
            (obj.postgresql = message.postgresql
                ? exports.Target_PostgreSQL.toJSON(message.postgresql)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTarget);
        message.clickhouse =
            object.clickhouse !== undefined && object.clickhouse !== null
                ? exports.Target_ClickHouse.fromPartial(object.clickhouse)
                : undefined;
        message.postgresql =
            object.postgresql !== undefined && object.postgresql !== null
                ? exports.Target_PostgreSQL.fromPartial(object.postgresql)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Target.$type, exports.Target);
const baseTarget_PostgreSQL = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL",
    clusterId: "",
    user: "",
    password: "",
    db: "",
    endpoint: "",
};
exports.Target_PostgreSQL = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.PostgreSQL",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== "") {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== "") {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== "") {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTarget_PostgreSQL);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTarget_PostgreSQL);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseTarget_PostgreSQL);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.user = (_b = object.user) !== null && _b !== void 0 ? _b : "";
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        message.db = (_d = object.db) !== null && _d !== void 0 ? _d : "";
        message.endpoint = (_e = object.endpoint) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Target_PostgreSQL.$type, exports.Target_PostgreSQL);
const baseTarget_ClickHouse = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse",
    clusterId: "",
    user: "",
    password: "",
    db: "",
    endpoint: "",
};
exports.Target_ClickHouse = {
    $type: "yandex.cloud.serverless.mdbproxy.v1.Target.ClickHouse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.user !== "") {
            writer.uint32(18).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        if (message.db !== "") {
            writer.uint32(34).string(message.db);
        }
        if (message.endpoint !== "") {
            writer.uint32(42).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTarget_ClickHouse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.user = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.db = reader.string();
                    break;
                case 5:
                    message.endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTarget_ClickHouse);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.db !== undefined && (obj.db = message.db);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseTarget_ClickHouse);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.user = (_b = object.user) !== null && _b !== void 0 ? _b : "";
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        message.db = (_d = object.db) !== null && _d !== void 0 ? _d : "";
        message.endpoint = (_e = object.endpoint) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Target_ClickHouse.$type, exports.Target_ClickHouse);
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
