"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotaFailure_Violation = exports.QuotaFailure = exports.MetricLimit = exports.QuotaMetric = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.quota";
const baseQuotaMetric = {
    $type: "yandex.cloud.quota.QuotaMetric",
    name: "",
    limit: 0,
    usage: 0,
};
exports.QuotaMetric = {
    $type: "yandex.cloud.quota.QuotaMetric",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.limit !== 0) {
            writer.uint32(24).int64(message.limit);
        }
        if (message.usage !== 0) {
            writer.uint32(33).double(message.usage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQuotaMetric);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.limit = longToNumber(reader.int64());
                    break;
                case 4:
                    message.usage = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQuotaMetric);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Number(object.limit)
                : 0;
        message.usage =
            object.usage !== undefined && object.usage !== null
                ? Number(object.usage)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.usage !== undefined && (obj.usage = message.usage);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseQuotaMetric);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        message.usage = (_c = object.usage) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QuotaMetric.$type, exports.QuotaMetric);
const baseMetricLimit = {
    $type: "yandex.cloud.quota.MetricLimit",
    name: "",
    limit: 0,
};
exports.MetricLimit = {
    $type: "yandex.cloud.quota.MetricLimit",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMetricLimit);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.limit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMetricLimit);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Number(object.limit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMetricLimit);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MetricLimit.$type, exports.MetricLimit);
const baseQuotaFailure = { $type: "yandex.cloud.quota.QuotaFailure" };
exports.QuotaFailure = {
    $type: "yandex.cloud.quota.QuotaFailure",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.violations) {
            exports.QuotaFailure_Violation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQuotaFailure);
        message.violations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.violations.push(exports.QuotaFailure_Violation.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseQuotaFailure);
        message.violations = ((_a = object.violations) !== null && _a !== void 0 ? _a : []).map((e) => exports.QuotaFailure_Violation.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.violations) {
            obj.violations = message.violations.map((e) => e ? exports.QuotaFailure_Violation.toJSON(e) : undefined);
        }
        else {
            obj.violations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQuotaFailure);
        message.violations =
            ((_a = object.violations) === null || _a === void 0 ? void 0 : _a.map((e) => exports.QuotaFailure_Violation.fromPartial(e))) ||
                [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QuotaFailure.$type, exports.QuotaFailure);
const baseQuotaFailure_Violation = {
    $type: "yandex.cloud.quota.QuotaFailure.Violation",
    required: 0,
};
exports.QuotaFailure_Violation = {
    $type: "yandex.cloud.quota.QuotaFailure.Violation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metric !== undefined) {
            exports.QuotaMetric.encode(message.metric, writer.uint32(10).fork()).ldelim();
        }
        if (message.required !== 0) {
            writer.uint32(16).int64(message.required);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQuotaFailure_Violation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metric = exports.QuotaMetric.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.required = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQuotaFailure_Violation);
        message.metric =
            object.metric !== undefined && object.metric !== null
                ? exports.QuotaMetric.fromJSON(object.metric)
                : undefined;
        message.required =
            object.required !== undefined && object.required !== null
                ? Number(object.required)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metric !== undefined &&
            (obj.metric = message.metric
                ? exports.QuotaMetric.toJSON(message.metric)
                : undefined);
        message.required !== undefined &&
            (obj.required = Math.round(message.required));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQuotaFailure_Violation);
        message.metric =
            object.metric !== undefined && object.metric !== null
                ? exports.QuotaMetric.fromPartial(object.metric)
                : undefined;
        message.required = (_a = object.required) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QuotaFailure_Violation.$type, exports.QuotaFailure_Violation);
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
