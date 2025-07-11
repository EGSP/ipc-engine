"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportServiceClient = exports.ExportServiceService = exports.RunExportMetadata = exports.RunExportDetails = exports.RunExportRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const export_1 = require("../../../../yandex/cloud/logging/v1/export");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseRunExportRequest = {
    $type: "yandex.cloud.logging.v1.RunExportRequest",
    groupId: "",
    sinkId: "",
    resultFilename: "",
};
exports.RunExportRequest = {
    $type: "yandex.cloud.logging.v1.RunExportRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        if (message.sinkId !== "") {
            writer.uint32(18).string(message.sinkId);
        }
        if (message.params !== undefined) {
            export_1.ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        if (message.resultFilename !== "") {
            writer.uint32(34).string(message.resultFilename);
        }
        if (message.since !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
        }
        if (message.until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRunExportRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.sinkId = reader.string();
                    break;
                case 3:
                    message.params = export_1.ExportParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resultFilename = reader.string();
                    break;
                case 5:
                    message.since = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRunExportRequest);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? export_1.ExportParams.fromJSON(object.params)
                : undefined;
        message.resultFilename =
            object.resultFilename !== undefined && object.resultFilename !== null
                ? String(object.resultFilename)
                : "";
        message.since =
            object.since !== undefined && object.since !== null
                ? fromJsonTimestamp(object.since)
                : undefined;
        message.until =
            object.until !== undefined && object.until !== null
                ? fromJsonTimestamp(object.until)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        message.params !== undefined &&
            (obj.params = message.params
                ? export_1.ExportParams.toJSON(message.params)
                : undefined);
        message.resultFilename !== undefined &&
            (obj.resultFilename = message.resultFilename);
        message.since !== undefined && (obj.since = message.since.toISOString());
        message.until !== undefined && (obj.until = message.until.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseRunExportRequest);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.sinkId = (_b = object.sinkId) !== null && _b !== void 0 ? _b : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? export_1.ExportParams.fromPartial(object.params)
                : undefined;
        message.resultFilename = (_c = object.resultFilename) !== null && _c !== void 0 ? _c : "";
        message.since = (_d = object.since) !== null && _d !== void 0 ? _d : undefined;
        message.until = (_e = object.until) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RunExportRequest.$type, exports.RunExportRequest);
const baseRunExportDetails = {
    $type: "yandex.cloud.logging.v1.RunExportDetails",
    groupId: "",
    sinkId: "",
    resultFilename: "",
};
exports.RunExportDetails = {
    $type: "yandex.cloud.logging.v1.RunExportDetails",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        if (message.sinkId !== "") {
            writer.uint32(18).string(message.sinkId);
        }
        if (message.params !== undefined) {
            export_1.ExportParams.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        if (message.resultFilename !== "") {
            writer.uint32(34).string(message.resultFilename);
        }
        if (message.since !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.since), writer.uint32(42).fork()).ldelim();
        }
        if (message.until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.until), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRunExportDetails);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.sinkId = reader.string();
                    break;
                case 3:
                    message.params = export_1.ExportParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resultFilename = reader.string();
                    break;
                case 5:
                    message.since = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRunExportDetails);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? export_1.ExportParams.fromJSON(object.params)
                : undefined;
        message.resultFilename =
            object.resultFilename !== undefined && object.resultFilename !== null
                ? String(object.resultFilename)
                : "";
        message.since =
            object.since !== undefined && object.since !== null
                ? fromJsonTimestamp(object.since)
                : undefined;
        message.until =
            object.until !== undefined && object.until !== null
                ? fromJsonTimestamp(object.until)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        message.params !== undefined &&
            (obj.params = message.params
                ? export_1.ExportParams.toJSON(message.params)
                : undefined);
        message.resultFilename !== undefined &&
            (obj.resultFilename = message.resultFilename);
        message.since !== undefined && (obj.since = message.since.toISOString());
        message.until !== undefined && (obj.until = message.until.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseRunExportDetails);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.sinkId = (_b = object.sinkId) !== null && _b !== void 0 ? _b : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? export_1.ExportParams.fromPartial(object.params)
                : undefined;
        message.resultFilename = (_c = object.resultFilename) !== null && _c !== void 0 ? _c : "";
        message.since = (_d = object.since) !== null && _d !== void 0 ? _d : undefined;
        message.until = (_e = object.until) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RunExportDetails.$type, exports.RunExportDetails);
const baseRunExportMetadata = {
    $type: "yandex.cloud.logging.v1.RunExportMetadata",
    groupId: "",
    sinkId: "",
    resultFilename: "",
};
exports.RunExportMetadata = {
    $type: "yandex.cloud.logging.v1.RunExportMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== "") {
            writer.uint32(10).string(message.groupId);
        }
        if (message.sinkId !== "") {
            writer.uint32(18).string(message.sinkId);
        }
        if (message.resultFilename !== "") {
            writer.uint32(26).string(message.resultFilename);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRunExportMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.string();
                    break;
                case 2:
                    message.sinkId = reader.string();
                    break;
                case 3:
                    message.resultFilename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRunExportMetadata);
        message.groupId =
            object.groupId !== undefined && object.groupId !== null
                ? String(object.groupId)
                : "";
        message.sinkId =
            object.sinkId !== undefined && object.sinkId !== null
                ? String(object.sinkId)
                : "";
        message.resultFilename =
            object.resultFilename !== undefined && object.resultFilename !== null
                ? String(object.resultFilename)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = message.groupId);
        message.sinkId !== undefined && (obj.sinkId = message.sinkId);
        message.resultFilename !== undefined &&
            (obj.resultFilename = message.resultFilename);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRunExportMetadata);
        message.groupId = (_a = object.groupId) !== null && _a !== void 0 ? _a : "";
        message.sinkId = (_b = object.sinkId) !== null && _b !== void 0 ? _b : "";
        message.resultFilename = (_c = object.resultFilename) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RunExportMetadata.$type, exports.RunExportMetadata);
exports.ExportServiceService = {
    run: {
        path: "/yandex.cloud.logging.v1.ExportService/Run",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RunExportRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RunExportRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ExportServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ExportServiceService, "yandex.cloud.logging.v1.ExportService");
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
