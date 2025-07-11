"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupServiceClient = exports.BackupServiceService = exports.DeleteBackupMetadata = exports.DeleteBackupRequest = exports.StartFilesRecoveryMetadata = exports.StartFilesRecoveryRequest = exports.FilesRecoveryOptions = exports.TargetPathCustom = exports.TargetPathOriginal = exports.StartRecoveryMetadata = exports.StartRecoveryRequest = exports.GetBackupRequest = exports.ListFilesResponse = exports.ListFilesRequest = exports.ListBackupsResponse = exports.ListBackupsRequest_InstancePolicy = exports.ListBackupsRequest_ArchiveParameters = exports.ListBackupsRequest = exports.ListArchivesResponse = exports.ListArchivesRequest = exports.filesRecoveryOptions_OverwriteToJSON = exports.filesRecoveryOptions_OverwriteFromJSON = exports.FilesRecoveryOptions_Overwrite = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const backup_1 = require("../../../../yandex/cloud/backup/v1/backup");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.backup.v1";
var FilesRecoveryOptions_Overwrite;
(function (FilesRecoveryOptions_Overwrite) {
    /** OVERWRITE_UNSPECIFIED - Unspecified value treated as Overwrite all */
    FilesRecoveryOptions_Overwrite[FilesRecoveryOptions_Overwrite["OVERWRITE_UNSPECIFIED"] = 0] = "OVERWRITE_UNSPECIFIED";
    /** OVERWRITE_ALL - All overwrites all existing files by recovered ones. */
    FilesRecoveryOptions_Overwrite[FilesRecoveryOptions_Overwrite["OVERWRITE_ALL"] = 1] = "OVERWRITE_ALL";
    /** OVERWRITE_OLDER - Older overwrites older files only. */
    FilesRecoveryOptions_Overwrite[FilesRecoveryOptions_Overwrite["OVERWRITE_OLDER"] = 2] = "OVERWRITE_OLDER";
    /** OVERWRITE_NONE - None does not overwrites files at all. */
    FilesRecoveryOptions_Overwrite[FilesRecoveryOptions_Overwrite["OVERWRITE_NONE"] = 3] = "OVERWRITE_NONE";
    FilesRecoveryOptions_Overwrite[FilesRecoveryOptions_Overwrite["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FilesRecoveryOptions_Overwrite = exports.FilesRecoveryOptions_Overwrite || (exports.FilesRecoveryOptions_Overwrite = {}));
function filesRecoveryOptions_OverwriteFromJSON(object) {
    switch (object) {
        case 0:
        case "OVERWRITE_UNSPECIFIED":
            return FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED;
        case 1:
        case "OVERWRITE_ALL":
            return FilesRecoveryOptions_Overwrite.OVERWRITE_ALL;
        case 2:
        case "OVERWRITE_OLDER":
            return FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER;
        case 3:
        case "OVERWRITE_NONE":
            return FilesRecoveryOptions_Overwrite.OVERWRITE_NONE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FilesRecoveryOptions_Overwrite.UNRECOGNIZED;
    }
}
exports.filesRecoveryOptions_OverwriteFromJSON = filesRecoveryOptions_OverwriteFromJSON;
function filesRecoveryOptions_OverwriteToJSON(object) {
    switch (object) {
        case FilesRecoveryOptions_Overwrite.OVERWRITE_UNSPECIFIED:
            return "OVERWRITE_UNSPECIFIED";
        case FilesRecoveryOptions_Overwrite.OVERWRITE_ALL:
            return "OVERWRITE_ALL";
        case FilesRecoveryOptions_Overwrite.OVERWRITE_OLDER:
            return "OVERWRITE_OLDER";
        case FilesRecoveryOptions_Overwrite.OVERWRITE_NONE:
            return "OVERWRITE_NONE";
        default:
            return "UNKNOWN";
    }
}
exports.filesRecoveryOptions_OverwriteToJSON = filesRecoveryOptions_OverwriteToJSON;
const baseListArchivesRequest = {
    $type: "yandex.cloud.backup.v1.ListArchivesRequest",
};
exports.ListArchivesRequest = {
    $type: "yandex.cloud.backup.v1.ListArchivesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== undefined) {
            writer.uint32(18).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListArchivesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListArchivesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListArchivesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListArchivesRequest.$type, exports.ListArchivesRequest);
const baseListArchivesResponse = {
    $type: "yandex.cloud.backup.v1.ListArchivesResponse",
};
exports.ListArchivesResponse = {
    $type: "yandex.cloud.backup.v1.ListArchivesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.archives) {
            backup_1.Archive.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListArchivesResponse);
        message.archives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.archives.push(backup_1.Archive.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListArchivesResponse);
        message.archives = ((_a = object.archives) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.Archive.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.archives) {
            obj.archives = message.archives.map((e) => e ? backup_1.Archive.toJSON(e) : undefined);
        }
        else {
            obj.archives = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListArchivesResponse);
        message.archives =
            ((_a = object.archives) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.Archive.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListArchivesResponse.$type, exports.ListArchivesResponse);
const baseListBackupsRequest = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest",
    orderBy: "",
    filter: "",
};
exports.ListBackupsRequest = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== undefined) {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.archive !== undefined) {
            exports.ListBackupsRequest_ArchiveParameters.encode(message.archive, writer.uint32(18).fork()).ldelim();
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.instancePolicy !== undefined) {
            exports.ListBackupsRequest_InstancePolicy.encode(message.instancePolicy, writer.uint32(34).fork()).ldelim();
        }
        if (message.resourceId !== undefined) {
            writer.uint32(50).string(message.resourceId);
        }
        if (message.policyId !== undefined) {
            writer.uint32(58).string(message.policyId);
        }
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        if (message.filter !== "") {
            writer.uint32(66).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBackupsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.archive = exports.ListBackupsRequest_ArchiveParameters.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.instancePolicy = exports.ListBackupsRequest_InstancePolicy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.resourceId = reader.string();
                    break;
                case 7:
                    message.policyId = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                case 8:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBackupsRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? exports.ListBackupsRequest_ArchiveParameters.fromJSON(object.archive)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.instancePolicy =
            object.instancePolicy !== undefined && object.instancePolicy !== null
                ? exports.ListBackupsRequest_InstancePolicy.fromJSON(object.instancePolicy)
                : undefined;
        message.resourceId =
            object.resourceId !== undefined && object.resourceId !== null
                ? String(object.resourceId)
                : undefined;
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : undefined;
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.archive !== undefined &&
            (obj.archive = message.archive
                ? exports.ListBackupsRequest_ArchiveParameters.toJSON(message.archive)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.instancePolicy !== undefined &&
            (obj.instancePolicy = message.instancePolicy
                ? exports.ListBackupsRequest_InstancePolicy.toJSON(message.instancePolicy)
                : undefined);
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        message.policyId !== undefined && (obj.policyId = message.policyId);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseListBackupsRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : undefined;
        message.archive =
            object.archive !== undefined && object.archive !== null
                ? exports.ListBackupsRequest_ArchiveParameters.fromPartial(object.archive)
                : undefined;
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : undefined;
        message.instancePolicy =
            object.instancePolicy !== undefined && object.instancePolicy !== null
                ? exports.ListBackupsRequest_InstancePolicy.fromPartial(object.instancePolicy)
                : undefined;
        message.resourceId = (_c = object.resourceId) !== null && _c !== void 0 ? _c : undefined;
        message.policyId = (_d = object.policyId) !== null && _d !== void 0 ? _d : undefined;
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        message.filter = (_f = object.filter) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsRequest.$type, exports.ListBackupsRequest);
const baseListBackupsRequest_ArchiveParameters = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters",
    archiveId: "",
    folderId: "",
};
exports.ListBackupsRequest_ArchiveParameters = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.ArchiveParameters",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.archiveId !== "") {
            writer.uint32(10).string(message.archiveId);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBackupsRequest_ArchiveParameters);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.archiveId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBackupsRequest_ArchiveParameters);
        message.archiveId =
            object.archiveId !== undefined && object.archiveId !== null
                ? String(object.archiveId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.archiveId !== undefined && (obj.archiveId = message.archiveId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBackupsRequest_ArchiveParameters);
        message.archiveId = (_a = object.archiveId) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsRequest_ArchiveParameters.$type, exports.ListBackupsRequest_ArchiveParameters);
