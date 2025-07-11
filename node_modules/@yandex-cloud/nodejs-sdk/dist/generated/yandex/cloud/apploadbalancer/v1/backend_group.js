"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck_GrpcHealthCheck = exports.HealthCheck_HttpHealthCheck = exports.HealthCheck_StreamHealthCheck = exports.HealthCheck = exports.StorageBucketBackend = exports.BackendTls = exports.SecureTransportSettings = exports.PlaintextTransportSettings = exports.TargetGroupsBackend = exports.GrpcBackend = exports.HttpBackend = exports.StreamBackend = exports.LoadBalancingConfig = exports.ConnectionSessionAffinity = exports.CookieSessionAffinity = exports.HeaderSessionAffinity = exports.GrpcBackendGroup = exports.HttpBackendGroup = exports.StreamBackendGroup = exports.BackendGroup_LabelsEntry = exports.BackendGroup = exports.loadBalancingModeToJSON = exports.loadBalancingModeFromJSON = exports.LoadBalancingMode = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const tls_1 = require("../../../../yandex/cloud/apploadbalancer/v1/tls");
const payload_1 = require("../../../../yandex/cloud/apploadbalancer/v1/payload");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A load balancing mode resource.
 * For details about the concept, see
 * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
 */
var LoadBalancingMode;
(function (LoadBalancingMode) {
    /**
     * ROUND_ROBIN - Round robin load balancing mode.
     *
     * All endpoints of the backend take their turns to receive requests attributed to the backend.
     */
    LoadBalancingMode[LoadBalancingMode["ROUND_ROBIN"] = 0] = "ROUND_ROBIN";
    /**
     * RANDOM - Random load balancing mode. Default value.
     *
     * For a request attributed to the backend, an endpoint that receives it is picked at random.
     */
    LoadBalancingMode[LoadBalancingMode["RANDOM"] = 1] = "RANDOM";
    /**
     * LEAST_REQUEST - Least request load balancing mode.
     *
     * To pick an endpoint that receives a request attributed to the backend, the power of two choices algorithm is used;
     * that is, two endpoints are picked at random, and the request is sent to the one which has the fewest active
     * requests.
     */
    LoadBalancingMode[LoadBalancingMode["LEAST_REQUEST"] = 2] = "LEAST_REQUEST";
    /**
     * MAGLEV_HASH - Maglev hashing load balancing mode.
     *
     * Each endpoint is hashed, and a hash table with 65537 rows is filled accordingly, so that every endpoint occupies
     * the same amount of rows. An attribute of each request is also hashed by the same function (if session affinity is
     * enabled for the backend group, the attribute to hash is specified in session affinity configuration). The row
     * with the same number as the resulting value is looked up in the table to determine the endpoint that receives
     * the request.
     *
     * If the backend group with session affinity enabled contains more than one backend with positive weight, endpoints
     * for backends with `MAGLEV_HASH` load balancing mode are picked at `RANDOM` instead.
     */
    LoadBalancingMode[LoadBalancingMode["MAGLEV_HASH"] = 3] = "MAGLEV_HASH";
    LoadBalancingMode[LoadBalancingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LoadBalancingMode = exports.LoadBalancingMode || (exports.LoadBalancingMode = {}));
function loadBalancingModeFromJSON(object) {
    switch (object) {
        case 0:
        case "ROUND_ROBIN":
            return LoadBalancingMode.ROUND_ROBIN;
        case 1:
        case "RANDOM":
            return LoadBalancingMode.RANDOM;
        case 2:
        case "LEAST_REQUEST":
            return LoadBalancingMode.LEAST_REQUEST;
        case 3:
        case "MAGLEV_HASH":
            return LoadBalancingMode.MAGLEV_HASH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LoadBalancingMode.UNRECOGNIZED;
    }
}
exports.loadBalancingModeFromJSON = loadBalancingModeFromJSON;
function loadBalancingModeToJSON(object) {
    switch (object) {
        case LoadBalancingMode.ROUND_ROBIN:
            return "ROUND_ROBIN";
        case LoadBalancingMode.RANDOM:
            return "RANDOM";
        case LoadBalancingMode.LEAST_REQUEST:
            return "LEAST_REQUEST";
        case LoadBalancingMode.MAGLEV_HASH:
            return "MAGLEV_HASH";
        default:
            return "UNKNOWN";
    }
}
exports.loadBalancingModeToJSON = loadBalancingModeToJSON;
const baseBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup",
    id: "",
    name: "",
    description: "",
    folderId: "",
};
exports.BackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup",
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
            exports.BackendGroup_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.http !== undefined) {
            exports.HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            exports.GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamBackendGroup.encode(message.stream, writer.uint32(82).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackendGroup);
        message.labels = {};
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
                    const entry5 = exports.BackendGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = exports.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.grpc = exports.GrpcBackendGroup.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.stream = exports.StreamBackendGroup.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseBackendGroup);
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
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpBackendGroup.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.GrpcBackendGroup.fromJSON(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.StreamBackendGroup.fromJSON(object.stream)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
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
        message.http !== undefined &&
            (obj.http = message.http
                ? exports.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? exports.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? exports.StreamBackendGroup.toJSON(message.stream)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseBackendGroup);
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
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpBackendGroup.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.GrpcBackendGroup.fromPartial(object.grpc)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.StreamBackendGroup.fromPartial(object.stream)
                : undefined;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackendGroup.$type, exports.BackendGroup);
