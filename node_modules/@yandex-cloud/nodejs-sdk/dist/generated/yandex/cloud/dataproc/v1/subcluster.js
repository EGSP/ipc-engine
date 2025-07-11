"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Host = exports.Subcluster = exports.AutoscalingConfig = exports.roleToJSON = exports.roleFromJSON = exports.Role = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const common_1 = require("../../../../yandex/cloud/dataproc/v1/common");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.dataproc.v1";
var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    /**
     * MASTERNODE - The subcluster fulfills the master role.
     *
     * Master can run the following services, depending on the requested components:
     * * HDFS: Namenode, Secondary Namenode
     * * YARN: ResourceManager, Timeline Server
     * * HBase Master
     * * Hive: Server, Metastore, HCatalog
     * * Spark History Server
     * * Zeppelin
     * * ZooKeeper
     */
    Role[Role["MASTERNODE"] = 1] = "MASTERNODE";
    /**
     * DATANODE - The subcluster is a DATANODE in a Data Proc cluster.
     *
     * DATANODE can run the following services, depending on the requested components:
     * * HDFS DataNode
     * * YARN NodeManager
     * * HBase RegionServer
     * * Spark libraries
     */
    Role[Role["DATANODE"] = 2] = "DATANODE";
    /**
     * COMPUTENODE - The subcluster is a COMPUTENODE in a Data Proc cluster.
     *
     * COMPUTENODE can run the following services, depending on the requested components:
     * * YARN NodeManager
     * * Spark libraries
     */
    Role[Role["COMPUTENODE"] = 3] = "COMPUTENODE";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role = exports.Role || (exports.Role = {}));
function roleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case "MASTERNODE":
            return Role.MASTERNODE;
        case 2:
        case "DATANODE":
            return Role.DATANODE;
        case 3:
        case "COMPUTENODE":
            return Role.COMPUTENODE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Role.UNRECOGNIZED;
    }
}
exports.roleFromJSON = roleFromJSON;
function roleToJSON(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Role.MASTERNODE:
            return "MASTERNODE";
        case Role.DATANODE:
            return "DATANODE";
        case Role.COMPUTENODE:
            return "COMPUTENODE";
        default:
            return "UNKNOWN";
    }
}
exports.roleToJSON = roleToJSON;
const baseAutoscalingConfig = {
    $type: "yandex.cloud.dataproc.v1.AutoscalingConfig",
    maxHostsCount: 0,
    preemptible: false,
    cpuUtilizationTarget: 0,
    decommissionTimeout: 0,
};
exports.AutoscalingConfig = {
    $type: "yandex.cloud.dataproc.v1.AutoscalingConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxHostsCount !== 0) {
            writer.uint32(8).int64(message.maxHostsCount);
        }
        if (message.preemptible === true) {
            writer.uint32(16).bool(message.preemptible);
        }
        if (message.measurementDuration !== undefined) {
            duration_1.Duration.encode(message.measurementDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.warmupDuration !== undefined) {
            duration_1.Duration.encode(message.warmupDuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.stabilizationDuration !== undefined) {
            duration_1.Duration.encode(message.stabilizationDuration, writer.uint32(42).fork()).ldelim();
        }
        if (message.cpuUtilizationTarget !== 0) {
            writer.uint32(49).double(message.cpuUtilizationTarget);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(56).int64(message.decommissionTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAutoscalingConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxHostsCount = longToNumber(reader.int64());
                    break;
                case 2:
                    message.preemptible = reader.bool();
                    break;
                case 3:
                    message.measurementDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.warmupDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stabilizationDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.cpuUtilizationTarget = reader.double();
                    break;
                case 7:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAutoscalingConfig);
        message.maxHostsCount =
            object.maxHostsCount !== undefined && object.maxHostsCount !== null
                ? Number(object.maxHostsCount)
                : 0;
        message.preemptible =
            object.preemptible !== undefined && object.preemptible !== null
                ? Boolean(object.preemptible)
                : false;
        message.measurementDuration =
            object.measurementDuration !== undefined &&
                object.measurementDuration !== null
                ? duration_1.Duration.fromJSON(object.measurementDuration)
                : undefined;
        message.warmupDuration =
            object.warmupDuration !== undefined && object.warmupDuration !== null
                ? duration_1.Duration.fromJSON(object.warmupDuration)
                : undefined;
        message.stabilizationDuration =
            object.stabilizationDuration !== undefined &&
                object.stabilizationDuration !== null
                ? duration_1.Duration.fromJSON(object.stabilizationDuration)
                : undefined;
        message.cpuUtilizationTarget =
            object.cpuUtilizationTarget !== undefined &&
                object.cpuUtilizationTarget !== null
                ? Number(object.cpuUtilizationTarget)
                : 0;
        message.decommissionTimeout =
            object.decommissionTimeout !== undefined &&
                object.decommissionTimeout !== null
                ? Number(object.decommissionTimeout)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxHostsCount !== undefined &&
            (obj.maxHostsCount = Math.round(message.maxHostsCount));
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        message.measurementDuration !== undefined &&
            (obj.measurementDuration = message.measurementDuration
                ? duration_1.Duration.toJSON(message.measurementDuration)
                : undefined);
        message.warmupDuration !== undefined &&
            (obj.warmupDuration = message.warmupDuration
                ? duration_1.Duration.toJSON(message.warmupDuration)
                : undefined);
        message.stabilizationDuration !== undefined &&
            (obj.stabilizationDuration = message.stabilizationDuration
                ? duration_1.Duration.toJSON(message.stabilizationDuration)
                : undefined);
        message.cpuUtilizationTarget !== undefined &&
            (obj.cpuUtilizationTarget = message.cpuUtilizationTarget);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = Math.round(message.decommissionTimeout));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAutoscalingConfig);
        message.maxHostsCount = (_a = object.maxHostsCount) !== null && _a !== void 0 ? _a : 0;
        message.preemptible = (_b = object.preemptible) !== null && _b !== void 0 ? _b : false;
        message.measurementDuration =
            object.measurementDuration !== undefined &&
                object.measurementDuration !== null
                ? duration_1.Duration.fromPartial(object.measurementDuration)
                : undefined;
        message.warmupDuration =
            object.warmupDuration !== undefined && object.warmupDuration !== null
                ? duration_1.Duration.fromPartial(object.warmupDuration)
                : undefined;
        message.stabilizationDuration =
            object.stabilizationDuration !== undefined &&
                object.stabilizationDuration !== null
                ? duration_1.Duration.fromPartial(object.stabilizationDuration)
                : undefined;
        message.cpuUtilizationTarget = (_c = object.cpuUtilizationTarget) !== null && _c !== void 0 ? _c : 0;
        message.decommissionTimeout = (_d = object.decommissionTimeout) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AutoscalingConfig.$type, exports.AutoscalingConfig);
