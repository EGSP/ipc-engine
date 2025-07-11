"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMonitoringData = exports.DevicePassword = exports.DeviceCertificate = exports.Device_TopicAliasesEntry = exports.Device = exports.device_StatusToJSON = exports.device_StatusFromJSON = exports.Device_Status = exports.deviceViewToJSON = exports.deviceViewFromJSON = exports.DeviceView = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.iot.devices.v1";
var DeviceView;
(function (DeviceView) {
    /**
     * BASIC - Server responses without monitoring data.
     * The default value.
     */
    DeviceView[DeviceView["BASIC"] = 0] = "BASIC";
    /** FULL - Server responses with monitoring data. */
    DeviceView[DeviceView["FULL"] = 1] = "FULL";
    DeviceView[DeviceView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DeviceView = exports.DeviceView || (exports.DeviceView = {}));
function deviceViewFromJSON(object) {
    switch (object) {
        case 0:
        case "BASIC":
            return DeviceView.BASIC;
        case 1:
        case "FULL":
            return DeviceView.FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DeviceView.UNRECOGNIZED;
    }
}
exports.deviceViewFromJSON = deviceViewFromJSON;
function deviceViewToJSON(object) {
    switch (object) {
        case DeviceView.BASIC:
            return "BASIC";
        case DeviceView.FULL:
            return "FULL";
        default:
            return "UNKNOWN";
    }
}
exports.deviceViewToJSON = deviceViewToJSON;
var Device_Status;
(function (Device_Status) {
    Device_Status[Device_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Device is being created. */
    Device_Status[Device_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Device is ready to use. */
    Device_Status[Device_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Device is being deleted. */
    Device_Status[Device_Status["DELETING"] = 3] = "DELETING";
    Device_Status[Device_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Device_Status = exports.Device_Status || (exports.Device_Status = {}));
function device_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Device_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Device_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Device_Status.ACTIVE;
        case 3:
        case "DELETING":
            return Device_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Device_Status.UNRECOGNIZED;
    }
}
exports.device_StatusFromJSON = device_StatusFromJSON;
function device_StatusToJSON(object) {
    switch (object) {
        case Device_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Device_Status.CREATING:
            return "CREATING";
        case Device_Status.ACTIVE:
            return "ACTIVE";
        case Device_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.device_StatusToJSON = device_StatusToJSON;
const baseDevice = {
    $type: "yandex.cloud.iot.devices.v1.Device",
    id: "",
    registryId: "",
    name: "",
    description: "",
    status: 0,
};
exports.Device = {
    $type: "yandex.cloud.iot.devices.v1.Device",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.registryId !== "") {
            writer.uint32(18).string(message.registryId);
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
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.Device_TopicAliasesEntry.encode({
                $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.monitoringData !== undefined) {
            exports.DeviceMonitoringData.encode(message.monitoringData, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDevice);
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.registryId = reader.string();
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
                    const entry6 = exports.Device_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.topicAliases[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.monitoringData = exports.DeviceMonitoringData.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseDevice);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.registryId =
            object.registryId !== undefined && object.registryId !== null
                ? String(object.registryId)
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
        message.topicAliases = Object.entries((_a = object.topicAliases) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.status =
            object.status !== undefined && object.status !== null
                ? device_StatusFromJSON(object.status)
                : 0;
        message.monitoringData =
            object.monitoringData !== undefined && object.monitoringData !== null
                ? exports.DeviceMonitoringData.fromJSON(object.monitoringData)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.registryId !== undefined && (obj.registryId = message.registryId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = device_StatusToJSON(message.status));
        message.monitoringData !== undefined &&
            (obj.monitoringData = message.monitoringData
                ? exports.DeviceMonitoringData.toJSON(message.monitoringData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseDevice);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.registryId = (_b = object.registryId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.topicAliases = Object.entries((_f = object.topicAliases) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.monitoringData =
            object.monitoringData !== undefined && object.monitoringData !== null
                ? exports.DeviceMonitoringData.fromPartial(object.monitoringData)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Device.$type, exports.Device);
const baseDevice_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry",
    key: "",
    value: "",
};
exports.Device_TopicAliasesEntry = {
    $type: "yandex.cloud.iot.devices.v1.Device.TopicAliasesEntry",
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
        const message = Object.assign({}, baseDevice_TopicAliasesEntry);
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
        const message = Object.assign({}, baseDevice_TopicAliasesEntry);
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
        const message = Object.assign({}, baseDevice_TopicAliasesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Device_TopicAliasesEntry.$type, exports.Device_TopicAliasesEntry);
const baseDeviceCertificate = {
    $type: "yandex.cloud.iot.devices.v1.DeviceCertificate",
    deviceId: "",
    fingerprint: "",
    certificateData: "",
};
exports.DeviceCertificate = {
    $type: "yandex.cloud.iot.devices.v1.DeviceCertificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
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
        const message = Object.assign({}, baseDeviceCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
        const message = Object.assign({}, baseDeviceCertificate);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
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
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
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
        const message = Object.assign({}, baseDeviceCertificate);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        message.certificateData = (_c = object.certificateData) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeviceCertificate.$type, exports.DeviceCertificate);
const baseDevicePassword = {
    $type: "yandex.cloud.iot.devices.v1.DevicePassword",
    deviceId: "",
    id: "",
};
exports.DevicePassword = {
    $type: "yandex.cloud.iot.devices.v1.DevicePassword",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== "") {
            writer.uint32(10).string(message.deviceId);
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
        const message = Object.assign({}, baseDevicePassword);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
        const message = Object.assign({}, baseDevicePassword);
        message.deviceId =
            object.deviceId !== undefined && object.deviceId !== null
                ? String(object.deviceId)
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
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDevicePassword);
        message.deviceId = (_a = object.deviceId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DevicePassword.$type, exports.DevicePassword);
const baseDeviceMonitoringData = {
    $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData",
    lastAuthIp: "",
};
exports.DeviceMonitoringData = {
    $type: "yandex.cloud.iot.devices.v1.DeviceMonitoringData",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastAuthIp !== "") {
            writer.uint32(10).string(message.lastAuthIp);
        }
        if (message.lastAuthTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastAuthTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastPubActivityTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastPubActivityTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.lastSubActivityTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastSubActivityTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastOnlineTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastOnlineTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeviceMonitoringData);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastAuthIp = reader.string();
                    break;
                case 2:
                    message.lastAuthTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastPubActivityTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastSubActivityTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastOnlineTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeviceMonitoringData);
        message.lastAuthIp =
            object.lastAuthIp !== undefined && object.lastAuthIp !== null
                ? String(object.lastAuthIp)
                : "";
        message.lastAuthTime =
            object.lastAuthTime !== undefined && object.lastAuthTime !== null
                ? fromJsonTimestamp(object.lastAuthTime)
                : undefined;
        message.lastPubActivityTime =
            object.lastPubActivityTime !== undefined &&
                object.lastPubActivityTime !== null
                ? fromJsonTimestamp(object.lastPubActivityTime)
                : undefined;
        message.lastSubActivityTime =
            object.lastSubActivityTime !== undefined &&
                object.lastSubActivityTime !== null
                ? fromJsonTimestamp(object.lastSubActivityTime)
                : undefined;
        message.lastOnlineTime =
            object.lastOnlineTime !== undefined && object.lastOnlineTime !== null
                ? fromJsonTimestamp(object.lastOnlineTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lastAuthIp !== undefined && (obj.lastAuthIp = message.lastAuthIp);
        message.lastAuthTime !== undefined &&
            (obj.lastAuthTime = message.lastAuthTime.toISOString());
        message.lastPubActivityTime !== undefined &&
            (obj.lastPubActivityTime = message.lastPubActivityTime.toISOString());
        message.lastSubActivityTime !== undefined &&
            (obj.lastSubActivityTime = message.lastSubActivityTime.toISOString());
        message.lastOnlineTime !== undefined &&
            (obj.lastOnlineTime = message.lastOnlineTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseDeviceMonitoringData);
        message.lastAuthIp = (_a = object.lastAuthIp) !== null && _a !== void 0 ? _a : "";
        message.lastAuthTime = (_b = object.lastAuthTime) !== null && _b !== void 0 ? _b : undefined;
        message.lastPubActivityTime = (_c = object.lastPubActivityTime) !== null && _c !== void 0 ? _c : undefined;
        message.lastSubActivityTime = (_d = object.lastSubActivityTime) !== null && _d !== void 0 ? _d : undefined;
        message.lastOnlineTime = (_e = object.lastOnlineTime) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeviceMonitoringData.$type, exports.DeviceMonitoringData);
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
