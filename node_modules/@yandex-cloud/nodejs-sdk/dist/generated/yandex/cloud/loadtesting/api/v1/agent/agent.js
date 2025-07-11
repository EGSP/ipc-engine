"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const status_1 = require("../../../../../../yandex/cloud/loadtesting/api/v1/agent/status");
exports.protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
const baseAgent = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.Agent",
    id: "",
    folderId: "",
    name: "",
    description: "",
    computeInstanceId: "",
    status: 0,
    errors: "",
    currentJobId: "",
};
exports.Agent = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.Agent",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.computeInstanceId !== "") {
            writer.uint32(42).string(message.computeInstanceId);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        for (const v of message.errors) {
            writer.uint32(66).string(v);
        }
        if (message.currentJobId !== "") {
            writer.uint32(74).string(message.currentJobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAgent);
        message.errors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.computeInstanceId = reader.string();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.errors.push(reader.string());
                    break;
                case 9:
                    message.currentJobId = reader.string();
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
        const message = Object.assign({}, baseAgent);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
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
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, status_1.statusFromJSON)(object.status)
                : 0;
        message.errors = ((_a = object.errors) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.currentJobId =
            object.currentJobId !== undefined && object.currentJobId !== null
                ? String(object.currentJobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.status !== undefined && (obj.status = (0, status_1.statusToJSON)(message.status));
        if (message.errors) {
            obj.errors = message.errors.map((e) => e);
        }
        else {
            obj.errors = [];
        }
        message.currentJobId !== undefined &&
            (obj.currentJobId = message.currentJobId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseAgent);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.computeInstanceId = (_e = object.computeInstanceId) !== null && _e !== void 0 ? _e : "";
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.errors = ((_g = object.errors) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.currentJobId = (_h = object.currentJobId) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Agent.$type, exports.Agent);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
