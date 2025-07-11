"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectLock = exports.HTTPSConfig = exports.BucketStats = exports.CountersByClass = exports.SizeByClass = exports.OptionalSizeByClass = exports.Counters = exports.LifecycleRule_RuleFilter = exports.LifecycleRule_Expiration = exports.LifecycleRule_Transition = exports.LifecycleRule_NoncurrentTransition = exports.LifecycleRule_NoncurrentExpiration = exports.LifecycleRule_AfterDays = exports.LifecycleRule = exports.WebsiteSettings_RoutingRule = exports.WebsiteSettings_Redirect = exports.WebsiteSettings_Condition = exports.WebsiteSettings_Scheme = exports.WebsiteSettings = exports.CorsRule = exports.AnonymousAccessFlags = exports.ACL_Grant = exports.ACL = exports.Tag = exports.Bucket = exports.objectLock_DefaultRetention_ModeToJSON = exports.objectLock_DefaultRetention_ModeFromJSON = exports.ObjectLock_DefaultRetention_Mode = exports.objectLock_ObjectLockStatusToJSON = exports.objectLock_ObjectLockStatusFromJSON = exports.ObjectLock_ObjectLockStatus = exports.hTTPSConfig_SourceTypeToJSON = exports.hTTPSConfig_SourceTypeFromJSON = exports.HTTPSConfig_SourceType = exports.websiteSettings_ProtocolToJSON = exports.websiteSettings_ProtocolFromJSON = exports.WebsiteSettings_Protocol = exports.corsRule_MethodToJSON = exports.corsRule_MethodFromJSON = exports.CorsRule_Method = exports.aCL_Grant_GrantTypeToJSON = exports.aCL_Grant_GrantTypeFromJSON = exports.ACL_Grant_GrantType = exports.aCL_Grant_PermissionToJSON = exports.aCL_Grant_PermissionFromJSON = exports.ACL_Grant_Permission = exports.versioningToJSON = exports.versioningFromJSON = exports.Versioning = exports.protobufPackage = void 0;
exports.Encryption_EncryptionRule = exports.Encryption = exports.ObjectLock_DefaultRetention = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const struct_1 = require("../../../../google/protobuf/struct");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.storage.v1";
var Versioning;
(function (Versioning) {
    Versioning[Versioning["VERSIONING_UNSPECIFIED"] = 0] = "VERSIONING_UNSPECIFIED";
    /**
     * VERSIONING_DISABLED - The bucket is unversioned, i.e. versioning has never been enabled for the bucket, including at its creation.
     * Objects that are stored in the bucket have a version ID of `null`.
     *
     * To enable versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request. Note that this
     * action is irreversible, and a bucket with versioning enabled can never return to `VERSIONING_DISABLED` state.
     */
    Versioning[Versioning["VERSIONING_DISABLED"] = 1] = "VERSIONING_DISABLED";
    /**
     * VERSIONING_ENABLED - Bucket versioning is enabled, i.e. all new objects are versioned and given a unique version ID, and objects that
     * already existed at the time versioning was enabled will be versioned and given a unique version ID when modified
     * by future requests.
     *
     * To suspend versioning, change status to `VERSIONING_SUSPENDED` via a [BucketService.Update] request. You cannot
     * disable versioning altogether for a bucket that already had it enabled; objects that had version IDs will keep
     * them.
     */
    Versioning[Versioning["VERSIONING_ENABLED"] = 2] = "VERSIONING_ENABLED";
    /**
     * VERSIONING_SUSPENDED - Bucket versioning is suspended, i.e. new objects are not versioned, but objects that already existed at the time
     * versioning was suspended are still versioned and keep their version IDs.
     *
     * To resume versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request.
     */
    Versioning[Versioning["VERSIONING_SUSPENDED"] = 3] = "VERSIONING_SUSPENDED";
    Versioning[Versioning["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Versioning = exports.Versioning || (exports.Versioning = {}));
function versioningFromJSON(object) {
    switch (object) {
        case 0:
        case "VERSIONING_UNSPECIFIED":
            return Versioning.VERSIONING_UNSPECIFIED;
        case 1:
        case "VERSIONING_DISABLED":
            return Versioning.VERSIONING_DISABLED;
        case 2:
        case "VERSIONING_ENABLED":
            return Versioning.VERSIONING_ENABLED;
        case 3:
        case "VERSIONING_SUSPENDED":
            return Versioning.VERSIONING_SUSPENDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Versioning.UNRECOGNIZED;
    }
}
exports.versioningFromJSON = versioningFromJSON;
function versioningToJSON(object) {
    switch (object) {
        case Versioning.VERSIONING_UNSPECIFIED:
            return "VERSIONING_UNSPECIFIED";
        case Versioning.VERSIONING_DISABLED:
            return "VERSIONING_DISABLED";
        case Versioning.VERSIONING_ENABLED:
            return "VERSIONING_ENABLED";
        case Versioning.VERSIONING_SUSPENDED:
            return "VERSIONING_SUSPENDED";
        default:
            return "UNKNOWN";
    }
}
exports.versioningToJSON = versioningToJSON;
var ACL_Grant_Permission;
(function (ACL_Grant_Permission) {
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_UNSPECIFIED"] = 0] = "PERMISSION_UNSPECIFIED";
    /**
     * PERMISSION_FULL_CONTROL - Allows grantee the `PERMISSION_WRITE`, `PERMISSION_WRITE_ACP`, `PERMISSION_READ`, and `PERMISSION_READ_ACP`
     * on the bucket.
     *
     * Maps to `x-amz-grant-full-control` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_FULL_CONTROL"] = 1] = "PERMISSION_FULL_CONTROL";
    /**
     * PERMISSION_WRITE - Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also
     * allows deletions and overwrites of those objects.
     *
     * Maps to `x-amz-grant-write` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
     * S3-compatible HTTP API.
     */
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_WRITE"] = 2] = "PERMISSION_WRITE";
    /**
     * PERMISSION_WRITE_ACP - Allows grantee to write the ACL for the bucket.
     *
     * Maps to `x-amz-grant-write-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_WRITE_ACP"] = 3] = "PERMISSION_WRITE_ACP";
    /**
     * PERMISSION_READ - Allows grantee to list the objects in the bucket.
     *
     * Maps to `x-amz-grant-read` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
     * S3-compatible HTTP API.
     */
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_READ"] = 4] = "PERMISSION_READ";
    /**
     * PERMISSION_READ_ACP - Allows grantee to read the bucket ACL
     *
     * Maps to `x-amz-grant-read-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    ACL_Grant_Permission[ACL_Grant_Permission["PERMISSION_READ_ACP"] = 5] = "PERMISSION_READ_ACP";
    ACL_Grant_Permission[ACL_Grant_Permission["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ACL_Grant_Permission = exports.ACL_Grant_Permission || (exports.ACL_Grant_Permission = {}));
function aCL_Grant_PermissionFromJSON(object) {
    switch (object) {
        case 0:
        case "PERMISSION_UNSPECIFIED":
            return ACL_Grant_Permission.PERMISSION_UNSPECIFIED;
        case 1:
        case "PERMISSION_FULL_CONTROL":
            return ACL_Grant_Permission.PERMISSION_FULL_CONTROL;
        case 2:
        case "PERMISSION_WRITE":
            return ACL_Grant_Permission.PERMISSION_WRITE;
        case 3:
        case "PERMISSION_WRITE_ACP":
            return ACL_Grant_Permission.PERMISSION_WRITE_ACP;
        case 4:
        case "PERMISSION_READ":
            return ACL_Grant_Permission.PERMISSION_READ;
        case 5:
        case "PERMISSION_READ_ACP":
            return ACL_Grant_Permission.PERMISSION_READ_ACP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ACL_Grant_Permission.UNRECOGNIZED;
    }
}
exports.aCL_Grant_PermissionFromJSON = aCL_Grant_PermissionFromJSON;
function aCL_Grant_PermissionToJSON(object) {
    switch (object) {
        case ACL_Grant_Permission.PERMISSION_UNSPECIFIED:
            return "PERMISSION_UNSPECIFIED";
        case ACL_Grant_Permission.PERMISSION_FULL_CONTROL:
            return "PERMISSION_FULL_CONTROL";
        case ACL_Grant_Permission.PERMISSION_WRITE:
            return "PERMISSION_WRITE";
        case ACL_Grant_Permission.PERMISSION_WRITE_ACP:
            return "PERMISSION_WRITE_ACP";
        case ACL_Grant_Permission.PERMISSION_READ:
            return "PERMISSION_READ";
        case ACL_Grant_Permission.PERMISSION_READ_ACP:
            return "PERMISSION_READ_ACP";
        default:
            return "UNKNOWN";
    }
}
exports.aCL_Grant_PermissionToJSON = aCL_Grant_PermissionToJSON;
var ACL_Grant_GrantType;
(function (ACL_Grant_GrantType) {
    ACL_Grant_GrantType[ACL_Grant_GrantType["GRANT_TYPE_UNSPECIFIED"] = 0] = "GRANT_TYPE_UNSPECIFIED";
    /**
     * GRANT_TYPE_ACCOUNT - A grantee is an [account on the platform](/docs/iam/concepts/#accounts).
     *
     * For this grantee type, you need to specify the user ID in [Bucket.acl.grants.grantee_id] field. To get user ID, see
     * [instruction](/docs/iam/operations/users/get).
     *
     * Maps to using `id="*"` value for `x-amz-grant-*` header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput)
     * method of Amazon S3-compatible HTTP API).
     */
    ACL_Grant_GrantType[ACL_Grant_GrantType["GRANT_TYPE_ACCOUNT"] = 1] = "GRANT_TYPE_ACCOUNT";
    /**
     * GRANT_TYPE_ALL_AUTHENTICATED_USERS - Grantees are all authenticated users, both from your clouds and other users' clouds. Access
     * permission to this group allows any account on the platform to access the resource via a signed (authenticated)
     * request.
     *
     * Maps to using `uri="http://acs.amazonaws.com/groups/global/AuthenticatedUsers"` value for `x-amz-grant-*`
     * header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
     */
    ACL_Grant_GrantType[ACL_Grant_GrantType["GRANT_TYPE_ALL_AUTHENTICATED_USERS"] = 2] = "GRANT_TYPE_ALL_AUTHENTICATED_USERS";
    /**
     * GRANT_TYPE_ALL_USERS - Grantees are all internet users. Access permission to this group allows anyone in the world access to the
     * resource via signed (authenticated) or unsigned (anonymous) requests.
     *
     * Maps to using `uri="http://acs.amazonaws.com/groups/global/AllUsers"` value for `x-amz-grant-*` header
     * ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
     */
    ACL_Grant_GrantType[ACL_Grant_GrantType["GRANT_TYPE_ALL_USERS"] = 3] = "GRANT_TYPE_ALL_USERS";
    ACL_Grant_GrantType[ACL_Grant_GrantType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ACL_Grant_GrantType = exports.ACL_Grant_GrantType || (exports.ACL_Grant_GrantType = {}));
function aCL_Grant_GrantTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "GRANT_TYPE_UNSPECIFIED":
            return ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED;
        case 1:
        case "GRANT_TYPE_ACCOUNT":
            return ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT;
        case 2:
        case "GRANT_TYPE_ALL_AUTHENTICATED_USERS":
            return ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS;
        case 3:
        case "GRANT_TYPE_ALL_USERS":
            return ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ACL_Grant_GrantType.UNRECOGNIZED;
    }
}
exports.aCL_Grant_GrantTypeFromJSON = aCL_Grant_GrantTypeFromJSON;
function aCL_Grant_GrantTypeToJSON(object) {
    switch (object) {
        case ACL_Grant_GrantType.GRANT_TYPE_UNSPECIFIED:
            return "GRANT_TYPE_UNSPECIFIED";
        case ACL_Grant_GrantType.GRANT_TYPE_ACCOUNT:
            return "GRANT_TYPE_ACCOUNT";
        case ACL_Grant_GrantType.GRANT_TYPE_ALL_AUTHENTICATED_USERS:
            return "GRANT_TYPE_ALL_AUTHENTICATED_USERS";
        case ACL_Grant_GrantType.GRANT_TYPE_ALL_USERS:
            return "GRANT_TYPE_ALL_USERS";
        default:
            return "UNKNOWN";
    }
}
exports.aCL_Grant_GrantTypeToJSON = aCL_Grant_GrantTypeToJSON;
/**
 * List of HTTP methods that are allowed by the CORS rule.
 *
 * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
 * S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against the
 * list of the allowed methods. If there is a match, all the allowed methods are listed in the
 * `Access-Control-Allow-Methods` header of the response.
 */
var CorsRule_Method;
(function (CorsRule_Method) {
    CorsRule_Method[CorsRule_Method["METHOD_UNSPECIFIED"] = 0] = "METHOD_UNSPECIFIED";
    /** METHOD_GET - HTTP `GET` method. */
    CorsRule_Method[CorsRule_Method["METHOD_GET"] = 1] = "METHOD_GET";
    /** METHOD_HEAD - HTTP `HEAD` method. */
    CorsRule_Method[CorsRule_Method["METHOD_HEAD"] = 2] = "METHOD_HEAD";
    /** METHOD_POST - HTTP `POST` method. */
    CorsRule_Method[CorsRule_Method["METHOD_POST"] = 3] = "METHOD_POST";
    /** METHOD_PUT - HTTP `PUT` method. */
    CorsRule_Method[CorsRule_Method["METHOD_PUT"] = 4] = "METHOD_PUT";
    /** METHOD_DELETE - HTTP `DELETE` method. */
    CorsRule_Method[CorsRule_Method["METHOD_DELETE"] = 5] = "METHOD_DELETE";
    CorsRule_Method[CorsRule_Method["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CorsRule_Method = exports.CorsRule_Method || (exports.CorsRule_Method = {}));
function corsRule_MethodFromJSON(object) {
    switch (object) {
        case 0:
        case "METHOD_UNSPECIFIED":
            return CorsRule_Method.METHOD_UNSPECIFIED;
        case 1:
        case "METHOD_GET":
            return CorsRule_Method.METHOD_GET;
        case 2:
        case "METHOD_HEAD":
            return CorsRule_Method.METHOD_HEAD;
        case 3:
        case "METHOD_POST":
            return CorsRule_Method.METHOD_POST;
        case 4:
        case "METHOD_PUT":
            return CorsRule_Method.METHOD_PUT;
        case 5:
        case "METHOD_DELETE":
            return CorsRule_Method.METHOD_DELETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CorsRule_Method.UNRECOGNIZED;
    }
}
exports.corsRule_MethodFromJSON = corsRule_MethodFromJSON;
function corsRule_MethodToJSON(object) {
    switch (object) {
        case CorsRule_Method.METHOD_UNSPECIFIED:
            return "METHOD_UNSPECIFIED";
        case CorsRule_Method.METHOD_GET:
            return "METHOD_GET";
        case CorsRule_Method.METHOD_HEAD:
            return "METHOD_HEAD";
        case CorsRule_Method.METHOD_POST:
            return "METHOD_POST";
        case CorsRule_Method.METHOD_PUT:
            return "METHOD_PUT";
        case CorsRule_Method.METHOD_DELETE:
            return "METHOD_DELETE";
        default:
            return "UNKNOWN";
    }
}
exports.corsRule_MethodToJSON = corsRule_MethodToJSON;
var WebsiteSettings_Protocol;
(function (WebsiteSettings_Protocol) {
    WebsiteSettings_Protocol[WebsiteSettings_Protocol["PROTOCOL_UNSPECIFIED"] = 0] = "PROTOCOL_UNSPECIFIED";
    /** PROTOCOL_HTTP - `http` scheme. */
    WebsiteSettings_Protocol[WebsiteSettings_Protocol["PROTOCOL_HTTP"] = 1] = "PROTOCOL_HTTP";
    /** PROTOCOL_HTTPS - `https` scheme. */
    WebsiteSettings_Protocol[WebsiteSettings_Protocol["PROTOCOL_HTTPS"] = 2] = "PROTOCOL_HTTPS";
    WebsiteSettings_Protocol[WebsiteSettings_Protocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WebsiteSettings_Protocol = exports.WebsiteSettings_Protocol || (exports.WebsiteSettings_Protocol = {}));
function websiteSettings_ProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case "PROTOCOL_UNSPECIFIED":
            return WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED;
        case 1:
        case "PROTOCOL_HTTP":
            return WebsiteSettings_Protocol.PROTOCOL_HTTP;
        case 2:
        case "PROTOCOL_HTTPS":
            return WebsiteSettings_Protocol.PROTOCOL_HTTPS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return WebsiteSettings_Protocol.UNRECOGNIZED;
    }
}
exports.websiteSettings_ProtocolFromJSON = websiteSettings_ProtocolFromJSON;
function websiteSettings_ProtocolToJSON(object) {
    switch (object) {
        case WebsiteSettings_Protocol.PROTOCOL_UNSPECIFIED:
            return "PROTOCOL_UNSPECIFIED";
        case WebsiteSettings_Protocol.PROTOCOL_HTTP:
            return "PROTOCOL_HTTP";
        case WebsiteSettings_Protocol.PROTOCOL_HTTPS:
            return "PROTOCOL_HTTPS";
        default:
            return "UNKNOWN";
    }
}
exports.websiteSettings_ProtocolToJSON = websiteSettings_ProtocolToJSON;
/** A resource for type of TLS certificate source. */
var HTTPSConfig_SourceType;
(function (HTTPSConfig_SourceType) {
    HTTPSConfig_SourceType[HTTPSConfig_SourceType["SOURCE_TYPE_UNSPECIFIED"] = 0] = "SOURCE_TYPE_UNSPECIFIED";
    /** SOURCE_TYPE_SELF_MANAGED - Your certificate, uploaded directly. */
    HTTPSConfig_SourceType[HTTPSConfig_SourceType["SOURCE_TYPE_SELF_MANAGED"] = 1] = "SOURCE_TYPE_SELF_MANAGED";
    /** SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER - Certificate managed by Certificate Manager. */
    HTTPSConfig_SourceType[HTTPSConfig_SourceType["SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER"] = 2] = "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER";
    HTTPSConfig_SourceType[HTTPSConfig_SourceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HTTPSConfig_SourceType = exports.HTTPSConfig_SourceType || (exports.HTTPSConfig_SourceType = {}));
function hTTPSConfig_SourceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SOURCE_TYPE_UNSPECIFIED":
            return HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED;
        case 1:
        case "SOURCE_TYPE_SELF_MANAGED":
            return HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED;
        case 2:
        case "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER":
            return HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HTTPSConfig_SourceType.UNRECOGNIZED;
    }
}
exports.hTTPSConfig_SourceTypeFromJSON = hTTPSConfig_SourceTypeFromJSON;
function hTTPSConfig_SourceTypeToJSON(object) {
    switch (object) {
        case HTTPSConfig_SourceType.SOURCE_TYPE_UNSPECIFIED:
            return "SOURCE_TYPE_UNSPECIFIED";
        case HTTPSConfig_SourceType.SOURCE_TYPE_SELF_MANAGED:
            return "SOURCE_TYPE_SELF_MANAGED";
        case HTTPSConfig_SourceType.SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER:
            return "SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER";
        default:
            return "UNKNOWN";
    }
}
exports.hTTPSConfig_SourceTypeToJSON = hTTPSConfig_SourceTypeToJSON;
/** Activity status of the object lock settings on the bucket */
var ObjectLock_ObjectLockStatus;
(function (ObjectLock_ObjectLockStatus) {
    ObjectLock_ObjectLockStatus[ObjectLock_ObjectLockStatus["OBJECT_LOCK_STATUS_UNSPECIFIED"] = 0] = "OBJECT_LOCK_STATUS_UNSPECIFIED";
    ObjectLock_ObjectLockStatus[ObjectLock_ObjectLockStatus["OBJECT_LOCK_STATUS_DISABLED"] = 1] = "OBJECT_LOCK_STATUS_DISABLED";
    ObjectLock_ObjectLockStatus[ObjectLock_ObjectLockStatus["OBJECT_LOCK_STATUS_ENABLED"] = 2] = "OBJECT_LOCK_STATUS_ENABLED";
    ObjectLock_ObjectLockStatus[ObjectLock_ObjectLockStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ObjectLock_ObjectLockStatus = exports.ObjectLock_ObjectLockStatus || (exports.ObjectLock_ObjectLockStatus = {}));
function objectLock_ObjectLockStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "OBJECT_LOCK_STATUS_UNSPECIFIED":
            return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED;
        case 1:
        case "OBJECT_LOCK_STATUS_DISABLED":
            return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED;
        case 2:
        case "OBJECT_LOCK_STATUS_ENABLED":
            return ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ObjectLock_ObjectLockStatus.UNRECOGNIZED;
    }
}
exports.objectLock_ObjectLockStatusFromJSON = objectLock_ObjectLockStatusFromJSON;
function objectLock_ObjectLockStatusToJSON(object) {
    switch (object) {
        case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_UNSPECIFIED:
            return "OBJECT_LOCK_STATUS_UNSPECIFIED";
        case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_DISABLED:
            return "OBJECT_LOCK_STATUS_DISABLED";
        case ObjectLock_ObjectLockStatus.OBJECT_LOCK_STATUS_ENABLED:
            return "OBJECT_LOCK_STATUS_ENABLED";
        default:
            return "UNKNOWN";
    }
}
exports.objectLock_ObjectLockStatusToJSON = objectLock_ObjectLockStatusToJSON;
/** Lock type */
var ObjectLock_DefaultRetention_Mode;
(function (ObjectLock_DefaultRetention_Mode) {
    ObjectLock_DefaultRetention_Mode[ObjectLock_DefaultRetention_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    ObjectLock_DefaultRetention_Mode[ObjectLock_DefaultRetention_Mode["MODE_GOVERNANCE"] = 1] = "MODE_GOVERNANCE";
    ObjectLock_DefaultRetention_Mode[ObjectLock_DefaultRetention_Mode["MODE_COMPLIANCE"] = 2] = "MODE_COMPLIANCE";
    ObjectLock_DefaultRetention_Mode[ObjectLock_DefaultRetention_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ObjectLock_DefaultRetention_Mode = exports.ObjectLock_DefaultRetention_Mode || (exports.ObjectLock_DefaultRetention_Mode = {}));
function objectLock_DefaultRetention_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED;
        case 1:
        case "MODE_GOVERNANCE":
            return ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE;
        case 2:
        case "MODE_COMPLIANCE":
            return ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ObjectLock_DefaultRetention_Mode.UNRECOGNIZED;
    }
}
exports.objectLock_DefaultRetention_ModeFromJSON = objectLock_DefaultRetention_ModeFromJSON;
function objectLock_DefaultRetention_ModeToJSON(object) {
    switch (object) {
        case ObjectLock_DefaultRetention_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case ObjectLock_DefaultRetention_Mode.MODE_GOVERNANCE:
            return "MODE_GOVERNANCE";
        case ObjectLock_DefaultRetention_Mode.MODE_COMPLIANCE:
            return "MODE_COMPLIANCE";
        default:
            return "UNKNOWN";
    }
}
exports.objectLock_DefaultRetention_ModeToJSON = objectLock_DefaultRetention_ModeToJSON;
const baseBucket = {
    $type: "yandex.cloud.storage.v1.Bucket",
    id: "",
    name: "",
    folderId: "",
    defaultStorageClass: "",
    versioning: 0,
    maxSize: 0,
};
exports.Bucket = {
    $type: "yandex.cloud.storage.v1.Bucket",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.folderId !== "") {
            writer.uint32(26).string(message.folderId);
        }
        if (message.anonymousAccessFlags !== undefined) {
            exports.AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(34).fork()).ldelim();
        }
        if (message.defaultStorageClass !== "") {
            writer.uint32(42).string(message.defaultStorageClass);
        }
        if (message.versioning !== 0) {
            writer.uint32(48).int32(message.versioning);
        }
        if (message.maxSize !== 0) {
            writer.uint32(56).int64(message.maxSize);
        }
        if (message.policy !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.policy), writer.uint32(66).fork()).ldelim();
        }
        if (message.acl !== undefined) {
            exports.ACL.encode(message.acl, writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.cors) {
            exports.CorsRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.websiteSettings !== undefined) {
            exports.WebsiteSettings.encode(message.websiteSettings, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.lifecycleRules) {
            exports.LifecycleRule.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.tags) {
            exports.Tag.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.objectLock !== undefined) {
            exports.ObjectLock.encode(message.objectLock, writer.uint32(122).fork()).ldelim();
        }
        if (message.encryption !== undefined) {
            exports.Encryption.encode(message.encryption, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBucket);
        message.cors = [];
        message.lifecycleRules = [];
        message.tags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.anonymousAccessFlags = exports.AnonymousAccessFlags.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.defaultStorageClass = reader.string();
                    break;
                case 6:
                    message.versioning = reader.int32();
                    break;
                case 7:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 8:
                    message.policy = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.acl = exports.ACL.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.cors.push(exports.CorsRule.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.websiteSettings = exports.WebsiteSettings.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.lifecycleRules.push(exports.LifecycleRule.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.tags.push(exports.Tag.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.objectLock = exports.ObjectLock.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.encryption = exports.Encryption.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseBucket);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? exports.AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined &&
                object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : "";
        message.versioning =
            object.versioning !== undefined && object.versioning !== null
                ? versioningFromJSON(object.versioning)
                : 0;
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : 0;
        message.policy =
            typeof object.policy === "object" ? object.policy : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? exports.ACL.fromJSON(object.acl)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.cors = ((_a = object.cors) !== null && _a !== void 0 ? _a : []).map((e) => exports.CorsRule.fromJSON(e));
        message.websiteSettings =
            object.websiteSettings !== undefined && object.websiteSettings !== null
                ? exports.WebsiteSettings.fromJSON(object.websiteSettings)
                : undefined;
        message.lifecycleRules = ((_b = object.lifecycleRules) !== null && _b !== void 0 ? _b : []).map((e) => exports.LifecycleRule.fromJSON(e));
        message.tags = ((_c = object.tags) !== null && _c !== void 0 ? _c : []).map((e) => exports.Tag.fromJSON(e));
        message.objectLock =
            object.objectLock !== undefined && object.objectLock !== null
                ? exports.ObjectLock.fromJSON(object.objectLock)
                : undefined;
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? exports.Encryption.fromJSON(object.encryption)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.anonymousAccessFlags !== undefined &&
            (obj.anonymousAccessFlags = message.anonymousAccessFlags
                ? exports.AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
                : undefined);
        message.defaultStorageClass !== undefined &&
            (obj.defaultStorageClass = message.defaultStorageClass);
        message.versioning !== undefined &&
            (obj.versioning = versioningToJSON(message.versioning));
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        message.policy !== undefined && (obj.policy = message.policy);
        message.acl !== undefined &&
            (obj.acl = message.acl ? exports.ACL.toJSON(message.acl) : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        if (message.cors) {
            obj.cors = message.cors.map((e) => (e ? exports.CorsRule.toJSON(e) : undefined));
        }
        else {
            obj.cors = [];
        }
        message.websiteSettings !== undefined &&
            (obj.websiteSettings = message.websiteSettings
                ? exports.WebsiteSettings.toJSON(message.websiteSettings)
                : undefined);
        if (message.lifecycleRules) {
            obj.lifecycleRules = message.lifecycleRules.map((e) => e ? exports.LifecycleRule.toJSON(e) : undefined);
        }
        else {
            obj.lifecycleRules = [];
        }
        if (message.tags) {
            obj.tags = message.tags.map((e) => (e ? exports.Tag.toJSON(e) : undefined));
        }
        else {
            obj.tags = [];
        }
        message.objectLock !== undefined &&
            (obj.objectLock = message.objectLock
                ? exports.ObjectLock.toJSON(message.objectLock)
                : undefined);
        message.encryption !== undefined &&
            (obj.encryption = message.encryption
                ? exports.Encryption.toJSON(message.encryption)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseBucket);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : "";
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? exports.AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.defaultStorageClass = (_d = object.defaultStorageClass) !== null && _d !== void 0 ? _d : "";
        message.versioning = (_e = object.versioning) !== null && _e !== void 0 ? _e : 0;
        message.maxSize = (_f = object.maxSize) !== null && _f !== void 0 ? _f : 0;
        message.policy = (_g = object.policy) !== null && _g !== void 0 ? _g : undefined;
        message.acl =
            object.acl !== undefined && object.acl !== null
                ? exports.ACL.fromPartial(object.acl)
                : undefined;
        message.createdAt = (_h = object.createdAt) !== null && _h !== void 0 ? _h : undefined;
        message.cors = ((_j = object.cors) === null || _j === void 0 ? void 0 : _j.map((e) => exports.CorsRule.fromPartial(e))) || [];
        message.websiteSettings =
            object.websiteSettings !== undefined && object.websiteSettings !== null
                ? exports.WebsiteSettings.fromPartial(object.websiteSettings)
                : undefined;
        message.lifecycleRules =
            ((_k = object.lifecycleRules) === null || _k === void 0 ? void 0 : _k.map((e) => exports.LifecycleRule.fromPartial(e))) || [];
        message.tags = ((_l = object.tags) === null || _l === void 0 ? void 0 : _l.map((e) => exports.Tag.fromPartial(e))) || [];
        message.objectLock =
            object.objectLock !== undefined && object.objectLock !== null
                ? exports.ObjectLock.fromPartial(object.objectLock)
                : undefined;
        message.encryption =
            object.encryption !== undefined && object.encryption !== null
                ? exports.Encryption.fromPartial(object.encryption)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Bucket.$type, exports.Bucket);
const baseTag = {
    $type: "yandex.cloud.storage.v1.Tag",
    key: "",
    value: "",
};
exports.Tag = {
    $type: "yandex.cloud.storage.v1.Tag",
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
        const message = Object.assign({}, baseTag);
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
        const message = Object.assign({}, baseTag);
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
        const message = Object.assign({}, baseTag);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Tag.$type, exports.Tag);
const baseACL = { $type: "yandex.cloud.storage.v1.ACL" };
exports.ACL = {
    $type: "yandex.cloud.storage.v1.ACL",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.grants) {
            exports.ACL_Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseACL);
        message.grants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(exports.ACL_Grant.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseACL);
        message.grants = ((_a = object.grants) !== null && _a !== void 0 ? _a : []).map((e) => exports.ACL_Grant.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map((e) => e ? exports.ACL_Grant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseACL);
        message.grants = ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ACL_Grant.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ACL.$type, exports.ACL);
const baseACL_Grant = {
    $type: "yandex.cloud.storage.v1.ACL.Grant",
    permission: 0,
    grantType: 0,
    granteeId: "",
};
exports.ACL_Grant = {
    $type: "yandex.cloud.storage.v1.ACL.Grant",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.grantType !== 0) {
            writer.uint32(16).int32(message.grantType);
        }
        if (message.granteeId !== "") {
            writer.uint32(26).string(message.granteeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseACL_Grant);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.int32();
                    break;
                case 2:
                    message.grantType = reader.int32();
                    break;
                case 3:
                    message.granteeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseACL_Grant);
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? aCL_Grant_PermissionFromJSON(object.permission)
                : 0;
        message.grantType =
            object.grantType !== undefined && object.grantType !== null
                ? aCL_Grant_GrantTypeFromJSON(object.grantType)
                : 0;
        message.granteeId =
            object.granteeId !== undefined && object.granteeId !== null
                ? String(object.granteeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined &&
            (obj.permission = aCL_Grant_PermissionToJSON(message.permission));
        message.grantType !== undefined &&
            (obj.grantType = aCL_Grant_GrantTypeToJSON(message.grantType));
        message.granteeId !== undefined && (obj.granteeId = message.granteeId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseACL_Grant);
        message.permission = (_a = object.permission) !== null && _a !== void 0 ? _a : 0;
        message.grantType = (_b = object.grantType) !== null && _b !== void 0 ? _b : 0;
        message.granteeId = (_c = object.granteeId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ACL_Grant.$type, exports.ACL_Grant);
const baseAnonymousAccessFlags = {
    $type: "yandex.cloud.storage.v1.AnonymousAccessFlags",
};
exports.AnonymousAccessFlags = {
    $type: "yandex.cloud.storage.v1.AnonymousAccessFlags",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.read !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.read }, writer.uint32(10).fork()).ldelim();
        }
        if (message.list !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.list }, writer.uint32(18).fork()).ldelim();
        }
        if (message.configRead !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.configRead }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnonymousAccessFlags);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.read = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.list = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.configRead = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAnonymousAccessFlags);
        message.read =
            object.read !== undefined && object.read !== null
                ? Boolean(object.read)
                : undefined;
        message.list =
            object.list !== undefined && object.list !== null
                ? Boolean(object.list)
                : undefined;
        message.configRead =
            object.configRead !== undefined && object.configRead !== null
                ? Boolean(object.configRead)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.read !== undefined && (obj.read = message.read);
        message.list !== undefined && (obj.list = message.list);
        message.configRead !== undefined && (obj.configRead = message.configRead);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAnonymousAccessFlags);
        message.read = (_a = object.read) !== null && _a !== void 0 ? _a : undefined;
        message.list = (_b = object.list) !== null && _b !== void 0 ? _b : undefined;
        message.configRead = (_c = object.configRead) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AnonymousAccessFlags.$type, exports.AnonymousAccessFlags);
const baseCorsRule = {
    $type: "yandex.cloud.storage.v1.CorsRule",
    id: "",
    allowedMethods: 0,
    allowedHeaders: "",
    allowedOrigins: "",
    exposeHeaders: "",
};
exports.CorsRule = {
    $type: "yandex.cloud.storage.v1.CorsRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        writer.uint32(18).fork();
        for (const v of message.allowedMethods) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.allowedHeaders) {
            writer.uint32(26).string(v);
        }
        for (const v of message.allowedOrigins) {
            writer.uint32(34).string(v);
        }
        for (const v of message.exposeHeaders) {
            writer.uint32(42).string(v);
        }
        if (message.maxAgeSeconds !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxAgeSeconds }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCorsRule);
        message.allowedMethods = [];
        message.allowedHeaders = [];
        message.allowedOrigins = [];
        message.exposeHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.allowedMethods.push(reader.int32());
                        }
                    }
                    else {
                        message.allowedMethods.push(reader.int32());
                    }
                    break;
                case 3:
                    message.allowedHeaders.push(reader.string());
                    break;
                case 4:
                    message.allowedOrigins.push(reader.string());
                    break;
                case 5:
                    message.exposeHeaders.push(reader.string());
                    break;
                case 6:
                    message.maxAgeSeconds = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCorsRule);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.allowedMethods = ((_a = object.allowedMethods) !== null && _a !== void 0 ? _a : []).map((e) => corsRule_MethodFromJSON(e));
        message.allowedHeaders = ((_b = object.allowedHeaders) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.allowedOrigins = ((_c = object.allowedOrigins) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.exposeHeaders = ((_d = object.exposeHeaders) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.maxAgeSeconds =
            object.maxAgeSeconds !== undefined && object.maxAgeSeconds !== null
                ? Number(object.maxAgeSeconds)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.allowedMethods) {
            obj.allowedMethods = message.allowedMethods.map((e) => corsRule_MethodToJSON(e));
        }
        else {
            obj.allowedMethods = [];
        }
        if (message.allowedHeaders) {
            obj.allowedHeaders = message.allowedHeaders.map((e) => e);
        }
        else {
            obj.allowedHeaders = [];
        }
        if (message.allowedOrigins) {
            obj.allowedOrigins = message.allowedOrigins.map((e) => e);
        }
        else {
            obj.allowedOrigins = [];
        }
        if (message.exposeHeaders) {
            obj.exposeHeaders = message.exposeHeaders.map((e) => e);
        }
        else {
            obj.exposeHeaders = [];
        }
        message.maxAgeSeconds !== undefined &&
            (obj.maxAgeSeconds = message.maxAgeSeconds);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCorsRule);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.allowedMethods = ((_b = object.allowedMethods) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.allowedHeaders = ((_c = object.allowedHeaders) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.allowedOrigins = ((_d = object.allowedOrigins) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.exposeHeaders = ((_e = object.exposeHeaders) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.maxAgeSeconds = (_f = object.maxAgeSeconds) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CorsRule.$type, exports.CorsRule);
const baseWebsiteSettings = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings",
    index: "",
    error: "",
};
exports.WebsiteSettings = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.error !== "") {
            writer.uint32(18).string(message.error);
        }
        if (message.redirectAllRequests !== undefined) {
            exports.WebsiteSettings_Scheme.encode(message.redirectAllRequests, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.routingRules) {
            exports.WebsiteSettings_RoutingRule.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWebsiteSettings);
        message.routingRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.error = reader.string();
                    break;
                case 3:
                    message.redirectAllRequests = exports.WebsiteSettings_Scheme.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.routingRules.push(exports.WebsiteSettings_RoutingRule.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseWebsiteSettings);
        message.index =
            object.index !== undefined && object.index !== null
                ? String(object.index)
                : "";
        message.error =
            object.error !== undefined && object.error !== null
                ? String(object.error)
                : "";
        message.redirectAllRequests =
            object.redirectAllRequests !== undefined &&
                object.redirectAllRequests !== null
                ? exports.WebsiteSettings_Scheme.fromJSON(object.redirectAllRequests)
                : undefined;
        message.routingRules = ((_a = object.routingRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.WebsiteSettings_RoutingRule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.error !== undefined && (obj.error = message.error);
        message.redirectAllRequests !== undefined &&
            (obj.redirectAllRequests = message.redirectAllRequests
                ? exports.WebsiteSettings_Scheme.toJSON(message.redirectAllRequests)
                : undefined);
        if (message.routingRules) {
            obj.routingRules = message.routingRules.map((e) => e ? exports.WebsiteSettings_RoutingRule.toJSON(e) : undefined);
        }
        else {
            obj.routingRules = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseWebsiteSettings);
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : "";
        message.redirectAllRequests =
            object.redirectAllRequests !== undefined &&
                object.redirectAllRequests !== null
                ? exports.WebsiteSettings_Scheme.fromPartial(object.redirectAllRequests)
                : undefined;
        message.routingRules =
            ((_c = object.routingRules) === null || _c === void 0 ? void 0 : _c.map((e) => exports.WebsiteSettings_RoutingRule.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WebsiteSettings.$type, exports.WebsiteSettings);
const baseWebsiteSettings_Scheme = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme",
    protocol: 0,
    hostname: "",
};
exports.WebsiteSettings_Scheme = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.protocol !== 0) {
            writer.uint32(8).int32(message.protocol);
        }
        if (message.hostname !== "") {
            writer.uint32(18).string(message.hostname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWebsiteSettings_Scheme);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.int32();
                    break;
                case 2:
                    message.hostname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWebsiteSettings_Scheme);
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? websiteSettings_ProtocolFromJSON(object.protocol)
                : 0;
        message.hostname =
            object.hostname !== undefined && object.hostname !== null
                ? String(object.hostname)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined &&
            (obj.protocol = websiteSettings_ProtocolToJSON(message.protocol));
        message.hostname !== undefined && (obj.hostname = message.hostname);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWebsiteSettings_Scheme);
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : 0;
        message.hostname = (_b = object.hostname) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WebsiteSettings_Scheme.$type, exports.WebsiteSettings_Scheme);
const baseWebsiteSettings_Condition = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition",
    httpErrorCodeReturnedEquals: "",
    keyPrefixEquals: "",
};
exports.WebsiteSettings_Condition = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpErrorCodeReturnedEquals !== "") {
            writer.uint32(10).string(message.httpErrorCodeReturnedEquals);
        }
        if (message.keyPrefixEquals !== "") {
            writer.uint32(18).string(message.keyPrefixEquals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWebsiteSettings_Condition);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpErrorCodeReturnedEquals = reader.string();
                    break;
                case 2:
                    message.keyPrefixEquals = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWebsiteSettings_Condition);
        message.httpErrorCodeReturnedEquals =
            object.httpErrorCodeReturnedEquals !== undefined &&
                object.httpErrorCodeReturnedEquals !== null
                ? String(object.httpErrorCodeReturnedEquals)
                : "";
        message.keyPrefixEquals =
            object.keyPrefixEquals !== undefined && object.keyPrefixEquals !== null
                ? String(object.keyPrefixEquals)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpErrorCodeReturnedEquals !== undefined &&
            (obj.httpErrorCodeReturnedEquals = message.httpErrorCodeReturnedEquals);
        message.keyPrefixEquals !== undefined &&
            (obj.keyPrefixEquals = message.keyPrefixEquals);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseWebsiteSettings_Condition);
        message.httpErrorCodeReturnedEquals =
            (_a = object.httpErrorCodeReturnedEquals) !== null && _a !== void 0 ? _a : "";
        message.keyPrefixEquals = (_b = object.keyPrefixEquals) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WebsiteSettings_Condition.$type, exports.WebsiteSettings_Condition);
