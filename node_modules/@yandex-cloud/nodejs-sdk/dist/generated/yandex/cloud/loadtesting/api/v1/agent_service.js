"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentServiceClient = exports.AgentServiceService = exports.ListAgentsResponse = exports.ListAgentsRequest = exports.DeleteAgentMetadata = exports.DeleteAgentRequest = exports.GetAgentRequest = exports.CreateAgentMetadata = exports.CreateAgentRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const create_compute_instance_1 = require("../../../../../yandex/cloud/loadtesting/api/v1/agent/create_compute_instance");
const agent_1 = require("../../../../../yandex/cloud/loadtesting/api/v1/agent/agent");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.loadtesting.api.v1";
const baseCreateAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest",
    folderId: "",
    name: "",
    description: "",
    agentVersion: "",
};
exports.CreateAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.computeInstanceParams !== undefined) {
            create_compute_instance_1.CreateComputeInstance.encode(message.computeInstanceParams, writer.uint32(34).fork()).ldelim();
        }
        if (message.agentVersion !== "") {
            writer.uint32(42).string(message.agentVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAgentRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.computeInstanceParams = create_compute_instance_1.CreateComputeInstance.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = Object.assign({}, baseCreateAgentRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined &&
                object.computeInstanceParams !== null
                ? create_compute_instance_1.CreateComputeInstance.fromJSON(object.computeInstanceParams)
                : undefined;
        message.agentVersion =
            object.agentVersion !== undefined && object.agentVersion !== null
                ? String(object.agentVersion)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.computeInstanceParams !== undefined &&
            (obj.computeInstanceParams = message.computeInstanceParams
                ? create_compute_instance_1.CreateComputeInstance.toJSON(message.computeInstanceParams)
                : undefined);
        message.agentVersion !== undefined &&
            (obj.agentVersion = message.agentVersion);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateAgentRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.computeInstanceParams =
            object.computeInstanceParams !== undefined &&
                object.computeInstanceParams !== null
                ? create_compute_instance_1.CreateComputeInstance.fromPartial(object.computeInstanceParams)
                : undefined;
        message.agentVersion = (_d = object.agentVersion) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAgentRequest.$type, exports.CreateAgentRequest);
const baseCreateAgentMetadata = {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata",
    agentId: "",
};
exports.CreateAgentMetadata = {
    $type: "yandex.cloud.loadtesting.api.v1.CreateAgentMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentId !== "") {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateAgentMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateAgentMetadata);
        message.agentId =
            object.agentId !== undefined && object.agentId !== null
                ? String(object.agentId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateAgentMetadata);
        message.agentId = (_a = object.agentId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateAgentMetadata.$type, exports.CreateAgentMetadata);
const baseGetAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest",
    agentId: "",
};
exports.GetAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.GetAgentRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentId !== "") {
            writer.uint32(18).string(message.agentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetAgentRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetAgentRequest);
        message.agentId =
            object.agentId !== undefined && object.agentId !== null
                ? String(object.agentId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetAgentRequest);
        message.agentId = (_a = object.agentId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAgentRequest.$type, exports.GetAgentRequest);
const baseDeleteAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest",
    agentId: "",
};
exports.DeleteAgentRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentId !== "") {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAgentRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAgentRequest);
        message.agentId =
            object.agentId !== undefined && object.agentId !== null
                ? String(object.agentId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAgentRequest);
        message.agentId = (_a = object.agentId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAgentRequest.$type, exports.DeleteAgentRequest);
const baseDeleteAgentMetadata = {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata",
    agentId: "",
};
exports.DeleteAgentMetadata = {
    $type: "yandex.cloud.loadtesting.api.v1.DeleteAgentMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.agentId !== "") {
            writer.uint32(10).string(message.agentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteAgentMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteAgentMetadata);
        message.agentId =
            object.agentId !== undefined && object.agentId !== null
                ? String(object.agentId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.agentId !== undefined && (obj.agentId = message.agentId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteAgentMetadata);
        message.agentId = (_a = object.agentId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAgentMetadata.$type, exports.DeleteAgentMetadata);
const baseListAgentsRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListAgentsRequest = {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAgentsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListAgentsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListAgentsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAgentsRequest.$type, exports.ListAgentsRequest);
const baseListAgentsResponse = {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse",
    nextPageToken: "",
};
exports.ListAgentsResponse = {
    $type: "yandex.cloud.loadtesting.api.v1.ListAgentsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.agents) {
            agent_1.Agent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListAgentsResponse);
        message.agents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agents.push(agent_1.Agent.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListAgentsResponse);
        message.agents = ((_a = object.agents) !== null && _a !== void 0 ? _a : []).map((e) => agent_1.Agent.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.agents) {
            obj.agents = message.agents.map((e) => (e ? agent_1.Agent.toJSON(e) : undefined));
        }
        else {
            obj.agents = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListAgentsResponse);
        message.agents = ((_a = object.agents) === null || _a === void 0 ? void 0 : _a.map((e) => agent_1.Agent.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListAgentsResponse.$type, exports.ListAgentsResponse);
exports.AgentServiceService = {
    create: {
        path: "/yandex.cloud.loadtesting.api.v1.AgentService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAgentRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAgentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    get: {
        path: "/yandex.cloud.loadtesting.api.v1.AgentService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAgentRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAgentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(agent_1.Agent.encode(value).finish()),
        responseDeserialize: (value) => agent_1.Agent.decode(value),
    },
    list: {
        path: "/yandex.cloud.loadtesting.api.v1.AgentService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAgentsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAgentsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAgentsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAgentsResponse.decode(value),
    },
    delete: {
        path: "/yandex.cloud.loadtesting.api.v1.AgentService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAgentRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAgentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.AgentServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AgentServiceService, "yandex.cloud.loadtesting.api.v1.AgentService");
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
