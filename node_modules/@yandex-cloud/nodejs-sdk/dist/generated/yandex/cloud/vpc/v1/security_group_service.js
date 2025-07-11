"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupServiceClient = exports.SecurityGroupServiceService = exports.MoveSecurityGroupMetadata = exports.MoveSecurityGroupRequest = exports.ListSecurityGroupOperationsResponse = exports.ListSecurityGroupOperationsRequest = exports.DeleteSecurityGroupMetadata = exports.DeleteSecurityGroupRequest = exports.UpdateSecurityGroupRuleMetadata = exports.UpdateSecurityGroupRuleRequest_LabelsEntry = exports.UpdateSecurityGroupRuleRequest = exports.UpdateSecurityGroupRulesRequest = exports.UpdateSecurityGroupMetadata = exports.UpdateSecurityGroupRequest_LabelsEntry = exports.UpdateSecurityGroupRequest = exports.CreateSecurityGroupMetadata = exports.SecurityGroupRuleSpec_LabelsEntry = exports.SecurityGroupRuleSpec = exports.CreateSecurityGroupRequest_LabelsEntry = exports.CreateSecurityGroupRequest = exports.ListSecurityGroupsResponse = exports.ListSecurityGroupsRequest = exports.GetSecurityGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const security_group_1 = require("../../../../yandex/cloud/vpc/v1/security_group");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.vpc.v1";
const baseGetSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest",
    securityGroupId: "",
};
exports.GetSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.GetSecurityGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetSecurityGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetSecurityGroupRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetSecurityGroupRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetSecurityGroupRequest.$type, exports.GetSecurityGroupRequest);
const baseListSecurityGroupsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListSecurityGroupsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsRequest",
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
        const message = Object.assign({}, baseListSecurityGroupsRequest);
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
        const message = Object.assign({}, baseListSecurityGroupsRequest);
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
        const message = Object.assign({}, baseListSecurityGroupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecurityGroupsRequest.$type, exports.ListSecurityGroupsRequest);
const baseListSecurityGroupsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse",
    nextPageToken: "",
};
exports.ListSecurityGroupsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.securityGroups) {
            security_group_1.SecurityGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListSecurityGroupsResponse);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroups.push(security_group_1.SecurityGroup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListSecurityGroupsResponse);
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => security_group_1.SecurityGroup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e ? security_group_1.SecurityGroup.toJSON(e) : undefined);
        }
        else {
            obj.securityGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListSecurityGroupsResponse);
        message.securityGroups =
            ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => security_group_1.SecurityGroup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecurityGroupsResponse.$type, exports.ListSecurityGroupsResponse);
const baseCreateSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest",
    folderId: "",
    name: "",
    description: "",
    networkId: "",
};
exports.CreateSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest",
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
            exports.CreateSecurityGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== "") {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.ruleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSecurityGroupRequest);
        message.labels = {};
        message.ruleSpecs = [];
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
                    const entry4 = exports.CreateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.ruleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateSecurityGroupRequest);
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
        message.ruleSpecs = ((_b = object.ruleSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.SecurityGroupRuleSpec.fromJSON(e));
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
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.ruleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateSecurityGroupRequest);
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
        message.ruleSpecs =
            ((_f = object.ruleSpecs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.SecurityGroupRuleSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecurityGroupRequest.$type, exports.CreateSecurityGroupRequest);
const baseCreateSecurityGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateSecurityGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateSecurityGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSecurityGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateSecurityGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecurityGroupRequest_LabelsEntry.$type, exports.CreateSecurityGroupRequest_LabelsEntry);
const baseSecurityGroupRuleSpec = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec",
    description: "",
    direction: 0,
};
exports.SecurityGroupRuleSpec = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SecurityGroupRuleSpec_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.ports !== undefined) {
            security_group_1.PortRange.encode(message.ports, writer.uint32(34).fork()).ldelim();
        }
        if (message.protocolName !== undefined) {
            writer.uint32(42).string(message.protocolName);
        }
        if (message.protocolNumber !== undefined) {
            writer.uint32(48).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            security_group_1.CidrBlocks.encode(message.cidrBlocks, writer.uint32(58).fork()).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(66).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(74).string(message.predefinedTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecurityGroupRuleSpec);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    const entry2 = exports.SecurityGroupRuleSpec_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                case 4:
                    message.ports = security_group_1.PortRange.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.protocolName = reader.string();
                    break;
                case 6:
                    message.protocolNumber = longToNumber(reader.int64());
                    break;
                case 7:
                    message.cidrBlocks = security_group_1.CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.securityGroupId = reader.string();
                    break;
                case 9:
                    message.predefinedTarget = reader.string();
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
        const message = Object.assign({}, baseSecurityGroupRuleSpec);
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.direction =
            object.direction !== undefined && object.direction !== null
                ? (0, security_group_1.securityGroupRule_DirectionFromJSON)(object.direction)
                : 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? security_group_1.PortRange.fromJSON(object.ports)
                : undefined;
        message.protocolName =
            object.protocolName !== undefined && object.protocolName !== null
                ? String(object.protocolName)
                : undefined;
        message.protocolNumber =
            object.protocolNumber !== undefined && object.protocolNumber !== null
                ? Number(object.protocolNumber)
                : undefined;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? security_group_1.CidrBlocks.fromJSON(object.cidrBlocks)
                : undefined;
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : undefined;
        message.predefinedTarget =
            object.predefinedTarget !== undefined && object.predefinedTarget !== null
                ? String(object.predefinedTarget)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = (0, security_group_1.securityGroupRule_DirectionToJSON)(message.direction));
        message.ports !== undefined &&
            (obj.ports = message.ports ? security_group_1.PortRange.toJSON(message.ports) : undefined);
        message.protocolName !== undefined &&
            (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = Math.round(message.protocolNumber));
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? security_group_1.CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined &&
            (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseSecurityGroupRuleSpec);
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? security_group_1.PortRange.fromPartial(object.ports)
                : undefined;
        message.protocolName = (_d = object.protocolName) !== null && _d !== void 0 ? _d : undefined;
        message.protocolNumber = (_e = object.protocolNumber) !== null && _e !== void 0 ? _e : undefined;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? security_group_1.CidrBlocks.fromPartial(object.cidrBlocks)
                : undefined;
        message.securityGroupId = (_f = object.securityGroupId) !== null && _f !== void 0 ? _f : undefined;
        message.predefinedTarget = (_g = object.predefinedTarget) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRuleSpec.$type, exports.SecurityGroupRuleSpec);
