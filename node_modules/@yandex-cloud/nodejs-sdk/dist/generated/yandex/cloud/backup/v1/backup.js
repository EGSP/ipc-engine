"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupFile_Actions = exports.BackupFile = exports.Backup_BackupAttributes = exports.Backup = exports.Disk = exports.Volume = exports.Archive_ArchiveAttributes = exports.Archive = exports.backupFile_TypeToJSON = exports.backupFile_TypeFromJSON = exports.BackupFile_Type = exports.backup_TypeToJSON = exports.backup_TypeFromJSON = exports.Backup_Type = exports.archive_ActionToJSON = exports.archive_ActionFromJSON = exports.Archive_Action = exports.archive_EncryptionAlgorithmToJSON = exports.archive_EncryptionAlgorithmFromJSON = exports.Archive_EncryptionAlgorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const policy_1 = require("../../../../yandex/cloud/backup/v1/policy");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.backup.v1";
/**
 * Encryption Algorithm for underlying backups:
 * `ENCRYPTION_ALGORITHM_UNSPECIFIED`, `NONE`, `AES128`, `AES192`,
 * `AES256`.
 */
var Archive_EncryptionAlgorithm;
(function (Archive_EncryptionAlgorithm) {
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["ENCRYPTION_ALGORITHM_UNSPECIFIED"] = 0] = "ENCRYPTION_ALGORITHM_UNSPECIFIED";
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["NONE"] = 1] = "NONE";
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["AES128"] = 2] = "AES128";
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["AES192"] = 3] = "AES192";
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["AES256"] = 4] = "AES256";
    Archive_EncryptionAlgorithm[Archive_EncryptionAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Archive_EncryptionAlgorithm = exports.Archive_EncryptionAlgorithm || (exports.Archive_EncryptionAlgorithm = {}));
function archive_EncryptionAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "ENCRYPTION_ALGORITHM_UNSPECIFIED":
            return Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED;
        case 1:
        case "NONE":
            return Archive_EncryptionAlgorithm.NONE;
        case 2:
        case "AES128":
            return Archive_EncryptionAlgorithm.AES128;
        case 3:
        case "AES192":
            return Archive_EncryptionAlgorithm.AES192;
        case 4:
        case "AES256":
            return Archive_EncryptionAlgorithm.AES256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Archive_EncryptionAlgorithm.UNRECOGNIZED;
    }
}
exports.archive_EncryptionAlgorithmFromJSON = archive_EncryptionAlgorithmFromJSON;
function archive_EncryptionAlgorithmToJSON(object) {
    switch (object) {
        case Archive_EncryptionAlgorithm.ENCRYPTION_ALGORITHM_UNSPECIFIED:
            return "ENCRYPTION_ALGORITHM_UNSPECIFIED";
        case Archive_EncryptionAlgorithm.NONE:
            return "NONE";
        case Archive_EncryptionAlgorithm.AES128:
            return "AES128";
        case Archive_EncryptionAlgorithm.AES192:
            return "AES192";
        case Archive_EncryptionAlgorithm.AES256:
            return "AES256";
        default:
            return "UNKNOWN";
    }
}
exports.archive_EncryptionAlgorithmToJSON = archive_EncryptionAlgorithmToJSON;
/**
 * Action with archive backup: `ACTION_UNSPECIFIED`, `REFRESH`,
 * `DELETE_BY_AGENT`.
 */
var Archive_Action;
(function (Archive_Action) {
    Archive_Action[Archive_Action["ACTION_UNSPECIFIED"] = 0] = "ACTION_UNSPECIFIED";
    Archive_Action[Archive_Action["REFRESH"] = 1] = "REFRESH";
    Archive_Action[Archive_Action["DELETE_BY_AGENT"] = 2] = "DELETE_BY_AGENT";
    Archive_Action[Archive_Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Archive_Action = exports.Archive_Action || (exports.Archive_Action = {}));
function archive_ActionFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_UNSPECIFIED":
            return Archive_Action.ACTION_UNSPECIFIED;
        case 1:
        case "REFRESH":
            return Archive_Action.REFRESH;
        case 2:
        case "DELETE_BY_AGENT":
            return Archive_Action.DELETE_BY_AGENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Archive_Action.UNRECOGNIZED;
    }
}
exports.archive_ActionFromJSON = archive_ActionFromJSON;
function archive_ActionToJSON(object) {
    switch (object) {
        case Archive_Action.ACTION_UNSPECIFIED:
            return "ACTION_UNSPECIFIED";
        case Archive_Action.REFRESH:
            return "REFRESH";
        case Archive_Action.DELETE_BY_AGENT:
            return "DELETE_BY_AGENT";
        default:
            return "UNKNOWN";
    }
}
exports.archive_ActionToJSON = archive_ActionToJSON;
/**
 * Backup type.
 * For detailed information, please see [Backup types](/docs/backup/concepts/backup#types).
 */
