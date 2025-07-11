"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatSchema = exports.formatSchemaTypeToJSON = exports.formatSchemaTypeFromJSON = exports.FormatSchemaType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
var FormatSchemaType;
(function (FormatSchemaType) {
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_UNSPECIFIED"] = 0] = "FORMAT_SCHEMA_TYPE_UNSPECIFIED";
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_PROTOBUF"] = 1] = "FORMAT_SCHEMA_TYPE_PROTOBUF";
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_CAPNPROTO"] = 2] = "FORMAT_SCHEMA_TYPE_CAPNPROTO";
    FormatSchemaType[FormatSchemaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FormatSchemaType = exports.FormatSchemaType || (exports.FormatSchemaType = {}));
function formatSchemaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORMAT_SCHEMA_TYPE_UNSPECIFIED":
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED;
        case 1:
        case "FORMAT_SCHEMA_TYPE_PROTOBUF":
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF;
        case 2:
        case "FORMAT_SCHEMA_TYPE_CAPNPROTO":
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FormatSchemaType.UNRECOGNIZED;
    }
}
exports.formatSchemaTypeFromJSON = formatSchemaTypeFromJSON;
function formatSchemaTypeToJSON(object) {
    switch (object) {
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED:
            return "FORMAT_SCHEMA_TYPE_UNSPECIFIED";
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF:
            return "FORMAT_SCHEMA_TYPE_PROTOBUF";
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO:
            return "FORMAT_SCHEMA_TYPE_CAPNPROTO";
        default:
            return "UNKNOWN";
    }
}
exports.formatSchemaTypeToJSON = formatSchemaTypeToJSON;
const baseFormatSchema = {
    $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema",
    name: "",
    clusterId: "",
    type: 0,
    uri: "",
};
exports.FormatSchema = {
    $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== "") {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFormatSchema);
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
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFormatSchema);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? formatSchemaTypeFromJSON(object.type)
                : 0;
        message.uri =
            object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.type !== undefined &&
            (obj.type = formatSchemaTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseFormatSchema);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.uri = (_d = object.uri) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FormatSchema.$type, exports.FormatSchema);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
