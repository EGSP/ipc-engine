"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardServiceClient = exports.DashboardServiceService = exports.ListDashboardOperationsResponse = exports.ListDashboardOperationsRequest = exports.DeleteDashboardMetadata = exports.DeleteDashboardRequest = exports.UpdateDashboardMetadata = exports.UpdateDashboardRequest_LabelsEntry = exports.UpdateDashboardRequest = exports.CreateDashboardMetadata = exports.CreateDashboardRequest_LabelsEntry = exports.CreateDashboardRequest = exports.ListDashboardsResponse = exports.ListDashboardsRequest = exports.GetDashboardRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const parametrization_1 = require("../../../../yandex/cloud/monitoring/v3/parametrization");
const dashboard_1 = require("../../../../yandex/cloud/monitoring/v3/dashboard");
const widget_1 = require("../../../../yandex/cloud/monitoring/v3/widget");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.monitoring.v3";
const baseGetDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.GetDashboardRequest",
    dashboardId: "",
};
exports.GetDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.GetDashboardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDashboardRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDashboardRequest);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetDashboardRequest);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDashboardRequest.$type, exports.GetDashboardRequest);
const baseListDashboardsRequest = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListDashboardsRequest = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(152).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(162).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(170).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDashboardsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 19:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 20:
                    message.pageToken = reader.string();
                    break;
                case 21:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDashboardsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListDashboardsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDashboardsRequest.$type, exports.ListDashboardsRequest);
