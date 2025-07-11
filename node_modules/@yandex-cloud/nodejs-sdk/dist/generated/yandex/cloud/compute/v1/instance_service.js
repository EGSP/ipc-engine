"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInstanceOperationsResponse = exports.ListInstanceOperationsRequest = exports.UpdateInstanceNetworkInterfaceMetadata = exports.UpdateInstanceNetworkInterfaceRequest = exports.RemoveInstanceOneToOneNatMetadata = exports.RemoveInstanceOneToOneNatRequest = exports.AddInstanceOneToOneNatMetadata = exports.AddInstanceOneToOneNatRequest = exports.DetachInstanceFilesystemMetadata = exports.DetachInstanceFilesystemRequest = exports.AttachInstanceFilesystemMetadata = exports.AttachInstanceFilesystemRequest = exports.DetachInstanceDiskMetadata = exports.DetachInstanceDiskRequest = exports.AttachInstanceDiskMetadata = exports.AttachInstanceDiskRequest = exports.RestartInstanceMetadata = exports.RestartInstanceRequest = exports.StartInstanceMetadata = exports.StartInstanceRequest = exports.StopInstanceMetadata = exports.StopInstanceRequest = exports.GetInstanceSerialPortOutputResponse = exports.GetInstanceSerialPortOutputRequest = exports.UpdateInstanceMetadataMetadata = exports.UpdateInstanceMetadataRequest_UpsertEntry = exports.UpdateInstanceMetadataRequest = exports.DeleteInstanceMetadata = exports.DeleteInstanceRequest = exports.UpdateInstanceMetadata = exports.UpdateInstanceRequest_MetadataEntry = exports.UpdateInstanceRequest_LabelsEntry = exports.UpdateInstanceRequest = exports.CreateInstanceMetadata = exports.CreateInstanceRequest_MetadataEntry = exports.CreateInstanceRequest_LabelsEntry = exports.CreateInstanceRequest = exports.ListInstancesResponse = exports.ListInstancesRequest = exports.GetInstanceRequest = exports.attachedFilesystemSpec_ModeToJSON = exports.attachedFilesystemSpec_ModeFromJSON = exports.AttachedFilesystemSpec_Mode = exports.attachedDiskSpec_ModeToJSON = exports.attachedDiskSpec_ModeFromJSON = exports.AttachedDiskSpec_Mode = exports.instanceViewToJSON = exports.instanceViewFromJSON = exports.InstanceView = exports.protobufPackage = void 0;
exports.InstanceServiceClient = exports.InstanceServiceService = exports.CrashInstanceMetadata = exports.PreemptInstanceMetadata = exports.GuestStopInstanceMetadata = exports.RelocateInstanceMetadata = exports.RelocateInstanceRequest = exports.MoveInstanceMetadata = exports.MoveInstanceRequest = exports.DnsRecordSpec = exports.OneToOneNatSpec = exports.PrimaryAddressSpec = exports.NetworkInterfaceSpec = exports.AttachedFilesystemSpec = exports.AttachedLocalDiskSpec = exports.AttachedDiskSpec_DiskSpec = exports.AttachedDiskSpec = exports.ResourcesSpec = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.compute.v1";
var InstanceView;
(function (InstanceView) {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    InstanceView[InstanceView["BASIC"] = 0] = "BASIC";
    /** FULL - Returns the metadata of the instance in the server response. */
    InstanceView[InstanceView["FULL"] = 1] = "FULL";
    InstanceView[InstanceView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstanceView = exports.InstanceView || (exports.InstanceView = {}));
function instanceViewFromJSON(object) {
    switch (object) {
        case 0:
        case "BASIC":
            return InstanceView.BASIC;
        case 1:
        case "FULL":
            return InstanceView.FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return InstanceView.UNRECOGNIZED;
    }
}
exports.instanceViewFromJSON = instanceViewFromJSON;
function instanceViewToJSON(object) {
    switch (object) {
        case InstanceView.BASIC:
            return "BASIC";
        case InstanceView.FULL:
            return "FULL";
        default:
            return "UNKNOWN";
    }
}
exports.instanceViewToJSON = instanceViewToJSON;
var AttachedDiskSpec_Mode;
(function (AttachedDiskSpec_Mode) {
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDiskSpec_Mode[AttachedDiskSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDiskSpec_Mode = exports.AttachedDiskSpec_Mode || (exports.AttachedDiskSpec_Mode = {}));
function attachedDiskSpec_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedDiskSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedDiskSpec_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedDiskSpec_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedDiskSpec_Mode.UNRECOGNIZED;
    }
}
exports.attachedDiskSpec_ModeFromJSON = attachedDiskSpec_ModeFromJSON;
function attachedDiskSpec_ModeToJSON(object) {
    switch (object) {
        case AttachedDiskSpec_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedDiskSpec_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedDiskSpec_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedDiskSpec_ModeToJSON = attachedDiskSpec_ModeToJSON;
var AttachedFilesystemSpec_Mode;
(function (AttachedFilesystemSpec_Mode) {
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. Default value. */
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedFilesystemSpec_Mode[AttachedFilesystemSpec_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedFilesystemSpec_Mode = exports.AttachedFilesystemSpec_Mode || (exports.AttachedFilesystemSpec_Mode = {}));
function attachedFilesystemSpec_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedFilesystemSpec_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedFilesystemSpec_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedFilesystemSpec_Mode.UNRECOGNIZED;
    }
}
exports.attachedFilesystemSpec_ModeFromJSON = attachedFilesystemSpec_ModeFromJSON;
function attachedFilesystemSpec_ModeToJSON(object) {
    switch (object) {
        case AttachedFilesystemSpec_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedFilesystemSpec_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedFilesystemSpec_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedFilesystemSpec_ModeToJSON = attachedFilesystemSpec_ModeToJSON;
const baseGetInstanceRequest = {
    $type: "yandex.cloud.compute.v1.GetInstanceRequest",
    instanceId: "",
    view: 0,
};
exports.GetInstanceRequest = {
    $type: "yandex.cloud.compute.v1.GetInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.view =
            object.view !== undefined && object.view !== null
                ? instanceViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.view !== undefined && (obj.view = instanceViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.view = (_b = object.view) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetInstanceRequest.$type, exports.GetInstanceRequest);
const baseListInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListInstancesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListInstancesRequest = {
    $type: "yandex.cloud.compute.v1.ListInstancesRequest",
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
        if (message.orderBy !== "") {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstancesRequest);
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
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListInstancesRequest);
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
        message.orderBy =
            object.orderBy !== undefined && object.orderBy !== null
                ? String(object.orderBy)
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
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListInstancesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstancesRequest.$type, exports.ListInstancesRequest);
const baseListInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListInstancesResponse",
    nextPageToken: "",
};
exports.ListInstancesResponse = {
    $type: "yandex.cloud.compute.v1.ListInstancesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instances) {
            instance_1.Instance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstancesResponse);
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(instance_1.Instance.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListInstancesResponse);
        message.instances = ((_a = object.instances) !== null && _a !== void 0 ? _a : []).map((e) => instance_1.Instance.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? instance_1.Instance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListInstancesResponse);
        message.instances =
            ((_a = object.instances) === null || _a === void 0 ? void 0 : _a.map((e) => instance_1.Instance.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstancesResponse.$type, exports.ListInstancesResponse);
const baseCreateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    platformId: "",
    hostname: "",
    serviceAccountId: "",
};
exports.CreateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest",
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
            exports.CreateInstanceRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.platformId !== "") {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.CreateInstanceRequest_MetadataEntry.encode({
                $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.metadataOptions !== undefined) {
            instance_1.MetadataOptions.encode(message.metadataOptions, writer.uint32(154).fork()).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.bootDiskSpec, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.secondaryDiskSpecs) {
            exports.AttachedDiskSpec.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.localDiskSpecs) {
            exports.AttachedLocalDiskSpec.encode(v, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.filesystemSpecs) {
            exports.AttachedFilesystemSpec.encode(v, writer.uint32(138).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.hostname !== "") {
            writer.uint32(98).string(message.hostname);
        }
        if (message.schedulingPolicy !== undefined) {
            instance_1.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            instance_1.NetworkSettings.encode(message.networkSettings, writer.uint32(122).fork()).ldelim();
        }
        if (message.gpuSettings !== undefined) {
            instance_1.GpuSettings.encode(message.gpuSettings, writer.uint32(162).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            instance_1.PlacementPolicy.encode(message.placementPolicy, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateInstanceRequest);
        message.labels = {};
        message.metadata = {};
        message.secondaryDiskSpecs = [];
        message.localDiskSpecs = [];
        message.filesystemSpecs = [];
        message.networkInterfaceSpecs = [];
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
                    const entry4 = exports.CreateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.CreateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 19:
                    message.metadataOptions = instance_1.MetadataOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bootDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.secondaryDiskSpecs.push(exports.AttachedDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.localDiskSpecs.push(exports.AttachedLocalDiskSpec.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.filesystemSpecs.push(exports.AttachedFilesystemSpec.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.hostname = reader.string();
                    break;
                case 13:
                    message.schedulingPolicy = instance_1.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.networkSettings = instance_1.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.gpuSettings = instance_1.GpuSettings.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.placementPolicy = instance_1.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCreateInstanceRequest);
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? instance_1.MetadataOptions.fromJSON(object.metadataOptions)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.AttachedDiskSpec.fromJSON(object.bootDiskSpec)
                : undefined;
        message.secondaryDiskSpecs = ((_c = object.secondaryDiskSpecs) !== null && _c !== void 0 ? _c : []).map((e) => exports.AttachedDiskSpec.fromJSON(e));
        message.localDiskSpecs = ((_d = object.localDiskSpecs) !== null && _d !== void 0 ? _d : []).map((e) => exports.AttachedLocalDiskSpec.fromJSON(e));
        message.filesystemSpecs = ((_e = object.filesystemSpecs) !== null && _e !== void 0 ? _e : []).map((e) => exports.AttachedFilesystemSpec.fromJSON(e));
        message.networkInterfaceSpecs = ((_f = object.networkInterfaceSpecs) !== null && _f !== void 0 ? _f : []).map((e) => exports.NetworkInterfaceSpec.fromJSON(e));
        message.hostname =
            object.hostname !== undefined && object.hostname !== null
                ? String(object.hostname)
                : "";
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? instance_1.SchedulingPolicy.fromJSON(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? instance_1.NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? instance_1.GpuSettings.fromJSON(object.gpuSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? instance_1.PlacementPolicy.fromJSON(object.placementPolicy)
                : undefined;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.metadataOptions !== undefined &&
            (obj.metadataOptions = message.metadataOptions
                ? instance_1.MetadataOptions.toJSON(message.metadataOptions)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? exports.AttachedDiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        if (message.secondaryDiskSpecs) {
            obj.secondaryDiskSpecs = message.secondaryDiskSpecs.map((e) => e ? exports.AttachedDiskSpec.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDiskSpecs = [];
        }
        if (message.localDiskSpecs) {
            obj.localDiskSpecs = message.localDiskSpecs.map((e) => e ? exports.AttachedLocalDiskSpec.toJSON(e) : undefined);
        }
        else {
            obj.localDiskSpecs = [];
        }
        if (message.filesystemSpecs) {
            obj.filesystemSpecs = message.filesystemSpecs.map((e) => e ? exports.AttachedFilesystemSpec.toJSON(e) : undefined);
        }
        else {
            obj.filesystemSpecs = [];
        }
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.hostname !== undefined && (obj.hostname = message.hostname);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? instance_1.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? instance_1.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.gpuSettings !== undefined &&
            (obj.gpuSettings = message.gpuSettings
                ? instance_1.GpuSettings.toJSON(message.gpuSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? instance_1.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = Object.assign({}, baseCreateInstanceRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.zoneId = (_e = object.zoneId) !== null && _e !== void 0 ? _e : "";
        message.platformId = (_f = object.platformId) !== null && _f !== void 0 ? _f : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_g = object.metadata) !== null && _g !== void 0 ? _g : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? instance_1.MetadataOptions.fromPartial(object.metadataOptions)
                : undefined;
        message.bootDiskSpec =
            object.bootDiskSpec !== undefined && object.bootDiskSpec !== null
                ? exports.AttachedDiskSpec.fromPartial(object.bootDiskSpec)
                : undefined;
        message.secondaryDiskSpecs =
            ((_h = object.secondaryDiskSpecs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.AttachedDiskSpec.fromPartial(e))) ||
                [];
        message.localDiskSpecs =
            ((_j = object.localDiskSpecs) === null || _j === void 0 ? void 0 : _j.map((e) => exports.AttachedLocalDiskSpec.fromPartial(e))) ||
                [];
        message.filesystemSpecs =
            ((_k = object.filesystemSpecs) === null || _k === void 0 ? void 0 : _k.map((e) => exports.AttachedFilesystemSpec.fromPartial(e))) || [];
        message.networkInterfaceSpecs =
            ((_l = object.networkInterfaceSpecs) === null || _l === void 0 ? void 0 : _l.map((e) => exports.NetworkInterfaceSpec.fromPartial(e))) || [];
        message.hostname = (_m = object.hostname) !== null && _m !== void 0 ? _m : "";
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? instance_1.SchedulingPolicy.fromPartial(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId = (_o = object.serviceAccountId) !== null && _o !== void 0 ? _o : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? instance_1.NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? instance_1.GpuSettings.fromPartial(object.gpuSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? instance_1.PlacementPolicy.fromPartial(object.placementPolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceRequest.$type, exports.CreateInstanceRequest);
const baseCreateInstanceRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateInstanceRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateInstanceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateInstanceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateInstanceRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceRequest_LabelsEntry.$type, exports.CreateInstanceRequest_LabelsEntry);
const baseCreateInstanceRequest_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry",
    key: "",
    value: "",
};
exports.CreateInstanceRequest_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry",
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
        const message = Object.assign({}, baseCreateInstanceRequest_MetadataEntry);
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
        const message = Object.assign({}, baseCreateInstanceRequest_MetadataEntry);
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
        const message = Object.assign({}, baseCreateInstanceRequest_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceRequest_MetadataEntry.$type, exports.CreateInstanceRequest_MetadataEntry);
const baseCreateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.CreateInstanceMetadata",
    instanceId: "",
};
exports.CreateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.CreateInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateInstanceMetadata.$type, exports.CreateInstanceMetadata);
const baseUpdateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest",
    instanceId: "",
    name: "",
    description: "",
    platformId: "",
    serviceAccountId: "",
};
exports.UpdateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
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
            exports.UpdateInstanceRequest_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.platformId !== "") {
            writer.uint32(50).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(58).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.UpdateInstanceRequest_MetadataEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(66).fork()).ldelim();
        });
        if (message.metadataOptions !== undefined) {
            instance_1.MetadataOptions.encode(message.metadataOptions, writer.uint32(106).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            instance_1.NetworkSettings.encode(message.networkSettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            instance_1.PlacementPolicy.encode(message.placementPolicy, writer.uint32(90).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            instance_1.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceRequest);
        message.labels = {};
        message.metadata = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
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
                    const entry5 = exports.UpdateInstanceRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.platformId = reader.string();
                    break;
                case 7:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    const entry8 = exports.UpdateInstanceRequest_MetadataEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.metadata[entry8.key] = entry8.value;
                    }
                    break;
                case 13:
                    message.metadataOptions = instance_1.MetadataOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.networkSettings = instance_1.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.placementPolicy = instance_1.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.schedulingPolicy = instance_1.SchedulingPolicy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
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
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromJSON(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? instance_1.MetadataOptions.fromJSON(object.metadataOptions)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? instance_1.NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? instance_1.PlacementPolicy.fromJSON(object.placementPolicy)
                : undefined;
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? instance_1.SchedulingPolicy.fromJSON(object.schedulingPolicy)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
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
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.metadataOptions !== undefined &&
            (obj.metadataOptions = message.metadataOptions
                ? instance_1.MetadataOptions.toJSON(message.metadataOptions)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? instance_1.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? instance_1.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? instance_1.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseUpdateInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
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
        message.platformId = (_e = object.platformId) !== null && _e !== void 0 ? _e : "";
        message.resourcesSpec =
            object.resourcesSpec !== undefined && object.resourcesSpec !== null
                ? exports.ResourcesSpec.fromPartial(object.resourcesSpec)
                : undefined;
        message.metadata = Object.entries((_f = object.metadata) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? instance_1.MetadataOptions.fromPartial(object.metadataOptions)
                : undefined;
        message.serviceAccountId = (_g = object.serviceAccountId) !== null && _g !== void 0 ? _g : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? instance_1.NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? instance_1.PlacementPolicy.fromPartial(object.placementPolicy)
                : undefined;
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? instance_1.SchedulingPolicy.fromPartial(object.schedulingPolicy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceRequest.$type, exports.UpdateInstanceRequest);
const baseUpdateInstanceRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateInstanceRequest_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateInstanceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateInstanceRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateInstanceRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceRequest_LabelsEntry.$type, exports.UpdateInstanceRequest_LabelsEntry);
const baseUpdateInstanceRequest_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry",
    key: "",
    value: "",
};
exports.UpdateInstanceRequest_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry",
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
        const message = Object.assign({}, baseUpdateInstanceRequest_MetadataEntry);
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
        const message = Object.assign({}, baseUpdateInstanceRequest_MetadataEntry);
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
        const message = Object.assign({}, baseUpdateInstanceRequest_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceRequest_MetadataEntry.$type, exports.UpdateInstanceRequest_MetadataEntry);
const baseUpdateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata",
    instanceId: "",
};
exports.UpdateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceMetadata.$type, exports.UpdateInstanceMetadata);
const baseDeleteInstanceRequest = {
    $type: "yandex.cloud.compute.v1.DeleteInstanceRequest",
    instanceId: "",
};
exports.DeleteInstanceRequest = {
    $type: "yandex.cloud.compute.v1.DeleteInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstanceRequest.$type, exports.DeleteInstanceRequest);
const baseDeleteInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata",
    instanceId: "",
};
exports.DeleteInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteInstanceMetadata.$type, exports.DeleteInstanceMetadata);
const baseUpdateInstanceMetadataRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest",
    instanceId: "",
    delete: "",
};
exports.UpdateInstanceMetadataRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        for (const v of message.delete) {
            writer.uint32(18).string(v);
        }
        Object.entries(message.upsert).forEach(([key, value]) => {
            exports.UpdateInstanceMetadataRequest_UpsertEntry.encode({
                $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest);
        message.delete = [];
        message.upsert = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.delete.push(reader.string());
                    break;
                case 3:
                    const entry3 = exports.UpdateInstanceMetadataRequest_UpsertEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.upsert[entry3.key] = entry3.value;
                    }
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
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.delete = ((_a = object.delete) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.upsert = Object.entries((_b = object.upsert) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        if (message.delete) {
            obj.delete = message.delete.map((e) => e);
        }
        else {
            obj.delete = [];
        }
        obj.upsert = {};
        if (message.upsert) {
            Object.entries(message.upsert).forEach(([k, v]) => {
                obj.upsert[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.delete = ((_b = object.delete) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.upsert = Object.entries((_c = object.upsert) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceMetadataRequest.$type, exports.UpdateInstanceMetadataRequest);
const baseUpdateInstanceMetadataRequest_UpsertEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry",
    key: "",
    value: "",
};
exports.UpdateInstanceMetadataRequest_UpsertEntry = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry",
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
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest_UpsertEntry);
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
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest_UpsertEntry);
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
        const message = Object.assign({}, baseUpdateInstanceMetadataRequest_UpsertEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceMetadataRequest_UpsertEntry.$type, exports.UpdateInstanceMetadataRequest_UpsertEntry);
const baseUpdateInstanceMetadataMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata",
    instanceId: "",
};
exports.UpdateInstanceMetadataMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceMetadataMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateInstanceMetadataMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateInstanceMetadataMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceMetadataMetadata.$type, exports.UpdateInstanceMetadataMetadata);
const baseGetInstanceSerialPortOutputRequest = {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest",
    instanceId: "",
    port: 0,
};
exports.GetInstanceSerialPortOutputRequest = {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.port !== 0) {
            writer.uint32(16).int64(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetInstanceSerialPortOutputRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.port = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetInstanceSerialPortOutputRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetInstanceSerialPortOutputRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetInstanceSerialPortOutputRequest.$type, exports.GetInstanceSerialPortOutputRequest);
const baseGetInstanceSerialPortOutputResponse = {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse",
    contents: "",
};
exports.GetInstanceSerialPortOutputResponse = {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contents !== "") {
            writer.uint32(10).string(message.contents);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetInstanceSerialPortOutputResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contents = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetInstanceSerialPortOutputResponse);
        message.contents =
            object.contents !== undefined && object.contents !== null
                ? String(object.contents)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contents !== undefined && (obj.contents = message.contents);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetInstanceSerialPortOutputResponse);
        message.contents = (_a = object.contents) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetInstanceSerialPortOutputResponse.$type, exports.GetInstanceSerialPortOutputResponse);
const baseStopInstanceRequest = {
    $type: "yandex.cloud.compute.v1.StopInstanceRequest",
    instanceId: "",
};
exports.StopInstanceRequest = {
    $type: "yandex.cloud.compute.v1.StopInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstanceRequest.$type, exports.StopInstanceRequest);
const baseStopInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.StopInstanceMetadata",
    instanceId: "",
};
exports.StopInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.StopInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStopInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStopInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStopInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopInstanceMetadata.$type, exports.StopInstanceMetadata);
const baseStartInstanceRequest = {
    $type: "yandex.cloud.compute.v1.StartInstanceRequest",
    instanceId: "",
};
exports.StartInstanceRequest = {
    $type: "yandex.cloud.compute.v1.StartInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartInstanceRequest.$type, exports.StartInstanceRequest);
const baseStartInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.StartInstanceMetadata",
    instanceId: "",
};
exports.StartInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.StartInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStartInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStartInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStartInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartInstanceMetadata.$type, exports.StartInstanceMetadata);
const baseRestartInstanceRequest = {
    $type: "yandex.cloud.compute.v1.RestartInstanceRequest",
    instanceId: "",
};
exports.RestartInstanceRequest = {
    $type: "yandex.cloud.compute.v1.RestartInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestartInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestartInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestartInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestartInstanceRequest.$type, exports.RestartInstanceRequest);
const baseRestartInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.RestartInstanceMetadata",
    instanceId: "",
};
exports.RestartInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.RestartInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRestartInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRestartInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRestartInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RestartInstanceMetadata.$type, exports.RestartInstanceMetadata);
const baseAttachInstanceDiskRequest = {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest",
    instanceId: "",
};
exports.AttachInstanceDiskRequest = {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedDiskSpec !== undefined) {
            exports.AttachedDiskSpec.encode(message.attachedDiskSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachInstanceDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedDiskSpec = exports.AttachedDiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachInstanceDiskRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.attachedDiskSpec =
            object.attachedDiskSpec !== undefined && object.attachedDiskSpec !== null
                ? exports.AttachedDiskSpec.fromJSON(object.attachedDiskSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.attachedDiskSpec !== undefined &&
            (obj.attachedDiskSpec = message.attachedDiskSpec
                ? exports.AttachedDiskSpec.toJSON(message.attachedDiskSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAttachInstanceDiskRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.attachedDiskSpec =
            object.attachedDiskSpec !== undefined && object.attachedDiskSpec !== null
                ? exports.AttachedDiskSpec.fromPartial(object.attachedDiskSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachInstanceDiskRequest.$type, exports.AttachInstanceDiskRequest);
const baseAttachInstanceDiskMetadata = {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata",
    instanceId: "",
    diskId: "",
};
exports.AttachInstanceDiskMetadata = {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== "") {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachInstanceDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachInstanceDiskMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAttachInstanceDiskMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.diskId = (_b = object.diskId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachInstanceDiskMetadata.$type, exports.AttachInstanceDiskMetadata);
const baseDetachInstanceDiskRequest = {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest",
    instanceId: "",
};
exports.DetachInstanceDiskRequest = {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== undefined) {
            writer.uint32(18).string(message.diskId);
        }
        if (message.deviceName !== undefined) {
            writer.uint32(26).string(message.deviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachInstanceDiskRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                case 3:
                    message.deviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachInstanceDiskRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : undefined;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDetachInstanceDiskRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.diskId = (_b = object.diskId) !== null && _b !== void 0 ? _b : undefined;
        message.deviceName = (_c = object.deviceName) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachInstanceDiskRequest.$type, exports.DetachInstanceDiskRequest);
const baseDetachInstanceDiskMetadata = {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata",
    instanceId: "",
    diskId: "",
};
exports.DetachInstanceDiskMetadata = {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.diskId !== "") {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachInstanceDiskMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachInstanceDiskMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDetachInstanceDiskMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.diskId = (_b = object.diskId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachInstanceDiskMetadata.$type, exports.DetachInstanceDiskMetadata);
const baseAttachInstanceFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest",
    instanceId: "",
};
exports.AttachInstanceFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.attachedFilesystemSpec !== undefined) {
            exports.AttachedFilesystemSpec.encode(message.attachedFilesystemSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachInstanceFilesystemRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.attachedFilesystemSpec = exports.AttachedFilesystemSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachInstanceFilesystemRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.attachedFilesystemSpec =
            object.attachedFilesystemSpec !== undefined &&
                object.attachedFilesystemSpec !== null
                ? exports.AttachedFilesystemSpec.fromJSON(object.attachedFilesystemSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.attachedFilesystemSpec !== undefined &&
            (obj.attachedFilesystemSpec = message.attachedFilesystemSpec
                ? exports.AttachedFilesystemSpec.toJSON(message.attachedFilesystemSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAttachInstanceFilesystemRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.attachedFilesystemSpec =
            object.attachedFilesystemSpec !== undefined &&
                object.attachedFilesystemSpec !== null
                ? exports.AttachedFilesystemSpec.fromPartial(object.attachedFilesystemSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachInstanceFilesystemRequest.$type, exports.AttachInstanceFilesystemRequest);
const baseAttachInstanceFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata",
    instanceId: "",
    filesystemId: "",
};
exports.AttachInstanceFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== "") {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachInstanceFilesystemMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachInstanceFilesystemMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAttachInstanceFilesystemMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.filesystemId = (_b = object.filesystemId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachInstanceFilesystemMetadata.$type, exports.AttachInstanceFilesystemMetadata);
const baseDetachInstanceFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest",
    instanceId: "",
};
exports.DetachInstanceFilesystemRequest = {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== undefined) {
            writer.uint32(18).string(message.filesystemId);
        }
        if (message.deviceName !== undefined) {
            writer.uint32(26).string(message.deviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachInstanceFilesystemRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                case 3:
                    message.deviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachInstanceFilesystemRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : undefined;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDetachInstanceFilesystemRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.filesystemId = (_b = object.filesystemId) !== null && _b !== void 0 ? _b : undefined;
        message.deviceName = (_c = object.deviceName) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachInstanceFilesystemRequest.$type, exports.DetachInstanceFilesystemRequest);
const baseDetachInstanceFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata",
    instanceId: "",
    filesystemId: "",
};
exports.DetachInstanceFilesystemMetadata = {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.filesystemId !== "") {
            writer.uint32(18).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDetachInstanceFilesystemMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDetachInstanceFilesystemMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDetachInstanceFilesystemMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.filesystemId = (_b = object.filesystemId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DetachInstanceFilesystemMetadata.$type, exports.DetachInstanceFilesystemMetadata);
const baseAddInstanceOneToOneNatRequest = {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest",
    instanceId: "",
    networkInterfaceIndex: "",
    internalAddress: "",
};
exports.AddInstanceOneToOneNatRequest = {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== "") {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.internalAddress !== "") {
            writer.uint32(26).string(message.internalAddress);
        }
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddInstanceOneToOneNatRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.internalAddress = reader.string();
                    break;
                case 4:
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddInstanceOneToOneNatRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.networkInterfaceIndex =
            object.networkInterfaceIndex !== undefined &&
                object.networkInterfaceIndex !== null
                ? String(object.networkInterfaceIndex)
                : "";
        message.internalAddress =
            object.internalAddress !== undefined && object.internalAddress !== null
                ? String(object.internalAddress)
                : "";
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAddInstanceOneToOneNatRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.networkInterfaceIndex = (_b = object.networkInterfaceIndex) !== null && _b !== void 0 ? _b : "";
        message.internalAddress = (_c = object.internalAddress) !== null && _c !== void 0 ? _c : "";
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddInstanceOneToOneNatRequest.$type, exports.AddInstanceOneToOneNatRequest);
const baseAddInstanceOneToOneNatMetadata = {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata",
    instanceId: "",
};
exports.AddInstanceOneToOneNatMetadata = {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddInstanceOneToOneNatMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddInstanceOneToOneNatMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAddInstanceOneToOneNatMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddInstanceOneToOneNatMetadata.$type, exports.AddInstanceOneToOneNatMetadata);
const baseRemoveInstanceOneToOneNatRequest = {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest",
    instanceId: "",
    networkInterfaceIndex: "",
    internalAddress: "",
};
exports.RemoveInstanceOneToOneNatRequest = {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== "") {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.internalAddress !== "") {
            writer.uint32(26).string(message.internalAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.internalAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.networkInterfaceIndex =
            object.networkInterfaceIndex !== undefined &&
                object.networkInterfaceIndex !== null
                ? String(object.networkInterfaceIndex)
                : "";
        message.internalAddress =
            object.internalAddress !== undefined && object.internalAddress !== null
                ? String(object.internalAddress)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.internalAddress !== undefined &&
            (obj.internalAddress = message.internalAddress);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.networkInterfaceIndex = (_b = object.networkInterfaceIndex) !== null && _b !== void 0 ? _b : "";
        message.internalAddress = (_c = object.internalAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveInstanceOneToOneNatRequest.$type, exports.RemoveInstanceOneToOneNatRequest);
const baseRemoveInstanceOneToOneNatMetadata = {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata",
    instanceId: "",
};
exports.RemoveInstanceOneToOneNatMetadata = {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRemoveInstanceOneToOneNatMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveInstanceOneToOneNatMetadata.$type, exports.RemoveInstanceOneToOneNatMetadata);
const baseUpdateInstanceNetworkInterfaceRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest",
    instanceId: "",
    networkInterfaceIndex: "",
    subnetId: "",
    securityGroupIds: "",
};
exports.UpdateInstanceNetworkInterfaceRequest = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== "") {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.subnetId !== "") {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceRequest);
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
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
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.networkInterfaceIndex =
            object.networkInterfaceIndex !== undefined &&
                object.networkInterfaceIndex !== null
                ? String(object.networkInterfaceIndex)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_a = object.securityGroupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.networkInterfaceIndex = (_b = object.networkInterfaceIndex) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_d = object.securityGroupIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceNetworkInterfaceRequest.$type, exports.UpdateInstanceNetworkInterfaceRequest);
const baseUpdateInstanceNetworkInterfaceMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata",
    instanceId: "",
    networkInterfaceIndex: "",
};
exports.UpdateInstanceNetworkInterfaceMetadata = {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.networkInterfaceIndex !== "") {
            writer.uint32(18).string(message.networkInterfaceIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.networkInterfaceIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.networkInterfaceIndex =
            object.networkInterfaceIndex !== undefined &&
                object.networkInterfaceIndex !== null
                ? String(object.networkInterfaceIndex)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.networkInterfaceIndex !== undefined &&
            (obj.networkInterfaceIndex = message.networkInterfaceIndex);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateInstanceNetworkInterfaceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.networkInterfaceIndex = (_b = object.networkInterfaceIndex) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateInstanceNetworkInterfaceMetadata.$type, exports.UpdateInstanceNetworkInterfaceMetadata);
const baseListInstanceOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest",
    instanceId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListInstanceOperationsRequest = {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListInstanceOperationsRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListInstanceOperationsRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceOperationsRequest.$type, exports.ListInstanceOperationsRequest);
const baseListInstanceOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse",
    nextPageToken: "",
};
exports.ListInstanceOperationsResponse = {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListInstanceOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListInstanceOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListInstanceOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListInstanceOperationsResponse.$type, exports.ListInstanceOperationsResponse);
const baseResourcesSpec = {
    $type: "yandex.cloud.compute.v1.ResourcesSpec",
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    $type: "yandex.cloud.compute.v1.ResourcesSpec",
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
        if (message.gpus !== 0) {
            writer.uint32(32).int64(message.gpus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResourcesSpec);
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
                case 4:
                    message.gpus = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResourcesSpec);
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
        message.gpus =
            object.gpus !== undefined && object.gpus !== null
                ? Number(object.gpus)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = Math.round(message.memory));
        message.cores !== undefined && (obj.cores = Math.round(message.cores));
        message.coreFraction !== undefined &&
            (obj.coreFraction = Math.round(message.coreFraction));
        message.gpus !== undefined && (obj.gpus = Math.round(message.gpus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseResourcesSpec);
        message.memory = (_a = object.memory) !== null && _a !== void 0 ? _a : 0;
        message.cores = (_b = object.cores) !== null && _b !== void 0 ? _b : 0;
        message.coreFraction = (_c = object.coreFraction) !== null && _c !== void 0 ? _c : 0;
        message.gpus = (_d = object.gpus) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourcesSpec.$type, exports.ResourcesSpec);
const baseAttachedDiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec",
    mode: 0,
    deviceName: "",
    autoDelete: false,
};
exports.AttachedDiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.autoDelete === true) {
            writer.uint32(24).bool(message.autoDelete);
        }
        if (message.diskSpec !== undefined) {
            exports.AttachedDiskSpec_DiskSpec.encode(message.diskSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.diskId !== undefined) {
            writer.uint32(42).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.autoDelete = reader.bool();
                    break;
                case 4:
                    message.diskSpec = exports.AttachedDiskSpec_DiskSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedDiskSpec);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedDiskSpec_ModeFromJSON(object.mode)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.autoDelete =
            object.autoDelete !== undefined && object.autoDelete !== null
                ? Boolean(object.autoDelete)
                : false;
        message.diskSpec =
            object.diskSpec !== undefined && object.diskSpec !== null
                ? exports.AttachedDiskSpec_DiskSpec.fromJSON(object.diskSpec)
                : undefined;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedDiskSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
        message.diskSpec !== undefined &&
            (obj.diskSpec = message.diskSpec
                ? exports.AttachedDiskSpec_DiskSpec.toJSON(message.diskSpec)
                : undefined);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAttachedDiskSpec);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.autoDelete = (_c = object.autoDelete) !== null && _c !== void 0 ? _c : false;
        message.diskSpec =
            object.diskSpec !== undefined && object.diskSpec !== null
                ? exports.AttachedDiskSpec_DiskSpec.fromPartial(object.diskSpec)
                : undefined;
        message.diskId = (_d = object.diskId) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec.$type, exports.AttachedDiskSpec);
const baseAttachedDiskSpec_DiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec",
    name: "",
    description: "",
    typeId: "",
    size: 0,
    blockSize: 0,
};
exports.AttachedDiskSpec_DiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.typeId !== "") {
            writer.uint32(26).string(message.typeId);
        }
        if (message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(64).int64(message.blockSize);
        }
        if (message.diskPlacementPolicy !== undefined) {
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.imageId !== undefined) {
            writer.uint32(42).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(50).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.typeId = reader.string();
                    break;
                case 4:
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.imageId = reader.string();
                    break;
                case 6:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? String(object.typeId)
                : "";
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.blockSize =
            object.blockSize !== undefined && object.blockSize !== null
                ? Number(object.blockSize)
                : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy)
                : undefined;
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.snapshotId =
            object.snapshotId !== undefined && object.snapshotId !== null
                ? String(object.snapshotId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.blockSize !== undefined &&
            (obj.blockSize = Math.round(message.blockSize));
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseAttachedDiskSpec_DiskSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.typeId = (_c = object.typeId) !== null && _c !== void 0 ? _c : "";
        message.size = (_d = object.size) !== null && _d !== void 0 ? _d : 0;
        message.blockSize = (_e = object.blockSize) !== null && _e !== void 0 ? _e : 0;
        message.diskPlacementPolicy =
            object.diskPlacementPolicy !== undefined &&
                object.diskPlacementPolicy !== null
                ? disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy)
                : undefined;
        message.imageId = (_f = object.imageId) !== null && _f !== void 0 ? _f : undefined;
        message.snapshotId = (_g = object.snapshotId) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDiskSpec_DiskSpec.$type, exports.AttachedDiskSpec_DiskSpec);
const baseAttachedLocalDiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec",
    size: 0,
};
exports.AttachedLocalDiskSpec = {
    $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedLocalDiskSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedLocalDiskSpec);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAttachedLocalDiskSpec);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedLocalDiskSpec.$type, exports.AttachedLocalDiskSpec);
const baseAttachedFilesystemSpec = {
    $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec",
    mode: 0,
    deviceName: "",
    filesystemId: "",
};
exports.AttachedFilesystemSpec = {
    $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.filesystemId !== "") {
            writer.uint32(26).string(message.filesystemId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedFilesystemSpec_ModeFromJSON(object.mode)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.filesystemId =
            object.filesystemId !== undefined && object.filesystemId !== null
                ? String(object.filesystemId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedFilesystemSpec_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAttachedFilesystemSpec);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.filesystemId = (_c = object.filesystemId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedFilesystemSpec.$type, exports.AttachedFilesystemSpec);
const baseNetworkInterfaceSpec = {
    $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec",
    subnetId: "",
    securityGroupIds: "",
};
exports.NetworkInterfaceSpec = {
    $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== "") {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.PrimaryAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.primaryV4AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.primaryV6AddressSpec = exports.PrimaryAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.securityGroupIds.push(reader.string());
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
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromJSON(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_a = object.securityGroupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.PrimaryAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseNetworkInterfaceSpec);
        message.subnetId = (_a = object.subnetId) !== null && _a !== void 0 ? _a : "";
        message.primaryV4AddressSpec =
            object.primaryV4AddressSpec !== undefined &&
                object.primaryV4AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV4AddressSpec)
                : undefined;
        message.primaryV6AddressSpec =
            object.primaryV6AddressSpec !== undefined &&
                object.primaryV6AddressSpec !== null
                ? exports.PrimaryAddressSpec.fromPartial(object.primaryV6AddressSpec)
                : undefined;
        message.securityGroupIds = ((_b = object.securityGroupIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterfaceSpec.$type, exports.NetworkInterfaceSpec);
const basePrimaryAddressSpec = {
    $type: "yandex.cloud.compute.v1.PrimaryAddressSpec",
    address: "",
};
exports.PrimaryAddressSpec = {
    $type: "yandex.cloud.compute.v1.PrimaryAddressSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs = ((_a = object.dnsRecordSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecordSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrimaryAddressSpec);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.oneToOneNatSpec =
            object.oneToOneNatSpec !== undefined && object.oneToOneNatSpec !== null
                ? exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec)
                : undefined;
        message.dnsRecordSpecs =
            ((_b = object.dnsRecordSpecs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.DnsRecordSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddressSpec.$type, exports.PrimaryAddressSpec);
const baseOneToOneNatSpec = {
    $type: "yandex.cloud.compute.v1.OneToOneNatSpec",
    ipVersion: 0,
    address: "",
};
exports.OneToOneNatSpec = {
    $type: "yandex.cloud.compute.v1.OneToOneNatSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.dnsRecordSpecs) {
            exports.DnsRecordSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.dnsRecordSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.dnsRecordSpecs.push(exports.DnsRecordSpec.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? (0, instance_1.ipVersionFromJSON)(object.ipVersion)
                : 0;
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.dnsRecordSpecs = ((_a = object.dnsRecordSpecs) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecordSpec.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, instance_1.ipVersionToJSON)(message.ipVersion));
        message.address !== undefined && (obj.address = message.address);
        if (message.dnsRecordSpecs) {
            obj.dnsRecordSpecs = message.dnsRecordSpecs.map((e) => e ? exports.DnsRecordSpec.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecordSpecs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOneToOneNatSpec);
        message.ipVersion = (_a = object.ipVersion) !== null && _a !== void 0 ? _a : 0;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.dnsRecordSpecs =
            ((_c = object.dnsRecordSpecs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.DnsRecordSpec.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNatSpec.$type, exports.OneToOneNatSpec);
const baseDnsRecordSpec = {
    $type: "yandex.cloud.compute.v1.DnsRecordSpec",
    fqdn: "",
    dnsZoneId: "",
    ttl: 0,
    ptr: false,
};
exports.DnsRecordSpec = {
    $type: "yandex.cloud.compute.v1.DnsRecordSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fqdn !== "") {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== "") {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDnsRecordSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64());
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDnsRecordSpec);
        message.fqdn =
            object.fqdn !== undefined && object.fqdn !== null
                ? String(object.fqdn)
                : "";
        message.dnsZoneId =
            object.dnsZoneId !== undefined && object.dnsZoneId !== null
                ? String(object.dnsZoneId)
                : "";
        message.ttl =
            object.ttl !== undefined && object.ttl !== null ? Number(object.ttl) : 0;
        message.ptr =
            object.ptr !== undefined && object.ptr !== null
                ? Boolean(object.ptr)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDnsRecordSpec);
        message.fqdn = (_a = object.fqdn) !== null && _a !== void 0 ? _a : "";
        message.dnsZoneId = (_b = object.dnsZoneId) !== null && _b !== void 0 ? _b : "";
        message.ttl = (_c = object.ttl) !== null && _c !== void 0 ? _c : 0;
        message.ptr = (_d = object.ptr) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecordSpec.$type, exports.DnsRecordSpec);
const baseMoveInstanceRequest = {
    $type: "yandex.cloud.compute.v1.MoveInstanceRequest",
    instanceId: "",
    destinationFolderId: "",
};
exports.MoveInstanceRequest = {
    $type: "yandex.cloud.compute.v1.MoveInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMoveInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.destinationFolderId = (_b = object.destinationFolderId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveInstanceRequest.$type, exports.MoveInstanceRequest);
const baseMoveInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.MoveInstanceMetadata",
    instanceId: "",
    sourceFolderId: "",
    destinationFolderId: "",
};
exports.MoveInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.MoveInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.sourceFolderId !== "") {
            writer.uint32(18).string(message.sourceFolderId);
        }
        if (message.destinationFolderId !== "") {
            writer.uint32(26).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMoveInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.sourceFolderId = reader.string();
                    break;
                case 3:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMoveInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.sourceFolderId =
            object.sourceFolderId !== undefined && object.sourceFolderId !== null
                ? String(object.sourceFolderId)
                : "";
        message.destinationFolderId =
            object.destinationFolderId !== undefined &&
                object.destinationFolderId !== null
                ? String(object.destinationFolderId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.sourceFolderId !== undefined &&
            (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMoveInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.sourceFolderId = (_b = object.sourceFolderId) !== null && _b !== void 0 ? _b : "";
        message.destinationFolderId = (_c = object.destinationFolderId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MoveInstanceMetadata.$type, exports.MoveInstanceMetadata);
const baseRelocateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.RelocateInstanceRequest",
    instanceId: "",
    destinationZoneId: "",
};
exports.RelocateInstanceRequest = {
    $type: "yandex.cloud.compute.v1.RelocateInstanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.destinationZoneId !== "") {
            writer.uint32(18).string(message.destinationZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRelocateInstanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.destinationZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRelocateInstanceRequest);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.destinationZoneId =
            object.destinationZoneId !== undefined &&
                object.destinationZoneId !== null
                ? String(object.destinationZoneId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.destinationZoneId !== undefined &&
            (obj.destinationZoneId = message.destinationZoneId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRelocateInstanceRequest);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.destinationZoneId = (_b = object.destinationZoneId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RelocateInstanceRequest.$type, exports.RelocateInstanceRequest);
const baseRelocateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata",
    instanceId: "",
    sourceZoneId: "",
    destinationZoneId: "",
};
exports.RelocateInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.sourceZoneId !== "") {
            writer.uint32(18).string(message.sourceZoneId);
        }
        if (message.destinationZoneId !== "") {
            writer.uint32(26).string(message.destinationZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRelocateInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.sourceZoneId = reader.string();
                    break;
                case 3:
                    message.destinationZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRelocateInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        message.sourceZoneId =
            object.sourceZoneId !== undefined && object.sourceZoneId !== null
                ? String(object.sourceZoneId)
                : "";
        message.destinationZoneId =
            object.destinationZoneId !== undefined &&
                object.destinationZoneId !== null
                ? String(object.destinationZoneId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.sourceZoneId !== undefined &&
            (obj.sourceZoneId = message.sourceZoneId);
        message.destinationZoneId !== undefined &&
            (obj.destinationZoneId = message.destinationZoneId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRelocateInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.sourceZoneId = (_b = object.sourceZoneId) !== null && _b !== void 0 ? _b : "";
        message.destinationZoneId = (_c = object.destinationZoneId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RelocateInstanceMetadata.$type, exports.RelocateInstanceMetadata);
const baseGuestStopInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata",
    instanceId: "",
};
exports.GuestStopInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGuestStopInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGuestStopInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGuestStopInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GuestStopInstanceMetadata.$type, exports.GuestStopInstanceMetadata);
const basePreemptInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata",
    instanceId: "",
};
exports.PreemptInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePreemptInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePreemptInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePreemptInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PreemptInstanceMetadata.$type, exports.PreemptInstanceMetadata);
const baseCrashInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.CrashInstanceMetadata",
    instanceId: "",
};
exports.CrashInstanceMetadata = {
    $type: "yandex.cloud.compute.v1.CrashInstanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCrashInstanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCrashInstanceMetadata);
        message.instanceId =
            object.instanceId !== undefined && object.instanceId !== null
                ? String(object.instanceId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCrashInstanceMetadata);
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CrashInstanceMetadata.$type, exports.CrashInstanceMetadata);
/** A set of methods for managing Instance resources. */
exports.InstanceServiceService = {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.compute.v1.InstanceService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(instance_1.Instance.encode(value).finish()),
        responseDeserialize: (value) => instance_1.Instance.decode(value),
    },
    /** Retrieves the list of Instance resources in the specified folder. */
    list: {
        path: "/yandex.cloud.compute.v1.InstanceService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstancesResponse.decode(value),
    },
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: "/yandex.cloud.compute.v1.InstanceService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified instance. */
    update: {
        path: "/yandex.cloud.compute.v1.InstanceService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified instance. */
    delete: {
        path: "/yandex.cloud.compute.v1.InstanceService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the metadata of the specified instance. */
    updateMetadata: {
        path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceMetadataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceMetadataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: {
        path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetInstanceSerialPortOutputRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetInstanceSerialPortOutputRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetInstanceSerialPortOutputResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetInstanceSerialPortOutputResponse.decode(value),
    },
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop: {
        path: "/yandex.cloud.compute.v1.InstanceService/Stop",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the stopped instance. */
    start: {
        path: "/yandex.cloud.compute.v1.InstanceService/Start",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restarts the running instance. */
    restart: {
        path: "/yandex.cloud.compute.v1.InstanceService/Restart",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RestartInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RestartInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches the disk to the instance. */
    attachDisk: {
        path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AttachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches the disk from the instance. */
    detachDisk: {
        path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetachInstanceDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachInstanceDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    attachFilesystem: {
        path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AttachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AttachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem: {
        path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetachInstanceFilesystemRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetachInstanceFilesystemRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: {
        path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: {
        path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveInstanceOneToOneNatRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveInstanceOneToOneNatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified instance network interface. */
    updateNetworkInterface: {
        path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateInstanceNetworkInterfaceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateInstanceNetworkInterfaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified instance. */
    listOperations: {
        path: "/yandex.cloud.compute.v1.InstanceService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListInstanceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListInstanceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListInstanceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListInstanceOperationsResponse.decode(value),
    },
    /**
     * Moves the specified instance to another folder of the same cloud.
     *
     * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
     *
     * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
     * that have been recorded to the source folder prior to moving will be retained.
     */
    move: {
        path: "/yandex.cloud.compute.v1.InstanceService/Move",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Moves the specified instance to another availability zone
     *
     * Running instance will be restarted during this operation.
     */
    relocate: {
        path: "/yandex.cloud.compute.v1.InstanceService/Relocate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RelocateInstanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RelocateInstanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists access bindings for the instance. */
    listAccessBindings: {
        path: "/yandex.cloud.compute.v1.InstanceService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the instance. */
    setAccessBindings: {
        path: "/yandex.cloud.compute.v1.InstanceService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the instance. */
    updateAccessBindings: {
        path: "/yandex.cloud.compute.v1.InstanceService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.InstanceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.InstanceServiceService, "yandex.cloud.compute.v1.InstanceService");
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
