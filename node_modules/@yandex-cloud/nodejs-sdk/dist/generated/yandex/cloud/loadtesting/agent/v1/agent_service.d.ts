/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface ClaimAgentStatusRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest";
    agentInstanceId: string;
    status: ClaimAgentStatusRequest_Status;
}
export declare enum ClaimAgentStatusRequest_Status {
    STATUS_UNSPECIFIED = 0,
    READY_FOR_TEST = 1,
    PREPARING_TEST = 2,
    TESTING = 3,
    TANK_FAILED = 4,
    STOPPED = 5,
    UPLOADING_ARTIFACTS = 6,
    UNRECOGNIZED = -1
}
export declare function claimAgentStatusRequest_StatusFromJSON(object: any): ClaimAgentStatusRequest_Status;
export declare function claimAgentStatusRequest_StatusToJSON(object: ClaimAgentStatusRequest_Status): string;
export interface ClaimAgentStatusResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse";
    code: number;
}
export declare const ClaimAgentStatusRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusRequest";
    encode(message: ClaimAgentStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimAgentStatusRequest;
    fromJSON(object: any): ClaimAgentStatusRequest;
    toJSON(message: ClaimAgentStatusRequest): unknown;
    fromPartial<I extends {
        status?: ClaimAgentStatusRequest_Status | undefined;
        agentInstanceId?: string | undefined;
    } & {
        status?: ClaimAgentStatusRequest_Status | undefined;
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "agentInstanceId">, never>>(object: I): ClaimAgentStatusRequest;
};
export declare const ClaimAgentStatusResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimAgentStatusResponse";
    encode(message: ClaimAgentStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimAgentStatusResponse;
    fromJSON(object: any): ClaimAgentStatusResponse;
    toJSON(message: ClaimAgentStatusResponse): unknown;
    fromPartial<I extends {
        code?: number | undefined;
    } & {
        code?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "code">, never>>(object: I): ClaimAgentStatusResponse;
};
export declare const AgentServiceService: {
    /** Claims status for the specified agent. */
    readonly claimStatus: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentService/ClaimStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ClaimAgentStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ClaimAgentStatusRequest;
        readonly responseSerialize: (value: ClaimAgentStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ClaimAgentStatusResponse;
    };
};
export interface AgentServiceServer extends UntypedServiceImplementation {
    /** Claims status for the specified agent. */
    claimStatus: handleUnaryCall<ClaimAgentStatusRequest, ClaimAgentStatusResponse>;
}
export interface AgentServiceClient extends Client {
    /** Claims status for the specified agent. */
    claimStatus(request: ClaimAgentStatusRequest, callback: (error: ServiceError | null, response: ClaimAgentStatusResponse) => void): ClientUnaryCall;
    claimStatus(request: ClaimAgentStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ClaimAgentStatusResponse) => void): ClientUnaryCall;
    claimStatus(request: ClaimAgentStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ClaimAgentStatusResponse) => void): ClientUnaryCall;
}
export declare const AgentServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AgentServiceClient;
    service: typeof AgentServiceService;
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
