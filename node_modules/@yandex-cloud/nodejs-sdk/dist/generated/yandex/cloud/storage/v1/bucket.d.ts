import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.storage.v1";
export declare enum Versioning {
    VERSIONING_UNSPECIFIED = 0,
    /**
     * VERSIONING_DISABLED - The bucket is unversioned, i.e. versioning has never been enabled for the bucket, including at its creation.
     * Objects that are stored in the bucket have a version ID of `null`.
     *
     * To enable versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request. Note that this
     * action is irreversible, and a bucket with versioning enabled can never return to `VERSIONING_DISABLED` state.
     */
    VERSIONING_DISABLED = 1,
    /**
     * VERSIONING_ENABLED - Bucket versioning is enabled, i.e. all new objects are versioned and given a unique version ID, and objects that
     * already existed at the time versioning was enabled will be versioned and given a unique version ID when modified
     * by future requests.
     *
     * To suspend versioning, change status to `VERSIONING_SUSPENDED` via a [BucketService.Update] request. You cannot
     * disable versioning altogether for a bucket that already had it enabled; objects that had version IDs will keep
     * them.
     */
    VERSIONING_ENABLED = 2,
    /**
     * VERSIONING_SUSPENDED - Bucket versioning is suspended, i.e. new objects are not versioned, but objects that already existed at the time
     * versioning was suspended are still versioned and keep their version IDs.
     *
     * To resume versioning, change status to `VERSIONING_ENABLED` via a [BucketService.Update] request.
     */
    VERSIONING_SUSPENDED = 3,
    UNRECOGNIZED = -1
}
export declare function versioningFromJSON(object: any): Versioning;
export declare function versioningToJSON(object: Versioning): string;
/**
 * A bucket resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/bucket).
 */
export interface Bucket {
    $type: "yandex.cloud.storage.v1.Bucket";
    /** ID of the bucket. Always equal to [name], which has priority. */
    id: string;
    /**
     * Name of the bucket.
     *
     * The name is unique within the platform. For naming limitations and rules, see
     * [documentation](/docs/storage/concepts/bucket#naming).
     */
    name: string;
    /** ID of the folder that the bucket belongs to. */
    folderId: string;
    /**
     * Flags for configuring public (anonymous) access to the bucket's content and settings.
     * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
     */
    anonymousAccessFlags?: AnonymousAccessFlags;
    /**
     * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
     * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    defaultStorageClass: string;
    /**
     * Bucket versioning status.
     * For details, see [documentation](/docs/storage/concepts/versioning).
     */
    versioning: Versioning;
    /**
     * Maximum size of the bucket, in bytes.
     * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
     */
    maxSize: number;
    /**
     * Bucket policies that set permissions for actions with the bucket, its objects, and groups of objects.
     * For details, see [documentation](/docs/storage/concepts/policy).
     */
    policy?: {
        [key: string]: any;
    };
    /**
     * Access control list (ACL) of the bucket.
     * For details, see [documentation](/docs/storage/concepts/acl).
     */
    acl?: ACL;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * List of rules for cross-domain requests to objects in the bucket (cross-origin resource sharing, CORS).
     * For details, see [documentation](/docs/storage/concepts/cors).
     */
    cors: CorsRule[];
    /**
     * Configuration for hosting a static website in the bucket.
     * For details, see [documentation](/docs/storage/concepts/hosting).
     */
    websiteSettings?: WebsiteSettings;
    /**
     * List of object lifecycle rules for the bucket.
     * For details, see [documentation](/docs/storage/concepts/lifecycles).
     */
    lifecycleRules: LifecycleRule[];
    /**
     * List of tags for the bucket.
     * For details, see [documentation](/docs/resource-manager/concepts/labels).
     */
    tags: Tag[];
    /**
     * Configuration for object lock on the bucket.
     * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
     */
    objectLock?: ObjectLock;
    /**
     * Configuration for bucket's encryption
     * For detauls, see [documentation](/docs/storage/concepts/encryption)
     */
    encryption?: Encryption;
}
export interface Tag {
    $type: "yandex.cloud.storage.v1.Tag";
    /** Key of the bucket tag. */
    key: string;
    /** Value of the bucket tag. */
    value: string;
}
export interface ACL {
    $type: "yandex.cloud.storage.v1.ACL";
    /** List of permissions granted and the grantees. */
    grants: ACL_Grant[];
}
/** A grant resource, used to specify the permission granted and the grantee. */
export interface ACL_Grant {
    $type: "yandex.cloud.storage.v1.ACL.Grant";
    /** Permission granted by the grant. */
    permission: ACL_Grant_Permission;
    /** The grantee type for the grant. */
    grantType: ACL_Grant_GrantType;
    /** ID of the account who is a grantee. Required when the [grant_type] is `GRANT_TYPE_ACCOUNT`. */
    granteeId: string;
}
export declare enum ACL_Grant_Permission {
    PERMISSION_UNSPECIFIED = 0,
    /**
     * PERMISSION_FULL_CONTROL - Allows grantee the `PERMISSION_WRITE`, `PERMISSION_WRITE_ACP`, `PERMISSION_READ`, and `PERMISSION_READ_ACP`
     * on the bucket.
     *
     * Maps to `x-amz-grant-full-control` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    PERMISSION_FULL_CONTROL = 1,
    /**
     * PERMISSION_WRITE - Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also
     * allows deletions and overwrites of those objects.
     *
     * Maps to `x-amz-grant-write` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
     * S3-compatible HTTP API.
     */
    PERMISSION_WRITE = 2,
    /**
     * PERMISSION_WRITE_ACP - Allows grantee to write the ACL for the bucket.
     *
     * Maps to `x-amz-grant-write-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    PERMISSION_WRITE_ACP = 3,
    /**
     * PERMISSION_READ - Allows grantee to list the objects in the bucket.
     *
     * Maps to `x-amz-grant-read` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon
     * S3-compatible HTTP API.
     */
    PERMISSION_READ = 4,
    /**
     * PERMISSION_READ_ACP - Allows grantee to read the bucket ACL
     *
     * Maps to `x-amz-grant-read-acp` header for [bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of
     * Amazon S3-compatible HTTP API.
     */
    PERMISSION_READ_ACP = 5,
    UNRECOGNIZED = -1
}
export declare function aCL_Grant_PermissionFromJSON(object: any): ACL_Grant_Permission;
export declare function aCL_Grant_PermissionToJSON(object: ACL_Grant_Permission): string;
export declare enum ACL_Grant_GrantType {
    GRANT_TYPE_UNSPECIFIED = 0,
    /**
     * GRANT_TYPE_ACCOUNT - A grantee is an [account on the platform](/docs/iam/concepts/#accounts).
     *
     * For this grantee type, you need to specify the user ID in [Bucket.acl.grants.grantee_id] field. To get user ID, see
     * [instruction](/docs/iam/operations/users/get).
     *
     * Maps to using `id="*"` value for `x-amz-grant-*` header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput)
     * method of Amazon S3-compatible HTTP API).
     */
    GRANT_TYPE_ACCOUNT = 1,
    /**
     * GRANT_TYPE_ALL_AUTHENTICATED_USERS - Grantees are all authenticated users, both from your clouds and other users' clouds. Access
     * permission to this group allows any account on the platform to access the resource via a signed (authenticated)
     * request.
     *
     * Maps to using `uri="http://acs.amazonaws.com/groups/global/AuthenticatedUsers"` value for `x-amz-grant-*`
     * header ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
     */
    GRANT_TYPE_ALL_AUTHENTICATED_USERS = 2,
    /**
     * GRANT_TYPE_ALL_USERS - Grantees are all internet users. Access permission to this group allows anyone in the world access to the
     * resource via signed (authenticated) or unsigned (anonymous) requests.
     *
     * Maps to using `uri="http://acs.amazonaws.com/groups/global/AllUsers"` value for `x-amz-grant-*` header
     * ([bucketPutAcl](/docs/storage/s3/api-ref/acl/bucketput) method of Amazon S3-compatible HTTP API).
     */
    GRANT_TYPE_ALL_USERS = 3,
    UNRECOGNIZED = -1
}
export declare function aCL_Grant_GrantTypeFromJSON(object: any): ACL_Grant_GrantType;
export declare function aCL_Grant_GrantTypeToJSON(object: ACL_Grant_GrantType): string;
export interface AnonymousAccessFlags {
    $type: "yandex.cloud.storage.v1.AnonymousAccessFlags";
    /** Specifies whether public (anonymous) access to read objects in the bucket is enabled. */
    read?: boolean;
    /** Specifies whether public (anonymous) access to the list of objects in the bucket is enabled. */
    list?: boolean;
    /**
     * Specifies whether public (anonymous) access to read [CORS](/docs/storage/concepts/cors),
     * [static website hosting](/docs/storage/concepts/hosting), and
     * [object lifecycles](/docs/storage/concepts/lifecycles) settings of the bucket is enabled.
     */
    configRead?: boolean;
}
/**
 * A CORS rule resource.
 * For details about the concept, see [documentation](/docs/storage/concepts/cors).
 */
