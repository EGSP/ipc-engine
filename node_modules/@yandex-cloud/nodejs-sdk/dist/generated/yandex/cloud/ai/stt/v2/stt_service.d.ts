/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleBidiStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientDuplexStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.ai.stt.v2";
export interface LongRunningRecognitionRequest {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest";
    config?: RecognitionConfig;
    audio?: RecognitionAudio;
}
export interface LongRunningRecognitionResponse {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse";
    chunks: SpeechRecognitionResult[];
}
export interface StreamingRecognitionRequest {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest";
    config?: RecognitionConfig | undefined;
    audioContent: Buffer | undefined;
}
export interface StreamingRecognitionResponse {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse";
    chunks: SpeechRecognitionChunk[];
}
export interface RecognitionAudio {
    $type: "yandex.cloud.ai.stt.v2.RecognitionAudio";
    content: Buffer | undefined;
    uri: string | undefined;
}
export interface RecognitionConfig {
    $type: "yandex.cloud.ai.stt.v2.RecognitionConfig";
    specification?: RecognitionSpec;
    folderId: string;
}
export interface RecognitionSpec {
    $type: "yandex.cloud.ai.stt.v2.RecognitionSpec";
    audioEncoding: RecognitionSpec_AudioEncoding;
    /** 8000, 16000, 48000 only for pcm */
    sampleRateHertz: number;
    /** code in BCP-47 */
    languageCode: string;
    profanityFilter: boolean;
    model: string;
    /**
     * If set true, tentative hypotheses may be returned as they become available (final=false flag)
     * If false or omitted, only final=true result(s) are returned.
     * Makes sense only for StreamingRecognize requests.
     */
    partialResults: boolean;
    singleUtterance: boolean;
    /** Used only for long running recognize. */
    audioChannelCount: number;
    /** This mark allows disable normalization text */
    rawResults: boolean;
    /** Rewrite text in literature style (default: false) */
    literatureText: boolean;
}
export declare enum RecognitionSpec_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    LINEAR16_PCM = 1,
    OGG_OPUS = 2,
    /** MP3 - transcription only */
    MP3 = 3,
    UNRECOGNIZED = -1
}
export declare function recognitionSpec_AudioEncodingFromJSON(object: any): RecognitionSpec_AudioEncoding;
export declare function recognitionSpec_AudioEncodingToJSON(object: RecognitionSpec_AudioEncoding): string;
export interface SpeechRecognitionChunk {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk";
    alternatives: SpeechRecognitionAlternative[];
    /** This flag shows that the received chunk contains a part of the recognized text that won't be changed. */
    final: boolean;
    /** This flag shows that the received chunk is the end of an utterance. */
    endOfUtterance: boolean;
}
export interface SpeechRecognitionResult {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult";
    alternatives: SpeechRecognitionAlternative[];
    channelTag: number;
}
export interface SpeechRecognitionAlternative {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative";
    text: string;
    confidence: number;
    words: WordInfo[];
}
export interface WordInfo {
    $type: "yandex.cloud.ai.stt.v2.WordInfo";
    startTime?: Duration;
    endTime?: Duration;
    word: string;
    confidence: number;
}
export declare const LongRunningRecognitionRequest: {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest";
    encode(message: LongRunningRecognitionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LongRunningRecognitionRequest;
    fromJSON(object: any): LongRunningRecognitionRequest;
    toJSON(message: LongRunningRecognitionRequest): unknown;
    fromPartial<I extends {
        config?: {
            specification?: {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } | undefined;
            folderId?: string | undefined;
        } | undefined;
        audio?: {
            content?: Buffer | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        config?: ({
            specification?: {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } | undefined;
            folderId?: string | undefined;
        } & {
            specification?: ({
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } & {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["specification"], "$type" | "languageCode" | "model" | "audioEncoding" | "sampleRateHertz" | "profanityFilter" | "partialResults" | "singleUtterance" | "audioChannelCount" | "rawResults" | "literatureText">, never>) | undefined;
            folderId?: string | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "specification" | "folderId">, never>) | undefined;
        audio?: ({
            content?: Buffer | undefined;
            uri?: string | undefined;
        } & {
            content?: Buffer | undefined;
            uri?: string | undefined;
        } & Record<Exclude<keyof I["audio"], "$type" | "content" | "uri">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "config" | "audio">, never>>(object: I): LongRunningRecognitionRequest;
};
export declare const LongRunningRecognitionResponse: {
    $type: "yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse";
    encode(message: LongRunningRecognitionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LongRunningRecognitionResponse;
    fromJSON(object: any): LongRunningRecognitionResponse;
    toJSON(message: LongRunningRecognitionResponse): unknown;
    fromPartial<I extends {
        chunks?: {
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            channelTag?: number | undefined;
        }[] | undefined;
    } & {
        chunks?: ({
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            channelTag?: number | undefined;
        }[] & ({
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            channelTag?: number | undefined;
        } & {
            alternatives?: ({
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] & ({
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            } & {
                text?: string | undefined;
                words?: ({
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] & ({
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                } & {
                    confidence?: number | undefined;
                    startTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number]["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    endTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number]["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    word?: string | undefined;
                } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number], "$type" | "confidence" | "startTime" | "endTime" | "word">, never>)[] & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"], "$type" | keyof {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
            } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number], "$type" | "text" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["chunks"][number]["alternatives"], "$type" | keyof {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: number | undefined;
        } & Record<Exclude<keyof I["chunks"][number], "$type" | "alternatives" | "channelTag">, never>)[] & Record<Exclude<keyof I["chunks"], "$type" | keyof {
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            channelTag?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "chunks">, never>>(object: I): LongRunningRecognitionResponse;
};
export declare const StreamingRecognitionRequest: {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionRequest";
    encode(message: StreamingRecognitionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRecognitionRequest;
    fromJSON(object: any): StreamingRecognitionRequest;
    toJSON(message: StreamingRecognitionRequest): unknown;
    fromPartial<I extends {
        config?: {
            specification?: {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } | undefined;
            folderId?: string | undefined;
        } | undefined;
        audioContent?: Buffer | undefined;
    } & {
        config?: ({
            specification?: {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } | undefined;
            folderId?: string | undefined;
        } & {
            specification?: ({
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } & {
                languageCode?: string | undefined;
                model?: string | undefined;
                audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                profanityFilter?: boolean | undefined;
                partialResults?: boolean | undefined;
                singleUtterance?: boolean | undefined;
                audioChannelCount?: number | undefined;
                rawResults?: boolean | undefined;
                literatureText?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["specification"], "$type" | "languageCode" | "model" | "audioEncoding" | "sampleRateHertz" | "profanityFilter" | "partialResults" | "singleUtterance" | "audioChannelCount" | "rawResults" | "literatureText">, never>) | undefined;
            folderId?: string | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "specification" | "folderId">, never>) | undefined;
        audioContent?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "config" | "audioContent">, never>>(object: I): StreamingRecognitionRequest;
};
export declare const StreamingRecognitionResponse: {
    $type: "yandex.cloud.ai.stt.v2.StreamingRecognitionResponse";
    encode(message: StreamingRecognitionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRecognitionResponse;
    fromJSON(object: any): StreamingRecognitionResponse;
    toJSON(message: StreamingRecognitionResponse): unknown;
    fromPartial<I extends {
        chunks?: {
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            final?: boolean | undefined;
            endOfUtterance?: boolean | undefined;
        }[] | undefined;
    } & {
        chunks?: ({
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            final?: boolean | undefined;
            endOfUtterance?: boolean | undefined;
        }[] & ({
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            final?: boolean | undefined;
            endOfUtterance?: boolean | undefined;
        } & {
            alternatives?: ({
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] & ({
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            } & {
                text?: string | undefined;
                words?: ({
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] & ({
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                } & {
                    confidence?: number | undefined;
                    startTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number]["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    endTime?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number]["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    word?: string | undefined;
                } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"][number], "$type" | "confidence" | "startTime" | "endTime" | "word">, never>)[] & Record<Exclude<keyof I["chunks"][number]["alternatives"][number]["words"], "$type" | keyof {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
            } & Record<Exclude<keyof I["chunks"][number]["alternatives"][number], "$type" | "text" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["chunks"][number]["alternatives"], "$type" | keyof {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[]>, never>) | undefined;
            final?: boolean | undefined;
            endOfUtterance?: boolean | undefined;
        } & Record<Exclude<keyof I["chunks"][number], "$type" | "alternatives" | "final" | "endOfUtterance">, never>)[] & Record<Exclude<keyof I["chunks"], "$type" | keyof {
            alternatives?: {
                text?: string | undefined;
                words?: {
                    confidence?: number | undefined;
                    startTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    endTime?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    word?: string | undefined;
                }[] | undefined;
                confidence?: number | undefined;
            }[] | undefined;
            final?: boolean | undefined;
            endOfUtterance?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "chunks">, never>>(object: I): StreamingRecognitionResponse;
};
export declare const RecognitionAudio: {
    $type: "yandex.cloud.ai.stt.v2.RecognitionAudio";
    encode(message: RecognitionAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionAudio;
    fromJSON(object: any): RecognitionAudio;
    toJSON(message: RecognitionAudio): unknown;
    fromPartial<I extends {
        content?: Buffer | undefined;
        uri?: string | undefined;
    } & {
        content?: Buffer | undefined;
        uri?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "uri">, never>>(object: I): RecognitionAudio;
};
export declare const RecognitionConfig: {
    $type: "yandex.cloud.ai.stt.v2.RecognitionConfig";
    encode(message: RecognitionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionConfig;
    fromJSON(object: any): RecognitionConfig;
    toJSON(message: RecognitionConfig): unknown;
    fromPartial<I extends {
        specification?: {
            languageCode?: string | undefined;
            model?: string | undefined;
            audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            profanityFilter?: boolean | undefined;
            partialResults?: boolean | undefined;
            singleUtterance?: boolean | undefined;
            audioChannelCount?: number | undefined;
            rawResults?: boolean | undefined;
            literatureText?: boolean | undefined;
        } | undefined;
        folderId?: string | undefined;
    } & {
        specification?: ({
            languageCode?: string | undefined;
            model?: string | undefined;
            audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            profanityFilter?: boolean | undefined;
            partialResults?: boolean | undefined;
            singleUtterance?: boolean | undefined;
            audioChannelCount?: number | undefined;
            rawResults?: boolean | undefined;
            literatureText?: boolean | undefined;
        } & {
            languageCode?: string | undefined;
            model?: string | undefined;
            audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            profanityFilter?: boolean | undefined;
            partialResults?: boolean | undefined;
            singleUtterance?: boolean | undefined;
            audioChannelCount?: number | undefined;
            rawResults?: boolean | undefined;
            literatureText?: boolean | undefined;
        } & Record<Exclude<keyof I["specification"], "$type" | "languageCode" | "model" | "audioEncoding" | "sampleRateHertz" | "profanityFilter" | "partialResults" | "singleUtterance" | "audioChannelCount" | "rawResults" | "literatureText">, never>) | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "specification" | "folderId">, never>>(object: I): RecognitionConfig;
};
export declare const RecognitionSpec: {
    $type: "yandex.cloud.ai.stt.v2.RecognitionSpec";
    encode(message: RecognitionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionSpec;
    fromJSON(object: any): RecognitionSpec;
    toJSON(message: RecognitionSpec): unknown;
    fromPartial<I extends {
        languageCode?: string | undefined;
        model?: string | undefined;
        audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        profanityFilter?: boolean | undefined;
        partialResults?: boolean | undefined;
        singleUtterance?: boolean | undefined;
        audioChannelCount?: number | undefined;
        rawResults?: boolean | undefined;
        literatureText?: boolean | undefined;
    } & {
        languageCode?: string | undefined;
        model?: string | undefined;
        audioEncoding?: RecognitionSpec_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        profanityFilter?: boolean | undefined;
        partialResults?: boolean | undefined;
        singleUtterance?: boolean | undefined;
        audioChannelCount?: number | undefined;
        rawResults?: boolean | undefined;
        literatureText?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode" | "model" | "audioEncoding" | "sampleRateHertz" | "profanityFilter" | "partialResults" | "singleUtterance" | "audioChannelCount" | "rawResults" | "literatureText">, never>>(object: I): RecognitionSpec;
};
export declare const SpeechRecognitionChunk: {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionChunk";
    encode(message: SpeechRecognitionChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionChunk;
    fromJSON(object: any): SpeechRecognitionChunk;
    toJSON(message: SpeechRecognitionChunk): unknown;
    fromPartial<I extends {
        alternatives?: {
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] | undefined;
        final?: boolean | undefined;
        endOfUtterance?: boolean | undefined;
    } & {
        alternatives?: ({
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] & ({
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        } & {
            text?: string | undefined;
            words?: ({
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] & ({
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            } & {
                confidence?: number | undefined;
                startTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["alternatives"][number]["words"][number]["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                endTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["alternatives"][number]["words"][number]["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                word?: string | undefined;
            } & Record<Exclude<keyof I["alternatives"][number]["words"][number], "$type" | "confidence" | "startTime" | "endTime" | "word">, never>)[] & Record<Exclude<keyof I["alternatives"][number]["words"], "$type" | keyof {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[]>, never>) | undefined;
            confidence?: number | undefined;
        } & Record<Exclude<keyof I["alternatives"][number], "$type" | "text" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["alternatives"], "$type" | keyof {
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[]>, never>) | undefined;
        final?: boolean | undefined;
        endOfUtterance?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "alternatives" | "final" | "endOfUtterance">, never>>(object: I): SpeechRecognitionChunk;
};
export declare const SpeechRecognitionResult: {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionResult";
    encode(message: SpeechRecognitionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionResult;
    fromJSON(object: any): SpeechRecognitionResult;
    toJSON(message: SpeechRecognitionResult): unknown;
    fromPartial<I extends {
        alternatives?: {
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] | undefined;
        channelTag?: number | undefined;
    } & {
        alternatives?: ({
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[] & ({
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        } & {
            text?: string | undefined;
            words?: ({
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] & ({
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            } & {
                confidence?: number | undefined;
                startTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["alternatives"][number]["words"][number]["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                endTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["alternatives"][number]["words"][number]["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
                word?: string | undefined;
            } & Record<Exclude<keyof I["alternatives"][number]["words"][number], "$type" | "confidence" | "startTime" | "endTime" | "word">, never>)[] & Record<Exclude<keyof I["alternatives"][number]["words"], "$type" | keyof {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[]>, never>) | undefined;
            confidence?: number | undefined;
        } & Record<Exclude<keyof I["alternatives"][number], "$type" | "text" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["alternatives"], "$type" | keyof {
            text?: string | undefined;
            words?: {
                confidence?: number | undefined;
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                endTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                word?: string | undefined;
            }[] | undefined;
            confidence?: number | undefined;
        }[]>, never>) | undefined;
        channelTag?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "alternatives" | "channelTag">, never>>(object: I): SpeechRecognitionResult;
};
export declare const SpeechRecognitionAlternative: {
    $type: "yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative";
    encode(message: SpeechRecognitionAlternative, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionAlternative;
    fromJSON(object: any): SpeechRecognitionAlternative;
    toJSON(message: SpeechRecognitionAlternative): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        words?: {
            confidence?: number | undefined;
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            word?: string | undefined;
        }[] | undefined;
        confidence?: number | undefined;
    } & {
        text?: string | undefined;
        words?: ({
            confidence?: number | undefined;
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            word?: string | undefined;
        }[] & ({
            confidence?: number | undefined;
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            word?: string | undefined;
        } & {
            confidence?: number | undefined;
            startTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["words"][number]["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
            endTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["words"][number]["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
            word?: string | undefined;
        } & Record<Exclude<keyof I["words"][number], "$type" | "confidence" | "startTime" | "endTime" | "word">, never>)[] & Record<Exclude<keyof I["words"], "$type" | keyof {
            confidence?: number | undefined;
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            endTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            word?: string | undefined;
        }[]>, never>) | undefined;
        confidence?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "words" | "confidence">, never>>(object: I): SpeechRecognitionAlternative;
};
export declare const WordInfo: {
    $type: "yandex.cloud.ai.stt.v2.WordInfo";
    encode(message: WordInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WordInfo;
    fromJSON(object: any): WordInfo;
    toJSON(message: WordInfo): unknown;
    fromPartial<I extends {
        confidence?: number | undefined;
        startTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        endTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        word?: string | undefined;
    } & {
        confidence?: number | undefined;
        startTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
        endTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["endTime"], "$type" | "seconds" | "nanos">, never>) | undefined;
        word?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "confidence" | "startTime" | "endTime" | "word">, never>>(object: I): WordInfo;
};
export declare const SttServiceService: {
    readonly longRunningRecognize: {
        readonly path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LongRunningRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LongRunningRecognitionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly streamingRecognize: {
        readonly path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamingRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamingRecognitionRequest;
        readonly responseSerialize: (value: StreamingRecognitionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamingRecognitionResponse;
    };
};
export interface SttServiceServer extends UntypedServiceImplementation {
    longRunningRecognize: handleUnaryCall<LongRunningRecognitionRequest, Operation>;
    streamingRecognize: handleBidiStreamingCall<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}
export interface SttServiceClient extends Client {
    longRunningRecognize(request: LongRunningRecognitionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    longRunningRecognize(request: LongRunningRecognitionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    longRunningRecognize(request: LongRunningRecognitionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    streamingRecognize(): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
    streamingRecognize(options: Partial<CallOptions>): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
    streamingRecognize(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}
export declare const SttServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SttServiceClient;
    service: typeof SttServiceService;
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