const baseBackendGroup_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.BackendGroup_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry",
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
        const message = Object.assign({}, baseBackendGroup_LabelsEntry);
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
        const message = Object.assign({}, baseBackendGroup_LabelsEntry);
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
        const message = Object.assign({}, baseBackendGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackendGroup_LabelsEntry.$type, exports.BackendGroup_LabelsEntry);
const baseStreamBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup",
};
exports.StreamBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.StreamBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamBackendGroup);
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.StreamBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseStreamBackendGroup);
        message.backends = ((_a = object.backends) !== null && _a !== void 0 ? _a : []).map((e) => exports.StreamBackend.fromJSON(e));
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromJSON(object.connection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.StreamBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamBackendGroup);
        message.backends =
            ((_a = object.backends) === null || _a === void 0 ? void 0 : _a.map((e) => exports.StreamBackend.fromPartial(e))) || [];
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromPartial(object.connection)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamBackendGroup.$type, exports.StreamBackendGroup);
const baseHttpBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup",
};
exports.HttpBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.HttpBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        if (message.header !== undefined) {
            exports.HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.cookie !== undefined) {
            exports.CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpBackendGroup);
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.HttpBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header = exports.HeaderSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cookie = exports.CookieSessionAffinity.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseHttpBackendGroup);
        message.backends = ((_a = object.backends) !== null && _a !== void 0 ? _a : []).map((e) => exports.HttpBackend.fromJSON(e));
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromJSON(object.connection)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.HeaderSessionAffinity.fromJSON(object.header)
                : undefined;
        message.cookie =
            object.cookie !== undefined && object.cookie !== null
                ? exports.CookieSessionAffinity.fromJSON(object.cookie)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.HttpBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? exports.CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHttpBackendGroup);
        message.backends =
            ((_a = object.backends) === null || _a === void 0 ? void 0 : _a.map((e) => exports.HttpBackend.fromPartial(e))) || [];
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromPartial(object.connection)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.HeaderSessionAffinity.fromPartial(object.header)
                : undefined;
        message.cookie =
            object.cookie !== undefined && object.cookie !== null
                ? exports.CookieSessionAffinity.fromPartial(object.cookie)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpBackendGroup.$type, exports.HttpBackendGroup);
const baseGrpcBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup",
};
exports.GrpcBackendGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backends) {
            exports.GrpcBackend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            exports.ConnectionSessionAffinity.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        if (message.header !== undefined) {
            exports.HeaderSessionAffinity.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.cookie !== undefined) {
            exports.CookieSessionAffinity.encode(message.cookie, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcBackendGroup);
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(exports.GrpcBackend.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.connection = exports.ConnectionSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header = exports.HeaderSessionAffinity.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cookie = exports.CookieSessionAffinity.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseGrpcBackendGroup);
        message.backends = ((_a = object.backends) !== null && _a !== void 0 ? _a : []).map((e) => exports.GrpcBackend.fromJSON(e));
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromJSON(object.connection)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.HeaderSessionAffinity.fromJSON(object.header)
                : undefined;
        message.cookie =
            object.cookie !== undefined && object.cookie !== null
                ? exports.CookieSessionAffinity.fromJSON(object.cookie)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) => e ? exports.GrpcBackend.toJSON(e) : undefined);
        }
        else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? exports.CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGrpcBackendGroup);
        message.backends =
            ((_a = object.backends) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GrpcBackend.fromPartial(e))) || [];
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.ConnectionSessionAffinity.fromPartial(object.connection)
                : undefined;
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.HeaderSessionAffinity.fromPartial(object.header)
                : undefined;
        message.cookie =
            object.cookie !== undefined && object.cookie !== null
                ? exports.CookieSessionAffinity.fromPartial(object.cookie)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcBackendGroup.$type, exports.GrpcBackendGroup);
const baseHeaderSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity",
    headerName: "",
};
exports.HeaderSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.headerName !== "") {
            writer.uint32(10).string(message.headerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHeaderSessionAffinity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.headerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHeaderSessionAffinity);
        message.headerName =
            object.headerName !== undefined && object.headerName !== null
                ? String(object.headerName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.headerName !== undefined && (obj.headerName = message.headerName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHeaderSessionAffinity);
        message.headerName = (_a = object.headerName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HeaderSessionAffinity.$type, exports.HeaderSessionAffinity);
const baseCookieSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity",
    name: "",
};
exports.CookieSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.ttl !== undefined) {
            duration_1.Duration.encode(message.ttl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCookieSessionAffinity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.ttl = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCookieSessionAffinity);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? duration_1.Duration.fromJSON(object.ttl)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? duration_1.Duration.toJSON(message.ttl) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCookieSessionAffinity);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.ttl =
            object.ttl !== undefined && object.ttl !== null
                ? duration_1.Duration.fromPartial(object.ttl)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CookieSessionAffinity.$type, exports.CookieSessionAffinity);
const baseConnectionSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity",
    sourceIp: false,
};
exports.ConnectionSessionAffinity = {
    $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceIp === true) {
            writer.uint32(8).bool(message.sourceIp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionSessionAffinity);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionSessionAffinity);
        message.sourceIp =
            object.sourceIp !== undefined && object.sourceIp !== null
                ? Boolean(object.sourceIp)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceIp !== undefined && (obj.sourceIp = message.sourceIp);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseConnectionSessionAffinity);
        message.sourceIp = (_a = object.sourceIp) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionSessionAffinity.$type, exports.ConnectionSessionAffinity);
