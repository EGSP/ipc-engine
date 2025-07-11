"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Os = exports.Image_LabelsEntry = exports.Image = exports.os_TypeToJSON = exports.os_TypeFromJSON = exports.Os_Type = exports.image_StatusToJSON = exports.image_StatusFromJSON = exports.Image_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
var Image_Status;
(function (Image_Status) {
    Image_Status[Image_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Image is being created. */
    Image_Status[Image_Status["CREATING"] = 1] = "CREATING";
    /** READY - Image is ready to use. */
    Image_Status[Image_Status["READY"] = 2] = "READY";
    /** ERROR - Image encountered a problem and cannot operate. */
    Image_Status[Image_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - Image is being deleted. */
    Image_Status[Image_Status["DELETING"] = 4] = "DELETING";
    Image_Status[Image_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Image_Status = exports.Image_Status || (exports.Image_Status = {}));
function image_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Image_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Image_Status.CREATING;
        case 2:
        case "READY":
            return Image_Status.READY;
        case 3:
        case "ERROR":
            return Image_Status.ERROR;
        case 4:
        case "DELETING":
            return Image_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Image_Status.UNRECOGNIZED;
    }
}
exports.image_StatusFromJSON = image_StatusFromJSON;
function image_StatusToJSON(object) {
    switch (object) {
        case Image_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Image_Status.CREATING:
            return "CREATING";
        case Image_Status.READY:
            return "READY";
        case Image_Status.ERROR:
            return "ERROR";
        case Image_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.image_StatusToJSON = image_StatusToJSON;
var Os_Type;
(function (Os_Type) {
    Os_Type[Os_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** LINUX - Linux operating system. */
    Os_Type[Os_Type["LINUX"] = 1] = "LINUX";
    /** WINDOWS - Windows operating system. */
    Os_Type[Os_Type["WINDOWS"] = 2] = "WINDOWS";
    Os_Type[Os_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Os_Type = exports.Os_Type || (exports.Os_Type = {}));
function os_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Os_Type.TYPE_UNSPECIFIED;
        case 1:
        case "LINUX":
            return Os_Type.LINUX;
        case 2:
        case "WINDOWS":
            return Os_Type.WINDOWS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Os_Type.UNRECOGNIZED;
    }
}
exports.os_TypeFromJSON = os_TypeFromJSON;
function os_TypeToJSON(object) {
    switch (object) {
        case Os_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Os_Type.LINUX:
            return "LINUX";
        case Os_Type.WINDOWS:
            return "WINDOWS";
        default:
            return "UNKNOWN";
    }
}
exports.os_TypeToJSON = os_TypeToJSON;
const baseImage = {
    $type: "yandex.cloud.compute.v1.Image",
    id: "",
    folderId: "",
    name: "",
    description: "",
    family: "",
    storageSize: 0,
    minDiskSize: 0,
    productIds: "",
    status: 0,
    pooled: false,
};
exports.Image = {
    $type: "yandex.cloud.compute.v1.Image",
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
            exports.Image_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.Image.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.family !== "") {
            writer.uint32(58).string(message.family);
        }
        if (message.storageSize !== 0) {
            writer.uint32(64).int64(message.storageSize);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(72).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.os !== undefined) {
            exports.Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(104).bool(message.pooled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImage);
        message.labels = {};
        message.productIds = [];
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
                    const entry6 = exports.Image_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.family = reader.string();
                    break;
                case 8:
                    message.storageSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                case 12:
                    message.os = exports.Os.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.pooled = reader.bool();
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
        const message = Object.assign({}, baseImage);
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
        message.family =
            object.family !== undefined && object.family !== null
                ? String(object.family)
                : "";
        message.storageSize =
            object.storageSize !== undefined && object.storageSize !== null
                ? Number(object.storageSize)
                : 0;
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        message.productIds = ((_b = object.productIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? image_StatusFromJSON(object.status)
                : 0;
        message.os =
            object.os !== undefined && object.os !== null
                ? exports.Os.fromJSON(object.os)
                : undefined;
        message.pooled =
            object.pooled !== undefined && object.pooled !== null
                ? Boolean(object.pooled)
                : false;
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
        message.family !== undefined && (obj.family = message.family);
        message.storageSize !== undefined &&
            (obj.storageSize = Math.round(message.storageSize));
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = Math.round(message.minDiskSize));
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = image_StatusToJSON(message.status));
        message.os !== undefined &&
            (obj.os = message.os ? exports.Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseImage);
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
        message.family = (_g = object.family) !== null && _g !== void 0 ? _g : "";
        message.storageSize = (_h = object.storageSize) !== null && _h !== void 0 ? _h : 0;
        message.minDiskSize = (_j = object.minDiskSize) !== null && _j !== void 0 ? _j : 0;
        message.productIds = ((_k = object.productIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        message.os =
            object.os !== undefined && object.os !== null
                ? exports.Os.fromPartial(object.os)
                : undefined;
        message.pooled = (_m = object.pooled) !== null && _m !== void 0 ? _m : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image.$type, exports.Image);
const baseImage_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Image.LabelsEntry",
    key: "",
    value: "",
};
exports.Image_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Image.LabelsEntry",
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
        const message = Object.assign({}, baseImage_LabelsEntry);
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
        const message = Object.assign({}, baseImage_LabelsEntry);
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
        const message = Object.assign({}, baseImage_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image_LabelsEntry.$type, exports.Image_LabelsEntry);
const baseOs = { $type: "yandex.cloud.compute.v1.Os", type: 0 };
exports.Os = {
    $type: "yandex.cloud.compute.v1.Os",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOs);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOs);
        message.type =
            object.type !== undefined && object.type !== null
                ? os_TypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = os_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOs);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Os.$type, exports.Os);
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
