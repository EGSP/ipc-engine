"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = exports.SerializerDebezium = exports.DebeziumSerializerParameter = exports.SerializerJSON = exports.SerializerAuto = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
const baseSerializerAuto = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto",
};
exports.SerializerAuto = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSerializerAuto);
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
        const message = Object.assign({}, baseSerializerAuto);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseSerializerAuto);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SerializerAuto.$type, exports.SerializerAuto);
const baseSerializerJSON = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON",
};
exports.SerializerJSON = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSerializerJSON);
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
        const message = Object.assign({}, baseSerializerJSON);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseSerializerJSON);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SerializerJSON.$type, exports.SerializerJSON);
const baseDebeziumSerializerParameter = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter",
    key: "",
    value: "",
};
exports.DebeziumSerializerParameter = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDebeziumSerializerParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDebeziumSerializerParameter);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDebeziumSerializerParameter);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DebeziumSerializerParameter.$type, exports.DebeziumSerializerParameter);
const baseSerializerDebezium = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium",
};
exports.SerializerDebezium = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.serializerParameters) {
            exports.DebeziumSerializerParameter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSerializerDebezium);
        message.serializerParameters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serializerParameters.push(exports.DebeziumSerializerParameter.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseSerializerDebezium);
        message.serializerParameters = ((_a = object.serializerParameters) !== null && _a !== void 0 ? _a : []).map((e) => exports.DebeziumSerializerParameter.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.serializerParameters) {
            obj.serializerParameters = message.serializerParameters.map((e) => e ? exports.DebeziumSerializerParameter.toJSON(e) : undefined);
        }
        else {
            obj.serializerParameters = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSerializerDebezium);
        message.serializerParameters =
            ((_a = object.serializerParameters) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DebeziumSerializerParameter.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SerializerDebezium.$type, exports.SerializerDebezium);
const baseSerializer = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer",
};
exports.Serializer = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serializerAuto !== undefined) {
            exports.SerializerAuto.encode(message.serializerAuto, writer.uint32(10).fork()).ldelim();
        }
        if (message.serializerJson !== undefined) {
            exports.SerializerJSON.encode(message.serializerJson, writer.uint32(18).fork()).ldelim();
        }
        if (message.serializerDebezium !== undefined) {
            exports.SerializerDebezium.encode(message.serializerDebezium, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSerializer);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serializerAuto = exports.SerializerAuto.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.serializerJson = exports.SerializerJSON.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.serializerDebezium = exports.SerializerDebezium.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSerializer);
        message.serializerAuto =
            object.serializerAuto !== undefined && object.serializerAuto !== null
                ? exports.SerializerAuto.fromJSON(object.serializerAuto)
                : undefined;
        message.serializerJson =
            object.serializerJson !== undefined && object.serializerJson !== null
                ? exports.SerializerJSON.fromJSON(object.serializerJson)
                : undefined;
        message.serializerDebezium =
            object.serializerDebezium !== undefined &&
                object.serializerDebezium !== null
                ? exports.SerializerDebezium.fromJSON(object.serializerDebezium)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serializerAuto !== undefined &&
            (obj.serializerAuto = message.serializerAuto
                ? exports.SerializerAuto.toJSON(message.serializerAuto)
                : undefined);
        message.serializerJson !== undefined &&
            (obj.serializerJson = message.serializerJson
                ? exports.SerializerJSON.toJSON(message.serializerJson)
                : undefined);
        message.serializerDebezium !== undefined &&
            (obj.serializerDebezium = message.serializerDebezium
                ? exports.SerializerDebezium.toJSON(message.serializerDebezium)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSerializer);
        message.serializerAuto =
            object.serializerAuto !== undefined && object.serializerAuto !== null
                ? exports.SerializerAuto.fromPartial(object.serializerAuto)
                : undefined;
        message.serializerJson =
            object.serializerJson !== undefined && object.serializerJson !== null
                ? exports.SerializerJSON.fromPartial(object.serializerJson)
                : undefined;
        message.serializerDebezium =
            object.serializerDebezium !== undefined &&
                object.serializerDebezium !== null
                ? exports.SerializerDebezium.fromPartial(object.serializerDebezium)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Serializer.$type, exports.Serializer);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
