"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresTarget = exports.PostgresSource = exports.PostgresConnection = exports.OnPremisePostgres = exports.PostgresObjectTransferSettings = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
const basePostgresObjectTransferSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings",
    sequence: 0,
    sequenceOwnedBy: 0,
    sequenceSet: 0,
    table: 0,
    primaryKey: 0,
    fkConstraint: 0,
    defaultValues: 0,
    constraint: 0,
    index: 0,
    view: 0,
    materializedView: 0,
    function: 0,
    trigger: 0,
    type: 0,
    rule: 0,
    collation: 0,
    policy: 0,
    cast: 0,
};
exports.PostgresObjectTransferSettings = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresObjectTransferSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sequence !== 0) {
            writer.uint32(8).int32(message.sequence);
        }
        if (message.sequenceOwnedBy !== 0) {
            writer.uint32(16).int32(message.sequenceOwnedBy);
        }
        if (message.sequenceSet !== 0) {
            writer.uint32(144).int32(message.sequenceSet);
        }
        if (message.table !== 0) {
            writer.uint32(24).int32(message.table);
        }
        if (message.primaryKey !== 0) {
            writer.uint32(32).int32(message.primaryKey);
        }
        if (message.fkConstraint !== 0) {
            writer.uint32(40).int32(message.fkConstraint);
        }
        if (message.defaultValues !== 0) {
            writer.uint32(48).int32(message.defaultValues);
        }
        if (message.constraint !== 0) {
            writer.uint32(56).int32(message.constraint);
        }
        if (message.index !== 0) {
            writer.uint32(64).int32(message.index);
        }
        if (message.view !== 0) {
            writer.uint32(72).int32(message.view);
        }
        if (message.materializedView !== 0) {
            writer.uint32(136).int32(message.materializedView);
        }
        if (message.function !== 0) {
            writer.uint32(80).int32(message.function);
        }
        if (message.trigger !== 0) {
            writer.uint32(88).int32(message.trigger);
        }
        if (message.type !== 0) {
            writer.uint32(96).int32(message.type);
        }
        if (message.rule !== 0) {
            writer.uint32(104).int32(message.rule);
        }
        if (message.collation !== 0) {
            writer.uint32(112).int32(message.collation);
        }
        if (message.policy !== 0) {
            writer.uint32(120).int32(message.policy);
        }
        if (message.cast !== 0) {
            writer.uint32(128).int32(message.cast);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresObjectTransferSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int32();
                    break;
                case 2:
                    message.sequenceOwnedBy = reader.int32();
                    break;
                case 18:
                    message.sequenceSet = reader.int32();
                    break;
                case 3:
                    message.table = reader.int32();
                    break;
                case 4:
                    message.primaryKey = reader.int32();
                    break;
                case 5:
                    message.fkConstraint = reader.int32();
                    break;
                case 6:
                    message.defaultValues = reader.int32();
                    break;
                case 7:
                    message.constraint = reader.int32();
                    break;
                case 8:
                    message.index = reader.int32();
                    break;
                case 9:
                    message.view = reader.int32();
                    break;
                case 17:
                    message.materializedView = reader.int32();
                    break;
                case 10:
                    message.function = reader.int32();
                    break;
                case 11:
                    message.trigger = reader.int32();
                    break;
                case 12:
                    message.type = reader.int32();
                    break;
                case 13:
                    message.rule = reader.int32();
                    break;
                case 14:
                    message.collation = reader.int32();
                    break;
                case 15:
                    message.policy = reader.int32();
                    break;
                case 16:
                    message.cast = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresObjectTransferSettings);
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.sequence)
                : 0;
        message.sequenceOwnedBy =
            object.sequenceOwnedBy !== undefined && object.sequenceOwnedBy !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.sequenceOwnedBy)
                : 0;
        message.sequenceSet =
            object.sequenceSet !== undefined && object.sequenceSet !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.sequenceSet)
                : 0;
        message.table =
            object.table !== undefined && object.table !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.table)
                : 0;
        message.primaryKey =
            object.primaryKey !== undefined && object.primaryKey !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.primaryKey)
                : 0;
        message.fkConstraint =
            object.fkConstraint !== undefined && object.fkConstraint !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.fkConstraint)
                : 0;
        message.defaultValues =
            object.defaultValues !== undefined && object.defaultValues !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.defaultValues)
                : 0;
        message.constraint =
            object.constraint !== undefined && object.constraint !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.constraint)
                : 0;
        message.index =
            object.index !== undefined && object.index !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.index)
                : 0;
        message.view =
            object.view !== undefined && object.view !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.view)
                : 0;
        message.materializedView =
            object.materializedView !== undefined && object.materializedView !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.materializedView)
                : 0;
        message.function =
            object.function !== undefined && object.function !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.function)
                : 0;
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.trigger)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.type)
                : 0;
        message.rule =
            object.rule !== undefined && object.rule !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.rule)
                : 0;
        message.collation =
            object.collation !== undefined && object.collation !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.collation)
                : 0;
        message.policy =
            object.policy !== undefined && object.policy !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.policy)
                : 0;
        message.cast =
            object.cast !== undefined && object.cast !== null
                ? (0, common_1.objectTransferStageFromJSON)(object.cast)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined &&
            (obj.sequence = (0, common_1.objectTransferStageToJSON)(message.sequence));
        message.sequenceOwnedBy !== undefined &&
            (obj.sequenceOwnedBy = (0, common_1.objectTransferStageToJSON)(message.sequenceOwnedBy));
        message.sequenceSet !== undefined &&
            (obj.sequenceSet = (0, common_1.objectTransferStageToJSON)(message.sequenceSet));
        message.table !== undefined &&
            (obj.table = (0, common_1.objectTransferStageToJSON)(message.table));
        message.primaryKey !== undefined &&
            (obj.primaryKey = (0, common_1.objectTransferStageToJSON)(message.primaryKey));
        message.fkConstraint !== undefined &&
            (obj.fkConstraint = (0, common_1.objectTransferStageToJSON)(message.fkConstraint));
        message.defaultValues !== undefined &&
            (obj.defaultValues = (0, common_1.objectTransferStageToJSON)(message.defaultValues));
        message.constraint !== undefined &&
            (obj.constraint = (0, common_1.objectTransferStageToJSON)(message.constraint));
        message.index !== undefined &&
            (obj.index = (0, common_1.objectTransferStageToJSON)(message.index));
        message.view !== undefined &&
            (obj.view = (0, common_1.objectTransferStageToJSON)(message.view));
        message.materializedView !== undefined &&
            (obj.materializedView = (0, common_1.objectTransferStageToJSON)(message.materializedView));
        message.function !== undefined &&
            (obj.function = (0, common_1.objectTransferStageToJSON)(message.function));
        message.trigger !== undefined &&
            (obj.trigger = (0, common_1.objectTransferStageToJSON)(message.trigger));
        message.type !== undefined &&
            (obj.type = (0, common_1.objectTransferStageToJSON)(message.type));
        message.rule !== undefined &&
            (obj.rule = (0, common_1.objectTransferStageToJSON)(message.rule));
        message.collation !== undefined &&
            (obj.collation = (0, common_1.objectTransferStageToJSON)(message.collation));
        message.policy !== undefined &&
            (obj.policy = (0, common_1.objectTransferStageToJSON)(message.policy));
        message.cast !== undefined &&
            (obj.cast = (0, common_1.objectTransferStageToJSON)(message.cast));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = Object.assign({}, basePostgresObjectTransferSettings);
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : 0;
        message.sequenceOwnedBy = (_b = object.sequenceOwnedBy) !== null && _b !== void 0 ? _b : 0;
        message.sequenceSet = (_c = object.sequenceSet) !== null && _c !== void 0 ? _c : 0;
        message.table = (_d = object.table) !== null && _d !== void 0 ? _d : 0;
        message.primaryKey = (_e = object.primaryKey) !== null && _e !== void 0 ? _e : 0;
        message.fkConstraint = (_f = object.fkConstraint) !== null && _f !== void 0 ? _f : 0;
        message.defaultValues = (_g = object.defaultValues) !== null && _g !== void 0 ? _g : 0;
        message.constraint = (_h = object.constraint) !== null && _h !== void 0 ? _h : 0;
        message.index = (_j = object.index) !== null && _j !== void 0 ? _j : 0;
        message.view = (_k = object.view) !== null && _k !== void 0 ? _k : 0;
        message.materializedView = (_l = object.materializedView) !== null && _l !== void 0 ? _l : 0;
        message.function = (_m = object.function) !== null && _m !== void 0 ? _m : 0;
        message.trigger = (_o = object.trigger) !== null && _o !== void 0 ? _o : 0;
        message.type = (_p = object.type) !== null && _p !== void 0 ? _p : 0;
        message.rule = (_q = object.rule) !== null && _q !== void 0 ? _q : 0;
        message.collation = (_r = object.collation) !== null && _r !== void 0 ? _r : 0;
        message.policy = (_s = object.policy) !== null && _s !== void 0 ? _s : 0;
        message.cast = (_t = object.cast) !== null && _t !== void 0 ? _t : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresObjectTransferSettings.$type, exports.PostgresObjectTransferSettings);
