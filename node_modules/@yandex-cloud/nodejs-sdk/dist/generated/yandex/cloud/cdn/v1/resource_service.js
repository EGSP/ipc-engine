"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceServiceClient = exports.ResourceServiceService = exports.GetProviderCNameResponse = exports.GetProviderCNameRequest = exports.DeleteResourceMetadata = exports.DeleteResourceRequest = exports.UpdateResourceMetadata = exports.UpdateResourceRequest_LabelsEntry = exports.UpdateResourceRequest = exports.CreateResourceMetadata = exports.ResourceOriginParams = exports.CreateResourceRequest_LabelsEntry = exports.CreateResourceRequest_Origin = exports.CreateResourceRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.GetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("../../../../yandex/cloud/cdn/v1/resource");
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.cdn.v1";
const baseGetResourceRequest = {
    $type: "yandex.cloud.cdn.v1.GetResourceRequest",
    resourceId: "",
};
exports.GetResourceRequest = {
    $type: "yandex.cloud.cdn.v1.GetResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetResourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetResourceRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetResourceRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetResourceRequest.$type, exports.GetResourceRequest);
const baseListResourcesRequest = {
    $type: "yandex.cloud.cdn.v1.ListResourcesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListResourcesRequest = {
    $type: "yandex.cloud.cdn.v1.ListResourcesRequest",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcesRequest);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListResourcesRequest);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListResourcesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesRequest.$type, exports.ListResourcesRequest);
const baseListResourcesResponse = {
    $type: "yandex.cloud.cdn.v1.ListResourcesResponse",
    nextPageToken: "",
};
exports.ListResourcesResponse = {
    $type: "yandex.cloud.cdn.v1.ListResourcesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources = ((_a = object.resources) !== null && _a !== void 0 ? _a : []).map((e) => resource_1.Resource.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListResourcesResponse);
        message.resources =
            ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.Resource.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcesResponse.$type, exports.ListResourcesResponse);
