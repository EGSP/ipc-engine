"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongosconfigset44Enterprise = exports.Mongocfgconfigset44Enterprise = exports.Mongodconfigset44Enterprise = exports.Mongosconfig44Enterprise_Network = exports.Mongosconfig44Enterprise = exports.Mongocfgconfig44Enterprise_Network = exports.Mongocfgconfig44Enterprise_OperationProfiling = exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig = exports.Mongocfgconfig44Enterprise_Storage_WiredTiger = exports.Mongocfgconfig44Enterprise_Storage = exports.Mongocfgconfig44Enterprise = exports.Mongodconfig44Enterprise_SetParameter = exports.Mongodconfig44Enterprise_AuditLog = exports.Mongodconfig44Enterprise_Security_KMIP = exports.Mongodconfig44Enterprise_Security = exports.Mongodconfig44Enterprise_Network = exports.Mongodconfig44Enterprise_OperationProfiling = exports.Mongodconfig44Enterprise_Storage_Journal = exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig = exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig = exports.Mongodconfig44Enterprise_Storage_WiredTiger = exports.Mongodconfig44Enterprise_Storage = exports.Mongodconfig44Enterprise = exports.mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON = exports.mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON = exports.Mongocfgconfig44Enterprise_OperationProfiling_Mode = exports.mongodconfig44Enterprise_OperationProfiling_ModeToJSON = exports.mongodconfig44Enterprise_OperationProfiling_ModeFromJSON = exports.Mongodconfig44Enterprise_OperationProfiling_Mode = exports.mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON = exports.mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
var Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor;
(function (Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor) {
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["COMPRESSOR_UNSPECIFIED"] = 0] = "COMPRESSOR_UNSPECIFIED";
    /** NONE - No compression. */
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["NONE"] = 1] = "NONE";
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.4/reference/glossary/#term-snappy) compression. */
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["SNAPPY"] = 2] = "SNAPPY";
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.4/reference/glossary/#term-zlib) compression. */
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["ZLIB"] = 3] = "ZLIB";
    /** ZSTD - The [zstd](https://docs.mongodb.com/v4.4/reference/glossary/#term-zstd) compression. */
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["ZSTD"] = 4] = "ZSTD";
    Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor = exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor || (exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor = {}));
function mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object) {
    switch (object) {
        case 0:
        case "COMPRESSOR_UNSPECIFIED":
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case "NONE":
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case "SNAPPY":
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case "ZLIB":
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case "ZSTD":
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}
exports.mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON;
function mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object) {
    switch (object) {
        case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return "COMPRESSOR_UNSPECIFIED";
        case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return "NONE";
        case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return "SNAPPY";
        case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return "ZLIB";
        case Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return "ZSTD";
        default:
            return "UNKNOWN";
    }
}
exports.mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON = mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON;
var Mongodconfig44Enterprise_OperationProfiling_Mode;
(function (Mongodconfig44Enterprise_OperationProfiling_Mode) {
    Mongodconfig44Enterprise_OperationProfiling_Mode[Mongodconfig44Enterprise_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongodconfig44Enterprise_OperationProfiling_Mode[Mongodconfig44Enterprise_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongodconfig44Enterprise_OperationProfiling_Mode[Mongodconfig44Enterprise_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongodconfig44Enterprise_OperationProfiling_Mode[Mongodconfig44Enterprise_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongodconfig44Enterprise_OperationProfiling_Mode[Mongodconfig44Enterprise_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig44Enterprise_OperationProfiling_Mode = exports.Mongodconfig44Enterprise_OperationProfiling_Mode || (exports.Mongodconfig44Enterprise_OperationProfiling_Mode = {}));
function mongodconfig44Enterprise_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return Mongodconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case "OFF":
            return Mongodconfig44Enterprise_OperationProfiling_Mode.OFF;
        case 2:
        case "SLOW_OP":
            return Mongodconfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case "ALL":
            return Mongodconfig44Enterprise_OperationProfiling_Mode.ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongodconfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongodconfig44Enterprise_OperationProfiling_ModeFromJSON = mongodconfig44Enterprise_OperationProfiling_ModeFromJSON;
function mongodconfig44Enterprise_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongodconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case Mongodconfig44Enterprise_OperationProfiling_Mode.OFF:
            return "OFF";
        case Mongodconfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
            return "SLOW_OP";
        case Mongodconfig44Enterprise_OperationProfiling_Mode.ALL:
            return "ALL";
        default:
            return "UNKNOWN";
    }
}
exports.mongodconfig44Enterprise_OperationProfiling_ModeToJSON = mongodconfig44Enterprise_OperationProfiling_ModeToJSON;
var Mongocfgconfig44Enterprise_OperationProfiling_Mode;
(function (Mongocfgconfig44Enterprise_OperationProfiling_Mode) {
    Mongocfgconfig44Enterprise_OperationProfiling_Mode[Mongocfgconfig44Enterprise_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongocfgconfig44Enterprise_OperationProfiling_Mode[Mongocfgconfig44Enterprise_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongocfgconfig44Enterprise_OperationProfiling_Mode[Mongocfgconfig44Enterprise_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongocfgconfig44Enterprise_OperationProfiling_Mode[Mongocfgconfig44Enterprise_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongocfgconfig44Enterprise_OperationProfiling_Mode[Mongocfgconfig44Enterprise_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongocfgconfig44Enterprise_OperationProfiling_Mode = exports.Mongocfgconfig44Enterprise_OperationProfiling_Mode || (exports.Mongocfgconfig44Enterprise_OperationProfiling_Mode = {}));
function mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return Mongocfgconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case "OFF":
            return Mongocfgconfig44Enterprise_OperationProfiling_Mode.OFF;
        case 2:
        case "SLOW_OP":
            return Mongocfgconfig44Enterprise_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case "ALL":
            return Mongocfgconfig44Enterprise_OperationProfiling_Mode.ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongocfgconfig44Enterprise_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON = mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON;
function mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongocfgconfig44Enterprise_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case Mongocfgconfig44Enterprise_OperationProfiling_Mode.OFF:
            return "OFF";
        case Mongocfgconfig44Enterprise_OperationProfiling_Mode.SLOW_OP:
            return "SLOW_OP";
        case Mongocfgconfig44Enterprise_OperationProfiling_Mode.ALL:
            return "ALL";
        default:
            return "UNKNOWN";
    }
}
exports.mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON = mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON;
const baseMongodconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise",
};
exports.Mongodconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongodconfig44Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongodconfig44Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongodconfig44Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        if (message.security !== undefined) {
            exports.Mongodconfig44Enterprise_Security.encode(message.security, writer.uint32(34).fork()).ldelim();
        }
        if (message.auditLog !== undefined) {
            exports.Mongodconfig44Enterprise_AuditLog.encode(message.auditLog, writer.uint32(42).fork()).ldelim();
        }
        if (message.setParameter !== undefined) {
            exports.Mongodconfig44Enterprise_SetParameter.encode(message.setParameter, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongodconfig44Enterprise_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongodconfig44Enterprise_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongodconfig44Enterprise_Network.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.security = exports.Mongodconfig44Enterprise_Security.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.auditLog = exports.Mongodconfig44Enterprise_AuditLog.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.setParameter = exports.Mongodconfig44Enterprise_SetParameter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongodconfig44Enterprise_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongodconfig44Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongodconfig44Enterprise_Network.fromJSON(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? exports.Mongodconfig44Enterprise_Security.fromJSON(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? exports.Mongodconfig44Enterprise_AuditLog.fromJSON(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? exports.Mongodconfig44Enterprise_SetParameter.fromJSON(object.setParameter)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? exports.Mongodconfig44Enterprise_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongodconfig44Enterprise_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongodconfig44Enterprise_Network.toJSON(message.net)
                : undefined);
        message.security !== undefined &&
            (obj.security = message.security
                ? exports.Mongodconfig44Enterprise_Security.toJSON(message.security)
                : undefined);
        message.auditLog !== undefined &&
            (obj.auditLog = message.auditLog
                ? exports.Mongodconfig44Enterprise_AuditLog.toJSON(message.auditLog)
                : undefined);
        message.setParameter !== undefined &&
            (obj.setParameter = message.setParameter
                ? exports.Mongodconfig44Enterprise_SetParameter.toJSON(message.setParameter)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongodconfig44Enterprise_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongodconfig44Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongodconfig44Enterprise_Network.fromPartial(object.net)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? exports.Mongodconfig44Enterprise_Security.fromPartial(object.security)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? exports.Mongodconfig44Enterprise_AuditLog.fromPartial(object.auditLog)
                : undefined;
        message.setParameter =
            object.setParameter !== undefined && object.setParameter !== null
                ? exports.Mongodconfig44Enterprise_SetParameter.fromPartial(object.setParameter)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise.$type, exports.Mongodconfig44Enterprise);
const baseMongodconfig44Enterprise_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage",
};
exports.Mongodconfig44Enterprise_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongodconfig44Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        if (message.journal !== undefined) {
            exports.Mongodconfig44Enterprise_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongodconfig44Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.journal = exports.Mongodconfig44Enterprise_Storage_Journal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? exports.Mongodconfig44Enterprise_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? exports.Mongodconfig44Enterprise_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? exports.Mongodconfig44Enterprise_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Storage.$type, exports.Mongodconfig44Enterprise_Storage);
const baseMongodconfig44Enterprise_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger",
};
exports.Mongodconfig44Enterprise_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionConfig =
                        exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Storage_WiredTiger.$type, exports.Mongodconfig44Enterprise_Storage_WiredTiger);
const baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
};
exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb = (_a = object.cacheSizeGb) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig.$type, exports.Mongodconfig44Enterprise_Storage_WiredTiger_EngineConfig);
const baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
};
exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockCompressor = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig);
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig_CompressorToJSON(message.blockCompressor));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig);
        message.blockCompressor = (_a = object.blockCompressor) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig.$type, exports.Mongodconfig44Enterprise_Storage_WiredTiger_CollectionConfig);
const baseMongodconfig44Enterprise_Storage_Journal = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal",
};
exports.Mongodconfig44Enterprise_Storage_Journal = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Storage.Journal",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitInterval !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.commitInterval }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_Journal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_Journal);
        message.commitInterval =
            object.commitInterval !== undefined && object.commitInterval !== null
                ? Number(object.commitInterval)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.commitInterval !== undefined &&
            (obj.commitInterval = message.commitInterval);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Storage_Journal);
        message.commitInterval = (_a = object.commitInterval) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Storage_Journal.$type, exports.Mongodconfig44Enterprise_Storage_Journal);
