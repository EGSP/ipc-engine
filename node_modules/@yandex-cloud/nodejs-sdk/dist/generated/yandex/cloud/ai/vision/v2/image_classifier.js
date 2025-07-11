"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationRequest = exports.AnnotationResponse = exports.ClassifierSpecification = exports.ClassAnnotation = exports.Label = exports.classifierSpecification_ClassificationTypeToJSON = exports.classifierSpecification_ClassificationTypeFromJSON = exports.ClassifierSpecification_ClassificationType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const image_1 = require("../../../../../yandex/cloud/ai/vision/v2/image");
exports.protobufPackage = "yandex.cloud.ai.vision.v2";
var ClassifierSpecification_ClassificationType;
(function (ClassifierSpecification_ClassificationType) {
    ClassifierSpecification_ClassificationType[ClassifierSpecification_ClassificationType["CLASSIFICATION_TYPE_UNSPECIFIED"] = 0] = "CLASSIFICATION_TYPE_UNSPECIFIED";
    ClassifierSpecification_ClassificationType[ClassifierSpecification_ClassificationType["MULTI_LABEL"] = 1] = "MULTI_LABEL";
    ClassifierSpecification_ClassificationType[ClassifierSpecification_ClassificationType["MULTI_CLASS"] = 2] = "MULTI_CLASS";
    ClassifierSpecification_ClassificationType[ClassifierSpecification_ClassificationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClassifierSpecification_ClassificationType = exports.ClassifierSpecification_ClassificationType || (exports.ClassifierSpecification_ClassificationType = {}));
function classifierSpecification_ClassificationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CLASSIFICATION_TYPE_UNSPECIFIED":
            return ClassifierSpecification_ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED;
        case 1:
        case "MULTI_LABEL":
            return ClassifierSpecification_ClassificationType.MULTI_LABEL;
        case 2:
        case "MULTI_CLASS":
            return ClassifierSpecification_ClassificationType.MULTI_CLASS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClassifierSpecification_ClassificationType.UNRECOGNIZED;
    }
}
exports.classifierSpecification_ClassificationTypeFromJSON = classifierSpecification_ClassificationTypeFromJSON;
function classifierSpecification_ClassificationTypeToJSON(object) {
    switch (object) {
        case ClassifierSpecification_ClassificationType.CLASSIFICATION_TYPE_UNSPECIFIED:
            return "CLASSIFICATION_TYPE_UNSPECIFIED";
        case ClassifierSpecification_ClassificationType.MULTI_LABEL:
            return "MULTI_LABEL";
        case ClassifierSpecification_ClassificationType.MULTI_CLASS:
            return "MULTI_CLASS";
        default:
            return "UNKNOWN";
    }
}
exports.classifierSpecification_ClassificationTypeToJSON = classifierSpecification_ClassificationTypeToJSON;
const baseLabel = {
    $type: "yandex.cloud.ai.vision.v2.Label",
    name: "",
    description: "",
};
exports.Label = {
    $type: "yandex.cloud.ai.vision.v2.Label",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLabel);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseLabel);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLabel);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Label.$type, exports.Label);
const baseClassAnnotation = {
    $type: "yandex.cloud.ai.vision.v2.ClassAnnotation",
    confidence: 0,
};
exports.ClassAnnotation = {
    $type: "yandex.cloud.ai.vision.v2.ClassAnnotation",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.label !== undefined) {
            exports.Label.encode(message.label, writer.uint32(10).fork()).ldelim();
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClassAnnotation);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = exports.Label.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClassAnnotation);
        message.label =
            object.label !== undefined && object.label !== null
                ? exports.Label.fromJSON(object.label)
                : undefined;
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.label !== undefined &&
            (obj.label = message.label ? exports.Label.toJSON(message.label) : undefined);
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClassAnnotation);
        message.label =
            object.label !== undefined && object.label !== null
                ? exports.Label.fromPartial(object.label)
                : undefined;
        message.confidence = (_a = object.confidence) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClassAnnotation.$type, exports.ClassAnnotation);
