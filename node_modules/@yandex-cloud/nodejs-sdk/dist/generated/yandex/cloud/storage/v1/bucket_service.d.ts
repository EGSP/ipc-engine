/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { AnonymousAccessFlags, ACL, WebsiteSettings, Versioning, ObjectLock, Encryption, Bucket, Tag, CorsRule, LifecycleRule, BucketStats, HTTPSConfig } from "../../../../yandex/cloud/storage/v1/bucket";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.storage.v1";
export interface GetBucketRequest {
    $type: "yandex.cloud.storage.v1.GetBucketRequest";
    /**
     * Name of the bucket to return.
     *
     * To get the bucket name, make a [BucketService.List] request.
     */
    name: string;
    /**
     * Scope of information about the bucket to return.
     *
     * Access to scopes is managed via [Identity and Access Management roles](/docs/storage/security),
     * bucket [ACL](/docs/storage/concepts/acl) and [policies](/docs/storage/concepts/policy).
     */
    view: GetBucketRequest_View;
}
export declare enum GetBucketRequest_View {
    VIEW_UNSPECIFIED = 0,
    /**
     * VIEW_BASIC - Returns basic information about a bucket.
     *
     * The following fields will _not_ be returned: [Bucket.acl], [Bucket.cors], [Bucket.website_settings],
     * [Bucket.lifecycle_rules], [Bucket.tags].
     */
    VIEW_BASIC = 1,
    /**
     * VIEW_ACL - Returns basic information and access control list (ACL) for the bucket.
     *
     * The following fields will _not_ be returned: [Bucket.cors], [Bucket.website_settings], [Bucket.lifecycle_rules],
     * [Bucket.tags].
     */
    VIEW_ACL = 2,
    /** VIEW_FULL - Returns full information about a bucket. */
    VIEW_FULL = 3,
    UNRECOGNIZED = -1
}
export declare function getBucketRequest_ViewFromJSON(object: any): GetBucketRequest_View;
export declare function getBucketRequest_ViewToJSON(object: GetBucketRequest_View): string;
export interface ListBucketsRequest {
    $type: "yandex.cloud.storage.v1.ListBucketsRequest";
    /**
     * ID of the folder to list buckets in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
}
export interface ListBucketsResponse {
    $type: "yandex.cloud.storage.v1.ListBucketsResponse";
    /** List of buckets in the specified folder. */
    buckets: Bucket[];
}
export interface CreateBucketRequest {
    $type: "yandex.cloud.storage.v1.CreateBucketRequest";
    /**
     * Name of the bucket.
     *
     * The name must be unique within the platform. For naming limitations and rules, see
     * [documentation](/docs/storage/concepts/bucket#naming).
     */
    name: string;
    /**
     * ID of the folder to create a bucket in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Default storage class for objects in the bucket. Supported classes are standard storage (`STANDARD`), cold storage
     * (`COLD`, `STANDARD_IA`, `NEARLINE` all synonyms), and ice storage (`ICE` and `GLACIER` are synonyms).
     * For details, see [documentation](/docs/storage/concepts/storage-class).
     */
    defaultStorageClass: string;
    /**
     * Maximum size of the bucket.
     * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
     */
    maxSize: number;
    /**
     * Flags for configuring public (anonymous) access to the bucket's content and settings.
     * For details, see [documentation](/docs/storage/concepts/bucket#bucket-access).
     */
    anonymousAccessFlags?: AnonymousAccessFlags;
    /**
     * Access control list (ACL) of the bucket.
     * For details, see [documentation](/docs/storage/concepts/acl).
     */
    acl?: ACL;
    /**
     * List of tags for the bucket.
     * For details, see [documentation](/docs/resource-manager/concepts/labels).
     */
    tags: Tag[];
}
export interface CreateBucketMetadata {
    $type: "yandex.cloud.storage.v1.CreateBucketMetadata";
    /** Name of the bucket that is being created. */
    name: string;
}
export interface UpdateBucketRequest {
    $type: "yandex.cloud.storage.v1.UpdateBucketRequest";
    /**
     * Name of the bucket to update.
     *
     * The name cannot be updated.
     *
     * To get the bucket name, make a [BucketService.List] request.
     */
    name: string;
    /**
     * Update mask that specifies which attributes of the bucket should be updated.
     * Use * for full update.
     */
    updateMask?: FieldMask;
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
     * Maximum size of the bucket, in bytes.
     * For details, see [documentation](/docs/storage/operations/buckets/limit-max-volume).
     */
    maxSize: number;
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
     * Bucket versioning status.
     * For details, see [documentation](/docs/storage/concepts/versioning).
     */
    versioning: Versioning;
    /**
     * List of object lifecycle rules for the bucket.
     * For details, see [documentation](/docs/storage/concepts/lifecycles).
     */
    lifecycleRules: LifecycleRule[];
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
export interface UpdateBucketMetadata {
    $type: "yandex.cloud.storage.v1.UpdateBucketMetadata";
    /** Name of the bucket that is being updated. */
    name: string;
}
/** DeleteBucketRequest deletes requested bucket from the Cloud. */
export interface DeleteBucketRequest {
    $type: "yandex.cloud.storage.v1.DeleteBucketRequest";
    /**
     * Name of the bucket to update.
     *
     * To get the bucket name, make a [BucketService.List] request.
     */
    name: string;
}
export interface DeleteBucketMetadata {
    $type: "yandex.cloud.storage.v1.DeleteBucketMetadata";
    /** Name of the bucket that is being deleted. */
    name: string;
}
export interface GetBucketStatsRequest {
    $type: "yandex.cloud.storage.v1.GetBucketStatsRequest";
    /** Name of the bucket to return the statistics for. */
    name: string;
}
export interface GetBucketHTTPSConfigRequest {
    $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest";
    /** Name of the bucket to return the HTTPS configuration for. */
    name: string;
}
export interface SelfManagedHTTPSConfigParams {
    $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams";
    /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificate. */
    certificatePem: string;
    /** [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded private key for the certificate. */
    privateKeyPem: string;
}
/** A resource for a TLS certificate from Certificate Manager. */
export interface CertificateManagerHTTPSConfigParams {
    $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams";
    /**
     * ID of the certificate.
     *
     * To get the list of all available certificates, make a [yandex.cloud.certificatemanager.v1.CertificateService.List]
     * request.
     */
    certificateId: string;
}
export interface SetBucketHTTPSConfigRequest {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest";
    /** Name of the bucket to update the HTTPS configuration for. */
    name: string;
    /**
     * Your TLS certificate, uploaded directly.
     *
     * Object Storage only supports [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)-encoded certificates.
     */
    selfManaged?: SelfManagedHTTPSConfigParams | undefined;
    /**
     * TLS certificate from Certificate Manager.
     *
     * To create a certificate in Certificate Manager, make a
     * [yandex.cloud.certificatemanager.v1.CertificateService.Create] request.
     */
    certificateManager?: CertificateManagerHTTPSConfigParams | undefined;
}
export interface SetBucketHTTPSConfigMetadata {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata";
    /** Name of the bucket the HTTPS configuration is being updated for. */
    name: string;
}
export interface DeleteBucketHTTPSConfigRequest {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest";
    /** Name of the bucket to delete the HTTPS configuration for. */
    name: string;
}
export interface DeleteBucketHTTPSConfigMetadata {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata";
    /** Name of the bucket the HTTPS configuration is being deleted for. */
    name: string;
}
export declare const GetBucketRequest: {
    $type: "yandex.cloud.storage.v1.GetBucketRequest";
    encode(message: GetBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBucketRequest;
    fromJSON(object: any): GetBucketRequest;
    toJSON(message: GetBucketRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        view?: GetBucketRequest_View | undefined;
    } & {
        name?: string | undefined;
        view?: GetBucketRequest_View | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "view">, never>>(object: I): GetBucketRequest;
};
export declare const ListBucketsRequest: {
    $type: "yandex.cloud.storage.v1.ListBucketsRequest";
    encode(message: ListBucketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBucketsRequest;
    fromJSON(object: any): ListBucketsRequest;
    toJSON(message: ListBucketsRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): ListBucketsRequest;
};
export declare const ListBucketsResponse: {
    $type: "yandex.cloud.storage.v1.ListBucketsResponse";
    encode(message: ListBucketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBucketsResponse;
    fromJSON(object: any): ListBucketsResponse;
    toJSON(message: ListBucketsResponse): unknown;
    fromPartial<I extends {
        buckets?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            maxSize?: number | undefined;
            cors?: {
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] | undefined;
            } | undefined;
            websiteSettings?: {
                error?: string | undefined;
                index?: string | undefined;
                redirectAllRequests?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } | undefined;
                routingRules?: {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
        }[] | undefined;
    } & {
        buckets?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            maxSize?: number | undefined;
            cors?: {
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] | undefined;
            } | undefined;
            websiteSettings?: {
                error?: string | undefined;
                index?: string | undefined;
                redirectAllRequests?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } | undefined;
                routingRules?: {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            maxSize?: number | undefined;
            cors?: {
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] | undefined;
            } | undefined;
            websiteSettings?: {
                error?: string | undefined;
                index?: string | undefined;
                redirectAllRequests?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } | undefined;
                routingRules?: {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
                allowedHeaders?: string[] | undefined;
                allowedOrigins?: string[] | undefined;
                exposeHeaders?: string[] | undefined;
                maxAgeSeconds?: number | undefined;
            }[] & ({
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
                allowedHeaders?: string[] | undefined;
                allowedOrigins?: string[] | undefined;
                exposeHeaders?: string[] | undefined;
                maxAgeSeconds?: number | undefined;
            } & {
                id?: string | undefined;
                allowedMethods?: (import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] & import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] & Record<Exclude<keyof I["buckets"][number]["cors"][number]["allowedMethods"], "$type" | keyof import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[]>, never>) | undefined;
                allowedHeaders?: (string[] & string[] & Record<Exclude<keyof I["buckets"][number]["cors"][number]["allowedHeaders"], "$type" | keyof string[]>, never>) | undefined;
                allowedOrigins?: (string[] & string[] & Record<Exclude<keyof I["buckets"][number]["cors"][number]["allowedOrigins"], "$type" | keyof string[]>, never>) | undefined;
                exposeHeaders?: (string[] & string[] & Record<Exclude<keyof I["buckets"][number]["cors"][number]["exposeHeaders"], "$type" | keyof string[]>, never>) | undefined;
                maxAgeSeconds?: number | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["cors"][number], "$type" | "id" | "allowedMethods" | "allowedHeaders" | "allowedOrigins" | "exposeHeaders" | "maxAgeSeconds">, never>)[] & Record<Exclude<keyof I["buckets"][number]["cors"], "$type" | keyof {
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
            } & Record<Exclude<keyof I["buckets"][number]["tags"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["buckets"][number]["tags"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
            }[]>, never>) | undefined;
            policy?: ({
                [x: string]: any;
                [x: number]: any;
            } & {
                [x: string]: any;
                [x: number]: any;
            } & Record<Exclude<keyof I["buckets"][number]["policy"], string | number>, never>) | undefined;
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
            } & Record<Exclude<keyof I["buckets"][number]["anonymousAccessFlags"], "$type" | "list" | "read" | "configRead">, never>) | undefined;
            acl?: ({
                grants?: {
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] | undefined;
            } & {
                grants?: ({
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] & ({
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                } & {
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["acl"]["grants"][number], "$type" | "permission" | "grantType" | "granteeId">, never>)[] & Record<Exclude<keyof I["buckets"][number]["acl"]["grants"], "$type" | keyof {
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["acl"], "$type" | "grants">, never>) | undefined;
            websiteSettings?: ({
                error?: string | undefined;
                index?: string | undefined;
                redirectAllRequests?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } | undefined;
                routingRules?: {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } & {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["websiteSettings"]["redirectAllRequests"], "$type" | "hostname" | "protocol">, never>) | undefined;
                routingRules?: ({
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                        httpRedirectCode?: string | undefined;
                        replaceKeyPrefixWith?: string | undefined;
                        replaceKeyWith?: string | undefined;
                    } & {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                        httpRedirectCode?: string | undefined;
                        replaceKeyPrefixWith?: string | undefined;
                        replaceKeyWith?: string | undefined;
                    } & Record<Exclude<keyof I["buckets"][number]["websiteSettings"]["routingRules"][number]["redirect"], "$type" | "hostname" | "protocol" | "httpRedirectCode" | "replaceKeyPrefixWith" | "replaceKeyWith">, never>) | undefined;
                    condition?: ({
                        httpErrorCodeReturnedEquals?: string | undefined;
                        keyPrefixEquals?: string | undefined;
                    } & {
                        httpErrorCodeReturnedEquals?: string | undefined;
                        keyPrefixEquals?: string | undefined;
                    } & Record<Exclude<keyof I["buckets"][number]["websiteSettings"]["routingRules"][number]["condition"], "$type" | "httpErrorCodeReturnedEquals" | "keyPrefixEquals">, never>) | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["websiteSettings"]["routingRules"][number], "$type" | "redirect" | "condition">, never>)[] & Record<Exclude<keyof I["buckets"][number]["websiteSettings"]["routingRules"], "$type" | keyof {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                        httpRedirectCode?: string | undefined;
                        replaceKeyPrefixWith?: string | undefined;
                        replaceKeyWith?: string | undefined;
                    } | undefined;
                    condition?: {
                        httpErrorCodeReturnedEquals?: string | undefined;
                        keyPrefixEquals?: string | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["websiteSettings"], "$type" | "error" | "index" | "redirectAllRequests" | "routingRules">, never>) | undefined;
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
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["filter"], "$type" | "prefix" | "objectSizeGreaterThan" | "objectSizeLessThan">, never>) | undefined;
                enabled?: boolean | undefined;
                expiration?: ({
                    days?: number | undefined;
                    date?: Date | undefined;
                    expiredObjectDeleteMarker?: boolean | undefined;
                } & {
                    days?: number | undefined;
                    date?: Date | undefined;
                    expiredObjectDeleteMarker?: boolean | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["expiration"], "$type" | "days" | "date" | "expiredObjectDeleteMarker">, never>) | undefined;
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
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["transitions"][number], "$type" | "days" | "date" | "storageClass">, never>)[] & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["transitions"], "$type" | keyof {
                    days?: number | undefined;
                    date?: Date | undefined;
                    storageClass?: string | undefined;
                }[]>, never>) | undefined;
                abortIncompleteMultipartUpload?: ({
                    daysAfterExpiration?: number | undefined;
                } & {
                    daysAfterExpiration?: number | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["abortIncompleteMultipartUpload"], "$type" | "daysAfterExpiration">, never>) | undefined;
                noncurrentExpiration?: ({
                    noncurrentDays?: number | undefined;
                } & {
                    noncurrentDays?: number | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["noncurrentExpiration"], "$type" | "noncurrentDays">, never>) | undefined;
                noncurrentTransitions?: ({
                    storageClass?: string | undefined;
                    noncurrentDays?: number | undefined;
                }[] & ({
                    storageClass?: string | undefined;
                    noncurrentDays?: number | undefined;
                } & {
                    storageClass?: string | undefined;
                    noncurrentDays?: number | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["noncurrentTransitions"][number], "$type" | "storageClass" | "noncurrentDays">, never>)[] & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number]["noncurrentTransitions"], "$type" | keyof {
                    storageClass?: string | undefined;
                    noncurrentDays?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"][number], "$type" | "id" | "filter" | "enabled" | "expiration" | "transitions" | "abortIncompleteMultipartUpload" | "noncurrentExpiration" | "noncurrentTransitions">, never>)[] & Record<Exclude<keyof I["buckets"][number]["lifecycleRules"], "$type" | keyof {
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
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
                    days?: number | undefined;
                    years?: number | undefined;
                } | undefined;
            } & {
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: ({
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
                    days?: number | undefined;
                    years?: number | undefined;
                } & {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
                    days?: number | undefined;
                    years?: number | undefined;
                } & Record<Exclude<keyof I["buckets"][number]["objectLock"]["defaultRetention"], "$type" | "mode" | "days" | "years">, never>) | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["objectLock"], "$type" | "status" | "defaultRetention">, never>) | undefined;
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
                } & Record<Exclude<keyof I["buckets"][number]["encryption"]["rules"][number], "$type" | "kmsMasterKeyId" | "sseAlgorithm">, never>)[] & Record<Exclude<keyof I["buckets"][number]["encryption"]["rules"], "$type" | keyof {
                    kmsMasterKeyId?: string | undefined;
                    sseAlgorithm?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["buckets"][number]["encryption"], "$type" | "rules">, never>) | undefined;
        } & Record<Exclude<keyof I["buckets"][number], "$type" | "id" | "name" | "createdAt" | "folderId" | "maxSize" | "cors" | "tags" | "policy" | "defaultStorageClass" | "versioning" | "anonymousAccessFlags" | "acl" | "websiteSettings" | "lifecycleRules" | "objectLock" | "encryption">, never>)[] & Record<Exclude<keyof I["buckets"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            maxSize?: number | undefined;
            cors?: {
                id?: string | undefined;
                allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                    permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                    grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                    granteeId?: string | undefined;
                }[] | undefined;
            } | undefined;
            websiteSettings?: {
                error?: string | undefined;
                index?: string | undefined;
                redirectAllRequests?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                } | undefined;
                routingRules?: {
                    redirect?: {
                        hostname?: string | undefined;
                        protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
                defaultRetention?: {
                    mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "buckets">, never>>(object: I): ListBucketsResponse;
};
export declare const CreateBucketRequest: {
    $type: "yandex.cloud.storage.v1.CreateBucketRequest";
    encode(message: CreateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBucketRequest;
    fromJSON(object: any): CreateBucketRequest;
    toJSON(message: CreateBucketRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        folderId?: string | undefined;
        maxSize?: number | undefined;
        tags?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
        defaultStorageClass?: string | undefined;
        anonymousAccessFlags?: {
            list?: boolean | undefined;
            read?: boolean | undefined;
            configRead?: boolean | undefined;
        } | undefined;
        acl?: {
            grants?: {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        folderId?: string | undefined;
        maxSize?: number | undefined;
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
        acl?: ({
            grants?: {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } & {
            grants?: ({
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] & ({
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & Record<Exclude<keyof I["acl"]["grants"][number], "$type" | "permission" | "grantType" | "granteeId">, never>)[] & Record<Exclude<keyof I["acl"]["grants"], "$type" | keyof {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["acl"], "$type" | "grants">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "folderId" | "maxSize" | "tags" | "defaultStorageClass" | "anonymousAccessFlags" | "acl">, never>>(object: I): CreateBucketRequest;
};
export declare const CreateBucketMetadata: {
    $type: "yandex.cloud.storage.v1.CreateBucketMetadata";
    encode(message: CreateBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBucketMetadata;
    fromJSON(object: any): CreateBucketMetadata;
    toJSON(message: CreateBucketMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): CreateBucketMetadata;
};
export declare const UpdateBucketRequest: {
    $type: "yandex.cloud.storage.v1.UpdateBucketRequest";
    encode(message: UpdateBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBucketRequest;
    fromJSON(object: any): UpdateBucketRequest;
    toJSON(message: UpdateBucketRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        maxSize?: number | undefined;
        cors?: {
            id?: string | undefined;
            allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } | undefined;
        websiteSettings?: {
            error?: string | undefined;
            index?: string | undefined;
            redirectAllRequests?: {
                hostname?: string | undefined;
                protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
            } | undefined;
            routingRules?: {
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
            status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: {
                mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        maxSize?: number | undefined;
        cors?: ({
            id?: string | undefined;
            allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        }[] & ({
            id?: string | undefined;
            allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
            allowedHeaders?: string[] | undefined;
            allowedOrigins?: string[] | undefined;
            exposeHeaders?: string[] | undefined;
            maxAgeSeconds?: number | undefined;
        } & {
            id?: string | undefined;
            allowedMethods?: (import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] & import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] & Record<Exclude<keyof I["cors"][number]["allowedMethods"], "$type" | keyof import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[]>, never>) | undefined;
            allowedHeaders?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["allowedHeaders"], "$type" | keyof string[]>, never>) | undefined;
            allowedOrigins?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["allowedOrigins"], "$type" | keyof string[]>, never>) | undefined;
            exposeHeaders?: (string[] & string[] & Record<Exclude<keyof I["cors"][number]["exposeHeaders"], "$type" | keyof string[]>, never>) | undefined;
            maxAgeSeconds?: number | undefined;
        } & Record<Exclude<keyof I["cors"][number], "$type" | "id" | "allowedMethods" | "allowedHeaders" | "allowedOrigins" | "exposeHeaders" | "maxAgeSeconds">, never>)[] & Record<Exclude<keyof I["cors"], "$type" | keyof {
            id?: string | undefined;
            allowedMethods?: import("../../../../yandex/cloud/storage/v1/bucket").CorsRule_Method[] | undefined;
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
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] | undefined;
        } & {
            grants?: ({
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[] & ({
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            } & Record<Exclude<keyof I["acl"]["grants"][number], "$type" | "permission" | "grantType" | "granteeId">, never>)[] & Record<Exclude<keyof I["acl"]["grants"], "$type" | keyof {
                permission?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_Permission | undefined;
                grantType?: import("../../../../yandex/cloud/storage/v1/bucket").ACL_Grant_GrantType | undefined;
                granteeId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["acl"], "$type" | "grants">, never>) | undefined;
        websiteSettings?: ({
            error?: string | undefined;
            index?: string | undefined;
            redirectAllRequests?: {
                hostname?: string | undefined;
                protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
            } | undefined;
            routingRules?: {
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
            } & {
                hostname?: string | undefined;
                protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
            } & Record<Exclude<keyof I["websiteSettings"]["redirectAllRequests"], "$type" | "hostname" | "protocol">, never>) | undefined;
            routingRules?: ({
                redirect?: {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
                    httpRedirectCode?: string | undefined;
                    replaceKeyPrefixWith?: string | undefined;
                    replaceKeyWith?: string | undefined;
                } & {
                    hostname?: string | undefined;
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
                    protocol?: import("../../../../yandex/cloud/storage/v1/bucket").WebsiteSettings_Protocol | undefined;
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
            status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: {
                mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } | undefined;
        } & {
            status?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_ObjectLockStatus | undefined;
            defaultRetention?: ({
                mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
                days?: number | undefined;
                years?: number | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/storage/v1/bucket").ObjectLock_DefaultRetention_Mode | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "name" | "updateMask" | "maxSize" | "cors" | "tags" | "policy" | "defaultStorageClass" | "versioning" | "anonymousAccessFlags" | "acl" | "websiteSettings" | "lifecycleRules" | "objectLock" | "encryption">, never>>(object: I): UpdateBucketRequest;
};
export declare const UpdateBucketMetadata: {
    $type: "yandex.cloud.storage.v1.UpdateBucketMetadata";
    encode(message: UpdateBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBucketMetadata;
    fromJSON(object: any): UpdateBucketMetadata;
    toJSON(message: UpdateBucketMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): UpdateBucketMetadata;
};
export declare const DeleteBucketRequest: {
    $type: "yandex.cloud.storage.v1.DeleteBucketRequest";
    encode(message: DeleteBucketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBucketRequest;
    fromJSON(object: any): DeleteBucketRequest;
    toJSON(message: DeleteBucketRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): DeleteBucketRequest;
};
export declare const DeleteBucketMetadata: {
    $type: "yandex.cloud.storage.v1.DeleteBucketMetadata";
    encode(message: DeleteBucketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBucketMetadata;
    fromJSON(object: any): DeleteBucketMetadata;
    toJSON(message: DeleteBucketMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): DeleteBucketMetadata;
};
export declare const GetBucketStatsRequest: {
    $type: "yandex.cloud.storage.v1.GetBucketStatsRequest";
    encode(message: GetBucketStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBucketStatsRequest;
    fromJSON(object: any): GetBucketStatsRequest;
    toJSON(message: GetBucketStatsRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): GetBucketStatsRequest;
};
export declare const GetBucketHTTPSConfigRequest: {
    $type: "yandex.cloud.storage.v1.GetBucketHTTPSConfigRequest";
    encode(message: GetBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBucketHTTPSConfigRequest;
    fromJSON(object: any): GetBucketHTTPSConfigRequest;
    toJSON(message: GetBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): GetBucketHTTPSConfigRequest;
};
export declare const SelfManagedHTTPSConfigParams: {
    $type: "yandex.cloud.storage.v1.SelfManagedHTTPSConfigParams";
    encode(message: SelfManagedHTTPSConfigParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SelfManagedHTTPSConfigParams;
    fromJSON(object: any): SelfManagedHTTPSConfigParams;
    toJSON(message: SelfManagedHTTPSConfigParams): unknown;
    fromPartial<I extends {
        certificatePem?: string | undefined;
        privateKeyPem?: string | undefined;
    } & {
        certificatePem?: string | undefined;
        privateKeyPem?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificatePem" | "privateKeyPem">, never>>(object: I): SelfManagedHTTPSConfigParams;
};
export declare const CertificateManagerHTTPSConfigParams: {
    $type: "yandex.cloud.storage.v1.CertificateManagerHTTPSConfigParams";
    encode(message: CertificateManagerHTTPSConfigParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CertificateManagerHTTPSConfigParams;
    fromJSON(object: any): CertificateManagerHTTPSConfigParams;
    toJSON(message: CertificateManagerHTTPSConfigParams): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
    } & {
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId">, never>>(object: I): CertificateManagerHTTPSConfigParams;
};
export declare const SetBucketHTTPSConfigRequest: {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigRequest";
    encode(message: SetBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetBucketHTTPSConfigRequest;
    fromJSON(object: any): SetBucketHTTPSConfigRequest;
    toJSON(message: SetBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        selfManaged?: {
            certificatePem?: string | undefined;
            privateKeyPem?: string | undefined;
        } | undefined;
        certificateManager?: {
            certificateId?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        selfManaged?: ({
            certificatePem?: string | undefined;
            privateKeyPem?: string | undefined;
        } & {
            certificatePem?: string | undefined;
            privateKeyPem?: string | undefined;
        } & Record<Exclude<keyof I["selfManaged"], "$type" | "certificatePem" | "privateKeyPem">, never>) | undefined;
        certificateManager?: ({
            certificateId?: string | undefined;
        } & {
            certificateId?: string | undefined;
        } & Record<Exclude<keyof I["certificateManager"], "$type" | "certificateId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "selfManaged" | "certificateManager">, never>>(object: I): SetBucketHTTPSConfigRequest;
};
export declare const SetBucketHTTPSConfigMetadata: {
    $type: "yandex.cloud.storage.v1.SetBucketHTTPSConfigMetadata";
    encode(message: SetBucketHTTPSConfigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetBucketHTTPSConfigMetadata;
    fromJSON(object: any): SetBucketHTTPSConfigMetadata;
    toJSON(message: SetBucketHTTPSConfigMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): SetBucketHTTPSConfigMetadata;
};
export declare const DeleteBucketHTTPSConfigRequest: {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigRequest";
    encode(message: DeleteBucketHTTPSConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBucketHTTPSConfigRequest;
    fromJSON(object: any): DeleteBucketHTTPSConfigRequest;
    toJSON(message: DeleteBucketHTTPSConfigRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): DeleteBucketHTTPSConfigRequest;
};
export declare const DeleteBucketHTTPSConfigMetadata: {
    $type: "yandex.cloud.storage.v1.DeleteBucketHTTPSConfigMetadata";
    encode(message: DeleteBucketHTTPSConfigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBucketHTTPSConfigMetadata;
    fromJSON(object: any): DeleteBucketHTTPSConfigMetadata;
    toJSON(message: DeleteBucketHTTPSConfigMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): DeleteBucketHTTPSConfigMetadata;
};
/** A set of methods for managing buckets. */
export declare const BucketServiceService: {
    /**
     * Retrieves the list of buckets in the specified folder.
     *
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    readonly list: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBucketsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBucketsRequest;
        readonly responseSerialize: (value: ListBucketsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBucketsResponse;
    };
    /**
     * Returns the specified bucket.
     *
     * To get the list of all available buckets, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBucketRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBucketRequest;
        readonly responseSerialize: (value: Bucket) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Bucket;
    };
    /** Creates a bucket in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBucketRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBucketRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified bucket.
     *
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    readonly update: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBucketRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBucketRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified bucket. */
    readonly delete: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBucketRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBucketRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the statistics for the specified bucket. */
    readonly getStats: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/GetStats";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBucketStatsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBucketStatsRequest;
        readonly responseSerialize: (value: BucketStats) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BucketStats;
    };
    /** Returns the HTTPS configuration for the specified bucket. */
    readonly getHTTPSConfig: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/GetHTTPSConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBucketHTTPSConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBucketHTTPSConfigRequest;
        readonly responseSerialize: (value: HTTPSConfig) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HTTPSConfig;
    };
    /**
     * Updates the HTTPS configuration for the specified bucket.
     *
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    readonly setHTTPSConfig: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/SetHTTPSConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetBucketHTTPSConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetBucketHTTPSConfigRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the HTTPS configuration for the specified bucket. */
    readonly deleteHTTPSConfig: {
        readonly path: "/yandex.cloud.storage.v1.BucketService/DeleteHTTPSConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBucketHTTPSConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBucketHTTPSConfigRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BucketServiceServer extends UntypedServiceImplementation {
    /**
     * Retrieves the list of buckets in the specified folder.
     *
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list: handleUnaryCall<ListBucketsRequest, ListBucketsResponse>;
    /**
     * Returns the specified bucket.
     *
     * To get the list of all available buckets, make a [List] request.
     */
    get: handleUnaryCall<GetBucketRequest, Bucket>;
    /** Creates a bucket in the specified folder. */
    create: handleUnaryCall<CreateBucketRequest, Operation>;
    /**
     * Updates the specified bucket.
     *
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    update: handleUnaryCall<UpdateBucketRequest, Operation>;
    /** Deletes the specified bucket. */
    delete: handleUnaryCall<DeleteBucketRequest, Operation>;
    /** Returns the statistics for the specified bucket. */
    getStats: handleUnaryCall<GetBucketStatsRequest, BucketStats>;
    /** Returns the HTTPS configuration for the specified bucket. */
    getHTTPSConfig: handleUnaryCall<GetBucketHTTPSConfigRequest, HTTPSConfig>;
    /**
     * Updates the HTTPS configuration for the specified bucket.
     *
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig: handleUnaryCall<SetBucketHTTPSConfigRequest, Operation>;
    /** Deletes the HTTPS configuration for the specified bucket. */
    deleteHTTPSConfig: handleUnaryCall<DeleteBucketHTTPSConfigRequest, Operation>;
}
export interface BucketServiceClient extends Client {
    /**
     * Retrieves the list of buckets in the specified folder.
     *
     * The following fields will not be returned for buckets in the list: [Bucket.policy], [Bucket.acl], [Bucket.cors],
     * [Bucket.website_settings], [Bucket.lifecycle_rules], [Bucket.tags].
     */
    list(request: ListBucketsRequest, callback: (error: ServiceError | null, response: ListBucketsResponse) => void): ClientUnaryCall;
    list(request: ListBucketsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBucketsResponse) => void): ClientUnaryCall;
    list(request: ListBucketsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBucketsResponse) => void): ClientUnaryCall;
    /**
     * Returns the specified bucket.
     *
     * To get the list of all available buckets, make a [List] request.
     */
    get(request: GetBucketRequest, callback: (error: ServiceError | null, response: Bucket) => void): ClientUnaryCall;
    get(request: GetBucketRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Bucket) => void): ClientUnaryCall;
    get(request: GetBucketRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Bucket) => void): ClientUnaryCall;
    /** Creates a bucket in the specified folder. */
    create(request: CreateBucketRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBucketRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBucketRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified bucket.
     *
     * In most cases, `storage.editor` role (see [documentation](/docs/storage/security/#storage-editor)) should be enough
     * to update a bucket, subject to its [policy](/docs/storage/concepts/policy).
     */
    update(request: UpdateBucketRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBucketRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBucketRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified bucket. */
    delete(request: DeleteBucketRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBucketRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBucketRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the statistics for the specified bucket. */
    getStats(request: GetBucketStatsRequest, callback: (error: ServiceError | null, response: BucketStats) => void): ClientUnaryCall;
    getStats(request: GetBucketStatsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BucketStats) => void): ClientUnaryCall;
    getStats(request: GetBucketStatsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BucketStats) => void): ClientUnaryCall;
    /** Returns the HTTPS configuration for the specified bucket. */
    getHTTPSConfig(request: GetBucketHTTPSConfigRequest, callback: (error: ServiceError | null, response: HTTPSConfig) => void): ClientUnaryCall;
    getHTTPSConfig(request: GetBucketHTTPSConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HTTPSConfig) => void): ClientUnaryCall;
    getHTTPSConfig(request: GetBucketHTTPSConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HTTPSConfig) => void): ClientUnaryCall;
    /**
     * Updates the HTTPS configuration for the specified bucket.
     *
     * The updated configuration could take up to 30 minutes to apply to the bucket.
     */
    setHTTPSConfig(request: SetBucketHTTPSConfigRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setHTTPSConfig(request: SetBucketHTTPSConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setHTTPSConfig(request: SetBucketHTTPSConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the HTTPS configuration for the specified bucket. */
    deleteHTTPSConfig(request: DeleteBucketHTTPSConfigRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHTTPSConfig(request: DeleteBucketHTTPSConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHTTPSConfig(request: DeleteBucketHTTPSConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BucketServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BucketServiceClient;
    service: typeof BucketServiceService;
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
