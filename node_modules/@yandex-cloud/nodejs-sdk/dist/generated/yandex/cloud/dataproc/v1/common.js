"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = exports.healthToJSON = exports.healthFromJSON = exports.Health = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.dataproc.v1";
var Health;
(function (Health) {
    /** HEALTH_UNKNOWN - Object is in unknown state (we have no data). */
    Health[Health["HEALTH_UNKNOWN"] = 0] = "HEALTH_UNKNOWN";
    /** ALIVE - Object is alive and well (for example, all hosts of the cluster are alive). */
    Health[Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - Object is inoperable (it cannot perform any of its essential functions). */
    Health[Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - Object is partially alive (it can perform some of its essential functions). */
    Health[Health["DEGRADED"] = 3] = "DEGRADED";
    Health[Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Health = exports.Health || (exports.Health = {}));
function healthFromJSON(object) {
    switch (object) {
        case 0:
        case "HEALTH_UNKNOWN":
            return Health.HEALTH_UNKNOWN;
        case 1:
        case "ALIVE":
            return Health.ALIVE;
        case 2:
        case "DEAD":
            return Health.DEAD;
        case 3:
        case "DEGRADED":
            return Health.DEGRADED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Health.UNRECOGNIZED;
    }
}
exports.healthFromJSON = healthFromJSON;
function healthToJSON(object) {
    switch (object) {
        case Health.HEALTH_UNKNOWN:
            return "HEALTH_UNKNOWN";
        case Health.ALIVE:
            return "ALIVE";
        case Health.DEAD:
            return "DEAD";
        case Health.DEGRADED:
            return "DEGRADED";
        default:
            return "UNKNOWN";
    }
}
exports.healthToJSON = healthToJSON;
const baseResources = {
    $type: "yandex.cloud.dataproc.v1.Resources",
    resourcePresetId: "",
    diskTypeId: "",
    diskSize: 0,
};
exports.Resources = {
    $type: "yandex.cloud.dataproc.v1.Resources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskTypeId !== "") {
            writer.uint32(18).string(message.diskTypeId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(24).int64(message.diskSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskTypeId = reader.string();
                    break;
                case 3:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResources);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : "";
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseResources);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        message.diskTypeId = (_b = object.diskTypeId) !== null && _b !== void 0 ? _b : "";
        message.diskSize = (_c = object.diskSize) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
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
