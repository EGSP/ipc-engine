"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLCertificateCMData = exports.SSLCertificateData = exports.SSLCertificate = exports.SSLTargetCertificate = exports.ResourceOptions_RewriteOption = exports.ResourceOptions_CompressionOptions = exports.ResourceOptions_HostOptions = exports.ResourceOptions_RedirectOptions = exports.ResourceOptions_QueryParamsOptions = exports.ResourceOptions_StringVariableMapOption_ValueEntry = exports.ResourceOptions_StringVariableMapOption_OneofString = exports.ResourceOptions_StringVariableMapOption = exports.ResourceOptions_EdgeCacheSettings = exports.ResourceOptions_CachingTimes_CustomValuesEntry = exports.ResourceOptions_CachingTimes = exports.ResourceOptions_StringsMapOption_ValueEntry = exports.ResourceOptions_StringsMapOption = exports.ResourceOptions_StringsListOption = exports.ResourceOptions_Int64Option = exports.ResourceOptions_StringOption = exports.ResourceOptions_BoolOption = exports.ResourceOptions = exports.Resource_LabelsEntry = exports.Resource = exports.SecondaryHostnames = exports.sSLCertificateStatusToJSON = exports.sSLCertificateStatusFromJSON = exports.SSLCertificateStatus = exports.sSLCertificateTypeToJSON = exports.sSLCertificateTypeFromJSON = exports.SSLCertificateType = exports.rewriteFlagToJSON = exports.rewriteFlagFromJSON = exports.RewriteFlag = exports.originProtocolToJSON = exports.originProtocolFromJSON = exports.OriginProtocol = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.cdn.v1";
/**
 * This option defines the protocol that will be used by CDN servers to request
 * content from an origin source. If not specified, we will use HTTP to connect
 * to an origin server.
 */
