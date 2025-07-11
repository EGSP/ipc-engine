"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountServiceClient = exports.UserAccountServiceService = exports.GetUserAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const user_account_1 = require("../../../../yandex/cloud/iam/v1/user_account");
exports.protobufPackage = "yandex.cloud.iam.v1";
const baseGetUserAccountRequest = {
    $type: "yandex.cloud.iam.v1.GetUserAccountRequest",
    userAccountId: "",
};
exports.GetUserAccountRequest = {
    $type: "yandex.cloud.iam.v1.GetUserAccountRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAccountId !== "") {
            writer.uint32(10).string(message.userAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetUserAccountRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetUserAccountRequest);
        message.userAccountId =
            object.userAccountId !== undefined && object.userAccountId !== null
                ? String(object.userAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userAccountId !== undefined &&
            (obj.userAccountId = message.userAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetUserAccountRequest);
        message.userAccountId = (_a = object.userAccountId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUserAccountRequest.$type, exports.GetUserAccountRequest);
/** A set of methods for managing user accounts. Currently applicable only for [Yandex accounts](/docs/iam/concepts/#passport). */
exports.UserAccountServiceService = {
    /** Returns the specified UserAccount resource. */
    get: {
        path: "/yandex.cloud.iam.v1.UserAccountService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUserAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUserAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(user_account_1.UserAccount.encode(value).finish()),
        responseDeserialize: (value) => user_account_1.UserAccount.decode(value),
    },
};
exports.UserAccountServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserAccountServiceService, "yandex.cloud.iam.v1.UserAccountService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
