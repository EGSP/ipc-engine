"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPoolerConfigSet = exports.GreenplumConfigSet6 = exports.Greenplumconfigset622 = exports.Greenplumconfigset621 = exports.Greenplumconfigset619 = exports.Greenplumconfigset617 = exports.Greenplumconfig622 = exports.Greenplumconfig621 = exports.Greenplumconfig619 = exports.Greenplumconfig617 = exports.GreenplumConfig6 = exports.SegmentSubclusterConfig = exports.MasterSubclusterConfig = exports.BackgroundActivitiesConfig = exports.AnalyzeAndVacuum = exports.TableSizes = exports.BackgroundActivityStartAt = exports.ConnectionPoolerConfig = exports.Resources = exports.connectionPoolerConfig_PoolModeToJSON = exports.connectionPoolerConfig_PoolModeFromJSON = exports.ConnectionPoolerConfig_PoolMode = exports.logStatementToJSON = exports.logStatementFromJSON = exports.LogStatement = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.greenplum.v1";
var LogStatement;
(function (LogStatement) {
    LogStatement[LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    /** NONE - None statements are logged. */
    LogStatement[LogStatement["NONE"] = 1] = "NONE";
    /** DDL - Logs all data definition commands like `CREATE`, `ALTER`, and `DROP`. Default value. */
    LogStatement[LogStatement["DDL"] = 2] = "DDL";
    /** MOD - Logs all `DDL` statements, plus `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, and `COPY FROM`. */
    LogStatement[LogStatement["MOD"] = 3] = "MOD";
    /** ALL - Logs all statements. */
    LogStatement[LogStatement["ALL"] = 4] = "ALL";
    LogStatement[LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogStatement = exports.LogStatement || (exports.LogStatement = {}));
function logStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "NONE":
            return LogStatement.NONE;
        case 2:
        case "DDL":
            return LogStatement.DDL;
        case 3:
        case "MOD":
            return LogStatement.MOD;
        case 4:
        case "ALL":
            return LogStatement.ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LogStatement.UNRECOGNIZED;
    }
}
exports.logStatementFromJSON = logStatementFromJSON;
function logStatementToJSON(object) {
    switch (object) {
        case LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case LogStatement.NONE:
            return "NONE";
        case LogStatement.DDL:
            return "DDL";
        case LogStatement.MOD:
            return "MOD";
        case LogStatement.ALL:
            return "ALL";
        default:
            return "UNKNOWN";
    }
}
exports.logStatementToJSON = logStatementToJSON;
var ConnectionPoolerConfig_PoolMode;
(function (ConnectionPoolerConfig_PoolMode) {
    ConnectionPoolerConfig_PoolMode[ConnectionPoolerConfig_PoolMode["POOL_MODE_UNSPECIFIED"] = 0] = "POOL_MODE_UNSPECIFIED";
    /** SESSION - Assign server connection to a client until it disconnects. Default value. */
    ConnectionPoolerConfig_PoolMode[ConnectionPoolerConfig_PoolMode["SESSION"] = 1] = "SESSION";
    /** TRANSACTION - Assign server connection to a client for a transaction processing. */
    ConnectionPoolerConfig_PoolMode[ConnectionPoolerConfig_PoolMode["TRANSACTION"] = 2] = "TRANSACTION";
    ConnectionPoolerConfig_PoolMode[ConnectionPoolerConfig_PoolMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ConnectionPoolerConfig_PoolMode = exports.ConnectionPoolerConfig_PoolMode || (exports.ConnectionPoolerConfig_PoolMode = {}));
function connectionPoolerConfig_PoolModeFromJSON(object) {
    switch (object) {
        case 0:
        case "POOL_MODE_UNSPECIFIED":
            return ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED;
        case 1:
        case "SESSION":
            return ConnectionPoolerConfig_PoolMode.SESSION;
        case 2:
        case "TRANSACTION":
            return ConnectionPoolerConfig_PoolMode.TRANSACTION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ConnectionPoolerConfig_PoolMode.UNRECOGNIZED;
    }
}
exports.connectionPoolerConfig_PoolModeFromJSON = connectionPoolerConfig_PoolModeFromJSON;
function connectionPoolerConfig_PoolModeToJSON(object) {
    switch (object) {
        case ConnectionPoolerConfig_PoolMode.POOL_MODE_UNSPECIFIED:
            return "POOL_MODE_UNSPECIFIED";
        case ConnectionPoolerConfig_PoolMode.SESSION:
            return "SESSION";
        case ConnectionPoolerConfig_PoolMode.TRANSACTION:
            return "TRANSACTION";
        default:
            return "UNKNOWN";
    }
}
exports.connectionPoolerConfig_PoolModeToJSON = connectionPoolerConfig_PoolModeToJSON;
const baseResources = {
    $type: "yandex.cloud.mdb.greenplum.v1.Resources",
    resourcePresetId: "",
    diskSize: 0,
    diskTypeId: "",
};
exports.Resources = {
    $type: "yandex.cloud.mdb.greenplum.v1.Resources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== "") {
            writer.uint32(26).string(message.diskTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResources);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.diskSize =
            object.diskSize !== undefined && object.diskSize !== null
                ? Number(object.diskSize)
                : 0;
        message.diskTypeId =
            object.diskTypeId !== undefined && object.diskTypeId !== null
                ? String(object.diskTypeId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined &&
            (obj.diskSize = Math.round(message.diskSize));
        message.diskTypeId !== undefined && (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseResources);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        message.diskSize = (_b = object.diskSize) !== null && _b !== void 0 ? _b : 0;
        message.diskTypeId = (_c = object.diskTypeId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseConnectionPoolerConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig",
    mode: 0,
};
exports.ConnectionPoolerConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.size !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.size }, writer.uint32(18).fork()).ldelim();
        }
        if (message.clientIdleTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.clientIdleTimeout,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionPoolerConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.size = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.clientIdleTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionPoolerConfig);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? connectionPoolerConfig_PoolModeFromJSON(object.mode)
                : 0;
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : undefined;
        message.clientIdleTimeout =
            object.clientIdleTimeout !== undefined &&
                object.clientIdleTimeout !== null
                ? Number(object.clientIdleTimeout)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = connectionPoolerConfig_PoolModeToJSON(message.mode));
        message.size !== undefined && (obj.size = message.size);
        message.clientIdleTimeout !== undefined &&
            (obj.clientIdleTimeout = message.clientIdleTimeout);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseConnectionPoolerConfig);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.size = (_b = object.size) !== null && _b !== void 0 ? _b : undefined;
        message.clientIdleTimeout = (_c = object.clientIdleTimeout) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionPoolerConfig.$type, exports.ConnectionPoolerConfig);