const baseLoadBalancingConfig = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig",
    panicThreshold: 0,
    localityAwareRoutingPercent: 0,
    strictLocality: false,
    mode: 0,
};
exports.LoadBalancingConfig = {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.panicThreshold !== 0) {
            writer.uint32(8).int64(message.panicThreshold);
        }
        if (message.localityAwareRoutingPercent !== 0) {
            writer.uint32(16).int64(message.localityAwareRoutingPercent);
        }
        if (message.strictLocality === true) {
            writer.uint32(24).bool(message.strictLocality);
        }
        if (message.mode !== 0) {
            writer.uint32(32).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLoadBalancingConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.panicThreshold = longToNumber(reader.int64());
                    break;
                case 2:
                    message.localityAwareRoutingPercent = longToNumber(reader.int64());
                    break;
                case 3:
                    message.strictLocality = reader.bool();
                    break;
                case 4:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLoadBalancingConfig);
        message.panicThreshold =
            object.panicThreshold !== undefined && object.panicThreshold !== null
                ? Number(object.panicThreshold)
                : 0;
        message.localityAwareRoutingPercent =
            object.localityAwareRoutingPercent !== undefined &&
                object.localityAwareRoutingPercent !== null
                ? Number(object.localityAwareRoutingPercent)
                : 0;
        message.strictLocality =
            object.strictLocality !== undefined && object.strictLocality !== null
                ? Boolean(object.strictLocality)
                : false;
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? loadBalancingModeFromJSON(object.mode)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.panicThreshold !== undefined &&
            (obj.panicThreshold = Math.round(message.panicThreshold));
        message.localityAwareRoutingPercent !== undefined &&
            (obj.localityAwareRoutingPercent = Math.round(message.localityAwareRoutingPercent));
        message.strictLocality !== undefined &&
            (obj.strictLocality = message.strictLocality);
        message.mode !== undefined &&
            (obj.mode = loadBalancingModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseLoadBalancingConfig);
        message.panicThreshold = (_a = object.panicThreshold) !== null && _a !== void 0 ? _a : 0;
        message.localityAwareRoutingPercent =
            (_b = object.localityAwareRoutingPercent) !== null && _b !== void 0 ? _b : 0;
        message.strictLocality = (_c = object.strictLocality) !== null && _c !== void 0 ? _c : false;
        message.mode = (_d = object.mode) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LoadBalancingConfig.$type, exports.LoadBalancingConfig);
const baseStreamBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackend",
    name: "",
    port: 0,
    enableProxyProtocol: false,
};
exports.StreamBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackend",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        if (message.enableProxyProtocol === true) {
            writer.uint32(64).bool(message.enableProxyProtocol);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamBackend);
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.enableProxyProtocol = reader.bool();
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
        const message = Object.assign({}, baseStreamBackend);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.backendWeight =
            object.backendWeight !== undefined && object.backendWeight !== null
                ? Number(object.backendWeight)
                : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
                : undefined;
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromJSON(object.targetGroups)
                : undefined;
        message.healthchecks = ((_a = object.healthchecks) !== null && _a !== void 0 ? _a : []).map((e) => exports.HealthCheck.fromJSON(e));
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromJSON(object.tls)
                : undefined;
        message.enableProxyProtocol =
            object.enableProxyProtocol !== undefined &&
                object.enableProxyProtocol !== null
                ? Boolean(object.enableProxyProtocol)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls ? exports.BackendTls.toJSON(message.tls) : undefined);
        message.enableProxyProtocol !== undefined &&
            (obj.enableProxyProtocol = message.enableProxyProtocol);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseStreamBackend);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.backendWeight = (_b = object.backendWeight) !== null && _b !== void 0 ? _b : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
                : undefined;
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromPartial(object.targetGroups)
                : undefined;
        message.healthchecks =
            ((_d = object.healthchecks) === null || _d === void 0 ? void 0 : _d.map((e) => exports.HealthCheck.fromPartial(e))) || [];
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromPartial(object.tls)
                : undefined;
        message.enableProxyProtocol = (_e = object.enableProxyProtocol) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamBackend.$type, exports.StreamBackend);
const baseHttpBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackend",
    name: "",
    port: 0,
    useHttp2: false,
};
exports.HttpBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackend",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        if (message.storageBucket !== undefined) {
            exports.StorageBucketBackend.encode(message.storageBucket, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        if (message.useHttp2 === true) {
            writer.uint32(64).bool(message.useHttp2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpBackend);
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.storageBucket = exports.StorageBucketBackend.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.useHttp2 = reader.bool();
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
        const message = Object.assign({}, baseHttpBackend);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.backendWeight =
            object.backendWeight !== undefined && object.backendWeight !== null
                ? Number(object.backendWeight)
                : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
                : undefined;
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromJSON(object.targetGroups)
                : undefined;
        message.storageBucket =
            object.storageBucket !== undefined && object.storageBucket !== null
                ? exports.StorageBucketBackend.fromJSON(object.storageBucket)
                : undefined;
        message.healthchecks = ((_a = object.healthchecks) !== null && _a !== void 0 ? _a : []).map((e) => exports.HealthCheck.fromJSON(e));
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromJSON(object.tls)
                : undefined;
        message.useHttp2 =
            object.useHttp2 !== undefined && object.useHttp2 !== null
                ? Boolean(object.useHttp2)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        message.storageBucket !== undefined &&
            (obj.storageBucket = message.storageBucket
                ? exports.StorageBucketBackend.toJSON(message.storageBucket)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls ? exports.BackendTls.toJSON(message.tls) : undefined);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHttpBackend);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.backendWeight = (_b = object.backendWeight) !== null && _b !== void 0 ? _b : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
                : undefined;
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromPartial(object.targetGroups)
                : undefined;
        message.storageBucket =
            object.storageBucket !== undefined && object.storageBucket !== null
                ? exports.StorageBucketBackend.fromPartial(object.storageBucket)
                : undefined;
        message.healthchecks =
            ((_d = object.healthchecks) === null || _d === void 0 ? void 0 : _d.map((e) => exports.HealthCheck.fromPartial(e))) || [];
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromPartial(object.tls)
                : undefined;
        message.useHttp2 = (_e = object.useHttp2) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpBackend.$type, exports.HttpBackend);
const baseGrpcBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend",
    name: "",
    port: 0,
};
exports.GrpcBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.backendWeight }, writer.uint32(18).fork()).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            exports.LoadBalancingConfig.encode(message.loadBalancingConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            exports.TargetGroupsBackend.encode(message.targetGroups, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.healthchecks) {
            exports.HealthCheck.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.BackendTls.encode(message.tls, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcBackend);
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.loadBalancingConfig = exports.LoadBalancingConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.targetGroups = exports.TargetGroupsBackend.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.healthchecks.push(exports.HealthCheck.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.tls = exports.BackendTls.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseGrpcBackend);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.backendWeight =
            object.backendWeight !== undefined && object.backendWeight !== null
                ? Number(object.backendWeight)
                : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromJSON(object.loadBalancingConfig)
                : undefined;
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromJSON(object.targetGroups)
                : undefined;
        message.healthchecks = ((_a = object.healthchecks) !== null && _a !== void 0 ? _a : []).map((e) => exports.HealthCheck.fromJSON(e));
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromJSON(object.tls)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? exports.LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? exports.TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) => e ? exports.HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls ? exports.BackendTls.toJSON(message.tls) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseGrpcBackend);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.backendWeight = (_b = object.backendWeight) !== null && _b !== void 0 ? _b : undefined;
        message.loadBalancingConfig =
            object.loadBalancingConfig !== undefined &&
                object.loadBalancingConfig !== null
                ? exports.LoadBalancingConfig.fromPartial(object.loadBalancingConfig)
                : undefined;
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.targetGroups =
            object.targetGroups !== undefined && object.targetGroups !== null
                ? exports.TargetGroupsBackend.fromPartial(object.targetGroups)
                : undefined;
        message.healthchecks =
            ((_d = object.healthchecks) === null || _d === void 0 ? void 0 : _d.map((e) => exports.HealthCheck.fromPartial(e))) || [];
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.BackendTls.fromPartial(object.tls)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcBackend.$type, exports.GrpcBackend);
const baseTargetGroupsBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend",
    targetGroupIds: "",
};
exports.TargetGroupsBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetGroupIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetGroupsBackend);
        message.targetGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupIds.push(reader.string());
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
        const message = Object.assign({}, baseTargetGroupsBackend);
        message.targetGroupIds = ((_a = object.targetGroupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetGroupIds) {
            obj.targetGroupIds = message.targetGroupIds.map((e) => e);
        }
        else {
            obj.targetGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTargetGroupsBackend);
        message.targetGroupIds = ((_a = object.targetGroupIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroupsBackend.$type, exports.TargetGroupsBackend);
const basePlaintextTransportSettings = {
    $type: "yandex.cloud.apploadbalancer.v1.PlaintextTransportSettings",
};
exports.PlaintextTransportSettings = {
    $type: "yandex.cloud.apploadbalancer.v1.PlaintextTransportSettings",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlaintextTransportSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, basePlaintextTransportSettings);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, basePlaintextTransportSettings);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlaintextTransportSettings.$type, exports.PlaintextTransportSettings);
