"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.image_ImageTypeToJSON = exports.image_ImageTypeFromJSON = exports.Image_ImageType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.ai.vision.v2";
/** type of image */
var Image_ImageType;
(function (Image_ImageType) {
    Image_ImageType[Image_ImageType["IMAGE_TYPE_UNSPECIFIED"] = 0] = "IMAGE_TYPE_UNSPECIFIED";
    Image_ImageType[Image_ImageType["JPEG"] = 1] = "JPEG";
    Image_ImageType[Image_ImageType["PNG"] = 2] = "PNG";
    Image_ImageType[Image_ImageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Image_ImageType = exports.Image_ImageType || (exports.Image_ImageType = {}));
function image_ImageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IMAGE_TYPE_UNSPECIFIED":
            return Image_ImageType.IMAGE_TYPE_UNSPECIFIED;
        case 1:
        case "JPEG":
            return Image_ImageType.JPEG;
        case 2:
        case "PNG":
            return Image_ImageType.PNG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Image_ImageType.UNRECOGNIZED;
    }
}
exports.image_ImageTypeFromJSON = image_ImageTypeFromJSON;
function image_ImageTypeToJSON(object) {
    switch (object) {
        case Image_ImageType.IMAGE_TYPE_UNSPECIFIED:
            return "IMAGE_TYPE_UNSPECIFIED";
        case Image_ImageType.JPEG:
            return "JPEG";
        case Image_ImageType.PNG:
            return "PNG";
        default:
            return "UNKNOWN";
    }
}
exports.image_ImageTypeToJSON = image_ImageTypeToJSON;
const baseImage = {
    $type: "yandex.cloud.ai.vision.v2.Image",
    imageType: 0,
};
exports.Image = {
    $type: "yandex.cloud.ai.vision.v2.Image",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.imageType !== 0) {
            writer.uint32(16).int32(message.imageType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImage);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.imageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseImage);
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : undefined;
        message.imageType =
            object.imageType !== undefined && object.imageType !== null
                ? image_ImageTypeFromJSON(object.imageType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.imageType !== undefined &&
            (obj.imageType = image_ImageTypeToJSON(message.imageType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseImage);
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : undefined;
        message.imageType = (_b = object.imageType) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image.$type, exports.Image);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
