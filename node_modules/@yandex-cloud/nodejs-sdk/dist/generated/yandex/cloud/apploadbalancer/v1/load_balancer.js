"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScalePolicy = exports.TargetState_ZoneHealthcheckStatus = exports.TargetState_HealthcheckStatus = exports.TargetState = exports.TlsHandler = exports.SniMatch = exports.Redirects = exports.HttpHandler = exports.StreamHandler = exports.Http2Options = exports.StreamListener = exports.TlsListener = exports.HttpListener = exports.Endpoint = exports.Listener = exports.AllocationPolicy = exports.Location = exports.ExternalIpv6Address = exports.InternalIpv4Address = exports.ExternalIpv4Address = exports.Address = exports.LoadBalancer_LabelsEntry = exports.LoadBalancer = exports.targetState_StatusToJSON = exports.targetState_StatusFromJSON = exports.TargetState_Status = exports.loadBalancer_StatusToJSON = exports.loadBalancer_StatusFromJSON = exports.LoadBalancer_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const logging_1 = require("../../../../yandex/cloud/apploadbalancer/v1/logging");
const target_group_1 = require("../../../../yandex/cloud/apploadbalancer/v1/target_group");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
var LoadBalancer_Status;
(function (LoadBalancer_Status) {
    LoadBalancer_Status[LoadBalancer_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The application load balancer is being created. */
    LoadBalancer_Status[LoadBalancer_Status["CREATING"] = 1] = "CREATING";
    /** STARTING - The application load balancer is being started. */
    LoadBalancer_Status[LoadBalancer_Status["STARTING"] = 2] = "STARTING";
    /** ACTIVE - The application load balancer is active and sends traffic to the targets. */
    LoadBalancer_Status[LoadBalancer_Status["ACTIVE"] = 3] = "ACTIVE";
    /** STOPPING - The application load balancer is being stopped. */
    LoadBalancer_Status[LoadBalancer_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - The application load balancer is stopped and doesn't send traffic to the targets. */
    LoadBalancer_Status[LoadBalancer_Status["STOPPED"] = 5] = "STOPPED";
    /** DELETING - The application load balancer is being deleted. */
    LoadBalancer_Status[LoadBalancer_Status["DELETING"] = 6] = "DELETING";
    LoadBalancer_Status[LoadBalancer_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LoadBalancer_Status = exports.LoadBalancer_Status || (exports.LoadBalancer_Status = {}));
function loadBalancer_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return LoadBalancer_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return LoadBalancer_Status.CREATING;
        case 2:
        case "STARTING":
            return LoadBalancer_Status.STARTING;
        case 3:
        case "ACTIVE":
            return LoadBalancer_Status.ACTIVE;
        case 4:
        case "STOPPING":
            return LoadBalancer_Status.STOPPING;
        case 5:
        case "STOPPED":
            return LoadBalancer_Status.STOPPED;
        case 6:
        case "DELETING":
            return LoadBalancer_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LoadBalancer_Status.UNRECOGNIZED;
    }
}
exports.loadBalancer_StatusFromJSON = loadBalancer_StatusFromJSON;
function loadBalancer_StatusToJSON(object) {
    switch (object) {
        case LoadBalancer_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case LoadBalancer_Status.CREATING:
            return "CREATING";
        case LoadBalancer_Status.STARTING:
            return "STARTING";
        case LoadBalancer_Status.ACTIVE:
            return "ACTIVE";
        case LoadBalancer_Status.STOPPING:
            return "STOPPING";
        case LoadBalancer_Status.STOPPED:
            return "STOPPED";
        case LoadBalancer_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.loadBalancer_StatusToJSON = loadBalancer_StatusToJSON;
/** Supported target statuses. */
var TargetState_Status;
(function (TargetState_Status) {
    TargetState_Status[TargetState_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /**
     * HEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] are passed
     * (the number depends on the [HealthCheck.healthy_threshold] setting) and the target is ready to receive traffic.
     */
    TargetState_Status[TargetState_Status["HEALTHY"] = 1] = "HEALTHY";
    /**
     * PARTIALLY_HEALTHY - Some of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting).
     * The target is ready to receive traffic from the load balancer nodes which, based on their health checks,
     * consider the target healthy.
     */
    TargetState_Status[TargetState_Status["PARTIALLY_HEALTHY"] = 2] = "PARTIALLY_HEALTHY";
    /**
     * UNHEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting) and the target is not receiving traffic.
     */
    TargetState_Status[TargetState_Status["UNHEALTHY"] = 3] = "UNHEALTHY";
    /** DRAINING - Target is being deleted and the application load balancer is no longer sending traffic to this target. */
    TargetState_Status[TargetState_Status["DRAINING"] = 4] = "DRAINING";
    TargetState_Status[TargetState_Status["TIMEOUT"] = 5] = "TIMEOUT";
    TargetState_Status[TargetState_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TargetState_Status = exports.TargetState_Status || (exports.TargetState_Status = {}));
function targetState_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return TargetState_Status.STATUS_UNSPECIFIED;
        case 1:
        case "HEALTHY":
            return TargetState_Status.HEALTHY;
        case 2:
        case "PARTIALLY_HEALTHY":
            return TargetState_Status.PARTIALLY_HEALTHY;
        case 3:
        case "UNHEALTHY":
            return TargetState_Status.UNHEALTHY;
        case 4:
        case "DRAINING":
            return TargetState_Status.DRAINING;
        case 5:
        case "TIMEOUT":
            return TargetState_Status.TIMEOUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TargetState_Status.UNRECOGNIZED;
    }
}
exports.targetState_StatusFromJSON = targetState_StatusFromJSON;
function targetState_StatusToJSON(object) {
    switch (object) {
        case TargetState_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case TargetState_Status.HEALTHY:
            return "HEALTHY";
        case TargetState_Status.PARTIALLY_HEALTHY:
            return "PARTIALLY_HEALTHY";
        case TargetState_Status.UNHEALTHY:
            return "UNHEALTHY";
        case TargetState_Status.DRAINING:
            return "DRAINING";
        case TargetState_Status.TIMEOUT:
            return "TIMEOUT";
        default:
            return "UNKNOWN";
    }
}
exports.targetState_StatusToJSON = targetState_StatusToJSON;
const baseLoadBalancer = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer",
    id: "",
    name: "",
    description: "",
    folderId: "",
    status: 0,
    regionId: "",
    networkId: "",
    logGroupId: "",
    securityGroupIds: "",
};
exports.LoadBalancer = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer",
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
        if (message.folderId !== "") {
            writer.uint32(34).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.LoadBalancer_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.regionId !== "") {
            writer.uint32(58).string(message.regionId);
        }
        if (message.networkId !== "") {
            writer.uint32(66).string(message.networkId);
        }
        for (const v of message.listeners) {
            exports.Listener.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            exports.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.logGroupId !== "") {
            writer.uint32(90).string(message.logGroupId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(98).string(v);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.autoScalePolicy !== undefined) {
            exports.AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(114).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            logging_1.LogOptions.encode(message.logOptions, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadBalancer);
        message.labels = {};
        message.listeners = [];
        message.securityGroupIds = [];
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
                    message.folderId = reader.string();
                    break;
                case 5:
                    const entry5 = exports.LoadBalancer_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.regionId = reader.string();
                    break;
                case 8:
                    message.networkId = reader.string();
                    break;
                case 9:
                    message.listeners.push(exports.Listener.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.allocationPolicy = exports.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.logGroupId = reader.string();
                    break;
                case 12:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 13:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.autoScalePolicy = exports.AutoScalePolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.logOptions = logging_1.LogOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseLoadBalancer);
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
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.status =
            object.status !== undefined && object.status !== null
                ? loadBalancer_StatusFromJSON(object.status)
                : 0;
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : "";
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.listeners = ((_b = object.listeners) !== null && _b !== void 0 ? _b : []).map((e) => exports.Listener.fromJSON(e));
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? exports.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : "";
        message.securityGroupIds = ((_c = object.securityGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? exports.AutoScalePolicy.fromJSON(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromJSON(object.logOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = loadBalancer_StatusToJSON(message.status));
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.listeners) {
            obj.listeners = message.listeners.map((e) => e ? exports.Listener.toJSON(e) : undefined);
        }
        else {
            obj.listeners = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? exports.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.autoScalePolicy !== undefined &&
            (obj.autoScalePolicy = message.autoScalePolicy
                ? exports.AutoScalePolicy.toJSON(message.autoScalePolicy)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? logging_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseLoadBalancer);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.folderId = (_d = object.folderId) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.regionId = (_g = object.regionId) !== null && _g !== void 0 ? _g : "";
        message.networkId = (_h = object.networkId) !== null && _h !== void 0 ? _h : "";
        message.listeners =
            ((_j = object.listeners) === null || _j === void 0 ? void 0 : _j.map((e) => exports.Listener.fromPartial(e))) || [];
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? exports.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.logGroupId = (_k = object.logGroupId) !== null && _k !== void 0 ? _k : "";
        message.securityGroupIds = ((_l = object.securityGroupIds) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        message.createdAt = (_m = object.createdAt) !== null && _m !== void 0 ? _m : undefined;
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? exports.AutoScalePolicy.fromPartial(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancer.$type, exports.LoadBalancer);
const baseLoadBalancer_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
    key: "",
    value: "",
};
exports.LoadBalancer_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancer.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadBalancer_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoadBalancer_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLoadBalancer_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancer_LabelsEntry.$type, exports.LoadBalancer_LabelsEntry);
const baseAddress = {
    $type: "yandex.cloud.apploadbalancer.v1.Address",
};
exports.Address = {
    $type: "yandex.cloud.apploadbalancer.v1.Address",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.externalIpv4Address !== undefined) {
            exports.ExternalIpv4Address.encode(message.externalIpv4Address, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalIpv4Address !== undefined) {
            exports.InternalIpv4Address.encode(message.internalIpv4Address, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalIpv6Address !== undefined) {
            exports.ExternalIpv6Address.encode(message.externalIpv6Address, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddress);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4Address = exports.ExternalIpv4Address.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.internalIpv4Address = exports.InternalIpv4Address.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalIpv6Address = exports.ExternalIpv6Address.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddress);
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined &&
                object.externalIpv4Address !== null
                ? exports.ExternalIpv4Address.fromJSON(object.externalIpv4Address)
                : undefined;
        message.internalIpv4Address =
            object.internalIpv4Address !== undefined &&
                object.internalIpv4Address !== null
                ? exports.InternalIpv4Address.fromJSON(object.internalIpv4Address)
                : undefined;
        message.externalIpv6Address =
            object.externalIpv6Address !== undefined &&
                object.externalIpv6Address !== null
                ? exports.ExternalIpv6Address.fromJSON(object.externalIpv6Address)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address
                ? exports.ExternalIpv4Address.toJSON(message.externalIpv4Address)
                : undefined);
        message.internalIpv4Address !== undefined &&
            (obj.internalIpv4Address = message.internalIpv4Address
                ? exports.InternalIpv4Address.toJSON(message.internalIpv4Address)
                : undefined);
        message.externalIpv6Address !== undefined &&
            (obj.externalIpv6Address = message.externalIpv6Address
                ? exports.ExternalIpv6Address.toJSON(message.externalIpv6Address)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAddress);
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined &&
                object.externalIpv4Address !== null
                ? exports.ExternalIpv4Address.fromPartial(object.externalIpv4Address)
                : undefined;
        message.internalIpv4Address =
            object.internalIpv4Address !== undefined &&
                object.internalIpv4Address !== null
                ? exports.InternalIpv4Address.fromPartial(object.internalIpv4Address)
                : undefined;
        message.externalIpv6Address =
            object.externalIpv6Address !== undefined &&
                object.externalIpv6Address !== null
                ? exports.ExternalIpv6Address.fromPartial(object.externalIpv6Address)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Address.$type, exports.Address);
const baseExternalIpv4Address = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address",
    address: "",
};
exports.ExternalIpv4Address = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4Address",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv4Address);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv4Address);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExternalIpv4Address);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4Address.$type, exports.ExternalIpv4Address);
const baseInternalIpv4Address = {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address",
    address: "",
    subnetId: "",
};
exports.InternalIpv4Address = {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4Address",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInternalIpv4Address);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInternalIpv4Address);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInternalIpv4Address);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InternalIpv4Address.$type, exports.InternalIpv4Address);
const baseExternalIpv6Address = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address",
    address: "",
};
exports.ExternalIpv6Address = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6Address",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv6Address);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv6Address);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExternalIpv6Address);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv6Address.$type, exports.ExternalIpv6Address);
const baseLocation = {
    $type: "yandex.cloud.apploadbalancer.v1.Location",
    zoneId: "",
    subnetId: "",
    disableTraffic: false,
};
exports.Location = {
    $type: "yandex.cloud.apploadbalancer.v1.Location",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.disableTraffic === true) {
            writer.uint32(24).bool(message.disableTraffic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLocation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.disableTraffic = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLocation);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.disableTraffic =
            object.disableTraffic !== undefined && object.disableTraffic !== null
                ? Boolean(object.disableTraffic)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.disableTraffic !== undefined &&
            (obj.disableTraffic = message.disableTraffic);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLocation);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.disableTraffic = (_c = object.disableTraffic) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Location.$type, exports.Location);
const baseAllocationPolicy = {
    $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy",
};
exports.AllocationPolicy = {
    $type: "yandex.cloud.apploadbalancer.v1.AllocationPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locations) {
            exports.Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAllocationPolicy);
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(exports.Location.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAllocationPolicy);
        message.locations = ((_a = object.locations) !== null && _a !== void 0 ? _a : []).map((e) => exports.Location.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? exports.Location.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAllocationPolicy);
        message.locations =
            ((_a = object.locations) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Location.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AllocationPolicy.$type, exports.AllocationPolicy);
const baseListener = {
    $type: "yandex.cloud.apploadbalancer.v1.Listener",
    name: "",
};
exports.Listener = {
    $type: "yandex.cloud.apploadbalancer.v1.Listener",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpoints) {
            exports.Endpoint.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            exports.HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamListener.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListener);
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.endpoints.push(exports.Endpoint.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.http = exports.HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = exports.TlsListener.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = exports.StreamListener.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseListener);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.endpoints = ((_a = object.endpoints) !== null && _a !== void 0 ? _a : []).map((e) => exports.Endpoint.fromJSON(e));
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpListener.fromJSON(object.http)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.TlsListener.fromJSON(object.tls)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.StreamListener.fromJSON(object.stream)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? exports.Endpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        message.http !== undefined &&
            (obj.http = message.http ? exports.HttpListener.toJSON(message.http) : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls ? exports.TlsListener.toJSON(message.tls) : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? exports.StreamListener.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListener);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.endpoints =
            ((_b = object.endpoints) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Endpoint.fromPartial(e))) || [];
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpListener.fromPartial(object.http)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.TlsListener.fromPartial(object.tls)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.StreamListener.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Listener.$type, exports.Listener);
const baseEndpoint = {
    $type: "yandex.cloud.apploadbalancer.v1.Endpoint",
    ports: 0,
};
exports.Endpoint = {
    $type: "yandex.cloud.apploadbalancer.v1.Endpoint",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            exports.Address.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEndpoint);
        message.addresses = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(exports.Address.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ports.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.ports.push(longToNumber(reader.int64()));
                    }
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
        const message = Object.assign({}, baseEndpoint);
        message.addresses = ((_a = object.addresses) !== null && _a !== void 0 ? _a : []).map((e) => exports.Address.fromJSON(e));
        message.ports = ((_b = object.ports) !== null && _b !== void 0 ? _b : []).map((e) => Number(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? exports.Address.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => Math.round(e));
        }
        else {
            obj.ports = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEndpoint);
        message.addresses =
            ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Address.fromPartial(e))) || [];
        message.ports = ((_b = object.ports) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Endpoint.$type, exports.Endpoint);
const baseHttpListener = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpListener",
};
exports.HttpListener = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpListener",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.handler !== undefined) {
            exports.HttpHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
        }
        if (message.redirects !== undefined) {
            exports.Redirects.encode(message.redirects, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpListener);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.handler = exports.HttpHandler.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redirects = exports.Redirects.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHttpListener);
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.HttpHandler.fromJSON(object.handler)
                : undefined;
        message.redirects =
            object.redirects !== undefined && object.redirects !== null
                ? exports.Redirects.fromJSON(object.redirects)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? exports.HttpHandler.toJSON(message.handler)
                : undefined);
        message.redirects !== undefined &&
            (obj.redirects = message.redirects
                ? exports.Redirects.toJSON(message.redirects)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHttpListener);
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.HttpHandler.fromPartial(object.handler)
                : undefined;
        message.redirects =
            object.redirects !== undefined && object.redirects !== null
                ? exports.Redirects.fromPartial(object.redirects)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpListener.$type, exports.HttpListener);
