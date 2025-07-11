"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongosconfigset60 = exports.Mongocfgconfigset60 = exports.Mongodconfigset60 = exports.Mongosconfig60_Network = exports.Mongosconfig60 = exports.Mongocfgconfig60_Network = exports.Mongocfgconfig60_OperationProfiling = exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig = exports.Mongocfgconfig60_Storage_WiredTiger = exports.Mongocfgconfig60_Storage = exports.Mongocfgconfig60 = exports.Mongodconfig60_Network = exports.Mongodconfig60_OperationProfiling = exports.Mongodconfig60_Storage_Journal = exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig = exports.Mongodconfig60_Storage_WiredTiger_EngineConfig = exports.Mongodconfig60_Storage_WiredTiger = exports.Mongodconfig60_Storage = exports.Mongodconfig60 = exports.mongocfgconfig60_OperationProfiling_ModeToJSON = exports.mongocfgconfig60_OperationProfiling_ModeFromJSON = exports.Mongocfgconfig60_OperationProfiling_Mode = exports.mongodconfig60_OperationProfiling_ModeToJSON = exports.mongodconfig60_OperationProfiling_ModeFromJSON = exports.Mongodconfig60_OperationProfiling_Mode = exports.mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON = exports.mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
var Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor;
(function (Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor) {
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["COMPRESSOR_UNSPECIFIED"] = 0] = "COMPRESSOR_UNSPECIFIED";
    /** NONE - No compression. */
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["NONE"] = 1] = "NONE";
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v6.0/reference/glossary/#term-snappy) compression. */
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["SNAPPY"] = 2] = "SNAPPY";
    /** ZLIB - The [zlib](https://docs.mongodb.com/v6.0/reference/glossary/#term-zlib) compression. */
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["ZLIB"] = 3] = "ZLIB";
    /** ZSTD - The [zstd](https://docs.mongodb.com/v6.0/reference/glossary/#term-zstd) compression. */
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["ZSTD"] = 4] = "ZSTD";
    Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor = exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor || (exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor = {}));