const baseWebsiteSettings_Redirect = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect",
    hostname: "",
    httpRedirectCode: "",
    protocol: 0,
    replaceKeyPrefixWith: "",
    replaceKeyWith: "",
};
exports.WebsiteSettings_Redirect = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostname !== "") {
            writer.uint32(10).string(message.hostname);
        }
        if (message.httpRedirectCode !== "") {
            writer.uint32(18).string(message.httpRedirectCode);
        }
        if (message.protocol !== 0) {
            writer.uint32(24).int32(message.protocol);
        }
        if (message.replaceKeyPrefixWith !== "") {
            writer.uint32(34).string(message.replaceKeyPrefixWith);
        }
        if (message.replaceKeyWith !== "") {
            writer.uint32(42).string(message.replaceKeyWith);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWebsiteSettings_Redirect);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostname = reader.string();
                    break;
                case 2:
                    message.httpRedirectCode = reader.string();
                    break;
                case 3:
                    message.protocol = reader.int32();
                    break;
                case 4:
                    message.replaceKeyPrefixWith = reader.string();
                    break;
                case 5:
                    message.replaceKeyWith = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWebsiteSettings_Redirect);
        message.hostname =
            object.hostname !== undefined && object.hostname !== null
                ? String(object.hostname)
                : "";
        message.httpRedirectCode =
            object.httpRedirectCode !== undefined && object.httpRedirectCode !== null
                ? String(object.httpRedirectCode)
                : "";
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? websiteSettings_ProtocolFromJSON(object.protocol)
                : 0;
        message.replaceKeyPrefixWith =
            object.replaceKeyPrefixWith !== undefined &&
                object.replaceKeyPrefixWith !== null
                ? String(object.replaceKeyPrefixWith)
                : "";
        message.replaceKeyWith =
            object.replaceKeyWith !== undefined && object.replaceKeyWith !== null
                ? String(object.replaceKeyWith)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.httpRedirectCode !== undefined &&
            (obj.httpRedirectCode = message.httpRedirectCode);
        message.protocol !== undefined &&
            (obj.protocol = websiteSettings_ProtocolToJSON(message.protocol));
        message.replaceKeyPrefixWith !== undefined &&
            (obj.replaceKeyPrefixWith = message.replaceKeyPrefixWith);
        message.replaceKeyWith !== undefined &&
            (obj.replaceKeyWith = message.replaceKeyWith);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseWebsiteSettings_Redirect);
        message.hostname = (_a = object.hostname) !== null && _a !== void 0 ? _a : "";
        message.httpRedirectCode = (_b = object.httpRedirectCode) !== null && _b !== void 0 ? _b : "";
        message.protocol = (_c = object.protocol) !== null && _c !== void 0 ? _c : 0;
        message.replaceKeyPrefixWith = (_d = object.replaceKeyPrefixWith) !== null && _d !== void 0 ? _d : "";
        message.replaceKeyWith = (_e = object.replaceKeyWith) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WebsiteSettings_Redirect.$type, exports.WebsiteSettings_Redirect);
