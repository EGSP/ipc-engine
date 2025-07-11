"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServiceClient = exports.ImageServiceService = exports.ListImageOperationsResponse = exports.ListImageOperationsRequest = exports.DeleteImageMetadata = exports.DeleteImageRequest = exports.UpdateImageMetadata = exports.UpdateImageRequest_LabelsEntry = exports.UpdateImageRequest = exports.CreateImageMetadata = exports.CreateImageRequest_LabelsEntry = exports.CreateImageRequest = exports.ListImagesResponse = exports.ListImagesRequest = exports.GetImageLatestByFamilyRequest = exports.GetImageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const image_1 = require("../../../../yandex/cloud/compute/v1/image");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.compute.v1";
const baseGetImageRequest = {
    $type: "yandex.cloud.compute.v1.GetImageRequest",
    imageId: "",
};
exports.GetImageRequest = {
    $type: "yandex.cloud.compute.v1.GetImageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetImageRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetImageRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetImageRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetImageRequest.$type, exports.GetImageRequest);
const baseGetImageLatestByFamilyRequest = {
    $type: "yandex.cloud.compute.v1.GetImageLatestByFamilyRequest",
    folderId: "",
    family: "",
};
exports.GetImageLatestByFamilyRequest = {
    $type: "yandex.cloud.compute.v1.GetImageLatestByFamilyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.family !== "") {
            writer.uint32(18).string(message.family);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetImageLatestByFamilyRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.family = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetImageLatestByFamilyRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.family =
            object.family !== undefined && object.family !== null
                ? String(object.family)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.family !== undefined && (obj.family = message.family);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetImageLatestByFamilyRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.family = (_b = object.family) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetImageLatestByFamilyRequest.$type, exports.GetImageLatestByFamilyRequest);
const baseListImagesRequest = {
    $type: "yandex.cloud.compute.v1.ListImagesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListImagesRequest = {
    $type: "yandex.cloud.compute.v1.ListImagesRequest",
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
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListImagesRequest);
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
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListImagesRequest);
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
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
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListImagesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImagesRequest.$type, exports.ListImagesRequest);
const baseListImagesResponse = {
    $type: "yandex.cloud.compute.v1.ListImagesResponse",
    nextPageToken: "",
};
exports.ListImagesResponse = {
    $type: "yandex.cloud.compute.v1.ListImagesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.images) {
            image_1.Image.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListImagesResponse);
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(image_1.Image.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListImagesResponse);
        message.images = ((_a = object.images) !== null && _a !== void 0 ? _a : []).map((e) => image_1.Image.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.images) {
            obj.images = message.images.map((e) => (e ? image_1.Image.toJSON(e) : undefined));
        }
        else {
            obj.images = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListImagesResponse);
        message.images = ((_a = object.images) === null || _a === void 0 ? void 0 : _a.map((e) => image_1.Image.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImagesResponse.$type, exports.ListImagesResponse);
const baseCreateImageRequest = {
    $type: "yandex.cloud.compute.v1.CreateImageRequest",
    folderId: "",
    name: "",
    description: "",
    family: "",
    minDiskSize: 0,
    productIds: "",
    pooled: false,
};
exports.CreateImageRequest = {
    $type: "yandex.cloud.compute.v1.CreateImageRequest",
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
            exports.CreateImageRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.family !== "") {
            writer.uint32(42).string(message.family);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(48).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(58).string(v);
        }
        if (message.imageId !== undefined) {
            writer.uint32(66).string(message.imageId);
        }
        if (message.diskId !== undefined) {
            writer.uint32(74).string(message.diskId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(82).string(message.snapshotId);
        }
        if (message.uri !== undefined) {
            writer.uint32(90).string(message.uri);
        }
        if (message.os !== undefined) {
            image_1.Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(136).bool(message.pooled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateImageRequest);
        message.labels = {};
        message.productIds = [];
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
                    const entry4 = exports.CreateImageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.family = reader.string();
                    break;
                case 6:
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.productIds.push(reader.string());
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                case 9:
                    message.diskId = reader.string();
                    break;
                case 10:
                    message.snapshotId = reader.string();
                    break;
                case 11:
                    message.uri = reader.string();
                    break;
                case 12:
                    message.os = image_1.Os.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.pooled = reader.bool();
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
        const message = Object.assign({}, baseCreateImageRequest);
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
        message.family =
            object.family !== undefined && object.family !== null
                ? String(object.family)
                : "";
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        message.productIds = ((_b = object.productIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        message.uri =
            object.uri !== undefined && object.uri !== null
                ? String(object.uri)
                : undefined;
        message.os =
            object.os !== undefined && object.os !== null
                ? image_1.Os.fromJSON(object.os)
                : undefined;
        message.pooled =
            object.pooled !== undefined && object.pooled !== null
                ? Boolean(object.pooled)
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
        message.family !== undefined && (obj.family = message.family);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = Math.round(message.minDiskSize));
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        message.uri !== undefined && (obj.uri = message.uri);
        message.os !== undefined &&
            (obj.os = message.os ? image_1.Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseCreateImageRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.family = (_e = object.family) !== null && _e !== void 0 ? _e : "";
        message.minDiskSize = (_f = object.minDiskSize) !== null && _f !== void 0 ? _f : 0;
        message.productIds = ((_g = object.productIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.imageId = (_h = object.imageId) !== null && _h !== void 0 ? _h : undefined;
        message.diskId = (_j = object.diskId) !== null && _j !== void 0 ? _j : undefined;
        message.snapshotId = (_k = object.snapshotId) !== null && _k !== void 0 ? _k : undefined;
        message.uri = (_l = object.uri) !== null && _l !== void 0 ? _l : undefined;
        message.os =
            object.os !== undefined && object.os !== null
                ? image_1.Os.fromPartial(object.os)
                : undefined;
        message.pooled = (_m = object.pooled) !== null && _m !== void 0 ? _m : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateImageRequest.$type, exports.CreateImageRequest);
const baseCreateImageRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateImageRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateImageRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateImageRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateImageRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateImageRequest_LabelsEntry.$type, exports.CreateImageRequest_LabelsEntry);
const baseCreateImageMetadata = {
    $type: "yandex.cloud.compute.v1.CreateImageMetadata",
    imageId: "",
};
exports.CreateImageMetadata = {
    $type: "yandex.cloud.compute.v1.CreateImageMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateImageMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateImageMetadata);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateImageMetadata);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateImageMetadata.$type, exports.CreateImageMetadata);
const baseUpdateImageRequest = {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest",
    imageId: "",
    name: "",
    description: "",
    minDiskSize: 0,
};
exports.UpdateImageRequest = {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
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
        if (message.minDiskSize !== 0) {
            writer.uint32(40).int64(message.minDiskSize);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateImageRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateImageRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 6:
                    const entry6 = exports.UpdateImageRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateImageRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
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
        message.minDiskSize =
            object.minDiskSize !== undefined && object.minDiskSize !== null
                ? Number(object.minDiskSize)
                : 0;
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = Math.round(message.minDiskSize));
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
        const message = Object.assign({}, baseUpdateImageRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.minDiskSize = (_d = object.minDiskSize) !== null && _d !== void 0 ? _d : 0;
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateImageRequest.$type, exports.UpdateImageRequest);
const baseUpdateImageRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateImageRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateImageRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateImageRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateImageRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateImageRequest_LabelsEntry.$type, exports.UpdateImageRequest_LabelsEntry);
const baseUpdateImageMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateImageMetadata",
    imageId: "",
};
exports.UpdateImageMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateImageMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateImageMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateImageMetadata);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateImageMetadata);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateImageMetadata.$type, exports.UpdateImageMetadata);
const baseDeleteImageRequest = {
    $type: "yandex.cloud.compute.v1.DeleteImageRequest",
    imageId: "",
};
exports.DeleteImageRequest = {
    $type: "yandex.cloud.compute.v1.DeleteImageRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteImageRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteImageRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteImageRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteImageRequest.$type, exports.DeleteImageRequest);
const baseDeleteImageMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteImageMetadata",
    imageId: "",
};
exports.DeleteImageMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteImageMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteImageMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteImageMetadata);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteImageMetadata);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteImageMetadata.$type, exports.DeleteImageMetadata);
const baseListImageOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListImageOperationsRequest",
    imageId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListImageOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListImageOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
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
        const message = Object.assign({}, baseListImageOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
        const message = Object.assign({}, baseListImageOperationsRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
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
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListImageOperationsRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImageOperationsRequest.$type, exports.ListImageOperationsRequest);
const baseListImageOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListImageOperationsResponse",
    nextPageToken: "",
};
exports.ListImageOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListImageOperationsResponse",
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
        const message = Object.assign({}, baseListImageOperationsResponse);
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
        const message = Object.assign({}, baseListImageOperationsResponse);
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
        const message = Object.assign({}, baseListImageOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListImageOperationsResponse.$type, exports.ListImageOperationsResponse);
/** A set of methods for managing Image resources. */
exports.ImageServiceService = {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.ImageService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily: {
        path: "/yandex.cloud.compute.v1.ImageService/GetLatestByFamily",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageLatestByFamilyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageLatestByFamilyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Retrieves the list of Image resources in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.ImageService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImagesResponse.decode(value),
    },
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: "/yandex.cloud.compute.v1.ImageService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified image. */
    update: {
        path: "/yandex.cloud.compute.v1.ImageService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete: {
        path: "/yandex.cloud.compute.v1.ImageService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified image. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.ImageService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImageOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImageOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImageOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImageOperationsResponse.decode(value),
    },
};
exports.ImageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageServiceService, "yandex.cloud.compute.v1.ImageService");
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
