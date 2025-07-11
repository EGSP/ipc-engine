"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageClassifierServiceClient = exports.ImageClassifierServiceService = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const image_classifier_1 = require("../../../../../yandex/cloud/ai/vision/v2/image_classifier");
exports.protobufPackage = "yandex.cloud.ai.vision.v2";
exports.ImageClassifierServiceService = {
    annotate: {
        path: "/yandex.cloud.ai.vision.v2.ImageClassifierService/Annotate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(image_classifier_1.AnnotationRequest.encode(value).finish()),
        requestDeserialize: (value) => image_classifier_1.AnnotationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_classifier_1.AnnotationResponse.encode(value).finish()),
        responseDeserialize: (value) => image_classifier_1.AnnotationResponse.decode(value),
    },
};
exports.ImageClassifierServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageClassifierServiceService, "yandex.cloud.ai.vision.v2.ImageClassifierService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