const baseWebsiteSettings_RoutingRule = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule",
};
exports.WebsiteSettings_RoutingRule = {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.condition !== undefined) {
            exports.WebsiteSettings_Condition.encode(message.condition, writer.uint32(10).fork()).ldelim();
        }
        if (message.redirect !== undefined) {
            exports.WebsiteSettings_Redirect.encode(message.redirect, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWebsiteSettings_RoutingRule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.condition = exports.WebsiteSettings_Condition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redirect = exports.WebsiteSettings_Redirect.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWebsiteSettings_RoutingRule);
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? exports.WebsiteSettings_Condition.fromJSON(object.condition)
                : undefined;
        message.redirect =
            object.redirect !== undefined && object.redirect !== null
                ? exports.WebsiteSettings_Redirect.fromJSON(object.redirect)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.condition !== undefined &&
            (obj.condition = message.condition
                ? exports.WebsiteSettings_Condition.toJSON(message.condition)
                : undefined);
        message.redirect !== undefined &&
            (obj.redirect = message.redirect
                ? exports.WebsiteSettings_Redirect.toJSON(message.redirect)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseWebsiteSettings_RoutingRule);
        message.condition =
            object.condition !== undefined && object.condition !== null
                ? exports.WebsiteSettings_Condition.fromPartial(object.condition)
                : undefined;
        message.redirect =
            object.redirect !== undefined && object.redirect !== null
                ? exports.WebsiteSettings_Redirect.fromPartial(object.redirect)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WebsiteSettings_RoutingRule.$type, exports.WebsiteSettings_RoutingRule);
