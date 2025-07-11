"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRouterServiceClient = exports.HttpRouterServiceService = exports.ListHttpRouterOperationsResponse = exports.ListHttpRouterOperationsRequest = exports.CreateHttpRouterMetadata = exports.CreateHttpRouterRequest_LabelsEntry = exports.CreateHttpRouterRequest = exports.UpdateHttpRouterMetadata = exports.UpdateHttpRouterRequest_LabelsEntry = exports.UpdateHttpRouterRequest = exports.DeleteHttpRouterMetadata = exports.DeleteHttpRouterRequest = exports.ListHttpRoutersResponse = exports.ListHttpRoutersRequest = exports.GetHttpRouterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const virtual_host_1 = require("../../../../yandex/cloud/apploadbalancer/v1/virtual_host");
const http_router_1 = require("../../../../yandex/cloud/apploadbalancer/v1/http_router");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseGetHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest",
    httpRouterId: "",
};
exports.GetHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetHttpRouterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetHttpRouterRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetHttpRouterRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetHttpRouterRequest.$type, exports.GetHttpRouterRequest);
const baseListHttpRoutersRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListHttpRoutersRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHttpRoutersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
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
        const message = Object.assign({}, baseListHttpRoutersRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
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
        const message = Object.assign({}, baseListHttpRoutersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHttpRoutersRequest.$type, exports.ListHttpRoutersRequest);
const baseListHttpRoutersResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse",
    nextPageToken: "",
};
exports.ListHttpRoutersResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.httpRouters) {
            http_router_1.HttpRouter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListHttpRoutersResponse);
        message.httpRouters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouters.push(http_router_1.HttpRouter.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListHttpRoutersResponse);
        message.httpRouters = ((_a = object.httpRouters) !== null && _a !== void 0 ? _a : []).map((e) => http_router_1.HttpRouter.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.httpRouters) {
            obj.httpRouters = message.httpRouters.map((e) => e ? http_router_1.HttpRouter.toJSON(e) : undefined);
        }
        else {
            obj.httpRouters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListHttpRoutersResponse);
        message.httpRouters =
            ((_a = object.httpRouters) === null || _a === void 0 ? void 0 : _a.map((e) => http_router_1.HttpRouter.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHttpRoutersResponse.$type, exports.ListHttpRoutersResponse);
const baseDeleteHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest",
    httpRouterId: "",
};
exports.DeleteHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteHttpRouterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteHttpRouterRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteHttpRouterRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHttpRouterRequest.$type, exports.DeleteHttpRouterRequest);
const baseDeleteHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata",
    httpRouterId: "",
};
exports.DeleteHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteHttpRouterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteHttpRouterMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteHttpRouterMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHttpRouterMetadata.$type, exports.DeleteHttpRouterMetadata);
const baseUpdateHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest",
    httpRouterId: "",
    name: "",
    description: "",
};
exports.UpdateHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateHttpRouterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.virtualHosts) {
            virtual_host_1.VirtualHost.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            virtual_host_1.RouteOptions.encode(message.routeOptions, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHttpRouterRequest);
        message.labels = {};
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.virtualHosts.push(virtual_host_1.VirtualHost.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.routeOptions = virtual_host_1.RouteOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateHttpRouterRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
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
        message.virtualHosts = ((_b = object.virtualHosts) !== null && _b !== void 0 ? _b : []).map((e) => virtual_host_1.VirtualHost.fromJSON(e));
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromJSON(object.routeOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? virtual_host_1.VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? virtual_host_1.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateHttpRouterRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.virtualHosts =
            ((_e = object.virtualHosts) === null || _e === void 0 ? void 0 : _e.map((e) => virtual_host_1.VirtualHost.fromPartial(e))) || [];
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHttpRouterRequest.$type, exports.UpdateHttpRouterRequest);
const baseUpdateHttpRouterRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateHttpRouterRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateHttpRouterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateHttpRouterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateHttpRouterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHttpRouterRequest_LabelsEntry.$type, exports.UpdateHttpRouterRequest_LabelsEntry);
const baseUpdateHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata",
    httpRouterId: "",
};
exports.UpdateHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateHttpRouterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateHttpRouterMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateHttpRouterMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHttpRouterMetadata.$type, exports.UpdateHttpRouterMetadata);
const baseCreateHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateHttpRouterRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateHttpRouterRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.virtualHosts) {
            virtual_host_1.VirtualHost.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            virtual_host_1.RouteOptions.encode(message.routeOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateHttpRouterRequest);
        message.labels = {};
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.virtualHosts.push(virtual_host_1.VirtualHost.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.routeOptions = virtual_host_1.RouteOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateHttpRouterRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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
        message.virtualHosts = ((_b = object.virtualHosts) !== null && _b !== void 0 ? _b : []).map((e) => virtual_host_1.VirtualHost.fromJSON(e));
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromJSON(object.routeOptions)
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? virtual_host_1.VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? virtual_host_1.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateHttpRouterRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.virtualHosts =
            ((_e = object.virtualHosts) === null || _e === void 0 ? void 0 : _e.map((e) => virtual_host_1.VirtualHost.fromPartial(e))) || [];
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHttpRouterRequest.$type, exports.CreateHttpRouterRequest);
const baseCreateHttpRouterRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateHttpRouterRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateHttpRouterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateHttpRouterRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateHttpRouterRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHttpRouterRequest_LabelsEntry.$type, exports.CreateHttpRouterRequest_LabelsEntry);
const baseCreateHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata",
    httpRouterId: "",
};
exports.CreateHttpRouterMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateHttpRouterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateHttpRouterMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateHttpRouterMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHttpRouterMetadata.$type, exports.CreateHttpRouterMetadata);
const baseListHttpRouterOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest",
    httpRouterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListHttpRouterOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
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
        const message = Object.assign({}, baseListHttpRouterOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
        const message = Object.assign({}, baseListHttpRouterOperationsRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
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
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListHttpRouterOperationsRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHttpRouterOperationsRequest.$type, exports.ListHttpRouterOperationsRequest);
const baseListHttpRouterOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse",
    nextPageToken: "",
};
exports.ListHttpRouterOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse",
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
        const message = Object.assign({}, baseListHttpRouterOperationsResponse);
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
        const message = Object.assign({}, baseListHttpRouterOperationsResponse);
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
        const message = Object.assign({}, baseListHttpRouterOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListHttpRouterOperationsResponse.$type, exports.ListHttpRouterOperationsResponse);
/** A set of methods for managing HTTP routers. */
exports.HttpRouterServiceService = {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(http_router_1.HttpRouter.encode(value).finish()),
        responseDeserialize: (value) => http_router_1.HttpRouter.decode(value),
    },
    /** Lists HTTP routers in the specified folder. */
    list: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHttpRoutersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHttpRoutersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHttpRoutersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHttpRoutersResponse.decode(value),
    },
    /** Creates an HTTP router in the specified folder. */
    create: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified HTTP router. */
    update: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified HTTP router. */
    delete: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified HTTP router. */
    listOperations: {
        path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHttpRouterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHttpRouterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHttpRouterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHttpRouterOperationsResponse.decode(value),
    },
};
exports.HttpRouterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.HttpRouterServiceService, "yandex.cloud.apploadbalancer.v1.HttpRouterService");
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
