"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudLoggingParser = exports.AuditTrailsV1Parser = exports.GenericParserCommon = exports.Parser = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const common_1 = require("../../../../../yandex/cloud/datatransfer/v1/endpoint/common");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
const baseParser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Parser",
};
exports.Parser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Parser",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jsonParser !== undefined) {
            exports.GenericParserCommon.encode(message.jsonParser, writer.uint32(10).fork()).ldelim();
        }
        if (message.auditTrailsV1Parser !== undefined) {
            exports.AuditTrailsV1Parser.encode(message.auditTrailsV1Parser, writer.uint32(18).fork()).ldelim();
        }
        if (message.cloudLoggingParser !== undefined) {
            exports.CloudLoggingParser.encode(message.cloudLoggingParser, writer.uint32(34).fork()).ldelim();
        }
        if (message.tskvParser !== undefined) {
            exports.GenericParserCommon.encode(message.tskvParser, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParser);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonParser = exports.GenericParserCommon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auditTrailsV1Parser = exports.AuditTrailsV1Parser.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cloudLoggingParser = exports.CloudLoggingParser.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tskvParser = exports.GenericParserCommon.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParser);
        message.jsonParser =
            object.jsonParser !== undefined && object.jsonParser !== null
                ? exports.GenericParserCommon.fromJSON(object.jsonParser)
                : undefined;
        message.auditTrailsV1Parser =
            object.auditTrailsV1Parser !== undefined &&
                object.auditTrailsV1Parser !== null
                ? exports.AuditTrailsV1Parser.fromJSON(object.auditTrailsV1Parser)
                : undefined;
        message.cloudLoggingParser =
            object.cloudLoggingParser !== undefined &&
                object.cloudLoggingParser !== null
                ? exports.CloudLoggingParser.fromJSON(object.cloudLoggingParser)
                : undefined;
        message.tskvParser =
            object.tskvParser !== undefined && object.tskvParser !== null
                ? exports.GenericParserCommon.fromJSON(object.tskvParser)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jsonParser !== undefined &&
            (obj.jsonParser = message.jsonParser
                ? exports.GenericParserCommon.toJSON(message.jsonParser)
                : undefined);
        message.auditTrailsV1Parser !== undefined &&
            (obj.auditTrailsV1Parser = message.auditTrailsV1Parser
                ? exports.AuditTrailsV1Parser.toJSON(message.auditTrailsV1Parser)
                : undefined);
        message.cloudLoggingParser !== undefined &&
            (obj.cloudLoggingParser = message.cloudLoggingParser
                ? exports.CloudLoggingParser.toJSON(message.cloudLoggingParser)
                : undefined);
        message.tskvParser !== undefined &&
            (obj.tskvParser = message.tskvParser
                ? exports.GenericParserCommon.toJSON(message.tskvParser)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseParser);
        message.jsonParser =
            object.jsonParser !== undefined && object.jsonParser !== null
                ? exports.GenericParserCommon.fromPartial(object.jsonParser)
                : undefined;
        message.auditTrailsV1Parser =
            object.auditTrailsV1Parser !== undefined &&
                object.auditTrailsV1Parser !== null
                ? exports.AuditTrailsV1Parser.fromPartial(object.auditTrailsV1Parser)
                : undefined;
        message.cloudLoggingParser =
            object.cloudLoggingParser !== undefined &&
                object.cloudLoggingParser !== null
                ? exports.CloudLoggingParser.fromPartial(object.cloudLoggingParser)
                : undefined;
        message.tskvParser =
            object.tskvParser !== undefined && object.tskvParser !== null
                ? exports.GenericParserCommon.fromPartial(object.tskvParser)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Parser.$type, exports.Parser);
const baseGenericParserCommon = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon",
    nullKeysAllowed: false,
    addRestColumn: false,
};
exports.GenericParserCommon = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataSchema !== undefined) {
            common_1.DataSchema.encode(message.dataSchema, writer.uint32(10).fork()).ldelim();
        }
        if (message.nullKeysAllowed === true) {
            writer.uint32(16).bool(message.nullKeysAllowed);
        }
        if (message.addRestColumn === true) {
            writer.uint32(24).bool(message.addRestColumn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenericParserCommon);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSchema = common_1.DataSchema.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nullKeysAllowed = reader.bool();
                    break;
                case 3:
                    message.addRestColumn = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGenericParserCommon);
        message.dataSchema =
            object.dataSchema !== undefined && object.dataSchema !== null
                ? common_1.DataSchema.fromJSON(object.dataSchema)
                : undefined;
        message.nullKeysAllowed =
            object.nullKeysAllowed !== undefined && object.nullKeysAllowed !== null
                ? Boolean(object.nullKeysAllowed)
                : false;
        message.addRestColumn =
            object.addRestColumn !== undefined && object.addRestColumn !== null
                ? Boolean(object.addRestColumn)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataSchema !== undefined &&
            (obj.dataSchema = message.dataSchema
                ? common_1.DataSchema.toJSON(message.dataSchema)
                : undefined);
        message.nullKeysAllowed !== undefined &&
            (obj.nullKeysAllowed = message.nullKeysAllowed);
        message.addRestColumn !== undefined &&
            (obj.addRestColumn = message.addRestColumn);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGenericParserCommon);
        message.dataSchema =
            object.dataSchema !== undefined && object.dataSchema !== null
                ? common_1.DataSchema.fromPartial(object.dataSchema)
                : undefined;
        message.nullKeysAllowed = (_a = object.nullKeysAllowed) !== null && _a !== void 0 ? _a : false;
        message.addRestColumn = (_b = object.addRestColumn) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenericParserCommon.$type, exports.GenericParserCommon);
const baseAuditTrailsV1Parser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser",
};
exports.AuditTrailsV1Parser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuditTrailsV1Parser);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseAuditTrailsV1Parser);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseAuditTrailsV1Parser);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AuditTrailsV1Parser.$type, exports.AuditTrailsV1Parser);
const baseCloudLoggingParser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser",
};
exports.CloudLoggingParser = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCloudLoggingParser);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseCloudLoggingParser);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseCloudLoggingParser);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CloudLoggingParser.$type, exports.CloudLoggingParser);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
