"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerPassword = exports.BrokerCertificate = exports.Broker_LabelsEntry = exports.Broker = exports.broker_StatusToJSON = exports.broker_StatusFromJSON = exports.Broker_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.iot.broker.v1";
var Broker_Status;
(function (Broker_Status) {
    Broker_Status[Broker_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Broker is being created. */
    Broker_Status[Broker_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Broker is ready to use. */
    Broker_Status[Broker_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Broker is being deleted. */
    Broker_Status[Broker_Status["DELETING"] = 3] = "DELETING";
    Broker_Status[Broker_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Broker_Status = exports.Broker_Status || (exports.Broker_Status = {}));
function broker_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Broker_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Broker_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Broker_Status.ACTIVE;
        case 3:
        case "DELETING":
            return Broker_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Broker_Status.UNRECOGNIZED;
    }
}
exports.broker_StatusFromJSON = broker_StatusFromJSON;
function broker_StatusToJSON(object) {
    switch (object) {
        case Broker_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Broker_Status.CREATING:
            return "CREATING";
        case Broker_Status.ACTIVE:
            return "ACTIVE";
        case Broker_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.broker_StatusToJSON = broker_StatusToJSON;
const baseBroker = {
    $type: "yandex.cloud.iot.broker.v1.Broker",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
};
exports.Broker = {
    $type: "yandex.cloud.iot.broker.v1.Broker",
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
            exports.Broker_LabelsEntry.encode({
                $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBroker);
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
                    const entry6 = exports.Broker_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
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
        const message = Object.assign({}, baseBroker);
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
                ? broker_StatusFromJSON(object.status)
                : 0;
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
            (obj.status = broker_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseBroker);
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Broker.$type, exports.Broker);
const baseBroker_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry",
    key: "",
    value: "",
};
exports.Broker_LabelsEntry = {
    $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry",
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
        const message = Object.assign({}, baseBroker_LabelsEntry);
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
        const message = Object.assign({}, baseBroker_LabelsEntry);
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
        const message = Object.assign({}, baseBroker_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Broker_LabelsEntry.$type, exports.Broker_LabelsEntry);
const baseBrokerCertificate = {
    $type: "yandex.cloud.iot.broker.v1.BrokerCertificate",
    brokerId: "",
    fingerprint: "",
    certificateData: "",
};
exports.BrokerCertificate = {
    $type: "yandex.cloud.iot.broker.v1.BrokerCertificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
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
        const message = Object.assign({}, baseBrokerCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseBrokerCertificate);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
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
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
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
        const message = Object.assign({}, baseBrokerCertificate);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.fingerprint = (_b = object.fingerprint) !== null && _b !== void 0 ? _b : "";
        message.certificateData = (_c = object.certificateData) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BrokerCertificate.$type, exports.BrokerCertificate);
const baseBrokerPassword = {
    $type: "yandex.cloud.iot.broker.v1.BrokerPassword",
    brokerId: "",
    id: "",
};
exports.BrokerPassword = {
    $type: "yandex.cloud.iot.broker.v1.BrokerPassword",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.brokerId !== "") {
            writer.uint32(10).string(message.brokerId);
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
        const message = Object.assign({}, baseBrokerPassword);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerId = reader.string();
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
        const message = Object.assign({}, baseBrokerPassword);
        message.brokerId =
            object.brokerId !== undefined && object.brokerId !== null
                ? String(object.brokerId)
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
        message.brokerId !== undefined && (obj.brokerId = message.brokerId);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseBrokerPassword);
        message.brokerId = (_a = object.brokerId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BrokerPassword.$type, exports.BrokerPassword);
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
