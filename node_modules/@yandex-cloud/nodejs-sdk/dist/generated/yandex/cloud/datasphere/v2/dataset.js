"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetStatus_StatusError = exports.DatasetStatus_StatusInactive = exports.DatasetStatus_StatusActive = exports.DatasetStatus = exports.Dataset_LabelsEntry = exports.Dataset = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.datasphere.v2";
const baseDataset = {
    $type: "yandex.cloud.datasphere.v2.Dataset",
    id: "",
    projectId: "",
    name: "",
    description: "",
    createdById: "",
    code: "",
    sizeGb: 0,
    zoneIds: "",
    mountPath: "",
    dataCapsuleId: "",
};
exports.Dataset = {
    $type: "yandex.cloud.datasphere.v2.Dataset",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
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
            exports.Dataset_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.createdById !== "") {
            writer.uint32(58).string(message.createdById);
        }
        if (message.code !== "") {
            writer.uint32(66).string(message.code);
        }
        if (message.sizeGb !== 0) {
            writer.uint32(72).int64(message.sizeGb);
        }
        for (const v of message.zoneIds) {
            writer.uint32(82).string(v);
        }
        if (message.mountPath !== "") {
            writer.uint32(90).string(message.mountPath);
        }
        if (message.dataCapsuleId !== "") {
            writer.uint32(98).string(message.dataCapsuleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDataset);
        message.labels = {};
        message.zoneIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
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
                    const entry6 = exports.Dataset_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.createdById = reader.string();
                    break;
                case 8:
                    message.code = reader.string();
                    break;
                case 9:
                    message.sizeGb = longToNumber(reader.int64());
                    break;
                case 10:
                    message.zoneIds.push(reader.string());
                    break;
                case 11:
                    message.mountPath = reader.string();
                    break;
                case 12:
                    message.dataCapsuleId = reader.string();
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
        const message = Object.assign({}, baseDataset);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
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
        message.createdById =
            object.createdById !== undefined && object.createdById !== null
                ? String(object.createdById)
                : "";
        message.code =
            object.code !== undefined && object.code !== null
                ? String(object.code)
                : "";
        message.sizeGb =
            object.sizeGb !== undefined && object.sizeGb !== null
                ? Number(object.sizeGb)
                : 0;
        message.zoneIds = ((_b = object.zoneIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.mountPath =
            object.mountPath !== undefined && object.mountPath !== null
                ? String(object.mountPath)
                : "";
        message.dataCapsuleId =
            object.dataCapsuleId !== undefined && object.dataCapsuleId !== null
                ? String(object.dataCapsuleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.projectId !== undefined && (obj.projectId = message.projectId);
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
        message.createdById !== undefined &&
            (obj.createdById = message.createdById);
        message.code !== undefined && (obj.code = message.code);
        message.sizeGb !== undefined && (obj.sizeGb = Math.round(message.sizeGb));
        if (message.zoneIds) {
            obj.zoneIds = message.zoneIds.map((e) => e);
        }
        else {
            obj.zoneIds = [];
        }
        message.mountPath !== undefined && (obj.mountPath = message.mountPath);
        message.dataCapsuleId !== undefined &&
            (obj.dataCapsuleId = message.dataCapsuleId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseDataset);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.createdById = (_g = object.createdById) !== null && _g !== void 0 ? _g : "";
        message.code = (_h = object.code) !== null && _h !== void 0 ? _h : "";
        message.sizeGb = (_j = object.sizeGb) !== null && _j !== void 0 ? _j : 0;
        message.zoneIds = ((_k = object.zoneIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.mountPath = (_l = object.mountPath) !== null && _l !== void 0 ? _l : "";
        message.dataCapsuleId = (_m = object.dataCapsuleId) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dataset.$type, exports.Dataset);
const baseDataset_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry",
    key: "",
    value: "",
};
exports.Dataset_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry",
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
        const message = Object.assign({}, baseDataset_LabelsEntry);
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
        const message = Object.assign({}, baseDataset_LabelsEntry);
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
        const message = Object.assign({}, baseDataset_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dataset_LabelsEntry.$type, exports.Dataset_LabelsEntry);
const baseDatasetStatus = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus",
};
exports.DatasetStatus = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.statusActive !== undefined) {
            exports.DatasetStatus_StatusActive.encode(message.statusActive, writer.uint32(10).fork()).ldelim();
        }
        if (message.statusInactive !== undefined) {
            exports.DatasetStatus_StatusInactive.encode(message.statusInactive, writer.uint32(18).fork()).ldelim();
        }
        if (message.statusError !== undefined) {
            exports.DatasetStatus_StatusError.encode(message.statusError, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatasetStatus);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statusActive = exports.DatasetStatus_StatusActive.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.statusInactive = exports.DatasetStatus_StatusInactive.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.statusError = exports.DatasetStatus_StatusError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDatasetStatus);
        message.statusActive =
            object.statusActive !== undefined && object.statusActive !== null
                ? exports.DatasetStatus_StatusActive.fromJSON(object.statusActive)
                : undefined;
        message.statusInactive =
            object.statusInactive !== undefined && object.statusInactive !== null
                ? exports.DatasetStatus_StatusInactive.fromJSON(object.statusInactive)
                : undefined;
        message.statusError =
            object.statusError !== undefined && object.statusError !== null
                ? exports.DatasetStatus_StatusError.fromJSON(object.statusError)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.statusActive !== undefined &&
            (obj.statusActive = message.statusActive
                ? exports.DatasetStatus_StatusActive.toJSON(message.statusActive)
                : undefined);
        message.statusInactive !== undefined &&
            (obj.statusInactive = message.statusInactive
                ? exports.DatasetStatus_StatusInactive.toJSON(message.statusInactive)
                : undefined);
        message.statusError !== undefined &&
            (obj.statusError = message.statusError
                ? exports.DatasetStatus_StatusError.toJSON(message.statusError)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDatasetStatus);
        message.statusActive =
            object.statusActive !== undefined && object.statusActive !== null
                ? exports.DatasetStatus_StatusActive.fromPartial(object.statusActive)
                : undefined;
        message.statusInactive =
            object.statusInactive !== undefined && object.statusInactive !== null
                ? exports.DatasetStatus_StatusInactive.fromPartial(object.statusInactive)
                : undefined;
        message.statusError =
            object.statusError !== undefined && object.statusError !== null
                ? exports.DatasetStatus_StatusError.fromPartial(object.statusError)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DatasetStatus.$type, exports.DatasetStatus);
const baseDatasetStatus_StatusActive = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive",
};
exports.DatasetStatus_StatusActive = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatasetStatus_StatusActive);
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
        const message = Object.assign({}, baseDatasetStatus_StatusActive);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseDatasetStatus_StatusActive);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DatasetStatus_StatusActive.$type, exports.DatasetStatus_StatusActive);
const baseDatasetStatus_StatusInactive = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive",
};
exports.DatasetStatus_StatusInactive = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatasetStatus_StatusInactive);
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
        const message = Object.assign({}, baseDatasetStatus_StatusInactive);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseDatasetStatus_StatusInactive);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DatasetStatus_StatusInactive.$type, exports.DatasetStatus_StatusInactive);
const baseDatasetStatus_StatusError = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError",
    error: "",
};
exports.DatasetStatus_StatusError = {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatasetStatus_StatusError);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDatasetStatus_StatusError);
        message.error =
            object.error !== undefined && object.error !== null
                ? String(object.error)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDatasetStatus_StatusError);
        message.error = (_a = object.error) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DatasetStatus_StatusError.$type, exports.DatasetStatus_StatusError);
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
