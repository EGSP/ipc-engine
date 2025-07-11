"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcRouteAction = exports.HttpRouteAction = exports.GrpcStatusResponseAction = exports.DirectResponseAction = exports.RedirectAction = exports.StringMatch = exports.GrpcRouteMatch = exports.HttpRouteMatch = exports.GrpcRoute = exports.HttpRoute = exports.Route = exports.HeaderModification = exports.Principal_HeaderMatcher = exports.Principal = exports.Principals = exports.RBAC = exports.RouteOptions = exports.VirtualHost = exports.grpcStatusResponseAction_StatusToJSON = exports.grpcStatusResponseAction_StatusFromJSON = exports.GrpcStatusResponseAction_Status = exports.redirectAction_RedirectResponseCodeToJSON = exports.redirectAction_RedirectResponseCodeFromJSON = exports.RedirectAction_RedirectResponseCode = exports.rBAC_ActionToJSON = exports.rBAC_ActionFromJSON = exports.RBAC_Action = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const payload_1 = require("../../../../yandex/cloud/apploadbalancer/v1/payload");
const duration_1 = require("../../../../google/protobuf/duration");
exports.protobufPackage = "yandex.cloud.apploadbalancer.v1";
var RBAC_Action;
(function (RBAC_Action) {
    RBAC_Action[RBAC_Action["ACTION_UNSPECIFIED"] = 0] = "ACTION_UNSPECIFIED";
    /** ALLOW - Allows the request if and only if there is a principal that matches the request. */
    RBAC_Action[RBAC_Action["ALLOW"] = 1] = "ALLOW";
    /** DENY - Allows the request if and only if there are no principal that match the request. */
    RBAC_Action[RBAC_Action["DENY"] = 2] = "DENY";
    RBAC_Action[RBAC_Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RBAC_Action = exports.RBAC_Action || (exports.RBAC_Action = {}));
function rBAC_ActionFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_UNSPECIFIED":
            return RBAC_Action.ACTION_UNSPECIFIED;
        case 1:
        case "ALLOW":
            return RBAC_Action.ALLOW;
        case 2:
        case "DENY":
            return RBAC_Action.DENY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RBAC_Action.UNRECOGNIZED;
    }
}
exports.rBAC_ActionFromJSON = rBAC_ActionFromJSON;
function rBAC_ActionToJSON(object) {
    switch (object) {
        case RBAC_Action.ACTION_UNSPECIFIED:
            return "ACTION_UNSPECIFIED";
        case RBAC_Action.ALLOW:
            return "ALLOW";
        case RBAC_Action.DENY:
            return "DENY";
        default:
            return "UNKNOWN";
    }
}
exports.rBAC_ActionToJSON = rBAC_ActionToJSON;
/** HTTP status codes supported for use in redirect responses. */
var RedirectAction_RedirectResponseCode;
(function (RedirectAction_RedirectResponseCode) {
    /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["MOVED_PERMANENTLY"] = 0] = "MOVED_PERMANENTLY";
    /** FOUND - `302 Found` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["FOUND"] = 1] = "FOUND";
    /** SEE_OTHER - `303 See Other` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["SEE_OTHER"] = 2] = "SEE_OTHER";
    /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["TEMPORARY_REDIRECT"] = 3] = "TEMPORARY_REDIRECT";
    /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["PERMANENT_REDIRECT"] = 4] = "PERMANENT_REDIRECT";
    RedirectAction_RedirectResponseCode[RedirectAction_RedirectResponseCode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RedirectAction_RedirectResponseCode = exports.RedirectAction_RedirectResponseCode || (exports.RedirectAction_RedirectResponseCode = {}));
function redirectAction_RedirectResponseCodeFromJSON(object) {
    switch (object) {
        case 0:
        case "MOVED_PERMANENTLY":
            return RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY;
        case 1:
        case "FOUND":
            return RedirectAction_RedirectResponseCode.FOUND;
        case 2:
        case "SEE_OTHER":
            return RedirectAction_RedirectResponseCode.SEE_OTHER;
        case 3:
        case "TEMPORARY_REDIRECT":
            return RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT;
        case 4:
        case "PERMANENT_REDIRECT":
            return RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RedirectAction_RedirectResponseCode.UNRECOGNIZED;
    }
}
exports.redirectAction_RedirectResponseCodeFromJSON = redirectAction_RedirectResponseCodeFromJSON;
function redirectAction_RedirectResponseCodeToJSON(object) {
    switch (object) {
        case RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY:
            return "MOVED_PERMANENTLY";
        case RedirectAction_RedirectResponseCode.FOUND:
            return "FOUND";
        case RedirectAction_RedirectResponseCode.SEE_OTHER:
            return "SEE_OTHER";
        case RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT:
            return "TEMPORARY_REDIRECT";
        case RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT:
            return "PERMANENT_REDIRECT";
        default:
            return "UNKNOWN";
    }
}
exports.redirectAction_RedirectResponseCodeToJSON = redirectAction_RedirectResponseCodeToJSON;
/** gRPC status code supported for use in responses. */
var GrpcStatusResponseAction_Status;
(function (GrpcStatusResponseAction_Status) {
    /** OK - `OK` (0) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["OK"] = 0] = "OK";
    /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["INVALID_ARGUMENT"] = 1] = "INVALID_ARGUMENT";
    /** NOT_FOUND - `NOT_FOUND` (5) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["NOT_FOUND"] = 2] = "NOT_FOUND";
    /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["PERMISSION_DENIED"] = 3] = "PERMISSION_DENIED";
    /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNAUTHENTICATED"] = 4] = "UNAUTHENTICATED";
    /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNIMPLEMENTED"] = 5] = "UNIMPLEMENTED";
    /** INTERNAL - `INTERNAL` (13) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["INTERNAL"] = 6] = "INTERNAL";
    /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNAVAILABLE"] = 7] = "UNAVAILABLE";
    GrpcStatusResponseAction_Status[GrpcStatusResponseAction_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GrpcStatusResponseAction_Status = exports.GrpcStatusResponseAction_Status || (exports.GrpcStatusResponseAction_Status = {}));
function grpcStatusResponseAction_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "OK":
            return GrpcStatusResponseAction_Status.OK;
        case 1:
        case "INVALID_ARGUMENT":
            return GrpcStatusResponseAction_Status.INVALID_ARGUMENT;
        case 2:
        case "NOT_FOUND":
            return GrpcStatusResponseAction_Status.NOT_FOUND;
        case 3:
        case "PERMISSION_DENIED":
            return GrpcStatusResponseAction_Status.PERMISSION_DENIED;
        case 4:
        case "UNAUTHENTICATED":
            return GrpcStatusResponseAction_Status.UNAUTHENTICATED;
        case 5:
        case "UNIMPLEMENTED":
            return GrpcStatusResponseAction_Status.UNIMPLEMENTED;
        case 6:
        case "INTERNAL":
            return GrpcStatusResponseAction_Status.INTERNAL;
        case 7:
        case "UNAVAILABLE":
            return GrpcStatusResponseAction_Status.UNAVAILABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GrpcStatusResponseAction_Status.UNRECOGNIZED;
    }
}
exports.grpcStatusResponseAction_StatusFromJSON = grpcStatusResponseAction_StatusFromJSON;
function grpcStatusResponseAction_StatusToJSON(object) {
    switch (object) {
        case GrpcStatusResponseAction_Status.OK:
            return "OK";
        case GrpcStatusResponseAction_Status.INVALID_ARGUMENT:
            return "INVALID_ARGUMENT";
        case GrpcStatusResponseAction_Status.NOT_FOUND:
            return "NOT_FOUND";
        case GrpcStatusResponseAction_Status.PERMISSION_DENIED:
            return "PERMISSION_DENIED";
        case GrpcStatusResponseAction_Status.UNAUTHENTICATED:
            return "UNAUTHENTICATED";
        case GrpcStatusResponseAction_Status.UNIMPLEMENTED:
            return "UNIMPLEMENTED";
        case GrpcStatusResponseAction_Status.INTERNAL:
            return "INTERNAL";
        case GrpcStatusResponseAction_Status.UNAVAILABLE:
            return "UNAVAILABLE";
        default:
            return "UNKNOWN";
    }
}
exports.grpcStatusResponseAction_StatusToJSON = grpcStatusResponseAction_StatusToJSON;
const baseVirtualHost = {
    $type: "yandex.cloud.apploadbalancer.v1.VirtualHost",
    name: "",
    authority: "",
};
exports.VirtualHost = {
    $type: "yandex.cloud.apploadbalancer.v1.VirtualHost",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(18).string(v);
        }
        for (const v of message.routes) {
            exports.Route.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            exports.HeaderModification.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            exports.HeaderModification.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            exports.RouteOptions.encode(message.routeOptions, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVirtualHost);
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.authority.push(reader.string());
                    break;
                case 3:
                    message.routes.push(exports.Route.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.modifyRequestHeaders.push(exports.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.modifyResponseHeaders.push(exports.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.routeOptions = exports.RouteOptions.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseVirtualHost);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.authority = ((_a = object.authority) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.routes = ((_b = object.routes) !== null && _b !== void 0 ? _b : []).map((e) => exports.Route.fromJSON(e));
        message.modifyRequestHeaders = ((_c = object.modifyRequestHeaders) !== null && _c !== void 0 ? _c : []).map((e) => exports.HeaderModification.fromJSON(e));
        message.modifyResponseHeaders = ((_d = object.modifyResponseHeaders) !== null && _d !== void 0 ? _d : []).map((e) => exports.HeaderModification.fromJSON(e));
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? exports.RouteOptions.fromJSON(object.routeOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? exports.Route.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? exports.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? exports.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? exports.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseVirtualHost);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.authority = ((_b = object.authority) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.routes = ((_c = object.routes) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Route.fromPartial(e))) || [];
        message.modifyRequestHeaders =
            ((_d = object.modifyRequestHeaders) === null || _d === void 0 ? void 0 : _d.map((e) => exports.HeaderModification.fromPartial(e))) || [];
        message.modifyResponseHeaders =
            ((_e = object.modifyResponseHeaders) === null || _e === void 0 ? void 0 : _e.map((e) => exports.HeaderModification.fromPartial(e))) || [];
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? exports.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VirtualHost.$type, exports.VirtualHost);
const baseRouteOptions = {
    $type: "yandex.cloud.apploadbalancer.v1.RouteOptions",
    securityProfileId: "",
};
exports.RouteOptions = {
    $type: "yandex.cloud.apploadbalancer.v1.RouteOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.modifyRequestHeaders) {
            exports.HeaderModification.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            exports.HeaderModification.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.rbac !== undefined) {
            exports.RBAC.encode(message.rbac, writer.uint32(26).fork()).ldelim();
        }
        if (message.securityProfileId !== "") {
            writer.uint32(34).string(message.securityProfileId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRouteOptions);
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modifyRequestHeaders.push(exports.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.modifyResponseHeaders.push(exports.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rbac = exports.RBAC.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.securityProfileId = reader.string();
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
        const message = Object.assign({}, baseRouteOptions);
        message.modifyRequestHeaders = ((_a = object.modifyRequestHeaders) !== null && _a !== void 0 ? _a : []).map((e) => exports.HeaderModification.fromJSON(e));
        message.modifyResponseHeaders = ((_b = object.modifyResponseHeaders) !== null && _b !== void 0 ? _b : []).map((e) => exports.HeaderModification.fromJSON(e));
        message.rbac =
            object.rbac !== undefined && object.rbac !== null
                ? exports.RBAC.fromJSON(object.rbac)
                : undefined;
        message.securityProfileId =
            object.securityProfileId !== undefined &&
                object.securityProfileId !== null
                ? String(object.securityProfileId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? exports.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? exports.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        message.rbac !== undefined &&
            (obj.rbac = message.rbac ? exports.RBAC.toJSON(message.rbac) : undefined);
        message.securityProfileId !== undefined &&
            (obj.securityProfileId = message.securityProfileId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRouteOptions);
        message.modifyRequestHeaders =
            ((_a = object.modifyRequestHeaders) === null || _a === void 0 ? void 0 : _a.map((e) => exports.HeaderModification.fromPartial(e))) || [];
        message.modifyResponseHeaders =
            ((_b = object.modifyResponseHeaders) === null || _b === void 0 ? void 0 : _b.map((e) => exports.HeaderModification.fromPartial(e))) || [];
        message.rbac =
            object.rbac !== undefined && object.rbac !== null
                ? exports.RBAC.fromPartial(object.rbac)
                : undefined;
        message.securityProfileId = (_c = object.securityProfileId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RouteOptions.$type, exports.RouteOptions);
const baseRBAC = {
    $type: "yandex.cloud.apploadbalancer.v1.RBAC",
    action: 0,
};
exports.RBAC = {
    $type: "yandex.cloud.apploadbalancer.v1.RBAC",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.action !== 0) {
            writer.uint32(8).int32(message.action);
        }
        for (const v of message.principals) {
            exports.Principals.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRBAC);
        message.principals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.principals.push(exports.Principals.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseRBAC);
        message.action =
            object.action !== undefined && object.action !== null
                ? rBAC_ActionFromJSON(object.action)
                : 0;
        message.principals = ((_a = object.principals) !== null && _a !== void 0 ? _a : []).map((e) => exports.Principals.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined &&
            (obj.action = rBAC_ActionToJSON(message.action));
        if (message.principals) {
            obj.principals = message.principals.map((e) => e ? exports.Principals.toJSON(e) : undefined);
        }
        else {
            obj.principals = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRBAC);
        message.action = (_a = object.action) !== null && _a !== void 0 ? _a : 0;
        message.principals =
            ((_b = object.principals) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Principals.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RBAC.$type, exports.RBAC);
const basePrincipals = {
    $type: "yandex.cloud.apploadbalancer.v1.Principals",
};
exports.Principals = {
    $type: "yandex.cloud.apploadbalancer.v1.Principals",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.andPrincipals) {
            exports.Principal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrincipals);
        message.andPrincipals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.andPrincipals.push(exports.Principal.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePrincipals);
        message.andPrincipals = ((_a = object.andPrincipals) !== null && _a !== void 0 ? _a : []).map((e) => exports.Principal.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.andPrincipals) {
            obj.andPrincipals = message.andPrincipals.map((e) => e ? exports.Principal.toJSON(e) : undefined);
        }
        else {
            obj.andPrincipals = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePrincipals);
        message.andPrincipals =
            ((_a = object.andPrincipals) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Principal.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Principals.$type, exports.Principals);
const basePrincipal = {
    $type: "yandex.cloud.apploadbalancer.v1.Principal",
};
exports.Principal = {
    $type: "yandex.cloud.apploadbalancer.v1.Principal",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.Principal_HeaderMatcher.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.remoteIp !== undefined) {
            writer.uint32(18).string(message.remoteIp);
        }
        if (message.any !== undefined) {
            writer.uint32(24).bool(message.any);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrincipal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Principal_HeaderMatcher.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.remoteIp = reader.string();
                    break;
                case 3:
                    message.any = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePrincipal);
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.Principal_HeaderMatcher.fromJSON(object.header)
                : undefined;
        message.remoteIp =
            object.remoteIp !== undefined && object.remoteIp !== null
                ? String(object.remoteIp)
                : undefined;
        message.any =
            object.any !== undefined && object.any !== null
                ? Boolean(object.any)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.Principal_HeaderMatcher.toJSON(message.header)
                : undefined);
        message.remoteIp !== undefined && (obj.remoteIp = message.remoteIp);
        message.any !== undefined && (obj.any = message.any);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrincipal);
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.Principal_HeaderMatcher.fromPartial(object.header)
                : undefined;
        message.remoteIp = (_a = object.remoteIp) !== null && _a !== void 0 ? _a : undefined;
        message.any = (_b = object.any) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Principal.$type, exports.Principal);
const basePrincipal_HeaderMatcher = {
    $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher",
    name: "",
};
exports.Principal_HeaderMatcher = {
    $type: "yandex.cloud.apploadbalancer.v1.Principal.HeaderMatcher",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined) {
            exports.StringMatch.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrincipal_HeaderMatcher);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = exports.StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePrincipal_HeaderMatcher);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.StringMatch.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.StringMatch.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePrincipal_HeaderMatcher);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.StringMatch.fromPartial(object.value)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Principal_HeaderMatcher.$type, exports.Principal_HeaderMatcher);
const baseHeaderModification = {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderModification",
    name: "",
};
exports.HeaderModification = {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderModification",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.append !== undefined) {
            writer.uint32(18).string(message.append);
        }
        if (message.replace !== undefined) {
            writer.uint32(26).string(message.replace);
        }
        if (message.remove !== undefined) {
            writer.uint32(32).bool(message.remove);
        }
        if (message.rename !== undefined) {
            writer.uint32(42).string(message.rename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHeaderModification);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.append = reader.string();
                    break;
                case 3:
                    message.replace = reader.string();
                    break;
                case 4:
                    message.remove = reader.bool();
                    break;
                case 5:
                    message.rename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHeaderModification);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.append =
            object.append !== undefined && object.append !== null
                ? String(object.append)
                : undefined;
        message.replace =
            object.replace !== undefined && object.replace !== null
                ? String(object.replace)
                : undefined;
        message.remove =
            object.remove !== undefined && object.remove !== null
                ? Boolean(object.remove)
                : undefined;
        message.rename =
            object.rename !== undefined && object.rename !== null
                ? String(object.rename)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.append !== undefined && (obj.append = message.append);
        message.replace !== undefined && (obj.replace = message.replace);
        message.remove !== undefined && (obj.remove = message.remove);
        message.rename !== undefined && (obj.rename = message.rename);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHeaderModification);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.append = (_b = object.append) !== null && _b !== void 0 ? _b : undefined;
        message.replace = (_c = object.replace) !== null && _c !== void 0 ? _c : undefined;
        message.remove = (_d = object.remove) !== null && _d !== void 0 ? _d : undefined;
        message.rename = (_e = object.rename) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HeaderModification.$type, exports.HeaderModification);
const baseRoute = {
    $type: "yandex.cloud.apploadbalancer.v1.Route",
    name: "",
};
exports.Route = {
    $type: "yandex.cloud.apploadbalancer.v1.Route",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.http !== undefined) {
            exports.HttpRoute.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            exports.GrpcRoute.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            exports.RouteOptions.encode(message.routeOptions, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRoute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.http = exports.HttpRoute.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = exports.GrpcRoute.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.routeOptions = exports.RouteOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRoute);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpRoute.fromJSON(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.GrpcRoute.fromJSON(object.grpc)
                : undefined;
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? exports.RouteOptions.fromJSON(object.routeOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.http !== undefined &&
            (obj.http = message.http ? exports.HttpRoute.toJSON(message.http) : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc ? exports.GrpcRoute.toJSON(message.grpc) : undefined);
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? exports.RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRoute);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.http =
            object.http !== undefined && object.http !== null
                ? exports.HttpRoute.fromPartial(object.http)
                : undefined;
        message.grpc =
            object.grpc !== undefined && object.grpc !== null
                ? exports.GrpcRoute.fromPartial(object.grpc)
                : undefined;
        message.routeOptions =
            object.routeOptions !== undefined && object.routeOptions !== null
                ? exports.RouteOptions.fromPartial(object.routeOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Route.$type, exports.Route);
const baseHttpRoute = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRoute",
};
exports.HttpRoute = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRoute",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.match !== undefined) {
            exports.HttpRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.route !== undefined) {
            exports.HttpRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
        }
        if (message.redirect !== undefined) {
            exports.RedirectAction.encode(message.redirect, writer.uint32(26).fork()).ldelim();
        }
        if (message.directResponse !== undefined) {
            exports.DirectResponseAction.encode(message.directResponse, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpRoute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = exports.HttpRouteMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.route = exports.HttpRouteAction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.redirect = exports.RedirectAction.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.directResponse = exports.DirectResponseAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseHttpRoute);
        message.match =
            object.match !== undefined && object.match !== null
                ? exports.HttpRouteMatch.fromJSON(object.match)
                : undefined;
        message.route =
            object.route !== undefined && object.route !== null
                ? exports.HttpRouteAction.fromJSON(object.route)
                : undefined;
        message.redirect =
            object.redirect !== undefined && object.redirect !== null
                ? exports.RedirectAction.fromJSON(object.redirect)
                : undefined;
        message.directResponse =
            object.directResponse !== undefined && object.directResponse !== null
                ? exports.DirectResponseAction.fromJSON(object.directResponse)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? exports.HttpRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? exports.HttpRouteAction.toJSON(message.route)
                : undefined);
        message.redirect !== undefined &&
            (obj.redirect = message.redirect
                ? exports.RedirectAction.toJSON(message.redirect)
                : undefined);
        message.directResponse !== undefined &&
            (obj.directResponse = message.directResponse
                ? exports.DirectResponseAction.toJSON(message.directResponse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseHttpRoute);
        message.match =
            object.match !== undefined && object.match !== null
                ? exports.HttpRouteMatch.fromPartial(object.match)
                : undefined;
        message.route =
            object.route !== undefined && object.route !== null
                ? exports.HttpRouteAction.fromPartial(object.route)
                : undefined;
        message.redirect =
            object.redirect !== undefined && object.redirect !== null
                ? exports.RedirectAction.fromPartial(object.redirect)
                : undefined;
        message.directResponse =
            object.directResponse !== undefined && object.directResponse !== null
                ? exports.DirectResponseAction.fromPartial(object.directResponse)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpRoute.$type, exports.HttpRoute);
const baseGrpcRoute = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute",
};
exports.GrpcRoute = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRoute",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.match !== undefined) {
            exports.GrpcRouteMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
        }
        if (message.route !== undefined) {
            exports.GrpcRouteAction.encode(message.route, writer.uint32(18).fork()).ldelim();
        }
        if (message.statusResponse !== undefined) {
            exports.GrpcStatusResponseAction.encode(message.statusResponse, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcRoute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = exports.GrpcRouteMatch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.route = exports.GrpcRouteAction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.statusResponse = exports.GrpcStatusResponseAction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrpcRoute);
        message.match =
            object.match !== undefined && object.match !== null
                ? exports.GrpcRouteMatch.fromJSON(object.match)
                : undefined;
        message.route =
            object.route !== undefined && object.route !== null
                ? exports.GrpcRouteAction.fromJSON(object.route)
                : undefined;
        message.statusResponse =
            object.statusResponse !== undefined && object.statusResponse !== null
                ? exports.GrpcStatusResponseAction.fromJSON(object.statusResponse)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? exports.GrpcRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? exports.GrpcRouteAction.toJSON(message.route)
                : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse
                ? exports.GrpcStatusResponseAction.toJSON(message.statusResponse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGrpcRoute);
        message.match =
            object.match !== undefined && object.match !== null
                ? exports.GrpcRouteMatch.fromPartial(object.match)
                : undefined;
        message.route =
            object.route !== undefined && object.route !== null
                ? exports.GrpcRouteAction.fromPartial(object.route)
                : undefined;
        message.statusResponse =
            object.statusResponse !== undefined && object.statusResponse !== null
                ? exports.GrpcStatusResponseAction.fromPartial(object.statusResponse)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcRoute.$type, exports.GrpcRoute);
const baseHttpRouteMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch",
    httpMethod: "",
};
exports.HttpRouteMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteMatch",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.httpMethod) {
            writer.uint32(10).string(v);
        }
        if (message.path !== undefined) {
            exports.StringMatch.encode(message.path, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpRouteMatch);
        message.httpMethod = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpMethod.push(reader.string());
                    break;
                case 2:
                    message.path = exports.StringMatch.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseHttpRouteMatch);
        message.httpMethod = ((_a = object.httpMethod) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.path =
            object.path !== undefined && object.path !== null
                ? exports.StringMatch.fromJSON(object.path)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.httpMethod) {
            obj.httpMethod = message.httpMethod.map((e) => e);
        }
        else {
            obj.httpMethod = [];
        }
        message.path !== undefined &&
            (obj.path = message.path ? exports.StringMatch.toJSON(message.path) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseHttpRouteMatch);
        message.httpMethod = ((_a = object.httpMethod) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.path =
            object.path !== undefined && object.path !== null
                ? exports.StringMatch.fromPartial(object.path)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpRouteMatch.$type, exports.HttpRouteMatch);
const baseGrpcRouteMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch",
};
exports.GrpcRouteMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteMatch",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fqmn !== undefined) {
            exports.StringMatch.encode(message.fqmn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcRouteMatch);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqmn = exports.StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrpcRouteMatch);
        message.fqmn =
            object.fqmn !== undefined && object.fqmn !== null
                ? exports.StringMatch.fromJSON(object.fqmn)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqmn !== undefined &&
            (obj.fqmn = message.fqmn ? exports.StringMatch.toJSON(message.fqmn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGrpcRouteMatch);
        message.fqmn =
            object.fqmn !== undefined && object.fqmn !== null
                ? exports.StringMatch.fromPartial(object.fqmn)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcRouteMatch.$type, exports.GrpcRouteMatch);
const baseStringMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.StringMatch",
};
exports.StringMatch = {
    $type: "yandex.cloud.apploadbalancer.v1.StringMatch",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exactMatch !== undefined) {
            writer.uint32(10).string(message.exactMatch);
        }
        if (message.prefixMatch !== undefined) {
            writer.uint32(18).string(message.prefixMatch);
        }
        if (message.regexMatch !== undefined) {
            writer.uint32(26).string(message.regexMatch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStringMatch);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exactMatch = reader.string();
                    break;
                case 2:
                    message.prefixMatch = reader.string();
                    break;
                case 3:
                    message.regexMatch = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStringMatch);
        message.exactMatch =
            object.exactMatch !== undefined && object.exactMatch !== null
                ? String(object.exactMatch)
                : undefined;
        message.prefixMatch =
            object.prefixMatch !== undefined && object.prefixMatch !== null
                ? String(object.prefixMatch)
                : undefined;
        message.regexMatch =
            object.regexMatch !== undefined && object.regexMatch !== null
                ? String(object.regexMatch)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.exactMatch !== undefined && (obj.exactMatch = message.exactMatch);
        message.prefixMatch !== undefined &&
            (obj.prefixMatch = message.prefixMatch);
        message.regexMatch !== undefined && (obj.regexMatch = message.regexMatch);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseStringMatch);
        message.exactMatch = (_a = object.exactMatch) !== null && _a !== void 0 ? _a : undefined;
        message.prefixMatch = (_b = object.prefixMatch) !== null && _b !== void 0 ? _b : undefined;
        message.regexMatch = (_c = object.regexMatch) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StringMatch.$type, exports.StringMatch);
const baseRedirectAction = {
    $type: "yandex.cloud.apploadbalancer.v1.RedirectAction",
    replaceScheme: "",
    replaceHost: "",
    replacePort: 0,
    removeQuery: false,
    responseCode: 0,
};
exports.RedirectAction = {
    $type: "yandex.cloud.apploadbalancer.v1.RedirectAction",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.replaceScheme !== "") {
            writer.uint32(10).string(message.replaceScheme);
        }
        if (message.replaceHost !== "") {
            writer.uint32(18).string(message.replaceHost);
        }
        if (message.replacePort !== 0) {
            writer.uint32(24).int64(message.replacePort);
        }
        if (message.replacePath !== undefined) {
            writer.uint32(34).string(message.replacePath);
        }
        if (message.replacePrefix !== undefined) {
            writer.uint32(42).string(message.replacePrefix);
        }
        if (message.removeQuery === true) {
            writer.uint32(48).bool(message.removeQuery);
        }
        if (message.responseCode !== 0) {
            writer.uint32(56).int32(message.responseCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRedirectAction);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replaceScheme = reader.string();
                    break;
                case 2:
                    message.replaceHost = reader.string();
                    break;
                case 3:
                    message.replacePort = longToNumber(reader.int64());
                    break;
                case 4:
                    message.replacePath = reader.string();
                    break;
                case 5:
                    message.replacePrefix = reader.string();
                    break;
                case 6:
                    message.removeQuery = reader.bool();
                    break;
                case 7:
                    message.responseCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRedirectAction);
        message.replaceScheme =
            object.replaceScheme !== undefined && object.replaceScheme !== null
                ? String(object.replaceScheme)
                : "";
        message.replaceHost =
            object.replaceHost !== undefined && object.replaceHost !== null
                ? String(object.replaceHost)
                : "";
        message.replacePort =
            object.replacePort !== undefined && object.replacePort !== null
                ? Number(object.replacePort)
                : 0;
        message.replacePath =
            object.replacePath !== undefined && object.replacePath !== null
                ? String(object.replacePath)
                : undefined;
        message.replacePrefix =
            object.replacePrefix !== undefined && object.replacePrefix !== null
                ? String(object.replacePrefix)
                : undefined;
        message.removeQuery =
            object.removeQuery !== undefined && object.removeQuery !== null
                ? Boolean(object.removeQuery)
                : false;
        message.responseCode =
            object.responseCode !== undefined && object.responseCode !== null
                ? redirectAction_RedirectResponseCodeFromJSON(object.responseCode)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.replaceScheme !== undefined &&
            (obj.replaceScheme = message.replaceScheme);
        message.replaceHost !== undefined &&
            (obj.replaceHost = message.replaceHost);
        message.replacePort !== undefined &&
            (obj.replacePort = Math.round(message.replacePort));
        message.replacePath !== undefined &&
            (obj.replacePath = message.replacePath);
        message.replacePrefix !== undefined &&
            (obj.replacePrefix = message.replacePrefix);
        message.removeQuery !== undefined &&
            (obj.removeQuery = message.removeQuery);
        message.responseCode !== undefined &&
            (obj.responseCode = redirectAction_RedirectResponseCodeToJSON(message.responseCode));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseRedirectAction);
        message.replaceScheme = (_a = object.replaceScheme) !== null && _a !== void 0 ? _a : "";
        message.replaceHost = (_b = object.replaceHost) !== null && _b !== void 0 ? _b : "";
        message.replacePort = (_c = object.replacePort) !== null && _c !== void 0 ? _c : 0;
        message.replacePath = (_d = object.replacePath) !== null && _d !== void 0 ? _d : undefined;
        message.replacePrefix = (_e = object.replacePrefix) !== null && _e !== void 0 ? _e : undefined;
        message.removeQuery = (_f = object.removeQuery) !== null && _f !== void 0 ? _f : false;
        message.responseCode = (_g = object.responseCode) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RedirectAction.$type, exports.RedirectAction);
const baseDirectResponseAction = {
    $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction",
    status: 0,
};
exports.DirectResponseAction = {
    $type: "yandex.cloud.apploadbalancer.v1.DirectResponseAction",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int64(message.status);
        }
        if (message.body !== undefined) {
            payload_1.Payload.encode(message.body, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDirectResponseAction);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = longToNumber(reader.int64());
                    break;
                case 2:
                    message.body = payload_1.Payload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDirectResponseAction);
        message.status =
            object.status !== undefined && object.status !== null
                ? Number(object.status)
                : 0;
        message.body =
            object.body !== undefined && object.body !== null
                ? payload_1.Payload.fromJSON(object.body)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.body !== undefined &&
            (obj.body = message.body ? payload_1.Payload.toJSON(message.body) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDirectResponseAction);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.body =
            object.body !== undefined && object.body !== null
                ? payload_1.Payload.fromPartial(object.body)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DirectResponseAction.$type, exports.DirectResponseAction);
const baseGrpcStatusResponseAction = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction",
    status: 0,
};
exports.GrpcStatusResponseAction = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcStatusResponseAction);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrpcStatusResponseAction);
        message.status =
            object.status !== undefined && object.status !== null
                ? grpcStatusResponseAction_StatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = grpcStatusResponseAction_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGrpcStatusResponseAction);
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcStatusResponseAction.$type, exports.GrpcStatusResponseAction);
const baseHttpRouteAction = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction",
    backendGroupId: "",
    prefixRewrite: "",
    upgradeTypes: "",
};
exports.HttpRouteAction = {
    $type: "yandex.cloud.apploadbalancer.v1.HttpRouteAction",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            duration_1.Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        if (message.prefixRewrite !== "") {
            writer.uint32(50).string(message.prefixRewrite);
        }
        for (const v of message.upgradeTypes) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHttpRouteAction);
        message.upgradeTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.idleTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                case 6:
                    message.prefixRewrite = reader.string();
                    break;
                case 7:
                    message.upgradeTypes.push(reader.string());
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
        const message = Object.assign({}, baseHttpRouteAction);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromJSON(object.timeout)
                : undefined;
        message.idleTimeout =
            object.idleTimeout !== undefined && object.idleTimeout !== null
                ? duration_1.Duration.fromJSON(object.idleTimeout)
                : undefined;
        message.hostRewrite =
            object.hostRewrite !== undefined && object.hostRewrite !== null
                ? String(object.hostRewrite)
                : undefined;
        message.autoHostRewrite =
            object.autoHostRewrite !== undefined && object.autoHostRewrite !== null
                ? Boolean(object.autoHostRewrite)
                : undefined;
        message.prefixRewrite =
            object.prefixRewrite !== undefined && object.prefixRewrite !== null
                ? String(object.prefixRewrite)
                : "";
        message.upgradeTypes = ((_a = object.upgradeTypes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? duration_1.Duration.toJSON(message.timeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? duration_1.Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        message.prefixRewrite !== undefined &&
            (obj.prefixRewrite = message.prefixRewrite);
        if (message.upgradeTypes) {
            obj.upgradeTypes = message.upgradeTypes.map((e) => e);
        }
        else {
            obj.upgradeTypes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHttpRouteAction);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.timeout =
            object.timeout !== undefined && object.timeout !== null
                ? duration_1.Duration.fromPartial(object.timeout)
                : undefined;
        message.idleTimeout =
            object.idleTimeout !== undefined && object.idleTimeout !== null
                ? duration_1.Duration.fromPartial(object.idleTimeout)
                : undefined;
        message.hostRewrite = (_b = object.hostRewrite) !== null && _b !== void 0 ? _b : undefined;
        message.autoHostRewrite = (_c = object.autoHostRewrite) !== null && _c !== void 0 ? _c : undefined;
        message.prefixRewrite = (_d = object.prefixRewrite) !== null && _d !== void 0 ? _d : "";
        message.upgradeTypes = ((_e = object.upgradeTypes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpRouteAction.$type, exports.HttpRouteAction);
const baseGrpcRouteAction = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction",
    backendGroupId: "",
};
exports.GrpcRouteAction = {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcRouteAction",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== "") {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.maxTimeout !== undefined) {
            duration_1.Duration.encode(message.maxTimeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            duration_1.Duration.encode(message.idleTimeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGrpcRouteAction);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.maxTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.idleTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGrpcRouteAction);
        message.backendGroupId =
            object.backendGroupId !== undefined && object.backendGroupId !== null
                ? String(object.backendGroupId)
                : "";
        message.maxTimeout =
            object.maxTimeout !== undefined && object.maxTimeout !== null
                ? duration_1.Duration.fromJSON(object.maxTimeout)
                : undefined;
        message.idleTimeout =
            object.idleTimeout !== undefined && object.idleTimeout !== null
                ? duration_1.Duration.fromJSON(object.idleTimeout)
                : undefined;
        message.hostRewrite =
            object.hostRewrite !== undefined && object.hostRewrite !== null
                ? String(object.hostRewrite)
                : undefined;
        message.autoHostRewrite =
            object.autoHostRewrite !== undefined && object.autoHostRewrite !== null
                ? Boolean(object.autoHostRewrite)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.maxTimeout !== undefined &&
            (obj.maxTimeout = message.maxTimeout
                ? duration_1.Duration.toJSON(message.maxTimeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? duration_1.Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGrpcRouteAction);
        message.backendGroupId = (_a = object.backendGroupId) !== null && _a !== void 0 ? _a : "";
        message.maxTimeout =
            object.maxTimeout !== undefined && object.maxTimeout !== null
                ? duration_1.Duration.fromPartial(object.maxTimeout)
                : undefined;
        message.idleTimeout =
            object.idleTimeout !== undefined && object.idleTimeout !== null
                ? duration_1.Duration.fromPartial(object.idleTimeout)
                : undefined;
        message.hostRewrite = (_b = object.hostRewrite) !== null && _b !== void 0 ? _b : undefined;
        message.autoHostRewrite = (_c = object.autoHostRewrite) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GrpcRouteAction.$type, exports.GrpcRouteAction);
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
