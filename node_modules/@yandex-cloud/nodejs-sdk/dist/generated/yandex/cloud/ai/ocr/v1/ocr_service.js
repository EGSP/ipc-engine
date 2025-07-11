"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextRecognitionAsyncServiceClient = exports.TextRecognitionAsyncServiceService = exports.TextRecognitionServiceClient = exports.TextRecognitionServiceService = exports.GetRecognitionRequest = exports.RecognizeTextResponse = exports.RecognizeTextRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const ocr_1 = require("../../../../../yandex/cloud/ai/ocr/v1/ocr");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.ai.ocr.v1";
const baseRecognizeTextRequest = {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest",
    mimeType: "",
    languageCodes: "",
    model: "",
};
exports.RecognizeTextRequest = {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.mimeType !== "") {
            writer.uint32(18).string(message.mimeType);
        }
        for (const v of message.languageCodes) {
            writer.uint32(26).string(v);
        }
        if (message.model !== "") {
            writer.uint32(34).string(message.model);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognizeTextRequest);
        message.languageCodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.mimeType = reader.string();
                    break;
                case 3:
                    message.languageCodes.push(reader.string());
                    break;
                case 4:
                    message.model = reader.string();
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
        const message = Object.assign({}, baseRecognizeTextRequest);
        message.content =
            object.content !== undefined && object.content !== null
                ? Buffer.from(bytesFromBase64(object.content))
                : undefined;
        message.mimeType =
            object.mimeType !== undefined && object.mimeType !== null
                ? String(object.mimeType)
                : "";
        message.languageCodes = ((_a = object.languageCodes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        if (message.languageCodes) {
            obj.languageCodes = message.languageCodes.map((e) => e);
        }
        else {
            obj.languageCodes = [];
        }
        message.model !== undefined && (obj.model = message.model);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseRecognizeTextRequest);
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : undefined;
        message.mimeType = (_b = object.mimeType) !== null && _b !== void 0 ? _b : "";
        message.languageCodes = ((_c = object.languageCodes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.model = (_d = object.model) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognizeTextRequest.$type, exports.RecognizeTextRequest);
const baseRecognizeTextResponse = {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse",
    page: 0,
};
exports.RecognizeTextResponse = {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.textAnnotation !== undefined) {
            ocr_1.TextAnnotation.encode(message.textAnnotation, writer.uint32(10).fork()).ldelim();
        }
        if (message.page !== 0) {
            writer.uint32(16).int64(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognizeTextResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textAnnotation = ocr_1.TextAnnotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.page = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRecognizeTextResponse);
        message.textAnnotation =
            object.textAnnotation !== undefined && object.textAnnotation !== null
                ? ocr_1.TextAnnotation.fromJSON(object.textAnnotation)
                : undefined;
        message.page =
            object.page !== undefined && object.page !== null
                ? Number(object.page)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textAnnotation !== undefined &&
            (obj.textAnnotation = message.textAnnotation
                ? ocr_1.TextAnnotation.toJSON(message.textAnnotation)
                : undefined);
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRecognizeTextResponse);
        message.textAnnotation =
            object.textAnnotation !== undefined && object.textAnnotation !== null
                ? ocr_1.TextAnnotation.fromPartial(object.textAnnotation)
                : undefined;
        message.page = (_a = object.page) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognizeTextResponse.$type, exports.RecognizeTextResponse);
const baseGetRecognitionRequest = {
    $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest",
    operationId: "",
};
exports.GetRecognitionRequest = {
    $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operationId !== "") {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetRecognitionRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetRecognitionRequest);
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetRecognitionRequest);
        message.operationId = (_a = object.operationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetRecognitionRequest.$type, exports.GetRecognitionRequest);
/** A set of methods for the Vision OCR service. */
exports.TextRecognitionServiceService = {
    /** To send the image for text recognition. */
    recognize: {
        path: "/yandex.cloud.ai.ocr.v1.TextRecognitionService/Recognize",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.RecognizeTextRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RecognizeTextRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RecognizeTextResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.RecognizeTextResponse.decode(value),
    },
};
exports.TextRecognitionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TextRecognitionServiceService, "yandex.cloud.ai.ocr.v1.TextRecognitionService");
/** A set of methods for managing operations for asynchronous API requests. */
exports.TextRecognitionAsyncServiceService = {
    /** To send the image for asynchronous text recognition. */
    recognize: {
        path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/Recognize",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RecognizeTextRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RecognizeTextRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** To get recognition results. */
    getRecognition: {
        path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/GetRecognition",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.GetRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RecognizeTextResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.RecognizeTextResponse.decode(value),
    },
};
exports.TextRecognitionAsyncServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TextRecognitionAsyncServiceService, "yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService");
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
