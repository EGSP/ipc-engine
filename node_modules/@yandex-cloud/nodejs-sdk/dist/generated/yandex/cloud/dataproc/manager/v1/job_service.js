"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServiceClient = exports.JobServiceService = exports.UpdateJobStatusResponse = exports.UpdateJobStatusRequest = exports.ListJobsResponse = exports.ListJobsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const job_1 = require("../../../../../yandex/cloud/dataproc/manager/v1/job");
exports.protobufPackage = "yandex.cloud.dataproc.manager.v1";
const baseListJobsRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
};
exports.ListJobsRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest",
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
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse",
    nextPageToken: "",
};
exports.ListJobsResponse = {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse",
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
const baseUpdateJobStatusRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest",
    clusterId: "",
    jobId: "",
    status: 0,
};
exports.UpdateJobStatusRequest = {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.jobId !== "") {
            writer.uint32(18).string(message.jobId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.applicationInfo !== undefined) {
            job_1.ApplicationInfo.encode(message.applicationInfo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateJobStatusRequest);
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
                    message.status = reader.int32();
                    break;
                case 4:
                    message.applicationInfo = job_1.ApplicationInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateJobStatusRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.jobId =
            object.jobId !== undefined && object.jobId !== null
                ? String(object.jobId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? (0, job_1.job_StatusFromJSON)(object.status)
                : 0;
        message.applicationInfo =
            object.applicationInfo !== undefined && object.applicationInfo !== null
                ? job_1.ApplicationInfo.fromJSON(object.applicationInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.jobId !== undefined && (obj.jobId = message.jobId);
        message.status !== undefined &&
            (obj.status = (0, job_1.job_StatusToJSON)(message.status));
        message.applicationInfo !== undefined &&
            (obj.applicationInfo = message.applicationInfo
                ? job_1.ApplicationInfo.toJSON(message.applicationInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateJobStatusRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.jobId = (_b = object.jobId) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.applicationInfo =
            object.applicationInfo !== undefined && object.applicationInfo !== null
                ? job_1.ApplicationInfo.fromPartial(object.applicationInfo)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateJobStatusRequest.$type, exports.UpdateJobStatusRequest);
const baseUpdateJobStatusResponse = {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse",
};
exports.UpdateJobStatusResponse = {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateJobStatusResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseUpdateJobStatusResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseUpdateJobStatusResponse);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateJobStatusResponse.$type, exports.UpdateJobStatusResponse);
exports.JobServiceService = {
    /** Retrieves a list of jobs for Data Proc cluster. */
    listActive: {
        path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListJobsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListJobsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListJobsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListJobsResponse.decode(value),
    },
    /** Currently used to update Job status. */
    updateStatus: {
        path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateJobStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateJobStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateJobStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateJobStatusResponse.decode(value),
    },
};
exports.JobServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.JobServiceService, "yandex.cloud.dataproc.manager.v1.JobService");
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
