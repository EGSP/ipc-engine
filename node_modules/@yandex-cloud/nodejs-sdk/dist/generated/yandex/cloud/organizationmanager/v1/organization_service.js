"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationServiceClient = exports.OrganizationServiceService = exports.ListOrganizationOperationsResponse = exports.ListOrganizationOperationsRequest = exports.UpdateOrganizationMetadata = exports.UpdateOrganizationRequest_LabelsEntry = exports.UpdateOrganizationRequest = exports.ListOrganizationsResponse = exports.ListOrganizationsRequest = exports.GetOrganizationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const organization_1 = require("../../../../yandex/cloud/organizationmanager/v1/organization");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.organizationmanager.v1";
const baseGetOrganizationRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest",
    organizationId: "",
};
exports.GetOrganizationRequest = {
    $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetOrganizationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetOrganizationRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetOrganizationRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOrganizationRequest.$type, exports.GetOrganizationRequest);
const baseListOrganizationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListOrganizationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOrganizationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseListOrganizationsRequest);
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
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListOrganizationsRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        message.filter = (_c = object.filter) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOrganizationsRequest.$type, exports.ListOrganizationsRequest);
const baseListOrganizationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse",
    nextPageToken: "",
};
exports.ListOrganizationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.organizations) {
            organization_1.Organization.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListOrganizationsResponse);
        message.organizations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizations.push(organization_1.Organization.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListOrganizationsResponse);
        message.organizations = ((_a = object.organizations) !== null && _a !== void 0 ? _a : []).map((e) => organization_1.Organization.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.organizations) {
            obj.organizations = message.organizations.map((e) => e ? organization_1.Organization.toJSON(e) : undefined);
        }
        else {
            obj.organizations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListOrganizationsResponse);
        message.organizations =
            ((_a = object.organizations) === null || _a === void 0 ? void 0 : _a.map((e) => organization_1.Organization.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOrganizationsResponse.$type, exports.ListOrganizationsResponse);
const baseUpdateOrganizationRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest",
    organizationId: "",
    name: "",
    description: "",
    title: "",
};
exports.UpdateOrganizationRequest = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
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
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateOrganizationRequest_LabelsEntry.encode({
                $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOrganizationRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
                    message.title = reader.string();
                    break;
                case 6:
                    const entry6 = exports.UpdateOrganizationRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
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
        const message = Object.assign({}, baseUpdateOrganizationRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
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
        const message = Object.assign({}, baseUpdateOrganizationRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.title = (_d = object.title) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOrganizationRequest.$type, exports.UpdateOrganizationRequest);
const baseUpdateOrganizationRequest_LabelsEntry = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateOrganizationRequest_LabelsEntry = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateOrganizationRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateOrganizationRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateOrganizationRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOrganizationRequest_LabelsEntry.$type, exports.UpdateOrganizationRequest_LabelsEntry);
const baseUpdateOrganizationMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata",
    organizationId: "",
};
exports.UpdateOrganizationMetadata = {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateOrganizationMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateOrganizationMetadata);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateOrganizationMetadata);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOrganizationMetadata.$type, exports.UpdateOrganizationMetadata);
const baseListOrganizationOperationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest",
    organizationId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListOrganizationOperationsRequest = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
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
        const message = Object.assign({}, baseListOrganizationOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = Object.assign({}, baseListOrganizationOperationsRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListOrganizationOperationsRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOrganizationOperationsRequest.$type, exports.ListOrganizationOperationsRequest);
const baseListOrganizationOperationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse",
    nextPageToken: "",
};
exports.ListOrganizationOperationsResponse = {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse",
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
        const message = Object.assign({}, baseListOrganizationOperationsResponse);
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
        const message = Object.assign({}, baseListOrganizationOperationsResponse);
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
        const message = Object.assign({}, baseListOrganizationOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOrganizationOperationsResponse.$type, exports.ListOrganizationOperationsResponse);
/** A set of methods for managing Organization resources. */
exports.OrganizationServiceService = {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(organization_1.Organization.encode(value).finish()),
        responseDeserialize: (value) => organization_1.Organization.decode(value),
    },
    /** Retrieves the list of Organization resources. */
    list: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOrganizationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOrganizationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOrganizationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOrganizationsResponse.decode(value),
    },
    /** Updates the specified organization. */
    update: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified organization. */
    listOperations: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOrganizationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOrganizationOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOrganizationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOrganizationOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified organization. */
    listAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified organization. */
    setAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: {
        path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OrganizationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OrganizationServiceService, "yandex.cloud.organizationmanager.v1.OrganizationService");
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
