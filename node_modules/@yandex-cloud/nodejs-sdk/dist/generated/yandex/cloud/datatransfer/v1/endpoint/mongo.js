"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoTarget = exports.MongoSource = exports.MongoCollection = exports.MongoConnection = exports.MongoConnectionOptions = exports.OnPremiseMongo = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
const baseOnPremiseMongo = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo",
    hosts: "",
    port: 0,
    replicaSet: "",
};
exports.OnPremiseMongo = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseMongo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            writer.uint32(10).string(v);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        if (message.tlsMode !== undefined) {
            common_1.TLSMode.encode(message.tlsMode, writer.uint32(50).fork()).ldelim();
        }
        if (message.replicaSet !== "") {
            writer.uint32(42).string(message.replicaSet);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOnPremiseMongo);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(reader.string());
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                case 6:
                    message.tlsMode = common_1.TLSMode.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.replicaSet = reader.string();
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
        const message = Object.assign({}, baseOnPremiseMongo);
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromJSON(object.tlsMode)
                : undefined;
        message.replicaSet =
            object.replicaSet !== undefined && object.replicaSet !== null
                ? String(object.replicaSet)
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
        message.replicaSet !== undefined && (obj.replicaSet = message.replicaSet);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOnPremiseMongo);
        message.hosts = ((_a = object.hosts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.tlsMode =
            object.tlsMode !== undefined && object.tlsMode !== null
                ? common_1.TLSMode.fromPartial(object.tlsMode)
                : undefined;
        message.replicaSet = (_c = object.replicaSet) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OnPremiseMongo.$type, exports.OnPremiseMongo);
const baseMongoConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions",
    user: "",
    authSource: "",
};
exports.MongoConnectionOptions = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnectionOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mdbClusterId !== undefined) {
            writer.uint32(10).string(message.mdbClusterId);
        }
        if (message.onPremise !== undefined) {
            exports.OnPremiseMongo.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        if (message.user !== "") {
            writer.uint32(26).string(message.user);
        }
        if (message.password !== undefined) {
            common_1.Secret.encode(message.password, writer.uint32(34).fork()).ldelim();
        }
        if (message.authSource !== "") {
            writer.uint32(42).string(message.authSource);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongoConnectionOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mdbClusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = exports.OnPremiseMongo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.user = reader.string();
                    break;
                case 4:
                    message.password = common_1.Secret.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.authSource = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongoConnectionOptions);
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseMongo.fromJSON(object.onPremise)
                : undefined;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromJSON(object.password)
                : undefined;
        message.authSource =
            object.authSource !== undefined && object.authSource !== null
                ? String(object.authSource)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mdbClusterId !== undefined &&
            (obj.mdbClusterId = message.mdbClusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? exports.OnPremiseMongo.toJSON(message.onPremise)
                : undefined);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined &&
            (obj.password = message.password
                ? common_1.Secret.toJSON(message.password)
                : undefined);
        message.authSource !== undefined && (obj.authSource = message.authSource);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMongoConnectionOptions);
        message.mdbClusterId = (_a = object.mdbClusterId) !== null && _a !== void 0 ? _a : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremiseMongo.fromPartial(object.onPremise)
                : undefined;
        message.user = (_b = object.user) !== null && _b !== void 0 ? _b : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.authSource = (_c = object.authSource) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MongoConnectionOptions.$type, exports.MongoConnectionOptions);
const baseMongoConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection",
};
exports.MongoConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connectionOptions !== undefined) {
            exports.MongoConnectionOptions.encode(message.connectionOptions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongoConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.connectionOptions = exports.MongoConnectionOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongoConnection);
        message.connectionOptions =
            object.connectionOptions !== undefined &&
                object.connectionOptions !== null
                ? exports.MongoConnectionOptions.fromJSON(object.connectionOptions)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connectionOptions !== undefined &&
            (obj.connectionOptions = message.connectionOptions
                ? exports.MongoConnectionOptions.toJSON(message.connectionOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongoConnection);
        message.connectionOptions =
            object.connectionOptions !== undefined &&
                object.connectionOptions !== null
                ? exports.MongoConnectionOptions.fromPartial(object.connectionOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MongoConnection.$type, exports.MongoConnection);
const baseMongoCollection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection",
    databaseName: "",
    collectionName: "",
};
exports.MongoCollection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoCollection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== "") {
            writer.uint32(10).string(message.databaseName);
        }
        if (message.collectionName !== "") {
            writer.uint32(18).string(message.collectionName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongoCollection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                case 2:
                    message.collectionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongoCollection);
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        message.collectionName =
            object.collectionName !== undefined && object.collectionName !== null
                ? String(object.collectionName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.collectionName !== undefined &&
            (obj.collectionName = message.collectionName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMongoCollection);
        message.databaseName = (_a = object.databaseName) !== null && _a !== void 0 ? _a : "";
        message.collectionName = (_b = object.collectionName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MongoCollection.$type, exports.MongoCollection);
const baseMongoSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource",
    subnetId: "",
    securityGroups: "",
    secondaryPreferredMode: false,
};
exports.MongoSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.MongoConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(90).string(v);
        }
        for (const v of message.collections) {
            exports.MongoCollection.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.excludedCollections) {
            exports.MongoCollection.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.secondaryPreferredMode === true) {
            writer.uint32(64).bool(message.secondaryPreferredMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongoSource);
        message.securityGroups = [];
        message.collections = [];
        message.excludedCollections = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.MongoConnection.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 11:
                    message.securityGroups.push(reader.string());
                    break;
                case 6:
                    message.collections.push(exports.MongoCollection.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.excludedCollections.push(exports.MongoCollection.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.secondaryPreferredMode = reader.bool();
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
        const message = Object.assign({}, baseMongoSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MongoConnection.fromJSON(object.connection)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.collections = ((_b = object.collections) !== null && _b !== void 0 ? _b : []).map((e) => exports.MongoCollection.fromJSON(e));
        message.excludedCollections = ((_c = object.excludedCollections) !== null && _c !== void 0 ? _c : []).map((e) => exports.MongoCollection.fromJSON(e));
        message.secondaryPreferredMode =
            object.secondaryPreferredMode !== undefined &&
                object.secondaryPreferredMode !== null
                ? Boolean(object.secondaryPreferredMode)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.MongoConnection.toJSON(message.connection)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        if (message.collections) {
            obj.collections = message.collections.map((e) => e ? exports.MongoCollection.toJSON(e) : undefined);
        }
        else {
            obj.collections = [];
        }
        if (message.excludedCollections) {
            obj.excludedCollections = message.excludedCollections.map((e) => e ? exports.MongoCollection.toJSON(e) : undefined);
        }
        else {
            obj.excludedCollections = [];
        }
        message.secondaryPreferredMode !== undefined &&
            (obj.secondaryPreferredMode = message.secondaryPreferredMode);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMongoSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MongoConnection.fromPartial(object.connection)
                : undefined;
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.securityGroups = ((_b = object.securityGroups) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.collections =
            ((_c = object.collections) === null || _c === void 0 ? void 0 : _c.map((e) => exports.MongoCollection.fromPartial(e))) || [];
        message.excludedCollections =
            ((_d = object.excludedCollections) === null || _d === void 0 ? void 0 : _d.map((e) => exports.MongoCollection.fromPartial(e))) ||
                [];
        message.secondaryPreferredMode = (_e = object.secondaryPreferredMode) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MongoSource.$type, exports.MongoSource);
const baseMongoTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget",
    subnetId: "",
    securityGroups: "",
    database: "",
    cleanupPolicy: 0,
};
exports.MongoTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.MongoTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.MongoConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(58).string(message.subnetId);
        }
        for (const v of message.securityGroups) {
            writer.uint32(66).string(v);
        }
        if (message.database !== "") {
            writer.uint32(18).string(message.database);
        }
        if (message.cleanupPolicy !== 0) {
            writer.uint32(48).int32(message.cleanupPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongoTarget);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.MongoConnection.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.subnetId = reader.string();
                    break;
                case 8:
                    message.securityGroups.push(reader.string());
                    break;
                case 2:
                    message.database = reader.string();
                    break;
                case 6:
                    message.cleanupPolicy = reader.int32();
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
        const message = Object.assign({}, baseMongoTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MongoConnection.fromJSON(object.connection)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.securityGroups = ((_a = object.securityGroups) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.database =
            object.database !== undefined && object.database !== null
                ? String(object.database)
                : "";
        message.cleanupPolicy =
            object.cleanupPolicy !== undefined && object.cleanupPolicy !== null
                ? (0, common_1.cleanupPolicyFromJSON)(object.cleanupPolicy)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.MongoConnection.toJSON(message.connection)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.securityGroups) {
            obj.securityGroups = message.securityGroups.map((e) => e);
        }
        else {
            obj.securityGroups = [];
        }
        message.database !== undefined && (obj.database = message.database);
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = (0, common_1.cleanupPolicyToJSON)(message.cleanupPolicy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMongoTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.MongoConnection.fromPartial(object.connection)
                : undefined;
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.securityGroups = ((_b = object.securityGroups) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.database = (_c = object.database) !== null && _c !== void 0 ? _c : "";
        message.cleanupPolicy = (_d = object.cleanupPolicy) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MongoTarget.$type, exports.MongoTarget);
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