const baseListBackupsRequest_InstancePolicy = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy",
    computeInstanceId: "",
    policyId: "",
};
exports.ListBackupsRequest_InstancePolicy = {
    $type: "yandex.cloud.backup.v1.ListBackupsRequest.InstancePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.policyId !== "") {
            writer.uint32(18).string(message.policyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBackupsRequest_InstancePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.policyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListBackupsRequest_InstancePolicy);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.policyId =
            object.policyId !== undefined && object.policyId !== null
                ? String(object.policyId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.policyId !== undefined && (obj.policyId = message.policyId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBackupsRequest_InstancePolicy);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.policyId = (_b = object.policyId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsRequest_InstancePolicy.$type, exports.ListBackupsRequest_InstancePolicy);
const baseListBackupsResponse = {
    $type: "yandex.cloud.backup.v1.ListBackupsResponse",
};
exports.ListBackupsResponse = {
    $type: "yandex.cloud.backup.v1.ListBackupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backups) {
            backup_1.Backup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBackupsResponse);
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(backup_1.Backup.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBackupsResponse);
        message.backups = ((_a = object.backups) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.Backup.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) => e ? backup_1.Backup.toJSON(e) : undefined);
        }
        else {
            obj.backups = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListBackupsResponse);
        message.backups = ((_a = object.backups) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.Backup.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsResponse.$type, exports.ListBackupsResponse);
