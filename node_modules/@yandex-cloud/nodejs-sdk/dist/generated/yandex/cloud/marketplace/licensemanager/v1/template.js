"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.template_StateToJSON = exports.template_StateFromJSON = exports.Template_State = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
var Template_State;
(function (Template_State) {
    Template_State[Template_State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    Template_State[Template_State["PENDING"] = 1] = "PENDING";
    Template_State[Template_State["ACTIVE"] = 2] = "ACTIVE";
    Template_State[Template_State["DEPRECATED"] = 3] = "DEPRECATED";
    Template_State[Template_State["DELETED"] = 4] = "DELETED";
    Template_State[Template_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Template_State = exports.Template_State || (exports.Template_State = {}));
function template_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNSPECIFIED":
            return Template_State.STATE_UNSPECIFIED;
        case 1:
        case "PENDING":
            return Template_State.PENDING;
        case 2:
        case "ACTIVE":
            return Template_State.ACTIVE;
        case 3:
        case "DEPRECATED":
            return Template_State.DEPRECATED;
        case 4:
        case "DELETED":
            return Template_State.DELETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Template_State.UNRECOGNIZED;
    }
}
exports.template_StateFromJSON = template_StateFromJSON;
function template_StateToJSON(object) {
    switch (object) {
        case Template_State.STATE_UNSPECIFIED:
            return "STATE_UNSPECIFIED";
        case Template_State.PENDING:
            return "PENDING";
        case Template_State.ACTIVE:
            return "ACTIVE";
        case Template_State.DEPRECATED:
            return "DEPRECATED";
        case Template_State.DELETED:
            return "DELETED";
        default:
            return "UNKNOWN";
    }
}
exports.template_StateToJSON = template_StateToJSON;
const baseTemplate = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Template",
    id: "",
    versionId: "",
    name: "",
    publisherId: "",
    productId: "",
    tariffId: "",
    licenseSkuId: "",
    period: "",
    state: 0,
};
exports.Template = {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Template",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.publisherId !== "") {
            writer.uint32(34).string(message.publisherId);
        }
        if (message.productId !== "") {
            writer.uint32(42).string(message.productId);
        }
        if (message.tariffId !== "") {
            writer.uint32(50).string(message.tariffId);
        }
        if (message.licenseSkuId !== "") {
            writer.uint32(58).string(message.licenseSkuId);
        }
        if (message.period !== "") {
            writer.uint32(66).string(message.period);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTemplate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.publisherId = reader.string();
                    break;
                case 5:
                    message.productId = reader.string();
                    break;
                case 6:
                    message.tariffId = reader.string();
                    break;
                case 7:
                    message.licenseSkuId = reader.string();
                    break;
                case 8:
                    message.period = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTemplate);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.publisherId =
            object.publisherId !== undefined && object.publisherId !== null
                ? String(object.publisherId)
                : "";
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? String(object.productId)
                : "";
        message.tariffId =
            object.tariffId !== undefined && object.tariffId !== null
                ? String(object.tariffId)
                : "";
        message.licenseSkuId =
            object.licenseSkuId !== undefined && object.licenseSkuId !== null
                ? String(object.licenseSkuId)
                : "";
        message.period =
            object.period !== undefined && object.period !== null
                ? String(object.period)
                : "";
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
                ? template_StateFromJSON(object.state)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.name !== undefined && (obj.name = message.name);
        message.publisherId !== undefined &&
            (obj.publisherId = message.publisherId);
        message.productId !== undefined && (obj.productId = message.productId);
        message.tariffId !== undefined && (obj.tariffId = message.tariffId);
        message.licenseSkuId !== undefined &&
            (obj.licenseSkuId = message.licenseSkuId);
        message.period !== undefined && (obj.period = message.period);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.state !== undefined &&
            (obj.state = template_StateToJSON(message.state));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseTemplate);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.publisherId = (_d = object.publisherId) !== null && _d !== void 0 ? _d : "";
        message.productId = (_e = object.productId) !== null && _e !== void 0 ? _e : "";
        message.tariffId = (_f = object.tariffId) !== null && _f !== void 0 ? _f : "";
        message.licenseSkuId = (_g = object.licenseSkuId) !== null && _g !== void 0 ? _g : "";
        message.period = (_h = object.period) !== null && _h !== void 0 ? _h : "";
        message.createdAt = (_j = object.createdAt) !== null && _j !== void 0 ? _j : undefined;
        message.updatedAt = (_k = object.updatedAt) !== null && _k !== void 0 ? _k : undefined;
        message.state = (_l = object.state) !== null && _l !== void 0 ? _l : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Template.$type, exports.Template);
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
