/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ExportParams } from "../../../../yandex/cloud/logging/v1/export";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface RunExportRequest {
    $type: "yandex.cloud.logging.v1.RunExportRequest";
    groupId: string;
    sinkId: string;
    params?: ExportParams;
    resultFilename: string;
    since?: Date;
    until?: Date;
}
export interface RunExportDetails {
    $type: "yandex.cloud.logging.v1.RunExportDetails";
    groupId: string;
    sinkId: string;
    params?: ExportParams;
    resultFilename: string;
    since?: Date;
    until?: Date;
}
export interface RunExportMetadata {
    $type: "yandex.cloud.logging.v1.RunExportMetadata";
    groupId: string;
    sinkId: string;
    resultFilename: string;
}
export declare const RunExportRequest: {
    $type: "yandex.cloud.logging.v1.RunExportRequest";
    encode(message: RunExportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RunExportRequest;
    fromJSON(object: any): RunExportRequest;
    toJSON(message: RunExportRequest): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
        params?: {
            filter?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: import("./log_entry").LogLevel_Level[] | undefined;
        } | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
    } & {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
        params?: ({
            filter?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: import("./log_entry").LogLevel_Level[] | undefined;
        } & {
            filter?: string | undefined;
            resourceTypes?: (string[] & string[] & Record<Exclude<keyof I["params"]["resourceTypes"], "$type" | keyof string[]>, never>) | undefined;
            resourceIds?: (string[] & string[] & Record<Exclude<keyof I["params"]["resourceIds"], "$type" | keyof string[]>, never>) | undefined;
            streamNames?: (string[] & string[] & Record<Exclude<keyof I["params"]["streamNames"], "$type" | keyof string[]>, never>) | undefined;
            levels?: (import("./log_entry").LogLevel_Level[] & import("./log_entry").LogLevel_Level[] & Record<Exclude<keyof I["params"]["levels"], "$type" | keyof import("./log_entry").LogLevel_Level[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "$type" | "filter" | "resourceTypes" | "resourceIds" | "streamNames" | "levels">, never>) | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId" | "sinkId" | "resultFilename" | "params" | "since" | "until">, never>>(object: I): RunExportRequest;
};
export declare const RunExportDetails: {
    $type: "yandex.cloud.logging.v1.RunExportDetails";
    encode(message: RunExportDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RunExportDetails;
    fromJSON(object: any): RunExportDetails;
    toJSON(message: RunExportDetails): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
        params?: {
            filter?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: import("./log_entry").LogLevel_Level[] | undefined;
        } | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
    } & {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
        params?: ({
            filter?: string | undefined;
            resourceTypes?: string[] | undefined;
            resourceIds?: string[] | undefined;
            streamNames?: string[] | undefined;
            levels?: import("./log_entry").LogLevel_Level[] | undefined;
        } & {
            filter?: string | undefined;
            resourceTypes?: (string[] & string[] & Record<Exclude<keyof I["params"]["resourceTypes"], "$type" | keyof string[]>, never>) | undefined;
            resourceIds?: (string[] & string[] & Record<Exclude<keyof I["params"]["resourceIds"], "$type" | keyof string[]>, never>) | undefined;
            streamNames?: (string[] & string[] & Record<Exclude<keyof I["params"]["streamNames"], "$type" | keyof string[]>, never>) | undefined;
            levels?: (import("./log_entry").LogLevel_Level[] & import("./log_entry").LogLevel_Level[] & Record<Exclude<keyof I["params"]["levels"], "$type" | keyof import("./log_entry").LogLevel_Level[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "$type" | "filter" | "resourceTypes" | "resourceIds" | "streamNames" | "levels">, never>) | undefined;
        since?: Date | undefined;
        until?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId" | "sinkId" | "resultFilename" | "params" | "since" | "until">, never>>(object: I): RunExportDetails;
};
export declare const RunExportMetadata: {
    $type: "yandex.cloud.logging.v1.RunExportMetadata";
    encode(message: RunExportMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RunExportMetadata;
    fromJSON(object: any): RunExportMetadata;
    toJSON(message: RunExportMetadata): unknown;
    fromPartial<I extends {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
    } & {
        groupId?: string | undefined;
        sinkId?: string | undefined;
        resultFilename?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "groupId" | "sinkId" | "resultFilename">, never>>(object: I): RunExportMetadata;
};
export declare const ExportServiceService: {
    readonly run: {
        readonly path: "/yandex.cloud.logging.v1.ExportService/Run";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RunExportRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RunExportRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ExportServiceServer extends UntypedServiceImplementation {
    run: handleUnaryCall<RunExportRequest, Operation>;
}
export interface ExportServiceClient extends Client {
    run(request: RunExportRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    run(request: RunExportRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    run(request: RunExportRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ExportServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ExportServiceClient;
    service: typeof ExportServiceService;
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