const baseBackgroundActivityStartAt = {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt",
    hours: 0,
    minutes: 0,
};
exports.BackgroundActivityStartAt = {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivityStartAt",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hours !== 0) {
            writer.uint32(8).int64(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(16).int64(message.minutes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackgroundActivityStartAt);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hours = longToNumber(reader.int64());
                    break;
                case 2:
                    message.minutes = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackgroundActivityStartAt);
        message.hours =
            object.hours !== undefined && object.hours !== null
                ? Number(object.hours)
                : 0;
        message.minutes =
            object.minutes !== undefined && object.minutes !== null
                ? Number(object.minutes)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hours !== undefined && (obj.hours = Math.round(message.hours));
        message.minutes !== undefined &&
            (obj.minutes = Math.round(message.minutes));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBackgroundActivityStartAt);
        message.hours = (_a = object.hours) !== null && _a !== void 0 ? _a : 0;
        message.minutes = (_b = object.minutes) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackgroundActivityStartAt.$type, exports.BackgroundActivityStartAt);
const baseTableSizes = {
    $type: "yandex.cloud.mdb.greenplum.v1.TableSizes",
};
exports.TableSizes = {
    $type: "yandex.cloud.mdb.greenplum.v1.TableSizes",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.starts) {
            exports.BackgroundActivityStartAt.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTableSizes);
        message.starts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.starts.push(exports.BackgroundActivityStartAt.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTableSizes);
        message.starts = ((_a = object.starts) !== null && _a !== void 0 ? _a : []).map((e) => exports.BackgroundActivityStartAt.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.starts) {
            obj.starts = message.starts.map((e) => e ? exports.BackgroundActivityStartAt.toJSON(e) : undefined);
        }
        else {
            obj.starts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTableSizes);
        message.starts =
            ((_a = object.starts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BackgroundActivityStartAt.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TableSizes.$type, exports.TableSizes);
const baseAnalyzeAndVacuum = {
    $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum",
};
exports.AnalyzeAndVacuum = {
    $type: "yandex.cloud.mdb.greenplum.v1.AnalyzeAndVacuum",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined) {
            exports.BackgroundActivityStartAt.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.analyzeTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.analyzeTimeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.vacuumTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.vacuumTimeout }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnalyzeAndVacuum);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = exports.BackgroundActivityStartAt.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.analyzeTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.vacuumTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAnalyzeAndVacuum);
        message.start =
            object.start !== undefined && object.start !== null
                ? exports.BackgroundActivityStartAt.fromJSON(object.start)
                : undefined;
        message.analyzeTimeout =
            object.analyzeTimeout !== undefined && object.analyzeTimeout !== null
                ? Number(object.analyzeTimeout)
                : undefined;
        message.vacuumTimeout =
            object.vacuumTimeout !== undefined && object.vacuumTimeout !== null
                ? Number(object.vacuumTimeout)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined &&
            (obj.start = message.start
                ? exports.BackgroundActivityStartAt.toJSON(message.start)
                : undefined);
        message.analyzeTimeout !== undefined &&
            (obj.analyzeTimeout = message.analyzeTimeout);
        message.vacuumTimeout !== undefined &&
            (obj.vacuumTimeout = message.vacuumTimeout);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAnalyzeAndVacuum);
        message.start =
            object.start !== undefined && object.start !== null
                ? exports.BackgroundActivityStartAt.fromPartial(object.start)
                : undefined;
        message.analyzeTimeout = (_a = object.analyzeTimeout) !== null && _a !== void 0 ? _a : undefined;
        message.vacuumTimeout = (_b = object.vacuumTimeout) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AnalyzeAndVacuum.$type, exports.AnalyzeAndVacuum);
const baseBackgroundActivitiesConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig",
};
exports.BackgroundActivitiesConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.BackgroundActivitiesConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tableSizes !== undefined) {
            exports.TableSizes.encode(message.tableSizes, writer.uint32(10).fork()).ldelim();
        }
        if (message.analyzeAndVacuum !== undefined) {
            exports.AnalyzeAndVacuum.encode(message.analyzeAndVacuum, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBackgroundActivitiesConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tableSizes = exports.TableSizes.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.analyzeAndVacuum = exports.AnalyzeAndVacuum.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBackgroundActivitiesConfig);
        message.tableSizes =
            object.tableSizes !== undefined && object.tableSizes !== null
                ? exports.TableSizes.fromJSON(object.tableSizes)
                : undefined;
        message.analyzeAndVacuum =
            object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
                ? exports.AnalyzeAndVacuum.fromJSON(object.analyzeAndVacuum)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tableSizes !== undefined &&
            (obj.tableSizes = message.tableSizes
                ? exports.TableSizes.toJSON(message.tableSizes)
                : undefined);
        message.analyzeAndVacuum !== undefined &&
            (obj.analyzeAndVacuum = message.analyzeAndVacuum
                ? exports.AnalyzeAndVacuum.toJSON(message.analyzeAndVacuum)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBackgroundActivitiesConfig);
        message.tableSizes =
            object.tableSizes !== undefined && object.tableSizes !== null
                ? exports.TableSizes.fromPartial(object.tableSizes)
                : undefined;
        message.analyzeAndVacuum =
            object.analyzeAndVacuum !== undefined && object.analyzeAndVacuum !== null
                ? exports.AnalyzeAndVacuum.fromPartial(object.analyzeAndVacuum)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BackgroundActivitiesConfig.$type, exports.BackgroundActivitiesConfig);
const baseMasterSubclusterConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig",
};
exports.MasterSubclusterConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMasterSubclusterConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMasterSubclusterConfig);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMasterSubclusterConfig);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterSubclusterConfig.$type, exports.MasterSubclusterConfig);
const baseSegmentSubclusterConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig",
};
exports.SegmentSubclusterConfig = {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSegmentSubclusterConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSegmentSubclusterConfig);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSegmentSubclusterConfig);
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SegmentSubclusterConfig.$type, exports.SegmentSubclusterConfig);
const baseGreenplumConfig6 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6",
    logStatement: 0,
};
exports.GreenplumConfig6 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerSegment,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerQuery,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitFilesPerQuery,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpWorkfileCompression,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStatementMem,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        if (message.gpAddColumnInheritsTableSetting !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpAddColumnInheritsTableSetting,
            }, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumConfig6);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32();
                    break;
                case 10:
                    message.gpAddColumnInheritsTableSetting = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumConfig6);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
                object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined &&
                object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
                object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined &&
                object.gpWorkfileCompression !== null
                ? Boolean(object.gpWorkfileCompression)
                : undefined;
        message.maxStatementMem =
            object.maxStatementMem !== undefined && object.maxStatementMem !== null
                ? Number(object.maxStatementMem)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? logStatementFromJSON(object.logStatement)
                : 0;
        message.gpAddColumnInheritsTableSetting =
            object.gpAddColumnInheritsTableSetting !== undefined &&
                object.gpAddColumnInheritsTableSetting !== null
                ? Boolean(object.gpAddColumnInheritsTableSetting)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.gpWorkfileLimitPerSegment !== undefined &&
            (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
        message.gpWorkfileLimitPerQuery !== undefined &&
            (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
        message.gpWorkfileLimitFilesPerQuery !== undefined &&
            (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.gpWorkfileCompression !== undefined &&
            (obj.gpWorkfileCompression = message.gpWorkfileCompression);
        message.maxStatementMem !== undefined &&
            (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        message.gpAddColumnInheritsTableSetting !== undefined &&
            (obj.gpAddColumnInheritsTableSetting =
                message.gpAddColumnInheritsTableSetting);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseGreenplumConfig6);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.maxSlotWalKeepSize = (_b = object.maxSlotWalKeepSize) !== null && _b !== void 0 ? _b : undefined;
        message.gpWorkfileLimitPerSegment =
            (_c = object.gpWorkfileLimitPerSegment) !== null && _c !== void 0 ? _c : undefined;
        message.gpWorkfileLimitPerQuery =
            (_d = object.gpWorkfileLimitPerQuery) !== null && _d !== void 0 ? _d : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            (_e = object.gpWorkfileLimitFilesPerQuery) !== null && _e !== void 0 ? _e : undefined;
        message.maxPreparedTransactions =
            (_f = object.maxPreparedTransactions) !== null && _f !== void 0 ? _f : undefined;
        message.gpWorkfileCompression = (_g = object.gpWorkfileCompression) !== null && _g !== void 0 ? _g : undefined;
        message.maxStatementMem = (_h = object.maxStatementMem) !== null && _h !== void 0 ? _h : undefined;
        message.logStatement = (_j = object.logStatement) !== null && _j !== void 0 ? _j : 0;
        message.gpAddColumnInheritsTableSetting =
            (_k = object.gpAddColumnInheritsTableSetting) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumConfig6.$type, exports.GreenplumConfig6);
const baseGreenplumconfig617 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17",
};
exports.Greenplumconfig617 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_17",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerSegment,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerQuery,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitFilesPerQuery,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpWorkfileCompression,
            }, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfig617);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfig617);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
                object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined &&
                object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
                object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined &&
                object.gpWorkfileCompression !== null
                ? Boolean(object.gpWorkfileCompression)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.gpWorkfileLimitPerSegment !== undefined &&
            (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
        message.gpWorkfileLimitPerQuery !== undefined &&
            (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
        message.gpWorkfileLimitFilesPerQuery !== undefined &&
            (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.gpWorkfileCompression !== undefined &&
            (obj.gpWorkfileCompression = message.gpWorkfileCompression);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseGreenplumconfig617);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.maxSlotWalKeepSize = (_b = object.maxSlotWalKeepSize) !== null && _b !== void 0 ? _b : undefined;
        message.gpWorkfileLimitPerSegment =
            (_c = object.gpWorkfileLimitPerSegment) !== null && _c !== void 0 ? _c : undefined;
        message.gpWorkfileLimitPerQuery =
            (_d = object.gpWorkfileLimitPerQuery) !== null && _d !== void 0 ? _d : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            (_e = object.gpWorkfileLimitFilesPerQuery) !== null && _e !== void 0 ? _e : undefined;
        message.maxPreparedTransactions =
            (_f = object.maxPreparedTransactions) !== null && _f !== void 0 ? _f : undefined;
        message.gpWorkfileCompression = (_g = object.gpWorkfileCompression) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfig617.$type, exports.Greenplumconfig617);
const baseGreenplumconfig619 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19",
    logStatement: 0,
};
exports.Greenplumconfig619 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_19",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerSegment,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerQuery,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitFilesPerQuery,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpWorkfileCompression,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStatementMem,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfig619);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfig619);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
                object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined &&
                object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
                object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined &&
                object.gpWorkfileCompression !== null
                ? Boolean(object.gpWorkfileCompression)
                : undefined;
        message.maxStatementMem =
            object.maxStatementMem !== undefined && object.maxStatementMem !== null
                ? Number(object.maxStatementMem)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? logStatementFromJSON(object.logStatement)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.gpWorkfileLimitPerSegment !== undefined &&
            (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
        message.gpWorkfileLimitPerQuery !== undefined &&
            (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
        message.gpWorkfileLimitFilesPerQuery !== undefined &&
            (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.gpWorkfileCompression !== undefined &&
            (obj.gpWorkfileCompression = message.gpWorkfileCompression);
        message.maxStatementMem !== undefined &&
            (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseGreenplumconfig619);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.maxSlotWalKeepSize = (_b = object.maxSlotWalKeepSize) !== null && _b !== void 0 ? _b : undefined;
        message.gpWorkfileLimitPerSegment =
            (_c = object.gpWorkfileLimitPerSegment) !== null && _c !== void 0 ? _c : undefined;
        message.gpWorkfileLimitPerQuery =
            (_d = object.gpWorkfileLimitPerQuery) !== null && _d !== void 0 ? _d : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            (_e = object.gpWorkfileLimitFilesPerQuery) !== null && _e !== void 0 ? _e : undefined;
        message.maxPreparedTransactions =
            (_f = object.maxPreparedTransactions) !== null && _f !== void 0 ? _f : undefined;
        message.gpWorkfileCompression = (_g = object.gpWorkfileCompression) !== null && _g !== void 0 ? _g : undefined;
        message.maxStatementMem = (_h = object.maxStatementMem) !== null && _h !== void 0 ? _h : undefined;
        message.logStatement = (_j = object.logStatement) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfig619.$type, exports.Greenplumconfig619);
const baseGreenplumconfig621 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21",
    logStatement: 0,
};
exports.Greenplumconfig621 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_21",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerSegment,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerQuery,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitFilesPerQuery,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpWorkfileCompression,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStatementMem,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        if (message.gpAddColumnInheritsTableSetting !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpAddColumnInheritsTableSetting,
            }, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfig621);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32();
                    break;
                case 10:
                    message.gpAddColumnInheritsTableSetting = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfig621);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
                object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined &&
                object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
                object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined &&
                object.gpWorkfileCompression !== null
                ? Boolean(object.gpWorkfileCompression)
                : undefined;
        message.maxStatementMem =
            object.maxStatementMem !== undefined && object.maxStatementMem !== null
                ? Number(object.maxStatementMem)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? logStatementFromJSON(object.logStatement)
                : 0;
        message.gpAddColumnInheritsTableSetting =
            object.gpAddColumnInheritsTableSetting !== undefined &&
                object.gpAddColumnInheritsTableSetting !== null
                ? Boolean(object.gpAddColumnInheritsTableSetting)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.gpWorkfileLimitPerSegment !== undefined &&
            (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
        message.gpWorkfileLimitPerQuery !== undefined &&
            (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
        message.gpWorkfileLimitFilesPerQuery !== undefined &&
            (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.gpWorkfileCompression !== undefined &&
            (obj.gpWorkfileCompression = message.gpWorkfileCompression);
        message.maxStatementMem !== undefined &&
            (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        message.gpAddColumnInheritsTableSetting !== undefined &&
            (obj.gpAddColumnInheritsTableSetting =
                message.gpAddColumnInheritsTableSetting);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseGreenplumconfig621);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.maxSlotWalKeepSize = (_b = object.maxSlotWalKeepSize) !== null && _b !== void 0 ? _b : undefined;
        message.gpWorkfileLimitPerSegment =
            (_c = object.gpWorkfileLimitPerSegment) !== null && _c !== void 0 ? _c : undefined;
        message.gpWorkfileLimitPerQuery =
            (_d = object.gpWorkfileLimitPerQuery) !== null && _d !== void 0 ? _d : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            (_e = object.gpWorkfileLimitFilesPerQuery) !== null && _e !== void 0 ? _e : undefined;
        message.maxPreparedTransactions =
            (_f = object.maxPreparedTransactions) !== null && _f !== void 0 ? _f : undefined;
        message.gpWorkfileCompression = (_g = object.gpWorkfileCompression) !== null && _g !== void 0 ? _g : undefined;
        message.maxStatementMem = (_h = object.maxStatementMem) !== null && _h !== void 0 ? _h : undefined;
        message.logStatement = (_j = object.logStatement) !== null && _j !== void 0 ? _j : 0;
        message.gpAddColumnInheritsTableSetting =
            (_k = object.gpAddColumnInheritsTableSetting) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfig621.$type, exports.Greenplumconfig621);
const baseGreenplumconfig622 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22",
    logStatement: 0,
};
exports.Greenplumconfig622 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfig6_22",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerSegment !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerSegment,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.gpWorkfileLimitPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitPerQuery,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.gpWorkfileLimitFilesPerQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.gpWorkfileLimitFilesPerQuery,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.gpWorkfileCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpWorkfileCompression,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxStatementMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStatementMem,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(72).int32(message.logStatement);
        }
        if (message.gpAddColumnInheritsTableSetting !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.gpAddColumnInheritsTableSetting,
            }, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfig622);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.gpWorkfileLimitPerSegment = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.gpWorkfileLimitPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.gpWorkfileLimitFilesPerQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.gpWorkfileCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxStatementMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.logStatement = reader.int32();
                    break;
                case 10:
                    message.gpAddColumnInheritsTableSetting = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfig622);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.gpWorkfileLimitPerSegment =
            object.gpWorkfileLimitPerSegment !== undefined &&
                object.gpWorkfileLimitPerSegment !== null
                ? Number(object.gpWorkfileLimitPerSegment)
                : undefined;
        message.gpWorkfileLimitPerQuery =
            object.gpWorkfileLimitPerQuery !== undefined &&
                object.gpWorkfileLimitPerQuery !== null
                ? Number(object.gpWorkfileLimitPerQuery)
                : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            object.gpWorkfileLimitFilesPerQuery !== undefined &&
                object.gpWorkfileLimitFilesPerQuery !== null
                ? Number(object.gpWorkfileLimitFilesPerQuery)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.gpWorkfileCompression =
            object.gpWorkfileCompression !== undefined &&
                object.gpWorkfileCompression !== null
                ? Boolean(object.gpWorkfileCompression)
                : undefined;
        message.maxStatementMem =
            object.maxStatementMem !== undefined && object.maxStatementMem !== null
                ? Number(object.maxStatementMem)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? logStatementFromJSON(object.logStatement)
                : 0;
        message.gpAddColumnInheritsTableSetting =
            object.gpAddColumnInheritsTableSetting !== undefined &&
                object.gpAddColumnInheritsTableSetting !== null
                ? Boolean(object.gpAddColumnInheritsTableSetting)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.gpWorkfileLimitPerSegment !== undefined &&
            (obj.gpWorkfileLimitPerSegment = message.gpWorkfileLimitPerSegment);
        message.gpWorkfileLimitPerQuery !== undefined &&
            (obj.gpWorkfileLimitPerQuery = message.gpWorkfileLimitPerQuery);
        message.gpWorkfileLimitFilesPerQuery !== undefined &&
            (obj.gpWorkfileLimitFilesPerQuery = message.gpWorkfileLimitFilesPerQuery);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.gpWorkfileCompression !== undefined &&
            (obj.gpWorkfileCompression = message.gpWorkfileCompression);
        message.maxStatementMem !== undefined &&
            (obj.maxStatementMem = message.maxStatementMem);
        message.logStatement !== undefined &&
            (obj.logStatement = logStatementToJSON(message.logStatement));
        message.gpAddColumnInheritsTableSetting !== undefined &&
            (obj.gpAddColumnInheritsTableSetting =
                message.gpAddColumnInheritsTableSetting);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseGreenplumconfig622);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.maxSlotWalKeepSize = (_b = object.maxSlotWalKeepSize) !== null && _b !== void 0 ? _b : undefined;
        message.gpWorkfileLimitPerSegment =
            (_c = object.gpWorkfileLimitPerSegment) !== null && _c !== void 0 ? _c : undefined;
        message.gpWorkfileLimitPerQuery =
            (_d = object.gpWorkfileLimitPerQuery) !== null && _d !== void 0 ? _d : undefined;
        message.gpWorkfileLimitFilesPerQuery =
            (_e = object.gpWorkfileLimitFilesPerQuery) !== null && _e !== void 0 ? _e : undefined;
        message.maxPreparedTransactions =
            (_f = object.maxPreparedTransactions) !== null && _f !== void 0 ? _f : undefined;
        message.gpWorkfileCompression = (_g = object.gpWorkfileCompression) !== null && _g !== void 0 ? _g : undefined;
        message.maxStatementMem = (_h = object.maxStatementMem) !== null && _h !== void 0 ? _h : undefined;
        message.logStatement = (_j = object.logStatement) !== null && _j !== void 0 ? _j : 0;
        message.gpAddColumnInheritsTableSetting =
            (_k = object.gpAddColumnInheritsTableSetting) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfig622.$type, exports.Greenplumconfig622);
