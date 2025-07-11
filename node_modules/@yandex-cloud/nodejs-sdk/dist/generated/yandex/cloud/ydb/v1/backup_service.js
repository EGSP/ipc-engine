"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupServiceClient = exports.BackupServiceService = exports.DeleteBackupMetadata = exports.DeleteBackupRequest = exports.ListBackupsResponse = exports.ListBackupsRequest = exports.GetBackupRequest = exports.ListPathsResponse = exports.ListPathsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const backup_1 = require("../../../../yandex/cloud/ydb/v1/backup");
const access_1 = require("../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.ydb.v1";
const baseListPathsRequest = {
    $type: "yandex.cloud.ydb.v1.ListPathsRequest",
    backupId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListPathsRequest = {
    $type: "yandex.cloud.ydb.v1.ListPathsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
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
        const message = Object.assign({}, baseListPathsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
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
        const message = Object.assign({}, baseListPathsRequest);
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
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
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListPathsRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPathsRequest.$type, exports.ListPathsRequest);
const baseListPathsResponse = {
    $type: "yandex.cloud.ydb.v1.ListPathsResponse",
    paths: "",
    nextPageToken: "",
};
exports.ListPathsResponse = {
    $type: "yandex.cloud.ydb.v1.ListPathsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListPathsResponse);
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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
        const message = Object.assign({}, baseListPathsResponse);
        message.paths = ((_a = object.paths) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListPathsResponse);
        message.paths = ((_a = object.paths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListPathsResponse.$type, exports.ListPathsResponse);
const baseGetBackupRequest = {
    $type: "yandex.cloud.ydb.v1.GetBackupRequest",
    backupId: "",
};
exports.GetBackupRequest = {
    $type: "yandex.cloud.ydb.v1.GetBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBackupRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBackupRequest.$type, exports.GetBackupRequest);
const baseListBackupsRequest = {
    $type: "yandex.cloud.ydb.v1.ListBackupsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListBackupsRequest = {
    $type: "yandex.cloud.ydb.v1.ListBackupsRequest",
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
        const message = Object.assign({}, baseListBackupsRequest);
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
        const message = Object.assign({}, baseListBackupsRequest);
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
        const message = Object.assign({}, baseListBackupsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsRequest.$type, exports.ListBackupsRequest);
const baseListBackupsResponse = {
    $type: "yandex.cloud.ydb.v1.ListBackupsResponse",
    nextPageToken: "",
};
exports.ListBackupsResponse = {
    $type: "yandex.cloud.ydb.v1.ListBackupsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backups) {
            backup_1.Backup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
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
        const message = Object.assign({}, baseListBackupsResponse);
        message.backups = ((_a = object.backups) !== null && _a !== void 0 ? _a : []).map((e) => backup_1.Backup.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
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
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBackupsResponse);
        message.backups = ((_a = object.backups) === null || _a === void 0 ? void 0 : _a.map((e) => backup_1.Backup.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackupsResponse.$type, exports.ListBackupsResponse);
const baseDeleteBackupRequest = {
    $type: "yandex.cloud.ydb.v1.DeleteBackupRequest",
    backupId: "",
};
exports.DeleteBackupRequest = {
    $type: "yandex.cloud.ydb.v1.DeleteBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backupId !== "") {
            writer.uint32(10).string(message.backupId);
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
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteBackupRequest);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackupRequest.$type, exports.DeleteBackupRequest);
const baseDeleteBackupMetadata = {
    $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata",
    backupId: "",
    databaseId: "",
};
exports.DeleteBackupMetadata = {
    $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata",
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
        const message = Object.assign({}, baseDeleteBackupMetadata);
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
        const message = Object.assign({}, baseDeleteBackupMetadata);
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
        const message = Object.assign({}, baseDeleteBackupMetadata);
        message.backupId = (_a = object.backupId) !== null && _a !== void 0 ? _a : "";
        message.databaseId = (_b = object.databaseId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackupMetadata.$type, exports.DeleteBackupMetadata);
/** A set of methods for managing backups. */
exports.BackupServiceService = {
    /** Returns the specified backup. */
    get: {
        path: "/yandex.cloud.ydb.v1.BackupService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(backup_1.Backup.encode(value).finish()),
        responseDeserialize: (value) => backup_1.Backup.decode(value),
    },
    listPaths: {
        path: "/yandex.cloud.ydb.v1.BackupService/ListPaths",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListPathsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListPathsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListPathsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListPathsResponse.decode(value),
    },
    /** Retrieves a list of backups. */
    list: {
        path: "/yandex.cloud.ydb.v1.BackupService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackupsResponse.decode(value),
    },
    listAccessBindings: {
        path: "/yandex.cloud.ydb.v1.BackupService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: "/yandex.cloud.ydb.v1.BackupService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    updateAccessBindings: {
        path: "/yandex.cloud.ydb.v1.BackupService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified backup. */
    delete: {
        path: "/yandex.cloud.ydb.v1.BackupService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.BackupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BackupServiceService, "yandex.cloud.ydb.v1.BackupService");
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
