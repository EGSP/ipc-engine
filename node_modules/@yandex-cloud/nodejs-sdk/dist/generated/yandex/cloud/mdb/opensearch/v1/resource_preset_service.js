"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePresetServiceClient = exports.ResourcePresetServiceService = exports.ListResourcePresetsResponse = exports.ListResourcePresetsRequest = exports.GetResourcePresetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_preset_1 = require("../../../../../yandex/cloud/mdb/opensearch/v1/resource_preset");
exports.protobufPackage = "yandex.cloud.mdb.opensearch.v1";
const baseGetResourcePresetRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetResourcePresetRequest",
    resourcePresetId: "",
};
exports.GetResourcePresetRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.GetResourcePresetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourcePresetId !== "") {
            writer.uint32(10).string(message.resourcePresetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetResourcePresetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetResourcePresetRequest);
        message.resourcePresetId =
            object.resourcePresetId !== undefined && object.resourcePresetId !== null
                ? String(object.resourcePresetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetResourcePresetRequest);
        message.resourcePresetId = (_a = object.resourcePresetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetResourcePresetRequest.$type, exports.GetResourcePresetRequest);
const baseListResourcePresetsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListResourcePresetsRequest",
    pageSize: 0,
    pageToken: "",
};
exports.ListResourcePresetsRequest = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListResourcePresetsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcePresetsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
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
        const message = Object.assign({}, baseListResourcePresetsRequest);
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
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListResourcePresetsRequest);
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcePresetsRequest.$type, exports.ListResourcePresetsRequest);
const baseListResourcePresetsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListResourcePresetsResponse",
    nextPageToken: "",
};
exports.ListResourcePresetsResponse = {
    $type: "yandex.cloud.mdb.opensearch.v1.ListResourcePresetsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resourcePresets) {
            resource_preset_1.ResourcePreset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListResourcePresetsResponse);
        message.resourcePresets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresets.push(resource_preset_1.ResourcePreset.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListResourcePresetsResponse);
        message.resourcePresets = ((_a = object.resourcePresets) !== null && _a !== void 0 ? _a : []).map((e) => resource_preset_1.ResourcePreset.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resourcePresets) {
            obj.resourcePresets = message.resourcePresets.map((e) => e ? resource_preset_1.ResourcePreset.toJSON(e) : undefined);
        }
        else {
            obj.resourcePresets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListResourcePresetsResponse);
        message.resourcePresets =
            ((_a = object.resourcePresets) === null || _a === void 0 ? void 0 : _a.map((e) => resource_preset_1.ResourcePreset.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListResourcePresetsResponse.$type, exports.ListResourcePresetsResponse);
/** A set of methods for managing resource presets. */
exports.ResourcePresetServiceService = {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.mdb.opensearch.v1.ResourcePresetService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetResourcePresetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetResourcePresetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(resource_preset_1.ResourcePreset.encode(value).finish()),
        responseDeserialize: (value) => resource_preset_1.ResourcePreset.decode(value),
    },
    /** Retrieves the list of available resource presets. */
    list: {
        path: "/yandex.cloud.mdb.opensearch.v1.ResourcePresetService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcePresetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcePresetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcePresetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcePresetsResponse.decode(value),
    },
};
exports.ResourcePresetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ResourcePresetServiceService, "yandex.cloud.mdb.opensearch.v1.ResourcePresetService");
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
