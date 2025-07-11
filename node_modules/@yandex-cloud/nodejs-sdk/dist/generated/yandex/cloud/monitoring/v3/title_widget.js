"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleWidget = exports.titleWidget_TitleSizeToJSON = exports.titleWidget_TitleSizeFromJSON = exports.TitleWidget_TitleSize = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.monitoring.v3";
/** Title size. */
var TitleWidget_TitleSize;
(function (TitleWidget_TitleSize) {
    TitleWidget_TitleSize[TitleWidget_TitleSize["TITLE_SIZE_UNSPECIFIED"] = 0] = "TITLE_SIZE_UNSPECIFIED";
    /** TITLE_SIZE_XS - Extra small size. */
    TitleWidget_TitleSize[TitleWidget_TitleSize["TITLE_SIZE_XS"] = 1] = "TITLE_SIZE_XS";
    /** TITLE_SIZE_S - Small size. */
    TitleWidget_TitleSize[TitleWidget_TitleSize["TITLE_SIZE_S"] = 2] = "TITLE_SIZE_S";
    /** TITLE_SIZE_M - Middle size. */
    TitleWidget_TitleSize[TitleWidget_TitleSize["TITLE_SIZE_M"] = 3] = "TITLE_SIZE_M";
    /** TITLE_SIZE_L - Large size. */
    TitleWidget_TitleSize[TitleWidget_TitleSize["TITLE_SIZE_L"] = 4] = "TITLE_SIZE_L";
    TitleWidget_TitleSize[TitleWidget_TitleSize["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TitleWidget_TitleSize = exports.TitleWidget_TitleSize || (exports.TitleWidget_TitleSize = {}));
function titleWidget_TitleSizeFromJSON(object) {
    switch (object) {
        case 0:
        case "TITLE_SIZE_UNSPECIFIED":
            return TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED;
        case 1:
        case "TITLE_SIZE_XS":
            return TitleWidget_TitleSize.TITLE_SIZE_XS;
        case 2:
        case "TITLE_SIZE_S":
            return TitleWidget_TitleSize.TITLE_SIZE_S;
        case 3:
        case "TITLE_SIZE_M":
            return TitleWidget_TitleSize.TITLE_SIZE_M;
        case 4:
        case "TITLE_SIZE_L":
            return TitleWidget_TitleSize.TITLE_SIZE_L;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TitleWidget_TitleSize.UNRECOGNIZED;
    }
}
exports.titleWidget_TitleSizeFromJSON = titleWidget_TitleSizeFromJSON;
function titleWidget_TitleSizeToJSON(object) {
    switch (object) {
        case TitleWidget_TitleSize.TITLE_SIZE_UNSPECIFIED:
            return "TITLE_SIZE_UNSPECIFIED";
        case TitleWidget_TitleSize.TITLE_SIZE_XS:
            return "TITLE_SIZE_XS";
        case TitleWidget_TitleSize.TITLE_SIZE_S:
            return "TITLE_SIZE_S";
        case TitleWidget_TitleSize.TITLE_SIZE_M:
            return "TITLE_SIZE_M";
        case TitleWidget_TitleSize.TITLE_SIZE_L:
            return "TITLE_SIZE_L";
        default:
            return "UNKNOWN";
    }
}
exports.titleWidget_TitleSizeToJSON = titleWidget_TitleSizeToJSON;
const baseTitleWidget = {
    $type: "yandex.cloud.monitoring.v3.TitleWidget",
    text: "",
    size: 0,
};
exports.TitleWidget = {
    $type: "yandex.cloud.monitoring.v3.TitleWidget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.size !== 0) {
            writer.uint32(16).int32(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTitleWidget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.size = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTitleWidget);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? titleWidget_TitleSizeFromJSON(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.size !== undefined &&
            (obj.size = titleWidget_TitleSizeToJSON(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTitleWidget);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.size = (_b = object.size) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TitleWidget.$type, exports.TitleWidget);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
