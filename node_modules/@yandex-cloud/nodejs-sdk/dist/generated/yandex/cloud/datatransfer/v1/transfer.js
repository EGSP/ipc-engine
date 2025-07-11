"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer_LabelsEntry = exports.Transfer = exports.transferStatusToJSON = exports.transferStatusFromJSON = exports.TransferStatus = exports.transferTypeToJSON = exports.transferTypeFromJSON = exports.TransferType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const endpoint_1 = require("../../../../yandex/cloud/datatransfer/v1/endpoint");
exports.protobufPackage = "yandex.cloud.datatransfer.v1";
var TransferType;
(function (TransferType) {
    TransferType[TransferType["TRANSFER_TYPE_UNSPECIFIED"] = 0] = "TRANSFER_TYPE_UNSPECIFIED";
    /** SNAPSHOT_AND_INCREMENT - Snapshot and increment */
    TransferType[TransferType["SNAPSHOT_AND_INCREMENT"] = 1] = "SNAPSHOT_AND_INCREMENT";
    /** SNAPSHOT_ONLY - Snapshot */
    TransferType[TransferType["SNAPSHOT_ONLY"] = 2] = "SNAPSHOT_ONLY";
    /** INCREMENT_ONLY - Increment */
    TransferType[TransferType["INCREMENT_ONLY"] = 3] = "INCREMENT_ONLY";
    TransferType[TransferType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferType = exports.TransferType || (exports.TransferType = {}));
function transferTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_TYPE_UNSPECIFIED":
            return TransferType.TRANSFER_TYPE_UNSPECIFIED;
        case 1:
        case "SNAPSHOT_AND_INCREMENT":
            return TransferType.SNAPSHOT_AND_INCREMENT;
        case 2:
        case "SNAPSHOT_ONLY":
            return TransferType.SNAPSHOT_ONLY;
        case 3:
        case "INCREMENT_ONLY":
            return TransferType.INCREMENT_ONLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferType.UNRECOGNIZED;
    }
}
exports.transferTypeFromJSON = transferTypeFromJSON;
function transferTypeToJSON(object) {
    switch (object) {
        case TransferType.TRANSFER_TYPE_UNSPECIFIED:
            return "TRANSFER_TYPE_UNSPECIFIED";
        case TransferType.SNAPSHOT_AND_INCREMENT:
            return "SNAPSHOT_AND_INCREMENT";
        case TransferType.SNAPSHOT_ONLY:
            return "SNAPSHOT_ONLY";
        case TransferType.INCREMENT_ONLY:
            return "INCREMENT_ONLY";
        default:
            return "UNKNOWN";
    }
}
exports.transferTypeToJSON = transferTypeToJSON;
var TransferStatus;
(function (TransferStatus) {
    TransferStatus[TransferStatus["TRANSFER_STATUS_UNSPECIFIED"] = 0] = "TRANSFER_STATUS_UNSPECIFIED";
    /** CREATING - Transfer does some work before running */
    TransferStatus[TransferStatus["CREATING"] = 1] = "CREATING";
    /** CREATED - Transfer created but not started by user */
    TransferStatus[TransferStatus["CREATED"] = 2] = "CREATED";
    /** RUNNING - Transfer currently doing replication work */
    TransferStatus[TransferStatus["RUNNING"] = 3] = "RUNNING";
    /** STOPPING - Transfer shutdown */
    TransferStatus[TransferStatus["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Transfer stopped by user */
    TransferStatus[TransferStatus["STOPPED"] = 5] = "STOPPED";
    /** ERROR - Transfer stopped by system */
    TransferStatus[TransferStatus["ERROR"] = 6] = "ERROR";
    /** SNAPSHOTTING - Transfer copy snapshot */
    TransferStatus[TransferStatus["SNAPSHOTTING"] = 7] = "SNAPSHOTTING";
    /** DONE - Transfer reach terminal phase */
    TransferStatus[TransferStatus["DONE"] = 8] = "DONE";
    TransferStatus[TransferStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferStatus = exports.TransferStatus || (exports.TransferStatus = {}));
function transferStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSFER_STATUS_UNSPECIFIED":
            return TransferStatus.TRANSFER_STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return TransferStatus.CREATING;
        case 2:
        case "CREATED":
            return TransferStatus.CREATED;
        case 3:
        case "RUNNING":
            return TransferStatus.RUNNING;
        case 4:
        case "STOPPING":
            return TransferStatus.STOPPING;
        case 5:
        case "STOPPED":
            return TransferStatus.STOPPED;
        case 6:
        case "ERROR":
            return TransferStatus.ERROR;
        case 7:
        case "SNAPSHOTTING":
            return TransferStatus.SNAPSHOTTING;
        case 8:
        case "DONE":
            return TransferStatus.DONE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TransferStatus.UNRECOGNIZED;
    }
}
exports.transferStatusFromJSON = transferStatusFromJSON;
function transferStatusToJSON(object) {
    switch (object) {
        case TransferStatus.TRANSFER_STATUS_UNSPECIFIED:
            return "TRANSFER_STATUS_UNSPECIFIED";
        case TransferStatus.CREATING:
            return "CREATING";
        case TransferStatus.CREATED:
            return "CREATED";
        case TransferStatus.RUNNING:
            return "RUNNING";
        case TransferStatus.STOPPING:
            return "STOPPING";
        case TransferStatus.STOPPED:
            return "STOPPED";
        case TransferStatus.ERROR:
            return "ERROR";
        case TransferStatus.SNAPSHOTTING:
            return "SNAPSHOTTING";
        case TransferStatus.DONE:
            return "DONE";
        default:
            return "UNKNOWN";
    }
}
exports.transferStatusToJSON = transferStatusToJSON;
const baseTransfer = {
    $type: "yandex.cloud.datatransfer.v1.Transfer",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    type: 0,
    warning: "",
};
exports.Transfer = {
    $type: "yandex.cloud.datatransfer.v1.Transfer",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Transfer_LabelsEntry.encode({
                $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.source !== undefined) {
            endpoint_1.Endpoint.encode(message.source, writer.uint32(58).fork()).ldelim();
        }
        if (message.target !== undefined) {
            endpoint_1.Endpoint.encode(message.target, writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.type !== 0) {
            writer.uint32(96).int32(message.type);
        }
        if (message.warning !== "") {
            writer.uint32(122).string(message.warning);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTransfer);
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
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Transfer_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.source = endpoint_1.Endpoint.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.target = endpoint_1.Endpoint.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 12:
                    message.type = reader.int32();
                    break;
                case 15:
                    message.warning = reader.string();
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
        const message = Object.assign({}, baseTransfer);
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
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.source =
            object.source !== undefined && object.source !== null
                ? endpoint_1.Endpoint.fromJSON(object.source)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? endpoint_1.Endpoint.fromJSON(object.target)
                : undefined;
        message.status =
            object.status !== undefined && object.status !== null
                ? transferStatusFromJSON(object.status)
                : 0;
        message.type =
            object.type !== undefined && object.type !== null
                ? transferTypeFromJSON(object.type)
                : 0;
        message.warning =
            object.warning !== undefined && object.warning !== null
                ? String(object.warning)
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
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.source !== undefined &&
            (obj.source = message.source
                ? endpoint_1.Endpoint.toJSON(message.source)
                : undefined);
        message.target !== undefined &&
            (obj.target = message.target
                ? endpoint_1.Endpoint.toJSON(message.target)
                : undefined);
        message.status !== undefined &&
            (obj.status = transferStatusToJSON(message.status));
        message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
        message.warning !== undefined && (obj.warning = message.warning);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseTransfer);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.source =
            object.source !== undefined && object.source !== null
                ? endpoint_1.Endpoint.fromPartial(object.source)
                : undefined;
        message.target =
            object.target !== undefined && object.target !== null
                ? endpoint_1.Endpoint.fromPartial(object.target)
                : undefined;
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        message.warning = (_h = object.warning) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Transfer.$type, exports.Transfer);
const baseTransfer_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
    key: "",
    value: "",
};
exports.Transfer_LabelsEntry = {
    $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry",
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
        const message = Object.assign({}, baseTransfer_LabelsEntry);
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
        const message = Object.assign({}, baseTransfer_LabelsEntry);
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
        const message = Object.assign({}, baseTransfer_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Transfer_LabelsEntry.$type, exports.Transfer_LabelsEntry);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