const baseTlsListener = {
    $type: "yandex.cloud.apploadbalancer.v1.TlsListener",
};
exports.TlsListener = {
    $type: "yandex.cloud.apploadbalancer.v1.TlsListener",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultHandler !== undefined) {
            exports.TlsHandler.encode(message.defaultHandler, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.sniHandlers) {
            exports.SniMatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTlsListener);
        message.sniHandlers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultHandler = exports.TlsHandler.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sniHandlers.push(exports.SniMatch.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTlsListener);
        message.defaultHandler =
            object.defaultHandler !== undefined && object.defaultHandler !== null
                ? exports.TlsHandler.fromJSON(object.defaultHandler)
                : undefined;
        message.sniHandlers = ((_a = object.sniHandlers) !== null && _a !== void 0 ? _a : []).map((e) => exports.SniMatch.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultHandler !== undefined &&
            (obj.defaultHandler = message.defaultHandler
                ? exports.TlsHandler.toJSON(message.defaultHandler)
                : undefined);
        if (message.sniHandlers) {
            obj.sniHandlers = message.sniHandlers.map((e) => e ? exports.SniMatch.toJSON(e) : undefined);
        }
        else {
            obj.sniHandlers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTlsListener);
        message.defaultHandler =
            object.defaultHandler !== undefined && object.defaultHandler !== null
                ? exports.TlsHandler.fromPartial(object.defaultHandler)
                : undefined;
        message.sniHandlers =
            ((_a = object.sniHandlers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SniMatch.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TlsListener.$type, exports.TlsListener);
const baseStreamListener = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamListener",
};
exports.StreamListener = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamListener",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.handler !== undefined) {
            exports.StreamHandler.encode(message.handler, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamListener);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.handler = exports.StreamHandler.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamListener);
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.StreamHandler.fromJSON(object.handler)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? exports.StreamHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStreamListener);
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.StreamHandler.fromPartial(object.handler)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamListener.$type, exports.StreamListener);
const baseHttp2Options = {
    $type: "yandex.cloud.apploadbalancer.v1.Http2Options",
    maxConcurrentStreams: 0,
};
exports.Http2Options = {
    $type: "yandex.cloud.apploadbalancer.v1.Http2Options",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConcurrentStreams !== 0) {
            writer.uint32(8).int64(message.maxConcurrentStreams);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttp2Options);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConcurrentStreams = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHttp2Options);
        message.maxConcurrentStreams =
            object.maxConcurrentStreams !== undefined &&
                object.maxConcurrentStreams !== null
                ? Number(object.maxConcurrentStreams)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConcurrentStreams !== undefined &&
            (obj.maxConcurrentStreams = Math.round(message.maxConcurrentStreams));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHttp2Options);
        message.maxConcurrentStreams = (_a = object.maxConcurrentStreams) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Http2Options.$type, exports.Http2Options);
const baseStreamHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamHandler",
    backendGroupId: "",
};
exports.StreamHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamHandler",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamHandler);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamHandler);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamHandler);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamHandler.$type, exports.StreamHandler);
const baseHttpHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpHandler",
    httpRouterId: "",
    rewriteRequestId: false,
};
exports.HttpHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpHandler",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.http2Options !== undefined) {
            exports.Http2Options.encode(message.http2Options, writer.uint32(18).fork()).ldelim();
        }
        if (message.allowHttp10 !== undefined) {
            writer.uint32(24).bool(message.allowHttp10);
        }
        if (message.rewriteRequestId === true) {
            writer.uint32(32).bool(message.rewriteRequestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpHandler);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.http2Options = exports.Http2Options.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.allowHttp10 = reader.bool();
                    break;
                case 4:
                    message.rewriteRequestId = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHttpHandler);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.http2Options =
            object.http2Options !== undefined && object.http2Options !== null
                ? exports.Http2Options.fromJSON(object.http2Options)
                : undefined;
        message.allowHttp10 =
            object.allowHttp10 !== undefined && object.allowHttp10 !== null
                ? Boolean(object.allowHttp10)
                : undefined;
        message.rewriteRequestId =
            object.rewriteRequestId !== undefined && object.rewriteRequestId !== null
                ? Boolean(object.rewriteRequestId)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.http2Options !== undefined &&
            (obj.http2Options = message.http2Options
                ? exports.Http2Options.toJSON(message.http2Options)
                : undefined);
        message.allowHttp10 !== undefined &&
            (obj.allowHttp10 = message.allowHttp10);
        message.rewriteRequestId !== undefined &&
            (obj.rewriteRequestId = message.rewriteRequestId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHttpHandler);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.http2Options =
            object.http2Options !== undefined && object.http2Options !== null
                ? exports.Http2Options.fromPartial(object.http2Options)
                : undefined;
        message.allowHttp10 = (_b = object.allowHttp10) !== null && _b !== void 0 ? _b : undefined;
        message.rewriteRequestId = (_c = object.rewriteRequestId) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpHandler.$type, exports.HttpHandler);
