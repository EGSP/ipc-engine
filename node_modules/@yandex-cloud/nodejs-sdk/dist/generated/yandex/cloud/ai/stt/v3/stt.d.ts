/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "speechkit.stt.v3";
export declare enum CodeType {
    CODE_TYPE_UNSPECIFIED = 0,
    /** WORKING - all good */
    WORKING = 1,
    /** WARNING - for example, if speech is sent not in real time. or unknown context (and we've made fallback). */
    WARNING = 2,
    /** CLOSED - after session was closed. */
    CLOSED = 3,
    UNRECOGNIZED = -1
}
export declare function codeTypeFromJSON(object: any): CodeType;
export declare function codeTypeToJSON(object: CodeType): string;
/** Options */
export interface TextNormalizationOptions {
    $type: "speechkit.stt.v3.TextNormalizationOptions";
    textNormalization: TextNormalizationOptions_TextNormalization;
    /** Profanity filter (default: false). */
    profanityFilter: boolean;
    /** Rewrite text in literature style (default: false). */
    literatureText: boolean;
    /** Define phone formatting mode */
    phoneFormattingMode: TextNormalizationOptions_PhoneFormattingMode;
}
/** Normalization */
export declare enum TextNormalizationOptions_TextNormalization {
    TEXT_NORMALIZATION_UNSPECIFIED = 0,
    /** TEXT_NORMALIZATION_ENABLED - Enable normalization */
    TEXT_NORMALIZATION_ENABLED = 1,
    /** TEXT_NORMALIZATION_DISABLED - Disable normalization */
    TEXT_NORMALIZATION_DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function textNormalizationOptions_TextNormalizationFromJSON(object: any): TextNormalizationOptions_TextNormalization;
export declare function textNormalizationOptions_TextNormalizationToJSON(object: TextNormalizationOptions_TextNormalization): string;
export declare enum TextNormalizationOptions_PhoneFormattingMode {
    PHONE_FORMATTING_MODE_UNSPECIFIED = 0,
    /** PHONE_FORMATTING_MODE_DISABLED - Disable phone formatting */
    PHONE_FORMATTING_MODE_DISABLED = 1,
    UNRECOGNIZED = -1
}
export declare function textNormalizationOptions_PhoneFormattingModeFromJSON(object: any): TextNormalizationOptions_PhoneFormattingMode;
export declare function textNormalizationOptions_PhoneFormattingModeToJSON(object: TextNormalizationOptions_PhoneFormattingMode): string;
export interface DefaultEouClassifier {
    $type: "speechkit.stt.v3.DefaultEouClassifier";
    /** EOU sensitivity. Currently two levels, faster with more error and more conservative (our default). */
    type: DefaultEouClassifier_EouSensitivity;
    /** Hint for max pause between words. Our EOU detector could use this information to distinguish between end of utterance and slow speech (like one <long pause> two <long pause> three, etc). */
    maxPauseBetweenWordsHintMs: number;
}
export declare enum DefaultEouClassifier_EouSensitivity {
    EOU_SENSITIVITY_UNSPECIFIED = 0,
    DEFAULT = 1,
    HIGH = 2,
    UNRECOGNIZED = -1
}
export declare function defaultEouClassifier_EouSensitivityFromJSON(object: any): DefaultEouClassifier_EouSensitivity;
export declare function defaultEouClassifier_EouSensitivityToJSON(object: DefaultEouClassifier_EouSensitivity): string;
/** Use EOU provided by user */
export interface ExternalEouClassifier {
    $type: "speechkit.stt.v3.ExternalEouClassifier";
}
export interface EouClassifierOptions {
    $type: "speechkit.stt.v3.EouClassifierOptions";
    /** EOU classifier provided by SpeechKit. Default. */
    defaultClassifier?: DefaultEouClassifier | undefined;
    /** EOU is enforced by external messages from user. */
    externalClassifier?: ExternalEouClassifier | undefined;
}
export interface RecognitionClassifier {
    $type: "speechkit.stt.v3.RecognitionClassifier";
    /** Classifier name */
    classifier: string;
    /** Describes the types of responses to which the classification results will come */
    triggers: RecognitionClassifier_TriggerType[];
}
export declare enum RecognitionClassifier_TriggerType {
    /** TRIGGER_TYPE_UNSPECIFIED - Do not use */
    TRIGGER_TYPE_UNSPECIFIED = 0,
    /** ON_UTTERANCE - Apply classifier to utterance responses */
    ON_UTTERANCE = 1,
    /** ON_FINAL - Apply classifier to final responses */
    ON_FINAL = 2,
    UNRECOGNIZED = -1
}
export declare function recognitionClassifier_TriggerTypeFromJSON(object: any): RecognitionClassifier_TriggerType;
export declare function recognitionClassifier_TriggerTypeToJSON(object: RecognitionClassifier_TriggerType): string;
export interface RecognitionClassifierOptions {
    $type: "speechkit.stt.v3.RecognitionClassifierOptions";
    /** List of classifiers to use */
    classifiers: RecognitionClassifier[];
}
export interface SpeechAnalysisOptions {
    $type: "speechkit.stt.v3.SpeechAnalysisOptions";
    /** Analyse speech for every speaker */
    enableSpeakerAnalysis: boolean;
    /** Analyse conversation of two speakers */
    enableConversationAnalysis: boolean;
    /** Quantile levels in range (0, 1) for descriptive statistics */
    descriptiveStatisticsQuantiles: number[];
}
/** RAW Audio format spec (no container to infer type). Used in AudioFormat options. */
export interface RawAudio {
    $type: "speechkit.stt.v3.RawAudio";
    /** Type of audio encoding */
    audioEncoding: RawAudio_AudioEncoding;
    /** PCM sample rate */
    sampleRateHertz: number;
    /** PCM channel count. Currently only single channel audio is supported in real-time recognition. */
    audioChannelCount: number;
}
export declare enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    LINEAR16_PCM = 1,
    UNRECOGNIZED = -1
}
export declare function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding;
export declare function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string;
/** Audio with fixed type in container. Used in AudioFormat options. */
export interface ContainerAudio {
    $type: "speechkit.stt.v3.ContainerAudio";
    /** Type of audio container. */
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
/** Audio format options. */
export interface AudioFormatOptions {
    $type: "speechkit.stt.v3.AudioFormatOptions";
    /** Audio without container. */
    rawAudio?: RawAudio | undefined;
    /** Audio is wrapped in container. */
    containerAudio?: ContainerAudio | undefined;
}
/** Type of restriction for the list of languages expected in the incoming speech stream. */
export interface LanguageRestrictionOptions {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions";
    /** Language restriction type */
    restrictionType: LanguageRestrictionOptions_LanguageRestrictionType;
    /** The list of language codes to restrict recognition in the case of an auto model */
    languageCode: string[];
}
export declare enum LanguageRestrictionOptions_LanguageRestrictionType {
    LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED = 0,
    /** WHITELIST - The allowing list. The incoming audio can contain only the listed languages. */
    WHITELIST = 1,
    /** BLACKLIST - The forbidding list. The incoming audio cannot contain the listed languages. */
    BLACKLIST = 2,
    UNRECOGNIZED = -1
}
export declare function languageRestrictionOptions_LanguageRestrictionTypeFromJSON(object: any): LanguageRestrictionOptions_LanguageRestrictionType;
export declare function languageRestrictionOptions_LanguageRestrictionTypeToJSON(object: LanguageRestrictionOptions_LanguageRestrictionType): string;
export interface RecognitionModelOptions {
    $type: "speechkit.stt.v3.RecognitionModelOptions";
    /**
     * Sets the recognition model for the cloud version of SpeechKit. Possible values: 'general', 'general:rc', 'general:deprecated'.
     * The model is ignored for SpeechKit Hybrid.
     */
    model: string;
    /** Specified input audio. */
    audioFormat?: AudioFormatOptions;
    /** Text normalization options. */
    textNormalization?: TextNormalizationOptions;
    /** Possible languages in audio. */
    languageRestriction?: LanguageRestrictionOptions;
    /** How to deal with audio data (in real time, after all data is received, etc). Default is REAL_TIME. */
    audioProcessingType: RecognitionModelOptions_AudioProcessingType;
}
export declare enum RecognitionModelOptions_AudioProcessingType {
    AUDIO_PROCESSING_TYPE_UNSPECIFIED = 0,
    /** REAL_TIME - Process audio in mode optimized for real-time recognition, i.e. send partials and final responses as soon as possible */
    REAL_TIME = 1,
    /** FULL_DATA - Process audio after all data was received */
    FULL_DATA = 2,
    UNRECOGNIZED = -1
}
export declare function recognitionModelOptions_AudioProcessingTypeFromJSON(object: any): RecognitionModelOptions_AudioProcessingType;
export declare function recognitionModelOptions_AudioProcessingTypeToJSON(object: RecognitionModelOptions_AudioProcessingType): string;
export interface StreamingOptions {
    $type: "speechkit.stt.v3.StreamingOptions";
    /** Configuration for speech recognition model. */
    recognitionModel?: RecognitionModelOptions;
    /** Configuration for end of utterance detection model. */
    eouClassifier?: EouClassifierOptions;
    /** Configuration for classifiers over speech recognition. */
    recognitionClassifier?: RecognitionClassifierOptions;
    /** Configuration for speech analysis over speech recognition. */
    speechAnalysis?: SpeechAnalysisOptions;
}
/** Data chunk with audio. */
export interface AudioChunk {
    $type: "speechkit.stt.v3.AudioChunk";
    /** Bytes with audio data. */
    data: Buffer;
}
/** Data chunk with silence. */
export interface SilenceChunk {
    $type: "speechkit.stt.v3.SilenceChunk";
    /** Duration of silence chunk in ms. */
    durationMs: number;
}
/** Force EOU */
export interface Eou {
    $type: "speechkit.stt.v3.Eou";
}
/**
 * Streaming audio request
 * Events are control messages from user.
 * First message should be session options.
 * The next messages are audio data chunks or control messages.
 */
export interface StreamingRequest {
    $type: "speechkit.stt.v3.StreamingRequest";
    /** Session options. Should be the first message from user. */
    sessionOptions?: StreamingOptions | undefined;
    /** Chunk with audio data. */
    chunk?: AudioChunk | undefined;
    /** Chunk with silence. */
    silenceChunk?: SilenceChunk | undefined;
    /** Request to end current utterance. Works only with external EOU detector. */
    eou?: Eou | undefined;
}
export interface RecognizeFileRequest {
    $type: "speechkit.stt.v3.RecognizeFileRequest";
    /** Bytes with data */
    content: Buffer | undefined;
    /** S3 data url */
    uri: string | undefined;
    /** Configuration for speech recognition model. */
    recognitionModel?: RecognitionModelOptions;
    /** Configuration for classifiers over speech recognition. */
    recognitionClassifier?: RecognitionClassifierOptions;
    /** Configuration for speech analysis over speech recognition. */
    speechAnalysis?: SpeechAnalysisOptions;
}
/** Recognized word. */
export interface Word {
    $type: "speechkit.stt.v3.Word";
    /** Word text. */
    text: string;
    /** Estimation of word start time in ms. */
    startTimeMs: number;
    /** Estimation of word end time in ms. */
    endTimeMs: number;
}
/** Estimation of language and its probability. */
export interface LanguageEstimation {
    $type: "speechkit.stt.v3.LanguageEstimation";
    /** Language code in ISO 639-1 format. */
    languageCode: string;
    /** Estimation of language probability. */
    probability: number;
}
/** Recognition of specific time frame. */
export interface Alternative {
    $type: "speechkit.stt.v3.Alternative";
    /** Words in time frame. */
    words: Word[];
    /** Text in time frame. */
    text: string;
    /** Start of time frame. */
    startTimeMs: number;
    /** End of time frame. */
    endTimeMs: number;
    /** The hypothesis confidence. Currently is not used. */
    confidence: number;
    /** Distribution over possible languages. */
    languages: LanguageEstimation[];
}
/** Update information for external End of Utterance. */
export interface EouUpdate {
    $type: "speechkit.stt.v3.EouUpdate";
    /** EOU estimated time. */
    timeMs: number;
}
/** Update of hypothesis. */
export interface AlternativeUpdate {
    $type: "speechkit.stt.v3.AlternativeUpdate";
    /** List of hypothesis for timeframes. */
    alternatives: Alternative[];
    /** @deprecated */
    channelTag: string;
}
/** AudioCursors are state of ASR recognition stream. */
export interface AudioCursors {
    $type: "speechkit.stt.v3.AudioCursors";
    /** Amount of audio chunks server received. This cursor is moved after each audio chunk was received by server. */
    receivedDataMs: number;
    /** Input stream reset data. */
    resetTimeMs: number;
    /**
     * How much audio was processed. This time includes trimming silences as well. This cursor is moved after server received enough data
     * to update recognition results (includes silence as well).
     */
    partialTimeMs: number;
    /**
     * Time of last final. This cursor is moved when server decides that recognition from start of audio until final_time_ms will not change anymore
     * usually this even is followed by EOU detection (but this could change in future).
     */
    finalTimeMs: number;
    /** This is index of last final server send. Incremented after each new final. */
    finalIndex: number;
    /**
     * Estimated time of EOU. Cursor is updated after each new EOU is sent.
     * For external classifier this equals to received_data_ms at the moment EOU event arrives.
     * For internal classifier this is estimation of time. The time is not exact and has the same guarantees as word timings.
     */
    eouTimeMs: number;
}
/** Refinement for final hypo. For example, text normalization is refinement. */
export interface FinalRefinement {
    $type: "speechkit.stt.v3.FinalRefinement";
    /** Index of final for which server sends additional information. */
    finalIndex: number;
    /** Normalized text instead of raw one. */
    normalizedText?: AlternativeUpdate | undefined;
}
/** Status message */
export interface StatusCode {
    $type: "speechkit.stt.v3.StatusCode";
    /** Code type. */
    codeType: CodeType;
    /** Human readable message. */
    message: string;
}
/** Session identifier. */
export interface SessionUuid {
    $type: "speechkit.stt.v3.SessionUuid";
    /** Internal session identifier. */
    uuid: string;
    /** User session identifier. */
    userRequestId: string;
}
export interface PhraseHighlight {
    $type: "speechkit.stt.v3.PhraseHighlight";
    /** Text transcription of the highlighted audio segment */
    text: string;
    /** Start time of the highlighted audio segment */
    startTimeMs: number;
    /** End time of the highlighted audio segment */
    endTimeMs: number;
}
export interface RecognitionClassifierLabel {
    $type: "speechkit.stt.v3.RecognitionClassifierLabel";
    /** The label of the class predicted by the classifier */
    label: string;
    /** The prediction confidence */
    confidence: number;
}
export interface RecognitionClassifierResult {
    $type: "speechkit.stt.v3.RecognitionClassifierResult";
    /** Name of the triggered classifier */
    classifier: string;
    /** List of highlights, i.e. parts of phrase that determine the result of the classification */
    highlights: PhraseHighlight[];
    /** Classifier predictions */
    labels: RecognitionClassifierLabel[];
}
export interface RecognitionClassifierUpdate {
    $type: "speechkit.stt.v3.RecognitionClassifierUpdate";
    /** Response window type */
    windowType: RecognitionClassifierUpdate_WindowType;
    /** Start time of the audio segment used for classification */
    startTimeMs: number;
    /** End time of the audio segment used for classification */
    endTimeMs: number;
    /** Result for dictionary-based classifier */
    classifierResult?: RecognitionClassifierResult;
}
export declare enum RecognitionClassifierUpdate_WindowType {
    /** WINDOW_TYPE_UNSPECIFIED - Never used */
    WINDOW_TYPE_UNSPECIFIED = 0,
    /** LAST_UTTERANCE - The result of applying the classifier to the last utterance response */
    LAST_UTTERANCE = 1,
    /** LAST_FINAL - The result of applying the classifier to the last final response */
    LAST_FINAL = 2,
    UNRECOGNIZED = -1
}
export declare function recognitionClassifierUpdate_WindowTypeFromJSON(object: any): RecognitionClassifierUpdate_WindowType;
export declare function recognitionClassifierUpdate_WindowTypeToJSON(object: RecognitionClassifierUpdate_WindowType): string;
export interface DescriptiveStatistics {
    $type: "speechkit.stt.v3.DescriptiveStatistics";
    /** Minimum observed value */
    min: number;
    /** Maximum observed value */
    max: number;
    /** Estimated mean of distribution */
    mean: number;
    /** Estimated standard deviation of distribution */
    std: number;
    /** List of evaluated quantiles */
    quantiles: DescriptiveStatistics_Quantile[];
}
export interface DescriptiveStatistics_Quantile {
    $type: "speechkit.stt.v3.DescriptiveStatistics.Quantile";
    /** Quantile level in range (0, 1) */
    level: number;
    /** Quantile value */
    value: number;
}
export interface AudioSegmentBoundaries {
    $type: "speechkit.stt.v3.AudioSegmentBoundaries";
    /** Audio segment start time */
    startTimeMs: number;
    /** Audio segment end time */
    endTimeMs: number;
}
export interface SpeakerAnalysis {
    $type: "speechkit.stt.v3.SpeakerAnalysis";
    /** Speaker tag */
    speakerTag: string;
    /** Response window type */
    windowType: SpeakerAnalysis_WindowType;
    /** Audio segment boundaries */
    speechBoundaries?: AudioSegmentBoundaries;
    /** Total speech duration */
    totalSpeechMs: number;
    /** Speech ratio within audio segment */
    speechRatio: number;
    /** Total silence duration */
    totalSilenceMs: number;
    /** Silence ratio within audio segment */
    silenceRatio: number;
    /** Number of words in recognized speech */
    wordsCount: number;
    /** Number of letters in recognized speech */
    lettersCount: number;
    /** Descriptive statistics for words per second distribution */
    wordsPerSecond?: DescriptiveStatistics;
    /** Descriptive statistics for letters per second distribution */
    lettersPerSecond?: DescriptiveStatistics;
    /** Descriptive statistics for words per utterance distribution */
    wordsPerUtterance?: DescriptiveStatistics;
    /** Descriptive statistics for letters per utterance distribution */
    lettersPerUtterance?: DescriptiveStatistics;
    /** Number of utterances */
    utteranceCount: number;
    /** Descriptive statistics for utterance duration distribution */
    utteranceDurationEstimation?: DescriptiveStatistics;
}
export declare enum SpeakerAnalysis_WindowType {
    WINDOW_TYPE_UNSPECIFIED = 0,
    /** TOTAL - Stats for all received audio */
    TOTAL = 1,
    /** LAST_UTTERANCE - Stats for last utterance */
    LAST_UTTERANCE = 2,
    UNRECOGNIZED = -1
}
export declare function speakerAnalysis_WindowTypeFromJSON(object: any): SpeakerAnalysis_WindowType;
export declare function speakerAnalysis_WindowTypeToJSON(object: SpeakerAnalysis_WindowType): string;
export interface ConversationAnalysis {
    $type: "speechkit.stt.v3.ConversationAnalysis";
    /** Audio segment boundaries */
    conversationBoundaries?: AudioSegmentBoundaries;
    /** Total simultaneous silence duration */
    totalSimultaneousSilenceDurationMs: number;
    /** Simultaneous silence ratio within audio segment */
    totalSimultaneousSilenceRatio: number;
    /** Descriptive statistics for simultaneous silence duration distribution */
    simultaneousSilenceDurationEstimation?: DescriptiveStatistics;
    /** Total simultaneous speech duration */
    totalSimultaneousSpeechDurationMs: number;
    /** Simultaneous speech ratio within audio segment */
    totalSimultaneousSpeechRatio: number;
    /** Descriptive statistics for simultaneous speech duration distribution */
    simultaneousSpeechDurationEstimation?: DescriptiveStatistics;
    /** Interrupts description for every speaker */
    speakerInterrupts: ConversationAnalysis_InterruptsEvaluation[];
}
export interface ConversationAnalysis_InterruptsEvaluation {
    $type: "speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation";
    /** Speaker tag */
    speakerTag: string;
    /** Number of interrupts made by the speaker */
    interruptsCount: number;
    /** Total duration of all interrupts */
    interruptsDurationMs: number;
    /** Boundaries for every interrupt */
    interrupts: AudioSegmentBoundaries[];
}
/**
 * Responses from server.
 * Each response contains session uuid
 * AudioCursors
 * plus specific event
 */
export interface StreamingResponse {
    $type: "speechkit.stt.v3.StreamingResponse";
    /** Session identifier */
    sessionUuid?: SessionUuid;
    /** Progress bar for stream session recognition: how many data we obtained; final and partial times; etc. */
    audioCursors?: AudioCursors;
    /** Wall clock on server side. This is time when server wrote results to stream */
    responseWallTimeMs: number;
    /**
     * Partial results, server will send them regularly after enough audio data was received from user. This are current text estimation
     * from final_time_ms to partial_time_ms. Could change after new data will arrive.
     */
    partial?: AlternativeUpdate | undefined;
    /** Final results, the recognition is now fixed until final_time_ms. For now, final is sent only if the EOU event was triggered. This could be change in future releases. */
    final?: AlternativeUpdate | undefined;
    /**
     * After EOU classifier, send the message with final, send the EouUpdate with time of EOU
     * before eou_update we send final with the same time. there could be several finals before eou update.
     */
    eouUpdate?: EouUpdate | undefined;
    /**
     * For each final, if normalization is enabled, sent the normalized text (or some other advanced post-processing).
     * Final normalization will introduce additional latency.
     */
    finalRefinement?: FinalRefinement | undefined;
    /** Status messages, send by server with fixed interval (keep-alive). */
    statusCode?: StatusCode | undefined;
    /** Result of the triggered classifier */
    classifierUpdate?: RecognitionClassifierUpdate | undefined;
    /** Speech statistics for every speaker */
    speakerAnalysis?: SpeakerAnalysis | undefined;
    /** Conversation statistics */
    conversationAnalysis?: ConversationAnalysis | undefined;
    /** Tag for distinguish audio channels. */
    channelTag: string;
}
export declare const TextNormalizationOptions: {
    $type: "speechkit.stt.v3.TextNormalizationOptions";
    encode(message: TextNormalizationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextNormalizationOptions;
    fromJSON(object: any): TextNormalizationOptions;
    toJSON(message: TextNormalizationOptions): unknown;
    fromPartial<I extends {
        profanityFilter?: boolean | undefined;
        literatureText?: boolean | undefined;
        textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
        phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
    } & {
        profanityFilter?: boolean | undefined;
        literatureText?: boolean | undefined;
        textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
        phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
    } & Record<Exclude<keyof I, "$type" | "profanityFilter" | "literatureText" | "textNormalization" | "phoneFormattingMode">, never>>(object: I): TextNormalizationOptions;
};
export declare const DefaultEouClassifier: {
    $type: "speechkit.stt.v3.DefaultEouClassifier";
    encode(message: DefaultEouClassifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DefaultEouClassifier;
    fromJSON(object: any): DefaultEouClassifier;
    toJSON(message: DefaultEouClassifier): unknown;
    fromPartial<I extends {
        type?: DefaultEouClassifier_EouSensitivity | undefined;
        maxPauseBetweenWordsHintMs?: number | undefined;
    } & {
        type?: DefaultEouClassifier_EouSensitivity | undefined;
        maxPauseBetweenWordsHintMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>>(object: I): DefaultEouClassifier;
};
export declare const ExternalEouClassifier: {
    $type: "speechkit.stt.v3.ExternalEouClassifier";
    encode(_: ExternalEouClassifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalEouClassifier;
    fromJSON(_: any): ExternalEouClassifier;
    toJSON(_: ExternalEouClassifier): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ExternalEouClassifier;
};
export declare const EouClassifierOptions: {
    $type: "speechkit.stt.v3.EouClassifierOptions";
    encode(message: EouClassifierOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EouClassifierOptions;
    fromJSON(object: any): EouClassifierOptions;
    toJSON(message: EouClassifierOptions): unknown;
    fromPartial<I extends {
        defaultClassifier?: {
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } | undefined;
        externalClassifier?: {} | undefined;
    } & {
        defaultClassifier?: ({
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } & {
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } & Record<Exclude<keyof I["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
        externalClassifier?: ({} & {} & Record<Exclude<keyof I["externalClassifier"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultClassifier" | "externalClassifier">, never>>(object: I): EouClassifierOptions;
};
export declare const RecognitionClassifier: {
    $type: "speechkit.stt.v3.RecognitionClassifier";
    encode(message: RecognitionClassifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionClassifier;
    fromJSON(object: any): RecognitionClassifier;
    toJSON(message: RecognitionClassifier): unknown;
    fromPartial<I extends {
        triggers?: RecognitionClassifier_TriggerType[] | undefined;
        classifier?: string | undefined;
    } & {
        triggers?: (RecognitionClassifier_TriggerType[] & RecognitionClassifier_TriggerType[] & Record<Exclude<keyof I["triggers"], "$type" | keyof RecognitionClassifier_TriggerType[]>, never>) | undefined;
        classifier?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggers" | "classifier">, never>>(object: I): RecognitionClassifier;
};
export declare const RecognitionClassifierOptions: {
    $type: "speechkit.stt.v3.RecognitionClassifierOptions";
    encode(message: RecognitionClassifierOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionClassifierOptions;
    fromJSON(object: any): RecognitionClassifierOptions;
    toJSON(message: RecognitionClassifierOptions): unknown;
    fromPartial<I extends {
        classifiers?: {
            triggers?: RecognitionClassifier_TriggerType[] | undefined;
            classifier?: string | undefined;
        }[] | undefined;
    } & {
        classifiers?: ({
            triggers?: RecognitionClassifier_TriggerType[] | undefined;
            classifier?: string | undefined;
        }[] & ({
            triggers?: RecognitionClassifier_TriggerType[] | undefined;
            classifier?: string | undefined;
        } & {
            triggers?: (RecognitionClassifier_TriggerType[] & RecognitionClassifier_TriggerType[] & Record<Exclude<keyof I["classifiers"][number]["triggers"], "$type" | keyof RecognitionClassifier_TriggerType[]>, never>) | undefined;
            classifier?: string | undefined;
        } & Record<Exclude<keyof I["classifiers"][number], "$type" | "triggers" | "classifier">, never>)[] & Record<Exclude<keyof I["classifiers"], "$type" | keyof {
            triggers?: RecognitionClassifier_TriggerType[] | undefined;
            classifier?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "classifiers">, never>>(object: I): RecognitionClassifierOptions;
};
export declare const SpeechAnalysisOptions: {
    $type: "speechkit.stt.v3.SpeechAnalysisOptions";
    encode(message: SpeechAnalysisOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechAnalysisOptions;
    fromJSON(object: any): SpeechAnalysisOptions;
    toJSON(message: SpeechAnalysisOptions): unknown;
    fromPartial<I extends {
        enableSpeakerAnalysis?: boolean | undefined;
        enableConversationAnalysis?: boolean | undefined;
        descriptiveStatisticsQuantiles?: number[] | undefined;
    } & {
        enableSpeakerAnalysis?: boolean | undefined;
        enableConversationAnalysis?: boolean | undefined;
        descriptiveStatisticsQuantiles?: (number[] & number[] & Record<Exclude<keyof I["descriptiveStatisticsQuantiles"], "$type" | keyof number[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "enableSpeakerAnalysis" | "enableConversationAnalysis" | "descriptiveStatisticsQuantiles">, never>>(object: I): SpeechAnalysisOptions;
};
export declare const RawAudio: {
    $type: "speechkit.stt.v3.RawAudio";
    encode(message: RawAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RawAudio;
    fromJSON(object: any): RawAudio;
    toJSON(message: RawAudio): unknown;
    fromPartial<I extends {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        audioChannelCount?: number | undefined;
    } & {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        audioChannelCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>>(object: I): RawAudio;
};
export declare const ContainerAudio: {
    $type: "speechkit.stt.v3.ContainerAudio";
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
export declare const AudioFormatOptions: {
    $type: "speechkit.stt.v3.AudioFormatOptions";
    encode(message: AudioFormatOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioFormatOptions;
    fromJSON(object: any): AudioFormatOptions;
    toJSON(message: AudioFormatOptions): unknown;
    fromPartial<I extends {
        rawAudio?: {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } | undefined;
        containerAudio?: {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } | undefined;
    } & {
        rawAudio?: ({
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } & {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } & Record<Exclude<keyof I["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
        containerAudio?: ({
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & Record<Exclude<keyof I["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "rawAudio" | "containerAudio">, never>>(object: I): AudioFormatOptions;
};
export declare const LanguageRestrictionOptions: {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions";
    encode(message: LanguageRestrictionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LanguageRestrictionOptions;
    fromJSON(object: any): LanguageRestrictionOptions;
    toJSON(message: LanguageRestrictionOptions): unknown;
    fromPartial<I extends {
        languageCode?: string[] | undefined;
        restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
    } & {
        languageCode?: (string[] & string[] & Record<Exclude<keyof I["languageCode"], "$type" | keyof string[]>, never>) | undefined;
        restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode" | "restrictionType">, never>>(object: I): LanguageRestrictionOptions;
};
export declare const RecognitionModelOptions: {
    $type: "speechkit.stt.v3.RecognitionModelOptions";
    encode(message: RecognitionModelOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionModelOptions;
    fromJSON(object: any): RecognitionModelOptions;
    toJSON(message: RecognitionModelOptions): unknown;
    fromPartial<I extends {
        model?: string | undefined;
        textNormalization?: {
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
        } | undefined;
        audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
        audioFormat?: {
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } | undefined;
        languageRestriction?: {
            languageCode?: string[] | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } | undefined;
    } & {
        model?: string | undefined;
        textNormalization?: ({
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
        } & {
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
        } & Record<Exclude<keyof I["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization" | "phoneFormattingMode">, never>) | undefined;
        audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
        audioFormat?: ({
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } & {
            rawAudio?: ({
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } & {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } & Record<Exclude<keyof I["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
            containerAudio?: ({
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & Record<Exclude<keyof I["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
        } & Record<Exclude<keyof I["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
        languageRestriction?: ({
            languageCode?: string[] | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } & {
            languageCode?: (string[] & string[] & Record<Exclude<keyof I["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } & Record<Exclude<keyof I["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>>(object: I): RecognitionModelOptions;
};
export declare const StreamingOptions: {
    $type: "speechkit.stt.v3.StreamingOptions";
    encode(message: StreamingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingOptions;
    fromJSON(object: any): StreamingOptions;
    toJSON(message: StreamingOptions): unknown;
    fromPartial<I extends {
        recognitionModel?: {
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } | undefined;
        eouClassifier?: {
            defaultClassifier?: {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } | undefined;
            externalClassifier?: {} | undefined;
        } | undefined;
        recognitionClassifier?: {
            classifiers?: {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] | undefined;
        } | undefined;
        speechAnalysis?: {
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: number[] | undefined;
        } | undefined;
    } & {
        recognitionModel?: ({
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } & {
            model?: string | undefined;
            textNormalization?: ({
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } & {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization" | "phoneFormattingMode">, never>) | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: ({
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } & {
                rawAudio?: ({
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
                containerAudio?: ({
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
            languageRestriction?: ({
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & {
                languageCode?: (string[] & string[] & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
        } & Record<Exclude<keyof I["recognitionModel"], "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>) | undefined;
        eouClassifier?: ({
            defaultClassifier?: {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } | undefined;
            externalClassifier?: {} | undefined;
        } & {
            defaultClassifier?: ({
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } & {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } & Record<Exclude<keyof I["eouClassifier"]["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
            externalClassifier?: ({} & {} & Record<Exclude<keyof I["eouClassifier"]["externalClassifier"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["eouClassifier"], "$type" | "defaultClassifier" | "externalClassifier">, never>) | undefined;
        recognitionClassifier?: ({
            classifiers?: {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] | undefined;
        } & {
            classifiers?: ({
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] & ({
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            } & {
                triggers?: (RecognitionClassifier_TriggerType[] & RecognitionClassifier_TriggerType[] & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"][number]["triggers"], "$type" | keyof RecognitionClassifier_TriggerType[]>, never>) | undefined;
                classifier?: string | undefined;
            } & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"][number], "$type" | "triggers" | "classifier">, never>)[] & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"], "$type" | keyof {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["recognitionClassifier"], "$type" | "classifiers">, never>) | undefined;
        speechAnalysis?: ({
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: number[] | undefined;
        } & {
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: (number[] & number[] & Record<Exclude<keyof I["speechAnalysis"]["descriptiveStatisticsQuantiles"], "$type" | keyof number[]>, never>) | undefined;
        } & Record<Exclude<keyof I["speechAnalysis"], "$type" | "enableSpeakerAnalysis" | "enableConversationAnalysis" | "descriptiveStatisticsQuantiles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "recognitionModel" | "eouClassifier" | "recognitionClassifier" | "speechAnalysis">, never>>(object: I): StreamingOptions;
};
export declare const AudioChunk: {
    $type: "speechkit.stt.v3.AudioChunk";
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
export declare const SilenceChunk: {
    $type: "speechkit.stt.v3.SilenceChunk";
    encode(message: SilenceChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SilenceChunk;
    fromJSON(object: any): SilenceChunk;
    toJSON(message: SilenceChunk): unknown;
    fromPartial<I extends {
        durationMs?: number | undefined;
    } & {
        durationMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "durationMs">, never>>(object: I): SilenceChunk;
};
export declare const Eou: {
    $type: "speechkit.stt.v3.Eou";
    encode(_: Eou, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Eou;
    fromJSON(_: any): Eou;
    toJSON(_: Eou): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): Eou;
};
export declare const StreamingRequest: {
    $type: "speechkit.stt.v3.StreamingRequest";
    encode(message: StreamingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRequest;
    fromJSON(object: any): StreamingRequest;
    toJSON(message: StreamingRequest): unknown;
    fromPartial<I extends {
        chunk?: {
            data?: Buffer | undefined;
        } | undefined;
        sessionOptions?: {
            recognitionModel?: {
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                    phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } | undefined;
            eouClassifier?: {
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } | undefined;
            recognitionClassifier?: {
                classifiers?: {
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                }[] | undefined;
            } | undefined;
            speechAnalysis?: {
                enableSpeakerAnalysis?: boolean | undefined;
                enableConversationAnalysis?: boolean | undefined;
                descriptiveStatisticsQuantiles?: number[] | undefined;
            } | undefined;
        } | undefined;
        silenceChunk?: {
            durationMs?: number | undefined;
        } | undefined;
        eou?: {} | undefined;
    } & {
        chunk?: ({
            data?: Buffer | undefined;
        } & {
            data?: Buffer | undefined;
        } & Record<Exclude<keyof I["chunk"], "$type" | "data">, never>) | undefined;
        sessionOptions?: ({
            recognitionModel?: {
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                    phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } | undefined;
            eouClassifier?: {
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } | undefined;
            recognitionClassifier?: {
                classifiers?: {
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                }[] | undefined;
            } | undefined;
            speechAnalysis?: {
                enableSpeakerAnalysis?: boolean | undefined;
                enableConversationAnalysis?: boolean | undefined;
                descriptiveStatisticsQuantiles?: number[] | undefined;
            } | undefined;
        } & {
            recognitionModel?: ({
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                    phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } & {
                model?: string | undefined;
                textNormalization?: ({
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                    phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
                } & {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                    phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization" | "phoneFormattingMode">, never>) | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: ({
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } & {
                    rawAudio?: ({
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } & {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
                    containerAudio?: ({
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
                languageRestriction?: ({
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } & {
                    languageCode?: (string[] & string[] & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"], "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>) | undefined;
            eouClassifier?: ({
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } & {
                defaultClassifier?: ({
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } & {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"]["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
                externalClassifier?: ({} & {} & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"]["externalClassifier"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"], "$type" | "defaultClassifier" | "externalClassifier">, never>) | undefined;
            recognitionClassifier?: ({
                classifiers?: {
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                }[] | undefined;
            } & {
                classifiers?: ({
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                }[] & ({
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                } & {
                    triggers?: (RecognitionClassifier_TriggerType[] & RecognitionClassifier_TriggerType[] & Record<Exclude<keyof I["sessionOptions"]["recognitionClassifier"]["classifiers"][number]["triggers"], "$type" | keyof RecognitionClassifier_TriggerType[]>, never>) | undefined;
                    classifier?: string | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionClassifier"]["classifiers"][number], "$type" | "triggers" | "classifier">, never>)[] & Record<Exclude<keyof I["sessionOptions"]["recognitionClassifier"]["classifiers"], "$type" | keyof {
                    triggers?: RecognitionClassifier_TriggerType[] | undefined;
                    classifier?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["recognitionClassifier"], "$type" | "classifiers">, never>) | undefined;
            speechAnalysis?: ({
                enableSpeakerAnalysis?: boolean | undefined;
                enableConversationAnalysis?: boolean | undefined;
                descriptiveStatisticsQuantiles?: number[] | undefined;
            } & {
                enableSpeakerAnalysis?: boolean | undefined;
                enableConversationAnalysis?: boolean | undefined;
                descriptiveStatisticsQuantiles?: (number[] & number[] & Record<Exclude<keyof I["sessionOptions"]["speechAnalysis"]["descriptiveStatisticsQuantiles"], "$type" | keyof number[]>, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["speechAnalysis"], "$type" | "enableSpeakerAnalysis" | "enableConversationAnalysis" | "descriptiveStatisticsQuantiles">, never>) | undefined;
        } & Record<Exclude<keyof I["sessionOptions"], "$type" | "recognitionModel" | "eouClassifier" | "recognitionClassifier" | "speechAnalysis">, never>) | undefined;
        silenceChunk?: ({
            durationMs?: number | undefined;
        } & {
            durationMs?: number | undefined;
        } & Record<Exclude<keyof I["silenceChunk"], "$type" | "durationMs">, never>) | undefined;
        eou?: ({} & {} & Record<Exclude<keyof I["eou"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "chunk" | "sessionOptions" | "silenceChunk" | "eou">, never>>(object: I): StreamingRequest;
};
export declare const RecognizeFileRequest: {
    $type: "speechkit.stt.v3.RecognizeFileRequest";
    encode(message: RecognizeFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognizeFileRequest;
    fromJSON(object: any): RecognizeFileRequest;
    toJSON(message: RecognizeFileRequest): unknown;
    fromPartial<I extends {
        content?: Buffer | undefined;
        uri?: string | undefined;
        recognitionModel?: {
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } | undefined;
        recognitionClassifier?: {
            classifiers?: {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] | undefined;
        } | undefined;
        speechAnalysis?: {
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: number[] | undefined;
        } | undefined;
    } & {
        content?: Buffer | undefined;
        uri?: string | undefined;
        recognitionModel?: ({
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } & {
            model?: string | undefined;
            textNormalization?: ({
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } & {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                phoneFormattingMode?: TextNormalizationOptions_PhoneFormattingMode | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization" | "phoneFormattingMode">, never>) | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: ({
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } & {
                rawAudio?: ({
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
                containerAudio?: ({
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
            languageRestriction?: ({
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & {
                languageCode?: (string[] & string[] & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
        } & Record<Exclude<keyof I["recognitionModel"], "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>) | undefined;
        recognitionClassifier?: ({
            classifiers?: {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] | undefined;
        } & {
            classifiers?: ({
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[] & ({
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            } & {
                triggers?: (RecognitionClassifier_TriggerType[] & RecognitionClassifier_TriggerType[] & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"][number]["triggers"], "$type" | keyof RecognitionClassifier_TriggerType[]>, never>) | undefined;
                classifier?: string | undefined;
            } & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"][number], "$type" | "triggers" | "classifier">, never>)[] & Record<Exclude<keyof I["recognitionClassifier"]["classifiers"], "$type" | keyof {
                triggers?: RecognitionClassifier_TriggerType[] | undefined;
                classifier?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["recognitionClassifier"], "$type" | "classifiers">, never>) | undefined;
        speechAnalysis?: ({
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: number[] | undefined;
        } & {
            enableSpeakerAnalysis?: boolean | undefined;
            enableConversationAnalysis?: boolean | undefined;
            descriptiveStatisticsQuantiles?: (number[] & number[] & Record<Exclude<keyof I["speechAnalysis"]["descriptiveStatisticsQuantiles"], "$type" | keyof number[]>, never>) | undefined;
        } & Record<Exclude<keyof I["speechAnalysis"], "$type" | "enableSpeakerAnalysis" | "enableConversationAnalysis" | "descriptiveStatisticsQuantiles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "uri" | "recognitionModel" | "recognitionClassifier" | "speechAnalysis">, never>>(object: I): RecognizeFileRequest;
};
export declare const Word: {
    $type: "speechkit.stt.v3.Word";
    encode(message: Word, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word;
    fromJSON(object: any): Word;
    toJSON(message: Word): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "startTimeMs" | "endTimeMs">, never>>(object: I): Word;
};
export declare const LanguageEstimation: {
    $type: "speechkit.stt.v3.LanguageEstimation";
    encode(message: LanguageEstimation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LanguageEstimation;
    fromJSON(object: any): LanguageEstimation;
    toJSON(message: LanguageEstimation): unknown;
    fromPartial<I extends {
        languageCode?: string | undefined;
        probability?: number | undefined;
    } & {
        languageCode?: string | undefined;
        probability?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode" | "probability">, never>>(object: I): LanguageEstimation;
};
export declare const Alternative: {
    $type: "speechkit.stt.v3.Alternative";
    encode(message: Alternative, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Alternative;
    fromJSON(object: any): Alternative;
    toJSON(message: Alternative): unknown;
    fromPartial<I extends {
        languages?: {
            languageCode?: string | undefined;
            probability?: number | undefined;
        }[] | undefined;
        text?: string | undefined;
        words?: {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
        confidence?: number | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        languages?: ({
            languageCode?: string | undefined;
            probability?: number | undefined;
        }[] & ({
            languageCode?: string | undefined;
            probability?: number | undefined;
        } & {
            languageCode?: string | undefined;
            probability?: number | undefined;
        } & Record<Exclude<keyof I["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["languages"], "$type" | keyof {
            languageCode?: string | undefined;
            probability?: number | undefined;
        }[]>, never>) | undefined;
        text?: string | undefined;
        words?: ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["words"], "$type" | keyof {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
        confidence?: number | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>>(object: I): Alternative;
};
export declare const EouUpdate: {
    $type: "speechkit.stt.v3.EouUpdate";
    encode(message: EouUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EouUpdate;
    fromJSON(object: any): EouUpdate;
    toJSON(message: EouUpdate): unknown;
    fromPartial<I extends {
        timeMs?: number | undefined;
    } & {
        timeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timeMs">, never>>(object: I): EouUpdate;
};
export declare const AlternativeUpdate: {
    $type: "speechkit.stt.v3.AlternativeUpdate";
    encode(message: AlternativeUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlternativeUpdate;
    fromJSON(object: any): AlternativeUpdate;
    toJSON(message: AlternativeUpdate): unknown;
    fromPartial<I extends {
        alternatives?: {
            languages?: {
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
        channelTag?: string | undefined;
    } & {
        alternatives?: ({
            languages?: {
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            languages?: {
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            languages?: ({
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[] & ({
                languageCode?: string | undefined;
                probability?: number | undefined;
            } & {
                languageCode?: string | undefined;
                probability?: number | undefined;
            } & Record<Exclude<keyof I["alternatives"][number]["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["alternatives"][number]["languages"], "$type" | keyof {
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[]>, never>) | undefined;
            text?: string | undefined;
            words?: ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["alternatives"][number]["words"], "$type" | keyof {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            confidence?: number | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["alternatives"][number], "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["alternatives"], "$type" | keyof {
            languages?: {
                languageCode?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
            text?: string | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            confidence?: number | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
        channelTag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "alternatives" | "channelTag">, never>>(object: I): AlternativeUpdate;
};
export declare const AudioCursors: {
    $type: "speechkit.stt.v3.AudioCursors";
    encode(message: AudioCursors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioCursors;
    fromJSON(object: any): AudioCursors;
    toJSON(message: AudioCursors): unknown;
    fromPartial<I extends {
        receivedDataMs?: number | undefined;
        resetTimeMs?: number | undefined;
        partialTimeMs?: number | undefined;
        finalTimeMs?: number | undefined;
        finalIndex?: number | undefined;
        eouTimeMs?: number | undefined;
    } & {
        receivedDataMs?: number | undefined;
        resetTimeMs?: number | undefined;
        partialTimeMs?: number | undefined;
        finalTimeMs?: number | undefined;
        finalIndex?: number | undefined;
        eouTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "receivedDataMs" | "resetTimeMs" | "partialTimeMs" | "finalTimeMs" | "finalIndex" | "eouTimeMs">, never>>(object: I): AudioCursors;
};
export declare const FinalRefinement: {
    $type: "speechkit.stt.v3.FinalRefinement";
    encode(message: FinalRefinement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FinalRefinement;
    fromJSON(object: any): FinalRefinement;
    toJSON(message: FinalRefinement): unknown;
    fromPartial<I extends {
        finalIndex?: number | undefined;
        normalizedText?: {
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
    } & {
        finalIndex?: number | undefined;
        normalizedText?: ({
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                languages?: ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] & ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["languages"], "$type" | keyof {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[]>, never>) | undefined;
                text?: string | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["normalizedText"]["alternatives"][number], "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["normalizedText"]["alternatives"], "$type" | keyof {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["normalizedText"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "finalIndex" | "normalizedText">, never>>(object: I): FinalRefinement;
};
export declare const StatusCode: {
    $type: "speechkit.stt.v3.StatusCode";
    encode(message: StatusCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StatusCode;
    fromJSON(object: any): StatusCode;
    toJSON(message: StatusCode): unknown;
    fromPartial<I extends {
        message?: string | undefined;
        codeType?: CodeType | undefined;
    } & {
        message?: string | undefined;
        codeType?: CodeType | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "codeType">, never>>(object: I): StatusCode;
};
export declare const SessionUuid: {
    $type: "speechkit.stt.v3.SessionUuid";
    encode(message: SessionUuid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SessionUuid;
    fromJSON(object: any): SessionUuid;
    toJSON(message: SessionUuid): unknown;
    fromPartial<I extends {
        uuid?: string | undefined;
        userRequestId?: string | undefined;
    } & {
        uuid?: string | undefined;
        userRequestId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "uuid" | "userRequestId">, never>>(object: I): SessionUuid;
};
export declare const PhraseHighlight: {
    $type: "speechkit.stt.v3.PhraseHighlight";
    encode(message: PhraseHighlight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PhraseHighlight;
    fromJSON(object: any): PhraseHighlight;
    toJSON(message: PhraseHighlight): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "startTimeMs" | "endTimeMs">, never>>(object: I): PhraseHighlight;
};
export declare const RecognitionClassifierLabel: {
    $type: "speechkit.stt.v3.RecognitionClassifierLabel";
    encode(message: RecognitionClassifierLabel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionClassifierLabel;
    fromJSON(object: any): RecognitionClassifierLabel;
    toJSON(message: RecognitionClassifierLabel): unknown;
    fromPartial<I extends {
        confidence?: number | undefined;
        label?: string | undefined;
    } & {
        confidence?: number | undefined;
        label?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "confidence" | "label">, never>>(object: I): RecognitionClassifierLabel;
};
export declare const RecognitionClassifierResult: {
    $type: "speechkit.stt.v3.RecognitionClassifierResult";
    encode(message: RecognitionClassifierResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionClassifierResult;
    fromJSON(object: any): RecognitionClassifierResult;
    toJSON(message: RecognitionClassifierResult): unknown;
    fromPartial<I extends {
        labels?: {
            confidence?: number | undefined;
            label?: string | undefined;
        }[] | undefined;
        classifier?: string | undefined;
        highlights?: {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
    } & {
        labels?: ({
            confidence?: number | undefined;
            label?: string | undefined;
        }[] & ({
            confidence?: number | undefined;
            label?: string | undefined;
        } & {
            confidence?: number | undefined;
            label?: string | undefined;
        } & Record<Exclude<keyof I["labels"][number], "$type" | "confidence" | "label">, never>)[] & Record<Exclude<keyof I["labels"], "$type" | keyof {
            confidence?: number | undefined;
            label?: string | undefined;
        }[]>, never>) | undefined;
        classifier?: string | undefined;
        highlights?: ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["highlights"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["highlights"], "$type" | keyof {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "labels" | "classifier" | "highlights">, never>>(object: I): RecognitionClassifierResult;
};
export declare const RecognitionClassifierUpdate: {
    $type: "speechkit.stt.v3.RecognitionClassifierUpdate";
    encode(message: RecognitionClassifierUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionClassifierUpdate;
    fromJSON(object: any): RecognitionClassifierUpdate;
    toJSON(message: RecognitionClassifierUpdate): unknown;
    fromPartial<I extends {
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
        windowType?: RecognitionClassifierUpdate_WindowType | undefined;
        classifierResult?: {
            labels?: {
                confidence?: number | undefined;
                label?: string | undefined;
            }[] | undefined;
            classifier?: string | undefined;
            highlights?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
        windowType?: RecognitionClassifierUpdate_WindowType | undefined;
        classifierResult?: ({
            labels?: {
                confidence?: number | undefined;
                label?: string | undefined;
            }[] | undefined;
            classifier?: string | undefined;
            highlights?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        } & {
            labels?: ({
                confidence?: number | undefined;
                label?: string | undefined;
            }[] & ({
                confidence?: number | undefined;
                label?: string | undefined;
            } & {
                confidence?: number | undefined;
                label?: string | undefined;
            } & Record<Exclude<keyof I["classifierResult"]["labels"][number], "$type" | "confidence" | "label">, never>)[] & Record<Exclude<keyof I["classifierResult"]["labels"], "$type" | keyof {
                confidence?: number | undefined;
                label?: string | undefined;
            }[]>, never>) | undefined;
            classifier?: string | undefined;
            highlights?: ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["classifierResult"]["highlights"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["classifierResult"]["highlights"], "$type" | keyof {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["classifierResult"], "$type" | "labels" | "classifier" | "highlights">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "startTimeMs" | "endTimeMs" | "windowType" | "classifierResult">, never>>(object: I): RecognitionClassifierUpdate;
};
export declare const DescriptiveStatistics: {
    $type: "speechkit.stt.v3.DescriptiveStatistics";
    encode(message: DescriptiveStatistics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DescriptiveStatistics;
    fromJSON(object: any): DescriptiveStatistics;
    toJSON(message: DescriptiveStatistics): unknown;
    fromPartial<I extends {
        min?: number | undefined;
        max?: number | undefined;
        mean?: number | undefined;
        std?: number | undefined;
        quantiles?: {
            value?: number | undefined;
            level?: number | undefined;
        }[] | undefined;
    } & {
        min?: number | undefined;
        max?: number | undefined;
        mean?: number | undefined;
        std?: number | undefined;
        quantiles?: ({
            value?: number | undefined;
            level?: number | undefined;
        }[] & ({
            value?: number | undefined;
            level?: number | undefined;
        } & {
            value?: number | undefined;
            level?: number | undefined;
        } & Record<Exclude<keyof I["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["quantiles"], "$type" | keyof {
            value?: number | undefined;
            level?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>>(object: I): DescriptiveStatistics;
};
export declare const DescriptiveStatistics_Quantile: {
    $type: "speechkit.stt.v3.DescriptiveStatistics.Quantile";
    encode(message: DescriptiveStatistics_Quantile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DescriptiveStatistics_Quantile;
    fromJSON(object: any): DescriptiveStatistics_Quantile;
    toJSON(message: DescriptiveStatistics_Quantile): unknown;
    fromPartial<I extends {
        value?: number | undefined;
        level?: number | undefined;
    } & {
        value?: number | undefined;
        level?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "level">, never>>(object: I): DescriptiveStatistics_Quantile;
};
export declare const AudioSegmentBoundaries: {
    $type: "speechkit.stt.v3.AudioSegmentBoundaries";
    encode(message: AudioSegmentBoundaries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioSegmentBoundaries;
    fromJSON(object: any): AudioSegmentBoundaries;
    toJSON(message: AudioSegmentBoundaries): unknown;
    fromPartial<I extends {
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "startTimeMs" | "endTimeMs">, never>>(object: I): AudioSegmentBoundaries;
};
export declare const SpeakerAnalysis: {
    $type: "speechkit.stt.v3.SpeakerAnalysis";
    encode(message: SpeakerAnalysis, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeakerAnalysis;
    fromJSON(object: any): SpeakerAnalysis;
    toJSON(message: SpeakerAnalysis): unknown;
    fromPartial<I extends {
        windowType?: SpeakerAnalysis_WindowType | undefined;
        speakerTag?: string | undefined;
        totalSpeechMs?: number | undefined;
        speechRatio?: number | undefined;
        totalSilenceMs?: number | undefined;
        silenceRatio?: number | undefined;
        wordsCount?: number | undefined;
        lettersCount?: number | undefined;
        utteranceCount?: number | undefined;
        speechBoundaries?: {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } | undefined;
        wordsPerSecond?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        lettersPerSecond?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        wordsPerUtterance?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        lettersPerUtterance?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        utteranceDurationEstimation?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        windowType?: SpeakerAnalysis_WindowType | undefined;
        speakerTag?: string | undefined;
        totalSpeechMs?: number | undefined;
        speechRatio?: number | undefined;
        totalSilenceMs?: number | undefined;
        silenceRatio?: number | undefined;
        wordsCount?: number | undefined;
        lettersCount?: number | undefined;
        utteranceCount?: number | undefined;
        speechBoundaries?: ({
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["speechBoundaries"], "$type" | "startTimeMs" | "endTimeMs">, never>) | undefined;
        wordsPerSecond?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["wordsPerSecond"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["wordsPerSecond"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["wordsPerSecond"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        lettersPerSecond?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["lettersPerSecond"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["lettersPerSecond"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lettersPerSecond"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        wordsPerUtterance?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["wordsPerUtterance"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["wordsPerUtterance"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["wordsPerUtterance"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        lettersPerUtterance?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["lettersPerUtterance"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["lettersPerUtterance"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lettersPerUtterance"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        utteranceDurationEstimation?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["utteranceDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["utteranceDurationEstimation"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["utteranceDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "windowType" | "speakerTag" | "totalSpeechMs" | "speechRatio" | "totalSilenceMs" | "silenceRatio" | "wordsCount" | "lettersCount" | "utteranceCount" | "speechBoundaries" | "wordsPerSecond" | "lettersPerSecond" | "wordsPerUtterance" | "lettersPerUtterance" | "utteranceDurationEstimation">, never>>(object: I): SpeakerAnalysis;
};
export declare const ConversationAnalysis: {
    $type: "speechkit.stt.v3.ConversationAnalysis";
    encode(message: ConversationAnalysis, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConversationAnalysis;
    fromJSON(object: any): ConversationAnalysis;
    toJSON(message: ConversationAnalysis): unknown;
    fromPartial<I extends {
        totalSimultaneousSilenceDurationMs?: number | undefined;
        totalSimultaneousSilenceRatio?: number | undefined;
        totalSimultaneousSpeechDurationMs?: number | undefined;
        totalSimultaneousSpeechRatio?: number | undefined;
        conversationBoundaries?: {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } | undefined;
        simultaneousSilenceDurationEstimation?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        simultaneousSpeechDurationEstimation?: {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } | undefined;
        speakerInterrupts?: {
            speakerTag?: string | undefined;
            interruptsCount?: number | undefined;
            interruptsDurationMs?: number | undefined;
            interrupts?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        totalSimultaneousSilenceDurationMs?: number | undefined;
        totalSimultaneousSilenceRatio?: number | undefined;
        totalSimultaneousSpeechDurationMs?: number | undefined;
        totalSimultaneousSpeechRatio?: number | undefined;
        conversationBoundaries?: ({
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["conversationBoundaries"], "$type" | "startTimeMs" | "endTimeMs">, never>) | undefined;
        simultaneousSilenceDurationEstimation?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["simultaneousSilenceDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["simultaneousSilenceDurationEstimation"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["simultaneousSilenceDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        simultaneousSpeechDurationEstimation?: ({
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: {
                value?: number | undefined;
                level?: number | undefined;
            }[] | undefined;
        } & {
            min?: number | undefined;
            max?: number | undefined;
            mean?: number | undefined;
            std?: number | undefined;
            quantiles?: ({
                value?: number | undefined;
                level?: number | undefined;
            }[] & ({
                value?: number | undefined;
                level?: number | undefined;
            } & {
                value?: number | undefined;
                level?: number | undefined;
            } & Record<Exclude<keyof I["simultaneousSpeechDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["simultaneousSpeechDurationEstimation"]["quantiles"], "$type" | keyof {
                value?: number | undefined;
                level?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["simultaneousSpeechDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        speakerInterrupts?: ({
            speakerTag?: string | undefined;
            interruptsCount?: number | undefined;
            interruptsDurationMs?: number | undefined;
            interrupts?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        }[] & ({
            speakerTag?: string | undefined;
            interruptsCount?: number | undefined;
            interruptsDurationMs?: number | undefined;
            interrupts?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        } & {
            speakerTag?: string | undefined;
            interruptsCount?: number | undefined;
            interruptsDurationMs?: number | undefined;
            interrupts?: ({
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["speakerInterrupts"][number]["interrupts"][number], "$type" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["speakerInterrupts"][number]["interrupts"], "$type" | keyof {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["speakerInterrupts"][number], "$type" | "speakerTag" | "interruptsCount" | "interruptsDurationMs" | "interrupts">, never>)[] & Record<Exclude<keyof I["speakerInterrupts"], "$type" | keyof {
            speakerTag?: string | undefined;
            interruptsCount?: number | undefined;
            interruptsDurationMs?: number | undefined;
            interrupts?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "totalSimultaneousSilenceDurationMs" | "totalSimultaneousSilenceRatio" | "totalSimultaneousSpeechDurationMs" | "totalSimultaneousSpeechRatio" | "conversationBoundaries" | "simultaneousSilenceDurationEstimation" | "simultaneousSpeechDurationEstimation" | "speakerInterrupts">, never>>(object: I): ConversationAnalysis;
};
export declare const ConversationAnalysis_InterruptsEvaluation: {
    $type: "speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation";
    encode(message: ConversationAnalysis_InterruptsEvaluation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConversationAnalysis_InterruptsEvaluation;
    fromJSON(object: any): ConversationAnalysis_InterruptsEvaluation;
    toJSON(message: ConversationAnalysis_InterruptsEvaluation): unknown;
    fromPartial<I extends {
        speakerTag?: string | undefined;
        interruptsCount?: number | undefined;
        interruptsDurationMs?: number | undefined;
        interrupts?: {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
    } & {
        speakerTag?: string | undefined;
        interruptsCount?: number | undefined;
        interruptsDurationMs?: number | undefined;
        interrupts?: ({
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["interrupts"][number], "$type" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["interrupts"], "$type" | keyof {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "speakerTag" | "interruptsCount" | "interruptsDurationMs" | "interrupts">, never>>(object: I): ConversationAnalysis_InterruptsEvaluation;
};
export declare const StreamingResponse: {
    $type: "speechkit.stt.v3.StreamingResponse";
    encode(message: StreamingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingResponse;
    fromJSON(object: any): StreamingResponse;
    toJSON(message: StreamingResponse): unknown;
    fromPartial<I extends {
        channelTag?: string | undefined;
        final?: {
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
        responseWallTimeMs?: number | undefined;
        sessionUuid?: {
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } | undefined;
        audioCursors?: {
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } | undefined;
        partial?: {
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
        eouUpdate?: {
            timeMs?: number | undefined;
        } | undefined;
        finalRefinement?: {
            finalIndex?: number | undefined;
            normalizedText?: {
                alternatives?: {
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } | undefined;
        } | undefined;
        statusCode?: {
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } | undefined;
        classifierUpdate?: {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
            windowType?: RecognitionClassifierUpdate_WindowType | undefined;
            classifierResult?: {
                labels?: {
                    confidence?: number | undefined;
                    label?: string | undefined;
                }[] | undefined;
                classifier?: string | undefined;
                highlights?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        speakerAnalysis?: {
            windowType?: SpeakerAnalysis_WindowType | undefined;
            speakerTag?: string | undefined;
            totalSpeechMs?: number | undefined;
            speechRatio?: number | undefined;
            totalSilenceMs?: number | undefined;
            silenceRatio?: number | undefined;
            wordsCount?: number | undefined;
            lettersCount?: number | undefined;
            utteranceCount?: number | undefined;
            speechBoundaries?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } | undefined;
            wordsPerSecond?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            lettersPerSecond?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            wordsPerUtterance?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            lettersPerUtterance?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            utteranceDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        conversationAnalysis?: {
            totalSimultaneousSilenceDurationMs?: number | undefined;
            totalSimultaneousSilenceRatio?: number | undefined;
            totalSimultaneousSpeechDurationMs?: number | undefined;
            totalSimultaneousSpeechRatio?: number | undefined;
            conversationBoundaries?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } | undefined;
            simultaneousSilenceDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            simultaneousSpeechDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            speakerInterrupts?: {
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        channelTag?: string | undefined;
        final?: ({
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                languages?: ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] & ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & Record<Exclude<keyof I["final"]["alternatives"][number]["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["final"]["alternatives"][number]["languages"], "$type" | keyof {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[]>, never>) | undefined;
                text?: string | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["final"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["final"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["final"]["alternatives"][number], "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["final"]["alternatives"], "$type" | keyof {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["final"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        responseWallTimeMs?: number | undefined;
        sessionUuid?: ({
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } & {
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } & Record<Exclude<keyof I["sessionUuid"], "$type" | "uuid" | "userRequestId">, never>) | undefined;
        audioCursors?: ({
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } & {
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["audioCursors"], "$type" | "receivedDataMs" | "resetTimeMs" | "partialTimeMs" | "finalTimeMs" | "finalIndex" | "eouTimeMs">, never>) | undefined;
        partial?: ({
            alternatives?: {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                languages?: ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] & ({
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                } & Record<Exclude<keyof I["partial"]["alternatives"][number]["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["partial"]["alternatives"][number]["languages"], "$type" | keyof {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[]>, never>) | undefined;
                text?: string | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["partial"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["partial"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["partial"]["alternatives"][number], "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["partial"]["alternatives"], "$type" | keyof {
                languages?: {
                    languageCode?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
                text?: string | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                confidence?: number | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["partial"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        eouUpdate?: ({
            timeMs?: number | undefined;
        } & {
            timeMs?: number | undefined;
        } & Record<Exclude<keyof I["eouUpdate"], "$type" | "timeMs">, never>) | undefined;
        finalRefinement?: ({
            finalIndex?: number | undefined;
            normalizedText?: {
                alternatives?: {
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } | undefined;
        } & {
            finalIndex?: number | undefined;
            normalizedText?: ({
                alternatives?: {
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } & {
                alternatives?: ({
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    languages?: ({
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] & ({
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    } & {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["languages"][number], "$type" | "languageCode" | "probability">, never>)[] & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["languages"], "$type" | keyof {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[]>, never>) | undefined;
                    text?: string | undefined;
                    words?: ({
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] & ({
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    } & {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["words"], "$type" | keyof {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[]>, never>) | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number], "$type" | "languages" | "text" | "words" | "confidence" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"], "$type" | keyof {
                    languages?: {
                        languageCode?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                    text?: string | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    confidence?: number | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                channelTag?: string | undefined;
            } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        } & Record<Exclude<keyof I["finalRefinement"], "$type" | "finalIndex" | "normalizedText">, never>) | undefined;
        statusCode?: ({
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } & {
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } & Record<Exclude<keyof I["statusCode"], "$type" | "message" | "codeType">, never>) | undefined;
        classifierUpdate?: ({
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
            windowType?: RecognitionClassifierUpdate_WindowType | undefined;
            classifierResult?: {
                labels?: {
                    confidence?: number | undefined;
                    label?: string | undefined;
                }[] | undefined;
                classifier?: string | undefined;
                highlights?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
            windowType?: RecognitionClassifierUpdate_WindowType | undefined;
            classifierResult?: ({
                labels?: {
                    confidence?: number | undefined;
                    label?: string | undefined;
                }[] | undefined;
                classifier?: string | undefined;
                highlights?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            } & {
                labels?: ({
                    confidence?: number | undefined;
                    label?: string | undefined;
                }[] & ({
                    confidence?: number | undefined;
                    label?: string | undefined;
                } & {
                    confidence?: number | undefined;
                    label?: string | undefined;
                } & Record<Exclude<keyof I["classifierUpdate"]["classifierResult"]["labels"][number], "$type" | "confidence" | "label">, never>)[] & Record<Exclude<keyof I["classifierUpdate"]["classifierResult"]["labels"], "$type" | keyof {
                    confidence?: number | undefined;
                    label?: string | undefined;
                }[]>, never>) | undefined;
                classifier?: string | undefined;
                highlights?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["classifierUpdate"]["classifierResult"]["highlights"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["classifierUpdate"]["classifierResult"]["highlights"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["classifierUpdate"]["classifierResult"], "$type" | "labels" | "classifier" | "highlights">, never>) | undefined;
        } & Record<Exclude<keyof I["classifierUpdate"], "$type" | "startTimeMs" | "endTimeMs" | "windowType" | "classifierResult">, never>) | undefined;
        speakerAnalysis?: ({
            windowType?: SpeakerAnalysis_WindowType | undefined;
            speakerTag?: string | undefined;
            totalSpeechMs?: number | undefined;
            speechRatio?: number | undefined;
            totalSilenceMs?: number | undefined;
            silenceRatio?: number | undefined;
            wordsCount?: number | undefined;
            lettersCount?: number | undefined;
            utteranceCount?: number | undefined;
            speechBoundaries?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } | undefined;
            wordsPerSecond?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            lettersPerSecond?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            wordsPerUtterance?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            lettersPerUtterance?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            utteranceDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            windowType?: SpeakerAnalysis_WindowType | undefined;
            speakerTag?: string | undefined;
            totalSpeechMs?: number | undefined;
            speechRatio?: number | undefined;
            totalSilenceMs?: number | undefined;
            silenceRatio?: number | undefined;
            wordsCount?: number | undefined;
            lettersCount?: number | undefined;
            utteranceCount?: number | undefined;
            speechBoundaries?: ({
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["speechBoundaries"], "$type" | "startTimeMs" | "endTimeMs">, never>) | undefined;
            wordsPerSecond?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerSecond"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerSecond"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerSecond"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            lettersPerSecond?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerSecond"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerSecond"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerSecond"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            wordsPerUtterance?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerUtterance"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerUtterance"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["wordsPerUtterance"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            lettersPerUtterance?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerUtterance"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerUtterance"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["lettersPerUtterance"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            utteranceDurationEstimation?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["speakerAnalysis"]["utteranceDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["speakerAnalysis"]["utteranceDurationEstimation"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["speakerAnalysis"]["utteranceDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
        } & Record<Exclude<keyof I["speakerAnalysis"], "$type" | "windowType" | "speakerTag" | "totalSpeechMs" | "speechRatio" | "totalSilenceMs" | "silenceRatio" | "wordsCount" | "lettersCount" | "utteranceCount" | "speechBoundaries" | "wordsPerSecond" | "lettersPerSecond" | "wordsPerUtterance" | "lettersPerUtterance" | "utteranceDurationEstimation">, never>) | undefined;
        conversationAnalysis?: ({
            totalSimultaneousSilenceDurationMs?: number | undefined;
            totalSimultaneousSilenceRatio?: number | undefined;
            totalSimultaneousSpeechDurationMs?: number | undefined;
            totalSimultaneousSpeechRatio?: number | undefined;
            conversationBoundaries?: {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } | undefined;
            simultaneousSilenceDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            simultaneousSpeechDurationEstimation?: {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } | undefined;
            speakerInterrupts?: {
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            totalSimultaneousSilenceDurationMs?: number | undefined;
            totalSimultaneousSilenceRatio?: number | undefined;
            totalSimultaneousSpeechDurationMs?: number | undefined;
            totalSimultaneousSpeechRatio?: number | undefined;
            conversationBoundaries?: ({
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["conversationAnalysis"]["conversationBoundaries"], "$type" | "startTimeMs" | "endTimeMs">, never>) | undefined;
            simultaneousSilenceDurationEstimation?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSilenceDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSilenceDurationEstimation"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSilenceDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            simultaneousSpeechDurationEstimation?: ({
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: {
                    value?: number | undefined;
                    level?: number | undefined;
                }[] | undefined;
            } & {
                min?: number | undefined;
                max?: number | undefined;
                mean?: number | undefined;
                std?: number | undefined;
                quantiles?: ({
                    value?: number | undefined;
                    level?: number | undefined;
                }[] & ({
                    value?: number | undefined;
                    level?: number | undefined;
                } & {
                    value?: number | undefined;
                    level?: number | undefined;
                } & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSpeechDurationEstimation"]["quantiles"][number], "$type" | "value" | "level">, never>)[] & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSpeechDurationEstimation"]["quantiles"], "$type" | keyof {
                    value?: number | undefined;
                    level?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["conversationAnalysis"]["simultaneousSpeechDurationEstimation"], "$type" | "min" | "max" | "mean" | "std" | "quantiles">, never>) | undefined;
            speakerInterrupts?: ({
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            }[] & ({
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            } & {
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: ({
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["conversationAnalysis"]["speakerInterrupts"][number]["interrupts"][number], "$type" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["conversationAnalysis"]["speakerInterrupts"][number]["interrupts"], "$type" | keyof {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["conversationAnalysis"]["speakerInterrupts"][number], "$type" | "speakerTag" | "interruptsCount" | "interruptsDurationMs" | "interrupts">, never>)[] & Record<Exclude<keyof I["conversationAnalysis"]["speakerInterrupts"], "$type" | keyof {
                speakerTag?: string | undefined;
                interruptsCount?: number | undefined;
                interruptsDurationMs?: number | undefined;
                interrupts?: {
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["conversationAnalysis"], "$type" | "totalSimultaneousSilenceDurationMs" | "totalSimultaneousSilenceRatio" | "totalSimultaneousSpeechDurationMs" | "totalSimultaneousSpeechRatio" | "conversationBoundaries" | "simultaneousSilenceDurationEstimation" | "simultaneousSpeechDurationEstimation" | "speakerInterrupts">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "channelTag" | "final" | "responseWallTimeMs" | "sessionUuid" | "audioCursors" | "partial" | "eouUpdate" | "finalRefinement" | "statusCode" | "classifierUpdate" | "speakerAnalysis" | "conversationAnalysis">, never>>(object: I): StreamingResponse;
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
