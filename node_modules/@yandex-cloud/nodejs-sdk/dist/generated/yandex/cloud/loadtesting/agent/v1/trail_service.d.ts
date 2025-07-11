/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface CreateTrailRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest";
    computeInstanceId: string;
    data: Trail[];
    jobId: string;
    agentInstanceId: string;
}
export interface Trail {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail";
    overall: number;
    caseId: string;
    time: string;
    reqps: number;
    resps: number;
    expect: number;
    input: number;
    output: number;
    connectTime: number;
    sendTime: number;
    latency: number;
    receiveTime: number;
    threads: number;
    q50: number;
    q75: number;
    q80: number;
    q85: number;
    q90: number;
    q95: number;
    q98: number;
    q99: number;
    q100: number;
    httpCodes: Trail_Codes[];
    netCodes: Trail_Codes[];
    timeIntervals: Trail_Intervals[];
}
export interface Trail_Codes {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes";
    code: number;
    count: number;
}
export interface Trail_Intervals {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals";
    to: number;
    count: number;
}
export interface CreateTrailResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse";
    trailId: string;
    code: number;
}
export declare const CreateTrailRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailRequest";
    encode(message: CreateTrailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTrailRequest;
    fromJSON(object: any): CreateTrailRequest;
    toJSON(message: CreateTrailRequest): unknown;
    fromPartial<I extends {
        data?: {
            httpCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            time?: string | undefined;
            input?: number | undefined;
            output?: number | undefined;
            overall?: number | undefined;
            caseId?: string | undefined;
            reqps?: number | undefined;
            resps?: number | undefined;
            expect?: number | undefined;
            connectTime?: number | undefined;
            sendTime?: number | undefined;
            latency?: number | undefined;
            receiveTime?: number | undefined;
            threads?: number | undefined;
            q50?: number | undefined;
            q75?: number | undefined;
            q80?: number | undefined;
            q85?: number | undefined;
            q90?: number | undefined;
            q95?: number | undefined;
            q98?: number | undefined;
            q99?: number | undefined;
            q100?: number | undefined;
            netCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            timeIntervals?: {
                count?: number | undefined;
                to?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & {
        data?: ({
            httpCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            time?: string | undefined;
            input?: number | undefined;
            output?: number | undefined;
            overall?: number | undefined;
            caseId?: string | undefined;
            reqps?: number | undefined;
            resps?: number | undefined;
            expect?: number | undefined;
            connectTime?: number | undefined;
            sendTime?: number | undefined;
            latency?: number | undefined;
            receiveTime?: number | undefined;
            threads?: number | undefined;
            q50?: number | undefined;
            q75?: number | undefined;
            q80?: number | undefined;
            q85?: number | undefined;
            q90?: number | undefined;
            q95?: number | undefined;
            q98?: number | undefined;
            q99?: number | undefined;
            q100?: number | undefined;
            netCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            timeIntervals?: {
                count?: number | undefined;
                to?: number | undefined;
            }[] | undefined;
        }[] & ({
            httpCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            time?: string | undefined;
            input?: number | undefined;
            output?: number | undefined;
            overall?: number | undefined;
            caseId?: string | undefined;
            reqps?: number | undefined;
            resps?: number | undefined;
            expect?: number | undefined;
            connectTime?: number | undefined;
            sendTime?: number | undefined;
            latency?: number | undefined;
            receiveTime?: number | undefined;
            threads?: number | undefined;
            q50?: number | undefined;
            q75?: number | undefined;
            q80?: number | undefined;
            q85?: number | undefined;
            q90?: number | undefined;
            q95?: number | undefined;
            q98?: number | undefined;
            q99?: number | undefined;
            q100?: number | undefined;
            netCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            timeIntervals?: {
                count?: number | undefined;
                to?: number | undefined;
            }[] | undefined;
        } & {
            httpCodes?: ({
                code?: number | undefined;
                count?: number | undefined;
            }[] & ({
                code?: number | undefined;
                count?: number | undefined;
            } & {
                code?: number | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["httpCodes"][number], "$type" | "code" | "count">, never>)[] & Record<Exclude<keyof I["data"][number]["httpCodes"], "$type" | keyof {
                code?: number | undefined;
                count?: number | undefined;
            }[]>, never>) | undefined;
            time?: string | undefined;
            input?: number | undefined;
            output?: number | undefined;
            overall?: number | undefined;
            caseId?: string | undefined;
            reqps?: number | undefined;
            resps?: number | undefined;
            expect?: number | undefined;
            connectTime?: number | undefined;
            sendTime?: number | undefined;
            latency?: number | undefined;
            receiveTime?: number | undefined;
            threads?: number | undefined;
            q50?: number | undefined;
            q75?: number | undefined;
            q80?: number | undefined;
            q85?: number | undefined;
            q90?: number | undefined;
            q95?: number | undefined;
            q98?: number | undefined;
            q99?: number | undefined;
            q100?: number | undefined;
            netCodes?: ({
                code?: number | undefined;
                count?: number | undefined;
            }[] & ({
                code?: number | undefined;
                count?: number | undefined;
            } & {
                code?: number | undefined;
                count?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["netCodes"][number], "$type" | "code" | "count">, never>)[] & Record<Exclude<keyof I["data"][number]["netCodes"], "$type" | keyof {
                code?: number | undefined;
                count?: number | undefined;
            }[]>, never>) | undefined;
            timeIntervals?: ({
                count?: number | undefined;
                to?: number | undefined;
            }[] & ({
                count?: number | undefined;
                to?: number | undefined;
            } & {
                count?: number | undefined;
                to?: number | undefined;
            } & Record<Exclude<keyof I["data"][number]["timeIntervals"][number], "$type" | "count" | "to">, never>)[] & Record<Exclude<keyof I["data"][number]["timeIntervals"], "$type" | keyof {
                count?: number | undefined;
                to?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"][number], "$type" | "httpCodes" | "time" | "input" | "output" | "overall" | "caseId" | "reqps" | "resps" | "expect" | "connectTime" | "sendTime" | "latency" | "receiveTime" | "threads" | "q50" | "q75" | "q80" | "q85" | "q90" | "q95" | "q98" | "q99" | "q100" | "netCodes" | "timeIntervals">, never>)[] & Record<Exclude<keyof I["data"], "$type" | keyof {
            httpCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            time?: string | undefined;
            input?: number | undefined;
            output?: number | undefined;
            overall?: number | undefined;
            caseId?: string | undefined;
            reqps?: number | undefined;
            resps?: number | undefined;
            expect?: number | undefined;
            connectTime?: number | undefined;
            sendTime?: number | undefined;
            latency?: number | undefined;
            receiveTime?: number | undefined;
            threads?: number | undefined;
            q50?: number | undefined;
            q75?: number | undefined;
            q80?: number | undefined;
            q85?: number | undefined;
            q90?: number | undefined;
            q95?: number | undefined;
            q98?: number | undefined;
            q99?: number | undefined;
            q100?: number | undefined;
            netCodes?: {
                code?: number | undefined;
                count?: number | undefined;
            }[] | undefined;
            timeIntervals?: {
                count?: number | undefined;
                to?: number | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "data" | "computeInstanceId" | "jobId" | "agentInstanceId">, never>>(object: I): CreateTrailRequest;
};
export declare const Trail: {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail";
    encode(message: Trail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trail;
    fromJSON(object: any): Trail;
    toJSON(message: Trail): unknown;
    fromPartial<I extends {
        httpCodes?: {
            code?: number | undefined;
            count?: number | undefined;
        }[] | undefined;
        time?: string | undefined;
        input?: number | undefined;
        output?: number | undefined;
        overall?: number | undefined;
        caseId?: string | undefined;
        reqps?: number | undefined;
        resps?: number | undefined;
        expect?: number | undefined;
        connectTime?: number | undefined;
        sendTime?: number | undefined;
        latency?: number | undefined;
        receiveTime?: number | undefined;
        threads?: number | undefined;
        q50?: number | undefined;
        q75?: number | undefined;
        q80?: number | undefined;
        q85?: number | undefined;
        q90?: number | undefined;
        q95?: number | undefined;
        q98?: number | undefined;
        q99?: number | undefined;
        q100?: number | undefined;
        netCodes?: {
            code?: number | undefined;
            count?: number | undefined;
        }[] | undefined;
        timeIntervals?: {
            count?: number | undefined;
            to?: number | undefined;
        }[] | undefined;
    } & {
        httpCodes?: ({
            code?: number | undefined;
            count?: number | undefined;
        }[] & ({
            code?: number | undefined;
            count?: number | undefined;
        } & {
            code?: number | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["httpCodes"][number], "$type" | "code" | "count">, never>)[] & Record<Exclude<keyof I["httpCodes"], "$type" | keyof {
            code?: number | undefined;
            count?: number | undefined;
        }[]>, never>) | undefined;
        time?: string | undefined;
        input?: number | undefined;
        output?: number | undefined;
        overall?: number | undefined;
        caseId?: string | undefined;
        reqps?: number | undefined;
        resps?: number | undefined;
        expect?: number | undefined;
        connectTime?: number | undefined;
        sendTime?: number | undefined;
        latency?: number | undefined;
        receiveTime?: number | undefined;
        threads?: number | undefined;
        q50?: number | undefined;
        q75?: number | undefined;
        q80?: number | undefined;
        q85?: number | undefined;
        q90?: number | undefined;
        q95?: number | undefined;
        q98?: number | undefined;
        q99?: number | undefined;
        q100?: number | undefined;
        netCodes?: ({
            code?: number | undefined;
            count?: number | undefined;
        }[] & ({
            code?: number | undefined;
            count?: number | undefined;
        } & {
            code?: number | undefined;
            count?: number | undefined;
        } & Record<Exclude<keyof I["netCodes"][number], "$type" | "code" | "count">, never>)[] & Record<Exclude<keyof I["netCodes"], "$type" | keyof {
            code?: number | undefined;
            count?: number | undefined;
        }[]>, never>) | undefined;
        timeIntervals?: ({
            count?: number | undefined;
            to?: number | undefined;
        }[] & ({
            count?: number | undefined;
            to?: number | undefined;
        } & {
            count?: number | undefined;
            to?: number | undefined;
        } & Record<Exclude<keyof I["timeIntervals"][number], "$type" | "count" | "to">, never>)[] & Record<Exclude<keyof I["timeIntervals"], "$type" | keyof {
            count?: number | undefined;
            to?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "httpCodes" | "time" | "input" | "output" | "overall" | "caseId" | "reqps" | "resps" | "expect" | "connectTime" | "sendTime" | "latency" | "receiveTime" | "threads" | "q50" | "q75" | "q80" | "q85" | "q90" | "q95" | "q98" | "q99" | "q100" | "netCodes" | "timeIntervals">, never>>(object: I): Trail;
};
export declare const Trail_Codes: {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Codes";
    encode(message: Trail_Codes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trail_Codes;
    fromJSON(object: any): Trail_Codes;
    toJSON(message: Trail_Codes): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        count?: number | undefined;
    } & {
        code?: number | undefined;
        count?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "code" | "count">, never>>(object: I): Trail_Codes;
};
export declare const Trail_Intervals: {
    $type: "yandex.cloud.loadtesting.agent.v1.Trail.Intervals";
    encode(message: Trail_Intervals, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trail_Intervals;
    fromJSON(object: any): Trail_Intervals;
    toJSON(message: Trail_Intervals): unknown;
    fromPartial<I extends {
        count?: number | undefined;
        to?: number | undefined;
    } & {
        count?: number | undefined;
        to?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "count" | "to">, never>>(object: I): Trail_Intervals;
};
export declare const CreateTrailResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTrailResponse";
    encode(message: CreateTrailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTrailResponse;
    fromJSON(object: any): CreateTrailResponse;
    toJSON(message: CreateTrailResponse): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        trailId?: string | undefined;
    } & {
        code?: number | undefined;
        trailId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "code" | "trailId">, never>>(object: I): CreateTrailResponse;
};
export declare const TrailServiceService: {
    /** Creates trail for specified job. */
    readonly create: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.TrailService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTrailRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTrailRequest;
        readonly responseSerialize: (value: CreateTrailResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateTrailResponse;
    };
};
export interface TrailServiceServer extends UntypedServiceImplementation {
    /** Creates trail for specified job. */
    create: handleUnaryCall<CreateTrailRequest, CreateTrailResponse>;
}
export interface TrailServiceClient extends Client {
    /** Creates trail for specified job. */
    create(request: CreateTrailRequest, callback: (error: ServiceError | null, response: CreateTrailResponse) => void): ClientUnaryCall;
    create(request: CreateTrailRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateTrailResponse) => void): ClientUnaryCall;
    create(request: CreateTrailRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateTrailResponse) => void): ClientUnaryCall;
}
export declare const TrailServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TrailServiceClient;
    service: typeof TrailServiceService;
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
