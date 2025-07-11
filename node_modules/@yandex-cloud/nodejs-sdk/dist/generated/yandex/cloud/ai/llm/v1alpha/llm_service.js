"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextGenerationAsyncServiceClient = exports.TextGenerationAsyncServiceService = exports.EmbeddingsServiceClient = exports.EmbeddingsServiceService = exports.TokenizerServiceClient = exports.TokenizerServiceService = exports.TextGenerationServiceClient = exports.TextGenerationServiceService = exports.EmbeddingResponse = exports.EmbeddingRequest = exports.TokenizeResponse = exports.TokenizeRequest = exports.ChatResponse = exports.ChatRequest = exports.InstructResponse = exports.InstructRequest = exports.embeddingRequest_EmbeddingTypeToJSON = exports.embeddingRequest_EmbeddingTypeFromJSON = exports.EmbeddingRequest_EmbeddingType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const llm_1 = require("../../../../../yandex/cloud/ai/llm/v1alpha/llm");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.ai.llm.v1alpha";
/** Enum to specify the type of embedding to be generated. */
var EmbeddingRequest_EmbeddingType;
(function (EmbeddingRequest_EmbeddingType) {
    /** EMBEDDING_TYPE_UNSPECIFIED - Unspecified embedding type. */
    EmbeddingRequest_EmbeddingType[EmbeddingRequest_EmbeddingType["EMBEDDING_TYPE_UNSPECIFIED"] = 0] = "EMBEDDING_TYPE_UNSPECIFIED";
    /**
     * EMBEDDING_TYPE_QUERY - Embedding for a query. Use this when you have a short query or search term
     * that you want to obtain an embedding for. Query embeddings are typically
     * used in information retrieval and search applications.
     */
    EmbeddingRequest_EmbeddingType[EmbeddingRequest_EmbeddingType["EMBEDDING_TYPE_QUERY"] = 1] = "EMBEDDING_TYPE_QUERY";
    /**
     * EMBEDDING_TYPE_DOCUMENT - Embedding for a document. Use this when you have a longer document or a piece
     * of text that you want to obtain an embedding for. Document embeddings are often
     * used in natural language understanding and document similarity tasks.
     */
    EmbeddingRequest_EmbeddingType[EmbeddingRequest_EmbeddingType["EMBEDDING_TYPE_DOCUMENT"] = 2] = "EMBEDDING_TYPE_DOCUMENT";
    EmbeddingRequest_EmbeddingType[EmbeddingRequest_EmbeddingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EmbeddingRequest_EmbeddingType = exports.EmbeddingRequest_EmbeddingType || (exports.EmbeddingRequest_EmbeddingType = {}));
function embeddingRequest_EmbeddingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "EMBEDDING_TYPE_UNSPECIFIED":
            return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_UNSPECIFIED;
        case 1:
        case "EMBEDDING_TYPE_QUERY":
            return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_QUERY;
        case 2:
        case "EMBEDDING_TYPE_DOCUMENT":
            return EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_DOCUMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EmbeddingRequest_EmbeddingType.UNRECOGNIZED;
    }
}
exports.embeddingRequest_EmbeddingTypeFromJSON = embeddingRequest_EmbeddingTypeFromJSON;
function embeddingRequest_EmbeddingTypeToJSON(object) {
    switch (object) {
        case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_UNSPECIFIED:
            return "EMBEDDING_TYPE_UNSPECIFIED";
        case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_QUERY:
            return "EMBEDDING_TYPE_QUERY";
        case EmbeddingRequest_EmbeddingType.EMBEDDING_TYPE_DOCUMENT:
            return "EMBEDDING_TYPE_DOCUMENT";
        default:
            return "UNKNOWN";
    }
}
exports.embeddingRequest_EmbeddingTypeToJSON = embeddingRequest_EmbeddingTypeToJSON;
const baseInstructRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest",
    model: "",
};
exports.InstructRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== "") {
            writer.uint32(10).string(message.model);
        }
        if (message.generationOptions !== undefined) {
            llm_1.GenerationOptions.encode(message.generationOptions, writer.uint32(18).fork()).ldelim();
        }
        if (message.instructionText !== undefined) {
            writer.uint32(26).string(message.instructionText);
        }
        if (message.instructionUri !== undefined) {
            writer.uint32(42).string(message.instructionUri);
        }
        if (message.requestText !== undefined) {
            writer.uint32(34).string(message.requestText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstructRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.generationOptions = llm_1.GenerationOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.instructionText = reader.string();
                    break;
                case 5:
                    message.instructionUri = reader.string();
                    break;
                case 4:
                    message.requestText = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInstructRequest);
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.generationOptions =
            object.generationOptions !== undefined &&
                object.generationOptions !== null
                ? llm_1.GenerationOptions.fromJSON(object.generationOptions)
                : undefined;
        message.instructionText =
            object.instructionText !== undefined && object.instructionText !== null
                ? String(object.instructionText)
                : undefined;
        message.instructionUri =
            object.instructionUri !== undefined && object.instructionUri !== null
                ? String(object.instructionUri)
                : undefined;
        message.requestText =
            object.requestText !== undefined && object.requestText !== null
                ? String(object.requestText)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.generationOptions !== undefined &&
            (obj.generationOptions = message.generationOptions
                ? llm_1.GenerationOptions.toJSON(message.generationOptions)
                : undefined);
        message.instructionText !== undefined &&
            (obj.instructionText = message.instructionText);
        message.instructionUri !== undefined &&
            (obj.instructionUri = message.instructionUri);
        message.requestText !== undefined &&
            (obj.requestText = message.requestText);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseInstructRequest);
        message.model = (_a = object.model) !== null && _a !== void 0 ? _a : "";
        message.generationOptions =
            object.generationOptions !== undefined &&
                object.generationOptions !== null
                ? llm_1.GenerationOptions.fromPartial(object.generationOptions)
                : undefined;
        message.instructionText = (_b = object.instructionText) !== null && _b !== void 0 ? _b : undefined;
        message.instructionUri = (_c = object.instructionUri) !== null && _c !== void 0 ? _c : undefined;
        message.requestText = (_d = object.requestText) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstructRequest.$type, exports.InstructRequest);
const baseInstructResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse",
    numPromptTokens: 0,
};
exports.InstructResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            llm_1.Alternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.numPromptTokens !== 0) {
            writer.uint32(16).int64(message.numPromptTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInstructResponse);
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(llm_1.Alternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.numPromptTokens = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseInstructResponse);
        message.alternatives = ((_a = object.alternatives) !== null && _a !== void 0 ? _a : []).map((e) => llm_1.Alternative.fromJSON(e));
        message.numPromptTokens =
            object.numPromptTokens !== undefined && object.numPromptTokens !== null
                ? Number(object.numPromptTokens)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? llm_1.Alternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.numPromptTokens !== undefined &&
            (obj.numPromptTokens = Math.round(message.numPromptTokens));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseInstructResponse);
        message.alternatives =
            ((_a = object.alternatives) === null || _a === void 0 ? void 0 : _a.map((e) => llm_1.Alternative.fromPartial(e))) || [];
        message.numPromptTokens = (_b = object.numPromptTokens) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InstructResponse.$type, exports.InstructResponse);
const baseChatRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest",
    model: "",
};
exports.ChatRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== "") {
            writer.uint32(10).string(message.model);
        }
        if (message.generationOptions !== undefined) {
            llm_1.GenerationOptions.encode(message.generationOptions, writer.uint32(18).fork()).ldelim();
        }
        if (message.instructionText !== undefined) {
            writer.uint32(26).string(message.instructionText);
        }
        for (const v of message.messages) {
            llm_1.Message.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChatRequest);
        message.messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.generationOptions = llm_1.GenerationOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.instructionText = reader.string();
                    break;
                case 4:
                    message.messages.push(llm_1.Message.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseChatRequest);
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.generationOptions =
            object.generationOptions !== undefined &&
                object.generationOptions !== null
                ? llm_1.GenerationOptions.fromJSON(object.generationOptions)
                : undefined;
        message.instructionText =
            object.instructionText !== undefined && object.instructionText !== null
                ? String(object.instructionText)
                : undefined;
        message.messages = ((_a = object.messages) !== null && _a !== void 0 ? _a : []).map((e) => llm_1.Message.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.generationOptions !== undefined &&
            (obj.generationOptions = message.generationOptions
                ? llm_1.GenerationOptions.toJSON(message.generationOptions)
                : undefined);
        message.instructionText !== undefined &&
            (obj.instructionText = message.instructionText);
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? llm_1.Message.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseChatRequest);
        message.model = (_a = object.model) !== null && _a !== void 0 ? _a : "";
        message.generationOptions =
            object.generationOptions !== undefined &&
                object.generationOptions !== null
                ? llm_1.GenerationOptions.fromPartial(object.generationOptions)
                : undefined;
        message.instructionText = (_b = object.instructionText) !== null && _b !== void 0 ? _b : undefined;
        message.messages =
            ((_c = object.messages) === null || _c === void 0 ? void 0 : _c.map((e) => llm_1.Message.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChatRequest.$type, exports.ChatRequest);
const baseChatResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse",
    numTokens: 0,
};
exports.ChatResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== undefined) {
            llm_1.Message.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        if (message.numTokens !== 0) {
            writer.uint32(16).int64(message.numTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChatResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = llm_1.Message.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.numTokens = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChatResponse);
        message.message =
            object.message !== undefined && object.message !== null
                ? llm_1.Message.fromJSON(object.message)
                : undefined;
        message.numTokens =
            object.numTokens !== undefined && object.numTokens !== null
                ? Number(object.numTokens)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? llm_1.Message.toJSON(message.message)
                : undefined);
        message.numTokens !== undefined &&
            (obj.numTokens = Math.round(message.numTokens));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseChatResponse);
        message.message =
            object.message !== undefined && object.message !== null
                ? llm_1.Message.fromPartial(object.message)
                : undefined;
        message.numTokens = (_a = object.numTokens) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChatResponse.$type, exports.ChatResponse);
const baseTokenizeRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest",
    model: "",
    text: "",
};
exports.TokenizeRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== "") {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTokenizeRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTokenizeRequest);
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseTokenizeRequest);
        message.model = (_a = object.model) !== null && _a !== void 0 ? _a : "";
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TokenizeRequest.$type, exports.TokenizeRequest);
const baseTokenizeResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse",
};
exports.TokenizeResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tokens) {
            llm_1.Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTokenizeResponse);
        message.tokens = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(llm_1.Token.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseTokenizeResponse);
        message.tokens = ((_a = object.tokens) !== null && _a !== void 0 ? _a : []).map((e) => llm_1.Token.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? llm_1.Token.toJSON(e) : undefined));
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTokenizeResponse);
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => llm_1.Token.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TokenizeResponse.$type, exports.TokenizeResponse);
const baseEmbeddingRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest",
    embeddingType: 0,
    model: "",
    text: "",
};
exports.EmbeddingRequest = {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.embeddingType !== 0) {
            writer.uint32(8).int32(message.embeddingType);
        }
        if (message.model !== "") {
            writer.uint32(18).string(message.model);
        }
        if (message.text !== "") {
            writer.uint32(26).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEmbeddingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.embeddingType = reader.int32();
                    break;
                case 2:
                    message.model = reader.string();
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEmbeddingRequest);
        message.embeddingType =
            object.embeddingType !== undefined && object.embeddingType !== null
                ? embeddingRequest_EmbeddingTypeFromJSON(object.embeddingType)
                : 0;
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.embeddingType !== undefined &&
            (obj.embeddingType = embeddingRequest_EmbeddingTypeToJSON(message.embeddingType));
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseEmbeddingRequest);
        message.embeddingType = (_a = object.embeddingType) !== null && _a !== void 0 ? _a : 0;
        message.model = (_b = object.model) !== null && _b !== void 0 ? _b : "";
        message.text = (_c = object.text) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EmbeddingRequest.$type, exports.EmbeddingRequest);
const baseEmbeddingResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse",
    embedding: 0,
    numTokens: 0,
};
exports.EmbeddingResponse = {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.embedding) {
            writer.double(v);
        }
        writer.ldelim();
        if (message.numTokens !== 0) {
            writer.uint32(16).int64(message.numTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEmbeddingResponse);
        message.embedding = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.embedding.push(reader.double());
                        }
                    }
                    else {
                        message.embedding.push(reader.double());
                    }
                    break;
                case 2:
                    message.numTokens = longToNumber(reader.int64());
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
        const message = Object.assign({}, baseEmbeddingResponse);
        message.embedding = ((_a = object.embedding) !== null && _a !== void 0 ? _a : []).map((e) => Number(e));
        message.numTokens =
            object.numTokens !== undefined && object.numTokens !== null
                ? Number(object.numTokens)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.embedding) {
            obj.embedding = message.embedding.map((e) => e);
        }
        else {
            obj.embedding = [];
        }
        message.numTokens !== undefined &&
            (obj.numTokens = Math.round(message.numTokens));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseEmbeddingResponse);
        message.embedding = ((_a = object.embedding) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.numTokens = (_b = object.numTokens) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EmbeddingResponse.$type, exports.EmbeddingResponse);
/** Service for text generation and conversation. */
exports.TextGenerationServiceService = {
    /** RPC method for instructing the model to generate text. */
    instruct: {
        path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Instruct",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.InstructRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.InstructRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.InstructResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.InstructResponse.decode(value),
    },
    /** RPC method for engaging in a chat conversation with the model. */
    chat: {
        path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Chat",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.ChatRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ChatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ChatResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ChatResponse.decode(value),
    },
};
exports.TextGenerationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TextGenerationServiceService, "yandex.cloud.ai.llm.v1alpha.TextGenerationService");
/** Service for tokenizing input text. */
exports.TokenizerServiceService = {
    /** RPC method for tokenizing input text. */
    tokenize: {
        path: "/yandex.cloud.ai.llm.v1alpha.TokenizerService/Tokenize",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.TokenizeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.TokenizeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.TokenizeResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.TokenizeResponse.decode(value),
    },
};
exports.TokenizerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TokenizerServiceService, "yandex.cloud.ai.llm.v1alpha.TokenizerService");
/** Service for obtaining embeddings for text data. */
exports.EmbeddingsServiceService = {
    /** RPC method to obtain embeddings for input text data. */
    embedding: {
        path: "/yandex.cloud.ai.llm.v1alpha.EmbeddingsService/Embedding",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.EmbeddingRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.EmbeddingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.EmbeddingResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.EmbeddingResponse.decode(value),
    },
};
exports.EmbeddingsServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EmbeddingsServiceService, "yandex.cloud.ai.llm.v1alpha.EmbeddingsService");
/** Service for asynchronous text generation. */
exports.TextGenerationAsyncServiceService = {
    /** RPC method for instructing the model to generate text. */
    instruct: {
        path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService/Instruct",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.InstructRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.InstructRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.TextGenerationAsyncServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TextGenerationAsyncServiceService, "yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService");
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
