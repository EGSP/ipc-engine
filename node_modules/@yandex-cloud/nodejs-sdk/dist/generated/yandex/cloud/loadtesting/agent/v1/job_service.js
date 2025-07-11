"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServiceClient = exports.JobServiceService = exports.JobSignalResponse = exports.JobSignalRequest = exports.ClaimJobStatusResponse = exports.ClaimJobStatusRequest = exports.GetJobRequest = exports.GetJobTransientFile = exports.TestArtifactUploadSettings = exports.TestDataEntry = exports.StorageObject = exports.File = exports.Job = exports.jobSignalResponse_SignalToJSON = exports.jobSignalResponse_SignalFromJSON = exports.JobSignalResponse_Signal = exports.claimJobStatusRequest_JobStatusToJSON = exports.claimJobStatusRequest_JobStatusFromJSON = exports.ClaimJobStatusRequest_JobStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.loadtesting.agent.v1";
var ClaimJobStatusRequest_JobStatus;
(function (ClaimJobStatusRequest_JobStatus) {
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["JOB_STATUS_UNSPECIFIED"] = 0] = "JOB_STATUS_UNSPECIFIED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["POST_PROCESS"] = 1] = "POST_PROCESS";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["INITIATED"] = 2] = "INITIATED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["PREPARING"] = 3] = "PREPARING";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["NOT_FOUND"] = 4] = "NOT_FOUND";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["RUNNING"] = 5] = "RUNNING";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["FINISHING"] = 6] = "FINISHING";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["FINISHED"] = 7] = "FINISHED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["STOPPED"] = 8] = "STOPPED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["FAILED"] = 9] = "FAILED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["AUTOSTOPPED"] = 10] = "AUTOSTOPPED";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["WAITING_FOR_A_COMMAND_TO_RUN"] = 11] = "WAITING_FOR_A_COMMAND_TO_RUN";
    ClaimJobStatusRequest_JobStatus[ClaimJobStatusRequest_JobStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimJobStatusRequest_JobStatus = exports.ClaimJobStatusRequest_JobStatus || (exports.ClaimJobStatusRequest_JobStatus = {}));