const baseLifecycleRule = {
    $type: "yandex.cloud.storage.v1.LifecycleRule",
    enabled: false,
};
exports.LifecycleRule = {
    $type: "yandex.cloud.storage.v1.LifecycleRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.id }, writer.uint32(10).fork()).ldelim();
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.filter !== undefined) {
            exports.LifecycleRule_RuleFilter.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            exports.LifecycleRule_Expiration.encode(message.expiration, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.transitions) {
            exports.LifecycleRule_Transition.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.abortIncompleteMultipartUpload !== undefined) {
            exports.LifecycleRule_AfterDays.encode(message.abortIncompleteMultipartUpload, writer.uint32(50).fork()).ldelim();
        }
        if (message.noncurrentExpiration !== undefined) {
            exports.LifecycleRule_NoncurrentExpiration.encode(message.noncurrentExpiration, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.noncurrentTransitions) {
            exports.LifecycleRule_NoncurrentTransition.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule);
        message.transitions = [];
        message.noncurrentTransitions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.filter = exports.LifecycleRule_RuleFilter.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expiration = exports.LifecycleRule_Expiration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transitions.push(exports.LifecycleRule_Transition.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.abortIncompleteMultipartUpload =
                        exports.LifecycleRule_AfterDays.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.noncurrentExpiration =
                        exports.LifecycleRule_NoncurrentExpiration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.noncurrentTransitions.push(exports.LifecycleRule_NoncurrentTransition.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseLifecycleRule);
        message.id =
            object.id !== undefined && object.id !== null
                ? String(object.id)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.LifecycleRule_RuleFilter.fromJSON(object.filter)
                : undefined;
        message.expiration =
            object.expiration !== undefined && object.expiration !== null
                ? exports.LifecycleRule_Expiration.fromJSON(object.expiration)
                : undefined;
        message.transitions = ((_a = object.transitions) !== null && _a !== void 0 ? _a : []).map((e) => exports.LifecycleRule_Transition.fromJSON(e));
        message.abortIncompleteMultipartUpload =
            object.abortIncompleteMultipartUpload !== undefined &&
                object.abortIncompleteMultipartUpload !== null
                ? exports.LifecycleRule_AfterDays.fromJSON(object.abortIncompleteMultipartUpload)
                : undefined;
        message.noncurrentExpiration =
            object.noncurrentExpiration !== undefined &&
                object.noncurrentExpiration !== null
                ? exports.LifecycleRule_NoncurrentExpiration.fromJSON(object.noncurrentExpiration)
                : undefined;
        message.noncurrentTransitions = ((_b = object.noncurrentTransitions) !== null && _b !== void 0 ? _b : []).map((e) => exports.LifecycleRule_NoncurrentTransition.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? exports.LifecycleRule_RuleFilter.toJSON(message.filter)
                : undefined);
        message.expiration !== undefined &&
            (obj.expiration = message.expiration
                ? exports.LifecycleRule_Expiration.toJSON(message.expiration)
                : undefined);
        if (message.transitions) {
            obj.transitions = message.transitions.map((e) => e ? exports.LifecycleRule_Transition.toJSON(e) : undefined);
        }
        else {
            obj.transitions = [];
        }
        message.abortIncompleteMultipartUpload !== undefined &&
            (obj.abortIncompleteMultipartUpload =
                message.abortIncompleteMultipartUpload
                    ? exports.LifecycleRule_AfterDays.toJSON(message.abortIncompleteMultipartUpload)
                    : undefined);
        message.noncurrentExpiration !== undefined &&
            (obj.noncurrentExpiration = message.noncurrentExpiration
                ? exports.LifecycleRule_NoncurrentExpiration.toJSON(message.noncurrentExpiration)
                : undefined);
        if (message.noncurrentTransitions) {
            obj.noncurrentTransitions = message.noncurrentTransitions.map((e) => e ? exports.LifecycleRule_NoncurrentTransition.toJSON(e) : undefined);
        }
        else {
            obj.noncurrentTransitions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseLifecycleRule);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : undefined;
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.LifecycleRule_RuleFilter.fromPartial(object.filter)
                : undefined;
        message.expiration =
            object.expiration !== undefined && object.expiration !== null
                ? exports.LifecycleRule_Expiration.fromPartial(object.expiration)
                : undefined;
        message.transitions =
            ((_c = object.transitions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.LifecycleRule_Transition.fromPartial(e))) ||
                [];
        message.abortIncompleteMultipartUpload =
            object.abortIncompleteMultipartUpload !== undefined &&
                object.abortIncompleteMultipartUpload !== null
                ? exports.LifecycleRule_AfterDays.fromPartial(object.abortIncompleteMultipartUpload)
                : undefined;
        message.noncurrentExpiration =
            object.noncurrentExpiration !== undefined &&
                object.noncurrentExpiration !== null
                ? exports.LifecycleRule_NoncurrentExpiration.fromPartial(object.noncurrentExpiration)
                : undefined;
        message.noncurrentTransitions =
            ((_d = object.noncurrentTransitions) === null || _d === void 0 ? void 0 : _d.map((e) => exports.LifecycleRule_NoncurrentTransition.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule.$type, exports.LifecycleRule);
const baseLifecycleRule_AfterDays = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays",
};
exports.LifecycleRule_AfterDays = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.daysAfterExpiration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.daysAfterExpiration,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_AfterDays);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysAfterExpiration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_AfterDays);
        message.daysAfterExpiration =
            object.daysAfterExpiration !== undefined &&
                object.daysAfterExpiration !== null
                ? Number(object.daysAfterExpiration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.daysAfterExpiration !== undefined &&
            (obj.daysAfterExpiration = message.daysAfterExpiration);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLifecycleRule_AfterDays);
        message.daysAfterExpiration = (_a = object.daysAfterExpiration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_AfterDays.$type, exports.LifecycleRule_AfterDays);
const baseLifecycleRule_NoncurrentExpiration = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration",
};
exports.LifecycleRule_NoncurrentExpiration = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.noncurrentDays !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.noncurrentDays }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_NoncurrentExpiration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noncurrentDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_NoncurrentExpiration);
        message.noncurrentDays =
            object.noncurrentDays !== undefined && object.noncurrentDays !== null
                ? Number(object.noncurrentDays)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noncurrentDays !== undefined &&
            (obj.noncurrentDays = message.noncurrentDays);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseLifecycleRule_NoncurrentExpiration);
        message.noncurrentDays = (_a = object.noncurrentDays) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_NoncurrentExpiration.$type, exports.LifecycleRule_NoncurrentExpiration);
