/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Connection } from "../../../../../../yandex/cloud/serverless/apigateway/websocket/v1/connection";
export declare const protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";
export interface GetConnectionRequest {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest";
    /** ID of the connection to get. */
    connectionId: string;
}
export interface SendToConnectionRequest {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest";
    /** ID of the connection to which send. */
    connectionId: string;
    /** Data to send. */
    data: Buffer;
    /** Type of the sending data. */
    type: SendToConnectionRequest_DataType;
}
export declare enum SendToConnectionRequest_DataType {
    DATA_TYPE_UNSPECIFIED = 0,
    /** BINARY - Binary data. */
    BINARY = 1,
    /** TEXT - Text data. */
    TEXT = 2,
    UNRECOGNIZED = -1
}
export declare function sendToConnectionRequest_DataTypeFromJSON(object: any): SendToConnectionRequest_DataType;
export declare function sendToConnectionRequest_DataTypeToJSON(object: SendToConnectionRequest_DataType): string;
export interface SendToConnectionResponse {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse";
}
export interface DisconnectRequest {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest";
    /** ID of the connection to disconnect. */
    connectionId: string;
}
export interface DisconnectResponse {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse";
}
export declare const GetConnectionRequest: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.GetConnectionRequest";
    encode(message: GetConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetConnectionRequest;
    fromJSON(object: any): GetConnectionRequest;
    toJSON(message: GetConnectionRequest): unknown;
    fromPartial<I extends {
        connectionId?: string | undefined;
    } & {
        connectionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "connectionId">, never>>(object: I): GetConnectionRequest;
};
export declare const SendToConnectionRequest: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionRequest";
    encode(message: SendToConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendToConnectionRequest;
    fromJSON(object: any): SendToConnectionRequest;
    toJSON(message: SendToConnectionRequest): unknown;
    fromPartial<I extends {
        type?: SendToConnectionRequest_DataType | undefined;
        data?: Buffer | undefined;
        connectionId?: string | undefined;
    } & {
        type?: SendToConnectionRequest_DataType | undefined;
        data?: Buffer | undefined;
        connectionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "data" | "connectionId">, never>>(object: I): SendToConnectionRequest;
};
export declare const SendToConnectionResponse: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.SendToConnectionResponse";
    encode(_: SendToConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendToConnectionResponse;
    fromJSON(_: any): SendToConnectionResponse;
    toJSON(_: SendToConnectionResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SendToConnectionResponse;
};
export declare const DisconnectRequest: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectRequest";
    encode(message: DisconnectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisconnectRequest;
    fromJSON(object: any): DisconnectRequest;
    toJSON(message: DisconnectRequest): unknown;
    fromPartial<I extends {
        connectionId?: string | undefined;
    } & {
        connectionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "connectionId">, never>>(object: I): DisconnectRequest;
};
export declare const DisconnectResponse: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.DisconnectResponse";
    encode(_: DisconnectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisconnectResponse;
    fromJSON(_: any): DisconnectResponse;
    toJSON(_: DisconnectResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): DisconnectResponse;
};
/** A set of methods for managing API Gateway WebSocket connections. */
export declare const ConnectionServiceService: {
    /** Returns the specified connection info. */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetConnectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetConnectionRequest;
        readonly responseSerialize: (value: Connection) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Connection;
    };
    /** Sends data to the specified connection. */
    readonly send: {
        readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Send";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SendToConnectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SendToConnectionRequest;
        readonly responseSerialize: (value: SendToConnectionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SendToConnectionResponse;
    };
    /** Disconnects the specified connection. */
    readonly disconnect: {
        readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Disconnect";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DisconnectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DisconnectRequest;
        readonly responseSerialize: (value: DisconnectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DisconnectResponse;
    };
};
export interface ConnectionServiceServer extends UntypedServiceImplementation {
    /** Returns the specified connection info. */
    get: handleUnaryCall<GetConnectionRequest, Connection>;
    /** Sends data to the specified connection. */
    send: handleUnaryCall<SendToConnectionRequest, SendToConnectionResponse>;
    /** Disconnects the specified connection. */
    disconnect: handleUnaryCall<DisconnectRequest, DisconnectResponse>;
}
export interface ConnectionServiceClient extends Client {
    /** Returns the specified connection info. */
    get(request: GetConnectionRequest, callback: (error: ServiceError | null, response: Connection) => void): ClientUnaryCall;
    get(request: GetConnectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Connection) => void): ClientUnaryCall;
    get(request: GetConnectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Connection) => void): ClientUnaryCall;
    /** Sends data to the specified connection. */
    send(request: SendToConnectionRequest, callback: (error: ServiceError | null, response: SendToConnectionResponse) => void): ClientUnaryCall;
    send(request: SendToConnectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SendToConnectionResponse) => void): ClientUnaryCall;
    send(request: SendToConnectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SendToConnectionResponse) => void): ClientUnaryCall;
    /** Disconnects the specified connection. */
    disconnect(request: DisconnectRequest, callback: (error: ServiceError | null, response: DisconnectResponse) => void): ClientUnaryCall;
    disconnect(request: DisconnectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DisconnectResponse) => void): ClientUnaryCall;
    disconnect(request: DisconnectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DisconnectResponse) => void): ClientUnaryCall;
}
export declare const ConnectionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ConnectionServiceClient;
    service: typeof ConnectionServiceService;
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
