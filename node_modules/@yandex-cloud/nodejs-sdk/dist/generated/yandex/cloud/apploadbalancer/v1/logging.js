"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOptions = exports.LogDiscardRule = exports.httpCodeIntervalToJSON = exports.httpCodeIntervalFromJSON = exports.HttpCodeInterval = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const code_1 = require("../../../../google/rpc/code");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
var HttpCodeInterval;
(function (HttpCodeInterval) {
    HttpCodeInterval[HttpCodeInterval["HTTP_CODE_INTERVAL_UNSPECIFIED"] = 0] = "HTTP_CODE_INTERVAL_UNSPECIFIED";
    HttpCodeInterval[HttpCodeInterval["HTTP_1XX"] = 1] = "HTTP_1XX";
    HttpCodeInterval[HttpCodeInterval["HTTP_2XX"] = 2] = "HTTP_2XX";
    HttpCodeInterval[HttpCodeInterval["HTTP_3XX"] = 3] = "HTTP_3XX";
    HttpCodeInterval[HttpCodeInterval["HTTP_4XX"] = 4] = "HTTP_4XX";
    HttpCodeInterval[HttpCodeInterval["HTTP_5XX"] = 5] = "HTTP_5XX";
    HttpCodeInterval[HttpCodeInterval["HTTP_ALL"] = 6] = "HTTP_ALL";
    HttpCodeInterval[HttpCodeInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HttpCodeInterval = exports.HttpCodeInterval || (exports.HttpCodeInterval = {}));
function httpCodeIntervalFromJSON(object) {
    switch (object) {
        case 0:
        case "HTTP_CODE_INTERVAL_UNSPECIFIED":
            return HttpCodeInterval.HTTP_CODE_INTERVAL_UNSPECIFIED;
        case 1:
        case "HTTP_1XX":
            return HttpCodeInterval.HTTP_1XX;
        case 2:
        case "HTTP_2XX":
            return HttpCodeInterval.HTTP_2XX;
        case 3:
        case "HTTP_3XX":
            return HttpCodeInterval.HTTP_3XX;
        case 4:
        case "HTTP_4XX":
            return HttpCodeInterval.HTTP_4XX;
        case 5:
        case "HTTP_5XX":
            return HttpCodeInterval.HTTP_5XX;
        case 6:
        case "HTTP_ALL":
            return HttpCodeInterval.HTTP_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HttpCodeInterval.UNRECOGNIZED;
    }
}
exports.httpCodeIntervalFromJSON = httpCodeIntervalFromJSON;
function httpCodeIntervalToJSON(object) {
    switch (object) {
        case HttpCodeInterval.HTTP_CODE_INTERVAL_UNSPECIFIED:
            return "HTTP_CODE_INTERVAL_UNSPECIFIED";
        case HttpCodeInterval.HTTP_1XX:
            return "HTTP_1XX";
        case HttpCodeInterval.HTTP_2XX:
            return "HTTP_2XX";
        case HttpCodeInterval.HTTP_3XX:
            return "HTTP_3XX";
        case HttpCodeInterval.HTTP_4XX:
            return "HTTP_4XX";
        case HttpCodeInterval.HTTP_5XX:
            return "HTTP_5XX";
        case HttpCodeInterval.HTTP_ALL:
            return "HTTP_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.httpCodeIntervalToJSON = httpCodeIntervalToJSON;
const baseLogDiscardRule = {
    $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule",
    httpCodes: 0,
    httpCodeIntervals: 0,
    grpcCodes: 0,
};
exports.LogDiscardRule = {
    $type: "yandex.cloud.apploadbalancer.v1.LogDiscardRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.httpCodes) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.httpCodeIntervals) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.grpcCodes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.discardPercent !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.discardPercent }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogDiscardRule);
        message.httpCodes = [];
        message.httpCodeIntervals = [];
        message.grpcCodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.httpCodes.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.httpCodes.push(longToNumber(reader.int64()));
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.httpCodeIntervals.push(reader.int32());
                        }
                    }
                    else {
                        message.httpCodeIntervals.push(reader.int32());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.grpcCodes.push(reader.int32());
                        }
                    }
                    else {
                        message.grpcCodes.push(reader.int32());
                    }
                    break;
                case 4:
                    message.discardPercent = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLogDiscardRule);
        message.httpCodes = ((_a = object.httpCodes) !== null && _a !== void 0 ? _a : []).map((e) => Number(e));
        message.httpCodeIntervals = ((_b = object.httpCodeIntervals) !== null && _b !== void 0 ? _b : []).map((e) => httpCodeIntervalFromJSON(e));
        message.grpcCodes = ((_c = object.grpcCodes) !== null && _c !== void 0 ? _c : []).map((e) => (0, code_1.codeFromJSON)(e));
        message.discardPercent =
            object.discardPercent !== undefined && object.discardPercent !== null
                ? Number(object.discardPercent)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.httpCodes) {
            obj.httpCodes = message.httpCodes.map((e) => Math.round(e));
        }
        else {
            obj.httpCodes = [];
        }
        if (message.httpCodeIntervals) {
            obj.httpCodeIntervals = message.httpCodeIntervals.map((e) => httpCodeIntervalToJSON(e));
        }
        else {
            obj.httpCodeIntervals = [];
        }
        if (message.grpcCodes) {
            obj.grpcCodes = message.grpcCodes.map((e) => (0, code_1.codeToJSON)(e));
        }
        else {
            obj.grpcCodes = [];
        }
        message.discardPercent !== undefined &&
            (obj.discardPercent = message.discardPercent);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseLogDiscardRule);
        message.httpCodes = ((_a = object.httpCodes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.httpCodeIntervals = ((_b = object.httpCodeIntervals) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.grpcCodes = ((_c = object.grpcCodes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.discardPercent = (_d = object.discardPercent) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogDiscardRule.$type, exports.LogDiscardRule);
const baseLogOptions = {
    $type: "yandex.cloud.apploadbalancer.v1.LogOptions",
    logGroupId: "",
    disable: false,
};
exports.LogOptions = {
    $type: "yandex.cloud.apploadbalancer.v1.LogOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== "") {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.discardRules) {
            exports.LogDiscardRule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.disable === true) {
            writer.uint32(24).bool(message.disable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogOptions);
        message.discardRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.discardRules.push(exports.LogDiscardRule.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.disable = reader.bool();
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
        const message = Object.assign({}, baseLogOptions);
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.discardRules = ((_a = object.discardRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.LogDiscardRule.fromJSON(e));
        message.disable =
            object.disable !== undefined && object.disable !== null
                ? Boolean(object.disable)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.discardRules) {
            obj.discardRules = message.discardRules.map((e) => e ? exports.LogDiscardRule.toJSON(e) : undefined);
        }
        else {
            obj.discardRules = [];
        }
        message.disable !== undefined && (obj.disable = message.disable);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLogOptions);
        message.logGroupId = (_a = object.logGroupId) !== null && _a !== void 0 ? _a : "";
        message.discardRules =
            ((_b = object.discardRules) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LogDiscardRule.fromPartial(e))) || [];
        message.disable = (_c = object.disable) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogOptions.$type, exports.LogOptions);
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
