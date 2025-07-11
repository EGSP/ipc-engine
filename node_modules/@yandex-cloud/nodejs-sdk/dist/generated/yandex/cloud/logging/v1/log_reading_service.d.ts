/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { LogEntry, LogLevel_Level } from "../../../../yandex/cloud/logging/v1/log_entry";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface ReadRequest {
    $type: "yandex.cloud.logging.v1.ReadRequest";
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ReadResponse.next_page_token] or [ReadResponse.previous_page_token] returned by a previous read request.
     */
    pageToken: string | undefined;
    /**
     * Read criteria.
     *
     * See [Criteria] for details.
     */
    criteria?: Criteria | undefined;
}
export interface ReadResponse {
    $type: "yandex.cloud.logging.v1.ReadResponse";
    /** Log group ID the read was performed from. */
    logGroupId: string;
    /** List of matching log entries. */
    entries: LogEntry[];
    /**
     * Token for getting the next page of the log entries.
     *
     * After getting log entries initially with [Criteria], you can use `next_page_token` as the value
     * for the [ReadRequest.page_token] parameter in the next read request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
    /**
     * Token for getting the previous page of the log entries.
     *
     * After getting log entries initially with [Criteria], you can use `previous_page_token` as the value
     * for the [ReadRequest.page_token] parameter in the next read request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    previousPageToken: string;
}
/** Read criteria. Should be used in initial [ReadRequest]. */
export interface Criteria {
    $type: "yandex.cloud.logging.v1.Criteria";
    /**
     * ID of the log group to return.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * List of resource types to limit log entries to.
     *
     * Empty list disables filter.
     */
    resourceTypes: string[];
    /**
     * List of resource IDs to limit log entries to.
     *
     * Empty list disables filter.
     */
    resourceIds: string[];
    /** Lower bound of log entries timestamps. */
    since?: Date;
    /** Upper bound of log entries timestamps. */
    until?: Date;
    /**
     * List of log levels to limit log entries to.
     *
     * Empty list disables filter.
     */
    levels: LogLevel_Level[];
    /** Filter expression. For details about filtering, see [documentation](/docs/logging/concepts/filter). */
    filter: string;
    /**
     * List of stream names to limit log entries to.
     *
     * Empty list disables filter.
     */
    streamNames: string[];
    /** The maximum number of results per page to return. */
    pageSize: number;
    /**
     * Limits response to maximum size in bytes. Prevents gRPC resource exhaustion.
     *
     * Default value for max response size is 3.5 MiB
     */
    maxResponseSize: number;
}
export declare const ReadRequest: {
    $type: "yandex.cloud.logging.v1.ReadRequest";
    encode(message: ReadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadRequest;
    fromJSON(object: any): ReadRequest;
    toJSON(message: ReadRequest): unknown;
    fromPartial<I extends {
        pageToken?: string | undefined;
        criteria?: {
            pageSize?: number | undefined;
            filter?: string | undefined;
            logGroupId?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: LogLevel_Level[] | undefined;
            since?: Date | undefined;
            until?: Date | undefined;
            maxResponseSize?: number | undefined;
        } | undefined;
    } & {
        pageToken?: string | undefined;
        criteria?: ({
            pageSize?: number | undefined;
            filter?: string | undefined;
            logGroupId?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: LogLevel_Level[] | undefined;
            since?: Date | undefined;
            until?: Date | undefined;
            maxResponseSize?: number | undefined;
        } & {
            pageSize?: number | undefined;
            filter?: string | undefined;
            logGroupId?: string | undefined;
            resourceTypes?: (string[] & string[] & Record<Exclude<keyof I["criteria"]["resourceTypes"], "$type" | keyof string[]>, never>) | undefined;
            resourceIds?: (string[] & string[] & Record<Exclude<keyof I["criteria"]["resourceIds"], "$type" | keyof string[]>, never>) | undefined;
            streamNames?: (string[] & string[] & Record<Exclude<keyof I["criteria"]["streamNames"], "$type" | keyof string[]>, never>) | undefined;
            levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["criteria"]["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
            since?: Date | undefined;
            until?: Date | undefined;
            maxResponseSize?: number | undefined;
        } & Record<Exclude<keyof I["criteria"], "$type" | "pageSize" | "filter" | "logGroupId" | "resourceTypes" | "resourceIds" | "streamNames" | "levels" | "since" | "until" | "maxResponseSize">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageToken" | "criteria">, never>>(object: I): ReadRequest;
};
export declare const ReadResponse: {
    $type: "yandex.cloud.logging.v1.ReadResponse";
    encode(message: ReadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadResponse;
    fromJSON(object: any): ReadResponse;
    toJSON(message: ReadResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        entries?: {
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
        }[] | undefined;
        logGroupId?: string | undefined;
        previousPageToken?: string | undefined;
    } & {
        nextPageToken?: string | undefined;
        entries?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["entries"][number]["resource"], "$type" | "id" | "type">, never>) | undefined;
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
            } & Record<Exclude<keyof I["entries"][number]["jsonPayload"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["entries"][number], "$type" | "message" | "streamName" | "resource" | "timestamp" | "uid" | "level" | "ingestedAt" | "savedAt" | "jsonPayload">, never>)[] & Record<Exclude<keyof I["entries"], "$type" | keyof {
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
        }[]>, never>) | undefined;
        logGroupId?: string | undefined;
        previousPageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "entries" | "logGroupId" | "previousPageToken">, never>>(object: I): ReadResponse;
};
export declare const Criteria: {
    $type: "yandex.cloud.logging.v1.Criteria";
    encode(message: Criteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Criteria;
    fromJSON(object: any): Criteria;
    toJSON(message: Criteria): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        filter?: string | undefined;
        logGroupId?: string | undefined;
        resourceTypes?: string[] | undefined;
        resourceIds?: string[] | undefined;
        streamNames?: string[] | undefined;
        levels?: LogLevel_Level[] | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
        maxResponseSize?: number | undefined;
    } & {
        pageSize?: number | undefined;
        filter?: string | undefined;
        logGroupId?: string | undefined;
        resourceTypes?: (string[] & string[] & Record<Exclude<keyof I["resourceTypes"], "$type" | keyof string[]>, never>) | undefined;
        resourceIds?: (string[] & string[] & Record<Exclude<keyof I["resourceIds"], "$type" | keyof string[]>, never>) | undefined;
        streamNames?: (string[] & string[] & Record<Exclude<keyof I["streamNames"], "$type" | keyof string[]>, never>) | undefined;
        levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
        maxResponseSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "filter" | "logGroupId" | "resourceTypes" | "resourceIds" | "streamNames" | "levels" | "since" | "until" | "maxResponseSize">, never>>(object: I): Criteria;
};
/** A set of methods for reading from log groups. */
export declare const LogReadingServiceService: {
    /** Read log entries from the specified log group. */
    readonly read: {
        readonly path: "/yandex.cloud.logging.v1.LogReadingService/Read";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReadRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReadRequest;
        readonly responseSerialize: (value: ReadResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ReadResponse;
    };
};
export interface LogReadingServiceServer extends UntypedServiceImplementation {
    /** Read log entries from the specified log group. */
    read: handleUnaryCall<ReadRequest, ReadResponse>;
}
export interface LogReadingServiceClient extends Client {
    /** Read log entries from the specified log group. */
    read(request: ReadRequest, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
}
export declare const LogReadingServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): LogReadingServiceClient;
    service: typeof LogReadingServiceService;
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