const baseListDashboardsResponse = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse",
    nextPageToken: "",
};
exports.ListDashboardsResponse = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.dashboards) {
            dashboard_1.Dashboard.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDashboardsResponse);
        message.dashboards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboards.push(dashboard_1.Dashboard.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListDashboardsResponse);
        message.dashboards = ((_a = object.dashboards) !== null && _a !== void 0 ? _a : []).map((e) => dashboard_1.Dashboard.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.dashboards) {
            obj.dashboards = message.dashboards.map((e) => e ? dashboard_1.Dashboard.toJSON(e) : undefined);
        }
        else {
            obj.dashboards = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDashboardsResponse);
        message.dashboards =
            ((_a = object.dashboards) === null || _a === void 0 ? void 0 : _a.map((e) => dashboard_1.Dashboard.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDashboardsResponse.$type, exports.ListDashboardsResponse);
const baseCreateDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest",
    name: "",
    description: "",
    title: "",
};
exports.CreateDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(154).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(162).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateDashboardRequest_LabelsEntry.encode({
                $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(170).fork()).ldelim();
        });
        if (message.title !== "") {
            writer.uint32(178).string(message.title);
        }
        for (const v of message.widgets) {
            widget_1.Widget.encode(v, writer.uint32(186).fork()).ldelim();
        }
        if (message.parametrization !== undefined) {
            parametrization_1.Parametrization.encode(message.parametrization, writer.uint32(194).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDashboardRequest);
        message.labels = {};
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 19:
                    message.name = reader.string();
                    break;
                case 20:
                    message.description = reader.string();
                    break;
                case 21:
                    const entry21 = exports.CreateDashboardRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry21.value !== undefined) {
                        message.labels[entry21.key] = entry21.value;
                    }
                    break;
                case 22:
                    message.title = reader.string();
                    break;
                case 23:
                    message.widgets.push(widget_1.Widget.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.parametrization = parametrization_1.Parametrization.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateDashboardRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.widgets = ((_b = object.widgets) !== null && _b !== void 0 ? _b : []).map((e) => widget_1.Widget.fromJSON(e));
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? parametrization_1.Parametrization.fromJSON(object.parametrization)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateDashboardRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.title = (_e = object.title) !== null && _e !== void 0 ? _e : "";
        message.widgets = ((_f = object.widgets) === null || _f === void 0 ? void 0 : _f.map((e) => widget_1.Widget.fromPartial(e))) || [];
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? parametrization_1.Parametrization.fromPartial(object.parametrization)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDashboardRequest.$type, exports.CreateDashboardRequest);
const baseCreateDashboardRequest_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateDashboardRequest_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateDashboardRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDashboardRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDashboardRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDashboardRequest_LabelsEntry.$type, exports.CreateDashboardRequest_LabelsEntry);
const baseCreateDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata",
    dashboardId: "",
};
exports.CreateDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDashboardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDashboardMetadata);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDashboardMetadata);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDashboardMetadata.$type, exports.CreateDashboardMetadata);
const baseUpdateDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest",
    dashboardId: "",
    name: "",
    description: "",
    title: "",
    etag: "",
};
exports.UpdateDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateDashboardRequest_LabelsEntry.encode({
                $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        for (const v of message.widgets) {
            widget_1.Widget.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.parametrization !== undefined) {
            parametrization_1.Parametrization.encode(message.parametrization, writer.uint32(58).fork()).ldelim();
        }
        if (message.etag !== "") {
            writer.uint32(66).string(message.etag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDashboardRequest);
        message.labels = {};
        message.widgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.UpdateDashboardRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.widgets.push(widget_1.Widget.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.parametrization = parametrization_1.Parametrization.decode(reader, reader.uint32());
                    break;
                case 8:
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
        const message = Object.assign({}, baseUpdateDashboardRequest);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
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
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
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
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateDashboardRequest);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.title = (_e = object.title) !== null && _e !== void 0 ? _e : "";
        message.widgets = ((_f = object.widgets) === null || _f === void 0 ? void 0 : _f.map((e) => widget_1.Widget.fromPartial(e))) || [];
        message.parametrization =
            object.parametrization !== undefined && object.parametrization !== null
                ? parametrization_1.Parametrization.fromPartial(object.parametrization)
                : undefined;
        message.etag = (_g = object.etag) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDashboardRequest.$type, exports.UpdateDashboardRequest);
const baseUpdateDashboardRequest_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateDashboardRequest_LabelsEntry = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateDashboardRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDashboardRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDashboardRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDashboardRequest_LabelsEntry.$type, exports.UpdateDashboardRequest_LabelsEntry);
const baseUpdateDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata",
    dashboardId: "",
};
exports.UpdateDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDashboardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDashboardMetadata);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateDashboardMetadata);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDashboardMetadata.$type, exports.UpdateDashboardMetadata);
const baseDeleteDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest",
    dashboardId: "",
    etag: "",
};
exports.DeleteDashboardRequest = {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        if (message.etag !== "") {
            writer.uint32(18).string(message.etag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDashboardRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseDeleteDashboardRequest);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        message.etag =
            object.etag !== undefined && object.etag !== null
                ? String(object.etag)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        message.etag !== undefined && (obj.etag = message.etag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDashboardRequest);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        message.etag = (_b = object.etag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDashboardRequest.$type, exports.DeleteDashboardRequest);
const baseDeleteDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata",
    dashboardId: "",
};
exports.DeleteDashboardMetadata = {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDashboardMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDashboardMetadata);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDashboardMetadata);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDashboardMetadata.$type, exports.DeleteDashboardMetadata);
const baseListDashboardOperationsRequest = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest",
    dashboardId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDashboardOperationsRequest = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dashboardId !== "") {
            writer.uint32(10).string(message.dashboardId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDashboardOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dashboardId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDashboardOperationsRequest);
        message.dashboardId =
            object.dashboardId !== undefined && object.dashboardId !== null
                ? String(object.dashboardId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dashboardId !== undefined &&
            (obj.dashboardId = message.dashboardId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDashboardOperationsRequest);
        message.dashboardId = (_a = object.dashboardId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDashboardOperationsRequest.$type, exports.ListDashboardOperationsRequest);
const baseListDashboardOperationsResponse = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse",
    nextPageToken: "",
};
exports.ListDashboardOperationsResponse = {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDashboardOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListDashboardOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDashboardOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDashboardOperationsResponse.$type, exports.ListDashboardOperationsResponse);
/** A set of methods for managing dashboards. */
exports.DashboardServiceService = {
    /** Returns the specified dashboard. */
    get: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDashboardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDashboardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(dashboard_1.Dashboard.encode(value).finish()),
        responseDeserialize: (value) => dashboard_1.Dashboard.decode(value),
    },
    /** Retrieves the list of dashboards in the specified folder. */
    list: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDashboardsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDashboardsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDashboardsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDashboardsResponse.decode(value),
    },
    /** Creates a new dashboard in the specified folder. */
    create: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDashboardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDashboardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified dashboard. */
    update: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDashboardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDashboardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified dashboard. */
    delete: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDashboardRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDashboardRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified dashboard. */
    listOperations: {
        path: "/yandex.cloud.monitoring.v3.DashboardService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDashboardOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDashboardOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDashboardOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDashboardOperationsResponse.decode(value),
    },
};
exports.DashboardServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DashboardServiceService, "yandex.cloud.monitoring.v3.DashboardService");
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
