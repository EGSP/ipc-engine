"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = exports.host_HealthToJSON = exports.host_HealthFromJSON = exports.Host_Health = exports.host_TypeToJSON = exports.host_TypeFromJSON = exports.Host_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const config_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/config");
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
var Host_Type;
(function (Host_Type) {
    /** TYPE_UNSPECIFIED - The type is not specified. */
    Host_Type[Host_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** MASTER - A Greenplum® master host. */
    Host_Type[Host_Type["MASTER"] = 1] = "MASTER";
    /** REPLICA - A Greenplum® master replica host. */
    Host_Type[Host_Type["REPLICA"] = 2] = "REPLICA";
    /** SEGMENT - A Greenplum® segment host. */
    Host_Type[Host_Type["SEGMENT"] = 3] = "SEGMENT";
    Host_Type[Host_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Type = exports.Host_Type || (exports.Host_Type = {}));
function host_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case "MASTER":
            return Host_Type.MASTER;
        case 2:
        case "REPLICA":
            return Host_Type.REPLICA;
        case 3:
        case "SEGMENT":
            return Host_Type.SEGMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Type.UNRECOGNIZED;
    }
}
exports.host_TypeFromJSON = host_TypeFromJSON;
function host_TypeToJSON(object) {
    switch (object) {
        case Host_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Host_Type.MASTER:
            return "MASTER";
        case Host_Type.REPLICA:
            return "REPLICA";
        case Host_Type.SEGMENT:
            return "SEGMENT";
        default:
            return "UNKNOWN";
    }
}
exports.host_TypeToJSON = host_TypeToJSON;
var Host_Health;
(function (Host_Health) {
    /** UNKNOWN - Health of the host is unknown. */
    Host_Health[Host_Health["UNKNOWN"] = 0] = "UNKNOWN";
    /** ALIVE - The host is performing all its functions normally. */
    Host_Health[Host_Health["ALIVE"] = 1] = "ALIVE";
    /** DEAD - The host is inoperable and cannot perform any of its essential functions. */
    Host_Health[Host_Health["DEAD"] = 2] = "DEAD";
    /** DEGRADED - The host is working below capacity or not fully functional. */
    Host_Health[Host_Health["DEGRADED"] = 3] = "DEGRADED";
    /** UNBALANCED - One or more segments are not in the preferred role. */
    Host_Health[Host_Health["UNBALANCED"] = 4] = "UNBALANCED";
    Host_Health[Host_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Health = exports.Host_Health || (exports.Host_Health = {}));
function host_HealthFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Host_Health.UNKNOWN;
        case 1:
        case "ALIVE":
            return Host_Health.ALIVE;
        case 2:
        case "DEAD":
            return Host_Health.DEAD;
        case 3:
        case "DEGRADED":
            return Host_Health.DEGRADED;
        case 4:
        case "UNBALANCED":
            return Host_Health.UNBALANCED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Health.UNRECOGNIZED;
    }
}
exports.host_HealthFromJSON = host_HealthFromJSON;
function host_HealthToJSON(object) {
    switch (object) {
        case Host_Health.UNKNOWN:
            return "UNKNOWN";
        case Host_Health.ALIVE:
            return "ALIVE";
        case Host_Health.DEAD:
            return "DEAD";
        case Host_Health.DEGRADED:
            return "DEGRADED";
        case Host_Health.UNBALANCED:
            return "UNBALANCED";
        default:
            return "UNKNOWN";
    }
}
exports.host_HealthToJSON = host_HealthToJSON;
const baseHost = {
    $type: "yandex.cloud.mdb.greenplum.v1.Host",
    name: "",
    clusterId: "",
    zoneId: "",
    type: 0,
    health: 0,
    subnetId: "",
    assignPublicIp: false,
};
exports.Host = {
    $type: "yandex.cloud.mdb.greenplum.v1.Host",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== "") {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.resources !== undefined) {
            config_1.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        if (message.subnetId !== "") {
            writer.uint32(58).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(64).bool(message.assignPublicIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHost);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.resources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.health = reader.int32();
                    break;
                case 7:
                    message.subnetId = reader.string();
                    break;
                case 8:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHost);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? host_TypeFromJSON(object.type)
                : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromJSON(object.resources)
                : undefined;
        message.health =
            object.health !== undefined && object.health !== null
                ? host_HealthFromJSON(object.health)
                : 0;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.type !== undefined && (obj.type = host_TypeToJSON(message.type));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? config_1.Resources.toJSON(message.resources)
                : undefined);
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.zoneId = (_c = object.zoneId) !== null && _c !== void 0 ? _c : "";
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? config_1.Resources.fromPartial(object.resources)
                : undefined;
        message.health = (_e = object.health) !== null && _e !== void 0 ? _e : 0;
        message.subnetId = (_f = object.subnetId) !== null && _f !== void 0 ? _f : "";
        message.assignPublicIp = (_g = object.assignPublicIp) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
