"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = exports.TargetGroup_LabelsEntry = exports.TargetGroup = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseTargetGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup",
    id: "",
    name: "",
    description: "",
    folderId: "",
};
exports.TargetGroup = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup",
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
            exports.TargetGroup_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.targets) {
            exports.Target.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetGroup);
        message.labels = {};
        message.targets = [];
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
                    const entry5 = exports.TargetGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.targets.push(exports.Target.decode(reader, reader.uint32()));
                    break;
                case 7:
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
        var _a, _b;
        const message = Object.assign({}, baseTargetGroup);
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
        message.targets = ((_b = object.targets) !== null && _b !== void 0 ? _b : []).map((e) => exports.Target.fromJSON(e));
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
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? exports.Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseTargetGroup);
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
        message.targets = ((_f = object.targets) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Target.fromPartial(e))) || [];
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroup.$type, exports.TargetGroup);
const baseTargetGroup_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.TargetGroup_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry",
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
        const message = Object.assign({}, baseTargetGroup_LabelsEntry);
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
        const message = Object.assign({}, baseTargetGroup_LabelsEntry);
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
        const message = Object.assign({}, baseTargetGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetGroup_LabelsEntry.$type, exports.TargetGroup_LabelsEntry);
const baseTarget = {
    $type: "yandex.cloud.apploadbalancer.v1.Target",
    subnetId: "",
    privateIpv4Address: false,
};
exports.Target = {
    $type: "yandex.cloud.apploadbalancer.v1.Target",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipAddress !== undefined) {
            writer.uint32(10).string(message.ipAddress);
        }
        if (message.subnetId !== "") {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.privateIpv4Address === true) {
            writer.uint32(32).bool(message.privateIpv4Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTarget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.privateIpv4Address = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTarget);
        message.ipAddress =
            object.ipAddress !== undefined && object.ipAddress !== null
                ? String(object.ipAddress)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.privateIpv4Address =
            object.privateIpv4Address !== undefined &&
                object.privateIpv4Address !== null
                ? Boolean(object.privateIpv4Address)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.privateIpv4Address !== undefined &&
            (obj.privateIpv4Address = message.privateIpv4Address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTarget);
        message.ipAddress = (_a = object.ipAddress) !== null && _a !== void 0 ? _a : undefined;
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.privateIpv4Address = (_c = object.privateIpv4Address) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Target.$type, exports.Target);
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
