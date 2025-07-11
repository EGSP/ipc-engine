"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteTableServiceClient = exports.RouteTableServiceService = exports.MoveRouteTableMetadata = exports.MoveRouteTableRequest = exports.ListRouteTableOperationsResponse = exports.ListRouteTableOperationsRequest = exports.DeleteRouteTableMetadata = exports.DeleteRouteTableRequest = exports.UpdateRouteTableMetadata = exports.UpdateRouteTableRequest_LabelsEntry = exports.UpdateRouteTableRequest = exports.CreateRouteTableMetadata = exports.CreateRouteTableRequest_LabelsEntry = exports.CreateRouteTableRequest = exports.ListRouteTablesResponse = exports.ListRouteTablesRequest = exports.GetRouteTableRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const route_table_1 = require("../../../../yandex/cloud/vpc/v1/route_table");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.vpc.v1";
const baseGetRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.GetRouteTableRequest",
    routeTableId: "",
};
exports.GetRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.GetRouteTableRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRouteTableRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRouteTableRequest);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRouteTableRequest);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRouteTableRequest.$type, exports.GetRouteTableRequest);
const baseListRouteTablesRequest = {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListRouteTablesRequest = {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesRequest",
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
        const message = Object.assign({}, baseListRouteTablesRequest);
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
        const message = Object.assign({}, baseListRouteTablesRequest);
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
        const message = Object.assign({}, baseListRouteTablesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRouteTablesRequest.$type, exports.ListRouteTablesRequest);
const baseListRouteTablesResponse = {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse",
    nextPageToken: "",
};
exports.ListRouteTablesResponse = {
    $type: "yandex.cloud.vpc.v1.ListRouteTablesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.routeTables) {
            route_table_1.RouteTable.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListRouteTablesResponse);
        message.routeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTables.push(route_table_1.RouteTable.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListRouteTablesResponse);
        message.routeTables = ((_a = object.routeTables) !== null && _a !== void 0 ? _a : []).map((e) => route_table_1.RouteTable.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.routeTables) {
            obj.routeTables = message.routeTables.map((e) => e ? route_table_1.RouteTable.toJSON(e) : undefined);
        }
        else {
            obj.routeTables = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListRouteTablesResponse);
        message.routeTables =
            ((_a = object.routeTables) === null || _a === void 0 ? void 0 : _a.map((e) => route_table_1.RouteTable.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRouteTablesResponse.$type, exports.ListRouteTablesResponse);
const baseCreateRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest",
    folderId: "",
    name: "",
    description: "",
    networkId: "",
};
exports.CreateRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest",
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
            exports.CreateRouteTableRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== "") {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.staticRoutes) {
            route_table_1.StaticRoute.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateRouteTableRequest);
        message.labels = {};
        message.staticRoutes = [];
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
                    const entry4 = exports.CreateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.staticRoutes.push(route_table_1.StaticRoute.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateRouteTableRequest);
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
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.staticRoutes = ((_b = object.staticRoutes) !== null && _b !== void 0 ? _b : []).map((e) => route_table_1.StaticRoute.fromJSON(e));
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) => e ? route_table_1.StaticRoute.toJSON(e) : undefined);
        }
        else {
            obj.staticRoutes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateRouteTableRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.networkId = (_e = object.networkId) !== null && _e !== void 0 ? _e : "";
        message.staticRoutes =
            ((_f = object.staticRoutes) === null || _f === void 0 ? void 0 : _f.map((e) => route_table_1.StaticRoute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRouteTableRequest.$type, exports.CreateRouteTableRequest);
const baseCreateRouteTableRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateRouteTableRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateRouteTableRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateRouteTableRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateRouteTableRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRouteTableRequest_LabelsEntry.$type, exports.CreateRouteTableRequest_LabelsEntry);
const baseCreateRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata",
    routeTableId: "",
};
exports.CreateRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateRouteTableMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateRouteTableMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateRouteTableMetadata);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateRouteTableMetadata);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateRouteTableMetadata.$type, exports.CreateRouteTableMetadata);
const baseUpdateRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest",
    routeTableId: "",
    name: "",
    description: "",
};
exports.UpdateRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
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
            exports.UpdateRouteTableRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.staticRoutes) {
            route_table_1.StaticRoute.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRouteTableRequest);
        message.labels = {};
        message.staticRoutes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
                    const entry5 = exports.UpdateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.staticRoutes.push(route_table_1.StaticRoute.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateRouteTableRequest);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
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
        message.staticRoutes = ((_b = object.staticRoutes) !== null && _b !== void 0 ? _b : []).map((e) => route_table_1.StaticRoute.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
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
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) => e ? route_table_1.StaticRoute.toJSON(e) : undefined);
        }
        else {
            obj.staticRoutes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateRouteTableRequest);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
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
        message.staticRoutes =
            ((_e = object.staticRoutes) === null || _e === void 0 ? void 0 : _e.map((e) => route_table_1.StaticRoute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRouteTableRequest.$type, exports.UpdateRouteTableRequest);
const baseUpdateRouteTableRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateRouteTableRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateRouteTableRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateRouteTableRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateRouteTableRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRouteTableRequest_LabelsEntry.$type, exports.UpdateRouteTableRequest_LabelsEntry);
const baseUpdateRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata",
    routeTableId: "",
};
exports.UpdateRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateRouteTableMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateRouteTableMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateRouteTableMetadata);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateRouteTableMetadata);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRouteTableMetadata.$type, exports.UpdateRouteTableMetadata);
const baseDeleteRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest",
    routeTableId: "",
};
exports.DeleteRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRouteTableRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRouteTableRequest);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRouteTableRequest);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRouteTableRequest.$type, exports.DeleteRouteTableRequest);
const baseDeleteRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata",
    routeTableId: "",
};
exports.DeleteRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteRouteTableMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteRouteTableMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteRouteTableMetadata);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteRouteTableMetadata);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRouteTableMetadata.$type, exports.DeleteRouteTableMetadata);
const baseListRouteTableOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest",
    routeTableId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListRouteTableOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
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
        const message = Object.assign({}, baseListRouteTableOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
        const message = Object.assign({}, baseListRouteTableOperationsRequest);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListRouteTableOperationsRequest);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRouteTableOperationsRequest.$type, exports.ListRouteTableOperationsRequest);
const baseListRouteTableOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse",
    nextPageToken: "",
};
exports.ListRouteTableOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListRouteTableOperationsResponse",
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
        const message = Object.assign({}, baseListRouteTableOperationsResponse);
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
        const message = Object.assign({}, baseListRouteTableOperationsResponse);
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
        const message = Object.assign({}, baseListRouteTableOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRouteTableOperationsResponse.$type, exports.ListRouteTableOperationsResponse);
const baseMoveRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest",
    routeTableId: "",
    destinationFolderId: "",
};
exports.MoveRouteTableRequest = {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveRouteTableRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveRouteTableRequest);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveRouteTableRequest);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveRouteTableRequest.$type, exports.MoveRouteTableRequest);
const baseMoveRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata",
    routeTableId: "",
};
exports.MoveRouteTableMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveRouteTableMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== "") {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveRouteTableMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveRouteTableMetadata);
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMoveRouteTableMetadata);
        message.routeTableId = (_a = object.routeTableId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveRouteTableMetadata.$type, exports.MoveRouteTableMetadata);
/** A set of methods for managing RouteTable resources. */
exports.RouteTableServiceService = {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(route_table_1.RouteTable.encode(value).finish()),
        responseDeserialize: (value) => route_table_1.RouteTable.decode(value),
    },
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRouteTablesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRouteTablesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRouteTablesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRouteTablesResponse.decode(value),
    },
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified route table. */
    delete: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified route table. */
    listOperations: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRouteTableOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRouteTableOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRouteTableOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRouteTableOperationsResponse.decode(value),
    },
    /** Move route table to another folder. */
    move: {
        path: "/yandex.cloud.vpc.v1.RouteTableService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RouteTableServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RouteTableServiceService, "yandex.cloud.vpc.v1.RouteTableService");
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
