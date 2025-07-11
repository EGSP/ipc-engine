"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.instance_StateToJSON = exports.instance_StateFromJSON = exports.Instance_State = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const template_1 = require("../../../../../yandex/cloud/marketplace/licensemanager/v1/template");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const lock_1 = require("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock");
exports.protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
var Instance_State;
(function (Instance_State) {
    Instance_State[Instance_State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    Instance_State[Instance_State["PENDING"] = 1] = "PENDING";
    Instance_State[Instance_State["ACTIVE"] = 2] = "ACTIVE";
    Instance_State[Instance_State["CANCELLED"] = 3] = "CANCELLED";
    Instance_State[Instance_State["EXPIRED"] = 4] = "EXPIRED";
    Instance_State[Instance_State["DEPRECATED"] = 5] = "DEPRECATED";
    Instance_State[Instance_State["DELETED"] = 6] = "DELETED";
    Instance_State[Instance_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Instance_State = exports.Instance_State || (exports.Instance_State = {}));
function instance_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return Instance_State.STATE_UNSPECIFIED;
        case 1:
        case "PENDING":
            return Instance_State.PENDING;
        case 2:
        case "ACTIVE":
            return Instance_State.ACTIVE;
        case 3:
        case "CANCELLED":
            return Instance_State.CANCELLED;
        case 4:
        case "EXPIRED":
            return Instance_State.EXPIRED;
        case 5:
        case "DEPRECATED":
            return Instance_State.DEPRECATED;
        case 6:
        case "DELETED":
            return Instance_State.DELETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Instance_State.UNRECOGNIZED;
    }
}
exports.instance_StateFromJSON = instance_StateFromJSON;
function instance_StateToJSON(object) {
    switch (object) {
        case Instance_State.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case Instance_State.PENDING:
            return "PENDING";
        case Instance_State.ACTIVE:
            return "ACTIVE";
        case Instance_State.CANCELLED:
            return "CANCELLED";
        case Instance_State.EXPIRED:
            return "EXPIRED";
        case Instance_State.DEPRECATED:
            return "DEPRECATED";
        case Instance_State.DELETED:
            return "DELETED";
        default:
            return "UNKNOWN";
    }
}
exports.instance_StateToJSON = instance_StateToJSON;
const baseInstance = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Instance",
    id: "",
    cloudId: "",
    folderId: "",
    templateId: "",
    templateVersionId: "",
    description: "",
    state: 0,
};
exports.Instance = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Instance",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.cloudId !== "") {
            writer.uint32(18).string(message.cloudId);
        }
        if (message.folderId !== "") {
            writer.uint32(26).string(message.folderId);
        }
        if (message.templateId !== "") {
            writer.uint32(34).string(message.templateId);
        }
        if (message.templateVersionId !== "") {
            writer.uint32(42).string(message.templateVersionId);
        }
        if (message.description !== "") {
            writer.uint32(114).string(message.description);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(88).int32(message.state);
        }
        for (const v of message.locks) {
            lock_1.Lock.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.licenseTemplate !== undefined) {
            template_1.Template.encode(message.licenseTemplate, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstance);
        message.locks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cloudId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.templateId = reader.string();
                    break;
                case 5:
                    message.templateVersionId = reader.string();
                    break;
                case 14:
                    message.description = reader.string();
                    break;
                case 7:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.state = reader.int32();
                    break;
                case 12:
                    message.locks.push(lock_1.Lock.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.licenseTemplate = template_1.Template.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseInstance);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.templateId =
            object.templateId !== undefined && object.templateId !== null
                ? String(object.templateId)
                : "";
        message.templateVersionId =
            object.templateVersionId !== undefined &&
                object.templateVersionId !== null
                ? String(object.templateVersionId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? fromJsonTimestamp(object.startTime)
                : undefined;
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? fromJsonTimestamp(object.endTime)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.state =
            object.state !== undefined && object.state !== null
                ? instance_StateFromJSON(object.state)
                : 0;
        message.locks = ((_a = object.locks) !== null && _a !== void 0 ? _a : []).map((e) => lock_1.Lock.fromJSON(e));
        message.licenseTemplate =
            object.licenseTemplate !== undefined && object.licenseTemplate !== null
                ? template_1.Template.fromJSON(object.licenseTemplate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.templateId !== undefined && (obj.templateId = message.templateId);
        message.templateVersionId !== undefined &&
            (obj.templateVersionId = message.templateVersionId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.state !== undefined &&
            (obj.state = instance_StateToJSON(message.state));
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.Lock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        message.licenseTemplate !== undefined &&
            (obj.licenseTemplate = message.licenseTemplate
                ? template_1.Template.toJSON(message.licenseTemplate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseInstance);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.cloudId = (_b = object.cloudId) !== null && _b !== void 0 ? _b : "";
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        message.templateId = (_d = object.templateId) !== null && _d !== void 0 ? _d : "";
        message.templateVersionId = (_e = object.templateVersionId) !== null && _e !== void 0 ? _e : "";
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.startTime = (_g = object.startTime) !== null && _g !== void 0 ? _g : undefined;
        message.endTime = (_h = object.endTime) !== null && _h !== void 0 ? _h : undefined;
        message.createdAt = (_j = object.createdAt) !== null && _j !== void 0 ? _j : undefined;
        message.updatedAt = (_k = object.updatedAt) !== null && _k !== void 0 ? _k : undefined;
        message.state = (_l = object.state) !== null && _l !== void 0 ? _l : 0;
        message.locks = ((_m = object.locks) === null || _m === void 0 ? void 0 : _m.map((e) => lock_1.Lock.fromPartial(e))) || [];
        message.licenseTemplate =
            object.licenseTemplate !== undefined && object.licenseTemplate !== null
                ? template_1.Template.fromPartial(object.licenseTemplate)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Instance.$type, exports.Instance);
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