function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object) {
    switch (object) {
        case 0:
        case "COMPRESSOR_UNSPECIFIED":
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case "NONE":
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case "SNAPPY":
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case "ZLIB":
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case 4:
        case "ZSTD":
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}
exports.mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON;
function mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object) {
    switch (object) {
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return "COMPRESSOR_UNSPECIFIED";
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return "NONE";
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return "SNAPPY";
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return "ZLIB";
        case Mongodconfig60_Storage_WiredTiger_CollectionConfig_Compressor.ZSTD:
            return "ZSTD";
        default:
            return "UNKNOWN";
    }
}
exports.mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON = mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON;
var Mongodconfig60_OperationProfiling_Mode;
(function (Mongodconfig60_OperationProfiling_Mode) {
    Mongodconfig60_OperationProfiling_Mode[Mongodconfig60_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongodconfig60_OperationProfiling_Mode[Mongodconfig60_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongodconfig60_OperationProfiling_Mode[Mongodconfig60_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongodconfig60_OperationProfiling_Mode[Mongodconfig60_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongodconfig60_OperationProfiling_Mode[Mongodconfig60_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig60_OperationProfiling_Mode = exports.Mongodconfig60_OperationProfiling_Mode || (exports.Mongodconfig60_OperationProfiling_Mode = {}));
function mongodconfig60_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return Mongodconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case "OFF":
            return Mongodconfig60_OperationProfiling_Mode.OFF;
        case 2:
        case "SLOW_OP":
            return Mongodconfig60_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case "ALL":
            return Mongodconfig60_OperationProfiling_Mode.ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongodconfig60_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongodconfig60_OperationProfiling_ModeFromJSON = mongodconfig60_OperationProfiling_ModeFromJSON;
function mongodconfig60_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongodconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case Mongodconfig60_OperationProfiling_Mode.OFF:
            return "OFF";
        case Mongodconfig60_OperationProfiling_Mode.SLOW_OP:
            return "SLOW_OP";
        case Mongodconfig60_OperationProfiling_Mode.ALL:
            return "ALL";
        default:
            return "UNKNOWN";
    }
}
exports.mongodconfig60_OperationProfiling_ModeToJSON = mongodconfig60_OperationProfiling_ModeToJSON;
var Mongocfgconfig60_OperationProfiling_Mode;
(function (Mongocfgconfig60_OperationProfiling_Mode) {
    Mongocfgconfig60_OperationProfiling_Mode[Mongocfgconfig60_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongocfgconfig60_OperationProfiling_Mode[Mongocfgconfig60_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongocfgconfig60_OperationProfiling_Mode[Mongocfgconfig60_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongocfgconfig60_OperationProfiling_Mode[Mongocfgconfig60_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongocfgconfig60_OperationProfiling_Mode[Mongocfgconfig60_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongocfgconfig60_OperationProfiling_Mode = exports.Mongocfgconfig60_OperationProfiling_Mode || (exports.Mongocfgconfig60_OperationProfiling_Mode = {}));
function mongocfgconfig60_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return Mongocfgconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case "OFF":
            return Mongocfgconfig60_OperationProfiling_Mode.OFF;
        case 2:
        case "SLOW_OP":
            return Mongocfgconfig60_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case "ALL":
            return Mongocfgconfig60_OperationProfiling_Mode.ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mongocfgconfig60_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongocfgconfig60_OperationProfiling_ModeFromJSON = mongocfgconfig60_OperationProfiling_ModeFromJSON;
function mongocfgconfig60_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongocfgconfig60_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case Mongocfgconfig60_OperationProfiling_Mode.OFF:
            return "OFF";
        case Mongocfgconfig60_OperationProfiling_Mode.SLOW_OP:
            return "SLOW_OP";
        case Mongocfgconfig60_OperationProfiling_Mode.ALL:
            return "ALL";
        default:
            return "UNKNOWN";
    }
}
exports.mongocfgconfig60_OperationProfiling_ModeToJSON = mongocfgconfig60_OperationProfiling_ModeToJSON;
const baseMongodconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0",
};
exports.Mongodconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongodconfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongodconfig60_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongodconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongodconfig60_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling = exports.Mongodconfig60_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongodconfig60_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig60);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongodconfig60_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongodconfig60_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongodconfig60_Network.fromJSON(object.net)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? exports.Mongodconfig60_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongodconfig60_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongodconfig60_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig60);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongodconfig60_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongodconfig60_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongodconfig60_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60.$type, exports.Mongodconfig60);
const baseMongodconfig60_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage",
};
exports.Mongodconfig60_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongodconfig60_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        if (message.journal !== undefined) {
            exports.Mongodconfig60_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60_Storage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = exports.Mongodconfig60_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.journal = exports.Mongodconfig60_Storage_Journal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig60_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongodconfig60_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? exports.Mongodconfig60_Storage_Journal.fromJSON(object.journal)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? exports.Mongodconfig60_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? exports.Mongodconfig60_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig60_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongodconfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        message.journal =
            object.journal !== undefined && object.journal !== null
                ? exports.Mongodconfig60_Storage_Journal.fromPartial(object.journal)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Storage.$type, exports.Mongodconfig60_Storage);
const baseMongodconfig60_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger",
};
exports.Mongodconfig60_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionConfig =
                        exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        message.collectionConfig =
            object.collectionConfig !== undefined && object.collectionConfig !== null
                ? exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Storage_WiredTiger.$type, exports.Mongodconfig60_Storage_WiredTiger);
const baseMongodconfig60_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig",
};
exports.Mongodconfig60_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.EngineConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_EngineConfig);
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
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_EngineConfig);
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
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb = (_a = object.cacheSizeGb) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Storage_WiredTiger_EngineConfig.$type, exports.Mongodconfig60_Storage_WiredTiger_EngineConfig);
const baseMongodconfig60_Storage_WiredTiger_CollectionConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig",
    blockCompressor: 0,
};
exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.WiredTiger.CollectionConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_CollectionConfig);
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
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_CollectionConfig);
        message.blockCompressor =
            object.blockCompressor !== undefined && object.blockCompressor !== null
                ? mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig60_Storage_WiredTiger_CollectionConfig_CompressorToJSON(message.blockCompressor));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMongodconfig60_Storage_WiredTiger_CollectionConfig);
        message.blockCompressor = (_a = object.blockCompressor) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig.$type, exports.Mongodconfig60_Storage_WiredTiger_CollectionConfig);
const baseMongodconfig60_Storage_Journal = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal",
};
exports.Mongodconfig60_Storage_Journal = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Storage.Journal",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitInterval !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.commitInterval }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfig60_Storage_Journal);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
        const message = Object.assign({}, baseMongodconfig60_Storage_Journal);
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
        const message = Object.assign({}, baseMongodconfig60_Storage_Journal);
        message.commitInterval = (_a = object.commitInterval) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Storage_Journal.$type, exports.Mongodconfig60_Storage_Journal);
const baseMongodconfig60_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling",
    mode: 0,
};
exports.Mongodconfig60_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.OperationProfiling",
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
        const message = Object.assign({}, baseMongodconfig60_OperationProfiling);
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
        const message = Object.assign({}, baseMongodconfig60_OperationProfiling);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongodconfig60_OperationProfiling_ModeFromJSON(object.mode)
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
            (obj.mode = mongodconfig60_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMongodconfig60_OperationProfiling);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.slowOpThreshold = (_b = object.slowOpThreshold) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_OperationProfiling.$type, exports.Mongodconfig60_OperationProfiling);
const baseMongodconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network",
};
exports.Mongodconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig6_0.Network",
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
        const message = Object.assign({}, baseMongodconfig60_Network);
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
        const message = Object.assign({}, baseMongodconfig60_Network);
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
        const message = Object.assign({}, baseMongodconfig60_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig60_Network.$type, exports.Mongodconfig60_Network);
const baseMongocfgconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0",
};
exports.Mongocfgconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongocfgconfig60_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongocfgconfig60_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongocfgconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongocfgconfig60_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongocfgconfig60_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongocfgconfig60_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig60);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongocfgconfig60_Storage.fromJSON(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongocfgconfig60_OperationProfiling.fromJSON(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongocfgconfig60_Network.fromJSON(object.net)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? exports.Mongocfgconfig60_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongocfgconfig60_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongocfgconfig60_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig60);
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Mongocfgconfig60_Storage.fromPartial(object.storage)
                : undefined;
        message.operationProfiling =
            object.operationProfiling !== undefined &&
                object.operationProfiling !== null
                ? exports.Mongocfgconfig60_OperationProfiling.fromPartial(object.operationProfiling)
                : undefined;
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongocfgconfig60_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60.$type, exports.Mongocfgconfig60);
const baseMongocfgconfig60_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage",
};
exports.Mongocfgconfig60_Storage = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongocfgconfig60_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig60_Storage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger = exports.Mongocfgconfig60_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig60_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongocfgconfig60_Storage_WiredTiger.fromJSON(object.wiredTiger)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? exports.Mongocfgconfig60_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig60_Storage);
        message.wiredTiger =
            object.wiredTiger !== undefined && object.wiredTiger !== null
                ? exports.Mongocfgconfig60_Storage_WiredTiger.fromPartial(object.wiredTiger)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60_Storage.$type, exports.Mongocfgconfig60_Storage);
const baseMongocfgconfig60_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger",
};
exports.Mongocfgconfig60_Storage_WiredTiger = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger);
        message.engineConfig =
            object.engineConfig !== undefined && object.engineConfig !== null
                ? exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60_Storage_WiredTiger.$type, exports.Mongocfgconfig60_Storage_WiredTiger);
const baseMongocfgconfig60_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig",
};
exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Storage.WiredTiger.EngineConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger_EngineConfig);
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
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger_EngineConfig);
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
        const message = Object.assign({}, baseMongocfgconfig60_Storage_WiredTiger_EngineConfig);
        message.cacheSizeGb = (_a = object.cacheSizeGb) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig.$type, exports.Mongocfgconfig60_Storage_WiredTiger_EngineConfig);
const baseMongocfgconfig60_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling",
    mode: 0,
};
exports.Mongocfgconfig60_OperationProfiling = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.OperationProfiling",
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
        const message = Object.assign({}, baseMongocfgconfig60_OperationProfiling);
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
        const message = Object.assign({}, baseMongocfgconfig60_OperationProfiling);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? mongocfgconfig60_OperationProfiling_ModeFromJSON(object.mode)
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
            (obj.mode = mongocfgconfig60_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMongocfgconfig60_OperationProfiling);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.slowOpThreshold = (_b = object.slowOpThreshold) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60_OperationProfiling.$type, exports.Mongocfgconfig60_OperationProfiling);
const baseMongocfgconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network",
};
exports.Mongocfgconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig6_0.Network",
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
        const message = Object.assign({}, baseMongocfgconfig60_Network);
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
        const message = Object.assign({}, baseMongocfgconfig60_Network);
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
        const message = Object.assign({}, baseMongocfgconfig60_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig60_Network.$type, exports.Mongocfgconfig60_Network);
const baseMongosconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0",
};
exports.Mongosconfig60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.net !== undefined) {
            exports.Mongosconfig60_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongosconfig60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.net = exports.Mongosconfig60_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongosconfig60);
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongosconfig60_Network.fromJSON(object.net)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongosconfig60_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongosconfig60);
        message.net =
            object.net !== undefined && object.net !== null
                ? exports.Mongosconfig60_Network.fromPartial(object.net)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig60.$type, exports.Mongosconfig60);
const baseMongosconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network",
};
exports.Mongosconfig60_Network = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig6_0.Network",
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
        const message = Object.assign({}, baseMongosconfig60_Network);
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
        const message = Object.assign({}, baseMongosconfig60_Network);
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
        const message = Object.assign({}, baseMongosconfig60_Network);
        message.maxIncomingConnections = (_a = object.maxIncomingConnections) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig60_Network.$type, exports.Mongosconfig60_Network);
const baseMongodconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0",
};
exports.Mongodconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongodconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongodconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongodconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongodconfigset60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongodconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongodconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongodconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongodconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongodconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongodconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongodconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongodconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongodconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongodconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongodconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongodconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongodconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongodconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfigset60.$type, exports.Mongodconfigset60);
const baseMongocfgconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0",
};
exports.Mongocfgconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongocfgconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongocfgconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongocfgconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongocfgconfigset60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongocfgconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongocfgconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongocfgconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongocfgconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongocfgconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongocfgconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongocfgconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongocfgconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongocfgconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongocfgconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongocfgconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongocfgconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfigset60.$type, exports.Mongocfgconfigset60);
const baseMongosconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0",
};
exports.Mongosconfigset60 = {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet6_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongosconfig60.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongosconfig60.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongosconfig60.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMongosconfigset60);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongosconfig60.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongosconfig60.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMongosconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongosconfig60.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongosconfig60.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongosconfig60.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mongosconfig60.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongosconfig60.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongosconfig60.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMongosconfigset60);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mongosconfig60.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mongosconfig60.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mongosconfig60.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfigset60.$type, exports.Mongosconfigset60);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