const baseListFilesRequest = {
    $type: "yandex.cloud.backup.v1.ListFilesRequest",
    folderId: "",
    backupId: "",
    sourceId: "",
};
exports.ListFilesRequest = {
    $type: "yandex.cloud.backup.v1.ListFilesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        if (message.sourceId !== "") {
            writer.uint32(26).string(message.sourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                case 3:
                    message.sourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListFilesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.sourceId =
            object.sourceId !== undefined && object.sourceId !== null
                ? String(object.sourceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.sourceId !== undefined && (obj.sourceId = message.sourceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListFilesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        message.sourceId = (_c = object.sourceId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesRequest.$type, exports.ListFilesRequest);
const baseListFilesResponse = {
    $type: "yandex.cloud.backup.v1.ListFilesResponse",
};
exports.ListFilesResponse = {
    $type: "yandex.cloud.backup.v1.ListFilesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.files) {
            backup_1.BackupFile.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListFilesResponse);
        message.files = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(backup_1.BackupFile.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListFilesResponse);
        message.files = ((_a = object.files) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.BackupFile.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map((e) => e ? backup_1.BackupFile.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseListFilesResponse);
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.BackupFile.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFilesResponse.$type, exports.ListFilesResponse);
const baseGetBackupRequest = {
    $type: "yandex.cloud.backup.v1.GetBackupRequest",
    backupId: "",
    folderId: "",
};
exports.GetBackupRequest = {
    $type: "yandex.cloud.backup.v1.GetBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBackupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBackupRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetBackupRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBackupRequest.$type, exports.GetBackupRequest);
const baseStartRecoveryRequest = {
    $type: "yandex.cloud.backup.v1.StartRecoveryRequest",
    computeInstanceId: "",
    backupId: "",
};
exports.StartRecoveryRequest = {
    $type: "yandex.cloud.backup.v1.StartRecoveryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartRecoveryRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartRecoveryRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStartRecoveryRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartRecoveryRequest.$type, exports.StartRecoveryRequest);
const baseStartRecoveryMetadata = {
    $type: "yandex.cloud.backup.v1.StartRecoveryMetadata",
    progressPercentage: 0,
    srcBackupId: "",
    dstComputeInstanceId: "",
};
exports.StartRecoveryMetadata = {
    $type: "yandex.cloud.backup.v1.StartRecoveryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.progressPercentage !== 0) {
            writer.uint32(9).double(message.progressPercentage);
        }
        if (message.srcBackupId !== "") {
            writer.uint32(18).string(message.srcBackupId);
        }
        if (message.dstComputeInstanceId !== "") {
            writer.uint32(26).string(message.dstComputeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartRecoveryMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.progressPercentage = reader.double();
                    break;
                case 2:
                    message.srcBackupId = reader.string();
                    break;
                case 3:
                    message.dstComputeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartRecoveryMetadata);
        message.progressPercentage =
            object.progressPercentage !== undefined &&
                object.progressPercentage !== null
                ? Number(object.progressPercentage)
                : 0;
        message.srcBackupId =
            object.srcBackupId !== undefined && object.srcBackupId !== null
                ? String(object.srcBackupId)
                : "";
        message.dstComputeInstanceId =
            object.dstComputeInstanceId !== undefined &&
                object.dstComputeInstanceId !== null
                ? String(object.dstComputeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.progressPercentage !== undefined &&
            (obj.progressPercentage = message.progressPercentage);
        message.srcBackupId !== undefined &&
            (obj.srcBackupId = message.srcBackupId);
        message.dstComputeInstanceId !== undefined &&
            (obj.dstComputeInstanceId = message.dstComputeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseStartRecoveryMetadata);
        message.progressPercentage = (_a = object.progressPercentage) !== null && _a !== void 0 ? _a : 0;
        message.srcBackupId = (_b = object.srcBackupId) !== null && _b !== void 0 ? _b : "";
        message.dstComputeInstanceId = (_c = object.dstComputeInstanceId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartRecoveryMetadata.$type, exports.StartRecoveryMetadata);
const baseTargetPathOriginal = {
    $type: "yandex.cloud.backup.v1.TargetPathOriginal",
};
exports.TargetPathOriginal = {
    $type: "yandex.cloud.backup.v1.TargetPathOriginal",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetPathOriginal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseTargetPathOriginal);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseTargetPathOriginal);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetPathOriginal.$type, exports.TargetPathOriginal);
const baseTargetPathCustom = {
    $type: "yandex.cloud.backup.v1.TargetPathCustom",
    path: "",
};
exports.TargetPathCustom = {
    $type: "yandex.cloud.backup.v1.TargetPathCustom",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTargetPathCustom);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTargetPathCustom);
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTargetPathCustom);
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TargetPathCustom.$type, exports.TargetPathCustom);
const baseFilesRecoveryOptions = {
    $type: "yandex.cloud.backup.v1.FilesRecoveryOptions",
    overwrite: 0,
    rebootIfNeeded: false,
};
exports.FilesRecoveryOptions = {
    $type: "yandex.cloud.backup.v1.FilesRecoveryOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.overwrite !== 0) {
            writer.uint32(8).int32(message.overwrite);
        }
        if (message.rebootIfNeeded === true) {
            writer.uint32(16).bool(message.rebootIfNeeded);
        }
        if (message.original !== undefined) {
            exports.TargetPathOriginal.encode(message.original, writer.uint32(802).fork()).ldelim();
        }
        if (message.custom !== undefined) {
            exports.TargetPathCustom.encode(message.custom, writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFilesRecoveryOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overwrite = reader.int32();
                    break;
                case 2:
                    message.rebootIfNeeded = reader.bool();
                    break;
                case 100:
                    message.original = exports.TargetPathOriginal.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.custom = exports.TargetPathCustom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFilesRecoveryOptions);
        message.overwrite =
            object.overwrite !== undefined && object.overwrite !== null
                ? filesRecoveryOptions_OverwriteFromJSON(object.overwrite)
                : 0;
        message.rebootIfNeeded =
            object.rebootIfNeeded !== undefined && object.rebootIfNeeded !== null
                ? Boolean(object.rebootIfNeeded)
                : false;
        message.original =
            object.original !== undefined && object.original !== null
                ? exports.TargetPathOriginal.fromJSON(object.original)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? exports.TargetPathCustom.fromJSON(object.custom)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.overwrite !== undefined &&
            (obj.overwrite = filesRecoveryOptions_OverwriteToJSON(message.overwrite));
        message.rebootIfNeeded !== undefined &&
            (obj.rebootIfNeeded = message.rebootIfNeeded);
        message.original !== undefined &&
            (obj.original = message.original
                ? exports.TargetPathOriginal.toJSON(message.original)
                : undefined);
        message.custom !== undefined &&
            (obj.custom = message.custom
                ? exports.TargetPathCustom.toJSON(message.custom)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFilesRecoveryOptions);
        message.overwrite = (_a = object.overwrite) !== null && _a !== void 0 ? _a : 0;
        message.rebootIfNeeded = (_b = object.rebootIfNeeded) !== null && _b !== void 0 ? _b : false;
        message.original =
            object.original !== undefined && object.original !== null
                ? exports.TargetPathOriginal.fromPartial(object.original)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? exports.TargetPathCustom.fromPartial(object.custom)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FilesRecoveryOptions.$type, exports.FilesRecoveryOptions);
const baseStartFilesRecoveryRequest = {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest",
    computeInstanceId: "",
    backupId: "",
    sourceIds: "",
};
exports.StartFilesRecoveryRequest = {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        if (message.opts !== undefined) {
            exports.FilesRecoveryOptions.encode(message.opts, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sourceIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartFilesRecoveryRequest);
        message.sourceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                case 3:
                    message.opts = exports.FilesRecoveryOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sourceIds.push(reader.string());
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
        const message = Object.assign({}, baseStartFilesRecoveryRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.opts =
            object.opts !== undefined && object.opts !== null
                ? exports.FilesRecoveryOptions.fromJSON(object.opts)
                : undefined;
        message.sourceIds = ((_a = object.sourceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.opts !== undefined &&
            (obj.opts = message.opts
                ? exports.FilesRecoveryOptions.toJSON(message.opts)
                : undefined);
        if (message.sourceIds) {
            obj.sourceIds = message.sourceIds.map((e) => e);
        }
        else {
            obj.sourceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseStartFilesRecoveryRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        message.opts =
            object.opts !== undefined && object.opts !== null
                ? exports.FilesRecoveryOptions.fromPartial(object.opts)
                : undefined;
        message.sourceIds = ((_c = object.sourceIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartFilesRecoveryRequest.$type, exports.StartFilesRecoveryRequest);
const baseStartFilesRecoveryMetadata = {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata",
    progressPercentage: 0,
    computeInstanceId: "",
    backupId: "",
    sourceIds: "",
};
exports.StartFilesRecoveryMetadata = {
    $type: "yandex.cloud.backup.v1.StartFilesRecoveryMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.progressPercentage !== 0) {
            writer.uint32(9).double(message.progressPercentage);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.backupId !== "") {
            writer.uint32(26).string(message.backupId);
        }
        for (const v of message.sourceIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartFilesRecoveryMetadata);
        message.sourceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.progressPercentage = reader.double();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.backupId = reader.string();
                    break;
                case 4:
                    message.sourceIds.push(reader.string());
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
        const message = Object.assign({}, baseStartFilesRecoveryMetadata);
        message.progressPercentage =
            object.progressPercentage !== undefined &&
                object.progressPercentage !== null
                ? Number(object.progressPercentage)
                : 0;
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.sourceIds = ((_a = object.sourceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.progressPercentage !== undefined &&
            (obj.progressPercentage = message.progressPercentage);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        if (message.sourceIds) {
            obj.sourceIds = message.sourceIds.map((e) => e);
        }
        else {
            obj.sourceIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseStartFilesRecoveryMetadata);
        message.progressPercentage = (_a = object.progressPercentage) !== null && _a !== void 0 ? _a : 0;
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        message.backupId = (_c = object.backupId) !== null && _c !== void 0 ? _c : "";
        message.sourceIds = ((_d = object.sourceIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartFilesRecoveryMetadata.$type, exports.StartFilesRecoveryMetadata);
const baseDeleteBackupRequest = {
    $type: "yandex.cloud.backup.v1.DeleteBackupRequest",
    computeInstanceId: "",
    backupId: "",
};
exports.DeleteBackupRequest = {
    $type: "yandex.cloud.backup.v1.DeleteBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBackupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBackupRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBackupRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackupRequest.$type, exports.DeleteBackupRequest);
const baseDeleteBackupMetadata = {
    $type: "yandex.cloud.backup.v1.DeleteBackupMetadata",
    computeInstanceId: "",
    backupId: "",
};
exports.DeleteBackupMetadata = {
    $type: "yandex.cloud.backup.v1.DeleteBackupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.backupId !== "") {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteBackupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteBackupMetadata);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteBackupMetadata);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.backupId = (_b = object.backupId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackupMetadata.$type, exports.DeleteBackupMetadata);
/** A set of methods for managing [backups](/docs/backup/concepts/backup). */
exports.BackupServiceService = {
    /** List backups using filters. */
    list: {
        path: "/yandex.cloud.backup.v1.BackupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackupsResponse.decode(value),
    },
    /**
     * List archives that holds backups for specified folder or
     * specified [Compute Cloud instance](/docs/backup/concepts/vm-connection#os).
     */
    listArchives: {
        path: "/yandex.cloud.backup.v1.BackupService/ListArchives",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListArchivesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListArchivesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListArchivesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListArchivesResponse.decode(value),
    },
    /** ListFiles of the backup. */
    listFiles: {
        path: "/yandex.cloud.backup.v1.BackupService/ListFiles",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFilesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFilesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFilesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFilesResponse.decode(value),
    },
    /** Get backup by its id. */
    get: {
        path: "/yandex.cloud.backup.v1.BackupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(backup_1.Backup.encode(value).finish()),
        responseDeserialize: (value) => backup_1.Backup.decode(value),
    },
    /**
     * Start recovery process of specified backup to specific Compute Cloud instance.
     *
     * For details, see [Restoring a VM from a backup](/docs/backup/operations/backup-vm/recover).
     */
    startRecovery: {
        path: "/yandex.cloud.backup.v1.BackupService/StartRecovery",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartRecoveryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartRecoveryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** StartFilesRecovery runs recovery process of selected files to specific Compute Cloud instance. */
    startFilesRecovery: {
        path: "/yandex.cloud.backup.v1.BackupService/StartFilesRecovery",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartFilesRecoveryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartFilesRecoveryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Delete specific backup. */
    delete: {
        path: "/yandex.cloud.backup.v1.BackupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.BackupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BackupServiceService, "yandex.cloud.backup.v1.BackupService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
