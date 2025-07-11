"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalePolicy_FixedScale = exports.ScalePolicy = exports.Host = exports.HostGroup_LabelsEntry = exports.HostGroup = exports.host_StatusToJSON = exports.host_StatusFromJSON = exports.Host_Status = exports.hostGroup_StatusToJSON = exports.hostGroup_StatusFromJSON = exports.HostGroup_Status = exports.maintenancePolicyToJSON = exports.maintenancePolicyFromJSON = exports.MaintenancePolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
var MaintenancePolicy;
(function (MaintenancePolicy) {
    MaintenancePolicy[MaintenancePolicy["MAINTENANCE_POLICY_UNSPECIFIED"] = 0] = "MAINTENANCE_POLICY_UNSPECIFIED";
    /** RESTART - Restart instances on the same host after maintenance event. */
    MaintenancePolicy[MaintenancePolicy["RESTART"] = 1] = "RESTART";
    /** MIGRATE - Migrate instances to another host before maintenance event. */
    MaintenancePolicy[MaintenancePolicy["MIGRATE"] = 2] = "MIGRATE";
    MaintenancePolicy[MaintenancePolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MaintenancePolicy = exports.MaintenancePolicy || (exports.MaintenancePolicy = {}));
function maintenancePolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "MAINTENANCE_POLICY_UNSPECIFIED":
            return MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED;
        case 1:
        case "RESTART":
            return MaintenancePolicy.RESTART;
        case 2:
        case "MIGRATE":
            return MaintenancePolicy.MIGRATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MaintenancePolicy.UNRECOGNIZED;
    }
}
exports.maintenancePolicyFromJSON = maintenancePolicyFromJSON;
function maintenancePolicyToJSON(object) {
    switch (object) {
        case MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED:
            return "MAINTENANCE_POLICY_UNSPECIFIED";
        case MaintenancePolicy.RESTART:
            return "RESTART";
        case MaintenancePolicy.MIGRATE:
            return "MIGRATE";
        default:
            return "UNKNOWN";
    }
}
exports.maintenancePolicyToJSON = maintenancePolicyToJSON;
var HostGroup_Status;
(function (HostGroup_Status) {
    HostGroup_Status[HostGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    HostGroup_Status[HostGroup_Status["CREATING"] = 1] = "CREATING";
    HostGroup_Status[HostGroup_Status["READY"] = 2] = "READY";
    HostGroup_Status[HostGroup_Status["UPDATING"] = 3] = "UPDATING";
    HostGroup_Status[HostGroup_Status["DELETING"] = 4] = "DELETING";
    HostGroup_Status[HostGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HostGroup_Status = exports.HostGroup_Status || (exports.HostGroup_Status = {}));
function hostGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return HostGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return HostGroup_Status.CREATING;
        case 2:
        case "READY":
            return HostGroup_Status.READY;
        case 3:
        case "UPDATING":
            return HostGroup_Status.UPDATING;
        case 4:
        case "DELETING":
            return HostGroup_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HostGroup_Status.UNRECOGNIZED;
    }
}
exports.hostGroup_StatusFromJSON = hostGroup_StatusFromJSON;
function hostGroup_StatusToJSON(object) {
    switch (object) {
        case HostGroup_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case HostGroup_Status.CREATING:
            return "CREATING";
        case HostGroup_Status.READY:
            return "READY";
        case HostGroup_Status.UPDATING:
            return "UPDATING";
        case HostGroup_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.hostGroup_StatusToJSON = hostGroup_StatusToJSON;
var Host_Status;
(function (Host_Status) {
    Host_Status[Host_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Host_Status[Host_Status["UP"] = 1] = "UP";
    Host_Status[Host_Status["DOWN"] = 2] = "DOWN";
    Host_Status[Host_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Status = exports.Host_Status || (exports.Host_Status = {}));
function host_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Host_Status.STATUS_UNSPECIFIED;
        case 1:
        case "UP":
            return Host_Status.UP;
        case 2:
        case "DOWN":
            return Host_Status.DOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Host_Status.UNRECOGNIZED;
    }
}
exports.host_StatusFromJSON = host_StatusFromJSON;
function host_StatusToJSON(object) {
    switch (object) {
        case Host_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Host_Status.UP:
            return "UP";
        case Host_Status.DOWN:
            return "DOWN";
        default:
            return "UNKNOWN";
    }
}
exports.host_StatusToJSON = host_StatusToJSON;
const baseHostGroup = {
    $type: "yandex.cloud.compute.v1.HostGroup",
    id: "",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    status: 0,
    typeId: "",
    maintenancePolicy: 0,
};
exports.HostGroup = {
    $type: "yandex.cloud.compute.v1.HostGroup",
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
            exports.HostGroup_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.typeId !== "") {
            writer.uint32(74).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(80).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHostGroup);
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
                    const entry6 = exports.HostGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.typeId = reader.string();
                    break;
                case 10:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 11:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseHostGroup);
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? hostGroup_StatusFromJSON(object.status)
                : 0;
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.maintenancePolicy =
            object.maintenancePolicy !== undefined &&
                object.maintenancePolicy !== null
                ? maintenancePolicyFromJSON(object.maintenancePolicy)
                : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined &&
            (obj.status = hostGroup_StatusToJSON(message.status));
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseHostGroup);
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
        message.zoneId = (_g = object.zoneId) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.typeId = (_j = object.typeId) !== null && _j !== void 0 ? _j : "";
        message.maintenancePolicy = (_k = object.maintenancePolicy) !== null && _k !== void 0 ? _k : 0;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostGroup.$type, exports.HostGroup);
const baseHostGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.HostGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.HostGroup.LabelsEntry",
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
        const message = Object.assign({}, baseHostGroup_LabelsEntry);
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
        const message = Object.assign({}, baseHostGroup_LabelsEntry);
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
        const message = Object.assign({}, baseHostGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HostGroup_LabelsEntry.$type, exports.HostGroup_LabelsEntry);
const baseHost = {
    $type: "yandex.cloud.compute.v1.Host",
    id: "",
    status: 0,
    serverId: "",
};
exports.Host = {
    $type: "yandex.cloud.compute.v1.Host",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.serverId !== "") {
            writer.uint32(26).string(message.serverId);
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
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.serverId = reader.string();
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
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? host_StatusFromJSON(object.status)
                : 0;
        message.serverId =
            object.serverId !== undefined && object.serverId !== null
                ? String(object.serverId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined &&
            (obj.status = host_StatusToJSON(message.status));
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseHost);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.serverId = (_c = object.serverId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Host.$type, exports.Host);
const baseScalePolicy = {
    $type: "yandex.cloud.compute.v1.ScalePolicy",
};
exports.ScalePolicy = {
    $type: "yandex.cloud.compute.v1.ScalePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy.$type, exports.ScalePolicy);
const baseScalePolicy_FixedScale = {
    $type: "yandex.cloud.compute.v1.ScalePolicy.FixedScale",
    size: 0,
};
exports.ScalePolicy_FixedScale = {
    $type: "yandex.cloud.compute.v1.ScalePolicy.FixedScale",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_FixedScale.$type, exports.ScalePolicy_FixedScale);
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
