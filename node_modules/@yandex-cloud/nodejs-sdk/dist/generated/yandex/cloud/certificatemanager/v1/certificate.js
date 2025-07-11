"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.Challenge_HttpFile = exports.Challenge_DnsRecord = exports.Challenge = exports.Certificate_LabelsEntry = exports.Certificate = exports.challenge_StatusToJSON = exports.challenge_StatusFromJSON = exports.Challenge_Status = exports.certificate_StatusToJSON = exports.certificate_StatusFromJSON = exports.Certificate_Status = exports.challengeTypeToJSON = exports.challengeTypeFromJSON = exports.ChallengeType = exports.certificateTypeToJSON = exports.certificateTypeFromJSON = exports.CertificateType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.certificatemanager.v1";
/** Supported certificate types. */
var CertificateType;
(function (CertificateType) {
    CertificateType[CertificateType["CERTIFICATE_TYPE_UNSPECIFIED"] = 0] = "CERTIFICATE_TYPE_UNSPECIFIED";
    /** IMPORTED - The certificate is imported by user. */
    CertificateType[CertificateType["IMPORTED"] = 1] = "IMPORTED";
    /** MANAGED - The certificate is created by service. */
    CertificateType[CertificateType["MANAGED"] = 2] = "MANAGED";
    CertificateType[CertificateType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
function certificateTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CERTIFICATE_TYPE_UNSPECIFIED":
            return CertificateType.CERTIFICATE_TYPE_UNSPECIFIED;
        case 1:
        case "IMPORTED":
            return CertificateType.IMPORTED;
        case 2:
        case "MANAGED":
            return CertificateType.MANAGED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CertificateType.UNRECOGNIZED;
    }
}
exports.certificateTypeFromJSON = certificateTypeFromJSON;
function certificateTypeToJSON(object) {
    switch (object) {
        case CertificateType.CERTIFICATE_TYPE_UNSPECIFIED:
            return "CERTIFICATE_TYPE_UNSPECIFIED";
        case CertificateType.IMPORTED:
            return "IMPORTED";
        case CertificateType.MANAGED:
            return "MANAGED";
        default:
            return "UNKNOWN";
    }
}
exports.certificateTypeToJSON = certificateTypeToJSON;
/** Supported domain validation types. */
var ChallengeType;
(function (ChallengeType) {
    ChallengeType[ChallengeType["CHALLENGE_TYPE_UNSPECIFIED"] = 0] = "CHALLENGE_TYPE_UNSPECIFIED";
    /** DNS - Domain validation type that using DNS-records. */
    ChallengeType[ChallengeType["DNS"] = 1] = "DNS";
    /** HTTP - Domain validation type that using HTTP-files. */
    ChallengeType[ChallengeType["HTTP"] = 2] = "HTTP";
    ChallengeType[ChallengeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChallengeType = exports.ChallengeType || (exports.ChallengeType = {}));
function challengeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CHALLENGE_TYPE_UNSPECIFIED":
            return ChallengeType.CHALLENGE_TYPE_UNSPECIFIED;
        case 1:
        case "DNS":
            return ChallengeType.DNS;
        case 2:
        case "HTTP":
            return ChallengeType.HTTP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChallengeType.UNRECOGNIZED;
    }
}
exports.challengeTypeFromJSON = challengeTypeFromJSON;
function challengeTypeToJSON(object) {
    switch (object) {
        case ChallengeType.CHALLENGE_TYPE_UNSPECIFIED:
            return "CHALLENGE_TYPE_UNSPECIFIED";
        case ChallengeType.DNS:
            return "DNS";
        case ChallengeType.HTTP:
            return "HTTP";
        default:
            return "UNKNOWN";
    }
}
exports.challengeTypeToJSON = challengeTypeToJSON;
var Certificate_Status;
(function (Certificate_Status) {
    Certificate_Status[Certificate_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** VALIDATING - The certificate domains validation are required. Used only for managed certificates. */
    Certificate_Status[Certificate_Status["VALIDATING"] = 1] = "VALIDATING";
    /** INVALID - The certificate issuance is failed. Used only for managed certificates. */
    Certificate_Status[Certificate_Status["INVALID"] = 2] = "INVALID";
    /** ISSUED - The certificate is issued. */
    Certificate_Status[Certificate_Status["ISSUED"] = 3] = "ISSUED";
    /** REVOKED - The certificate is revoked. */
    Certificate_Status[Certificate_Status["REVOKED"] = 4] = "REVOKED";
    /** RENEWING - The certificate renewal is started. Used only for managed certificates. */
    Certificate_Status[Certificate_Status["RENEWING"] = 5] = "RENEWING";
    /** RENEWAL_FAILED - The certificate renewal is failed. Used only for managed certificates. */
    Certificate_Status[Certificate_Status["RENEWAL_FAILED"] = 6] = "RENEWAL_FAILED";
    Certificate_Status[Certificate_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Certificate_Status = exports.Certificate_Status || (exports.Certificate_Status = {}));
function certificate_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Certificate_Status.STATUS_UNSPECIFIED;
        case 1:
        case "VALIDATING":
            return Certificate_Status.VALIDATING;
        case 2:
        case "INVALID":
            return Certificate_Status.INVALID;
        case 3:
        case "ISSUED":
            return Certificate_Status.ISSUED;
        case 4:
        case "REVOKED":
            return Certificate_Status.REVOKED;
        case 5:
        case "RENEWING":
            return Certificate_Status.RENEWING;
        case 6:
        case "RENEWAL_FAILED":
            return Certificate_Status.RENEWAL_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Certificate_Status.UNRECOGNIZED;
    }
}
exports.certificate_StatusFromJSON = certificate_StatusFromJSON;
function certificate_StatusToJSON(object) {
    switch (object) {
        case Certificate_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Certificate_Status.VALIDATING:
            return "VALIDATING";
        case Certificate_Status.INVALID:
            return "INVALID";
        case Certificate_Status.ISSUED:
            return "ISSUED";
        case Certificate_Status.REVOKED:
            return "REVOKED";
        case Certificate_Status.RENEWING:
            return "RENEWING";
        case Certificate_Status.RENEWAL_FAILED:
            return "RENEWAL_FAILED";
        default:
            return "UNKNOWN";
    }
}
exports.certificate_StatusToJSON = certificate_StatusToJSON;
var Challenge_Status;
(function (Challenge_Status) {
    Challenge_Status[Challenge_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PENDING - The challenge is waiting to be completed. */
    Challenge_Status[Challenge_Status["PENDING"] = 1] = "PENDING";
    /** PROCESSING - The challenge is awaiting approval from Let's Encrypt. */
    Challenge_Status[Challenge_Status["PROCESSING"] = 2] = "PROCESSING";
    /** VALID - The challenge is complete. */
    Challenge_Status[Challenge_Status["VALID"] = 3] = "VALID";
    /** INVALID - The rights check for a specific domain failed or the one-week period allocated for the check expired. */
    Challenge_Status[Challenge_Status["INVALID"] = 4] = "INVALID";
    Challenge_Status[Challenge_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Challenge_Status = exports.Challenge_Status || (exports.Challenge_Status = {}));
function challenge_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Challenge_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PENDING":
            return Challenge_Status.PENDING;
        case 2:
        case "PROCESSING":
            return Challenge_Status.PROCESSING;
        case 3:
        case "VALID":
            return Challenge_Status.VALID;
        case 4:
        case "INVALID":
            return Challenge_Status.INVALID;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Challenge_Status.UNRECOGNIZED;
    }
}
exports.challenge_StatusFromJSON = challenge_StatusFromJSON;
function challenge_StatusToJSON(object) {
    switch (object) {
        case Challenge_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Challenge_Status.PENDING:
            return "PENDING";
        case Challenge_Status.PROCESSING:
            return "PROCESSING";
        case Challenge_Status.VALID:
            return "VALID";
        case Challenge_Status.INVALID:
            return "INVALID";
        default:
            return "UNKNOWN";
    }
}
exports.challenge_StatusToJSON = challenge_StatusToJSON;
const baseCertificate = {
    $type: "yandex.cloud.certificatemanager.v1.Certificate",
    id: "",
    folderId: "",
    name: "",
    description: "",
    type: 0,
    domains: "",
    status: 0,
    issuer: "",
    subject: "",
    serial: "",
    deletionProtection: false,
    incompleteChain: false,
};
exports.Certificate = {
    $type: "yandex.cloud.certificatemanager.v1.Certificate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Certificate_LabelsEntry.encode({
                $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        for (const v of message.domains) {
            writer.uint32(66).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.issuer !== "") {
            writer.uint32(82).string(message.issuer);
        }
        if (message.subject !== "") {
            writer.uint32(90).string(message.subject);
        }
        if (message.serial !== "") {
            writer.uint32(98).string(message.serial);
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.issuedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.issuedAt), writer.uint32(114).fork()).ldelim();
        }
        if (message.notAfter !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.notAfter), writer.uint32(122).fork()).ldelim();
        }
        if (message.notBefore !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.notBefore), writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.challenges) {
            exports.Challenge.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(144).bool(message.deletionProtection);
        }
        if (message.incompleteChain === true) {
            writer.uint32(152).bool(message.incompleteChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCertificate);
        message.labels = {};
        message.domains = [];
        message.challenges = [];
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Certificate_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.domains.push(reader.string());
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.issuer = reader.string();
                    break;
                case 11:
                    message.subject = reader.string();
                    break;
                case 12:
                    message.serial = reader.string();
                    break;
                case 13:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.issuedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.notAfter = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.notBefore = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.challenges.push(exports.Challenge.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.deletionProtection = reader.bool();
                    break;
                case 19:
                    message.incompleteChain = reader.bool();
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
        const message = Object.assign({}, baseCertificate);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
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
        message.type =
            object.type !== undefined && object.type !== null
                ? certificateTypeFromJSON(object.type)
                : 0;
        message.domains = ((_b = object.domains) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.status =
            object.status !== undefined && object.status !== null
                ? certificate_StatusFromJSON(object.status)
                : 0;
        message.issuer =
            object.issuer !== undefined && object.issuer !== null
                ? String(object.issuer)
                : "";
        message.subject =
            object.subject !== undefined && object.subject !== null
                ? String(object.subject)
                : "";
        message.serial =
            object.serial !== undefined && object.serial !== null
                ? String(object.serial)
                : "";
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.issuedAt =
            object.issuedAt !== undefined && object.issuedAt !== null
                ? fromJsonTimestamp(object.issuedAt)
                : undefined;
        message.notAfter =
            object.notAfter !== undefined && object.notAfter !== null
                ? fromJsonTimestamp(object.notAfter)
                : undefined;
        message.notBefore =
            object.notBefore !== undefined && object.notBefore !== null
                ? fromJsonTimestamp(object.notBefore)
                : undefined;
        message.challenges = ((_c = object.challenges) !== null && _c !== void 0 ? _c : []).map((e) => exports.Challenge.fromJSON(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        message.incompleteChain =
            object.incompleteChain !== undefined && object.incompleteChain !== null
                ? Boolean(object.incompleteChain)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.type !== undefined &&
            (obj.type = certificateTypeToJSON(message.type));
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.status !== undefined &&
            (obj.status = certificate_StatusToJSON(message.status));
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.subject !== undefined && (obj.subject = message.subject);
        message.serial !== undefined && (obj.serial = message.serial);
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.issuedAt !== undefined &&
            (obj.issuedAt = message.issuedAt.toISOString());
        message.notAfter !== undefined &&
            (obj.notAfter = message.notAfter.toISOString());
        message.notBefore !== undefined &&
            (obj.notBefore = message.notBefore.toISOString());
        if (message.challenges) {
            obj.challenges = message.challenges.map((e) => e ? exports.Challenge.toJSON(e) : undefined);
        }
        else {
            obj.challenges = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.incompleteChain !== undefined &&
            (obj.incompleteChain = message.incompleteChain);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        const message = Object.assign({}, baseCertificate);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        message.domains = ((_h = object.domains) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        message.issuer = (_k = object.issuer) !== null && _k !== void 0 ? _k : "";
        message.subject = (_l = object.subject) !== null && _l !== void 0 ? _l : "";
        message.serial = (_m = object.serial) !== null && _m !== void 0 ? _m : "";
        message.updatedAt = (_o = object.updatedAt) !== null && _o !== void 0 ? _o : undefined;
        message.issuedAt = (_p = object.issuedAt) !== null && _p !== void 0 ? _p : undefined;
        message.notAfter = (_q = object.notAfter) !== null && _q !== void 0 ? _q : undefined;
        message.notBefore = (_r = object.notBefore) !== null && _r !== void 0 ? _r : undefined;
        message.challenges =
            ((_s = object.challenges) === null || _s === void 0 ? void 0 : _s.map((e) => exports.Challenge.fromPartial(e))) || [];
        message.deletionProtection = (_t = object.deletionProtection) !== null && _t !== void 0 ? _t : false;
        message.incompleteChain = (_u = object.incompleteChain) !== null && _u !== void 0 ? _u : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Certificate.$type, exports.Certificate);
const baseCertificate_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry",
    key: "",
    value: "",
};
exports.Certificate_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry",
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
        const message = Object.assign({}, baseCertificate_LabelsEntry);
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
        const message = Object.assign({}, baseCertificate_LabelsEntry);
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
        const message = Object.assign({}, baseCertificate_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Certificate_LabelsEntry.$type, exports.Certificate_LabelsEntry);
const baseChallenge = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge",
    domain: "",
    type: 0,
    status: 0,
    message: "",
    error: "",
};
exports.Challenge = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domain !== "") {
            writer.uint32(10).string(message.domain);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.message !== "") {
            writer.uint32(50).string(message.message);
        }
        if (message.error !== "") {
            writer.uint32(58).string(message.error);
        }
        if (message.dnsChallenge !== undefined) {
            exports.Challenge_DnsRecord.encode(message.dnsChallenge, writer.uint32(66).fork()).ldelim();
        }
        if (message.httpChallenge !== undefined) {
            exports.Challenge_HttpFile.encode(message.httpChallenge, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChallenge);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domain = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.message = reader.string();
                    break;
                case 7:
                    message.error = reader.string();
                    break;
                case 8:
                    message.dnsChallenge = exports.Challenge_DnsRecord.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.httpChallenge = exports.Challenge_HttpFile.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChallenge);
        message.domain =
            object.domain !== undefined && object.domain !== null
                ? String(object.domain)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? challengeTypeFromJSON(object.type)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? challenge_StatusFromJSON(object.status)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        message.error =
            object.error !== undefined && object.error !== null
                ? String(object.error)
                : "";
        message.dnsChallenge =
            object.dnsChallenge !== undefined && object.dnsChallenge !== null
                ? exports.Challenge_DnsRecord.fromJSON(object.dnsChallenge)
                : undefined;
        message.httpChallenge =
            object.httpChallenge !== undefined && object.httpChallenge !== null
                ? exports.Challenge_HttpFile.fromJSON(object.httpChallenge)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.domain !== undefined && (obj.domain = message.domain);
        message.type !== undefined &&
            (obj.type = challengeTypeToJSON(message.type));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.status !== undefined &&
            (obj.status = challenge_StatusToJSON(message.status));
        message.message !== undefined && (obj.message = message.message);
        message.error !== undefined && (obj.error = message.error);
        message.dnsChallenge !== undefined &&
            (obj.dnsChallenge = message.dnsChallenge
                ? exports.Challenge_DnsRecord.toJSON(message.dnsChallenge)
                : undefined);
        message.httpChallenge !== undefined &&
            (obj.httpChallenge = message.httpChallenge
                ? exports.Challenge_HttpFile.toJSON(message.httpChallenge)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseChallenge);
        message.domain = (_a = object.domain) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : undefined;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.message = (_f = object.message) !== null && _f !== void 0 ? _f : "";
        message.error = (_g = object.error) !== null && _g !== void 0 ? _g : "";
        message.dnsChallenge =
            object.dnsChallenge !== undefined && object.dnsChallenge !== null
                ? exports.Challenge_DnsRecord.fromPartial(object.dnsChallenge)
                : undefined;
        message.httpChallenge =
            object.httpChallenge !== undefined && object.httpChallenge !== null
                ? exports.Challenge_HttpFile.fromPartial(object.httpChallenge)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Challenge.$type, exports.Challenge);
const baseChallenge_DnsRecord = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord",
    name: "",
    type: "",
    value: "",
};
exports.Challenge_DnsRecord = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChallenge_DnsRecord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
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
        const message = Object.assign({}, baseChallenge_DnsRecord);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseChallenge_DnsRecord);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.value = (_c = object.value) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Challenge_DnsRecord.$type, exports.Challenge_DnsRecord);
const baseChallenge_HttpFile = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile",
    url: "",
    content: "",
};
exports.Challenge_HttpFile = {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChallenge_HttpFile);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChallenge_HttpFile);
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        message.content =
            object.content !== undefined && object.content !== null
                ? String(object.content)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseChallenge_HttpFile);
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        message.content = (_b = object.content) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Challenge_HttpFile.$type, exports.Challenge_HttpFile);
const baseVersion = {
    $type: "yandex.cloud.certificatemanager.v1.Version",
    id: "",
    certificateId: "",
};
exports.Version = {
    $type: "yandex.cloud.certificatemanager.v1.Version",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.certificateId !== "") {
            writer.uint32(18).string(message.certificateId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersion);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseVersion);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.certificateId = (_b = object.certificateId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Version.$type, exports.Version);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
