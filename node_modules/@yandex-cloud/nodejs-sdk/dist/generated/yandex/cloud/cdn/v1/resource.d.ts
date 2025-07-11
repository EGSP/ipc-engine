import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
export declare enum OriginProtocol {
    ORIGIN_PROTOCOL_UNSPECIFIED = 0,
    /** HTTP - CDN servers will connect to your origin via HTTP. */
    HTTP = 1,
    /** HTTPS - CDN servers will connect to your origin via HTTPS. */
    HTTPS = 2,
    /**
     * MATCH - Connection protocol will be chosen automatically (content on the
     * origin source should be available for the CDN both through HTTP and HTTPS).
     */
    MATCH = 3,
    UNRECOGNIZED = -1
}
export declare function originProtocolFromJSON(object: any): OriginProtocol;
export declare function originProtocolToJSON(object: OriginProtocol): string;
/** RewriteFlag defines flag for the Rewrite option. */
export declare enum RewriteFlag {
    REWRITE_FLAG_UNSPECIFIED = 0,
    /**
     * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
     * starts a search for a new location matching changed URI.
     */
    LAST = 1,
    /** BREAK - Stops processing of the current set of the Rewrite option. */
    BREAK = 2,
    /**
     * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
     * with "http://", "https://", or "$scheme".
     */
    REDIRECT = 3,
    /** PERMANENT - Returns a permanent redirect with the 301 code. */
    PERMANENT = 4,
    UNRECOGNIZED = -1
}
export declare function rewriteFlagFromJSON(object: any): RewriteFlag;
export declare function rewriteFlagToJSON(object: RewriteFlag): string;
/** A certificate type parameters. */
export declare enum SSLCertificateType {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    DONT_USE = 1,
    /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
    LETS_ENCRYPT_GCORE = 2,
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
    CM = 3,
    UNRECOGNIZED = -1
}
export declare function sSLCertificateTypeFromJSON(object: any): SSLCertificateType;
export declare function sSLCertificateTypeToJSON(object: SSLCertificateType): string;
/** A certificate status parameters. */
export declare enum SSLCertificateStatus {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    /** READY - SSL certificate is ready to use. */
    READY = 1,
    /** CREATING - SSL certificate is creating. */
    CREATING = 2,
    UNRECOGNIZED = -1
}
export declare function sSLCertificateStatusFromJSON(object: any): SSLCertificateStatus;
export declare function sSLCertificateStatusToJSON(object: SSLCertificateStatus): string;
/** List of secondary (alternative) CNAMEs. */
export interface SecondaryHostnames {
    $type: "yandex.cloud.cdn.v1.SecondaryHostnames";
    /** List of secondary hostname values. */
    values: string[];
}
/** A CDN resource - representation of providers resource. */
export interface Resource {
    $type: "yandex.cloud.cdn.v1.Resource";
    /** ID of the resource. */
    id: string;
    /** Folder id. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among resources. */
    cname: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Update timestamp. */
    updatedAt?: Date;
    /**
     * Flag to create Resource either in active or disabled state.
     * True - the content from CDN is available to clients.
     * False - the content from CDN isn't available to clients.
     */
    active: boolean;
    /** Resource settings and options to tune CDN edge behavior. */
    options?: ResourceOptions;
    /** List of secondary hostname strings. */
    secondaryHostnames: string[];
    /** ID of the origin group. */
    originGroupId: number;
    /** Name of the origin group. */
    originGroupName: string;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /** SSL certificate options. */
    sslCertificate?: SSLCertificate;
    /** Labels of the resource. */
    labels: {
        [key: string]: string;
    };
}
export interface Resource_LabelsEntry {
    $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry";
    key: string;
    value: string;
}
/** A major set of various resource options. */
export interface ResourceOptions {
    $type: "yandex.cloud.cdn.v1.ResourceOptions";
    /** Set up a cache status. */
    disableCache?: ResourceOptions_BoolOption;
    /** Set up [EdgeCacheSettings]. */
    edgeCacheSettings?: ResourceOptions_EdgeCacheSettings;
    /**
     * Using [Int64Option]. Set up a cache period for the end-users browser.
     * Content will be cached due to origin settings.
     * If there are no cache settings on your origin, the content will not be cached.
     * The list of HTTP response codes that can be cached in browsers: 200, 201, 204, 206, 301, 302, 303, 304, 307, 308.
     * Other response codes will not be cached.
     * The default value is 4 days.
     */
    browserCacheSettings?: ResourceOptions_Int64Option;
    /** List HTTP headers that must be included in responses to clients. */
    cacheHttpHeaders?: ResourceOptions_StringsListOption;
    /** Set up [QueryParamsOptions]. */
    queryParamsOptions?: ResourceOptions_QueryParamsOptions;
    /**
     * Files larger than 10 MB will be requested and cached in parts (no larger than 10 MB each part). It reduces time to first byte.
     *
     * The origin must support HTTP Range requests.
     *
     * By default the option is disabled.
     */
    slice?: ResourceOptions_BoolOption;
    /** Set up compression variant. */
    compressionOptions?: ResourceOptions_CompressionOptions;
    /** Set up redirects. */
    redirectOptions?: ResourceOptions_RedirectOptions;
    /** Set up host parameters. */
    hostOptions?: ResourceOptions_HostOptions;
    /** Set up static headers that CDN servers send in responses to clients. */
    staticHeaders?: ResourceOptions_StringsMapOption;
    /**
     * Parameter that lets browsers get access to selected resources from a domain
     * different to a domain from which the request is received.
     * [Read more](/docs/cdn/concepts/cors).
     */
    cors?: ResourceOptions_StringsListOption;
    /**
     * List of errors which instruct CDN servers to serve stale content to clients.
     *
     * Possible values: `error`, `http_403`, `http_404`, `http_429`, `http_500`, `http_502`, `http_503`, `http_504`, `invalid_header`, `timeout`, `updating`.
     */
    stale?: ResourceOptions_StringsListOption;
    /**
     * HTTP methods for your CDN content. By default the following methods
     * are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS.
     * In case some methods are not allowed to the user, they will get the 405
     * (Method Not Allowed) response. If the method is not supported,
     * the user gets the 501 (Not Implemented) response.
     */
    allowedHttpMethods?: ResourceOptions_StringsListOption;
    /** Allows caching for GET, HEAD and POST requests. */
    proxyCacheMethodsSet?: ResourceOptions_BoolOption;
    /** Disabling proxy force ranges. */
    disableProxyForceRanges?: ResourceOptions_BoolOption;
    /**
     * Set up custom headers that CDN servers send in requests to origins.
     * The Header name field can contain letters (A-Z, a-z), numbers (0-9), dashes (-) and underscores (_).
     * The Value field can contain letters (A-Z, a-z), numbers (0-9), dashes (-),
     * underscores (_), slashes (/), colons (:), equal (=), dots (.), and spaces.
     */
    staticRequestHeaders?: ResourceOptions_StringsMapOption;
    /**
     * Wildcard additional CNAME.
     * If a resource has a wildcard additional CNAME, you can use your own certificate for content delivery via HTTPS. Read-only.
     */
    customServerName?: ResourceOptions_StringOption;
    /** Using [BoolOption] for ignoring cookie. */
    ignoreCookie?: ResourceOptions_BoolOption;
    /** Changing or redirecting query paths. */
    rewrite?: ResourceOptions_RewriteOption;
}
/** Set up bool values. */
export interface ResourceOptions_BoolOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: boolean;
}
/** A set of the string parameters. */
export interface ResourceOptions_StringOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string;
}
/** A set of the numeric parameters. */
export interface ResourceOptions_Int64Option {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: number;
}
/** A set of the string list parameters. */
export interface ResourceOptions_StringsListOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: string[];
}
/** A set of the strings map parameters. */
export interface ResourceOptions_StringsMapOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: {
        [key: string]: string;
    };
}
export interface ResourceOptions_StringsMapOption_ValueEntry {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry";
    key: string;
    value: string;
}
/** A set of the caching response time parameters. */
export interface ResourceOptions_CachingTimes {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes";
    /**
     * Caching time for a response with codes 200, 206, 301, 302.
     * Responses with codes 4xx, 5xx will not be cached. Use `0s` disable to caching.
     * Use [custom_values] field to specify a custom caching time for a response with specific codes.
     */
    simpleValue: number;
    /**
     * Caching time for a response with specific codes. These settings have a higher priority than the value field.
     * Response code (`304`, `404` for example). Use `any` to specify caching time for all response codes.
     * Caching time in seconds (`0s`, `600s` for example). Use `0s` to disable caching for a specific response code.
     */
    customValues: {
        [key: string]: number;
    };
}
export interface ResourceOptions_CachingTimes_CustomValuesEntry {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry";
    key: string;
    value: number;
}
/** A set of the edge cache parameters. */
export interface ResourceOptions_EdgeCacheSettings {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings";
    /**
     * True - the option is enabled and its `values_variant` is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value?: ResourceOptions_CachingTimes | undefined;
    /**
     * Content will be cached according to origin cache settings.
     * The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308
     * if an origin server does not have caching HTTP headers.
     * Responses with other codes will not be cached.
     */
    defaultValue: number | undefined;
}
/** A set of the string variable map parameters. */
export interface ResourceOptions_StringVariableMapOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption";
    /**
     * True - the option is enabled and its [value] is applied to the resource.
     * False - the option is disabled and its default value is used for the resource.
     */
    enabled: boolean;
    /** Value of the option. */
    value: {
        [key: string]: ResourceOptions_StringVariableMapOption_OneofString;
    };
}
export interface ResourceOptions_StringVariableMapOption_OneofString {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString";
    /** Using [StringOption] to set value. */
    value?: ResourceOptions_StringOption | undefined;
    /** Using [StringsListOption] to set values. */
    values?: ResourceOptions_StringsListOption | undefined;
}
export interface ResourceOptions_StringVariableMapOption_ValueEntry {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry";
    key: string;
    value?: ResourceOptions_StringVariableMapOption_OneofString;
}
/** A set of the query parameters. */
export interface ResourceOptions_QueryParamsOptions {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions";
    /** Using [BoolOption]. Selected by default. Files with different query parameters are cached as objects with the same key regardless of the parameter value. */
    ignoreQueryString?: ResourceOptions_BoolOption | undefined;
    /**
     * Ignore All Except.
     * Files with the specified query parameters are cached as objects with different keys,
     * files with other parameters are cached as objects with the same key.
     */
    queryParamsWhitelist?: ResourceOptions_StringsListOption | undefined;
    /**
     * Ignore only. Files with the specified query parameters are cached as objects with the same key,
     * files with other parameters are cached as objects with different keys.
     */
    queryParamsBlacklist?: ResourceOptions_StringsListOption | undefined;
}
/** A set of the redirect parameters. */
export interface ResourceOptions_RedirectOptions {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions";
    /** Using [BoolOption]. Set up a redirect from HTTPS to HTTP. */
    redirectHttpToHttps?: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. Set up a redirect from HTTP to HTTPS. */
    redirectHttpsToHttp?: ResourceOptions_BoolOption | undefined;
}
/** A set of the host parameters. */
export interface ResourceOptions_HostOptions {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions";
    /**
     * Custom value for the Host header.
     *
     * Your server must be able to process requests with the chosen header.
     *
     * Default value (if [StringOption.enabled] is `false`) is [Resource.cname].
     */
    host?: ResourceOptions_StringOption | undefined;
    /**
     * Using [BoolOption]. Choose the Forward Host header option if is important to send in the request to the Origin
     * the same Host header as was sent in the request to CDN server.
     */
    forwardHostHeader?: ResourceOptions_BoolOption | undefined;
}
/** A set of the compression variant parameters. */
export interface ResourceOptions_CompressionOptions {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions";
    /**
     * The Fetch compressed option helps you to reduce
     * the bandwidth between origin and CDN servers.
     * Also, content delivery speed becomes higher because of reducing the time
     * for compressing files in a CDN.
     */
    fetchCompressed?: ResourceOptions_BoolOption | undefined;
    /** Using [BoolOption]. GZip compression at CDN servers reduces file size by 70% and can be as high as 90%. */
    gzipOn?: ResourceOptions_BoolOption | undefined;
    /**
     * The option allows to compress content with brotli on the CDN's end.
     *
     * Compression is performed on the Origin Shielding. If a pre-cache server doesn't active for a resource, compression does not occur even if the option is enabled.
     *
     * Specify the content-type for each type of content you wish to have compressed. CDN servers will request only uncompressed content from the origin.
     */
    brotliCompression?: ResourceOptions_StringsListOption | undefined;
}
/** An option for changing or redirecting query paths. */
export interface ResourceOptions_RewriteOption {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption";
    /**
     * True - the option is enabled and its [flag] is applied to the resource.
     * False - the option is disabled and its default value of the [flag] is used for the resource.
     */
    enabled: boolean;
    /**
     * Pattern for rewrite.
     *
     * The value must have the following format: `<source path> <destination path>`, where both paths are regular expressions which use at least one group. E.g., `/foo/(.*) /bar/$1`.
     */
    body: string;
    /**
     * Break flag is applied to the option by default.
     * It is not shown in the field.
     */
    flag: RewriteFlag;
}
/** A set of the personal SSL certificate parameters. */
export interface SSLTargetCertificate {
    $type: "yandex.cloud.cdn.v1.SSLTargetCertificate";
    /** Type of the certificate. */
    type: SSLCertificateType;
    /** Certificate data. */
    data?: SSLCertificateData;
}
/** A SSL certificate parameters. */
export interface SSLCertificate {
    $type: "yandex.cloud.cdn.v1.SSLCertificate";
    /** Type of the certificate. */
    type: SSLCertificateType;
    /** Active status. */
    status: SSLCertificateStatus;
    /** Certificate data. */
    data?: SSLCertificateData;
}
/** A certificate data parameters. */
export interface SSLCertificateData {
    $type: "yandex.cloud.cdn.v1.SSLCertificateData";
    /**
     * Custom (add your SSL certificate by uploading the certificate
     * in PEM format and your private key).
     */
    cm?: SSLCertificateCMData | undefined;
}
/** A certificate data custom parameters. */
export interface SSLCertificateCMData {
    $type: "yandex.cloud.cdn.v1.SSLCertificateCMData";
    /** ID of the custom certificate. */
    id: string;
}
export declare const SecondaryHostnames: {
    $type: "yandex.cloud.cdn.v1.SecondaryHostnames";
    encode(message: SecondaryHostnames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SecondaryHostnames;
    fromJSON(object: any): SecondaryHostnames;
    toJSON(message: SecondaryHostnames): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "values">, never>>(object: I): SecondaryHostnames;
};
export declare const Resource: {
    $type: "yandex.cloud.cdn.v1.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        active?: boolean | undefined;
        originGroupId?: number | undefined;
        cname?: string | undefined;
        secondaryHostnames?: string[] | undefined;
        originGroupName?: string | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: {
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: RewriteFlag | undefined;
            } | undefined;
        } | undefined;
        sslCertificate?: {
            type?: SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
            status?: SSLCertificateStatus | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updatedAt?: Date | undefined;
        active?: boolean | undefined;
        originGroupId?: number | undefined;
        cname?: string | undefined;
        secondaryHostnames?: (string[] & string[] & Record<Exclude<keyof I["secondaryHostnames"], "$type" | keyof string[]>, never>) | undefined;
        originGroupName?: string | undefined;
        originProtocol?: OriginProtocol | undefined;
        options?: ({
            slice?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableCache?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            edgeCacheSettings?: {
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } | undefined;
            browserCacheSettings?: {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cacheHttpHeaders?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsOptions?: {
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            compressionOptions?: {
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            redirectOptions?: {
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            hostOptions?: {
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            staticHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            cors?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            stale?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            allowedHttpMethods?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            proxyCacheMethodsSet?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            disableProxyForceRanges?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            staticRequestHeaders?: {
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            customServerName?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            ignoreCookie?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            rewrite?: {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: RewriteFlag | undefined;
            } | undefined;
        } & {
            slice?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["slice"], "$type" | "value" | "enabled">, never>) | undefined;
            disableCache?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableCache"], "$type" | "value" | "enabled">, never>) | undefined;
            edgeCacheSettings?: ({
                value?: {
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & {
                value?: ({
                    simpleValue?: number | undefined;
                    customValues?: {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } | undefined;
                } & {
                    simpleValue?: number | undefined;
                    customValues?: ({
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & {
                        [x: string]: number | undefined;
                        [x: number]: number | undefined;
                    } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"]["customValues"], string | number>, never>) | undefined;
                } & Record<Exclude<keyof I["options"]["edgeCacheSettings"]["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
                enabled?: boolean | undefined;
                defaultValue?: number | undefined;
            } & Record<Exclude<keyof I["options"]["edgeCacheSettings"], "$type" | "value" | "enabled" | "defaultValue">, never>) | undefined;
            browserCacheSettings?: ({
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: number | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["browserCacheSettings"], "$type" | "value" | "enabled">, never>) | undefined;
            cacheHttpHeaders?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cacheHttpHeaders"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cacheHttpHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            queryParamsOptions?: ({
                ignoreQueryString?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsWhitelist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                queryParamsBlacklist?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                ignoreQueryString?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsWhitelist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
                queryParamsBlacklist?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["queryParamsOptions"]["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["queryParamsOptions"], "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>) | undefined;
            compressionOptions?: ({
                fetchCompressed?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                gzipOn?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                brotliCompression?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                fetchCompressed?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
                gzipOn?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
                brotliCompression?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["compressionOptions"]["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["compressionOptions"], "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>) | undefined;
            redirectOptions?: ({
                redirectHttpToHttps?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                redirectHttpsToHttp?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                redirectHttpToHttps?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
                redirectHttpsToHttp?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["redirectOptions"]["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["redirectOptions"], "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>) | undefined;
            hostOptions?: ({
                host?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                forwardHostHeader?: {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                host?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["host"], "$type" | "value" | "enabled">, never>) | undefined;
                forwardHostHeader?: ({
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: boolean | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["options"]["hostOptions"]["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["options"]["hostOptions"], "$type" | "host" | "forwardHostHeader">, never>) | undefined;
            staticHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            cors?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["cors"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["cors"], "$type" | "value" | "enabled">, never>) | undefined;
            stale?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["stale"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["stale"], "$type" | "value" | "enabled">, never>) | undefined;
            allowedHttpMethods?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["options"]["allowedHttpMethods"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["allowedHttpMethods"], "$type" | "value" | "enabled">, never>) | undefined;
            proxyCacheMethodsSet?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["proxyCacheMethodsSet"], "$type" | "value" | "enabled">, never>) | undefined;
            disableProxyForceRanges?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["disableProxyForceRanges"], "$type" | "value" | "enabled">, never>) | undefined;
            staticRequestHeaders?: ({
                value?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["options"]["staticRequestHeaders"]["value"], string | number>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["staticRequestHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
            customServerName?: ({
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["customServerName"], "$type" | "value" | "enabled">, never>) | undefined;
            ignoreCookie?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["options"]["ignoreCookie"], "$type" | "value" | "enabled">, never>) | undefined;
            rewrite?: ({
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: RewriteFlag | undefined;
            } & {
                body?: string | undefined;
                enabled?: boolean | undefined;
                flag?: RewriteFlag | undefined;
            } & Record<Exclude<keyof I["options"]["rewrite"], "$type" | "body" | "enabled" | "flag">, never>) | undefined;
        } & Record<Exclude<keyof I["options"], "$type" | "slice" | "disableCache" | "edgeCacheSettings" | "browserCacheSettings" | "cacheHttpHeaders" | "queryParamsOptions" | "compressionOptions" | "redirectOptions" | "hostOptions" | "staticHeaders" | "cors" | "stale" | "allowedHttpMethods" | "proxyCacheMethodsSet" | "disableProxyForceRanges" | "staticRequestHeaders" | "customServerName" | "ignoreCookie" | "rewrite">, never>) | undefined;
        sslCertificate?: ({
            type?: SSLCertificateType | undefined;
            data?: {
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
            status?: SSLCertificateStatus | undefined;
        } & {
            type?: SSLCertificateType | undefined;
            data?: ({
                cm?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                cm?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["sslCertificate"]["data"]["cm"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["sslCertificate"]["data"], "$type" | "cm">, never>) | undefined;
            status?: SSLCertificateStatus | undefined;
        } & Record<Exclude<keyof I["sslCertificate"], "$type" | "type" | "data" | "status">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "folderId" | "labels" | "updatedAt" | "active" | "originGroupId" | "cname" | "secondaryHostnames" | "originGroupName" | "originProtocol" | "options" | "sslCertificate">, never>>(object: I): Resource;
};
export declare const Resource_LabelsEntry: {
    $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry";
    encode(message: Resource_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource_LabelsEntry;
    fromJSON(object: any): Resource_LabelsEntry;
    toJSON(message: Resource_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Resource_LabelsEntry;
};
export declare const ResourceOptions: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions";
    encode(message: ResourceOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions;
    fromJSON(object: any): ResourceOptions;
    toJSON(message: ResourceOptions): unknown;
    fromPartial<I extends {
        slice?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        disableCache?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        edgeCacheSettings?: {
            value?: {
                simpleValue?: number | undefined;
                customValues?: {
                    [x: string]: number | undefined;
                    [x: number]: number | undefined;
                } | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            defaultValue?: number | undefined;
        } | undefined;
        browserCacheSettings?: {
            value?: number | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        cacheHttpHeaders?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        queryParamsOptions?: {
            ignoreQueryString?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsWhitelist?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsBlacklist?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        compressionOptions?: {
            fetchCompressed?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            gzipOn?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            brotliCompression?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        redirectOptions?: {
            redirectHttpToHttps?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            redirectHttpsToHttp?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        hostOptions?: {
            host?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            forwardHostHeader?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        staticHeaders?: {
            value?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        cors?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        stale?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        allowedHttpMethods?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        proxyCacheMethodsSet?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        disableProxyForceRanges?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        staticRequestHeaders?: {
            value?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        customServerName?: {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        ignoreCookie?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        rewrite?: {
            body?: string | undefined;
            enabled?: boolean | undefined;
            flag?: RewriteFlag | undefined;
        } | undefined;
    } & {
        slice?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["slice"], "$type" | "value" | "enabled">, never>) | undefined;
        disableCache?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["disableCache"], "$type" | "value" | "enabled">, never>) | undefined;
        edgeCacheSettings?: ({
            value?: {
                simpleValue?: number | undefined;
                customValues?: {
                    [x: string]: number | undefined;
                    [x: number]: number | undefined;
                } | undefined;
            } | undefined;
            enabled?: boolean | undefined;
            defaultValue?: number | undefined;
        } & {
            value?: ({
                simpleValue?: number | undefined;
                customValues?: {
                    [x: string]: number | undefined;
                    [x: number]: number | undefined;
                } | undefined;
            } & {
                simpleValue?: number | undefined;
                customValues?: ({
                    [x: string]: number | undefined;
                    [x: number]: number | undefined;
                } & {
                    [x: string]: number | undefined;
                    [x: number]: number | undefined;
                } & Record<Exclude<keyof I["edgeCacheSettings"]["value"]["customValues"], string | number>, never>) | undefined;
            } & Record<Exclude<keyof I["edgeCacheSettings"]["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
            enabled?: boolean | undefined;
            defaultValue?: number | undefined;
        } & Record<Exclude<keyof I["edgeCacheSettings"], "$type" | "value" | "enabled" | "defaultValue">, never>) | undefined;
        browserCacheSettings?: ({
            value?: number | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: number | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["browserCacheSettings"], "$type" | "value" | "enabled">, never>) | undefined;
        cacheHttpHeaders?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["cacheHttpHeaders"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["cacheHttpHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
        queryParamsOptions?: ({
            ignoreQueryString?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsWhitelist?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            queryParamsBlacklist?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            ignoreQueryString?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["queryParamsOptions"]["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
            queryParamsWhitelist?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["queryParamsOptions"]["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["queryParamsOptions"]["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
            queryParamsBlacklist?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["queryParamsOptions"]["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["queryParamsOptions"]["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["queryParamsOptions"], "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>) | undefined;
        compressionOptions?: ({
            fetchCompressed?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            gzipOn?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            brotliCompression?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            fetchCompressed?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["compressionOptions"]["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
            gzipOn?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["compressionOptions"]["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
            brotliCompression?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["compressionOptions"]["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["compressionOptions"]["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["compressionOptions"], "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>) | undefined;
        redirectOptions?: ({
            redirectHttpToHttps?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            redirectHttpsToHttp?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            redirectHttpToHttps?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["redirectOptions"]["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
            redirectHttpsToHttp?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["redirectOptions"]["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["redirectOptions"], "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>) | undefined;
        hostOptions?: ({
            host?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            forwardHostHeader?: {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            host?: ({
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["hostOptions"]["host"], "$type" | "value" | "enabled">, never>) | undefined;
            forwardHostHeader?: ({
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: boolean | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["hostOptions"]["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["hostOptions"], "$type" | "host" | "forwardHostHeader">, never>) | undefined;
        staticHeaders?: ({
            value?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["staticHeaders"]["value"], string | number>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["staticHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
        cors?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["cors"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["cors"], "$type" | "value" | "enabled">, never>) | undefined;
        stale?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["stale"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["stale"], "$type" | "value" | "enabled">, never>) | undefined;
        allowedHttpMethods?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["allowedHttpMethods"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["allowedHttpMethods"], "$type" | "value" | "enabled">, never>) | undefined;
        proxyCacheMethodsSet?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["proxyCacheMethodsSet"], "$type" | "value" | "enabled">, never>) | undefined;
        disableProxyForceRanges?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["disableProxyForceRanges"], "$type" | "value" | "enabled">, never>) | undefined;
        staticRequestHeaders?: ({
            value?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["staticRequestHeaders"]["value"], string | number>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["staticRequestHeaders"], "$type" | "value" | "enabled">, never>) | undefined;
        customServerName?: ({
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["customServerName"], "$type" | "value" | "enabled">, never>) | undefined;
        ignoreCookie?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["ignoreCookie"], "$type" | "value" | "enabled">, never>) | undefined;
        rewrite?: ({
            body?: string | undefined;
            enabled?: boolean | undefined;
            flag?: RewriteFlag | undefined;
        } & {
            body?: string | undefined;
            enabled?: boolean | undefined;
            flag?: RewriteFlag | undefined;
        } & Record<Exclude<keyof I["rewrite"], "$type" | "body" | "enabled" | "flag">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "slice" | "disableCache" | "edgeCacheSettings" | "browserCacheSettings" | "cacheHttpHeaders" | "queryParamsOptions" | "compressionOptions" | "redirectOptions" | "hostOptions" | "staticHeaders" | "cors" | "stale" | "allowedHttpMethods" | "proxyCacheMethodsSet" | "disableProxyForceRanges" | "staticRequestHeaders" | "customServerName" | "ignoreCookie" | "rewrite">, never>>(object: I): ResourceOptions;
};
export declare const ResourceOptions_BoolOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption";
    encode(message: ResourceOptions_BoolOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_BoolOption;
    fromJSON(object: any): ResourceOptions_BoolOption;
    toJSON(message: ResourceOptions_BoolOption): unknown;
    fromPartial<I extends {
        value?: boolean | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: boolean | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_BoolOption;
};
export declare const ResourceOptions_StringOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption";
    encode(message: ResourceOptions_StringOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringOption;
    fromJSON(object: any): ResourceOptions_StringOption;
    toJSON(message: ResourceOptions_StringOption): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: string | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_StringOption;
};
export declare const ResourceOptions_Int64Option: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option";
    encode(message: ResourceOptions_Int64Option, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_Int64Option;
    fromJSON(object: any): ResourceOptions_Int64Option;
    toJSON(message: ResourceOptions_Int64Option): unknown;
    fromPartial<I extends {
        value?: number | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: number | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_Int64Option;
};
export declare const ResourceOptions_StringsListOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption";
    encode(message: ResourceOptions_StringsListOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsListOption;
    fromJSON(object: any): ResourceOptions_StringsListOption;
    toJSON(message: ResourceOptions_StringsListOption): unknown;
    fromPartial<I extends {
        value?: string[] | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: (string[] & string[] & Record<Exclude<keyof I["value"], "$type" | keyof string[]>, never>) | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_StringsListOption;
};
export declare const ResourceOptions_StringsMapOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption";
    encode(message: ResourceOptions_StringsMapOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsMapOption;
    fromJSON(object: any): ResourceOptions_StringsMapOption;
    toJSON(message: ResourceOptions_StringsMapOption): unknown;
    fromPartial<I extends {
        value?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["value"], string | number>, never>) | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_StringsMapOption;
};
export declare const ResourceOptions_StringsMapOption_ValueEntry: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry";
    encode(message: ResourceOptions_StringsMapOption_ValueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringsMapOption_ValueEntry;
    fromJSON(object: any): ResourceOptions_StringsMapOption_ValueEntry;
    toJSON(message: ResourceOptions_StringsMapOption_ValueEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ResourceOptions_StringsMapOption_ValueEntry;
};
export declare const ResourceOptions_CachingTimes: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes";
    encode(message: ResourceOptions_CachingTimes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CachingTimes;
    fromJSON(object: any): ResourceOptions_CachingTimes;
    toJSON(message: ResourceOptions_CachingTimes): unknown;
    fromPartial<I extends {
        simpleValue?: number | undefined;
        customValues?: {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } | undefined;
    } & {
        simpleValue?: number | undefined;
        customValues?: ({
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & Record<Exclude<keyof I["customValues"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "simpleValue" | "customValues">, never>>(object: I): ResourceOptions_CachingTimes;
};
export declare const ResourceOptions_CachingTimes_CustomValuesEntry: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry";
    encode(message: ResourceOptions_CachingTimes_CustomValuesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CachingTimes_CustomValuesEntry;
    fromJSON(object: any): ResourceOptions_CachingTimes_CustomValuesEntry;
    toJSON(message: ResourceOptions_CachingTimes_CustomValuesEntry): unknown;
    fromPartial<I extends {
        value?: number | undefined;
        key?: string | undefined;
    } & {
        value?: number | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ResourceOptions_CachingTimes_CustomValuesEntry;
};
export declare const ResourceOptions_EdgeCacheSettings: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings";
    encode(message: ResourceOptions_EdgeCacheSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_EdgeCacheSettings;
    fromJSON(object: any): ResourceOptions_EdgeCacheSettings;
    toJSON(message: ResourceOptions_EdgeCacheSettings): unknown;
    fromPartial<I extends {
        value?: {
            simpleValue?: number | undefined;
            customValues?: {
                [x: string]: number | undefined;
                [x: number]: number | undefined;
            } | undefined;
        } | undefined;
        enabled?: boolean | undefined;
        defaultValue?: number | undefined;
    } & {
        value?: ({
            simpleValue?: number | undefined;
            customValues?: {
                [x: string]: number | undefined;
                [x: number]: number | undefined;
            } | undefined;
        } & {
            simpleValue?: number | undefined;
            customValues?: ({
                [x: string]: number | undefined;
                [x: number]: number | undefined;
            } & {
                [x: string]: number | undefined;
                [x: number]: number | undefined;
            } & Record<Exclude<keyof I["value"]["customValues"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "simpleValue" | "customValues">, never>) | undefined;
        enabled?: boolean | undefined;
        defaultValue?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled" | "defaultValue">, never>>(object: I): ResourceOptions_EdgeCacheSettings;
};
export declare const ResourceOptions_StringVariableMapOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption";
    encode(message: ResourceOptions_StringVariableMapOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption;
    toJSON(message: ResourceOptions_StringVariableMapOption): unknown;
    fromPartial<I extends {
        value?: {
            [x: string]: {
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            [x: number]: {
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        enabled?: boolean | undefined;
    } & {
        value?: ({
            [x: string]: {
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            [x: number]: {
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                values?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["value"][string]["values"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["value"][string]["values"], "$type" | "value" | "enabled">, never>) | undefined;
                value?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["value"][string]["value"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["value"][string], "$type" | "values" | "value">, never>) | undefined;
            [x: number]: ({
                values?: {
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
                value?: {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                values?: ({
                    value?: string[] | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["value"][number]["values"]["value"], "$type" | keyof string[]>, never>) | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["value"][number]["values"], "$type" | "value" | "enabled">, never>) | undefined;
                value?: ({
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & {
                    value?: string | undefined;
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["value"][number]["value"], "$type" | "value" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["value"][number], "$type" | "values" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["value"], string | number>, never>) | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "enabled">, never>>(object: I): ResourceOptions_StringVariableMapOption;
};
export declare const ResourceOptions_StringVariableMapOption_OneofString: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString";
    encode(message: ResourceOptions_StringVariableMapOption_OneofString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption_OneofString;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption_OneofString;
    toJSON(message: ResourceOptions_StringVariableMapOption_OneofString): unknown;
    fromPartial<I extends {
        values?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        value?: {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        values?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["values"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["values"], "$type" | "value" | "enabled">, never>) | undefined;
        value?: ({
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "value" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "value">, never>>(object: I): ResourceOptions_StringVariableMapOption_OneofString;
};
export declare const ResourceOptions_StringVariableMapOption_ValueEntry: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry";
    encode(message: ResourceOptions_StringVariableMapOption_ValueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_StringVariableMapOption_ValueEntry;
    fromJSON(object: any): ResourceOptions_StringVariableMapOption_ValueEntry;
    toJSON(message: ResourceOptions_StringVariableMapOption_ValueEntry): unknown;
    fromPartial<I extends {
        value?: {
            values?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            value?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            values?: {
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } | undefined;
            value?: {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            values?: ({
                value?: string[] | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["value"]["values"]["value"], "$type" | keyof string[]>, never>) | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["value"]["values"], "$type" | "value" | "enabled">, never>) | undefined;
            value?: ({
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                value?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["value"]["value"], "$type" | "value" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "values" | "value">, never>) | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ResourceOptions_StringVariableMapOption_ValueEntry;
};
export declare const ResourceOptions_QueryParamsOptions: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions";
    encode(message: ResourceOptions_QueryParamsOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_QueryParamsOptions;
    fromJSON(object: any): ResourceOptions_QueryParamsOptions;
    toJSON(message: ResourceOptions_QueryParamsOptions): unknown;
    fromPartial<I extends {
        ignoreQueryString?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        queryParamsWhitelist?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        queryParamsBlacklist?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        ignoreQueryString?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["ignoreQueryString"], "$type" | "value" | "enabled">, never>) | undefined;
        queryParamsWhitelist?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["queryParamsWhitelist"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["queryParamsWhitelist"], "$type" | "value" | "enabled">, never>) | undefined;
        queryParamsBlacklist?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["queryParamsBlacklist"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["queryParamsBlacklist"], "$type" | "value" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "ignoreQueryString" | "queryParamsWhitelist" | "queryParamsBlacklist">, never>>(object: I): ResourceOptions_QueryParamsOptions;
};
export declare const ResourceOptions_RedirectOptions: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions";
    encode(message: ResourceOptions_RedirectOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_RedirectOptions;
    fromJSON(object: any): ResourceOptions_RedirectOptions;
    toJSON(message: ResourceOptions_RedirectOptions): unknown;
    fromPartial<I extends {
        redirectHttpToHttps?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        redirectHttpsToHttp?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        redirectHttpToHttps?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["redirectHttpToHttps"], "$type" | "value" | "enabled">, never>) | undefined;
        redirectHttpsToHttp?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["redirectHttpsToHttp"], "$type" | "value" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "redirectHttpToHttps" | "redirectHttpsToHttp">, never>>(object: I): ResourceOptions_RedirectOptions;
};
export declare const ResourceOptions_HostOptions: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions";
    encode(message: ResourceOptions_HostOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_HostOptions;
    fromJSON(object: any): ResourceOptions_HostOptions;
    toJSON(message: ResourceOptions_HostOptions): unknown;
    fromPartial<I extends {
        host?: {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        forwardHostHeader?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        host?: ({
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: string | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["host"], "$type" | "value" | "enabled">, never>) | undefined;
        forwardHostHeader?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["forwardHostHeader"], "$type" | "value" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "host" | "forwardHostHeader">, never>>(object: I): ResourceOptions_HostOptions;
};
export declare const ResourceOptions_CompressionOptions: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions";
    encode(message: ResourceOptions_CompressionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_CompressionOptions;
    fromJSON(object: any): ResourceOptions_CompressionOptions;
    toJSON(message: ResourceOptions_CompressionOptions): unknown;
    fromPartial<I extends {
        fetchCompressed?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        gzipOn?: {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;
        brotliCompression?: {
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } | undefined;
    } & {
        fetchCompressed?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["fetchCompressed"], "$type" | "value" | "enabled">, never>) | undefined;
        gzipOn?: ({
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: boolean | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["gzipOn"], "$type" | "value" | "enabled">, never>) | undefined;
        brotliCompression?: ({
            value?: string[] | undefined;
            enabled?: boolean | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["brotliCompression"]["value"], "$type" | keyof string[]>, never>) | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["brotliCompression"], "$type" | "value" | "enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fetchCompressed" | "gzipOn" | "brotliCompression">, never>>(object: I): ResourceOptions_CompressionOptions;
};
export declare const ResourceOptions_RewriteOption: {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption";
    encode(message: ResourceOptions_RewriteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOptions_RewriteOption;
    fromJSON(object: any): ResourceOptions_RewriteOption;
    toJSON(message: ResourceOptions_RewriteOption): unknown;
    fromPartial<I extends {
        body?: string | undefined;
        enabled?: boolean | undefined;
        flag?: RewriteFlag | undefined;
    } & {
        body?: string | undefined;
        enabled?: boolean | undefined;
        flag?: RewriteFlag | undefined;
    } & Record<Exclude<keyof I, "$type" | "body" | "enabled" | "flag">, never>>(object: I): ResourceOptions_RewriteOption;
};
export declare const SSLTargetCertificate: {
    $type: "yandex.cloud.cdn.v1.SSLTargetCertificate";
    encode(message: SSLTargetCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLTargetCertificate;
    fromJSON(object: any): SSLTargetCertificate;
    toJSON(message: SSLTargetCertificate): unknown;
    fromPartial<I extends {
        type?: SSLCertificateType | undefined;
        data?: {
            cm?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        type?: SSLCertificateType | undefined;
        data?: ({
            cm?: {
                id?: string | undefined;
            } | undefined;
        } & {
            cm?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["data"]["cm"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["data"], "$type" | "cm">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "data">, never>>(object: I): SSLTargetCertificate;
};
export declare const SSLCertificate: {
    $type: "yandex.cloud.cdn.v1.SSLCertificate";
    encode(message: SSLCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificate;
    fromJSON(object: any): SSLCertificate;
    toJSON(message: SSLCertificate): unknown;
    fromPartial<I extends {
        type?: SSLCertificateType | undefined;
        data?: {
            cm?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
        status?: SSLCertificateStatus | undefined;
    } & {
        type?: SSLCertificateType | undefined;
        data?: ({
            cm?: {
                id?: string | undefined;
            } | undefined;
        } & {
            cm?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["data"]["cm"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["data"], "$type" | "cm">, never>) | undefined;
        status?: SSLCertificateStatus | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "data" | "status">, never>>(object: I): SSLCertificate;
};
export declare const SSLCertificateData: {
    $type: "yandex.cloud.cdn.v1.SSLCertificateData";
    encode(message: SSLCertificateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificateData;
    fromJSON(object: any): SSLCertificateData;
    toJSON(message: SSLCertificateData): unknown;
    fromPartial<I extends {
        cm?: {
            id?: string | undefined;
        } | undefined;
    } & {
        cm?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & Record<Exclude<keyof I["cm"], "$type" | "id">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "cm">, never>>(object: I): SSLCertificateData;
};
export declare const SSLCertificateCMData: {
    $type: "yandex.cloud.cdn.v1.SSLCertificateCMData";
    encode(message: SSLCertificateCMData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSLCertificateCMData;
    fromJSON(object: any): SSLCertificateCMData;
    toJSON(message: SSLCertificateCMData): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): SSLCertificateCMData;
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
