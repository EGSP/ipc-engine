"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseServiceClient = exports.DatabaseServiceService = exports.DeleteDatabaseMetadata = exports.DeleteDatabaseRequest = exports.UpdateDatabaseMetadata = exports.UpdateDatabaseRequest_LabelsEntry = exports.UpdateDatabaseRequest = exports.CreateDatabaseMetadata = exports.CreateDatabaseRequest_LabelsEntry = exports.CreateDatabaseRequest = exports.ListDatabasesResponse = exports.ListDatabasesRequest = exports.GetDatabaseRequest = exports.StopDatabaseMetadata = exports.StopDatabaseRequest = exports.StartDatabaseMetadata = exports.StartDatabaseRequest = exports.BackupDatabaseMetadata = exports.BackupDatabaseRequest = exports.RestoreBackupMetadata = exports.RestoreBackupRequest = exports.MoveDatabaseMetadata = exports.MoveDatabaseRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const backup_1 = require("../../../../yandex/cloud/ydb/v1/backup");
const database_1 = require("../../../../yandex/cloud/ydb/v1/database");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.ydb.v1";
const baseMoveDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest",
    databaseId: "",
    destinationFolderId: "",
};
exports.MoveDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveDatabaseRequest.$type, exports.MoveDatabaseRequest);
const baseMoveDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.MoveDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.MoveDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveDatabaseMetadata.$type, exports.MoveDatabaseMetadata);
const baseRestoreBackupRequest = {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest",
    backupId: "",
    databaseId: "",
    pathsToRestore: "",
    targetPath: "",
};
exports.RestoreBackupRequest = {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== "") {
            writer.uint32(18).string(message.databaseId);
        }
        for (const v of message.pathsToRestore) {
            writer.uint32(26).string(v);
        }
        if (message.targetPath !== "") {
            writer.uint32(34).string(message.targetPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreBackupRequest);
        message.pathsToRestore = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                case 3:
                    message.pathsToRestore.push(reader.string());
                    break;
                case 4:
                    message.targetPath = reader.string();
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
        const message = Object.assign({}, baseRestoreBackupRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.pathsToRestore = ((_a = object.pathsToRestore) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.targetPath =
            object.targetPath !== undefined && object.targetPath !== null
                ? String(object.targetPath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        if (message.pathsToRestore) {
            obj.pathsToRestore = message.pathsToRestore.map((e) => e);
        }
        else {
            obj.pathsToRestore = [];
        }
        message.targetPath !== undefined && (obj.targetPath = message.targetPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRestoreBackupRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : "";
        message.pathsToRestore = ((_c = object.pathsToRestore) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.targetPath = (_d = object.targetPath) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreBackupRequest.$type, exports.RestoreBackupRequest);
const baseRestoreBackupMetadata = {
    $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata",
    backupId: "",
    databaseId: "",
};
exports.RestoreBackupMetadata = {
    $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== "") {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreBackupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestoreBackupMetadata);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRestoreBackupMetadata);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreBackupMetadata.$type, exports.RestoreBackupMetadata);
const baseBackupDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest",
    databaseId: "",
};
exports.BackupDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.backupSettings !== undefined) {
            backup_1.BackupSettings.encode(message.backupSettings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.backupSettings = backup_1.BackupSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? backup_1.BackupSettings.fromJSON(object.backupSettings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.backupSettings !== undefined &&
            (obj.backupSettings = message.backupSettings
                ? backup_1.BackupSettings.toJSON(message.backupSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBackupDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.backupSettings =
            object.backupSettings !== undefined && object.backupSettings !== null
                ? backup_1.BackupSettings.fromPartial(object.backupSettings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupDatabaseRequest.$type, exports.BackupDatabaseRequest);
const baseBackupDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata",
    backupId: "",
    databaseId: "",
};
exports.BackupDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== "") {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackupDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackupDatabaseMetadata);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBackupDatabaseMetadata);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackupDatabaseMetadata.$type, exports.BackupDatabaseMetadata);
const baseStartDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.StartDatabaseRequest",
    databaseId: "",
};
exports.StartDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.StartDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartDatabaseRequest.$type, exports.StartDatabaseRequest);
const baseStartDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.StartDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStartDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartDatabaseMetadata.$type, exports.StartDatabaseMetadata);
const baseStopDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.StopDatabaseRequest",
    databaseId: "",
};
exports.StopDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.StopDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopDatabaseRequest.$type, exports.StopDatabaseRequest);
const baseStopDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.StopDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStopDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopDatabaseMetadata.$type, exports.StopDatabaseMetadata);
const baseGetDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.GetDatabaseRequest",
    databaseId: "",
};
exports.GetDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.GetDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDatabaseRequest.$type, exports.GetDatabaseRequest);
const baseListDatabasesRequest = {
    $type: "yandex.cloud.ydb.v1.ListDatabasesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDatabasesRequest = {
    $type: "yandex.cloud.ydb.v1.ListDatabasesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDatabasesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListDatabasesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDatabasesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDatabasesRequest.$type, exports.ListDatabasesRequest);
const baseListDatabasesResponse = {
    $type: "yandex.cloud.ydb.v1.ListDatabasesResponse",
    nextPageToken: "",
};
exports.ListDatabasesResponse = {
    $type: "yandex.cloud.ydb.v1.ListDatabasesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.databases) {
            database_1.Database.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListDatabasesResponse);
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databases.push(database_1.Database.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListDatabasesResponse);
        message.databases = ((_a = object.databases) !== null && _a !== void 0 ? _a : []).map((e) => database_1.Database.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.databases) {
            obj.databases = message.databases.map((e) => e ? database_1.Database.toJSON(e) : undefined);
        }
        else {
            obj.databases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListDatabasesResponse);
        message.databases =
            ((_a = object.databases) === null || _a === void 0 ? void 0 : _a.map((e) => database_1.Database.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDatabasesResponse.$type, exports.ListDatabasesResponse);
const baseCreateDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest",
    folderId: "",
    name: "",
    description: "",
    resourcePresetId: "",
    networkId: "",
    subnetIds: "",
    assignPublicIps: false,
    locationId: "",
    deletionProtection: false,
};
exports.CreateDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.resourcePresetId !== "") {
            writer.uint32(34).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            database_1.StorageConfig.encode(message.storageConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            database_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(58).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(66).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            database_1.ZonalDatabase.encode(message.zonalDatabase, writer.uint32(74).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            database_1.RegionalDatabase.encode(message.regionalDatabase, writer.uint32(82).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            database_1.DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(106).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            database_1.ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(114).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(88).bool(message.assignPublicIps);
        }
        if (message.locationId !== "") {
            writer.uint32(98).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateDatabaseRequest_LabelsEntry.encode({
                $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(122).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            backup_1.BackupConfig.encode(message.backupConfig, writer.uint32(130).fork()).ldelim();
        }
        if (message.monitoringConfig !== undefined) {
            database_1.MonitoringConfig.encode(message.monitoringConfig, writer.uint32(138).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(144).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDatabaseRequest);
        message.subnetIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.resourcePresetId = reader.string();
                    break;
                case 5:
                    message.storageConfig = database_1.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = database_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.subnetIds.push(reader.string());
                    break;
                case 9:
                    message.zonalDatabase = database_1.ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.regionalDatabase = database_1.RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.dedicatedDatabase = database_1.DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serverlessDatabase = database_1.ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.assignPublicIps = reader.bool();
                    break;
                case 12:
                    message.locationId = reader.string();
                    break;
                case 15:
                    const entry15 = exports.CreateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.labels[entry15.key] = entry15.value;
                    }
                    break;
                case 16:
                    message.backupConfig = backup_1.BackupConfig.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.monitoringConfig = database_1.MonitoringConfig.decode(reader, reader.uint32());
                    break;
                case 18:
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
        var _a, _b;
        const message = Object.assign({}, baseCreateDatabaseRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? database_1.StorageConfig.fromJSON(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? database_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? database_1.ZonalDatabase.fromJSON(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? database_1.RegionalDatabase.fromJSON(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? database_1.DedicatedDatabase.fromJSON(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? database_1.ServerlessDatabase.fromJSON(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps =
            object.assignPublicIps !== undefined && object.assignPublicIps !== null
                ? Boolean(object.assignPublicIps)
                : false;
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? String(object.locationId)
                : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromJSON(object.backupConfig)
                : undefined;
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? database_1.MonitoringConfig.fromJSON(object.monitoringConfig)
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? database_1.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? database_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.zonalDatabase !== undefined &&
            (obj.zonalDatabase = message.zonalDatabase
                ? database_1.ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? database_1.RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? database_1.DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? database_1.ServerlessDatabase.toJSON(message.serverlessDatabase)
                : undefined);
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        message.locationId !== undefined && (obj.locationId = message.locationId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupConfig !== undefined &&
            (obj.backupConfig = message.backupConfig
                ? backup_1.BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? database_1.MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseCreateDatabaseRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.resourcePresetId = (_d = object.resourcePresetId) !== null && _d !== void 0 ? _d : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? database_1.StorageConfig.fromPartial(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? database_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.networkId = (_e = object.networkId) !== null && _e !== void 0 ? _e : "";
        message.subnetIds = ((_f = object.subnetIds) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? database_1.ZonalDatabase.fromPartial(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? database_1.RegionalDatabase.fromPartial(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? database_1.DedicatedDatabase.fromPartial(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? database_1.ServerlessDatabase.fromPartial(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps = (_g = object.assignPublicIps) !== null && _g !== void 0 ? _g : false;
        message.locationId = (_h = object.locationId) !== null && _h !== void 0 ? _h : "";
        message.labels = Object.entries((_j = object.labels) !== null && _j !== void 0 ? _j : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromPartial(object.backupConfig)
                : undefined;
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? database_1.MonitoringConfig.fromPartial(object.monitoringConfig)
                : undefined;
        message.deletionProtection = (_k = object.deletionProtection) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDatabaseRequest.$type, exports.CreateDatabaseRequest);
const baseCreateDatabaseRequest_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateDatabaseRequest_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateDatabaseRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDatabaseRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateDatabaseRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDatabaseRequest_LabelsEntry.$type, exports.CreateDatabaseRequest_LabelsEntry);
const baseCreateDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.CreateDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDatabaseMetadata.$type, exports.CreateDatabaseMetadata);
const baseUpdateDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest",
    folderId: "",
    databaseId: "",
    name: "",
    description: "",
    resourcePresetId: "",
    networkId: "",
    subnetIds: "",
    assignPublicIps: false,
    locationId: "",
    deletionProtection: false,
};
exports.UpdateDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.databaseId !== "") {
            writer.uint32(26).string(message.databaseId);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.resourcePresetId !== "") {
            writer.uint32(50).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            database_1.StorageConfig.encode(message.storageConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            database_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(74).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(82).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            database_1.ZonalDatabase.encode(message.zonalDatabase, writer.uint32(90).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            database_1.RegionalDatabase.encode(message.regionalDatabase, writer.uint32(98).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            database_1.DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(122).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            database_1.ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(130).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(104).bool(message.assignPublicIps);
        }
        if (message.locationId !== "") {
            writer.uint32(114).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateDatabaseRequest_LabelsEntry.encode({
                $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(138).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            backup_1.BackupConfig.encode(message.backupConfig, writer.uint32(146).fork()).ldelim();
        }
        if (message.monitoringConfig !== undefined) {
            database_1.MonitoringConfig.encode(message.monitoringConfig, writer.uint32(154).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(160).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDatabaseRequest);
        message.subnetIds = [];
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.databaseId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.resourcePresetId = reader.string();
                    break;
                case 7:
                    message.storageConfig = database_1.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.scalePolicy = database_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.subnetIds.push(reader.string());
                    break;
                case 11:
                    message.zonalDatabase = database_1.ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.regionalDatabase = database_1.RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.dedicatedDatabase = database_1.DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.serverlessDatabase = database_1.ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.assignPublicIps = reader.bool();
                    break;
                case 14:
                    message.locationId = reader.string();
                    break;
                case 17:
                    const entry17 = exports.UpdateDatabaseRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry17.value !== undefined) {
                        message.labels[entry17.key] = entry17.value;
                    }
                    break;
                case 18:
                    message.backupConfig = backup_1.BackupConfig.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.monitoringConfig = database_1.MonitoringConfig.decode(reader, reader.uint32());
                    break;
                case 20:
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
        var _a, _b;
        const message = Object.assign({}, baseUpdateDatabaseRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? database_1.StorageConfig.fromJSON(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? database_1.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? database_1.ZonalDatabase.fromJSON(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? database_1.RegionalDatabase.fromJSON(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? database_1.DedicatedDatabase.fromJSON(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? database_1.ServerlessDatabase.fromJSON(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps =
            object.assignPublicIps !== undefined && object.assignPublicIps !== null
                ? Boolean(object.assignPublicIps)
                : false;
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? String(object.locationId)
                : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromJSON(object.backupConfig)
                : undefined;
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? database_1.MonitoringConfig.fromJSON(object.monitoringConfig)
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? database_1.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? database_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.zonalDatabase !== undefined &&
            (obj.zonalDatabase = message.zonalDatabase
                ? database_1.ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? database_1.RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? database_1.DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? database_1.ServerlessDatabase.toJSON(message.serverlessDatabase)
                : undefined);
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        message.locationId !== undefined && (obj.locationId = message.locationId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupConfig !== undefined &&
            (obj.backupConfig = message.backupConfig
                ? backup_1.BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? database_1.MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseUpdateDatabaseRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.resourcePresetId = (_e = object.resourcePresetId) !== null && _e !== void 0 ? _e : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? database_1.StorageConfig.fromPartial(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? database_1.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.networkId = (_f = object.networkId) !== null && _f !== void 0 ? _f : "";
        message.subnetIds = ((_g = object.subnetIds) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? database_1.ZonalDatabase.fromPartial(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? database_1.RegionalDatabase.fromPartial(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? database_1.DedicatedDatabase.fromPartial(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? database_1.ServerlessDatabase.fromPartial(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps = (_h = object.assignPublicIps) !== null && _h !== void 0 ? _h : false;
        message.locationId = (_j = object.locationId) !== null && _j !== void 0 ? _j : "";
        message.labels = Object.entries((_k = object.labels) !== null && _k !== void 0 ? _k : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromPartial(object.backupConfig)
                : undefined;
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? database_1.MonitoringConfig.fromPartial(object.monitoringConfig)
                : undefined;
        message.deletionProtection = (_l = object.deletionProtection) !== null && _l !== void 0 ? _l : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDatabaseRequest.$type, exports.UpdateDatabaseRequest);
const baseUpdateDatabaseRequest_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateDatabaseRequest_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateDatabaseRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDatabaseRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateDatabaseRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDatabaseRequest_LabelsEntry.$type, exports.UpdateDatabaseRequest_LabelsEntry);
const baseUpdateDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.UpdateDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDatabaseMetadata.$type, exports.UpdateDatabaseMetadata);
const baseDeleteDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest",
    databaseId: "",
};
exports.DeleteDatabaseRequest = {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDatabaseRequest);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteDatabaseRequest);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDatabaseRequest.$type, exports.DeleteDatabaseRequest);
const baseDeleteDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata",
    databaseId: "",
    databaseName: "",
};
exports.DeleteDatabaseMetadata = {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseId !== "") {
            writer.uint32(10).string(message.databaseId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteDatabaseMetadata);
        message.databaseId =
            object.databaseId !== undefined && object.databaseId !== null
                ? String(object.databaseId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseId !== undefined && (obj.databaseId = message.databaseId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDatabaseMetadata);
        message.databaseId = (_a = object.databaseId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDatabaseMetadata.$type, exports.DeleteDatabaseMetadata);
/** A set of methods for managing databases. */
exports.DatabaseServiceService = {
    /** Returns the specified database. */
    get: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(database_1.Database.encode(value).finish()),
        responseDeserialize: (value) => database_1.Database.decode(value),
    },
    /** Retrieves a list of databases. */
    list: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDatabasesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDatabasesResponse.decode(value),
    },
    /** Creates a new database. */
    create: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Modifies the specified database. */
    update: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified database. */
    start: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified database. */
    stop: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    move: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    listAccessBindings: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    updateAccessBindings: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified database. */
    delete: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restores the specified backup */
    restore: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    backup: {
        path: "/yandex.cloud.ydb.v1.DatabaseService/Backup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BackupDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BackupDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.DatabaseServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DatabaseServiceService, "yandex.cloud.ydb.v1.DatabaseService");
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
