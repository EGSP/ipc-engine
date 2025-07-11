"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageOption = exports.StorageConfig = exports.ScalePolicy_FixedScale = exports.ScalePolicy = exports.RegionalDatabase = exports.ZonalDatabase = exports.ServerlessDatabase = exports.DedicatedDatabase = exports.MonitoringConfig = exports.Alert = exports.NotificationChannel = exports.AlertParameter_LabelListParameterValue = exports.AlertParameter_TextListParameterValue = exports.AlertParameter_TextParameterValue = exports.AlertParameter_IntegerParameterValue = exports.AlertParameter_DoubleParameterValue = exports.AlertParameter = exports.Database_LabelsEntry = exports.Database = exports.database_StatusToJSON = exports.database_StatusFromJSON = exports.Database_Status = exports.alertEvaluationStatusToJSON = exports.alertEvaluationStatusFromJSON = exports.AlertEvaluationStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const backup_1 = require("../../../../yandex/cloud/ydb/v1/backup");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.ydb.v1";
var AlertEvaluationStatus;
(function (AlertEvaluationStatus) {
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_UNSPECIFIED"] = 0] = "ALERT_EVALUATION_STATUS_UNSPECIFIED";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_OK"] = 1] = "ALERT_EVALUATION_STATUS_OK";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_NO_DATA"] = 2] = "ALERT_EVALUATION_STATUS_NO_DATA";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_ERROR"] = 3] = "ALERT_EVALUATION_STATUS_ERROR";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_ALARM"] = 4] = "ALERT_EVALUATION_STATUS_ALARM";
    AlertEvaluationStatus[AlertEvaluationStatus["ALERT_EVALUATION_STATUS_WARN"] = 5] = "ALERT_EVALUATION_STATUS_WARN";
    AlertEvaluationStatus[AlertEvaluationStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AlertEvaluationStatus = exports.AlertEvaluationStatus || (exports.AlertEvaluationStatus = {}));
function alertEvaluationStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ALERT_EVALUATION_STATUS_UNSPECIFIED":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED;
        case 1:
        case "ALERT_EVALUATION_STATUS_OK":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK;
        case 2:
        case "ALERT_EVALUATION_STATUS_NO_DATA":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA;
        case 3:
        case "ALERT_EVALUATION_STATUS_ERROR":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR;
        case 4:
        case "ALERT_EVALUATION_STATUS_ALARM":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM;
        case 5:
        case "ALERT_EVALUATION_STATUS_WARN":
            return AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AlertEvaluationStatus.UNRECOGNIZED;
    }
}
exports.alertEvaluationStatusFromJSON = alertEvaluationStatusFromJSON;
function alertEvaluationStatusToJSON(object) {
    switch (object) {
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_UNSPECIFIED:
            return "ALERT_EVALUATION_STATUS_UNSPECIFIED";
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_OK:
            return "ALERT_EVALUATION_STATUS_OK";
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_NO_DATA:
            return "ALERT_EVALUATION_STATUS_NO_DATA";
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ERROR:
            return "ALERT_EVALUATION_STATUS_ERROR";
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_ALARM:
            return "ALERT_EVALUATION_STATUS_ALARM";
        case AlertEvaluationStatus.ALERT_EVALUATION_STATUS_WARN:
            return "ALERT_EVALUATION_STATUS_WARN";
        default:
            return "UNKNOWN";
    }
}
exports.alertEvaluationStatusToJSON = alertEvaluationStatusToJSON;
var Database_Status;
(function (Database_Status) {
    Database_Status[Database_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Database_Status[Database_Status["PROVISIONING"] = 1] = "PROVISIONING";
    Database_Status[Database_Status["RUNNING"] = 2] = "RUNNING";
    Database_Status[Database_Status["UPDATING"] = 4] = "UPDATING";
    Database_Status[Database_Status["ERROR"] = 5] = "ERROR";
    Database_Status[Database_Status["DELETING"] = 6] = "DELETING";
    Database_Status[Database_Status["STARTING"] = 7] = "STARTING";
    Database_Status[Database_Status["STOPPED"] = 8] = "STOPPED";
    Database_Status[Database_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Database_Status = exports.Database_Status || (exports.Database_Status = {}));
function database_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Database_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PROVISIONING":
            return Database_Status.PROVISIONING;
        case 2:
        case "RUNNING":
            return Database_Status.RUNNING;
        case 4:
        case "UPDATING":
            return Database_Status.UPDATING;
        case 5:
        case "ERROR":
            return Database_Status.ERROR;
        case 6:
        case "DELETING":
            return Database_Status.DELETING;
        case 7:
        case "STARTING":
            return Database_Status.STARTING;
        case 8:
        case "STOPPED":
            return Database_Status.STOPPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Database_Status.UNRECOGNIZED;
    }
}
exports.database_StatusFromJSON = database_StatusFromJSON;
function database_StatusToJSON(object) {
    switch (object) {
        case Database_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Database_Status.PROVISIONING:
            return "PROVISIONING";
        case Database_Status.RUNNING:
            return "RUNNING";
        case Database_Status.UPDATING:
            return "UPDATING";
        case Database_Status.ERROR:
            return "ERROR";
        case Database_Status.DELETING:
            return "DELETING";
        case Database_Status.STARTING:
            return "STARTING";
        case Database_Status.STOPPED:
            return "STOPPED";
        default:
            return "UNKNOWN";
    }
}
exports.database_StatusToJSON = database_StatusToJSON;
const baseDatabase = {
    $type: "yandex.cloud.ydb.v1.Database",
    id: "",
    folderId: "",
    name: "",
    description: "",
    status: 0,
    endpoint: "",
    resourcePresetId: "",
    networkId: "",
    subnetIds: "",
    assignPublicIps: false,
    locationId: "",
    documentApiEndpoint: "",
    kinesisApiEndpoint: "",
    kafkaApiEndpoint: "",
    deletionProtection: false,
};
exports.Database = {
    $type: "yandex.cloud.ydb.v1.Database",
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
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.endpoint !== "") {
            writer.uint32(66).string(message.endpoint);
        }
        if (message.resourcePresetId !== "") {
            writer.uint32(74).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            exports.StorageConfig.encode(message.storageConfig, writer.uint32(82).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(98).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(106).string(v);
        }
        if (message.zonalDatabase !== undefined) {
            exports.ZonalDatabase.encode(message.zonalDatabase, writer.uint32(114).fork()).ldelim();
        }
        if (message.regionalDatabase !== undefined) {
            exports.RegionalDatabase.encode(message.regionalDatabase, writer.uint32(122).fork()).ldelim();
        }
        if (message.dedicatedDatabase !== undefined) {
            exports.DedicatedDatabase.encode(message.dedicatedDatabase, writer.uint32(146).fork()).ldelim();
        }
        if (message.serverlessDatabase !== undefined) {
            exports.ServerlessDatabase.encode(message.serverlessDatabase, writer.uint32(154).fork()).ldelim();
        }
        if (message.assignPublicIps === true) {
            writer.uint32(128).bool(message.assignPublicIps);
        }
        if (message.locationId !== "") {
            writer.uint32(138).string(message.locationId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Database_LabelsEntry.encode({
                $type: "yandex.cloud.ydb.v1.Database.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(162).fork()).ldelim();
        });
        if (message.backupConfig !== undefined) {
            backup_1.BackupConfig.encode(message.backupConfig, writer.uint32(170).fork()).ldelim();
        }
        if (message.documentApiEndpoint !== "") {
            writer.uint32(178).string(message.documentApiEndpoint);
        }
        if (message.kinesisApiEndpoint !== "") {
            writer.uint32(186).string(message.kinesisApiEndpoint);
        }
        if (message.kafkaApiEndpoint !== "") {
            writer.uint32(210).string(message.kafkaApiEndpoint);
        }
        if (message.monitoringConfig !== undefined) {
            exports.MonitoringConfig.encode(message.monitoringConfig, writer.uint32(194).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(200).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDatabase);
        message.subnetIds = [];
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
                    message.status = reader.int32();
                    break;
                case 8:
                    message.endpoint = reader.string();
                    break;
                case 9:
                    message.resourcePresetId = reader.string();
                    break;
                case 10:
                    message.storageConfig = exports.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.networkId = reader.string();
                    break;
                case 13:
                    message.subnetIds.push(reader.string());
                    break;
                case 14:
                    message.zonalDatabase = exports.ZonalDatabase.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.regionalDatabase = exports.RegionalDatabase.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.dedicatedDatabase = exports.DedicatedDatabase.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.serverlessDatabase = exports.ServerlessDatabase.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.assignPublicIps = reader.bool();
                    break;
                case 17:
                    message.locationId = reader.string();
                    break;
                case 20:
                    const entry20 = exports.Database_LabelsEntry.decode(reader, reader.uint32());
                    if (entry20.value !== undefined) {
                        message.labels[entry20.key] = entry20.value;
                    }
                    break;
                case 21:
                    message.backupConfig = backup_1.BackupConfig.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.documentApiEndpoint = reader.string();
                    break;
                case 23:
                    message.kinesisApiEndpoint = reader.string();
                    break;
                case 26:
                    message.kafkaApiEndpoint = reader.string();
                    break;
                case 24:
                    message.monitoringConfig = exports.MonitoringConfig.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseDatabase);
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
        message.status =
            object.status !== undefined && object.status !== null
                ? database_StatusFromJSON(object.status)
                : 0;
        message.endpoint =
            object.endpoint !== undefined && object.endpoint !== null
                ? String(object.endpoint)
                : "";
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? exports.StorageConfig.fromJSON(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? exports.ZonalDatabase.fromJSON(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? exports.RegionalDatabase.fromJSON(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? exports.DedicatedDatabase.fromJSON(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? exports.ServerlessDatabase.fromJSON(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps =
            object.assignPublicIps !== undefined && object.assignPublicIps !== null
                ? Boolean(object.assignPublicIps)
                : false;
        message.locationId =
            object.locationId !== undefined && object.locationId !== null
                ? String(object.locationId)
                : "";
        message.labels = Object.entries((_b = object.labels) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromJSON(object.backupConfig)
                : undefined;
        message.documentApiEndpoint =
            object.documentApiEndpoint !== undefined &&
                object.documentApiEndpoint !== null
                ? String(object.documentApiEndpoint)
                : "";
        message.kinesisApiEndpoint =
            object.kinesisApiEndpoint !== undefined &&
                object.kinesisApiEndpoint !== null
                ? String(object.kinesisApiEndpoint)
                : "";
        message.kafkaApiEndpoint =
            object.kafkaApiEndpoint !== undefined && object.kafkaApiEndpoint !== null
                ? String(object.kafkaApiEndpoint)
                : "";
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? exports.MonitoringConfig.fromJSON(object.monitoringConfig)
                : undefined;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
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
        message.status !== undefined &&
            (obj.status = database_StatusToJSON(message.status));
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? exports.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.zonalDatabase !== undefined &&
            (obj.zonalDatabase = message.zonalDatabase
                ? exports.ZonalDatabase.toJSON(message.zonalDatabase)
                : undefined);
        message.regionalDatabase !== undefined &&
            (obj.regionalDatabase = message.regionalDatabase
                ? exports.RegionalDatabase.toJSON(message.regionalDatabase)
                : undefined);
        message.dedicatedDatabase !== undefined &&
            (obj.dedicatedDatabase = message.dedicatedDatabase
                ? exports.DedicatedDatabase.toJSON(message.dedicatedDatabase)
                : undefined);
        message.serverlessDatabase !== undefined &&
            (obj.serverlessDatabase = message.serverlessDatabase
                ? exports.ServerlessDatabase.toJSON(message.serverlessDatabase)
                : undefined);
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        message.locationId !== undefined && (obj.locationId = message.locationId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.backupConfig !== undefined &&
            (obj.backupConfig = message.backupConfig
                ? backup_1.BackupConfig.toJSON(message.backupConfig)
                : undefined);
        message.documentApiEndpoint !== undefined &&
            (obj.documentApiEndpoint = message.documentApiEndpoint);
        message.kinesisApiEndpoint !== undefined &&
            (obj.kinesisApiEndpoint = message.kinesisApiEndpoint);
        message.kafkaApiEndpoint !== undefined &&
            (obj.kafkaApiEndpoint = message.kafkaApiEndpoint);
        message.monitoringConfig !== undefined &&
            (obj.monitoringConfig = message.monitoringConfig
                ? exports.MonitoringConfig.toJSON(message.monitoringConfig)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = Object.assign({}, baseDatabase);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.endpoint = (_g = object.endpoint) !== null && _g !== void 0 ? _g : "";
        message.resourcePresetId = (_h = object.resourcePresetId) !== null && _h !== void 0 ? _h : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? exports.StorageConfig.fromPartial(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.networkId = (_j = object.networkId) !== null && _j !== void 0 ? _j : "";
        message.subnetIds = ((_k = object.subnetIds) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.zonalDatabase =
            object.zonalDatabase !== undefined && object.zonalDatabase !== null
                ? exports.ZonalDatabase.fromPartial(object.zonalDatabase)
                : undefined;
        message.regionalDatabase =
            object.regionalDatabase !== undefined && object.regionalDatabase !== null
                ? exports.RegionalDatabase.fromPartial(object.regionalDatabase)
                : undefined;
        message.dedicatedDatabase =
            object.dedicatedDatabase !== undefined &&
                object.dedicatedDatabase !== null
                ? exports.DedicatedDatabase.fromPartial(object.dedicatedDatabase)
                : undefined;
        message.serverlessDatabase =
            object.serverlessDatabase !== undefined &&
                object.serverlessDatabase !== null
                ? exports.ServerlessDatabase.fromPartial(object.serverlessDatabase)
                : undefined;
        message.assignPublicIps = (_l = object.assignPublicIps) !== null && _l !== void 0 ? _l : false;
        message.locationId = (_m = object.locationId) !== null && _m !== void 0 ? _m : "";
        message.labels = Object.entries((_o = object.labels) !== null && _o !== void 0 ? _o : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.backupConfig =
            object.backupConfig !== undefined && object.backupConfig !== null
                ? backup_1.BackupConfig.fromPartial(object.backupConfig)
                : undefined;
        message.documentApiEndpoint = (_p = object.documentApiEndpoint) !== null && _p !== void 0 ? _p : "";
        message.kinesisApiEndpoint = (_q = object.kinesisApiEndpoint) !== null && _q !== void 0 ? _q : "";
        message.kafkaApiEndpoint = (_r = object.kafkaApiEndpoint) !== null && _r !== void 0 ? _r : "";
        message.monitoringConfig =
            object.monitoringConfig !== undefined && object.monitoringConfig !== null
                ? exports.MonitoringConfig.fromPartial(object.monitoringConfig)
                : undefined;
        message.deletionProtection = (_s = object.deletionProtection) !== null && _s !== void 0 ? _s : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Database.$type, exports.Database);
const baseDatabase_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.Database.LabelsEntry",
    key: "",
    value: "",
};
exports.Database_LabelsEntry = {
    $type: "yandex.cloud.ydb.v1.Database.LabelsEntry",
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
        const message = Object.assign({}, baseDatabase_LabelsEntry);
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
        const message = Object.assign({}, baseDatabase_LabelsEntry);
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
        const message = Object.assign({}, baseDatabase_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Database_LabelsEntry.$type, exports.Database_LabelsEntry);
const baseAlertParameter = {
    $type: "yandex.cloud.ydb.v1.AlertParameter",
};
exports.AlertParameter = {
    $type: "yandex.cloud.ydb.v1.AlertParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.doubleParameterValue !== undefined) {
            exports.AlertParameter_DoubleParameterValue.encode(message.doubleParameterValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.integerParameterValue !== undefined) {
            exports.AlertParameter_IntegerParameterValue.encode(message.integerParameterValue, writer.uint32(18).fork()).ldelim();
        }
        if (message.textParameterValue !== undefined) {
            exports.AlertParameter_TextParameterValue.encode(message.textParameterValue, writer.uint32(26).fork()).ldelim();
        }
        if (message.textListParameterValue !== undefined) {
            exports.AlertParameter_TextListParameterValue.encode(message.textListParameterValue, writer.uint32(34).fork()).ldelim();
        }
        if (message.labelListParameterValue !== undefined) {
            exports.AlertParameter_LabelListParameterValue.encode(message.labelListParameterValue, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.doubleParameterValue =
                        exports.AlertParameter_DoubleParameterValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.integerParameterValue =
                        exports.AlertParameter_IntegerParameterValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.textParameterValue = exports.AlertParameter_TextParameterValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.textListParameterValue =
                        exports.AlertParameter_TextListParameterValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.labelListParameterValue =
                        exports.AlertParameter_LabelListParameterValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAlertParameter);
        message.doubleParameterValue =
            object.doubleParameterValue !== undefined &&
                object.doubleParameterValue !== null
                ? exports.AlertParameter_DoubleParameterValue.fromJSON(object.doubleParameterValue)
                : undefined;
        message.integerParameterValue =
            object.integerParameterValue !== undefined &&
                object.integerParameterValue !== null
                ? exports.AlertParameter_IntegerParameterValue.fromJSON(object.integerParameterValue)
                : undefined;
        message.textParameterValue =
            object.textParameterValue !== undefined &&
                object.textParameterValue !== null
                ? exports.AlertParameter_TextParameterValue.fromJSON(object.textParameterValue)
                : undefined;
        message.textListParameterValue =
            object.textListParameterValue !== undefined &&
                object.textListParameterValue !== null
                ? exports.AlertParameter_TextListParameterValue.fromJSON(object.textListParameterValue)
                : undefined;
        message.labelListParameterValue =
            object.labelListParameterValue !== undefined &&
                object.labelListParameterValue !== null
                ? exports.AlertParameter_LabelListParameterValue.fromJSON(object.labelListParameterValue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.doubleParameterValue !== undefined &&
            (obj.doubleParameterValue = message.doubleParameterValue
                ? exports.AlertParameter_DoubleParameterValue.toJSON(message.doubleParameterValue)
                : undefined);
        message.integerParameterValue !== undefined &&
            (obj.integerParameterValue = message.integerParameterValue
                ? exports.AlertParameter_IntegerParameterValue.toJSON(message.integerParameterValue)
                : undefined);
        message.textParameterValue !== undefined &&
            (obj.textParameterValue = message.textParameterValue
                ? exports.AlertParameter_TextParameterValue.toJSON(message.textParameterValue)
                : undefined);
        message.textListParameterValue !== undefined &&
            (obj.textListParameterValue = message.textListParameterValue
                ? exports.AlertParameter_TextListParameterValue.toJSON(message.textListParameterValue)
                : undefined);
        message.labelListParameterValue !== undefined &&
            (obj.labelListParameterValue = message.labelListParameterValue
                ? exports.AlertParameter_LabelListParameterValue.toJSON(message.labelListParameterValue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAlertParameter);
        message.doubleParameterValue =
            object.doubleParameterValue !== undefined &&
                object.doubleParameterValue !== null
                ? exports.AlertParameter_DoubleParameterValue.fromPartial(object.doubleParameterValue)
                : undefined;
        message.integerParameterValue =
            object.integerParameterValue !== undefined &&
                object.integerParameterValue !== null
                ? exports.AlertParameter_IntegerParameterValue.fromPartial(object.integerParameterValue)
                : undefined;
        message.textParameterValue =
            object.textParameterValue !== undefined &&
                object.textParameterValue !== null
                ? exports.AlertParameter_TextParameterValue.fromPartial(object.textParameterValue)
                : undefined;
        message.textListParameterValue =
            object.textListParameterValue !== undefined &&
                object.textListParameterValue !== null
                ? exports.AlertParameter_TextListParameterValue.fromPartial(object.textListParameterValue)
                : undefined;
        message.labelListParameterValue =
            object.labelListParameterValue !== undefined &&
                object.labelListParameterValue !== null
                ? exports.AlertParameter_LabelListParameterValue.fromPartial(object.labelListParameterValue)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter.$type, exports.AlertParameter);
const baseAlertParameter_DoubleParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue",
    name: "",
    value: 0,
};
exports.AlertParameter_DoubleParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.DoubleParameterValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== 0) {
            writer.uint32(17).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter_DoubleParameterValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAlertParameter_DoubleParameterValue);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Number(object.value)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlertParameter_DoubleParameterValue);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter_DoubleParameterValue.$type, exports.AlertParameter_DoubleParameterValue);
const baseAlertParameter_IntegerParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue",
    name: "",
    value: 0,
};
exports.AlertParameter_IntegerParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.IntegerParameterValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== 0) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter_IntegerParameterValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAlertParameter_IntegerParameterValue);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Number(object.value)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlertParameter_IntegerParameterValue);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter_IntegerParameterValue.$type, exports.AlertParameter_IntegerParameterValue);
const baseAlertParameter_TextParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue",
    name: "",
    value: "",
};
exports.AlertParameter_TextParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextParameterValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter_TextParameterValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
        const message = Object.assign({}, baseAlertParameter_TextParameterValue);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlertParameter_TextParameterValue);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter_TextParameterValue.$type, exports.AlertParameter_TextParameterValue);
const baseAlertParameter_TextListParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue",
    name: "",
    values: "",
};
exports.AlertParameter_TextListParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.TextListParameterValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter_TextListParameterValue);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseAlertParameter_TextListParameterValue);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlertParameter_TextListParameterValue);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter_TextListParameterValue.$type, exports.AlertParameter_TextListParameterValue);
const baseAlertParameter_LabelListParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue",
    name: "",
    values: "",
};
exports.AlertParameter_LabelListParameterValue = {
    $type: "yandex.cloud.ydb.v1.AlertParameter.LabelListParameterValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlertParameter_LabelListParameterValue);
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseAlertParameter_LabelListParameterValue);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlertParameter_LabelListParameterValue);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlertParameter_LabelListParameterValue.$type, exports.AlertParameter_LabelListParameterValue);
const baseNotificationChannel = {
    $type: "yandex.cloud.ydb.v1.NotificationChannel",
    notificationChannelId: "",
    notifyAboutStatuses: 0,
    repeateNotifyDelayMs: 0,
};
exports.NotificationChannel = {
    $type: "yandex.cloud.ydb.v1.NotificationChannel",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.notificationChannelId !== "") {
            writer.uint32(10).string(message.notificationChannelId);
        }
        writer.uint32(18).fork();
        for (const v of message.notifyAboutStatuses) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.repeateNotifyDelayMs !== 0) {
            writer.uint32(24).int64(message.repeateNotifyDelayMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseNotificationChannel);
        message.notifyAboutStatuses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notificationChannelId = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.notifyAboutStatuses.push(reader.int32());
                        }
                    }
                    else {
                        message.notifyAboutStatuses.push(reader.int32());
                    }
                    break;
                case 3:
                    message.repeateNotifyDelayMs = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseNotificationChannel);
        message.notificationChannelId =
            object.notificationChannelId !== undefined &&
                object.notificationChannelId !== null
                ? String(object.notificationChannelId)
                : "";
        message.notifyAboutStatuses = ((_a = object.notifyAboutStatuses) !== null && _a !== void 0 ? _a : []).map((e) => alertEvaluationStatusFromJSON(e));
        message.repeateNotifyDelayMs =
            object.repeateNotifyDelayMs !== undefined &&
                object.repeateNotifyDelayMs !== null
                ? Number(object.repeateNotifyDelayMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.notificationChannelId !== undefined &&
            (obj.notificationChannelId = message.notificationChannelId);
        if (message.notifyAboutStatuses) {
            obj.notifyAboutStatuses = message.notifyAboutStatuses.map((e) => alertEvaluationStatusToJSON(e));
        }
        else {
            obj.notifyAboutStatuses = [];
        }
        message.repeateNotifyDelayMs !== undefined &&
            (obj.repeateNotifyDelayMs = Math.round(message.repeateNotifyDelayMs));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseNotificationChannel);
        message.notificationChannelId = (_a = object.notificationChannelId) !== null && _a !== void 0 ? _a : "";
        message.notifyAboutStatuses =
            ((_b = object.notifyAboutStatuses) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.repeateNotifyDelayMs = (_c = object.repeateNotifyDelayMs) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.NotificationChannel.$type, exports.NotificationChannel);
