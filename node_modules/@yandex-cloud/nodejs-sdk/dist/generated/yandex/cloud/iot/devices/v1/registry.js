"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStreamExport = exports.RegistryPassword = exports.DeviceAlias = exports.RegistryCertificate = exports.Registry_LabelsEntry = exports.Registry = exports.registry_StatusToJSON = exports.registry_StatusFromJSON = exports.Registry_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.iot.devices.v1";
var Registry_Status;
(function (Registry_Status) {
    Registry_Status[Registry_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Registry is being created. */
    Registry_Status[Registry_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Registry is ready to use. */
    Registry_Status[Registry_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Registry is being deleted. */
    Registry_Status[Registry_Status["DELETING"] = 3] = "DELETING";
    Registry_Status[Registry_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Registry_Status = exports.Registry_Status || (exports.Registry_Status = {}));
function registry_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Registry_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Registry_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Registry_Status.ACTIVE;
        case 3:
        case "DELETING":
            return Registry_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Registry_Status.UNRECOGNIZED;
    }
}
exports.registry_StatusFromJSON = registry_StatusFromJSON;
function registry_StatusToJSON(object) {
    switch (object) {
        case Registry_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Registry_Status.CREATING:
            return "CREATING";
        case Registry_Status.ACTIVE:
            return "ACTIVE";
        case Registry_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.registry_StatusToJSON = registry_StatusToJSON;
const baseRegistry = {
    $type: "yandex.cloud.iot.devices.v1.Registry",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    logGroupId: "",
};
exports.Registry = {
    $type: "yandex.cloud.iot.devices.v1.Registry",
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
            exports.Registry_LabelsEntry.encode({
                $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.logGroupId !== "") {
            writer.uint32(66).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegistry);
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
                    const entry6 = exports.Registry_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.logGroupId = reader.string();
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
        const message = Object.assign({}, baseRegistry);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? registry_StatusFromJSON(object.status)
                : 0;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
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
        message.status !== undefined &&
            (obj.status = registry_StatusToJSON(message.status));
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseRegistry);
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
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.logGroupId = (_h = object.logGroupId) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Registry.$type, exports.Registry);
const baseRegistry_LabelsEntry = {
    $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry",
    key: "",
    value: "",
};
exports.Registry_LabelsEntry = {
    $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry",
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
        const message = Object.assign({}, baseRegistry_LabelsEntry);
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
        const message = Object.assign({}, baseRegistry_LabelsEntry);
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
        const message = Object.assign({}, baseRegistry_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Registry_LabelsEntry.$type, exports.Registry_LabelsEntry);
const baseRegistryCertificate = {
    $type: "yandex.cloud.iot.devices.v1.RegistryCertificate",
    registryId: "",
    fingerprint: "",
    certificateData: "",
};
exports.RegistryCertificate = {
    $type: "yandex.cloud.iot.devices.v1.RegistryCertificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(18).string(message.fingerprint);
        }
        if (message.certificateData !== "") {
            writer.uint32(26).string(message.certificateData);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegistryCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegistryCertificate);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.fingerprint =
            object.fingerprint !== undefined && object.fingerprint !== null
                ? String(object.fingerprint)
                : "";
        message.certificateData =
            object.certificateData !== undefined && object.certificateData !== null
                ? String(object.certificateData)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRegistryCertificate);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        message.certificateData = (_c = object.certificateData) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegistryCertificate.$type, exports.RegistryCertificate);
const baseDeviceAlias = {
    $type: "yandex.cloud.iot.devices.v1.DeviceAlias",
    deviceId: "",
    topicPrefix: "",
    alias: "",
};
exports.DeviceAlias = {
    $type: "yandex.cloud.iot.devices.v1.DeviceAlias",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.topicPrefix !== "") {
            writer.uint32(18).string(message.topicPrefix);
        }
        if (message.alias !== "") {
            writer.uint32(26).string(message.alias);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeviceAlias);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.topicPrefix = reader.string();
                    break;
                case 3:
                    message.alias = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeviceAlias);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
                : "";
        message.topicPrefix =
            object.topicPrefix !== undefined && object.topicPrefix !== null
                ? String(object.topicPrefix)
                : "";
        message.alias =
            object.alias !== undefined && object.alias !== null
                ? String(object.alias)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.topicPrefix !== undefined &&
            (obj.topicPrefix = message.topicPrefix);
        message.alias !== undefined && (obj.alias = message.alias);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDeviceAlias);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.topicPrefix = (_b = object.topicPrefix) !== null && _b !== void 0 ? _b : "";
        message.alias = (_c = object.alias) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeviceAlias.$type, exports.DeviceAlias);
const baseRegistryPassword = {
    $type: "yandex.cloud.iot.devices.v1.RegistryPassword",
    registryId: "",
    id: "",
};
exports.RegistryPassword = {
    $type: "yandex.cloud.iot.devices.v1.RegistryPassword",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== "") {
            writer.uint32(10).string(message.registryId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegistryPassword);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegistryPassword);
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRegistryPassword);
        message.registryId = (_a = object.registryId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegistryPassword.$type, exports.RegistryPassword);
const baseDataStreamExport = {
    $type: "yandex.cloud.iot.devices.v1.DataStreamExport",
    id: "",
    name: "",
    registryId: "",
    mqttTopicFilter: "",
    database: "",
    stream: "",
    serviceAccountId: "",
};
exports.DataStreamExport = {
    $type: "yandex.cloud.iot.devices.v1.DataStreamExport",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.registryId !== "") {
            writer.uint32(26).string(message.registryId);
        }
        if (message.mqttTopicFilter !== "") {
            writer.uint32(34).string(message.mqttTopicFilter);
        }
        if (message.database !== "") {
            writer.uint32(42).string(message.database);
        }
        if (message.stream !== "") {
            writer.uint32(50).string(message.stream);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataStreamExport);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.registryId = reader.string();
                    break;
                case 4:
                    message.mqttTopicFilter = reader.string();
                    break;
                case 5:
                    message.database = reader.string();
                    break;
                case 6:
                    message.stream = reader.string();
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDataStreamExport);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
                : "";
        message.mqttTopicFilter =
            object.mqttTopicFilter !== undefined && object.mqttTopicFilter !== null
                ? String(object.mqttTopicFilter)
                : "";
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? String(object.stream)
                : "";
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.mqttTopicFilter !== undefined &&
            (obj.mqttTopicFilter = message.mqttTopicFilter);
        message.database !== undefined && (obj.database = message.database);
        message.stream !== undefined && (obj.stream = message.stream);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseDataStreamExport);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.registryId = (_c = object.registryId) !== null && _c !== void 0 ? _c : "";
        message.mqttTopicFilter = (_d = object.mqttTopicFilter) !== null && _d !== void 0 ? _d : "";
        message.database = (_e = object.database) !== null && _e !== void 0 ? _e : "";
        message.stream = (_f = object.stream) !== null && _f !== void 0 ? _f : "";
        message.serviceAccountId = (_g = object.serviceAccountId) !== null && _g !== void 0 ? _g : "";
        message.createdAt = (_h = object.createdAt) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DataStreamExport.$type, exports.DataStreamExport);
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