const baseCreateResourceRequest = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest",
    folderId: "",
    cname: "",
    originProtocol: 0,
};
exports.CreateResourceRequest = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.cname !== "") {
            writer.uint32(18).string(message.cname);
        }
        if (message.origin !== undefined) {
            exports.CreateResourceRequest_Origin.encode(message.origin, writer.uint32(26).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            resource_1.SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.options !== undefined) {
            resource_1.ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            resource_1.SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateResourceRequest_LabelsEntry.encode({
                $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(74).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateResourceRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.cname = reader.string();
                    break;
                case 3:
                    message.origin = exports.CreateResourceRequest_Origin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.secondaryHostnames = resource_1.SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.options = resource_1.ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sslCertificate = resource_1.SSLTargetCertificate.decode(reader, reader.uint32());
                    break;
                case 9:
                    const entry9 = exports.CreateResourceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.labels[entry9.key] = entry9.value;
                    }
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
        const message = Object.assign({}, baseCreateResourceRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.cname =
            object.cname !== undefined && object.cname !== null
                ? String(object.cname)
                : "";
        message.origin =
            object.origin !== undefined && object.origin !== null
                ? exports.CreateResourceRequest_Origin.fromJSON(object.origin)
                : undefined;
        message.secondaryHostnames =
            object.secondaryHostnames !== undefined &&
                object.secondaryHostnames !== null
                ? resource_1.SecondaryHostnames.fromJSON(object.secondaryHostnames)
                : undefined;
        message.originProtocol =
            object.originProtocol !== undefined && object.originProtocol !== null
                ? (0, resource_1.originProtocolFromJSON)(object.originProtocol)
                : 0;
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : undefined;
        message.options =
            object.options !== undefined && object.options !== null
                ? resource_1.ResourceOptions.fromJSON(object.options)
                : undefined;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? resource_1.SSLTargetCertificate.fromJSON(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.origin !== undefined &&
            (obj.origin = message.origin
                ? exports.CreateResourceRequest_Origin.toJSON(message.origin)
                : undefined);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? resource_1.SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = (0, resource_1.originProtocolToJSON)(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? resource_1.ResourceOptions.toJSON(message.options)
                : undefined);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? resource_1.SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateResourceRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.cname = (_b = object.cname) !== null && _b !== void 0 ? _b : "";
        message.origin =
            object.origin !== undefined && object.origin !== null
                ? exports.CreateResourceRequest_Origin.fromPartial(object.origin)
                : undefined;
        message.secondaryHostnames =
            object.secondaryHostnames !== undefined &&
                object.secondaryHostnames !== null
                ? resource_1.SecondaryHostnames.fromPartial(object.secondaryHostnames)
                : undefined;
        message.originProtocol = (_c = object.originProtocol) !== null && _c !== void 0 ? _c : 0;
        message.active = (_d = object.active) !== null && _d !== void 0 ? _d : undefined;
        message.options =
            object.options !== undefined && object.options !== null
                ? resource_1.ResourceOptions.fromPartial(object.options)
                : undefined;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? resource_1.SSLTargetCertificate.fromPartial(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateResourceRequest.$type, exports.CreateResourceRequest);
const baseCreateResourceRequest_Origin = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin",
};
exports.CreateResourceRequest_Origin = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== undefined) {
            writer.uint32(8).int64(message.originGroupId);
        }
        if (message.originSource !== undefined) {
            writer.uint32(18).string(message.originSource);
        }
        if (message.originSourceParams !== undefined) {
            exports.ResourceOriginParams.encode(message.originSourceParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateResourceRequest_Origin);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originSource = reader.string();
                    break;
                case 3:
                    message.originSourceParams = exports.ResourceOriginParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateResourceRequest_Origin);
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : undefined;
        message.originSource =
            object.originSource !== undefined && object.originSource !== null
                ? String(object.originSource)
                : undefined;
        message.originSourceParams =
            object.originSourceParams !== undefined &&
                object.originSourceParams !== null
                ? exports.ResourceOriginParams.fromJSON(object.originSourceParams)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.originSource !== undefined &&
            (obj.originSource = message.originSource);
        message.originSourceParams !== undefined &&
            (obj.originSourceParams = message.originSourceParams
                ? exports.ResourceOriginParams.toJSON(message.originSourceParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateResourceRequest_Origin);
        message.originGroupId = (_a = object.originGroupId) !== null && _a !== void 0 ? _a : undefined;
        message.originSource = (_b = object.originSource) !== null && _b !== void 0 ? _b : undefined;
        message.originSourceParams =
            object.originSourceParams !== undefined &&
                object.originSourceParams !== null
                ? exports.ResourceOriginParams.fromPartial(object.originSourceParams)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateResourceRequest_Origin.$type, exports.CreateResourceRequest_Origin);
const baseCreateResourceRequest_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateResourceRequest_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateResourceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateResourceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateResourceRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateResourceRequest_LabelsEntry.$type, exports.CreateResourceRequest_LabelsEntry);
const baseResourceOriginParams = {
    $type: "yandex.cloud.cdn.v1.ResourceOriginParams",
    source: "",
};
exports.ResourceOriginParams = {
    $type: "yandex.cloud.cdn.v1.ResourceOriginParams",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.source !== "") {
            writer.uint32(10).string(message.source);
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOriginParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.meta = origin_1.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOriginParams);
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromJSON(object.meta)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined && (obj.source = message.source);
        message.meta !== undefined &&
            (obj.meta = message.meta ? origin_1.OriginMeta.toJSON(message.meta) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResourceOriginParams);
        message.source = (_a = object.source) !== null && _a !== void 0 ? _a : "";
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? origin_1.OriginMeta.fromPartial(object.meta)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOriginParams.$type, exports.ResourceOriginParams);
const baseCreateResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateResourceMetadata",
    resourceId: "",
};
exports.CreateResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.CreateResourceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateResourceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateResourceMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateResourceMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateResourceMetadata.$type, exports.CreateResourceMetadata);
const baseUpdateResourceRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest",
    resourceId: "",
    originProtocol: 0,
};
exports.UpdateResourceRequest = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.originGroupId !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.originGroupId }, writer.uint32(18).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            resource_1.SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            resource_1.ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            resource_1.SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateResourceRequest_LabelsEntry.encode({
                $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateResourceRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.originGroupId = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.secondaryHostnames = resource_1.SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.options = resource_1.ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.sslCertificate = resource_1.SSLTargetCertificate.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.UpdateResourceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.labels[entry8.key] = entry8.value;
                    }
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
        const message = Object.assign({}, baseUpdateResourceRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : undefined;
        message.secondaryHostnames =
            object.secondaryHostnames !== undefined &&
                object.secondaryHostnames !== null
                ? resource_1.SecondaryHostnames.fromJSON(object.secondaryHostnames)
                : undefined;
        message.options =
            object.options !== undefined && object.options !== null
                ? resource_1.ResourceOptions.fromJSON(object.options)
                : undefined;
        message.originProtocol =
            object.originProtocol !== undefined && object.originProtocol !== null
                ? (0, resource_1.originProtocolFromJSON)(object.originProtocol)
                : 0;
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : undefined;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? resource_1.SSLTargetCertificate.fromJSON(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? resource_1.SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.options !== undefined &&
            (obj.options = message.options
                ? resource_1.ResourceOptions.toJSON(message.options)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = (0, resource_1.originProtocolToJSON)(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? resource_1.SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateResourceRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        message.originGroupId = (_b = object.originGroupId) !== null && _b !== void 0 ? _b : undefined;
        message.secondaryHostnames =
            object.secondaryHostnames !== undefined &&
                object.secondaryHostnames !== null
                ? resource_1.SecondaryHostnames.fromPartial(object.secondaryHostnames)
                : undefined;
        message.options =
            object.options !== undefined && object.options !== null
                ? resource_1.ResourceOptions.fromPartial(object.options)
                : undefined;
        message.originProtocol = (_c = object.originProtocol) !== null && _c !== void 0 ? _c : 0;
        message.active = (_d = object.active) !== null && _d !== void 0 ? _d : undefined;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? resource_1.SSLTargetCertificate.fromPartial(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateResourceRequest.$type, exports.UpdateResourceRequest);
const baseUpdateResourceRequest_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateResourceRequest_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateResourceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateResourceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateResourceRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateResourceRequest_LabelsEntry.$type, exports.UpdateResourceRequest_LabelsEntry);
const baseUpdateResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata",
    resourceId: "",
};
exports.UpdateResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateResourceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateResourceMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateResourceMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateResourceMetadata.$type, exports.UpdateResourceMetadata);
const baseDeleteResourceRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteResourceRequest",
    resourceId: "",
};
exports.DeleteResourceRequest = {
    $type: "yandex.cloud.cdn.v1.DeleteResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteResourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteResourceRequest);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteResourceRequest);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteResourceRequest.$type, exports.DeleteResourceRequest);
const baseDeleteResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata",
    resourceId: "",
};
exports.DeleteResourceMetadata = {
    $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteResourceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteResourceMetadata);
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteResourceMetadata);
        message.resourceId = (_a = object.resourceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteResourceMetadata.$type, exports.DeleteResourceMetadata);
