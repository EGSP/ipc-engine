"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawLogsSettings = exports.rawLogsStatusToJSON = exports.rawLogsStatusFromJSON = exports.RawLogsStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.cdn.v1";
/** Provider side statuses of Raw logs processing. */
var RawLogsStatus;
(function (RawLogsStatus) {
    RawLogsStatus[RawLogsStatus["RAW_LOGS_STATUS_UNSPECIFIED"] = 0] = "RAW_LOGS_STATUS_UNSPECIFIED";
    /** RAW_LOGS_STATUS_NOT_ACTIVATED - Raw logs wasn't activated. */
    RawLogsStatus[RawLogsStatus["RAW_LOGS_STATUS_NOT_ACTIVATED"] = 1] = "RAW_LOGS_STATUS_NOT_ACTIVATED";
    /** RAW_LOGS_STATUS_OK - Raw logs was activated, and logs storing process works as expected. */
    RawLogsStatus[RawLogsStatus["RAW_LOGS_STATUS_OK"] = 2] = "RAW_LOGS_STATUS_OK";
    /** RAW_LOGS_STATUS_FAILED - Raw logs was activated, but CDN provider has been failed to store logs. */
    RawLogsStatus[RawLogsStatus["RAW_LOGS_STATUS_FAILED"] = 3] = "RAW_LOGS_STATUS_FAILED";
    /** RAW_LOGS_STATUS_PENDING - Raw logs was activated, but logs storing process is expected. */
    RawLogsStatus[RawLogsStatus["RAW_LOGS_STATUS_PENDING"] = 4] = "RAW_LOGS_STATUS_PENDING";
    RawLogsStatus[RawLogsStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawLogsStatus = exports.RawLogsStatus || (exports.RawLogsStatus = {}));
function rawLogsStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "RAW_LOGS_STATUS_UNSPECIFIED":
            return RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED;
        case 1:
        case "RAW_LOGS_STATUS_NOT_ACTIVATED":
            return RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED;
        case 2:
        case "RAW_LOGS_STATUS_OK":
            return RawLogsStatus.RAW_LOGS_STATUS_OK;
        case 3:
        case "RAW_LOGS_STATUS_FAILED":
            return RawLogsStatus.RAW_LOGS_STATUS_FAILED;
        case 4:
        case "RAW_LOGS_STATUS_PENDING":
            return RawLogsStatus.RAW_LOGS_STATUS_PENDING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RawLogsStatus.UNRECOGNIZED;
    }
}
exports.rawLogsStatusFromJSON = rawLogsStatusFromJSON;
function rawLogsStatusToJSON(object) {
    switch (object) {
        case RawLogsStatus.RAW_LOGS_STATUS_UNSPECIFIED:
            return "RAW_LOGS_STATUS_UNSPECIFIED";
        case RawLogsStatus.RAW_LOGS_STATUS_NOT_ACTIVATED:
            return "RAW_LOGS_STATUS_NOT_ACTIVATED";
        case RawLogsStatus.RAW_LOGS_STATUS_OK:
            return "RAW_LOGS_STATUS_OK";
        case RawLogsStatus.RAW_LOGS_STATUS_FAILED:
            return "RAW_LOGS_STATUS_FAILED";
        case RawLogsStatus.RAW_LOGS_STATUS_PENDING:
            return "RAW_LOGS_STATUS_PENDING";
        default:
            return "UNKNOWN";
    }
}
exports.rawLogsStatusToJSON = rawLogsStatusToJSON;
const baseRawLogsSettings = {
    $type: "yandex.cloud.cdn.v1.RawLogsSettings",
    bucketName: "",
    bucketRegion: "",
    filePrefix: "",
};
exports.RawLogsSettings = {
    $type: "yandex.cloud.cdn.v1.RawLogsSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketName !== "") {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.bucketRegion !== "") {
            writer.uint32(18).string(message.bucketRegion);
        }
        if (message.filePrefix !== "") {
            writer.uint32(26).string(message.filePrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRawLogsSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.bucketRegion = reader.string();
                    break;
                case 3:
                    message.filePrefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRawLogsSettings);
        message.bucketName =
            object.bucketName !== undefined && object.bucketName !== null
                ? String(object.bucketName)
                : "";
        message.bucketRegion =
            object.bucketRegion !== undefined && object.bucketRegion !== null
                ? String(object.bucketRegion)
                : "";
        message.filePrefix =
            object.filePrefix !== undefined && object.filePrefix !== null
                ? String(object.filePrefix)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketName !== undefined && (obj.bucketName = message.bucketName);
        message.bucketRegion !== undefined &&
            (obj.bucketRegion = message.bucketRegion);
        message.filePrefix !== undefined && (obj.filePrefix = message.filePrefix);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRawLogsSettings);
        message.bucketName = (_a = object.bucketName) !== null && _a !== void 0 ? _a : "";
        message.bucketRegion = (_b = object.bucketRegion) !== null && _b !== void 0 ? _b : "";
        message.filePrefix = (_c = object.filePrefix) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RawLogsSettings.$type, exports.RawLogsSettings);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