const baseSecureTransportSettings = {
    $type: "yandex.cloud.apploadbalancer.v1.SecureTransportSettings",
    sni: "",
};
exports.SecureTransportSettings = {
    $type: "yandex.cloud.apploadbalancer.v1.SecureTransportSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sni !== "") {
            writer.uint32(10).string(message.sni);
        }
        if (message.validationContext !== undefined) {
            tls_1.ValidationContext.encode(message.validationContext, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecureTransportSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sni = reader.string();
                    break;
                case 3:
                    message.validationContext = tls_1.ValidationContext.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSecureTransportSettings);
        message.sni =
            object.sni !== undefined && object.sni !== null ? String(object.sni) : "";
        message.validationContext =
            object.validationContext !== undefined &&
                object.validationContext !== null
                ? tls_1.ValidationContext.fromJSON(object.validationContext)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sni !== undefined && (obj.sni = message.sni);
        message.validationContext !== undefined &&
            (obj.validationContext = message.validationContext
                ? tls_1.ValidationContext.toJSON(message.validationContext)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSecureTransportSettings);
        message.sni = (_a = object.sni) !== null && _a !== void 0 ? _a : "";
        message.validationContext =
            object.validationContext !== undefined &&
                object.validationContext !== null
                ? tls_1.ValidationContext.fromPartial(object.validationContext)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecureTransportSettings.$type, exports.SecureTransportSettings);
const baseBackendTls = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendTls",
    sni: "",
};
exports.BackendTls = {
    $type: "yandex.cloud.apploadbalancer.v1.BackendTls",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sni !== "") {
            writer.uint32(10).string(message.sni);
        }
        if (message.validationContext !== undefined) {
            tls_1.ValidationContext.encode(message.validationContext, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackendTls);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sni = reader.string();
                    break;
                case 3:
                    message.validationContext = tls_1.ValidationContext.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackendTls);
        message.sni =
            object.sni !== undefined && object.sni !== null ? String(object.sni) : "";
        message.validationContext =
            object.validationContext !== undefined &&
                object.validationContext !== null
                ? tls_1.ValidationContext.fromJSON(object.validationContext)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sni !== undefined && (obj.sni = message.sni);
        message.validationContext !== undefined &&
            (obj.validationContext = message.validationContext
                ? tls_1.ValidationContext.toJSON(message.validationContext)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackendTls);
        message.sni = (_a = object.sni) !== null && _a !== void 0 ? _a : "";
        message.validationContext =
            object.validationContext !== undefined &&
                object.validationContext !== null
                ? tls_1.ValidationContext.fromPartial(object.validationContext)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackendTls.$type, exports.BackendTls);
const baseStorageBucketBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend",
    bucket: "",
};
exports.StorageBucketBackend = {
    $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucket !== "") {
            writer.uint32(10).string(message.bucket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageBucketBackend);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStorageBucketBackend);
        message.bucket =
            object.bucket !== undefined && object.bucket !== null
                ? String(object.bucket)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStorageBucketBackend);
        message.bucket = (_a = object.bucket) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageBucketBackend.$type, exports.StorageBucketBackend);
const baseHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck",
    intervalJitterPercent: 0,
    healthyThreshold: 0,
    unhealthyThreshold: 0,
    healthcheckPort: 0,
};
exports.HealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(18).fork()).ldelim();
        }
        if (message.intervalJitterPercent !== 0) {
            writer.uint32(25).double(message.intervalJitterPercent);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(40).int64(message.unhealthyThreshold);
        }
        if (message.healthcheckPort !== 0) {
            writer.uint32(48).int64(message.healthcheckPort);
        }
        if (message.stream !== undefined) {
            exports.HealthCheck_StreamHealthCheck.encode(message.stream, writer.uint32(58).fork()).ldelim();
        }
        if (message.http !== undefined) {
            exports.HealthCheck_HttpHealthCheck.encode(message.http, writer.uint32(66).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            exports.HealthCheck_GrpcHealthCheck.encode(message.grpc, writer.uint32(74).fork()).ldelim();
        }
        if (message.plaintext !== undefined) {
            exports.PlaintextTransportSettings.encode(message.plaintext, writer.uint32(82).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            exports.SecureTransportSettings.encode(message.tls, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.intervalJitterPercent = reader.double();
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(reader.int64());
                    break;
                case 5:
                    message.unhealthyThreshold = longToNumber(reader.int64());
                    break;
                case 6:
                    message.healthcheckPort = longToNumber(reader.int64());
                    break;
                case 7:
                    message.stream = exports.HealthCheck_StreamHealthCheck.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.http = exports.HealthCheck_HttpHealthCheck.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.grpc = exports.HealthCheck_GrpcHealthCheck.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.plaintext = exports.PlaintextTransportSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.tls = exports.SecureTransportSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck);
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromJSON(object.timeout)
                : undefined;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromJSON(object.interval)
                : undefined;
        message.intervalJitterPercent =
            object.intervalJitterPercent !== undefined &&
                object.intervalJitterPercent !== null
                ? Number(object.intervalJitterPercent)
                : 0;
        message.healthyThreshold =
            object.healthyThreshold !== undefined && object.healthyThreshold !== null
                ? Number(object.healthyThreshold)
                : 0;
        message.unhealthyThreshold =
            object.unhealthyThreshold !== undefined &&
                object.unhealthyThreshold !== null
                ? Number(object.unhealthyThreshold)
                : 0;
        message.healthcheckPort =
            object.healthcheckPort !== undefined && object.healthcheckPort !== null
                ? Number(object.healthcheckPort)
                : 0;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.HealthCheck_StreamHealthCheck.fromJSON(object.stream)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HealthCheck_HttpHealthCheck.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.HealthCheck_GrpcHealthCheck.fromJSON(object.grpc)
                : undefined;
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? exports.PlaintextTransportSettings.fromJSON(object.plaintext)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.SecureTransportSettings.fromJSON(object.tls)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? duration_1.Duration.toJSON(message.interval)
                : undefined);
        message.intervalJitterPercent !== undefined &&
            (obj.intervalJitterPercent = message.intervalJitterPercent);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = Math.round(message.healthyThreshold));
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = Math.round(message.unhealthyThreshold));
        message.healthcheckPort !== undefined &&
            (obj.healthcheckPort = Math.round(message.healthcheckPort));
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? exports.HealthCheck_StreamHealthCheck.toJSON(message.stream)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? exports.HealthCheck_HttpHealthCheck.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? exports.HealthCheck_GrpcHealthCheck.toJSON(message.grpc)
                : undefined);
        message.plaintext !== undefined &&
            (obj.plaintext = message.plaintext
                ? exports.PlaintextTransportSettings.toJSON(message.plaintext)
                : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? exports.SecureTransportSettings.toJSON(message.tls)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseHealthCheck);
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromPartial(object.timeout)
                : undefined;
        message.interval =
            object.interval !== undefined && object.interval !== null
                ? duration_1.Duration.fromPartial(object.interval)
                : undefined;
        message.intervalJitterPercent = (_a = object.intervalJitterPercent) !== null && _a !== void 0 ? _a : 0;
        message.healthyThreshold = (_b = object.healthyThreshold) !== null && _b !== void 0 ? _b : 0;
        message.unhealthyThreshold = (_c = object.unhealthyThreshold) !== null && _c !== void 0 ? _c : 0;
        message.healthcheckPort = (_d = object.healthcheckPort) !== null && _d !== void 0 ? _d : 0;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? exports.HealthCheck_StreamHealthCheck.fromPartial(object.stream)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HealthCheck_HttpHealthCheck.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.HealthCheck_GrpcHealthCheck.fromPartial(object.grpc)
                : undefined;
        message.plaintext =
            object.plaintext !== undefined && object.plaintext !== null
                ? exports.PlaintextTransportSettings.fromPartial(object.plaintext)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? exports.SecureTransportSettings.fromPartial(object.tls)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck.$type, exports.HealthCheck);
