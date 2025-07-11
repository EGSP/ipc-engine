"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServiceClient = exports.JobServiceService = exports.ListJobLogResponse = exports.ListJobLogRequest = exports.CancelJobRequest = exports.CreateJobMetadata = exports.CreateJobRequest = exports.ListJobsResponse = exports.ListJobsRequest = exports.GetJobRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const job_1 = require("../../../../yandex/cloud/dataproc/v1/job");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.dataproc.v1";
const baseGetJobRequest = {
    $type: "yandex.cloud.dataproc.v1.GetJobRequest",
    clusterId: "",
    jobId: "",
};
exports.GetJobRequest = {
    $type: "yandex.cloud.dataproc.v1.GetJobRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== "") {
            writer.uint32(18).string(message.jobId);
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
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetJobRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetJobRequest.$type, exports.GetJobRequest);
const baseListJobsRequest = {
    $type: "yandex.cloud.dataproc.v1.ListJobsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListJobsRequest = {
    $type: "yandex.cloud.dataproc.v1.ListJobsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListJobsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListJobsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListJobsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListJobsRequest.$type, exports.ListJobsRequest);
const baseListJobsResponse = {
    $type: "yandex.cloud.dataproc.v1.ListJobsResponse",
    nextPageToken: "",
};
exports.ListJobsResponse = {
    $type: "yandex.cloud.dataproc.v1.ListJobsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.jobs) {
            job_1.Job.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListJobsResponse);
        message.jobs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jobs.push(job_1.Job.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListJobsResponse);
        message.jobs = ((_a = object.jobs) !== null && _a !== void 0 ? _a : []).map((e) => job_1.Job.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.jobs) {
            obj.jobs = message.jobs.map((e) => (e ? job_1.Job.toJSON(e) : undefined));
        }
        else {
            obj.jobs = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListJobsResponse);
        message.jobs = ((_a = object.jobs) === null || _a === void 0 ? void 0 : _a.map((e) => job_1.Job.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListJobsResponse.$type, exports.ListJobsResponse);
const baseCreateJobRequest = {
    $type: "yandex.cloud.dataproc.v1.CreateJobRequest",
    clusterId: "",
    name: "",
};
exports.CreateJobRequest = {
    $type: "yandex.cloud.dataproc.v1.CreateJobRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.mapreduceJob !== undefined) {
            job_1.MapreduceJob.encode(message.mapreduceJob, writer.uint32(26).fork()).ldelim();
        }
        if (message.sparkJob !== undefined) {
            job_1.SparkJob.encode(message.sparkJob, writer.uint32(34).fork()).ldelim();
        }
        if (message.pysparkJob !== undefined) {
            job_1.PysparkJob.encode(message.pysparkJob, writer.uint32(42).fork()).ldelim();
        }
        if (message.hiveJob !== undefined) {
            job_1.HiveJob.encode(message.hiveJob, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateJobRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.mapreduceJob = job_1.MapreduceJob.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sparkJob = job_1.SparkJob.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pysparkJob = job_1.PysparkJob.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.hiveJob = job_1.HiveJob.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateJobRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.mapreduceJob =
            object.mapreduceJob !== undefined && object.mapreduceJob !== null
                ? job_1.MapreduceJob.fromJSON(object.mapreduceJob)
                : undefined;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? job_1.SparkJob.fromJSON(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? job_1.PysparkJob.fromJSON(object.pysparkJob)
                : undefined;
        message.hiveJob =
            object.hiveJob !== undefined && object.hiveJob !== null
                ? job_1.HiveJob.fromJSON(object.hiveJob)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.mapreduceJob !== undefined &&
            (obj.mapreduceJob = message.mapreduceJob
                ? job_1.MapreduceJob.toJSON(message.mapreduceJob)
                : undefined);
        message.sparkJob !== undefined &&
            (obj.sparkJob = message.sparkJob
                ? job_1.SparkJob.toJSON(message.sparkJob)
                : undefined);
        message.pysparkJob !== undefined &&
            (obj.pysparkJob = message.pysparkJob
                ? job_1.PysparkJob.toJSON(message.pysparkJob)
                : undefined);
        message.hiveJob !== undefined &&
            (obj.hiveJob = message.hiveJob
                ? job_1.HiveJob.toJSON(message.hiveJob)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateJobRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.mapreduceJob =
            object.mapreduceJob !== undefined && object.mapreduceJob !== null
                ? job_1.MapreduceJob.fromPartial(object.mapreduceJob)
                : undefined;
        message.sparkJob =
            object.sparkJob !== undefined && object.sparkJob !== null
                ? job_1.SparkJob.fromPartial(object.sparkJob)
                : undefined;
        message.pysparkJob =
            object.pysparkJob !== undefined && object.pysparkJob !== null
                ? job_1.PysparkJob.fromPartial(object.pysparkJob)
                : undefined;
        message.hiveJob =
            object.hiveJob !== undefined && object.hiveJob !== null
                ? job_1.HiveJob.fromPartial(object.hiveJob)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateJobRequest.$type, exports.CreateJobRequest);
const baseCreateJobMetadata = {
    $type: "yandex.cloud.dataproc.v1.CreateJobMetadata",
    clusterId: "",
    jobId: "",
};
exports.CreateJobMetadata = {
    $type: "yandex.cloud.dataproc.v1.CreateJobMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== "") {
            writer.uint32(18).string(message.jobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateJobMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseCreateJobMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateJobMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateJobMetadata.$type, exports.CreateJobMetadata);
const baseCancelJobRequest = {
    $type: "yandex.cloud.dataproc.v1.CancelJobRequest",
    clusterId: "",
    jobId: "",
};
exports.CancelJobRequest = {
    $type: "yandex.cloud.dataproc.v1.CancelJobRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== "") {
            writer.uint32(18).string(message.jobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCancelJobRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
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
        const message = Object.assign({}, baseCancelJobRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCancelJobRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CancelJobRequest.$type, exports.CancelJobRequest);
const baseListJobLogRequest = {
    $type: "yandex.cloud.dataproc.v1.ListJobLogRequest",
    clusterId: "",
    jobId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListJobLogRequest = {
    $type: "yandex.cloud.dataproc.v1.ListJobLogRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== "") {
            writer.uint32(18).string(message.jobId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListJobLogRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.jobId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
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
        const message = Object.assign({}, baseListJobLogRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListJobLogRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListJobLogRequest.$type, exports.ListJobLogRequest);
const baseListJobLogResponse = {
    $type: "yandex.cloud.dataproc.v1.ListJobLogResponse",
    content: "",
    nextPageToken: "",
};
exports.ListJobLogResponse = {
    $type: "yandex.cloud.dataproc.v1.ListJobLogResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== "") {
            writer.uint32(10).string(message.content);
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListJobLogResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
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
        const message = Object.assign({}, baseListJobLogResponse);
        message.content =
            object.content !== undefined && object.content !== null
                ? String(object.content)
                : "";
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content);
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListJobLogResponse);
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : "";
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListJobLogResponse.$type, exports.ListJobLogResponse);
/** A set of methods for managing Data Proc jobs. */
exports.JobServiceService = {
    /** Retrieves a list of jobs for a cluster. */
    list: {
        path: "/yandex.cloud.dataproc.v1.JobService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListJobsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListJobsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListJobsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListJobsResponse.decode(value),
    },
    /** Creates a job for a cluster. */
    create: {
        path: "/yandex.cloud.dataproc.v1.JobService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateJobRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateJobRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified job. */
    get: {
        path: "/yandex.cloud.dataproc.v1.JobService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetJobRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetJobRequest.decode(value),
        responseSerialize: (value) => Buffer.from(job_1.Job.encode(value).finish()),
        responseDeserialize: (value) => job_1.Job.decode(value),
    },
    /** Returns a log for specified job. */
    listLog: {
        path: "/yandex.cloud.dataproc.v1.JobService/ListLog",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListJobLogRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListJobLogRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListJobLogResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListJobLogResponse.decode(value),
    },
    /** Cancels the specified Dataproc job. */
    cancel: {
        path: "/yandex.cloud.dataproc.v1.JobService/Cancel",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelJobRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelJobRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.JobServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.JobServiceService, "yandex.cloud.dataproc.v1.JobService");
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
