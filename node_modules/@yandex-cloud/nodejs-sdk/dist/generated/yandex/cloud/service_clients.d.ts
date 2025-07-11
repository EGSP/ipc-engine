/// <reference types="node" />
import * as cloudApi from '.';
export declare const TextRecognitionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.ocr_service.TextRecognitionServiceClient;
    service: {
        readonly recognize: {
            readonly path: "/yandex.cloud.ai.ocr.v1.TextRecognitionService/Recognize";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.ai.ocr_service.RecognizeTextRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.ocr_service.RecognizeTextRequest;
            readonly responseSerialize: (value: cloudApi.ai.ocr_service.RecognizeTextResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.ocr_service.RecognizeTextResponse;
        };
    };
};
export declare const SttServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.stt_service.SttServiceClient;
    service: {
        readonly longRunningRecognize: {
            readonly path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.stt_service.LongRunningRecognitionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.stt_service.LongRunningRecognitionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly streamingRecognize: {
            readonly path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize";
            readonly requestStream: true;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.ai.stt_service.StreamingRecognitionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.stt_service.StreamingRecognitionRequest;
            readonly responseSerialize: (value: cloudApi.ai.stt_service.StreamingRecognitionResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.stt_service.StreamingRecognitionResponse;
        };
    };
};
export declare const TranslationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.translate_translation_service.TranslationServiceClient;
    service: {
        readonly translate: {
            readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.translate_translation_service.TranslateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.TranslateRequest;
            readonly responseSerialize: (value: cloudApi.ai.translate_translation_service.TranslateResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.TranslateResponse;
        };
        readonly detectLanguage: {
            readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.translate_translation_service.DetectLanguageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.DetectLanguageRequest;
            readonly responseSerialize: (value: cloudApi.ai.translate_translation_service.DetectLanguageResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.DetectLanguageResponse;
        };
        readonly listLanguages: {
            readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.translate_translation_service.ListLanguagesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.ListLanguagesRequest;
            readonly responseSerialize: (value: cloudApi.ai.translate_translation_service.ListLanguagesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.translate_translation_service.ListLanguagesResponse;
        };
    };
};
export declare const SynthesizerClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.tts_service.SynthesizerClient;
    service: {
        readonly utteranceSynthesis: {
            readonly path: "/speechkit.tts.v3.Synthesizer/UtteranceSynthesis";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.ai.tts.UtteranceSynthesisRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.tts.UtteranceSynthesisRequest;
            readonly responseSerialize: (value: cloudApi.ai.tts.UtteranceSynthesisResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.tts.UtteranceSynthesisResponse;
        };
    };
};
export declare const VisionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.vision_service.VisionServiceClient;
    service: {
        readonly batchAnalyze: {
            readonly path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.vision_service.BatchAnalyzeRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.vision_service.BatchAnalyzeRequest;
            readonly responseSerialize: (value: cloudApi.ai.vision_service.BatchAnalyzeResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.vision_service.BatchAnalyzeResponse;
        };
    };
};
export declare const ImageClassifierServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ai.vision_image_classifier_service.ImageClassifierServiceClient;
    service: {
        readonly annotate: {
            readonly path: "/yandex.cloud.ai.vision.v2.ImageClassifierService/Annotate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ai.vision_image_classifier.AnnotationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ai.vision_image_classifier.AnnotationRequest;
            readonly responseSerialize: (value: cloudApi.ai.vision_image_classifier.AnnotationResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ai.vision_image_classifier.AnnotationResponse;
        };
    };
};
export declare const BackendGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.apploadbalancer.backend_group_service.BackendGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.GetBackendGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.GetBackendGroupRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.backend_group.BackendGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group.BackendGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.ListBackendGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.ListBackendGroupsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.backend_group_service.ListBackendGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.ListBackendGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.CreateBackendGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.CreateBackendGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.UpdateBackendGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.UpdateBackendGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.DeleteBackendGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.DeleteBackendGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addBackend: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.AddBackendRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.AddBackendRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeBackend: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.RemoveBackendRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.RemoveBackendRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateBackend: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.UpdateBackendRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.UpdateBackendRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.backend_group_service.ListBackendGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.ListBackendGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.backend_group_service.ListBackendGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.backend_group_service.ListBackendGroupOperationsResponse;
        };
    };
};
export declare const HttpRouterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.apploadbalancer.http_router_service.HttpRouterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.GetHttpRouterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.GetHttpRouterRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.http_router.HttpRouter) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router.HttpRouter;
        };
        readonly list: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.ListHttpRoutersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.ListHttpRoutersRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.http_router_service.ListHttpRoutersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.ListHttpRoutersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.CreateHttpRouterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.CreateHttpRouterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.UpdateHttpRouterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.UpdateHttpRouterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.DeleteHttpRouterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.DeleteHttpRouterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.http_router_service.ListHttpRouterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.ListHttpRouterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.http_router_service.ListHttpRouterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.http_router_service.ListHttpRouterOperationsResponse;
        };
    };
};
export declare const LoadBalancerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.apploadbalancer.load_balancer_service.LoadBalancerServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.GetLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.GetLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.load_balancer.LoadBalancer) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer.LoadBalancer;
        };
        readonly list: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancersRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.CreateLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.CreateLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.UpdateLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.UpdateLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.DeleteLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.DeleteLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.StartLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.StartLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.StopLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.StopLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addListener: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.AddListenerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.AddListenerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeListener: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.RemoveListenerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.RemoveListenerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateListener: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.UpdateListenerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.UpdateListenerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addSniMatch: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.AddSniMatchRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.AddSniMatchRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateSniMatch: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.UpdateSniMatchRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.UpdateSniMatchRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeSniMatch: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.RemoveSniMatchRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.RemoveSniMatchRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getTargetStates: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.GetTargetStatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.GetTargetStatesRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.GetTargetStatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.GetTargetStatesResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancerOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancerOperationsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancerOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.load_balancer_service.ListLoadBalancerOperationsResponse;
        };
    };
};
export declare const AlbTargetGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.apploadbalancer.target_group_service.TargetGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.GetTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.GetTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.target_group.TargetGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group.TargetGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.ListTargetGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.ListTargetGroupsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.target_group_service.ListTargetGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.ListTargetGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.CreateTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.CreateTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.UpdateTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.UpdateTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.DeleteTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.DeleteTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addTargets: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/AddTargets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.AddTargetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.AddTargetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeTargets: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/RemoveTargets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.RemoveTargetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.RemoveTargetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.target_group_service.ListTargetGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.ListTargetGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.target_group_service.ListTargetGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.target_group_service.ListTargetGroupOperationsResponse;
        };
    };
};
export declare const VirtualHostServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.apploadbalancer.virtual_host_service.VirtualHostServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.GetVirtualHostRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.GetVirtualHostRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.virtual_host.VirtualHost) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host.VirtualHost;
        };
        readonly list: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.ListVirtualHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.ListVirtualHostsRequest;
            readonly responseSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.ListVirtualHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.ListVirtualHostsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.CreateVirtualHostRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.CreateVirtualHostRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.UpdateVirtualHostRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.UpdateVirtualHostRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.DeleteVirtualHostRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.DeleteVirtualHostRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeRoute: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.RemoveRouteRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.RemoveRouteRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateRoute: {
            readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.apploadbalancer.virtual_host_service.UpdateRouteRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.apploadbalancer.virtual_host_service.UpdateRouteRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const BackupBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.backup.backup_service.BackupServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.backup.backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListBackupsResponse;
        };
        readonly listArchives: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/ListArchives";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.ListArchivesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListArchivesRequest;
            readonly responseSerialize: (value: cloudApi.backup.backup_service.ListArchivesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListArchivesResponse;
        };
        readonly listFiles: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/ListFiles";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.ListFilesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListFilesRequest;
            readonly responseSerialize: (value: cloudApi.backup.backup_service.ListFilesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.backup_service.ListFilesResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.backup.backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.backup.Backup;
        };
        readonly startRecovery: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/StartRecovery";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.StartRecoveryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.StartRecoveryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly startFilesRecovery: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/StartFilesRecovery";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.StartFilesRecoveryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.StartFilesRecoveryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.backup.v1.BackupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.backup_service.DeleteBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.backup_service.DeleteBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const BackupPolicyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.backup.policy_service.PolicyServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.ListPoliciesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ListPoliciesRequest;
            readonly responseSerialize: (value: cloudApi.backup.policy_service.ListPoliciesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ListPoliciesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.CreatePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.CreatePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.GetPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.GetPolicyRequest;
            readonly responseSerialize: (value: cloudApi.backup.policy.Policy) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.policy.Policy;
        };
        readonly update: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.UpdatePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.UpdatePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.DeletePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.DeletePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly apply: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Apply";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.ApplyPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ApplyPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listApplications: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/ListApplications";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.ListApplicationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ListApplicationsRequest;
            readonly responseSerialize: (value: cloudApi.backup.policy_service.ListApplicationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ListApplicationsResponse;
        };
        readonly execute: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Execute";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.ExecuteRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.ExecuteRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revoke: {
            readonly path: "/yandex.cloud.backup.v1.PolicyService/Revoke";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.policy_service.RevokeRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.policy_service.RevokeRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const BackupProviderServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.backup.provider_service.ProviderServiceClient;
    service: {
        readonly activate: {
            readonly path: "/yandex.cloud.backup.v1.ProviderService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.provider_service.ActivateProviderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.provider_service.ActivateProviderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listActivated: {
            readonly path: "/yandex.cloud.backup.v1.ProviderService/ListActivated";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.provider_service.ListActivatedProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.provider_service.ListActivatedProvidersRequest;
            readonly responseSerialize: (value: cloudApi.backup.provider_service.ListActivatedProvidersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.provider_service.ListActivatedProvidersResponse;
        };
    };
};
export declare const BackupResourceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.backup.resource_service.ResourceServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.ListResourcesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListResourcesRequest;
            readonly responseSerialize: (value: cloudApi.backup.resource_service.ListResourcesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListResourcesResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.GetResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.GetResourceRequest;
            readonly responseSerialize: (value: cloudApi.backup.resource_service.GetResourceResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.resource_service.GetResourceResponse;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.DeleteResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.DeleteResourceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listTasks: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/ListTasks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.ListTasksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListTasksRequest;
            readonly responseSerialize: (value: cloudApi.backup.resource_service.ListTasksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListTasksResponse;
        };
        readonly listDirectory: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/ListDirectory";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.ListDirectoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListDirectoryRequest;
            readonly responseSerialize: (value: cloudApi.backup.resource_service.ListDirectoryResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.backup.resource_service.ListDirectoryResponse;
        };
        readonly createDirectory: {
            readonly path: "/yandex.cloud.backup.v1.ResourceService/CreateDirectory";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.backup.resource_service.CreateDirectoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.backup.resource_service.CreateDirectoryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const BillingAccountServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.billing.billing_account_service.BillingAccountServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.billing_account_service.GetBillingAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.GetBillingAccountRequest;
            readonly responseSerialize: (value: cloudApi.billing.billing_account.BillingAccount) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.billing_account.BillingAccount;
        };
        readonly list: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.billing_account_service.ListBillingAccountsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.ListBillingAccountsRequest;
            readonly responseSerialize: (value: cloudApi.billing.billing_account_service.ListBillingAccountsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.ListBillingAccountsResponse;
        };
        readonly listBillableObjectBindings: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.billing_account_service.ListBillableObjectBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.ListBillableObjectBindingsRequest;
            readonly responseSerialize: (value: cloudApi.billing.billing_account_service.ListBillableObjectBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.ListBillableObjectBindingsResponse;
        };
        readonly bindBillableObject: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.billing_account_service.BindBillableObjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.billing_account_service.BindBillableObjectRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const BudgetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.billing.budget_service.BudgetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.billing.v1.BudgetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.budget_service.GetBudgetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.budget_service.GetBudgetRequest;
            readonly responseSerialize: (value: cloudApi.billing.budget.Budget) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.budget.Budget;
        };
        readonly list: {
            readonly path: "/yandex.cloud.billing.v1.BudgetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.budget_service.ListBudgetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.budget_service.ListBudgetsRequest;
            readonly responseSerialize: (value: cloudApi.billing.budget_service.ListBudgetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.budget_service.ListBudgetsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.billing.v1.BudgetService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.budget_service.CreateBudgetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.budget_service.CreateBudgetRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CustomerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.billing.customer_service.CustomerServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.billing.v1.CustomerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.customer_service.ListCustomersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.customer_service.ListCustomersRequest;
            readonly responseSerialize: (value: cloudApi.billing.customer_service.ListCustomersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.customer_service.ListCustomersResponse;
        };
        readonly invite: {
            readonly path: "/yandex.cloud.billing.v1.CustomerService/Invite";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.customer_service.InviteCustomerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.customer_service.InviteCustomerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly createResellerServed: {
            readonly path: "/yandex.cloud.billing.v1.CustomerService/CreateResellerServed";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.customer_service.CreateResellerServedCustomerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.customer_service.CreateResellerServedCustomerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly activate: {
            readonly path: "/yandex.cloud.billing.v1.CustomerService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.customer_service.ActivateCustomerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.customer_service.ActivateCustomerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly suspend: {
            readonly path: "/yandex.cloud.billing.v1.CustomerService/Suspend";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.customer_service.SuspendCustomerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.customer_service.SuspendCustomerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ServiceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.billing.service_service.ServiceServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.billing.v1.ServiceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.service_service.GetServiceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.service_service.GetServiceRequest;
            readonly responseSerialize: (value: cloudApi.billing.service.Service) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.service.Service;
        };
        readonly list: {
            readonly path: "/yandex.cloud.billing.v1.ServiceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.service_service.ListServicesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.service_service.ListServicesRequest;
            readonly responseSerialize: (value: cloudApi.billing.service_service.ListServicesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.service_service.ListServicesResponse;
        };
    };
};
export declare const SkuServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.billing.sku_service.SkuServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.billing.v1.SkuService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.sku_service.GetSkuRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.sku_service.GetSkuRequest;
            readonly responseSerialize: (value: cloudApi.billing.sku.Sku) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.sku.Sku;
        };
        readonly list: {
            readonly path: "/yandex.cloud.billing.v1.SkuService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.billing.sku_service.ListSkusRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.billing.sku_service.ListSkusRequest;
            readonly responseSerialize: (value: cloudApi.billing.sku_service.ListSkusResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.billing.sku_service.ListSkusResponse;
        };
    };
};
export declare const CDNCacheServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.cache_service.CacheServiceClient;
    service: {
        readonly purge: {
            readonly path: "/yandex.cloud.cdn.v1.CacheService/Purge";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.cache_service.PurgeCacheRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.cache_service.PurgeCacheRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly prefetch: {
            readonly path: "/yandex.cloud.cdn.v1.CacheService/Prefetch";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.cache_service.PrefetchCacheRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.cache_service.PrefetchCacheRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CDNOriginGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.origin_group_service.OriginGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_group_service.GetOriginGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.GetOriginGroupRequest;
            readonly responseSerialize: (value: cloudApi.cdn.origin_group.OriginGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.origin_group.OriginGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_group_service.ListOriginGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.ListOriginGroupsRequest;
            readonly responseSerialize: (value: cloudApi.cdn.origin_group_service.ListOriginGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.ListOriginGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_group_service.CreateOriginGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.CreateOriginGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_group_service.UpdateOriginGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.UpdateOriginGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_group_service.DeleteOriginGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_group_service.DeleteOriginGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CDNOriginServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.origin_service.OriginServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.cdn.v1.OriginService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_service.GetOriginRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.GetOriginRequest;
            readonly responseSerialize: (value: cloudApi.cdn.origin.Origin) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.origin.Origin;
        };
        readonly list: {
            readonly path: "/yandex.cloud.cdn.v1.OriginService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_service.ListOriginsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.ListOriginsRequest;
            readonly responseSerialize: (value: cloudApi.cdn.origin_service.ListOriginsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.ListOriginsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.cdn.v1.OriginService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_service.CreateOriginRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.CreateOriginRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.cdn.v1.OriginService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_service.UpdateOriginRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.UpdateOriginRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.cdn.v1.OriginService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.origin_service.DeleteOriginRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.origin_service.DeleteOriginRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CDNProviderServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.provider_service.ProviderServiceClient;
    service: {
        readonly activate: {
            readonly path: "/yandex.cloud.cdn.v1.ProviderService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.provider_service.ActivateProviderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.provider_service.ActivateProviderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listActivated: {
            readonly path: "/yandex.cloud.cdn.v1.ProviderService/ListActivated";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.provider_service.ListActivatedProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.provider_service.ListActivatedProvidersRequest;
            readonly responseSerialize: (value: cloudApi.cdn.provider_service.ListActivatedProvidersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.provider_service.ListActivatedProvidersResponse;
        };
    };
};
export declare const CDNRawLogsServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.raw_logs_service.RawLogsServiceClient;
    service: {
        readonly activate: {
            readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.raw_logs_service.ActivateRawLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.raw_logs_service.ActivateRawLogsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deactivate: {
            readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Deactivate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.raw_logs_service.DeactivateRawLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.raw_logs_service.DeactivateRawLogsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.raw_logs_service.GetRawLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.raw_logs_service.GetRawLogsRequest;
            readonly responseSerialize: (value: cloudApi.cdn.raw_logs_service.GetRawLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.raw_logs_service.GetRawLogsResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.cdn.v1.RawLogsService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.raw_logs_service.UpdateRawLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.raw_logs_service.UpdateRawLogsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CDNResourceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.cdn.resource_service.ResourceServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.GetResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.GetResourceRequest;
            readonly responseSerialize: (value: cloudApi.cdn.resource.Resource) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.resource.Resource;
        };
        readonly list: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.ListResourcesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.ListResourcesRequest;
            readonly responseSerialize: (value: cloudApi.cdn.resource_service.ListResourcesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.ListResourcesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.CreateResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.CreateResourceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.UpdateResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.UpdateResourceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.DeleteResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.DeleteResourceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getProviderCName: {
            readonly path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.cdn.resource_service.GetProviderCNameRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.GetProviderCNameRequest;
            readonly responseSerialize: (value: cloudApi.cdn.resource_service.GetProviderCNameResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.cdn.resource_service.GetProviderCNameResponse;
        };
    };
};
export declare const CertificateContentServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.certificatemanager.certificate_content_service.CertificateContentServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateContentService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_content_service.GetCertificateContentRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_content_service.GetCertificateContentRequest;
            readonly responseSerialize: (value: cloudApi.certificatemanager.certificate_content_service.GetCertificateContentResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_content_service.GetCertificateContentResponse;
        };
    };
};
export declare const CertificateServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.certificatemanager.certificate_service.CertificateServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.GetCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.GetCertificateRequest;
            readonly responseSerialize: (value: cloudApi.certificatemanager.certificate.Certificate) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate.Certificate;
        };
        readonly list: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.ListCertificatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListCertificatesRequest;
            readonly responseSerialize: (value: cloudApi.certificatemanager.certificate_service.ListCertificatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListCertificatesResponse;
        };
        readonly listVersions: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListVersions";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.ListVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListVersionsRequest;
            readonly responseSerialize: (value: cloudApi.certificatemanager.certificate_service.ListVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListVersionsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.CreateCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.CreateCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.UpdateCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.UpdateCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.DeleteCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.DeleteCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly requestNew: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.RequestNewCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.RequestNewCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.certificatemanager.certificate_service.ListCertificateOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListCertificateOperationsRequest;
            readonly responseSerialize: (value: cloudApi.certificatemanager.certificate_service.ListCertificateOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.certificatemanager.certificate_service.ListCertificateOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const DiskPlacementGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.disk_placement_group_service.DiskPlacementGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.GetDiskPlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.GetDiskPlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_placement_group.DiskPlacementGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group.DiskPlacementGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupsRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.CreateDiskPlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.CreateDiskPlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.UpdateDiskPlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.UpdateDiskPlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.DeleteDiskPlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.DeleteDiskPlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listDisks: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupDisksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupDisksRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupDisksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupDisksResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_placement_group_service.ListDiskPlacementGroupOperationsResponse;
        };
    };
};
export declare const DiskServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.disk_service.DiskServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.GetDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.GetDiskRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk.Disk) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk.Disk;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.ListDisksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDisksRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_service.ListDisksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDisksResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.CreateDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.CreateDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.UpdateDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.UpdateDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.DeleteDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.DeleteDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.ListDiskOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDiskOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_service.ListDiskOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDiskOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.MoveDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.MoveDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly relocate: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/Relocate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.RelocateDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.RelocateDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listSnapshotSchedules: {
            readonly path: "/yandex.cloud.compute.v1.DiskService/ListSnapshotSchedules";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_service.ListDiskSnapshotSchedulesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDiskSnapshotSchedulesRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_service.ListDiskSnapshotSchedulesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_service.ListDiskSnapshotSchedulesResponse;
        };
    };
};
export declare const DiskTypeServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.disk_type_service.DiskTypeServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.DiskTypeService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_type_service.GetDiskTypeRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_type_service.GetDiskTypeRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_type.DiskType) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_type.DiskType;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.DiskTypeService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.disk_type_service.ListDiskTypesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.disk_type_service.ListDiskTypesRequest;
            readonly responseSerialize: (value: cloudApi.compute.disk_type_service.ListDiskTypesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.disk_type_service.ListDiskTypesResponse;
        };
    };
};
export declare const FilesystemServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.filesystem_service.FilesystemServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.GetFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.GetFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.compute.filesystem.Filesystem) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.filesystem.Filesystem;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.ListFilesystemsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.ListFilesystemsRequest;
            readonly responseSerialize: (value: cloudApi.compute.filesystem_service.ListFilesystemsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.ListFilesystemsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.CreateFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.CreateFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.UpdateFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.UpdateFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.DeleteFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.DeleteFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.filesystem_service.ListFilesystemOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.ListFilesystemOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.filesystem_service.ListFilesystemOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.filesystem_service.ListFilesystemOperationsResponse;
        };
    };
};
export declare const GpuClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.gpu_cluster_service.GpuClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.GetGpuClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.GetGpuClusterRequest;
            readonly responseSerialize: (value: cloudApi.compute.gpu_cluster.GpuCluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster.GpuCluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClustersRequest;
            readonly responseSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.CreateGpuClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.CreateGpuClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.UpdateGpuClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.UpdateGpuClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.DeleteGpuClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.DeleteGpuClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClusterOperationsResponse;
        };
        readonly listInstances: {
            readonly path: "/yandex.cloud.compute.v1.GpuClusterService/ListInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClusterInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClusterInstancesRequest;
            readonly responseSerialize: (value: cloudApi.compute.gpu_cluster_service.ListGpuClusterInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.gpu_cluster_service.ListGpuClusterInstancesResponse;
        };
    };
};
export declare const HostGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.host_group_service.HostGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.GetHostGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.GetHostGroupRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_group.HostGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_group.HostGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupsRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.CreateHostGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.CreateHostGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.UpdateHostGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.UpdateHostGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.DeleteHostGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.DeleteHostGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupOperationsResponse;
        };
        readonly listInstances: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupInstancesRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupInstancesResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupHostsRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_group_service.ListHostGroupHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_group_service.ListHostGroupHostsResponse;
        };
    };
};
export declare const HostTypeServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.host_type_service.HostTypeServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.HostTypeService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_type_service.GetHostTypeRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_type_service.GetHostTypeRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_type.HostType) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_type.HostType;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.HostTypeService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.host_type_service.ListHostTypesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.host_type_service.ListHostTypesRequest;
            readonly responseSerialize: (value: cloudApi.compute.host_type_service.ListHostTypesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.host_type_service.ListHostTypesResponse;
        };
    };
};
export declare const ComputeImageServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.image_service.ImageServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.GetImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.GetImageRequest;
            readonly responseSerialize: (value: cloudApi.compute.image.Image) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.image.Image;
        };
        readonly getLatestByFamily: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/GetLatestByFamily";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.GetImageLatestByFamilyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.GetImageLatestByFamilyRequest;
            readonly responseSerialize: (value: cloudApi.compute.image.Image) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.image.Image;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.ListImagesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.ListImagesRequest;
            readonly responseSerialize: (value: cloudApi.compute.image_service.ListImagesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.image_service.ListImagesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.CreateImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.CreateImageRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.UpdateImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.UpdateImageRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.DeleteImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.DeleteImageRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.ImageService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.image_service.ListImageOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.image_service.ListImageOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.image_service.ListImageOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.image_service.ListImageOperationsResponse;
        };
    };
};
export declare const InstanceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.instance_service.InstanceServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.GetInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.GetInstanceRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance.Instance) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance.Instance;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.ListInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.ListInstancesRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_service.ListInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_service.ListInstancesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.CreateInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.CreateInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.UpdateInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.UpdateInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.DeleteInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.DeleteInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateMetadata: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.UpdateInstanceMetadataRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.UpdateInstanceMetadataRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getSerialPortOutput: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.GetInstanceSerialPortOutputRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.GetInstanceSerialPortOutputRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_service.GetInstanceSerialPortOutputResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_service.GetInstanceSerialPortOutputResponse;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.StopInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.StopInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.StartInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.StartInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restart: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Restart";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.RestartInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.RestartInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly attachDisk: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.AttachInstanceDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.AttachInstanceDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly detachDisk: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.DetachInstanceDiskRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.DetachInstanceDiskRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly attachFilesystem: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.AttachInstanceFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.AttachInstanceFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly detachFilesystem: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.DetachInstanceFilesystemRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.DetachInstanceFilesystemRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addOneToOneNat: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.AddInstanceOneToOneNatRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.AddInstanceOneToOneNatRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeOneToOneNat: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.RemoveInstanceOneToOneNatRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.RemoveInstanceOneToOneNatRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateNetworkInterface: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.UpdateInstanceNetworkInterfaceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.UpdateInstanceNetworkInterfaceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.ListInstanceOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.ListInstanceOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_service.ListInstanceOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_service.ListInstanceOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.MoveInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.MoveInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly relocate: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/Relocate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_service.RelocateInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_service.RelocateInstanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const PlacementGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.placement_group_service.PlacementGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.GetPlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.GetPlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.compute.placement_group.PlacementGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.placement_group.PlacementGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupsRequest;
            readonly responseSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.CreatePlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.CreatePlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.UpdatePlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.UpdatePlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.DeletePlacementGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.DeletePlacementGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listInstances: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupInstancesRequest;
            readonly responseSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupInstancesResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.placement_group_service.ListPlacementGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.placement_group_service.ListPlacementGroupOperationsResponse;
        };
    };
};
export declare const SnapshotScheduleServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.snapshot_schedule_service.SnapshotScheduleServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.GetSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.GetSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_schedule.SnapshotSchedule) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule.SnapshotSchedule;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotSchedulesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotSchedulesRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotSchedulesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotSchedulesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.CreateSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.CreateSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.UpdateSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.UpdateSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.DeleteSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.DeleteSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateDisks: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/UpdateDisks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.UpdateSnapshotScheduleDisksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.UpdateSnapshotScheduleDisksRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly disable: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Disable";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.DisableSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.DisableSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly enable: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/Enable";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.EnableSnapshotScheduleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.EnableSnapshotScheduleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleOperationsResponse;
        };
        readonly listSnapshots: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListSnapshots";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleSnapshotsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleSnapshotsRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleSnapshotsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleSnapshotsResponse;
        };
        readonly listDisks: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotScheduleService/ListDisks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleDisksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleDisksRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleDisksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_schedule_service.ListSnapshotScheduleDisksResponse;
        };
    };
};
export declare const SnapshotServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.snapshot_service.SnapshotServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.GetSnapshotRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.GetSnapshotRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot.Snapshot) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot.Snapshot;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.ListSnapshotsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.ListSnapshotsRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_service.ListSnapshotsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.ListSnapshotsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.CreateSnapshotRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.CreateSnapshotRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.UpdateSnapshotRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.UpdateSnapshotRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.DeleteSnapshotRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.DeleteSnapshotRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.snapshot_service.ListSnapshotOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.ListSnapshotOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.snapshot_service.ListSnapshotOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.snapshot_service.ListSnapshotOperationsResponse;
        };
    };
};
export declare const ZoneServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.zone_service.ZoneServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.ZoneService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.zone_service.GetZoneRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.zone_service.GetZoneRequest;
            readonly responseSerialize: (value: cloudApi.compute.zone.Zone) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.zone.Zone;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.ZoneService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.zone_service.ListZonesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.zone_service.ListZonesRequest;
            readonly responseSerialize: (value: cloudApi.compute.zone_service.ListZonesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.zone_service.ListZonesResponse;
        };
    };
};
export declare const InstanceGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.compute.instance_group_service.InstanceGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.GetInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.GetInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_group.InstanceGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_group.InstanceGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupsRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.CreateInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.CreateInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly createFromYaml: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.CreateInstanceGroupFromYamlRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.CreateInstanceGroupFromYamlRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.UpdateInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.UpdateInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateFromYaml: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.UpdateInstanceGroupFromYamlRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.UpdateInstanceGroupFromYamlRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.StopInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.StopInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rollingRestart: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRestart";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.RollingRestartRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.RollingRestartRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rollingRecreate: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/RollingRecreate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.RollingRecreateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.RollingRecreateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.StartInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.StartInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.DeleteInstanceGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.DeleteInstanceGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listInstances: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupInstancesRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupInstancesResponse;
        };
        readonly deleteInstances: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.DeleteInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.DeleteInstancesRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stopInstances: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.StopInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.StopInstancesRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupOperationsResponse;
        };
        readonly listLogRecords: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupLogRecordsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupLogRecordsRequest;
            readonly responseSerialize: (value: cloudApi.compute.instance_group_service.ListInstanceGroupLogRecordsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ListInstanceGroupLogRecordsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly resumeProcesses: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.ResumeInstanceGroupProcessesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.ResumeInstanceGroupProcessesRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly pauseProcesses: {
            readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.compute.instance_group_service.PauseInstanceGroupProcessesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.compute.instance_group_service.PauseInstanceGroupProcessesRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CrImageServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.image_service.ImageServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.containerregistry.v1.ImageService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.image_service.ListImagesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.image_service.ListImagesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.image_service.ListImagesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.image_service.ListImagesResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.ImageService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.image_service.GetImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.image_service.GetImageRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.image.Image) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.image.Image;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.containerregistry.v1.ImageService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.image_service.DeleteImageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.image_service.DeleteImageRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LifecyclePolicyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.lifecycle_policy_service.LifecyclePolicyServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.GetLifecyclePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.GetLifecyclePolicyRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.lifecycle_policy.LifecyclePolicy) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy.LifecyclePolicy;
        };
        readonly list: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListLifecyclePoliciesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListLifecyclePoliciesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListLifecyclePoliciesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListLifecyclePoliciesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.CreateLifecyclePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.CreateLifecyclePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.UpdateLifecyclePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.UpdateLifecyclePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.DeleteLifecyclePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.DeleteLifecyclePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly dryRun: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.DryRunLifecyclePolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.DryRunLifecyclePolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getDryRunResult: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.GetDryRunLifecyclePolicyResultRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.GetDryRunLifecyclePolicyResultRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.DryRunLifecyclePolicyResult) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.DryRunLifecyclePolicyResult;
        };
        readonly listDryRunResults: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultsRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultsResponse;
        };
        readonly listDryRunResultAffectedImages: {
            readonly path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultAffectedImagesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultAffectedImagesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.lifecycle_policy_service.ListDryRunLifecyclePolicyResultAffectedImagesResponse;
        };
    };
};
export declare const RegistryServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.registry_service.RegistryServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.GetRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.GetRegistryRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.registry.Registry) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.registry.Registry;
        };
        readonly list: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.ListRegistriesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.ListRegistriesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.registry_service.ListRegistriesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.ListRegistriesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.CreateRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.CreateRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.UpdateRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.UpdateRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.DeleteRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.DeleteRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listIpPermission: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.ListIpPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.ListIpPermissionRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.registry_service.ListIpPermissionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.ListIpPermissionsResponse;
        };
        readonly setIpPermission: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.SetIpPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.SetIpPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateIpPermission: {
            readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.registry_service.UpdateIpPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.registry_service.UpdateIpPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const RepositoryServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.repository_service.RepositoryServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.repository_service.GetRepositoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.GetRepositoryRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.repository.Repository) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.repository.Repository;
        };
        readonly getByName: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/GetByName";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.repository_service.GetRepositoryByNameRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.GetRepositoryByNameRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.repository.Repository) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.repository.Repository;
        };
        readonly list: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.repository_service.ListRepositoriesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.ListRepositoriesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.repository_service.ListRepositoriesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.ListRepositoriesResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly upsert: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Upsert";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.repository_service.UpsertRepositoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.UpsertRepositoryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.repository_service.DeleteRepositoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.repository_service.DeleteRepositoryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ScanPolicyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.scan_policy_service.ScanPolicyServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scan_policy_service.GetScanPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy_service.GetScanPolicyRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scan_policy.ScanPolicy) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy.ScanPolicy;
        };
        readonly getByRegistry: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/GetByRegistry";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scan_policy_service.GetScanPolicyByRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy_service.GetScanPolicyByRegistryRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scan_policy.ScanPolicy) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy.ScanPolicy;
        };
        readonly create: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scan_policy_service.CreateScanPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy_service.CreateScanPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scan_policy_service.UpdateScanPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy_service.UpdateScanPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScanPolicyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scan_policy_service.DeleteScanPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scan_policy_service.DeleteScanPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ScannerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.containerregistry.scanner_service.ScannerServiceClient;
    service: {
        readonly scan: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scanner_service.ScanRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.ScanRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scanner_service.GetScanResultRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.GetScanResultRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scanner.ScanResult) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner.ScanResult;
        };
        readonly getLast: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scanner_service.GetLastScanResultRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.GetLastScanResultRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scanner.ScanResult) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner.ScanResult;
        };
        readonly list: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scanner_service.ListScanResultsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.ListScanResultsRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scanner_service.ListScanResultsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.ListScanResultsResponse;
        };
        readonly listVulnerabilities: {
            readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.containerregistry.scanner_service.ListVulnerabilitiesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.ListVulnerabilitiesRequest;
            readonly responseSerialize: (value: cloudApi.containerregistry.scanner_service.ListVulnerabilitiesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.containerregistry.scanner_service.ListVulnerabilitiesResponse;
        };
    };
};
export declare const DataProcClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClusterOperationsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListClusterHostsResponse;
        };
        readonly listUILinks: {
            readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListUILinks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.cluster_service.ListUILinksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListUILinksRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.cluster_service.ListUILinksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.cluster_service.ListUILinksResponse;
        };
    };
};
export declare const JobServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.job_service.JobServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.dataproc.v1.JobService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.job_service.ListJobsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.ListJobsRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.job_service.ListJobsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.ListJobsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.dataproc.v1.JobService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.job_service.CreateJobRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.CreateJobRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.dataproc.v1.JobService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.job_service.GetJobRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.GetJobRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.job.Job) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.job.Job;
        };
        readonly listLog: {
            readonly path: "/yandex.cloud.dataproc.v1.JobService/ListLog";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.job_service.ListJobLogRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.ListJobLogRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.job_service.ListJobLogResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.ListJobLogResponse;
        };
        readonly cancel: {
            readonly path: "/yandex.cloud.dataproc.v1.JobService/Cancel";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.job_service.CancelJobRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.job_service.CancelJobRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.dataproc.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.dataproc.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const SubclusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.subcluster_service.SubclusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.subcluster_service.GetSubclusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.GetSubclusterRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.subcluster.Subcluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster.Subcluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.subcluster_service.ListSubclustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.ListSubclustersRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.subcluster_service.ListSubclustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.ListSubclustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.subcluster_service.CreateSubclusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.CreateSubclusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.subcluster_service.UpdateSubclusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.UpdateSubclusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.dataproc.v1.SubclusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.subcluster_service.DeleteSubclusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.subcluster_service.DeleteSubclusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ManagerJobServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.manager_job_service.JobServiceClient;
    service: {
        readonly listActive: {
            readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.manager_job_service.ListJobsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.manager_job_service.ListJobsRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.manager_job_service.ListJobsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.manager_job_service.ListJobsResponse;
        };
        readonly updateStatus: {
            readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.manager_job_service.UpdateJobStatusRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.manager_job_service.UpdateJobStatusRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.manager_job_service.UpdateJobStatusResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.manager_job_service.UpdateJobStatusResponse;
        };
    };
};
export declare const DataprocManagerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dataproc.manager_service.DataprocManagerServiceClient;
    service: {
        readonly report: {
            readonly path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dataproc.manager_service.ReportRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dataproc.manager_service.ReportRequest;
            readonly responseSerialize: (value: cloudApi.dataproc.manager_service.ReportReply) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dataproc.manager_service.ReportReply;
        };
    };
};
export declare const AppTokenServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.app_token_service.AppTokenServiceClient;
    service: {
        readonly validate: {
            readonly path: "/yandex.cloud.datasphere.v1.AppTokenService/Validate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.app_token_service.AppTokenValidateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.app_token_service.AppTokenValidateRequest;
            readonly responseSerialize: (value: import("../../google/protobuf/empty").Empty) => Buffer;
            readonly responseDeserialize: (value: Buffer) => import("../../google/protobuf/empty").Empty;
        };
    };
};
export declare const FolderBudgetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.folder_budget_service.FolderBudgetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.folder_budget_service.GetFolderBudgetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.folder_budget_service.GetFolderBudgetRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.folder_budget_service.GetFolderBudgetResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.folder_budget_service.GetFolderBudgetResponse;
        };
        readonly set: {
            readonly path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Set";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.folder_budget_service.SetFolderBudgetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.folder_budget_service.SetFolderBudgetRequest;
            readonly responseSerialize: (value: import("../../google/protobuf/empty").Empty) => Buffer;
            readonly responseDeserialize: (value: Buffer) => import("../../google/protobuf/empty").Empty;
        };
    };
};
export declare const NodeServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.node_service.NodeServiceClient;
    service: {
        readonly execute: {
            readonly path: "/yandex.cloud.datasphere.v1.NodeService/Execute";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.node_service.NodeExecutionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.node_service.NodeExecutionRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.node_service.NodeExecutionResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.node_service.NodeExecutionResponse;
        };
        readonly executeAlias: {
            readonly path: "/yandex.cloud.datasphere.v1.NodeService/ExecuteAlias";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.node_service.AliasExecutionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.node_service.AliasExecutionRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.node_service.AliasExecutionResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.node_service.AliasExecutionResponse;
        };
    };
};
export declare const ProjectDataServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.project_data_service.ProjectDataServiceClient;
    service: {
        readonly uploadFile: {
            readonly path: "/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile";
            readonly requestStream: true;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_data_service.UploadFileRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_data_service.UploadFileRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_data_service.UploadFileResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_data_service.UploadFileResponse;
        };
        readonly downloadFile: {
            readonly path: "/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.datasphere.project_data_service.DownloadFileRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_data_service.DownloadFileRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_data_service.DownloadFileResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_data_service.DownloadFileResponse;
        };
    };
};
export declare const ProjectServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.project_service.ProjectServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.CreateProjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.CreateProjectRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.UpdateProjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.UpdateProjectRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.DeleteProjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.DeleteProjectRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly open: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Open";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.OpenProjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.OpenProjectRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.GetProjectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.GetProjectRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project.Project) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project.Project;
        };
        readonly list: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.ListProjectsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.ListProjectsRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_service.ListProjectsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.ListProjectsResponse;
        };
        readonly getUnitBalance: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/GetUnitBalance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.GetUnitBalanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.GetUnitBalanceRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_service.GetUnitBalanceResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.GetUnitBalanceResponse;
        };
        readonly setUnitBalance: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/SetUnitBalance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.SetUnitBalanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.SetUnitBalanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly execute: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/Execute";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.ProjectExecutionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.ProjectExecutionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getCellOutputs: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/GetCellOutputs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.CellOutputsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.CellOutputsRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_service.CellOutputsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.CellOutputsResponse;
        };
        readonly getStateVariables: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/GetStateVariables";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.project_service.GetStateVariablesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.GetStateVariablesRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.project_service.GetStateVariablesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.project_service.GetStateVariablesResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.ProjectService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const CommunityServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datasphere.community_service.CommunityServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.community_service.CreateCommunityRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.CreateCommunityRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.community_service.GetCommunityRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.GetCommunityRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.community.Community) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.community.Community;
        };
        readonly update: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.community_service.UpdateCommunityRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.UpdateCommunityRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.community_service.DeleteCommunityRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.DeleteCommunityRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly list: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datasphere.community_service.ListCommunitiesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.ListCommunitiesRequest;
            readonly responseSerialize: (value: cloudApi.datasphere.community_service.ListCommunitiesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datasphere.community_service.ListCommunitiesResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.datasphere.v2.CommunityService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const EndpointServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datatransfer.endpoint_service.EndpointServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.endpoint_service.GetEndpointRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.GetEndpointRequest;
            readonly responseSerialize: (value: cloudApi.datatransfer.endpoint.Endpoint) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint.Endpoint;
        };
        readonly list: {
            readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.endpoint_service.ListEndpointsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.ListEndpointsRequest;
            readonly responseSerialize: (value: cloudApi.datatransfer.endpoint_service.ListEndpointsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.ListEndpointsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.endpoint_service.CreateEndpointRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.CreateEndpointRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.endpoint_service.UpdateEndpointRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.UpdateEndpointRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.endpoint_service.DeleteEndpointRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.endpoint_service.DeleteEndpointRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const TransferServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.datatransfer.transfer_service.TransferServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.CreateTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.CreateTransferRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.UpdateTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.UpdateTransferRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.DeleteTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.DeleteTransferRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly list: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.ListTransfersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.ListTransfersRequest;
            readonly responseSerialize: (value: cloudApi.datatransfer.transfer_service.ListTransfersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.ListTransfersResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.GetTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.GetTransferRequest;
            readonly responseSerialize: (value: cloudApi.datatransfer.transfer.Transfer) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer.Transfer;
        };
        readonly deactivate: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.DeactivateTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.DeactivateTransferRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly activate: {
            readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.datatransfer.transfer_service.ActivateTransferRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.datatransfer.transfer_service.ActivateTransferRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const DnsZoneServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.dns.dns_zone_service.DnsZoneServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.GetDnsZoneRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.GetDnsZoneRequest;
            readonly responseSerialize: (value: cloudApi.dns.dns_zone.DnsZone) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dns.dns_zone.DnsZone;
        };
        readonly list: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZonesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZonesRequest;
            readonly responseSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZonesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZonesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.CreateDnsZoneRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.CreateDnsZoneRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.UpdateDnsZoneRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.UpdateDnsZoneRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.DeleteDnsZoneRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.DeleteDnsZoneRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getRecordSet: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.GetDnsZoneRecordSetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.GetDnsZoneRecordSetRequest;
            readonly responseSerialize: (value: cloudApi.dns.dns_zone.RecordSet) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dns.dns_zone.RecordSet;
        };
        readonly listRecordSets: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZoneRecordSetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZoneRecordSetsRequest;
            readonly responseSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZoneRecordSetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZoneRecordSetsResponse;
        };
        readonly updateRecordSets: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.UpdateRecordSetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.UpdateRecordSetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly upsertRecordSets: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.UpsertRecordSetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.UpsertRecordSetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZoneOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZoneOperationsRequest;
            readonly responseSerialize: (value: cloudApi.dns.dns_zone_service.ListDnsZoneOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.ListDnsZoneOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updatePrivateNetworks: {
            readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdatePrivateNetworks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.dns.dns_zone_service.UpdateDnsZonePrivateNetworksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.dns.dns_zone_service.UpdateDnsZonePrivateNetworksRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ApiEndpointServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.endpoint.api_endpoint_service.ApiEndpointServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.endpoint.ApiEndpointService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.endpoint.api_endpoint_service.GetApiEndpointRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.endpoint.api_endpoint_service.GetApiEndpointRequest;
            readonly responseSerialize: (value: cloudApi.endpoint.api_endpoint.ApiEndpoint) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.endpoint.api_endpoint.ApiEndpoint;
        };
        readonly list: {
            readonly path: "/yandex.cloud.endpoint.ApiEndpointService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.endpoint.api_endpoint_service.ListApiEndpointsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.endpoint.api_endpoint_service.ListApiEndpointsRequest;
            readonly responseSerialize: (value: cloudApi.endpoint.api_endpoint_service.ListApiEndpointsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.endpoint.api_endpoint_service.ListApiEndpointsResponse;
        };
    };
};
export declare const ApiKeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.api_key_service.ApiKeyServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.ListApiKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.ListApiKeysRequest;
            readonly responseSerialize: (value: cloudApi.iam.api_key_service.ListApiKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.ListApiKeysResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.GetApiKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.GetApiKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.api_key.ApiKey) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.api_key.ApiKey;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.CreateApiKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.CreateApiKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.api_key_service.CreateApiKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.CreateApiKeyResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.UpdateApiKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.UpdateApiKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.DeleteApiKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.DeleteApiKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iam.v1.ApiKeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.api_key_service.ListApiKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.ListApiKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iam.api_key_service.ListApiKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.api_key_service.ListApiKeyOperationsResponse;
        };
    };
};
export declare const IamTokenServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.iam_token_service.IamTokenServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.iam.v1.IamTokenService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.iam_token_service.CreateIamTokenRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.iam_token_service.CreateIamTokenRequest;
            readonly responseSerialize: (value: cloudApi.iam.iam_token_service.CreateIamTokenResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.iam_token_service.CreateIamTokenResponse;
        };
        readonly createForServiceAccount: {
            readonly path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.iam_token_service.CreateIamTokenForServiceAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.iam_token_service.CreateIamTokenForServiceAccountRequest;
            readonly responseSerialize: (value: cloudApi.iam.iam_token_service.CreateIamTokenResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.iam_token_service.CreateIamTokenResponse;
        };
    };
};
export declare const KeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.key_service.KeyServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.GetKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.GetKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.key.Key) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.key.Key;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.ListKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.ListKeysRequest;
            readonly responseSerialize: (value: cloudApi.iam.key_service.ListKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.key_service.ListKeysResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.CreateKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.CreateKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.key_service.CreateKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.key_service.CreateKeyResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.UpdateKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.UpdateKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.DeleteKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.DeleteKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iam.v1.KeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.key_service.ListKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.key_service.ListKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iam.key_service.ListKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.key_service.ListKeyOperationsResponse;
        };
    };
};
export declare const RoleServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.role_service.RoleServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.RoleService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.role_service.GetRoleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.role_service.GetRoleRequest;
            readonly responseSerialize: (value: cloudApi.iam.role.Role) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.role.Role;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iam.v1.RoleService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.role_service.ListRolesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.role_service.ListRolesRequest;
            readonly responseSerialize: (value: cloudApi.iam.role_service.ListRolesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.role_service.ListRolesResponse;
        };
    };
};
export declare const ServiceAccountServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.service_account_service.ServiceAccountServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.GetServiceAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.GetServiceAccountRequest;
            readonly responseSerialize: (value: cloudApi.iam.service_account.ServiceAccount) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.service_account.ServiceAccount;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.ListServiceAccountsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.ListServiceAccountsRequest;
            readonly responseSerialize: (value: cloudApi.iam.service_account_service.ListServiceAccountsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.ListServiceAccountsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.CreateServiceAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.CreateServiceAccountRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.UpdateServiceAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.UpdateServiceAccountRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.DeleteServiceAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.DeleteServiceAccountRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.service_account_service.ListServiceAccountOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.ListServiceAccountOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iam.service_account_service.ListServiceAccountOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.service_account_service.ListServiceAccountOperationsResponse;
        };
    };
};
export declare const UserAccountServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.user_account_service.UserAccountServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.UserAccountService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.user_account_service.GetUserAccountRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.user_account_service.GetUserAccountRequest;
            readonly responseSerialize: (value: cloudApi.iam.user_account.UserAccount) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.user_account.UserAccount;
        };
    };
};
export declare const YandexPassportUserAccountServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.yandex_passport_user_account_service.YandexPassportUserAccountServiceClient;
    service: {
        readonly getByLogin: {
            readonly path: "/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.yandex_passport_user_account_service.GetUserAccountByLoginRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.yandex_passport_user_account_service.GetUserAccountByLoginRequest;
            readonly responseSerialize: (value: cloudApi.iam.user_account.UserAccount) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.user_account.UserAccount;
        };
    };
};
export declare const AccessKeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iam.access_key_service.AccessKeyServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.ListAccessKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.ListAccessKeysRequest;
            readonly responseSerialize: (value: cloudApi.iam.access_key_service.ListAccessKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.ListAccessKeysResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.GetAccessKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.GetAccessKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.access_key.AccessKey) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.access_key.AccessKey;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.CreateAccessKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.CreateAccessKeyRequest;
            readonly responseSerialize: (value: cloudApi.iam.access_key_service.CreateAccessKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.CreateAccessKeyResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.UpdateAccessKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.UpdateAccessKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.DeleteAccessKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.DeleteAccessKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iam.access_key_service.ListAccessKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.ListAccessKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iam.access_key_service.ListAccessKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iam.access_key_service.ListAccessKeyOperationsResponse;
        };
    };
};
export declare const BrokerDataServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.broker_broker_data_service.BrokerDataServiceClient;
    service: {
        readonly publish: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerDataService/Publish";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_broker_data_service.PublishBrokerDataRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_broker_data_service.PublishBrokerDataRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker_broker_data_service.PublishBrokerDataResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker_broker_data_service.PublishBrokerDataResponse;
        };
    };
};
export declare const BrokerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.broker_service.BrokerServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.GetBrokerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.GetBrokerRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker.Broker) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker.Broker;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.ListBrokersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokersRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker_service.ListBrokersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.CreateBrokerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.CreateBrokerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.UpdateBrokerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.UpdateBrokerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.DeleteBrokerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.DeleteBrokerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listCertificates: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListCertificates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.ListBrokerCertificatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerCertificatesRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker_service.ListBrokerCertificatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerCertificatesResponse;
        };
        readonly addCertificate: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/AddCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.AddBrokerCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.AddBrokerCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteCertificate: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/DeleteCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.DeleteBrokerCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.DeleteBrokerCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listPasswords: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListPasswords";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.ListBrokerPasswordsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerPasswordsRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker_service.ListBrokerPasswordsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerPasswordsResponse;
        };
        readonly addPassword: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/AddPassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.AddBrokerPasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.AddBrokerPasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deletePassword: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/DeletePassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.DeleteBrokerPasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.DeleteBrokerPasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iot.broker.v1.BrokerService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.broker_service.ListBrokerOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iot.broker_service.ListBrokerOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.broker_service.ListBrokerOperationsResponse;
        };
    };
};
export declare const DeviceDataServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.devices_device_data_service.DeviceDataServiceClient;
    service: {
        readonly publish: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceDataService/Publish";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_data_service.PublishDeviceDataRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_data_service.PublishDeviceDataRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device_data_service.PublishDeviceDataResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device_data_service.PublishDeviceDataResponse;
        };
    };
};
export declare const DeviceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.devices_device_service.DeviceServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.GetDeviceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.GetDeviceRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device.Device) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device.Device;
        };
        readonly getByName: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.GetByNameDeviceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.GetByNameDeviceRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device.Device) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device.Device;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.ListDevicesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDevicesRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device_service.ListDevicesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDevicesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.CreateDeviceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.CreateDeviceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.UpdateDeviceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.UpdateDeviceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.DeleteDeviceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.DeleteDeviceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listCertificates: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.ListDeviceCertificatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDeviceCertificatesRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device_service.ListDeviceCertificatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDeviceCertificatesResponse;
        };
        readonly addCertificate: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.AddDeviceCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.AddDeviceCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteCertificate: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.DeleteDeviceCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.DeleteDeviceCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listPasswords: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.ListDevicePasswordsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDevicePasswordsRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device_service.ListDevicePasswordsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDevicePasswordsResponse;
        };
        readonly addPassword: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.AddDevicePasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.AddDevicePasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deletePassword: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.DeleteDevicePasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.DeleteDevicePasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_device_service.ListDeviceOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDeviceOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_device_service.ListDeviceOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_device_service.ListDeviceOperationsResponse;
        };
    };
};
export declare const RegistryDataServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.devices_registry_data_service.RegistryDataServiceClient;
    service: {
        readonly publish: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryDataService/Publish";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_data_service.PublishRegistryDataRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_data_service.PublishRegistryDataRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_data_service.PublishRegistryDataResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_data_service.PublishRegistryDataResponse;
        };
    };
};
export declare const IotRegistryServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.iot.devices_registry_service.RegistryServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.GetRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.GetRegistryRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry.Registry) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry.Registry;
        };
        readonly getByName: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/GetByName";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.GetByNameRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.GetByNameRegistryRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry.Registry) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry.Registry;
        };
        readonly list: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistriesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistriesRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistriesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistriesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.CreateRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.CreateRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.UpdateRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.UpdateRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.DeleteRegistryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.DeleteRegistryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listCertificates: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryCertificatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryCertificatesRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryCertificatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryCertificatesResponse;
        };
        readonly addCertificate: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.AddRegistryCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.AddRegistryCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteCertificate: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.DeleteRegistryCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.DeleteRegistryCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listPasswords: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryPasswordsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryPasswordsRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryPasswordsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryPasswordsResponse;
        };
        readonly addPassword: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/AddPassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.AddRegistryPasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.AddRegistryPasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deletePassword: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.DeleteRegistryPasswordRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.DeleteRegistryPasswordRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listDeviceTopicAliases: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListDeviceTopicAliasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListDeviceTopicAliasesRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListDeviceTopicAliasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListDeviceTopicAliasesResponse;
        };
        readonly listDataStreamExports: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListDataStreamExports";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListDataStreamExportsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListDataStreamExportsRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListDataStreamExportsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListDataStreamExportsResponse;
        };
        readonly addDataStreamExport: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/AddDataStreamExport";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.AddDataStreamExportRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.AddDataStreamExportRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteDataStreamExport: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/DeleteDataStreamExport";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.DeleteDataStreamExportRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.DeleteDataStreamExportRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.iot.devices.v1.RegistryService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryOperationsRequest;
            readonly responseSerialize: (value: cloudApi.iot.devices_registry_service.ListRegistryOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.iot.devices_registry_service.ListRegistryOperationsResponse;
        };
    };
};
export declare const K8sClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.k8s.cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.k8s.cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.k8s.cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listNodeGroups: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.ListClusterNodeGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterNodeGroupsRequest;
            readonly responseSerialize: (value: cloudApi.k8s.cluster_service.ListClusterNodeGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterNodeGroupsResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.k8s.cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterOperationsResponse;
        };
        readonly listNodes: {
            readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.cluster_service.ListClusterNodesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterNodesRequest;
            readonly responseSerialize: (value: cloudApi.k8s.cluster_service.ListClusterNodesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.cluster_service.ListClusterNodesResponse;
        };
    };
};
export declare const NodeGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.k8s.node_group_service.NodeGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.GetNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.GetNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.k8s.node_group.NodeGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.node_group.NodeGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupsRequest;
            readonly responseSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.CreateNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.CreateNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.UpdateNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.UpdateNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.DeleteNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.DeleteNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupOperationsResponse;
        };
        readonly listNodes: {
            readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupNodesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupNodesRequest;
            readonly responseSerialize: (value: cloudApi.k8s.node_group_service.ListNodeGroupNodesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.node_group_service.ListNodeGroupNodesResponse;
        };
    };
};
export declare const VersionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.k8s.version_service.VersionServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.k8s.v1.VersionService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.k8s.version_service.ListVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.k8s.version_service.ListVersionsRequest;
            readonly responseSerialize: (value: cloudApi.k8s.version_service.ListVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.k8s.version_service.ListVersionsResponse;
        };
    };
};
export declare const SymmetricCryptoServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.symmetric_crypto_service.SymmetricCryptoServiceClient;
    service: {
        readonly encrypt: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricEncryptRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricEncryptRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricEncryptResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricEncryptResponse;
        };
        readonly decrypt: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricDecryptRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricDecryptRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricDecryptResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricDecryptResponse;
        };
        readonly reEncrypt: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricReEncryptRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricReEncryptRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_crypto_service.SymmetricReEncryptResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.SymmetricReEncryptResponse;
        };
        readonly generateDataKey: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_crypto_service.GenerateDataKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.GenerateDataKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_crypto_service.GenerateDataKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_crypto_service.GenerateDataKeyResponse;
        };
    };
};
export declare const SymmetricKeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.symmetric_key_service.SymmetricKeyServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.CreateSymmetricKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.CreateSymmetricKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.GetSymmetricKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.GetSymmetricKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_key.SymmetricKey) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key.SymmetricKey;
        };
        readonly list: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeysRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeysResponse;
        };
        readonly listVersions: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeyVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeyVersionsRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeyVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeyVersionsResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.UpdateSymmetricKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.UpdateSymmetricKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.DeleteSymmetricKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.DeleteSymmetricKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly setPrimaryVersion: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.SetPrimarySymmetricKeyVersionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.SetPrimarySymmetricKeyVersionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly scheduleVersionDestruction: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.ScheduleSymmetricKeyVersionDestructionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ScheduleSymmetricKeyVersionDestructionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly cancelVersionDestruction: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.CancelSymmetricKeyVersionDestructionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.CancelSymmetricKeyVersionDestructionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rotate: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/Rotate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.RotateSymmetricKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.RotateSymmetricKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.kms.symmetric_key_service.ListSymmetricKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.symmetric_key_service.ListSymmetricKeyOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const AsymmetricEncryptionCryptoServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricEncryptionCryptoServiceClient;
    service: {
        readonly decrypt: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/Decrypt";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricDecryptRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricDecryptRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricDecryptResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricDecryptResponse;
        };
        readonly getPublicKey: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionCryptoService/GetPublicKey";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricGetPublicKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricGetPublicKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricGetPublicKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricGetPublicKeyResponse;
        };
    };
};
export declare const AsymmetricEncryptionKeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.asymmetric_encryption_key_service.AsymmetricEncryptionKeyServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.CreateAsymmetricEncryptionKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.CreateAsymmetricEncryptionKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.GetAsymmetricEncryptionKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.GetAsymmetricEncryptionKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_encryption_key.AsymmetricEncryptionKey) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key.AsymmetricEncryptionKey;
        };
        readonly list: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeysRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeysResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.UpdateAsymmetricEncryptionKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.UpdateAsymmetricEncryptionKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.DeleteAsymmetricEncryptionKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.DeleteAsymmetricEncryptionKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_encryption_key_service.ListAsymmetricEncryptionKeyOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricencryption.AsymmetricEncryptionKeyService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const AsymmetricSignatureCryptoServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignatureCryptoServiceClient;
    service: {
        readonly sign: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/Sign";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignResponse;
        };
        readonly signHash: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/SignHash";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignHashRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignHashRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignHashResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignHashResponse;
        };
        readonly getPublicKey: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureCryptoService/GetPublicKey";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricGetPublicKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricGetPublicKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricGetPublicKeyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricGetPublicKeyResponse;
        };
    };
};
export declare const AsymmetricSignatureKeyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.kms.asymmetric_signature_key_service.AsymmetricSignatureKeyServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.CreateAsymmetricSignatureKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.CreateAsymmetricSignatureKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.GetAsymmetricSignatureKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.GetAsymmetricSignatureKeyRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_key.AsymmetricSignatureKey) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key.AsymmetricSignatureKey;
        };
        readonly list: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeysRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeysResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.UpdateAsymmetricSignatureKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.UpdateAsymmetricSignatureKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.DeleteAsymmetricSignatureKeyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.DeleteAsymmetricSignatureKeyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.kms.asymmetric_signature_key_service.ListAsymmetricSignatureKeyOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.kms.v1.asymmetricsignature.AsymmetricSignatureKeyService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const NetworkLoadBalancerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadbalancer.network_load_balancer_service.NetworkLoadBalancerServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.GetNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.GetNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.network_load_balancer.NetworkLoadBalancer) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer.NetworkLoadBalancer;
        };
        readonly list: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancersRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.CreateNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.CreateNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.UpdateNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.UpdateNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.DeleteNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.DeleteNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.StartNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.StartNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.StopNetworkLoadBalancerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.StopNetworkLoadBalancerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly attachTargetGroup: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.AttachNetworkLoadBalancerTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.AttachNetworkLoadBalancerTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly detachTargetGroup: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.DetachNetworkLoadBalancerTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.DetachNetworkLoadBalancerTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getTargetStates: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.GetTargetStatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.GetTargetStatesRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.GetTargetStatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.GetTargetStatesResponse;
        };
        readonly addListener: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.AddNetworkLoadBalancerListenerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.AddNetworkLoadBalancerListenerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeListener: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.RemoveNetworkLoadBalancerListenerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.RemoveNetworkLoadBalancerListenerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancerOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancerOperationsRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancerOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.network_load_balancer_service.ListNetworkLoadBalancerOperationsResponse;
        };
    };
};
export declare const TargetGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadbalancer.target_group_service.TargetGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.GetTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.GetTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.target_group.TargetGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group.TargetGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.ListTargetGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.ListTargetGroupsRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.target_group_service.ListTargetGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.ListTargetGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.CreateTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.CreateTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.UpdateTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.UpdateTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.DeleteTargetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.DeleteTargetGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addTargets: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.AddTargetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.AddTargetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeTargets: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.RemoveTargetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.RemoveTargetsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadbalancer.target_group_service.ListTargetGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.ListTargetGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.loadbalancer.target_group_service.ListTargetGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadbalancer.target_group_service.ListTargetGroupOperationsResponse;
        };
    };
};
export declare const LoadTestingAgentRegistrationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_agent_registration_service.AgentRegistrationServiceClient;
    service: {
        readonly register: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/Register";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_agent_registration_service.RegisterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_agent_registration_service.RegisterRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_agent_registration_service.RegisterResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_agent_registration_service.RegisterResponse;
        };
        readonly externalAgentRegister: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentRegistrationService/ExternalAgentRegister";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_agent_registration_service.ExternalAgentRegisterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_agent_registration_service.ExternalAgentRegisterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LoadTestingAgentServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_service.AgentServiceClient;
    service: {
        readonly claimStatus: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.AgentService/ClaimStatus";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_service.ClaimAgentStatusRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_service.ClaimAgentStatusRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_service.ClaimAgentStatusResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_service.ClaimAgentStatusResponse;
        };
    };
};
export declare const LoadTestingJobServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_job_service.JobServiceClient;
    service: {
        readonly claimStatus: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/ClaimStatus";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_job_service.ClaimJobStatusRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.ClaimJobStatusRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_job_service.ClaimJobStatusResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.ClaimJobStatusResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_job_service.GetJobRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.GetJobRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_job_service.Job) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.Job;
        };
        readonly getSignal: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetSignal";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_job_service.JobSignalRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.JobSignalRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_job_service.JobSignalResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.JobSignalResponse;
        };
        readonly getTransientFile: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetTransientFile";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_job_service.GetJobTransientFile) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.GetJobTransientFile;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_job_service.File) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_job_service.File;
        };
    };
};
export declare const LoadTestingMonitoringServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_monitoring_service.MonitoringServiceClient;
    service: {
        readonly addMetric: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.MonitoringService/AddMetric";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_monitoring_service.AddMetricRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_monitoring_service.AddMetricRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_monitoring_service.AddMetricResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_monitoring_service.AddMetricResponse;
        };
    };
};
export declare const LoadTestingTestServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_test_service.TestServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_test_service.GetTestRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_test_service.GetTestRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_test.Test) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_test.Test;
        };
        readonly create: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_test_service.CreateTestRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_test_service.CreateTestRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_test_service.UpdateTestRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_test_service.UpdateTestRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LoadTestingTrailServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.agent_trail_service.TrailServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.loadtesting.agent.v1.TrailService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.agent_trail_service.CreateTrailRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_trail_service.CreateTrailRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.agent_trail_service.CreateTrailResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.agent_trail_service.CreateTrailResponse;
        };
    };
};
export declare const LoadTestingApiAgentServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.loadtesting.api_agent_service.AgentServiceClient;
    service: {
        readonly create: {
            readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.api_agent_service.CreateAgentRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent_service.CreateAgentRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly get: {
            readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.api_agent_service.GetAgentRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent_service.GetAgentRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.api_agent.Agent) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent.Agent;
        };
        readonly list: {
            readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.api_agent_service.ListAgentsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent_service.ListAgentsRequest;
            readonly responseSerialize: (value: cloudApi.loadtesting.api_agent_service.ListAgentsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent_service.ListAgentsResponse;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.loadtesting.api.v1.AgentService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.loadtesting.api_agent_service.DeleteAgentRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.loadtesting.api_agent_service.DeleteAgentRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const PayloadServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.lockbox.payload_service.PayloadServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.lockbox.v1.PayloadService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.payload_service.GetPayloadRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.payload_service.GetPayloadRequest;
            readonly responseSerialize: (value: cloudApi.lockbox.payload.Payload) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.lockbox.payload.Payload;
        };
    };
};
export declare const SecretServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.lockbox.secret_service.SecretServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.GetSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.GetSecretRequest;
            readonly responseSerialize: (value: cloudApi.lockbox.secret.Secret) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.lockbox.secret.Secret;
        };
        readonly list: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.ListSecretsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListSecretsRequest;
            readonly responseSerialize: (value: cloudApi.lockbox.secret_service.ListSecretsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListSecretsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.CreateSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.CreateSecretRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.UpdateSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.UpdateSecretRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.DeleteSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.DeleteSecretRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly activate: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Activate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.ActivateSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ActivateSecretRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deactivate: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/Deactivate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.DeactivateSecretRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.DeactivateSecretRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listVersions: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListVersions";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.ListVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListVersionsRequest;
            readonly responseSerialize: (value: cloudApi.lockbox.secret_service.ListVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListVersionsResponse;
        };
        readonly addVersion: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/AddVersion";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.AddVersionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.AddVersionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly scheduleVersionDestruction: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.ScheduleVersionDestructionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ScheduleVersionDestructionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly cancelVersionDestruction: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.CancelVersionDestructionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.CancelVersionDestructionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.lockbox.secret_service.ListSecretOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListSecretOperationsRequest;
            readonly responseSerialize: (value: cloudApi.lockbox.secret_service.ListSecretOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.lockbox.secret_service.ListSecretOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ExportServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.logging.export_service.ExportServiceClient;
    service: {
        readonly run: {
            readonly path: "/yandex.cloud.logging.v1.ExportService/Run";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.export_service.RunExportRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.export_service.RunExportRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LogGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.logging.log_group_service.LogGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.GetLogGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.GetLogGroupRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_group.LogGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_group.LogGroup;
        };
        readonly stats: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/Stats";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.GetLogGroupStatsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.GetLogGroupStatsRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_group_service.GetLogGroupStatsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.GetLogGroupStatsResponse;
        };
        readonly list: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.ListLogGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListLogGroupsRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_group_service.ListLogGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListLogGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.CreateLogGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.CreateLogGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.UpdateLogGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.UpdateLogGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.DeleteLogGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.DeleteLogGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listResources: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListResources";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.ListResourcesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListResourcesRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_group_service.ListResourcesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListResourcesResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_group_service.ListOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListOperationsRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_group_service.ListOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_group_service.ListOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LogIngestionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.logging.log_ingestion_service.LogIngestionServiceClient;
    service: {
        readonly write: {
            readonly path: "/yandex.cloud.logging.v1.LogIngestionService/Write";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_ingestion_service.WriteRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_ingestion_service.WriteRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_ingestion_service.WriteResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_ingestion_service.WriteResponse;
        };
    };
};
export declare const LogReadingServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.logging.log_reading_service.LogReadingServiceClient;
    service: {
        readonly read: {
            readonly path: "/yandex.cloud.logging.v1.LogReadingService/Read";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.log_reading_service.ReadRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.log_reading_service.ReadRequest;
            readonly responseSerialize: (value: cloudApi.logging.log_reading_service.ReadResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.log_reading_service.ReadResponse;
        };
    };
};
export declare const SinkServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.logging.sink_service.SinkServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.GetSinkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.GetSinkRequest;
            readonly responseSerialize: (value: cloudApi.logging.sink.Sink) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.sink.Sink;
        };
        readonly list: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.ListSinksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.ListSinksRequest;
            readonly responseSerialize: (value: cloudApi.logging.sink_service.ListSinksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.sink_service.ListSinksResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.CreateSinkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.CreateSinkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.UpdateSinkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.UpdateSinkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.DeleteSinkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.DeleteSinkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.logging.sink_service.ListSinkOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.logging.sink_service.ListSinkOperationsRequest;
            readonly responseSerialize: (value: cloudApi.logging.sink_service.ListSinkOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.logging.sink_service.ListSinkOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.logging.v1.SinkService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MarketplaceInstanceServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.marketplace.licensemanager_instance_service.InstanceServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_instance_service.GetInstanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_instance_service.GetInstanceRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.licensemanager_instance.Instance) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_instance.Instance;
        };
        readonly list: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.InstanceService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_instance_service.ListInstancesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_instance_service.ListInstancesRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.licensemanager_instance_service.ListInstancesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_instance_service.ListInstancesResponse;
        };
    };
};
export declare const MarketplaceLockServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.marketplace.licensemanager_lock_service.LockServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_lock_service.GetLockRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock_service.GetLockRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.licensemanager_lock.Lock) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock.Lock;
        };
        readonly getByInstanceAndResource: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/GetByInstanceAndResource";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_lock_service.GetLockByInstanceAndResourceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock_service.GetLockByInstanceAndResourceRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.licensemanager_lock.Lock) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock.Lock;
        };
        readonly create: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_lock_service.CreateLockRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock_service.CreateLockRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly ensure: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Ensure";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_lock_service.EnsureLockRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock_service.EnsureLockRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.marketplace.licensemanager.v1.LockService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.licensemanager_lock_service.DeleteLockRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.licensemanager_lock_service.DeleteLockRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MarketplaceMeteringImageProductUsageServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.marketplace.metering_image_product_usage_service.ImageProductUsageServiceClient;
    service: {
        readonly write: {
            readonly path: "/yandex.cloud.marketplace.metering.v1.ImageProductUsageService/Write";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.metering_image_product_usage_service.WriteImageProductUsageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.metering_image_product_usage_service.WriteImageProductUsageRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.metering_image_product_usage_service.WriteImageProductUsageResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.metering_image_product_usage_service.WriteImageProductUsageResponse;
        };
    };
};
export declare const MarketplaceImageProductUsageServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.marketplace.image_product_usage_service.ImageProductUsageServiceClient;
    service: {
        readonly write: {
            readonly path: "/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.marketplace.image_product_usage_service.WriteImageProductUsageRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.marketplace.image_product_usage_service.WriteImageProductUsageRequest;
            readonly responseSerialize: (value: cloudApi.marketplace.image_product_usage_service.WriteImageProductUsageResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.marketplace.image_product_usage_service.WriteImageProductUsageResponse;
        };
    };
};
export declare const ClickHouseBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_backup_service.ListBackupsResponse;
        };
    };
};
export declare const ClickHouseClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addZookeeper: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.AddClusterZookeeperRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.AddClusterZookeeperRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateHosts: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.UpdateClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.UpdateClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getShard: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.GetClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.GetClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster.Shard) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster.Shard;
        };
        readonly listShards: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterShardsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterShardsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterShardsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterShardsResponse;
        };
        readonly addShard: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.AddClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.AddClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateShard: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.UpdateClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.UpdateClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteShard: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.DeleteClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.DeleteClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getShardGroup: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.GetClusterShardGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.GetClusterShardGroupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster.ShardGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster.ShardGroup;
        };
        readonly listShardGroups: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterShardGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterShardGroupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterShardGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterShardGroupsResponse;
        };
        readonly createShardGroup: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.CreateClusterShardGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.CreateClusterShardGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateShardGroup: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.UpdateClusterShardGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.UpdateClusterShardGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteShardGroup: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.DeleteClusterShardGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.DeleteClusterShardGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listExternalDictionaries: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListExternalDictionaries";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterExternalDictionariesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterExternalDictionariesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.ListClusterExternalDictionariesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.ListClusterExternalDictionariesResponse;
        };
        readonly createExternalDictionary: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.CreateClusterExternalDictionaryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.CreateClusterExternalDictionaryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateExternalDictionary: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateExternalDictionary";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.UpdateClusterExternalDictionaryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.UpdateClusterExternalDictionaryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteExternalDictionary: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_cluster_service.DeleteClusterExternalDictionaryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_cluster_service.DeleteClusterExternalDictionaryRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const DatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const FormatSchemaServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_format_schema_service.FormatSchemaServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.GetFormatSchemaRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.GetFormatSchemaRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_format_schema.FormatSchema) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema.FormatSchema;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.ListFormatSchemasRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.ListFormatSchemasRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.ListFormatSchemasResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.ListFormatSchemasResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.CreateFormatSchemaRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.CreateFormatSchemaRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.UpdateFormatSchemaRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.UpdateFormatSchemaRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_format_schema_service.DeleteFormatSchemaRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_format_schema_service.DeleteFormatSchemaRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MlModelServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_ml_model_service.MlModelServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.GetMlModelRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.GetMlModelRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_ml_model.MlModel) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model.MlModel;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.ListMlModelsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.ListMlModelsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.ListMlModelsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.ListMlModelsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.CreateMlModelRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.CreateMlModelRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.UpdateMlModelRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.UpdateMlModelRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_ml_model_service.DeleteMlModelRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_ml_model_service.DeleteMlModelRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ClickHouseResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const ClickHouseUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const VersionsServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.clickhouse_versions_service.VersionsServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.mdb.clickhouse.v1.VersionsService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.clickhouse_versions_service.ListVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_versions_service.ListVersionsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.clickhouse_versions_service.ListVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.clickhouse_versions_service.ListVersionsResponse;
        };
    };
};
export declare const AuthServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_auth_service.AuthServiceClient;
    service: {
        readonly listProviders: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.ListAuthProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.ListAuthProvidersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.ListAuthProvidersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.ListAuthProvidersResponse;
        };
        readonly getProvider: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.GetAuthProviderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.GetAuthProviderRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_auth.AuthProvider) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth.AuthProvider;
        };
        readonly addProviders: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.AddAuthProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.AddAuthProvidersRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateProviders: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.UpdateAuthProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.UpdateAuthProvidersRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteProviders: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.DeleteAuthProvidersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.DeleteAuthProvidersRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateProvider: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.UpdateAuthProviderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.UpdateAuthProviderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteProvider: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_auth_service.DeleteAuthProviderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_auth_service.DeleteAuthProviderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ElasticBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_backup_service.ListBackupsResponse;
        };
    };
};
export declare const ElasticClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterBackupsResponse;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterOperationsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ElasticExtensionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_extension_service.ExtensionServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.GetExtensionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.GetExtensionRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_extension.Extension) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension.Extension;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.ListExtensionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.ListExtensionsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.ListExtensionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.ListExtensionsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.CreateExtensionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.CreateExtensionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.UpdateExtensionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.UpdateExtensionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ExtensionService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_extension_service.DeleteExtensionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_extension_service.DeleteExtensionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ElasticResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const ElasticUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.elasticsearch_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.elasticsearch_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.elasticsearch.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.elasticsearch_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.elasticsearch_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const GreenplumBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.greenplum_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_backup_service.ListBackupsResponse;
        };
    };
};
export declare const GreenplumClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.greenplum_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly expand: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Expand";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ExpandRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ExpandRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterOperationsResponse;
        };
        readonly listMasterHosts: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterHostsResponse;
        };
        readonly listSegmentHosts: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterHostsResponse;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.StreamLogRecord;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.ListClusterBackupsResponse;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const GreenplumResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.greenplum_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.greenplum.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.greenplum_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.greenplum_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.greenplum_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const KafkaClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.kafka_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterOperationsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_cluster_service.ListClusterHostsResponse;
        };
    };
};
export declare const ConnectorServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.kafka_connector_service.ConnectorServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.GetConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.GetConnectorRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_connector.Connector) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector.Connector;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.ListConnectorsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.ListConnectorsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_connector_service.ListConnectorsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.ListConnectorsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.CreateConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.CreateConnectorRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.UpdateConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.UpdateConnectorRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.DeleteConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.DeleteConnectorRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly resume: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.ResumeConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.ResumeConnectorRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly pause: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_connector_service.PauseConnectorRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_connector_service.PauseConnectorRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const KafkaResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.kafka_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const TopicServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.kafka_topic_service.TopicServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_topic_service.GetTopicRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.GetTopicRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_topic.Topic) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic.Topic;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_topic_service.ListTopicsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.ListTopicsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_topic_service.ListTopicsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.ListTopicsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_topic_service.CreateTopicRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.CreateTopicRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_topic_service.UpdateTopicRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.UpdateTopicRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_topic_service.DeleteTopicRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_topic_service.DeleteTopicRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const KafkaUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.kafka_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.kafka_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.kafka_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.kafka_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MongoBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mongodb_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_backup_service.ListBackupsResponse;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.BackupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_backup_service.DeleteBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_backup_service.DeleteBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MongoClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mongodb_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly enableSharding: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/EnableSharding";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.EnableClusterShardingRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.EnableClusterShardingRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getShard: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/GetShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.GetClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.GetClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster.Shard) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster.Shard;
        };
        readonly listShards: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListShards";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterShardsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterShardsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ListClusterShardsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ListClusterShardsResponse;
        };
        readonly addShard: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.AddClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.AddClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteShard: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.DeleteClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.DeleteClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly resetupHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ResetupHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.ResetupHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.ResetupHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restartHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RestartHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.RestartHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.RestartHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stepdownHosts: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StepdownHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_cluster_service.StepdownHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_cluster_service.StepdownHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MongoDatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mongodb_database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MongoResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mongodb_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const MongoUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mongodb_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mongodb_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.mongodb.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mongodb_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mongodb_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MysqlBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mysql_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_backup_service.ListBackupsResponse;
        };
    };
};
export declare const MysqlClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mysql_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly startFailover: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/StartFailover";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.StartClusterFailoverRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.StartClusterFailoverRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateHosts: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/UpdateHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.UpdateClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.UpdateClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MysqlDatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mysql_database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const MysqlResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mysql_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const MysqlUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.mysql_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.mysql_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.mysql.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.mysql_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.mysql_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const OpenSearchBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.opensearch_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_backup_service.ListBackupsResponse;
        };
    };
};
export declare const OpenSearchClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.opensearch_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterBackupsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterOperationsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.ListClusterHostsResponse;
        };
        readonly addOpenSearchNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddOpenSearchNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.AddOpenSearchNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.AddOpenSearchNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteOpenSearchNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteOpenSearchNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.DeleteOpenSearchNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.DeleteOpenSearchNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateOpenSearchNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateOpenSearchNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.UpdateOpenSearchNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.UpdateOpenSearchNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addDashboardsNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddDashboardsNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.AddDashboardsNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.AddDashboardsNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteDashboardsNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteDashboardsNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.DeleteDashboardsNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.DeleteDashboardsNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateDashboardsNodeGroup: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateDashboardsNodeGroup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.UpdateDashboardsNodeGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.UpdateDashboardsNodeGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getAuthSettings: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/GetAuthSettings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.GetAuthSettingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.GetAuthSettingsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_auth.AuthSettings) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_auth.AuthSettings;
        };
        readonly updateAuthSettings: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateAuthSettings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_cluster_service.UpdateAuthSettingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_cluster_service.UpdateAuthSettingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const OpenSearchResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.opensearch_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.opensearch.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.opensearch_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.opensearch_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.opensearch_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const PgsqlBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_backup_service.ListBackupsResponse;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.BackupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_backup_service.DeleteBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_backup_service.DeleteBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const PgsqlClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly startFailover: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StartFailover";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.StartClusterFailoverRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.StartClusterFailoverRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateHosts: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ClusterService/UpdateHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_cluster_service.UpdateClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_cluster_service.UpdateClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const PgsqlDatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_database_service.UpdateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.UpdateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const PgsqlPerformanceDiagnosticsServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_perf_diag_service.PerformanceDiagnosticsServiceClient;
    service: {
        readonly listRawSessionStates: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawSessionStates";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_perf_diag_service.ListRawSessionStatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_perf_diag_service.ListRawSessionStatesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_perf_diag_service.ListRawSessionStatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_perf_diag_service.ListRawSessionStatesResponse;
        };
        readonly listRawStatements: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawStatements";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_perf_diag_service.ListRawStatementsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_perf_diag_service.ListRawStatementsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_perf_diag_service.ListRawStatementsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_perf_diag_service.ListRawStatementsResponse;
        };
    };
};
export declare const PgsqlResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const PgsqlUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.postgresql_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.postgresql_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.postgresql.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.postgresql_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.postgresql_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const RedisBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.redis_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.redis.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.redis.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_backup_service.ListBackupsResponse;
        };
    };
};
export declare const RedisClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.redis_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rescheduleMaintenance: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/RescheduleMaintenance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.RescheduleMaintenanceRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.RescheduleMaintenanceRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly startFailover: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/StartFailover";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.StartClusterFailoverRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.StartClusterFailoverRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterLogsResponse;
        };
        readonly streamLogs: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/StreamLogs";
            readonly requestStream: false;
            readonly responseStream: true;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.StreamClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.StreamClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.StreamLogRecord) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.StreamLogRecord;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterHostsResponse;
        };
        readonly addHosts: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.AddClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.AddClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHosts: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.DeleteClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.DeleteClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateHosts: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/UpdateHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.UpdateClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.UpdateClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getShard: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/GetShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.GetClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.GetClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster.Shard) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster.Shard;
        };
        readonly listShards: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListShards";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterShardsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterShardsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_cluster_service.ListClusterShardsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.ListClusterShardsResponse;
        };
        readonly addShard: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.AddClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.AddClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteShard: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteShard";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.DeleteClusterShardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.DeleteClusterShardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rebalance: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Rebalance";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_cluster_service.RebalanceClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_cluster_service.RebalanceClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const RedisResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.redis_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.redis.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.redis_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.redis_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.redis_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.redis_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const SqlServerBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.sqlserver_backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_backup.Backup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_backup_service.ListBackupsResponse;
        };
    };
};
export declare const SqlServerClusterServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.sqlserver_cluster_service.ClusterServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.GetClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.GetClusterRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster.Cluster) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster.Cluster;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClustersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClustersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClustersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClustersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.CreateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.CreateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.UpdateClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.UpdateClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.DeleteClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.DeleteClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.StartClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.StartClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.StopClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.StopClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.MoveClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.MoveClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.BackupClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.BackupClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.RestoreClusterRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.RestoreClusterRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly startFailover: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/StartFailover";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.StartClusterFailoverRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.StartClusterFailoverRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listLogs: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListLogs";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterLogsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterLogsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterLogsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterLogsResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterOperationsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterOperationsResponse;
        };
        readonly listBackups: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListBackups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterBackupsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterBackupsResponse;
        };
        readonly listHosts: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.ListClusterHostsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.ListClusterHostsResponse;
        };
        readonly updateHosts: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/UpdateHosts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_cluster_service.UpdateClusterHostsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_cluster_service.UpdateClusterHostsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const SqlServerDatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.sqlserver_database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.RestoreDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.RestoreDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly importBackup: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ImportBackup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.ImportDatabaseBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.ImportDatabaseBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly exportBackup: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/ExportBackup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.ExportDatabaseBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.ExportDatabaseBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const SqlServerResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.sqlserver_resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const SqlServerUserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.mdb.sqlserver_user_service.UserServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.GetUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.GetUserRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_user.User) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user.User;
        };
        readonly list: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.ListUsersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.ListUsersRequest;
            readonly responseSerialize: (value: cloudApi.mdb.sqlserver_user_service.ListUsersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.ListUsersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.CreateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.CreateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.UpdateUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.UpdateUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.DeleteUserRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.DeleteUserRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly grantPermission: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/GrantPermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.GrantUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.GrantUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly revokePermission: {
            readonly path: "/yandex.cloud.mdb.sqlserver.v1.UserService/RevokePermission";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.mdb.sqlserver_user_service.RevokeUserPermissionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.mdb.sqlserver_user_service.RevokeUserPermissionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const DashboardServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.monitoring.dashboard_service.DashboardServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.GetDashboardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.GetDashboardRequest;
            readonly responseSerialize: (value: cloudApi.monitoring.dashboard.Dashboard) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard.Dashboard;
        };
        readonly list: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.ListDashboardsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.ListDashboardsRequest;
            readonly responseSerialize: (value: cloudApi.monitoring.dashboard_service.ListDashboardsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.ListDashboardsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.CreateDashboardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.CreateDashboardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.UpdateDashboardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.UpdateDashboardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.DeleteDashboardRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.DeleteDashboardRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.monitoring.v3.DashboardService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.monitoring.dashboard_service.ListDashboardOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.ListDashboardOperationsRequest;
            readonly responseSerialize: (value: cloudApi.monitoring.dashboard_service.ListDashboardOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.monitoring.dashboard_service.ListDashboardOperationsResponse;
        };
    };
};
export declare const OperationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.operation.operation_service.OperationServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.operation.OperationService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.operation.operation_service.GetOperationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.operation.operation_service.GetOperationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly cancel: {
            readonly path: "/yandex.cloud.operation.OperationService/Cancel";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.operation.operation_service.CancelOperationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.operation.operation_service.CancelOperationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const GroupMappingServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.group_mapping_service.GroupMappingServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.GetGroupMappingRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.GetGroupMappingRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group_mapping_service.GetGroupMappingResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.GetGroupMappingResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.CreateGroupMappingRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.CreateGroupMappingRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.UpdateGroupMappingRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.UpdateGroupMappingRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.DeleteGroupMappingRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.DeleteGroupMappingRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listItems: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/ListItems";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.ListGroupMappingItemsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.ListGroupMappingItemsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group_mapping_service.ListGroupMappingItemsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.ListGroupMappingItemsResponse;
        };
        readonly updateItems: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupMappingService/UpdateItems";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_mapping_service.UpdateGroupMappingItemsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_mapping_service.UpdateGroupMappingItemsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const GroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.group_service.GroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.GetGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.GetGroupRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group.Group) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group.Group;
        };
        readonly list: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.CreateGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.CreateGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.UpdateGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.UpdateGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.DeleteGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.DeleteGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupOperationsResponse;
        };
        readonly listMembers: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListMembers";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupMembersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupMembersRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.group_service.ListGroupMembersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.ListGroupMembersResponse;
        };
        readonly updateMembers: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateMembers";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.group_service.UpdateGroupMembersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.group_service.UpdateGroupMembersRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.GroupService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const OrganizationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.organization_service.OrganizationServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.organization_service.GetOrganizationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.GetOrganizationRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.organization.Organization) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization.Organization;
        };
        readonly list: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.organization_service.ListOrganizationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.ListOrganizationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.organization_service.ListOrganizationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.ListOrganizationsResponse;
        };
        readonly update: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.organization_service.UpdateOrganizationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.UpdateOrganizationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.organization_service.ListOrganizationOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.ListOrganizationOperationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.organization_service.ListOrganizationOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.organization_service.ListOrganizationOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const SshCertificateServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.ssh_certificate_service.SshCertificateServiceClient;
    service: {
        readonly generate: {
            readonly path: "/yandex.cloud.organizationmanager.v1.SshCertificateService/Generate";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.ssh_certificate_service.GenerateSshCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.ssh_certificate_service.GenerateSshCertificateRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.ssh_certificate_service.GenerateSshCertificateResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.ssh_certificate_service.GenerateSshCertificateResponse;
        };
    };
};
export declare const UserServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.user_service.UserServiceClient;
    service: {
        readonly listMembers: {
            readonly path: "/yandex.cloud.organizationmanager.v1.UserService/ListMembers";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.user_service.ListMembersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.user_service.ListMembersRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.user_service.ListMembersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.user_service.ListMembersResponse;
        };
        readonly deleteMembership: {
            readonly path: "/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.user_service.DeleteMembershipRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.user_service.DeleteMembershipRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const OmCertificateServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.certificate_service.CertificateServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.GetCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.GetCertificateRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.certificate.Certificate) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate.Certificate;
        };
        readonly list: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.ListCertificatesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.ListCertificatesRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.certificate_service.ListCertificatesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.ListCertificatesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.CreateCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.CreateCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.UpdateCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.UpdateCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.DeleteCertificateRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.DeleteCertificateRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.certificate_service.ListCertificateOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.ListCertificateOperationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.certificate_service.ListCertificateOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.certificate_service.ListCertificateOperationsResponse;
        };
    };
};
export declare const FederationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.organizationmanager.federation_service.FederationServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.GetFederationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.GetFederationRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.federation.Federation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation.Federation;
        };
        readonly list: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederationsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.CreateFederationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.CreateFederationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.UpdateFederationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.UpdateFederationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.DeleteFederationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.DeleteFederationRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addUserAccounts: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.AddFederatedUserAccountsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.AddFederatedUserAccountsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listUserAccounts: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederatedUserAccountsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederatedUserAccountsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederatedUserAccountsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederatedUserAccountsResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederationOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederationOperationsRequest;
            readonly responseSerialize: (value: cloudApi.organizationmanager.federation_service.ListFederationOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.organizationmanager.federation_service.ListFederationOperationsResponse;
        };
    };
};
export declare const CloudServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.resourcemanager.cloud_service.CloudServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.GetCloudRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.GetCloudRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.cloud.Cloud) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud.Cloud;
        };
        readonly list: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.ListCloudsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.ListCloudsRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.cloud_service.ListCloudsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.ListCloudsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.CreateCloudRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.CreateCloudRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.UpdateCloudRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.UpdateCloudRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.DeleteCloudRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.DeleteCloudRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.cloud_service.ListCloudOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.ListCloudOperationsRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.cloud_service.ListCloudOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.cloud_service.ListCloudOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const FolderServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.resourcemanager.folder_service.FolderServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.GetFolderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.GetFolderRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.folder.Folder) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder.Folder;
        };
        readonly list: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.ListFoldersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.ListFoldersRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.folder_service.ListFoldersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.ListFoldersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.CreateFolderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.CreateFolderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.UpdateFolderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.UpdateFolderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.DeleteFolderRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.DeleteFolderRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.resourcemanager.folder_service.ListFolderOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.ListFolderOperationsRequest;
            readonly responseSerialize: (value: cloudApi.resourcemanager.folder_service.ListFolderOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.resourcemanager.folder_service.ListFolderOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ApiGatewayServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.apigateway_service.ApiGatewayServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.GetApiGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.GetApiGatewayRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway.ApiGateway) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway.ApiGateway;
        };
        readonly list: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.ListApiGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.ListApiGatewayRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_service.ListApiGatewayResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.ListApiGatewayResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.CreateApiGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.CreateApiGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.UpdateApiGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.UpdateApiGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.DeleteApiGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.DeleteApiGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addDomain: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.AddDomainRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.AddDomainRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeDomain: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.RemoveDomainRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.RemoveDomainRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getOpenapiSpec: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.GetOpenapiSpecRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.GetOpenapiSpecRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_service.GetOpenapiSpecResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.GetOpenapiSpecResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_service.ListOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.ListOperationsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_service.ListOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_service.ListOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ContainerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.containers_container_service.ContainerServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.GetContainerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.GetContainerRequest;
            readonly responseSerialize: (value: cloudApi.serverless.containers_container.Container) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.containers_container.Container;
        };
        readonly list: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.ListContainersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainersRequest;
            readonly responseSerialize: (value: cloudApi.serverless.containers_container_service.ListContainersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.CreateContainerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.CreateContainerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.UpdateContainerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.UpdateContainerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.DeleteContainerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.DeleteContainerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deployRevision: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.DeployContainerRevisionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.DeployContainerRevisionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly rollback: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Rollback";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.RollbackContainerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.RollbackContainerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getRevision: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.GetContainerRevisionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.GetContainerRevisionRequest;
            readonly responseSerialize: (value: cloudApi.serverless.containers_container.Revision) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.containers_container.Revision;
        };
        readonly listRevisions: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.ListContainersRevisionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainersRevisionsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.containers_container_service.ListContainersRevisionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainersRevisionsResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.containers_container_service.ListContainerOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainerOperationsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.containers_container_service.ListContainerOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.containers_container_service.ListContainerOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const FunctionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.functions_function_service.FunctionServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.GetFunctionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.GetFunctionRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function.Function) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function.Function;
        };
        readonly list: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.CreateFunctionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.CreateFunctionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.UpdateFunctionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.UpdateFunctionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.DeleteFunctionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.DeleteFunctionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getVersion: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.GetFunctionVersionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.GetFunctionVersionRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function.Version) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function.Version;
        };
        readonly getVersionByTag: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.GetFunctionVersionByTagRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.GetFunctionVersionByTagRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function.Version) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function.Version;
        };
        readonly listVersions: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionsVersionsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionsVersionsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionsVersionsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionsVersionsResponse;
        };
        readonly deleteVersion: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/DeleteVersion";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.DeleteFunctionVersionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.DeleteFunctionVersionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly setTag: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetTag";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.SetFunctionTagRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.SetFunctionTagRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeTag: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.RemoveFunctionTagRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.RemoveFunctionTagRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listTagHistory: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionTagHistoryRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionTagHistoryRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionTagHistoryResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionTagHistoryResponse;
        };
        readonly createVersion: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.CreateFunctionVersionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.CreateFunctionVersionRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listRuntimes: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListRuntimesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListRuntimesRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListRuntimesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListRuntimesResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionOperationsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListFunctionOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListFunctionOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listScalingPolicies: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.ListScalingPoliciesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListScalingPoliciesRequest;
            readonly responseSerialize: (value: cloudApi.serverless.functions_function_service.ListScalingPoliciesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.ListScalingPoliciesResponse;
        };
        readonly setScalingPolicy: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.SetScalingPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.SetScalingPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeScalingPolicy: {
            readonly path: "/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.functions_function_service.RemoveScalingPolicyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.functions_function_service.RemoveScalingPolicyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const ProxyServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.mdbproxy_proxy_service.ProxyServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.GetProxyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.GetProxyRequest;
            readonly responseSerialize: (value: cloudApi.serverless.mdbproxy_proxy.Proxy) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy.Proxy;
        };
        readonly list: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.ListProxyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.ListProxyRequest;
            readonly responseSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.ListProxyResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.ListProxyResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.CreateProxyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.CreateProxyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.UpdateProxyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.UpdateProxyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.DeleteProxyRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.DeleteProxyRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.ListProxyOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.ListProxyOperationsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.mdbproxy_proxy_service.ListProxyOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.mdbproxy_proxy_service.ListProxyOperationsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const TriggerServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.triggers_trigger_service.TriggerServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.GetTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.GetTriggerRequest;
            readonly responseSerialize: (value: cloudApi.serverless.triggers_trigger.Trigger) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger.Trigger;
        };
        readonly list: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.ListTriggersRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.ListTriggersRequest;
            readonly responseSerialize: (value: cloudApi.serverless.triggers_trigger_service.ListTriggersResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.ListTriggersResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.CreateTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.CreateTriggerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.UpdateTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.UpdateTriggerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.DeleteTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.DeleteTriggerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly pause: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.PauseTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.PauseTriggerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly resume: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.ResumeTriggerRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.ResumeTriggerRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.triggers_trigger_service.ListTriggerOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.ListTriggerOperationsRequest;
            readonly responseSerialize: (value: cloudApi.serverless.triggers_trigger_service.ListTriggerOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.triggers_trigger_service.ListTriggerOperationsResponse;
        };
    };
};
export declare const WebSocketConnectionServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.serverless.apigateway_connection_service.ConnectionServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_connection_service.GetConnectionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection_service.GetConnectionRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_connection.Connection) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection.Connection;
        };
        readonly send: {
            readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Send";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_connection_service.SendToConnectionRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection_service.SendToConnectionRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_connection_service.SendToConnectionResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection_service.SendToConnectionResponse;
        };
        readonly disconnect: {
            readonly path: "/yandex.cloud.serverless.apigateway.websocket.v1.ConnectionService/Disconnect";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.serverless.apigateway_connection_service.DisconnectRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection_service.DisconnectRequest;
            readonly responseSerialize: (value: cloudApi.serverless.apigateway_connection_service.DisconnectResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.serverless.apigateway_connection_service.DisconnectResponse;
        };
    };
};
export declare const BucketServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.storage.bucket_service.BucketServiceClient;
    service: {
        readonly list: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.ListBucketsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.ListBucketsRequest;
            readonly responseSerialize: (value: cloudApi.storage.bucket_service.ListBucketsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.ListBucketsResponse;
        };
        readonly get: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.GetBucketRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.GetBucketRequest;
            readonly responseSerialize: (value: cloudApi.storage.bucket.Bucket) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.storage.bucket.Bucket;
        };
        readonly create: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.CreateBucketRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.CreateBucketRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.UpdateBucketRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.UpdateBucketRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.DeleteBucketRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.DeleteBucketRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly getStats: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/GetStats";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.GetBucketStatsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.GetBucketStatsRequest;
            readonly responseSerialize: (value: cloudApi.storage.bucket.BucketStats) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.storage.bucket.BucketStats;
        };
        readonly getHTTPSConfig: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/GetHTTPSConfig";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.GetBucketHTTPSConfigRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.GetBucketHTTPSConfigRequest;
            readonly responseSerialize: (value: cloudApi.storage.bucket.HTTPSConfig) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.storage.bucket.HTTPSConfig;
        };
        readonly setHTTPSConfig: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/SetHTTPSConfig";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.SetBucketHTTPSConfigRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.SetBucketHTTPSConfigRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly deleteHTTPSConfig: {
            readonly path: "/yandex.cloud.storage.v1.BucketService/DeleteHTTPSConfig";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.storage.bucket_service.DeleteBucketHTTPSConfigRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.storage.bucket_service.DeleteBucketHTTPSConfigRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const AddressServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.address_service.AddressServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.GetAddressRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.GetAddressRequest;
            readonly responseSerialize: (value: cloudApi.vpc.address.Address) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.address.Address;
        };
        readonly getByValue: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/GetByValue";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.GetAddressByValueRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.GetAddressByValueRequest;
            readonly responseSerialize: (value: cloudApi.vpc.address.Address) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.address.Address;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.ListAddressesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.ListAddressesRequest;
            readonly responseSerialize: (value: cloudApi.vpc.address_service.ListAddressesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.address_service.ListAddressesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.CreateAddressRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.CreateAddressRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.UpdateAddressRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.UpdateAddressRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.DeleteAddressRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.DeleteAddressRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.ListAddressOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.ListAddressOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.address_service.ListAddressOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.address_service.ListAddressOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.AddressService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.address_service.MoveAddressRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.address_service.MoveAddressRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const GatewayServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.gateway_service.GatewayServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.GetGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.GetGatewayRequest;
            readonly responseSerialize: (value: cloudApi.vpc.gateway.Gateway) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.gateway.Gateway;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.ListGatewaysRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.ListGatewaysRequest;
            readonly responseSerialize: (value: cloudApi.vpc.gateway_service.ListGatewaysResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.ListGatewaysResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.CreateGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.CreateGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.UpdateGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.UpdateGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.DeleteGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.DeleteGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.ListGatewayOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.ListGatewayOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.gateway_service.ListGatewayOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.ListGatewayOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.GatewayService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.gateway_service.MoveGatewayRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.gateway_service.MoveGatewayRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const NetworkServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.network_service.NetworkServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.GetNetworkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.GetNetworkRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network.Network) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network.Network;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.ListNetworksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworksRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network_service.ListNetworksResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworksResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.CreateNetworkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.CreateNetworkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.UpdateNetworkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.UpdateNetworkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.DeleteNetworkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.DeleteNetworkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listSubnets: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListSubnets";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.ListNetworkSubnetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkSubnetsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network_service.ListNetworkSubnetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkSubnetsResponse;
        };
        readonly listSecurityGroups: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListSecurityGroups";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.ListNetworkSecurityGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkSecurityGroupsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network_service.ListNetworkSecurityGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkSecurityGroupsResponse;
        };
        readonly listRouteTables: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListRouteTables";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.ListNetworkRouteTablesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkRouteTablesRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network_service.ListNetworkRouteTablesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkRouteTablesResponse;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.ListNetworkOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.network_service.ListNetworkOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.network_service.ListNetworkOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.NetworkService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.network_service.MoveNetworkRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.network_service.MoveNetworkRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const RouteTableServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.route_table_service.RouteTableServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.GetRouteTableRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.GetRouteTableRequest;
            readonly responseSerialize: (value: cloudApi.vpc.route_table.RouteTable) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.route_table.RouteTable;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.ListRouteTablesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.ListRouteTablesRequest;
            readonly responseSerialize: (value: cloudApi.vpc.route_table_service.ListRouteTablesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.ListRouteTablesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.CreateRouteTableRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.CreateRouteTableRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.UpdateRouteTableRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.UpdateRouteTableRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.DeleteRouteTableRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.DeleteRouteTableRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.ListRouteTableOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.ListRouteTableOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.route_table_service.ListRouteTableOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.ListRouteTableOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.route_table_service.MoveRouteTableRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.route_table_service.MoveRouteTableRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const SecurityGroupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.security_group_service.SecurityGroupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.GetSecurityGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.GetSecurityGroupRequest;
            readonly responseSerialize: (value: cloudApi.vpc.security_group.SecurityGroup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.security_group.SecurityGroup;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.ListSecurityGroupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.ListSecurityGroupsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.security_group_service.ListSecurityGroupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.ListSecurityGroupsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.CreateSecurityGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.CreateSecurityGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.UpdateSecurityGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.UpdateSecurityGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateRules: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.UpdateSecurityGroupRulesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.UpdateSecurityGroupRulesRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateRule: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.UpdateSecurityGroupRuleRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.UpdateSecurityGroupRuleRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.DeleteSecurityGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.DeleteSecurityGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.MoveSecurityGroupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.MoveSecurityGroupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.security_group_service.ListSecurityGroupOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.ListSecurityGroupOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.security_group_service.ListSecurityGroupOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.security_group_service.ListSecurityGroupOperationsResponse;
        };
    };
};
export declare const SubnetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.vpc.subnet_service.SubnetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.GetSubnetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.GetSubnetRequest;
            readonly responseSerialize: (value: cloudApi.vpc.subnet.Subnet) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.subnet.Subnet;
        };
        readonly list: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.ListSubnetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListSubnetsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.subnet_service.ListSubnetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListSubnetsResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.CreateSubnetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.CreateSubnetRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.UpdateSubnetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.UpdateSubnetRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly addCidrBlocks: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.AddSubnetCidrBlocksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.AddSubnetCidrBlocksRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly removeCidrBlocks: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.RemoveSubnetCidrBlocksRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.RemoveSubnetCidrBlocksRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.DeleteSubnetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.DeleteSubnetRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listOperations: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.ListSubnetOperationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListSubnetOperationsRequest;
            readonly responseSerialize: (value: cloudApi.vpc.subnet_service.ListSubnetOperationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListSubnetOperationsResponse;
        };
        readonly move: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.MoveSubnetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.MoveSubnetRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listUsedAddresses: {
            readonly path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.vpc.subnet_service.ListUsedAddressesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListUsedAddressesRequest;
            readonly responseSerialize: (value: cloudApi.vpc.subnet_service.ListUsedAddressesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.vpc.subnet_service.ListUsedAddressesResponse;
        };
    };
};
export declare const YdbBackupServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ydb.backup_service.BackupServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.backup_service.GetBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.GetBackupRequest;
            readonly responseSerialize: (value: cloudApi.ydb.backup.Backup) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.backup.Backup;
        };
        readonly listPaths: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/ListPaths";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.backup_service.ListPathsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.ListPathsRequest;
            readonly responseSerialize: (value: cloudApi.ydb.backup_service.ListPathsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.ListPathsResponse;
        };
        readonly list: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.backup_service.ListBackupsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.ListBackupsRequest;
            readonly responseSerialize: (value: cloudApi.ydb.backup_service.ListBackupsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.ListBackupsResponse;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.ydb.v1.BackupService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.backup_service.DeleteBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.backup_service.DeleteBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const YdbDatabaseServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ydb.database_service.DatabaseServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.GetDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.GetDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.ydb.database.Database) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.database.Database;
        };
        readonly list: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.ListDatabasesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.ListDatabasesRequest;
            readonly responseSerialize: (value: cloudApi.ydb.database_service.ListDatabasesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.database_service.ListDatabasesResponse;
        };
        readonly create: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Create";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.CreateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.CreateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly update: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Update";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.UpdateDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.UpdateDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly start: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Start";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.StartDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.StartDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly stop: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Stop";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.StopDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.StopDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly move: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Move";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.MoveDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.MoveDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly listAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/ListAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.ListAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.access.access.ListAccessBindingsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.access.access.ListAccessBindingsResponse;
        };
        readonly setAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/SetAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.SetAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.SetAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly updateAccessBindings: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/UpdateAccessBindings";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.access.access.UpdateAccessBindingsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.access.access.UpdateAccessBindingsRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly delete: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Delete";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.DeleteDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.DeleteDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly restore: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Restore";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.RestoreBackupRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.RestoreBackupRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
        readonly backup: {
            readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Backup";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.database_service.BackupDatabaseRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.database_service.BackupDatabaseRequest;
            readonly responseSerialize: (value: cloudApi.operation.operation.Operation) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.operation.operation.Operation;
        };
    };
};
export declare const LocationServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ydb.location_service.LocationServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.ydb.v1.LocationService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.location_service.GetLocationRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.location_service.GetLocationRequest;
            readonly responseSerialize: (value: cloudApi.ydb.location.Location) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.location.Location;
        };
        readonly list: {
            readonly path: "/yandex.cloud.ydb.v1.LocationService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.location_service.ListLocationsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.location_service.ListLocationsRequest;
            readonly responseSerialize: (value: cloudApi.ydb.location_service.ListLocationsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.location_service.ListLocationsResponse;
        };
    };
};
export declare const YdbResourcePresetServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ydb.resource_preset_service.ResourcePresetServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.ydb.v1.ResourcePresetService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.resource_preset_service.GetResourcePresetRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.resource_preset_service.GetResourcePresetRequest;
            readonly responseSerialize: (value: cloudApi.ydb.resource_preset.ResourcePreset) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.resource_preset.ResourcePreset;
        };
        readonly list: {
            readonly path: "/yandex.cloud.ydb.v1.ResourcePresetService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.resource_preset_service.ListResourcePresetsRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.resource_preset_service.ListResourcePresetsRequest;
            readonly responseSerialize: (value: cloudApi.ydb.resource_preset_service.ListResourcePresetsResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.resource_preset_service.ListResourcePresetsResponse;
        };
    };
};
export declare const StorageTypeServiceClient: {
    new (address: string, credentials: import("nice-grpc").ChannelCredentials, options?: Partial<import("nice-grpc").ChannelOptions> | undefined): cloudApi.ydb.storage_type_service.StorageTypeServiceClient;
    service: {
        readonly get: {
            readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/Get";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.storage_type_service.GetStorageTypeRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.storage_type_service.GetStorageTypeRequest;
            readonly responseSerialize: (value: cloudApi.ydb.storage_type.StorageType) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.storage_type.StorageType;
        };
        readonly list: {
            readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/List";
            readonly requestStream: false;
            readonly responseStream: false;
            readonly requestSerialize: (value: cloudApi.ydb.storage_type_service.ListStorageTypesRequest) => Buffer;
            readonly requestDeserialize: (value: Buffer) => cloudApi.ydb.storage_type_service.ListStorageTypesRequest;
            readonly responseSerialize: (value: cloudApi.ydb.storage_type_service.ListStorageTypesResponse) => Buffer;
            readonly responseDeserialize: (value: Buffer) => cloudApi.ydb.storage_type_service.ListStorageTypesResponse;
        };
    };
};
