/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Destination, LogEntryDefaults, IncomingLogEntry } from "../../../../yandex/cloud/logging/v1/log_entry";
import { LogEntryResource } from "../../../../yandex/cloud/logging/v1/log_resource";
import { Status } from "../../../../google/rpc/status";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface WriteRequest {
    $type: "yandex.cloud.logging.v1.WriteRequest";
    /**
     * Log entries destination.
     *
     * See [Destination] for details.
     */
    destination?: Destination;
    /** Common resource (type, ID) specification for log entries. */
    resource?: LogEntryResource;
    /** List of log entries. */
    entries: IncomingLogEntry[];
    /**
     * Log entries defaults.
     *
     * See [LogEntryDefaults] for details.
     */
    defaults?: LogEntryDefaults;
}
export interface WriteResponse {
    $type: "yandex.cloud.logging.v1.WriteResponse";
    /**
     * Map<idx, status> of ingest failures.
     *
     * If entry with idx N is absent, it was ingested successfully.
     */
    errors: {
        [key: number]: Status;
    };
}
export interface WriteResponse_ErrorsEntry {
    $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry";
    key: number;
    value?: Status;
}
export declare const WriteRequest: {
    $type: "yandex.cloud.logging.v1.WriteRequest";
    encode(message: WriteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteRequest;
    fromJSON(object: any): WriteRequest;
    toJSON(message: WriteRequest): unknown;
    fromPartial<I extends {
        entries?: {
            message?: string | undefined;
            streamName?: string | undefined;
            timestamp?: Date | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        }[] | undefined;
        resource?: {
            id?: string | undefined;
            type?: string | undefined;
        } | undefined;
        destination?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
        } | undefined;
        defaults?: {
            streamName?: string | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        } | undefined;
    } & {
        entries?: ({
            message?: string | undefined;
            streamName?: string | undefined;
            timestamp?: Date | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        }[] & ({
            message?: string | undefined;
            streamName?: string | undefined;
            timestamp?: Date | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        } & {
            message?: string | undefined;
            streamName?: string | undefined;
            timestamp?: Date | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: ({
                [x: string]: any;
                [x: number]: any;
            } & {
                [x: string]: any;
                [x: number]: any;
            } & Record<Exclude<keyof I["entries"][number]["jsonPayload"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["entries"][number], "$type" | "message" | "streamName" | "timestamp" | "level" | "jsonPayload">, never>)[] & Record<Exclude<keyof I["entries"], "$type" | keyof {
            message?: string | undefined;
            streamName?: string | undefined;
            timestamp?: Date | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        }[]>, never>) | undefined;
        resource?: ({
            id?: string | undefined;
            type?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
        } & Record<Exclude<keyof I["resource"], "$type" | "id" | "type">, never>) | undefined;
        destination?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
        } & Record<Exclude<keyof I["destination"], "$type" | "folderId" | "logGroupId">, never>) | undefined;
        defaults?: ({
            streamName?: string | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: {
                [x: string]: any;
                [x: number]: any;
            } | undefined;
        } & {
            streamName?: string | undefined;
            level?: import("../../../../yandex/cloud/logging/v1/log_entry").LogLevel_Level | undefined;
            jsonPayload?: ({
                [x: string]: any;
                [x: number]: any;
            } & {
                [x: string]: any;
                [x: number]: any;
            } & Record<Exclude<keyof I["defaults"]["jsonPayload"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["defaults"], "$type" | "streamName" | "level" | "jsonPayload">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "entries" | "resource" | "destination" | "defaults">, never>>(object: I): WriteRequest;
};
export declare const WriteResponse: {
    $type: "yandex.cloud.logging.v1.WriteResponse";
    encode(message: WriteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteResponse;
    fromJSON(object: any): WriteResponse;
    toJSON(message: WriteResponse): unknown;
    fromPartial<I extends {
        errors?: {
            [x: number]: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        errors?: ({
            [x: number]: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            [x: number]: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["errors"][number]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["errors"][number]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["errors"][number], "$type" | "code" | "message" | "details">, never>) | undefined;
        } & Record<Exclude<keyof I["errors"], number | "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "errors">, never>>(object: I): WriteResponse;
};
export declare const WriteResponse_ErrorsEntry: {
    $type: "yandex.cloud.logging.v1.WriteResponse.ErrorsEntry";
    encode(message: WriteResponse_ErrorsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteResponse_ErrorsEntry;
    fromJSON(object: any): WriteResponse_ErrorsEntry;
    toJSON(message: WriteResponse_ErrorsEntry): unknown;
    fromPartial<I extends {
        value?: {
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        key?: number | undefined;
    } & {
        value?: ({
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            code?: number | undefined;
            message?: string | undefined;
            details?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["value"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["value"]["details"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "code" | "message" | "details">, never>) | undefined;
        key?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): WriteResponse_ErrorsEntry;
};
/** A set of methods for writing to log groups. */
export declare const LogIngestionServiceService: {
    /** Write log entries to specified destination. */
    readonly write: {
        readonly path: "/yandex.cloud.logging.v1.LogIngestionService/Write";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: WriteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WriteRequest;
        readonly responseSerialize: (value: WriteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => WriteResponse;
    };
};
export interface LogIngestionServiceServer extends UntypedServiceImplementation {
    /** Write log entries to specified destination. */
    write: handleUnaryCall<WriteRequest, WriteResponse>;
}
export interface LogIngestionServiceClient extends Client {
    /** Write log entries to specified destination. */
    write(request: WriteRequest, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
    write(request: WriteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
    write(request: WriteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
}
export declare const LogIngestionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): LogIngestionServiceClient;
    service: typeof LogIngestionServiceService;
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
