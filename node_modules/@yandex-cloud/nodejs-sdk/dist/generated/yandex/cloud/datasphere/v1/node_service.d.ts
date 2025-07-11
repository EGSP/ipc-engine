/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface NodeExecutionRequest {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest";
    /** ID of the folder that will be matched with Node ACL. */
    folderId: string;
    /** ID of the Node to perform request on. */
    nodeId: string;
    /** Input data for the execution. */
    input?: {
        [key: string]: any;
    };
}
export interface NodeExecutionResponse {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse";
    /** Result of the execution. */
    output?: {
        [key: string]: any;
    };
}
export interface AliasExecutionRequest {
    $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest";
    /** ID of the folder that will be matched with Alias ACL */
    folderId: string;
    /** Name of the Alias to perform request on */
    aliasName: string;
    /** Input data for the execution */
    input?: {
        [key: string]: any;
    };
}
export interface AliasExecutionResponse {
    $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse";
    /** Result of the execution */
    output?: {
        [key: string]: any;
    };
}
export declare const NodeExecutionRequest: {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionRequest";
    encode(message: NodeExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeExecutionRequest;
    fromJSON(object: any): NodeExecutionRequest;
    toJSON(message: NodeExecutionRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        nodeId?: string | undefined;
        input?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        folderId?: string | undefined;
        nodeId?: string | undefined;
        input?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["input"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "nodeId" | "input">, never>>(object: I): NodeExecutionRequest;
};
export declare const NodeExecutionResponse: {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionResponse";
    encode(message: NodeExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeExecutionResponse;
    fromJSON(object: any): NodeExecutionResponse;
    toJSON(message: NodeExecutionResponse): unknown;
    fromPartial<I extends {
        output?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        output?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["output"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "output">, never>>(object: I): NodeExecutionResponse;
};
export declare const AliasExecutionRequest: {
    $type: "yandex.cloud.datasphere.v1.AliasExecutionRequest";
    encode(message: AliasExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AliasExecutionRequest;
    fromJSON(object: any): AliasExecutionRequest;
    toJSON(message: AliasExecutionRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        input?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
        aliasName?: string | undefined;
    } & {
        folderId?: string | undefined;
        input?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["input"], string | number>, never>) | undefined;
        aliasName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "input" | "aliasName">, never>>(object: I): AliasExecutionRequest;
};
export declare const AliasExecutionResponse: {
    $type: "yandex.cloud.datasphere.v1.AliasExecutionResponse";
    encode(message: AliasExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AliasExecutionResponse;
    fromJSON(object: any): AliasExecutionResponse;
    toJSON(message: AliasExecutionResponse): unknown;
    fromPartial<I extends {
        output?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        output?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["output"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "output">, never>>(object: I): AliasExecutionResponse;
};
/** A set of methods for managing Node resources. */
export declare const NodeServiceService: {
    /** Executes deployed Node. */
    readonly execute: {
        readonly path: "/yandex.cloud.datasphere.v1.NodeService/Execute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: NodeExecutionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => NodeExecutionRequest;
        readonly responseSerialize: (value: NodeExecutionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NodeExecutionResponse;
    };
    /** Executes NodeAlias requests. */
    readonly executeAlias: {
        readonly path: "/yandex.cloud.datasphere.v1.NodeService/ExecuteAlias";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AliasExecutionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AliasExecutionRequest;
        readonly responseSerialize: (value: AliasExecutionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AliasExecutionResponse;
    };
};
export interface NodeServiceServer extends UntypedServiceImplementation {
    /** Executes deployed Node. */
    execute: handleUnaryCall<NodeExecutionRequest, NodeExecutionResponse>;
    /** Executes NodeAlias requests. */
    executeAlias: handleUnaryCall<AliasExecutionRequest, AliasExecutionResponse>;
}
export interface NodeServiceClient extends Client {
    /** Executes deployed Node. */
    execute(request: NodeExecutionRequest, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
    execute(request: NodeExecutionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
    execute(request: NodeExecutionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
    /** Executes NodeAlias requests. */
    executeAlias(request: AliasExecutionRequest, callback: (error: ServiceError | null, response: AliasExecutionResponse) => void): ClientUnaryCall;
    executeAlias(request: AliasExecutionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AliasExecutionResponse) => void): ClientUnaryCall;
    executeAlias(request: AliasExecutionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AliasExecutionResponse) => void): ClientUnaryCall;
}
export declare const NodeServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): NodeServiceClient;
    service: typeof NodeServiceService;
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