const baseLifecycleRule_NoncurrentTransition = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition",
    storageClass: "",
};
exports.LifecycleRule_NoncurrentTransition = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.noncurrentDays !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.noncurrentDays }, writer.uint32(10).fork()).ldelim();
        }
        if (message.storageClass !== "") {
            writer.uint32(18).string(message.storageClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_NoncurrentTransition);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noncurrentDays = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.storageClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_NoncurrentTransition);
        message.noncurrentDays =
            object.noncurrentDays !== undefined && object.noncurrentDays !== null
                ? Number(object.noncurrentDays)
                : undefined;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noncurrentDays !== undefined &&
            (obj.noncurrentDays = message.noncurrentDays);
        message.storageClass !== undefined &&
            (obj.storageClass = message.storageClass);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLifecycleRule_NoncurrentTransition);
        message.noncurrentDays = (_a = object.noncurrentDays) !== null && _a !== void 0 ? _a : undefined;
        message.storageClass = (_b = object.storageClass) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_NoncurrentTransition.$type, exports.LifecycleRule_NoncurrentTransition);
const baseLifecycleRule_Transition = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Transition",
    storageClass: "",
};
exports.LifecycleRule_Transition = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Transition",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
        }
        if (message.days !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.days }, writer.uint32(18).fork()).ldelim();
        }
        if (message.storageClass !== "") {
            writer.uint32(34).string(message.storageClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_Transition);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.days = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.storageClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_Transition);
        message.date =
            object.date !== undefined && object.date !== null
                ? fromJsonTimestamp(object.date)
                : undefined;
        message.days =
            object.days !== undefined && object.days !== null
                ? Number(object.days)
                : undefined;
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.days !== undefined && (obj.days = message.days);
        message.storageClass !== undefined &&
            (obj.storageClass = message.storageClass);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLifecycleRule_Transition);
        message.date = (_a = object.date) !== null && _a !== void 0 ? _a : undefined;
        message.days = (_b = object.days) !== null && _b !== void 0 ? _b : undefined;
        message.storageClass = (_c = object.storageClass) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_Transition.$type, exports.LifecycleRule_Transition);
