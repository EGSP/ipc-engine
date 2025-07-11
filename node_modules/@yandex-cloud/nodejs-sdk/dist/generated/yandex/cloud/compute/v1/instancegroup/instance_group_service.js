"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceGroupServiceClient = exports.InstanceGroupServiceService = exports.ListInstanceGroupLogRecordsResponse = exports.ListInstanceGroupLogRecordsRequest = exports.ListInstanceGroupOperationsResponse = exports.ListInstanceGroupOperationsRequest = exports.StopInstancesRequest = exports.DeleteInstancesRequest = exports.ListInstanceGroupInstancesResponse = exports.ListInstanceGroupInstancesRequest = exports.ListInstanceGroupsResponse = exports.ListInstanceGroupsRequest = exports.StopInstancesMetadata = exports.DeleteInstancesMetadata = exports.DeleteInstanceGroupMetadata = exports.DeleteInstanceGroupRequest = exports.RollingRecreateMetadata = exports.RollingRecreateRequest = exports.RollingRestartMetadata = exports.RollingRestartRequest = exports.StopInstanceGroupMetadata = exports.StopInstanceGroupRequest = exports.StartInstanceGroupMetadata = exports.StartInstanceGroupRequest = exports.UpdateInstanceGroupMetadata = exports.UpdateInstanceGroupFromYamlRequest = exports.UpdateInstanceGroupRequest_LabelsEntry = exports.UpdateInstanceGroupRequest = exports.CreateInstanceGroupMetadata = exports.CreateInstanceGroupFromYamlRequest = exports.CreateInstanceGroupRequest_LabelsEntry = exports.CreateInstanceGroupRequest = exports.GetInstanceGroupRequest = exports.PauseInstanceGroupProcessMetadata = exports.PauseInstanceGroupProcessesRequest = exports.ResumeInstanceGroupProcessMetadata = exports.ResumeInstanceGroupProcessesRequest = exports.instanceGroupViewToJSON = exports.instanceGroupViewFromJSON = exports.InstanceGroupView = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const instance_group_1 = require("../../../../../yandex/cloud/compute/v1/instancegroup/instance_group");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.compute.v1.instancegroup";
var InstanceGroupView;
(function (InstanceGroupView) {
    /** BASIC - Doesn't include the metadata of the instance template in the server response. */
    InstanceGroupView[InstanceGroupView["BASIC"] = 0] = "BASIC";
    /** FULL - Returns the metadata of the instance template in the server response. */
    InstanceGroupView[InstanceGroupView["FULL"] = 1] = "FULL";
    InstanceGroupView[InstanceGroupView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceGroupView = exports.InstanceGroupView || (exports.InstanceGroupView = {}));
function instanceGroupViewFromJSON(object) {
    switch (object) {
        case 0:
        case "BASIC":
            return InstanceGroupView.BASIC;
        case 1:
        case "FULL":
            return InstanceGroupView.FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceGroupView.UNRECOGNIZED;
    }
}
exports.instanceGroupViewFromJSON = instanceGroupViewFromJSON;
function instanceGroupViewToJSON(object) {
    switch (object) {
        case InstanceGroupView.BASIC:
            return "BASIC";
        case InstanceGroupView.FULL:
            return "FULL";
        default:
            return "UNKNOWN";
    }
}
exports.instanceGroupViewToJSON = instanceGroupViewToJSON;
const baseResumeInstanceGroupProcessesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest",
    instanceGroupId: "",
};
exports.ResumeInstanceGroupProcessesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeInstanceGroupProcessesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeInstanceGroupProcessesRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResumeInstanceGroupProcessesRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeInstanceGroupProcessesRequest.$type, exports.ResumeInstanceGroupProcessesRequest);
const baseResumeInstanceGroupProcessMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata",
    instanceGroupId: "",
};
exports.ResumeInstanceGroupProcessMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeInstanceGroupProcessMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeInstanceGroupProcessMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResumeInstanceGroupProcessMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeInstanceGroupProcessMetadata.$type, exports.ResumeInstanceGroupProcessMetadata);
const basePauseInstanceGroupProcessesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest",
    instanceGroupId: "",
};
exports.PauseInstanceGroupProcessesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseInstanceGroupProcessesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseInstanceGroupProcessesRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePauseInstanceGroupProcessesRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseInstanceGroupProcessesRequest.$type, exports.PauseInstanceGroupProcessesRequest);
const basePauseInstanceGroupProcessMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata",
    instanceGroupId: "",
};
exports.PauseInstanceGroupProcessMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseInstanceGroupProcessMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseInstanceGroupProcessMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePauseInstanceGroupProcessMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseInstanceGroupProcessMetadata.$type, exports.PauseInstanceGroupProcessMetadata);
const baseGetInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest",
    instanceGroupId: "",
    view: 0,
};
exports.GetInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetInstanceGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetInstanceGroupRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.view =
            object.view !== undefined && object.view !== null
                ? instanceGroupViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetInstanceGroupRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.view = (_b = object.view) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetInstanceGroupRequest.$type, exports.GetInstanceGroupRequest);
const baseCreateInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest",
    folderId: "",
    name: "",
    description: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.CreateInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateInstanceGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            instance_group_1.InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            instance_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            instance_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            instance_group_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            instance_group_1.LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(82).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            instance_group_1.HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(98).string(message.serviceAccountId);
        }
        for (const v of message.variables) {
            instance_group_1.Variable.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            instance_group_1.ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateInstanceGroupRequest);
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.CreateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = instance_group_1.InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.scalePolicy = instance_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deployPolicy = instance_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = instance_group_1.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.loadBalancerSpec = instance_group_1.LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.healthChecksSpec = instance_group_1.HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.variables.push(instance_group_1.Variable.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
                    message.applicationLoadBalancerSpec =
                        instance_group_1.ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateInstanceGroupRequest);
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
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? instance_group_1.InstanceTemplate.fromJSON(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? instance_group_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? instance_group_1.DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? instance_group_1.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? instance_group_1.LoadBalancerSpec.fromJSON(object.loadBalancerSpec)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? instance_group_1.HealthChecksSpec.fromJSON(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.variables = ((_b = object.variables) !== null && _b !== void 0 ? _b : []).map((e) => instance_group_1.Variable.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? instance_group_1.ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec)
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? instance_group_1.InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? instance_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? instance_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? instance_group_1.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? instance_group_1.LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? instance_group_1.HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? instance_group_1.Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec = message.applicationLoadBalancerSpec
                ? instance_group_1.ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseCreateInstanceGroupRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? instance_group_1.InstanceTemplate.fromPartial(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? instance_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? instance_group_1.DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? instance_group_1.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? instance_group_1.LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? instance_group_1.HealthChecksSpec.fromPartial(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.variables =
            ((_f = object.variables) === null || _f === void 0 ? void 0 : _f.map((e) => instance_group_1.Variable.fromPartial(e))) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? instance_group_1.ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceGroupRequest.$type, exports.CreateInstanceGroupRequest);
const baseCreateInstanceGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateInstanceGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateInstanceGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateInstanceGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateInstanceGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceGroupRequest_LabelsEntry.$type, exports.CreateInstanceGroupRequest_LabelsEntry);
const baseCreateInstanceGroupFromYamlRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest",
    folderId: "",
    instanceGroupYaml: "",
};
exports.CreateInstanceGroupFromYamlRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.instanceGroupYaml !== "") {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateInstanceGroupFromYamlRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateInstanceGroupFromYamlRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.instanceGroupYaml =
            object.instanceGroupYaml !== undefined &&
                object.instanceGroupYaml !== null
                ? String(object.instanceGroupYaml)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateInstanceGroupFromYamlRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.instanceGroupYaml = (_b = object.instanceGroupYaml) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceGroupFromYamlRequest.$type, exports.CreateInstanceGroupFromYamlRequest);
const baseCreateInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata",
    instanceGroupId: "",
};
exports.CreateInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateInstanceGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateInstanceGroupMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateInstanceGroupMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceGroupMetadata.$type, exports.CreateInstanceGroupMetadata);
const baseUpdateInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest",
    instanceGroupId: "",
    name: "",
    description: "",
    serviceAccountId: "",
    deletionProtection: false,
};
exports.UpdateInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
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
            exports.UpdateInstanceGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            instance_group_1.InstanceTemplate.encode(message.instanceTemplate, writer.uint32(50).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            instance_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            instance_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            instance_group_1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            instance_group_1.HealthChecksSpec.encode(message.healthChecksSpec, writer.uint32(90).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.loadBalancerSpec !== undefined) {
            instance_group_1.LoadBalancerSpec.encode(message.loadBalancerSpec, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.variables) {
            instance_group_1.Variable.encode(v, writer.uint32(122).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            instance_group_1.ApplicationLoadBalancerSpec.encode(message.applicationLoadBalancerSpec, writer.uint32(138).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceGroupRequest);
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
                    const entry5 = exports.UpdateInstanceGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = instance_group_1.InstanceTemplate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.scalePolicy = instance_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deployPolicy = instance_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = instance_group_1.AllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.healthChecksSpec = instance_group_1.HealthChecksSpec.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.loadBalancerSpec = instance_group_1.LoadBalancerSpec.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.variables.push(instance_group_1.Variable.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                case 17:
                    message.applicationLoadBalancerSpec =
                        instance_group_1.ApplicationLoadBalancerSpec.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateInstanceGroupRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
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
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? instance_group_1.InstanceTemplate.fromJSON(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? instance_group_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? instance_group_1.DeployPolicy.fromJSON(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? instance_group_1.AllocationPolicy.fromJSON(object.allocationPolicy)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? instance_group_1.HealthChecksSpec.fromJSON(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? instance_group_1.LoadBalancerSpec.fromJSON(object.loadBalancerSpec)
                : undefined;
        message.variables = ((_b = object.variables) !== null && _b !== void 0 ? _b : []).map((e) => instance_group_1.Variable.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? instance_group_1.ApplicationLoadBalancerSpec.fromJSON(object.applicationLoadBalancerSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? instance_group_1.InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? instance_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? instance_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? instance_group_1.AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? instance_group_1.HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? instance_group_1.LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? instance_group_1.Variable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec = message.applicationLoadBalancerSpec
                ? instance_group_1.ApplicationLoadBalancerSpec.toJSON(message.applicationLoadBalancerSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateInstanceGroupRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.instanceTemplate =
            object.instanceTemplate !== undefined && object.instanceTemplate !== null
                ? instance_group_1.InstanceTemplate.fromPartial(object.instanceTemplate)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? instance_group_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.deployPolicy =
            object.deployPolicy !== undefined && object.deployPolicy !== null
                ? instance_group_1.DeployPolicy.fromPartial(object.deployPolicy)
                : undefined;
        message.allocationPolicy =
            object.allocationPolicy !== undefined && object.allocationPolicy !== null
                ? instance_group_1.AllocationPolicy.fromPartial(object.allocationPolicy)
                : undefined;
        message.healthChecksSpec =
            object.healthChecksSpec !== undefined && object.healthChecksSpec !== null
                ? instance_group_1.HealthChecksSpec.fromPartial(object.healthChecksSpec)
                : undefined;
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        message.loadBalancerSpec =
            object.loadBalancerSpec !== undefined && object.loadBalancerSpec !== null
                ? instance_group_1.LoadBalancerSpec.fromPartial(object.loadBalancerSpec)
                : undefined;
        message.variables =
            ((_f = object.variables) === null || _f === void 0 ? void 0 : _f.map((e) => instance_group_1.Variable.fromPartial(e))) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        message.applicationLoadBalancerSpec =
            object.applicationLoadBalancerSpec !== undefined &&
                object.applicationLoadBalancerSpec !== null
                ? instance_group_1.ApplicationLoadBalancerSpec.fromPartial(object.applicationLoadBalancerSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceGroupRequest.$type, exports.UpdateInstanceGroupRequest);
const baseUpdateInstanceGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateInstanceGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateInstanceGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateInstanceGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateInstanceGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceGroupRequest_LabelsEntry.$type, exports.UpdateInstanceGroupRequest_LabelsEntry);
const baseUpdateInstanceGroupFromYamlRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest",
    instanceGroupId: "",
    instanceGroupYaml: "",
};
exports.UpdateInstanceGroupFromYamlRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.instanceGroupYaml !== "") {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceGroupFromYamlRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateInstanceGroupFromYamlRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.instanceGroupYaml =
            object.instanceGroupYaml !== undefined &&
                object.instanceGroupYaml !== null
                ? String(object.instanceGroupYaml)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateInstanceGroupFromYamlRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.instanceGroupYaml = (_b = object.instanceGroupYaml) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceGroupFromYamlRequest.$type, exports.UpdateInstanceGroupFromYamlRequest);
const baseUpdateInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata",
    instanceGroupId: "",
};
exports.UpdateInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateInstanceGroupMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateInstanceGroupMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceGroupMetadata.$type, exports.UpdateInstanceGroupMetadata);
const baseStartInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest",
    instanceGroupId: "",
};
exports.StartInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartInstanceGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartInstanceGroupRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartInstanceGroupRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartInstanceGroupRequest.$type, exports.StartInstanceGroupRequest);
const baseStartInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata",
    instanceGroupId: "",
};
exports.StartInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartInstanceGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartInstanceGroupMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartInstanceGroupMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartInstanceGroupMetadata.$type, exports.StartInstanceGroupMetadata);
const baseStopInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest",
    instanceGroupId: "",
};
exports.StopInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstanceGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopInstanceGroupRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopInstanceGroupRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstanceGroupRequest.$type, exports.StopInstanceGroupRequest);
const baseStopInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata",
    instanceGroupId: "",
};
exports.StopInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstanceGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopInstanceGroupMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopInstanceGroupMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstanceGroupMetadata.$type, exports.StopInstanceGroupMetadata);
const baseRollingRestartRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest",
    instanceGroupId: "",
    managedInstanceIds: "",
};
exports.RollingRestartRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRollingRestartRequest);
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
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
        const message = Object.assign({}, baseRollingRestartRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.managedInstanceIds = ((_a = object.managedInstanceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRollingRestartRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.managedInstanceIds = ((_b = object.managedInstanceIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RollingRestartRequest.$type, exports.RollingRestartRequest);
const baseRollingRestartMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata",
    instanceGroupId: "",
};
exports.RollingRestartMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRestartMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRollingRestartMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRollingRestartMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRollingRestartMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RollingRestartMetadata.$type, exports.RollingRestartMetadata);
const baseRollingRecreateRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest",
    instanceGroupId: "",
    managedInstanceIds: "",
};
exports.RollingRecreateRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRollingRecreateRequest);
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
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
        const message = Object.assign({}, baseRollingRecreateRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.managedInstanceIds = ((_a = object.managedInstanceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRollingRecreateRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.managedInstanceIds = ((_b = object.managedInstanceIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RollingRecreateRequest.$type, exports.RollingRecreateRequest);
const baseRollingRecreateMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata",
    instanceGroupId: "",
};
exports.RollingRecreateMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.RollingRecreateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRollingRecreateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRollingRecreateMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRollingRecreateMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RollingRecreateMetadata.$type, exports.RollingRecreateMetadata);
const baseDeleteInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest",
    instanceGroupId: "",
};
exports.DeleteInstanceGroupRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstanceGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteInstanceGroupRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteInstanceGroupRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstanceGroupRequest.$type, exports.DeleteInstanceGroupRequest);
const baseDeleteInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata",
    instanceGroupId: "",
};
exports.DeleteInstanceGroupMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstanceGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteInstanceGroupMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteInstanceGroupMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstanceGroupMetadata.$type, exports.DeleteInstanceGroupMetadata);
const baseDeleteInstancesMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata",
    instanceGroupId: "",
};
exports.DeleteInstancesMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstancesMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteInstancesMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteInstancesMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstancesMetadata.$type, exports.DeleteInstancesMetadata);
const baseStopInstancesMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata",
    instanceGroupId: "",
};
exports.StopInstancesMetadata = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstancesMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopInstancesMetadata);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopInstancesMetadata);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstancesMetadata.$type, exports.StopInstancesMetadata);
const baseListInstanceGroupsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    view: 0,
};
exports.ListInstanceGroupsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest",
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
        if (message.view !== 0) {
            writer.uint32(40).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceGroupsRequest);
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
                case 5:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListInstanceGroupsRequest);
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
        message.view =
            object.view !== undefined && object.view !== null
                ? instanceGroupViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListInstanceGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.view = (_e = object.view) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupsRequest.$type, exports.ListInstanceGroupsRequest);
const baseListInstanceGroupsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse",
    nextPageToken: "",
};
exports.ListInstanceGroupsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instanceGroups) {
            instance_group_1.InstanceGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceGroupsResponse);
        message.instanceGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroups.push(instance_group_1.InstanceGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListInstanceGroupsResponse);
        message.instanceGroups = ((_a = object.instanceGroups) !== null && _a !== void 0 ? _a : []).map((e) => instance_group_1.InstanceGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.instanceGroups) {
            obj.instanceGroups = message.instanceGroups.map((e) => e ? instance_group_1.InstanceGroup.toJSON(e) : undefined);
        }
        else {
            obj.instanceGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListInstanceGroupsResponse);
        message.instanceGroups =
            ((_a = object.instanceGroups) === null || _a === void 0 ? void 0 : _a.map((e) => instance_group_1.InstanceGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupsResponse.$type, exports.ListInstanceGroupsResponse);
const baseListInstanceGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListInstanceGroupInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
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
        const message = Object.assign({}, baseListInstanceGroupInstancesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
        const message = Object.assign({}, baseListInstanceGroupInstancesRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListInstanceGroupInstancesRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupInstancesRequest.$type, exports.ListInstanceGroupInstancesRequest);
const baseListInstanceGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse",
    nextPageToken: "",
};
exports.ListInstanceGroupInstancesResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instances) {
            instance_group_1.ManagedInstance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceGroupInstancesResponse);
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(instance_group_1.ManagedInstance.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListInstanceGroupInstancesResponse);
        message.instances = ((_a = object.instances) !== null && _a !== void 0 ? _a : []).map((e) => instance_group_1.ManagedInstance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? instance_group_1.ManagedInstance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListInstanceGroupInstancesResponse);
        message.instances =
            ((_a = object.instances) === null || _a === void 0 ? void 0 : _a.map((e) => instance_group_1.ManagedInstance.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupInstancesResponse.$type, exports.ListInstanceGroupInstancesResponse);
const baseDeleteInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest",
    instanceGroupId: "",
    managedInstanceIds: "",
    createAnother: false,
};
exports.DeleteInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        if (message.createAnother === true) {
            writer.uint32(24).bool(message.createAnother);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstancesRequest);
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
                    break;
                case 3:
                    message.createAnother = reader.bool();
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
        const message = Object.assign({}, baseDeleteInstancesRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.managedInstanceIds = ((_a = object.managedInstanceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.createAnother =
            object.createAnother !== undefined && object.createAnother !== null
                ? Boolean(object.createAnother)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        message.createAnother !== undefined &&
            (obj.createAnother = message.createAnother);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDeleteInstancesRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.managedInstanceIds = ((_b = object.managedInstanceIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.createAnother = (_c = object.createAnother) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstancesRequest.$type, exports.DeleteInstancesRequest);
const baseStopInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest",
    instanceGroupId: "",
    managedInstanceIds: "",
};
exports.StopInstancesRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstancesRequest);
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
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
        const message = Object.assign({}, baseStopInstancesRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
                : "";
        message.managedInstanceIds = ((_a = object.managedInstanceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        }
        else {
            obj.managedInstanceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStopInstancesRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.managedInstanceIds = ((_b = object.managedInstanceIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstancesRequest.$type, exports.StopInstancesRequest);
const baseListInstanceGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListInstanceGroupOperationsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
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
        const message = Object.assign({}, baseListInstanceGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
        const message = Object.assign({}, baseListInstanceGroupOperationsRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListInstanceGroupOperationsRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupOperationsRequest.$type, exports.ListInstanceGroupOperationsRequest);
const baseListInstanceGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListInstanceGroupOperationsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse",
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
        const message = Object.assign({}, baseListInstanceGroupOperationsResponse);
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
        const message = Object.assign({}, baseListInstanceGroupOperationsResponse);
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
        const message = Object.assign({}, baseListInstanceGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupOperationsResponse.$type, exports.ListInstanceGroupOperationsResponse);
const baseListInstanceGroupLogRecordsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest",
    instanceGroupId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListInstanceGroupLogRecordsRequest = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceGroupId !== "") {
            writer.uint32(10).string(message.instanceGroupId);
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
        const message = Object.assign({}, baseListInstanceGroupLogRecordsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
        const message = Object.assign({}, baseListInstanceGroupLogRecordsRequest);
        message.instanceGroupId =
            object.instanceGroupId !== undefined && object.instanceGroupId !== null
                ? String(object.instanceGroupId)
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
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListInstanceGroupLogRecordsRequest);
        message.instanceGroupId = (_a = object.instanceGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupLogRecordsRequest.$type, exports.ListInstanceGroupLogRecordsRequest);
const baseListInstanceGroupLogRecordsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse",
    nextPageToken: "",
};
exports.ListInstanceGroupLogRecordsResponse = {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.logRecords) {
            instance_group_1.LogRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceGroupLogRecordsResponse);
        message.logRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logRecords.push(instance_group_1.LogRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListInstanceGroupLogRecordsResponse);
        message.logRecords = ((_a = object.logRecords) !== null && _a !== void 0 ? _a : []).map((e) => instance_group_1.LogRecord.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.logRecords) {
            obj.logRecords = message.logRecords.map((e) => e ? instance_group_1.LogRecord.toJSON(e) : undefined);
        }
        else {
            obj.logRecords = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListInstanceGroupLogRecordsResponse);
        message.logRecords =
            ((_a = object.logRecords) === null || _a === void 0 ? void 0 : _a.map((e) => instance_group_1.LogRecord.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceGroupLogRecordsResponse.$type, exports.ListInstanceGroupLogRecordsResponse);
/** A set of methods for managing InstanceGroup resources. */
exports.InstanceGroupServiceService = {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(instance_group_1.InstanceGroup.encode(value).finish()),
        responseDeserialize: (value) => instance_group_1.InstanceGroup.decode(value),
    },
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceGroupsResponse.decode(value),
    },
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateInstanceGroupFromYamlRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceGroupFromYamlRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified instance group. */
    stop: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Performs rolling restart of specified instances for the specified instance group.
     * Rolling restart does restart of instances respecting all group policies.
     */
    rollingRestart: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRestart",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RollingRestartRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RollingRestartRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Performs rolling recreate of specified instances for the specified instance group.
     * Rolling recreate does recreate of instance VMs respecting all group policies.
     */
    rollingRecreate: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRecreate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RollingRecreateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RollingRecreateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified instance group. */
    start: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified instance group. */
    delete: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteInstanceGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists instances for the specified instance group. */
    listInstances: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceGroupInstancesResponse.decode(value),
    },
    /** Delete instances from the instance group. */
    deleteInstances: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stop instances from the instance group. */
    stopInstances: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified instance group. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceGroupOperationsResponse.decode(value),
    },
    /** Lists logs for the specified instance group. */
    listLogRecords: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceGroupLogRecordsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceGroupLogRecordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceGroupLogRecordsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceGroupLogRecordsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResumeInstanceGroupProcessesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResumeInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses: {
        path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PauseInstanceGroupProcessesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PauseInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.InstanceGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.InstanceGroupServiceService, "yandex.cloud.compute.v1.instancegroup.InstanceGroupService");
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