const baseRedirects = {
    $type: "yandex.cloud.apploadbalancer.v1.Redirects",
    httpToHttps: false,
};
exports.Redirects = {
    $type: "yandex.cloud.apploadbalancer.v1.Redirects",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpToHttps === true) {
            writer.uint32(8).bool(message.httpToHttps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRedirects);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpToHttps = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRedirects);
        message.httpToHttps =
            object.httpToHttps !== undefined && object.httpToHttps !== null
                ? Boolean(object.httpToHttps)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpToHttps !== undefined &&
            (obj.httpToHttps = message.httpToHttps);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRedirects);
        message.httpToHttps = (_a = object.httpToHttps) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Redirects.$type, exports.Redirects);
const baseSniMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.SniMatch",
    name: "",
    serverNames: "",
};
exports.SniMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.SniMatch",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.serverNames) {
            writer.uint32(18).string(v);
        }
        if (message.handler !== undefined) {
            exports.TlsHandler.encode(message.handler, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSniMatch);
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.serverNames.push(reader.string());
                    break;
                case 3:
                    message.handler = exports.TlsHandler.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseSniMatch);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.serverNames = ((_a = object.serverNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.TlsHandler.fromJSON(object.handler)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? exports.TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSniMatch);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.serverNames = ((_b = object.serverNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? exports.TlsHandler.fromPartial(object.handler)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SniMatch.$type, exports.SniMatch);
const baseTlsHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.TlsHandler",
    certificateIds: "",
};
exports.TlsHandler = {
    $type: "yandex.cloud.apploadbalancer.v1.TlsHandler",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpHandler !== undefined) {
            exports.HttpHandler.encode(message.httpHandler, writer.uint32(18).fork()).ldelim();
        }
        if (message.streamHandler !== undefined) {
            exports.StreamHandler.encode(message.streamHandler, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.certificateIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTlsHandler);
        message.certificateIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.httpHandler = exports.HttpHandler.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.streamHandler = exports.StreamHandler.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.certificateIds.push(reader.string());
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
        const message = Object.assign({}, baseTlsHandler);
        message.httpHandler =
            object.httpHandler !== undefined && object.httpHandler !== null
                ? exports.HttpHandler.fromJSON(object.httpHandler)
                : undefined;
        message.streamHandler =
            object.streamHandler !== undefined && object.streamHandler !== null
                ? exports.StreamHandler.fromJSON(object.streamHandler)
                : undefined;
        message.certificateIds = ((_a = object.certificateIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpHandler !== undefined &&
            (obj.httpHandler = message.httpHandler
                ? exports.HttpHandler.toJSON(message.httpHandler)
                : undefined);
        message.streamHandler !== undefined &&
            (obj.streamHandler = message.streamHandler
                ? exports.StreamHandler.toJSON(message.streamHandler)
                : undefined);
        if (message.certificateIds) {
            obj.certificateIds = message.certificateIds.map((e) => e);
        }
        else {
            obj.certificateIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTlsHandler);
        message.httpHandler =
            object.httpHandler !== undefined && object.httpHandler !== null
                ? exports.HttpHandler.fromPartial(object.httpHandler)
                : undefined;
        message.streamHandler =
            object.streamHandler !== undefined && object.streamHandler !== null
                ? exports.StreamHandler.fromPartial(object.streamHandler)
                : undefined;
        message.certificateIds = ((_a = object.certificateIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TlsHandler.$type, exports.TlsHandler);
const baseTargetState = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState",
};
exports.TargetState = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== undefined) {
            exports.TargetState_HealthcheckStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        if (message.target !== undefined) {
            target_group_1.Target.encode(message.target, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = exports.TargetState_HealthcheckStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.target = target_group_1.Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTargetState);
        message.status =
            object.status !== undefined && object.status !== null
                ? exports.TargetState_HealthcheckStatus.fromJSON(object.status)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? target_group_1.Target.fromJSON(object.target)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = message.status
                ? exports.TargetState_HealthcheckStatus.toJSON(message.status)
                : undefined);
        message.target !== undefined &&
            (obj.target = message.target ? target_group_1.Target.toJSON(message.target) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTargetState);
        message.status =
            object.status !== undefined && object.status !== null
                ? exports.TargetState_HealthcheckStatus.fromPartial(object.status)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? target_group_1.Target.fromPartial(object.target)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetState.$type, exports.TargetState);
const baseTargetState_HealthcheckStatus = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus",
};
exports.TargetState_HealthcheckStatus = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.HealthcheckStatus",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.zoneStatuses) {
            exports.TargetState_ZoneHealthcheckStatus.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetState_HealthcheckStatus);
        message.zoneStatuses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneStatuses.push(exports.TargetState_ZoneHealthcheckStatus.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTargetState_HealthcheckStatus);
        message.zoneStatuses = ((_a = object.zoneStatuses) !== null && _a !== void 0 ? _a : []).map((e) => exports.TargetState_ZoneHealthcheckStatus.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.zoneStatuses) {
            obj.zoneStatuses = message.zoneStatuses.map((e) => e ? exports.TargetState_ZoneHealthcheckStatus.toJSON(e) : undefined);
        }
        else {
            obj.zoneStatuses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTargetState_HealthcheckStatus);
        message.zoneStatuses =
            ((_a = object.zoneStatuses) === null || _a === void 0 ? void 0 : _a.map((e) => exports.TargetState_ZoneHealthcheckStatus.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetState_HealthcheckStatus.$type, exports.TargetState_HealthcheckStatus);
const baseTargetState_ZoneHealthcheckStatus = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus",
    zoneId: "",
    status: 0,
    failedActiveHc: false,
};
exports.TargetState_ZoneHealthcheckStatus = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetState.ZoneHealthcheckStatus",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.failedActiveHc === true) {
            writer.uint32(24).bool(message.failedActiveHc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetState_ZoneHealthcheckStatus);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.failedActiveHc = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTargetState_ZoneHealthcheckStatus);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? targetState_StatusFromJSON(object.status)
                : 0;
        message.failedActiveHc =
            object.failedActiveHc !== undefined && object.failedActiveHc !== null
                ? Boolean(object.failedActiveHc)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined &&
            (obj.status = targetState_StatusToJSON(message.status));
        message.failedActiveHc !== undefined &&
            (obj.failedActiveHc = message.failedActiveHc);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTargetState_ZoneHealthcheckStatus);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.failedActiveHc = (_c = object.failedActiveHc) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetState_ZoneHealthcheckStatus.$type, exports.TargetState_ZoneHealthcheckStatus);
const baseAutoScalePolicy = {
    $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy",
    minZoneSize: 0,
    maxSize: 0,
};
exports.AutoScalePolicy = {
    $type: "yandex.cloud.apploadbalancer.v1.AutoScalePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minZoneSize !== 0) {
            writer.uint32(8).int64(message.minZoneSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAutoScalePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minZoneSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAutoScalePolicy);
        message.minZoneSize =
            object.minZoneSize !== undefined && object.minZoneSize !== null
                ? Number(object.minZoneSize)
                : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minZoneSize !== undefined &&
            (obj.minZoneSize = Math.round(message.minZoneSize));
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAutoScalePolicy);
        message.minZoneSize = (_a = object.minZoneSize) !== null && _a !== void 0 ? _a : 0;
        message.maxSize = (_b = object.maxSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AutoScalePolicy.$type, exports.AutoScalePolicy);
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