const baseLifecycleRule_Expiration = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration",
};
exports.LifecycleRule_Expiration = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
        }
        if (message.days !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.days }, writer.uint32(18).fork()).ldelim();
        }
        if (message.expiredObjectDeleteMarker !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.expiredObjectDeleteMarker,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_Expiration);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.days = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.expiredObjectDeleteMarker = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_Expiration);
        message.date =
            object.date !== undefined && object.date !== null
                ? fromJsonTimestamp(object.date)
                : undefined;
        message.days =
            object.days !== undefined && object.days !== null
                ? Number(object.days)
                : undefined;
        message.expiredObjectDeleteMarker =
            object.expiredObjectDeleteMarker !== undefined &&
                object.expiredObjectDeleteMarker !== null
                ? Boolean(object.expiredObjectDeleteMarker)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.days !== undefined && (obj.days = message.days);
        message.expiredObjectDeleteMarker !== undefined &&
            (obj.expiredObjectDeleteMarker = message.expiredObjectDeleteMarker);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLifecycleRule_Expiration);
        message.date = (_a = object.date) !== null && _a !== void 0 ? _a : undefined;
        message.days = (_b = object.days) !== null && _b !== void 0 ? _b : undefined;
        message.expiredObjectDeleteMarker =
            (_c = object.expiredObjectDeleteMarker) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_Expiration.$type, exports.LifecycleRule_Expiration);
const baseLifecycleRule_RuleFilter = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter",
    prefix: "",
};
exports.LifecycleRule_RuleFilter = {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.prefix !== "") {
            writer.uint32(10).string(message.prefix);
        }
        if (message.objectSizeGreaterThan !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.objectSizeGreaterThan,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.objectSizeLessThan !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.objectSizeLessThan,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLifecycleRule_RuleFilter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                case 2:
                    message.objectSizeGreaterThan = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.objectSizeLessThan = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLifecycleRule_RuleFilter);
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        message.objectSizeGreaterThan =
            object.objectSizeGreaterThan !== undefined &&
                object.objectSizeGreaterThan !== null
                ? Number(object.objectSizeGreaterThan)
                : undefined;
        message.objectSizeLessThan =
            object.objectSizeLessThan !== undefined &&
                object.objectSizeLessThan !== null
                ? Number(object.objectSizeLessThan)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.objectSizeGreaterThan !== undefined &&
            (obj.objectSizeGreaterThan = message.objectSizeGreaterThan);
        message.objectSizeLessThan !== undefined &&
            (obj.objectSizeLessThan = message.objectSizeLessThan);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseLifecycleRule_RuleFilter);
        message.prefix = (_a = object.prefix) !== null && _a !== void 0 ? _a : "";
        message.objectSizeGreaterThan = (_b = object.objectSizeGreaterThan) !== null && _b !== void 0 ? _b : undefined;
        message.objectSizeLessThan = (_c = object.objectSizeLessThan) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule_RuleFilter.$type, exports.LifecycleRule_RuleFilter);
