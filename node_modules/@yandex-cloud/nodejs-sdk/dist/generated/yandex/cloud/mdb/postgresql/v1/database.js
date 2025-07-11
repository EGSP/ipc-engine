"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSpec = exports.Extension = exports.Database = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1";
const baseDatabase = {
    $type: "yandex.cloud.mdb.postgresql.v1.Database",
    name: "",
    clusterId: "",
    owner: "",
    lcCollate: "",
    lcCtype: "",
    templateDb: "",
};
exports.Database = {
    $type: "yandex.cloud.mdb.postgresql.v1.Database",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.lcCollate !== "") {
            writer.uint32(34).string(message.lcCollate);
        }
        if (message.lcCtype !== "") {
            writer.uint32(42).string(message.lcCtype);
        }
        for (const v of message.extensions) {
            exports.Extension.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.templateDb !== "") {
            writer.uint32(58).string(message.templateDb);
        }
        if (message.deletionProtection !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.deletionProtection,
            }, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatabase);
        message.extensions = [];
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
                    message.owner = reader.string();
                    break;
                case 4:
                    message.lcCollate = reader.string();
                    break;
                case 5:
                    message.lcCtype = reader.string();
                    break;
                case 6:
                    message.extensions.push(exports.Extension.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.templateDb = reader.string();
                    break;
                case 8:
                    message.deletionProtection = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseDatabase);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? String(object.owner)
                : "";
        message.lcCollate =
            object.lcCollate !== undefined && object.lcCollate !== null
                ? String(object.lcCollate)
                : "";
        message.lcCtype =
            object.lcCtype !== undefined && object.lcCtype !== null
                ? String(object.lcCtype)
                : "";
        message.extensions = ((_a = object.extensions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Extension.fromJSON(e));
        message.templateDb =
            object.templateDb !== undefined && object.templateDb !== null
                ? String(object.templateDb)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
        message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e ? exports.Extension.toJSON(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        message.templateDb !== undefined && (obj.templateDb = message.templateDb);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseDatabase);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.lcCollate = (_d = object.lcCollate) !== null && _d !== void 0 ? _d : "";
        message.lcCtype = (_e = object.lcCtype) !== null && _e !== void 0 ? _e : "";
        message.extensions =
            ((_f = object.extensions) === null || _f === void 0 ? void 0 : _f.map((e) => exports.Extension.fromPartial(e))) || [];
        message.templateDb = (_g = object.templateDb) !== null && _g !== void 0 ? _g : "";
        message.deletionProtection = (_h = object.deletionProtection) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Database.$type, exports.Database);
const baseExtension = {
    $type: "yandex.cloud.mdb.postgresql.v1.Extension",
    name: "",
    version: "",
};
exports.Extension = {
    $type: "yandex.cloud.mdb.postgresql.v1.Extension",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExtension);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExtension);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExtension);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Extension.$type, exports.Extension);
const baseDatabaseSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec",
    name: "",
    owner: "",
    lcCollate: "",
    lcCtype: "",
    templateDb: "",
};
exports.DatabaseSpec = {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.lcCollate !== "") {
            writer.uint32(26).string(message.lcCollate);
        }
        if (message.lcCtype !== "") {
            writer.uint32(34).string(message.lcCtype);
        }
        for (const v of message.extensions) {
            exports.Extension.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.templateDb !== "") {
            writer.uint32(50).string(message.templateDb);
        }
        if (message.deletionProtection !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.deletionProtection,
            }, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatabaseSpec);
        message.extensions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.lcCollate = reader.string();
                    break;
                case 4:
                    message.lcCtype = reader.string();
                    break;
                case 5:
                    message.extensions.push(exports.Extension.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.templateDb = reader.string();
                    break;
                case 7:
                    message.deletionProtection = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseDatabaseSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? String(object.owner)
                : "";
        message.lcCollate =
            object.lcCollate !== undefined && object.lcCollate !== null
                ? String(object.lcCollate)
                : "";
        message.lcCtype =
            object.lcCtype !== undefined && object.lcCtype !== null
                ? String(object.lcCtype)
                : "";
        message.extensions = ((_a = object.extensions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Extension.fromJSON(e));
        message.templateDb =
            object.templateDb !== undefined && object.templateDb !== null
                ? String(object.templateDb)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.owner !== undefined && (obj.owner = message.owner);
        message.lcCollate !== undefined && (obj.lcCollate = message.lcCollate);
        message.lcCtype !== undefined && (obj.lcCtype = message.lcCtype);
        if (message.extensions) {
            obj.extensions = message.extensions.map((e) => e ? exports.Extension.toJSON(e) : undefined);
        }
        else {
            obj.extensions = [];
        }
        message.templateDb !== undefined && (obj.templateDb = message.templateDb);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseDatabaseSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.lcCollate = (_c = object.lcCollate) !== null && _c !== void 0 ? _c : "";
        message.lcCtype = (_d = object.lcCtype) !== null && _d !== void 0 ? _d : "";
        message.extensions =
            ((_e = object.extensions) === null || _e === void 0 ? void 0 : _e.map((e) => exports.Extension.fromPartial(e))) || [];
        message.templateDb = (_f = object.templateDb) !== null && _f !== void 0 ? _f : "";
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DatabaseSpec.$type, exports.DatabaseSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