var Backup_Type;
(function (Backup_Type) {
    Backup_Type[Backup_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Backup_Type[Backup_Type["FULL"] = 1] = "FULL";
    Backup_Type[Backup_Type["INCREMENTAL"] = 2] = "INCREMENTAL";
    Backup_Type[Backup_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Backup_Type = exports.Backup_Type || (exports.Backup_Type = {}));
function backup_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Backup_Type.TYPE_UNSPECIFIED;
        case 1:
        case "FULL":
            return Backup_Type.FULL;
        case 2:
        case "INCREMENTAL":
            return Backup_Type.INCREMENTAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Backup_Type.UNRECOGNIZED;
    }
}
exports.backup_TypeFromJSON = backup_TypeFromJSON;
function backup_TypeToJSON(object) {
    switch (object) {
        case Backup_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Backup_Type.FULL:
            return "FULL";
        case Backup_Type.INCREMENTAL:
            return "INCREMENTAL";
        default:
            return "UNKNOWN";
    }
}
exports.backup_TypeToJSON = backup_TypeToJSON;
/** Type of the file. */
var BackupFile_Type;
(function (BackupFile_Type) {
    BackupFile_Type[BackupFile_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    BackupFile_Type[BackupFile_Type["TYPE_DIR"] = 1] = "TYPE_DIR";
    BackupFile_Type[BackupFile_Type["TYPE_FILE"] = 2] = "TYPE_FILE";
    BackupFile_Type[BackupFile_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackupFile_Type = exports.BackupFile_Type || (exports.BackupFile_Type = {}));
function backupFile_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return BackupFile_Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_DIR":
            return BackupFile_Type.TYPE_DIR;
        case 2:
        case "TYPE_FILE":
            return BackupFile_Type.TYPE_FILE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BackupFile_Type.UNRECOGNIZED;
    }
}
exports.backupFile_TypeFromJSON = backupFile_TypeFromJSON;
function backupFile_TypeToJSON(object) {
    switch (object) {
        case BackupFile_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case BackupFile_Type.TYPE_DIR:
            return "TYPE_DIR";
        case BackupFile_Type.TYPE_FILE:
            return "TYPE_FILE";
        default:
            return "UNKNOWN";
    }
}
exports.backupFile_TypeToJSON = backupFile_TypeToJSON;
const baseArchive = {
    $type: "yandex.cloud.backup.v1.Archive",
    id: "",
    name: "",
    vaultId: "",
    size: 0,
    compressedDataSize: 0,
    dataSize: 0,
    originalDataSize: 0,
    logicalSize: 0,
    format: 0,
    protectedByPassword: false,
    encryptionAlgorithm: 0,
    actions: 0,
    backupPlanId: "",
    backupPlanName: "",
    description: "",
    displayName: "",
    computeInstanceId: "",
    consistent: false,
    deleted: false,
    resourceId: "",
};
exports.Archive = {
    $type: "yandex.cloud.backup.v1.Archive",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.vaultId !== "") {
            writer.uint32(26).string(message.vaultId);
        }
        if (message.attributes !== undefined) {
            exports.Archive_ArchiveAttributes.encode(message.attributes, writer.uint32(34).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(40).int64(message.size);
        }
        if (message.compressedDataSize !== 0) {
            writer.uint32(48).int64(message.compressedDataSize);
        }
        if (message.dataSize !== 0) {
            writer.uint32(56).int64(message.dataSize);
        }
        if (message.originalDataSize !== 0) {
            writer.uint32(64).int64(message.originalDataSize);
        }
        if (message.logicalSize !== 0) {
            writer.uint32(72).int64(message.logicalSize);
        }
        if (message.format !== 0) {
            writer.uint32(80).int32(message.format);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.lastBackupCreatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastBackupCreatedAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.lastSeenAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastSeenAt), writer.uint32(114).fork()).ldelim();
        }
        if (message.protectedByPassword === true) {
            writer.uint32(120).bool(message.protectedByPassword);
        }
        if (message.encryptionAlgorithm !== 0) {
            writer.uint32(128).int32(message.encryptionAlgorithm);
        }
        writer.uint32(162).fork();
        for (const v of message.actions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.backupPlanId !== "") {
            writer.uint32(178).string(message.backupPlanId);
        }
        if (message.backupPlanName !== "") {
            writer.uint32(186).string(message.backupPlanName);
        }
        if (message.description !== "") {
            writer.uint32(194).string(message.description);
        }
        if (message.displayName !== "") {
            writer.uint32(202).string(message.displayName);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(210).string(message.computeInstanceId);
        }
        if (message.consistent === true) {
            writer.uint32(216).bool(message.consistent);
        }
        if (message.deleted === true) {
            writer.uint32(240).bool(message.deleted);
        }
        if (message.resourceId !== "") {
            writer.uint32(250).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseArchive);
        message.actions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.vaultId = reader.string();
                    break;
                case 4:
                    message.attributes = exports.Archive_ArchiveAttributes.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.size = longToNumber(reader.int64());
                    break;
                case 6:
                    message.compressedDataSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.dataSize = longToNumber(reader.int64());
                    break;
                case 8:
                    message.originalDataSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.logicalSize = longToNumber(reader.int64());
                    break;
                case 10:
                    message.format = reader.int32();
                    break;
                case 11:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.lastBackupCreatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.lastSeenAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.protectedByPassword = reader.bool();
                    break;
                case 16:
                    message.encryptionAlgorithm = reader.int32();
                    break;
                case 20:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actions.push(reader.int32());
                        }
                    }
                    else {
                        message.actions.push(reader.int32());
                    }
                    break;
                case 22:
                    message.backupPlanId = reader.string();
                    break;
                case 23:
                    message.backupPlanName = reader.string();
                    break;
                case 24:
                    message.description = reader.string();
                    break;
                case 25:
                    message.displayName = reader.string();
                    break;
                case 26:
                    message.computeInstanceId = reader.string();
                    break;
                case 27:
                    message.consistent = reader.bool();
                    break;
                case 30:
                    message.deleted = reader.bool();
                    break;
                case 31:
                    message.resourceId = reader.string();
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
        const message = Object.assign({}, baseArchive);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? String(object.vaultId)
                : "";
        message.attributes =
            object.attributes !== undefined && object.attributes !== null
                ? exports.Archive_ArchiveAttributes.fromJSON(object.attributes)
                : undefined;
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.compressedDataSize =
            object.compressedDataSize !== undefined &&
                object.compressedDataSize !== null
                ? Number(object.compressedDataSize)
                : 0;
        message.dataSize =
            object.dataSize !== undefined && object.dataSize !== null
                ? Number(object.dataSize)
                : 0;
        message.originalDataSize =
            object.originalDataSize !== undefined && object.originalDataSize !== null
                ? Number(object.originalDataSize)
                : 0;
        message.logicalSize =
            object.logicalSize !== undefined && object.logicalSize !== null
                ? Number(object.logicalSize)
                : 0;
        message.format =
            object.format !== undefined && object.format !== null
                ? (0, policy_1.formatFromJSON)(object.format)
                : 0;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.updatedAt =
            object.updatedAt !== undefined && object.updatedAt !== null
                ? fromJsonTimestamp(object.updatedAt)
                : undefined;
        message.lastBackupCreatedAt =
            object.lastBackupCreatedAt !== undefined &&
                object.lastBackupCreatedAt !== null
                ? fromJsonTimestamp(object.lastBackupCreatedAt)
                : undefined;
        message.lastSeenAt =
            object.lastSeenAt !== undefined && object.lastSeenAt !== null
                ? fromJsonTimestamp(object.lastSeenAt)
                : undefined;
        message.protectedByPassword =
            object.protectedByPassword !== undefined &&
                object.protectedByPassword !== null
                ? Boolean(object.protectedByPassword)
                : false;
        message.encryptionAlgorithm =
            object.encryptionAlgorithm !== undefined &&
                object.encryptionAlgorithm !== null
                ? archive_EncryptionAlgorithmFromJSON(object.encryptionAlgorithm)
                : 0;
        message.actions = ((_a = object.actions) !== null && _a !== void 0 ? _a : []).map((e) => archive_ActionFromJSON(e));
        message.backupPlanId =
            object.backupPlanId !== undefined && object.backupPlanId !== null
                ? String(object.backupPlanId)
                : "";
        message.backupPlanName =
            object.backupPlanName !== undefined && object.backupPlanName !== null
                ? String(object.backupPlanName)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.displayName =
            object.displayName !== undefined && object.displayName !== null
                ? String(object.displayName)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.consistent =
            object.consistent !== undefined && object.consistent !== null
                ? Boolean(object.consistent)
                : false;
        message.deleted =
            object.deleted !== undefined && object.deleted !== null
                ? Boolean(object.deleted)
                : false;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.vaultId !== undefined && (obj.vaultId = message.vaultId);
        message.attributes !== undefined &&
            (obj.attributes = message.attributes
                ? exports.Archive_ArchiveAttributes.toJSON(message.attributes)
                : undefined);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.compressedDataSize !== undefined &&
            (obj.compressedDataSize = Math.round(message.compressedDataSize));
        message.dataSize !== undefined &&
            (obj.dataSize = Math.round(message.dataSize));
        message.originalDataSize !== undefined &&
            (obj.originalDataSize = Math.round(message.originalDataSize));
        message.logicalSize !== undefined &&
            (obj.logicalSize = Math.round(message.logicalSize));
        message.format !== undefined && (obj.format = (0, policy_1.formatToJSON)(message.format));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined &&
            (obj.updatedAt = message.updatedAt.toISOString());
        message.lastBackupCreatedAt !== undefined &&
            (obj.lastBackupCreatedAt = message.lastBackupCreatedAt.toISOString());
        message.lastSeenAt !== undefined &&
            (obj.lastSeenAt = message.lastSeenAt.toISOString());
        message.protectedByPassword !== undefined &&
            (obj.protectedByPassword = message.protectedByPassword);
        message.encryptionAlgorithm !== undefined &&
            (obj.encryptionAlgorithm = archive_EncryptionAlgorithmToJSON(message.encryptionAlgorithm));
        if (message.actions) {
            obj.actions = message.actions.map((e) => archive_ActionToJSON(e));
        }
        else {
            obj.actions = [];
        }
        message.backupPlanId !== undefined &&
            (obj.backupPlanId = message.backupPlanId);
        message.backupPlanName !== undefined &&
            (obj.backupPlanName = message.backupPlanName);
        message.description !== undefined &&
            (obj.description = message.description);
        message.displayName !== undefined &&
            (obj.displayName = message.displayName);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.consistent !== undefined && (obj.consistent = message.consistent);
        message.deleted !== undefined && (obj.deleted = message.deleted);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        const message = Object.assign({}, baseArchive);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.vaultId = (_c = object.vaultId) !== null && _c !== void 0 ? _c : "";
        message.attributes =
            object.attributes !== undefined && object.attributes !== null
                ? exports.Archive_ArchiveAttributes.fromPartial(object.attributes)
                : undefined;
        message.size = (_d = object.size) !== null && _d !== void 0 ? _d : 0;
        message.compressedDataSize = (_e = object.compressedDataSize) !== null && _e !== void 0 ? _e : 0;
        message.dataSize = (_f = object.dataSize) !== null && _f !== void 0 ? _f : 0;
        message.originalDataSize = (_g = object.originalDataSize) !== null && _g !== void 0 ? _g : 0;
        message.logicalSize = (_h = object.logicalSize) !== null && _h !== void 0 ? _h : 0;
        message.format = (_j = object.format) !== null && _j !== void 0 ? _j : 0;
        message.createdAt = (_k = object.createdAt) !== null && _k !== void 0 ? _k : undefined;
        message.updatedAt = (_l = object.updatedAt) !== null && _l !== void 0 ? _l : undefined;
        message.lastBackupCreatedAt = (_m = object.lastBackupCreatedAt) !== null && _m !== void 0 ? _m : undefined;
        message.lastSeenAt = (_o = object.lastSeenAt) !== null && _o !== void 0 ? _o : undefined;
        message.protectedByPassword = (_p = object.protectedByPassword) !== null && _p !== void 0 ? _p : false;
        message.encryptionAlgorithm = (_q = object.encryptionAlgorithm) !== null && _q !== void 0 ? _q : 0;
        message.actions = ((_r = object.actions) === null || _r === void 0 ? void 0 : _r.map((e) => e)) || [];
        message.backupPlanId = (_s = object.backupPlanId) !== null && _s !== void 0 ? _s : "";
        message.backupPlanName = (_t = object.backupPlanName) !== null && _t !== void 0 ? _t : "";
        message.description = (_u = object.description) !== null && _u !== void 0 ? _u : "";
        message.displayName = (_v = object.displayName) !== null && _v !== void 0 ? _v : "";
        message.computeInstanceId = (_w = object.computeInstanceId) !== null && _w !== void 0 ? _w : "";
        message.consistent = (_x = object.consistent) !== null && _x !== void 0 ? _x : false;
        message.deleted = (_y = object.deleted) !== null && _y !== void 0 ? _y : false;
        message.resourceId = (_z = object.resourceId) !== null && _z !== void 0 ? _z : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Archive.$type, exports.Archive);
