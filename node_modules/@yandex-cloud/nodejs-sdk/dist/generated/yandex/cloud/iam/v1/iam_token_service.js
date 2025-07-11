"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamTokenServiceClient = exports.IamTokenServiceService = exports.CreateIamTokenForServiceAccountRequest = exports.CreateIamTokenResponse = exports.CreateIamTokenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.iam.v1";
const baseCreateIamTokenRequest = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenRequest",
};
exports.CreateIamTokenRequest = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.yandexPassportOauthToken !== undefined) {
            writer.uint32(10).string(message.yandexPassportOauthToken);
        }
        if (message.jwt !== undefined) {
            writer.uint32(18).string(message.jwt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateIamTokenRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yandexPassportOauthToken = reader.string();
                    break;
                case 2:
                    message.jwt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateIamTokenRequest);
        message.yandexPassportOauthToken =
            object.yandexPassportOauthToken !== undefined &&
                object.yandexPassportOauthToken !== null
                ? String(object.yandexPassportOauthToken)
                : undefined;
        message.jwt =
            object.jwt !== undefined && object.jwt !== null
                ? String(object.jwt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.yandexPassportOauthToken !== undefined &&
            (obj.yandexPassportOauthToken = message.yandexPassportOauthToken);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateIamTokenRequest);
        message.yandexPassportOauthToken =
            (_a = object.yandexPassportOauthToken) !== null && _a !== void 0 ? _a : undefined;
        message.jwt = (_b = object.jwt) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateIamTokenRequest.$type, exports.CreateIamTokenRequest);
const baseCreateIamTokenResponse = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenResponse",
    iamToken: "",
};
exports.CreateIamTokenResponse = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.iamToken !== "") {
            writer.uint32(10).string(message.iamToken);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateIamTokenResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iamToken = reader.string();
                    break;
                case 2:
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateIamTokenResponse);
        message.iamToken =
            object.iamToken !== undefined && object.iamToken !== null
                ? String(object.iamToken)
                : "";
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? fromJsonTimestamp(object.expiresAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.iamToken !== undefined && (obj.iamToken = message.iamToken);
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateIamTokenResponse);
        message.iamToken = (_a = object.iamToken) !== null && _a !== void 0 ? _a : "";
        message.expiresAt = (_b = object.expiresAt) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateIamTokenResponse.$type, exports.CreateIamTokenResponse);
const baseCreateIamTokenForServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest",
    serviceAccountId: "",
};
exports.CreateIamTokenForServiceAccountRequest = {
    $type: "yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateIamTokenForServiceAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateIamTokenForServiceAccountRequest);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateIamTokenForServiceAccountRequest);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateIamTokenForServiceAccountRequest.$type, exports.CreateIamTokenForServiceAccountRequest);
/** A set of methods for managing IAM tokens. */
exports.IamTokenServiceService = {
    /** Creates an IAM token for the specified identity. */
    create: {
        path: "/yandex.cloud.iam.v1.IamTokenService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateIamTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateIamTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateIamTokenResponse.decode(value),
    },
    /** Create iam token for service account. */
    createForServiceAccount: {
        path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateIamTokenForServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateIamTokenForServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateIamTokenResponse.decode(value),
    },
};
exports.IamTokenServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.IamTokenServiceService, "yandex.cloud.iam.v1.IamTokenService");
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
