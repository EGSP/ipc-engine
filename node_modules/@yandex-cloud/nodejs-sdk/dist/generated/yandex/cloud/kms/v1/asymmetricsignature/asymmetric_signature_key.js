"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricSignatureKey_LabelsEntry = exports.AsymmetricSignatureKey = exports.asymmetricSignatureKey_StatusToJSON = exports.asymmetricSignatureKey_StatusFromJSON = exports.AsymmetricSignatureKey_Status = exports.asymmetricSignatureAlgorithmToJSON = exports.asymmetricSignatureAlgorithmFromJSON = exports.AsymmetricSignatureAlgorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricsignature";
/** Supported asymmetric signature algorithms. */
var AsymmetricSignatureAlgorithm;
(function (AsymmetricSignatureAlgorithm) {
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED"] = 0] = "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED";
    /** RSA_2048_SIGN_PSS_SHA_256 - RSA-2048 signature with PSS padding and SHA-256 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_2048_SIGN_PSS_SHA_256"] = 1] = "RSA_2048_SIGN_PSS_SHA_256";
    /** RSA_2048_SIGN_PSS_SHA_384 - RSA-2048 signature with PSS padding and SHA-384 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_2048_SIGN_PSS_SHA_384"] = 2] = "RSA_2048_SIGN_PSS_SHA_384";
    /** RSA_2048_SIGN_PSS_SHA_512 - RSA-2048 signature with PSS padding and SHA-512 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_2048_SIGN_PSS_SHA_512"] = 3] = "RSA_2048_SIGN_PSS_SHA_512";
    /** RSA_3072_SIGN_PSS_SHA_256 - RSA-3072 signature with PSS padding and SHA-256 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_3072_SIGN_PSS_SHA_256"] = 4] = "RSA_3072_SIGN_PSS_SHA_256";
    /** RSA_3072_SIGN_PSS_SHA_384 - RSA-3072 signature with PSS padding and SHA-384 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_3072_SIGN_PSS_SHA_384"] = 5] = "RSA_3072_SIGN_PSS_SHA_384";
    /** RSA_3072_SIGN_PSS_SHA_512 - RSA-3072 signature with PSS padding and SHA-512 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_3072_SIGN_PSS_SHA_512"] = 6] = "RSA_3072_SIGN_PSS_SHA_512";
    /** RSA_4096_SIGN_PSS_SHA_256 - RSA-4096 signature with PSS padding and SHA-256 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_4096_SIGN_PSS_SHA_256"] = 7] = "RSA_4096_SIGN_PSS_SHA_256";
    /** RSA_4096_SIGN_PSS_SHA_384 - RSA-4096 signature with PSS padding and SHA-384 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_4096_SIGN_PSS_SHA_384"] = 8] = "RSA_4096_SIGN_PSS_SHA_384";
    /** RSA_4096_SIGN_PSS_SHA_512 - RSA-4096 signature with PSS padding and SHA-512 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["RSA_4096_SIGN_PSS_SHA_512"] = 9] = "RSA_4096_SIGN_PSS_SHA_512";
    /** ECDSA_NIST_P256_SHA_256 - ECDSA signature with NIST P-256 curve and SHA-256 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["ECDSA_NIST_P256_SHA_256"] = 10] = "ECDSA_NIST_P256_SHA_256";
    /** ECDSA_NIST_P384_SHA_384 - ECDSA signature with NIST P-384 curve and SHA-384 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["ECDSA_NIST_P384_SHA_384"] = 11] = "ECDSA_NIST_P384_SHA_384";
    /** ECDSA_NIST_P521_SHA_512 - ECDSA signature with NIST P-521 curve and SHA-512 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["ECDSA_NIST_P521_SHA_512"] = 12] = "ECDSA_NIST_P521_SHA_512";
    /** ECDSA_SECP256_K1_SHA_256 - ECDSA signature with SECP256_K1 curve and SHA-256 */
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["ECDSA_SECP256_K1_SHA_256"] = 13] = "ECDSA_SECP256_K1_SHA_256";
    AsymmetricSignatureAlgorithm[AsymmetricSignatureAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AsymmetricSignatureAlgorithm = exports.AsymmetricSignatureAlgorithm || (exports.AsymmetricSignatureAlgorithm = {}));
function asymmetricSignatureAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED":
            return AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED;
        case 1:
        case "RSA_2048_SIGN_PSS_SHA_256":
            return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256;
        case 2:
        case "RSA_2048_SIGN_PSS_SHA_384":
            return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384;
        case 3:
        case "RSA_2048_SIGN_PSS_SHA_512":
            return AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512;
        case 4:
        case "RSA_3072_SIGN_PSS_SHA_256":
            return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256;
        case 5:
        case "RSA_3072_SIGN_PSS_SHA_384":
            return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384;
        case 6:
        case "RSA_3072_SIGN_PSS_SHA_512":
            return AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512;
        case 7:
        case "RSA_4096_SIGN_PSS_SHA_256":
            return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256;
        case 8:
        case "RSA_4096_SIGN_PSS_SHA_384":
            return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384;
        case 9:
        case "RSA_4096_SIGN_PSS_SHA_512":
            return AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512;
        case 10:
        case "ECDSA_NIST_P256_SHA_256":
            return AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256;
        case 11:
        case "ECDSA_NIST_P384_SHA_384":
            return AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384;
        case 12:
        case "ECDSA_NIST_P521_SHA_512":
            return AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512;
        case 13:
        case "ECDSA_SECP256_K1_SHA_256":
            return AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AsymmetricSignatureAlgorithm.UNRECOGNIZED;
    }
}
exports.asymmetricSignatureAlgorithmFromJSON = asymmetricSignatureAlgorithmFromJSON;
function asymmetricSignatureAlgorithmToJSON(object) {
    switch (object) {
        case AsymmetricSignatureAlgorithm.ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED:
            return "ASYMMETRIC_SIGNATURE_ALGORITHM_UNSPECIFIED";
        case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_256:
            return "RSA_2048_SIGN_PSS_SHA_256";
        case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_384:
            return "RSA_2048_SIGN_PSS_SHA_384";
        case AsymmetricSignatureAlgorithm.RSA_2048_SIGN_PSS_SHA_512:
            return "RSA_2048_SIGN_PSS_SHA_512";
        case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_256:
            return "RSA_3072_SIGN_PSS_SHA_256";
        case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_384:
            return "RSA_3072_SIGN_PSS_SHA_384";
        case AsymmetricSignatureAlgorithm.RSA_3072_SIGN_PSS_SHA_512:
            return "RSA_3072_SIGN_PSS_SHA_512";
        case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_256:
            return "RSA_4096_SIGN_PSS_SHA_256";
        case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_384:
            return "RSA_4096_SIGN_PSS_SHA_384";
        case AsymmetricSignatureAlgorithm.RSA_4096_SIGN_PSS_SHA_512:
            return "RSA_4096_SIGN_PSS_SHA_512";
        case AsymmetricSignatureAlgorithm.ECDSA_NIST_P256_SHA_256:
            return "ECDSA_NIST_P256_SHA_256";
        case AsymmetricSignatureAlgorithm.ECDSA_NIST_P384_SHA_384:
            return "ECDSA_NIST_P384_SHA_384";
        case AsymmetricSignatureAlgorithm.ECDSA_NIST_P521_SHA_512:
            return "ECDSA_NIST_P521_SHA_512";
        case AsymmetricSignatureAlgorithm.ECDSA_SECP256_K1_SHA_256:
            return "ECDSA_SECP256_K1_SHA_256";
        default:
            return "UNKNOWN";
    }
}
exports.asymmetricSignatureAlgorithmToJSON = asymmetricSignatureAlgorithmToJSON;
var AsymmetricSignatureKey_Status;
(function (AsymmetricSignatureKey_Status) {
    AsymmetricSignatureKey_Status[AsymmetricSignatureKey_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The key is being created. */
    AsymmetricSignatureKey_Status[AsymmetricSignatureKey_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption or signature and verification.
     * Can be set to INACTIVE using the [AsymmetricKeyService.Update] method.
     */
    AsymmetricSignatureKey_Status[AsymmetricSignatureKey_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [AsymmetricKeyService.Update] method.
     */
    AsymmetricSignatureKey_Status[AsymmetricSignatureKey_Status["INACTIVE"] = 3] = "INACTIVE";
    AsymmetricSignatureKey_Status[AsymmetricSignatureKey_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AsymmetricSignatureKey_Status = exports.AsymmetricSignatureKey_Status || (exports.AsymmetricSignatureKey_Status = {}));
function asymmetricSignatureKey_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return AsymmetricSignatureKey_Status.CREATING;
        case 2:
        case "ACTIVE":
            return AsymmetricSignatureKey_Status.ACTIVE;
        case 3:
        case "INACTIVE":
            return AsymmetricSignatureKey_Status.INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AsymmetricSignatureKey_Status.UNRECOGNIZED;
    }
}
exports.asymmetricSignatureKey_StatusFromJSON = asymmetricSignatureKey_StatusFromJSON;
function asymmetricSignatureKey_StatusToJSON(object) {
    switch (object) {
        case AsymmetricSignatureKey_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case AsymmetricSignatureKey_Status.CREATING:
            return "CREATING";
        case AsymmetricSignatureKey_Status.ACTIVE:
            return "ACTIVE";
        case AsymmetricSignatureKey_Status.INACTIVE:
            return "INACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.asymmetricSignatureKey_StatusToJSON = asymmetricSignatureKey_StatusToJSON;
const baseAsymmetricSignatureKey = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    signatureAlgorithm: 0,
    deletionProtection: false,
};
exports.AsymmetricSignatureKey = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey",
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
            exports.AsymmetricSignatureKey_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.signatureAlgorithm !== 0) {
            writer.uint32(64).int32(message.signatureAlgorithm);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricSignatureKey);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.AsymmetricSignatureKey_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.signatureAlgorithm = reader.int32();
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseAsymmetricSignatureKey);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? asymmetricSignatureKey_StatusFromJSON(object.status)
                : 0;
        message.signatureAlgorithm =
            object.signatureAlgorithm !== undefined &&
                object.signatureAlgorithm !== null
                ? asymmetricSignatureAlgorithmFromJSON(object.signatureAlgorithm)
                : 0;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
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
        message.status !== undefined &&
            (obj.status = asymmetricSignatureKey_StatusToJSON(message.status));
        message.signatureAlgorithm !== undefined &&
            (obj.signatureAlgorithm = asymmetricSignatureAlgorithmToJSON(message.signatureAlgorithm));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseAsymmetricSignatureKey);
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
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.signatureAlgorithm = (_h = object.signatureAlgorithm) !== null && _h !== void 0 ? _h : 0;
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignatureKey.$type, exports.AsymmetricSignatureKey);
const baseAsymmetricSignatureKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
    key: "",
    value: "",
};
exports.AsymmetricSignatureKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKey.LabelsEntry",
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
        const message = Object.assign({}, baseAsymmetricSignatureKey_LabelsEntry);
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
        const message = Object.assign({}, baseAsymmetricSignatureKey_LabelsEntry);
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
        const message = Object.assign({}, baseAsymmetricSignatureKey_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricSignatureKey_LabelsEntry.$type, exports.AsymmetricSignatureKey_LabelsEntry);
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