var OriginProtocol;
(function (OriginProtocol) {
    OriginProtocol[OriginProtocol["ORIGIN_PROTOCOL_UNSPECIFIED"] = 0] = "ORIGIN_PROTOCOL_UNSPECIFIED";
    /** HTTP - CDN servers will connect to your origin via HTTP. */
    OriginProtocol[OriginProtocol["HTTP"] = 1] = "HTTP";
    /** HTTPS - CDN servers will connect to your origin via HTTPS. */
    OriginProtocol[OriginProtocol["HTTPS"] = 2] = "HTTPS";
    /**
     * MATCH - Connection protocol will be chosen automatically (content on the
     * origin source should be available for the CDN both through HTTP and HTTPS).
     */
    OriginProtocol[OriginProtocol["MATCH"] = 3] = "MATCH";
    OriginProtocol[OriginProtocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OriginProtocol = exports.OriginProtocol || (exports.OriginProtocol = {}));
function originProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case "ORIGIN_PROTOCOL_UNSPECIFIED":
            return OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED;
        case 1:
        case "HTTP":
            return OriginProtocol.HTTP;
        case 2:
        case "HTTPS":
            return OriginProtocol.HTTPS;
        case 3:
        case "MATCH":
            return OriginProtocol.MATCH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OriginProtocol.UNRECOGNIZED;
    }
}
exports.originProtocolFromJSON = originProtocolFromJSON;
function originProtocolToJSON(object) {
    switch (object) {
        case OriginProtocol.ORIGIN_PROTOCOL_UNSPECIFIED:
            return "ORIGIN_PROTOCOL_UNSPECIFIED";
        case OriginProtocol.HTTP:
            return "HTTP";
        case OriginProtocol.HTTPS:
            return "HTTPS";
        case OriginProtocol.MATCH:
            return "MATCH";
        default:
            return "UNKNOWN";
    }
}
exports.originProtocolToJSON = originProtocolToJSON;
/** RewriteFlag defines flag for the Rewrite option. */
var RewriteFlag;
(function (RewriteFlag) {
    RewriteFlag[RewriteFlag["REWRITE_FLAG_UNSPECIFIED"] = 0] = "REWRITE_FLAG_UNSPECIFIED";
    /**
     * LAST - Stops processing of the current set of ngx_http_rewrite_module directives and
     * starts a search for a new location matching changed URI.
     */
    RewriteFlag[RewriteFlag["LAST"] = 1] = "LAST";
    /** BREAK - Stops processing of the current set of the Rewrite option. */
    RewriteFlag[RewriteFlag["BREAK"] = 2] = "BREAK";
    /**
     * REDIRECT - Returns a temporary redirect with the 302 code; It is used when a replacement string does not start
     * with "http://", "https://", or "$scheme".
     */
    RewriteFlag[RewriteFlag["REDIRECT"] = 3] = "REDIRECT";
    /** PERMANENT - Returns a permanent redirect with the 301 code. */
    RewriteFlag[RewriteFlag["PERMANENT"] = 4] = "PERMANENT";
    RewriteFlag[RewriteFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RewriteFlag = exports.RewriteFlag || (exports.RewriteFlag = {}));
function rewriteFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "REWRITE_FLAG_UNSPECIFIED":
            return RewriteFlag.REWRITE_FLAG_UNSPECIFIED;
        case 1:
        case "LAST":
            return RewriteFlag.LAST;
        case 2:
        case "BREAK":
            return RewriteFlag.BREAK;
        case 3:
        case "REDIRECT":
            return RewriteFlag.REDIRECT;
        case 4:
        case "PERMANENT":
            return RewriteFlag.PERMANENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RewriteFlag.UNRECOGNIZED;
    }
}
exports.rewriteFlagFromJSON = rewriteFlagFromJSON;
function rewriteFlagToJSON(object) {
    switch (object) {
        case RewriteFlag.REWRITE_FLAG_UNSPECIFIED:
            return "REWRITE_FLAG_UNSPECIFIED";
        case RewriteFlag.LAST:
            return "LAST";
        case RewriteFlag.BREAK:
            return "BREAK";
        case RewriteFlag.REDIRECT:
            return "REDIRECT";
        case RewriteFlag.PERMANENT:
            return "PERMANENT";
        default:
            return "UNKNOWN";
    }
}
exports.rewriteFlagToJSON = rewriteFlagToJSON;
/** A certificate type parameters. */
var SSLCertificateType;
(function (SSLCertificateType) {
    /** SSL_CERTIFICATE_TYPE_UNSPECIFIED - SSL certificate is unspecified. */
    SSLCertificateType[SSLCertificateType["SSL_CERTIFICATE_TYPE_UNSPECIFIED"] = 0] = "SSL_CERTIFICATE_TYPE_UNSPECIFIED";
    /** DONT_USE - No SSL certificate is added, the requests are sent via HTTP. */
    SSLCertificateType[SSLCertificateType["DONT_USE"] = 1] = "DONT_USE";
    /** LETS_ENCRYPT_GCORE - Works only if you have already pointed your domain name to the protected IP address in your DNS */
    SSLCertificateType[SSLCertificateType["LETS_ENCRYPT_GCORE"] = 2] = "LETS_ENCRYPT_GCORE";
    /** CM - Add your SSL certificate by uploading the certificate in PEM format and your private key */
    SSLCertificateType[SSLCertificateType["CM"] = 3] = "CM";
    SSLCertificateType[SSLCertificateType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SSLCertificateType = exports.SSLCertificateType || (exports.SSLCertificateType = {}));
function sSLCertificateTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SSL_CERTIFICATE_TYPE_UNSPECIFIED":
            return SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED;
        case 1:
        case "DONT_USE":
            return SSLCertificateType.DONT_USE;
        case 2:
        case "LETS_ENCRYPT_GCORE":
            return SSLCertificateType.LETS_ENCRYPT_GCORE;
        case 3:
        case "CM":
            return SSLCertificateType.CM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SSLCertificateType.UNRECOGNIZED;
    }
}
exports.sSLCertificateTypeFromJSON = sSLCertificateTypeFromJSON;
function sSLCertificateTypeToJSON(object) {
    switch (object) {
        case SSLCertificateType.SSL_CERTIFICATE_TYPE_UNSPECIFIED:
            return "SSL_CERTIFICATE_TYPE_UNSPECIFIED";
        case SSLCertificateType.DONT_USE:
            return "DONT_USE";
        case SSLCertificateType.LETS_ENCRYPT_GCORE:
            return "LETS_ENCRYPT_GCORE";
        case SSLCertificateType.CM:
            return "CM";
        default:
            return "UNKNOWN";
    }
}
exports.sSLCertificateTypeToJSON = sSLCertificateTypeToJSON;
/** A certificate status parameters. */
var SSLCertificateStatus;
(function (SSLCertificateStatus) {
    /** SSL_CERTIFICATE_STATUS_UNSPECIFIED - SSL certificate is unspecified. */
    SSLCertificateStatus[SSLCertificateStatus["SSL_CERTIFICATE_STATUS_UNSPECIFIED"] = 0] = "SSL_CERTIFICATE_STATUS_UNSPECIFIED";
    /** READY - SSL certificate is ready to use. */
    SSLCertificateStatus[SSLCertificateStatus["READY"] = 1] = "READY";
    /** CREATING - SSL certificate is creating. */
    SSLCertificateStatus[SSLCertificateStatus["CREATING"] = 2] = "CREATING";
    SSLCertificateStatus[SSLCertificateStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SSLCertificateStatus = exports.SSLCertificateStatus || (exports.SSLCertificateStatus = {}));
function sSLCertificateStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "SSL_CERTIFICATE_STATUS_UNSPECIFIED":
            return SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED;
        case 1:
        case "READY":
            return SSLCertificateStatus.READY;
        case 2:
        case "CREATING":
            return SSLCertificateStatus.CREATING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SSLCertificateStatus.UNRECOGNIZED;
    }
}
exports.sSLCertificateStatusFromJSON = sSLCertificateStatusFromJSON;
function sSLCertificateStatusToJSON(object) {
    switch (object) {
        case SSLCertificateStatus.SSL_CERTIFICATE_STATUS_UNSPECIFIED:
            return "SSL_CERTIFICATE_STATUS_UNSPECIFIED";
        case SSLCertificateStatus.READY:
            return "READY";
        case SSLCertificateStatus.CREATING:
            return "CREATING";
        default:
            return "UNKNOWN";
    }
}
exports.sSLCertificateStatusToJSON = sSLCertificateStatusToJSON;
const baseSecondaryHostnames = {
    $type: "yandex.cloud.cdn.v1.SecondaryHostnames",
    values: "",
};
exports.SecondaryHostnames = {
    $type: "yandex.cloud.cdn.v1.SecondaryHostnames",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecondaryHostnames);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
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
        const message = Object.assign({}, baseSecondaryHostnames);
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSecondaryHostnames);
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecondaryHostnames.$type, exports.SecondaryHostnames);
const baseResource = {
    $type: "yandex.cloud.cdn.v1.Resource",
    id: "",
    folderId: "",
    cname: "",
    active: false,
    secondaryHostnames: "",
    originGroupId: 0,
    originGroupName: "",
    originProtocol: 0,
};
exports.Resource = {
    $type: "yandex.cloud.cdn.v1.Resource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cname !== "") {
            writer.uint32(26).string(message.cname);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.active === true) {
            writer.uint32(48).bool(message.active);
        }
        if (message.options !== undefined) {
            exports.ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.secondaryHostnames) {
            writer.uint32(66).string(v);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(72).int64(message.originGroupId);
        }
        if (message.originGroupName !== "") {
            writer.uint32(82).string(message.originGroupName);
        }
        if (message.originProtocol !== 0) {
            writer.uint32(88).int32(message.originProtocol);
        }
        if (message.sslCertificate !== undefined) {
            exports.SSLCertificate.encode(message.sslCertificate, writer.uint32(98).fork()).ldelim();
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Resource_LabelsEntry.encode({
                $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(106).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResource);
        message.secondaryHostnames = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.cname = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                case 7:
                    message.options = exports.ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.secondaryHostnames.push(reader.string());
                    break;
                case 9:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 10:
                    message.originGroupName = reader.string();
                    break;
                case 11:
                    message.originProtocol = reader.int32();
                    break;
                case 12:
                    message.sslCertificate = exports.SSLCertificate.decode(reader, reader.uint32());
                    break;
                case 13:
                    const entry13 = exports.Resource_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
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
        var _a, _b;
        const message = Object.assign({}, baseResource);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.cname =
            object.cname !== undefined && object.cname !== null
                ? String(object.cname)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.active =
            object.active !== undefined && object.active !== null
                ? Boolean(object.active)
                : false;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ResourceOptions.fromJSON(object.options)
                : undefined;
        message.secondaryHostnames = ((_a = object.secondaryHostnames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.originGroupId =
            object.originGroupId !== undefined && object.originGroupId !== null
                ? Number(object.originGroupId)
                : 0;
        message.originGroupName =
            object.originGroupName !== undefined && object.originGroupName !== null
                ? String(object.originGroupName)
                : "";
        message.originProtocol =
            object.originProtocol !== undefined && object.originProtocol !== null
                ? originProtocolFromJSON(object.originProtocol)
                : 0;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? exports.SSLCertificate.fromJSON(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? exports.ResourceOptions.toJSON(message.options)
                : undefined);
        if (message.secondaryHostnames) {
            obj.secondaryHostnames = message.secondaryHostnames.map((e) => e);
        }
        else {
            obj.secondaryHostnames = [];
        }
        message.originGroupId !== undefined &&
            (obj.originGroupId = Math.round(message.originGroupId));
        message.originGroupName !== undefined &&
            (obj.originGroupName = message.originGroupName);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? exports.SSLCertificate.toJSON(message.sslCertificate)
                : undefined);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseResource);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.cname = (_c = object.cname) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.updatedAt = (_e = object.updatedAt) !== null && _e !== void 0 ? _e : undefined;
        message.active = (_f = object.active) !== null && _f !== void 0 ? _f : false;
        message.options =
            object.options !== undefined && object.options !== null
                ? exports.ResourceOptions.fromPartial(object.options)
                : undefined;
        message.secondaryHostnames = ((_g = object.secondaryHostnames) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.originGroupId = (_h = object.originGroupId) !== null && _h !== void 0 ? _h : 0;
        message.originGroupName = (_j = object.originGroupName) !== null && _j !== void 0 ? _j : "";
        message.originProtocol = (_k = object.originProtocol) !== null && _k !== void 0 ? _k : 0;
        message.sslCertificate =
            object.sslCertificate !== undefined && object.sslCertificate !== null
                ? exports.SSLCertificate.fromPartial(object.sslCertificate)
                : undefined;
        message.labels = Object.entries((_l = object.labels) !== null && _l !== void 0 ? _l : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resource.$type, exports.Resource);
const baseResource_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry",
    key: "",
    value: "",
};
exports.Resource_LabelsEntry = {
    $type: "yandex.cloud.cdn.v1.Resource.LabelsEntry",
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
        const message = Object.assign({}, baseResource_LabelsEntry);
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
        const message = Object.assign({}, baseResource_LabelsEntry);
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
        const message = Object.assign({}, baseResource_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resource_LabelsEntry.$type, exports.Resource_LabelsEntry);
const baseResourceOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions",
};
exports.ResourceOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.disableCache !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.disableCache, writer.uint32(10).fork()).ldelim();
        }
        if (message.edgeCacheSettings !== undefined) {
            exports.ResourceOptions_EdgeCacheSettings.encode(message.edgeCacheSettings, writer.uint32(18).fork()).ldelim();
        }
        if (message.browserCacheSettings !== undefined) {
            exports.ResourceOptions_Int64Option.encode(message.browserCacheSettings, writer.uint32(26).fork()).ldelim();
        }
        if (message.cacheHttpHeaders !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.cacheHttpHeaders, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryParamsOptions !== undefined) {
            exports.ResourceOptions_QueryParamsOptions.encode(message.queryParamsOptions, writer.uint32(42).fork()).ldelim();
        }
        if (message.slice !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.slice, writer.uint32(50).fork()).ldelim();
        }
        if (message.compressionOptions !== undefined) {
            exports.ResourceOptions_CompressionOptions.encode(message.compressionOptions, writer.uint32(58).fork()).ldelim();
        }
        if (message.redirectOptions !== undefined) {
            exports.ResourceOptions_RedirectOptions.encode(message.redirectOptions, writer.uint32(66).fork()).ldelim();
        }
        if (message.hostOptions !== undefined) {
            exports.ResourceOptions_HostOptions.encode(message.hostOptions, writer.uint32(74).fork()).ldelim();
        }
        if (message.staticHeaders !== undefined) {
            exports.ResourceOptions_StringsMapOption.encode(message.staticHeaders, writer.uint32(82).fork()).ldelim();
        }
        if (message.cors !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.cors, writer.uint32(90).fork()).ldelim();
        }
        if (message.stale !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.stale, writer.uint32(98).fork()).ldelim();
        }
        if (message.allowedHttpMethods !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.allowedHttpMethods, writer.uint32(106).fork()).ldelim();
        }
        if (message.proxyCacheMethodsSet !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.proxyCacheMethodsSet, writer.uint32(114).fork()).ldelim();
        }
        if (message.disableProxyForceRanges !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.disableProxyForceRanges, writer.uint32(122).fork()).ldelim();
        }
        if (message.staticRequestHeaders !== undefined) {
            exports.ResourceOptions_StringsMapOption.encode(message.staticRequestHeaders, writer.uint32(130).fork()).ldelim();
        }
        if (message.customServerName !== undefined) {
            exports.ResourceOptions_StringOption.encode(message.customServerName, writer.uint32(138).fork()).ldelim();
        }
        if (message.ignoreCookie !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.ignoreCookie, writer.uint32(146).fork()).ldelim();
        }
        if (message.rewrite !== undefined) {
            exports.ResourceOptions_RewriteOption.encode(message.rewrite, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disableCache = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.edgeCacheSettings = exports.ResourceOptions_EdgeCacheSettings.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.browserCacheSettings = exports.ResourceOptions_Int64Option.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cacheHttpHeaders = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryParamsOptions =
                        exports.ResourceOptions_QueryParamsOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.slice = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.compressionOptions =
                        exports.ResourceOptions_CompressionOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.redirectOptions = exports.ResourceOptions_RedirectOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.hostOptions = exports.ResourceOptions_HostOptions.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.staticHeaders = exports.ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.cors = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.stale = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.allowedHttpMethods = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.proxyCacheMethodsSet = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.disableProxyForceRanges = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.staticRequestHeaders =
                        exports.ResourceOptions_StringsMapOption.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.customServerName = exports.ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.ignoreCookie = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.rewrite = exports.ResourceOptions_RewriteOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions);
        message.disableCache =
            object.disableCache !== undefined && object.disableCache !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.disableCache)
                : undefined;
        message.edgeCacheSettings =
            object.edgeCacheSettings !== undefined &&
                object.edgeCacheSettings !== null
                ? exports.ResourceOptions_EdgeCacheSettings.fromJSON(object.edgeCacheSettings)
                : undefined;
        message.browserCacheSettings =
            object.browserCacheSettings !== undefined &&
                object.browserCacheSettings !== null
                ? exports.ResourceOptions_Int64Option.fromJSON(object.browserCacheSettings)
                : undefined;
        message.cacheHttpHeaders =
            object.cacheHttpHeaders !== undefined && object.cacheHttpHeaders !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.cacheHttpHeaders)
                : undefined;
        message.queryParamsOptions =
            object.queryParamsOptions !== undefined &&
                object.queryParamsOptions !== null
                ? exports.ResourceOptions_QueryParamsOptions.fromJSON(object.queryParamsOptions)
                : undefined;
        message.slice =
            object.slice !== undefined && object.slice !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.slice)
                : undefined;
        message.compressionOptions =
            object.compressionOptions !== undefined &&
                object.compressionOptions !== null
                ? exports.ResourceOptions_CompressionOptions.fromJSON(object.compressionOptions)
                : undefined;
        message.redirectOptions =
            object.redirectOptions !== undefined && object.redirectOptions !== null
                ? exports.ResourceOptions_RedirectOptions.fromJSON(object.redirectOptions)
                : undefined;
        message.hostOptions =
            object.hostOptions !== undefined && object.hostOptions !== null
                ? exports.ResourceOptions_HostOptions.fromJSON(object.hostOptions)
                : undefined;
        message.staticHeaders =
            object.staticHeaders !== undefined && object.staticHeaders !== null
                ? exports.ResourceOptions_StringsMapOption.fromJSON(object.staticHeaders)
                : undefined;
        message.cors =
            object.cors !== undefined && object.cors !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.cors)
                : undefined;
        message.stale =
            object.stale !== undefined && object.stale !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.stale)
                : undefined;
        message.allowedHttpMethods =
            object.allowedHttpMethods !== undefined &&
                object.allowedHttpMethods !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.allowedHttpMethods)
                : undefined;
        message.proxyCacheMethodsSet =
            object.proxyCacheMethodsSet !== undefined &&
                object.proxyCacheMethodsSet !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.proxyCacheMethodsSet)
                : undefined;
        message.disableProxyForceRanges =
            object.disableProxyForceRanges !== undefined &&
                object.disableProxyForceRanges !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.disableProxyForceRanges)
                : undefined;
        message.staticRequestHeaders =
            object.staticRequestHeaders !== undefined &&
                object.staticRequestHeaders !== null
                ? exports.ResourceOptions_StringsMapOption.fromJSON(object.staticRequestHeaders)
                : undefined;
        message.customServerName =
            object.customServerName !== undefined && object.customServerName !== null
                ? exports.ResourceOptions_StringOption.fromJSON(object.customServerName)
                : undefined;
        message.ignoreCookie =
            object.ignoreCookie !== undefined && object.ignoreCookie !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.ignoreCookie)
                : undefined;
        message.rewrite =
            object.rewrite !== undefined && object.rewrite !== null
                ? exports.ResourceOptions_RewriteOption.fromJSON(object.rewrite)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disableCache !== undefined &&
            (obj.disableCache = message.disableCache
                ? exports.ResourceOptions_BoolOption.toJSON(message.disableCache)
                : undefined);
        message.edgeCacheSettings !== undefined &&
            (obj.edgeCacheSettings = message.edgeCacheSettings
                ? exports.ResourceOptions_EdgeCacheSettings.toJSON(message.edgeCacheSettings)
                : undefined);
        message.browserCacheSettings !== undefined &&
            (obj.browserCacheSettings = message.browserCacheSettings
                ? exports.ResourceOptions_Int64Option.toJSON(message.browserCacheSettings)
                : undefined);
        message.cacheHttpHeaders !== undefined &&
            (obj.cacheHttpHeaders = message.cacheHttpHeaders
                ? exports.ResourceOptions_StringsListOption.toJSON(message.cacheHttpHeaders)
                : undefined);
        message.queryParamsOptions !== undefined &&
            (obj.queryParamsOptions = message.queryParamsOptions
                ? exports.ResourceOptions_QueryParamsOptions.toJSON(message.queryParamsOptions)
                : undefined);
        message.slice !== undefined &&
            (obj.slice = message.slice
                ? exports.ResourceOptions_BoolOption.toJSON(message.slice)
                : undefined);
        message.compressionOptions !== undefined &&
            (obj.compressionOptions = message.compressionOptions
                ? exports.ResourceOptions_CompressionOptions.toJSON(message.compressionOptions)
                : undefined);
        message.redirectOptions !== undefined &&
            (obj.redirectOptions = message.redirectOptions
                ? exports.ResourceOptions_RedirectOptions.toJSON(message.redirectOptions)
                : undefined);
        message.hostOptions !== undefined &&
            (obj.hostOptions = message.hostOptions
                ? exports.ResourceOptions_HostOptions.toJSON(message.hostOptions)
                : undefined);
        message.staticHeaders !== undefined &&
            (obj.staticHeaders = message.staticHeaders
                ? exports.ResourceOptions_StringsMapOption.toJSON(message.staticHeaders)
                : undefined);
        message.cors !== undefined &&
            (obj.cors = message.cors
                ? exports.ResourceOptions_StringsListOption.toJSON(message.cors)
                : undefined);
        message.stale !== undefined &&
            (obj.stale = message.stale
                ? exports.ResourceOptions_StringsListOption.toJSON(message.stale)
                : undefined);
        message.allowedHttpMethods !== undefined &&
            (obj.allowedHttpMethods = message.allowedHttpMethods
                ? exports.ResourceOptions_StringsListOption.toJSON(message.allowedHttpMethods)
                : undefined);
        message.proxyCacheMethodsSet !== undefined &&
            (obj.proxyCacheMethodsSet = message.proxyCacheMethodsSet
                ? exports.ResourceOptions_BoolOption.toJSON(message.proxyCacheMethodsSet)
                : undefined);
        message.disableProxyForceRanges !== undefined &&
            (obj.disableProxyForceRanges = message.disableProxyForceRanges
                ? exports.ResourceOptions_BoolOption.toJSON(message.disableProxyForceRanges)
                : undefined);
        message.staticRequestHeaders !== undefined &&
            (obj.staticRequestHeaders = message.staticRequestHeaders
                ? exports.ResourceOptions_StringsMapOption.toJSON(message.staticRequestHeaders)
                : undefined);
        message.customServerName !== undefined &&
            (obj.customServerName = message.customServerName
                ? exports.ResourceOptions_StringOption.toJSON(message.customServerName)
                : undefined);
        message.ignoreCookie !== undefined &&
            (obj.ignoreCookie = message.ignoreCookie
                ? exports.ResourceOptions_BoolOption.toJSON(message.ignoreCookie)
                : undefined);
        message.rewrite !== undefined &&
            (obj.rewrite = message.rewrite
                ? exports.ResourceOptions_RewriteOption.toJSON(message.rewrite)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions);
        message.disableCache =
            object.disableCache !== undefined && object.disableCache !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.disableCache)
                : undefined;
        message.edgeCacheSettings =
            object.edgeCacheSettings !== undefined &&
                object.edgeCacheSettings !== null
                ? exports.ResourceOptions_EdgeCacheSettings.fromPartial(object.edgeCacheSettings)
                : undefined;
        message.browserCacheSettings =
            object.browserCacheSettings !== undefined &&
                object.browserCacheSettings !== null
                ? exports.ResourceOptions_Int64Option.fromPartial(object.browserCacheSettings)
                : undefined;
        message.cacheHttpHeaders =
            object.cacheHttpHeaders !== undefined && object.cacheHttpHeaders !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.cacheHttpHeaders)
                : undefined;
        message.queryParamsOptions =
            object.queryParamsOptions !== undefined &&
                object.queryParamsOptions !== null
                ? exports.ResourceOptions_QueryParamsOptions.fromPartial(object.queryParamsOptions)
                : undefined;
        message.slice =
            object.slice !== undefined && object.slice !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.slice)
                : undefined;
        message.compressionOptions =
            object.compressionOptions !== undefined &&
                object.compressionOptions !== null
                ? exports.ResourceOptions_CompressionOptions.fromPartial(object.compressionOptions)
                : undefined;
        message.redirectOptions =
            object.redirectOptions !== undefined && object.redirectOptions !== null
                ? exports.ResourceOptions_RedirectOptions.fromPartial(object.redirectOptions)
                : undefined;
        message.hostOptions =
            object.hostOptions !== undefined && object.hostOptions !== null
                ? exports.ResourceOptions_HostOptions.fromPartial(object.hostOptions)
                : undefined;
        message.staticHeaders =
            object.staticHeaders !== undefined && object.staticHeaders !== null
                ? exports.ResourceOptions_StringsMapOption.fromPartial(object.staticHeaders)
                : undefined;
        message.cors =
            object.cors !== undefined && object.cors !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.cors)
                : undefined;
        message.stale =
            object.stale !== undefined && object.stale !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.stale)
                : undefined;
        message.allowedHttpMethods =
            object.allowedHttpMethods !== undefined &&
                object.allowedHttpMethods !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.allowedHttpMethods)
                : undefined;
        message.proxyCacheMethodsSet =
            object.proxyCacheMethodsSet !== undefined &&
                object.proxyCacheMethodsSet !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.proxyCacheMethodsSet)
                : undefined;
        message.disableProxyForceRanges =
            object.disableProxyForceRanges !== undefined &&
                object.disableProxyForceRanges !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.disableProxyForceRanges)
                : undefined;
        message.staticRequestHeaders =
            object.staticRequestHeaders !== undefined &&
                object.staticRequestHeaders !== null
                ? exports.ResourceOptions_StringsMapOption.fromPartial(object.staticRequestHeaders)
                : undefined;
        message.customServerName =
            object.customServerName !== undefined && object.customServerName !== null
                ? exports.ResourceOptions_StringOption.fromPartial(object.customServerName)
                : undefined;
        message.ignoreCookie =
            object.ignoreCookie !== undefined && object.ignoreCookie !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.ignoreCookie)
                : undefined;
        message.rewrite =
            object.rewrite !== undefined && object.rewrite !== null
                ? exports.ResourceOptions_RewriteOption.fromPartial(object.rewrite)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions.$type, exports.ResourceOptions);
