/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import { AnnotationRequest, AnnotationResponse } from "../../../../../yandex/cloud/ai/vision/v2/image_classifier";
export declare const protobufPackage = "yandex.cloud.ai.vision.v2";
export declare const ImageClassifierServiceService: {
    readonly annotate: {
        readonly path: "/yandex.cloud.ai.vision.v2.ImageClassifierService/Annotate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AnnotationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AnnotationRequest;
        readonly responseSerialize: (value: AnnotationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AnnotationResponse;
    };
};
export interface ImageClassifierServiceServer extends UntypedServiceImplementation {
    annotate: handleUnaryCall<AnnotationRequest, AnnotationResponse>;
}
export interface ImageClassifierServiceClient extends Client {
    annotate(request: AnnotationRequest, callback: (error: ServiceError | null, response: AnnotationResponse) => void): ClientUnaryCall;
    annotate(request: AnnotationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AnnotationResponse) => void): ClientUnaryCall;
    annotate(request: AnnotationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AnnotationResponse) => void): ClientUnaryCall;
}
export declare const ImageClassifierServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ImageClassifierServiceClient;
    service: typeof ImageClassifierServiceService;
};
