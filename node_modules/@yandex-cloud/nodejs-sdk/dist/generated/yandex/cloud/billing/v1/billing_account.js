"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseBillingAccount = {
    $type: "yandex.cloud.billing.v1.BillingAccount",
    id: "",
    name: "",
    countryCode: "",
    currency: "",
    active: false,
    balance: "",
};
exports.BillingAccount = {
    $type: "yandex.cloud.billing.v1.BillingAccount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.countryCode !== "") {
            writer.uint32(34).string(message.countryCode);
        }
        if (message.currency !== "") {
            writer.uint32(42).string(message.currency);
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.balance !== "") {
            writer.uint32(58).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBillingAccount);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.countryCode = reader.string();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBillingAccount);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.countryCode =
            object.countryCode !== undefined && object.countryCode !== null
                ? String(object.countryCode)
                : "";
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : "";
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : false;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? String(object.balance)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.countryCode !== undefined &&
            (obj.countryCode = message.countryCode);
        message.currency !== undefined && (obj.currency = message.currency);
        message.active !== undefined && (obj.active = message.active);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseBillingAccount);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.countryCode = (_d = object.countryCode) !== null && _d !== void 0 ? _d : "";
        message.currency = (_e = object.currency) !== null && _e !== void 0 ? _e : "";
        message.active = (_f = object.active) !== null && _f !== void 0 ? _f : false;
        message.balance = (_g = object.balance) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BillingAccount.$type, exports.BillingAccount);
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