const baseResourceOptions_BoolOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption",
    enabled: false,
    value: false,
};
exports.ResourceOptions_BoolOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.BoolOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_BoolOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_BoolOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? Boolean(object.value)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_BoolOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_BoolOption.$type, exports.ResourceOptions_BoolOption);
const baseResourceOptions_StringOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption",
    enabled: false,
    value: "",
};
exports.ResourceOptions_StringOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
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
        const message = Object.assign({}, baseResourceOptions_StringOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_StringOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringOption.$type, exports.ResourceOptions_StringOption);
const baseResourceOptions_Int64Option = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option",
    enabled: false,
    value: 0,
};
exports.ResourceOptions_Int64Option = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.Int64Option",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_Int64Option);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_Int64Option);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? Number(object.value)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_Int64Option);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_Int64Option.$type, exports.ResourceOptions_Int64Option);
const baseResourceOptions_StringsListOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption",
    enabled: false,
    value: "",
};
exports.ResourceOptions_StringsListOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsListOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        for (const v of message.value) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringsListOption);
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value.push(reader.string());
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
        const message = Object.assign({}, baseResourceOptions_StringsListOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = ((_a = object.value) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        if (message.value) {
            obj.value = message.value.map((e) => e);
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_StringsListOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringsListOption.$type, exports.ResourceOptions_StringsListOption);
const baseResourceOptions_StringsMapOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption",
    enabled: false,
};
exports.ResourceOptions_StringsMapOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            exports.ResourceOptions_StringsMapOption_ValueEntry.encode({
                $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringsMapOption);
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = exports.ResourceOptions_StringsMapOption_ValueEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
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
        const message = Object.assign({}, baseResourceOptions_StringsMapOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = Object.entries((_a = object.value) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_StringsMapOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = Object.entries((_b = object.value) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringsMapOption.$type, exports.ResourceOptions_StringsMapOption);
const baseResourceOptions_StringsMapOption_ValueEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry",
    key: "",
    value: "",
};
exports.ResourceOptions_StringsMapOption_ValueEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringsMapOption.ValueEntry",
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
        const message = Object.assign({}, baseResourceOptions_StringsMapOption_ValueEntry);
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
        const message = Object.assign({}, baseResourceOptions_StringsMapOption_ValueEntry);
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
        const message = Object.assign({}, baseResourceOptions_StringsMapOption_ValueEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringsMapOption_ValueEntry.$type, exports.ResourceOptions_StringsMapOption_ValueEntry);
const baseResourceOptions_CachingTimes = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes",
    simpleValue: 0,
};
exports.ResourceOptions_CachingTimes = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.simpleValue !== 0) {
            writer.uint32(8).int64(message.simpleValue);
        }
        Object.entries(message.customValues).forEach(([key, value]) => {
            exports.ResourceOptions_CachingTimes_CustomValuesEntry.encode({
                $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_CachingTimes);
        message.customValues = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.simpleValue = longToNumber(reader.int64());
                    break;
                case 2:
                    const entry2 = exports.ResourceOptions_CachingTimes_CustomValuesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.customValues[entry2.key] = entry2.value;
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
        const message = Object.assign({}, baseResourceOptions_CachingTimes);
        message.simpleValue =
            object.simpleValue !== undefined && object.simpleValue !== null
                ? Number(object.simpleValue)
                : 0;
        message.customValues = Object.entries((_a = object.customValues) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.simpleValue !== undefined &&
            (obj.simpleValue = Math.round(message.simpleValue));
        obj.customValues = {};
        if (message.customValues) {
            Object.entries(message.customValues).forEach(([k, v]) => {
                obj.customValues[k] = Math.round(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_CachingTimes);
        message.simpleValue = (_a = object.simpleValue) !== null && _a !== void 0 ? _a : 0;
        message.customValues = Object.entries((_b = object.customValues) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_CachingTimes.$type, exports.ResourceOptions_CachingTimes);
const baseResourceOptions_CachingTimes_CustomValuesEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry",
    key: "",
    value: 0,
};
exports.ResourceOptions_CachingTimes_CustomValuesEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CachingTimes.CustomValuesEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_CachingTimes_CustomValuesEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_CachingTimes_CustomValuesEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Number(object.value)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_CachingTimes_CustomValuesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_CachingTimes_CustomValuesEntry.$type, exports.ResourceOptions_CachingTimes_CustomValuesEntry);
const baseResourceOptions_EdgeCacheSettings = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings",
    enabled: false,
};
exports.ResourceOptions_EdgeCacheSettings = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.EdgeCacheSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.value !== undefined) {
            exports.ResourceOptions_CachingTimes.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultValue !== undefined) {
            writer.uint32(24).int64(message.defaultValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_EdgeCacheSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.value = exports.ResourceOptions_CachingTimes.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultValue = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_EdgeCacheSettings);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_CachingTimes.fromJSON(object.value)
                : undefined;
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.ResourceOptions_CachingTimes.toJSON(message.value)
                : undefined);
        message.defaultValue !== undefined &&
            (obj.defaultValue = Math.round(message.defaultValue));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_EdgeCacheSettings);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_CachingTimes.fromPartial(object.value)
                : undefined;
        message.defaultValue = (_b = object.defaultValue) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_EdgeCacheSettings.$type, exports.ResourceOptions_EdgeCacheSettings);
const baseResourceOptions_StringVariableMapOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption",
    enabled: false,
};
exports.ResourceOptions_StringVariableMapOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        Object.entries(message.value).forEach(([key, value]) => {
            exports.ResourceOptions_StringVariableMapOption_ValueEntry.encode({
                $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry",
                key: key,
                value,
            }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption);
        message.value = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    const entry2 = exports.ResourceOptions_StringVariableMapOption_ValueEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.value[entry2.key] = entry2.value;
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
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.value = Object.entries((_a = object.value) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] =
                exports.ResourceOptions_StringVariableMapOption_OneofString.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        obj.value = {};
        if (message.value) {
            Object.entries(message.value).forEach(([k, v]) => {
                obj.value[k] =
                    exports.ResourceOptions_StringVariableMapOption_OneofString.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.value = Object.entries((_b = object.value) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] =
                    exports.ResourceOptions_StringVariableMapOption_OneofString.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringVariableMapOption.$type, exports.ResourceOptions_StringVariableMapOption);
const baseResourceOptions_StringVariableMapOption_OneofString = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString",
};
exports.ResourceOptions_StringVariableMapOption_OneofString = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.OneofString",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            exports.ResourceOptions_StringOption.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.values !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.values, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_OneofString);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = exports.ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.values = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_OneofString);
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_StringOption.fromJSON(object.value)
                : undefined;
        message.values =
            object.values !== undefined && object.values !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.values)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.ResourceOptions_StringOption.toJSON(message.value)
                : undefined);
        message.values !== undefined &&
            (obj.values = message.values
                ? exports.ResourceOptions_StringsListOption.toJSON(message.values)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_OneofString);
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_StringOption.fromPartial(object.value)
                : undefined;
        message.values =
            object.values !== undefined && object.values !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.values)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringVariableMapOption_OneofString.$type, exports.ResourceOptions_StringVariableMapOption_OneofString);
