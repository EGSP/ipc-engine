"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProductUsageServiceClient = exports.ImageProductUsageServiceService = exports.WriteImageProductUsageResponse = exports.WriteImageProductUsageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const usage_record_1 = require("../../../../../yandex/cloud/marketplace/v1/metering/usage_record");
exports.protobufPackage = "yandex.cloud.marketplace.v1.metering";
const baseWriteImageProductUsageRequest = {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest",
    validateOnly: false,
    productId: "",
};
exports.WriteImageProductUsageRequest = {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validateOnly === true) {
            writer.uint32(8).bool(message.validateOnly);
        }
        if (message.productId !== "") {
            writer.uint32(18).string(message.productId);
        }
        for (const v of message.usageRecords) {
            usage_record_1.UsageRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWriteImageProductUsageRequest);
        message.usageRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validateOnly = reader.bool();
                    break;
                case 2:
                    message.productId = reader.string();
                    break;
                case 3:
                    message.usageRecords.push(usage_record_1.UsageRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseWriteImageProductUsageRequest);
        message.validateOnly =
            object.validateOnly !== undefined && object.validateOnly !== null
                ? Boolean(object.validateOnly)
                : false;
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? String(object.productId)
                : "";
        message.usageRecords = ((_a = object.usageRecords) !== null && _a !== void 0 ? _a : []).map((e) => usage_record_1.UsageRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validateOnly !== undefined &&
            (obj.validateOnly = message.validateOnly);
        message.productId !== undefined && (obj.productId = message.productId);
        if (message.usageRecords) {
            obj.usageRecords = message.usageRecords.map((e) => e ? usage_record_1.UsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.usageRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseWriteImageProductUsageRequest);
        message.validateOnly = (_a = object.validateOnly) !== null && _a !== void 0 ? _a : false;
        message.productId = (_b = object.productId) !== null && _b !== void 0 ? _b : "";
        message.usageRecords =
            ((_c = object.usageRecords) === null || _c === void 0 ? void 0 : _c.map((e) => usage_record_1.UsageRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WriteImageProductUsageRequest.$type, exports.WriteImageProductUsageRequest);
const baseWriteImageProductUsageResponse = {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse",
};
exports.WriteImageProductUsageResponse = {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accepted) {
            usage_record_1.AcceptedUsageRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.rejected) {
            usage_record_1.RejectedUsageRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWriteImageProductUsageResponse);
        message.accepted = [];
        message.rejected = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accepted.push(usage_record_1.AcceptedUsageRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.rejected.push(usage_record_1.RejectedUsageRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseWriteImageProductUsageResponse);
        message.accepted = ((_a = object.accepted) !== null && _a !== void 0 ? _a : []).map((e) => usage_record_1.AcceptedUsageRecord.fromJSON(e));
        message.rejected = ((_b = object.rejected) !== null && _b !== void 0 ? _b : []).map((e) => usage_record_1.RejectedUsageRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.accepted) {
            obj.accepted = message.accepted.map((e) => e ? usage_record_1.AcceptedUsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.accepted = [];
        }
        if (message.rejected) {
            obj.rejected = message.rejected.map((e) => e ? usage_record_1.RejectedUsageRecord.toJSON(e) : undefined);
        }
        else {
            obj.rejected = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWriteImageProductUsageResponse);
        message.accepted =
            ((_a = object.accepted) === null || _a === void 0 ? void 0 : _a.map((e) => usage_record_1.AcceptedUsageRecord.fromPartial(e))) || [];
        message.rejected =
            ((_b = object.rejected) === null || _b === void 0 ? void 0 : _b.map((e) => usage_record_1.RejectedUsageRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WriteImageProductUsageResponse.$type, exports.WriteImageProductUsageResponse);
/** A set of methods for managing image product's usage. */
exports.ImageProductUsageServiceService = {
    /** Writes image product's usage. Authentication is by user's service account. */
    write: {
        path: "/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.WriteImageProductUsageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.WriteImageProductUsageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.WriteImageProductUsageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.WriteImageProductUsageResponse.decode(value),
    },
};
exports.ImageProductUsageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageProductUsageServiceService, "yandex.cloud.marketplace.v1.metering.ImageProductUsageService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
