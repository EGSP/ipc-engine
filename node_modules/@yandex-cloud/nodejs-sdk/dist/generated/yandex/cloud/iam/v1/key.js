"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = exports.key_AlgorithmToJSON = exports.key_AlgorithmFromJSON = exports.Key_Algorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.iam.v1";
var Key_Algorithm;
(function (Key_Algorithm) {
    Key_Algorithm[Key_Algorithm["ALGORITHM_UNSPECIFIED"] = 0] = "ALGORITHM_UNSPECIFIED";
    /** RSA_2048 - RSA with a 2048-bit key size. Default value. */
    Key_Algorithm[Key_Algorithm["RSA_2048"] = 1] = "RSA_2048";
    /** RSA_4096 - RSA with a 4096-bit key size. */
    Key_Algorithm[Key_Algorithm["RSA_4096"] = 2] = "RSA_4096";
    Key_Algorithm[Key_Algorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Key_Algorithm = exports.Key_Algorithm || (exports.Key_Algorithm = {}));
function key_AlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "ALGORITHM_UNSPECIFIED":
            return Key_Algorithm.ALGORITHM_UNSPECIFIED;
        case 1:
        case "RSA_2048":
            return Key_Algorithm.RSA_2048;
        case 2:
        case "RSA_4096":
            return Key_Algorithm.RSA_4096;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Key_Algorithm.UNRECOGNIZED;
    }
}
exports.key_AlgorithmFromJSON = key_AlgorithmFromJSON;
function key_AlgorithmToJSON(object) {
    switch (object) {
        case Key_Algorithm.ALGORITHM_UNSPECIFIED:
            return "ALGORITHM_UNSPECIFIED";
        case Key_Algorithm.RSA_2048:
            return "RSA_2048";
        case Key_Algorithm.RSA_4096:
            return "RSA_4096";
        default:
            return "UNKNOWN";
    }
}
exports.key_AlgorithmToJSON = key_AlgorithmToJSON;
const baseKey = {
    $type: "yandex.cloud.iam.v1.Key",
    id: "",
    description: "",
    keyAlgorithm: 0,
    publicKey: "",
};
exports.Key = {
    $type: "yandex.cloud.iam.v1.Key",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.userAccountId !== undefined) {
            writer.uint32(18).string(message.userAccountId);
        }
        if (message.serviceAccountId !== undefined) {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.keyAlgorithm !== 0) {
            writer.uint32(48).int32(message.keyAlgorithm);
        }
        if (message.publicKey !== "") {
            writer.uint32(58).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseKey);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.userAccountId = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.keyAlgorithm = reader.int32();
                    break;
                case 7:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseKey);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.userAccountId =
            object.userAccountId !== undefined && object.userAccountId !== null
                ? String(object.userAccountId)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.keyAlgorithm =
            object.keyAlgorithm !== undefined && object.keyAlgorithm !== null
                ? key_AlgorithmFromJSON(object.keyAlgorithm)
                : 0;
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? String(object.publicKey)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.userAccountId !== undefined &&
            (obj.userAccountId = message.userAccountId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.description !== undefined &&
            (obj.description = message.description);
        message.keyAlgorithm !== undefined &&
            (obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm));
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseKey);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.userAccountId = (_b = object.userAccountId) !== null && _b !== void 0 ? _b : undefined;
        message.serviceAccountId = (_c = object.serviceAccountId) !== null && _c !== void 0 ? _c : undefined;
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.keyAlgorithm = (_f = object.keyAlgorithm) !== null && _f !== void 0 ? _f : 0;
        message.publicKey = (_g = object.publicKey) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Key.$type, exports.Key);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
