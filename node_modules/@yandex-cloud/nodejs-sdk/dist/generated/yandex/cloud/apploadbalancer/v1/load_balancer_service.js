"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerServiceClient = exports.LoadBalancerServiceService = exports.ListLoadBalancerOperationsResponse = exports.ListLoadBalancerOperationsRequest = exports.UpdateSniMatchMetadata = exports.UpdateSniMatchRequest = exports.RemoveSniMatchMetadata = exports.RemoveSniMatchRequest = exports.AddSniMatchMetadata = exports.AddSniMatchRequest = exports.GetTargetStatesResponse = exports.GetTargetStatesRequest = exports.ListenerSpec = exports.EndpointSpec = exports.ExternalIpv6AddressSpec = exports.InternalIpv4AddressSpec = exports.ExternalIpv4AddressSpec = exports.AddressSpec = exports.UpdateListenerMetadata = exports.UpdateListenerRequest = exports.RemoveListenerMetadata = exports.RemoveListenerRequest = exports.AddListenerMetadata = exports.AddListenerRequest = exports.StopLoadBalancerMetadata = exports.StopLoadBalancerRequest = exports.StartLoadBalancerMetadata = exports.StartLoadBalancerRequest = exports.CreateLoadBalancerMetadata = exports.CreateLoadBalancerRequest_LabelsEntry = exports.CreateLoadBalancerRequest = exports.UpdateLoadBalancerMetadata = exports.UpdateLoadBalancerRequest_LabelsEntry = exports.UpdateLoadBalancerRequest = exports.DeleteLoadBalancerMetadata = exports.DeleteLoadBalancerRequest = exports.ListLoadBalancersResponse = exports.ListLoadBalancersRequest = exports.GetLoadBalancerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const load_balancer_1 = require("../../../../yandex/cloud/apploadbalancer/v1/load_balancer");
const logging_1 = require("../../../../yandex/cloud/apploadbalancer/v1/logging");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
const baseGetLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest",
    loadBalancerId: "",
};
exports.GetLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLoadBalancerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLoadBalancerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLoadBalancerRequest.$type, exports.GetLoadBalancerRequest);
const baseListLoadBalancersRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListLoadBalancersRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest",
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
        const message = Object.assign({}, baseListLoadBalancersRequest);
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
        const message = Object.assign({}, baseListLoadBalancersRequest);
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
        const message = Object.assign({}, baseListLoadBalancersRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancersRequest.$type, exports.ListLoadBalancersRequest);
const baseListLoadBalancersResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse",
    nextPageToken: "",
};
exports.ListLoadBalancersResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.loadBalancers) {
            load_balancer_1.LoadBalancer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListLoadBalancersResponse);
        message.loadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancers.push(load_balancer_1.LoadBalancer.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListLoadBalancersResponse);
        message.loadBalancers = ((_a = object.loadBalancers) !== null && _a !== void 0 ? _a : []).map((e) => load_balancer_1.LoadBalancer.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.loadBalancers) {
            obj.loadBalancers = message.loadBalancers.map((e) => e ? load_balancer_1.LoadBalancer.toJSON(e) : undefined);
        }
        else {
            obj.loadBalancers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListLoadBalancersResponse);
        message.loadBalancers =
            ((_a = object.loadBalancers) === null || _a === void 0 ? void 0 : _a.map((e) => load_balancer_1.LoadBalancer.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancersResponse.$type, exports.ListLoadBalancersResponse);
const baseDeleteLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest",
    loadBalancerId: "",
};
exports.DeleteLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteLoadBalancerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLoadBalancerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLoadBalancerRequest.$type, exports.DeleteLoadBalancerRequest);
const baseDeleteLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata",
    loadBalancerId: "",
};
exports.DeleteLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteLoadBalancerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteLoadBalancerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteLoadBalancerMetadata.$type, exports.DeleteLoadBalancerMetadata);
const baseUpdateLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest",
    loadBalancerId: "",
    name: "",
    description: "",
    securityGroupIds: "",
};
exports.UpdateLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
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
            exports.UpdateLoadBalancerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            load_balancer_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        if (message.autoScalePolicy !== undefined) {
            load_balancer_1.AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            logging_1.LogOptions.encode(message.logOptions, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateLoadBalancerRequest);
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
                    const entry5 = exports.UpdateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.allocationPolicy = load_balancer_1.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 9:
                    message.autoScalePolicy = load_balancer_1.AutoScalePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.logOptions = logging_1.LogOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateLoadBalancerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
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
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? load_balancer_1.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.securityGroupIds = ((_c = object.securityGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? load_balancer_1.AutoScalePolicy.fromJSON(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromJSON(object.logOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
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
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? load_balancer_1.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.autoScalePolicy !== undefined &&
            (obj.autoScalePolicy = message.autoScalePolicy
                ? load_balancer_1.AutoScalePolicy.toJSON(message.autoScalePolicy)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? logging_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUpdateLoadBalancerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
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
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? load_balancer_1.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.securityGroupIds = ((_f = object.securityGroupIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? load_balancer_1.AutoScalePolicy.fromPartial(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerRequest.$type, exports.UpdateLoadBalancerRequest);
const baseUpdateLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateLoadBalancerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerRequest_LabelsEntry.$type, exports.UpdateLoadBalancerRequest_LabelsEntry);
const baseUpdateLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata",
    loadBalancerId: "",
};
exports.UpdateLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateLoadBalancerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateLoadBalancerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateLoadBalancerMetadata.$type, exports.UpdateLoadBalancerMetadata);
const baseCreateLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest",
    folderId: "",
    name: "",
    description: "",
    regionId: "",
    networkId: "",
    securityGroupIds: "",
};
exports.CreateLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest",
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
            exports.CreateLoadBalancerRequest_LabelsEntry.encode({
                $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.regionId !== "") {
            writer.uint32(42).string(message.regionId);
        }
        if (message.networkId !== "") {
            writer.uint32(50).string(message.networkId);
        }
        for (const v of message.listenerSpecs) {
            exports.ListenerSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            load_balancer_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(74).string(v);
        }
        if (message.autoScalePolicy !== undefined) {
            load_balancer_1.AutoScalePolicy.encode(message.autoScalePolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            logging_1.LogOptions.encode(message.logOptions, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLoadBalancerRequest);
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
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
                    const entry4 = exports.CreateLoadBalancerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.networkId = reader.string();
                    break;
                case 7:
                    message.listenerSpecs.push(exports.ListenerSpec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.allocationPolicy = load_balancer_1.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 10:
                    message.autoScalePolicy = load_balancer_1.AutoScalePolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.logOptions = logging_1.LogOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateLoadBalancerRequest);
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
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.listenerSpecs = ((_b = object.listenerSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.ListenerSpec.fromJSON(e));
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? load_balancer_1.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.securityGroupIds = ((_c = object.securityGroupIds) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? load_balancer_1.AutoScalePolicy.fromJSON(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromJSON(object.logOptions)
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
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) => e ? exports.ListenerSpec.toJSON(e) : undefined);
        }
        else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? load_balancer_1.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.autoScalePolicy !== undefined &&
            (obj.autoScalePolicy = message.autoScalePolicy
                ? load_balancer_1.AutoScalePolicy.toJSON(message.autoScalePolicy)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? logging_1.LogOptions.toJSON(message.logOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateLoadBalancerRequest);
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
        message.networkId = (_f = object.networkId) !== null && _f !== void 0 ? _f : "";
        message.listenerSpecs =
            ((_g = object.listenerSpecs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.ListenerSpec.fromPartial(e))) || [];
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? load_balancer_1.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.securityGroupIds = ((_h = object.securityGroupIds) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.autoScalePolicy =
            object.autoScalePolicy !== undefined && object.autoScalePolicy !== null
                ? load_balancer_1.AutoScalePolicy.fromPartial(object.autoScalePolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? logging_1.LogOptions.fromPartial(object.logOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerRequest.$type, exports.CreateLoadBalancerRequest);
const baseCreateLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateLoadBalancerRequest_LabelsEntry = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateLoadBalancerRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateLoadBalancerRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerRequest_LabelsEntry.$type, exports.CreateLoadBalancerRequest_LabelsEntry);
const baseCreateLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata",
    loadBalancerId: "",
};
exports.CreateLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateLoadBalancerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateLoadBalancerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateLoadBalancerMetadata.$type, exports.CreateLoadBalancerMetadata);
const baseStartLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest",
    loadBalancerId: "",
};
exports.StartLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartLoadBalancerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartLoadBalancerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartLoadBalancerRequest.$type, exports.StartLoadBalancerRequest);
const baseStartLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata",
    loadBalancerId: "",
};
exports.StartLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartLoadBalancerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartLoadBalancerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartLoadBalancerMetadata.$type, exports.StartLoadBalancerMetadata);
const baseStopLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest",
    loadBalancerId: "",
};
exports.StopLoadBalancerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopLoadBalancerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopLoadBalancerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopLoadBalancerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopLoadBalancerRequest.$type, exports.StopLoadBalancerRequest);
const baseStopLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata",
    loadBalancerId: "",
};
exports.StopLoadBalancerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopLoadBalancerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopLoadBalancerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopLoadBalancerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopLoadBalancerMetadata.$type, exports.StopLoadBalancerMetadata);
const baseAddListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest",
    loadBalancerId: "",
};
exports.AddListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddListenerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = Object.assign({}, baseAddListenerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromJSON(object.listenerSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddListenerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromPartial(object.listenerSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddListenerRequest.$type, exports.AddListenerRequest);
const baseAddListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata",
    loadBalancerId: "",
    listenerName: "",
};
exports.AddListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddListenerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = Object.assign({}, baseAddListenerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddListenerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddListenerMetadata.$type, exports.AddListenerMetadata);
const baseRemoveListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest",
    loadBalancerId: "",
    name: "",
};
exports.RemoveListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveListenerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveListenerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveListenerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveListenerRequest.$type, exports.RemoveListenerRequest);
const baseRemoveListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata",
    loadBalancerId: "",
    listenerName: "",
};
exports.RemoveListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveListenerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = Object.assign({}, baseRemoveListenerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRemoveListenerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveListenerMetadata.$type, exports.RemoveListenerMetadata);
const baseUpdateListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest",
    loadBalancerId: "",
};
exports.UpdateListenerRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.listenerSpec !== undefined) {
            exports.ListenerSpec.encode(message.listenerSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateListenerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = Object.assign({}, baseUpdateListenerRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromJSON(object.listenerSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? exports.ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateListenerRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.listenerSpec =
            object.listenerSpec !== undefined && object.listenerSpec !== null
                ? exports.ListenerSpec.fromPartial(object.listenerSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateListenerRequest.$type, exports.UpdateListenerRequest);
const baseUpdateListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata",
    loadBalancerId: "",
    listenerName: "",
};
exports.UpdateListenerMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateListenerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = Object.assign({}, baseUpdateListenerMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateListenerMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateListenerMetadata.$type, exports.UpdateListenerMetadata);
const baseAddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec",
};
exports.AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.externalIpv4AddressSpec !== undefined) {
            exports.ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.internalIpv4AddressSpec !== undefined) {
            exports.InternalIpv4AddressSpec.encode(message.internalIpv4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalIpv6AddressSpec !== undefined) {
            exports.ExternalIpv6AddressSpec.encode(message.externalIpv6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4AddressSpec = exports.ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.internalIpv4AddressSpec = exports.InternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalIpv6AddressSpec = exports.ExternalIpv6AddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddressSpec);
        message.externalIpv4AddressSpec =
            object.externalIpv4AddressSpec !== undefined &&
                object.externalIpv4AddressSpec !== null
                ? exports.ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec)
                : undefined;
        message.internalIpv4AddressSpec =
            object.internalIpv4AddressSpec !== undefined &&
                object.internalIpv4AddressSpec !== null
                ? exports.InternalIpv4AddressSpec.fromJSON(object.internalIpv4AddressSpec)
                : undefined;
        message.externalIpv6AddressSpec =
            object.externalIpv6AddressSpec !== undefined &&
                object.externalIpv6AddressSpec !== null
                ? exports.ExternalIpv6AddressSpec.fromJSON(object.externalIpv6AddressSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? exports.ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
                : undefined);
        message.internalIpv4AddressSpec !== undefined &&
            (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
                ? exports.InternalIpv4AddressSpec.toJSON(message.internalIpv4AddressSpec)
                : undefined);
        message.externalIpv6AddressSpec !== undefined &&
            (obj.externalIpv6AddressSpec = message.externalIpv6AddressSpec
                ? exports.ExternalIpv6AddressSpec.toJSON(message.externalIpv6AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAddressSpec);
        message.externalIpv4AddressSpec =
            object.externalIpv4AddressSpec !== undefined &&
                object.externalIpv4AddressSpec !== null
                ? exports.ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec)
                : undefined;
        message.internalIpv4AddressSpec =
            object.internalIpv4AddressSpec !== undefined &&
                object.internalIpv4AddressSpec !== null
                ? exports.InternalIpv4AddressSpec.fromPartial(object.internalIpv4AddressSpec)
                : undefined;
        message.externalIpv6AddressSpec =
            object.externalIpv6AddressSpec !== undefined &&
                object.externalIpv6AddressSpec !== null
                ? exports.ExternalIpv6AddressSpec.fromPartial(object.externalIpv6AddressSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddressSpec.$type, exports.AddressSpec);
const baseExternalIpv4AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec",
    address: "",
};
exports.ExternalIpv4AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExternalIpv4AddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4AddressSpec.$type, exports.ExternalIpv4AddressSpec);
const baseInternalIpv4AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec",
    address: "",
    subnetId: "",
};
exports.InternalIpv4AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInternalIpv4AddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInternalIpv4AddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInternalIpv4AddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InternalIpv4AddressSpec.$type, exports.InternalIpv4AddressSpec);
const baseExternalIpv6AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec",
    address: "",
};
exports.ExternalIpv6AddressSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv6AddressSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv6AddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExternalIpv6AddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv6AddressSpec.$type, exports.ExternalIpv6AddressSpec);
const baseEndpointSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec",
    ports: 0,
};
exports.EndpointSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addressSpecs) {
            exports.AddressSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEndpointSpec);
        message.addressSpecs = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressSpecs.push(exports.AddressSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ports.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.ports.push(longToNumber(reader.int64()));
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
        var _a, _b;
        const message = Object.assign({}, baseEndpointSpec);
        message.addressSpecs = ((_a = object.addressSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.AddressSpec.fromJSON(e));
        message.ports = ((_b = object.ports) !== null && _b !== void 0 ? _b : []).map((e) => Number(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addressSpecs) {
            obj.addressSpecs = message.addressSpecs.map((e) => e ? exports.AddressSpec.toJSON(e) : undefined);
        }
        else {
            obj.addressSpecs = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => Math.round(e));
        }
        else {
            obj.ports = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEndpointSpec);
        message.addressSpecs =
            ((_a = object.addressSpecs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AddressSpec.fromPartial(e))) || [];
        message.ports = ((_b = object.ports) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EndpointSpec.$type, exports.EndpointSpec);
const baseListenerSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec",
    name: "",
};
exports.ListenerSpec = {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpointSpecs) {
            exports.EndpointSpec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            load_balancer_1.HttpListener.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            load_balancer_1.TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            load_balancer_1.StreamListener.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListenerSpec);
        message.endpointSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.endpointSpecs.push(exports.EndpointSpec.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.http = load_balancer_1.HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = load_balancer_1.TlsListener.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = load_balancer_1.StreamListener.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseListenerSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.endpointSpecs = ((_a = object.endpointSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.EndpointSpec.fromJSON(e));
        message.http =
            object.http !== undefined && object.http !== null
                ? load_balancer_1.HttpListener.fromJSON(object.http)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? load_balancer_1.TlsListener.fromJSON(object.tls)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? load_balancer_1.StreamListener.fromJSON(object.stream)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpointSpecs) {
            obj.endpointSpecs = message.endpointSpecs.map((e) => e ? exports.EndpointSpec.toJSON(e) : undefined);
        }
        else {
            obj.endpointSpecs = [];
        }
        message.http !== undefined &&
            (obj.http = message.http ? load_balancer_1.HttpListener.toJSON(message.http) : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls ? load_balancer_1.TlsListener.toJSON(message.tls) : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? load_balancer_1.StreamListener.toJSON(message.stream)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListenerSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.endpointSpecs =
            ((_b = object.endpointSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EndpointSpec.fromPartial(e))) || [];
        message.http =
            object.http !== undefined && object.http !== null
                ? load_balancer_1.HttpListener.fromPartial(object.http)
                : undefined;
        message.tls =
            object.tls !== undefined && object.tls !== null
                ? load_balancer_1.TlsListener.fromPartial(object.tls)
                : undefined;
        message.stream =
            object.stream !== undefined && object.stream !== null
                ? load_balancer_1.StreamListener.fromPartial(object.stream)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListenerSpec.$type, exports.ListenerSpec);
const baseGetTargetStatesRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest",
    loadBalancerId: "",
    backendGroupId: "",
    targetGroupId: "",
};
exports.GetTargetStatesRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.backendGroupId !== "") {
            writer.uint32(18).string(message.backendGroupId);
        }
        if (message.targetGroupId !== "") {
            writer.uint32(26).string(message.targetGroupId);
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
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.backendGroupId = reader.string();
                    break;
                case 3:
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
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.targetGroupId =
            object.targetGroupId !== undefined && object.targetGroupId !== null
                ? String(object.targetGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetTargetStatesRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.backendGroupId = (_b = object.backendGroupId) !== null && _b !== void 0 ? _b : "";
        message.targetGroupId = (_c = object.targetGroupId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesRequest.$type, exports.GetTargetStatesRequest);
const baseGetTargetStatesResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse",
};
exports.GetTargetStatesResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targetStates) {
            load_balancer_1.TargetState.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.targetStates.push(load_balancer_1.TargetState.decode(reader, reader.uint32()));
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
        message.targetStates = ((_a = object.targetStates) !== null && _a !== void 0 ? _a : []).map((e) => load_balancer_1.TargetState.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) => e ? load_balancer_1.TargetState.toJSON(e) : undefined);
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
            ((_a = object.targetStates) === null || _a === void 0 ? void 0 : _a.map((e) => load_balancer_1.TargetState.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTargetStatesResponse.$type, exports.GetTargetStatesResponse);
const baseAddSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    name: "",
    serverNames: "",
};
exports.AddSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.serverNames) {
            writer.uint32(34).string(v);
        }
        if (message.handler !== undefined) {
            load_balancer_1.TlsHandler.encode(message.handler, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddSniMatchRequest);
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.serverNames.push(reader.string());
                    break;
                case 5:
                    message.handler = load_balancer_1.TlsHandler.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseAddSniMatchRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.serverNames = ((_a = object.serverNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? load_balancer_1.TlsHandler.fromJSON(object.handler)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? load_balancer_1.TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAddSniMatchRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.serverNames = ((_d = object.serverNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? load_balancer_1.TlsHandler.fromPartial(object.handler)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddSniMatchRequest.$type, exports.AddSniMatchRequest);
const baseAddSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
};
exports.AddSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== "") {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddSniMatchMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddSniMatchMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.sniMatchName =
            object.sniMatchName !== undefined && object.sniMatchName !== null
                ? String(object.sniMatchName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAddSniMatchMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.sniMatchName = (_c = object.sniMatchName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddSniMatchMetadata.$type, exports.AddSniMatchMetadata);
const baseRemoveSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
};
exports.RemoveSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== "") {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveSniMatchRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveSniMatchRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.sniMatchName =
            object.sniMatchName !== undefined && object.sniMatchName !== null
                ? String(object.sniMatchName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRemoveSniMatchRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.sniMatchName = (_c = object.sniMatchName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSniMatchRequest.$type, exports.RemoveSniMatchRequest);
const baseRemoveSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
};
exports.RemoveSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== "") {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveSniMatchMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveSniMatchMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.sniMatchName =
            object.sniMatchName !== undefined && object.sniMatchName !== null
                ? String(object.sniMatchName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRemoveSniMatchMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.sniMatchName = (_c = object.sniMatchName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveSniMatchMetadata.$type, exports.RemoveSniMatchMetadata);
const baseUpdateSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest",
    loadBalancerId: "",
    listenerName: "",
    name: "",
    serverNames: "",
};
exports.UpdateSniMatchRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.serverNames) {
            writer.uint32(42).string(v);
        }
        if (message.handler !== undefined) {
            load_balancer_1.TlsHandler.encode(message.handler, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSniMatchRequest);
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.serverNames.push(reader.string());
                    break;
                case 6:
                    message.handler = load_balancer_1.TlsHandler.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateSniMatchRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.serverNames = ((_a = object.serverNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? load_balancer_1.TlsHandler.fromJSON(object.handler)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        }
        else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? load_balancer_1.TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateSniMatchRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.serverNames = ((_d = object.serverNames) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.handler =
            object.handler !== undefined && object.handler !== null
                ? load_balancer_1.TlsHandler.fromPartial(object.handler)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSniMatchRequest.$type, exports.UpdateSniMatchRequest);
const baseUpdateSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata",
    loadBalancerId: "",
    listenerName: "",
    sniMatchName: "",
};
exports.UpdateSniMatchMetadata = {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== "") {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== "") {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSniMatchMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSniMatchMetadata);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
                : "";
        message.listenerName =
            object.listenerName !== undefined && object.listenerName !== null
                ? String(object.listenerName)
                : "";
        message.sniMatchName =
            object.sniMatchName !== undefined && object.sniMatchName !== null
                ? String(object.sniMatchName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateSniMatchMetadata);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.listenerName = (_b = object.listenerName) !== null && _b !== void 0 ? _b : "";
        message.sniMatchName = (_c = object.sniMatchName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSniMatchMetadata.$type, exports.UpdateSniMatchMetadata);
const baseListLoadBalancerOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest",
    loadBalancerId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListLoadBalancerOperationsRequest = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.loadBalancerId !== "") {
            writer.uint32(10).string(message.loadBalancerId);
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
        const message = Object.assign({}, baseListLoadBalancerOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
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
        const message = Object.assign({}, baseListLoadBalancerOperationsRequest);
        message.loadBalancerId =
            object.loadBalancerId !== undefined && object.loadBalancerId !== null
                ? String(object.loadBalancerId)
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
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListLoadBalancerOperationsRequest);
        message.loadBalancerId = (_a = object.loadBalancerId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancerOperationsRequest.$type, exports.ListLoadBalancerOperationsRequest);
const baseListLoadBalancerOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse",
    nextPageToken: "",
};
exports.ListLoadBalancerOperationsResponse = {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse",
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
        const message = Object.assign({}, baseListLoadBalancerOperationsResponse);
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
        const message = Object.assign({}, baseListLoadBalancerOperationsResponse);
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
        const message = Object.assign({}, baseListLoadBalancerOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListLoadBalancerOperationsResponse.$type, exports.ListLoadBalancerOperationsResponse);
/** A set of methods for managing application load balancers. */
exports.LoadBalancerServiceService = {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(load_balancer_1.LoadBalancer.encode(value).finish()),
        responseDeserialize: (value) => load_balancer_1.LoadBalancer.decode(value),
    },
    /** Lists application load balancers in the specified folder. */
    list: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLoadBalancersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLoadBalancersResponse.decode(value),
    },
    /** Creates an application load balancer in the specified folder. */
    create: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified application load balancer. */
    update: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified application load balancer. */
    delete: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified application load balancer. */
    start: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified application load balancer. */
    stop: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopLoadBalancerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds a listener to the specified application load balancer. */
    addListener: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified listener. */
    removeListener: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified listener of the specified application load balancer. */
    updateListener: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateListenerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateListenerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveSniMatchRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTargetStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetTargetStatesResponse.decode(value),
    },
    /** Lists operations for the specified application load balancer. */
    listOperations: {
        path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLoadBalancerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLoadBalancerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLoadBalancerOperationsResponse.decode(value),
    },
};
exports.LoadBalancerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LoadBalancerServiceService, "yandex.cloud.apploadbalancer.v1.LoadBalancerService");
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
