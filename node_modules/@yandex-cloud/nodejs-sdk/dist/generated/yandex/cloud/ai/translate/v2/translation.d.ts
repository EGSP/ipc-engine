import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.translate.v2";
export interface TranslatedText {
    $type: "yandex.cloud.ai.translate.v2.TranslatedText";
    /** Translated text. */
    text: string;
    /**
     * The language code of the source text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    detectedLanguageCode: string;
}
export interface Language {
    $type: "yandex.cloud.ai.translate.v2.Language";
    /**
     * The language code.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    code: string;
    /** The name of the language (for example, `` English ``). */
    name: string;
}
export declare const TranslatedText: {
    $type: "yandex.cloud.ai.translate.v2.TranslatedText";
    encode(message: TranslatedText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslatedText;
    fromJSON(object: any): TranslatedText;
    toJSON(message: TranslatedText): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        detectedLanguageCode?: string | undefined;
    } & {
        text?: string | undefined;
        detectedLanguageCode?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "detectedLanguageCode">, never>>(object: I): TranslatedText;
};
export declare const Language: {
    $type: "yandex.cloud.ai.translate.v2.Language";
    encode(message: Language, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Language;
    fromJSON(object: any): Language;
    toJSON(message: Language): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        code?: string | undefined;
    } & {
        name?: string | undefined;
        code?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "code">, never>>(object: I): Language;
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