const baseSubcluster = {
    $type: "yandex.cloud.dataproc.v1.Subcluster",
    id: "",
    clusterId: "",
    name: "",
    role: 0,
    subnetId: "",
    hostsCount: 0,
    assignPublicIp: false,
    instanceGroupId: "",
};
exports.Subcluster = {
    $type: "yandex.cloud.dataproc.v1.Subcluster",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(58).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(64).int64(message.hostsCount);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        if (message.autoscalingConfig !== undefined) {
            exports.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.instanceGroupId !== "") {
            writer.uint32(90).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSubcluster);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.role = reader.int32();
                    break;
                case 6:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.subnetId = reader.string();
                    break;
                case 8:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                case 10:
                    message.autoscalingConfig = exports.AutoscalingConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSubcluster);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.role =
            object.role !== undefined && object.role !== null
                ? roleFromJSON(object.role)
                : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromJSON(object.resources)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.hostsCount =
            object.hostsCount !== undefined && object.hostsCount !== null
                ? Number(object.hostsCount)
                : 0;
        message.assignPublicIp =
            object.assignPublicIp !== undefined && object.assignPublicIp !== null
                ? Boolean(object.assignPublicIp)
                : false;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? exports.AutoscalingConfig.fromJSON(object.autoscalingConfig)
                : undefined;
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.hostsCount !== undefined &&
            (obj.hostsCount = Math.round(message.hostsCount));
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? exports.AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseSubcluster);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.role = (_e = object.role) !== null && _e !== void 0 ? _e : 0;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? common_1.Resources.fromPartial(object.resources)
                : undefined;
        message.subnetId = (_f = object.subnetId) !== null && _f !== void 0 ? _f : "";
        message.hostsCount = (_g = object.hostsCount) !== null && _g !== void 0 ? _g : 0;
        message.assignPublicIp = (_h = object.assignPublicIp) !== null && _h !== void 0 ? _h : false;
        message.autoscalingConfig =
            object.autoscalingConfig !== undefined &&
                object.autoscalingConfig !== null
                ? exports.AutoscalingConfig.fromPartial(object.autoscalingConfig)
                : undefined;
        message.instanceGroupId = (_j = object.instanceGroupId) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subcluster.$type, exports.Subcluster);
const baseHost = {
    $type: "yandex.cloud.dataproc.v1.Host",
    name: "",
    subclusterId: "",
    health: 0,
    computeInstanceId: "",
    role: 0,
};
exports.Host = {
    $type: "yandex.cloud.dataproc.v1.Host",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.subclusterId !== "") {
            writer.uint32(18).string(message.subclusterId);
        }
        if (message.health !== 0) {
            writer.uint32(24).int32(message.health);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(34).string(message.computeInstanceId);
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
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
                    message.subclusterId = reader.string();
                    break;
                case 3:
                    message.health = reader.int32();
                    break;
                case 4:
                    message.computeInstanceId = reader.string();
                    break;
                case 5:
                    message.role = reader.int32();
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
        message.subclusterId =
            object.subclusterId !== undefined && object.subclusterId !== null
                ? String(object.subclusterId)
                : "";
        message.health =
            object.health !== undefined && object.health !== null
                ? (0, common_1.healthFromJSON)(object.health)
                : 0;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.role =
            object.role !== undefined && object.role !== null
                ? roleFromJSON(object.role)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        message.health !== undefined && (obj.health = (0, common_1.healthToJSON)(message.health));
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.subclusterId = (_b = object.subclusterId) !== null && _b !== void 0 ? _b : "";
        message.health = (_c = object.health) !== null && _c !== void 0 ? _c : 0;
        message.computeInstanceId = (_d = object.computeInstanceId) !== null && _d !== void 0 ? _d : "";
        message.role = (_e = object.role) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
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
