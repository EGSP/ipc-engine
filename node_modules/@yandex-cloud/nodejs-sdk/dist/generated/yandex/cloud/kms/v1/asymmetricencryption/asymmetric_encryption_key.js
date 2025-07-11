"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsymmetricEncryptionKey_LabelsEntry = exports.AsymmetricEncryptionKey = exports.asymmetricEncryptionKey_StatusToJSON = exports.asymmetricEncryptionKey_StatusFromJSON = exports.AsymmetricEncryptionKey_Status = exports.asymmetricEncryptionAlgorithmToJSON = exports.asymmetricEncryptionAlgorithmFromJSON = exports.AsymmetricEncryptionAlgorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.kms.v1.asymmetricencryption";
/** Supported asymmetric encryption algorithms. */
var AsymmetricEncryptionAlgorithm;
(function (AsymmetricEncryptionAlgorithm) {
    AsymmetricEncryptionAlgorithm[AsymmetricEncryptionAlgorithm["ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED"] = 0] = "ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED";
    /** RSA_2048_ENC_OAEP_SHA_256 - RSA-2048 encryption with OAEP padding and SHA-256 */
    AsymmetricEncryptionAlgorithm[AsymmetricEncryptionAlgorithm["RSA_2048_ENC_OAEP_SHA_256"] = 1] = "RSA_2048_ENC_OAEP_SHA_256";
    /** RSA_3072_ENC_OAEP_SHA_256 - RSA-3072 encryption with OAEP padding and SHA-256 */
    AsymmetricEncryptionAlgorithm[AsymmetricEncryptionAlgorithm["RSA_3072_ENC_OAEP_SHA_256"] = 2] = "RSA_3072_ENC_OAEP_SHA_256";
    /** RSA_4096_ENC_OAEP_SHA_256 - RSA-4096 encryption with OAEP padding and SHA-256 */
    AsymmetricEncryptionAlgorithm[AsymmetricEncryptionAlgorithm["RSA_4096_ENC_OAEP_SHA_256"] = 3] = "RSA_4096_ENC_OAEP_SHA_256";
    AsymmetricEncryptionAlgorithm[AsymmetricEncryptionAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AsymmetricEncryptionAlgorithm = exports.AsymmetricEncryptionAlgorithm || (exports.AsymmetricEncryptionAlgorithm = {}));
function asymmetricEncryptionAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED":
            return AsymmetricEncryptionAlgorithm.ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED;
        case 1:
        case "RSA_2048_ENC_OAEP_SHA_256":
            return AsymmetricEncryptionAlgorithm.RSA_2048_ENC_OAEP_SHA_256;
        case 2:
        case "RSA_3072_ENC_OAEP_SHA_256":
            return AsymmetricEncryptionAlgorithm.RSA_3072_ENC_OAEP_SHA_256;
        case 3:
        case "RSA_4096_ENC_OAEP_SHA_256":
            return AsymmetricEncryptionAlgorithm.RSA_4096_ENC_OAEP_SHA_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AsymmetricEncryptionAlgorithm.UNRECOGNIZED;
    }
}
exports.asymmetricEncryptionAlgorithmFromJSON = asymmetricEncryptionAlgorithmFromJSON;
function asymmetricEncryptionAlgorithmToJSON(object) {
    switch (object) {
        case AsymmetricEncryptionAlgorithm.ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED:
            return "ASYMMETRIC_ENCRYPTION_ALGORITHM_UNSPECIFIED";
        case AsymmetricEncryptionAlgorithm.RSA_2048_ENC_OAEP_SHA_256:
            return "RSA_2048_ENC_OAEP_SHA_256";
        case AsymmetricEncryptionAlgorithm.RSA_3072_ENC_OAEP_SHA_256:
            return "RSA_3072_ENC_OAEP_SHA_256";
        case AsymmetricEncryptionAlgorithm.RSA_4096_ENC_OAEP_SHA_256:
            return "RSA_4096_ENC_OAEP_SHA_256";
        default:
            return "UNKNOWN";
    }
}
exports.asymmetricEncryptionAlgorithmToJSON = asymmetricEncryptionAlgorithmToJSON;
var AsymmetricEncryptionKey_Status;
(function (AsymmetricEncryptionKey_Status) {
    AsymmetricEncryptionKey_Status[AsymmetricEncryptionKey_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The key is being created. */
    AsymmetricEncryptionKey_Status[AsymmetricEncryptionKey_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption or signature and verification.
     * Can be set to INACTIVE using the [AsymmetricKeyService.Update] method.
     */
    AsymmetricEncryptionKey_Status[AsymmetricEncryptionKey_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [AsymmetricKeyService.Update] method.
     */
    AsymmetricEncryptionKey_Status[AsymmetricEncryptionKey_Status["INACTIVE"] = 3] = "INACTIVE";
    AsymmetricEncryptionKey_Status[AsymmetricEncryptionKey_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AsymmetricEncryptionKey_Status = exports.AsymmetricEncryptionKey_Status || (exports.AsymmetricEncryptionKey_Status = {}));
function asymmetricEncryptionKey_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return AsymmetricEncryptionKey_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return AsymmetricEncryptionKey_Status.CREATING;
        case 2:
        case "ACTIVE":
            return AsymmetricEncryptionKey_Status.ACTIVE;
        case 3:
        case "INACTIVE":
            return AsymmetricEncryptionKey_Status.INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AsymmetricEncryptionKey_Status.UNRECOGNIZED;
    }
}
exports.asymmetricEncryptionKey_StatusFromJSON = asymmetricEncryptionKey_StatusFromJSON;
function asymmetricEncryptionKey_StatusToJSON(object) {
    switch (object) {
        case AsymmetricEncryptionKey_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case AsymmetricEncryptionKey_Status.CREATING:
            return "CREATING";
        case AsymmetricEncryptionKey_Status.ACTIVE:
            return "ACTIVE";
        case AsymmetricEncryptionKey_Status.INACTIVE:
            return "INACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.asymmetricEncryptionKey_StatusToJSON = asymmetricEncryptionKey_StatusToJSON;
const baseAsymmetricEncryptionKey = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    encryptionAlgorithm: 0,
    deletionProtection: false,
};
exports.AsymmetricEncryptionKey = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey",
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
            exports.AsymmetricEncryptionKey_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.encryptionAlgorithm !== 0) {
            writer.uint32(64).int32(message.encryptionAlgorithm);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAsymmetricEncryptionKey);
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
                    const entry6 = exports.AsymmetricEncryptionKey_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.encryptionAlgorithm = reader.int32();
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
        const message = Object.assign({}, baseAsymmetricEncryptionKey);
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
                ? asymmetricEncryptionKey_StatusFromJSON(object.status)
                : 0;
        message.encryptionAlgorithm =
            object.encryptionAlgorithm !== undefined &&
                object.encryptionAlgorithm !== null
                ? asymmetricEncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
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
            (obj.status = asymmetricEncryptionKey_StatusToJSON(message.status));
        message.encryptionAlgorithm !== undefined &&
            (obj.encryptionAlgorithm = asymmetricEncryptionAlgorithmToJSON(message.encryptionAlgorithm));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseAsymmetricEncryptionKey);
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
        message.encryptionAlgorithm = (_h = object.encryptionAlgorithm) !== null && _h !== void 0 ? _h : 0;
        message.deletionProtection = (_j = object.deletionProtection) !== null && _j !== void 0 ? _j : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricEncryptionKey.$type, exports.AsymmetricEncryptionKey);
const baseAsymmetricEncryptionKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry",
    key: "",
    value: "",
};
exports.AsymmetricEncryptionKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKey.LabelsEntry",
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
        const message = Object.assign({}, baseAsymmetricEncryptionKey_LabelsEntry);
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
        const message = Object.assign({}, baseAsymmetricEncryptionKey_LabelsEntry);
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
        const message = Object.assign({}, baseAsymmetricEncryptionKey_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AsymmetricEncryptionKey_LabelsEntry.$type, exports.AsymmetricEncryptionKey_LabelsEntry);
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