export interface CorsRule {
    $type: "yandex.cloud.storage.v1.CorsRule";
    /** ID of the CORS rule. */
    id: string;
    /**
     * List of HTTP methods allowed by the CORS rule.
     *
     * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
     * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against
     * the list of the allowed methods. If there is a match, all the allowed methods are listed in the
     * `Access-Control-Allow-Methods` header of the response.
     */
    allowedMethods: CorsRule_Method[];
    /**
     * List of HTTP headers allowed by the CORS rule.
     *
     * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Headers` header (see
     * [S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified headers are checked against
     * the list of the allowed headers. If there is a match, the specified headers that are allowed are listed in the
     * `Access-Control-Allow-Headers` header of the response.
     *
     * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
     * For example, `x-amz-*` value will allow all Amazon S3-compatible headers.
     */
    allowedHeaders: string[];
    /**
     * List of request origins allowed by the CORS rule.
     *
     * Each string in the list can contain at most one `*` wildcard character that matches 0 or more characters.
     * For example, `http://*.example.com` value will allow requests originating from all subdomains of `example.com`.
     */
    allowedOrigins: string[];
    /** List of headers contained in responses to CORS requests that can be accessed by applications. */
    exposeHeaders: string[];
    /**
     * Time in seconds that a client can cache the response to a CORS-preflight request as identified by the
     * object requested, the HTTP method, and the origin.
     */
    maxAgeSeconds?: number;
}
/**
 * List of HTTP methods that are allowed by the CORS rule.
 *
 * When a client sends a CORS-preflight `options` request with the `Access-Control-Request-Method` header (see
 * S3-compatible API reference](/docs/storage/s3/api-ref/object/options)), the specified method is checked against the
 * list of the allowed methods. If there is a match, all the allowed methods are listed in the
 * `Access-Control-Allow-Methods` header of the response.
 */
export declare enum CorsRule_Method {
    METHOD_UNSPECIFIED = 0,
    /** METHOD_GET - HTTP `GET` method. */
    METHOD_GET = 1,
    /** METHOD_HEAD - HTTP `HEAD` method. */
    METHOD_HEAD = 2,
    /** METHOD_POST - HTTP `POST` method. */
    METHOD_POST = 3,
    /** METHOD_PUT - HTTP `PUT` method. */
    METHOD_PUT = 4,
    /** METHOD_DELETE - HTTP `DELETE` method. */
    METHOD_DELETE = 5,
    UNRECOGNIZED = -1
}
export declare function corsRule_MethodFromJSON(object: any): CorsRule_Method;
export declare function corsRule_MethodToJSON(object: CorsRule_Method): string;
export interface WebsiteSettings {
    $type: "yandex.cloud.storage.v1.WebsiteSettings";
    /**
     * Key of the index page object that is returned when a response is made to the root of the website.
     *
     * Either [index] or [redirect_all_requests] must be specified in order for the bucket to host a static website.
     *
     * If specified, the index page object must be located in the root of the bucket.
     */
    index: string;
    /** Key of the error page object that is returned when an error occurs. */
    error: string;
    /**
     * Configuration for redirecting all requests sent to the website.
     *
     * Either [redirect_all_requests] or [index] must be specified in order for the bucket to host a static website.
     * If [redirect_all_requests] is specified, it must be the only field in [Bucket.website_settings].
     */
    redirectAllRequests?: WebsiteSettings_Scheme;
    /** List of redirect rules. */
    routingRules: WebsiteSettings_RoutingRule[];
}
export declare enum WebsiteSettings_Protocol {
    PROTOCOL_UNSPECIFIED = 0,
    /** PROTOCOL_HTTP - `http` scheme. */
    PROTOCOL_HTTP = 1,
    /** PROTOCOL_HTTPS - `https` scheme. */
    PROTOCOL_HTTPS = 2,
    UNRECOGNIZED = -1
}
export declare function websiteSettings_ProtocolFromJSON(object: any): WebsiteSettings_Protocol;
export declare function websiteSettings_ProtocolToJSON(object: WebsiteSettings_Protocol): string;
/** A configuration resource for redirecting all requests sent to the website. */
export interface WebsiteSettings_Scheme {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme";
    /** Scheme of the redirect URI. */
    protocol: WebsiteSettings_Protocol;
    /** Hostname of the redirect URI. */
    hostname: string;
}
export interface WebsiteSettings_Condition {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition";
    /** HTTP status code (number only) that must match for the redirect to apply. */
    httpErrorCodeReturnedEquals: string;
    /** Prefix of the object key from which requests are redirected. */
    keyPrefixEquals: string;
}
export interface WebsiteSettings_Redirect {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect";
    /** Hostname of the redirect URI. */
    hostname: string;
    /**
     * HTTP status code of the redirect response.
     *
     * Default value: `"301"`.
     */
    httpRedirectCode: string;
    /** Scheme of the redirect URI. */
    protocol: WebsiteSettings_Protocol;
    /**
     * Substitution for the prefix of the object key specified in [Condition.key_prefix_equals].
     *
     * At most one of [replace_key_prefix_with] and [replace_key_with] can be specified.
     */
    replaceKeyPrefixWith: string;
    /**
     * New object key.
     *
     * At most one of [replace_key_with] and [replace_key_prefix_with] can be specified.
     */
    replaceKeyWith: string;
}
/** List of redirect rules. */
export interface WebsiteSettings_RoutingRule {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule";
    /** Redirect condition. */
    condition?: WebsiteSettings_Condition;
    /** Redirect instructions. */
    redirect?: WebsiteSettings_Redirect;
}
/**
 * An object lifecycle rule resource for the bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/lifecycles).
 */
export interface LifecycleRule {
    $type: "yandex.cloud.storage.v1.LifecycleRule";
    /** ID of the rule. Provided by the client or generated at creation time. */
    id?: string;
    /** Indicates whether the rule is in effect. */
    enabled: boolean;
    /**
     * Filter that identifies the objects to which the rule applies.
     *
     * If not specified, the rule applies to all objects in the bucket.
     */
    filter?: LifecycleRule_RuleFilter;
    /**
     * Expiration rule.
     *
     * The expiration of an object is described as follows.
     *
     * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is deleted and cannot be
     * recovered.
     *
     * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`), the current version of the
     * object (if it exists and is not a delete marker) is retained as a non-current version, and a delete marker becomes
     * the current version of the object.
     *
     * For the bucket with versioning suspended ([Bucket.versioning] is `VERSIONING_SUSPENDED`), the current version of
     * the object is retained as a non-current version if it is not a delete marker, or is removed otherwise, and a
     * delete marker becomes the current version of the object.
     */
    expiration?: LifecycleRule_Expiration;
    /**
     * List of transition rules.
     *
     * The transition of an object is described as follows.
     *
     * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
     * specified storage class.
     *
     * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
     * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
     */
    transitions: LifecycleRule_Transition[];
    /** Configuration for aborting incomplete [multipart uploads](/docs/storage/concepts/multipart). */
    abortIncompleteMultipartUpload?: LifecycleRule_AfterDays;
    /**
     * Expiration rule for non-current versions of objects in a bucket with versioning enabled ([Bucket.versioning] is
     * `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
     *
     * At expiration, the non-current version of the object is deleted and cannot be recovered.
     */
    noncurrentExpiration?: LifecycleRule_NoncurrentExpiration;
    /**
     * List of transition rules for non-current versions of objects in a bucket with versioning enabled
     * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
     *
     * At transition, the non-current version of the object is transitioned to the specified storage class.
     */
    noncurrentTransitions: LifecycleRule_NoncurrentTransition[];
}
export interface LifecycleRule_AfterDays {
    $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays";
    /**
     * Time period, in number of days from the start of the multipart upload, after which the incomplete upload is
     * aborted.
     */
    daysAfterExpiration?: number;
}
export interface LifecycleRule_NoncurrentExpiration {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration";
    /**
     * Time period, in number of days since the version of an object was classified as non-current, after which the
     * version expires.
     */
    noncurrentDays?: number;
}
/**
 * List of transition rules for non-current versions of objects in a bucket with versioning enabled
 * ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended (`VERSIONING_SUSPENDED`).
 *
 * At transition, the non-current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_NoncurrentTransition {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition";
    /**
     * Time period, in number of days since the version of an object was classified as non-current, after which the
     * version is transitioned.
     */
    noncurrentDays?: number;
    /**
     * Storage class to which a non-current version of an object is transitioned from standard storage.
     *
     * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
     * to standard storage and transitions to or from ice storage are not allowed.
     */
    storageClass: string;
}
/**
 * List of transition rules.
 *
 * The transition of an object is described as follows.
 *
 * For the unversioned bucket ([Bucket.versioning] is `VERSIONING_DISABLED`), the object is transitioned to the
 * specified storage class.
 *
 * For the bucket with versioning enabled ([Bucket.versioning] is `VERSIONING_ENABLED`) or suspended
 * (`VERSIONING_SUSPENDED`), the current version of the object is transitioned to the specified storage class.
 */
