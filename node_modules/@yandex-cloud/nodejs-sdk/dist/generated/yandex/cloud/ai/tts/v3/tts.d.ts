/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "speechkit.tts.v3";
export interface AudioContent {
    $type: "speechkit.tts.v3.AudioContent";
    /** Bytes with audio data. */
    content: Buffer | undefined;
    /** Description of the audio format. */
    audioSpec?: AudioFormatOptions;
}
export interface AudioFormatOptions {
    $type: "speechkit.tts.v3.AudioFormatOptions";
    /** The audio format specified in request parameters. */
    rawAudio?: RawAudio | undefined;
    /** The audio format specified inside the container metadata. */
    containerAudio?: ContainerAudio | undefined;
}
export interface RawAudio {
    $type: "speechkit.tts.v3.RawAudio";
    /** Encoding type. */
    audioEncoding: RawAudio_AudioEncoding;
    /** Sampling frequency of the signal. */
    sampleRateHertz: number;
}
export declare enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    LINEAR16_PCM = 1,
    UNRECOGNIZED = -1
}
export declare function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding;
export declare function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string;
export interface ContainerAudio {
    $type: "speechkit.tts.v3.ContainerAudio";
    containerAudioType: ContainerAudio_ContainerAudioType;
}
export declare enum ContainerAudio_ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    WAV = 1,
    /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
    OGG_OPUS = 2,
    /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
    MP3 = 3,
    UNRECOGNIZED = -1
}
export declare function containerAudio_ContainerAudioTypeFromJSON(object: any): ContainerAudio_ContainerAudioType;
export declare function containerAudio_ContainerAudioTypeToJSON(object: ContainerAudio_ContainerAudioType): string;
export interface TextVariable {
    $type: "speechkit.tts.v3.TextVariable";
    /** The name of the variable. */
    variableName: string;
    /** The text of the variable. */
    variableValue: string;
}
export interface AudioVariable {
    $type: "speechkit.tts.v3.AudioVariable";
    /** The name of the variable. */
    variableName: string;
    /** Start time of the variable in milliseconds. */
    variableStartMs: number;
    /** Length of the variable in milliseconds. */
    variableLengthMs: number;
}
export interface UtteranceSynthesisResponse {
    $type: "speechkit.tts.v3.UtteranceSynthesisResponse";
    /** Part of synthesized audio. */
    audioChunk?: AudioChunk;
}
export interface AudioTemplate {
    $type: "speechkit.tts.v3.AudioTemplate";
    /** Audio file. */
    audio?: AudioContent;
    /** Template and description of its variables. */
    textTemplate?: TextTemplate;
    /** Describing variables in audio. */
    variables: AudioVariable[];
}
export interface AudioChunk {
    $type: "speechkit.tts.v3.AudioChunk";
    /** Sequence of bytes of the synthesized audio in format specified in output_audio_spec. */
    data: Buffer;
}
export interface TextTemplate {
    $type: "speechkit.tts.v3.TextTemplate";
    /**
     * Template text.
     *
     * Sample:`The {animal} goes to the {place}.`
     */
    textTemplate: string;
    /**
     * Defining variables in template text.
     *
     * Sample: `{animal: cat, place: forest}`
     */
    variables: TextVariable[];
}
export interface Hints {
    $type: "speechkit.tts.v3.Hints";
    /** Name of speaker to use. */
    voice: string | undefined;
    /** Template for synthesizing. */
    audioTemplate?: AudioTemplate | undefined;
    /** Hint to change speed. */
    speed: number | undefined;
    /**
     * Hint to regulate normalization level.
     * * For `MAX_PEAK` loudness_normalization_type: volume changes in a range (0;1], default value is 0.7.
     * * For `LUFS` loudness_normalization_type: volume changes in a range [-145;0), default value is -19.
     */
    volume: number | undefined;
    /** Hint to specify pronunciation character for the speaker. */
    role: string | undefined;
    /** Hint to increase (or decrease) speaker's pitch, measured in Hz. Valid values are in range [-1000;1000], default value is 0. */
    pitchShift: number | undefined;
}
export interface UtteranceSynthesisRequest {
    $type: "speechkit.tts.v3.UtteranceSynthesisRequest";
    /**
     * The name of the model.
     * Specifies basic synthesis functionality. Currently should be empty. Do not use it.
     */
    model: string;
    /** Raw text (e.g. "Hello, Alice"). */
    text: string | undefined;
    /** Text template instance, e.g. `{"Hello, {username}" with username="Alice"}`. */
    textTemplate?: TextTemplate | undefined;
    /** Optional hints for synthesis. */
    hints: Hints[];
    /** Optional. Default: 22050 Hz, linear 16-bit signed little-endian PCM, with WAV header */
    outputAudioSpec?: AudioFormatOptions;
    /**
     * Specifies type of loudness normalization.
     * Optional. Default: `LUFS`.
     */
    loudnessNormalizationType: UtteranceSynthesisRequest_LoudnessNormalizationType;
    /** Optional. Automatically split long text to several utterances and bill accordingly. Some degradation in service quality is possible. */
    unsafeMode: boolean;
}
export declare enum UtteranceSynthesisRequest_LoudnessNormalizationType {
    LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
    /** MAX_PEAK - The type of normalization, wherein the gain is changed to bring the highest PCM sample value or analog signal peak to a given level. */
    MAX_PEAK = 1,
    /** LUFS - The type of normalization based on EBU R 128 recommendation. */
    LUFS = 2,
    UNRECOGNIZED = -1
}
export declare function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object: any): UtteranceSynthesisRequest_LoudnessNormalizationType;
export declare function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(object: UtteranceSynthesisRequest_LoudnessNormalizationType): string;
export declare const AudioContent: {
    $type: "speechkit.tts.v3.AudioContent";
    encode(message: AudioContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioContent;
    fromJSON(object: any): AudioContent;
    toJSON(message: AudioContent): unknown;
    fromPartial<I extends {
        content?: Buffer | undefined;
        audioSpec?: {
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } | undefined;
    } & {
        content?: Buffer | undefined;
        audioSpec?: ({
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } & {
            rawAudio?: ({
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } & {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } & Record<Exclude<keyof I["audioSpec"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
            containerAudio?: ({
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & Record<Exclude<keyof I["audioSpec"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
        } & Record<Exclude<keyof I["audioSpec"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "audioSpec">, never>>(object: I): AudioContent;
};
export declare const AudioFormatOptions: {
    $type: "speechkit.tts.v3.AudioFormatOptions";
    encode(message: AudioFormatOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioFormatOptions;
    fromJSON(object: any): AudioFormatOptions;
    toJSON(message: AudioFormatOptions): unknown;
    fromPartial<I extends {
        rawAudio?: {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
        } | undefined;
        containerAudio?: {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } | undefined;
    } & {
        rawAudio?: ({
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
        } & {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
        } & Record<Exclude<keyof I["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
        containerAudio?: ({
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & Record<Exclude<keyof I["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "rawAudio" | "containerAudio">, never>>(object: I): AudioFormatOptions;
};
export declare const RawAudio: {
    $type: "speechkit.tts.v3.RawAudio";
    encode(message: RawAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RawAudio;
    fromJSON(object: any): RawAudio;
    toJSON(message: RawAudio): unknown;
    fromPartial<I extends {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
    } & {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "audioEncoding" | "sampleRateHertz">, never>>(object: I): RawAudio;
};
export declare const ContainerAudio: {
    $type: "speechkit.tts.v3.ContainerAudio";
    encode(message: ContainerAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContainerAudio;
    fromJSON(object: any): ContainerAudio;
    toJSON(message: ContainerAudio): unknown;
    fromPartial<I extends {
        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
    } & {
        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerAudioType">, never>>(object: I): ContainerAudio;
};
export declare const TextVariable: {
    $type: "speechkit.tts.v3.TextVariable";
    encode(message: TextVariable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextVariable;
    fromJSON(object: any): TextVariable;
    toJSON(message: TextVariable): unknown;
    fromPartial<I extends {
        variableName?: string | undefined;
        variableValue?: string | undefined;
    } & {
        variableName?: string | undefined;
        variableValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "variableName" | "variableValue">, never>>(object: I): TextVariable;
};
export declare const AudioVariable: {
    $type: "speechkit.tts.v3.AudioVariable";
    encode(message: AudioVariable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioVariable;
    fromJSON(object: any): AudioVariable;
    toJSON(message: AudioVariable): unknown;
    fromPartial<I extends {
        variableName?: string | undefined;
        variableStartMs?: number | undefined;
        variableLengthMs?: number | undefined;
    } & {
        variableName?: string | undefined;
        variableStartMs?: number | undefined;
        variableLengthMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "variableName" | "variableStartMs" | "variableLengthMs">, never>>(object: I): AudioVariable;
};
export declare const UtteranceSynthesisResponse: {
    $type: "speechkit.tts.v3.UtteranceSynthesisResponse";
    encode(message: UtteranceSynthesisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UtteranceSynthesisResponse;
    fromJSON(object: any): UtteranceSynthesisResponse;
    toJSON(message: UtteranceSynthesisResponse): unknown;
    fromPartial<I extends {
        audioChunk?: {
            data?: Buffer | undefined;
        } | undefined;
    } & {
        audioChunk?: ({
            data?: Buffer | undefined;
        } & {
            data?: Buffer | undefined;
        } & Record<Exclude<keyof I["audioChunk"], "$type" | "data">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "audioChunk">, never>>(object: I): UtteranceSynthesisResponse;
};
export declare const AudioTemplate: {
    $type: "speechkit.tts.v3.AudioTemplate";
    encode(message: AudioTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioTemplate;
    fromJSON(object: any): AudioTemplate;
    toJSON(message: AudioTemplate): unknown;
    fromPartial<I extends {
        audio?: {
            content?: Buffer | undefined;
            audioSpec?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        textTemplate?: {
            textTemplate?: string | undefined;
            variables?: {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] | undefined;
        } | undefined;
        variables?: {
            variableName?: string | undefined;
            variableStartMs?: number | undefined;
            variableLengthMs?: number | undefined;
        }[] | undefined;
    } & {
        audio?: ({
            content?: Buffer | undefined;
            audioSpec?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
        } & {
            content?: Buffer | undefined;
            audioSpec?: ({
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } & {
                rawAudio?: ({
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                } & {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                } & Record<Exclude<keyof I["audio"]["audioSpec"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
                containerAudio?: ({
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & Record<Exclude<keyof I["audio"]["audioSpec"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
            } & Record<Exclude<keyof I["audio"]["audioSpec"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
        } & Record<Exclude<keyof I["audio"], "$type" | "content" | "audioSpec">, never>) | undefined;
        textTemplate?: ({
            textTemplate?: string | undefined;
            variables?: {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] | undefined;
        } & {
            textTemplate?: string | undefined;
            variables?: ({
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] & ({
                variableName?: string | undefined;
                variableValue?: string | undefined;
            } & {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            } & Record<Exclude<keyof I["textTemplate"]["variables"][number], "$type" | "variableName" | "variableValue">, never>)[] & Record<Exclude<keyof I["textTemplate"]["variables"], "$type" | keyof {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["textTemplate"], "$type" | "textTemplate" | "variables">, never>) | undefined;
        variables?: ({
            variableName?: string | undefined;
            variableStartMs?: number | undefined;
            variableLengthMs?: number | undefined;
        }[] & ({
            variableName?: string | undefined;
            variableStartMs?: number | undefined;
            variableLengthMs?: number | undefined;
        } & {
            variableName?: string | undefined;
            variableStartMs?: number | undefined;
            variableLengthMs?: number | undefined;
        } & Record<Exclude<keyof I["variables"][number], "$type" | "variableName" | "variableStartMs" | "variableLengthMs">, never>)[] & Record<Exclude<keyof I["variables"], "$type" | keyof {
            variableName?: string | undefined;
            variableStartMs?: number | undefined;
            variableLengthMs?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "audio" | "textTemplate" | "variables">, never>>(object: I): AudioTemplate;
};
export declare const AudioChunk: {
    $type: "speechkit.tts.v3.AudioChunk";
    encode(message: AudioChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioChunk;
    fromJSON(object: any): AudioChunk;
    toJSON(message: AudioChunk): unknown;
    fromPartial<I extends {
        data?: Buffer | undefined;
    } & {
        data?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "data">, never>>(object: I): AudioChunk;
};
export declare const TextTemplate: {
    $type: "speechkit.tts.v3.TextTemplate";
    encode(message: TextTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextTemplate;
    fromJSON(object: any): TextTemplate;
    toJSON(message: TextTemplate): unknown;
    fromPartial<I extends {
        textTemplate?: string | undefined;
        variables?: {
            variableName?: string | undefined;
            variableValue?: string | undefined;
        }[] | undefined;
    } & {
        textTemplate?: string | undefined;
        variables?: ({
            variableName?: string | undefined;
            variableValue?: string | undefined;
        }[] & ({
            variableName?: string | undefined;
            variableValue?: string | undefined;
        } & {
            variableName?: string | undefined;
            variableValue?: string | undefined;
        } & Record<Exclude<keyof I["variables"][number], "$type" | "variableName" | "variableValue">, never>)[] & Record<Exclude<keyof I["variables"], "$type" | keyof {
            variableName?: string | undefined;
            variableValue?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "textTemplate" | "variables">, never>>(object: I): TextTemplate;
};
export declare const Hints: {
    $type: "speechkit.tts.v3.Hints";
    encode(message: Hints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Hints;
    fromJSON(object: any): Hints;
    toJSON(message: Hints): unknown;
    fromPartial<I extends {
        voice?: string | undefined;
        audioTemplate?: {
            audio?: {
                content?: Buffer | undefined;
                audioSpec?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            textTemplate?: {
                textTemplate?: string | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                }[] | undefined;
            } | undefined;
            variables?: {
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            }[] | undefined;
        } | undefined;
        speed?: number | undefined;
        volume?: number | undefined;
        role?: string | undefined;
        pitchShift?: number | undefined;
    } & {
        voice?: string | undefined;
        audioTemplate?: ({
            audio?: {
                content?: Buffer | undefined;
                audioSpec?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            textTemplate?: {
                textTemplate?: string | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                }[] | undefined;
            } | undefined;
            variables?: {
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            }[] | undefined;
        } & {
            audio?: ({
                content?: Buffer | undefined;
                audioSpec?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
            } & {
                content?: Buffer | undefined;
                audioSpec?: ({
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } & {
                    rawAudio?: ({
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } & {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                    } & Record<Exclude<keyof I["audioTemplate"]["audio"]["audioSpec"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
                    containerAudio?: ({
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & Record<Exclude<keyof I["audioTemplate"]["audio"]["audioSpec"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
                } & Record<Exclude<keyof I["audioTemplate"]["audio"]["audioSpec"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
            } & Record<Exclude<keyof I["audioTemplate"]["audio"], "$type" | "content" | "audioSpec">, never>) | undefined;
            textTemplate?: ({
                textTemplate?: string | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                }[] | undefined;
            } & {
                textTemplate?: string | undefined;
                variables?: ({
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                }[] & ({
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                } & {
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                } & Record<Exclude<keyof I["audioTemplate"]["textTemplate"]["variables"][number], "$type" | "variableName" | "variableValue">, never>)[] & Record<Exclude<keyof I["audioTemplate"]["textTemplate"]["variables"], "$type" | keyof {
                    variableName?: string | undefined;
                    variableValue?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["audioTemplate"]["textTemplate"], "$type" | "textTemplate" | "variables">, never>) | undefined;
            variables?: ({
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            }[] & ({
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            } & {
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            } & Record<Exclude<keyof I["audioTemplate"]["variables"][number], "$type" | "variableName" | "variableStartMs" | "variableLengthMs">, never>)[] & Record<Exclude<keyof I["audioTemplate"]["variables"], "$type" | keyof {
                variableName?: string | undefined;
                variableStartMs?: number | undefined;
                variableLengthMs?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["audioTemplate"], "$type" | "audio" | "textTemplate" | "variables">, never>) | undefined;
        speed?: number | undefined;
        volume?: number | undefined;
        role?: string | undefined;
        pitchShift?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "voice" | "audioTemplate" | "speed" | "volume" | "role" | "pitchShift">, never>>(object: I): Hints;
};
export declare const UtteranceSynthesisRequest: {
    $type: "speechkit.tts.v3.UtteranceSynthesisRequest";
    encode(message: UtteranceSynthesisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UtteranceSynthesisRequest;
    fromJSON(object: any): UtteranceSynthesisRequest;
    toJSON(message: UtteranceSynthesisRequest): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        model?: string | undefined;
        textTemplate?: {
            textTemplate?: string | undefined;
            variables?: {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] | undefined;
        } | undefined;
        loudnessNormalizationType?: UtteranceSynthesisRequest_LoudnessNormalizationType | undefined;
        unsafeMode?: boolean | undefined;
        hints?: {
            voice?: string | undefined;
            audioTemplate?: {
                audio?: {
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                textTemplate?: {
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] | undefined;
            } | undefined;
            speed?: number | undefined;
            volume?: number | undefined;
            role?: string | undefined;
            pitchShift?: number | undefined;
        }[] | undefined;
        outputAudioSpec?: {
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } | undefined;
    } & {
        text?: string | undefined;
        model?: string | undefined;
        textTemplate?: ({
            textTemplate?: string | undefined;
            variables?: {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] | undefined;
        } & {
            textTemplate?: string | undefined;
            variables?: ({
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[] & ({
                variableName?: string | undefined;
                variableValue?: string | undefined;
            } & {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            } & Record<Exclude<keyof I["textTemplate"]["variables"][number], "$type" | "variableName" | "variableValue">, never>)[] & Record<Exclude<keyof I["textTemplate"]["variables"], "$type" | keyof {
                variableName?: string | undefined;
                variableValue?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["textTemplate"], "$type" | "textTemplate" | "variables">, never>) | undefined;
        loudnessNormalizationType?: UtteranceSynthesisRequest_LoudnessNormalizationType | undefined;
        unsafeMode?: boolean | undefined;
        hints?: ({
            voice?: string | undefined;
            audioTemplate?: {
                audio?: {
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                textTemplate?: {
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] | undefined;
            } | undefined;
            speed?: number | undefined;
            volume?: number | undefined;
            role?: string | undefined;
            pitchShift?: number | undefined;
        }[] & ({
            voice?: string | undefined;
            audioTemplate?: {
                audio?: {
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                textTemplate?: {
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] | undefined;
            } | undefined;
            speed?: number | undefined;
            volume?: number | undefined;
            role?: string | undefined;
            pitchShift?: number | undefined;
        } & {
            voice?: string | undefined;
            audioTemplate?: ({
                audio?: {
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                textTemplate?: {
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] | undefined;
            } & {
                audio?: ({
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    content?: Buffer | undefined;
                    audioSpec?: ({
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } & {
                        rawAudio?: ({
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } & {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["audio"]["audioSpec"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
                        containerAudio?: ({
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } & {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["audio"]["audioSpec"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
                    } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["audio"]["audioSpec"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
                } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["audio"], "$type" | "content" | "audioSpec">, never>) | undefined;
                textTemplate?: ({
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } & {
                    textTemplate?: string | undefined;
                    variables?: ({
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] & ({
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    } & {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["textTemplate"]["variables"][number], "$type" | "variableName" | "variableValue">, never>)[] & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["textTemplate"]["variables"], "$type" | keyof {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["textTemplate"], "$type" | "textTemplate" | "variables">, never>) | undefined;
                variables?: ({
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] & ({
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                } & {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                } & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["variables"][number], "$type" | "variableName" | "variableStartMs" | "variableLengthMs">, never>)[] & Record<Exclude<keyof I["hints"][number]["audioTemplate"]["variables"], "$type" | keyof {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hints"][number]["audioTemplate"], "$type" | "audio" | "textTemplate" | "variables">, never>) | undefined;
            speed?: number | undefined;
            volume?: number | undefined;
            role?: string | undefined;
            pitchShift?: number | undefined;
        } & Record<Exclude<keyof I["hints"][number], "$type" | "voice" | "audioTemplate" | "speed" | "volume" | "role" | "pitchShift">, never>)[] & Record<Exclude<keyof I["hints"], "$type" | keyof {
            voice?: string | undefined;
            audioTemplate?: {
                audio?: {
                    content?: Buffer | undefined;
                    audioSpec?: {
                        rawAudio?: {
                            audioEncoding?: RawAudio_AudioEncoding | undefined;
                            sampleRateHertz?: number | undefined;
                        } | undefined;
                        containerAudio?: {
                            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                textTemplate?: {
                    textTemplate?: string | undefined;
                    variables?: {
                        variableName?: string | undefined;
                        variableValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                variables?: {
                    variableName?: string | undefined;
                    variableStartMs?: number | undefined;
                    variableLengthMs?: number | undefined;
                }[] | undefined;
            } | undefined;
            speed?: number | undefined;
            volume?: number | undefined;
            role?: string | undefined;
            pitchShift?: number | undefined;
        }[]>, never>) | undefined;
        outputAudioSpec?: ({
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } & {
            rawAudio?: ({
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } & {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
            } & Record<Exclude<keyof I["outputAudioSpec"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz">, never>) | undefined;
            containerAudio?: ({
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & Record<Exclude<keyof I["outputAudioSpec"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
        } & Record<Exclude<keyof I["outputAudioSpec"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "model" | "textTemplate" | "loudnessNormalizationType" | "unsafeMode" | "hints" | "outputAudioSpec">, never>>(object: I): UtteranceSynthesisRequest;
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
