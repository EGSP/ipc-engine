"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard_LabelsEntry = exports.Dashboard = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const parametrization_1 = require("../../../../yandex/cloud/monitoring/v3/parametrization");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const widget_1 = require("../../../../yandex/cloud/monitoring/v3/widget");
exports.protobufPackage = "yandex.cloud.monitoring.v3";
const baseDashboard = {
    $type: "yandex.cloud.monitoring.v3.Dashboard",
    id: "",
    createdBy: "",
    modifiedBy: "",
    name: "",
    description: "",
    title: "",
    etag: "",
};
exports.Dashboard = {
    $type: "yandex.cloud.monitoring.v3.Dashboard",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(162).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(170).fork()).ldelim();
        }
        if (message.createdBy !== "") {
            writer.uint32(178).string(message.createdBy);
        }
        if (message.modifiedBy !== "") {
            writer.uint32(186).string(message.modifiedBy);
        }
        if (message.name !== "") {
            writer.uint32(194).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(202).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Dashboard_LabelsEntry.encode({
                $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(210).fork()).ldelim();
        });
        if (message.title !== "") {
            writer.uint32(218).string(message.title);
        }
        for (const v of message.widgets) {
            widget_1.Widget.encode(v, writer.uint32(226).fork()).ldelim();
        }
        if (message.parametrization !== undefined) {
            parametrization_1.Parametrization.encode(message.parametrization, writer.uint32(234).fork()).ldelim();
        }
        if (message.etag !== "") {
            writer.uint32(242).string(message.etag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDashboard);
        message.labels = {};
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 20:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.createdBy = reader.string();
                    break;
                case 23:
                    message.modifiedBy = reader.string();
                    break;
                case 24:
                    message.name = reader.string();
                    break;
                case 25:
                    message.description = reader.string();
                    break;
                case 26:
                    const entry26 = exports.Dashboard_LabelsEntry.decode(reader, reader.uint32());
                    if (entry26.value !== undefined) {
                        message.labels[entry26.key] = entry26.value;
                    }
                    break;
                case 27:
                    message.title = reader.string();
                    break;
                case 28:
                    message.widgets.push(widget_1.Widget.decode(reader, reader.uint32()));
                    break;
                case 29:
                    message.parametrization = parametrization_1.Parametrization.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.etag = reader.string();
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
        const message = Object.assign({}, baseDashboard);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : "";
        message.modifiedBy =
            object.modifiedBy !== undefined && object.modifiedBy !== null
                ? String(object.modifiedBy)
                : "";
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
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.widgets = ((_b = object.widgets) !== null && _b !== void 0 ? _b : []).map((e) => widget_1.Widget.fromJSON(e));
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? parametrization_1.Parametrization.fromJSON(object.parametrization)
                : undefined;
        message.etag =
            object.etag !== undefined && object.etag !== null
                ? String(object.etag)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedBy !== undefined && (obj.modifiedBy = message.modifiedBy);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.title !== undefined && (obj.title = message.title);
        if (message.widgets) {
            obj.widgets = message.widgets.map((e) => e ? widget_1.Widget.toJSON(e) : undefined);
        }
        else {
            obj.widgets = [];
        }
        message.parametrization !== undefined &&
            (obj.parametrization = message.parametrization
                ? parametrization_1.Parametrization.toJSON(message.parametrization)
                : undefined);
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseDashboard);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : undefined;
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.modifiedAt = (_d = object.modifiedAt) !== null && _d !== void 0 ? _d : undefined;
        message.createdBy = (_e = object.createdBy) !== null && _e !== void 0 ? _e : "";
        message.modifiedBy = (_f = object.modifiedBy) !== null && _f !== void 0 ? _f : "";
        message.name = (_g = object.name) !== null && _g !== void 0 ? _g : "";
        message.description = (_h = object.description) !== null && _h !== void 0 ? _h : "";
        message.labels = Object.entries((_j = object.labels) !== null && _j !== void 0 ? _j : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.title = (_k = object.title) !== null && _k !== void 0 ? _k : "";
        message.widgets = ((_l = object.widgets) === null || _l === void 0 ? void 0 : _l.map((e) => widget_1.Widget.fromPartial(e))) || [];
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? parametrization_1.Parametrization.fromPartial(object.parametrization)
                : undefined;
        message.etag = (_m = object.etag) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dashboard.$type, exports.Dashboard);
const baseDashboard_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry",
    key: "",
    value: "",
};
exports.Dashboard_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry",
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
        const message = Object.assign({}, baseDashboard_LabelsEntry);
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
        const message = Object.assign({}, baseDashboard_LabelsEntry);
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
        const message = Object.assign({}, baseDashboard_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Dashboard_LabelsEntry.$type, exports.Dashboard_LabelsEntry);
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
