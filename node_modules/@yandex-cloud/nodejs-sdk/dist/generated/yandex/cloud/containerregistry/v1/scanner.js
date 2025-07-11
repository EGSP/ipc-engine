"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageVulnerability = exports.Vulnerability = exports.VulnerabilityStats = exports.ScanResult = exports.vulnerability_SeverityToJSON = exports.vulnerability_SeverityFromJSON = exports.Vulnerability_Severity = exports.scanResult_StatusToJSON = exports.scanResult_StatusFromJSON = exports.ScanResult_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
var ScanResult_Status;
(function (ScanResult_Status) {
    ScanResult_Status[ScanResult_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** RUNNING - Image scan is in progress. */
    ScanResult_Status[ScanResult_Status["RUNNING"] = 1] = "RUNNING";
    /** READY - Image has been scanned and result is ready. */
    ScanResult_Status[ScanResult_Status["READY"] = 2] = "READY";
    /** ERROR - Image scan is failed. */
    ScanResult_Status[ScanResult_Status["ERROR"] = 3] = "ERROR";
    ScanResult_Status[ScanResult_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScanResult_Status = exports.ScanResult_Status || (exports.ScanResult_Status = {}));
function scanResult_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return ScanResult_Status.STATUS_UNSPECIFIED;
        case 1:
        case "RUNNING":
            return ScanResult_Status.RUNNING;
        case 2:
        case "READY":
            return ScanResult_Status.READY;
        case 3:
        case "ERROR":
            return ScanResult_Status.ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScanResult_Status.UNRECOGNIZED;
    }
}
exports.scanResult_StatusFromJSON = scanResult_StatusFromJSON;
function scanResult_StatusToJSON(object) {
    switch (object) {
        case ScanResult_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case ScanResult_Status.RUNNING:
            return "RUNNING";
        case ScanResult_Status.READY:
            return "READY";
        case ScanResult_Status.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.scanResult_StatusToJSON = scanResult_StatusToJSON;
var Vulnerability_Severity;
(function (Vulnerability_Severity) {
    Vulnerability_Severity[Vulnerability_Severity["SEVERITY_UNSPECIFIED"] = 0] = "SEVERITY_UNSPECIFIED";
    /**
     * CRITICAL - Critical severity is a world-burning problem, exploitable for nearly all users.
     * Includes remote root privilege escalations, or massive data loss.
     */
    Vulnerability_Severity[Vulnerability_Severity["CRITICAL"] = 1] = "CRITICAL";
    /**
     * HIGH - High severity is a real problem, exploitable for many users in a default installation.
     * Includes serious remote denial of services, local root privilege escalations, or data loss.
     */
    Vulnerability_Severity[Vulnerability_Severity["HIGH"] = 2] = "HIGH";
    /**
     * MEDIUM - Medium severity is a real security problem, and is exploitable for many users.
     * Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges.
     * Updates should be made soon for this priority of issue.
     */
    Vulnerability_Severity[Vulnerability_Severity["MEDIUM"] = 3] = "MEDIUM";
    /**
     * LOW - Low severity is a security problem, but is hard to exploit due to environment, requires a user-assisted attack,
     * a small install base, or does very little damage. These tend to be included in security updates only when
     * higher priority issues require an update, or if many low priority issues have built up.
     */
    Vulnerability_Severity[Vulnerability_Severity["LOW"] = 4] = "LOW";
    /**
     * NEGLIGIBLE - Negligible severity is technically a security problem, but is only theoretical in nature, requires a very special situation,
     * has almost no install base, or does no real damage. These tend not to get backport from upstream,
     * and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
     */
    Vulnerability_Severity[Vulnerability_Severity["NEGLIGIBLE"] = 5] = "NEGLIGIBLE";
    /**
     * UNDEFINED - Unknown severity is either a security problem that has not been assigned to a priority yet or
     * a priority that our system did not recognize.
     */
    Vulnerability_Severity[Vulnerability_Severity["UNDEFINED"] = 6] = "UNDEFINED";
    Vulnerability_Severity[Vulnerability_Severity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Vulnerability_Severity = exports.Vulnerability_Severity || (exports.Vulnerability_Severity = {}));
function vulnerability_SeverityFromJSON(object) {
    switch (object) {
        case 0:
        case "SEVERITY_UNSPECIFIED":
            return Vulnerability_Severity.SEVERITY_UNSPECIFIED;
        case 1:
        case "CRITICAL":
            return Vulnerability_Severity.CRITICAL;
        case 2:
        case "HIGH":
            return Vulnerability_Severity.HIGH;
        case 3:
        case "MEDIUM":
            return Vulnerability_Severity.MEDIUM;
        case 4:
        case "LOW":
            return Vulnerability_Severity.LOW;
        case 5:
        case "NEGLIGIBLE":
            return Vulnerability_Severity.NEGLIGIBLE;
        case 6:
        case "UNDEFINED":
            return Vulnerability_Severity.UNDEFINED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Vulnerability_Severity.UNRECOGNIZED;
    }
}
exports.vulnerability_SeverityFromJSON = vulnerability_SeverityFromJSON;
function vulnerability_SeverityToJSON(object) {
    switch (object) {
        case Vulnerability_Severity.SEVERITY_UNSPECIFIED:
            return "SEVERITY_UNSPECIFIED";
        case Vulnerability_Severity.CRITICAL:
            return "CRITICAL";
        case Vulnerability_Severity.HIGH:
            return "HIGH";
        case Vulnerability_Severity.MEDIUM:
            return "MEDIUM";
        case Vulnerability_Severity.LOW:
            return "LOW";
        case Vulnerability_Severity.NEGLIGIBLE:
            return "NEGLIGIBLE";
        case Vulnerability_Severity.UNDEFINED:
            return "UNDEFINED";
        default:
            return "UNKNOWN";
    }
}
exports.vulnerability_SeverityToJSON = vulnerability_SeverityToJSON;
const baseScanResult = {
    $type: "yandex.cloud.containerregistry.v1.ScanResult",
    id: "",
    imageId: "",
    status: 0,
};
exports.ScanResult = {
    $type: "yandex.cloud.containerregistry.v1.ScanResult",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.imageId !== "") {
            writer.uint32(18).string(message.imageId);
        }
        if (message.scannedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.scannedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.vulnerabilities !== undefined) {
            exports.VulnerabilityStats.encode(message.vulnerabilities, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScanResult);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.imageId = reader.string();
                    break;
                case 3:
                    message.scannedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.vulnerabilities = exports.VulnerabilityStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScanResult);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        message.scannedAt =
            object.scannedAt !== undefined && object.scannedAt !== null
                ? fromJsonTimestamp(object.scannedAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? scanResult_StatusFromJSON(object.status)
                : 0;
        message.vulnerabilities =
            object.vulnerabilities !== undefined && object.vulnerabilities !== null
                ? exports.VulnerabilityStats.fromJSON(object.vulnerabilities)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.scannedAt !== undefined &&
            (obj.scannedAt = message.scannedAt.toISOString());
        message.status !== undefined &&
            (obj.status = scanResult_StatusToJSON(message.status));
        message.vulnerabilities !== undefined &&
            (obj.vulnerabilities = message.vulnerabilities
                ? exports.VulnerabilityStats.toJSON(message.vulnerabilities)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseScanResult);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.imageId = (_b = object.imageId) !== null && _b !== void 0 ? _b : "";
        message.scannedAt = (_c = object.scannedAt) !== null && _c !== void 0 ? _c : undefined;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.vulnerabilities =
            object.vulnerabilities !== undefined && object.vulnerabilities !== null
                ? exports.VulnerabilityStats.fromPartial(object.vulnerabilities)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanResult.$type, exports.ScanResult);
const baseVulnerabilityStats = {
    $type: "yandex.cloud.containerregistry.v1.VulnerabilityStats",
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    negligible: 0,
    undefined: 0,
};
exports.VulnerabilityStats = {
    $type: "yandex.cloud.containerregistry.v1.VulnerabilityStats",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.critical !== 0) {
            writer.uint32(8).int64(message.critical);
        }
        if (message.high !== 0) {
            writer.uint32(16).int64(message.high);
        }
        if (message.medium !== 0) {
            writer.uint32(24).int64(message.medium);
        }
        if (message.low !== 0) {
            writer.uint32(32).int64(message.low);
        }
        if (message.negligible !== 0) {
            writer.uint32(40).int64(message.negligible);
        }
        if (message.undefined !== 0) {
            writer.uint32(48).int64(message.undefined);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVulnerabilityStats);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.critical = longToNumber(reader.int64());
                    break;
                case 2:
                    message.high = longToNumber(reader.int64());
                    break;
                case 3:
                    message.medium = longToNumber(reader.int64());
                    break;
                case 4:
                    message.low = longToNumber(reader.int64());
                    break;
                case 5:
                    message.negligible = longToNumber(reader.int64());
                    break;
                case 6:
                    message.undefined = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVulnerabilityStats);
        message.critical =
            object.critical !== undefined && object.critical !== null
                ? Number(object.critical)
                : 0;
        message.high =
            object.high !== undefined && object.high !== null
                ? Number(object.high)
                : 0;
        message.medium =
            object.medium !== undefined && object.medium !== null
                ? Number(object.medium)
                : 0;
        message.low =
            object.low !== undefined && object.low !== null ? Number(object.low) : 0;
        message.negligible =
            object.negligible !== undefined && object.negligible !== null
                ? Number(object.negligible)
                : 0;
        message.undefined =
            object.undefined !== undefined && object.undefined !== null
                ? Number(object.undefined)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.critical !== undefined &&
            (obj.critical = Math.round(message.critical));
        message.high !== undefined && (obj.high = Math.round(message.high));
        message.medium !== undefined && (obj.medium = Math.round(message.medium));
        message.low !== undefined && (obj.low = Math.round(message.low));
        message.negligible !== undefined &&
            (obj.negligible = Math.round(message.negligible));
        message.undefined !== undefined &&
            (obj.undefined = Math.round(message.undefined));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseVulnerabilityStats);
        message.critical = (_a = object.critical) !== null && _a !== void 0 ? _a : 0;
        message.high = (_b = object.high) !== null && _b !== void 0 ? _b : 0;
        message.medium = (_c = object.medium) !== null && _c !== void 0 ? _c : 0;
        message.low = (_d = object.low) !== null && _d !== void 0 ? _d : 0;
        message.negligible = (_e = object.negligible) !== null && _e !== void 0 ? _e : 0;
        message.undefined = (_f = object.undefined) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VulnerabilityStats.$type, exports.VulnerabilityStats);
const baseVulnerability = {
    $type: "yandex.cloud.containerregistry.v1.Vulnerability",
    severity: 0,
};
exports.Vulnerability = {
    $type: "yandex.cloud.containerregistry.v1.Vulnerability",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.severity !== 0) {
            writer.uint32(8).int32(message.severity);
        }
        if (message.package !== undefined) {
            exports.PackageVulnerability.encode(message.package, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVulnerability);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.severity = reader.int32();
                    break;
                case 2:
                    message.package = exports.PackageVulnerability.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVulnerability);
        message.severity =
            object.severity !== undefined && object.severity !== null
                ? vulnerability_SeverityFromJSON(object.severity)
                : 0;
        message.package =
            object.package !== undefined && object.package !== null
                ? exports.PackageVulnerability.fromJSON(object.package)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.severity !== undefined &&
            (obj.severity = vulnerability_SeverityToJSON(message.severity));
        message.package !== undefined &&
            (obj.package = message.package
                ? exports.PackageVulnerability.toJSON(message.package)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseVulnerability);
        message.severity = (_a = object.severity) !== null && _a !== void 0 ? _a : 0;
        message.package =
            object.package !== undefined && object.package !== null
                ? exports.PackageVulnerability.fromPartial(object.package)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Vulnerability.$type, exports.Vulnerability);
const basePackageVulnerability = {
    $type: "yandex.cloud.containerregistry.v1.PackageVulnerability",
    name: "",
    link: "",
    package: "",
    source: "",
    version: "",
    fixedBy: "",
};
exports.PackageVulnerability = {
    $type: "yandex.cloud.containerregistry.v1.PackageVulnerability",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.link !== "") {
            writer.uint32(18).string(message.link);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        if (message.source !== "") {
            writer.uint32(34).string(message.source);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.fixedBy !== "") {
            writer.uint32(50).string(message.fixedBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePackageVulnerability);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.link = reader.string();
                    break;
                case 3:
                    message.package = reader.string();
                    break;
                case 4:
                    message.source = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.fixedBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePackageVulnerability);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.link =
            object.link !== undefined && object.link !== null
                ? String(object.link)
                : "";
        message.package =
            object.package !== undefined && object.package !== null
                ? String(object.package)
                : "";
        message.source =
            object.source !== undefined && object.source !== null
                ? String(object.source)
                : "";
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.fixedBy =
            object.fixedBy !== undefined && object.fixedBy !== null
                ? String(object.fixedBy)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.link !== undefined && (obj.link = message.link);
        message.package !== undefined && (obj.package = message.package);
        message.source !== undefined && (obj.source = message.source);
        message.version !== undefined && (obj.version = message.version);
        message.fixedBy !== undefined && (obj.fixedBy = message.fixedBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, basePackageVulnerability);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.link = (_b = object.link) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        message.source = (_d = object.source) !== null && _d !== void 0 ? _d : "";
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "";
        message.fixedBy = (_f = object.fixedBy) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PackageVulnerability.$type, exports.PackageVulnerability);
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