const baseCounters = {
    $type: "yandex.cloud.storage.v1.Counters",
    simpleObjectSize: 0,
    simpleObjectCount: 0,
    objectsPartsSize: 0,
    objectsPartsCount: 0,
    multipartObjectsSize: 0,
    multipartObjectsCount: 0,
    activeMultipartCount: 0,
};
exports.Counters = {
    $type: "yandex.cloud.storage.v1.Counters",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.simpleObjectSize !== 0) {
            writer.uint32(8).int64(message.simpleObjectSize);
        }
        if (message.simpleObjectCount !== 0) {
            writer.uint32(16).int64(message.simpleObjectCount);
        }
        if (message.objectsPartsSize !== 0) {
            writer.uint32(24).int64(message.objectsPartsSize);
        }
        if (message.objectsPartsCount !== 0) {
            writer.uint32(32).int64(message.objectsPartsCount);
        }
        if (message.multipartObjectsSize !== 0) {
            writer.uint32(40).int64(message.multipartObjectsSize);
        }
        if (message.multipartObjectsCount !== 0) {
            writer.uint32(48).int64(message.multipartObjectsCount);
        }
        if (message.activeMultipartCount !== 0) {
            writer.uint32(56).int64(message.activeMultipartCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCounters);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleObjectSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.simpleObjectCount = longToNumber(reader.int64());
                    break;
                case 3:
                    message.objectsPartsSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.objectsPartsCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.multipartObjectsSize = longToNumber(reader.int64());
                    break;
                case 6:
                    message.multipartObjectsCount = longToNumber(reader.int64());
                    break;
                case 7:
                    message.activeMultipartCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCounters);
        message.simpleObjectSize =
            object.simpleObjectSize !== undefined && object.simpleObjectSize !== null
                ? Number(object.simpleObjectSize)
                : 0;
        message.simpleObjectCount =
            object.simpleObjectCount !== undefined &&
                object.simpleObjectCount !== null
                ? Number(object.simpleObjectCount)
                : 0;
        message.objectsPartsSize =
            object.objectsPartsSize !== undefined && object.objectsPartsSize !== null
                ? Number(object.objectsPartsSize)
                : 0;
        message.objectsPartsCount =
            object.objectsPartsCount !== undefined &&
                object.objectsPartsCount !== null
                ? Number(object.objectsPartsCount)
                : 0;
        message.multipartObjectsSize =
            object.multipartObjectsSize !== undefined &&
                object.multipartObjectsSize !== null
                ? Number(object.multipartObjectsSize)
                : 0;
        message.multipartObjectsCount =
            object.multipartObjectsCount !== undefined &&
                object.multipartObjectsCount !== null
                ? Number(object.multipartObjectsCount)
                : 0;
        message.activeMultipartCount =
            object.activeMultipartCount !== undefined &&
                object.activeMultipartCount !== null
                ? Number(object.activeMultipartCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.simpleObjectSize !== undefined &&
            (obj.simpleObjectSize = Math.round(message.simpleObjectSize));
        message.simpleObjectCount !== undefined &&
            (obj.simpleObjectCount = Math.round(message.simpleObjectCount));
        message.objectsPartsSize !== undefined &&
            (obj.objectsPartsSize = Math.round(message.objectsPartsSize));
        message.objectsPartsCount !== undefined &&
            (obj.objectsPartsCount = Math.round(message.objectsPartsCount));
        message.multipartObjectsSize !== undefined &&
            (obj.multipartObjectsSize = Math.round(message.multipartObjectsSize));
        message.multipartObjectsCount !== undefined &&
            (obj.multipartObjectsCount = Math.round(message.multipartObjectsCount));
        message.activeMultipartCount !== undefined &&
            (obj.activeMultipartCount = Math.round(message.activeMultipartCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseCounters);
        message.simpleObjectSize = (_a = object.simpleObjectSize) !== null && _a !== void 0 ? _a : 0;
        message.simpleObjectCount = (_b = object.simpleObjectCount) !== null && _b !== void 0 ? _b : 0;
        message.objectsPartsSize = (_c = object.objectsPartsSize) !== null && _c !== void 0 ? _c : 0;
        message.objectsPartsCount = (_d = object.objectsPartsCount) !== null && _d !== void 0 ? _d : 0;
        message.multipartObjectsSize = (_e = object.multipartObjectsSize) !== null && _e !== void 0 ? _e : 0;
        message.multipartObjectsCount = (_f = object.multipartObjectsCount) !== null && _f !== void 0 ? _f : 0;
        message.activeMultipartCount = (_g = object.activeMultipartCount) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Counters.$type, exports.Counters);
const baseOptionalSizeByClass = {
    $type: "yandex.cloud.storage.v1.OptionalSizeByClass",
    storageClass: "",
};
exports.OptionalSizeByClass = {
    $type: "yandex.cloud.storage.v1.OptionalSizeByClass",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageClass !== "") {
            writer.uint32(10).string(message.storageClass);
        }
        if (message.classSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.classSize }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOptionalSizeByClass);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageClass = reader.string();
                    break;
                case 2:
                    message.classSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOptionalSizeByClass);
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : "";
        message.classSize =
            object.classSize !== undefined && object.classSize !== null
                ? Number(object.classSize)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageClass !== undefined &&
            (obj.storageClass = message.storageClass);
        message.classSize !== undefined && (obj.classSize = message.classSize);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOptionalSizeByClass);
        message.storageClass = (_a = object.storageClass) !== null && _a !== void 0 ? _a : "";
        message.classSize = (_b = object.classSize) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OptionalSizeByClass.$type, exports.OptionalSizeByClass);
const baseSizeByClass = {
    $type: "yandex.cloud.storage.v1.SizeByClass",
    storageClass: "",
    classSize: 0,
};
exports.SizeByClass = {
    $type: "yandex.cloud.storage.v1.SizeByClass",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageClass !== "") {
            writer.uint32(10).string(message.storageClass);
        }
        if (message.classSize !== 0) {
            writer.uint32(16).int64(message.classSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSizeByClass);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageClass = reader.string();
                    break;
                case 2:
                    message.classSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSizeByClass);
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : "";
        message.classSize =
            object.classSize !== undefined && object.classSize !== null
                ? Number(object.classSize)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageClass !== undefined &&
            (obj.storageClass = message.storageClass);
        message.classSize !== undefined &&
            (obj.classSize = Math.round(message.classSize));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSizeByClass);
        message.storageClass = (_a = object.storageClass) !== null && _a !== void 0 ? _a : "";
        message.classSize = (_b = object.classSize) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SizeByClass.$type, exports.SizeByClass);
const baseCountersByClass = {
    $type: "yandex.cloud.storage.v1.CountersByClass",
    storageClass: "",
};
exports.CountersByClass = {
    $type: "yandex.cloud.storage.v1.CountersByClass",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageClass !== "") {
            writer.uint32(10).string(message.storageClass);
        }
        if (message.counters !== undefined) {
            exports.Counters.encode(message.counters, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCountersByClass);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageClass = reader.string();
                    break;
                case 2:
                    message.counters = exports.Counters.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCountersByClass);
        message.storageClass =
            object.storageClass !== undefined && object.storageClass !== null
                ? String(object.storageClass)
                : "";
        message.counters =
            object.counters !== undefined && object.counters !== null
                ? exports.Counters.fromJSON(object.counters)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageClass !== undefined &&
            (obj.storageClass = message.storageClass);
        message.counters !== undefined &&
            (obj.counters = message.counters
                ? exports.Counters.toJSON(message.counters)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCountersByClass);
        message.storageClass = (_a = object.storageClass) !== null && _a !== void 0 ? _a : "";
        message.counters =
            object.counters !== undefined && object.counters !== null
                ? exports.Counters.fromPartial(object.counters)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CountersByClass.$type, exports.CountersByClass);
