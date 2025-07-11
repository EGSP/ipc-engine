/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleBidiStreamingCall, Client, ClientDuplexStream, CallOptions, Metadata, handleUnaryCall, handleServerStreamingCall, ClientUnaryCall, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { StreamingRequest, StreamingResponse, RecognizeFileRequest } from "../../../../../yandex/cloud/ai/stt/v3/stt";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "speechkit.stt.v3";
export interface GetRecognitionRequest {
    $type: "speechkit.stt.v3.GetRecognitionRequest";
    operationId: string;
}
export declare const GetRecognitionRequest: {
    $type: "speechkit.stt.v3.GetRecognitionRequest";
    encode(message: GetRecognitionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRecognitionRequest;
    fromJSON(object: any): GetRecognitionRequest;
    toJSON(message: GetRecognitionRequest): unknown;
    fromPartial<I extends {
        operationId?: string | undefined;
    } & {
        operationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "operationId">, never>>(object: I): GetRecognitionRequest;
};
/** A set of methods for voice recognition. */
export declare const RecognizerService: {
    /** Expects audio in real-time */
    readonly recognizeStreaming: {
        readonly path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamingRequest;
        readonly responseSerialize: (value: StreamingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamingResponse;
    };
};
export interface RecognizerServer extends UntypedServiceImplementation {
    /** Expects audio in real-time */
    recognizeStreaming: handleBidiStreamingCall<StreamingRequest, StreamingResponse>;
}
export interface RecognizerClient extends Client {
    /** Expects audio in real-time */
    recognizeStreaming(): ClientDuplexStream<StreamingRequest, StreamingResponse>;
    recognizeStreaming(options: Partial<CallOptions>): ClientDuplexStream<StreamingRequest, StreamingResponse>;
    recognizeStreaming(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<StreamingRequest, StreamingResponse>;
}
export declare const RecognizerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): RecognizerClient;
    service: typeof RecognizerService;
};
/** A set of methods for async voice recognition. */
export declare const AsyncRecognizerService: {
    readonly recognizeFile: {
        readonly path: "/speechkit.stt.v3.AsyncRecognizer/RecognizeFile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RecognizeFileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RecognizeFileRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly getRecognition: {
        readonly path: "/speechkit.stt.v3.AsyncRecognizer/GetRecognition";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: GetRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRecognitionRequest;
        readonly responseSerialize: (value: StreamingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamingResponse;
    };
};
export interface AsyncRecognizerServer extends UntypedServiceImplementation {
    recognizeFile: handleUnaryCall<RecognizeFileRequest, Operation>;
    getRecognition: handleServerStreamingCall<GetRecognitionRequest, StreamingResponse>;
}
export interface AsyncRecognizerClient extends Client {
    recognizeFile(request: RecognizeFileRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    recognizeFile(request: RecognizeFileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    recognizeFile(request: RecognizeFileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    getRecognition(request: GetRecognitionRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamingResponse>;
    getRecognition(request: GetRecognitionRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamingResponse>;
}
export declare const AsyncRecognizerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): AsyncRecognizerClient;
    service: typeof AsyncRecognizerService;
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