const baseResourceOptions_StringVariableMapOption_ValueEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry",
    key: "",
};
exports.ResourceOptions_StringVariableMapOption_ValueEntry = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.StringVariableMapOption.ValueEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ResourceOptions_StringVariableMapOption_OneofString.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_ValueEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value =
                        exports.ResourceOptions_StringVariableMapOption_OneofString.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_ValueEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_StringVariableMapOption_OneofString.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.ResourceOptions_StringVariableMapOption_OneofString.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseResourceOptions_StringVariableMapOption_ValueEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.ResourceOptions_StringVariableMapOption_OneofString.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_StringVariableMapOption_ValueEntry.$type, exports.ResourceOptions_StringVariableMapOption_ValueEntry);
const baseResourceOptions_QueryParamsOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions",
};
exports.ResourceOptions_QueryParamsOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.QueryParamsOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ignoreQueryString !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.ignoreQueryString, writer.uint32(10).fork()).ldelim();
        }
        if (message.queryParamsWhitelist !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.queryParamsWhitelist, writer.uint32(18).fork()).ldelim();
        }
        if (message.queryParamsBlacklist !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.queryParamsBlacklist, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_QueryParamsOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ignoreQueryString = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.queryParamsWhitelist =
                        exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.queryParamsBlacklist =
                        exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_QueryParamsOptions);
        message.ignoreQueryString =
            object.ignoreQueryString !== undefined &&
                object.ignoreQueryString !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.ignoreQueryString)
                : undefined;
        message.queryParamsWhitelist =
            object.queryParamsWhitelist !== undefined &&
                object.queryParamsWhitelist !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.queryParamsWhitelist)
                : undefined;
        message.queryParamsBlacklist =
            object.queryParamsBlacklist !== undefined &&
                object.queryParamsBlacklist !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.queryParamsBlacklist)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ignoreQueryString !== undefined &&
            (obj.ignoreQueryString = message.ignoreQueryString
                ? exports.ResourceOptions_BoolOption.toJSON(message.ignoreQueryString)
                : undefined);
        message.queryParamsWhitelist !== undefined &&
            (obj.queryParamsWhitelist = message.queryParamsWhitelist
                ? exports.ResourceOptions_StringsListOption.toJSON(message.queryParamsWhitelist)
                : undefined);
        message.queryParamsBlacklist !== undefined &&
            (obj.queryParamsBlacklist = message.queryParamsBlacklist
                ? exports.ResourceOptions_StringsListOption.toJSON(message.queryParamsBlacklist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions_QueryParamsOptions);
        message.ignoreQueryString =
            object.ignoreQueryString !== undefined &&
                object.ignoreQueryString !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.ignoreQueryString)
                : undefined;
        message.queryParamsWhitelist =
            object.queryParamsWhitelist !== undefined &&
                object.queryParamsWhitelist !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.queryParamsWhitelist)
                : undefined;
        message.queryParamsBlacklist =
            object.queryParamsBlacklist !== undefined &&
                object.queryParamsBlacklist !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.queryParamsBlacklist)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_QueryParamsOptions.$type, exports.ResourceOptions_QueryParamsOptions);