function claimJobStatusRequest_JobStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "JOB_STATUS_UNSPECIFIED":
            return ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED;
        case 1:
        case "POST_PROCESS":
            return ClaimJobStatusRequest_JobStatus.POST_PROCESS;
        case 2:
        case "INITIATED":
            return ClaimJobStatusRequest_JobStatus.INITIATED;
        case 3:
        case "PREPARING":
            return ClaimJobStatusRequest_JobStatus.PREPARING;
        case 4:
        case "NOT_FOUND":
            return ClaimJobStatusRequest_JobStatus.NOT_FOUND;
        case 5:
        case "RUNNING":
            return ClaimJobStatusRequest_JobStatus.RUNNING;
        case 6:
        case "FINISHING":
            return ClaimJobStatusRequest_JobStatus.FINISHING;
        case 7:
        case "FINISHED":
            return ClaimJobStatusRequest_JobStatus.FINISHED;
        case 8:
        case "STOPPED":
            return ClaimJobStatusRequest_JobStatus.STOPPED;
        case 9:
        case "FAILED":
            return ClaimJobStatusRequest_JobStatus.FAILED;
        case 10:
        case "AUTOSTOPPED":
            return ClaimJobStatusRequest_JobStatus.AUTOSTOPPED;
        case 11:
        case "WAITING_FOR_A_COMMAND_TO_RUN":
            return ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimJobStatusRequest_JobStatus.UNRECOGNIZED;
    }
}
exports.claimJobStatusRequest_JobStatusFromJSON = claimJobStatusRequest_JobStatusFromJSON;
function claimJobStatusRequest_JobStatusToJSON(object) {
    switch (object) {
        case ClaimJobStatusRequest_JobStatus.JOB_STATUS_UNSPECIFIED:
            return "JOB_STATUS_UNSPECIFIED";
        case ClaimJobStatusRequest_JobStatus.POST_PROCESS:
            return "POST_PROCESS";
        case ClaimJobStatusRequest_JobStatus.INITIATED:
            return "INITIATED";
        case ClaimJobStatusRequest_JobStatus.PREPARING:
            return "PREPARING";
        case ClaimJobStatusRequest_JobStatus.NOT_FOUND:
            return "NOT_FOUND";
        case ClaimJobStatusRequest_JobStatus.RUNNING:
            return "RUNNING";
        case ClaimJobStatusRequest_JobStatus.FINISHING:
            return "FINISHING";
        case ClaimJobStatusRequest_JobStatus.FINISHED:
            return "FINISHED";
        case ClaimJobStatusRequest_JobStatus.STOPPED:
            return "STOPPED";
        case ClaimJobStatusRequest_JobStatus.FAILED:
            return "FAILED";
        case ClaimJobStatusRequest_JobStatus.AUTOSTOPPED:
            return "AUTOSTOPPED";
        case ClaimJobStatusRequest_JobStatus.WAITING_FOR_A_COMMAND_TO_RUN:
            return "WAITING_FOR_A_COMMAND_TO_RUN";
        default:
            return "UNKNOWN";
    }
}
exports.claimJobStatusRequest_JobStatusToJSON = claimJobStatusRequest_JobStatusToJSON;
var JobSignalResponse_Signal;
(function (JobSignalResponse_Signal) {
    JobSignalResponse_Signal[JobSignalResponse_Signal["SIGNAL_UNSPECIFIED"] = 0] = "SIGNAL_UNSPECIFIED";
    JobSignalResponse_Signal[JobSignalResponse_Signal["STOP"] = 1] = "STOP";
    JobSignalResponse_Signal[JobSignalResponse_Signal["WAIT"] = 2] = "WAIT";
    JobSignalResponse_Signal[JobSignalResponse_Signal["RUN_IN"] = 3] = "RUN_IN";
    JobSignalResponse_Signal[JobSignalResponse_Signal["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(JobSignalResponse_Signal = exports.JobSignalResponse_Signal || (exports.JobSignalResponse_Signal = {}));
function jobSignalResponse_SignalFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNAL_UNSPECIFIED":
            return JobSignalResponse_Signal.SIGNAL_UNSPECIFIED;
        case 1:
        case "STOP":
            return JobSignalResponse_Signal.STOP;
        case 2:
        case "WAIT":
            return JobSignalResponse_Signal.WAIT;
        case 3:
        case "RUN_IN":
            return JobSignalResponse_Signal.RUN_IN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return JobSignalResponse_Signal.UNRECOGNIZED;
    }
}
exports.jobSignalResponse_SignalFromJSON = jobSignalResponse_SignalFromJSON;
function jobSignalResponse_SignalToJSON(object) {
    switch (object) {
        case JobSignalResponse_Signal.SIGNAL_UNSPECIFIED:
            return "SIGNAL_UNSPECIFIED";
        case JobSignalResponse_Signal.STOP:
            return "STOP";
        case JobSignalResponse_Signal.WAIT:
            return "WAIT";
        case JobSignalResponse_Signal.RUN_IN:
            return "RUN_IN";
        default:
            return "UNKNOWN";
    }
}
exports.jobSignalResponse_SignalToJSON = jobSignalResponse_SignalToJSON;
const baseJob = {
    $type: "yandex.cloud.loadtesting.agent.v1.Job",
    id: "",
    config: "",
    loggingLogGroupId: "",
};
exports.Job = {
    $type: "yandex.cloud.loadtesting.agent.v1.Job",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.config !== "") {
            writer.uint32(18).string(message.config);
        }
        if (message.ammo !== undefined) {
            exports.File.encode(message.ammo, writer.uint32(26).fork()).ldelim();
        }
        if (message.loggingLogGroupId !== "") {
            writer.uint32(34).string(message.loggingLogGroupId);
        }
        if (message.testData !== undefined) {
            exports.StorageObject.encode(message.testData, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.dataPayload) {
            exports.TestDataEntry.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.artifactUploadSettings !== undefined) {
            exports.TestArtifactUploadSettings.encode(message.artifactUploadSettings, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseJob);
        message.dataPayload = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.config = reader.string();
                    break;
                case 3:
                    message.ammo = exports.File.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.loggingLogGroupId = reader.string();
                    break;
                case 5:
                    message.testData = exports.StorageObject.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.dataPayload.push(exports.TestDataEntry.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.artifactUploadSettings = exports.TestArtifactUploadSettings.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseJob);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.config =
            object.config !== undefined && object.config !== null
                ? String(object.config)
                : "";
        message.ammo =
            object.ammo !== undefined && object.ammo !== null
                ? exports.File.fromJSON(object.ammo)
                : undefined;
        message.loggingLogGroupId =
            object.loggingLogGroupId !== undefined &&
                object.loggingLogGroupId !== null
                ? String(object.loggingLogGroupId)
                : "";
        message.testData =
            object.testData !== undefined && object.testData !== null
                ? exports.StorageObject.fromJSON(object.testData)
                : undefined;
        message.dataPayload = ((_a = object.dataPayload) !== null && _a !== void 0 ? _a : []).map((e) => exports.TestDataEntry.fromJSON(e));
        message.artifactUploadSettings =
            object.artifactUploadSettings !== undefined &&
                object.artifactUploadSettings !== null
                ? exports.TestArtifactUploadSettings.fromJSON(object.artifactUploadSettings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.config !== undefined && (obj.config = message.config);
        message.ammo !== undefined &&
            (obj.ammo = message.ammo ? exports.File.toJSON(message.ammo) : undefined);
        message.loggingLogGroupId !== undefined &&
            (obj.loggingLogGroupId = message.loggingLogGroupId);
        message.testData !== undefined &&
            (obj.testData = message.testData
                ? exports.StorageObject.toJSON(message.testData)
                : undefined);
        if (message.dataPayload) {
            obj.dataPayload = message.dataPayload.map((e) => e ? exports.TestDataEntry.toJSON(e) : undefined);
        }
        else {
            obj.dataPayload = [];
        }
        message.artifactUploadSettings !== undefined &&
            (obj.artifactUploadSettings = message.artifactUploadSettings
                ? exports.TestArtifactUploadSettings.toJSON(message.artifactUploadSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseJob);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.config = (_b = object.config) !== null && _b !== void 0 ? _b : "";
        message.ammo =
            object.ammo !== undefined && object.ammo !== null
                ? exports.File.fromPartial(object.ammo)
                : undefined;
        message.loggingLogGroupId = (_c = object.loggingLogGroupId) !== null && _c !== void 0 ? _c : "";
        message.testData =
            object.testData !== undefined && object.testData !== null
                ? exports.StorageObject.fromPartial(object.testData)
                : undefined;
        message.dataPayload =
            ((_d = object.dataPayload) === null || _d === void 0 ? void 0 : _d.map((e) => exports.TestDataEntry.fromPartial(e))) || [];
        message.artifactUploadSettings =
            object.artifactUploadSettings !== undefined &&
                object.artifactUploadSettings !== null
                ? exports.TestArtifactUploadSettings.fromPartial(object.artifactUploadSettings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Job.$type, exports.Job);
const baseFile = {
    $type: "yandex.cloud.loadtesting.agent.v1.File",
    name: "",
};
exports.File = {
    $type: "yandex.cloud.loadtesting.agent.v1.File",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.content.length !== 0) {
            writer.uint32(18).bytes(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFile);
        message.content = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFile);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.content !== undefined &&
            (obj.content = base64FromBytes(message.content !== undefined ? message.content : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseFile);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.content = (_b = object.content) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.File.$type, exports.File);
const baseStorageObject = {
    $type: "yandex.cloud.loadtesting.agent.v1.StorageObject",
    objectStorageBucket: "",
    objectStorageFilename: "",
};
exports.StorageObject = {
    $type: "yandex.cloud.loadtesting.agent.v1.StorageObject",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.objectStorageBucket !== "") {
            writer.uint32(10).string(message.objectStorageBucket);
        }
        if (message.objectStorageFilename !== "") {
            writer.uint32(18).string(message.objectStorageFilename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStorageObject);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.objectStorageBucket = reader.string();
                    break;
                case 2:
                    message.objectStorageFilename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStorageObject);
        message.objectStorageBucket =
            object.objectStorageBucket !== undefined &&
                object.objectStorageBucket !== null
                ? String(object.objectStorageBucket)
                : "";
        message.objectStorageFilename =
            object.objectStorageFilename !== undefined &&
                object.objectStorageFilename !== null
                ? String(object.objectStorageFilename)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.objectStorageBucket !== undefined &&
            (obj.objectStorageBucket = message.objectStorageBucket);
        message.objectStorageFilename !== undefined &&
            (obj.objectStorageFilename = message.objectStorageFilename);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStorageObject);
        message.objectStorageBucket = (_a = object.objectStorageBucket) !== null && _a !== void 0 ? _a : "";
        message.objectStorageFilename = (_b = object.objectStorageFilename) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StorageObject.$type, exports.StorageObject);
const baseTestDataEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry",
    name: "",
    isTransient: false,
};
exports.TestDataEntry = {
    $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.isTransient === true) {
            writer.uint32(16).bool(message.isTransient);
        }
        if (message.storageObject !== undefined) {
            exports.StorageObject.encode(message.storageObject, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTestDataEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.isTransient = reader.bool();
                    break;
                case 3:
                    message.storageObject = exports.StorageObject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTestDataEntry);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.isTransient =
            object.isTransient !== undefined && object.isTransient !== null
                ? Boolean(object.isTransient)
                : false;
        message.storageObject =
            object.storageObject !== undefined && object.storageObject !== null
                ? exports.StorageObject.fromJSON(object.storageObject)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.isTransient !== undefined &&
            (obj.isTransient = message.isTransient);
        message.storageObject !== undefined &&
            (obj.storageObject = message.storageObject
                ? exports.StorageObject.toJSON(message.storageObject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTestDataEntry);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.isTransient = (_b = object.isTransient) !== null && _b !== void 0 ? _b : false;
        message.storageObject =
            object.storageObject !== undefined && object.storageObject !== null
                ? exports.StorageObject.fromPartial(object.storageObject)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TestDataEntry.$type, exports.TestDataEntry);
const baseTestArtifactUploadSettings = {
    $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings",
    outputBucket: "",
    outputName: "",
    isArchive: false,
    filterInclude: "",
    filterExclude: "",
};
exports.TestArtifactUploadSettings = {
    $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.outputBucket !== "") {
            writer.uint32(10).string(message.outputBucket);
        }
        if (message.outputName !== "") {
            writer.uint32(18).string(message.outputName);
        }
        if (message.isArchive === true) {
            writer.uint32(24).bool(message.isArchive);
        }
        for (const v of message.filterInclude) {
            writer.uint32(34).string(v);
        }
        for (const v of message.filterExclude) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTestArtifactUploadSettings);
        message.filterInclude = [];
        message.filterExclude = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outputBucket = reader.string();
                    break;
                case 2:
                    message.outputName = reader.string();
                    break;
                case 3:
                    message.isArchive = reader.bool();
                    break;
                case 4:
                    message.filterInclude.push(reader.string());
                    break;
                case 5:
                    message.filterExclude.push(reader.string());
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
        const message = Object.assign({}, baseTestArtifactUploadSettings);
        message.outputBucket =
            object.outputBucket !== undefined && object.outputBucket !== null
                ? String(object.outputBucket)
                : "";
        message.outputName =
            object.outputName !== undefined && object.outputName !== null
                ? String(object.outputName)
                : "";
        message.isArchive =
            object.isArchive !== undefined && object.isArchive !== null
                ? Boolean(object.isArchive)
                : false;
        message.filterInclude = ((_a = object.filterInclude) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.filterExclude = ((_b = object.filterExclude) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.outputBucket !== undefined &&
            (obj.outputBucket = message.outputBucket);
        message.outputName !== undefined && (obj.outputName = message.outputName);
        message.isArchive !== undefined && (obj.isArchive = message.isArchive);
        if (message.filterInclude) {
            obj.filterInclude = message.filterInclude.map((e) => e);
        }
        else {
            obj.filterInclude = [];
        }
        if (message.filterExclude) {
            obj.filterExclude = message.filterExclude.map((e) => e);
        }
        else {
            obj.filterExclude = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseTestArtifactUploadSettings);
        message.outputBucket = (_a = object.outputBucket) !== null && _a !== void 0 ? _a : "";
        message.outputName = (_b = object.outputName) !== null && _b !== void 0 ? _b : "";
        message.isArchive = (_c = object.isArchive) !== null && _c !== void 0 ? _c : false;
        message.filterInclude = ((_d = object.filterInclude) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.filterExclude = ((_e = object.filterExclude) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TestArtifactUploadSettings.$type, exports.TestArtifactUploadSettings);
const baseGetJobTransientFile = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile",
    jobId: "",
    name: "",
};
exports.GetJobTransientFile = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jobId !== "") {
            writer.uint32(10).string(message.jobId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetJobTransientFile);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetJobTransientFile);
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetJobTransientFile);
        message.jobId = (_a = object.jobId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetJobTransientFile.$type, exports.GetJobTransientFile);
const baseGetJobRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest",
    computeInstanceId: "",
    agentInstanceId: "",
    jobId: "",
};
exports.GetJobRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.computeInstanceId !== "") {
            writer.uint32(10).string(message.computeInstanceId);
        }
        if (message.agentInstanceId !== "") {
            writer.uint32(18).string(message.agentInstanceId);
        }
        if (message.jobId !== "") {
            writer.uint32(26).string(message.jobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetJobRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.computeInstanceId = reader.string();
                    break;
                case 2:
                    message.agentInstanceId = reader.string();
                    break;
                case 3:
                    message.jobId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetJobRequest);
        message.computeInstanceId =
            object.computeInstanceId !== undefined &&
                object.computeInstanceId !== null
                ? String(object.computeInstanceId)
                : "";
        message.agentInstanceId =
            object.agentInstanceId !== undefined && object.agentInstanceId !== null
                ? String(object.agentInstanceId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.agentInstanceId !== undefined &&
            (obj.agentInstanceId = message.agentInstanceId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseGetJobRequest);
        message.computeInstanceId = (_a = object.computeInstanceId) !== null && _a !== void 0 ? _a : "";
        message.agentInstanceId = (_b = object.agentInstanceId) !== null && _b !== void 0 ? _b : "";
        message.jobId = (_c = object.jobId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetJobRequest.$type, exports.GetJobRequest);
const baseClaimJobStatusRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest",
    jobId: "",
    status: 0,
    error: "",
};
exports.ClaimJobStatusRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jobId !== "") {
            writer.uint32(10).string(message.jobId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.error !== "") {
            writer.uint32(26).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClaimJobStatusRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClaimJobStatusRequest);
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? claimJobStatusRequest_JobStatusFromJSON(object.status)
                : 0;
        message.error =
            object.error !== undefined && object.error !== null
                ? String(object.error)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.status !== undefined &&
            (obj.status = claimJobStatusRequest_JobStatusToJSON(message.status));
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClaimJobStatusRequest);
        message.jobId = (_a = object.jobId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.error = (_c = object.error) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClaimJobStatusRequest.$type, exports.ClaimJobStatusRequest);
const baseClaimJobStatusResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse",
    code: 0,
};
exports.ClaimJobStatusResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int64(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClaimJobStatusResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClaimJobStatusResponse);
        message.code =
            object.code !== undefined && object.code !== null
                ? Number(object.code)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClaimJobStatusResponse);
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClaimJobStatusResponse.$type, exports.ClaimJobStatusResponse);
const baseJobSignalRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest",
    jobId: "",
};
exports.JobSignalRequest = {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jobId !== "") {
            writer.uint32(10).string(message.jobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseJobSignalRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseJobSignalRequest);
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseJobSignalRequest);
        message.jobId = (_a = object.jobId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.JobSignalRequest.$type, exports.JobSignalRequest);
const baseJobSignalResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse",
    signal: 0,
    waitDuration: 0,
    runIn: 0,
};
exports.JobSignalResponse = {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signal !== 0) {
            writer.uint32(8).int32(message.signal);
        }
        if (message.waitDuration !== 0) {
            writer.uint32(17).double(message.waitDuration);
        }
        if (message.runIn !== 0) {
            writer.uint32(25).double(message.runIn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseJobSignalResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signal = reader.int32();
                    break;
                case 2:
                    message.waitDuration = reader.double();
                    break;
                case 3:
                    message.runIn = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseJobSignalResponse);
        message.signal =
            object.signal !== undefined && object.signal !== null
                ? jobSignalResponse_SignalFromJSON(object.signal)
                : 0;
        message.waitDuration =
            object.waitDuration !== undefined && object.waitDuration !== null
                ? Number(object.waitDuration)
                : 0;
        message.runIn =
            object.runIn !== undefined && object.runIn !== null
                ? Number(object.runIn)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.signal !== undefined &&
            (obj.signal = jobSignalResponse_SignalToJSON(message.signal));
        message.waitDuration !== undefined &&
            (obj.waitDuration = message.waitDuration);
        message.runIn !== undefined && (obj.runIn = message.runIn);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseJobSignalResponse);
        message.signal = (_a = object.signal) !== null && _a !== void 0 ? _a : 0;
        message.waitDuration = (_b = object.waitDuration) !== null && _b !== void 0 ? _b : 0;
        message.runIn = (_c = object.runIn) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.JobSignalResponse.$type, exports.JobSignalResponse);
exports.JobServiceService = {
    /** Claims status for the specified job. */
    claimStatus: {
        path: "/yandex.cloud.loadtesting.agent.v1.JobService/ClaimStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ClaimJobStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ClaimJobStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ClaimJobStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ClaimJobStatusResponse.decode(value),
    },
    /** Returns the job for the specified agent. */
    get: {
        path: "/yandex.cloud.loadtesting.agent.v1.JobService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetJobRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetJobRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Job.encode(value).finish()),
        responseDeserialize: (value) => exports.Job.decode(value),
    },
    /** Returns the signal for the specified job. */
    getSignal: {
        path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetSignal",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.JobSignalRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.JobSignalRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.JobSignalResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.JobSignalResponse.decode(value),
    },
    getTransientFile: {
        path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetTransientFile",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetJobTransientFile.encode(value).finish()),
        requestDeserialize: (value) => exports.GetJobTransientFile.decode(value),
        responseSerialize: (value) => Buffer.from(exports.File.encode(value).finish()),
        responseDeserialize: (value) => exports.File.decode(value),
    },
};
exports.JobServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.JobServiceService, "yandex.cloud.loadtesting.agent.v1.JobService");
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
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
