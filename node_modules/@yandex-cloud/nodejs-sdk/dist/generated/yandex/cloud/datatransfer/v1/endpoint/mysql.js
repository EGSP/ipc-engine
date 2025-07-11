"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlTarget = exports.MysqlSource = exports.MysqlObjectTransferSettings = exports.MysqlConnection = exports.OnPremiseMysql = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
const baseOnPremiseMysql = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql",
    hosts: "",
    port: 0,
    subnetId: "",
};
exports.OnPremiseMysql = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMysql",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            writer.uint32(42).string(v);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.tlsMode !== undefined) {
            common_1.TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(34).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOnPremiseMysql);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.hosts.push(reader.string());
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                case 6:
                    message.tlsMode = common_1.TLSMode.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
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
        const message = Object.assign({}, baseOnPremiseMysql);
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromJSON(object.tlsMode)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        }
        else {
            obj.hosts = [];
        }
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.tlsMode !== undefined &&
            (obj.tlsMode = message.tlsMode
                ? common_1.TLSMode.toJSON(message.tlsMode)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOnPremiseMysql);
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromPartial(object.tlsMode)
                : undefined;
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OnPremiseMysql.$type, exports.OnPremiseMysql);
const baseMysqlConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection",
};
exports.MysqlConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mdbClusterId !== undefined) {
            writer.uint32(10).string(message.mdbClusterId);
        }
        if (message.onPremise !== undefined) {
            exports.OnPremiseMysql.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mdbClusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = exports.OnPremiseMysql.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMysqlConnection);
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseMysql.fromJSON(object.onPremise)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mdbClusterId !== undefined &&
            (obj.mdbClusterId = message.mdbClusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? exports.OnPremiseMysql.toJSON(message.onPremise)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMysqlConnection);
        message.mdbClusterId = (_a = object.mdbClusterId) !== null && _a !== void 0 ? _a : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseMysql.fromPartial(object.onPremise)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MysqlConnection.$type, exports.MysqlConnection);
const baseMysqlObjectTransferSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings",
    view: 0,
    routine: 0,
    trigger: 0,
    tables: 0,
};
exports.MysqlObjectTransferSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlObjectTransferSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.view !== 0) {
            writer.uint32(8).int32(message.view);
        }
        if (message.routine !== 0) {
            writer.uint32(16).int32(message.routine);
        }
        if (message.trigger !== 0) {
            writer.uint32(24).int32(message.trigger);
        }
        if (message.tables !== 0) {
            writer.uint32(32).int32(message.tables);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlObjectTransferSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.view = reader.int32();
                    break;
                case 2:
                    message.routine = reader.int32();
                    break;
                case 3:
                    message.trigger = reader.int32();
                    break;
                case 4:
                    message.tables = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMysqlObjectTransferSettings);
        message.view =
            object.view !== undefined && object.view !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.view)
                : 0;
        message.routine =
            object.routine !== undefined && object.routine !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.routine)
                : 0;
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.trigger)
                : 0;
        message.tables =
            object.tables !== undefined && object.tables !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.tables)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.view !== undefined &&
            (obj.view = (0, common_1.objectTransferStageToJSON)(message.view));
        message.routine !== undefined &&
            (obj.routine = (0, common_1.objectTransferStageToJSON)(message.routine));
        message.trigger !== undefined &&
            (obj.trigger = (0, common_1.objectTransferStageToJSON)(message.trigger));
        message.tables !== undefined &&
            (obj.tables = (0, common_1.objectTransferStageToJSON)(message.tables));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMysqlObjectTransferSettings);
        message.view = (_a = object.view) !== null && _a !== void 0 ? _a : 0;
        message.routine = (_b = object.routine) !== null && _b !== void 0 ? _b : 0;
        message.trigger = (_c = object.trigger) !== null && _c !== void 0 ? _c : 0;
        message.tables = (_d = object.tables) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MysqlObjectTransferSettings.$type, exports.MysqlObjectTransferSettings);
const baseMysqlSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource",
    securityGroups: "",
    database: "",
    serviceDatabase: "",
    user: "",
    includeTablesRegex: "",
    excludeTablesRegex: "",
    timezone: "",
};
exports.MysqlSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.MysqlConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(114).string(v);
        }
        if (message.database !== "") {
            writer.uint32(18).string(message.database);
        }
        if (message.serviceDatabase !== "") {
            writer.uint32(122).string(message.serviceDatabase);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== undefined) {
            common_1.Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.includeTablesRegex) {
            writer.uint32(98).string(v);
        }
        for (const v of message.excludeTablesRegex) {
            writer.uint32(106).string(v);
        }
        if (message.timezone !== "") {
            writer.uint32(66).string(message.timezone);
        }
        if (message.objectTransferSettings !== undefined) {
            exports.MysqlObjectTransferSettings.encode(message.objectTransferSettings, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlSource);
        message.securityGroups = [];
        message.includeTablesRegex = [];
        message.excludeTablesRegex = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.MysqlConnection.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.securityGroups.push(reader.string());
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 15:
                    message.serviceDatabase = reader.string();
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = common_1.Secret.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.includeTablesRegex.push(reader.string());
                    break;
                case 13:
                    message.excludeTablesRegex.push(reader.string());
                    break;
                case 8:
                    message.timezone = reader.string();
                    break;
                case 11:
                    message.objectTransferSettings = exports.MysqlObjectTransferSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMysqlSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MysqlConnection.fromJSON(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.serviceDatabase =
            object.serviceDatabase !== undefined && object.serviceDatabase !== null
                ? String(object.serviceDatabase)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromJSON(object.password)
                : undefined;
        message.includeTablesRegex = ((_b = object.includeTablesRegex) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.excludeTablesRegex = ((_c = object.excludeTablesRegex) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : "";
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined &&
                object.objectTransferSettings !== null
                ? exports.MysqlObjectTransferSettings.fromJSON(object.objectTransferSettings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.MysqlConnection.toJSON(message.connection)
                : undefined);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.database !== undefined && (obj.database = message.database);
        message.serviceDatabase !== undefined &&
            (obj.serviceDatabase = message.serviceDatabase);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password
                ? common_1.Secret.toJSON(message.password)
                : undefined);
        if (message.includeTablesRegex) {
            obj.includeTablesRegex = message.includeTablesRegex.map((e) => e);
        }
        else {
            obj.includeTablesRegex = [];
        }
        if (message.excludeTablesRegex) {
            obj.excludeTablesRegex = message.excludeTablesRegex.map((e) => e);
        }
        else {
            obj.excludeTablesRegex = [];
        }
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.objectTransferSettings !== undefined &&
            (obj.objectTransferSettings = message.objectTransferSettings
                ? exports.MysqlObjectTransferSettings.toJSON(message.objectTransferSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseMysqlSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MysqlConnection.fromPartial(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.serviceDatabase = (_c = object.serviceDatabase) !== null && _c !== void 0 ? _c : "";
        message.user = (_d = object.user) !== null && _d !== void 0 ? _d : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.includeTablesRegex = ((_e = object.includeTablesRegex) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.excludeTablesRegex = ((_f = object.excludeTablesRegex) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.timezone = (_g = object.timezone) !== null && _g !== void 0 ? _g : "";
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined &&
                object.objectTransferSettings !== null
                ? exports.MysqlObjectTransferSettings.fromPartial(object.objectTransferSettings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MysqlSource.$type, exports.MysqlSource);
const baseMysqlTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget",
    securityGroups: "",
    database: "",
    user: "",
    sqlMode: "",
    skipConstraintChecks: false,
    timezone: "",
    cleanupPolicy: 0,
    serviceDatabase: "",
};
exports.MysqlTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MysqlTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.MysqlConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(130).string(v);
        }
        if (message.database !== "") {
            writer.uint32(18).string(message.database);
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== undefined) {
            common_1.Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        if (message.sqlMode !== "") {
            writer.uint32(42).string(message.sqlMode);
        }
        if (message.skipConstraintChecks === true) {
            writer.uint32(48).bool(message.skipConstraintChecks);
        }
        if (message.timezone !== "") {
            writer.uint32(58).string(message.timezone);
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(64).int32(message.cleanupPolicy);
        }
        if (message.serviceDatabase !== "") {
            writer.uint32(122).string(message.serviceDatabase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlTarget);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.MysqlConnection.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.securityGroups.push(reader.string());
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = common_1.Secret.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sqlMode = reader.string();
                    break;
                case 6:
                    message.skipConstraintChecks = reader.bool();
                    break;
                case 7:
                    message.timezone = reader.string();
                    break;
                case 8:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 15:
                    message.serviceDatabase = reader.string();
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
        const message = Object.assign({}, baseMysqlTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MysqlConnection.fromJSON(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromJSON(object.password)
                : undefined;
        message.sqlMode =
            object.sqlMode !== undefined && object.sqlMode !== null
                ? String(object.sqlMode)
                : "";
        message.skipConstraintChecks =
            object.skipConstraintChecks !== undefined &&
                object.skipConstraintChecks !== null
                ? Boolean(object.skipConstraintChecks)
                : false;
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : "";
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? (0, common_1.cleanupPolicyFromJSON)(object.cleanupPolicy)
                : 0;
        message.serviceDatabase =
            object.serviceDatabase !== undefined && object.serviceDatabase !== null
                ? String(object.serviceDatabase)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.MysqlConnection.toJSON(message.connection)
                : undefined);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.database !== undefined && (obj.database = message.database);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password
                ? common_1.Secret.toJSON(message.password)
                : undefined);
        message.sqlMode !== undefined && (obj.sqlMode = message.sqlMode);
        message.skipConstraintChecks !== undefined &&
            (obj.skipConstraintChecks = message.skipConstraintChecks);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = (0, common_1.cleanupPolicyToJSON)(message.cleanupPolicy));
        message.serviceDatabase !== undefined &&
            (obj.serviceDatabase = message.serviceDatabase);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseMysqlTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MysqlConnection.fromPartial(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.user = (_c = object.user) !== null && _c !== void 0 ? _c : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.sqlMode = (_d = object.sqlMode) !== null && _d !== void 0 ? _d : "";
        message.skipConstraintChecks = (_e = object.skipConstraintChecks) !== null && _e !== void 0 ? _e : false;
        message.timezone = (_f = object.timezone) !== null && _f !== void 0 ? _f : "";
        message.cleanupPolicy = (_g = object.cleanupPolicy) !== null && _g !== void 0 ? _g : 0;
        message.serviceDatabase = (_h = object.serviceDatabase) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MysqlTarget.$type, exports.MysqlTarget);
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