const baseResourceOptions_RedirectOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions",
};
exports.ResourceOptions_RedirectOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RedirectOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.redirectHttpToHttps !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.redirectHttpToHttps, writer.uint32(10).fork()).ldelim();
        }
        if (message.redirectHttpsToHttp !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.redirectHttpsToHttp, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_RedirectOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redirectHttpToHttps = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.redirectHttpsToHttp = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_RedirectOptions);
        message.redirectHttpToHttps =
            object.redirectHttpToHttps !== undefined &&
                object.redirectHttpToHttps !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.redirectHttpToHttps)
                : undefined;
        message.redirectHttpsToHttp =
            object.redirectHttpsToHttp !== undefined &&
                object.redirectHttpsToHttp !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.redirectHttpsToHttp)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.redirectHttpToHttps !== undefined &&
            (obj.redirectHttpToHttps = message.redirectHttpToHttps
                ? exports.ResourceOptions_BoolOption.toJSON(message.redirectHttpToHttps)
                : undefined);
        message.redirectHttpsToHttp !== undefined &&
            (obj.redirectHttpsToHttp = message.redirectHttpsToHttp
                ? exports.ResourceOptions_BoolOption.toJSON(message.redirectHttpsToHttp)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions_RedirectOptions);
        message.redirectHttpToHttps =
            object.redirectHttpToHttps !== undefined &&
                object.redirectHttpToHttps !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.redirectHttpToHttps)
                : undefined;
        message.redirectHttpsToHttp =
            object.redirectHttpsToHttp !== undefined &&
                object.redirectHttpsToHttp !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.redirectHttpsToHttp)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_RedirectOptions.$type, exports.ResourceOptions_RedirectOptions);
