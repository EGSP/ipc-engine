"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GpuCluster_LabelsEntry = exports.GpuCluster = exports.gpuCluster_StatusToJSON = exports.gpuCluster_StatusFromJSON = exports.GpuCluster_Status = exports.gpuInterconnectTypeToJSON = exports.gpuInterconnectTypeFromJSON = exports.GpuInterconnectType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
var GpuInterconnectType;
(function (GpuInterconnectType) {
    GpuInterconnectType[GpuInterconnectType["GPU_INTERCONNECT_TYPE_UNSPECIFIED"] = 0] = "GPU_INTERCONNECT_TYPE_UNSPECIFIED";
    /** INFINIBAND - InfiniBand interconnect. */
    GpuInterconnectType[GpuInterconnectType["INFINIBAND"] = 1] = "INFINIBAND";
    GpuInterconnectType[GpuInterconnectType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GpuInterconnectType = exports.GpuInterconnectType || (exports.GpuInterconnectType = {}));
function gpuInterconnectTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "GPU_INTERCONNECT_TYPE_UNSPECIFIED":
            return GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED;
        case 1:
        case "INFINIBAND":
            return GpuInterconnectType.INFINIBAND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GpuInterconnectType.UNRECOGNIZED;
    }
}
exports.gpuInterconnectTypeFromJSON = gpuInterconnectTypeFromJSON;
function gpuInterconnectTypeToJSON(object) {
    switch (object) {
        case GpuInterconnectType.GPU_INTERCONNECT_TYPE_UNSPECIFIED:
            return "GPU_INTERCONNECT_TYPE_UNSPECIFIED";
        case GpuInterconnectType.INFINIBAND:
            return "INFINIBAND";
        default:
            return "UNKNOWN";
    }
}
exports.gpuInterconnectTypeToJSON = gpuInterconnectTypeToJSON;
var GpuCluster_Status;
(function (GpuCluster_Status) {
    GpuCluster_Status[GpuCluster_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - GPU cluster is being created. */
    GpuCluster_Status[GpuCluster_Status["CREATING"] = 1] = "CREATING";
    /** READY - GPU cluster is ready to use. */
    GpuCluster_Status[GpuCluster_Status["READY"] = 2] = "READY";
    /** ERROR - GPU cluster encountered a problem and cannot operate. */
    GpuCluster_Status[GpuCluster_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - GPU cluster is being deleted. */
    GpuCluster_Status[GpuCluster_Status["DELETING"] = 4] = "DELETING";
    GpuCluster_Status[GpuCluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GpuCluster_Status = exports.GpuCluster_Status || (exports.GpuCluster_Status = {}));
function gpuCluster_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return GpuCluster_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return GpuCluster_Status.CREATING;
        case 2:
        case "READY":
            return GpuCluster_Status.READY;
        case 3:
        case "ERROR":
            return GpuCluster_Status.ERROR;
        case 4:
        case "DELETING":
            return GpuCluster_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GpuCluster_Status.UNRECOGNIZED;
    }
}
exports.gpuCluster_StatusFromJSON = gpuCluster_StatusFromJSON;
function gpuCluster_StatusToJSON(object) {
    switch (object) {
        case GpuCluster_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case GpuCluster_Status.CREATING:
            return "CREATING";
        case GpuCluster_Status.READY:
            return "READY";
        case GpuCluster_Status.ERROR:
            return "ERROR";
        case GpuCluster_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.gpuCluster_StatusToJSON = gpuCluster_StatusToJSON;
const baseGpuCluster = {
    $type: "yandex.cloud.compute.v1.GpuCluster",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    zoneId: "",
    interconnectType: 0,
};
exports.GpuCluster = {
    $type: "yandex.cloud.compute.v1.GpuCluster",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.GpuCluster_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.zoneId !== "") {
            writer.uint32(66).string(message.zoneId);
        }
        if (message.interconnectType !== 0) {
            writer.uint32(72).int32(message.interconnectType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGpuCluster);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.GpuCluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 9:
                    message.interconnectType = reader.int32();
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
        const message = Object.assign({}, baseGpuCluster);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.status =
            object.status !== undefined && object.status !== null
                ? gpuCluster_StatusFromJSON(object.status)
                : 0;
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.interconnectType =
            object.interconnectType !== undefined && object.interconnectType !== null
                ? gpuInterconnectTypeFromJSON(object.interconnectType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = gpuCluster_StatusToJSON(message.status));
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.interconnectType !== undefined &&
            (obj.interconnectType = gpuInterconnectTypeToJSON(message.interconnectType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseGpuCluster);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.zoneId = (_h = object.zoneId) !== null && _h !== void 0 ? _h : "";
        message.interconnectType = (_j = object.interconnectType) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GpuCluster.$type, exports.GpuCluster);
const baseGpuCluster_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry",
    key: "",
    value: "",
};
exports.GpuCluster_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.GpuCluster.LabelsEntry",
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
        const message = Object.assign({}, baseGpuCluster_LabelsEntry);
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
        const message = Object.assign({}, baseGpuCluster_LabelsEntry);
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
        const message = Object.assign({}, baseGpuCluster_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GpuCluster_LabelsEntry.$type, exports.GpuCluster_LabelsEntry);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
