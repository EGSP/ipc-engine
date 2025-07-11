"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseServiceClient = exports.DatabaseServiceService = exports.ExportDatabaseBackupMetadata = exports.ExportDatabaseBackupRequest = exports.ImportDatabaseBackupMetadata = exports.ImportDatabaseBackupRequest = exports.RestoreDatabaseMetadata = exports.RestoreDatabaseRequest = exports.DeleteDatabaseMetadata = exports.DeleteDatabaseRequest = exports.CreateDatabaseMetadata = exports.CreateDatabaseRequest = exports.ListDatabasesResponse = exports.ListDatabasesRequest = exports.GetDatabaseRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const database_1 = require("../../../../../yandex/cloud/mdb/sqlserver/v1/database");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
const baseGetDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest",
    clusterId: "",
    databaseName: "",
};
exports.GetDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
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
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseGetDatabaseRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetDatabaseRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDatabaseRequest.$type, exports.GetDatabaseRequest);
const baseListDatabasesRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListDatabasesRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
                    message.clusterId = reader.string();
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListDatabasesRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDatabasesRequest.$type, exports.ListDatabasesRequest);
const baseListDatabasesResponse = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse",
    nextPageToken: "",
};
exports.ListDatabasesResponse = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListDatabasesResponse",
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
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest",
    clusterId: "",
};
exports.CreateDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseSpec !== undefined) {
            database_1.DatabaseSpec.encode(message.databaseSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseSpec = database_1.DatabaseSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateDatabaseRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseSpec =
            object.databaseSpec !== undefined && object.databaseSpec !== null
                ? database_1.DatabaseSpec.fromJSON(object.databaseSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseSpec !== undefined &&
            (obj.databaseSpec = message.databaseSpec
                ? database_1.DatabaseSpec.toJSON(message.databaseSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateDatabaseRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseSpec =
            object.databaseSpec !== undefined && object.databaseSpec !== null
                ? database_1.DatabaseSpec.fromPartial(object.databaseSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDatabaseRequest.$type, exports.CreateDatabaseRequest);
const baseCreateDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata",
    clusterId: "",
    databaseName: "",
};
exports.CreateDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
                    message.clusterId = reader.string();
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateDatabaseMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDatabaseMetadata.$type, exports.CreateDatabaseMetadata);
const baseDeleteDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest",
    clusterId: "",
    databaseName: "",
};
exports.DeleteDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
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
                    message.clusterId = reader.string();
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
        const message = Object.assign({}, baseDeleteDatabaseRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDatabaseRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDatabaseRequest.$type, exports.DeleteDatabaseRequest);
const baseDeleteDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata",
    clusterId: "",
    databaseName: "",
};
exports.DeleteDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
                    message.clusterId = reader.string();
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteDatabaseMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDatabaseMetadata.$type, exports.DeleteDatabaseMetadata);
const baseRestoreDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest",
    clusterId: "",
    databaseName: "",
    fromDatabase: "",
    backupId: "",
};
exports.RestoreDatabaseRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== "") {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== "") {
            writer.uint32(34).string(message.backupId);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreDatabaseRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
                    message.backupId = reader.string();
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestoreDatabaseRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.fromDatabase =
            object.fromDatabase !== undefined && object.fromDatabase !== null
                ? String(object.fromDatabase)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        message.time =
            object.time !== undefined && object.time !== null
                ? fromJsonTimestamp(object.time)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseRestoreDatabaseRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.fromDatabase = (_c = object.fromDatabase) !== null && _c !== void 0 ? _c : "";
        message.backupId = (_d = object.backupId) !== null && _d !== void 0 ? _d : "";
        message.time = (_e = object.time) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreDatabaseRequest.$type, exports.RestoreDatabaseRequest);
const baseRestoreDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata",
    clusterId: "",
    databaseName: "",
    fromDatabase: "",
    backupId: "",
};
exports.RestoreDatabaseMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreDatabaseMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== "") {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== "") {
            writer.uint32(34).string(message.backupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestoreDatabaseMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
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
        const message = Object.assign({}, baseRestoreDatabaseMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.fromDatabase =
            object.fromDatabase !== undefined && object.fromDatabase !== null
                ? String(object.fromDatabase)
                : "";
        message.backupId =
            object.backupId !== undefined && object.backupId !== null
                ? String(object.backupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRestoreDatabaseMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.fromDatabase = (_c = object.fromDatabase) !== null && _c !== void 0 ? _c : "";
        message.backupId = (_d = object.backupId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestoreDatabaseMetadata.$type, exports.RestoreDatabaseMetadata);
const baseImportDatabaseBackupRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
    files: "",
};
exports.ImportDatabaseBackupRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.s3Bucket !== "") {
            writer.uint32(26).string(message.s3Bucket);
        }
        if (message.s3Path !== "") {
            writer.uint32(34).string(message.s3Path);
        }
        for (const v of message.files) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImportDatabaseBackupRequest);
        message.files = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.s3Bucket = reader.string();
                    break;
                case 4:
                    message.s3Path = reader.string();
                    break;
                case 5:
                    message.files.push(reader.string());
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
        const message = Object.assign({}, baseImportDatabaseBackupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.s3Bucket =
            object.s3Bucket !== undefined && object.s3Bucket !== null
                ? String(object.s3Bucket)
                : "";
        message.s3Path =
            object.s3Path !== undefined && object.s3Path !== null
                ? String(object.s3Path)
                : "";
        message.files = ((_a = object.files) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.s3Bucket !== undefined && (obj.s3Bucket = message.s3Bucket);
        message.s3Path !== undefined && (obj.s3Path = message.s3Path);
        if (message.files) {
            obj.files = message.files.map((e) => e);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseImportDatabaseBackupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.s3Bucket = (_c = object.s3Bucket) !== null && _c !== void 0 ? _c : "";
        message.s3Path = (_d = object.s3Path) !== null && _d !== void 0 ? _d : "";
        message.files = ((_e = object.files) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ImportDatabaseBackupRequest.$type, exports.ImportDatabaseBackupRequest);
const baseImportDatabaseBackupMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
};
exports.ImportDatabaseBackupMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ImportDatabaseBackupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.s3Bucket !== "") {
            writer.uint32(26).string(message.s3Bucket);
        }
        if (message.s3Path !== "") {
            writer.uint32(34).string(message.s3Path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImportDatabaseBackupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.s3Bucket = reader.string();
                    break;
                case 4:
                    message.s3Path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseImportDatabaseBackupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.s3Bucket =
            object.s3Bucket !== undefined && object.s3Bucket !== null
                ? String(object.s3Bucket)
                : "";
        message.s3Path =
            object.s3Path !== undefined && object.s3Path !== null
                ? String(object.s3Path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.s3Bucket !== undefined && (obj.s3Bucket = message.s3Bucket);
        message.s3Path !== undefined && (obj.s3Path = message.s3Path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseImportDatabaseBackupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.s3Bucket = (_c = object.s3Bucket) !== null && _c !== void 0 ? _c : "";
        message.s3Path = (_d = object.s3Path) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ImportDatabaseBackupMetadata.$type, exports.ImportDatabaseBackupMetadata);
const baseExportDatabaseBackupRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
    prefix: "",
};
exports.ExportDatabaseBackupRequest = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.s3Bucket !== "") {
            writer.uint32(26).string(message.s3Bucket);
        }
        if (message.s3Path !== "") {
            writer.uint32(34).string(message.s3Path);
        }
        if (message.prefix !== "") {
            writer.uint32(42).string(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExportDatabaseBackupRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.s3Bucket = reader.string();
                    break;
                case 4:
                    message.s3Path = reader.string();
                    break;
                case 5:
                    message.prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExportDatabaseBackupRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.s3Bucket =
            object.s3Bucket !== undefined && object.s3Bucket !== null
                ? String(object.s3Bucket)
                : "";
        message.s3Path =
            object.s3Path !== undefined && object.s3Path !== null
                ? String(object.s3Path)
                : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.s3Bucket !== undefined && (obj.s3Bucket = message.s3Bucket);
        message.s3Path !== undefined && (obj.s3Path = message.s3Path);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseExportDatabaseBackupRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.s3Bucket = (_c = object.s3Bucket) !== null && _c !== void 0 ? _c : "";
        message.s3Path = (_d = object.s3Path) !== null && _d !== void 0 ? _d : "";
        message.prefix = (_e = object.prefix) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExportDatabaseBackupRequest.$type, exports.ExportDatabaseBackupRequest);
const baseExportDatabaseBackupMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata",
    clusterId: "",
    databaseName: "",
    s3Bucket: "",
    s3Path: "",
};
exports.ExportDatabaseBackupMetadata = {
    $type: "yandex.cloud.mdb.sqlserver.v1.ExportDatabaseBackupMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== "") {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.s3Bucket !== "") {
            writer.uint32(26).string(message.s3Bucket);
        }
        if (message.s3Path !== "") {
            writer.uint32(34).string(message.s3Path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExportDatabaseBackupMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.s3Bucket = reader.string();
                    break;
                case 4:
                    message.s3Path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExportDatabaseBackupMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.s3Bucket =
            object.s3Bucket !== undefined && object.s3Bucket !== null
                ? String(object.s3Bucket)
                : "";
        message.s3Path =
            object.s3Path !== undefined && object.s3Path !== null
                ? String(object.s3Path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.s3Bucket !== undefined && (obj.s3Bucket = message.s3Bucket);
        message.s3Path !== undefined && (obj.s3Path = message.s3Path);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExportDatabaseBackupMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.databaseName = (_b = object.databaseName) !== null && _b !== void 0 ? _b : "";
        message.s3Bucket = (_c = object.s3Bucket) !== null && _c !== void 0 ? _c : "";
        message.s3Path = (_d = object.s3Path) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExportDatabaseBackupMetadata.$type, exports.ExportDatabaseBackupMetadata);
/** A set of methods for managing SQL Server databases. */
exports.DatabaseServiceService = {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(database_1.Database.encode(value).finish()),
        responseDeserialize: (value) => database_1.Database.decode(value),
    },
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDatabasesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDatabasesResponse.decode(value),
    },
    /** Creates a new SQL Server database in the specified cluster. */
    create: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates a new SQL Server database in the specified cluster from a backup. */
    restore: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestoreDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestoreDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Imports a new SQL Server database from an external backup. */
    importBackup: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ImportBackup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ImportDatabaseBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ImportDatabaseBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Exports the last database backup to an external backup. */
    exportBackup: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ExportBackup",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ExportDatabaseBackupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ExportDatabaseBackupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified SQL Server database. */
    delete: {
        path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDatabaseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.DatabaseServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DatabaseServiceService, "yandex.cloud.mdb.sqlserver.v1.DatabaseService");
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