const baseResourceOptions_HostOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions",
};
exports.ResourceOptions_HostOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.HostOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== undefined) {
            exports.ResourceOptions_StringOption.encode(message.host, writer.uint32(10).fork()).ldelim();
        }
        if (message.forwardHostHeader !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.forwardHostHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_HostOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = exports.ResourceOptions_StringOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.forwardHostHeader = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_HostOptions);
        message.host =
            object.host !== undefined && object.host !== null
                ? exports.ResourceOptions_StringOption.fromJSON(object.host)
                : undefined;
        message.forwardHostHeader =
            object.forwardHostHeader !== undefined &&
                object.forwardHostHeader !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.forwardHostHeader)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined &&
            (obj.host = message.host
                ? exports.ResourceOptions_StringOption.toJSON(message.host)
                : undefined);
        message.forwardHostHeader !== undefined &&
            (obj.forwardHostHeader = message.forwardHostHeader
                ? exports.ResourceOptions_BoolOption.toJSON(message.forwardHostHeader)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions_HostOptions);
        message.host =
            object.host !== undefined && object.host !== null
                ? exports.ResourceOptions_StringOption.fromPartial(object.host)
                : undefined;
        message.forwardHostHeader =
            object.forwardHostHeader !== undefined &&
                object.forwardHostHeader !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.forwardHostHeader)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_HostOptions.$type, exports.ResourceOptions_HostOptions);
