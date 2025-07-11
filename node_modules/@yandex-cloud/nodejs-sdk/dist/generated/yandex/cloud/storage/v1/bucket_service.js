"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketServiceClient = exports.BucketServiceService = exports.DeleteBucketHTTPSConfigMetadata = exports.DeleteBucketHTTPSConfigRequest = exports.SetBucketHTTPSConfigMetadata = exports.SetBucketHTTPSConfigRequest = exports.CertificateManagerHTTPSConfigParams = exports.SelfManagedHTTPSConfigParams = exports.GetBucketHTTPSConfigRequest = exports.GetBucketStatsRequest = exports.DeleteBucketMetadata = exports.DeleteBucketRequest = exports.UpdateBucketMetadata = exports.UpdateBucketRequest = exports.CreateBucketMetadata = exports.CreateBucketRequest = exports.ListBucketsResponse = exports.ListBucketsRequest = exports.GetBucketRequest = exports.getBucketRequest_ViewToJSON = exports.getBucketRequest_ViewFromJSON = exports.GetBucketRequest_View = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const bucket_1 = require("../../../../yandex/cloud/storage/v1/bucket");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const struct_1 = require("../../../../google/protobuf/struct");
exports.protobufPackage = "yandex.cloud.storage.v1";
var GetBucketRequest_View;
(function (GetBucketRequest_View) {
    GetBucketRequest_View[GetBucketRequest_View["VIEW_UNSPECIFIED"] = 0] = "VIEW_UNSPECIFIED";
    /**
     * VIEW_BASIC - Returns basic information about a bucket.
     *
     * The following fields will _not_ be returned: [Bucket.acl], [Bucket.cors], [Bucket.website_settings],
     * [Bucket.lifecycle_rules], [Bucket.tags].
     */
    GetBucketRequest_View[GetBucketRequest_View["VIEW_BASIC"] = 1] = "VIEW_BASIC";
    /**
     * VIEW_ACL - Returns basic information and access control list (ACL) for the bucket.
     *
     * The following fields will _not_ be returned: [Bucket.cors], [Bucket.website_settings], [Bucket.lifecycle_rules],
     * [Bucket.tags].
     */
    GetBucketRequest_View[GetBucketRequest_View["VIEW_ACL"] = 2] = "VIEW_ACL";
    /** VIEW_FULL - Returns full information about a bucket. */
    GetBucketRequest_View[GetBucketRequest_View["VIEW_FULL"] = 3] = "VIEW_FULL";
    GetBucketRequest_View[GetBucketRequest_View["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GetBucketRequest_View = exports.GetBucketRequest_View || (exports.GetBucketRequest_View = {}));
function getBucketRequest_ViewFromJSON(object) {
    switch (object) {
        case 0:
        case "VIEW_UNSPECIFIED":
            return GetBucketRequest_View.VIEW_UNSPECIFIED;
        case 1:
        case "VIEW_BASIC":
            return GetBucketRequest_View.VIEW_BASIC;
        case 2:
        case "VIEW_ACL":
            return GetBucketRequest_View.VIEW_ACL;
        case 3:
        case "VIEW_FULL":
            return GetBucketRequest_View.VIEW_FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GetBucketRequest_View.UNRECOGNIZED;
    }
}
exports.getBucketRequest_ViewFromJSON = getBucketRequest_ViewFromJSON;
function getBucketRequest_ViewToJSON(object) {
    switch (object) {
        case GetBucketRequest_View.VIEW_UNSPECIFIED:
            return "VIEW_UNSPECIFIED";
        case GetBucketRequest_View.VIEW_BASIC:
            return "VIEW_BASIC";
        case GetBucketRequest_View.VIEW_ACL:
            return "VIEW_ACL";
        case GetBucketRequest_View.VIEW_FULL:
            return "VIEW_FULL";
        default:
            return "UNKNOWN";
    }
}
exports.getBucketRequest_ViewToJSON = getBucketRequest_ViewToJSON;
const baseGetBucketRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketRequest",
    name: "",
    view: 0,
};
exports.GetBucketRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBucketRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
        const message = Object.assign({}, baseGetBucketRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.view =
            object.view !== undefined && object.view !== null
                ? getBucketRequest_ViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.view !== undefined &&
            (obj.view = getBucketRequest_ViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetBucketRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.view = (_b = object.view) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBucketRequest.$type, exports.GetBucketRequest);
const baseListBucketsRequest = {
    $type: "yandex.cloud.storage.v1.ListBucketsRequest",
    folderId: "",
};
exports.ListBucketsRequest = {
    $type: "yandex.cloud.storage.v1.ListBucketsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBucketsRequest);
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
        const message = Object.assign({}, baseListBucketsRequest);
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
        const message = Object.assign({}, baseListBucketsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBucketsRequest.$type, exports.ListBucketsRequest);
const baseListBucketsResponse = {
    $type: "yandex.cloud.storage.v1.ListBucketsResponse",
};
exports.ListBucketsResponse = {
    $type: "yandex.cloud.storage.v1.ListBucketsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.buckets) {
            bucket_1.Bucket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBucketsResponse);
        message.buckets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buckets.push(bucket_1.Bucket.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBucketsResponse);
        message.buckets = ((_a = object.buckets) !== null && _a !== void 0 ? _a : []).map((e) => bucket_1.Bucket.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.buckets) {
            obj.buckets = message.buckets.map((e) => e ? bucket_1.Bucket.toJSON(e) : undefined);
        }
        else {
            obj.buckets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBucketsResponse);
        message.buckets = ((_a = object.buckets) === null || _a === void 0 ? void 0 : _a.map((e) => bucket_1.Bucket.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBucketsResponse.$type, exports.ListBucketsResponse);
const baseCreateBucketRequest = {
    $type: "yandex.cloud.storage.v1.CreateBucketRequest",
    name: "",
    folderId: "",
    defaultStorageClass: "",
    maxSize: 0,
};
exports.CreateBucketRequest = {
    $type: "yandex.cloud.storage.v1.CreateBucketRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.defaultStorageClass !== "") {
            writer.uint32(34).string(message.defaultStorageClass);
        }
        if (message.maxSize !== 0) {
            writer.uint32(40).int64(message.maxSize);
        }
        if (message.anonymousAccessFlags !== undefined) {
            bucket_1.AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(50).fork()).ldelim();
        }
        if (message.acl !== undefined) {
            bucket_1.ACL.encode(message.acl, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.tags) {
            bucket_1.Tag.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBucketRequest);
        message.tags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.defaultStorageClass = reader.string();
                    break;
                case 5:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 6:
                    message.anonymousAccessFlags = bucket_1.AnonymousAccessFlags.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.acl = bucket_1.ACL.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tags.push(bucket_1.Tag.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseCreateBucketRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined &&
                object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : "";
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : 0;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? bucket_1.AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? bucket_1.ACL.fromJSON(object.acl)
                : undefined;
        message.tags = ((_a = object.tags) !== null && _a !== void 0 ? _a : []).map((e) => bucket_1.Tag.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.defaultStorageClass !== undefined &&
            (obj.defaultStorageClass = message.defaultStorageClass);
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        message.anonymousAccessFlags !== undefined &&
            (obj.anonymousAccessFlags = message.anonymousAccessFlags
                ? bucket_1.AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
                : undefined);
        message.acl !== undefined &&
            (obj.acl = message.acl ? bucket_1.ACL.toJSON(message.acl) : undefined);
        if (message.tags) {
            obj.tags = message.tags.map((e) => (e ? bucket_1.Tag.toJSON(e) : undefined));
        }
        else {
            obj.tags = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateBucketRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.defaultStorageClass = (_c = object.defaultStorageClass) !== null && _c !== void 0 ? _c : "";
        message.maxSize = (_d = object.maxSize) !== null && _d !== void 0 ? _d : 0;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? bucket_1.AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? bucket_1.ACL.fromPartial(object.acl)
                : undefined;
        message.tags = ((_e = object.tags) === null || _e === void 0 ? void 0 : _e.map((e) => bucket_1.Tag.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBucketRequest.$type, exports.CreateBucketRequest);
const baseCreateBucketMetadata = {
    $type: "yandex.cloud.storage.v1.CreateBucketMetadata",
    name: "",
};
exports.CreateBucketMetadata = {
    $type: "yandex.cloud.storage.v1.CreateBucketMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBucketMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseCreateBucketMetadata);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateBucketMetadata);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBucketMetadata.$type, exports.CreateBucketMetadata);
const baseUpdateBucketRequest = {
    $type: "yandex.cloud.storage.v1.UpdateBucketRequest",
    name: "",
    defaultStorageClass: "",
    maxSize: 0,
    versioning: 0,
};
exports.UpdateBucketRequest = {
    $type: "yandex.cloud.storage.v1.UpdateBucketRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.anonymousAccessFlags !== undefined) {
            bucket_1.AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaultStorageClass !== "") {
            writer.uint32(34).string(message.defaultStorageClass);
        }
        if (message.maxSize !== 0) {
            writer.uint32(40).int64(message.maxSize);
        }
        for (const v of message.cors) {
            bucket_1.CorsRule.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.websiteSettings !== undefined) {
            bucket_1.WebsiteSettings.encode(message.websiteSettings, writer.uint32(58).fork()).ldelim();
        }
        if (message.versioning !== 0) {
            writer.uint32(64).int32(message.versioning);
        }
        for (const v of message.lifecycleRules) {
            bucket_1.LifecycleRule.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.policy !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.policy), writer.uint32(82).fork()).ldelim();
        }
        if (message.acl !== undefined) {
            bucket_1.ACL.encode(message.acl, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.tags) {
            bucket_1.Tag.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.objectLock !== undefined) {
            bucket_1.ObjectLock.encode(message.objectLock, writer.uint32(106).fork()).ldelim();
        }
        if (message.encryption !== undefined) {
            bucket_1.Encryption.encode(message.encryption, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBucketRequest);
        message.cors = [];
        message.lifecycleRules = [];
        message.tags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.anonymousAccessFlags = bucket_1.AnonymousAccessFlags.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.defaultStorageClass = reader.string();
                    break;
                case 5:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 6:
                    message.cors.push(bucket_1.CorsRule.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.websiteSettings = bucket_1.WebsiteSettings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.versioning = reader.int32();
                    break;
                case 9:
                    message.lifecycleRules.push(bucket_1.LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.policy = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.acl = bucket_1.ACL.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.tags.push(bucket_1.Tag.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.objectLock = bucket_1.ObjectLock.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.encryption = bucket_1.Encryption.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateBucketRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? bucket_1.AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined &&
                object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : "";
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : 0;
        message.cors = ((_a = object.cors) !== null && _a !== void 0 ? _a : []).map((e) => bucket_1.CorsRule.fromJSON(e));
        message.websiteSettings =
            object.websiteSettings !== undefined && object.websiteSettings !== null
                ? bucket_1.WebsiteSettings.fromJSON(object.websiteSettings)
                : undefined;
        message.versioning =
            object.versioning !== undefined && object.versioning !== null
                ? (0, bucket_1.versioningFromJSON)(object.versioning)
                : 0;
        message.lifecycleRules = ((_b = object.lifecycleRules) !== null && _b !== void 0 ? _b : []).map((e) => bucket_1.LifecycleRule.fromJSON(e));
        message.policy =
            typeof object.policy === "object" ? object.policy : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? bucket_1.ACL.fromJSON(object.acl)
                : undefined;
        message.tags = ((_c = object.tags) !== null && _c !== void 0 ? _c : []).map((e) => bucket_1.Tag.fromJSON(e));
        message.objectLock =
            object.objectLock !== undefined && object.objectLock !== null
                ? bucket_1.ObjectLock.fromJSON(object.objectLock)
                : undefined;
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? bucket_1.Encryption.fromJSON(object.encryption)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.anonymousAccessFlags !== undefined &&
            (obj.anonymousAccessFlags = message.anonymousAccessFlags
                ? bucket_1.AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
                : undefined);
        message.defaultStorageClass !== undefined &&
            (obj.defaultStorageClass = message.defaultStorageClass);
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        if (message.cors) {
            obj.cors = message.cors.map((e) => (e ? bucket_1.CorsRule.toJSON(e) : undefined));
        }
        else {
            obj.cors = [];
        }
        message.websiteSettings !== undefined &&
            (obj.websiteSettings = message.websiteSettings
                ? bucket_1.WebsiteSettings.toJSON(message.websiteSettings)
                : undefined);
        message.versioning !== undefined &&
            (obj.versioning = (0, bucket_1.versioningToJSON)(message.versioning));
        if (message.lifecycleRules) {
            obj.lifecycleRules = message.lifecycleRules.map((e) => e ? bucket_1.LifecycleRule.toJSON(e) : undefined);
        }
        else {
            obj.lifecycleRules = [];
        }
        message.policy !== undefined && (obj.policy = message.policy);
        message.acl !== undefined &&
            (obj.acl = message.acl ? bucket_1.ACL.toJSON(message.acl) : undefined);
        if (message.tags) {
            obj.tags = message.tags.map((e) => (e ? bucket_1.Tag.toJSON(e) : undefined));
        }
        else {
            obj.tags = [];
        }
        message.objectLock !== undefined &&
            (obj.objectLock = message.objectLock
                ? bucket_1.ObjectLock.toJSON(message.objectLock)
                : undefined);
        message.encryption !== undefined &&
            (obj.encryption = message.encryption
                ? bucket_1.Encryption.toJSON(message.encryption)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseUpdateBucketRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? bucket_1.AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass = (_b = object.defaultStorageClass) !== null && _b !== void 0 ? _b : "";
        message.maxSize = (_c = object.maxSize) !== null && _c !== void 0 ? _c : 0;
        message.cors = ((_d = object.cors) === null || _d === void 0 ? void 0 : _d.map((e) => bucket_1.CorsRule.fromPartial(e))) || [];
        message.websiteSettings =
            object.websiteSettings !== undefined && object.websiteSettings !== null
                ? bucket_1.WebsiteSettings.fromPartial(object.websiteSettings)
                : undefined;
        message.versioning = (_e = object.versioning) !== null && _e !== void 0 ? _e : 0;
        message.lifecycleRules =
            ((_f = object.lifecycleRules) === null || _f === void 0 ? void 0 : _f.map((e) => bucket_1.LifecycleRule.fromPartial(e))) || [];
        message.policy = (_g = object.policy) !== null && _g !== void 0 ? _g : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? bucket_1.ACL.fromPartial(object.acl)
                : undefined;
        message.tags = ((_h = object.tags) === null || _h === void 0 ? void 0 : _h.map((e) => bucket_1.Tag.fromPartial(e))) || [];
        message.objectLock =
            object.objectLock !== undefined && object.objectLock !== null
                ? bucket_1.ObjectLock.fromPartial(object.objectLock)
                : undefined;
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? bucket_1.Encryption.fromPartial(object.encryption)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBucketRequest.$type, exports.UpdateBucketRequest);
const baseUpdateBucketMetadata = {
    $type: "yandex.cloud.storage.v1.UpdateBucketMetadata",
    name: "",
};
exports.UpdateBucketMetadata = {
    $type: "yandex.cloud.storage.v1.UpdateBucketMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateBucketMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseUpdateBucketMetadata);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateBucketMetadata);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBucketMetadata.$type, exports.UpdateBucketMetadata);
const baseDeleteBucketRequest = {
    $type: "yandex.cloud.storage.v1.DeleteBucketRequest",
    name: "",
};
exports.DeleteBucketRequest = {
    $type: "yandex.cloud.storage.v1.DeleteBucketRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBucketRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteBucketRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBucketRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBucketRequest.$type, exports.DeleteBucketRequest);
const baseDeleteBucketMetadata = {
    $type: "yandex.cloud.storage.v1.DeleteBucketMetadata",
    name: "",
};
exports.DeleteBucketMetadata = {
    $type: "yandex.cloud.storage.v1.DeleteBucketMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBucketMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteBucketMetadata);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBucketMetadata);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBucketMetadata.$type, exports.DeleteBucketMetadata);
const baseGetBucketStatsRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketStatsRequest",
    name: "",
};
exports.GetBucketStatsRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketStatsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBucketStatsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetBucketStatsRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBucketStatsRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBucketStatsRequest.$type, exports.GetBucketStatsRequest);
const baseGetBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest",
    name: "",
};
exports.GetBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBucketHTTPSConfigRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseGetBucketHTTPSConfigRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBucketHTTPSConfigRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBucketHTTPSConfigRequest.$type, exports.GetBucketHTTPSConfigRequest);
const baseSelfManagedHTTPSConfigParams = {
    $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams",
    certificatePem: "",
    privateKeyPem: "",
};
exports.SelfManagedHTTPSConfigParams = {
    $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificatePem !== "") {
            writer.uint32(10).string(message.certificatePem);
        }
        if (message.privateKeyPem !== "") {
            writer.uint32(18).string(message.privateKeyPem);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSelfManagedHTTPSConfigParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificatePem = reader.string();
                    break;
                case 2:
                    message.privateKeyPem = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSelfManagedHTTPSConfigParams);
        message.certificatePem =
            object.certificatePem !== undefined && object.certificatePem !== null
                ? String(object.certificatePem)
                : "";
        message.privateKeyPem =
            object.privateKeyPem !== undefined && object.privateKeyPem !== null
                ? String(object.privateKeyPem)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificatePem !== undefined &&
            (obj.certificatePem = message.certificatePem);
        message.privateKeyPem !== undefined &&
            (obj.privateKeyPem = message.privateKeyPem);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSelfManagedHTTPSConfigParams);
        message.certificatePem = (_a = object.certificatePem) !== null && _a !== void 0 ? _a : "";
        message.privateKeyPem = (_b = object.privateKeyPem) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SelfManagedHTTPSConfigParams.$type, exports.SelfManagedHTTPSConfigParams);
const baseCertificateManagerHTTPSConfigParams = {
    $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams",
    certificateId: "",
};
exports.CertificateManagerHTTPSConfigParams = {
    $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificateManagerHTTPSConfigParams);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCertificateManagerHTTPSConfigParams);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCertificateManagerHTTPSConfigParams);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CertificateManagerHTTPSConfigParams.$type, exports.CertificateManagerHTTPSConfigParams);
const baseSetBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest",
    name: "",
};
exports.SetBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.selfManaged !== undefined) {
            exports.SelfManagedHTTPSConfigParams.encode(message.selfManaged, writer.uint32(18).fork()).ldelim();
        }
        if (message.certificateManager !== undefined) {
            exports.CertificateManagerHTTPSConfigParams.encode(message.certificateManager, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetBucketHTTPSConfigRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.selfManaged = exports.SelfManagedHTTPSConfigParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.certificateManager =
                        exports.CertificateManagerHTTPSConfigParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetBucketHTTPSConfigRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.selfManaged =
            object.selfManaged !== undefined && object.selfManaged !== null
                ? exports.SelfManagedHTTPSConfigParams.fromJSON(object.selfManaged)
                : undefined;
        message.certificateManager =
            object.certificateManager !== undefined &&
                object.certificateManager !== null
                ? exports.CertificateManagerHTTPSConfigParams.fromJSON(object.certificateManager)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.selfManaged !== undefined &&
            (obj.selfManaged = message.selfManaged
                ? exports.SelfManagedHTTPSConfigParams.toJSON(message.selfManaged)
                : undefined);
        message.certificateManager !== undefined &&
            (obj.certificateManager = message.certificateManager
                ? exports.CertificateManagerHTTPSConfigParams.toJSON(message.certificateManager)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetBucketHTTPSConfigRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.selfManaged =
            object.selfManaged !== undefined && object.selfManaged !== null
                ? exports.SelfManagedHTTPSConfigParams.fromPartial(object.selfManaged)
                : undefined;
        message.certificateManager =
            object.certificateManager !== undefined &&
                object.certificateManager !== null
                ? exports.CertificateManagerHTTPSConfigParams.fromPartial(object.certificateManager)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetBucketHTTPSConfigRequest.$type, exports.SetBucketHTTPSConfigRequest);
const baseSetBucketHTTPSConfigMetadata = {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata",
    name: "",
};
exports.SetBucketHTTPSConfigMetadata = {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetBucketHTTPSConfigMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseSetBucketHTTPSConfigMetadata);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetBucketHTTPSConfigMetadata);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetBucketHTTPSConfigMetadata.$type, exports.SetBucketHTTPSConfigMetadata);
const baseDeleteBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest",
    name: "",
};
exports.DeleteBucketHTTPSConfigRequest = {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigRequest);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigRequest);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBucketHTTPSConfigRequest.$type, exports.DeleteBucketHTTPSConfigRequest);
const baseDeleteBucketHTTPSConfigMetadata = {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata",
    name: "",
};
exports.DeleteBucketHTTPSConfigMetadata = {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigMetadata);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBucketHTTPSConfigMetadata);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBucketHTTPSConfigMetadata.$type, exports.DeleteBucketHTTPSConfigMetadata);
/** A set of methods for managing buckets. */
exports.BucketServiceService = {
    /**
     * Retrieves the list of buckets in the specified folder.
     *
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list: {
        path: "/yandex.cloud.storage.v1.BucketService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBucketsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBucketsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBucketsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBucketsResponse.decode(value),
    },
    /**
     * Returns the specified bucket.
     *
     * To get the list of all available buckets, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.storage.v1.BucketService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBucketRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBucketRequest.decode(value),
        responseSerialize: (value) => Buffer.from(bucket_1.Bucket.encode(value).finish()),
        responseDeserialize: (value) => bucket_1.Bucket.decode(value),
    },
    /** Creates a bucket in the specified folder. */
    create: {
        path: "/yandex.cloud.storage.v1.BucketService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateBucketRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateBucketRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified bucket.
     *
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    update: {
        path: "/yandex.cloud.storage.v1.BucketService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBucketRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBucketRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified bucket. */
    delete: {
        path: "/yandex.cloud.storage.v1.BucketService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBucketRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBucketRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the statistics for the specified bucket. */
    getStats: {
        path: "/yandex.cloud.storage.v1.BucketService/GetStats",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBucketStatsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBucketStatsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(bucket_1.BucketStats.encode(value).finish()),
        responseDeserialize: (value) => bucket_1.BucketStats.decode(value),
    },
    /** Returns the HTTPS configuration for the specified bucket. */
    getHTTPSConfig: {
        path: "/yandex.cloud.storage.v1.BucketService/GetHTTPSConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(bucket_1.HTTPSConfig.encode(value).finish()),
        responseDeserialize: (value) => bucket_1.HTTPSConfig.decode(value),
    },
    /**
     * Updates the HTTPS configuration for the specified bucket.
     *
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig: {
        path: "/yandex.cloud.storage.v1.BucketService/SetHTTPSConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the HTTPS configuration for the specified bucket. */
    deleteHTTPSConfig: {
        path: "/yandex.cloud.storage.v1.BucketService/DeleteHTTPSConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBucketHTTPSConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBucketHTTPSConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.BucketServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BucketServiceService, "yandex.cloud.storage.v1.BucketService");
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