const baseHealthCheck_StreamHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck",
};
exports.HealthCheck_StreamHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.send !== undefined) {
            payload_1.Payload.encode(message.send, writer.uint32(10).fork()).ldelim();
        }
        if (message.receive !== undefined) {
            payload_1.Payload.encode(message.receive, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck_StreamHealthCheck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.send = payload_1.Payload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receive = payload_1.Payload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck_StreamHealthCheck);
        message.send =
            object.send !== undefined && object.send !== null
                ? payload_1.Payload.fromJSON(object.send)
                : undefined;
        message.receive =
            object.receive !== undefined && object.receive !== null
                ? payload_1.Payload.fromJSON(object.receive)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.send !== undefined &&
            (obj.send = message.send ? payload_1.Payload.toJSON(message.send) : undefined);
        message.receive !== undefined &&
            (obj.receive = message.receive
                ? payload_1.Payload.toJSON(message.receive)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHealthCheck_StreamHealthCheck);
        message.send =
            object.send !== undefined && object.send !== null
                ? payload_1.Payload.fromPartial(object.send)
                : undefined;
        message.receive =
            object.receive !== undefined && object.receive !== null
                ? payload_1.Payload.fromPartial(object.receive)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck_StreamHealthCheck.$type, exports.HealthCheck_StreamHealthCheck);
const baseHealthCheck_HttpHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck",
    host: "",
    path: "",
    useHttp2: false,
};
exports.HealthCheck_HttpHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.useHttp2 === true) {
            writer.uint32(24).bool(message.useHttp2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck_HttpHealthCheck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.useHttp2 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck_HttpHealthCheck);
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        message.useHttp2 =
            object.useHttp2 !== undefined && object.useHttp2 !== null
                ? Boolean(object.useHttp2)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.path !== undefined && (obj.path = message.path);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHealthCheck_HttpHealthCheck);
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.useHttp2 = (_c = object.useHttp2) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck_HttpHealthCheck.$type, exports.HealthCheck_HttpHealthCheck);
const baseHealthCheck_GrpcHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck",
    serviceName: "",
};
exports.HealthCheck_GrpcHealthCheck = {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceName !== "") {
            writer.uint32(10).string(message.serviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHealthCheck_GrpcHealthCheck);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHealthCheck_GrpcHealthCheck);
        message.serviceName =
            object.serviceName !== undefined && object.serviceName !== null
                ? String(object.serviceName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHealthCheck_GrpcHealthCheck);
        message.serviceName = (_a = object.serviceName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HealthCheck_GrpcHealthCheck.$type, exports.HealthCheck_GrpcHealthCheck);
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
