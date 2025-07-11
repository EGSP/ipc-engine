/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface RegisterRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest";
    computeInstanceId: string;
}
export interface RegisterResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse";
    agentInstanceId: string;
}
export interface ExternalAgentRegisterRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest";
    folderId: string;
    computeInstanceId: string;
    name: string;
    agentVersion: string;
}
export interface ExternalAgentRegisterMetadata {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata";
    agentInstanceId: string;
}
export declare const RegisterRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterRequest";
    encode(message: RegisterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterRequest;
    fromJSON(object: any): RegisterRequest;
    toJSON(message: RegisterRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId">, never>>(object: I): RegisterRequest;
};
export declare const RegisterResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.RegisterResponse";
    encode(message: RegisterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterResponse;
    fromJSON(object: any): RegisterResponse;
    toJSON(message: RegisterResponse): unknown;
    fromPartial<I extends {
        agentInstanceId?: string | undefined;
    } & {
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentInstanceId">, never>>(object: I): RegisterResponse;
};
export declare const ExternalAgentRegisterRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterRequest";
    encode(message: ExternalAgentRegisterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalAgentRegisterRequest;
    fromJSON(object: any): ExternalAgentRegisterRequest;
    toJSON(message: ExternalAgentRegisterRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
        agentVersion?: string | undefined;
    } & {
        name?: string | undefined;
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
        agentVersion?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "folderId" | "computeInstanceId" | "agentVersion">, never>>(object: I): ExternalAgentRegisterRequest;
};
export declare const ExternalAgentRegisterMetadata: {
    $type: "yandex.cloud.loadtesting.agent.v1.ExternalAgentRegisterMetadata";
    encode(message: ExternalAgentRegisterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalAgentRegisterMetadata;
    fromJSON(object: any): ExternalAgentRegisterMetadata;
    toJSON(message: ExternalAgentRegisterMetadata): unknown;
    fromPartial<I extends {
        agentInstanceId?: string | undefined;
    } & {
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "agentInstanceId">, never>>(object: I): ExternalAgentRegisterMetadata;
};
export declare const AgentRegistrationServiceService: {
    /** Registers specified agent. */
    readonly register: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegisterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegisterRequest;
        readonly responseSerialize: (value: RegisterResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RegisterResponse;
    };
    /** Registers external agent. */
    readonly externalAgentRegister: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExternalAgentRegisterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExternalAgentRegisterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AgentRegistrationServiceServer extends UntypedServiceImplementation {
    /** Registers specified agent. */
    register: handleUnaryCall<RegisterRequest, RegisterResponse>;
    /** Registers external agent. */
    externalAgentRegister: handleUnaryCall<ExternalAgentRegisterRequest, Operation>;
}
export interface AgentRegistrationServiceClient extends Client {
    /** Registers specified agent. */
    register(request: RegisterRequest, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    register(request: RegisterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    register(request: RegisterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    /** Registers external agent. */
    externalAgentRegister(request: ExternalAgentRegisterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    externalAgentRegister(request: ExternalAgentRegisterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    externalAgentRegister(request: ExternalAgentRegisterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AgentRegistrationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AgentRegistrationServiceClient;
    service: typeof AgentRegistrationServiceService;
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
