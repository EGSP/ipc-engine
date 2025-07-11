"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Downsampling = exports.downsampling_GapFillingToJSON = exports.downsampling_GapFillingFromJSON = exports.Downsampling_GapFilling = exports.downsampling_GridAggregationToJSON = exports.downsampling_GridAggregationFromJSON = exports.Downsampling_GridAggregation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.monitoring.v3";
/** List of available aggregate functions for downsampling. */
var Downsampling_GridAggregation;
(function (Downsampling_GridAggregation) {
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_UNSPECIFIED"] = 0] = "GRID_AGGREGATION_UNSPECIFIED";
    /** GRID_AGGREGATION_MAX - Max value. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_MAX"] = 1] = "GRID_AGGREGATION_MAX";
    /** GRID_AGGREGATION_MIN - Min value. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_MIN"] = 2] = "GRID_AGGREGATION_MIN";
    /** GRID_AGGREGATION_SUM - Sum of values. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_SUM"] = 3] = "GRID_AGGREGATION_SUM";
    /** GRID_AGGREGATION_AVG - Average value. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_AVG"] = 4] = "GRID_AGGREGATION_AVG";
    /** GRID_AGGREGATION_LAST - Last value. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_LAST"] = 5] = "GRID_AGGREGATION_LAST";
    /** GRID_AGGREGATION_COUNT - Total count of points. */
    Downsampling_GridAggregation[Downsampling_GridAggregation["GRID_AGGREGATION_COUNT"] = 6] = "GRID_AGGREGATION_COUNT";
    Downsampling_GridAggregation[Downsampling_GridAggregation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Downsampling_GridAggregation = exports.Downsampling_GridAggregation || (exports.Downsampling_GridAggregation = {}));
function downsampling_GridAggregationFromJSON(object) {
    switch (object) {
        case 0:
        case "GRID_AGGREGATION_UNSPECIFIED":
            return Downsampling_GridAggregation.GRID_AGGREGATION_UNSPECIFIED;
        case 1:
        case "GRID_AGGREGATION_MAX":
            return Downsampling_GridAggregation.GRID_AGGREGATION_MAX;
        case 2:
        case "GRID_AGGREGATION_MIN":
            return Downsampling_GridAggregation.GRID_AGGREGATION_MIN;
        case 3:
        case "GRID_AGGREGATION_SUM":
            return Downsampling_GridAggregation.GRID_AGGREGATION_SUM;
        case 4:
        case "GRID_AGGREGATION_AVG":
            return Downsampling_GridAggregation.GRID_AGGREGATION_AVG;
        case 5:
        case "GRID_AGGREGATION_LAST":
            return Downsampling_GridAggregation.GRID_AGGREGATION_LAST;
        case 6:
        case "GRID_AGGREGATION_COUNT":
            return Downsampling_GridAggregation.GRID_AGGREGATION_COUNT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Downsampling_GridAggregation.UNRECOGNIZED;
    }
}
exports.downsampling_GridAggregationFromJSON = downsampling_GridAggregationFromJSON;
function downsampling_GridAggregationToJSON(object) {
    switch (object) {
        case Downsampling_GridAggregation.GRID_AGGREGATION_UNSPECIFIED:
            return "GRID_AGGREGATION_UNSPECIFIED";
        case Downsampling_GridAggregation.GRID_AGGREGATION_MAX:
            return "GRID_AGGREGATION_MAX";
        case Downsampling_GridAggregation.GRID_AGGREGATION_MIN:
            return "GRID_AGGREGATION_MIN";
        case Downsampling_GridAggregation.GRID_AGGREGATION_SUM:
            return "GRID_AGGREGATION_SUM";
        case Downsampling_GridAggregation.GRID_AGGREGATION_AVG:
            return "GRID_AGGREGATION_AVG";
        case Downsampling_GridAggregation.GRID_AGGREGATION_LAST:
            return "GRID_AGGREGATION_LAST";
        case Downsampling_GridAggregation.GRID_AGGREGATION_COUNT:
            return "GRID_AGGREGATION_COUNT";
        default:
            return "UNKNOWN";
    }
}
exports.downsampling_GridAggregationToJSON = downsampling_GridAggregationToJSON;
/** List of available gap filling policy for downsampling. */
var Downsampling_GapFilling;
(function (Downsampling_GapFilling) {
    Downsampling_GapFilling[Downsampling_GapFilling["GAP_FILLING_UNSPECIFIED"] = 0] = "GAP_FILLING_UNSPECIFIED";
    /** GAP_FILLING_NULL - Returns `null` as a metric value and `timestamp` as a time series value. */
    Downsampling_GapFilling[Downsampling_GapFilling["GAP_FILLING_NULL"] = 1] = "GAP_FILLING_NULL";
    /** GAP_FILLING_NONE - Returns no value and no timestamp. */
    Downsampling_GapFilling[Downsampling_GapFilling["GAP_FILLING_NONE"] = 2] = "GAP_FILLING_NONE";
    /** GAP_FILLING_PREVIOUS - Returns the value from the previous time interval. */
    Downsampling_GapFilling[Downsampling_GapFilling["GAP_FILLING_PREVIOUS"] = 3] = "GAP_FILLING_PREVIOUS";
    Downsampling_GapFilling[Downsampling_GapFilling["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Downsampling_GapFilling = exports.Downsampling_GapFilling || (exports.Downsampling_GapFilling = {}));
function downsampling_GapFillingFromJSON(object) {
    switch (object) {
        case 0:
        case "GAP_FILLING_UNSPECIFIED":
            return Downsampling_GapFilling.GAP_FILLING_UNSPECIFIED;
        case 1:
        case "GAP_FILLING_NULL":
            return Downsampling_GapFilling.GAP_FILLING_NULL;
        case 2:
        case "GAP_FILLING_NONE":
            return Downsampling_GapFilling.GAP_FILLING_NONE;
        case 3:
        case "GAP_FILLING_PREVIOUS":
            return Downsampling_GapFilling.GAP_FILLING_PREVIOUS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Downsampling_GapFilling.UNRECOGNIZED;
    }
}
exports.downsampling_GapFillingFromJSON = downsampling_GapFillingFromJSON;
function downsampling_GapFillingToJSON(object) {
    switch (object) {
        case Downsampling_GapFilling.GAP_FILLING_UNSPECIFIED:
            return "GAP_FILLING_UNSPECIFIED";
        case Downsampling_GapFilling.GAP_FILLING_NULL:
            return "GAP_FILLING_NULL";
        case Downsampling_GapFilling.GAP_FILLING_NONE:
            return "GAP_FILLING_NONE";
        case Downsampling_GapFilling.GAP_FILLING_PREVIOUS:
            return "GAP_FILLING_PREVIOUS";
        default:
            return "UNKNOWN";
    }
}
exports.downsampling_GapFillingToJSON = downsampling_GapFillingToJSON;
const baseDownsampling = {
    $type: "yandex.cloud.monitoring.v3.Downsampling",
    gridAggregation: 0,
    gapFilling: 0,
};
exports.Downsampling = {
    $type: "yandex.cloud.monitoring.v3.Downsampling",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxPoints !== undefined) {
            writer.uint32(8).int64(message.maxPoints);
        }
        if (message.gridInterval !== undefined) {
            writer.uint32(16).int64(message.gridInterval);
        }
        if (message.disabled !== undefined) {
            writer.uint32(24).bool(message.disabled);
        }
        if (message.gridAggregation !== 0) {
            writer.uint32(32).int32(message.gridAggregation);
        }
        if (message.gapFilling !== 0) {
            writer.uint32(40).int32(message.gapFilling);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDownsampling);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPoints = longToNumber(reader.int64());
                    break;
                case 2:
                    message.gridInterval = longToNumber(reader.int64());
                    break;
                case 3:
                    message.disabled = reader.bool();
                    break;
                case 4:
                    message.gridAggregation = reader.int32();
                    break;
                case 5:
                    message.gapFilling = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDownsampling);
        message.maxPoints =
            object.maxPoints !== undefined && object.maxPoints !== null
                ? Number(object.maxPoints)
                : undefined;
        message.gridInterval =
            object.gridInterval !== undefined && object.gridInterval !== null
                ? Number(object.gridInterval)
                : undefined;
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : undefined;
        message.gridAggregation =
            object.gridAggregation !== undefined && object.gridAggregation !== null
                ? downsampling_GridAggregationFromJSON(object.gridAggregation)
                : 0;
        message.gapFilling =
            object.gapFilling !== undefined && object.gapFilling !== null
                ? downsampling_GapFillingFromJSON(object.gapFilling)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxPoints !== undefined &&
            (obj.maxPoints = Math.round(message.maxPoints));
        message.gridInterval !== undefined &&
            (obj.gridInterval = Math.round(message.gridInterval));
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.gridAggregation !== undefined &&
            (obj.gridAggregation = downsampling_GridAggregationToJSON(message.gridAggregation));
        message.gapFilling !== undefined &&
            (obj.gapFilling = downsampling_GapFillingToJSON(message.gapFilling));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseDownsampling);
        message.maxPoints = (_a = object.maxPoints) !== null && _a !== void 0 ? _a : undefined;
        message.gridInterval = (_b = object.gridInterval) !== null && _b !== void 0 ? _b : undefined;
        message.disabled = (_c = object.disabled) !== null && _c !== void 0 ? _c : undefined;
        message.gridAggregation = (_d = object.gridAggregation) !== null && _d !== void 0 ? _d : 0;
        message.gapFilling = (_e = object.gapFilling) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Downsampling.$type, exports.Downsampling);
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
