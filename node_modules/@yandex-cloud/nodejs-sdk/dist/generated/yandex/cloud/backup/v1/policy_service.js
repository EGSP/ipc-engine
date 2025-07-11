"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyServiceClient = exports.PolicyServiceService = exports.RevokeMetadata = exports.RevokeRequest = exports.ExecuteMetadata = exports.ExecuteRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.ApplyPolicyMetadata = exports.ApplyPolicyRequest = exports.DeletePolicyMetadata = exports.DeletePolicyRequest = exports.UpdatePolicyMetadata = exports.UpdatePolicyRequest = exports.GetPolicyRequest = exports.CreatePolicyMetadata = exports.CreatePolicyRequest = exports.ListPoliciesResponse = exports.ListPoliciesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const policy_1 = require("../../../../yandex/cloud/backup/v1/policy");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.backup.v1";
const baseListPoliciesRequest = {
    $type: "yandex.cloud.backup.v1.ListPoliciesRequest",
    folderId: "",
    computeInstanceId: "",
};
exports.ListPoliciesRequest = {
    $type: "yandex.cloud.backup.v1.ListPoliciesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListPoliciesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListPoliciesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListPoliciesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPoliciesRequest.$type, exports.ListPoliciesRequest);
const baseListPoliciesResponse = {
    $type: "yandex.cloud.backup.v1.ListPoliciesResponse",
};
exports.ListPoliciesResponse = {
    $type: "yandex.cloud.backup.v1.ListPoliciesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.policies) {
            policy_1.Policy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListPoliciesResponse);
        message.policies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policies.push(policy_1.Policy.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListPoliciesResponse);
        message.policies = ((_a = object.policies) !== null && _a !== void 0 ? _a : []).map((e) => policy_1.Policy.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.policies) {
            obj.policies = message.policies.map((e) => e ? policy_1.Policy.toJSON(e) : undefined);
        }
        else {
            obj.policies = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListPoliciesResponse);
        message.policies = ((_a = object.policies) === null || _a === void 0 ? void 0 : _a.map((e) => policy_1.Policy.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPoliciesResponse.$type, exports.ListPoliciesResponse);
const baseCreatePolicyRequest = {
    $type: "yandex.cloud.backup.v1.CreatePolicyRequest",
    folderId: "",
    name: "",
};
exports.CreatePolicyRequest = {
    $type: "yandex.cloud.backup.v1.CreatePolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.settings !== undefined) {
            policy_1.PolicySettings.encode(message.settings, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreatePolicyRequest);
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
                    message.settings = policy_1.PolicySettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreatePolicyRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? policy_1.PolicySettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? policy_1.PolicySettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreatePolicyRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? policy_1.PolicySettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreatePolicyRequest.$type, exports.CreatePolicyRequest);
const baseCreatePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.CreatePolicyMetadata",
    policyId: "",
};
exports.CreatePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.CreatePolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreatePolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreatePolicyMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreatePolicyMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreatePolicyMetadata.$type, exports.CreatePolicyMetadata);
const baseGetPolicyRequest = {
    $type: "yandex.cloud.backup.v1.GetPolicyRequest",
    policyId: "",
};
exports.GetPolicyRequest = {
    $type: "yandex.cloud.backup.v1.GetPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetPolicyRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetPolicyRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetPolicyRequest.$type, exports.GetPolicyRequest);
const baseUpdatePolicyRequest = {
    $type: "yandex.cloud.backup.v1.UpdatePolicyRequest",
    policyId: "",
};
exports.UpdatePolicyRequest = {
    $type: "yandex.cloud.backup.v1.UpdatePolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.settings !== undefined) {
            policy_1.PolicySettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdatePolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.settings = policy_1.PolicySettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdatePolicyRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? policy_1.PolicySettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? policy_1.PolicySettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdatePolicyRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? policy_1.PolicySettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdatePolicyRequest.$type, exports.UpdatePolicyRequest);
const baseUpdatePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata",
    policyId: "",
};
exports.UpdatePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.UpdatePolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdatePolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdatePolicyMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdatePolicyMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdatePolicyMetadata.$type, exports.UpdatePolicyMetadata);
const baseDeletePolicyRequest = {
    $type: "yandex.cloud.backup.v1.DeletePolicyRequest",
    policyId: "",
};
exports.DeletePolicyRequest = {
    $type: "yandex.cloud.backup.v1.DeletePolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeletePolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeletePolicyRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeletePolicyRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeletePolicyRequest.$type, exports.DeletePolicyRequest);
const baseDeletePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.DeletePolicyMetadata",
    policyId: "",
};
exports.DeletePolicyMetadata = {
    $type: "yandex.cloud.backup.v1.DeletePolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeletePolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeletePolicyMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeletePolicyMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeletePolicyMetadata.$type, exports.DeletePolicyMetadata);
const baseApplyPolicyRequest = {
    $type: "yandex.cloud.backup.v1.ApplyPolicyRequest",
    policyId: "",
    computeInstanceId: "",
};
exports.ApplyPolicyRequest = {
    $type: "yandex.cloud.backup.v1.ApplyPolicyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplyPolicyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplyPolicyRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplyPolicyRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplyPolicyRequest.$type, exports.ApplyPolicyRequest);
const baseApplyPolicyMetadata = {
    $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata",
    policyId: "",
    computeInstanceId: "",
};
exports.ApplyPolicyMetadata = {
    $type: "yandex.cloud.backup.v1.ApplyPolicyMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplyPolicyMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplyPolicyMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplyPolicyMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplyPolicyMetadata.$type, exports.ApplyPolicyMetadata);
const baseListApplicationsRequest = {
    $type: "yandex.cloud.backup.v1.ListApplicationsRequest",
};
exports.ListApplicationsRequest = {
    $type: "yandex.cloud.backup.v1.ListApplicationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.policyId !== undefined) {
            writer.uint32(18).string(message.policyId);
        }
        if (message.computeInstanceId !== undefined) {
            writer.uint32(26).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApplicationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.policyId = reader.string();
                    break;
                case 3:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListApplicationsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : undefined;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListApplicationsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.policyId = (_b = object.policyId) !== null && _b !== void 0 ? _b : undefined;
        message.computeInstanceId = (_c = object.computeInstanceId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApplicationsRequest.$type, exports.ListApplicationsRequest);
const baseListApplicationsResponse = {
    $type: "yandex.cloud.backup.v1.ListApplicationsResponse",
};
exports.ListApplicationsResponse = {
    $type: "yandex.cloud.backup.v1.ListApplicationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.applications) {
            policy_1.PolicyApplication.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListApplicationsResponse);
        message.applications = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applications.push(policy_1.PolicyApplication.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListApplicationsResponse);
        message.applications = ((_a = object.applications) !== null && _a !== void 0 ? _a : []).map((e) => policy_1.PolicyApplication.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.applications) {
            obj.applications = message.applications.map((e) => e ? policy_1.PolicyApplication.toJSON(e) : undefined);
        }
        else {
            obj.applications = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListApplicationsResponse);
        message.applications =
            ((_a = object.applications) === null || _a === void 0 ? void 0 : _a.map((e) => policy_1.PolicyApplication.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApplicationsResponse.$type, exports.ListApplicationsResponse);
const baseExecuteRequest = {
    $type: "yandex.cloud.backup.v1.ExecuteRequest",
    policyId: "",
    computeInstanceId: "",
};
exports.ExecuteRequest = {
    $type: "yandex.cloud.backup.v1.ExecuteRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExecuteRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExecuteRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExecuteRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExecuteRequest.$type, exports.ExecuteRequest);
const baseExecuteMetadata = {
    $type: "yandex.cloud.backup.v1.ExecuteMetadata",
    policyId: "",
    computeInstanceId: "",
};
exports.ExecuteMetadata = {
    $type: "yandex.cloud.backup.v1.ExecuteMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExecuteMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExecuteMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExecuteMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExecuteMetadata.$type, exports.ExecuteMetadata);
const baseRevokeRequest = {
    $type: "yandex.cloud.backup.v1.RevokeRequest",
    policyId: "",
    computeInstanceId: "",
};
exports.RevokeRequest = {
    $type: "yandex.cloud.backup.v1.RevokeRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRevokeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRevokeRequest);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRevokeRequest);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RevokeRequest.$type, exports.RevokeRequest);
const baseRevokeMetadata = {
    $type: "yandex.cloud.backup.v1.RevokeMetadata",
    policyId: "",
    computeInstanceId: "",
};
exports.RevokeMetadata = {
    $type: "yandex.cloud.backup.v1.RevokeMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.policyId !== "") {
            writer.uint32(10).string(message.policyId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRevokeMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRevokeMetadata);
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRevokeMetadata);
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RevokeMetadata.$type, exports.RevokeMetadata);
/** A set of methods for managing [policies](/docs/backup/concepts/policy). */
exports.PolicyServiceService = {
    /** List [policies](/docs/backup/concepts/policy) of specified folder. */
    list: {
        path: "/yandex.cloud.backup.v1.PolicyService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListPoliciesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListPoliciesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListPoliciesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListPoliciesResponse.decode(value),
    },
    /**
     * Create a new policy.
     *
     * For detailed information, please see [Creating a backup policy](/docs/backup/operations/policy-vm/create).
     */
    create: {
        path: "/yandex.cloud.backup.v1.PolicyService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreatePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreatePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Get specific policy. */
    get: {
        path: "/yandex.cloud.backup.v1.PolicyService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(policy_1.Policy.encode(value).finish()),
        responseDeserialize: (value) => policy_1.Policy.decode(value),
    },
    /** Update specific policy. */
    update: {
        path: "/yandex.cloud.backup.v1.PolicyService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdatePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdatePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Delete specific policy. */
    delete: {
        path: "/yandex.cloud.backup.v1.PolicyService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeletePolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeletePolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Apply policy to [Compute Cloud instance](/docs/backup/concepts/vm-connection#os). */
    apply: {
        path: "/yandex.cloud.backup.v1.PolicyService/Apply",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ApplyPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ApplyPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List applied policies using filters. */
    listApplications: {
        path: "/yandex.cloud.backup.v1.PolicyService/ListApplications",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApplicationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApplicationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApplicationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApplicationsResponse.decode(value),
    },
    /**
     * Run policy on specific Compute Cloud instance. That will create backup
     * according selected policy. In order to perform this action, policy should be
     * applied to the Compute Cloud instance.
     */
    execute: {
        path: "/yandex.cloud.backup.v1.PolicyService/Execute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ExecuteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ExecuteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Revoke policy from Compute Cloud instance. */
    revoke: {
        path: "/yandex.cloud.backup.v1.PolicyService/Revoke",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RevokeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RevokeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.PolicyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PolicyServiceService, "yandex.cloud.backup.v1.PolicyService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