const baseResourceOptions_CompressionOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions",
};
exports.ResourceOptions_CompressionOptions = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.CompressionOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fetchCompressed !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.fetchCompressed, writer.uint32(10).fork()).ldelim();
        }
        if (message.gzipOn !== undefined) {
            exports.ResourceOptions_BoolOption.encode(message.gzipOn, writer.uint32(18).fork()).ldelim();
        }
        if (message.brotliCompression !== undefined) {
            exports.ResourceOptions_StringsListOption.encode(message.brotliCompression, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_CompressionOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fetchCompressed = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gzipOn = exports.ResourceOptions_BoolOption.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.brotliCompression = exports.ResourceOptions_StringsListOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_CompressionOptions);
        message.fetchCompressed =
            object.fetchCompressed !== undefined && object.fetchCompressed !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.fetchCompressed)
                : undefined;
        message.gzipOn =
            object.gzipOn !== undefined && object.gzipOn !== null
                ? exports.ResourceOptions_BoolOption.fromJSON(object.gzipOn)
                : undefined;
        message.brotliCompression =
            object.brotliCompression !== undefined &&
                object.brotliCompression !== null
                ? exports.ResourceOptions_StringsListOption.fromJSON(object.brotliCompression)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fetchCompressed !== undefined &&
            (obj.fetchCompressed = message.fetchCompressed
                ? exports.ResourceOptions_BoolOption.toJSON(message.fetchCompressed)
                : undefined);
        message.gzipOn !== undefined &&
            (obj.gzipOn = message.gzipOn
                ? exports.ResourceOptions_BoolOption.toJSON(message.gzipOn)
                : undefined);
        message.brotliCompression !== undefined &&
            (obj.brotliCompression = message.brotliCompression
                ? exports.ResourceOptions_StringsListOption.toJSON(message.brotliCompression)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseResourceOptions_CompressionOptions);
        message.fetchCompressed =
            object.fetchCompressed !== undefined && object.fetchCompressed !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.fetchCompressed)
                : undefined;
        message.gzipOn =
            object.gzipOn !== undefined && object.gzipOn !== null
                ? exports.ResourceOptions_BoolOption.fromPartial(object.gzipOn)
                : undefined;
        message.brotliCompression =
            object.brotliCompression !== undefined &&
                object.brotliCompression !== null
                ? exports.ResourceOptions_StringsListOption.fromPartial(object.brotliCompression)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_CompressionOptions.$type, exports.ResourceOptions_CompressionOptions);
