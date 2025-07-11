"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpec = exports.Permission = exports.User = exports.permission_RoleToJSON = exports.permission_RoleFromJSON = exports.Permission_Role = exports.serverRoleToJSON = exports.serverRoleFromJSON = exports.ServerRole = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/** Set of server roles. */
var ServerRole;
(function (ServerRole) {
    ServerRole[ServerRole["SERVER_ROLE_UNSPECIFIED"] = 0] = "SERVER_ROLE_UNSPECIFIED";
    /**
     * MDB_MONITOR - Effectively grants VIEW SERVER STATE to the login.
     *
     * That gives an ability to use various dynamic management views to monitor server state, including Activity Monitor tool that is built-in into SSMS.
     *
     * No intrusive actions are allowed, so this is pretty safe to grant.
     */
    ServerRole[ServerRole["MDB_MONITOR"] = 1] = "MDB_MONITOR";
    ServerRole[ServerRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ServerRole = exports.ServerRole || (exports.ServerRole = {}));
function serverRoleFromJSON(object) {
    switch (object) {
        case 0:
        case "SERVER_ROLE_UNSPECIFIED":
            return ServerRole.SERVER_ROLE_UNSPECIFIED;
        case 1:
        case "MDB_MONITOR":
            return ServerRole.MDB_MONITOR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ServerRole.UNRECOGNIZED;
    }
}
exports.serverRoleFromJSON = serverRoleFromJSON;
function serverRoleToJSON(object) {
    switch (object) {
        case ServerRole.SERVER_ROLE_UNSPECIFIED:
            return "SERVER_ROLE_UNSPECIFIED";
        case ServerRole.MDB_MONITOR:
            return "MDB_MONITOR";
        default:
            return "UNKNOWN";
    }
}
exports.serverRoleToJSON = serverRoleToJSON;
/** Role granted to the user within the database. */
var Permission_Role;
(function (Permission_Role) {
    Permission_Role[Permission_Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    /** DB_OWNER - Members of this fixed database role can perform all configuration and maintenance activities on a database and can also drop a database in SQL Server. */
    Permission_Role[Permission_Role["DB_OWNER"] = 1] = "DB_OWNER";
    /** DB_SECURITYADMIN - Members of this fixed database role can modify role membership for custom roles only and manage permissions. They can potentially elevate their privileges and their actions should be monitored. */
    Permission_Role[Permission_Role["DB_SECURITYADMIN"] = 2] = "DB_SECURITYADMIN";
    /** DB_ACCESSADMIN - Members of this fixed database role can add or remove access to a database for Windows logins, Windows groups, and SQL Server logins. */
    Permission_Role[Permission_Role["DB_ACCESSADMIN"] = 3] = "DB_ACCESSADMIN";
    /** DB_BACKUPOPERATOR - Members of this fixed database role can back up the database. */
    Permission_Role[Permission_Role["DB_BACKUPOPERATOR"] = 4] = "DB_BACKUPOPERATOR";
    /** DB_DDLADMIN - Members of this fixed database role can run any Data Definition Language (DDL) command in a database. */
    Permission_Role[Permission_Role["DB_DDLADMIN"] = 5] = "DB_DDLADMIN";
    /** DB_DATAWRITER - Members of this fixed database role can add, delete, or change data in all user tables. */
    Permission_Role[Permission_Role["DB_DATAWRITER"] = 6] = "DB_DATAWRITER";
    /** DB_DATAREADER - Members of this fixed database role can read all data from all user tables. */
    Permission_Role[Permission_Role["DB_DATAREADER"] = 7] = "DB_DATAREADER";
    /** DB_DENYDATAWRITER - Members of this fixed database role cannot add, modify, or delete any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    Permission_Role[Permission_Role["DB_DENYDATAWRITER"] = 8] = "DB_DENYDATAWRITER";
    /** DB_DENYDATAREADER - Members of this fixed database role cannot read any data in the user tables within a database. A denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    Permission_Role[Permission_Role["DB_DENYDATAREADER"] = 9] = "DB_DENYDATAREADER";
    Permission_Role[Permission_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_Role = exports.Permission_Role || (exports.Permission_Role = {}));
function permission_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Permission_Role.ROLE_UNSPECIFIED;
        case 1:
        case "DB_OWNER":
            return Permission_Role.DB_OWNER;
        case 2:
        case "DB_SECURITYADMIN":
            return Permission_Role.DB_SECURITYADMIN;
        case 3:
        case "DB_ACCESSADMIN":
            return Permission_Role.DB_ACCESSADMIN;
        case 4:
        case "DB_BACKUPOPERATOR":
            return Permission_Role.DB_BACKUPOPERATOR;
        case 5:
        case "DB_DDLADMIN":
            return Permission_Role.DB_DDLADMIN;
        case 6:
        case "DB_DATAWRITER":
            return Permission_Role.DB_DATAWRITER;
        case 7:
        case "DB_DATAREADER":
            return Permission_Role.DB_DATAREADER;
        case 8:
        case "DB_DENYDATAWRITER":
            return Permission_Role.DB_DENYDATAWRITER;
        case 9:
        case "DB_DENYDATAREADER":
            return Permission_Role.DB_DENYDATAREADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Permission_Role.UNRECOGNIZED;
    }
}
exports.permission_RoleFromJSON = permission_RoleFromJSON;
function permission_RoleToJSON(object) {
    switch (object) {
        case Permission_Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Permission_Role.DB_OWNER:
            return "DB_OWNER";
        case Permission_Role.DB_SECURITYADMIN:
            return "DB_SECURITYADMIN";
        case Permission_Role.DB_ACCESSADMIN:
            return "DB_ACCESSADMIN";
        case Permission_Role.DB_BACKUPOPERATOR:
            return "DB_BACKUPOPERATOR";
        case Permission_Role.DB_DDLADMIN:
            return "DB_DDLADMIN";
        case Permission_Role.DB_DATAWRITER:
            return "DB_DATAWRITER";
        case Permission_Role.DB_DATAREADER:
            return "DB_DATAREADER";
        case Permission_Role.DB_DENYDATAWRITER:
            return "DB_DENYDATAWRITER";
        case Permission_Role.DB_DENYDATAREADER:
            return "DB_DENYDATAREADER";
        default:
            return "UNKNOWN";
    }
}
exports.permission_RoleToJSON = permission_RoleToJSON;
const baseUser = {
    $type: "yandex.cloud.mdb.sqlserver.v1.User",
    name: "",
    clusterId: "",
    serverRoles: 0,
};
exports.User = {
    $type: "yandex.cloud.mdb.sqlserver.v1.User",
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
        writer.uint32(34).fork();
        for (const v of message.serverRoles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUser);
        message.permissions = [];
        message.serverRoles = [];
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.serverRoles.push(reader.int32());
                        }
                    }
                    else {
                        message.serverRoles.push(reader.int32());
                    }
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
        message.serverRoles = ((_b = object.serverRoles) !== null && _b !== void 0 ? _b : []).map((e) => serverRoleFromJSON(e));
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
        if (message.serverRoles) {
            obj.serverRoles = message.serverRoles.map((e) => serverRoleToJSON(e));
        }
        else {
            obj.serverRoles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUser);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.serverRoles = ((_d = object.serverRoles) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const basePermission = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Permission",
    databaseName: "",
    roles: 0,
};
exports.Permission = {
    $type: "yandex.cloud.mdb.sqlserver.v1.Permission",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== "") {
            writer.uint32(10).string(message.databaseName);
        }
        writer.uint32(18).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermission);
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
                    }
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
        const message = Object.assign({}, basePermission);
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.roles = ((_a = object.roles) !== null && _a !== void 0 ? _a : []).map((e) => permission_RoleFromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        if (message.roles) {
            obj.roles = message.roles.map((e) => permission_RoleToJSON(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePermission);
        message.databaseName = (_a = object.databaseName) !== null && _a !== void 0 ? _a : "";
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
const baseUserSpec = {
    $type: "yandex.cloud.mdb.sqlserver.v1.UserSpec",
    name: "",
    password: "",
    serverRoles: 0,
};
exports.UserSpec = {
    $type: "yandex.cloud.mdb.sqlserver.v1.UserSpec",
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
        writer.uint32(34).fork();
        for (const v of message.serverRoles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSpec);
        message.permissions = [];
        message.serverRoles = [];
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.serverRoles.push(reader.int32());
                        }
                    }
                    else {
                        message.serverRoles.push(reader.int32());
                    }
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
        message.serverRoles = ((_b = object.serverRoles) !== null && _b !== void 0 ? _b : []).map((e) => serverRoleFromJSON(e));
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
        if (message.serverRoles) {
            obj.serverRoles = message.serverRoles.map((e) => serverRoleToJSON(e));
        }
        else {
            obj.serverRoles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUserSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.serverRoles = ((_d = object.serverRoles) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
