"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualHostServiceClient = exports.VirtualHostServiceService = exports.UpdateRouteMetadata = exports.UpdateRouteRequest = exports.RemoveRouteMetadata = exports.RemoveRouteRequest = exports.DeleteVirtualHostMetadata = exports.DeleteVirtualHostRequest = exports.UpdateVirtualHostMetadata = exports.UpdateVirtualHostRequest = exports.CreateVirtualHostMetadata = exports.CreateVirtualHostRequest = exports.ListVirtualHostsResponse = exports.ListVirtualHostsRequest = exports.GetVirtualHostRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const virtual_host_1 = require("../../../../yandex/cloud/apploadbalancer/v1/virtual_host");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseGetVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest",
    httpRouterId: "",
    virtualHostName: "",
};
exports.GetVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetVirtualHostRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetVirtualHostRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetVirtualHostRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetVirtualHostRequest.$type, exports.GetVirtualHostRequest);
const baseListVirtualHostsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest",
    httpRouterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListVirtualHostsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest",
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
        const message = Object.assign({}, baseListVirtualHostsRequest);
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
        const message = Object.assign({}, baseListVirtualHostsRequest);
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
        const message = Object.assign({}, baseListVirtualHostsRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVirtualHostsRequest.$type, exports.ListVirtualHostsRequest);
const baseListVirtualHostsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse",
    nextPageToken: "",
};
exports.ListVirtualHostsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.virtualHosts) {
            virtual_host_1.VirtualHost.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVirtualHostsResponse);
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.virtualHosts.push(virtual_host_1.VirtualHost.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListVirtualHostsResponse);
        message.virtualHosts = ((_a = object.virtualHosts) !== null && _a !== void 0 ? _a : []).map((e) => virtual_host_1.VirtualHost.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? virtual_host_1.VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListVirtualHostsResponse);
        message.virtualHosts =
            ((_a = object.virtualHosts) === null || _a === void 0 ? void 0 : _a.map((e) => virtual_host_1.VirtualHost.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVirtualHostsResponse.$type, exports.ListVirtualHostsResponse);
const baseCreateVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest",
    httpRouterId: "",
    name: "",
    authority: "",
};
exports.CreateVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(26).string(v);
        }
        for (const v of message.routes) {
            virtual_host_1.Route.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            virtual_host_1.RouteOptions.encode(message.routeOptions, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateVirtualHostRequest);
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.authority.push(reader.string());
                    break;
                case 5:
                    message.routes.push(virtual_host_1.Route.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateVirtualHostRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.authority = ((_a = object.authority) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.routes = ((_b = object.routes) !== null && _b !== void 0 ? _b : []).map((e) => virtual_host_1.Route.fromJSON(e));
        message.modifyRequestHeaders = ((_c = object.modifyRequestHeaders) !== null && _c !== void 0 ? _c : []).map((e) => virtual_host_1.HeaderModification.fromJSON(e));
        message.modifyResponseHeaders = ((_d = object.modifyResponseHeaders) !== null && _d !== void 0 ? _d : []).map((e) => virtual_host_1.HeaderModification.fromJSON(e));
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
        message.name !== undefined && (obj.name = message.name);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? virtual_host_1.Route.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? virtual_host_1.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateVirtualHostRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.authority = ((_c = object.authority) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.routes = ((_d = object.routes) === null || _d === void 0 ? void 0 : _d.map((e) => virtual_host_1.Route.fromPartial(e))) || [];
        message.modifyRequestHeaders =
            ((_e = object.modifyRequestHeaders) === null || _e === void 0 ? void 0 : _e.map((e) => virtual_host_1.HeaderModification.fromPartial(e))) || [];
        message.modifyResponseHeaders =
            ((_f = object.modifyResponseHeaders) === null || _f === void 0 ? void 0 : _f.map((e) => virtual_host_1.HeaderModification.fromPartial(e))) || [];
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateVirtualHostRequest.$type, exports.CreateVirtualHostRequest);
const baseCreateVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata",
    httpRouterId: "",
    virtualHostName: "",
};
exports.CreateVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateVirtualHostMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateVirtualHostMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateVirtualHostMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateVirtualHostMetadata.$type, exports.CreateVirtualHostMetadata);
const baseUpdateVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest",
    httpRouterId: "",
    virtualHostName: "",
    authority: "",
};
exports.UpdateVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.authority) {
            writer.uint32(34).string(v);
        }
        for (const v of message.routes) {
            virtual_host_1.Route.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            virtual_host_1.RouteOptions.encode(message.routeOptions, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateVirtualHostRequest);
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authority.push(reader.string());
                    break;
                case 6:
                    message.routes.push(virtual_host_1.Route.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 9:
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
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateVirtualHostRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.authority = ((_a = object.authority) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.routes = ((_b = object.routes) !== null && _b !== void 0 ? _b : []).map((e) => virtual_host_1.Route.fromJSON(e));
        message.modifyRequestHeaders = ((_c = object.modifyRequestHeaders) !== null && _c !== void 0 ? _c : []).map((e) => virtual_host_1.HeaderModification.fromJSON(e));
        message.modifyResponseHeaders = ((_d = object.modifyResponseHeaders) !== null && _d !== void 0 ? _d : []).map((e) => virtual_host_1.HeaderModification.fromJSON(e));
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
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? virtual_host_1.Route.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? virtual_host_1.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateVirtualHostRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.authority = ((_c = object.authority) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.routes = ((_d = object.routes) === null || _d === void 0 ? void 0 : _d.map((e) => virtual_host_1.Route.fromPartial(e))) || [];
        message.modifyRequestHeaders =
            ((_e = object.modifyRequestHeaders) === null || _e === void 0 ? void 0 : _e.map((e) => virtual_host_1.HeaderModification.fromPartial(e))) || [];
        message.modifyResponseHeaders =
            ((_f = object.modifyResponseHeaders) === null || _f === void 0 ? void 0 : _f.map((e) => virtual_host_1.HeaderModification.fromPartial(e))) || [];
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateVirtualHostRequest.$type, exports.UpdateVirtualHostRequest);
const baseUpdateVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata",
    httpRouterId: "",
    virtualHostName: "",
};
exports.UpdateVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateVirtualHostMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateVirtualHostMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateVirtualHostMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateVirtualHostMetadata.$type, exports.UpdateVirtualHostMetadata);
const baseDeleteVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest",
    httpRouterId: "",
    virtualHostName: "",
};
exports.DeleteVirtualHostRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteVirtualHostRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteVirtualHostRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteVirtualHostRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteVirtualHostRequest.$type, exports.DeleteVirtualHostRequest);
const baseDeleteVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata",
    httpRouterId: "",
    virtualHostName: "",
};
exports.DeleteVirtualHostMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteVirtualHostMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteVirtualHostMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteVirtualHostMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteVirtualHostMetadata.$type, exports.DeleteVirtualHostMetadata);
const baseRemoveRouteRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteRequest",
    httpRouterId: "",
    virtualHostName: "",
    routeName: "",
};
exports.RemoveRouteRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== "") {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveRouteRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveRouteRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        message.routeName =
            object.routeName !== undefined && object.routeName !== null
                ? String(object.routeName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRemoveRouteRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        message.routeName = (_c = object.routeName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveRouteRequest.$type, exports.RemoveRouteRequest);
const baseRemoveRouteMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata",
    httpRouterId: "",
    virtualHostName: "",
    routeName: "",
};
exports.RemoveRouteMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== "") {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveRouteMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveRouteMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        message.routeName =
            object.routeName !== undefined && object.routeName !== null
                ? String(object.routeName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRemoveRouteMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        message.routeName = (_c = object.routeName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveRouteMetadata.$type, exports.RemoveRouteMetadata);
const baseUpdateRouteRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteRequest",
    httpRouterId: "",
    virtualHostName: "",
    routeName: "",
};
exports.UpdateRouteRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== "") {
            writer.uint32(26).string(message.routeName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        if (message.http !== undefined) {
            virtual_host_1.HttpRoute.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            virtual_host_1.GrpcRoute.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            virtual_host_1.RouteOptions.encode(message.routeOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRouteRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                case 4:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.http = virtual_host_1.HttpRoute.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = virtual_host_1.GrpcRoute.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateRouteRequest);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        message.routeName =
            object.routeName !== undefined && object.routeName !== null
                ? String(object.routeName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? virtual_host_1.HttpRoute.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? virtual_host_1.GrpcRoute.fromJSON(object.grpc)
                : undefined;
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
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http ? virtual_host_1.HttpRoute.toJSON(message.http) : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc ? virtual_host_1.GrpcRoute.toJSON(message.grpc) : undefined);
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? virtual_host_1.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateRouteRequest);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        message.routeName = (_c = object.routeName) !== null && _c !== void 0 ? _c : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.http =
            object.http !== undefined && object.http !== null
                ? virtual_host_1.HttpRoute.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? virtual_host_1.GrpcRoute.fromPartial(object.grpc)
                : undefined;
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? virtual_host_1.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRouteRequest.$type, exports.UpdateRouteRequest);
const baseUpdateRouteMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata",
    httpRouterId: "",
    virtualHostName: "",
    routeName: "",
};
exports.UpdateRouteMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== "") {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== "") {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== "") {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRouteMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateRouteMetadata);
        message.httpRouterId =
            object.httpRouterId !== undefined && object.httpRouterId !== null
                ? String(object.httpRouterId)
                : "";
        message.virtualHostName =
            object.virtualHostName !== undefined && object.virtualHostName !== null
                ? String(object.virtualHostName)
                : "";
        message.routeName =
            object.routeName !== undefined && object.routeName !== null
                ? String(object.routeName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateRouteMetadata);
        message.httpRouterId = (_a = object.httpRouterId) !== null && _a !== void 0 ? _a : "";
        message.virtualHostName = (_b = object.virtualHostName) !== null && _b !== void 0 ? _b : "";
        message.routeName = (_c = object.routeName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRouteMetadata.$type, exports.UpdateRouteMetadata);
/** A set of methods for managing virtual hosts of HTTP routers. */
exports.VirtualHostServiceService = {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(virtual_host_1.VirtualHost.encode(value).finish()),
        responseDeserialize: (value) => virtual_host_1.VirtualHost.decode(value),
    },
    /** Lists virtual hosts of the specified HTTP router. */
    list: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVirtualHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVirtualHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVirtualHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVirtualHostsResponse.decode(value),
    },
    /** Creates a virtual host in the specified HTTP router. */
    create: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified virtual host of the specified HTTP router. */
    update: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified virtual host. */
    delete: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified route of the specified virtual host. */
    updateRoute: {
        path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.VirtualHostServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.VirtualHostServiceService, "yandex.cloud.apploadbalancer.v1.VirtualHostService");
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
