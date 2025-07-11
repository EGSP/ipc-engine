/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleServerStreamingCall, Client, CallOptions, ClientReadableStream, Metadata, handleUnaryCall, ClientUnaryCall, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { GenerationOptions, Message, Alternative, Token } from "../../../../../yandex/cloud/ai/llm/v1alpha/llm";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.ai.llm.v1alpha";
/** Request for instructing the model to generate text. */
export interface InstructRequest {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest";
    /**
     * The name or identifier of the model to be used for text generation.
     * Possible value for now: `general`.
     */
    model: string;
    /** Configuration options for text generation. */
    generationOptions?: GenerationOptions;
    /** The text-based instruction for text generation. */
    instructionText: string | undefined;
    /** A URI containing instructions for text generation. */
    instructionUri: string | undefined;
    /** The text-based request for text generation. */
    requestText: string | undefined;
}
/** Response containing generated text alternatives and token count. */
export interface InstructResponse {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse";
    /** A list of alternative text responses. */
    alternatives: Alternative[];
    /** The number of tokens used in the prompt, including both the [instruction_text] and [request_text]. */
    numPromptTokens: number;
}
/** Request to engage in a chat conversation with a text generation model. */
export interface ChatRequest {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest";
    /**
     * The name or identifier of the model to be used for the chat.
     * Possible value for now: `general`.
     */
    model: string;
    /** Configuration options for text generation. */
    generationOptions?: GenerationOptions;
    /** The text-based instruction for the conversation. */
    instructionText: string | undefined;
    /** A list of messages in the conversation. */
    messages: Message[];
}
/** Contains a model-generated response for a chat query. */
export interface ChatResponse {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse";
    /** The assistant's message in the chat conversation. */
    message?: Message;
    /** Total number of tokens used in both the chat request and chat response. */
    numTokens: number;
}
/** Request to tokenize input text. */
export interface TokenizeRequest {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest";
    /**
     * The name or identifier of the model to be used for tokenization.
     * Possible values for now: `general`, `general:embedding`.
     */
    model: string;
    /** The input text to tokenize. */
    text: string;
}
/** Tokenization response. */
export interface TokenizeResponse {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse";
    /** A list of tokens obtained from tokenization. */
    tokens: Token[];
}
/** Represents a request to obtain embeddings for text data. */
export interface EmbeddingRequest {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest";
    /** The type of embedding to be generated. */
    embeddingType: EmbeddingRequest_EmbeddingType;
    /** The name or identifier of the model to be used for embedding. Possible value for now: `general:embedding`. */
    model: string;
    /** The input text for which the embedding is requested. */
    text: string;
}
/** Enum to specify the type of embedding to be generated. */
export declare enum EmbeddingRequest_EmbeddingType {
    /** EMBEDDING_TYPE_UNSPECIFIED - Unspecified embedding type. */
    EMBEDDING_TYPE_UNSPECIFIED = 0,
    /**
     * EMBEDDING_TYPE_QUERY - Embedding for a query. Use this when you have a short query or search term
     * that you want to obtain an embedding for. Query embeddings are typically
     * used in information retrieval and search applications.
     */
    EMBEDDING_TYPE_QUERY = 1,
    /**
     * EMBEDDING_TYPE_DOCUMENT - Embedding for a document. Use this when you have a longer document or a piece
     * of text that you want to obtain an embedding for. Document embeddings are often
     * used in natural language understanding and document similarity tasks.
     */
    EMBEDDING_TYPE_DOCUMENT = 2,
    UNRECOGNIZED = -1
}
export declare function embeddingRequest_EmbeddingTypeFromJSON(object: any): EmbeddingRequest_EmbeddingType;
export declare function embeddingRequest_EmbeddingTypeToJSON(object: EmbeddingRequest_EmbeddingType): string;
/** Represents a response containing embeddings for input text data. */
export interface EmbeddingResponse {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse";
    /** A repeated list of double values representing the embedding. */
    embedding: number[];
    /** The number of tokens in the input text. */
    numTokens: number;
}
export declare const InstructRequest: {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructRequest";
    encode(message: InstructRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstructRequest;
    fromJSON(object: any): InstructRequest;
    toJSON(message: InstructRequest): unknown;
    fromPartial<I extends {
        model?: string | undefined;
        generationOptions?: {
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } | undefined;
        instructionText?: string | undefined;
        instructionUri?: string | undefined;
        requestText?: string | undefined;
    } & {
        model?: string | undefined;
        generationOptions?: ({
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } & {
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } & Record<Exclude<keyof I["generationOptions"], "$type" | "partialResults" | "temperature" | "maxTokens">, never>) | undefined;
        instructionText?: string | undefined;
        instructionUri?: string | undefined;
        requestText?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "model" | "generationOptions" | "instructionText" | "instructionUri" | "requestText">, never>>(object: I): InstructRequest;
};
export declare const InstructResponse: {
    $type: "yandex.cloud.ai.llm.v1alpha.InstructResponse";
    encode(message: InstructResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstructResponse;
    fromJSON(object: any): InstructResponse;
    toJSON(message: InstructResponse): unknown;
    fromPartial<I extends {
        alternatives?: {
            text?: string | undefined;
            score?: number | undefined;
            numTokens?: number | undefined;
        }[] | undefined;
        numPromptTokens?: number | undefined;
    } & {
        alternatives?: ({
            text?: string | undefined;
            score?: number | undefined;
            numTokens?: number | undefined;
        }[] & ({
            text?: string | undefined;
            score?: number | undefined;
            numTokens?: number | undefined;
        } & {
            text?: string | undefined;
            score?: number | undefined;
            numTokens?: number | undefined;
        } & Record<Exclude<keyof I["alternatives"][number], "$type" | "text" | "score" | "numTokens">, never>)[] & Record<Exclude<keyof I["alternatives"], "$type" | keyof {
            text?: string | undefined;
            score?: number | undefined;
            numTokens?: number | undefined;
        }[]>, never>) | undefined;
        numPromptTokens?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "alternatives" | "numPromptTokens">, never>>(object: I): InstructResponse;
};
export declare const ChatRequest: {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatRequest";
    encode(message: ChatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChatRequest;
    fromJSON(object: any): ChatRequest;
    toJSON(message: ChatRequest): unknown;
    fromPartial<I extends {
        model?: string | undefined;
        generationOptions?: {
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } | undefined;
        instructionText?: string | undefined;
        messages?: {
            text?: string | undefined;
            role?: string | undefined;
        }[] | undefined;
    } & {
        model?: string | undefined;
        generationOptions?: ({
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } & {
            partialResults?: boolean | undefined;
            temperature?: number | undefined;
            maxTokens?: number | undefined;
        } & Record<Exclude<keyof I["generationOptions"], "$type" | "partialResults" | "temperature" | "maxTokens">, never>) | undefined;
        instructionText?: string | undefined;
        messages?: ({
            text?: string | undefined;
            role?: string | undefined;
        }[] & ({
            text?: string | undefined;
            role?: string | undefined;
        } & {
            text?: string | undefined;
            role?: string | undefined;
        } & Record<Exclude<keyof I["messages"][number], "$type" | "text" | "role">, never>)[] & Record<Exclude<keyof I["messages"], "$type" | keyof {
            text?: string | undefined;
            role?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "model" | "generationOptions" | "instructionText" | "messages">, never>>(object: I): ChatRequest;
};
export declare const ChatResponse: {
    $type: "yandex.cloud.ai.llm.v1alpha.ChatResponse";
    encode(message: ChatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChatResponse;
    fromJSON(object: any): ChatResponse;
    toJSON(message: ChatResponse): unknown;
    fromPartial<I extends {
        message?: {
            text?: string | undefined;
            role?: string | undefined;
        } | undefined;
        numTokens?: number | undefined;
    } & {
        message?: ({
            text?: string | undefined;
            role?: string | undefined;
        } & {
            text?: string | undefined;
            role?: string | undefined;
        } & Record<Exclude<keyof I["message"], "$type" | "text" | "role">, never>) | undefined;
        numTokens?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "numTokens">, never>>(object: I): ChatResponse;
};
export declare const TokenizeRequest: {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeRequest";
    encode(message: TokenizeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenizeRequest;
    fromJSON(object: any): TokenizeRequest;
    toJSON(message: TokenizeRequest): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        model?: string | undefined;
    } & {
        text?: string | undefined;
        model?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "model">, never>>(object: I): TokenizeRequest;
};
export declare const TokenizeResponse: {
    $type: "yandex.cloud.ai.llm.v1alpha.TokenizeResponse";
    encode(message: TokenizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenizeResponse;
    fromJSON(object: any): TokenizeResponse;
    toJSON(message: TokenizeResponse): unknown;
    fromPartial<I extends {
        tokens?: {
            id?: number | undefined;
            text?: string | undefined;
            special?: boolean | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            id?: number | undefined;
            text?: string | undefined;
            special?: boolean | undefined;
        }[] & ({
            id?: number | undefined;
            text?: string | undefined;
            special?: boolean | undefined;
        } & {
            id?: number | undefined;
            text?: string | undefined;
            special?: boolean | undefined;
        } & Record<Exclude<keyof I["tokens"][number], "$type" | "id" | "text" | "special">, never>)[] & Record<Exclude<keyof I["tokens"], "$type" | keyof {
            id?: number | undefined;
            text?: string | undefined;
            special?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "tokens">, never>>(object: I): TokenizeResponse;
};
export declare const EmbeddingRequest: {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingRequest";
    encode(message: EmbeddingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EmbeddingRequest;
    fromJSON(object: any): EmbeddingRequest;
    toJSON(message: EmbeddingRequest): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        model?: string | undefined;
        embeddingType?: EmbeddingRequest_EmbeddingType | undefined;
    } & {
        text?: string | undefined;
        model?: string | undefined;
        embeddingType?: EmbeddingRequest_EmbeddingType | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "model" | "embeddingType">, never>>(object: I): EmbeddingRequest;
};
export declare const EmbeddingResponse: {
    $type: "yandex.cloud.ai.llm.v1alpha.EmbeddingResponse";
    encode(message: EmbeddingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EmbeddingResponse;
    fromJSON(object: any): EmbeddingResponse;
    toJSON(message: EmbeddingResponse): unknown;
    fromPartial<I extends {
        numTokens?: number | undefined;
        embedding?: number[] | undefined;
    } & {
        numTokens?: number | undefined;
        embedding?: (number[] & number[] & Record<Exclude<keyof I["embedding"], "$type" | keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "numTokens" | "embedding">, never>>(object: I): EmbeddingResponse;
};
/** Service for text generation and conversation. */
export declare const TextGenerationServiceService: {
    /** RPC method for instructing the model to generate text. */
    readonly instruct: {
        readonly path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Instruct";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: InstructRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InstructRequest;
        readonly responseSerialize: (value: InstructResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InstructResponse;
    };
    /** RPC method for engaging in a chat conversation with the model. */
    readonly chat: {
        readonly path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationService/Chat";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ChatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ChatRequest;
        readonly responseSerialize: (value: ChatResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ChatResponse;
    };
};
export interface TextGenerationServiceServer extends UntypedServiceImplementation {
    /** RPC method for instructing the model to generate text. */
    instruct: handleServerStreamingCall<InstructRequest, InstructResponse>;
    /** RPC method for engaging in a chat conversation with the model. */
    chat: handleServerStreamingCall<ChatRequest, ChatResponse>;
}
export interface TextGenerationServiceClient extends Client {
    /** RPC method for instructing the model to generate text. */
    instruct(request: InstructRequest, options?: Partial<CallOptions>): ClientReadableStream<InstructResponse>;
    instruct(request: InstructRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<InstructResponse>;
    /** RPC method for engaging in a chat conversation with the model. */
    chat(request: ChatRequest, options?: Partial<CallOptions>): ClientReadableStream<ChatResponse>;
    chat(request: ChatRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<ChatResponse>;
}
export declare const TextGenerationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TextGenerationServiceClient;
    service: typeof TextGenerationServiceService;
};
/** Service for tokenizing input text. */
export declare const TokenizerServiceService: {
    /** RPC method for tokenizing input text. */
    readonly tokenize: {
        readonly path: "/yandex.cloud.ai.llm.v1alpha.TokenizerService/Tokenize";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TokenizeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TokenizeRequest;
        readonly responseSerialize: (value: TokenizeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TokenizeResponse;
    };
};
export interface TokenizerServiceServer extends UntypedServiceImplementation {
    /** RPC method for tokenizing input text. */
    tokenize: handleUnaryCall<TokenizeRequest, TokenizeResponse>;
}
export interface TokenizerServiceClient extends Client {
    /** RPC method for tokenizing input text. */
    tokenize(request: TokenizeRequest, callback: (error: ServiceError | null, response: TokenizeResponse) => void): ClientUnaryCall;
    tokenize(request: TokenizeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TokenizeResponse) => void): ClientUnaryCall;
    tokenize(request: TokenizeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TokenizeResponse) => void): ClientUnaryCall;
}
export declare const TokenizerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TokenizerServiceClient;
    service: typeof TokenizerServiceService;
};
/** Service for obtaining embeddings for text data. */
export declare const EmbeddingsServiceService: {
    /** RPC method to obtain embeddings for input text data. */
    readonly embedding: {
        readonly path: "/yandex.cloud.ai.llm.v1alpha.EmbeddingsService/Embedding";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EmbeddingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EmbeddingRequest;
        readonly responseSerialize: (value: EmbeddingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EmbeddingResponse;
    };
};
export interface EmbeddingsServiceServer extends UntypedServiceImplementation {
    /** RPC method to obtain embeddings for input text data. */
    embedding: handleUnaryCall<EmbeddingRequest, EmbeddingResponse>;
}
export interface EmbeddingsServiceClient extends Client {
    /** RPC method to obtain embeddings for input text data. */
    embedding(request: EmbeddingRequest, callback: (error: ServiceError | null, response: EmbeddingResponse) => void): ClientUnaryCall;
    embedding(request: EmbeddingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: EmbeddingResponse) => void): ClientUnaryCall;
    embedding(request: EmbeddingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EmbeddingResponse) => void): ClientUnaryCall;
}
export declare const EmbeddingsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): EmbeddingsServiceClient;
    service: typeof EmbeddingsServiceService;
};
/** Service for asynchronous text generation. */
export declare const TextGenerationAsyncServiceService: {
    /** RPC method for instructing the model to generate text. */
    readonly instruct: {
        readonly path: "/yandex.cloud.ai.llm.v1alpha.TextGenerationAsyncService/Instruct";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InstructRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InstructRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface TextGenerationAsyncServiceServer extends UntypedServiceImplementation {
    /** RPC method for instructing the model to generate text. */
    instruct: handleUnaryCall<InstructRequest, Operation>;
}
export interface TextGenerationAsyncServiceClient extends Client {
    /** RPC method for instructing the model to generate text. */
    instruct(request: InstructRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    instruct(request: InstructRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    instruct(request: InstructRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const TextGenerationAsyncServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TextGenerationAsyncServiceClient;
    service: typeof TextGenerationAsyncServiceService;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