const baseArchive_ArchiveAttributes = {
    $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes",
    aaib: "",
    uri: "",
};
exports.Archive_ArchiveAttributes = {
    $type: "yandex.cloud.backup.v1.Archive.ArchiveAttributes",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.aaib !== "") {
            writer.uint32(10).string(message.aaib);
        }
        if (message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseArchive_ArchiveAttributes);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aaib = reader.string();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseArchive_ArchiveAttributes);
        message.aaib =
            object.aaib !== undefined && object.aaib !== null
                ? String(object.aaib)
                : "";
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.aaib !== undefined && (obj.aaib = message.aaib);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseArchive_ArchiveAttributes);
        message.aaib = (_a = object.aaib) !== null && _a !== void 0 ? _a : "";
        message.uri = (_b = object.uri) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Archive_ArchiveAttributes.$type, exports.Archive_ArchiveAttributes);
const baseVolume = {
    $type: "yandex.cloud.backup.v1.Volume",
    freeSpace: 0,
    isBootable: false,
    isSystem: false,
    name: "",
    size: 0,
    mountStrid: "",
};
exports.Volume = {
    $type: "yandex.cloud.backup.v1.Volume",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.freeSpace !== 0) {
            writer.uint32(8).int64(message.freeSpace);
        }
        if (message.isBootable === true) {
            writer.uint32(16).bool(message.isBootable);
        }
        if (message.isSystem === true) {
            writer.uint32(24).bool(message.isSystem);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.size !== 0) {
            writer.uint32(40).int64(message.size);
        }
        if (message.mountStrid !== "") {
            writer.uint32(50).string(message.mountStrid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVolume);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.freeSpace = longToNumber(reader.int64());
                    break;
                case 2:
                    message.isBootable = reader.bool();
                    break;
                case 3:
                    message.isSystem = reader.bool();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.size = longToNumber(reader.int64());
                    break;
                case 6:
                    message.mountStrid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVolume);
        message.freeSpace =
            object.freeSpace !== undefined && object.freeSpace !== null
                ? Number(object.freeSpace)
                : 0;
        message.isBootable =
            object.isBootable !== undefined && object.isBootable !== null
                ? Boolean(object.isBootable)
                : false;
        message.isSystem =
            object.isSystem !== undefined && object.isSystem !== null
                ? Boolean(object.isSystem)
                : false;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.mountStrid =
            object.mountStrid !== undefined && object.mountStrid !== null
                ? String(object.mountStrid)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.freeSpace !== undefined &&
            (obj.freeSpace = Math.round(message.freeSpace));
        message.isBootable !== undefined && (obj.isBootable = message.isBootable);
        message.isSystem !== undefined && (obj.isSystem = message.isSystem);
        message.name !== undefined && (obj.name = message.name);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.mountStrid !== undefined && (obj.mountStrid = message.mountStrid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseVolume);
        message.freeSpace = (_a = object.freeSpace) !== null && _a !== void 0 ? _a : 0;
        message.isBootable = (_b = object.isBootable) !== null && _b !== void 0 ? _b : false;
        message.isSystem = (_c = object.isSystem) !== null && _c !== void 0 ? _c : false;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.size = (_e = object.size) !== null && _e !== void 0 ? _e : 0;
        message.mountStrid = (_f = object.mountStrid) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Volume.$type, exports.Volume);
