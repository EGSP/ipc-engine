/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface AddMetricRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest";
    computeInstanceId: string;
    jobId: string;
    chunks: MetricChunk[];
    agentInstanceId: string;
}
export interface MetricChunk {
    $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk";
    data: Metric[];
    timestamp: number;
    comment: string;
    instanceHost: string;
}
export interface Metric {
    $type: "yandex.cloud.loadtesting.agent.v1.Metric";
    metricType: string;
    metricName: string;
    metricValue: number;
}
export interface AddMetricResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse";
    metricTrailId: string;
    code: number;
}
export declare const AddMetricRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricRequest";
    encode(message: AddMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddMetricRequest;
    fromJSON(object: any): AddMetricRequest;
    toJSON(message: AddMetricRequest): unknown;
    fromPartial<I extends {
        chunks?: {
            data?: {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[] | undefined;
            timestamp?: number | undefined;
            comment?: string | undefined;
            instanceHost?: string | undefined;
        }[] | undefined;
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & {
        chunks?: ({
            data?: {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[] | undefined;
            timestamp?: number | undefined;
            comment?: string | undefined;
            instanceHost?: string | undefined;
        }[] & ({
            data?: {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[] | undefined;
            timestamp?: number | undefined;
            comment?: string | undefined;
            instanceHost?: string | undefined;
        } & {
            data?: ({
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[] & ({
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            } & {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            } & Record<Exclude<keyof I["chunks"][number]["data"][number], "$type" | "metricType" | "metricName" | "metricValue">, never>)[] & Record<Exclude<keyof I["chunks"][number]["data"], "$type" | keyof {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[]>, never>) | undefined;
            timestamp?: number | undefined;
            comment?: string | undefined;
            instanceHost?: string | undefined;
        } & Record<Exclude<keyof I["chunks"][number], "$type" | "data" | "timestamp" | "comment" | "instanceHost">, never>)[] & Record<Exclude<keyof I["chunks"], "$type" | keyof {
            data?: {
                metricType?: string | undefined;
                metricName?: string | undefined;
                metricValue?: number | undefined;
            }[] | undefined;
            timestamp?: number | undefined;
            comment?: string | undefined;
            instanceHost?: string | undefined;
        }[]>, never>) | undefined;
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "chunks" | "computeInstanceId" | "jobId" | "agentInstanceId">, never>>(object: I): AddMetricRequest;
};
export declare const MetricChunk: {
    $type: "yandex.cloud.loadtesting.agent.v1.MetricChunk";
    encode(message: MetricChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MetricChunk;
    fromJSON(object: any): MetricChunk;
    toJSON(message: MetricChunk): unknown;
    fromPartial<I extends {
        data?: {
            metricType?: string | undefined;
            metricName?: string | undefined;
            metricValue?: number | undefined;
        }[] | undefined;
        timestamp?: number | undefined;
        comment?: string | undefined;
        instanceHost?: string | undefined;
    } & {
        data?: ({
            metricType?: string | undefined;
            metricName?: string | undefined;
            metricValue?: number | undefined;
        }[] & ({
            metricType?: string | undefined;
            metricName?: string | undefined;
            metricValue?: number | undefined;
        } & {
            metricType?: string | undefined;
            metricName?: string | undefined;
            metricValue?: number | undefined;
        } & Record<Exclude<keyof I["data"][number], "$type" | "metricType" | "metricName" | "metricValue">, never>)[] & Record<Exclude<keyof I["data"], "$type" | keyof {
            metricType?: string | undefined;
            metricName?: string | undefined;
            metricValue?: number | undefined;
        }[]>, never>) | undefined;
        timestamp?: number | undefined;
        comment?: string | undefined;
        instanceHost?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "data" | "timestamp" | "comment" | "instanceHost">, never>>(object: I): MetricChunk;
};
export declare const Metric: {
    $type: "yandex.cloud.loadtesting.agent.v1.Metric";
    encode(message: Metric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Metric;
    fromJSON(object: any): Metric;
    toJSON(message: Metric): unknown;
    fromPartial<I extends {
        metricType?: string | undefined;
        metricName?: string | undefined;
        metricValue?: number | undefined;
    } & {
        metricType?: string | undefined;
        metricName?: string | undefined;
        metricValue?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "metricType" | "metricName" | "metricValue">, never>>(object: I): Metric;
};
export declare const AddMetricResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.AddMetricResponse";
    encode(message: AddMetricResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddMetricResponse;
    fromJSON(object: any): AddMetricResponse;
    toJSON(message: AddMetricResponse): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        metricTrailId?: string | undefined;
    } & {
        code?: number | undefined;
        metricTrailId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "code" | "metricTrailId">, never>>(object: I): AddMetricResponse;
};
export declare const MonitoringServiceService: {
    /** Saves monitoring events for specified job */
    readonly addMetric: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.MonitoringService/AddMetric";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddMetricRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddMetricRequest;
        readonly responseSerialize: (value: AddMetricResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AddMetricResponse;
    };
};
export interface MonitoringServiceServer extends UntypedServiceImplementation {
    /** Saves monitoring events for specified job */
    addMetric: handleUnaryCall<AddMetricRequest, AddMetricResponse>;
}
export interface MonitoringServiceClient extends Client {
    /** Saves monitoring events for specified job */
    addMetric(request: AddMetricRequest, callback: (error: ServiceError | null, response: AddMetricResponse) => void): ClientUnaryCall;
    addMetric(request: AddMetricRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AddMetricResponse) => void): ClientUnaryCall;
    addMetric(request: AddMetricRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AddMetricResponse) => void): ClientUnaryCall;
}
export declare const MonitoringServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): MonitoringServiceClient;
    service: typeof MonitoringServiceService;
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
