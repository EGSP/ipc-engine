"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentServiceClient = exports.AgentServiceService = exports.ClaimAgentStatusResponse = exports.ClaimAgentStatusRequest = exports.claimAgentStatusRequest_StatusToJSON = exports.claimAgentStatusRequest_StatusFromJSON = exports.ClaimAgentStatusRequest_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
var ClaimAgentStatusRequest_Status;
(function (ClaimAgentStatusRequest_Status) {
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["READY_FOR_TEST"] = 1] = "READY_FOR_TEST";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["PREPARING_TEST"] = 2] = "PREPARING_TEST";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["TESTING"] = 3] = "TESTING";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["TANK_FAILED"] = 4] = "TANK_FAILED";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["STOPPED"] = 5] = "STOPPED";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["UPLOADING_ARTIFACTS"] = 6] = "UPLOADING_ARTIFACTS";
    ClaimAgentStatusRequest_Status[ClaimAgentStatusRequest_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimAgentStatusRequest_Status = exports.ClaimAgentStatusRequest_Status || (exports.ClaimAgentStatusRequest_Status = {}));
function claimAgentStatusRequest_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return ClaimAgentStatusRequest_Status.STATUS_UNSPECIFIED;
        case 1:
        case "READY_FOR_TEST":
            return ClaimAgentStatusRequest_Status.READY_FOR_TEST;
        case 2:
        case "PREPARING_TEST":
            return ClaimAgentStatusRequest_Status.PREPARING_TEST;
        case 3:
        case "TESTING":
            return ClaimAgentStatusRequest_Status.TESTING;
        case 4:
        case "TANK_FAILED":
            return ClaimAgentStatusRequest_Status.TANK_FAILED;
        case 5:
        case "STOPPED":
            return ClaimAgentStatusRequest_Status.STOPPED;
        case 6:
        case "UPLOADING_ARTIFACTS":
            return ClaimAgentStatusRequest_Status.UPLOADING_ARTIFACTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimAgentStatusRequest_Status.UNRECOGNIZED;
    }
}
exports.claimAgentStatusRequest_StatusFromJSON = claimAgentStatusRequest_StatusFromJSON;
function claimAgentStatusRequest_StatusToJSON(object) {
    switch (object) {
        case ClaimAgentStatusRequest_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case ClaimAgentStatusRequest_Status.READY_FOR_TEST:
            return "READY_FOR_TEST";
        case ClaimAgentStatusRequest_Status.PREPARING_TEST:
            return "PREPARING_TEST";
        case ClaimAgentStatusRequest_Status.TESTING:
            return "TESTING";
        case ClaimAgentStatusRequest_Status.TANK_FAILED:
            return "TANK_FAILED";
        case ClaimAgentStatusRequest_Status.STOPPED:
            return "STOPPED";
        case ClaimAgentStatusRequest_Status.UPLOADING_ARTIFACTS:
            return "UPLOADING_ARTIFACTS";
        default:
            return "UNKNOWN";
    }
}
exports.claimAgentStatusRequest_StatusToJSON = claimAgentStatusRequest_StatusToJSON;
const baseClaimAgentStatusRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest",
    agentInstanceId: "",
    status: 0,
};
exports.ClaimAgentStatusRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentInstanceId !== "") {
            writer.uint32(10).string(message.agentInstanceId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClaimAgentStatusRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentInstanceId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClaimAgentStatusRequest);
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? claimAgentStatusRequest_StatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        message.status !== undefined &&
            (obj.status = claimAgentStatusRequest_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClaimAgentStatusRequest);
        message.agentInstanceId = (_a = object.agentInstanceId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClaimAgentStatusRequest.$type, exports.ClaimAgentStatusRequest);
const baseClaimAgentStatusResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse",
    code: 0,
};
exports.ClaimAgentStatusResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int64(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClaimAgentStatusResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClaimAgentStatusResponse);
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClaimAgentStatusResponse);
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClaimAgentStatusResponse.$type, exports.ClaimAgentStatusResponse);
exports.AgentServiceService = {
    /** Claims status for the specified agent. */
    claimStatus: {
        path: "/yandex.cloud.loadtesting.agent.v1.AgentService/ClaimStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ClaimAgentStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ClaimAgentStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ClaimAgentStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ClaimAgentStatusResponse.decode(value),
    },
};
exports.AgentServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AgentServiceService, "yandex.cloud.loadtesting.agent.v1.AgentService");
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
