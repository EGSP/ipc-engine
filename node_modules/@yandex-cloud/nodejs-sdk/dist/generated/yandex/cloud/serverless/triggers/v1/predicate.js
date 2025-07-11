"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValuePredicate = exports.AndPredicate = exports.Predicate = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.serverless.triggers.v1";
const basePredicate = {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate",
};
exports.Predicate = {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.andPredicate !== undefined) {
            exports.AndPredicate.encode(message.andPredicate, writer.uint32(18).fork()).ldelim();
        }
        if (message.fieldValuePredicate !== undefined) {
            exports.FieldValuePredicate.encode(message.fieldValuePredicate, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePredicate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.andPredicate = exports.AndPredicate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fieldValuePredicate = exports.FieldValuePredicate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePredicate);
        message.andPredicate =
            object.andPredicate !== undefined && object.andPredicate !== null
                ? exports.AndPredicate.fromJSON(object.andPredicate)
                : undefined;
        message.fieldValuePredicate =
            object.fieldValuePredicate !== undefined &&
                object.fieldValuePredicate !== null
                ? exports.FieldValuePredicate.fromJSON(object.fieldValuePredicate)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.andPredicate !== undefined &&
            (obj.andPredicate = message.andPredicate
                ? exports.AndPredicate.toJSON(message.andPredicate)
                : undefined);
        message.fieldValuePredicate !== undefined &&
            (obj.fieldValuePredicate = message.fieldValuePredicate
                ? exports.FieldValuePredicate.toJSON(message.fieldValuePredicate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePredicate);
        message.andPredicate =
            object.andPredicate !== undefined && object.andPredicate !== null
                ? exports.AndPredicate.fromPartial(object.andPredicate)
                : undefined;
        message.fieldValuePredicate =
            object.fieldValuePredicate !== undefined &&
                object.fieldValuePredicate !== null
                ? exports.FieldValuePredicate.fromPartial(object.fieldValuePredicate)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Predicate.$type, exports.Predicate);
const baseAndPredicate = {
    $type: "yandex.cloud.serverless.triggers.v1.AndPredicate",
};
exports.AndPredicate = {
    $type: "yandex.cloud.serverless.triggers.v1.AndPredicate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.predicate) {
            exports.Predicate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAndPredicate);
        message.predicate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predicate.push(exports.Predicate.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAndPredicate);
        message.predicate = ((_a = object.predicate) !== null && _a !== void 0 ? _a : []).map((e) => exports.Predicate.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.predicate) {
            obj.predicate = message.predicate.map((e) => e ? exports.Predicate.toJSON(e) : undefined);
        }
        else {
            obj.predicate = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAndPredicate);
        message.predicate =
            ((_a = object.predicate) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Predicate.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AndPredicate.$type, exports.AndPredicate);
const baseFieldValuePredicate = {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate",
    fieldPath: "",
};
exports.FieldValuePredicate = {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fieldPath !== "") {
            writer.uint32(10).string(message.fieldPath);
        }
        if (message.exact !== undefined) {
            writer.uint32(26).string(message.exact);
        }
        if (message.prefix !== undefined) {
            writer.uint32(66).string(message.prefix);
        }
        if (message.suffix !== undefined) {
            writer.uint32(74).string(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFieldValuePredicate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fieldPath = reader.string();
                    break;
                case 3:
                    message.exact = reader.string();
                    break;
                case 8:
                    message.prefix = reader.string();
                    break;
                case 9:
                    message.suffix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFieldValuePredicate);
        message.fieldPath =
            object.fieldPath !== undefined && object.fieldPath !== null
                ? String(object.fieldPath)
                : "";
        message.exact =
            object.exact !== undefined && object.exact !== null
                ? String(object.exact)
                : undefined;
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : undefined;
        message.suffix =
            object.suffix !== undefined && object.suffix !== null
                ? String(object.suffix)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fieldPath !== undefined && (obj.fieldPath = message.fieldPath);
        message.exact !== undefined && (obj.exact = message.exact);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseFieldValuePredicate);
        message.fieldPath = (_a = object.fieldPath) !== null && _a !== void 0 ? _a : "";
        message.exact = (_b = object.exact) !== null && _b !== void 0 ? _b : undefined;
        message.prefix = (_c = object.prefix) !== null && _c !== void 0 ? _c : undefined;
        message.suffix = (_d = object.suffix) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FieldValuePredicate.$type, exports.FieldValuePredicate);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
