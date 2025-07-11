"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricKeyVersion = exports.SymmetricKey_LabelsEntry = exports.SymmetricKey = exports.symmetricKeyVersion_StatusToJSON = exports.symmetricKeyVersion_StatusFromJSON = exports.SymmetricKeyVersion_Status = exports.symmetricKey_StatusToJSON = exports.symmetricKey_StatusFromJSON = exports.SymmetricKey_Status = exports.symmetricAlgorithmToJSON = exports.symmetricAlgorithmFromJSON = exports.SymmetricAlgorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.kms.v1";
/** Supported symmetric encryption algorithms. */
var SymmetricAlgorithm;
(function (SymmetricAlgorithm) {
    SymmetricAlgorithm[SymmetricAlgorithm["SYMMETRIC_ALGORITHM_UNSPECIFIED"] = 0] = "SYMMETRIC_ALGORITHM_UNSPECIFIED";
    /** AES_128 - AES algorithm with 128-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_128"] = 1] = "AES_128";
    /** AES_192 - AES algorithm with 192-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_192"] = 2] = "AES_192";
    /** AES_256 - AES algorithm with 256-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_256"] = 3] = "AES_256";
    /** AES_256_HSM - AES algorithm with 256-bit keys hosted by HSM */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_256_HSM"] = 4] = "AES_256_HSM";
    SymmetricAlgorithm[SymmetricAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricAlgorithm = exports.SymmetricAlgorithm || (exports.SymmetricAlgorithm = {}));
function symmetricAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "SYMMETRIC_ALGORITHM_UNSPECIFIED":
            return SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED;
        case 1:
        case "AES_128":
            return SymmetricAlgorithm.AES_128;
        case 2:
        case "AES_192":
            return SymmetricAlgorithm.AES_192;
        case 3:
        case "AES_256":
            return SymmetricAlgorithm.AES_256;
        case 4:
        case "AES_256_HSM":
            return SymmetricAlgorithm.AES_256_HSM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SymmetricAlgorithm.UNRECOGNIZED;
    }
}
exports.symmetricAlgorithmFromJSON = symmetricAlgorithmFromJSON;
function symmetricAlgorithmToJSON(object) {
    switch (object) {
        case SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED:
            return "SYMMETRIC_ALGORITHM_UNSPECIFIED";
        case SymmetricAlgorithm.AES_128:
            return "AES_128";
        case SymmetricAlgorithm.AES_192:
            return "AES_192";
        case SymmetricAlgorithm.AES_256:
            return "AES_256";
        case SymmetricAlgorithm.AES_256_HSM:
            return "AES_256_HSM";
        default:
            return "UNKNOWN";
    }
}
exports.symmetricAlgorithmToJSON = symmetricAlgorithmToJSON;
var SymmetricKey_Status;
(function (SymmetricKey_Status) {
    SymmetricKey_Status[SymmetricKey_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The key is being created. */
    SymmetricKey_Status[SymmetricKey_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption.
     * Can be set to INACTIVE using the [SymmetricKeyService.Update] method.
     */
    SymmetricKey_Status[SymmetricKey_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [SymmetricKeyService.Update] method.
     */
    SymmetricKey_Status[SymmetricKey_Status["INACTIVE"] = 3] = "INACTIVE";
    SymmetricKey_Status[SymmetricKey_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricKey_Status = exports.SymmetricKey_Status || (exports.SymmetricKey_Status = {}));
function symmetricKey_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return SymmetricKey_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return SymmetricKey_Status.CREATING;
        case 2:
        case "ACTIVE":
            return SymmetricKey_Status.ACTIVE;
        case 3:
        case "INACTIVE":
            return SymmetricKey_Status.INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SymmetricKey_Status.UNRECOGNIZED;
    }
}
exports.symmetricKey_StatusFromJSON = symmetricKey_StatusFromJSON;
function symmetricKey_StatusToJSON(object) {
    switch (object) {
        case SymmetricKey_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case SymmetricKey_Status.CREATING:
            return "CREATING";
        case SymmetricKey_Status.ACTIVE:
            return "ACTIVE";
        case SymmetricKey_Status.INACTIVE:
            return "INACTIVE";
        default:
            return "UNKNOWN";
    }
}
exports.symmetricKey_StatusToJSON = symmetricKey_StatusToJSON;
/** Possible version status. */
var SymmetricKeyVersion_Status;
(function (SymmetricKeyVersion_Status) {
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** ACTIVE - The version is active and can be used for encryption and decryption. */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["ACTIVE"] = 1] = "ACTIVE";
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [SymmetricKeyVersion.destroy_at] field.
     */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["SCHEDULED_FOR_DESTRUCTION"] = 2] = "SCHEDULED_FOR_DESTRUCTION";
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["DESTROYED"] = 3] = "DESTROYED";
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricKeyVersion_Status = exports.SymmetricKeyVersion_Status || (exports.SymmetricKeyVersion_Status = {}));
function symmetricKeyVersion_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return SymmetricKeyVersion_Status.STATUS_UNSPECIFIED;
        case 1:
        case "ACTIVE":
            return SymmetricKeyVersion_Status.ACTIVE;
        case 2:
        case "SCHEDULED_FOR_DESTRUCTION":
            return SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION;
        case 3:
        case "DESTROYED":
            return SymmetricKeyVersion_Status.DESTROYED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SymmetricKeyVersion_Status.UNRECOGNIZED;
    }
}
exports.symmetricKeyVersion_StatusFromJSON = symmetricKeyVersion_StatusFromJSON;
function symmetricKeyVersion_StatusToJSON(object) {
    switch (object) {
        case SymmetricKeyVersion_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case SymmetricKeyVersion_Status.ACTIVE:
            return "ACTIVE";
        case SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION:
            return "SCHEDULED_FOR_DESTRUCTION";
        case SymmetricKeyVersion_Status.DESTROYED:
            return "DESTROYED";
        default:
            return "UNKNOWN";
    }
}
exports.symmetricKeyVersion_StatusToJSON = symmetricKeyVersion_StatusToJSON;
const baseSymmetricKey = {
    $type: "yandex.cloud.kms.v1.SymmetricKey",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    defaultAlgorithm: 0,
    deletionProtection: false,
};
exports.SymmetricKey = {
    $type: "yandex.cloud.kms.v1.SymmetricKey",
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
            exports.SymmetricKey_LabelsEntry.encode({
                $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.primaryVersion !== undefined) {
            exports.SymmetricKeyVersion.encode(message.primaryVersion, writer.uint32(66).fork()).ldelim();
        }
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(72).int32(message.defaultAlgorithm);
        }
        if (message.rotatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.rotatedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.rotationPeriod !== undefined) {
            duration_1.Duration.encode(message.rotationPeriod, writer.uint32(90).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricKey);
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
                    const entry6 = exports.SymmetricKey_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.primaryVersion = exports.SymmetricKeyVersion.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 10:
                    message.rotatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.rotationPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 12:
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
        const message = Object.assign({}, baseSymmetricKey);
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
                ? symmetricKey_StatusFromJSON(object.status)
                : 0;
        message.primaryVersion =
            object.primaryVersion !== undefined && object.primaryVersion !== null
                ? exports.SymmetricKeyVersion.fromJSON(object.primaryVersion)
                : undefined;
        message.defaultAlgorithm =
            object.defaultAlgorithm !== undefined && object.defaultAlgorithm !== null
                ? symmetricAlgorithmFromJSON(object.defaultAlgorithm)
                : 0;
        message.rotatedAt =
            object.rotatedAt !== undefined && object.rotatedAt !== null
                ? fromJsonTimestamp(object.rotatedAt)
                : undefined;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromJSON(object.rotationPeriod)
                : undefined;
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
            (obj.status = symmetricKey_StatusToJSON(message.status));
        message.primaryVersion !== undefined &&
            (obj.primaryVersion = message.primaryVersion
                ? exports.SymmetricKeyVersion.toJSON(message.primaryVersion)
                : undefined);
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm));
        message.rotatedAt !== undefined &&
            (obj.rotatedAt = message.rotatedAt.toISOString());
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? duration_1.Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseSymmetricKey);
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
        message.primaryVersion =
            object.primaryVersion !== undefined && object.primaryVersion !== null
                ? exports.SymmetricKeyVersion.fromPartial(object.primaryVersion)
                : undefined;
        message.defaultAlgorithm = (_h = object.defaultAlgorithm) !== null && _h !== void 0 ? _h : 0;
        message.rotatedAt = (_j = object.rotatedAt) !== null && _j !== void 0 ? _j : undefined;
        message.rotationPeriod =
            object.rotationPeriod !== undefined && object.rotationPeriod !== null
                ? duration_1.Duration.fromPartial(object.rotationPeriod)
                : undefined;
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKey.$type, exports.SymmetricKey);
const baseSymmetricKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry",
    key: "",
    value: "",
};
exports.SymmetricKey_LabelsEntry = {
    $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry",
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
        const message = Object.assign({}, baseSymmetricKey_LabelsEntry);
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
        const message = Object.assign({}, baseSymmetricKey_LabelsEntry);
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
        const message = Object.assign({}, baseSymmetricKey_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKey_LabelsEntry.$type, exports.SymmetricKey_LabelsEntry);
const baseSymmetricKeyVersion = {
    $type: "yandex.cloud.kms.v1.SymmetricKeyVersion",
    id: "",
    keyId: "",
    status: 0,
    algorithm: 0,
    primary: false,
    hostedByHsm: false,
};
exports.SymmetricKeyVersion = {
    $type: "yandex.cloud.kms.v1.SymmetricKeyVersion",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.keyId !== "") {
            writer.uint32(18).string(message.keyId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.algorithm !== 0) {
            writer.uint32(32).int32(message.algorithm);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.primary === true) {
            writer.uint32(48).bool(message.primary);
        }
        if (message.destroyAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.hostedByHsm === true) {
            writer.uint32(64).bool(message.hostedByHsm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSymmetricKeyVersion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.algorithm = reader.int32();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.primary = reader.bool();
                    break;
                case 7:
                    message.destroyAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.hostedByHsm = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSymmetricKeyVersion);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.keyId =
            object.keyId !== undefined && object.keyId !== null
                ? String(object.keyId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? symmetricKeyVersion_StatusFromJSON(object.status)
                : 0;
        message.algorithm =
            object.algorithm !== undefined && object.algorithm !== null
                ? symmetricAlgorithmFromJSON(object.algorithm)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.primary =
            object.primary !== undefined && object.primary !== null
                ? Boolean(object.primary)
                : false;
        message.destroyAt =
            object.destroyAt !== undefined && object.destroyAt !== null
                ? fromJsonTimestamp(object.destroyAt)
                : undefined;
        message.hostedByHsm =
            object.hostedByHsm !== undefined && object.hostedByHsm !== null
                ? Boolean(object.hostedByHsm)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.status !== undefined &&
            (obj.status = symmetricKeyVersion_StatusToJSON(message.status));
        message.algorithm !== undefined &&
            (obj.algorithm = symmetricAlgorithmToJSON(message.algorithm));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.primary !== undefined && (obj.primary = message.primary);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        message.hostedByHsm !== undefined &&
            (obj.hostedByHsm = message.hostedByHsm);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseSymmetricKeyVersion);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.keyId = (_b = object.keyId) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.algorithm = (_d = object.algorithm) !== null && _d !== void 0 ? _d : 0;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.primary = (_f = object.primary) !== null && _f !== void 0 ? _f : false;
        message.destroyAt = (_g = object.destroyAt) !== null && _g !== void 0 ? _g : undefined;
        message.hostedByHsm = (_h = object.hostedByHsm) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKeyVersion.$type, exports.SymmetricKeyVersion);
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
