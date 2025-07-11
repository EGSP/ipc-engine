"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuServiceClient = exports.SkuServiceService = exports.ListSkusResponse = exports.ListSkusRequest = exports.GetSkuRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const sku_1 = require("../../../../yandex/cloud/billing/v1/sku");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseGetSkuRequest = {
    $type: "yandex.cloud.billing.v1.GetSkuRequest",
    id: "",
    currency: "",
    billingAccountId: "",
};
exports.GetSkuRequest = {
    $type: "yandex.cloud.billing.v1.GetSkuRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.currency !== "") {
            writer.uint32(18).string(message.currency);
        }
        if (message.billingAccountId !== "") {
            writer.uint32(26).string(message.billingAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSkuRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.currency = reader.string();
                    break;
                case 3:
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSkuRequest);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : "";
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.currency !== undefined && (obj.currency = message.currency);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetSkuRequest);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.currency = (_b = object.currency) !== null && _b !== void 0 ? _b : "";
        message.billingAccountId = (_c = object.billingAccountId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSkuRequest.$type, exports.GetSkuRequest);
const baseListSkusRequest = {
    $type: "yandex.cloud.billing.v1.ListSkusRequest",
    currency: "",
    billingAccountId: "",
    filter: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSkusRequest = {
    $type: "yandex.cloud.billing.v1.ListSkusRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currency !== "") {
            writer.uint32(10).string(message.currency);
        }
        if (message.billingAccountId !== "") {
            writer.uint32(18).string(message.billingAccountId);
        }
        if (message.filter !== "") {
            writer.uint32(26).string(message.filter);
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(42).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSkusRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.string();
                    break;
                case 2:
                    message.billingAccountId = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 5:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListSkusRequest);
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? String(object.currency)
                : "";
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.currency !== undefined && (obj.currency = message.currency);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.filter !== undefined && (obj.filter = message.filter);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListSkusRequest);
        message.currency = (_a = object.currency) !== null && _a !== void 0 ? _a : "";
        message.billingAccountId = (_b = object.billingAccountId) !== null && _b !== void 0 ? _b : "";
        message.filter = (_c = object.filter) !== null && _c !== void 0 ? _c : "";
        message.pageSize = (_d = object.pageSize) !== null && _d !== void 0 ? _d : 0;
        message.pageToken = (_e = object.pageToken) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSkusRequest.$type, exports.ListSkusRequest);
const baseListSkusResponse = {
    $type: "yandex.cloud.billing.v1.ListSkusResponse",
    nextPageToken: "",
};
exports.ListSkusResponse = {
    $type: "yandex.cloud.billing.v1.ListSkusResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.skus) {
            sku_1.Sku.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSkusResponse);
        message.skus = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skus.push(sku_1.Sku.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListSkusResponse);
        message.skus = ((_a = object.skus) !== null && _a !== void 0 ? _a : []).map((e) => sku_1.Sku.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.skus) {
            obj.skus = message.skus.map((e) => (e ? sku_1.Sku.toJSON(e) : undefined));
        }
        else {
            obj.skus = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSkusResponse);
        message.skus = ((_a = object.skus) === null || _a === void 0 ? void 0 : _a.map((e) => sku_1.Sku.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSkusResponse.$type, exports.ListSkusResponse);
/** A set of methods for managing Sku resources. */
exports.SkuServiceService = {
    /** Returns the specified SKU. */
    get: {
        path: "/yandex.cloud.billing.v1.SkuService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSkuRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSkuRequest.decode(value),
        responseSerialize: (value) => Buffer.from(sku_1.Sku.encode(value).finish()),
        responseDeserialize: (value) => sku_1.Sku.decode(value),
    },
    /** Retrieves the list of SKUs. */
    list: {
        path: "/yandex.cloud.billing.v1.SkuService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSkusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSkusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSkusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSkusResponse.decode(value),
    },
};
exports.SkuServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SkuServiceService, "yandex.cloud.billing.v1.SkuService");
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
