"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettings = exports.UserSpec = exports.Permission = exports.User = exports.userSettings_PoolingModeToJSON = exports.userSettings_PoolingModeFromJSON = exports.UserSettings_PoolingMode = exports.userSettings_TransactionIsolationToJSON = exports.userSettings_TransactionIsolationFromJSON = exports.UserSettings_TransactionIsolation = exports.userSettings_LogStatementToJSON = exports.userSettings_LogStatementFromJSON = exports.UserSettings_LogStatement = exports.userSettings_SynchronousCommitToJSON = exports.userSettings_SynchronousCommitFromJSON = exports.UserSettings_SynchronousCommit = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
var UserSettings_SynchronousCommit;
(function (UserSettings_SynchronousCommit) {
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    /** SYNCHRONOUS_COMMIT_ON - (default value) success is reported to the client if the data is in WAL (Write-Ahead Log), and WAL is written to the storage of both the master and its synchronous standby server. */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    /**
     * SYNCHRONOUS_COMMIT_OFF - success is reported to the client even if the data is not in WAL.
     * There is no synchronous write operation, data may be loss in case of storage subsystem failure.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    /**
     * SYNCHRONOUS_COMMIT_LOCAL - success is reported to the client if the data is in WAL, and WAL is written to the storage of the master server.
     * The transaction may be lost due to storage subsystem failure on the master server.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_WRITE - success is reported to the client if the data is in WAL, WAL is written to the storage of the master server, and the server's synchronous standby indicates that it has received WAL and written it out to its operating system.
     * The transaction may be lost due to simultaneous storage subsystem failure on the master and operating system's failure on the synchronous standby.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_APPLY - success is reported to the client if the data is in WAL (Write-Ahead Log), WAL is written to the storage of the master server, and its synchronous standby indicates that it has received WAL and applied it.
     * The transaction may be lost due to irrecoverably failure of both the master and its synchronous standby.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_SynchronousCommit = exports.UserSettings_SynchronousCommit || (exports.UserSettings_SynchronousCommit = {}));
function userSettings_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case "SYNCHRONOUS_COMMIT_ON":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case "SYNCHRONOUS_COMMIT_OFF":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case "SYNCHRONOUS_COMMIT_LOCAL":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_SynchronousCommit.UNRECOGNIZED;
    }
}
exports.userSettings_SynchronousCommitFromJSON = userSettings_SynchronousCommitFromJSON;
function userSettings_SynchronousCommitToJSON(object) {
    switch (object) {
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return "SYNCHRONOUS_COMMIT_ON";
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return "SYNCHRONOUS_COMMIT_OFF";
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return "SYNCHRONOUS_COMMIT_LOCAL";
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_SynchronousCommitToJSON = userSettings_SynchronousCommitToJSON;
var UserSettings_LogStatement;
(function (UserSettings_LogStatement) {
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    /** LOG_STATEMENT_NONE - (default) logs none of SQL statements. */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    /** LOG_STATEMENT_DDL - logs all data definition statements (such as `CREATE`, `ALTER`, `DROP` and others). */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    /** LOG_STATEMENT_MOD - logs all statements that fall in the `LOG_STATEMENT_DDL` category plus data-modifying statements (such as `INSERT`, `UPDATE` and others). */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    /** LOG_STATEMENT_ALL - logs all SQL statements. */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    UserSettings_LogStatement[UserSettings_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_LogStatement = exports.UserSettings_LogStatement || (exports.UserSettings_LogStatement = {}));
function userSettings_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return UserSettings_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return UserSettings_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return UserSettings_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return UserSettings_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_LogStatement.UNRECOGNIZED;
    }
}
exports.userSettings_LogStatementFromJSON = userSettings_LogStatementFromJSON;
function userSettings_LogStatementToJSON(object) {
    switch (object) {
        case UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case UserSettings_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case UserSettings_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case UserSettings_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case UserSettings_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_LogStatementToJSON = userSettings_LogStatementToJSON;
var UserSettings_TransactionIsolation;
(function (UserSettings_TransactionIsolation) {
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    /** TRANSACTION_ISOLATION_READ_UNCOMMITTED - this level behaves like `TRANSACTION_ISOLATION_READ_COMMITTED` in PostgreSQL. */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    /** TRANSACTION_ISOLATION_READ_COMMITTED - (default) on this level query sees only data committed before the query began. */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    /** TRANSACTION_ISOLATION_REPEATABLE_READ - on this level all subsequent queries in a transaction will see the same rows, that were read by the first `SELECT` or `INSERT` query in this transaction, unchanged (these rows are locked during the first query). */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    /**
     * TRANSACTION_ISOLATION_SERIALIZABLE - this level provides the strictest transaction isolation.
     * All queries in the current transaction see only the rows that were fixed prior to execution of the first `SELECT` or `INSERT` query in this transaction.
     * If read and write operations in a concurrent set of serializable transactions overlap and this may cause an inconsistency that is not possible during the serial transaction execution, then one of the transaction will be rolled back, triggering a serialization failure.
     */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_TransactionIsolation = exports.UserSettings_TransactionIsolation || (exports.UserSettings_TransactionIsolation = {}));
function userSettings_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.userSettings_TransactionIsolationFromJSON = userSettings_TransactionIsolationFromJSON;
function userSettings_TransactionIsolationToJSON(object) {
    switch (object) {
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_TransactionIsolationToJSON = userSettings_TransactionIsolationToJSON;
var UserSettings_PoolingMode;
(function (UserSettings_PoolingMode) {
    UserSettings_PoolingMode[UserSettings_PoolingMode["POOLING_MODE_UNSPECIFIED"] = 0] = "POOLING_MODE_UNSPECIFIED";
    /** SESSION - (default) server connection will be assigned to it for the whole duration the client stays connected */
    UserSettings_PoolingMode[UserSettings_PoolingMode["SESSION"] = 1] = "SESSION";
    /** TRANSACTION - server connection is assigned to a client only during a transaction */
    UserSettings_PoolingMode[UserSettings_PoolingMode["TRANSACTION"] = 2] = "TRANSACTION";
    /** STATEMENT - server connection will be put back into the pool immediately after a query completes */
    UserSettings_PoolingMode[UserSettings_PoolingMode["STATEMENT"] = 3] = "STATEMENT";
    UserSettings_PoolingMode[UserSettings_PoolingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_PoolingMode = exports.UserSettings_PoolingMode || (exports.UserSettings_PoolingMode = {}));
function userSettings_PoolingModeFromJSON(object) {
    switch (object) {
        case 0:
        case "POOLING_MODE_UNSPECIFIED":
            return UserSettings_PoolingMode.POOLING_MODE_UNSPECIFIED;
        case 1:
        case "SESSION":
            return UserSettings_PoolingMode.SESSION;
        case 2:
        case "TRANSACTION":
            return UserSettings_PoolingMode.TRANSACTION;
        case 3:
        case "STATEMENT":
            return UserSettings_PoolingMode.STATEMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_PoolingMode.UNRECOGNIZED;
    }
}
exports.userSettings_PoolingModeFromJSON = userSettings_PoolingModeFromJSON;
function userSettings_PoolingModeToJSON(object) {
    switch (object) {
        case UserSettings_PoolingMode.POOLING_MODE_UNSPECIFIED:
            return "POOLING_MODE_UNSPECIFIED";
        case UserSettings_PoolingMode.SESSION:
            return "SESSION";
        case UserSettings_PoolingMode.TRANSACTION:
            return "TRANSACTION";
        case UserSettings_PoolingMode.STATEMENT:
            return "STATEMENT";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_PoolingModeToJSON = userSettings_PoolingModeToJSON;
const baseUser = {
    $type: "yandex.cloud.mdb.postgresql.v1.User",
    name: "",
    clusterId: "",
    connLimit: 0,
    grants: "",
};
exports.User = {
    $type: "yandex.cloud.mdb.postgresql.v1.User",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.connLimit !== 0) {
            writer.uint32(32).int64(message.connLimit);
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.login !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.login }, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(58).string(v);
        }
        if (message.deletionProtection !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.deletionProtection,
            }, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUser);
        message.permissions = [];
        message.grants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.connLimit = longToNumber(reader.int64());
                    break;
                case 5:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.login = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.grants.push(reader.string());
                    break;
                case 8:
                    message.deletionProtection = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseUser);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.connLimit =
            object.connLimit !== undefined && object.connLimit !== null
                ? Number(object.connLimit)
                : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromJSON(object.settings)
                : undefined;
        message.login =
            object.login !== undefined && object.login !== null
                ? Boolean(object.login)
                : undefined;
        message.grants = ((_b = object.grants) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.connLimit !== undefined &&
            (obj.connLimit = Math.round(message.connLimit));
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        message.login !== undefined && (obj.login = message.login);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        }
        else {
            obj.grants = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUser);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.connLimit = (_d = object.connLimit) !== null && _d !== void 0 ? _d : 0;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromPartial(object.settings)
                : undefined;
        message.login = (_e = object.login) !== null && _e !== void 0 ? _e : undefined;
        message.grants = ((_f = object.grants) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const basePermission = {
    $type: "yandex.cloud.mdb.postgresql.v1.Permission",
    databaseName: "",
};
exports.Permission = {
    $type: "yandex.cloud.mdb.postgresql.v1.Permission",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== "") {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermission);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, basePermission);
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePermission);
        message.databaseName = (_a = object.databaseName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
const baseUserSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSpec",
    name: "",
    password: "",
    grants: "",
};
exports.UserSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.connLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.connLimit }, writer.uint32(34).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.login !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.login }, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(58).string(v);
        }
        if (message.deletionProtection !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.deletionProtection,
            }, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSpec);
        message.permissions = [];
        message.grants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.connLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.login = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.grants.push(reader.string());
                    break;
                case 8:
                    message.deletionProtection = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseUserSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.connLimit =
            object.connLimit !== undefined && object.connLimit !== null
                ? Number(object.connLimit)
                : undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromJSON(object.settings)
                : undefined;
        message.login =
            object.login !== undefined && object.login !== null
                ? Boolean(object.login)
                : undefined;
        message.grants = ((_b = object.grants) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.connLimit !== undefined && (obj.connLimit = message.connLimit);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        message.login !== undefined && (obj.login = message.login);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        }
        else {
            obj.grants = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUserSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.connLimit = (_d = object.connLimit) !== null && _d !== void 0 ? _d : undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromPartial(object.settings)
                : undefined;
        message.login = (_e = object.login) !== null && _e !== void 0 ? _e : undefined;
        message.grants = ((_f = object.grants) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
const baseUserSettings = {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSettings",
    defaultTransactionIsolation: 0,
    synchronousCommit: 0,
    logStatement: 0,
    poolMode: 0,
};
exports.UserSettings = {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(8).int32(message.defaultTransactionIsolation);
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationStatement,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(32).int32(message.synchronousCommit);
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempFileLimit }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(48).int32(message.logStatement);
        }
        if (message.poolMode !== 0) {
            writer.uint32(56).int32(message.poolMode);
        }
        if (message.preparedStatementsPooling !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.preparedStatementsPooling,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.catchupTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.catchupTimeout }, writer.uint32(74).fork()).ldelim();
        }
        if (message.walSenderTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.walSenderTimeout,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.idleInTransactionSessionTimeout,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.statementTimeout,
            }, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 2:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.synchronousCommit = reader.int32();
                    break;
                case 5:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logStatement = reader.int32();
                    break;
                case 7:
                    message.poolMode = reader.int32();
                    break;
                case 8:
                    message.preparedStatementsPooling = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.catchupTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.walSenderTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserSettings);
        message.defaultTransactionIsolation =
            object.defaultTransactionIsolation !== undefined &&
                object.defaultTransactionIsolation !== null
                ? userSettings_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
                : 0;
        message.lockTimeout =
            object.lockTimeout !== undefined && object.lockTimeout !== null
                ? Number(object.lockTimeout)
                : undefined;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined &&
                object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.synchronousCommit =
            object.synchronousCommit !== undefined &&
                object.synchronousCommit !== null
                ? userSettings_SynchronousCommitFromJSON(object.synchronousCommit)
                : 0;
        message.tempFileLimit =
            object.tempFileLimit !== undefined && object.tempFileLimit !== null
                ? Number(object.tempFileLimit)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? userSettings_LogStatementFromJSON(object.logStatement)
                : 0;
        message.poolMode =
            object.poolMode !== undefined && object.poolMode !== null
                ? userSettings_PoolingModeFromJSON(object.poolMode)
                : 0;
        message.preparedStatementsPooling =
            object.preparedStatementsPooling !== undefined &&
                object.preparedStatementsPooling !== null
                ? Boolean(object.preparedStatementsPooling)
                : undefined;
        message.catchupTimeout =
            object.catchupTimeout !== undefined && object.catchupTimeout !== null
                ? Number(object.catchupTimeout)
                : undefined;
        message.walSenderTimeout =
            object.walSenderTimeout !== undefined && object.walSenderTimeout !== null
                ? Number(object.walSenderTimeout)
                : undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout !== undefined &&
                object.idleInTransactionSessionTimeout !== null
                ? Number(object.idleInTransactionSessionTimeout)
                : undefined;
        message.statementTimeout =
            object.statementTimeout !== undefined && object.statementTimeout !== null
                ? Number(object.statementTimeout)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                userSettings_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = userSettings_SynchronousCommitToJSON(message.synchronousCommit));
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.logStatement !== undefined &&
            (obj.logStatement = userSettings_LogStatementToJSON(message.logStatement));
        message.poolMode !== undefined &&
            (obj.poolMode = userSettings_PoolingModeToJSON(message.poolMode));
        message.preparedStatementsPooling !== undefined &&
            (obj.preparedStatementsPooling = message.preparedStatementsPooling);
        message.catchupTimeout !== undefined &&
            (obj.catchupTimeout = message.catchupTimeout);
        message.walSenderTimeout !== undefined &&
            (obj.walSenderTimeout = message.walSenderTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = Object.assign({}, baseUserSettings);
        message.defaultTransactionIsolation =
            (_a = object.defaultTransactionIsolation) !== null && _a !== void 0 ? _a : 0;
        message.lockTimeout = (_b = object.lockTimeout) !== null && _b !== void 0 ? _b : undefined;
        message.logMinDurationStatement =
            (_c = object.logMinDurationStatement) !== null && _c !== void 0 ? _c : undefined;
        message.synchronousCommit = (_d = object.synchronousCommit) !== null && _d !== void 0 ? _d : 0;
        message.tempFileLimit = (_e = object.tempFileLimit) !== null && _e !== void 0 ? _e : undefined;
        message.logStatement = (_f = object.logStatement) !== null && _f !== void 0 ? _f : 0;
        message.poolMode = (_g = object.poolMode) !== null && _g !== void 0 ? _g : 0;
        message.preparedStatementsPooling =
            (_h = object.preparedStatementsPooling) !== null && _h !== void 0 ? _h : undefined;
        message.catchupTimeout = (_j = object.catchupTimeout) !== null && _j !== void 0 ? _j : undefined;
        message.walSenderTimeout = (_k = object.walSenderTimeout) !== null && _k !== void 0 ? _k : undefined;
        message.idleInTransactionSessionTimeout =
            (_l = object.idleInTransactionSessionTimeout) !== null && _l !== void 0 ? _l : undefined;
        message.statementTimeout = (_m = object.statementTimeout) !== null && _m !== void 0 ? _m : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSettings.$type, exports.UserSettings);
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