const baseOnPremisePostgres = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres",
    hosts: "",
    port: 0,
    subnetId: "",
};
exports.OnPremisePostgres = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremisePostgres",
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
        const message = Object.assign({}, baseOnPremisePostgres);
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
        const message = Object.assign({}, baseOnPremisePostgres);
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
        const message = Object.assign({}, baseOnPremisePostgres);
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
typeRegistry_1.messageTypeRegistry.set(exports.OnPremisePostgres.$type, exports.OnPremisePostgres);
const basePostgresConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection",
};
exports.PostgresConnection = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresConnection",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mdbClusterId !== undefined) {
            writer.uint32(10).string(message.mdbClusterId);
        }
        if (message.onPremise !== undefined) {
            exports.OnPremisePostgres.encode(message.onPremise, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresConnection);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mdbClusterId = reader.string();
                    break;
                case 2:
                    message.onPremise = exports.OnPremisePostgres.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresConnection);
        message.mdbClusterId =
            object.mdbClusterId !== undefined && object.mdbClusterId !== null
                ? String(object.mdbClusterId)
                : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremisePostgres.fromJSON(object.onPremise)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mdbClusterId !== undefined &&
            (obj.mdbClusterId = message.mdbClusterId);
        message.onPremise !== undefined &&
            (obj.onPremise = message.onPremise
                ? exports.OnPremisePostgres.toJSON(message.onPremise)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePostgresConnection);
        message.mdbClusterId = (_a = object.mdbClusterId) !== null && _a !== void 0 ? _a : undefined;
        message.onPremise =
            object.onPremise !== undefined && object.onPremise !== null
                ? exports.OnPremisePostgres.fromPartial(object.onPremise)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresConnection.$type, exports.PostgresConnection);
const basePostgresSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource",
    securityGroups: "",
    database: "",
    user: "",
    includeTables: "",
    excludeTables: "",
    slotByteLagLimit: 0,
    serviceSchema: "",
};
exports.PostgresSource = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(114).string(v);
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
        for (const v of message.includeTables) {
            writer.uint32(42).string(v);
        }
        for (const v of message.excludeTables) {
            writer.uint32(50).string(v);
        }
        if (message.slotByteLagLimit !== 0) {
            writer.uint32(64).int64(message.slotByteLagLimit);
        }
        if (message.serviceSchema !== "") {
            writer.uint32(74).string(message.serviceSchema);
        }
        if (message.objectTransferSettings !== undefined) {
            exports.PostgresObjectTransferSettings.encode(message.objectTransferSettings, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresSource);
        message.securityGroups = [];
        message.includeTables = [];
        message.excludeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.PostgresConnection.decode(reader, reader.uint32());
                    break;
                case 14:
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
                    message.includeTables.push(reader.string());
                    break;
                case 6:
                    message.excludeTables.push(reader.string());
                    break;
                case 8:
                    message.slotByteLagLimit = longToNumber(reader.int64());
                    break;
                case 9:
                    message.serviceSchema = reader.string();
                    break;
                case 13:
                    message.objectTransferSettings =
                        exports.PostgresObjectTransferSettings.decode(reader, reader.uint32());
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
        const message = Object.assign({}, basePostgresSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.PostgresConnection.fromJSON(object.connection)
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
        message.includeTables = ((_b = object.includeTables) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.excludeTables = ((_c = object.excludeTables) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.slotByteLagLimit =
            object.slotByteLagLimit !== undefined && object.slotByteLagLimit !== null
                ? Number(object.slotByteLagLimit)
                : 0;
        message.serviceSchema =
            object.serviceSchema !== undefined && object.serviceSchema !== null
                ? String(object.serviceSchema)
                : "";
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined &&
                object.objectTransferSettings !== null
                ? exports.PostgresObjectTransferSettings.fromJSON(object.objectTransferSettings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? exports.PostgresConnection.toJSON(message.connection)
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
        if (message.includeTables) {
            obj.includeTables = message.includeTables.map((e) => e);
        }
        else {
            obj.includeTables = [];
        }
        if (message.excludeTables) {
            obj.excludeTables = message.excludeTables.map((e) => e);
        }
        else {
            obj.excludeTables = [];
        }
        message.slotByteLagLimit !== undefined &&
            (obj.slotByteLagLimit = Math.round(message.slotByteLagLimit));
        message.serviceSchema !== undefined &&
            (obj.serviceSchema = message.serviceSchema);
        message.objectTransferSettings !== undefined &&
            (obj.objectTransferSettings = message.objectTransferSettings
                ? exports.PostgresObjectTransferSettings.toJSON(message.objectTransferSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, basePostgresSource);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.PostgresConnection.fromPartial(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.user = (_c = object.user) !== null && _c !== void 0 ? _c : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.includeTables = ((_d = object.includeTables) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.excludeTables = ((_e = object.excludeTables) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.slotByteLagLimit = (_f = object.slotByteLagLimit) !== null && _f !== void 0 ? _f : 0;
        message.serviceSchema = (_g = object.serviceSchema) !== null && _g !== void 0 ? _g : "";
        message.objectTransferSettings =
            object.objectTransferSettings !== undefined &&
                object.objectTransferSettings !== null
                ? exports.PostgresObjectTransferSettings.fromPartial(object.objectTransferSettings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresSource.$type, exports.PostgresSource);
const basePostgresTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget",
    securityGroups: "",
    database: "",
    user: "",
    cleanupPolicy: 0,
};
exports.PostgresTarget = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.PostgresTarget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== undefined) {
            exports.PostgresConnection.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.securityGroups) {
            writer.uint32(58).string(v);
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
        if (message.cleanupPolicy !== 0) {
            writer.uint32(40).int32(message.cleanupPolicy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresTarget);
        message.securityGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = exports.PostgresConnection.decode(reader, reader.uint32());
                    break;
                case 7:
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
        const message = Object.assign({}, basePostgresTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.PostgresConnection.fromJSON(object.connection)
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
                ? exports.PostgresConnection.toJSON(message.connection)
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
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = (0, common_1.cleanupPolicyToJSON)(message.cleanupPolicy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, basePostgresTarget);
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? exports.PostgresConnection.fromPartial(object.connection)
                : undefined;
        message.securityGroups = ((_a = object.securityGroups) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.database = (_b = object.database) !== null && _b !== void 0 ? _b : "";
        message.user = (_c = object.user) !== null && _c !== void 0 ? _c : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? common_1.Secret.fromPartial(object.password)
                : undefined;
        message.cleanupPolicy = (_d = object.cleanupPolicy) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresTarget.$type, exports.PostgresTarget);
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