const baseClassifierSpecification = {
    $type: "yandex.cloud.ai.vision.v2.ClassifierSpecification",
    classificationType: 0,
};
exports.ClassifierSpecification = {
    $type: "yandex.cloud.ai.vision.v2.ClassifierSpecification",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.labels) {
            exports.Label.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.classificationType !== 0) {
            writer.uint32(16).int32(message.classificationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClassifierSpecification);
        message.labels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.labels.push(exports.Label.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.classificationType = reader.int32();
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
        const message = Object.assign({}, baseClassifierSpecification);
        message.labels = ((_a = object.labels) !== null && _a !== void 0 ? _a : []).map((e) => exports.Label.fromJSON(e));
        message.classificationType =
            object.classificationType !== undefined &&
                object.classificationType !== null
                ? classifierSpecification_ClassificationTypeFromJSON(object.classificationType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.labels) {
            obj.labels = message.labels.map((e) => (e ? exports.Label.toJSON(e) : undefined));
        }
        else {
            obj.labels = [];
        }
        message.classificationType !== undefined &&
            (obj.classificationType =
                classifierSpecification_ClassificationTypeToJSON(message.classificationType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClassifierSpecification);
        message.labels = ((_a = object.labels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Label.fromPartial(e))) || [];
        message.classificationType = (_b = object.classificationType) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClassifierSpecification.$type, exports.ClassifierSpecification);
const baseAnnotationResponse = {
    $type: "yandex.cloud.ai.vision.v2.AnnotationResponse",
    requestId: "",
};
exports.AnnotationResponse = {
    $type: "yandex.cloud.ai.vision.v2.AnnotationResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.requestId !== "") {
            writer.uint32(10).string(message.requestId);
        }
        if (message.classifierSpecification !== undefined) {
            exports.ClassifierSpecification.encode(message.classifierSpecification, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.annotations) {
            exports.ClassAnnotation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnnotationResponse);
        message.annotations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.classifierSpecification = exports.ClassifierSpecification.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.annotations.push(exports.ClassAnnotation.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseAnnotationResponse);
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? String(object.requestId)
                : "";
        message.classifierSpecification =
            object.classifierSpecification !== undefined &&
                object.classifierSpecification !== null
                ? exports.ClassifierSpecification.fromJSON(object.classifierSpecification)
                : undefined;
        message.annotations = ((_a = object.annotations) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClassAnnotation.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.classifierSpecification !== undefined &&
            (obj.classifierSpecification = message.classifierSpecification
                ? exports.ClassifierSpecification.toJSON(message.classifierSpecification)
                : undefined);
        if (message.annotations) {
            obj.annotations = message.annotations.map((e) => e ? exports.ClassAnnotation.toJSON(e) : undefined);
        }
        else {
            obj.annotations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAnnotationResponse);
        message.requestId = (_a = object.requestId) !== null && _a !== void 0 ? _a : "";
        message.classifierSpecification =
            object.classifierSpecification !== undefined &&
                object.classifierSpecification !== null
                ? exports.ClassifierSpecification.fromPartial(object.classifierSpecification)
                : undefined;
        message.annotations =
            ((_b = object.annotations) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ClassAnnotation.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AnnotationResponse.$type, exports.AnnotationResponse);
const baseAnnotationRequest = {
    $type: "yandex.cloud.ai.vision.v2.AnnotationRequest",
};
exports.AnnotationRequest = {
    $type: "yandex.cloud.ai.vision.v2.AnnotationRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.image !== undefined) {
            image_1.Image.encode(message.image, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAnnotationRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.image = image_1.Image.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAnnotationRequest);
        message.image =
            object.image !== undefined && object.image !== null
                ? image_1.Image.fromJSON(object.image)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.image !== undefined &&
            (obj.image = message.image ? image_1.Image.toJSON(message.image) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAnnotationRequest);
        message.image =
            object.image !== undefined && object.image !== null
                ? image_1.Image.fromPartial(object.image)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AnnotationRequest.$type, exports.AnnotationRequest);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