const baseMongodconfig44Enterprise_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling",
    mode: 0,
};
exports.Mongodconfig44Enterprise_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.OperationProfiling",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.slowOpThreshold,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_OperationProfiling);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_OperationProfiling);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig44Enterprise_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig44Enterprise_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMongodconfig44Enterprise_OperationProfiling);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.slowOpThreshold = (_b = object.slowOpThreshold) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_OperationProfiling.$type, exports.Mongodconfig44Enterprise_OperationProfiling);
const baseMongodconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network",
};
exports.Mongodconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Network",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Network);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Network);
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined &&
                object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Network.$type, exports.Mongodconfig44Enterprise_Network);
const baseMongodconfig44Enterprise_Security = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security",
};
exports.Mongodconfig44Enterprise_Security = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enableEncryption !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableEncryption,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.kmip !== undefined) {
            exports.Mongodconfig44Enterprise_Security_KMIP.encode(message.kmip, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableEncryption = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.kmip = exports.Mongodconfig44Enterprise_Security_KMIP.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security);
        message.enableEncryption =
            object.enableEncryption !== undefined && object.enableEncryption !== null
                ? Boolean(object.enableEncryption)
                : undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? exports.Mongodconfig44Enterprise_Security_KMIP.fromJSON(object.kmip)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.enableEncryption !== undefined &&
            (obj.enableEncryption = message.enableEncryption);
        message.kmip !== undefined &&
            (obj.kmip = message.kmip
                ? exports.Mongodconfig44Enterprise_Security_KMIP.toJSON(message.kmip)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security);
        message.enableEncryption = (_a = object.enableEncryption) !== null && _a !== void 0 ? _a : undefined;
        message.kmip =
            object.kmip !== undefined && object.kmip !== null
                ? exports.Mongodconfig44Enterprise_Security_KMIP.fromPartial(object.kmip)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Security.$type, exports.Mongodconfig44Enterprise_Security);
