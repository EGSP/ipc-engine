"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticsearchConfigSet7 = exports.ElasticsearchConfig7 = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.elasticsearch.v1.config";
const baseElasticsearchConfig7 = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7",
    fielddataCacheSize: "",
    reindexRemoteWhitelist: "",
    reindexSslCaPath: "",
};
exports.ElasticsearchConfig7 = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxClauseCount !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxClauseCount }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fielddataCacheSize !== "") {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        if (message.reindexRemoteWhitelist !== "") {
            writer.uint32(50).string(message.reindexRemoteWhitelist);
        }
        if (message.reindexSslCaPath !== "") {
            writer.uint32(58).string(message.reindexSslCaPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseElasticsearchConfig7);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fielddataCacheSize = reader.string();
                    break;
                case 6:
                    message.reindexRemoteWhitelist = reader.string();
                    break;
                case 7:
                    message.reindexSslCaPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseElasticsearchConfig7);
        message.maxClauseCount =
            object.maxClauseCount !== undefined && object.maxClauseCount !== null
                ? Number(object.maxClauseCount)
                : undefined;
        message.fielddataCacheSize =
            object.fielddataCacheSize !== undefined &&
                object.fielddataCacheSize !== null
                ? String(object.fielddataCacheSize)
                : "";
        message.reindexRemoteWhitelist =
            object.reindexRemoteWhitelist !== undefined &&
                object.reindexRemoteWhitelist !== null
                ? String(object.reindexRemoteWhitelist)
                : "";
        message.reindexSslCaPath =
            object.reindexSslCaPath !== undefined && object.reindexSslCaPath !== null
                ? String(object.reindexSslCaPath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxClauseCount !== undefined &&
            (obj.maxClauseCount = message.maxClauseCount);
        message.fielddataCacheSize !== undefined &&
            (obj.fielddataCacheSize = message.fielddataCacheSize);
        message.reindexRemoteWhitelist !== undefined &&
            (obj.reindexRemoteWhitelist = message.reindexRemoteWhitelist);
        message.reindexSslCaPath !== undefined &&
            (obj.reindexSslCaPath = message.reindexSslCaPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseElasticsearchConfig7);
        message.maxClauseCount = (_a = object.maxClauseCount) !== null && _a !== void 0 ? _a : undefined;
        message.fielddataCacheSize = (_b = object.fielddataCacheSize) !== null && _b !== void 0 ? _b : "";
        message.reindexRemoteWhitelist = (_c = object.reindexRemoteWhitelist) !== null && _c !== void 0 ? _c : "";
        message.reindexSslCaPath = (_d = object.reindexSslCaPath) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchConfig7.$type, exports.ElasticsearchConfig7);
const baseElasticsearchConfigSet7 = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7",
};
exports.ElasticsearchConfigSet7 = {
    $type: "yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseElasticsearchConfigSet7);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseElasticsearchConfigSet7);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ElasticsearchConfig7.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ElasticsearchConfig7.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ElasticsearchConfig7.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.ElasticsearchConfig7.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.ElasticsearchConfig7.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.ElasticsearchConfig7.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseElasticsearchConfigSet7);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ElasticsearchConfig7.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ElasticsearchConfig7.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ElasticsearchConfig7.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchConfigSet7.$type, exports.ElasticsearchConfigSet7);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