const baseAlert = {
    $type: "yandex.cloud.ydb.v1.Alert",
    alertId: "",
    alertTemplateId: "",
    name: "",
    description: "",
};
exports.Alert = {
    $type: "yandex.cloud.ydb.v1.Alert",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.alertId !== "") {
            writer.uint32(10).string(message.alertId);
        }
        if (message.alertTemplateId !== "") {
            writer.uint32(18).string(message.alertTemplateId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.notificationChannels) {
            exports.NotificationChannel.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.alertParameters) {
            exports.AlertParameter.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.alertThresholds) {
            exports.AlertParameter.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlert);
        message.notificationChannels = [];
        message.alertParameters = [];
        message.alertThresholds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alertId = reader.string();
                    break;
                case 2:
                    message.alertTemplateId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.notificationChannels.push(exports.NotificationChannel.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.alertParameters.push(exports.AlertParameter.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.alertThresholds.push(exports.AlertParameter.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAlert);
        message.alertId =
            object.alertId !== undefined && object.alertId !== null
                ? String(object.alertId)
                : "";
        message.alertTemplateId =
            object.alertTemplateId !== undefined && object.alertTemplateId !== null
                ? String(object.alertTemplateId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.notificationChannels = ((_a = object.notificationChannels) !== null && _a !== void 0 ? _a : []).map((e) => exports.NotificationChannel.fromJSON(e));
        message.alertParameters = ((_b = object.alertParameters) !== null && _b !== void 0 ? _b : []).map((e) => exports.AlertParameter.fromJSON(e));
        message.alertThresholds = ((_c = object.alertThresholds) !== null && _c !== void 0 ? _c : []).map((e) => exports.AlertParameter.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alertId !== undefined && (obj.alertId = message.alertId);
        message.alertTemplateId !== undefined &&
            (obj.alertTemplateId = message.alertTemplateId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.notificationChannels) {
            obj.notificationChannels = message.notificationChannels.map((e) => e ? exports.NotificationChannel.toJSON(e) : undefined);
        }
        else {
            obj.notificationChannels = [];
        }
        if (message.alertParameters) {
            obj.alertParameters = message.alertParameters.map((e) => e ? exports.AlertParameter.toJSON(e) : undefined);
        }
        else {
            obj.alertParameters = [];
        }
        if (message.alertThresholds) {
            obj.alertThresholds = message.alertThresholds.map((e) => e ? exports.AlertParameter.toJSON(e) : undefined);
        }
        else {
            obj.alertThresholds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseAlert);
        message.alertId = (_a = object.alertId) !== null && _a !== void 0 ? _a : "";
        message.alertTemplateId = (_b = object.alertTemplateId) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.notificationChannels =
            ((_e = object.notificationChannels) === null || _e === void 0 ? void 0 : _e.map((e) => exports.NotificationChannel.fromPartial(e))) || [];
        message.alertParameters =
            ((_f = object.alertParameters) === null || _f === void 0 ? void 0 : _f.map((e) => exports.AlertParameter.fromPartial(e))) || [];
        message.alertThresholds =
            ((_g = object.alertThresholds) === null || _g === void 0 ? void 0 : _g.map((e) => exports.AlertParameter.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Alert.$type, exports.Alert);
const baseMonitoringConfig = {
    $type: "yandex.cloud.ydb.v1.MonitoringConfig",
};
exports.MonitoringConfig = {
    $type: "yandex.cloud.ydb.v1.MonitoringConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alerts) {
            exports.Alert.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMonitoringConfig);
        message.alerts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alerts.push(exports.Alert.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseMonitoringConfig);
        message.alerts = ((_a = object.alerts) !== null && _a !== void 0 ? _a : []).map((e) => exports.Alert.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alerts) {
            obj.alerts = message.alerts.map((e) => (e ? exports.Alert.toJSON(e) : undefined));
        }
        else {
            obj.alerts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMonitoringConfig);
        message.alerts = ((_a = object.alerts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Alert.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MonitoringConfig.$type, exports.MonitoringConfig);
const baseDedicatedDatabase = {
    $type: "yandex.cloud.ydb.v1.DedicatedDatabase",
    resourcePresetId: "",
    networkId: "",
    subnetIds: "",
    assignPublicIps: false,
};
exports.DedicatedDatabase = {
    $type: "yandex.cloud.ydb.v1.DedicatedDatabase",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.storageConfig !== undefined) {
            exports.StorageConfig.encode(message.storageConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(26).fork()).ldelim();
        }
        if (message.networkId !== "") {
            writer.uint32(34).string(message.networkId);
        }
        for (const v of message.subnetIds) {
            writer.uint32(42).string(v);
        }
        if (message.assignPublicIps === true) {
            writer.uint32(48).bool(message.assignPublicIps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDedicatedDatabase);
        message.subnetIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.storageConfig = exports.StorageConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.networkId = reader.string();
                    break;
                case 5:
                    message.subnetIds.push(reader.string());
                    break;
                case 6:
                    message.assignPublicIps = reader.bool();
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
        const message = Object.assign({}, baseDedicatedDatabase);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? exports.StorageConfig.fromJSON(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromJSON(object.scalePolicy)
                : undefined;
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.subnetIds = ((_a = object.subnetIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.assignPublicIps =
            object.assignPublicIps !== undefined && object.assignPublicIps !== null
                ? Boolean(object.assignPublicIps)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.storageConfig !== undefined &&
            (obj.storageConfig = message.storageConfig
                ? exports.StorageConfig.toJSON(message.storageConfig)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.assignPublicIps !== undefined &&
            (obj.assignPublicIps = message.assignPublicIps);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseDedicatedDatabase);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        message.storageConfig =
            object.storageConfig !== undefined && object.storageConfig !== null
                ? exports.StorageConfig.fromPartial(object.storageConfig)
                : undefined;
        message.scalePolicy =
            object.scalePolicy !== undefined && object.scalePolicy !== null
                ? exports.ScalePolicy.fromPartial(object.scalePolicy)
                : undefined;
        message.networkId = (_b = object.networkId) !== null && _b !== void 0 ? _b : "";
        message.subnetIds = ((_c = object.subnetIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.assignPublicIps = (_d = object.assignPublicIps) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DedicatedDatabase.$type, exports.DedicatedDatabase);
const baseServerlessDatabase = {
    $type: "yandex.cloud.ydb.v1.ServerlessDatabase",
    throttlingRcuLimit: 0,
    storageSizeLimit: 0,
    enableThrottlingRcuLimit: false,
    provisionedRcuLimit: 0,
    topicWriteQuota: 0,
};
exports.ServerlessDatabase = {
    $type: "yandex.cloud.ydb.v1.ServerlessDatabase",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.throttlingRcuLimit !== 0) {
            writer.uint32(8).int64(message.throttlingRcuLimit);
        }
        if (message.storageSizeLimit !== 0) {
            writer.uint32(16).int64(message.storageSizeLimit);
        }
        if (message.enableThrottlingRcuLimit === true) {
            writer.uint32(24).bool(message.enableThrottlingRcuLimit);
        }
        if (message.provisionedRcuLimit !== 0) {
            writer.uint32(32).int64(message.provisionedRcuLimit);
        }
        if (message.topicWriteQuota !== 0) {
            writer.uint32(40).int64(message.topicWriteQuota);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseServerlessDatabase);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.throttlingRcuLimit = longToNumber(reader.int64());
                    break;
                case 2:
                    message.storageSizeLimit = longToNumber(reader.int64());
                    break;
                case 3:
                    message.enableThrottlingRcuLimit = reader.bool();
                    break;
                case 4:
                    message.provisionedRcuLimit = longToNumber(reader.int64());
                    break;
                case 5:
                    message.topicWriteQuota = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseServerlessDatabase);
        message.throttlingRcuLimit =
            object.throttlingRcuLimit !== undefined &&
                object.throttlingRcuLimit !== null
                ? Number(object.throttlingRcuLimit)
                : 0;
        message.storageSizeLimit =
            object.storageSizeLimit !== undefined && object.storageSizeLimit !== null
                ? Number(object.storageSizeLimit)
                : 0;
        message.enableThrottlingRcuLimit =
            object.enableThrottlingRcuLimit !== undefined &&
                object.enableThrottlingRcuLimit !== null
                ? Boolean(object.enableThrottlingRcuLimit)
                : false;
        message.provisionedRcuLimit =
            object.provisionedRcuLimit !== undefined &&
                object.provisionedRcuLimit !== null
                ? Number(object.provisionedRcuLimit)
                : 0;
        message.topicWriteQuota =
            object.topicWriteQuota !== undefined && object.topicWriteQuota !== null
                ? Number(object.topicWriteQuota)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.throttlingRcuLimit !== undefined &&
            (obj.throttlingRcuLimit = Math.round(message.throttlingRcuLimit));
        message.storageSizeLimit !== undefined &&
            (obj.storageSizeLimit = Math.round(message.storageSizeLimit));
        message.enableThrottlingRcuLimit !== undefined &&
            (obj.enableThrottlingRcuLimit = message.enableThrottlingRcuLimit);
        message.provisionedRcuLimit !== undefined &&
            (obj.provisionedRcuLimit = Math.round(message.provisionedRcuLimit));
        message.topicWriteQuota !== undefined &&
            (obj.topicWriteQuota = Math.round(message.topicWriteQuota));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseServerlessDatabase);
        message.throttlingRcuLimit = (_a = object.throttlingRcuLimit) !== null && _a !== void 0 ? _a : 0;
        message.storageSizeLimit = (_b = object.storageSizeLimit) !== null && _b !== void 0 ? _b : 0;
        message.enableThrottlingRcuLimit = (_c = object.enableThrottlingRcuLimit) !== null && _c !== void 0 ? _c : false;
        message.provisionedRcuLimit = (_d = object.provisionedRcuLimit) !== null && _d !== void 0 ? _d : 0;
        message.topicWriteQuota = (_e = object.topicWriteQuota) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ServerlessDatabase.$type, exports.ServerlessDatabase);
const baseZonalDatabase = {
    $type: "yandex.cloud.ydb.v1.ZonalDatabase",
    zoneId: "",
};
exports.ZonalDatabase = {
    $type: "yandex.cloud.ydb.v1.ZonalDatabase",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== "") {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseZonalDatabase);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseZonalDatabase);
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseZonalDatabase);
        message.zoneId = (_a = object.zoneId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ZonalDatabase.$type, exports.ZonalDatabase);
const baseRegionalDatabase = {
    $type: "yandex.cloud.ydb.v1.RegionalDatabase",
    regionId: "",
};
exports.RegionalDatabase = {
    $type: "yandex.cloud.ydb.v1.RegionalDatabase",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regionId !== "") {
            writer.uint32(10).string(message.regionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRegionalDatabase);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRegionalDatabase);
        message.regionId =
            object.regionId !== undefined && object.regionId !== null
                ? String(object.regionId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRegionalDatabase);
        message.regionId = (_a = object.regionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegionalDatabase.$type, exports.RegionalDatabase);
const baseScalePolicy = { $type: "yandex.cloud.ydb.v1.ScalePolicy" };
exports.ScalePolicy = {
    $type: "yandex.cloud.ydb.v1.ScalePolicy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseScalePolicy);
        message.fixedScale =
            object.fixedScale !== undefined && object.fixedScale !== null
                ? exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy.$type, exports.ScalePolicy);
const baseScalePolicy_FixedScale = {
    $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale",
    size: 0,
};
exports.ScalePolicy_FixedScale = {
    $type: "yandex.cloud.ydb.v1.ScalePolicy.FixedScale",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScalePolicy_FixedScale);
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
        const message = Object.assign({}, baseScalePolicy_FixedScale);
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
        const message = Object.assign({}, baseScalePolicy_FixedScale);
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScalePolicy_FixedScale.$type, exports.ScalePolicy_FixedScale);
const baseStorageConfig = {
    $type: "yandex.cloud.ydb.v1.StorageConfig",
    storageSizeLimit: 0,
};
exports.StorageConfig = {
    $type: "yandex.cloud.ydb.v1.StorageConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.storageOptions) {
            exports.StorageOption.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.storageSizeLimit !== 0) {
            writer.uint32(16).int64(message.storageSizeLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageConfig);
        message.storageOptions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageOptions.push(exports.StorageOption.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.storageSizeLimit = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseStorageConfig);
        message.storageOptions = ((_a = object.storageOptions) !== null && _a !== void 0 ? _a : []).map((e) => exports.StorageOption.fromJSON(e));
        message.storageSizeLimit =
            object.storageSizeLimit !== undefined && object.storageSizeLimit !== null
                ? Number(object.storageSizeLimit)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storageOptions) {
            obj.storageOptions = message.storageOptions.map((e) => e ? exports.StorageOption.toJSON(e) : undefined);
        }
        else {
            obj.storageOptions = [];
        }
        message.storageSizeLimit !== undefined &&
            (obj.storageSizeLimit = Math.round(message.storageSizeLimit));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStorageConfig);
        message.storageOptions =
            ((_a = object.storageOptions) === null || _a === void 0 ? void 0 : _a.map((e) => exports.StorageOption.fromPartial(e))) || [];
        message.storageSizeLimit = (_b = object.storageSizeLimit) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageConfig.$type, exports.StorageConfig);
const baseStorageOption = {
    $type: "yandex.cloud.ydb.v1.StorageOption",
    storageTypeId: "",
    groupCount: 0,
};
exports.StorageOption = {
    $type: "yandex.cloud.ydb.v1.StorageOption",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storageTypeId !== "") {
            writer.uint32(10).string(message.storageTypeId);
        }
        if (message.groupCount !== 0) {
            writer.uint32(16).int64(message.groupCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageOption);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypeId = reader.string();
                    break;
                case 2:
                    message.groupCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStorageOption);
        message.storageTypeId =
            object.storageTypeId !== undefined && object.storageTypeId !== null
                ? String(object.storageTypeId)
                : "";
        message.groupCount =
            object.groupCount !== undefined && object.groupCount !== null
                ? Number(object.groupCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storageTypeId !== undefined &&
            (obj.storageTypeId = message.storageTypeId);
        message.groupCount !== undefined &&
            (obj.groupCount = Math.round(message.groupCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStorageOption);
        message.storageTypeId = (_a = object.storageTypeId) !== null && _a !== void 0 ? _a : "";
        message.groupCount = (_b = object.groupCount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageOption.$type, exports.StorageOption);
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
