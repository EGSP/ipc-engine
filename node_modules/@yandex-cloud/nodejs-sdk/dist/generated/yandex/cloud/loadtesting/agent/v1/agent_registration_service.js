"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRegistrationServiceClient = exports.AgentRegistrationServiceService = exports.ExternalAgentRegisterMetadata = exports.ExternalAgentRegisterRequest = exports.RegisterResponse = exports.RegisterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
const baseRegisterRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest",
    computeInstanceId: "",
};
exports.RegisterRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegisterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegisterRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRegisterRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegisterRequest.$type, exports.RegisterRequest);
const baseRegisterResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse",
    agentInstanceId: "",
};
exports.RegisterResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentInstanceId !== "") {
            writer.uint32(10).string(message.agentInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegisterResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegisterResponse);
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRegisterResponse);
        message.agentInstanceId = (_a = object.agentInstanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegisterResponse.$type, exports.RegisterResponse);
const baseExternalAgentRegisterRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest",
    folderId: "",
    computeInstanceId: "",
    name: "",
    agentVersion: "",
};
exports.ExternalAgentRegisterRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(18).string(message.computeInstanceId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.agentVersion !== "") {
            writer.uint32(34).string(message.agentVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalAgentRegisterRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.computeInstanceId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.agentVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalAgentRegisterRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.agentVersion =
            object.agentVersion !== undefined && object.agentVersion !== null
                ? String(object.agentVersion)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.name !== undefined && (obj.name = message.name);
        message.agentVersion !== undefined &&
            (obj.agentVersion = message.agentVersion);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExternalAgentRegisterRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.computeInstanceId = (_b = object.computeInstanceId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.agentVersion = (_d = object.agentVersion) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalAgentRegisterRequest.$type, exports.ExternalAgentRegisterRequest);
const baseExternalAgentRegisterMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata",
    agentInstanceId: "",
};
exports.ExternalAgentRegisterMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentInstanceId !== "") {
            writer.uint32(10).string(message.agentInstanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalAgentRegisterMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentInstanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalAgentRegisterMetadata);
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseExternalAgentRegisterMetadata);
        message.agentInstanceId = (_a = object.agentInstanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalAgentRegisterMetadata.$type, exports.ExternalAgentRegisterMetadata);
exports.AgentRegistrationServiceService = {
    /** Registers specified agent. */
    register: {
        path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RegisterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RegisterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RegisterResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.RegisterResponse.decode(value),
    },
    /** Registers external agent. */
    externalAgentRegister: {
        path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ExternalAgentRegisterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ExternalAgentRegisterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AgentRegistrationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AgentRegistrationServiceService, "yandex.cloud.loadtesting.agent.v1.AgentRegistrationService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
