"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiveJob_ScriptVariablesEntry = exports.HiveJob_PropertiesEntry = exports.HiveJob = exports.QueryList = exports.PysparkJob_PropertiesEntry = exports.PysparkJob = exports.SparkJob_PropertiesEntry = exports.SparkJob = exports.MapreduceJob_PropertiesEntry = exports.MapreduceJob = exports.ApplicationInfo = exports.ApplicationAttempt = exports.Job = exports.job_StatusToJSON = exports.job_StatusFromJSON = exports.Job_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.dataproc.v1";
var Job_Status;
(function (Job_Status) {
    Job_Status[Job_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
    Job_Status[Job_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** PENDING - Job is acquired by the agent and is in the queue for execution. */
    Job_Status[Job_Status["PENDING"] = 2] = "PENDING";
    /** RUNNING - Job is being run in the cluster. */
    Job_Status[Job_Status["RUNNING"] = 3] = "RUNNING";
    /** ERROR - Job failed to finish the run properly. */
    Job_Status[Job_Status["ERROR"] = 4] = "ERROR";
    /** DONE - Job is finished. */
    Job_Status[Job_Status["DONE"] = 5] = "DONE";
    /** CANCELLED - Job is cancelled. */
    Job_Status[Job_Status["CANCELLED"] = 6] = "CANCELLED";
    /** CANCELLING - Job is waiting for cancellation. */
    Job_Status[Job_Status["CANCELLING"] = 7] = "CANCELLING";
    Job_Status[Job_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Job_Status = exports.Job_Status || (exports.Job_Status = {}));
function job_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Job_Status.STATUS_UNSPECIFIED;
        case 1:
        case "PROVISIONING":
            return Job_Status.PROVISIONING;
        case 2:
        case "PENDING":
            return Job_Status.PENDING;
        case 3:
        case "RUNNING":
            return Job_Status.RUNNING;
        case 4:
        case "ERROR":
            return Job_Status.ERROR;
        case 5:
        case "DONE":
            return Job_Status.DONE;
        case 6:
        case "CANCELLED":
            return Job_Status.CANCELLED;
        case 7:
        case "CANCELLING":
            return Job_Status.CANCELLING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Job_Status.UNRECOGNIZED;
    }
}
exports.job_StatusFromJSON = job_StatusFromJSON;
function job_StatusToJSON(object) {
    switch (object) {
        case Job_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Job_Status.PROVISIONING:
            return "PROVISIONING";
        case Job_Status.PENDING:
            return "PENDING";
        case Job_Status.RUNNING:
            return "RUNNING";
        case Job_Status.ERROR:
            return "ERROR";
        case Job_Status.DONE:
            return "DONE";
        case Job_Status.CANCELLED:
            return "CANCELLED";
        case Job_Status.CANCELLING:
            return "CANCELLING";
        default:
            return "UNKNOWN";
    }
}
exports.job_StatusToJSON = job_StatusToJSON;
const baseJob = {
    $type: "yandex.cloud.dataproc.v1.Job",
    id: "",
    clusterId: "",
    name: "",
    createdBy: "",
    status: 0,
};
exports.Job = {
    $type: "yandex.cloud.dataproc.v1.Job",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.startedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.finishedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.createdBy !== "") {
            writer.uint32(98).string(message.createdBy);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.mapreduceJob !== undefined) {
            exports.MapreduceJob.encode(message.mapreduceJob, writer.uint32(66).fork()).ldelim();
        }
        if (message.sparkJob !== undefined) {
            exports.SparkJob.encode(message.sparkJob, writer.uint32(74).fork()).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            exports.PysparkJob.encode(message.pysparkJob, writer.uint32(82).fork()).ldelim();
        }
        if (message.hiveJob !== undefined) {
            exports.HiveJob.encode(message.hiveJob, writer.uint32(90).fork()).ldelim();
        }
        if (message.applicationInfo !== undefined) {
            exports.ApplicationInfo.encode(message.applicationInfo, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseJob);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.finishedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 12:
                    message.createdBy = reader.string();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.mapreduceJob = exports.MapreduceJob.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sparkJob = exports.SparkJob.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.pysparkJob = exports.PysparkJob.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.hiveJob = exports.HiveJob.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.applicationInfo = exports.ApplicationInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseJob);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.startedAt =
            object.startedAt !== undefined && object.startedAt !== null
                ? fromJsonTimestamp(object.startedAt)
                : undefined;
        message.finishedAt =
            object.finishedAt !== undefined && object.finishedAt !== null
                ? fromJsonTimestamp(object.finishedAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.createdBy =
            object.createdBy !== undefined && object.createdBy !== null
                ? String(object.createdBy)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? job_StatusFromJSON(object.status)
                : 0;
        message.mapreduceJob =
            object.mapreduceJob !== undefined && object.mapreduceJob !== null
                ? exports.MapreduceJob.fromJSON(object.mapreduceJob)
                : undefined;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? exports.SparkJob.fromJSON(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? exports.PysparkJob.fromJSON(object.pysparkJob)
                : undefined;
        message.hiveJob =
            object.hiveJob !== undefined && object.hiveJob !== null
                ? exports.HiveJob.fromJSON(object.hiveJob)
                : undefined;
        message.applicationInfo =
            object.applicationInfo !== undefined && object.applicationInfo !== null
                ? exports.ApplicationInfo.fromJSON(object.applicationInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        message.finishedAt !== undefined &&
            (obj.finishedAt = message.finishedAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.status !== undefined &&
            (obj.status = job_StatusToJSON(message.status));
        message.mapreduceJob !== undefined &&
            (obj.mapreduceJob = message.mapreduceJob
                ? exports.MapreduceJob.toJSON(message.mapreduceJob)
                : undefined);
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob
                ? exports.SparkJob.toJSON(message.sparkJob)
                : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? exports.PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.hiveJob !== undefined &&
            (obj.hiveJob = message.hiveJob
                ? exports.HiveJob.toJSON(message.hiveJob)
                : undefined);
        message.applicationInfo !== undefined &&
            (obj.applicationInfo = message.applicationInfo
                ? exports.ApplicationInfo.toJSON(message.applicationInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseJob);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.startedAt = (_d = object.startedAt) !== null && _d !== void 0 ? _d : undefined;
        message.finishedAt = (_e = object.finishedAt) !== null && _e !== void 0 ? _e : undefined;
        message.name = (_f = object.name) !== null && _f !== void 0 ? _f : "";
        message.createdBy = (_g = object.createdBy) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.mapreduceJob =
            object.mapreduceJob !== undefined && object.mapreduceJob !== null
                ? exports.MapreduceJob.fromPartial(object.mapreduceJob)
                : undefined;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? exports.SparkJob.fromPartial(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? exports.PysparkJob.fromPartial(object.pysparkJob)
                : undefined;
        message.hiveJob =
            object.hiveJob !== undefined && object.hiveJob !== null
                ? exports.HiveJob.fromPartial(object.hiveJob)
                : undefined;
        message.applicationInfo =
            object.applicationInfo !== undefined && object.applicationInfo !== null
                ? exports.ApplicationInfo.fromPartial(object.applicationInfo)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Job.$type, exports.Job);
const baseApplicationAttempt = {
    $type: "yandex.cloud.dataproc.v1.ApplicationAttempt",
    id: "",
    amContainerId: "",
};
exports.ApplicationAttempt = {
    $type: "yandex.cloud.dataproc.v1.ApplicationAttempt",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.amContainerId !== "") {
            writer.uint32(18).string(message.amContainerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationAttempt);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.amContainerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseApplicationAttempt);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.amContainerId =
            object.amContainerId !== undefined && object.amContainerId !== null
                ? String(object.amContainerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.amContainerId !== undefined &&
            (obj.amContainerId = message.amContainerId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplicationAttempt);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.amContainerId = (_b = object.amContainerId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationAttempt.$type, exports.ApplicationAttempt);
const baseApplicationInfo = {
    $type: "yandex.cloud.dataproc.v1.ApplicationInfo",
    id: "",
};
exports.ApplicationInfo = {
    $type: "yandex.cloud.dataproc.v1.ApplicationInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.applicationAttempts) {
            exports.ApplicationAttempt.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseApplicationInfo);
        message.applicationAttempts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.applicationAttempts.push(exports.ApplicationAttempt.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseApplicationInfo);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.applicationAttempts = ((_a = object.applicationAttempts) !== null && _a !== void 0 ? _a : []).map((e) => exports.ApplicationAttempt.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.applicationAttempts) {
            obj.applicationAttempts = message.applicationAttempts.map((e) => e ? exports.ApplicationAttempt.toJSON(e) : undefined);
        }
        else {
            obj.applicationAttempts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseApplicationInfo);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.applicationAttempts =
            ((_b = object.applicationAttempts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ApplicationAttempt.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApplicationInfo.$type, exports.ApplicationInfo);
const baseMapreduceJob = {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob",
    args: "",
    jarFileUris: "",
    fileUris: "",
    archiveUris: "",
};
exports.MapreduceJob = {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.MapreduceJob_PropertiesEntry.encode({
                $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainJarFileUri !== undefined) {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== undefined) {
            writer.uint32(58).string(message.mainClass);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMapreduceJob);
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.MapreduceJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseMapreduceJob);
        message.args = ((_a = object.args) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.jarFileUris = ((_b = object.jarFileUris) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.fileUris = ((_c = object.fileUris) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.archiveUris = ((_d = object.archiveUris) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.mainJarFileUri =
            object.mainJarFileUri !== undefined && object.mainJarFileUri !== null
                ? String(object.mainJarFileUri)
                : undefined;
        message.mainClass =
            object.mainClass !== undefined && object.mainClass !== null
                ? String(object.mainClass)
                : undefined;
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
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseMapreduceJob);
        message.args = ((_a = object.args) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.jarFileUris = ((_b = object.jarFileUris) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fileUris = ((_c = object.fileUris) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.archiveUris = ((_d = object.archiveUris) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.mainJarFileUri = (_f = object.mainJarFileUri) !== null && _f !== void 0 ? _f : undefined;
        message.mainClass = (_g = object.mainClass) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MapreduceJob.$type, exports.MapreduceJob);
const baseMapreduceJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
    key: "",
    value: "",
};
exports.MapreduceJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry",
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
        const message = Object.assign({}, baseMapreduceJob_PropertiesEntry);
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
        const message = Object.assign({}, baseMapreduceJob_PropertiesEntry);
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
        const message = Object.assign({}, baseMapreduceJob_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MapreduceJob_PropertiesEntry.$type, exports.MapreduceJob_PropertiesEntry);
const baseSparkJob = {
    $type: "yandex.cloud.dataproc.v1.SparkJob",
    args: "",
    jarFileUris: "",
    fileUris: "",
    archiveUris: "",
    mainJarFileUri: "",
    mainClass: "",
    packages: "",
    repositories: "",
    excludePackages: "",
};
exports.SparkJob = {
    $type: "yandex.cloud.dataproc.v1.SparkJob",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.SparkJob_PropertiesEntry.encode({
                $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainJarFileUri !== "") {
            writer.uint32(50).string(message.mainJarFileUri);
        }
        if (message.mainClass !== "") {
            writer.uint32(58).string(message.mainClass);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSparkJob);
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.SparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainJarFileUri = reader.string();
                    break;
                case 7:
                    message.mainClass = reader.string();
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseSparkJob);
        message.args = ((_a = object.args) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.jarFileUris = ((_b = object.jarFileUris) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.fileUris = ((_c = object.fileUris) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.archiveUris = ((_d = object.archiveUris) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.mainJarFileUri =
            object.mainJarFileUri !== undefined && object.mainJarFileUri !== null
                ? String(object.mainJarFileUri)
                : "";
        message.mainClass =
            object.mainClass !== undefined && object.mainClass !== null
                ? String(object.mainClass)
                : "";
        message.packages = ((_f = object.packages) !== null && _f !== void 0 ? _f : []).map((e) => String(e));
        message.repositories = ((_g = object.repositories) !== null && _g !== void 0 ? _g : []).map((e) => String(e));
        message.excludePackages = ((_h = object.excludePackages) !== null && _h !== void 0 ? _h : []).map((e) => String(e));
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
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainJarFileUri !== undefined &&
            (obj.mainJarFileUri = message.mainJarFileUri);
        message.mainClass !== undefined && (obj.mainClass = message.mainClass);
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        }
        else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        }
        else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        }
        else {
            obj.excludePackages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseSparkJob);
        message.args = ((_a = object.args) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.jarFileUris = ((_b = object.jarFileUris) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fileUris = ((_c = object.fileUris) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.archiveUris = ((_d = object.archiveUris) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.mainJarFileUri = (_f = object.mainJarFileUri) !== null && _f !== void 0 ? _f : "";
        message.mainClass = (_g = object.mainClass) !== null && _g !== void 0 ? _g : "";
        message.packages = ((_h = object.packages) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.repositories = ((_j = object.repositories) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.excludePackages = ((_k = object.excludePackages) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SparkJob.$type, exports.SparkJob);
const baseSparkJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
    key: "",
    value: "",
};
exports.SparkJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry",
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
        const message = Object.assign({}, baseSparkJob_PropertiesEntry);
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
        const message = Object.assign({}, baseSparkJob_PropertiesEntry);
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
        const message = Object.assign({}, baseSparkJob_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SparkJob_PropertiesEntry.$type, exports.SparkJob_PropertiesEntry);
const basePysparkJob = {
    $type: "yandex.cloud.dataproc.v1.PysparkJob",
    args: "",
    jarFileUris: "",
    fileUris: "",
    archiveUris: "",
    mainPythonFileUri: "",
    pythonFileUris: "",
    packages: "",
    repositories: "",
    excludePackages: "",
};
exports.PysparkJob = {
    $type: "yandex.cloud.dataproc.v1.PysparkJob",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        for (const v of message.jarFileUris) {
            writer.uint32(18).string(v);
        }
        for (const v of message.fileUris) {
            writer.uint32(26).string(v);
        }
        for (const v of message.archiveUris) {
            writer.uint32(34).string(v);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.PysparkJob_PropertiesEntry.encode({
                $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.mainPythonFileUri !== "") {
            writer.uint32(50).string(message.mainPythonFileUri);
        }
        for (const v of message.pythonFileUris) {
            writer.uint32(58).string(v);
        }
        for (const v of message.packages) {
            writer.uint32(66).string(v);
        }
        for (const v of message.repositories) {
            writer.uint32(74).string(v);
        }
        for (const v of message.excludePackages) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePysparkJob);
        message.args = [];
        message.jarFileUris = [];
        message.fileUris = [];
        message.archiveUris = [];
        message.properties = {};
        message.pythonFileUris = [];
        message.packages = [];
        message.repositories = [];
        message.excludePackages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.jarFileUris.push(reader.string());
                    break;
                case 3:
                    message.fileUris.push(reader.string());
                    break;
                case 4:
                    message.archiveUris.push(reader.string());
                    break;
                case 5:
                    const entry5 = exports.PysparkJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.mainPythonFileUri = reader.string();
                    break;
                case 7:
                    message.pythonFileUris.push(reader.string());
                    break;
                case 8:
                    message.packages.push(reader.string());
                    break;
                case 9:
                    message.repositories.push(reader.string());
                    break;
                case 10:
                    message.excludePackages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, basePysparkJob);
        message.args = ((_a = object.args) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.jarFileUris = ((_b = object.jarFileUris) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.fileUris = ((_c = object.fileUris) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.archiveUris = ((_d = object.archiveUris) !== null && _d !== void 0 ? _d : []).map((e) => String(e));
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.mainPythonFileUri =
            object.mainPythonFileUri !== undefined &&
                object.mainPythonFileUri !== null
                ? String(object.mainPythonFileUri)
                : "";
        message.pythonFileUris = ((_f = object.pythonFileUris) !== null && _f !== void 0 ? _f : []).map((e) => String(e));
        message.packages = ((_g = object.packages) !== null && _g !== void 0 ? _g : []).map((e) => String(e));
        message.repositories = ((_h = object.repositories) !== null && _h !== void 0 ? _h : []).map((e) => String(e));
        message.excludePackages = ((_j = object.excludePackages) !== null && _j !== void 0 ? _j : []).map((e) => String(e));
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
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        if (message.fileUris) {
            obj.fileUris = message.fileUris.map((e) => e);
        }
        else {
            obj.fileUris = [];
        }
        if (message.archiveUris) {
            obj.archiveUris = message.archiveUris.map((e) => e);
        }
        else {
            obj.archiveUris = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.mainPythonFileUri !== undefined &&
            (obj.mainPythonFileUri = message.mainPythonFileUri);
        if (message.pythonFileUris) {
            obj.pythonFileUris = message.pythonFileUris.map((e) => e);
        }
        else {
            obj.pythonFileUris = [];
        }
        if (message.packages) {
            obj.packages = message.packages.map((e) => e);
        }
        else {
            obj.packages = [];
        }
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) => e);
        }
        else {
            obj.repositories = [];
        }
        if (message.excludePackages) {
            obj.excludePackages = message.excludePackages.map((e) => e);
        }
        else {
            obj.excludePackages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, basePysparkJob);
        message.args = ((_a = object.args) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.jarFileUris = ((_b = object.jarFileUris) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.fileUris = ((_c = object.fileUris) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.archiveUris = ((_d = object.archiveUris) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.properties = Object.entries((_e = object.properties) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.mainPythonFileUri = (_f = object.mainPythonFileUri) !== null && _f !== void 0 ? _f : "";
        message.pythonFileUris = ((_g = object.pythonFileUris) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.packages = ((_h = object.packages) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.repositories = ((_j = object.repositories) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.excludePackages = ((_k = object.excludePackages) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PysparkJob.$type, exports.PysparkJob);
const basePysparkJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
    key: "",
    value: "",
};
exports.PysparkJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry",
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
        const message = Object.assign({}, basePysparkJob_PropertiesEntry);
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
        const message = Object.assign({}, basePysparkJob_PropertiesEntry);
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
        const message = Object.assign({}, basePysparkJob_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PysparkJob_PropertiesEntry.$type, exports.PysparkJob_PropertiesEntry);
const baseQueryList = {
    $type: "yandex.cloud.dataproc.v1.QueryList",
    queries: "",
};
exports.QueryList = {
    $type: "yandex.cloud.dataproc.v1.QueryList",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.queries) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryList);
        message.queries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries.push(reader.string());
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
        const message = Object.assign({}, baseQueryList);
        message.queries = ((_a = object.queries) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map((e) => e);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryList);
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryList.$type, exports.QueryList);
const baseHiveJob = {
    $type: "yandex.cloud.dataproc.v1.HiveJob",
    continueOnFailure: false,
    jarFileUris: "",
};
exports.HiveJob = {
    $type: "yandex.cloud.dataproc.v1.HiveJob",
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.properties).forEach(([key, value]) => {
            exports.HiveJob_PropertiesEntry.encode({
                $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        if (message.continueOnFailure === true) {
            writer.uint32(16).bool(message.continueOnFailure);
        }
        Object.entries(message.scriptVariables).forEach(([key, value]) => {
            exports.HiveJob_ScriptVariablesEntry.encode({
                $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        for (const v of message.jarFileUris) {
            writer.uint32(34).string(v);
        }
        if (message.queryFileUri !== undefined) {
            writer.uint32(42).string(message.queryFileUri);
        }
        if (message.queryList !== undefined) {
            exports.QueryList.encode(message.queryList, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseHiveJob);
        message.properties = {};
        message.scriptVariables = {};
        message.jarFileUris = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.HiveJob_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.properties[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.continueOnFailure = reader.bool();
                    break;
                case 3:
                    const entry3 = exports.HiveJob_ScriptVariablesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.scriptVariables[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.jarFileUris.push(reader.string());
                    break;
                case 5:
                    message.queryFileUri = reader.string();
                    break;
                case 6:
                    message.queryList = exports.QueryList.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseHiveJob);
        message.properties = Object.entries((_a = object.properties) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.continueOnFailure =
            object.continueOnFailure !== undefined &&
                object.continueOnFailure !== null
                ? Boolean(object.continueOnFailure)
                : false;
        message.scriptVariables = Object.entries((_b = object.scriptVariables) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.jarFileUris = ((_c = object.jarFileUris) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.queryFileUri =
            object.queryFileUri !== undefined && object.queryFileUri !== null
                ? String(object.queryFileUri)
                : undefined;
        message.queryList =
            object.queryList !== undefined && object.queryList !== null
                ? exports.QueryList.fromJSON(object.queryList)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.continueOnFailure !== undefined &&
            (obj.continueOnFailure = message.continueOnFailure);
        obj.scriptVariables = {};
        if (message.scriptVariables) {
            Object.entries(message.scriptVariables).forEach(([k, v]) => {
                obj.scriptVariables[k] = v;
            });
        }
        if (message.jarFileUris) {
            obj.jarFileUris = message.jarFileUris.map((e) => e);
        }
        else {
            obj.jarFileUris = [];
        }
        message.queryFileUri !== undefined &&
            (obj.queryFileUri = message.queryFileUri);
        message.queryList !== undefined &&
            (obj.queryList = message.queryList
                ? exports.QueryList.toJSON(message.queryList)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseHiveJob);
        message.properties = Object.entries((_a = object.properties) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.continueOnFailure = (_b = object.continueOnFailure) !== null && _b !== void 0 ? _b : false;
        message.scriptVariables = Object.entries((_c = object.scriptVariables) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.jarFileUris = ((_d = object.jarFileUris) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.queryFileUri = (_e = object.queryFileUri) !== null && _e !== void 0 ? _e : undefined;
        message.queryList =
            object.queryList !== undefined && object.queryList !== null
                ? exports.QueryList.fromPartial(object.queryList)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HiveJob.$type, exports.HiveJob);
const baseHiveJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
    key: "",
    value: "",
};
exports.HiveJob_PropertiesEntry = {
    $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry",
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
        const message = Object.assign({}, baseHiveJob_PropertiesEntry);
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
        const message = Object.assign({}, baseHiveJob_PropertiesEntry);
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
        const message = Object.assign({}, baseHiveJob_PropertiesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HiveJob_PropertiesEntry.$type, exports.HiveJob_PropertiesEntry);
const baseHiveJob_ScriptVariablesEntry = {
    $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
    key: "",
    value: "",
};
exports.HiveJob_ScriptVariablesEntry = {
    $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry",
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
        const message = Object.assign({}, baseHiveJob_ScriptVariablesEntry);
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
        const message = Object.assign({}, baseHiveJob_ScriptVariablesEntry);
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
        const message = Object.assign({}, baseHiveJob_ScriptVariablesEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HiveJob_ScriptVariablesEntry.$type, exports.HiveJob_ScriptVariablesEntry);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
