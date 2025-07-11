"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputeInstance_MetadataEntry = exports.CreateComputeInstance_LabelsEntry = exports.CreateComputeInstance = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const instance_service_1 = require("../../../../../../yandex/cloud/compute/v1/instance_service");
exports.protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
const baseCreateComputeInstance = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance",
    zoneId: "",
    serviceAccountId: "",
};
exports.CreateComputeInstance = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance",
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateComputeInstance_LabelsEntry.encode({
                $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.resourcesSpec !== undefined) {
            instance_service_1.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.CreateComputeInstance_MetadataEntry.encode({
                $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.bootDiskSpec !== undefined) {
            instance_service_1.AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            instance_service_1.NetworkInterfaceSpec.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(114).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateComputeInstance);
        message.labels = {};
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    const entry4 = exports.CreateComputeInstance_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = instance_service_1.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.CreateComputeInstance_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.bootDiskSpec = instance_service_1.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.networkInterfaceSpecs.push(instance_service_1.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 14:
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
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateComputeInstance);
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? instance_service_1.ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? instance_service_1.AttachedDiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.networkInterfaceSpecs = ((_c = object.networkInterfaceSpecs) !== null && _c !== void 0 ? _c : []).map((e) => instance_service_1.NetworkInterfaceSpec.fromJSON(e));
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? instance_service_1.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? instance_service_1.AttachedDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? instance_service_1.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseCreateComputeInstance);
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.zoneId = (_b = object.zoneId) !== null && _b !== void 0 ? _b : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? instance_service_1.ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_c = object.metadata) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? instance_service_1.AttachedDiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.networkInterfaceSpecs =
            ((_d = object.networkInterfaceSpecs) === null || _d === void 0 ? void 0 : _d.map((e) => instance_service_1.NetworkInterfaceSpec.fromPartial(e))) || [];
        message.serviceAccountId = (_e = object.serviceAccountId) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateComputeInstance.$type, exports.CreateComputeInstance);
const baseCreateComputeInstance_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateComputeInstance_LabelsEntry = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.LabelsEntry",
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
        const message = Object.assign({}, baseCreateComputeInstance_LabelsEntry);
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
        const message = Object.assign({}, baseCreateComputeInstance_LabelsEntry);
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
        const message = Object.assign({}, baseCreateComputeInstance_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateComputeInstance_LabelsEntry.$type, exports.CreateComputeInstance_LabelsEntry);
const baseCreateComputeInstance_MetadataEntry = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
    key: "",
    value: "",
};
exports.CreateComputeInstance_MetadataEntry = {
    $type: "yandex.cloud.loadtesting.api.v1.agent.CreateComputeInstance.MetadataEntry",
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
        const message = Object.assign({}, baseCreateComputeInstance_MetadataEntry);
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
        const message = Object.assign({}, baseCreateComputeInstance_MetadataEntry);
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
        const message = Object.assign({}, baseCreateComputeInstance_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateComputeInstance_MetadataEntry.$type, exports.CreateComputeInstance_MetadataEntry);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
