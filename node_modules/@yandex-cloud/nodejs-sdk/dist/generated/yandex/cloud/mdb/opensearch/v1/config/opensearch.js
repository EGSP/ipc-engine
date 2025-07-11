"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenSearchConfigSet2 = exports.OpenSearchConfig2 = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1.config";
const baseOpenSearchConfig2 = {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2",
    fielddataCacheSize: "",
    reindexRemoteWhitelist: "",
};
exports.OpenSearchConfig2 = {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfig2",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchConfig2);
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOpenSearchConfig2);
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOpenSearchConfig2);
        message.maxClauseCount = (_a = object.maxClauseCount) !== null && _a !== void 0 ? _a : undefined;
        message.fielddataCacheSize = (_b = object.fielddataCacheSize) !== null && _b !== void 0 ? _b : "";
        message.reindexRemoteWhitelist = (_c = object.reindexRemoteWhitelist) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchConfig2.$type, exports.OpenSearchConfig2);
const baseOpenSearchConfigSet2 = {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2",
};
exports.OpenSearchConfigSet2 = {
    $type: "yandex.cloud.mdb.opensearch.v1.config.OpenSearchConfigSet2",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.OpenSearchConfig2.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.OpenSearchConfig2.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.OpenSearchConfig2.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenSearchConfigSet2);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.OpenSearchConfig2.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOpenSearchConfigSet2);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.OpenSearchConfig2.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.OpenSearchConfig2.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.OpenSearchConfig2.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.OpenSearchConfig2.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.OpenSearchConfig2.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.OpenSearchConfig2.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseOpenSearchConfigSet2);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.OpenSearchConfig2.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.OpenSearchConfig2.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.OpenSearchConfig2.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenSearchConfigSet2.$type, exports.OpenSearchConfigSet2);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
