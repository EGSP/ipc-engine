import _m0 from "protobufjs/minimal";
import { LogEntryResource } from "../../../../yandex/cloud/logging/v1/log_resource";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogEntry {
    $type: "yandex.cloud.logging.v1.LogEntry";
    /**
     * Unique entry ID.
     *
     * Useful for logs deduplication.
     */
    uid: string;
    /**
     * Entry resource specification.
     *
     * May contain information about source service and resource ID.
     * Also may be provided by the user.
     */
    resource?: LogEntryResource;
    /** Timestamp of the entry. */
    timestamp?: Date;
    /** Entry ingestion time observed by [LogIngestionService]. */
    ingestedAt?: Date;
    /**
     * Entry save time.
     *
     * Entry is ready to be read since this moment.
     */
    savedAt?: Date;
    /**
     * Entry severity.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /** Entry text message. */
    message: string;
    /** Entry annotation. */
    jsonPayload?: {
        [key: string]: any;
    };
    /** Entry stream name. */
    streamName: string;
}
export interface IncomingLogEntry {
    $type: "yandex.cloud.logging.v1.IncomingLogEntry";
    /** Timestamp of the entry. */
    timestamp?: Date;
    /**
     * Entry severity.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /** Entry text message. */
    message: string;
    /** Entry annotation. */
    jsonPayload?: {
        [key: string]: any;
    };
    /** Entry stream name. */
    streamName: string;
}
export interface LogEntryDefaults {
    $type: "yandex.cloud.logging.v1.LogEntryDefaults";
    /**
     * Default entry severity.
     * Will be applied if entry level is unspecified.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /**
     * Default entry annotation.
     * Will be merged with entry annotation.
     * Any conflict will be resolved in favor of entry own annotation.
     */
    jsonPayload?: {
        [key: string]: any;
    };
    /** Entry stream name. */
    streamName: string;
}
export interface Destination {
    $type: "yandex.cloud.logging.v1.Destination";
    /** Entry should be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /** Entry should be written to default log group for the folder. */
    folderId: string | undefined;
}
export interface LogLevel {
    $type: "yandex.cloud.logging.v1.LogLevel";
    /**
     * Entry level.
     *
     * See [Level] for possible values.
     */
    level: LogLevel_Level;
}
/** Possible log levels for entries. */
export declare enum LogLevel_Level {
    /**
     * LEVEL_UNSPECIFIED - Default log level.
     *
     * Equivalent to not specifying log level at all.
     */
    LEVEL_UNSPECIFIED = 0,
    /**
     * TRACE - Trace log level.
     *
     * Possible use case: verbose logging of some business logic.
     */
    TRACE = 1,
    /**
     * DEBUG - Debug log level.
     *
     * Possible use case: debugging special cases in application logic.
     */
    DEBUG = 2,
    /**
     * INFO - Info log level.
     *
     * Mostly used for information messages.
     */
    INFO = 3,
    /**
     * WARN - Warn log level.
     *
     * May be used to alert about significant events.
     */
    WARN = 4,
    /**
     * ERROR - Error log level.
     *
     * May be used to alert about errors in infrastructure, logic, etc.
     */
    ERROR = 5,
    /**
     * FATAL - Fatal log level.
     *
     * May be used to alert about unrecoverable failures and events.
     */
    FATAL = 6,
    UNRECOGNIZED = -1
}
export declare function logLevel_LevelFromJSON(object: any): LogLevel_Level;
export declare function logLevel_LevelToJSON(object: LogLevel_Level): string;
export declare const LogEntry: {
    $type: "yandex.cloud.logging.v1.LogEntry";
    encode(message: LogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntry;
    fromJSON(object: any): LogEntry;
    toJSON(message: LogEntry): unknown;
    fromPartial<I extends {
        message?: string | undefined;
        streamName?: string | undefined;
        resource?: {
            id?: string | undefined;
            type?: string | undefined;
        } | undefined;
        timestamp?: Date | undefined;
        uid?: string | undefined;
        level?: LogLevel_Level | undefined;
        ingestedAt?: Date | undefined;
        savedAt?: Date | undefined;
        jsonPayload?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        message?: string | undefined;
        streamName?: string | undefined;
        resource?: ({
            id?: string | undefined;
            type?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
        } & Record<Exclude<keyof I["resource"], "$type" | "id" | "type">, never>) | undefined;
        timestamp?: Date | undefined;
        uid?: string | undefined;
        level?: LogLevel_Level | undefined;
        ingestedAt?: Date | undefined;
        savedAt?: Date | undefined;
        jsonPayload?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["jsonPayload"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "streamName" | "resource" | "timestamp" | "uid" | "level" | "ingestedAt" | "savedAt" | "jsonPayload">, never>>(object: I): LogEntry;
};
export declare const IncomingLogEntry: {
    $type: "yandex.cloud.logging.v1.IncomingLogEntry";
    encode(message: IncomingLogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IncomingLogEntry;
    fromJSON(object: any): IncomingLogEntry;
    toJSON(message: IncomingLogEntry): unknown;
    fromPartial<I extends {
        message?: string | undefined;
        streamName?: string | undefined;
        timestamp?: Date | undefined;
        level?: LogLevel_Level | undefined;
        jsonPayload?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        message?: string | undefined;
        streamName?: string | undefined;
        timestamp?: Date | undefined;
        level?: LogLevel_Level | undefined;
        jsonPayload?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["jsonPayload"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "streamName" | "timestamp" | "level" | "jsonPayload">, never>>(object: I): IncomingLogEntry;
};
export declare const LogEntryDefaults: {
    $type: "yandex.cloud.logging.v1.LogEntryDefaults";
    encode(message: LogEntryDefaults, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntryDefaults;
    fromJSON(object: any): LogEntryDefaults;
    toJSON(message: LogEntryDefaults): unknown;
    fromPartial<I extends {
        streamName?: string | undefined;
        level?: LogLevel_Level | undefined;
        jsonPayload?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        streamName?: string | undefined;
        level?: LogLevel_Level | undefined;
        jsonPayload?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["jsonPayload"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "streamName" | "level" | "jsonPayload">, never>>(object: I): LogEntryDefaults;
};
export declare const Destination: {
    $type: "yandex.cloud.logging.v1.Destination";
    encode(message: Destination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Destination;
    fromJSON(object: any): Destination;
    toJSON(message: Destination): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        logGroupId?: string | undefined;
    } & {
        folderId?: string | undefined;
        logGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "logGroupId">, never>>(object: I): Destination;
};
export declare const LogLevel: {
    $type: "yandex.cloud.logging.v1.LogLevel";
    encode(message: LogLevel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogLevel;
    fromJSON(object: any): LogLevel;
    toJSON(message: LogLevel): unknown;
    fromPartial<I extends {
        level?: LogLevel_Level | undefined;
    } & {
        level?: LogLevel_Level | undefined;
    } & Record<Exclude<keyof I, "$type" | "level">, never>>(object: I): LogLevel;
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