const baseResourceOptions_RewriteOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption",
    enabled: false,
    body: "",
    flag: 0,
};
exports.ResourceOptions_RewriteOption = {
    $type: "yandex.cloud.cdn.v1.ResourceOptions.RewriteOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.body !== "") {
            writer.uint32(18).string(message.body);
        }
        if (message.flag !== 0) {
            writer.uint32(24).int32(message.flag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourceOptions_RewriteOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                case 3:
                    message.flag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourceOptions_RewriteOption);
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? Boolean(object.enabled)
                : false;
        message.body =
            object.body !== undefined && object.body !== null
                ? String(object.body)
                : "";
        message.flag =
            object.flag !== undefined && object.flag !== null
                ? rewriteFlagFromJSON(object.flag)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.body !== undefined && (obj.body = message.body);
        message.flag !== undefined && (obj.flag = rewriteFlagToJSON(message.flag));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseResourceOptions_RewriteOption);
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.body = (_b = object.body) !== null && _b !== void 0 ? _b : "";
        message.flag = (_c = object.flag) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceOptions_RewriteOption.$type, exports.ResourceOptions_RewriteOption);
const baseSSLTargetCertificate = {
    $type: "yandex.cloud.cdn.v1.SSLTargetCertificate",
    type: 0,
};
exports.SSLTargetCertificate = {
    $type: "yandex.cloud.cdn.v1.SSLTargetCertificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.data !== undefined) {
            exports.SSLCertificateData.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSSLTargetCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.data = exports.SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSSLTargetCertificate);
        message.type =
            object.type !== undefined && object.type !== null
                ? sSLCertificateTypeFromJSON(object.type)
                : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? exports.SSLCertificateData.fromJSON(object.data)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = sSLCertificateTypeToJSON(message.type));
        message.data !== undefined &&
            (obj.data = message.data
                ? exports.SSLCertificateData.toJSON(message.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSSLTargetCertificate);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? exports.SSLCertificateData.fromPartial(object.data)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SSLTargetCertificate.$type, exports.SSLTargetCertificate);
const baseSSLCertificate = {
    $type: "yandex.cloud.cdn.v1.SSLCertificate",
    type: 0,
    status: 0,
};
exports.SSLCertificate = {
    $type: "yandex.cloud.cdn.v1.SSLCertificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.data !== undefined) {
            exports.SSLCertificateData.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSSLCertificate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.data = exports.SSLCertificateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSSLCertificate);
        message.type =
            object.type !== undefined && object.type !== null
                ? sSLCertificateTypeFromJSON(object.type)
                : 0;
        message.status =
            object.status !== undefined && object.status !== null
                ? sSLCertificateStatusFromJSON(object.status)
                : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? exports.SSLCertificateData.fromJSON(object.data)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = sSLCertificateTypeToJSON(message.type));
        message.status !== undefined &&
            (obj.status = sSLCertificateStatusToJSON(message.status));
        message.data !== undefined &&
            (obj.data = message.data
                ? exports.SSLCertificateData.toJSON(message.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSSLCertificate);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.data =
            object.data !== undefined && object.data !== null
                ? exports.SSLCertificateData.fromPartial(object.data)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SSLCertificate.$type, exports.SSLCertificate);
const baseSSLCertificateData = {
    $type: "yandex.cloud.cdn.v1.SSLCertificateData",
};
exports.SSLCertificateData = {
    $type: "yandex.cloud.cdn.v1.SSLCertificateData",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cm !== undefined) {
            exports.SSLCertificateCMData.encode(message.cm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSSLCertificateData);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cm = exports.SSLCertificateCMData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSSLCertificateData);
        message.cm =
            object.cm !== undefined && object.cm !== null
                ? exports.SSLCertificateCMData.fromJSON(object.cm)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cm !== undefined &&
            (obj.cm = message.cm
                ? exports.SSLCertificateCMData.toJSON(message.cm)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSSLCertificateData);
        message.cm =
            object.cm !== undefined && object.cm !== null
                ? exports.SSLCertificateCMData.fromPartial(object.cm)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SSLCertificateData.$type, exports.SSLCertificateData);
const baseSSLCertificateCMData = {
    $type: "yandex.cloud.cdn.v1.SSLCertificateCMData",
    id: "",
};
exports.SSLCertificateCMData = {
    $type: "yandex.cloud.cdn.v1.SSLCertificateCMData",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSSLCertificateCMData);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSSLCertificateCMData);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSSLCertificateCMData);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SSLCertificateCMData.$type, exports.SSLCertificateCMData);
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
