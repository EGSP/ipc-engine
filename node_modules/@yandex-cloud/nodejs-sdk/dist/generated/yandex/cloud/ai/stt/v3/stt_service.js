"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncRecognizerClient = exports.AsyncRecognizerService = exports.RecognizerClient = exports.RecognizerService = exports.GetRecognitionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const stt_1 = require("../../../../../yandex/cloud/ai/stt/v3/stt");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "speechkit.stt.v3";
const baseGetRecognitionRequest = {
    $type: "speechkit.stt.v3.GetRecognitionRequest",
    operationId: "",
};
exports.GetRecognitionRequest = {
    $type: "speechkit.stt.v3.GetRecognitionRequest",
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
/** A set of methods for voice recognition. */
exports.RecognizerService = {
    /** Expects audio in real-time */
    recognizeStreaming: {
        path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(stt_1.StreamingRequest.encode(value).finish()),
        requestDeserialize: (value) => stt_1.StreamingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(stt_1.StreamingResponse.encode(value).finish()),
        responseDeserialize: (value) => stt_1.StreamingResponse.decode(value),
    },
};
exports.RecognizerClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RecognizerService, "speechkit.stt.v3.Recognizer");
/** A set of methods for async voice recognition. */
exports.AsyncRecognizerService = {
    recognizeFile: {
        path: "/speechkit.stt.v3.AsyncRecognizer/RecognizeFile",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(stt_1.RecognizeFileRequest.encode(value).finish()),
        requestDeserialize: (value) => stt_1.RecognizeFileRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    getRecognition: {
        path: "/speechkit.stt.v3.AsyncRecognizer/GetRecognition",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.GetRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(stt_1.StreamingResponse.encode(value).finish()),
        responseDeserialize: (value) => stt_1.StreamingResponse.decode(value),
    },
};
exports.AsyncRecognizerClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AsyncRecognizerService, "speechkit.stt.v3.AsyncRecognizer");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
