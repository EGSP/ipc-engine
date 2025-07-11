"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudServiceClient = exports.CloudServiceService = exports.DeleteCloudMetadata = exports.DeleteCloudRequest = exports.UpdateCloudMetadata = exports.UpdateCloudRequest_LabelsEntry = exports.UpdateCloudRequest = exports.ListCloudOperationsResponse = exports.ListCloudOperationsRequest = exports.CreateCloudMetadata = exports.CreateCloudRequest_LabelsEntry = exports.CreateCloudRequest = exports.ListCloudsResponse = exports.ListCloudsRequest = exports.GetCloudRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const cloud_1 = require("../../../../yandex/cloud/resourcemanager/v1/cloud");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.resourcemanager.v1";
const baseGetCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.GetCloudRequest",
    cloudId: "",
};
exports.GetCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.GetCloudRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetCloudRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetCloudRequest);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetCloudRequest);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCloudRequest.$type, exports.GetCloudRequest);
const baseListCloudsRequest = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
    organizationId: "",
};
exports.ListCloudsRequest = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsRequest",
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
        if (message.organizationId !== "") {
            writer.uint32(34).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCloudsRequest);
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
                case 4:
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
        const message = Object.assign({}, baseListCloudsRequest);
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
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListCloudsRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        message.filter = (_c = object.filter) !== null && _c !== void 0 ? _c : "";
        message.organizationId = (_d = object.organizationId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCloudsRequest.$type, exports.ListCloudsRequest);
const baseListCloudsResponse = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsResponse",
    nextPageToken: "",
};
exports.ListCloudsResponse = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clouds) {
            cloud_1.Cloud.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCloudsResponse);
        message.clouds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clouds.push(cloud_1.Cloud.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListCloudsResponse);
        message.clouds = ((_a = object.clouds) !== null && _a !== void 0 ? _a : []).map((e) => cloud_1.Cloud.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.clouds) {
            obj.clouds = message.clouds.map((e) => (e ? cloud_1.Cloud.toJSON(e) : undefined));
        }
        else {
            obj.clouds = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListCloudsResponse);
        message.clouds = ((_a = object.clouds) === null || _a === void 0 ? void 0 : _a.map((e) => cloud_1.Cloud.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCloudsResponse.$type, exports.ListCloudsResponse);
const baseCreateCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest",
    organizationId: "",
    name: "",
    description: "",
};
exports.CreateCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateCloudRequest_LabelsEntry.encode({
                $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCloudRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
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
        const message = Object.assign({}, baseCreateCloudRequest);
        message.organizationId =
            object.organizationId !== undefined && object.organizationId !== null
                ? String(object.organizationId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
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
        const message = Object.assign({}, baseCreateCloudRequest);
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateCloudRequest.$type, exports.CreateCloudRequest);
const baseCreateCloudRequest_LabelsEntry = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateCloudRequest_LabelsEntry = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateCloudRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateCloudRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateCloudRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCloudRequest_LabelsEntry.$type, exports.CreateCloudRequest_LabelsEntry);
const baseCreateCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudMetadata",
    cloudId: "",
};
exports.CreateCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.CreateCloudMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCloudMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateCloudMetadata);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateCloudMetadata);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCloudMetadata.$type, exports.CreateCloudMetadata);
const baseListCloudOperationsRequest = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsRequest",
    cloudId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListCloudOperationsRequest = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
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
        const message = Object.assign({}, baseListCloudOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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
        const message = Object.assign({}, baseListCloudOperationsRequest);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
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
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListCloudOperationsRequest);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCloudOperationsRequest.$type, exports.ListCloudOperationsRequest);
const baseListCloudOperationsResponse = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsResponse",
    nextPageToken: "",
};
exports.ListCloudOperationsResponse = {
    $type: "yandex.cloud.resourcemanager.v1.ListCloudOperationsResponse",
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
        const message = Object.assign({}, baseListCloudOperationsResponse);
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
        const message = Object.assign({}, baseListCloudOperationsResponse);
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
        const message = Object.assign({}, baseListCloudOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCloudOperationsResponse.$type, exports.ListCloudOperationsResponse);
const baseUpdateCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest",
    cloudId: "",
    name: "",
    description: "",
};
exports.UpdateCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
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
            exports.UpdateCloudRequest_LabelsEntry.encode({
                $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCloudRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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
                    const entry5 = exports.UpdateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateCloudRequest);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateCloudRequest);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCloudRequest.$type, exports.UpdateCloudRequest);
const baseUpdateCloudRequest_LabelsEntry = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateCloudRequest_LabelsEntry = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateCloudRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateCloudRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateCloudRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCloudRequest_LabelsEntry.$type, exports.UpdateCloudRequest_LabelsEntry);
const baseUpdateCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudMetadata",
    cloudId: "",
};
exports.UpdateCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.UpdateCloudMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCloudMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateCloudMetadata);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateCloudMetadata);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCloudMetadata.$type, exports.UpdateCloudMetadata);
const baseDeleteCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudRequest",
    cloudId: "",
};
exports.DeleteCloudRequest = {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCloudRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCloudRequest);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        message.deleteAfter =
            object.deleteAfter !== undefined && object.deleteAfter !== null
                ? fromJsonTimestamp(object.deleteAfter)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined &&
            (obj.deleteAfter = message.deleteAfter.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteCloudRequest);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        message.deleteAfter = (_b = object.deleteAfter) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCloudRequest.$type, exports.DeleteCloudRequest);
const baseDeleteCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudMetadata",
    cloudId: "",
};
exports.DeleteCloudMetadata = {
    $type: "yandex.cloud.resourcemanager.v1.DeleteCloudMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCloudMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCloudMetadata);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        message.deleteAfter =
            object.deleteAfter !== undefined && object.deleteAfter !== null
                ? fromJsonTimestamp(object.deleteAfter)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined &&
            (obj.deleteAfter = message.deleteAfter.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteCloudMetadata);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        message.deleteAfter = (_b = object.deleteAfter) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCloudMetadata.$type, exports.DeleteCloudMetadata);
/** A set of methods for managing Cloud resources. */
exports.CloudServiceService = {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cloud_1.Cloud.encode(value).finish()),
        responseDeserialize: (value) => cloud_1.Cloud.decode(value),
    },
    /** Retrieves the list of Cloud resources. */
    list: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCloudsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCloudsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCloudsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCloudsResponse.decode(value),
    },
    /** Creates a cloud in the specified organization. */
    create: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified cloud. */
    update: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified cloud. */
    delete: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified cloud. */
    listOperations: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCloudOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCloudOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCloudOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCloudOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified cloud. */
    listAccessBindings: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified cloud. */
    setAccessBindings: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings: {
        path: "/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CloudServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CloudServiceService, "yandex.cloud.resourcemanager.v1.CloudService");
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