const baseBucketStats = {
    $type: "yandex.cloud.storage.v1.BucketStats",
    name: "",
    usedSize: 0,
};
exports.BucketStats = {
    $type: "yandex.cloud.storage.v1.BucketStats",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.maxSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxSize }, writer.uint32(18).fork()).ldelim();
        }
        if (message.usedSize !== 0) {
            writer.uint32(24).int64(message.usedSize);
        }
        for (const v of message.storageClassMaxSizes) {
            exports.OptionalSizeByClass.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.storageClassUsedSizes) {
            exports.SizeByClass.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.storageClassCounters) {
            exports.CountersByClass.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.defaultStorageClass !== undefined) {
            wrappers_1.StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.defaultStorageClass,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.anonymousAccessFlags !== undefined) {
            exports.AnonymousAccessFlags.encode(message.anonymousAccessFlags, writer.uint32(66).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBucketStats);
        message.storageClassMaxSizes = [];
        message.storageClassUsedSizes = [];
        message.storageClassCounters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.maxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.usedSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.storageClassMaxSizes.push(exports.OptionalSizeByClass.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.storageClassUsedSizes.push(exports.SizeByClass.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.storageClassCounters.push(exports.CountersByClass.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.defaultStorageClass = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.anonymousAccessFlags = exports.AnonymousAccessFlags.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseBucketStats);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.maxSize =
            object.maxSize !== undefined && object.maxSize !== null
                ? Number(object.maxSize)
                : undefined;
        message.usedSize =
            object.usedSize !== undefined && object.usedSize !== null
                ? Number(object.usedSize)
                : 0;
        message.storageClassMaxSizes = ((_a = object.storageClassMaxSizes) !== null && _a !== void 0 ? _a : []).map((e) => exports.OptionalSizeByClass.fromJSON(e));
        message.storageClassUsedSizes = ((_b = object.storageClassUsedSizes) !== null && _b !== void 0 ? _b : []).map((e) => exports.SizeByClass.fromJSON(e));
        message.storageClassCounters = ((_c = object.storageClassCounters) !== null && _c !== void 0 ? _c : []).map((e) => exports.CountersByClass.fromJSON(e));
        message.defaultStorageClass =
            object.defaultStorageClass !== undefined &&
                object.defaultStorageClass !== null
                ? String(object.defaultStorageClass)
                : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? exports.AnonymousAccessFlags.fromJSON(object.anonymousAccessFlags)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        message.usedSize !== undefined &&
            (obj.usedSize = Math.round(message.usedSize));
        if (message.storageClassMaxSizes) {
            obj.storageClassMaxSizes = message.storageClassMaxSizes.map((e) => e ? exports.OptionalSizeByClass.toJSON(e) : undefined);
        }
        else {
            obj.storageClassMaxSizes = [];
        }
        if (message.storageClassUsedSizes) {
            obj.storageClassUsedSizes = message.storageClassUsedSizes.map((e) => e ? exports.SizeByClass.toJSON(e) : undefined);
        }
        else {
            obj.storageClassUsedSizes = [];
        }
        if (message.storageClassCounters) {
            obj.storageClassCounters = message.storageClassCounters.map((e) => e ? exports.CountersByClass.toJSON(e) : undefined);
        }
        else {
            obj.storageClassCounters = [];
        }
        message.defaultStorageClass !== undefined &&
            (obj.defaultStorageClass = message.defaultStorageClass);
        message.anonymousAccessFlags !== undefined &&
            (obj.anonymousAccessFlags = message.anonymousAccessFlags
                ? exports.AnonymousAccessFlags.toJSON(message.anonymousAccessFlags)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseBucketStats);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.maxSize = (_b = object.maxSize) !== null && _b !== void 0 ? _b : undefined;
        message.usedSize = (_c = object.usedSize) !== null && _c !== void 0 ? _c : 0;
        message.storageClassMaxSizes =
            ((_d = object.storageClassMaxSizes) === null || _d === void 0 ? void 0 : _d.map((e) => exports.OptionalSizeByClass.fromPartial(e))) || [];
        message.storageClassUsedSizes =
            ((_e = object.storageClassUsedSizes) === null || _e === void 0 ? void 0 : _e.map((e) => exports.SizeByClass.fromPartial(e))) ||
                [];
        message.storageClassCounters =
            ((_f = object.storageClassCounters) === null || _f === void 0 ? void 0 : _f.map((e) => exports.CountersByClass.fromPartial(e))) ||
                [];
        message.defaultStorageClass = (_g = object.defaultStorageClass) !== null && _g !== void 0 ? _g : undefined;
        message.anonymousAccessFlags =
            object.anonymousAccessFlags !== undefined &&
                object.anonymousAccessFlags !== null
                ? exports.AnonymousAccessFlags.fromPartial(object.anonymousAccessFlags)
                : undefined;
        message.createdAt = (_h = object.createdAt) !== null && _h !== void 0 ? _h : undefined;
        message.updatedAt = (_j = object.updatedAt) !== null && _j !== void 0 ? _j : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BucketStats.$type, exports.BucketStats);
const baseHTTPSConfig = {
    $type: "yandex.cloud.storage.v1.HTTPSConfig",
    name: "",
    sourceType: 0,
    dnsNames: "",
    certificateId: "",
};
exports.HTTPSConfig = {
    $type: "yandex.cloud.storage.v1.HTTPSConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.sourceType !== 0) {
            writer.uint32(16).int32(message.sourceType);
        }
        if (message.issuer !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.issuer }, writer.uint32(26).fork()).ldelim();
        }
        if (message.subject !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.subject }, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.dnsNames) {
            writer.uint32(42).string(v);
        }
        if (message.notBefore !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.notBefore), writer.uint32(50).fork()).ldelim();
        }
        if (message.notAfter !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.notAfter), writer.uint32(58).fork()).ldelim();
        }
        if (message.certificateId !== "") {
            writer.uint32(66).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHTTPSConfig);
        message.dnsNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.sourceType = reader.int32();
                    break;
                case 3:
                    message.issuer = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.subject = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.dnsNames.push(reader.string());
                    break;
                case 6:
                    message.notBefore = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.notAfter = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
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
        var _a;
        const message = Object.assign({}, baseHTTPSConfig);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.sourceType =
            object.sourceType !== undefined && object.sourceType !== null
                ? hTTPSConfig_SourceTypeFromJSON(object.sourceType)
                : 0;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null
                ? String(object.issuer)
                : undefined;
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? String(object.subject)
                : undefined;
        message.dnsNames = ((_a = object.dnsNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.notBefore =
            object.notBefore !== undefined && object.notBefore !== null
                ? fromJsonTimestamp(object.notBefore)
                : undefined;
        message.notAfter =
            object.notAfter !== undefined && object.notAfter !== null
                ? fromJsonTimestamp(object.notAfter)
                : undefined;
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.sourceType !== undefined &&
            (obj.sourceType = hTTPSConfig_SourceTypeToJSON(message.sourceType));
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.subject !== undefined && (obj.subject = message.subject);
        if (message.dnsNames) {
            obj.dnsNames = message.dnsNames.map((e) => e);
        }
        else {
            obj.dnsNames = [];
        }
        message.notBefore !== undefined &&
            (obj.notBefore = message.notBefore.toISOString());
        message.notAfter !== undefined &&
            (obj.notAfter = message.notAfter.toISOString());
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseHTTPSConfig);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.sourceType = (_b = object.sourceType) !== null && _b !== void 0 ? _b : 0;
        message.issuer = (_c = object.issuer) !== null && _c !== void 0 ? _c : undefined;
        message.subject = (_d = object.subject) !== null && _d !== void 0 ? _d : undefined;
        message.dnsNames = ((_e = object.dnsNames) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.notBefore = (_f = object.notBefore) !== null && _f !== void 0 ? _f : undefined;
        message.notAfter = (_g = object.notAfter) !== null && _g !== void 0 ? _g : undefined;
        message.certificateId = (_h = object.certificateId) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HTTPSConfig.$type, exports.HTTPSConfig);
const baseObjectLock = {
    $type: "yandex.cloud.storage.v1.ObjectLock",
    status: 0,
};
exports.ObjectLock = {
    $type: "yandex.cloud.storage.v1.ObjectLock",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.defaultRetention !== undefined) {
            exports.ObjectLock_DefaultRetention.encode(message.defaultRetention, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseObjectLock);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.defaultRetention = exports.ObjectLock_DefaultRetention.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseObjectLock);
        message.status =
            object.status !== undefined && object.status !== null
                ? objectLock_ObjectLockStatusFromJSON(object.status)
                : 0;
        message.defaultRetention =
            object.defaultRetention !== undefined && object.defaultRetention !== null
                ? exports.ObjectLock_DefaultRetention.fromJSON(object.defaultRetention)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = objectLock_ObjectLockStatusToJSON(message.status));
        message.defaultRetention !== undefined &&
            (obj.defaultRetention = message.defaultRetention
                ? exports.ObjectLock_DefaultRetention.toJSON(message.defaultRetention)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseObjectLock);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.defaultRetention =
            object.defaultRetention !== undefined && object.defaultRetention !== null
                ? exports.ObjectLock_DefaultRetention.fromPartial(object.defaultRetention)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ObjectLock.$type, exports.ObjectLock);
const baseObjectLock_DefaultRetention = {
    $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention",
    mode: 0,
};
exports.ObjectLock_DefaultRetention = {
    $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.days !== undefined) {
            writer.uint32(16).int64(message.days);
        }
        if (message.years !== undefined) {
            writer.uint32(24).int64(message.years);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseObjectLock_DefaultRetention);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.days = longToNumber(reader.int64());
                    break;
                case 3:
                    message.years = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseObjectLock_DefaultRetention);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? objectLock_DefaultRetention_ModeFromJSON(object.mode)
                : 0;
        message.days =
            object.days !== undefined && object.days !== null
                ? Number(object.days)
                : undefined;
        message.years =
            object.years !== undefined && object.years !== null
                ? Number(object.years)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = objectLock_DefaultRetention_ModeToJSON(message.mode));
        message.days !== undefined && (obj.days = Math.round(message.days));
        message.years !== undefined && (obj.years = Math.round(message.years));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseObjectLock_DefaultRetention);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.days = (_b = object.days) !== null && _b !== void 0 ? _b : undefined;
        message.years = (_c = object.years) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ObjectLock_DefaultRetention.$type, exports.ObjectLock_DefaultRetention);
const baseEncryption = { $type: "yandex.cloud.storage.v1.Encryption" };
exports.Encryption = {
    $type: "yandex.cloud.storage.v1.Encryption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rules) {
            exports.Encryption_EncryptionRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEncryption);
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.Encryption_EncryptionRule.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseEncryption);
        message.rules = ((_a = object.rules) !== null && _a !== void 0 ? _a : []).map((e) => exports.Encryption_EncryptionRule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? exports.Encryption_EncryptionRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseEncryption);
        message.rules =
            ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Encryption_EncryptionRule.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Encryption.$type, exports.Encryption);
const baseEncryption_EncryptionRule = {
    $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule",
    kmsMasterKeyId: "",
    sseAlgorithm: "",
};
exports.Encryption_EncryptionRule = {
    $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kmsMasterKeyId !== "") {
            writer.uint32(10).string(message.kmsMasterKeyId);
        }
        if (message.sseAlgorithm !== "") {
            writer.uint32(18).string(message.sseAlgorithm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEncryption_EncryptionRule);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kmsMasterKeyId = reader.string();
                    break;
                case 2:
                    message.sseAlgorithm = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEncryption_EncryptionRule);
        message.kmsMasterKeyId =
            object.kmsMasterKeyId !== undefined && object.kmsMasterKeyId !== null
                ? String(object.kmsMasterKeyId)
                : "";
        message.sseAlgorithm =
            object.sseAlgorithm !== undefined && object.sseAlgorithm !== null
                ? String(object.sseAlgorithm)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kmsMasterKeyId !== undefined &&
            (obj.kmsMasterKeyId = message.kmsMasterKeyId);
        message.sseAlgorithm !== undefined &&
            (obj.sseAlgorithm = message.sseAlgorithm);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEncryption_EncryptionRule);
        message.kmsMasterKeyId = (_a = object.kmsMasterKeyId) !== null && _a !== void 0 ? _a : "";
        message.sseAlgorithm = (_b = object.sseAlgorithm) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Encryption_EncryptionRule.$type, exports.Encryption_EncryptionRule);
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