export interface LifecycleRule_Transition {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Transition";
    /**
     * Specific date of object transition.
     *
     * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket are
     * transitioned immediately.
     *
     * At most one of [date] and [days] fields can be specified.
     */
    date?: Date;
    /**
     * Time period, in number of days from the creation or modification of the object, after which an object is
     * transitioned.
     *
     * At most one of [days] and [date] fields can be specified.
     */
    days?: number;
    /**
     * Storage class to which an object is transitioned from standard storage.
     *
     * The only supported class is cold storage (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms). Transitions from cold
     * to standard storage and transitions to or from ice storage are not allowed.
     */
    storageClass: string;
}
export interface LifecycleRule_Expiration {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration";
    /**
     * Specific date of object expiration.
     *
     * The rule continues to apply even after the date has passed, i.e. any new objects created in the bucket expire
     * immediately.
     *
     * Exactly one of [date], [days], and [expired_object_delete_marker] fields can be specified.
     */
    date?: Date;
    /**
     * Time period, in number of days from the creation or modification of the object, after which an object expires.
     *
     * Exactly one of [days], [date], and [expired_object_delete_marker] fields can be specified.
     */
    days?: number;
    /**
     * Indicates whether a delete marker of an object with no non-current versions (referred to as an expired object
     * delete marker) is removed at the object's expiration.
     *
     * Exactly one of [expired_object_delete_marker], [date], and [days] fields can be specified.
     */
    expiredObjectDeleteMarker?: boolean;
}
export interface LifecycleRule_RuleFilter {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter";
    /** Key prefix that the object must have in order for the rule to apply. */
    prefix: string;
    /** Size that the object must be greater. */
    objectSizeGreaterThan?: number;
    /** Size that the object must be less t. */
    objectSizeLessThan?: number;
}
export interface Counters {
    $type: "yandex.cloud.storage.v1.Counters";
    /** Total size of objects uploaded in single operation, in bytes. */
    simpleObjectSize: number;
    /** Number of objects uploaded in single operation. */
    simpleObjectCount: number;
    /** Total size of uploaded parts in incomplete multipart uploads, in bytes. */
    objectsPartsSize: number;
    /** Number of uploaded parts in incomplete multipart uploads. */
    objectsPartsCount: number;
    /** Total size of objects uploaded in multiple parts, in bytes. */
    multipartObjectsSize: number;
    /** Number of objects uploaded in multiple parts. */
    multipartObjectsCount: number;
    /** Number of incomplete multipart uploads. */
    activeMultipartCount: number;
}
/** A resource for size of available space in a bucket for a storage class. */
export interface OptionalSizeByClass {
    $type: "yandex.cloud.storage.v1.OptionalSizeByClass";
    /**
     * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
     * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    storageClass: string;
    /** Size of available space in the bucket for the storage class. */
    classSize?: number;
}
/** A resource for size of used space in a bucket for a storage class. */
export interface SizeByClass {
    $type: "yandex.cloud.storage.v1.SizeByClass";
    /**
     * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
     * all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    storageClass: string;
    /** Size of used space in the bucket for the storage class. */
    classSize: number;
}
/** A resource for object-related statistics for a storage class by type of upload (simple vs. multipart). */
export interface CountersByClass {
    $type: "yandex.cloud.storage.v1.CountersByClass";
    /**
     * Storage class. Supported classes are standard storage (`STANDARD`), cold storage (`COLD`, `STANDARD_IA`, `NEARLINE`
     * all synonyms), and ice storage (`ice` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    storageClass: string;
    /** Object-related statistics for the storage class by type of upload. */
    counters?: Counters;
}
/** A bucket statistics resource. */
export interface BucketStats {
    $type: "yandex.cloud.storage.v1.BucketStats";
    /** Name of the bucket. */
    name: string;
    /** Maximum size of the bucket, in bytes. */
    maxSize?: number;
    /** Size of used space in the bucket, in bytes. */
    usedSize: number;
    /** Size of available space in the bucket by storage class, in bytes. */
    storageClassMaxSizes: OptionalSizeByClass[];
    /** Size of used space in the bucket by storage class, in bytes. */
    storageClassUsedSizes: SizeByClass[];
    /** Object-related statistics by storage class and type of upload (simple vs. multipart), in bytes. */
    storageClassCounters: CountersByClass[];
    /**
     * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
     * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    defaultStorageClass?: string;
    /**
     * Flags for configuring public (anonymous) access to the bucket's content and settings.
     * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
     */
    anonymousAccessFlags?: AnonymousAccessFlags;
    /** Bucket creation timestamp. */
    createdAt?: Date;
    /** Bucket latest update timestamp. */
    updatedAt?: Date;
}
/** A resource for HTTPS configuration of a bucket. */
export interface HTTPSConfig {
    $type: "yandex.cloud.storage.v1.HTTPSConfig";
    /** Name of the bucket. */
    name: string;
    /** Type of TLS certificate source. */
    sourceType: HTTPSConfig_SourceType;
    /** Issuer of the TLS certificate. */
    issuer?: string;
    /** Subject of the TLS certificate. */
    subject?: string;
    /** List of DNS names of the TLS certificate (Subject Alternative Name field). */
    dnsNames: string[];
    /** Start of the TLS certificate validity period (Not Before field). */
    notBefore?: Date;
    /** End of the TLS certificate validity period (Not After field) */
    notAfter?: Date;
    /**
     * ID of the TLS certificate in Certificate Manager.
     *
     * To get information about the certificate from Certificate Manager, make a
     * [yandex.cloud.certificatemanager.v1.CertificateService.Get] request.
     */
    certificateId: string;
}
/** A resource for type of TLS certificate source. */
export declare enum HTTPSConfig_SourceType {
    SOURCE_TYPE_UNSPECIFIED = 0,
    /** SOURCE_TYPE_SELF_MANAGED - Your certificate, uploaded directly. */
    SOURCE_TYPE_SELF_MANAGED = 1,
    /** SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER - Certificate managed by Certificate Manager. */
    SOURCE_TYPE_MANAGED_BY_CERTIFICATE_MANAGER = 2,
    UNRECOGNIZED = -1
}
export declare function hTTPSConfig_SourceTypeFromJSON(object: any): HTTPSConfig_SourceType;
export declare function hTTPSConfig_SourceTypeToJSON(object: HTTPSConfig_SourceType): string;
/**
 * A resource for Object Lock configuration of a bucket.
 * For details about the concept, see [documentation](/docs/storage/concepts/object-lock).
 */
