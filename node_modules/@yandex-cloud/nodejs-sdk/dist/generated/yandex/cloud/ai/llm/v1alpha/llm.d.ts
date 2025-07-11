import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.llm.v1alpha";
/** Defines the options for text generation. */
export interface GenerationOptions {
    $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions";
    /** Enables streaming of partially generated text. */
    partialResults: boolean;
    /**
     * Affects creativity and randomness of responses. Should be a double number between 0 (inclusive) and infinity.
     * Lower values produce more straightforward responses, while higher values lead to increased creativity and randomness.
     */
    temperature?: number;
    /**
     * Sets the maximum limit on the total number of tokens used for both the input prompt and the generated response.
     * Must be greater than zero and not exceed 7400 tokens.
     */
    maxTokens?: number;
}
/** Represents an alternative generated response, including its score and token count. */
export interface Alternative {
    $type: "yandex.cloud.ai.llm.v1alpha.Alternative";
    /** The generated text response. */
    text: string;
    /** The score or confidence of the generated text. */
    score: number;
    /** The number of tokens in the generated response. */
    numTokens: number;
}
/** Represents a message within a chat. */
export interface Message {
    $type: "yandex.cloud.ai.llm.v1alpha.Message";
    /** Identifies the sender of the message. */
    role: string;
    /** The text content of the message. */
    text: string;
}
/** Represents a token, the basic unit of text, used by the LLM. */
export interface Token {
    $type: "yandex.cloud.ai.llm.v1alpha.Token";
    /** An internal token identifier. */
    id: number;
    /** The textual representation of the token. */
    text: string;
    /** Indicates whether the token is special or not. Special tokens define the model's behavior and are not visible to users. */
    special: boolean;
}
export declare const GenerationOptions: {
    $type: "yandex.cloud.ai.llm.v1alpha.GenerationOptions";
    encode(message: GenerationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerationOptions;
    fromJSON(object: any): GenerationOptions;
    toJSON(message: GenerationOptions): unknown;
    fromPartial<I extends {
        partialResults?: boolean | undefined;
        temperature?: number | undefined;
        maxTokens?: number | undefined;
    } & {
        partialResults?: boolean | undefined;
        temperature?: number | undefined;
        maxTokens?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "partialResults" | "temperature" | "maxTokens">, never>>(object: I): GenerationOptions;
};
export declare const Alternative: {
    $type: "yandex.cloud.ai.llm.v1alpha.Alternative";
    encode(message: Alternative, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Alternative;
    fromJSON(object: any): Alternative;
    toJSON(message: Alternative): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        score?: number | undefined;
        numTokens?: number | undefined;
    } & {
        text?: string | undefined;
        score?: number | undefined;
        numTokens?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "score" | "numTokens">, never>>(object: I): Alternative;
};
export declare const Message: {
    $type: "yandex.cloud.ai.llm.v1alpha.Message";
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        role?: string | undefined;
    } & {
        text?: string | undefined;
        role?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "role">, never>>(object: I): Message;
};
export declare const Token: {
    $type: "yandex.cloud.ai.llm.v1alpha.Token";
    encode(message: Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Token;
    fromJSON(object: any): Token;
    toJSON(message: Token): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        text?: string | undefined;
        special?: boolean | undefined;
    } & {
        id?: number | undefined;
        text?: string | undefined;
        special?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "text" | "special">, never>>(object: I): Token;
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
