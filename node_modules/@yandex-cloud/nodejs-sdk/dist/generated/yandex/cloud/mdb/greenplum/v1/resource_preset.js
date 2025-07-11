"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePreset = exports.resourcePreset_TypeToJSON = exports.resourcePreset_TypeFromJSON = exports.ResourcePreset_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
var ResourcePreset_Type;
(function (ResourcePreset_Type) {
    ResourcePreset_Type[ResourcePreset_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** MASTER - Greenplum® master host. */
    ResourcePreset_Type[ResourcePreset_Type["MASTER"] = 1] = "MASTER";
    /** SEGMENT - Greenplum® segment host. */
    ResourcePreset_Type[ResourcePreset_Type["SEGMENT"] = 2] = "SEGMENT";
    ResourcePreset_Type[ResourcePreset_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResourcePreset_Type = exports.ResourcePreset_Type || (exports.ResourcePreset_Type = {}));
function resourcePreset_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return ResourcePreset_Type.TYPE_UNSPECIFIED;
        case 1:
        case "MASTER":
            return ResourcePreset_Type.MASTER;
        case 2:
        case "SEGMENT":
            return ResourcePreset_Type.SEGMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResourcePreset_Type.UNRECOGNIZED;
    }
}
exports.resourcePreset_TypeFromJSON = resourcePreset_TypeFromJSON;
function resourcePreset_TypeToJSON(object) {
    switch (object) {
        case ResourcePreset_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case ResourcePreset_Type.MASTER:
            return "MASTER";
        case ResourcePreset_Type.SEGMENT:
            return "SEGMENT";
        default:
            return "UNKNOWN";
    }
}
exports.resourcePreset_TypeToJSON = resourcePreset_TypeToJSON;
const baseResourcePreset = {
    $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset",
    id: "",
    zoneIds: "",
    diskTypeIds: "",
    cores: 0,
    memory: 0,
    type: 0,
    hostCountDivider: 0,
    maxSegmentInHostCount: 0,
};
exports.ResourcePreset = {
    $type: "yandex.cloud.mdb.greenplum.v1.ResourcePreset",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.zoneIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.diskTypeIds) {
            writer.uint32(82).string(v);
        }
        if (message.cores !== 0) {
            writer.uint32(24).int64(message.cores);
        }
        if (message.memory !== 0) {
            writer.uint32(32).int64(message.memory);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.hostCountDivider !== 0) {
            writer.uint32(64).int64(message.hostCountDivider);
        }
        if (message.maxSegmentInHostCount !== 0) {
            writer.uint32(72).int64(message.maxSegmentInHostCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourcePreset);
        message.zoneIds = [];
        message.diskTypeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.zoneIds.push(reader.string());
                    break;
                case 10:
                    message.diskTypeIds.push(reader.string());
                    break;
                case 3:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 4:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.hostCountDivider = longToNumber(reader.int64());
                    break;
                case 9:
                    message.maxSegmentInHostCount = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseResourcePreset);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.zoneIds = ((_a = object.zoneIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.diskTypeIds = ((_b = object.diskTypeIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.cores =
            object.cores !== undefined && object.cores !== null
                ? Number(object.cores)
                : 0;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Number(object.memory)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? resourcePreset_TypeFromJSON(object.type)
                : 0;
        message.hostCountDivider =
            object.hostCountDivider !== undefined && object.hostCountDivider !== null
                ? Number(object.hostCountDivider)
                : 0;
        message.maxSegmentInHostCount =
            object.maxSegmentInHostCount !== undefined &&
                object.maxSegmentInHostCount !== null
                ? Number(object.maxSegmentInHostCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        if (message.diskTypeIds) {
            obj.diskTypeIds = message.diskTypeIds.map((e) => e);
        }
        else {
            obj.diskTypeIds = [];
        }
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.type !== undefined &&
            (obj.type = resourcePreset_TypeToJSON(message.type));
        message.hostCountDivider !== undefined &&
            (obj.hostCountDivider = Math.round(message.hostCountDivider));
        message.maxSegmentInHostCount !== undefined &&
            (obj.maxSegmentInHostCount = Math.round(message.maxSegmentInHostCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseResourcePreset);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.zoneIds = ((_b = object.zoneIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.diskTypeIds = ((_c = object.diskTypeIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.cores = (_d = object.cores) !== null && _d !== void 0 ? _d : 0;
        message.memory = (_e = object.memory) !== null && _e !== void 0 ? _e : 0;
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : 0;
        message.hostCountDivider = (_g = object.hostCountDivider) !== null && _g !== void 0 ? _g : 0;
        message.maxSegmentInHostCount = (_h = object.maxSegmentInHostCount) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcePreset.$type, exports.ResourcePreset);
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
