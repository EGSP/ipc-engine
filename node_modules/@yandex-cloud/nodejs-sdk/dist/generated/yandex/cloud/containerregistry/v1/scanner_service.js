"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannerServiceClient = exports.ScannerServiceService = exports.ListVulnerabilitiesResponse = exports.ListVulnerabilitiesRequest = exports.ListScanResultsResponse = exports.ListScanResultsRequest = exports.GetLastScanResultRequest = exports.GetScanResultRequest = exports.ScanMetadata = exports.ScanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const scanner_1 = require("../../../../yandex/cloud/containerregistry/v1/scanner");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.containerregistry.v1";
const baseScanRequest = {
    $type: "yandex.cloud.containerregistry.v1.ScanRequest",
    imageId: "",
};
exports.ScanRequest = {
    $type: "yandex.cloud.containerregistry.v1.ScanRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScanRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScanRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScanRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanRequest.$type, exports.ScanRequest);
const baseScanMetadata = {
    $type: "yandex.cloud.containerregistry.v1.ScanMetadata",
    scanResultId: "",
};
exports.ScanMetadata = {
    $type: "yandex.cloud.containerregistry.v1.ScanMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== "") {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseScanMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseScanMetadata);
        message.scanResultId =
            object.scanResultId !== undefined && object.scanResultId !== null
                ? String(object.scanResultId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseScanMetadata);
        message.scanResultId = (_a = object.scanResultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ScanMetadata.$type, exports.ScanMetadata);
const baseGetScanResultRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest",
    scanResultId: "",
};
exports.GetScanResultRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== "") {
            writer.uint32(10).string(message.scanResultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetScanResultRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetScanResultRequest);
        message.scanResultId =
            object.scanResultId !== undefined && object.scanResultId !== null
                ? String(object.scanResultId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetScanResultRequest);
        message.scanResultId = (_a = object.scanResultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetScanResultRequest.$type, exports.GetScanResultRequest);
const baseGetLastScanResultRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest",
    imageId: "",
};
exports.GetLastScanResultRequest = {
    $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== "") {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetLastScanResultRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetLastScanResultRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetLastScanResultRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetLastScanResultRequest.$type, exports.GetLastScanResultRequest);
const baseListScanResultsRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListScanResultsRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== undefined) {
            writer.uint32(10).string(message.imageId);
        }
        if (message.repositoryId !== undefined) {
            writer.uint32(18).string(message.repositoryId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== "") {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== "") {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListScanResultsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                case 2:
                    message.repositoryId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
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
        const message = Object.assign({}, baseListScanResultsRequest);
        message.imageId =
            object.imageId !== undefined && object.imageId !== null
                ? String(object.imageId)
                : undefined;
        message.repositoryId =
            object.repositoryId !== undefined && object.repositoryId !== null
                ? String(object.repositoryId)
                : undefined;
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
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseListScanResultsRequest);
        message.imageId = (_a = object.imageId) !== null && _a !== void 0 ? _a : undefined;
        message.repositoryId = (_b = object.repositoryId) !== null && _b !== void 0 ? _b : undefined;
        message.pageSize = (_c = object.pageSize) !== null && _c !== void 0 ? _c : 0;
        message.pageToken = (_d = object.pageToken) !== null && _d !== void 0 ? _d : "";
        message.filter = (_e = object.filter) !== null && _e !== void 0 ? _e : "";
        message.orderBy = (_f = object.orderBy) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListScanResultsRequest.$type, exports.ListScanResultsRequest);
const baseListScanResultsResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse",
    nextPageToken: "",
};
exports.ListScanResultsResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scanResults) {
            scanner_1.ScanResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListScanResultsResponse);
        message.scanResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResults.push(scanner_1.ScanResult.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListScanResultsResponse);
        message.scanResults = ((_a = object.scanResults) !== null && _a !== void 0 ? _a : []).map((e) => scanner_1.ScanResult.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.scanResults) {
            obj.scanResults = message.scanResults.map((e) => e ? scanner_1.ScanResult.toJSON(e) : undefined);
        }
        else {
            obj.scanResults = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListScanResultsResponse);
        message.scanResults =
            ((_a = object.scanResults) === null || _a === void 0 ? void 0 : _a.map((e) => scanner_1.ScanResult.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListScanResultsResponse.$type, exports.ListScanResultsResponse);
const baseListVulnerabilitiesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest",
    scanResultId: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: "",
};
exports.ListVulnerabilitiesRequest = {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.scanResultId !== "") {
            writer.uint32(10).string(message.scanResultId);
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
        const message = Object.assign({}, baseListVulnerabilitiesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scanResultId = reader.string();
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
        const message = Object.assign({}, baseListVulnerabilitiesRequest);
        message.scanResultId =
            object.scanResultId !== undefined && object.scanResultId !== null
                ? String(object.scanResultId)
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
        message.scanResultId !== undefined &&
            (obj.scanResultId = message.scanResultId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListVulnerabilitiesRequest);
        message.scanResultId = (_a = object.scanResultId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.filter = (_d = object.filter) !== null && _d !== void 0 ? _d : "";
        message.orderBy = (_e = object.orderBy) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVulnerabilitiesRequest.$type, exports.ListVulnerabilitiesRequest);
const baseListVulnerabilitiesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse",
    nextPageToken: "",
};
exports.ListVulnerabilitiesResponse = {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vulnerabilities) {
            scanner_1.Vulnerability.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVulnerabilitiesResponse);
        message.vulnerabilities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vulnerabilities.push(scanner_1.Vulnerability.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListVulnerabilitiesResponse);
        message.vulnerabilities = ((_a = object.vulnerabilities) !== null && _a !== void 0 ? _a : []).map((e) => scanner_1.Vulnerability.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.vulnerabilities) {
            obj.vulnerabilities = message.vulnerabilities.map((e) => e ? scanner_1.Vulnerability.toJSON(e) : undefined);
        }
        else {
            obj.vulnerabilities = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListVulnerabilitiesResponse);
        message.vulnerabilities =
            ((_a = object.vulnerabilities) === null || _a === void 0 ? void 0 : _a.map((e) => scanner_1.Vulnerability.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVulnerabilitiesResponse.$type, exports.ListVulnerabilitiesResponse);
/** A set of methods for scanning Docker images. */
exports.ScannerServiceService = {
    /** Executes scanning of specified image. */
    scan: {
        path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ScanRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ScanRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.containerregistry.v1.ScannerService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetScanResultRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetScanResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scanner_1.ScanResult.encode(value).finish()),
        responseDeserialize: (value) => scanner_1.ScanResult.decode(value),
    },
    /** Returns the last finished ScanResult for the specified Image. */
    getLast: {
        path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLastScanResultRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLastScanResultRequest.decode(value),
        responseSerialize: (value) => Buffer.from(scanner_1.ScanResult.encode(value).finish()),
        responseDeserialize: (value) => scanner_1.ScanResult.decode(value),
    },
    /** Retrieves the list of ScanResults for specified Image. */
    list: {
        path: "/yandex.cloud.containerregistry.v1.ScannerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListScanResultsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListScanResultsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListScanResultsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListScanResultsResponse.decode(value),
    },
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities: {
        path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVulnerabilitiesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVulnerabilitiesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVulnerabilitiesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVulnerabilitiesResponse.decode(value),
    },
};
exports.ScannerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ScannerServiceService, "yandex.cloud.containerregistry.v1.ScannerService");
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