const baseDisk = {
    $type: "yandex.cloud.backup.v1.Disk",
    deviceModel: "",
    name: "",
    size: 0,
};
exports.Disk = {
    $type: "yandex.cloud.backup.v1.Disk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceModel !== "") {
            writer.uint32(10).string(message.deviceModel);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        for (const v of message.volumes) {
            exports.Volume.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDisk);
        message.volumes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceModel = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.size = longToNumber(reader.int64());
                    break;
                case 4:
                    message.volumes.push(exports.Volume.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseDisk);
        message.deviceModel =
            object.deviceModel !== undefined && object.deviceModel !== null
                ? String(object.deviceModel)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.volumes = ((_a = object.volumes) !== null && _a !== void 0 ? _a : []).map((e) => exports.Volume.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceModel !== undefined &&
            (obj.deviceModel = message.deviceModel);
        message.name !== undefined && (obj.name = message.name);
        message.size !== undefined && (obj.size = Math.round(message.size));
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? exports.Volume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDisk);
        message.deviceModel = (_a = object.deviceModel) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.size = (_c = object.size) !== null && _c !== void 0 ? _c : 0;
        message.volumes = ((_d = object.volumes) === null || _d === void 0 ? void 0 : _d.map((e) => exports.Volume.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Disk.$type, exports.Disk);
const baseBackup = {
    $type: "yandex.cloud.backup.v1.Backup",
    id: "",
    vaultId: "",
    archiveId: "",
    size: 0,
    deduplicatedSize: 0,
    backedUpDataSize: 0,
    originalDataSize: 0,
    computeInstanceId: "",
    type: 0,
    deleted: false,
    policyId: "",
    resourceId: "",
};
exports.Backup = {
    $type: "yandex.cloud.backup.v1.Backup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.vaultId !== "") {
            writer.uint32(18).string(message.vaultId);
        }
        if (message.archiveId !== "") {
            writer.uint32(26).string(message.archiveId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastSeenAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastSeenAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.deduplicatedSize !== 0) {
            writer.uint32(56).int64(message.deduplicatedSize);
        }
        if (message.backedUpDataSize !== 0) {
            writer.uint32(64).int64(message.backedUpDataSize);
        }
        if (message.originalDataSize !== 0) {
            writer.uint32(72).int64(message.originalDataSize);
        }
        if (message.attributes !== undefined) {
            exports.Backup_BackupAttributes.encode(message.attributes, writer.uint32(82).fork()).ldelim();
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(90).string(message.computeInstanceId);
        }
        for (const v of message.disks) {
            exports.Disk.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(120).int32(message.type);
        }
        if (message.deleted === true) {
            writer.uint32(168).bool(message.deleted);
        }
        if (message.policyId !== "") {
            writer.uint32(178).string(message.policyId);
        }
        if (message.resourceId !== "") {
            writer.uint32(186).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackup);
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.vaultId = reader.string();
                    break;
                case 3:
                    message.archiveId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastSeenAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.deduplicatedSize = longToNumber(reader.int64());
                    break;
                case 8:
                    message.backedUpDataSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.originalDataSize = longToNumber(reader.int64());
                    break;
                case 10:
                    message.attributes = exports.Backup_BackupAttributes.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.computeInstanceId = reader.string();
                    break;
                case 14:
                    message.disks.push(exports.Disk.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.type = reader.int32();
                    break;
                case 21:
                    message.deleted = reader.bool();
                    break;
                case 22:
                    message.policyId = reader.string();
                    break;
                case 23:
                    message.resourceId = reader.string();
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
        const message = Object.assign({}, baseBackup);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? String(object.vaultId)
                : "";
        message.archiveId =
            object.archiveId !== undefined && object.archiveId !== null
                ? String(object.archiveId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.lastSeenAt =
            object.lastSeenAt !== undefined && object.lastSeenAt !== null
                ? fromJsonTimestamp(object.lastSeenAt)
                : undefined;
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.deduplicatedSize =
            object.deduplicatedSize !== undefined && object.deduplicatedSize !== null
                ? Number(object.deduplicatedSize)
                : 0;
        message.backedUpDataSize =
            object.backedUpDataSize !== undefined && object.backedUpDataSize !== null
                ? Number(object.backedUpDataSize)
                : 0;
        message.originalDataSize =
            object.originalDataSize !== undefined && object.originalDataSize !== null
                ? Number(object.originalDataSize)
                : 0;
        message.attributes =
            object.attributes !== undefined && object.attributes !== null
                ? exports.Backup_BackupAttributes.fromJSON(object.attributes)
                : undefined;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.disks = ((_a = object.disks) !== null && _a !== void 0 ? _a : []).map((e) => exports.Disk.fromJSON(e));
        message.type =
            object.type !== undefined && object.type !== null
                ? backup_TypeFromJSON(object.type)
                : 0;
        message.deleted =
            object.deleted !== undefined && object.deleted !== null
                ? Boolean(object.deleted)
                : false;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.vaultId !== undefined && (obj.vaultId = message.vaultId);
        message.archiveId !== undefined && (obj.archiveId = message.archiveId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.lastSeenAt !== undefined &&
            (obj.lastSeenAt = message.lastSeenAt.toISOString());
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.deduplicatedSize !== undefined &&
            (obj.deduplicatedSize = Math.round(message.deduplicatedSize));
        message.backedUpDataSize !== undefined &&
            (obj.backedUpDataSize = Math.round(message.backedUpDataSize));
        message.originalDataSize !== undefined &&
            (obj.originalDataSize = Math.round(message.originalDataSize));
        message.attributes !== undefined &&
            (obj.attributes = message.attributes
                ? exports.Backup_BackupAttributes.toJSON(message.attributes)
                : undefined);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        if (message.disks) {
            obj.disks = message.disks.map((e) => (e ? exports.Disk.toJSON(e) : undefined));
        }
        else {
            obj.disks = [];
        }
        message.type !== undefined && (obj.type = backup_TypeToJSON(message.type));
        message.deleted !== undefined && (obj.deleted = message.deleted);
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = Object.assign({}, baseBackup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.vaultId = (_b = object.vaultId) !== null && _b !== void 0 ? _b : "";
        message.archiveId = (_c = object.archiveId) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.lastSeenAt = (_e = object.lastSeenAt) !== null && _e !== void 0 ? _e : undefined;
        message.size = (_f = object.size) !== null && _f !== void 0 ? _f : 0;
        message.deduplicatedSize = (_g = object.deduplicatedSize) !== null && _g !== void 0 ? _g : 0;
        message.backedUpDataSize = (_h = object.backedUpDataSize) !== null && _h !== void 0 ? _h : 0;
        message.originalDataSize = (_j = object.originalDataSize) !== null && _j !== void 0 ? _j : 0;
        message.attributes =
            object.attributes !== undefined && object.attributes !== null
                ? exports.Backup_BackupAttributes.fromPartial(object.attributes)
                : undefined;
        message.computeInstanceId = (_k = object.computeInstanceId) !== null && _k !== void 0 ? _k : "";
        message.disks = ((_l = object.disks) === null || _l === void 0 ? void 0 : _l.map((e) => exports.Disk.fromPartial(e))) || [];
        message.type = (_m = object.type) !== null && _m !== void 0 ? _m : 0;
        message.deleted = (_o = object.deleted) !== null && _o !== void 0 ? _o : false;
        message.policyId = (_p = object.policyId) !== null && _p !== void 0 ? _p : "";
        message.resourceId = (_q = object.resourceId) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Backup.$type, exports.Backup);
const baseBackup_BackupAttributes = {
    $type: "yandex.cloud.backup.v1.Backup.BackupAttributes",
    streamName: "",
    uri: "",
};
exports.Backup_BackupAttributes = {
    $type: "yandex.cloud.backup.v1.Backup.BackupAttributes",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.streamName !== "") {
            writer.uint32(10).string(message.streamName);
        }
        if (message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackup_BackupAttributes);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamName = reader.string();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackup_BackupAttributes);
        message.streamName =
            object.streamName !== undefined && object.streamName !== null
                ? String(object.streamName)
                : "";
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.streamName !== undefined && (obj.streamName = message.streamName);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBackup_BackupAttributes);
        message.streamName = (_a = object.streamName) !== null && _a !== void 0 ? _a : "";
        message.uri = (_b = object.uri) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Backup_BackupAttributes.$type, exports.Backup_BackupAttributes);
const baseBackupFile = {
    $type: "yandex.cloud.backup.v1.BackupFile",
    id: "",
    type: 0,
    fullPath: "",
    name: "",
    size: 0,
};
exports.BackupFile = {
    $type: "yandex.cloud.backup.v1.BackupFile",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.parentId !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.parentId }, writer.uint32(18).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.fullPath !== "") {
            writer.uint32(34).string(message.fullPath);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.actions !== undefined) {
            exports.BackupFile_Actions.encode(message.actions, writer.uint32(58).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupFile);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.parentId = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.fullPath = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.actions = exports.BackupFile_Actions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupFile);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.parentId =
            object.parentId !== undefined && object.parentId !== null
                ? String(object.parentId)
                : undefined;
        message.type =
            object.type !== undefined && object.type !== null
                ? backupFile_TypeFromJSON(object.type)
                : 0;
        message.fullPath =
            object.fullPath !== undefined && object.fullPath !== null
                ? String(object.fullPath)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.actions =
            object.actions !== undefined && object.actions !== null
                ? exports.BackupFile_Actions.fromJSON(object.actions)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.parentId !== undefined && (obj.parentId = message.parentId);
        message.type !== undefined &&
            (obj.type = backupFile_TypeToJSON(message.type));
        message.fullPath !== undefined && (obj.fullPath = message.fullPath);
        message.name !== undefined && (obj.name = message.name);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.actions !== undefined &&
            (obj.actions = message.actions
                ? exports.BackupFile_Actions.toJSON(message.actions)
                : undefined);
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseBackupFile);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.parentId = (_b = object.parentId) !== null && _b !== void 0 ? _b : undefined;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.fullPath = (_d = object.fullPath) !== null && _d !== void 0 ? _d : "";
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.size = (_f = object.size) !== null && _f !== void 0 ? _f : 0;
        message.actions =
            object.actions !== undefined && object.actions !== null
                ? exports.BackupFile_Actions.fromPartial(object.actions)
                : undefined;
        message.modifiedAt = (_g = object.modifiedAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupFile.$type, exports.BackupFile);
const baseBackupFile_Actions = {
    $type: "yandex.cloud.backup.v1.BackupFile.Actions",
    restoreToDisk: false,
    goToLocation: false,
};
exports.BackupFile_Actions = {
    $type: "yandex.cloud.backup.v1.BackupFile.Actions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.restoreToDisk === true) {
            writer.uint32(8).bool(message.restoreToDisk);
        }
        if (message.goToLocation === true) {
            writer.uint32(16).bool(message.goToLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupFile_Actions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.restoreToDisk = reader.bool();
                    break;
                case 2:
                    message.goToLocation = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupFile_Actions);
        message.restoreToDisk =
            object.restoreToDisk !== undefined && object.restoreToDisk !== null
                ? Boolean(object.restoreToDisk)
                : false;
        message.goToLocation =
            object.goToLocation !== undefined && object.goToLocation !== null
                ? Boolean(object.goToLocation)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.restoreToDisk !== undefined &&
            (obj.restoreToDisk = message.restoreToDisk);
        message.goToLocation !== undefined &&
            (obj.goToLocation = message.goToLocation);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBackupFile_Actions);
        message.restoreToDisk = (_a = object.restoreToDisk) !== null && _a !== void 0 ? _a : false;
        message.goToLocation = (_b = object.goToLocation) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupFile_Actions.$type, exports.BackupFile_Actions);
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
