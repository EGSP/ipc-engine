/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { TranslatedText, Language } from "../../../../../yandex/cloud/ai/translate/v2/translation";
export declare const protobufPackage = "yandex.cloud.ai.translate.v2";
export interface TranslateRequest {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest";
    /**
     * The text language to translate from.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * Required for translating with glossary.
     */
    sourceLanguageCode: string;
    /**
     * The target language to translate the text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    targetLanguageCode: string;
    /** Format of the text. */
    format: TranslateRequest_Format;
    /**
     * Array of the strings to translate.
     * The maximum total length of all strings is 10000 characters.
     */
    texts: string[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
    /** Do not specify this field, custom models are not supported yet. */
    model: string;
    /** Glossary to be applied for the translation. For more information, see [Glossaries](/docs/translate/concepts/glossary). */
    glossaryConfig?: TranslateGlossaryConfig;
    /** use speller */
    speller: boolean;
}
export declare enum TranslateRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    /** PLAIN_TEXT - Text without markup. Default value. */
    PLAIN_TEXT = 1,
    /** HTML - Text in the HTML format. */
    HTML = 2,
    UNRECOGNIZED = -1
}
export declare function translateRequest_FormatFromJSON(object: any): TranslateRequest_Format;
export declare function translateRequest_FormatToJSON(object: TranslateRequest_Format): string;
export interface TranslateGlossaryConfig {
    $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig";
    /** Pass glossary data in the request. Currently, only this way to pass glossary is supported. */
    glossaryData?: GlossaryData | undefined;
}
export interface GlossaryData {
    $type: "yandex.cloud.ai.translate.v2.GlossaryData";
    /**
     * Array of text pairs.
     *
     * The maximum total length of all source texts is 10000 characters.
     * The maximum total length of all translated texts is 10000 characters.
     */
    glossaryPairs: GlossaryPair[];
}
export interface GlossaryPair {
    $type: "yandex.cloud.ai.translate.v2.GlossaryPair";
    /** Text in the source language. */
    sourceText: string;
    /** Text in the target language. */
    translatedText: string;
    exact: boolean;
}
export interface TranslateResponse {
    $type: "yandex.cloud.ai.translate.v2.TranslateResponse";
    /** Array of the translations. */
    translations: TranslatedText[];
}
export interface DetectLanguageRequest {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest";
    /** The text to detect the language for. */
    text: string;
    /**
     * List of the most likely languages. These languages will be given preference when detecting the text language.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the list of supported languages, use a [TranslationService.ListLanguages] request.
     */
    languageCodeHints: string[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}
export interface DetectLanguageResponse {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse";
    /**
     * The text language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the language name, use a [TranslationService.ListLanguages] request.
     */
    languageCode: string;
}
export interface ListLanguagesRequest {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest";
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}
export interface ListLanguagesResponse {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse";
    /** List of supported languages. */
    languages: Language[];
}
export declare const TranslateRequest: {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest";
    encode(message: TranslateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateRequest;
    fromJSON(object: any): TranslateRequest;
    toJSON(message: TranslateRequest): unknown;
    fromPartial<I extends {
        model?: string | undefined;
        folderId?: string | undefined;
        sourceLanguageCode?: string | undefined;
        targetLanguageCode?: string | undefined;
        format?: TranslateRequest_Format | undefined;
        texts?: string[] | undefined;
        speller?: boolean | undefined;
        glossaryConfig?: {
            glossaryData?: {
                glossaryPairs?: {
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        model?: string | undefined;
        folderId?: string | undefined;
        sourceLanguageCode?: string | undefined;
        targetLanguageCode?: string | undefined;
        format?: TranslateRequest_Format | undefined;
        texts?: (string[] & string[] & Record<Exclude<keyof I["texts"], "$type" | keyof string[]>, never>) | undefined;
        speller?: boolean | undefined;
        glossaryConfig?: ({
            glossaryData?: {
                glossaryPairs?: {
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            glossaryData?: ({
                glossaryPairs?: {
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                }[] | undefined;
            } & {
                glossaryPairs?: ({
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                }[] & ({
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                } & {
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                } & Record<Exclude<keyof I["glossaryConfig"]["glossaryData"]["glossaryPairs"][number], "$type" | "sourceText" | "translatedText" | "exact">, never>)[] & Record<Exclude<keyof I["glossaryConfig"]["glossaryData"]["glossaryPairs"], "$type" | keyof {
                    sourceText?: string | undefined;
                    translatedText?: string | undefined;
                    exact?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["glossaryConfig"]["glossaryData"], "$type" | "glossaryPairs">, never>) | undefined;
        } & Record<Exclude<keyof I["glossaryConfig"], "$type" | "glossaryData">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "model" | "folderId" | "sourceLanguageCode" | "targetLanguageCode" | "format" | "texts" | "speller" | "glossaryConfig">, never>>(object: I): TranslateRequest;
};
export declare const TranslateGlossaryConfig: {
    $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig";
    encode(message: TranslateGlossaryConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateGlossaryConfig;
    fromJSON(object: any): TranslateGlossaryConfig;
    toJSON(message: TranslateGlossaryConfig): unknown;
    fromPartial<I extends {
        glossaryData?: {
            glossaryPairs?: {
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        glossaryData?: ({
            glossaryPairs?: {
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            }[] | undefined;
        } & {
            glossaryPairs?: ({
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            }[] & ({
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            } & {
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            } & Record<Exclude<keyof I["glossaryData"]["glossaryPairs"][number], "$type" | "sourceText" | "translatedText" | "exact">, never>)[] & Record<Exclude<keyof I["glossaryData"]["glossaryPairs"], "$type" | keyof {
                sourceText?: string | undefined;
                translatedText?: string | undefined;
                exact?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["glossaryData"], "$type" | "glossaryPairs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "glossaryData">, never>>(object: I): TranslateGlossaryConfig;
};
export declare const GlossaryData: {
    $type: "yandex.cloud.ai.translate.v2.GlossaryData";
    encode(message: GlossaryData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GlossaryData;
    fromJSON(object: any): GlossaryData;
    toJSON(message: GlossaryData): unknown;
    fromPartial<I extends {
        glossaryPairs?: {
            sourceText?: string | undefined;
            translatedText?: string | undefined;
            exact?: boolean | undefined;
        }[] | undefined;
    } & {
        glossaryPairs?: ({
            sourceText?: string | undefined;
            translatedText?: string | undefined;
            exact?: boolean | undefined;
        }[] & ({
            sourceText?: string | undefined;
            translatedText?: string | undefined;
            exact?: boolean | undefined;
        } & {
            sourceText?: string | undefined;
            translatedText?: string | undefined;
            exact?: boolean | undefined;
        } & Record<Exclude<keyof I["glossaryPairs"][number], "$type" | "sourceText" | "translatedText" | "exact">, never>)[] & Record<Exclude<keyof I["glossaryPairs"], "$type" | keyof {
            sourceText?: string | undefined;
            translatedText?: string | undefined;
            exact?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "glossaryPairs">, never>>(object: I): GlossaryData;
};
export declare const GlossaryPair: {
    $type: "yandex.cloud.ai.translate.v2.GlossaryPair";
    encode(message: GlossaryPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GlossaryPair;
    fromJSON(object: any): GlossaryPair;
    toJSON(message: GlossaryPair): unknown;
    fromPartial<I extends {
        sourceText?: string | undefined;
        translatedText?: string | undefined;
        exact?: boolean | undefined;
    } & {
        sourceText?: string | undefined;
        translatedText?: string | undefined;
        exact?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "sourceText" | "translatedText" | "exact">, never>>(object: I): GlossaryPair;
};
export declare const TranslateResponse: {
    $type: "yandex.cloud.ai.translate.v2.TranslateResponse";
    encode(message: TranslateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateResponse;
    fromJSON(object: any): TranslateResponse;
    toJSON(message: TranslateResponse): unknown;
    fromPartial<I extends {
        translations?: {
            text?: string | undefined;
            detectedLanguageCode?: string | undefined;
        }[] | undefined;
    } & {
        translations?: ({
            text?: string | undefined;
            detectedLanguageCode?: string | undefined;
        }[] & ({
            text?: string | undefined;
            detectedLanguageCode?: string | undefined;
        } & {
            text?: string | undefined;
            detectedLanguageCode?: string | undefined;
        } & Record<Exclude<keyof I["translations"][number], "$type" | "text" | "detectedLanguageCode">, never>)[] & Record<Exclude<keyof I["translations"], "$type" | keyof {
            text?: string | undefined;
            detectedLanguageCode?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "translations">, never>>(object: I): TranslateResponse;
};
export declare const DetectLanguageRequest: {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest";
    encode(message: DetectLanguageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetectLanguageRequest;
    fromJSON(object: any): DetectLanguageRequest;
    toJSON(message: DetectLanguageRequest): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        folderId?: string | undefined;
        languageCodeHints?: string[] | undefined;
    } & {
        text?: string | undefined;
        folderId?: string | undefined;
        languageCodeHints?: (string[] & string[] & Record<Exclude<keyof I["languageCodeHints"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "folderId" | "languageCodeHints">, never>>(object: I): DetectLanguageRequest;
};
export declare const DetectLanguageResponse: {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse";
    encode(message: DetectLanguageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetectLanguageResponse;
    fromJSON(object: any): DetectLanguageResponse;
    toJSON(message: DetectLanguageResponse): unknown;
    fromPartial<I extends {
        languageCode?: string | undefined;
    } & {
        languageCode?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode">, never>>(object: I): DetectLanguageResponse;
};
export declare const ListLanguagesRequest: {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest";
    encode(message: ListLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLanguagesRequest;
    fromJSON(object: any): ListLanguagesRequest;
    toJSON(message: ListLanguagesRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): ListLanguagesRequest;
};
export declare const ListLanguagesResponse: {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse";
    encode(message: ListLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLanguagesResponse;
    fromJSON(object: any): ListLanguagesResponse;
    toJSON(message: ListLanguagesResponse): unknown;
    fromPartial<I extends {
        languages?: {
            name?: string | undefined;
            code?: string | undefined;
        }[] | undefined;
    } & {
        languages?: ({
            name?: string | undefined;
            code?: string | undefined;
        }[] & ({
            name?: string | undefined;
            code?: string | undefined;
        } & {
            name?: string | undefined;
            code?: string | undefined;
        } & Record<Exclude<keyof I["languages"][number], "$type" | "name" | "code">, never>)[] & Record<Exclude<keyof I["languages"], "$type" | keyof {
            name?: string | undefined;
            code?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "languages">, never>>(object: I): ListLanguagesResponse;
};
/** A set of methods for the Translate service. */
export declare const TranslationServiceService: {
    /** Translates the text to the specified language. */
    readonly translate: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TranslateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TranslateRequest;
        readonly responseSerialize: (value: TranslateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TranslateResponse;
    };
    /** Detects the language of the text. */
    readonly detectLanguage: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetectLanguageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetectLanguageRequest;
        readonly responseSerialize: (value: DetectLanguageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DetectLanguageResponse;
    };
    /** Retrieves the list of supported languages. */
    readonly listLanguages: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLanguagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLanguagesRequest;
        readonly responseSerialize: (value: ListLanguagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLanguagesResponse;
    };
};
export interface TranslationServiceServer extends UntypedServiceImplementation {
    /** Translates the text to the specified language. */
    translate: handleUnaryCall<TranslateRequest, TranslateResponse>;
    /** Detects the language of the text. */
    detectLanguage: handleUnaryCall<DetectLanguageRequest, DetectLanguageResponse>;
    /** Retrieves the list of supported languages. */
    listLanguages: handleUnaryCall<ListLanguagesRequest, ListLanguagesResponse>;
}
export interface TranslationServiceClient extends Client {
    /** Translates the text to the specified language. */
    translate(request: TranslateRequest, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    translate(request: TranslateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    translate(request: TranslateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    /** Detects the language of the text. */
    detectLanguage(request: DetectLanguageRequest, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    detectLanguage(request: DetectLanguageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    detectLanguage(request: DetectLanguageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    /** Retrieves the list of supported languages. */
    listLanguages(request: ListLanguagesRequest, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
    listLanguages(request: ListLanguagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
    listLanguages(request: ListLanguagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
}
export declare const TranslationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TranslationServiceClient;
    service: typeof TranslationServiceService;
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
