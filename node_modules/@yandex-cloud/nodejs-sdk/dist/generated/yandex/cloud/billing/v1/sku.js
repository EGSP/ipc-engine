"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = exports.PricingExpression = exports.PricingVersion = exports.Sku = exports.pricingVersionTypeToJSON = exports.pricingVersionTypeFromJSON = exports.PricingVersionType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.billing.v1";
/** Type of the pricing version. */
var PricingVersionType;
(function (PricingVersionType) {
    PricingVersionType[PricingVersionType["PRICING_VERSION_TYPE_UNSPECIFIED"] = 0] = "PRICING_VERSION_TYPE_UNSPECIFIED";
    /** STREET_PRICE - Regular price. */
    PricingVersionType[PricingVersionType["STREET_PRICE"] = 1] = "STREET_PRICE";
    /** CONTRACT_PRICE - Price is overridden by a contract. Defined in the scope of a billing account. */
    PricingVersionType[PricingVersionType["CONTRACT_PRICE"] = 2] = "CONTRACT_PRICE";
    PricingVersionType[PricingVersionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PricingVersionType = exports.PricingVersionType || (exports.PricingVersionType = {}));
function pricingVersionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PRICING_VERSION_TYPE_UNSPECIFIED":
            return PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED;
        case 1:
        case "STREET_PRICE":
            return PricingVersionType.STREET_PRICE;
        case 2:
        case "CONTRACT_PRICE":
            return PricingVersionType.CONTRACT_PRICE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PricingVersionType.UNRECOGNIZED;
    }
}
exports.pricingVersionTypeFromJSON = pricingVersionTypeFromJSON;
function pricingVersionTypeToJSON(object) {
    switch (object) {
        case PricingVersionType.PRICING_VERSION_TYPE_UNSPECIFIED:
            return "PRICING_VERSION_TYPE_UNSPECIFIED";
        case PricingVersionType.STREET_PRICE:
            return "STREET_PRICE";
        case PricingVersionType.CONTRACT_PRICE:
            return "CONTRACT_PRICE";
        default:
            return "UNKNOWN";
    }
}
exports.pricingVersionTypeToJSON = pricingVersionTypeToJSON;
const baseSku = {
    $type: "yandex.cloud.billing.v1.Sku",
    id: "",
    name: "",
    description: "",
    serviceId: "",
    pricingUnit: "",
};
exports.Sku = {
    $type: "yandex.cloud.billing.v1.Sku",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.serviceId !== "") {
            writer.uint32(34).string(message.serviceId);
        }
        if (message.pricingUnit !== "") {
            writer.uint32(42).string(message.pricingUnit);
        }
        for (const v of message.pricingVersions) {
            exports.PricingVersion.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSku);
        message.pricingVersions = [];
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
                    message.description = reader.string();
                    break;
                case 4:
                    message.serviceId = reader.string();
                    break;
                case 5:
                    message.pricingUnit = reader.string();
                    break;
                case 6:
                    message.pricingVersions.push(exports.PricingVersion.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSku);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.serviceId =
            object.serviceId !== undefined && object.serviceId !== null
                ? String(object.serviceId)
                : "";
        message.pricingUnit =
            object.pricingUnit !== undefined && object.pricingUnit !== null
                ? String(object.pricingUnit)
                : "";
        message.pricingVersions = ((_a = object.pricingVersions) !== null && _a !== void 0 ? _a : []).map((e) => exports.PricingVersion.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        message.pricingUnit !== undefined &&
            (obj.pricingUnit = message.pricingUnit);
        if (message.pricingVersions) {
            obj.pricingVersions = message.pricingVersions.map((e) => e ? exports.PricingVersion.toJSON(e) : undefined);
        }
        else {
            obj.pricingVersions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseSku);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.serviceId = (_d = object.serviceId) !== null && _d !== void 0 ? _d : "";
        message.pricingUnit = (_e = object.pricingUnit) !== null && _e !== void 0 ? _e : "";
        message.pricingVersions =
            ((_f = object.pricingVersions) === null || _f === void 0 ? void 0 : _f.map((e) => exports.PricingVersion.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Sku.$type, exports.Sku);
const basePricingVersion = {
    $type: "yandex.cloud.billing.v1.PricingVersion",
    type: 0,
};
exports.PricingVersion = {
    $type: "yandex.cloud.billing.v1.PricingVersion",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.effectiveTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.pricingExpressions) {
            exports.PricingExpression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePricingVersion);
        message.pricingExpressions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.effectiveTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pricingExpressions.push(exports.PricingExpression.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePricingVersion);
        message.type =
            object.type !== undefined && object.type !== null
                ? pricingVersionTypeFromJSON(object.type)
                : 0;
        message.effectiveTime =
            object.effectiveTime !== undefined && object.effectiveTime !== null
                ? fromJsonTimestamp(object.effectiveTime)
                : undefined;
        message.pricingExpressions = ((_a = object.pricingExpressions) !== null && _a !== void 0 ? _a : []).map((e) => exports.PricingExpression.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = pricingVersionTypeToJSON(message.type));
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        if (message.pricingExpressions) {
            obj.pricingExpressions = message.pricingExpressions.map((e) => e ? exports.PricingExpression.toJSON(e) : undefined);
        }
        else {
            obj.pricingExpressions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePricingVersion);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.effectiveTime = (_b = object.effectiveTime) !== null && _b !== void 0 ? _b : undefined;
        message.pricingExpressions =
            ((_c = object.pricingExpressions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.PricingExpression.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PricingVersion.$type, exports.PricingVersion);
const basePricingExpression = {
    $type: "yandex.cloud.billing.v1.PricingExpression",
};
exports.PricingExpression = {
    $type: "yandex.cloud.billing.v1.PricingExpression",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rates) {
            exports.Rate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePricingExpression);
        message.rates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.rates.push(exports.Rate.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePricingExpression);
        message.rates = ((_a = object.rates) !== null && _a !== void 0 ? _a : []).map((e) => exports.Rate.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rates) {
            obj.rates = message.rates.map((e) => (e ? exports.Rate.toJSON(e) : undefined));
        }
        else {
            obj.rates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePricingExpression);
        message.rates = ((_a = object.rates) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Rate.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PricingExpression.$type, exports.PricingExpression);
const baseRate = {
    $type: "yandex.cloud.billing.v1.Rate",
    startPricingQuantity: "",
    unitPrice: "",
    currency: "",
};
exports.Rate = {
    $type: "yandex.cloud.billing.v1.Rate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startPricingQuantity !== "") {
            writer.uint32(10).string(message.startPricingQuantity);
        }
        if (message.unitPrice !== "") {
            writer.uint32(18).string(message.unitPrice);
        }
        if (message.currency !== "") {
            writer.uint32(26).string(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startPricingQuantity = reader.string();
                    break;
                case 2:
                    message.unitPrice = reader.string();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRate);
        message.startPricingQuantity =
            object.startPricingQuantity !== undefined &&
                object.startPricingQuantity !== null
                ? String(object.startPricingQuantity)
                : "";
        message.unitPrice =
            object.unitPrice !== undefined && object.unitPrice !== null
                ? String(object.unitPrice)
                : "";
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startPricingQuantity !== undefined &&
            (obj.startPricingQuantity = message.startPricingQuantity);
        message.unitPrice !== undefined && (obj.unitPrice = message.unitPrice);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRate);
        message.startPricingQuantity = (_a = object.startPricingQuantity) !== null && _a !== void 0 ? _a : "";
        message.unitPrice = (_b = object.unitPrice) !== null && _b !== void 0 ? _b : "";
        message.currency = (_c = object.currency) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Rate.$type, exports.Rate);
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