const baseSecurityGroupRuleSpec_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
    key: "",
    value: "",
};
exports.SecurityGroupRuleSpec_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRuleSpec.LabelsEntry",
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
        const message = Object.assign({}, baseSecurityGroupRuleSpec_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroupRuleSpec_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroupRuleSpec_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRuleSpec_LabelsEntry.$type, exports.SecurityGroupRuleSpec_LabelsEntry);
const baseCreateSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata",
    securityGroupId: "",
};
exports.CreateSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.CreateSecurityGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateSecurityGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateSecurityGroupMetadata);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateSecurityGroupMetadata);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateSecurityGroupMetadata.$type, exports.CreateSecurityGroupMetadata);
const baseUpdateSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest",
    securityGroupId: "",
    name: "",
    description: "",
};
exports.UpdateSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
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
            exports.UpdateSecurityGroupRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.ruleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecurityGroupRequest);
        message.labels = {};
        message.ruleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
                    const entry5 = exports.UpdateSecurityGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.ruleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateSecurityGroupRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
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
        message.ruleSpecs = ((_b = object.ruleSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.SecurityGroupRuleSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
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
        if (message.ruleSpecs) {
            obj.ruleSpecs = message.ruleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.ruleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUpdateSecurityGroupRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
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
        message.ruleSpecs =
            ((_e = object.ruleSpecs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.SecurityGroupRuleSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRequest.$type, exports.UpdateSecurityGroupRequest);
const baseUpdateSecurityGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSecurityGroupRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSecurityGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecurityGroupRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecurityGroupRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRequest_LabelsEntry.$type, exports.UpdateSecurityGroupRequest_LabelsEntry);
const baseUpdateSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata",
    securityGroupId: "",
    addedRuleIds: "",
};
exports.UpdateSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.addedRuleIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecurityGroupMetadata);
        message.addedRuleIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.addedRuleIds.push(reader.string());
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
        const message = Object.assign({}, baseUpdateSecurityGroupMetadata);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        message.addedRuleIds = ((_a = object.addedRuleIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.addedRuleIds) {
            obj.addedRuleIds = message.addedRuleIds.map((e) => e);
        }
        else {
            obj.addedRuleIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateSecurityGroupMetadata);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.addedRuleIds = ((_b = object.addedRuleIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupMetadata.$type, exports.UpdateSecurityGroupMetadata);
const baseUpdateSecurityGroupRulesRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest",
    securityGroupId: "",
    deletionRuleIds: "",
};
exports.UpdateSecurityGroupRulesRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        for (const v of message.deletionRuleIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.additionRuleSpecs) {
            exports.SecurityGroupRuleSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecurityGroupRulesRequest);
        message.deletionRuleIds = [];
        message.additionRuleSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.deletionRuleIds.push(reader.string());
                    break;
                case 3:
                    message.additionRuleSpecs.push(exports.SecurityGroupRuleSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUpdateSecurityGroupRulesRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        message.deletionRuleIds = ((_a = object.deletionRuleIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.additionRuleSpecs = ((_b = object.additionRuleSpecs) !== null && _b !== void 0 ? _b : []).map((e) => exports.SecurityGroupRuleSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        if (message.deletionRuleIds) {
            obj.deletionRuleIds = message.deletionRuleIds.map((e) => e);
        }
        else {
            obj.deletionRuleIds = [];
        }
        if (message.additionRuleSpecs) {
            obj.additionRuleSpecs = message.additionRuleSpecs.map((e) => e ? exports.SecurityGroupRuleSpec.toJSON(e) : undefined);
        }
        else {
            obj.additionRuleSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateSecurityGroupRulesRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.deletionRuleIds = ((_b = object.deletionRuleIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.additionRuleSpecs =
            ((_c = object.additionRuleSpecs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.SecurityGroupRuleSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRulesRequest.$type, exports.UpdateSecurityGroupRulesRequest);
const baseUpdateSecurityGroupRuleRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest",
    securityGroupId: "",
    ruleId: "",
    description: "",
};
exports.UpdateSecurityGroupRuleRequest = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== "") {
            writer.uint32(18).string(message.ruleId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateSecurityGroupRuleRequest_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateSecurityGroupRuleRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
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
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null
                ? String(object.ruleId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.ruleId = (_b = object.ruleId) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRuleRequest.$type, exports.UpdateSecurityGroupRuleRequest);
const baseUpdateSecurityGroupRuleRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateSecurityGroupRuleRequest_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateSecurityGroupRuleRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRuleRequest_LabelsEntry.$type, exports.UpdateSecurityGroupRuleRequest_LabelsEntry);
const baseUpdateSecurityGroupRuleMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata",
    securityGroupId: "",
    ruleId: "",
};
exports.UpdateSecurityGroupRuleMetadata = {
    $type: "yandex.cloud.vpc.v1.UpdateSecurityGroupRuleMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.ruleId !== "") {
            writer.uint32(18).string(message.ruleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateSecurityGroupRuleMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                case 2:
                    message.ruleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateSecurityGroupRuleMetadata);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        message.ruleId =
            object.ruleId !== undefined && object.ruleId !== null
                ? String(object.ruleId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.ruleId !== undefined && (obj.ruleId = message.ruleId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateSecurityGroupRuleMetadata);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.ruleId = (_b = object.ruleId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateSecurityGroupRuleMetadata.$type, exports.UpdateSecurityGroupRuleMetadata);
const baseDeleteSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest",
    securityGroupId: "",
};
exports.DeleteSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSecurityGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSecurityGroupRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSecurityGroupRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSecurityGroupRequest.$type, exports.DeleteSecurityGroupRequest);
const baseDeleteSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata",
    securityGroupId: "",
};
exports.DeleteSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.DeleteSecurityGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteSecurityGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteSecurityGroupMetadata);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteSecurityGroupMetadata);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteSecurityGroupMetadata.$type, exports.DeleteSecurityGroupMetadata);
const baseListSecurityGroupOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest",
    securityGroupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListSecurityGroupOperationsRequest = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
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
        const message = Object.assign({}, baseListSecurityGroupOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
        const message = Object.assign({}, baseListSecurityGroupOperationsRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
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
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListSecurityGroupOperationsRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecurityGroupOperationsRequest.$type, exports.ListSecurityGroupOperationsRequest);
const baseListSecurityGroupOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse",
    nextPageToken: "",
};
exports.ListSecurityGroupOperationsResponse = {
    $type: "yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse",
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
        const message = Object.assign({}, baseListSecurityGroupOperationsResponse);
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
        const message = Object.assign({}, baseListSecurityGroupOperationsResponse);
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
        const message = Object.assign({}, baseListSecurityGroupOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListSecurityGroupOperationsResponse.$type, exports.ListSecurityGroupOperationsResponse);
const baseMoveSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest",
    securityGroupId: "",
    destinationFolderId: "",
};
exports.MoveSecurityGroupRequest = {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveSecurityGroupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
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
        const message = Object.assign({}, baseMoveSecurityGroupRequest);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
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
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveSecurityGroupRequest);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveSecurityGroupRequest.$type, exports.MoveSecurityGroupRequest);
const baseMoveSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata",
    securityGroupId: "",
};
exports.MoveSecurityGroupMetadata = {
    $type: "yandex.cloud.vpc.v1.MoveSecurityGroupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityGroupId !== "") {
            writer.uint32(10).string(message.securityGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveSecurityGroupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveSecurityGroupMetadata);
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMoveSecurityGroupMetadata);
        message.securityGroupId = (_a = object.securityGroupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveSecurityGroupMetadata.$type, exports.MoveSecurityGroupMetadata);
exports.SecurityGroupServiceService = {
    get: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(security_group_1.SecurityGroup.encode(value).finish()),
        responseDeserialize: (value) => security_group_1.SecurityGroup.decode(value),
    },
    list: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecurityGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecurityGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecurityGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecurityGroupsResponse.decode(value),
    },
    create: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    updateRules: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRulesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRulesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** update rule description or labels */
    updateRule: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecurityGroupRuleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecurityGroupRuleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    move: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveSecurityGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveSecurityGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    listOperations: {
        path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecurityGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecurityGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecurityGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecurityGroupOperationsResponse.decode(value),
    },
};
exports.SecurityGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SecurityGroupServiceService, "yandex.cloud.vpc.v1.SecurityGroupService");
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