const baseGreenplumconfigset617 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17",
};
exports.Greenplumconfigset617 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_17",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Greenplumconfig617.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Greenplumconfig617.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Greenplumconfig617.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfigset617);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Greenplumconfig617.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Greenplumconfig617.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Greenplumconfig617.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfigset617);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig617.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig617.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig617.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Greenplumconfig617.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Greenplumconfig617.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Greenplumconfig617.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGreenplumconfigset617);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig617.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig617.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig617.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfigset617.$type, exports.Greenplumconfigset617);
const baseGreenplumconfigset619 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19",
};
exports.Greenplumconfigset619 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_19",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Greenplumconfig619.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Greenplumconfig619.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Greenplumconfig619.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfigset619);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Greenplumconfig619.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Greenplumconfig619.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Greenplumconfig619.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfigset619);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig619.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig619.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig619.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Greenplumconfig619.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Greenplumconfig619.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Greenplumconfig619.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGreenplumconfigset619);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig619.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig619.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig619.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfigset619.$type, exports.Greenplumconfigset619);
const baseGreenplumconfigset621 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21",
};
exports.Greenplumconfigset621 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_21",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Greenplumconfig621.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Greenplumconfig621.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Greenplumconfig621.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfigset621);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Greenplumconfig621.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Greenplumconfig621.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Greenplumconfig621.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfigset621);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig621.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig621.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig621.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Greenplumconfig621.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Greenplumconfig621.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Greenplumconfig621.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGreenplumconfigset621);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig621.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig621.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig621.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfigset621.$type, exports.Greenplumconfigset621);
const baseGreenplumconfigset622 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22",
};
exports.Greenplumconfigset622 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6_22",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Greenplumconfig622.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Greenplumconfig622.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Greenplumconfig622.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumconfigset622);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Greenplumconfig622.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Greenplumconfig622.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Greenplumconfig622.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumconfigset622);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig622.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig622.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig622.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Greenplumconfig622.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Greenplumconfig622.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Greenplumconfig622.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGreenplumconfigset622);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Greenplumconfig622.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Greenplumconfig622.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Greenplumconfig622.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Greenplumconfigset622.$type, exports.Greenplumconfigset622);
const baseGreenplumConfigSet6 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6",
};
exports.GreenplumConfigSet6 = {
    $type: "yandex.cloud.mdb.greenplum.v1.GreenplumConfigSet6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.GreenplumConfig6.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.GreenplumConfig6.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.GreenplumConfig6.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGreenplumConfigSet6);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.GreenplumConfig6.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGreenplumConfigSet6);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.GreenplumConfig6.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.GreenplumConfig6.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.GreenplumConfig6.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.GreenplumConfig6.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.GreenplumConfig6.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.GreenplumConfig6.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseGreenplumConfigSet6);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.GreenplumConfig6.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.GreenplumConfig6.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.GreenplumConfig6.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumConfigSet6.$type, exports.GreenplumConfigSet6);
const baseConnectionPoolerConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet",
};
exports.ConnectionPoolerConfigSet = {
    $type: "yandex.cloud.mdb.greenplum.v1.ConnectionPoolerConfigSet",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.ConnectionPoolerConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.ConnectionPoolerConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.ConnectionPoolerConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectionPoolerConfigSet);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.ConnectionPoolerConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseConnectionPoolerConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ConnectionPoolerConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ConnectionPoolerConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ConnectionPoolerConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.ConnectionPoolerConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.ConnectionPoolerConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.ConnectionPoolerConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseConnectionPoolerConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ConnectionPoolerConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ConnectionPoolerConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ConnectionPoolerConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConnectionPoolerConfigSet.$type, exports.ConnectionPoolerConfigSet);
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
