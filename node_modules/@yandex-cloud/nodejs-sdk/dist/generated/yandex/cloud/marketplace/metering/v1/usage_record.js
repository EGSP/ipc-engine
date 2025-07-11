"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectedUsageRecord = exports.AcceptedUsageRecord = exports.UsageRecord = exports.rejectedUsageRecord_ReasonToJSON = exports.rejectedUsageRecord_ReasonFromJSON = exports.RejectedUsageRecord_Reason = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.marketplace.metering.v1";
var RejectedUsageRecord_Reason;
(function (RejectedUsageRecord_Reason) {
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["REASON_UNSPECIFIED"] = 0] = "REASON_UNSPECIFIED";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["DUPLICATE"] = 1] = "DUPLICATE";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["EXPIRED"] = 2] = "EXPIRED";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_TIMESTAMP"] = 3] = "INVALID_TIMESTAMP";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_SKU_ID"] = 4] = "INVALID_SKU_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_PRODUCT_ID"] = 5] = "INVALID_PRODUCT_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_QUANTITY"] = 6] = "INVALID_QUANTITY";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_ID"] = 7] = "INVALID_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RejectedUsageRecord_Reason = exports.RejectedUsageRecord_Reason || (exports.RejectedUsageRecord_Reason = {}));
function rejectedUsageRecord_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "REASON_UNSPECIFIED":
            return RejectedUsageRecord_Reason.REASON_UNSPECIFIED;
        case 1:
        case "DUPLICATE":
            return RejectedUsageRecord_Reason.DUPLICATE;
        case 2:
        case "EXPIRED":
            return RejectedUsageRecord_Reason.EXPIRED;
        case 3:
        case "INVALID_TIMESTAMP":
            return RejectedUsageRecord_Reason.INVALID_TIMESTAMP;
        case 4:
        case "INVALID_SKU_ID":
            return RejectedUsageRecord_Reason.INVALID_SKU_ID;
        case 5:
        case "INVALID_PRODUCT_ID":
            return RejectedUsageRecord_Reason.INVALID_PRODUCT_ID;
        case 6:
        case "INVALID_QUANTITY":
            return RejectedUsageRecord_Reason.INVALID_QUANTITY;
        case 7:
        case "INVALID_ID":
            return RejectedUsageRecord_Reason.INVALID_ID;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RejectedUsageRecord_Reason.UNRECOGNIZED;
    }
}
exports.rejectedUsageRecord_ReasonFromJSON = rejectedUsageRecord_ReasonFromJSON;
function rejectedUsageRecord_ReasonToJSON(object) {
    switch (object) {
        case RejectedUsageRecord_Reason.REASON_UNSPECIFIED:
            return "REASON_UNSPECIFIED";
        case RejectedUsageRecord_Reason.DUPLICATE:
            return "DUPLICATE";
        case RejectedUsageRecord_Reason.EXPIRED:
            return "EXPIRED";
        case RejectedUsageRecord_Reason.INVALID_TIMESTAMP:
            return "INVALID_TIMESTAMP";
        case RejectedUsageRecord_Reason.INVALID_SKU_ID:
            return "INVALID_SKU_ID";
        case RejectedUsageRecord_Reason.INVALID_PRODUCT_ID:
            return "INVALID_PRODUCT_ID";
        case RejectedUsageRecord_Reason.INVALID_QUANTITY:
            return "INVALID_QUANTITY";
        case RejectedUsageRecord_Reason.INVALID_ID:
            return "INVALID_ID";
        default:
            return "UNKNOWN";
    }
}
exports.rejectedUsageRecord_ReasonToJSON = rejectedUsageRecord_ReasonToJSON;
const baseUsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.UsageRecord",
    uuid: "",
    skuId: "",
    quantity: 0,
};
exports.UsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.UsageRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.skuId !== "") {
            writer.uint32(18).string(message.skuId);
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int64(message.quantity);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUsageRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.skuId = reader.string();
                    break;
                case 3:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 4:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUsageRecord);
        message.uuid =
            object.uuid !== undefined && object.uuid !== null
                ? String(object.uuid)
                : "";
        message.skuId =
            object.skuId !== undefined && object.skuId !== null
                ? String(object.skuId)
                : "";
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? Number(object.quantity)
                : 0;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? fromJsonTimestamp(object.timestamp)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.skuId !== undefined && (obj.skuId = message.skuId);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUsageRecord);
        message.uuid = (_a = object.uuid) !== null && _a !== void 0 ? _a : "";
        message.skuId = (_b = object.skuId) !== null && _b !== void 0 ? _b : "";
        message.quantity = (_c = object.quantity) !== null && _c !== void 0 ? _c : 0;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UsageRecord.$type, exports.UsageRecord);
const baseAcceptedUsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord",
    uuid: "",
};
exports.AcceptedUsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.AcceptedUsageRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAcceptedUsageRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAcceptedUsageRecord);
        message.uuid =
            object.uuid !== undefined && object.uuid !== null
                ? String(object.uuid)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAcceptedUsageRecord);
        message.uuid = (_a = object.uuid) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AcceptedUsageRecord.$type, exports.AcceptedUsageRecord);
const baseRejectedUsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord",
    uuid: "",
    reason: 0,
};
exports.RejectedUsageRecord = {
    $type: "yandex.cloud.marketplace.metering.v1.RejectedUsageRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRejectedUsageRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRejectedUsageRecord);
        message.uuid =
            object.uuid !== undefined && object.uuid !== null
                ? String(object.uuid)
                : "";
        message.reason =
            object.reason !== undefined && object.reason !== null
                ? rejectedUsageRecord_ReasonFromJSON(object.reason)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.reason !== undefined &&
            (obj.reason = rejectedUsageRecord_ReasonToJSON(message.reason));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRejectedUsageRecord);
        message.uuid = (_a = object.uuid) !== null && _a !== void 0 ? _a : "";
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RejectedUsageRecord.$type, exports.RejectedUsageRecord);
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
