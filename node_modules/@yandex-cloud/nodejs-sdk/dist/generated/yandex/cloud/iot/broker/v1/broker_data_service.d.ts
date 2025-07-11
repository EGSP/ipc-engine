/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iot.broker.v1";
export interface PublishBrokerDataRequest {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest";
    /** ID of broker publishing message */
    brokerId: string;
    /** Topic where message should be published */
    topic: string;
    /** Content of the message */
    data: Buffer;
}
export interface PublishBrokerDataResponse {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse";
}
export declare const PublishBrokerDataRequest: {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataRequest";
    encode(message: PublishBrokerDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishBrokerDataRequest;
    fromJSON(object: any): PublishBrokerDataRequest;
    toJSON(message: PublishBrokerDataRequest): unknown;
    fromPartial<I extends {
        data?: Buffer | undefined;
        topic?: string | undefined;
        brokerId?: string | undefined;
    } & {
        data?: Buffer | undefined;
        topic?: string | undefined;
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "data" | "topic" | "brokerId">, never>>(object: I): PublishBrokerDataRequest;
};
export declare const PublishBrokerDataResponse: {
    $type: "yandex.cloud.iot.broker.v1.PublishBrokerDataResponse";
    encode(_: PublishBrokerDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishBrokerDataResponse;
    fromJSON(_: any): PublishBrokerDataResponse;
    toJSON(_: PublishBrokerDataResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): PublishBrokerDataResponse;
};
/** A set of methods to work with IoT Core messages on behalf of broker */
export declare const BrokerDataServiceService: {
    /** Publishes message on behalf of specified broker */
    readonly publish: {
        readonly path: "/yandex.cloud.iot.broker.v1.BrokerDataService/Publish";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PublishBrokerDataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PublishBrokerDataRequest;
        readonly responseSerialize: (value: PublishBrokerDataResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PublishBrokerDataResponse;
    };
};
export interface BrokerDataServiceServer extends UntypedServiceImplementation {
    /** Publishes message on behalf of specified broker */
    publish: handleUnaryCall<PublishBrokerDataRequest, PublishBrokerDataResponse>;
}
export interface BrokerDataServiceClient extends Client {
    /** Publishes message on behalf of specified broker */
    publish(request: PublishBrokerDataRequest, callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void): ClientUnaryCall;
    publish(request: PublishBrokerDataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void): ClientUnaryCall;
    publish(request: PublishBrokerDataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PublishBrokerDataResponse) => void): ClientUnaryCall;
}
export declare const BrokerDataServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BrokerDataServiceClient;
    service: typeof BrokerDataServiceService;
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