const baseMongodconfig44Enterprise_Security_KMIP = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP",
    serverName: "",
    serverCa: "",
    clientCertificate: "",
    keyIdentifier: "",
};
exports.Mongodconfig44Enterprise_Security_KMIP = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.Security.KMIP",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serverName !== "") {
            writer.uint32(10).string(message.serverName);
        }
        if (message.port !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.port }, writer.uint32(18).fork()).ldelim();
        }
        if (message.serverCa !== "") {
            writer.uint32(26).string(message.serverCa);
        }
        if (message.clientCertificate !== "") {
            writer.uint32(34).string(message.clientCertificate);
        }
        if (message.keyIdentifier !== "") {
            writer.uint32(42).string(message.keyIdentifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security_KMIP);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serverName = reader.string();
                    break;
                case 2:
                    message.port = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.serverCa = reader.string();
                    break;
                case 4:
                    message.clientCertificate = reader.string();
                    break;
                case 5:
                    message.keyIdentifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security_KMIP);
        message.serverName =
            object.serverName !== undefined && object.serverName !== null
                ? String(object.serverName)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : undefined;
        message.serverCa =
            object.serverCa !== undefined && object.serverCa !== null
                ? String(object.serverCa)
                : "";
        message.clientCertificate =
            object.clientCertificate !== undefined &&
                object.clientCertificate !== null
                ? String(object.clientCertificate)
                : "";
        message.keyIdentifier =
            object.keyIdentifier !== undefined && object.keyIdentifier !== null
                ? String(object.keyIdentifier)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serverName !== undefined && (obj.serverName = message.serverName);
        message.port !== undefined && (obj.port = message.port);
        message.serverCa !== undefined && (obj.serverCa = message.serverCa);
        message.clientCertificate !== undefined &&
            (obj.clientCertificate = message.clientCertificate);
        message.keyIdentifier !== undefined &&
            (obj.keyIdentifier = message.keyIdentifier);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMongodconfig44Enterprise_Security_KMIP);
        message.serverName = (_a = object.serverName) !== null && _a !== void 0 ? _a : "";
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : undefined;
        message.serverCa = (_c = object.serverCa) !== null && _c !== void 0 ? _c : "";
        message.clientCertificate = (_d = object.clientCertificate) !== null && _d !== void 0 ? _d : "";
        message.keyIdentifier = (_e = object.keyIdentifier) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_Security_KMIP.$type, exports.Mongodconfig44Enterprise_Security_KMIP);
const baseMongodconfig44Enterprise_AuditLog = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog",
    filter: "",
};
exports.Mongodconfig44Enterprise_AuditLog = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.AuditLog",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filter !== "") {
            writer.uint32(10).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_AuditLog);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = Object.assign({}, baseMongodconfig44Enterprise_AuditLog);
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_AuditLog);
        message.filter = (_a = object.filter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_AuditLog.$type, exports.Mongodconfig44Enterprise_AuditLog);
const baseMongodconfig44Enterprise_SetParameter = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter",
};
exports.Mongodconfig44Enterprise_SetParameter = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_4_enterprise.SetParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditAuthorizationSuccess !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.auditAuthorizationSuccess,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig44Enterprise_SetParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditAuthorizationSuccess = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig44Enterprise_SetParameter);
        message.auditAuthorizationSuccess =
            object.auditAuthorizationSuccess !== undefined &&
                object.auditAuthorizationSuccess !== null
                ? Boolean(object.auditAuthorizationSuccess)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.auditAuthorizationSuccess !== undefined &&
            (obj.auditAuthorizationSuccess = message.auditAuthorizationSuccess);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig44Enterprise_SetParameter);
        message.auditAuthorizationSuccess =
            (_a = object.auditAuthorizationSuccess) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig44Enterprise_SetParameter.$type, exports.Mongodconfig44Enterprise_SetParameter);
const baseMongocfgconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise",
};
exports.Mongocfgconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongocfgconfig44Enterprise_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongocfgconfig44Enterprise_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongocfgconfig44Enterprise_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongocfgconfig44Enterprise_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongocfgconfig44Enterprise_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongocfgconfig44Enterprise_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongocfgconfig44Enterprise_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongocfgconfig44Enterprise_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongocfgconfig44Enterprise_Network.fromJSON(object.net)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? exports.Mongocfgconfig44Enterprise_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongocfgconfig44Enterprise_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongocfgconfig44Enterprise_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongocfgconfig44Enterprise_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongocfgconfig44Enterprise_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongocfgconfig44Enterprise_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise.$type, exports.Mongocfgconfig44Enterprise);
const baseMongocfgconfig44Enterprise_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage",
};
exports.Mongocfgconfig44Enterprise_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise_Storage.$type, exports.Mongocfgconfig44Enterprise_Storage);
const baseMongocfgconfig44Enterprise_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger",
};
exports.Mongocfgconfig44Enterprise_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise_Storage_WiredTiger.$type, exports.Mongocfgconfig44Enterprise_Storage_WiredTiger);
const baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
};
exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb =
            object.cacheSizeGb !== undefined && object.cacheSizeGb !== null
                ? Number(object.cacheSizeGb)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb = (_a = object.cacheSizeGb) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig.$type, exports.Mongocfgconfig44Enterprise_Storage_WiredTiger_EngineConfig);
const baseMongocfgconfig44Enterprise_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling",
    mode: 0,
};
exports.Mongocfgconfig44Enterprise_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.OperationProfiling",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.slowOpThreshold,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_OperationProfiling);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_OperationProfiling);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig44Enterprise_OperationProfiling_ModeFromJSON(object.mode)
                : 0;
        message.slowOpThreshold =
            object.slowOpThreshold !== undefined && object.slowOpThreshold !== null
                ? Number(object.slowOpThreshold)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig44Enterprise_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_OperationProfiling);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.slowOpThreshold = (_b = object.slowOpThreshold) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise_OperationProfiling.$type, exports.Mongocfgconfig44Enterprise_OperationProfiling);
const baseMongocfgconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network",
};
exports.Mongocfgconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_4_enterprise.Network",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Network);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Network);
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined &&
                object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongocfgconfig44Enterprise_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig44Enterprise_Network.$type, exports.Mongocfgconfig44Enterprise_Network);
const baseMongosconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise",
};
exports.Mongosconfig44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.net !== undefined) {
            exports.Mongosconfig44Enterprise_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongosconfig44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = exports.Mongosconfig44Enterprise_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongosconfig44Enterprise);
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongosconfig44Enterprise_Network.fromJSON(object.net)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongosconfig44Enterprise_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongosconfig44Enterprise);
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongosconfig44Enterprise_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig44Enterprise.$type, exports.Mongosconfig44Enterprise);
const baseMongosconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network",
};
exports.Mongosconfig44Enterprise_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_4_enterprise.Network",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongosconfig44Enterprise_Network);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongosconfig44Enterprise_Network);
        message.maxIncomingConnections =
            object.maxIncomingConnections !== undefined &&
                object.maxIncomingConnections !== null
                ? Number(object.maxIncomingConnections)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongosconfig44Enterprise_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig44Enterprise_Network.$type, exports.Mongosconfig44Enterprise_Network);
const baseMongodconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise",
};
exports.Mongodconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongodconfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongodconfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongodconfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfigset44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongodconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongodconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongodconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongodconfig44Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongodconfig44Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongodconfig44Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongodconfig44Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongodconfig44Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongodconfig44Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongodconfig44Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongodconfig44Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongodconfig44Enterprise.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfigset44Enterprise.$type, exports.Mongodconfigset44Enterprise);
const baseMongocfgconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise",
};
exports.Mongocfgconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongocfgconfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongocfgconfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongocfgconfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfigset44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongocfgconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongocfgconfig44Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongocfgconfig44Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongocfgconfig44Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongocfgconfig44Enterprise.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfigset44Enterprise.$type, exports.Mongocfgconfigset44Enterprise);
const baseMongosconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise",
};
exports.Mongosconfigset44Enterprise = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_4_enterprise",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongosconfig44Enterprise.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongosconfig44Enterprise.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongosconfig44Enterprise.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongosconfigset44Enterprise);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongosconfig44Enterprise.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongosconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongosconfig44Enterprise.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongosconfig44Enterprise.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongosconfig44Enterprise.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongosconfig44Enterprise.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongosconfig44Enterprise.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongosconfig44Enterprise.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongosconfigset44Enterprise);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongosconfig44Enterprise.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongosconfig44Enterprise.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongosconfig44Enterprise.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfigset44Enterprise.$type, exports.Mongosconfigset44Enterprise);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
