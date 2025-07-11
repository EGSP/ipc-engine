"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkLoadBalancerServiceClient = exports.NetworkLoadBalancerServiceService = exports.ListenerSpec = exports.InternalAddressSpec = exports.ExternalAddressSpec = exports.GetTargetStatesResponse = exports.GetTargetStatesRequest = exports.ListNetworkLoadBalancerOperationsResponse = exports.ListNetworkLoadBalancerOperationsRequest = exports.RemoveNetworkLoadBalancerListenerMetadata = exports.RemoveNetworkLoadBalancerListenerRequest = exports.AddNetworkLoadBalancerListenerMetadata = exports.AddNetworkLoadBalancerListenerRequest = exports.DetachNetworkLoadBalancerTargetGroupMetadata = exports.DetachNetworkLoadBalancerTargetGroupRequest = exports.AttachNetworkLoadBalancerTargetGroupMetadata = exports.AttachNetworkLoadBalancerTargetGroupRequest = exports.StopNetworkLoadBalancerMetadata = exports.StopNetworkLoadBalancerRequest = exports.StartNetworkLoadBalancerMetadata = exports.StartNetworkLoadBalancerRequest = exports.DeleteNetworkLoadBalancerMetadata = exports.DeleteNetworkLoadBalancerRequest = exports.UpdateNetworkLoadBalancerMetadata = exports.UpdateNetworkLoadBalancerRequest_LabelsEntry = exports.UpdateNetworkLoadBalancerRequest = exports.CreateNetworkLoadBalancerMetadata = exports.CreateNetworkLoadBalancerRequest_LabelsEntry = exports.CreateNetworkLoadBalancerRequest = exports.ListNetworkLoadBalancersResponse = exports.ListNetworkLoadBalancersRequest = exports.GetNetworkLoadBalancerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const network_load_balancer_1 = require("../../../../yandex/cloud/loadbalancer/v1/network_load_balancer");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.loadbalancer.v1";
const baseGetNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
};
exports.GetNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNetworkLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetNetworkLoadBalancerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetNetworkLoadBalancerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetNetworkLoadBalancerRequest.$type, exports.GetNetworkLoadBalancerRequest);
const baseListNetworkLoadBalancersRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListNetworkLoadBalancersRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest",
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
        const message = Object.assign({}, baseListNetworkLoadBalancersRequest);
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
        const message = Object.assign({}, baseListNetworkLoadBalancersRequest);
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
        const message = Object.assign({}, baseListNetworkLoadBalancersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancersRequest.$type, exports.ListNetworkLoadBalancersRequest);
const baseListNetworkLoadBalancersResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse",
    nextPageToken: "",
};
exports.ListNetworkLoadBalancersResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.networkLoadBalancers) {
            network_load_balancer_1.NetworkLoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListNetworkLoadBalancersResponse);
        message.networkLoadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancers.push(network_load_balancer_1.NetworkLoadBalancer.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListNetworkLoadBalancersResponse);
        message.networkLoadBalancers = ((_a = object.networkLoadBalancers) !== null && _a !== void 0 ? _a : []).map((e) => network_load_balancer_1.NetworkLoadBalancer.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.networkLoadBalancers) {
            obj.networkLoadBalancers = message.networkLoadBalancers.map((e) => e ? network_load_balancer_1.NetworkLoadBalancer.toJSON(e) : undefined);
        }
        else {
            obj.networkLoadBalancers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListNetworkLoadBalancersResponse);
        message.networkLoadBalancers =
            ((_a = object.networkLoadBalancers) === null || _a === void 0 ? void 0 : _a.map((e) => network_load_balancer_1.NetworkLoadBalancer.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancersResponse.$type, exports.ListNetworkLoadBalancersResponse);
const baseCreateNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest",
    folderId: "",
    name: "",
    description: "",
    regionId: "",
    type: 0,
    deletionProtection: false,
};
exports.CreateNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest",
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
            exports.CreateNetworkLoadBalancerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== "") {
            writer.uint32(42).string(message.regionId);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            network_load_balancer_1.AttachedTargetGroup.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest);
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
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
                    const entry4 = exports.CreateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest);
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
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, network_load_balancer_1.networkLoadBalancer_TypeFromJSON)(object.type)
                : 0;
        message.listenerSpecs = ((_b = object.listenerSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.ListenerSpec.fromJSON(e));
        message.attachedTargetGroups = ((_c = object.attachedTargetGroups) !== null && _c !== void 0 ? _c : []).map((e) => network_load_balancer_1.AttachedTargetGroup.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
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
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.type !== undefined &&
            (obj.type = (0, network_load_balancer_1.networkLoadBalancer_TypeToJSON)(message.type));
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? network_load_balancer_1.AttachedTargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.attachedTargetGroups = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.regionId = (_e = object.regionId) !== null && _e !== void 0 ? _e : "";
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : 0;
        message.listenerSpecs =
            ((_g = object.listenerSpecs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.ListenerSpec.fromPartial(e))) || [];
        message.attachedTargetGroups =
            ((_h = object.attachedTargetGroups) === null || _h === void 0 ? void 0 : _h.map((e) => network_load_balancer_1.AttachedTargetGroup.fromPartial(e))) || [];
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerRequest.$type, exports.CreateNetworkLoadBalancerRequest);
const baseCreateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateNetworkLoadBalancerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerRequest_LabelsEntry.$type, exports.CreateNetworkLoadBalancerRequest_LabelsEntry);
const baseCreateNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata",
    networkLoadBalancerId: "",
};
exports.CreateNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateNetworkLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNetworkLoadBalancerMetadata.$type, exports.CreateNetworkLoadBalancerMetadata);
const baseUpdateNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
    name: "",
    description: "",
    deletionProtection: false,
};
exports.UpdateNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
            exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            network_load_balancer_1.AttachedTargetGroup.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest);
        message.labels = {};
        message.listenerSpecs = [];
        message.attachedTargetGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
                    const entry5 = exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.attachedTargetGroups.push(network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
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
        message.listenerSpecs = ((_b = object.listenerSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.ListenerSpec.fromJSON(e));
        message.attachedTargetGroups = ((_c = object.attachedTargetGroups) !== null && _c !== void 0 ? _c : []).map((e) => network_load_balancer_1.AttachedTargetGroup.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
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
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? network_load_balancer_1.AttachedTargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.attachedTargetGroups = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
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
        message.listenerSpecs =
            ((_e = object.listenerSpecs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ListenerSpec.fromPartial(e))) || [];
        message.attachedTargetGroups =
            ((_f = object.attachedTargetGroups) === null || _f === void 0 ? void 0 : _f.map((e) => network_load_balancer_1.AttachedTargetGroup.fromPartial(e))) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerRequest.$type, exports.UpdateNetworkLoadBalancerRequest);
const baseUpdateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateNetworkLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerRequest_LabelsEntry.$type, exports.UpdateNetworkLoadBalancerRequest_LabelsEntry);
const baseUpdateNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata",
    networkLoadBalancerId: "",
};
exports.UpdateNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNetworkLoadBalancerMetadata.$type, exports.UpdateNetworkLoadBalancerMetadata);
const baseDeleteNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
};
exports.DeleteNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNetworkLoadBalancerRequest.$type, exports.DeleteNetworkLoadBalancerRequest);
const baseDeleteNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata",
    networkLoadBalancerId: "",
};
exports.DeleteNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNetworkLoadBalancerMetadata.$type, exports.DeleteNetworkLoadBalancerMetadata);
const baseStartNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
};
exports.StartNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartNetworkLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartNetworkLoadBalancerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartNetworkLoadBalancerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartNetworkLoadBalancerRequest.$type, exports.StartNetworkLoadBalancerRequest);
const baseStartNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata",
    networkLoadBalancerId: "",
};
exports.StartNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartNetworkLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartNetworkLoadBalancerMetadata.$type, exports.StartNetworkLoadBalancerMetadata);
const baseStopNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest",
    networkLoadBalancerId: "",
};
exports.StopNetworkLoadBalancerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopNetworkLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopNetworkLoadBalancerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopNetworkLoadBalancerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopNetworkLoadBalancerRequest.$type, exports.StopNetworkLoadBalancerRequest);
const baseStopNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata",
    networkLoadBalancerId: "",
};
exports.StopNetworkLoadBalancerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopNetworkLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopNetworkLoadBalancerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopNetworkLoadBalancerMetadata.$type, exports.StopNetworkLoadBalancerMetadata);
const baseAttachNetworkLoadBalancerTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest",
    networkLoadBalancerId: "",
};
exports.AttachNetworkLoadBalancerTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.attachedTargetGroup !== undefined) {
            network_load_balancer_1.AttachedTargetGroup.encode(message.attachedTargetGroup, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.attachedTargetGroup = network_load_balancer_1.AttachedTargetGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.attachedTargetGroup =
            object.attachedTargetGroup !== undefined &&
                object.attachedTargetGroup !== null
                ? network_load_balancer_1.AttachedTargetGroup.fromJSON(object.attachedTargetGroup)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.attachedTargetGroup !== undefined &&
            (obj.attachedTargetGroup = message.attachedTargetGroup
                ? network_load_balancer_1.AttachedTargetGroup.toJSON(message.attachedTargetGroup)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.attachedTargetGroup =
            object.attachedTargetGroup !== undefined &&
                object.attachedTargetGroup !== null
                ? network_load_balancer_1.AttachedTargetGroup.fromPartial(object.attachedTargetGroup)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachNetworkLoadBalancerTargetGroupRequest.$type, exports.AttachNetworkLoadBalancerTargetGroupRequest);
const baseAttachNetworkLoadBalancerTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata",
    networkLoadBalancerId: "",
    targetGroupId: "",
};
exports.AttachNetworkLoadBalancerTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== "") {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAttachNetworkLoadBalancerTargetGroupMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.targetGroupId = (_b = object.targetGroupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachNetworkLoadBalancerTargetGroupMetadata.$type, exports.AttachNetworkLoadBalancerTargetGroupMetadata);
const baseDetachNetworkLoadBalancerTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest",
    networkLoadBalancerId: "",
    targetGroupId: "",
};
exports.DetachNetworkLoadBalancerTargetGroupRequest = {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== "") {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.targetGroupId = (_b = object.targetGroupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachNetworkLoadBalancerTargetGroupRequest.$type, exports.DetachNetworkLoadBalancerTargetGroupRequest);
const baseDetachNetworkLoadBalancerTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata",
    networkLoadBalancerId: "",
    targetGroupId: "",
};
exports.DetachNetworkLoadBalancerTargetGroupMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== "") {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDetachNetworkLoadBalancerTargetGroupMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.targetGroupId = (_b = object.targetGroupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachNetworkLoadBalancerTargetGroupMetadata.$type, exports.DetachNetworkLoadBalancerTargetGroupMetadata);
const baseAddNetworkLoadBalancerListenerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest",
    networkLoadBalancerId: "",
};
exports.AddNetworkLoadBalancerListenerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerSpec = exports.ListenerSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromJSON(object.listenerSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromPartial(object.listenerSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddNetworkLoadBalancerListenerRequest.$type, exports.AddNetworkLoadBalancerListenerRequest);
const baseAddNetworkLoadBalancerListenerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata",
    networkLoadBalancerId: "",
};
exports.AddNetworkLoadBalancerListenerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddNetworkLoadBalancerListenerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddNetworkLoadBalancerListenerMetadata.$type, exports.AddNetworkLoadBalancerListenerMetadata);
const baseRemoveNetworkLoadBalancerListenerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest",
    networkLoadBalancerId: "",
    listenerName: "",
};
exports.RemoveNetworkLoadBalancerListenerRequest = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveNetworkLoadBalancerListenerRequest.$type, exports.RemoveNetworkLoadBalancerListenerRequest);
const baseRemoveNetworkLoadBalancerListenerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata",
    networkLoadBalancerId: "",
};
exports.RemoveNetworkLoadBalancerListenerMetadata = {
    $type: "yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerMetadata);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveNetworkLoadBalancerListenerMetadata);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveNetworkLoadBalancerListenerMetadata.$type, exports.RemoveNetworkLoadBalancerListenerMetadata);
const baseListNetworkLoadBalancerOperationsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest",
    networkLoadBalancerId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListNetworkLoadBalancerOperationsRequest = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
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
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
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
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
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
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancerOperationsRequest.$type, exports.ListNetworkLoadBalancerOperationsRequest);
const baseListNetworkLoadBalancerOperationsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse",
    nextPageToken: "",
};
exports.ListNetworkLoadBalancerOperationsResponse = {
    $type: "yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse",
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
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsResponse);
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
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsResponse);
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
        const message = Object.assign({}, baseListNetworkLoadBalancerOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListNetworkLoadBalancerOperationsResponse.$type, exports.ListNetworkLoadBalancerOperationsResponse);
const baseGetTargetStatesRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest",
    networkLoadBalancerId: "",
    targetGroupId: "",
};
exports.GetTargetStatesRequest = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkLoadBalancerId !== "") {
            writer.uint32(10).string(message.networkLoadBalancerId);
        }
        if (message.targetGroupId !== "") {
            writer.uint32(18).string(message.targetGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTargetStatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkLoadBalancerId = reader.string();
                    break;
                case 2:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTargetStatesRequest);
        message.networkLoadBalancerId =
            object.networkLoadBalancerId !== undefined &&
                object.networkLoadBalancerId !== null
                ? String(object.networkLoadBalancerId)
                : "";
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkLoadBalancerId !== undefined &&
            (obj.networkLoadBalancerId = message.networkLoadBalancerId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetTargetStatesRequest);
        message.networkLoadBalancerId = (_a = object.networkLoadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.targetGroupId = (_b = object.targetGroupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesRequest.$type, exports.GetTargetStatesRequest);
const baseGetTargetStatesResponse = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse",
};
exports.GetTargetStatesResponse = {
    $type: "yandex.cloud.loadbalancer.v1.GetTargetStatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetStates) {
            network_load_balancer_1.TargetState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTargetStatesResponse);
        message.targetStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetStates.push(network_load_balancer_1.TargetState.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseGetTargetStatesResponse);
        message.targetStates = ((_a = object.targetStates) !== null && _a !== void 0 ? _a : []).map((e) => network_load_balancer_1.TargetState.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) => e ? network_load_balancer_1.TargetState.toJSON(e) : undefined);
        }
        else {
            obj.targetStates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetTargetStatesResponse);
        message.targetStates =
            ((_a = object.targetStates) === null || _a === void 0 ? void 0 : _a.map((e) => network_load_balancer_1.TargetState.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesResponse.$type, exports.GetTargetStatesResponse);
const baseExternalAddressSpec = {
    $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec",
    address: "",
    ipVersion: 0,
};
exports.ExternalAddressSpec = {
    $type: "yandex.cloud.loadbalancer.v1.ExternalAddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalAddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalAddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? (0, network_load_balancer_1.ipVersionFromJSON)(object.ipVersion)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, network_load_balancer_1.ipVersionToJSON)(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExternalAddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.ipVersion = (_b = object.ipVersion) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalAddressSpec.$type, exports.ExternalAddressSpec);
const baseInternalAddressSpec = {
    $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec",
    address: "",
    subnetId: "",
    ipVersion: 0,
};
exports.InternalAddressSpec = {
    $type: "yandex.cloud.loadbalancer.v1.InternalAddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(24).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInternalAddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInternalAddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? (0, network_load_balancer_1.ipVersionFromJSON)(object.ipVersion)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, network_load_balancer_1.ipVersionToJSON)(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInternalAddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.ipVersion = (_c = object.ipVersion) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InternalAddressSpec.$type, exports.InternalAddressSpec);
const baseListenerSpec = {
    $type: "yandex.cloud.loadbalancer.v1.ListenerSpec",
    name: "",
    port: 0,
    protocol: 0,
    targetPort: 0,
};
exports.ListenerSpec = {
    $type: "yandex.cloud.loadbalancer.v1.ListenerSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.protocol !== 0) {
            writer.uint32(24).int32(message.protocol);
        }
        if (message.externalAddressSpec !== undefined) {
            exports.ExternalAddressSpec.encode(message.externalAddressSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.internalAddressSpec !== undefined) {
            exports.InternalAddressSpec.encode(message.internalAddressSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.targetPort !== 0) {
            writer.uint32(40).int64(message.targetPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListenerSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                case 3:
                    message.protocol = reader.int32();
                    break;
                case 4:
                    message.externalAddressSpec = exports.ExternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.internalAddressSpec = exports.InternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetPort = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListenerSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? (0, network_load_balancer_1.listener_ProtocolFromJSON)(object.protocol)
                : 0;
        message.externalAddressSpec =
            object.externalAddressSpec !== undefined &&
                object.externalAddressSpec !== null
                ? exports.ExternalAddressSpec.fromJSON(object.externalAddressSpec)
                : undefined;
        message.internalAddressSpec =
            object.internalAddressSpec !== undefined &&
                object.internalAddressSpec !== null
                ? exports.InternalAddressSpec.fromJSON(object.internalAddressSpec)
                : undefined;
        message.targetPort =
            object.targetPort !== undefined && object.targetPort !== null
                ? Number(object.targetPort)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.protocol !== undefined &&
            (obj.protocol = (0, network_load_balancer_1.listener_ProtocolToJSON)(message.protocol));
        message.externalAddressSpec !== undefined &&
            (obj.externalAddressSpec = message.externalAddressSpec
                ? exports.ExternalAddressSpec.toJSON(message.externalAddressSpec)
                : undefined);
        message.internalAddressSpec !== undefined &&
            (obj.internalAddressSpec = message.internalAddressSpec
                ? exports.InternalAddressSpec.toJSON(message.internalAddressSpec)
                : undefined);
        message.targetPort !== undefined &&
            (obj.targetPort = Math.round(message.targetPort));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListenerSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.protocol = (_c = object.protocol) !== null && _c !== void 0 ? _c : 0;
        message.externalAddressSpec =
            object.externalAddressSpec !== undefined &&
                object.externalAddressSpec !== null
                ? exports.ExternalAddressSpec.fromPartial(object.externalAddressSpec)
                : undefined;
        message.internalAddressSpec =
            object.internalAddressSpec !== undefined &&
                object.internalAddressSpec !== null
                ? exports.InternalAddressSpec.fromPartial(object.internalAddressSpec)
                : undefined;
        message.targetPort = (_d = object.targetPort) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListenerSpec.$type, exports.ListenerSpec);
/** A set of methods for managing NetworkLoadBalancer resources. */
exports.NetworkLoadBalancerServiceService = {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    get: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(network_load_balancer_1.NetworkLoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => network_load_balancer_1.NetworkLoadBalancer.decode(value),
    },
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    list: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNetworkLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNetworkLoadBalancersResponse.decode(value),
    },
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    create: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified network load balancer. */
    update: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified network load balancer. */
    delete: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    start: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    stop: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopNetworkLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopNetworkLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches a target group to the specified network load balancer. */
    attachTargetGroup: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AttachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches the target group from the specified network load balancer. */
    detachTargetGroup: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetachNetworkLoadBalancerTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachNetworkLoadBalancerTargetGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Gets states of target resources in the attached target group. */
    getTargetStates: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetTargetStatesResponse.decode(value),
    },
    /** Adds a listener to the specified network load balancer. */
    addListener: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes the listener from the specified network load balancer. */
    removeListener: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveNetworkLoadBalancerListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveNetworkLoadBalancerListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified network load balancer. */
    listOperations: {
        path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNetworkLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNetworkLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNetworkLoadBalancerOperationsResponse.decode(value),
    },
};
exports.NetworkLoadBalancerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NetworkLoadBalancerServiceService, "yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService");
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
