"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageMount = exports.ScalingPolicy = exports.LogOptions = exports.Connectivity = exports.Secret = exports.ProvisionPolicy = exports.Resources = exports.Args = exports.Command = exports.Image_EnvironmentEntry = exports.Image = exports.Revision = exports.Container_LabelsEntry = exports.Container = exports.revision_StatusToJSON = exports.revision_StatusFromJSON = exports.Revision_Status = exports.container_StatusToJSON = exports.container_StatusFromJSON = exports.Container_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../../../google/protobuf/duration");
const log_entry_1 = require("../../../../../yandex/cloud/logging/v1/log_entry");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.serverless.containers.v1";
var Container_Status;
(function (Container_Status) {
    Container_Status[Container_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Container is being created. */
    Container_Status[Container_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Container is ready for use. */
    Container_Status[Container_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Container is being deleted. */
    Container_Status[Container_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - Container failed. The only allowed action is delete. */
    Container_Status[Container_Status["ERROR"] = 4] = "ERROR";
    Container_Status[Container_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Container_Status = exports.Container_Status || (exports.Container_Status = {}));
function container_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Container_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Container_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Container_Status.ACTIVE;
        case 3:
        case "DELETING":
            return Container_Status.DELETING;
        case 4:
        case "ERROR":
            return Container_Status.ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Container_Status.UNRECOGNIZED;
    }
}
exports.container_StatusFromJSON = container_StatusFromJSON;
function container_StatusToJSON(object) {
    switch (object) {
        case Container_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Container_Status.CREATING:
            return "CREATING";
        case Container_Status.ACTIVE:
            return "ACTIVE";
        case Container_Status.DELETING:
            return "DELETING";
        case Container_Status.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.container_StatusToJSON = container_StatusToJSON;
var Revision_Status;
(function (Revision_Status) {
    Revision_Status[Revision_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Revision is being created. */
    Revision_Status[Revision_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Revision is currently used by the container. */
    Revision_Status[Revision_Status["ACTIVE"] = 2] = "ACTIVE";
    /** OBSOLETE - Revision is not used by the container. May be deleted later. */
    Revision_Status[Revision_Status["OBSOLETE"] = 3] = "OBSOLETE";
    Revision_Status[Revision_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Revision_Status = exports.Revision_Status || (exports.Revision_Status = {}));
function revision_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Revision_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return Revision_Status.CREATING;
        case 2:
        case "ACTIVE":
            return Revision_Status.ACTIVE;
        case 3:
        case "OBSOLETE":
            return Revision_Status.OBSOLETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Revision_Status.UNRECOGNIZED;
    }
}
exports.revision_StatusFromJSON = revision_StatusFromJSON;
function revision_StatusToJSON(object) {
    switch (object) {
        case Revision_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Revision_Status.CREATING:
            return "CREATING";
        case Revision_Status.ACTIVE:
            return "ACTIVE";
        case Revision_Status.OBSOLETE:
            return "OBSOLETE";
        default:
            return "UNKNOWN";
    }
}
exports.revision_StatusToJSON = revision_StatusToJSON;
const baseContainer = {
    $type: "yandex.cloud.serverless.containers.v1.Container",
    id: "",
    folderId: "",
    name: "",
    description: "",
    url: "",
    status: 0,
};
exports.Container = {
    $type: "yandex.cloud.serverless.containers.v1.Container",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Container_LabelsEntry.encode({
                $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.url !== "") {
            writer.uint32(66).string(message.url);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContainer);
        message.labels = {};
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Container_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 8:
                    message.url = reader.string();
                    break;
                case 9:
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
        var _a;
        const message = Object.assign({}, baseContainer);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
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
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? container_StatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.url !== undefined && (obj.url = message.url);
        message.status !== undefined &&
            (obj.status = container_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseContainer);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.url = (_g = object.url) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Container.$type, exports.Container);
const baseContainer_LabelsEntry = {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
    key: "",
    value: "",
};
exports.Container_LabelsEntry = {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry",
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
        const message = Object.assign({}, baseContainer_LabelsEntry);
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
        const message = Object.assign({}, baseContainer_LabelsEntry);
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
        const message = Object.assign({}, baseContainer_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Container_LabelsEntry.$type, exports.Container_LabelsEntry);
const baseRevision = {
    $type: "yandex.cloud.serverless.containers.v1.Revision",
    id: "",
    containerId: "",
    description: "",
    concurrency: 0,
    serviceAccountId: "",
    status: 0,
};
exports.Revision = {
    $type: "yandex.cloud.serverless.containers.v1.Revision",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.containerId !== "") {
            writer.uint32(18).string(message.containerId);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.image !== undefined) {
            exports.Image.encode(message.image, writer.uint32(42).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(58).fork()).ldelim();
        }
        if (message.concurrency !== 0) {
            writer.uint32(64).int64(message.concurrency);
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        for (const v of message.secrets) {
            exports.Secret.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.connectivity !== undefined) {
            exports.Connectivity.encode(message.connectivity, writer.uint32(98).fork()).ldelim();
        }
        if (message.provisionPolicy !== undefined) {
            exports.ProvisionPolicy.encode(message.provisionPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.scalingPolicy !== undefined) {
            exports.ScalingPolicy.encode(message.scalingPolicy, writer.uint32(114).fork()).ldelim();
        }
        if (message.logOptions !== undefined) {
            exports.LogOptions.encode(message.logOptions, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.storageMounts) {
            exports.StorageMount.encode(v, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRevision);
        message.secrets = [];
        message.storageMounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.image = exports.Image.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.concurrency = longToNumber(reader.int64());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.secrets.push(exports.Secret.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.connectivity = exports.Connectivity.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.provisionPolicy = exports.ProvisionPolicy.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.scalingPolicy = exports.ScalingPolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.logOptions = exports.LogOptions.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.storageMounts.push(exports.StorageMount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseRevision);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.containerId =
            object.containerId !== undefined && object.containerId !== null
                ? String(object.containerId)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.image =
            object.image !== undefined && object.image !== null
                ? exports.Image.fromJSON(object.image)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromJSON(object.executionTimeout)
                : undefined;
        message.concurrency =
            object.concurrency !== undefined && object.concurrency !== null
                ? Number(object.concurrency)
                : 0;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? revision_StatusFromJSON(object.status)
                : 0;
        message.secrets = ((_a = object.secrets) !== null && _a !== void 0 ? _a : []).map((e) => exports.Secret.fromJSON(e));
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromJSON(object.connectivity)
                : undefined;
        message.provisionPolicy =
            object.provisionPolicy !== undefined && object.provisionPolicy !== null
                ? exports.ProvisionPolicy.fromJSON(object.provisionPolicy)
                : undefined;
        message.scalingPolicy =
            object.scalingPolicy !== undefined && object.scalingPolicy !== null
                ? exports.ScalingPolicy.fromJSON(object.scalingPolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromJSON(object.logOptions)
                : undefined;
        message.storageMounts = ((_b = object.storageMounts) !== null && _b !== void 0 ? _b : []).map((e) => exports.StorageMount.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.image !== undefined &&
            (obj.image = message.image ? exports.Image.toJSON(message.image) : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.concurrency !== undefined &&
            (obj.concurrency = Math.round(message.concurrency));
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined &&
            (obj.status = revision_StatusToJSON(message.status));
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) => e ? exports.Secret.toJSON(e) : undefined);
        }
        else {
            obj.secrets = [];
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? exports.Connectivity.toJSON(message.connectivity)
                : undefined);
        message.provisionPolicy !== undefined &&
            (obj.provisionPolicy = message.provisionPolicy
                ? exports.ProvisionPolicy.toJSON(message.provisionPolicy)
                : undefined);
        message.scalingPolicy !== undefined &&
            (obj.scalingPolicy = message.scalingPolicy
                ? exports.ScalingPolicy.toJSON(message.scalingPolicy)
                : undefined);
        message.logOptions !== undefined &&
            (obj.logOptions = message.logOptions
                ? exports.LogOptions.toJSON(message.logOptions)
                : undefined);
        if (message.storageMounts) {
            obj.storageMounts = message.storageMounts.map((e) => e ? exports.StorageMount.toJSON(e) : undefined);
        }
        else {
            obj.storageMounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseRevision);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.containerId = (_b = object.containerId) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.image =
            object.image !== undefined && object.image !== null
                ? exports.Image.fromPartial(object.image)
                : undefined;
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.executionTimeout =
            object.executionTimeout !== undefined && object.executionTimeout !== null
                ? duration_1.Duration.fromPartial(object.executionTimeout)
                : undefined;
        message.concurrency = (_e = object.concurrency) !== null && _e !== void 0 ? _e : 0;
        message.serviceAccountId = (_f = object.serviceAccountId) !== null && _f !== void 0 ? _f : "";
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        message.secrets = ((_h = object.secrets) === null || _h === void 0 ? void 0 : _h.map((e) => exports.Secret.fromPartial(e))) || [];
        message.connectivity =
            object.connectivity !== undefined && object.connectivity !== null
                ? exports.Connectivity.fromPartial(object.connectivity)
                : undefined;
        message.provisionPolicy =
            object.provisionPolicy !== undefined && object.provisionPolicy !== null
                ? exports.ProvisionPolicy.fromPartial(object.provisionPolicy)
                : undefined;
        message.scalingPolicy =
            object.scalingPolicy !== undefined && object.scalingPolicy !== null
                ? exports.ScalingPolicy.fromPartial(object.scalingPolicy)
                : undefined;
        message.logOptions =
            object.logOptions !== undefined && object.logOptions !== null
                ? exports.LogOptions.fromPartial(object.logOptions)
                : undefined;
        message.storageMounts =
            ((_j = object.storageMounts) === null || _j === void 0 ? void 0 : _j.map((e) => exports.StorageMount.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Revision.$type, exports.Revision);
const baseImage = {
    $type: "yandex.cloud.serverless.containers.v1.Image",
    imageUrl: "",
    imageDigest: "",
    workingDir: "",
};
exports.Image = {
    $type: "yandex.cloud.serverless.containers.v1.Image",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageUrl !== "") {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.imageDigest !== "") {
            writer.uint32(18).string(message.imageDigest);
        }
        if (message.command !== undefined) {
            exports.Command.encode(message.command, writer.uint32(26).fork()).ldelim();
        }
        if (message.args !== undefined) {
            exports.Args.encode(message.args, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.Image_EnvironmentEntry.encode({
                $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.workingDir !== "") {
            writer.uint32(50).string(message.workingDir);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseImage);
        message.environment = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.imageDigest = reader.string();
                    break;
                case 3:
                    message.command = exports.Command.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.args = exports.Args.decode(reader, reader.uint32());
                    break;
                case 5:
                    const entry5 = exports.Image_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.environment[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.workingDir = reader.string();
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
        const message = Object.assign({}, baseImage);
        message.imageUrl =
            object.imageUrl !== undefined && object.imageUrl !== null
                ? String(object.imageUrl)
                : "";
        message.imageDigest =
            object.imageDigest !== undefined && object.imageDigest !== null
                ? String(object.imageDigest)
                : "";
        message.command =
            object.command !== undefined && object.command !== null
                ? exports.Command.fromJSON(object.command)
                : undefined;
        message.args =
            object.args !== undefined && object.args !== null
                ? exports.Args.fromJSON(object.args)
                : undefined;
        message.environment = Object.entries((_a = object.environment) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.workingDir =
            object.workingDir !== undefined && object.workingDir !== null
                ? String(object.workingDir)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.imageDigest !== undefined &&
            (obj.imageDigest = message.imageDigest);
        message.command !== undefined &&
            (obj.command = message.command
                ? exports.Command.toJSON(message.command)
                : undefined);
        message.args !== undefined &&
            (obj.args = message.args ? exports.Args.toJSON(message.args) : undefined);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.workingDir !== undefined && (obj.workingDir = message.workingDir);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseImage);
        message.imageUrl = (_a = object.imageUrl) !== null && _a !== void 0 ? _a : "";
        message.imageDigest = (_b = object.imageDigest) !== null && _b !== void 0 ? _b : "";
        message.command =
            object.command !== undefined && object.command !== null
                ? exports.Command.fromPartial(object.command)
                : undefined;
        message.args =
            object.args !== undefined && object.args !== null
                ? exports.Args.fromPartial(object.args)
                : undefined;
        message.environment = Object.entries((_c = object.environment) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.workingDir = (_d = object.workingDir) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image.$type, exports.Image);
const baseImage_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
    key: "",
    value: "",
};
exports.Image_EnvironmentEntry = {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry",
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
        const message = Object.assign({}, baseImage_EnvironmentEntry);
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
        const message = Object.assign({}, baseImage_EnvironmentEntry);
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
        const message = Object.assign({}, baseImage_EnvironmentEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Image_EnvironmentEntry.$type, exports.Image_EnvironmentEntry);
const baseCommand = {
    $type: "yandex.cloud.serverless.containers.v1.Command",
    command: "",
};
exports.Command = {
    $type: "yandex.cloud.serverless.containers.v1.Command",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.command) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCommand);
        message.command = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command.push(reader.string());
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
        const message = Object.assign({}, baseCommand);
        message.command = ((_a = object.command) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.command) {
            obj.command = message.command.map((e) => e);
        }
        else {
            obj.command = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCommand);
        message.command = ((_a = object.command) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Command.$type, exports.Command);
const baseArgs = {
    $type: "yandex.cloud.serverless.containers.v1.Args",
    args: "",
};
exports.Args = {
    $type: "yandex.cloud.serverless.containers.v1.Args",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseArgs);
        message.args = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
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
        const message = Object.assign({}, baseArgs);
        message.args = ((_a = object.args) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        }
        else {
            obj.args = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseArgs);
        message.args = ((_a = object.args) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Args.$type, exports.Args);
const baseResources = {
    $type: "yandex.cloud.serverless.containers.v1.Resources",
    memory: 0,
    cores: 0,
    coreFraction: 0,
};
exports.Resources = {
    $type: "yandex.cloud.serverless.containers.v1.Resources",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResources);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResources);
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? Number(object.memory)
                : 0;
        message.cores =
            object.cores !== undefined && object.cores !== null
                ? Number(object.cores)
                : 0;
        message.coreFraction =
            object.coreFraction !== undefined && object.coreFraction !== null
                ? Number(object.coreFraction)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.coreFraction !== undefined &&
            (obj.coreFraction = Math.round(message.coreFraction));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseResources);
        message.memory = (_a = object.memory) !== null && _a !== void 0 ? _a : 0;
        message.cores = (_b = object.cores) !== null && _b !== void 0 ? _b : 0;
        message.coreFraction = (_c = object.coreFraction) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseProvisionPolicy = {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy",
    minInstances: 0,
};
exports.ProvisionPolicy = {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minInstances !== 0) {
            writer.uint32(8).int64(message.minInstances);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProvisionPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minInstances = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProvisionPolicy);
        message.minInstances =
            object.minInstances !== undefined && object.minInstances !== null
                ? Number(object.minInstances)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minInstances !== undefined &&
            (obj.minInstances = Math.round(message.minInstances));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseProvisionPolicy);
        message.minInstances = (_a = object.minInstances) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProvisionPolicy.$type, exports.ProvisionPolicy);
const baseSecret = {
    $type: "yandex.cloud.serverless.containers.v1.Secret",
    id: "",
    versionId: "",
    key: "",
};
exports.Secret = {
    $type: "yandex.cloud.serverless.containers.v1.Secret",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.environmentVariable !== undefined) {
            writer.uint32(34).string(message.environmentVariable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecret);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.environmentVariable = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSecret);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.versionId =
            object.versionId !== undefined && object.versionId !== null
                ? String(object.versionId)
                : "";
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.environmentVariable =
            object.environmentVariable !== undefined &&
                object.environmentVariable !== null
                ? String(object.environmentVariable)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.key !== undefined && (obj.key = message.key);
        message.environmentVariable !== undefined &&
            (obj.environmentVariable = message.environmentVariable);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseSecret);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.environmentVariable = (_d = object.environmentVariable) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret.$type, exports.Secret);
const baseConnectivity = {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity",
    networkId: "",
    subnetIds: "",
};
exports.Connectivity = {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkId !== "") {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConnectivity);
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetIds.push(reader.string());
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
        const message = Object.assign({}, baseConnectivity);
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConnectivity);
        message.networkId = (_a = object.networkId) !== null && _a !== void 0 ? _a : "";
        message.subnetIds = ((_b = object.subnetIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Connectivity.$type, exports.Connectivity);
const baseLogOptions = {
    $type: "yandex.cloud.serverless.containers.v1.LogOptions",
    disabled: false,
    minLevel: 0,
};
exports.LogOptions = {
    $type: "yandex.cloud.serverless.containers.v1.LogOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.disabled === true) {
            writer.uint32(8).bool(message.disabled);
        }
        if (message.logGroupId !== undefined) {
            writer.uint32(18).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(26).string(message.folderId);
        }
        if (message.minLevel !== 0) {
            writer.uint32(32).int32(message.minLevel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLogOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = reader.bool();
                    break;
                case 2:
                    message.logGroupId = reader.string();
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                case 4:
                    message.minLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLogOptions);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? Boolean(object.disabled)
                : false;
        message.logGroupId =
            object.logGroupId !== undefined && object.logGroupId !== null
                ? String(object.logGroupId)
                : undefined;
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.minLevel =
            object.minLevel !== undefined && object.minLevel !== null
                ? (0, log_entry_1.logLevel_LevelFromJSON)(object.minLevel)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disabled !== undefined && (obj.disabled = message.disabled);
        message.logGroupId !== undefined && (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.minLevel !== undefined &&
            (obj.minLevel = (0, log_entry_1.logLevel_LevelToJSON)(message.minLevel));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseLogOptions);
        message.disabled = (_a = object.disabled) !== null && _a !== void 0 ? _a : false;
        message.logGroupId = (_b = object.logGroupId) !== null && _b !== void 0 ? _b : undefined;
        message.folderId = (_c = object.folderId) !== null && _c !== void 0 ? _c : undefined;
        message.minLevel = (_d = object.minLevel) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogOptions.$type, exports.LogOptions);
const baseScalingPolicy = {
    $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy",
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};
exports.ScalingPolicy = {
    $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(8).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(16).int64(message.zoneRequestsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalingPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneInstancesLimit = longToNumber(reader.int64());
                    break;
                case 2:
                    message.zoneRequestsLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalingPolicy);
        message.zoneInstancesLimit =
            object.zoneInstancesLimit !== undefined &&
                object.zoneInstancesLimit !== null
                ? Number(object.zoneInstancesLimit)
                : 0;
        message.zoneRequestsLimit =
            object.zoneRequestsLimit !== undefined &&
                object.zoneRequestsLimit !== null
                ? Number(object.zoneRequestsLimit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = Math.round(message.zoneInstancesLimit));
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = Math.round(message.zoneRequestsLimit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseScalingPolicy);
        message.zoneInstancesLimit = (_a = object.zoneInstancesLimit) !== null && _a !== void 0 ? _a : 0;
        message.zoneRequestsLimit = (_b = object.zoneRequestsLimit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalingPolicy.$type, exports.ScalingPolicy);
const baseStorageMount = {
    $type: "yandex.cloud.serverless.containers.v1.StorageMount",
    bucketId: "",
    prefix: "",
    readOnly: false,
    mountPointPath: "",
};
exports.StorageMount = {
    $type: "yandex.cloud.serverless.containers.v1.StorageMount",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketId !== "") {
            writer.uint32(10).string(message.bucketId);
        }
        if (message.prefix !== "") {
            writer.uint32(18).string(message.prefix);
        }
        if (message.readOnly === true) {
            writer.uint32(32).bool(message.readOnly);
        }
        if (message.mountPointPath !== "") {
            writer.uint32(42).string(message.mountPointPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageMount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketId = reader.string();
                    break;
                case 2:
                    message.prefix = reader.string();
                    break;
                case 4:
                    message.readOnly = reader.bool();
                    break;
                case 5:
                    message.mountPointPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStorageMount);
        message.bucketId =
            object.bucketId !== undefined && object.bucketId !== null
                ? String(object.bucketId)
                : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? String(object.prefix)
                : "";
        message.readOnly =
            object.readOnly !== undefined && object.readOnly !== null
                ? Boolean(object.readOnly)
                : false;
        message.mountPointPath =
            object.mountPointPath !== undefined && object.mountPointPath !== null
                ? String(object.mountPointPath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketId !== undefined && (obj.bucketId = message.bucketId);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.mountPointPath !== undefined &&
            (obj.mountPointPath = message.mountPointPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseStorageMount);
        message.bucketId = (_a = object.bucketId) !== null && _a !== void 0 ? _a : "";
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : "";
        message.readOnly = (_c = object.readOnly) !== null && _c !== void 0 ? _c : false;
        message.mountPointPath = (_d = object.mountPointPath) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageMount.$type, exports.StorageMount);
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