export interface ObjectLock {
    $type: "yandex.cloud.storage.v1.ObjectLock";
    status: ObjectLock_ObjectLockStatus;
    defaultRetention?: ObjectLock_DefaultRetention;
}
/** Activity status of the object lock settings on the bucket */
export declare enum ObjectLock_ObjectLockStatus {
    OBJECT_LOCK_STATUS_UNSPECIFIED = 0,
    OBJECT_LOCK_STATUS_DISABLED = 1,
    OBJECT_LOCK_STATUS_ENABLED = 2,
    UNRECOGNIZED = -1
}
export declare function objectLock_ObjectLockStatusFromJSON(object: any): ObjectLock_ObjectLockStatus;
export declare function objectLock_ObjectLockStatusToJSON(object: ObjectLock_ObjectLockStatus): string;
/** Default lock configuration for added objects */
export interface ObjectLock_DefaultRetention {
    $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention";
    mode: ObjectLock_DefaultRetention_Mode;
    /** Number of days for locking */
    days: number | undefined;
    /** Number of years for locking */
    years: number | undefined;
}
/** Lock type */
export declare enum ObjectLock_DefaultRetention_Mode {
    MODE_UNSPECIFIED = 0,
    MODE_GOVERNANCE = 1,
    MODE_COMPLIANCE = 2,
    UNRECOGNIZED = -1
}
export declare function objectLock_DefaultRetention_ModeFromJSON(object: any): ObjectLock_DefaultRetention_Mode;
export declare function objectLock_DefaultRetention_ModeToJSON(object: ObjectLock_DefaultRetention_Mode): string;
export interface Encryption {
    $type: "yandex.cloud.storage.v1.Encryption";
    rules: Encryption_EncryptionRule[];
}
export interface Encryption_EncryptionRule {
    $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule";
    kmsMasterKeyId: string;
    sseAlgorithm: string;
}
export declare const Bucket: {
    $type: "yandex.cloud.storage.v1.Bucket";
    encode(message: Bucket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Bucket;
    fromJSON(object: any): Bucket;
    toJSON(message: Bucket): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        maxSize?: number | undefined;
        cors?: {
            id?: string | undefined;
            allowedMethods?: CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        }[] | undefined;
        tags?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
        policy?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
        defaultStorageClass?: string | undefined;
        versioning?: Versioning | undefined;
        anonymousAccessFlags?: {
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } | undefined;
        acl?: {
            grants?: {
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } | undefined;
        websiteSettings?: {
            error?: string | undefined;
            index?: string | undefined;
            redirectAllRequests?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
            } | undefined;
            routingRules?: {
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } | undefined;
                condition?: {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        lifecycleRules?: {
            id?: string | undefined;
            filter?: {
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            expiration?: {
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } | undefined;
            transitions?: {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[] | undefined;
            abortIncompleteMultipartUpload?: {
                daysAfterExpiration?: number | undefined;
            } | undefined;
            noncurrentExpiration?: {
                noncurrentDays?: number | undefined;
            } | undefined;
            noncurrentTransitions?: {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        objectLock?: {
            status?: ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: {
                mode?: ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } | undefined;
        } | undefined;
        encryption?: {
            rules?: {
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        maxSize?: number | undefined;
        cors?: ({
            id?: string | undefined;
            allowedMethods?: CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        }[] & ({
            id?: string | undefined;
            allowedMethods?: CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        } & {
            id?: string | undefined;
            allowedMethods?: (CorsRule_Method[] & CorsRule_Method[] & Record<Exclude<keyof I["cors"][number]["allowedMethods"], "$type" | keyof CorsRule_Method[]>, never>) | undefined;
            allowedHeaders?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["allowedHeaders"], "$type" | keyof string[]>, never>) | undefined;
            allowedOrigins?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["allowedOrigins"], "$type" | keyof string[]>, never>) | undefined;
            exposeHeaders?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["exposeHeaders"], "$type" | keyof string[]>, never>) | undefined;
            maxAgeSeconds?: number | undefined;
        } & Record<Exclude<keyof I["cors"][number], "$type" | "id" | "allowedMethods" | "allowedHeaders" | "allowedOrigins" | "exposeHeaders" | "maxAgeSeconds">, never>)[] & Record<Exclude<keyof I["cors"], "$type" | keyof {
            id?: string | undefined;
            allowedMethods?: CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        }[]>, never>) | undefined;
        tags?: ({
            value?: string | undefined;
            key?: string | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
        } & Record<Exclude<keyof I["tags"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["tags"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
        }[]>, never>) | undefined;
        policy?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["policy"], string | number>, never>) | undefined;
        defaultStorageClass?: string | undefined;
        versioning?: Versioning | undefined;
        anonymousAccessFlags?: ({
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } & {
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } & Record<Exclude<keyof I["anonymousAccessFlags"], "$type" | "list" | "read" | "configRead">, never>) | undefined;
        acl?: ({
            grants?: {
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } & {
            grants?: ({
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] & ({
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & {
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & Record<Exclude<keyof I["acl"]["grants"][number], "$type" | "permission" | "grantType" | "granteeId">, never>)[] & Record<Exclude<keyof I["acl"]["grants"], "$type" | keyof {
                permission?: ACL_Grant_Permission | undefined;
                grantType?: ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["acl"], "$type" | "grants">, never>) | undefined;
        websiteSettings?: ({
            error?: string | undefined;
            index?: string | undefined;
            redirectAllRequests?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
            } | undefined;
            routingRules?: {
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } | undefined;
                condition?: {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            error?: string | undefined;
            index?: string | undefined;
            redirectAllRequests?: ({
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
            } & {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
            } & Record<Exclude<keyof I["websiteSettings"]["redirectAllRequests"], "$type" | "hostname" | "protocol">, never>) | undefined;
            routingRules?: ({
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } | undefined;
                condition?: {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } | undefined;
            }[] & ({
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } | undefined;
                condition?: {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } | undefined;
            } & {
                redirect?: ({
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } & {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } & Record<Exclude<keyof I["websiteSettings"]["routingRules"][number]["redirect"], "$type" | "hostname" | "protocol" | "httpRedirectCode" | "replaceKeyPrefixWith" | "replaceKeyWith">, never>) | undefined;
                condition?: ({
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } & {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } & Record<Exclude<keyof I["websiteSettings"]["routingRules"][number]["condition"], "$type" | "httpErrorCodeReturnedEquals" | "keyPrefixEquals">, never>) | undefined;
            } & Record<Exclude<keyof I["websiteSettings"]["routingRules"][number], "$type" | "redirect" | "condition">, never>)[] & Record<Exclude<keyof I["websiteSettings"]["routingRules"], "$type" | keyof {
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } | undefined;
                condition?: {
                    httpErrorCodeReturnedEquals?: string | undefined;
                    keyPrefixEquals?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["websiteSettings"], "$type" | "error" | "index" | "redirectAllRequests" | "routingRules">, never>) | undefined;
        lifecycleRules?: ({
            id?: string | undefined;
            filter?: {
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            expiration?: {
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } | undefined;
            transitions?: {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[] | undefined;
            abortIncompleteMultipartUpload?: {
                daysAfterExpiration?: number | undefined;
            } | undefined;
            noncurrentExpiration?: {
                noncurrentDays?: number | undefined;
            } | undefined;
            noncurrentTransitions?: {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[] | undefined;
        }[] & ({
            id?: string | undefined;
            filter?: {
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            expiration?: {
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } | undefined;
            transitions?: {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[] | undefined;
            abortIncompleteMultipartUpload?: {
                daysAfterExpiration?: number | undefined;
            } | undefined;
            noncurrentExpiration?: {
                noncurrentDays?: number | undefined;
            } | undefined;
            noncurrentTransitions?: {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            filter?: ({
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } & {
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["filter"], "$type" | "prefix" | "objectSizeGreaterThan" | "objectSizeLessThan">, never>) | undefined;
            enabled?: boolean | undefined;
            expiration?: ({
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } & {
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["expiration"], "$type" | "days" | "date" | "expiredObjectDeleteMarker">, never>) | undefined;
            transitions?: ({
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[] & ({
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            } & {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["transitions"][number], "$type" | "days" | "date" | "storageClass">, never>)[] & Record<Exclude<keyof I["lifecycleRules"][number]["transitions"], "$type" | keyof {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[]>, never>) | undefined;
            abortIncompleteMultipartUpload?: ({
                daysAfterExpiration?: number | undefined;
            } & {
                daysAfterExpiration?: number | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["abortIncompleteMultipartUpload"], "$type" | "daysAfterExpiration">, never>) | undefined;
            noncurrentExpiration?: ({
                noncurrentDays?: number | undefined;
            } & {
                noncurrentDays?: number | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["noncurrentExpiration"], "$type" | "noncurrentDays">, never>) | undefined;
            noncurrentTransitions?: ({
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[] & ({
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            } & {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            } & Record<Exclude<keyof I["lifecycleRules"][number]["noncurrentTransitions"][number], "$type" | "storageClass" | "noncurrentDays">, never>)[] & Record<Exclude<keyof I["lifecycleRules"][number]["noncurrentTransitions"], "$type" | keyof {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lifecycleRules"][number], "$type" | "id" | "filter" | "enabled" | "expiration" | "transitions" | "abortIncompleteMultipartUpload" | "noncurrentExpiration" | "noncurrentTransitions">, never>)[] & Record<Exclude<keyof I["lifecycleRules"], "$type" | keyof {
            id?: string | undefined;
            filter?: {
                prefix?: string | undefined;
                objectSizeGreaterThan?: number | undefined;
                objectSizeLessThan?: number | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            expiration?: {
                days?: number | undefined;
                date?: Date | undefined;
                expiredObjectDeleteMarker?: boolean | undefined;
            } | undefined;
            transitions?: {
                days?: number | undefined;
                date?: Date | undefined;
                storageClass?: string | undefined;
            }[] | undefined;
            abortIncompleteMultipartUpload?: {
                daysAfterExpiration?: number | undefined;
            } | undefined;
            noncurrentExpiration?: {
                noncurrentDays?: number | undefined;
            } | undefined;
            noncurrentTransitions?: {
                storageClass?: string | undefined;
                noncurrentDays?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        objectLock?: ({
            status?: ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: {
                mode?: ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } | undefined;
        } & {
            status?: ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: ({
                mode?: ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } & {
                mode?: ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } & Record<Exclude<keyof I["objectLock"]["defaultRetention"], "$type" | "mode" | "days" | "years">, never>) | undefined;
        } & Record<Exclude<keyof I["objectLock"], "$type" | "status" | "defaultRetention">, never>) | undefined;
        encryption?: ({
            rules?: {
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            }[] | undefined;
        } & {
            rules?: ({
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            }[] & ({
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            } & {
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            } & Record<Exclude<keyof I["encryption"]["rules"][number], "$type" | "kmsMasterKeyId" | "sseAlgorithm">, never>)[] & Record<Exclude<keyof I["encryption"]["rules"], "$type" | keyof {
                kmsMasterKeyId?: string | undefined;
                sseAlgorithm?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["encryption"], "$type" | "rules">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "folderId" | "maxSize" | "cors" | "tags" | "policy" | "defaultStorageClass" | "versioning" | "anonymousAccessFlags" | "acl" | "websiteSettings" | "lifecycleRules" | "objectLock" | "encryption">, never>>(object: I): Bucket;
};
export declare const Tag: {
    $type: "yandex.cloud.storage.v1.Tag";
    encode(message: Tag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Tag;
    fromJSON(object: any): Tag;
    toJSON(message: Tag): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Tag;
};
export declare const ACL: {
    $type: "yandex.cloud.storage.v1.ACL";
    encode(message: ACL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ACL;
    fromJSON(object: any): ACL;
    toJSON(message: ACL): unknown;
    fromPartial<I extends {
        grants?: {
            permission?: ACL_Grant_Permission | undefined;
            grantType?: ACL_Grant_GrantType | undefined;
            granteeId?: string | undefined;
        }[] | undefined;
    } & {
        grants?: ({
            permission?: ACL_Grant_Permission | undefined;
            grantType?: ACL_Grant_GrantType | undefined;
            granteeId?: string | undefined;
        }[] & ({
            permission?: ACL_Grant_Permission | undefined;
            grantType?: ACL_Grant_GrantType | undefined;
            granteeId?: string | undefined;
        } & {
            permission?: ACL_Grant_Permission | undefined;
            grantType?: ACL_Grant_GrantType | undefined;
            granteeId?: string | undefined;
        } & Record<Exclude<keyof I["grants"][number], "$type" | "permission" | "grantType" | "granteeId">, never>)[] & Record<Exclude<keyof I["grants"], "$type" | keyof {
            permission?: ACL_Grant_Permission | undefined;
            grantType?: ACL_Grant_GrantType | undefined;
            granteeId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "grants">, never>>(object: I): ACL;
};
export declare const ACL_Grant: {
    $type: "yandex.cloud.storage.v1.ACL.Grant";
    encode(message: ACL_Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ACL_Grant;
    fromJSON(object: any): ACL_Grant;
    toJSON(message: ACL_Grant): unknown;
    fromPartial<I extends {
        permission?: ACL_Grant_Permission | undefined;
        grantType?: ACL_Grant_GrantType | undefined;
        granteeId?: string | undefined;
    } & {
        permission?: ACL_Grant_Permission | undefined;
        grantType?: ACL_Grant_GrantType | undefined;
        granteeId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "permission" | "grantType" | "granteeId">, never>>(object: I): ACL_Grant;
};
export declare const AnonymousAccessFlags: {
    $type: "yandex.cloud.storage.v1.AnonymousAccessFlags";
    encode(message: AnonymousAccessFlags, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnonymousAccessFlags;
    fromJSON(object: any): AnonymousAccessFlags;
    toJSON(message: AnonymousAccessFlags): unknown;
    fromPartial<I extends {
        list?: boolean | undefined;
        read?: boolean | undefined;
        configRead?: boolean | undefined;
    } & {
        list?: boolean | undefined;
        read?: boolean | undefined;
        configRead?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "list" | "read" | "configRead">, never>>(object: I): AnonymousAccessFlags;
};
export declare const CorsRule: {
    $type: "yandex.cloud.storage.v1.CorsRule";
    encode(message: CorsRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CorsRule;
    fromJSON(object: any): CorsRule;
    toJSON(message: CorsRule): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        allowedMethods?: CorsRule_Method[] | undefined;
        allowedHeaders?: string[] | undefined;
        allowedOrigins?: string[] | undefined;
        exposeHeaders?: string[] | undefined;
        maxAgeSeconds?: number | undefined;
    } & {
        id?: string | undefined;
        allowedMethods?: (CorsRule_Method[] & CorsRule_Method[] & Record<Exclude<keyof I["allowedMethods"], "$type" | keyof CorsRule_Method[]>, never>) | undefined;
        allowedHeaders?: (string[] & string[] & Record<Exclude<keyof I["allowedHeaders"], "$type" | keyof string[]>, never>) | undefined;
        allowedOrigins?: (string[] & string[] & Record<Exclude<keyof I["allowedOrigins"], "$type" | keyof string[]>, never>) | undefined;
        exposeHeaders?: (string[] & string[] & Record<Exclude<keyof I["exposeHeaders"], "$type" | keyof string[]>, never>) | undefined;
        maxAgeSeconds?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "allowedMethods" | "allowedHeaders" | "allowedOrigins" | "exposeHeaders" | "maxAgeSeconds">, never>>(object: I): CorsRule;
};
export declare const WebsiteSettings: {
    $type: "yandex.cloud.storage.v1.WebsiteSettings";
    encode(message: WebsiteSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebsiteSettings;
    fromJSON(object: any): WebsiteSettings;
    toJSON(message: WebsiteSettings): unknown;
    fromPartial<I extends {
        error?: string | undefined;
        index?: string | undefined;
        redirectAllRequests?: {
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
        } | undefined;
        routingRules?: {
            redirect?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } | undefined;
            condition?: {
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        error?: string | undefined;
        index?: string | undefined;
        redirectAllRequests?: ({
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
        } & {
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
        } & Record<Exclude<keyof I["redirectAllRequests"], "$type" | "hostname" | "protocol">, never>) | undefined;
        routingRules?: ({
            redirect?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } | undefined;
            condition?: {
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } | undefined;
        }[] & ({
            redirect?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } | undefined;
            condition?: {
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } | undefined;
        } & {
            redirect?: ({
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } & {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } & Record<Exclude<keyof I["routingRules"][number]["redirect"], "$type" | "hostname" | "protocol" | "httpRedirectCode" | "replaceKeyPrefixWith" | "replaceKeyWith">, never>) | undefined;
            condition?: ({
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } & {
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } & Record<Exclude<keyof I["routingRules"][number]["condition"], "$type" | "httpErrorCodeReturnedEquals" | "keyPrefixEquals">, never>) | undefined;
        } & Record<Exclude<keyof I["routingRules"][number], "$type" | "redirect" | "condition">, never>)[] & Record<Exclude<keyof I["routingRules"], "$type" | keyof {
            redirect?: {
                hostname?: string | undefined;
                protocol?: WebsiteSettings_Protocol | undefined;
                httpRedirectCode?: string | undefined;
                replaceKeyPrefixWith?: string | undefined;
                replaceKeyWith?: string | undefined;
            } | undefined;
            condition?: {
                httpErrorCodeReturnedEquals?: string | undefined;
                keyPrefixEquals?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "error" | "index" | "redirectAllRequests" | "routingRules">, never>>(object: I): WebsiteSettings;
};
export declare const WebsiteSettings_Scheme: {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Scheme";
    encode(message: WebsiteSettings_Scheme, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebsiteSettings_Scheme;
    fromJSON(object: any): WebsiteSettings_Scheme;
    toJSON(message: WebsiteSettings_Scheme): unknown;
    fromPartial<I extends {
        hostname?: string | undefined;
        protocol?: WebsiteSettings_Protocol | undefined;
    } & {
        hostname?: string | undefined;
        protocol?: WebsiteSettings_Protocol | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostname" | "protocol">, never>>(object: I): WebsiteSettings_Scheme;
};
export declare const WebsiteSettings_Condition: {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Condition";
    encode(message: WebsiteSettings_Condition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebsiteSettings_Condition;
    fromJSON(object: any): WebsiteSettings_Condition;
    toJSON(message: WebsiteSettings_Condition): unknown;
    fromPartial<I extends {
        httpErrorCodeReturnedEquals?: string | undefined;
        keyPrefixEquals?: string | undefined;
    } & {
        httpErrorCodeReturnedEquals?: string | undefined;
        keyPrefixEquals?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpErrorCodeReturnedEquals" | "keyPrefixEquals">, never>>(object: I): WebsiteSettings_Condition;
};
export declare const WebsiteSettings_Redirect: {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.Redirect";
    encode(message: WebsiteSettings_Redirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebsiteSettings_Redirect;
    fromJSON(object: any): WebsiteSettings_Redirect;
    toJSON(message: WebsiteSettings_Redirect): unknown;
    fromPartial<I extends {
        hostname?: string | undefined;
        protocol?: WebsiteSettings_Protocol | undefined;
        httpRedirectCode?: string | undefined;
        replaceKeyPrefixWith?: string | undefined;
        replaceKeyWith?: string | undefined;
    } & {
        hostname?: string | undefined;
        protocol?: WebsiteSettings_Protocol | undefined;
        httpRedirectCode?: string | undefined;
        replaceKeyPrefixWith?: string | undefined;
        replaceKeyWith?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "hostname" | "protocol" | "httpRedirectCode" | "replaceKeyPrefixWith" | "replaceKeyWith">, never>>(object: I): WebsiteSettings_Redirect;
};
export declare const WebsiteSettings_RoutingRule: {
    $type: "yandex.cloud.storage.v1.WebsiteSettings.RoutingRule";
    encode(message: WebsiteSettings_RoutingRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebsiteSettings_RoutingRule;
    fromJSON(object: any): WebsiteSettings_RoutingRule;
    toJSON(message: WebsiteSettings_RoutingRule): unknown;
    fromPartial<I extends {
        redirect?: {
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
            httpRedirectCode?: string | undefined;
            replaceKeyPrefixWith?: string | undefined;
            replaceKeyWith?: string | undefined;
        } | undefined;
        condition?: {
            httpErrorCodeReturnedEquals?: string | undefined;
            keyPrefixEquals?: string | undefined;
        } | undefined;
    } & {
        redirect?: ({
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
            httpRedirectCode?: string | undefined;
            replaceKeyPrefixWith?: string | undefined;
            replaceKeyWith?: string | undefined;
        } & {
            hostname?: string | undefined;
            protocol?: WebsiteSettings_Protocol | undefined;
            httpRedirectCode?: string | undefined;
            replaceKeyPrefixWith?: string | undefined;
            replaceKeyWith?: string | undefined;
        } & Record<Exclude<keyof I["redirect"], "$type" | "hostname" | "protocol" | "httpRedirectCode" | "replaceKeyPrefixWith" | "replaceKeyWith">, never>) | undefined;
        condition?: ({
            httpErrorCodeReturnedEquals?: string | undefined;
            keyPrefixEquals?: string | undefined;
        } & {
            httpErrorCodeReturnedEquals?: string | undefined;
            keyPrefixEquals?: string | undefined;
        } & Record<Exclude<keyof I["condition"], "$type" | "httpErrorCodeReturnedEquals" | "keyPrefixEquals">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "redirect" | "condition">, never>>(object: I): WebsiteSettings_RoutingRule;
};
export declare const LifecycleRule: {
    $type: "yandex.cloud.storage.v1.LifecycleRule";
    encode(message: LifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule;
    fromJSON(object: any): LifecycleRule;
    toJSON(message: LifecycleRule): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        filter?: {
            prefix?: string | undefined;
            objectSizeGreaterThan?: number | undefined;
            objectSizeLessThan?: number | undefined;
        } | undefined;
        enabled?: boolean | undefined;
        expiration?: {
            days?: number | undefined;
            date?: Date | undefined;
            expiredObjectDeleteMarker?: boolean | undefined;
        } | undefined;
        transitions?: {
            days?: number | undefined;
            date?: Date | undefined;
            storageClass?: string | undefined;
        }[] | undefined;
        abortIncompleteMultipartUpload?: {
            daysAfterExpiration?: number | undefined;
        } | undefined;
        noncurrentExpiration?: {
            noncurrentDays?: number | undefined;
        } | undefined;
        noncurrentTransitions?: {
            storageClass?: string | undefined;
            noncurrentDays?: number | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        filter?: ({
            prefix?: string | undefined;
            objectSizeGreaterThan?: number | undefined;
            objectSizeLessThan?: number | undefined;
        } & {
            prefix?: string | undefined;
            objectSizeGreaterThan?: number | undefined;
            objectSizeLessThan?: number | undefined;
        } & Record<Exclude<keyof I["filter"], "$type" | "prefix" | "objectSizeGreaterThan" | "objectSizeLessThan">, never>) | undefined;
        enabled?: boolean | undefined;
        expiration?: ({
            days?: number | undefined;
            date?: Date | undefined;
            expiredObjectDeleteMarker?: boolean | undefined;
        } & {
            days?: number | undefined;
            date?: Date | undefined;
            expiredObjectDeleteMarker?: boolean | undefined;
        } & Record<Exclude<keyof I["expiration"], "$type" | "days" | "date" | "expiredObjectDeleteMarker">, never>) | undefined;
        transitions?: ({
            days?: number | undefined;
            date?: Date | undefined;
            storageClass?: string | undefined;
        }[] & ({
            days?: number | undefined;
            date?: Date | undefined;
            storageClass?: string | undefined;
        } & {
            days?: number | undefined;
            date?: Date | undefined;
            storageClass?: string | undefined;
        } & Record<Exclude<keyof I["transitions"][number], "$type" | "days" | "date" | "storageClass">, never>)[] & Record<Exclude<keyof I["transitions"], "$type" | keyof {
            days?: number | undefined;
            date?: Date | undefined;
            storageClass?: string | undefined;
        }[]>, never>) | undefined;
        abortIncompleteMultipartUpload?: ({
            daysAfterExpiration?: number | undefined;
        } & {
            daysAfterExpiration?: number | undefined;
        } & Record<Exclude<keyof I["abortIncompleteMultipartUpload"], "$type" | "daysAfterExpiration">, never>) | undefined;
        noncurrentExpiration?: ({
            noncurrentDays?: number | undefined;
        } & {
            noncurrentDays?: number | undefined;
        } & Record<Exclude<keyof I["noncurrentExpiration"], "$type" | "noncurrentDays">, never>) | undefined;
        noncurrentTransitions?: ({
            storageClass?: string | undefined;
            noncurrentDays?: number | undefined;
        }[] & ({
            storageClass?: string | undefined;
            noncurrentDays?: number | undefined;
        } & {
            storageClass?: string | undefined;
            noncurrentDays?: number | undefined;
        } & Record<Exclude<keyof I["noncurrentTransitions"][number], "$type" | "storageClass" | "noncurrentDays">, never>)[] & Record<Exclude<keyof I["noncurrentTransitions"], "$type" | keyof {
            storageClass?: string | undefined;
            noncurrentDays?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "filter" | "enabled" | "expiration" | "transitions" | "abortIncompleteMultipartUpload" | "noncurrentExpiration" | "noncurrentTransitions">, never>>(object: I): LifecycleRule;
};
export declare const LifecycleRule_AfterDays: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.AfterDays";
    encode(message: LifecycleRule_AfterDays, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_AfterDays;
    fromJSON(object: any): LifecycleRule_AfterDays;
    toJSON(message: LifecycleRule_AfterDays): unknown;
    fromPartial<I extends {
        daysAfterExpiration?: number | undefined;
    } & {
        daysAfterExpiration?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "daysAfterExpiration">, never>>(object: I): LifecycleRule_AfterDays;
};
export declare const LifecycleRule_NoncurrentExpiration: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentExpiration";
    encode(message: LifecycleRule_NoncurrentExpiration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_NoncurrentExpiration;
    fromJSON(object: any): LifecycleRule_NoncurrentExpiration;
    toJSON(message: LifecycleRule_NoncurrentExpiration): unknown;
    fromPartial<I extends {
        noncurrentDays?: number | undefined;
    } & {
        noncurrentDays?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "noncurrentDays">, never>>(object: I): LifecycleRule_NoncurrentExpiration;
};
export declare const LifecycleRule_NoncurrentTransition: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.NoncurrentTransition";
    encode(message: LifecycleRule_NoncurrentTransition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_NoncurrentTransition;
    fromJSON(object: any): LifecycleRule_NoncurrentTransition;
    toJSON(message: LifecycleRule_NoncurrentTransition): unknown;
    fromPartial<I extends {
        storageClass?: string | undefined;
        noncurrentDays?: number | undefined;
    } & {
        storageClass?: string | undefined;
        noncurrentDays?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageClass" | "noncurrentDays">, never>>(object: I): LifecycleRule_NoncurrentTransition;
};
export declare const LifecycleRule_Transition: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Transition";
    encode(message: LifecycleRule_Transition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_Transition;
    fromJSON(object: any): LifecycleRule_Transition;
    toJSON(message: LifecycleRule_Transition): unknown;
    fromPartial<I extends {
        days?: number | undefined;
        date?: Date | undefined;
        storageClass?: string | undefined;
    } & {
        days?: number | undefined;
        date?: Date | undefined;
        storageClass?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "days" | "date" | "storageClass">, never>>(object: I): LifecycleRule_Transition;
};
export declare const LifecycleRule_Expiration: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.Expiration";
    encode(message: LifecycleRule_Expiration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_Expiration;
    fromJSON(object: any): LifecycleRule_Expiration;
    toJSON(message: LifecycleRule_Expiration): unknown;
    fromPartial<I extends {
        days?: number | undefined;
        date?: Date | undefined;
        expiredObjectDeleteMarker?: boolean | undefined;
    } & {
        days?: number | undefined;
        date?: Date | undefined;
        expiredObjectDeleteMarker?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "days" | "date" | "expiredObjectDeleteMarker">, never>>(object: I): LifecycleRule_Expiration;
};
export declare const LifecycleRule_RuleFilter: {
    $type: "yandex.cloud.storage.v1.LifecycleRule.RuleFilter";
    encode(message: LifecycleRule_RuleFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule_RuleFilter;
    fromJSON(object: any): LifecycleRule_RuleFilter;
    toJSON(message: LifecycleRule_RuleFilter): unknown;
    fromPartial<I extends {
        prefix?: string | undefined;
        objectSizeGreaterThan?: number | undefined;
        objectSizeLessThan?: number | undefined;
    } & {
        prefix?: string | undefined;
        objectSizeGreaterThan?: number | undefined;
        objectSizeLessThan?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "prefix" | "objectSizeGreaterThan" | "objectSizeLessThan">, never>>(object: I): LifecycleRule_RuleFilter;
};
export declare const Counters: {
    $type: "yandex.cloud.storage.v1.Counters";
    encode(message: Counters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Counters;
    fromJSON(object: any): Counters;
    toJSON(message: Counters): unknown;
    fromPartial<I extends {
        simpleObjectSize?: number | undefined;
        simpleObjectCount?: number | undefined;
        objectsPartsSize?: number | undefined;
        objectsPartsCount?: number | undefined;
        multipartObjectsSize?: number | undefined;
        multipartObjectsCount?: number | undefined;
        activeMultipartCount?: number | undefined;
    } & {
        simpleObjectSize?: number | undefined;
        simpleObjectCount?: number | undefined;
        objectsPartsSize?: number | undefined;
        objectsPartsCount?: number | undefined;
        multipartObjectsSize?: number | undefined;
        multipartObjectsCount?: number | undefined;
        activeMultipartCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "simpleObjectSize" | "simpleObjectCount" | "objectsPartsSize" | "objectsPartsCount" | "multipartObjectsSize" | "multipartObjectsCount" | "activeMultipartCount">, never>>(object: I): Counters;
};
export declare const OptionalSizeByClass: {
    $type: "yandex.cloud.storage.v1.OptionalSizeByClass";
    encode(message: OptionalSizeByClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OptionalSizeByClass;
    fromJSON(object: any): OptionalSizeByClass;
    toJSON(message: OptionalSizeByClass): unknown;
    fromPartial<I extends {
        storageClass?: string | undefined;
        classSize?: number | undefined;
    } & {
        storageClass?: string | undefined;
        classSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageClass" | "classSize">, never>>(object: I): OptionalSizeByClass;
};
export declare const SizeByClass: {
    $type: "yandex.cloud.storage.v1.SizeByClass";
    encode(message: SizeByClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SizeByClass;
    fromJSON(object: any): SizeByClass;
    toJSON(message: SizeByClass): unknown;
    fromPartial<I extends {
        storageClass?: string | undefined;
        classSize?: number | undefined;
    } & {
        storageClass?: string | undefined;
        classSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageClass" | "classSize">, never>>(object: I): SizeByClass;
};
export declare const CountersByClass: {
    $type: "yandex.cloud.storage.v1.CountersByClass";
    encode(message: CountersByClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CountersByClass;
    fromJSON(object: any): CountersByClass;
    toJSON(message: CountersByClass): unknown;
    fromPartial<I extends {
        storageClass?: string | undefined;
        counters?: {
            simpleObjectSize?: number | undefined;
            simpleObjectCount?: number | undefined;
            objectsPartsSize?: number | undefined;
            objectsPartsCount?: number | undefined;
            multipartObjectsSize?: number | undefined;
            multipartObjectsCount?: number | undefined;
            activeMultipartCount?: number | undefined;
        } | undefined;
    } & {
        storageClass?: string | undefined;
        counters?: ({
            simpleObjectSize?: number | undefined;
            simpleObjectCount?: number | undefined;
            objectsPartsSize?: number | undefined;
            objectsPartsCount?: number | undefined;
            multipartObjectsSize?: number | undefined;
            multipartObjectsCount?: number | undefined;
            activeMultipartCount?: number | undefined;
        } & {
            simpleObjectSize?: number | undefined;
            simpleObjectCount?: number | undefined;
            objectsPartsSize?: number | undefined;
            objectsPartsCount?: number | undefined;
            multipartObjectsSize?: number | undefined;
            multipartObjectsCount?: number | undefined;
            activeMultipartCount?: number | undefined;
        } & Record<Exclude<keyof I["counters"], "$type" | "simpleObjectSize" | "simpleObjectCount" | "objectsPartsSize" | "objectsPartsCount" | "multipartObjectsSize" | "multipartObjectsCount" | "activeMultipartCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "storageClass" | "counters">, never>>(object: I): CountersByClass;
};
export declare const BucketStats: {
    $type: "yandex.cloud.storage.v1.BucketStats";
    encode(message: BucketStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BucketStats;
    fromJSON(object: any): BucketStats;
    toJSON(message: BucketStats): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        createdAt?: Date | undefined;
        maxSize?: number | undefined;
        updatedAt?: Date | undefined;
        defaultStorageClass?: string | undefined;
        anonymousAccessFlags?: {
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } | undefined;
        usedSize?: number | undefined;
        storageClassMaxSizes?: {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[] | undefined;
        storageClassUsedSizes?: {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[] | undefined;
        storageClassCounters?: {
            storageClass?: string | undefined;
            counters?: {
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        createdAt?: Date | undefined;
        maxSize?: number | undefined;
        updatedAt?: Date | undefined;
        defaultStorageClass?: string | undefined;
        anonymousAccessFlags?: ({
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } & {
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } & Record<Exclude<keyof I["anonymousAccessFlags"], "$type" | "list" | "read" | "configRead">, never>) | undefined;
        usedSize?: number | undefined;
        storageClassMaxSizes?: ({
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[] & ({
            storageClass?: string | undefined;
            classSize?: number | undefined;
        } & {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        } & Record<Exclude<keyof I["storageClassMaxSizes"][number], "$type" | "storageClass" | "classSize">, never>)[] & Record<Exclude<keyof I["storageClassMaxSizes"], "$type" | keyof {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[]>, never>) | undefined;
        storageClassUsedSizes?: ({
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[] & ({
            storageClass?: string | undefined;
            classSize?: number | undefined;
        } & {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        } & Record<Exclude<keyof I["storageClassUsedSizes"][number], "$type" | "storageClass" | "classSize">, never>)[] & Record<Exclude<keyof I["storageClassUsedSizes"], "$type" | keyof {
            storageClass?: string | undefined;
            classSize?: number | undefined;
        }[]>, never>) | undefined;
        storageClassCounters?: ({
            storageClass?: string | undefined;
            counters?: {
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } | undefined;
        }[] & ({
            storageClass?: string | undefined;
            counters?: {
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } | undefined;
        } & {
            storageClass?: string | undefined;
            counters?: ({
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } & {
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } & Record<Exclude<keyof I["storageClassCounters"][number]["counters"], "$type" | "simpleObjectSize" | "simpleObjectCount" | "objectsPartsSize" | "objectsPartsCount" | "multipartObjectsSize" | "multipartObjectsCount" | "activeMultipartCount">, never>) | undefined;
        } & Record<Exclude<keyof I["storageClassCounters"][number], "$type" | "storageClass" | "counters">, never>)[] & Record<Exclude<keyof I["storageClassCounters"], "$type" | keyof {
            storageClass?: string | undefined;
            counters?: {
                simpleObjectSize?: number | undefined;
                simpleObjectCount?: number | undefined;
                objectsPartsSize?: number | undefined;
                objectsPartsCount?: number | undefined;
                multipartObjectsSize?: number | undefined;
                multipartObjectsCount?: number | undefined;
                activeMultipartCount?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "createdAt" | "maxSize" | "updatedAt" | "defaultStorageClass" | "anonymousAccessFlags" | "usedSize" | "storageClassMaxSizes" | "storageClassUsedSizes" | "storageClassCounters">, never>>(object: I): BucketStats;
};
export declare const HTTPSConfig: {
    $type: "yandex.cloud.storage.v1.HTTPSConfig";
    encode(message: HTTPSConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HTTPSConfig;
    fromJSON(object: any): HTTPSConfig;
    toJSON(message: HTTPSConfig): unknown;
    fromPartial<I extends {
        subject?: string | undefined;
        name?: string | undefined;
        issuer?: string | undefined;
        notAfter?: Date | undefined;
        notBefore?: Date | undefined;
        certificateId?: string | undefined;
        sourceType?: HTTPSConfig_SourceType | undefined;
        dnsNames?: string[] | undefined;
    } & {
        subject?: string | undefined;
        name?: string | undefined;
        issuer?: string | undefined;
        notAfter?: Date | undefined;
        notBefore?: Date | undefined;
        certificateId?: string | undefined;
        sourceType?: HTTPSConfig_SourceType | undefined;
        dnsNames?: (string[] & string[] & Record<Exclude<keyof I["dnsNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subject" | "name" | "issuer" | "notAfter" | "notBefore" | "certificateId" | "sourceType" | "dnsNames">, never>>(object: I): HTTPSConfig;
};
export declare const ObjectLock: {
    $type: "yandex.cloud.storage.v1.ObjectLock";
    encode(message: ObjectLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectLock;
    fromJSON(object: any): ObjectLock;
    toJSON(message: ObjectLock): unknown;
    fromPartial<I extends {
        status?: ObjectLock_ObjectLockStatus | undefined;
        defaultRetention?: {
            mode?: ObjectLock_DefaultRetention_Mode | undefined;
            days?: number | undefined;
            years?: number | undefined;
        } | undefined;
    } & {
        status?: ObjectLock_ObjectLockStatus | undefined;
        defaultRetention?: ({
            mode?: ObjectLock_DefaultRetention_Mode | undefined;
            days?: number | undefined;
            years?: number | undefined;
        } & {
            mode?: ObjectLock_DefaultRetention_Mode | undefined;
            days?: number | undefined;
            years?: number | undefined;
        } & Record<Exclude<keyof I["defaultRetention"], "$type" | "mode" | "days" | "years">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "defaultRetention">, never>>(object: I): ObjectLock;
};
export declare const ObjectLock_DefaultRetention: {
    $type: "yandex.cloud.storage.v1.ObjectLock.DefaultRetention";
    encode(message: ObjectLock_DefaultRetention, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectLock_DefaultRetention;
    fromJSON(object: any): ObjectLock_DefaultRetention;
    toJSON(message: ObjectLock_DefaultRetention): unknown;
    fromPartial<I extends {
        mode?: ObjectLock_DefaultRetention_Mode | undefined;
        days?: number | undefined;
        years?: number | undefined;
    } & {
        mode?: ObjectLock_DefaultRetention_Mode | undefined;
        days?: number | undefined;
        years?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "days" | "years">, never>>(object: I): ObjectLock_DefaultRetention;
};
export declare const Encryption: {
    $type: "yandex.cloud.storage.v1.Encryption";
    encode(message: Encryption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Encryption;
    fromJSON(object: any): Encryption;
    toJSON(message: Encryption): unknown;
    fromPartial<I extends {
        rules?: {
            kmsMasterKeyId?: string | undefined;
            sseAlgorithm?: string | undefined;
        }[] | undefined;
    } & {
        rules?: ({
            kmsMasterKeyId?: string | undefined;
            sseAlgorithm?: string | undefined;
        }[] & ({
            kmsMasterKeyId?: string | undefined;
            sseAlgorithm?: string | undefined;
        } & {
            kmsMasterKeyId?: string | undefined;
            sseAlgorithm?: string | undefined;
        } & Record<Exclude<keyof I["rules"][number], "$type" | "kmsMasterKeyId" | "sseAlgorithm">, never>)[] & Record<Exclude<keyof I["rules"], "$type" | keyof {
            kmsMasterKeyId?: string | undefined;
            sseAlgorithm?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "rules">, never>>(object: I): Encryption;
};
export declare const Encryption_EncryptionRule: {
    $type: "yandex.cloud.storage.v1.Encryption.EncryptionRule";
    encode(message: Encryption_EncryptionRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Encryption_EncryptionRule;
    fromJSON(object: any): Encryption_EncryptionRule;
    toJSON(message: Encryption_EncryptionRule): unknown;
    fromPartial<I extends {
        kmsMasterKeyId?: string | undefined;
        sseAlgorithm?: string | undefined;
    } & {
        kmsMasterKeyId?: string | undefined;
        sseAlgorithm?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "kmsMasterKeyId" | "sseAlgorithm">, never>>(object: I): Encryption_EncryptionRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
