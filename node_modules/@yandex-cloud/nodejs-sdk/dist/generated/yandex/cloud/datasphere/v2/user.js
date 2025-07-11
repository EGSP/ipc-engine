"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.datasphere.v2";
const baseUser = {
    $type: "yandex.cloud.datasphere.v2.User",
    id: "",
    name: "",
    email: "",
    picture: "",
    pictureData: "",
};
exports.User = {
    $type: "yandex.cloud.datasphere.v2.User",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        if (message.picture !== "") {
            writer.uint32(34).string(message.picture);
        }
        if (message.pictureData !== "") {
            writer.uint32(42).string(message.pictureData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUser);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.picture = reader.string();
                    break;
                case 5:
                    message.pictureData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUser);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.email =
            object.email !== undefined && object.email !== null
                ? String(object.email)
                : "";
        message.picture =
            object.picture !== undefined && object.picture !== null
                ? String(object.picture)
                : "";
        message.pictureData =
            object.pictureData !== undefined && object.pictureData !== null
                ? String(object.pictureData)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.email !== undefined && (obj.email = message.email);
        message.picture !== undefined && (obj.picture = message.picture);
        message.pictureData !== undefined &&
            (obj.pictureData = message.pictureData);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseUser);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.email = (_c = object.email) !== null && _c !== void 0 ? _c : "";
        message.picture = (_d = object.picture) !== null && _d !== void 0 ? _d : "";
        message.pictureData = (_e = object.pictureData) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
