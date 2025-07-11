"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestServiceClient = exports.TestServiceService = exports.UpdateTestMetadata = exports.UpdateTestRequest_LabelsEntry = exports.UpdateTestRequest = exports.CreateTestMetadata = exports.CreateTestRequest_LabelsEntry = exports.CreateTestRequest = exports.GetTestRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const test_1 = require("../../../../../yandex/cloud/loadtesting/agent/v1/test");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
const baseGetTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest",
    testId: "",
};
exports.GetTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.testId !== "") {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetTestRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetTestRequest);
        message.testId =
            object.testId !== undefined && object.testId !== null
                ? String(object.testId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetTestRequest);
        message.testId = (_a = object.testId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetTestRequest.$type, exports.GetTestRequest);
const baseCreateTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest",
    folderId: "",
    name: "",
    description: "",
    generator: 0,
    agentInstanceId: "",
    targetAddress: "",
    targetPort: 0,
    targetVersion: "",
    instances: 0,
    config: "",
    ammoId: "",
    ammoUrls: "",
    ammoHeaders: "",
    ammoType: 0,
    ssl: false,
    imbalancePoint: 0,
    imbalanceTs: 0,
    loggingLogGroupId: "",
};
exports.CreateTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest",
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
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateTestRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.generator !== 0) {
            writer.uint32(40).int32(message.generator);
        }
        if (message.agentInstanceId !== "") {
            writer.uint32(50).string(message.agentInstanceId);
        }
        if (message.targetAddress !== "") {
            writer.uint32(58).string(message.targetAddress);
        }
        if (message.targetPort !== 0) {
            writer.uint32(64).int64(message.targetPort);
        }
        if (message.targetVersion !== "") {
            writer.uint32(74).string(message.targetVersion);
        }
        if (message.instances !== 0) {
            writer.uint32(80).int64(message.instances);
        }
        if (message.loadSchedule !== undefined) {
            test_1.Schedule.encode(message.loadSchedule, writer.uint32(90).fork()).ldelim();
        }
        if (message.config !== "") {
            writer.uint32(98).string(message.config);
        }
        if (message.ammoId !== "") {
            writer.uint32(106).string(message.ammoId);
        }
        for (const v of message.ammoUrls) {
            writer.uint32(114).string(v);
        }
        for (const v of message.ammoHeaders) {
            writer.uint32(122).string(v);
        }
        if (message.ammoType !== 0) {
            writer.uint32(128).int32(message.ammoType);
        }
        if (message.ssl === true) {
            writer.uint32(136).bool(message.ssl);
        }
        if (message.imbalancePoint !== 0) {
            writer.uint32(144).int64(message.imbalancePoint);
        }
        if (message.imbalanceTs !== 0) {
            writer.uint32(152).int64(message.imbalanceTs);
        }
        if (message.loggingLogGroupId !== "") {
            writer.uint32(162).string(message.loggingLogGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTestRequest);
        message.labels = {};
        message.ammoUrls = [];
        message.ammoHeaders = [];
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
                    const entry4 = exports.CreateTestRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.generator = reader.int32();
                    break;
                case 6:
                    message.agentInstanceId = reader.string();
                    break;
                case 7:
                    message.targetAddress = reader.string();
                    break;
                case 8:
                    message.targetPort = longToNumber(reader.int64());
                    break;
                case 9:
                    message.targetVersion = reader.string();
                    break;
                case 10:
                    message.instances = longToNumber(reader.int64());
                    break;
                case 11:
                    message.loadSchedule = test_1.Schedule.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.config = reader.string();
                    break;
                case 13:
                    message.ammoId = reader.string();
                    break;
                case 14:
                    message.ammoUrls.push(reader.string());
                    break;
                case 15:
                    message.ammoHeaders.push(reader.string());
                    break;
                case 16:
                    message.ammoType = reader.int32();
                    break;
                case 17:
                    message.ssl = reader.bool();
                    break;
                case 18:
                    message.imbalancePoint = longToNumber(reader.int64());
                    break;
                case 19:
                    message.imbalanceTs = longToNumber(reader.int64());
                    break;
                case 20:
                    message.loggingLogGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateTestRequest);
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
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.generator =
            object.generator !== undefined && object.generator !== null
                ? (0, test_1.test_GeneratorFromJSON)(object.generator)
                : 0;
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        message.targetAddress =
            object.targetAddress !== undefined && object.targetAddress !== null
                ? String(object.targetAddress)
                : "";
        message.targetPort =
            object.targetPort !== undefined && object.targetPort !== null
                ? Number(object.targetPort)
                : 0;
        message.targetVersion =
            object.targetVersion !== undefined && object.targetVersion !== null
                ? String(object.targetVersion)
                : "";
        message.instances =
            object.instances !== undefined && object.instances !== null
                ? Number(object.instances)
                : 0;
        message.loadSchedule =
            object.loadSchedule !== undefined && object.loadSchedule !== null
                ? test_1.Schedule.fromJSON(object.loadSchedule)
                : undefined;
        message.config =
            object.config !== undefined && object.config !== null
                ? String(object.config)
                : "";
        message.ammoId =
            object.ammoId !== undefined && object.ammoId !== null
                ? String(object.ammoId)
                : "";
        message.ammoUrls = ((_b = object.ammoUrls) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.ammoHeaders = ((_c = object.ammoHeaders) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.ammoType =
            object.ammoType !== undefined && object.ammoType !== null
                ? (0, test_1.ammoTypeFromJSON)(object.ammoType)
                : 0;
        message.ssl =
            object.ssl !== undefined && object.ssl !== null
                ? Boolean(object.ssl)
                : false;
        message.imbalancePoint =
            object.imbalancePoint !== undefined && object.imbalancePoint !== null
                ? Number(object.imbalancePoint)
                : 0;
        message.imbalanceTs =
            object.imbalanceTs !== undefined && object.imbalanceTs !== null
                ? Number(object.imbalanceTs)
                : 0;
        message.loggingLogGroupId =
            object.loggingLogGroupId !== undefined &&
                object.loggingLogGroupId !== null
                ? String(object.loggingLogGroupId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.generator !== undefined &&
            (obj.generator = (0, test_1.test_GeneratorToJSON)(message.generator));
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        message.targetAddress !== undefined &&
            (obj.targetAddress = message.targetAddress);
        message.targetPort !== undefined &&
            (obj.targetPort = Math.round(message.targetPort));
        message.targetVersion !== undefined &&
            (obj.targetVersion = message.targetVersion);
        message.instances !== undefined &&
            (obj.instances = Math.round(message.instances));
        message.loadSchedule !== undefined &&
            (obj.loadSchedule = message.loadSchedule
                ? test_1.Schedule.toJSON(message.loadSchedule)
                : undefined);
        message.config !== undefined && (obj.config = message.config);
        message.ammoId !== undefined && (obj.ammoId = message.ammoId);
        if (message.ammoUrls) {
            obj.ammoUrls = message.ammoUrls.map((e) => e);
        }
        else {
            obj.ammoUrls = [];
        }
        if (message.ammoHeaders) {
            obj.ammoHeaders = message.ammoHeaders.map((e) => e);
        }
        else {
            obj.ammoHeaders = [];
        }
        message.ammoType !== undefined &&
            (obj.ammoType = (0, test_1.ammoTypeToJSON)(message.ammoType));
        message.ssl !== undefined && (obj.ssl = message.ssl);
        message.imbalancePoint !== undefined &&
            (obj.imbalancePoint = Math.round(message.imbalancePoint));
        message.imbalanceTs !== undefined &&
            (obj.imbalanceTs = Math.round(message.imbalanceTs));
        message.loggingLogGroupId !== undefined &&
            (obj.loggingLogGroupId = message.loggingLogGroupId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        const message = Object.assign({}, baseCreateTestRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.generator = (_e = object.generator) !== null && _e !== void 0 ? _e : 0;
        message.agentInstanceId = (_f = object.agentInstanceId) !== null && _f !== void 0 ? _f : "";
        message.targetAddress = (_g = object.targetAddress) !== null && _g !== void 0 ? _g : "";
        message.targetPort = (_h = object.targetPort) !== null && _h !== void 0 ? _h : 0;
        message.targetVersion = (_j = object.targetVersion) !== null && _j !== void 0 ? _j : "";
        message.instances = (_k = object.instances) !== null && _k !== void 0 ? _k : 0;
        message.loadSchedule =
            object.loadSchedule !== undefined && object.loadSchedule !== null
                ? test_1.Schedule.fromPartial(object.loadSchedule)
                : undefined;
        message.config = (_l = object.config) !== null && _l !== void 0 ? _l : "";
        message.ammoId = (_m = object.ammoId) !== null && _m !== void 0 ? _m : "";
        message.ammoUrls = ((_o = object.ammoUrls) === null || _o === void 0 ? void 0 : _o.map((e) => e)) || [];
        message.ammoHeaders = ((_p = object.ammoHeaders) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        message.ammoType = (_q = object.ammoType) !== null && _q !== void 0 ? _q : 0;
        message.ssl = (_r = object.ssl) !== null && _r !== void 0 ? _r : false;
        message.imbalancePoint = (_s = object.imbalancePoint) !== null && _s !== void 0 ? _s : 0;
        message.imbalanceTs = (_t = object.imbalanceTs) !== null && _t !== void 0 ? _t : 0;
        message.loggingLogGroupId = (_u = object.loggingLogGroupId) !== null && _u !== void 0 ? _u : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTestRequest.$type, exports.CreateTestRequest);
const baseCreateTestRequest_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateTestRequest_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTestRequest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTestRequest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateTestRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTestRequest_LabelsEntry.$type, exports.CreateTestRequest_LabelsEntry);
const baseCreateTestMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata",
    testId: "",
};
exports.CreateTestMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.testId !== "") {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateTestMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateTestMetadata);
        message.testId =
            object.testId !== undefined && object.testId !== null
                ? String(object.testId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateTestMetadata);
        message.testId = (_a = object.testId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateTestMetadata.$type, exports.CreateTestMetadata);
const baseUpdateTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest",
    testId: "",
    name: "",
    description: "",
    favorite: false,
    targetVersion: "",
    imbalancePoint: 0,
    imbalanceTs: 0,
    imbalanceComment: "",
};
exports.UpdateTestRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.testId !== "") {
            writer.uint32(10).string(message.testId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateTestRequest_LabelsEntry.encode({
                $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.favorite === true) {
            writer.uint32(48).bool(message.favorite);
        }
        if (message.targetVersion !== "") {
            writer.uint32(58).string(message.targetVersion);
        }
        if (message.imbalancePoint !== 0) {
            writer.uint32(64).int64(message.imbalancePoint);
        }
        if (message.imbalanceTs !== 0) {
            writer.uint32(72).int64(message.imbalanceTs);
        }
        if (message.imbalanceComment !== "") {
            writer.uint32(82).string(message.imbalanceComment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTestRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateTestRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.favorite = reader.bool();
                    break;
                case 7:
                    message.targetVersion = reader.string();
                    break;
                case 8:
                    message.imbalancePoint = longToNumber(reader.int64());
                    break;
                case 9:
                    message.imbalanceTs = longToNumber(reader.int64());
                    break;
                case 10:
                    message.imbalanceComment = reader.string();
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
        const message = Object.assign({}, baseUpdateTestRequest);
        message.testId =
            object.testId !== undefined && object.testId !== null
                ? String(object.testId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.favorite =
            object.favorite !== undefined && object.favorite !== null
                ? Boolean(object.favorite)
                : false;
        message.targetVersion =
            object.targetVersion !== undefined && object.targetVersion !== null
                ? String(object.targetVersion)
                : "";
        message.imbalancePoint =
            object.imbalancePoint !== undefined && object.imbalancePoint !== null
                ? Number(object.imbalancePoint)
                : 0;
        message.imbalanceTs =
            object.imbalanceTs !== undefined && object.imbalanceTs !== null
                ? Number(object.imbalanceTs)
                : 0;
        message.imbalanceComment =
            object.imbalanceComment !== undefined && object.imbalanceComment !== null
                ? String(object.imbalanceComment)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.testId !== undefined && (obj.testId = message.testId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.favorite !== undefined && (obj.favorite = message.favorite);
        message.targetVersion !== undefined &&
            (obj.targetVersion = message.targetVersion);
        message.imbalancePoint !== undefined &&
            (obj.imbalancePoint = Math.round(message.imbalancePoint));
        message.imbalanceTs !== undefined &&
            (obj.imbalanceTs = Math.round(message.imbalanceTs));
        message.imbalanceComment !== undefined &&
            (obj.imbalanceComment = message.imbalanceComment);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseUpdateTestRequest);
        message.testId = (_a = object.testId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.favorite = (_e = object.favorite) !== null && _e !== void 0 ? _e : false;
        message.targetVersion = (_f = object.targetVersion) !== null && _f !== void 0 ? _f : "";
        message.imbalancePoint = (_g = object.imbalancePoint) !== null && _g !== void 0 ? _g : 0;
        message.imbalanceTs = (_h = object.imbalanceTs) !== null && _h !== void 0 ? _h : 0;
        message.imbalanceComment = (_j = object.imbalanceComment) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTestRequest.$type, exports.UpdateTestRequest);
const baseUpdateTestRequest_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateTestRequest_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTestRequest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTestRequest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateTestRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTestRequest_LabelsEntry.$type, exports.UpdateTestRequest_LabelsEntry);
const baseUpdateTestMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata",
    testId: "",
};
exports.UpdateTestMetadata = {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.testId !== "") {
            writer.uint32(10).string(message.testId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateTestMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.testId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateTestMetadata);
        message.testId =
            object.testId !== undefined && object.testId !== null
                ? String(object.testId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.testId !== undefined && (obj.testId = message.testId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateTestMetadata);
        message.testId = (_a = object.testId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateTestMetadata.$type, exports.UpdateTestMetadata);
exports.TestServiceService = {
    /** Returns test by test id. */
    get: {
        path: "/yandex.cloud.loadtesting.agent.v1.TestService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTestRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTestRequest.decode(value),
        responseSerialize: (value) => Buffer.from(test_1.Test.encode(value).finish()),
        responseDeserialize: (value) => test_1.Test.decode(value),
    },
    /** Creates test for the specified folder. */
    create: {
        path: "/yandex.cloud.loadtesting.agent.v1.TestService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTestRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTestRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified test. */
    update: {
        path: "/yandex.cloud.loadtesting.agent.v1.TestService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTestRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTestRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.TestServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TestServiceService, "yandex.cloud.loadtesting.agent.v1.TestService");
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