const baseGetProviderCNameRequest = {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest",
    folderId: "",
};
exports.GetProviderCNameRequest = {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetProviderCNameRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetProviderCNameRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetProviderCNameRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetProviderCNameRequest.$type, exports.GetProviderCNameRequest);
const baseGetProviderCNameResponse = {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse",
    cname: "",
    folderId: "",
};
exports.GetProviderCNameResponse = {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cname !== "") {
            writer.uint32(10).string(message.cname);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetProviderCNameResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cname = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetProviderCNameResponse);
        message.cname =
            object.cname !== undefined && object.cname !== null
                ? String(object.cname)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cname !== undefined && (obj.cname = message.cname);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetProviderCNameResponse);
        message.cname = (_a = object.cname) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetProviderCNameResponse.$type, exports.GetProviderCNameResponse);
/** Provider's resources management service. */
exports.ResourceServiceService = {
    /** Get client's CDN resource by resource id. */
    get: {
        path: "/yandex.cloud.cdn.v1.ResourceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(resource_1.Resource.encode(value).finish()),
        responseDeserialize: (value) => resource_1.Resource.decode(value),
    },
    /** Lists CDN resources. */
    list: {
        path: "/yandex.cloud.cdn.v1.ResourceService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcesResponse.decode(value),
    },
    /**
     * Creates a CDN resource in the specified folder.
     *
     * Creation may take up to 15 minutes.
     */
    create: {
        path: "/yandex.cloud.cdn.v1.ResourceService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified CDN resource.
     *
     * The method implements patch behaviour, i.e. only the fields specified in the request are updated in the resource.
     *
     * Changes may take up to 15 minutes to apply. Afterwards, it is recommended to purge the resource's cache via a
     * [CacheService.Purge] request.
     */
    update: {
        path: "/yandex.cloud.cdn.v1.ResourceService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes client's CDN resource. */
    delete: {
        path: "/yandex.cloud.cdn.v1.ResourceService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Get Provider's CNAME (edge endpoint) bind to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: {
        path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProviderCNameRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProviderCNameRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetProviderCNameResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetProviderCNameResponse.decode(value),
    },
};
exports.ResourceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ResourceServiceService, "yandex.cloud.cdn.v1.ResourceService");
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
