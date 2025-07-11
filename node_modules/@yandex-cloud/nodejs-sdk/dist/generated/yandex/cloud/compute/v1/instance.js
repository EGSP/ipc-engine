"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataOptions = exports.PlacementPolicy_HostAffinityRule = exports.PlacementPolicy = exports.GpuSettings = exports.NetworkSettings = exports.SchedulingPolicy = exports.DnsRecord = exports.OneToOneNat = exports.PrimaryAddress = exports.NetworkInterface = exports.AttachedFilesystem = exports.AttachedLocalDisk = exports.AttachedDisk = exports.Resources = exports.Instance_MetadataEntry = exports.Instance_LabelsEntry = exports.Instance = exports.placementPolicy_HostAffinityRule_OperatorToJSON = exports.placementPolicy_HostAffinityRule_OperatorFromJSON = exports.PlacementPolicy_HostAffinityRule_Operator = exports.networkSettings_TypeToJSON = exports.networkSettings_TypeFromJSON = exports.NetworkSettings_Type = exports.attachedFilesystem_ModeToJSON = exports.attachedFilesystem_ModeFromJSON = exports.AttachedFilesystem_Mode = exports.attachedDisk_ModeToJSON = exports.attachedDisk_ModeFromJSON = exports.AttachedDisk_Mode = exports.instance_StatusToJSON = exports.instance_StatusFromJSON = exports.Instance_Status = exports.metadataOptionToJSON = exports.metadataOptionFromJSON = exports.MetadataOption = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address, for example 192.0.2.235. */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address. Not available yet. */
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "IP_VERSION_UNSPECIFIED":
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case "IPV4":
            return IpVersion.IPV4;
        case 2:
        case "IPV6":
            return IpVersion.IPV6;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return "IP_VERSION_UNSPECIFIED";
        case IpVersion.IPV4:
            return "IPV4";
        case IpVersion.IPV6:
            return "IPV6";
        default:
            return "UNKNOWN";
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
var MetadataOption;
(function (MetadataOption) {
    MetadataOption[MetadataOption["METADATA_OPTION_UNSPECIFIED"] = 0] = "METADATA_OPTION_UNSPECIFIED";
    /** ENABLED - Option is enabled */
    MetadataOption[MetadataOption["ENABLED"] = 1] = "ENABLED";
    /** DISABLED - Option is disabled */
    MetadataOption[MetadataOption["DISABLED"] = 2] = "DISABLED";
    MetadataOption[MetadataOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MetadataOption = exports.MetadataOption || (exports.MetadataOption = {}));
function metadataOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "METADATA_OPTION_UNSPECIFIED":
            return MetadataOption.METADATA_OPTION_UNSPECIFIED;
        case 1:
        case "ENABLED":
            return MetadataOption.ENABLED;
        case 2:
        case "DISABLED":
            return MetadataOption.DISABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MetadataOption.UNRECOGNIZED;
    }
}
exports.metadataOptionFromJSON = metadataOptionFromJSON;
function metadataOptionToJSON(object) {
    switch (object) {
        case MetadataOption.METADATA_OPTION_UNSPECIFIED:
            return "METADATA_OPTION_UNSPECIFIED";
        case MetadataOption.ENABLED:
            return "ENABLED";
        case MetadataOption.DISABLED:
            return "DISABLED";
        default:
            return "UNKNOWN";
    }
}
exports.metadataOptionToJSON = metadataOptionToJSON;
var Instance_Status;
(function (Instance_Status) {
    Instance_Status[Instance_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Instance is waiting for resources to be allocated. */
    Instance_Status[Instance_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** RUNNING - Instance is running normally. */
    Instance_Status[Instance_Status["RUNNING"] = 2] = "RUNNING";
    /** STOPPING - Instance is being stopped. */
    Instance_Status[Instance_Status["STOPPING"] = 3] = "STOPPING";
    /** STOPPED - Instance stopped. */
    Instance_Status[Instance_Status["STOPPED"] = 4] = "STOPPED";
    /** STARTING - Instance is being started. */
    Instance_Status[Instance_Status["STARTING"] = 5] = "STARTING";
    /** RESTARTING - Instance is being restarted. */
    Instance_Status[Instance_Status["RESTARTING"] = 6] = "RESTARTING";
    /** UPDATING - Instance is being updated. */
    Instance_Status[Instance_Status["UPDATING"] = 7] = "UPDATING";
    /** ERROR - Instance encountered a problem and cannot operate. */
    Instance_Status[Instance_Status["ERROR"] = 8] = "ERROR";
    /** CRASHED - Instance crashed and will be restarted automatically. */
    Instance_Status[Instance_Status["CRASHED"] = 9] = "CRASHED";
    /** DELETING - Instance is being deleted. */
    Instance_Status[Instance_Status["DELETING"] = 10] = "DELETING";
    Instance_Status[Instance_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Instance_Status = exports.Instance_Status || (exports.Instance_Status = {}));
function instance_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Instance_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PROVISIONING":
            return Instance_Status.PROVISIONING;
        case 2:
        case "RUNNING":
            return Instance_Status.RUNNING;
        case 3:
        case "STOPPING":
            return Instance_Status.STOPPING;
        case 4:
        case "STOPPED":
            return Instance_Status.STOPPED;
        case 5:
        case "STARTING":
            return Instance_Status.STARTING;
        case 6:
        case "RESTARTING":
            return Instance_Status.RESTARTING;
        case 7:
        case "UPDATING":
            return Instance_Status.UPDATING;
        case 8:
        case "ERROR":
            return Instance_Status.ERROR;
        case 9:
        case "CRASHED":
            return Instance_Status.CRASHED;
        case 10:
        case "DELETING":
            return Instance_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Instance_Status.UNRECOGNIZED;
    }
}
exports.instance_StatusFromJSON = instance_StatusFromJSON;
function instance_StatusToJSON(object) {
    switch (object) {
        case Instance_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Instance_Status.PROVISIONING:
            return "PROVISIONING";
        case Instance_Status.RUNNING:
            return "RUNNING";
        case Instance_Status.STOPPING:
            return "STOPPING";
        case Instance_Status.STOPPED:
            return "STOPPED";
        case Instance_Status.STARTING:
            return "STARTING";
        case Instance_Status.RESTARTING:
            return "RESTARTING";
        case Instance_Status.UPDATING:
            return "UPDATING";
        case Instance_Status.ERROR:
            return "ERROR";
        case Instance_Status.CRASHED:
            return "CRASHED";
        case Instance_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.instance_StatusToJSON = instance_StatusToJSON;
var AttachedDisk_Mode;
(function (AttachedDisk_Mode) {
    AttachedDisk_Mode[AttachedDisk_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedDisk_Mode[AttachedDisk_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
    AttachedDisk_Mode[AttachedDisk_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedDisk_Mode[AttachedDisk_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedDisk_Mode = exports.AttachedDisk_Mode || (exports.AttachedDisk_Mode = {}));
function attachedDisk_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedDisk_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedDisk_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedDisk_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedDisk_Mode.UNRECOGNIZED;
    }
}
exports.attachedDisk_ModeFromJSON = attachedDisk_ModeFromJSON;
function attachedDisk_ModeToJSON(object) {
    switch (object) {
        case AttachedDisk_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedDisk_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedDisk_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedDisk_ModeToJSON = attachedDisk_ModeToJSON;
var AttachedFilesystem_Mode;
(function (AttachedFilesystem_Mode) {
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** READ_ONLY - Read-only access. */
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["READ_ONLY"] = 1] = "READ_ONLY";
    /** READ_WRITE - Read/Write access. */
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["READ_WRITE"] = 2] = "READ_WRITE";
    AttachedFilesystem_Mode[AttachedFilesystem_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AttachedFilesystem_Mode = exports.AttachedFilesystem_Mode || (exports.AttachedFilesystem_Mode = {}));
function attachedFilesystem_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case "MODE_UNSPECIFIED":
            return AttachedFilesystem_Mode.MODE_UNSPECIFIED;
        case 1:
        case "READ_ONLY":
            return AttachedFilesystem_Mode.READ_ONLY;
        case 2:
        case "READ_WRITE":
            return AttachedFilesystem_Mode.READ_WRITE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AttachedFilesystem_Mode.UNRECOGNIZED;
    }
}
exports.attachedFilesystem_ModeFromJSON = attachedFilesystem_ModeFromJSON;
function attachedFilesystem_ModeToJSON(object) {
    switch (object) {
        case AttachedFilesystem_Mode.MODE_UNSPECIFIED:
            return "MODE_UNSPECIFIED";
        case AttachedFilesystem_Mode.READ_ONLY:
            return "READ_ONLY";
        case AttachedFilesystem_Mode.READ_WRITE:
            return "READ_WRITE";
        default:
            return "UNKNOWN";
    }
}
exports.attachedFilesystem_ModeToJSON = attachedFilesystem_ModeToJSON;
var NetworkSettings_Type;
(function (NetworkSettings_Type) {
    NetworkSettings_Type[NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** STANDARD - Standard network. */
    NetworkSettings_Type[NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    /** SOFTWARE_ACCELERATED - Software accelerated network. */
    NetworkSettings_Type[NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
    /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
    NetworkSettings_Type[NetworkSettings_Type["HARDWARE_ACCELERATED"] = 3] = "HARDWARE_ACCELERATED";
    NetworkSettings_Type[NetworkSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkSettings_Type = exports.NetworkSettings_Type || (exports.NetworkSettings_Type = {}));
function networkSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case "STANDARD":
            return NetworkSettings_Type.STANDARD;
        case 2:
        case "SOFTWARE_ACCELERATED":
            return NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case 3:
        case "HARDWARE_ACCELERATED":
            return NetworkSettings_Type.HARDWARE_ACCELERATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NetworkSettings_Type.UNRECOGNIZED;
    }
}
exports.networkSettings_TypeFromJSON = networkSettings_TypeFromJSON;
function networkSettings_TypeToJSON(object) {
    switch (object) {
        case NetworkSettings_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case NetworkSettings_Type.STANDARD:
            return "STANDARD";
        case NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return "SOFTWARE_ACCELERATED";
        case NetworkSettings_Type.HARDWARE_ACCELERATED:
            return "HARDWARE_ACCELERATED";
        default:
            return "UNKNOWN";
    }
}
exports.networkSettings_TypeToJSON = networkSettings_TypeToJSON;
var PlacementPolicy_HostAffinityRule_Operator;
(function (PlacementPolicy_HostAffinityRule_Operator) {
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["OPERATOR_UNSPECIFIED"] = 0] = "OPERATOR_UNSPECIFIED";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["IN"] = 1] = "IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["NOT_IN"] = 2] = "NOT_IN";
    PlacementPolicy_HostAffinityRule_Operator[PlacementPolicy_HostAffinityRule_Operator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlacementPolicy_HostAffinityRule_Operator = exports.PlacementPolicy_HostAffinityRule_Operator || (exports.PlacementPolicy_HostAffinityRule_Operator = {}));
function placementPolicy_HostAffinityRule_OperatorFromJSON(object) {
    switch (object) {
        case 0:
        case "OPERATOR_UNSPECIFIED":
            return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
        case 1:
        case "IN":
            return PlacementPolicy_HostAffinityRule_Operator.IN;
        case 2:
        case "NOT_IN":
            return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
    }
}
exports.placementPolicy_HostAffinityRule_OperatorFromJSON = placementPolicy_HostAffinityRule_OperatorFromJSON;
function placementPolicy_HostAffinityRule_OperatorToJSON(object) {
    switch (object) {
        case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
            return "OPERATOR_UNSPECIFIED";
        case PlacementPolicy_HostAffinityRule_Operator.IN:
            return "IN";
        case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
            return "NOT_IN";
        default:
            return "UNKNOWN";
    }
}
exports.placementPolicy_HostAffinityRule_OperatorToJSON = placementPolicy_HostAffinityRule_OperatorToJSON;
const baseInstance = {
    $type: "yandex.cloud.compute.v1.Instance",
    id: "",
    folderId: "",
    name: "",
    description: "",
    zoneId: "",
    platformId: "",
    status: 0,
    fqdn: "",
    serviceAccountId: "",
    hostGroupId: "",
    hostId: "",
};
exports.Instance = {
    $type: "yandex.cloud.compute.v1.Instance",
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
            exports.Instance_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.Instance.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.zoneId !== "") {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.platformId !== "") {
            writer.uint32(66).string(message.platformId);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(74).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.Instance_MetadataEntry.encode({
                $type: "yandex.cloud.compute.v1.Instance.MetadataEntry",
                key: key,
                value,
            }, writer.uint32(90).fork()).ldelim();
        });
        if (message.metadataOptions !== undefined) {
            exports.MetadataOptions.encode(message.metadataOptions, writer.uint32(186).fork()).ldelim();
        }
        if (message.bootDisk !== undefined) {
            exports.AttachedDisk.encode(message.bootDisk, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.secondaryDisks) {
            exports.AttachedDisk.encode(v, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.localDisks) {
            exports.AttachedLocalDisk.encode(v, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.filesystems) {
            exports.AttachedFilesystem.encode(v, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.networkInterfaces) {
            exports.NetworkInterface.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.gpuSettings !== undefined) {
            exports.GpuSettings.encode(message.gpuSettings, writer.uint32(210).fork()).ldelim();
        }
        if (message.fqdn !== "") {
            writer.uint32(130).string(message.fqdn);
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(138).fork()).ldelim();
        }
        if (message.serviceAccountId !== "") {
            writer.uint32(146).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            exports.NetworkSettings.encode(message.networkSettings, writer.uint32(154).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(162).fork()).ldelim();
        }
        if (message.hostGroupId !== "") {
            writer.uint32(218).string(message.hostGroupId);
        }
        if (message.hostId !== "") {
            writer.uint32(226).string(message.hostId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstance);
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.localDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
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
                    const entry6 = exports.Instance_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.platformId = reader.string();
                    break;
                case 9:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    const entry11 = exports.Instance_MetadataEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.metadata[entry11.key] = entry11.value;
                    }
                    break;
                case 23:
                    message.metadataOptions = exports.MetadataOptions.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.bootDisk = exports.AttachedDisk.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.secondaryDisks.push(exports.AttachedDisk.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.localDisks.push(exports.AttachedLocalDisk.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.filesystems.push(exports.AttachedFilesystem.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.networkInterfaces.push(exports.NetworkInterface.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.gpuSettings = exports.GpuSettings.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.fqdn = reader.string();
                    break;
                case 17:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.serviceAccountId = reader.string();
                    break;
                case 19:
                    message.networkSettings = exports.NetworkSettings.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.placementPolicy = exports.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.hostGroupId = reader.string();
                    break;
                case 28:
                    message.hostId = reader.string();
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
        const message = Object.assign({}, baseInstance);
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.platformId =
            object.platformId !== undefined && object.platformId !== null
                ? String(object.platformId)
                : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromJSON(object.resources)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? instance_StatusFromJSON(object.status)
                : 0;
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? exports.MetadataOptions.fromJSON(object.metadataOptions)
                : undefined;
        message.bootDisk =
            object.bootDisk !== undefined && object.bootDisk !== null
                ? exports.AttachedDisk.fromJSON(object.bootDisk)
                : undefined;
        message.secondaryDisks = ((_c = object.secondaryDisks) !== null && _c !== void 0 ? _c : []).map((e) => exports.AttachedDisk.fromJSON(e));
        message.localDisks = ((_d = object.localDisks) !== null && _d !== void 0 ? _d : []).map((e) => exports.AttachedLocalDisk.fromJSON(e));
        message.filesystems = ((_e = object.filesystems) !== null && _e !== void 0 ? _e : []).map((e) => exports.AttachedFilesystem.fromJSON(e));
        message.networkInterfaces = ((_f = object.networkInterfaces) !== null && _f !== void 0 ? _f : []).map((e) => exports.NetworkInterface.fromJSON(e));
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? exports.GpuSettings.fromJSON(object.gpuSettings)
                : undefined;
        message.fqdn =
            object.fqdn !== undefined && object.fqdn !== null
                ? String(object.fqdn)
                : "";
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromJSON(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NetworkSettings.fromJSON(object.networkSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromJSON(object.placementPolicy)
                : undefined;
        message.hostGroupId =
            object.hostGroupId !== undefined && object.hostGroupId !== null
                ? String(object.hostGroupId)
                : "";
        message.hostId =
            object.hostId !== undefined && object.hostId !== null
                ? String(object.hostId)
                : "";
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.platformId !== undefined && (obj.platformId = message.platformId);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.status !== undefined &&
            (obj.status = instance_StatusToJSON(message.status));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.metadataOptions !== undefined &&
            (obj.metadataOptions = message.metadataOptions
                ? exports.MetadataOptions.toJSON(message.metadataOptions)
                : undefined);
        message.bootDisk !== undefined &&
            (obj.bootDisk = message.bootDisk
                ? exports.AttachedDisk.toJSON(message.bootDisk)
                : undefined);
        if (message.secondaryDisks) {
            obj.secondaryDisks = message.secondaryDisks.map((e) => e ? exports.AttachedDisk.toJSON(e) : undefined);
        }
        else {
            obj.secondaryDisks = [];
        }
        if (message.localDisks) {
            obj.localDisks = message.localDisks.map((e) => e ? exports.AttachedLocalDisk.toJSON(e) : undefined);
        }
        else {
            obj.localDisks = [];
        }
        if (message.filesystems) {
            obj.filesystems = message.filesystems.map((e) => e ? exports.AttachedFilesystem.toJSON(e) : undefined);
        }
        else {
            obj.filesystems = [];
        }
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) => e ? exports.NetworkInterface.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaces = [];
        }
        message.gpuSettings !== undefined &&
            (obj.gpuSettings = message.gpuSettings
                ? exports.GpuSettings.toJSON(message.gpuSettings)
                : undefined);
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? exports.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? exports.NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.hostId !== undefined && (obj.hostId = message.hostId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = Object.assign({}, baseInstance);
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
        message.zoneId = (_g = object.zoneId) !== null && _g !== void 0 ? _g : "";
        message.platformId = (_h = object.platformId) !== null && _h !== void 0 ? _h : "";
        message.resources =
            object.resources !== undefined && object.resources !== null
                ? exports.Resources.fromPartial(object.resources)
                : undefined;
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        message.metadata = Object.entries((_k = object.metadata) !== null && _k !== void 0 ? _k : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.metadataOptions =
            object.metadataOptions !== undefined && object.metadataOptions !== null
                ? exports.MetadataOptions.fromPartial(object.metadataOptions)
                : undefined;
        message.bootDisk =
            object.bootDisk !== undefined && object.bootDisk !== null
                ? exports.AttachedDisk.fromPartial(object.bootDisk)
                : undefined;
        message.secondaryDisks =
            ((_l = object.secondaryDisks) === null || _l === void 0 ? void 0 : _l.map((e) => exports.AttachedDisk.fromPartial(e))) || [];
        message.localDisks =
            ((_m = object.localDisks) === null || _m === void 0 ? void 0 : _m.map((e) => exports.AttachedLocalDisk.fromPartial(e))) || [];
        message.filesystems =
            ((_o = object.filesystems) === null || _o === void 0 ? void 0 : _o.map((e) => exports.AttachedFilesystem.fromPartial(e))) || [];
        message.networkInterfaces =
            ((_p = object.networkInterfaces) === null || _p === void 0 ? void 0 : _p.map((e) => exports.NetworkInterface.fromPartial(e))) ||
                [];
        message.gpuSettings =
            object.gpuSettings !== undefined && object.gpuSettings !== null
                ? exports.GpuSettings.fromPartial(object.gpuSettings)
                : undefined;
        message.fqdn = (_q = object.fqdn) !== null && _q !== void 0 ? _q : "";
        message.schedulingPolicy =
            object.schedulingPolicy !== undefined && object.schedulingPolicy !== null
                ? exports.SchedulingPolicy.fromPartial(object.schedulingPolicy)
                : undefined;
        message.serviceAccountId = (_r = object.serviceAccountId) !== null && _r !== void 0 ? _r : "";
        message.networkSettings =
            object.networkSettings !== undefined && object.networkSettings !== null
                ? exports.NetworkSettings.fromPartial(object.networkSettings)
                : undefined;
        message.placementPolicy =
            object.placementPolicy !== undefined && object.placementPolicy !== null
                ? exports.PlacementPolicy.fromPartial(object.placementPolicy)
                : undefined;
        message.hostGroupId = (_s = object.hostGroupId) !== null && _s !== void 0 ? _s : "";
        message.hostId = (_t = object.hostId) !== null && _t !== void 0 ? _t : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Instance.$type, exports.Instance);
const baseInstance_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Instance.LabelsEntry",
    key: "",
    value: "",
};
exports.Instance_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.Instance.LabelsEntry",
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
        const message = Object.assign({}, baseInstance_LabelsEntry);
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
        const message = Object.assign({}, baseInstance_LabelsEntry);
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
        const message = Object.assign({}, baseInstance_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Instance_LabelsEntry.$type, exports.Instance_LabelsEntry);
const baseInstance_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.Instance.MetadataEntry",
    key: "",
    value: "",
};
exports.Instance_MetadataEntry = {
    $type: "yandex.cloud.compute.v1.Instance.MetadataEntry",
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
        const message = Object.assign({}, baseInstance_MetadataEntry);
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
        const message = Object.assign({}, baseInstance_MetadataEntry);
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
        const message = Object.assign({}, baseInstance_MetadataEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Instance_MetadataEntry.$type, exports.Instance_MetadataEntry);
const baseResources = {
    $type: "yandex.cloud.compute.v1.Resources",
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.Resources = {
    $type: "yandex.cloud.compute.v1.Resources",
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
        const message = Object.assign({}, baseResources);
        message.memory = (_a = object.memory) !== null && _a !== void 0 ? _a : 0;
        message.cores = (_b = object.cores) !== null && _b !== void 0 ? _b : 0;
        message.coreFraction = (_c = object.coreFraction) !== null && _c !== void 0 ? _c : 0;
        message.gpus = (_d = object.gpus) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseAttachedDisk = {
    $type: "yandex.cloud.compute.v1.AttachedDisk",
    mode: 0,
    deviceName: "",
    autoDelete: false,
    diskId: "",
};
exports.AttachedDisk = {
    $type: "yandex.cloud.compute.v1.AttachedDisk",
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
        if (message.diskId !== "") {
            writer.uint32(34).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedDisk);
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
        const message = Object.assign({}, baseAttachedDisk);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedDisk_ModeFromJSON(object.mode)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        message.autoDelete =
            object.autoDelete !== undefined && object.autoDelete !== null
                ? Boolean(object.autoDelete)
                : false;
        message.diskId =
            object.diskId !== undefined && object.diskId !== null
                ? String(object.diskId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = attachedDisk_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined && (obj.autoDelete = message.autoDelete);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseAttachedDisk);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.autoDelete = (_c = object.autoDelete) !== null && _c !== void 0 ? _c : false;
        message.diskId = (_d = object.diskId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDisk.$type, exports.AttachedDisk);
const baseAttachedLocalDisk = {
    $type: "yandex.cloud.compute.v1.AttachedLocalDisk",
    size: 0,
    deviceName: "",
};
exports.AttachedLocalDisk = {
    $type: "yandex.cloud.compute.v1.AttachedLocalDisk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        if (message.deviceName !== "") {
            writer.uint32(18).string(message.deviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAttachedLocalDisk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
                    break;
                case 2:
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
        const message = Object.assign({}, baseAttachedLocalDisk);
        message.size =
            object.size !== undefined && object.size !== null
                ? Number(object.size)
                : 0;
        message.deviceName =
            object.deviceName !== undefined && object.deviceName !== null
                ? String(object.deviceName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAttachedLocalDisk);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedLocalDisk.$type, exports.AttachedLocalDisk);
const baseAttachedFilesystem = {
    $type: "yandex.cloud.compute.v1.AttachedFilesystem",
    mode: 0,
    deviceName: "",
    filesystemId: "",
};
exports.AttachedFilesystem = {
    $type: "yandex.cloud.compute.v1.AttachedFilesystem",
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
        const message = Object.assign({}, baseAttachedFilesystem);
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
        const message = Object.assign({}, baseAttachedFilesystem);
        message.mode =
            object.mode !== undefined && object.mode !== null
                ? attachedFilesystem_ModeFromJSON(object.mode)
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
            (obj.mode = attachedFilesystem_ModeToJSON(message.mode));
        message.deviceName !== undefined && (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseAttachedFilesystem);
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        message.deviceName = (_b = object.deviceName) !== null && _b !== void 0 ? _b : "";
        message.filesystemId = (_c = object.filesystemId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedFilesystem.$type, exports.AttachedFilesystem);
const baseNetworkInterface = {
    $type: "yandex.cloud.compute.v1.NetworkInterface",
    index: "",
    macAddress: "",
    subnetId: "",
    securityGroupIds: "",
};
exports.NetworkInterface = {
    $type: "yandex.cloud.compute.v1.NetworkInterface",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.macAddress !== "") {
            writer.uint32(18).string(message.macAddress);
        }
        if (message.subnetId !== "") {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.primaryV4Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV4Address, writer.uint32(34).fork()).ldelim();
        }
        if (message.primaryV6Address !== undefined) {
            exports.PrimaryAddress.encode(message.primaryV6Address, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkInterface);
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.macAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.primaryV4Address = exports.PrimaryAddress.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.primaryV6Address = exports.PrimaryAddress.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseNetworkInterface);
        message.index =
            object.index !== undefined && object.index !== null
                ? String(object.index)
                : "";
        message.macAddress =
            object.macAddress !== undefined && object.macAddress !== null
                ? String(object.macAddress)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.primaryV4Address =
            object.primaryV4Address !== undefined && object.primaryV4Address !== null
                ? exports.PrimaryAddress.fromJSON(object.primaryV4Address)
                : undefined;
        message.primaryV6Address =
            object.primaryV6Address !== undefined && object.primaryV6Address !== null
                ? exports.PrimaryAddress.fromJSON(object.primaryV6Address)
                : undefined;
        message.securityGroupIds = ((_a = object.securityGroupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.macAddress !== undefined && (obj.macAddress = message.macAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4Address !== undefined &&
            (obj.primaryV4Address = message.primaryV4Address
                ? exports.PrimaryAddress.toJSON(message.primaryV4Address)
                : undefined);
        message.primaryV6Address !== undefined &&
            (obj.primaryV6Address = message.primaryV6Address
                ? exports.PrimaryAddress.toJSON(message.primaryV6Address)
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
        const message = Object.assign({}, baseNetworkInterface);
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "";
        message.macAddress = (_b = object.macAddress) !== null && _b !== void 0 ? _b : "";
        message.subnetId = (_c = object.subnetId) !== null && _c !== void 0 ? _c : "";
        message.primaryV4Address =
            object.primaryV4Address !== undefined && object.primaryV4Address !== null
                ? exports.PrimaryAddress.fromPartial(object.primaryV4Address)
                : undefined;
        message.primaryV6Address =
            object.primaryV6Address !== undefined && object.primaryV6Address !== null
                ? exports.PrimaryAddress.fromPartial(object.primaryV6Address)
                : undefined;
        message.securityGroupIds = ((_d = object.securityGroupIds) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkInterface.$type, exports.NetworkInterface);
const basePrimaryAddress = {
    $type: "yandex.cloud.compute.v1.PrimaryAddress",
    address: "",
};
exports.PrimaryAddress = {
    $type: "yandex.cloud.compute.v1.PrimaryAddress",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNat !== undefined) {
            exports.OneToOneNat.encode(message.oneToOneNat, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePrimaryAddress);
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNat = exports.OneToOneNat.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePrimaryAddress);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.oneToOneNat =
            object.oneToOneNat !== undefined && object.oneToOneNat !== null
                ? exports.OneToOneNat.fromJSON(object.oneToOneNat)
                : undefined;
        message.dnsRecords = ((_a = object.dnsRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNat !== undefined &&
            (obj.oneToOneNat = message.oneToOneNat
                ? exports.OneToOneNat.toJSON(message.oneToOneNat)
                : undefined);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePrimaryAddress);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.oneToOneNat =
            object.oneToOneNat !== undefined && object.oneToOneNat !== null
                ? exports.OneToOneNat.fromPartial(object.oneToOneNat)
                : undefined;
        message.dnsRecords =
            ((_b = object.dnsRecords) === null || _b === void 0 ? void 0 : _b.map((e) => exports.DnsRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PrimaryAddress.$type, exports.PrimaryAddress);
const baseOneToOneNat = {
    $type: "yandex.cloud.compute.v1.OneToOneNat",
    address: "",
    ipVersion: 0,
};
exports.OneToOneNat = {
    $type: "yandex.cloud.compute.v1.OneToOneNat",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.dnsRecords) {
            exports.DnsRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOneToOneNat);
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                case 3:
                    message.dnsRecords.push(exports.DnsRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseOneToOneNat);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? ipVersionFromJSON(object.ipVersion)
                : 0;
        message.dnsRecords = ((_a = object.dnsRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.DnsRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) => e ? exports.DnsRecord.toJSON(e) : undefined);
        }
        else {
            obj.dnsRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseOneToOneNat);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.ipVersion = (_b = object.ipVersion) !== null && _b !== void 0 ? _b : 0;
        message.dnsRecords =
            ((_c = object.dnsRecords) === null || _c === void 0 ? void 0 : _c.map((e) => exports.DnsRecord.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OneToOneNat.$type, exports.OneToOneNat);
const baseDnsRecord = {
    $type: "yandex.cloud.compute.v1.DnsRecord",
    fqdn: "",
    dnsZoneId: "",
    ttl: 0,
    ptr: false,
};
exports.DnsRecord = {
    $type: "yandex.cloud.compute.v1.DnsRecord",
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
        const message = Object.assign({}, baseDnsRecord);
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
        const message = Object.assign({}, baseDnsRecord);
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
        const message = Object.assign({}, baseDnsRecord);
        message.fqdn = (_a = object.fqdn) !== null && _a !== void 0 ? _a : "";
        message.dnsZoneId = (_b = object.dnsZoneId) !== null && _b !== void 0 ? _b : "";
        message.ttl = (_c = object.ttl) !== null && _c !== void 0 ? _c : 0;
        message.ptr = (_d = object.ptr) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DnsRecord.$type, exports.DnsRecord);
const baseSchedulingPolicy = {
    $type: "yandex.cloud.compute.v1.SchedulingPolicy",
    preemptible: false,
};
exports.SchedulingPolicy = {
    $type: "yandex.cloud.compute.v1.SchedulingPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSchedulingPolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preemptible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSchedulingPolicy);
        message.preemptible =
            object.preemptible !== undefined && object.preemptible !== null
                ? Boolean(object.preemptible)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSchedulingPolicy);
        message.preemptible = (_a = object.preemptible) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SchedulingPolicy.$type, exports.SchedulingPolicy);
const baseNetworkSettings = {
    $type: "yandex.cloud.compute.v1.NetworkSettings",
    type: 0,
};
exports.NetworkSettings = {
    $type: "yandex.cloud.compute.v1.NetworkSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNetworkSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseNetworkSettings);
        message.type =
            object.type !== undefined && object.type !== null
                ? networkSettings_TypeFromJSON(object.type)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = networkSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseNetworkSettings);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NetworkSettings.$type, exports.NetworkSettings);
const baseGpuSettings = {
    $type: "yandex.cloud.compute.v1.GpuSettings",
    gpuClusterId: "",
};
exports.GpuSettings = {
    $type: "yandex.cloud.compute.v1.GpuSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gpuClusterId !== "") {
            writer.uint32(10).string(message.gpuClusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGpuSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gpuClusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGpuSettings);
        message.gpuClusterId =
            object.gpuClusterId !== undefined && object.gpuClusterId !== null
                ? String(object.gpuClusterId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gpuClusterId !== undefined &&
            (obj.gpuClusterId = message.gpuClusterId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGpuSettings);
        message.gpuClusterId = (_a = object.gpuClusterId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GpuSettings.$type, exports.GpuSettings);
const basePlacementPolicy = {
    $type: "yandex.cloud.compute.v1.PlacementPolicy",
    placementGroupId: "",
    placementGroupPartition: 0,
};
exports.PlacementPolicy = {
    $type: "yandex.cloud.compute.v1.PlacementPolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== "") {
            writer.uint32(10).string(message.placementGroupId);
        }
        for (const v of message.hostAffinityRules) {
            exports.PlacementPolicy_HostAffinityRule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.placementGroupPartition !== 0) {
            writer.uint32(24).int64(message.placementGroupPartition);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementPolicy);
        message.hostAffinityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                case 2:
                    message.hostAffinityRules.push(exports.PlacementPolicy_HostAffinityRule.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.placementGroupPartition = longToNumber(reader.int64());
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
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId =
            object.placementGroupId !== undefined && object.placementGroupId !== null
                ? String(object.placementGroupId)
                : "";
        message.hostAffinityRules = ((_a = object.hostAffinityRules) !== null && _a !== void 0 ? _a : []).map((e) => exports.PlacementPolicy_HostAffinityRule.fromJSON(e));
        message.placementGroupPartition =
            object.placementGroupPartition !== undefined &&
                object.placementGroupPartition !== null
                ? Number(object.placementGroupPartition)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        if (message.hostAffinityRules) {
            obj.hostAffinityRules = message.hostAffinityRules.map((e) => e ? exports.PlacementPolicy_HostAffinityRule.toJSON(e) : undefined);
        }
        else {
            obj.hostAffinityRules = [];
        }
        message.placementGroupPartition !== undefined &&
            (obj.placementGroupPartition = Math.round(message.placementGroupPartition));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePlacementPolicy);
        message.placementGroupId = (_a = object.placementGroupId) !== null && _a !== void 0 ? _a : "";
        message.hostAffinityRules =
            ((_b = object.hostAffinityRules) === null || _b === void 0 ? void 0 : _b.map((e) => exports.PlacementPolicy_HostAffinityRule.fromPartial(e))) || [];
        message.placementGroupPartition = (_c = object.placementGroupPartition) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy.$type, exports.PlacementPolicy);
const basePlacementPolicy_HostAffinityRule = {
    $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule",
    key: "",
    op: 0,
    values: "",
};
exports.PlacementPolicy_HostAffinityRule = {
    $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.op !== 0) {
            writer.uint32(16).int32(message.op);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.op = reader.int32();
                    break;
                case 3:
                    message.values.push(reader.string());
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
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.op =
            object.op !== undefined && object.op !== null
                ? placementPolicy_HostAffinityRule_OperatorFromJSON(object.op)
                : 0;
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.op !== undefined &&
            (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(message.op));
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePlacementPolicy_HostAffinityRule);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.op = (_b = object.op) !== null && _b !== void 0 ? _b : 0;
        message.values = ((_c = object.values) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementPolicy_HostAffinityRule.$type, exports.PlacementPolicy_HostAffinityRule);
const baseMetadataOptions = {
    $type: "yandex.cloud.compute.v1.MetadataOptions",
    gceHttpEndpoint: 0,
    awsV1HttpEndpoint: 0,
    gceHttpToken: 0,
    awsV1HttpToken: 0,
};
exports.MetadataOptions = {
    $type: "yandex.cloud.compute.v1.MetadataOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gceHttpEndpoint !== 0) {
            writer.uint32(8).int32(message.gceHttpEndpoint);
        }
        if (message.awsV1HttpEndpoint !== 0) {
            writer.uint32(16).int32(message.awsV1HttpEndpoint);
        }
        if (message.gceHttpToken !== 0) {
            writer.uint32(24).int32(message.gceHttpToken);
        }
        if (message.awsV1HttpToken !== 0) {
            writer.uint32(32).int32(message.awsV1HttpToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMetadataOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gceHttpEndpoint = reader.int32();
                    break;
                case 2:
                    message.awsV1HttpEndpoint = reader.int32();
                    break;
                case 3:
                    message.gceHttpToken = reader.int32();
                    break;
                case 4:
                    message.awsV1HttpToken = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMetadataOptions);
        message.gceHttpEndpoint =
            object.gceHttpEndpoint !== undefined && object.gceHttpEndpoint !== null
                ? metadataOptionFromJSON(object.gceHttpEndpoint)
                : 0;
        message.awsV1HttpEndpoint =
            object.awsV1HttpEndpoint !== undefined &&
                object.awsV1HttpEndpoint !== null
                ? metadataOptionFromJSON(object.awsV1HttpEndpoint)
                : 0;
        message.gceHttpToken =
            object.gceHttpToken !== undefined && object.gceHttpToken !== null
                ? metadataOptionFromJSON(object.gceHttpToken)
                : 0;
        message.awsV1HttpToken =
            object.awsV1HttpToken !== undefined && object.awsV1HttpToken !== null
                ? metadataOptionFromJSON(object.awsV1HttpToken)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gceHttpEndpoint !== undefined &&
            (obj.gceHttpEndpoint = metadataOptionToJSON(message.gceHttpEndpoint));
        message.awsV1HttpEndpoint !== undefined &&
            (obj.awsV1HttpEndpoint = metadataOptionToJSON(message.awsV1HttpEndpoint));
        message.gceHttpToken !== undefined &&
            (obj.gceHttpToken = metadataOptionToJSON(message.gceHttpToken));
        message.awsV1HttpToken !== undefined &&
            (obj.awsV1HttpToken = metadataOptionToJSON(message.awsV1HttpToken));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMetadataOptions);
        message.gceHttpEndpoint = (_a = object.gceHttpEndpoint) !== null && _a !== void 0 ? _a : 0;
        message.awsV1HttpEndpoint = (_b = object.awsV1HttpEndpoint) !== null && _b !== void 0 ? _b : 0;
        message.gceHttpToken = (_c = object.gceHttpToken) !== null && _c !== void 0 ? _c : 0;
        message.awsV1HttpToken = (_d = object.awsV1HttpToken) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MetadataOptions.$type, exports.MetadataOptions);
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
