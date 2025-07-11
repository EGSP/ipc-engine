/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleServerStreamingCall, Client, CallOptions, ClientReadableStream, Metadata, handleUnaryCall, ClientUnaryCall, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { TextAnnotation } from "../../../../../yandex/cloud/ai/ocr/v1/ocr";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.ai.ocr.v1";
export interface RecognizeTextRequest {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest";
    /** Bytes with data */
    content: Buffer | undefined;
    /**
     * Specifications of the ([MIME type](https://en.wikipedia.org/wiki/Media_type)). Each specification contains the file to analyze and features to use for analysis. Restrictions:
     * * Supported file formats: `JPEG`, `PNG`, `WEBP`, `PDF`.
     * * Maximum file size: 20 MB.
     * * Image size should not exceed 20M pixels (length x width).
     * * The number of pages in a PDF file should not exceed 200 (each page counts as 1 request).
     */
    mimeType: string;
    /**
     * List of the languages to recognize text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
     */
    languageCodes: string[];
    /**
     * Model to use for text detection. The maximum string length is 50 characters. Possible values:
     * * `page` (default): this model is suitable for detecting multiple text entries in an image.
     * * `passport`: passport, the main double-page spread.
     * * `driver-license-front`: driver's license, the front side.
     * * `driver-license-back`: driver's license, the reverse side.
     * * `vehicle-registration-front`: front side of the vehicle registration certificate.
     * * `vehicle-registration-back`: back side of the vehicle registration certificate.
     */
    model: string;
}
export interface RecognizeTextResponse {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse";
    /** Recognized text blocks in this page or text from entities. */
    textAnnotation?: TextAnnotation;
    /** Page number in PDF file. */
    page: number;
}
export interface GetRecognitionRequest {
    $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest";
    /** Operation ID of async recognition request. */
    operationId: string;
}
export declare const RecognizeTextRequest: {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextRequest";
    encode(message: RecognizeTextRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognizeTextRequest;
    fromJSON(object: any): RecognizeTextRequest;
    toJSON(message: RecognizeTextRequest): unknown;
    fromPartial<I extends {
        mimeType?: string | undefined;
        languageCodes?: string[] | undefined;
        model?: string | undefined;
        content?: Buffer | undefined;
    } & {
        mimeType?: string | undefined;
        languageCodes?: (string[] & string[] & Record<Exclude<keyof I["languageCodes"], "$type" | keyof string[]>, never>) | undefined;
        model?: string | undefined;
        content?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "mimeType" | "languageCodes" | "model" | "content">, never>>(object: I): RecognizeTextRequest;
};
export declare const RecognizeTextResponse: {
    $type: "yandex.cloud.ai.ocr.v1.RecognizeTextResponse";
    encode(message: RecognizeTextResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognizeTextResponse;
    fromJSON(object: any): RecognizeTextResponse;
    toJSON(message: RecognizeTextResponse): unknown;
    fromPartial<I extends {
        page?: number | undefined;
        textAnnotation?: {
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                languages?: {
                    languageCode?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        page?: number | undefined;
        textAnnotation?: ({
            width?: number | undefined;
            height?: number | undefined;
            blocks?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                languages?: {
                    languageCode?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            entities?: {
                name?: string | undefined;
                text?: string | undefined;
            }[] | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            blocks?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                languages?: {
                    languageCode?: string | undefined;
                }[] | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                languages?: {
                    languageCode?: string | undefined;
                }[] | undefined;
            } & {
                boundingBox?: ({
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } & {
                    vertices?: ({
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] & ({
                        x?: number | undefined;
                        y?: number | undefined;
                    } & {
                        x?: number | undefined;
                        y?: number | undefined;
                    } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                lines?: ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                } & {
                    boundingBox?: ({
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } & {
                        vertices?: ({
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] & ({
                            x?: number | undefined;
                            y?: number | undefined;
                        } & {
                            x?: number | undefined;
                            y?: number | undefined;
                        } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                    text?: string | undefined;
                    words?: ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] & ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    } & {
                        boundingBox?: ({
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } & {
                            vertices?: ({
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] & ({
                                x?: number | undefined;
                                y?: number | undefined;
                            } & {
                                x?: number | undefined;
                                y?: number | undefined;
                            } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "text" | "entityIndex">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"][number], "$type" | "boundingBox" | "text" | "words">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["lines"], "$type" | keyof {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
                languages?: ({
                    languageCode?: string | undefined;
                }[] & ({
                    languageCode?: string | undefined;
                } & {
                    languageCode?: string | undefined;
                } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["languages"][number], "$type" | "languageCode">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"][number]["languages"], "$type" | keyof {
                    languageCode?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["textAnnotation"]["blocks"][number], "$type" | "boundingBox" | "lines" | "languages">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["blocks"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
                lines?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    text?: string | undefined;
                    words?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        text?: string | undefined;
                        entityIndex?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                languages?: {
                    languageCode?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            entities?: ({
                name?: string | undefined;
                text?: string | undefined;
            }[] & ({
                name?: string | undefined;
                text?: string | undefined;
            } & {
                name?: string | undefined;
                text?: string | undefined;
            } & Record<Exclude<keyof I["textAnnotation"]["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["textAnnotation"]["entities"], "$type" | keyof {
                name?: string | undefined;
                text?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["textAnnotation"], "$type" | "width" | "height" | "blocks" | "entities">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "page" | "textAnnotation">, never>>(object: I): RecognizeTextResponse;
};
export declare const GetRecognitionRequest: {
    $type: "yandex.cloud.ai.ocr.v1.GetRecognitionRequest";
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
/** A set of methods for the Vision OCR service. */
export declare const TextRecognitionServiceService: {
    /** To send the image for text recognition. */
    readonly recognize: {
        readonly path: "/yandex.cloud.ai.ocr.v1.TextRecognitionService/Recognize";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: RecognizeTextRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RecognizeTextRequest;
        readonly responseSerialize: (value: RecognizeTextResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RecognizeTextResponse;
    };
};
export interface TextRecognitionServiceServer extends UntypedServiceImplementation {
    /** To send the image for text recognition. */
    recognize: handleServerStreamingCall<RecognizeTextRequest, RecognizeTextResponse>;
}
export interface TextRecognitionServiceClient extends Client {
    /** To send the image for text recognition. */
    recognize(request: RecognizeTextRequest, options?: Partial<CallOptions>): ClientReadableStream<RecognizeTextResponse>;
    recognize(request: RecognizeTextRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<RecognizeTextResponse>;
}
export declare const TextRecognitionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TextRecognitionServiceClient;
    service: typeof TextRecognitionServiceService;
};
/** A set of methods for managing operations for asynchronous API requests. */
export declare const TextRecognitionAsyncServiceService: {
    /** To send the image for asynchronous text recognition. */
    readonly recognize: {
        readonly path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/Recognize";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RecognizeTextRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RecognizeTextRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** To get recognition results. */
    readonly getRecognition: {
        readonly path: "/yandex.cloud.ai.ocr.v1.TextRecognitionAsyncService/GetRecognition";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: GetRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRecognitionRequest;
        readonly responseSerialize: (value: RecognizeTextResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RecognizeTextResponse;
    };
};
export interface TextRecognitionAsyncServiceServer extends UntypedServiceImplementation {
    /** To send the image for asynchronous text recognition. */
    recognize: handleUnaryCall<RecognizeTextRequest, Operation>;
    /** To get recognition results. */
    getRecognition: handleServerStreamingCall<GetRecognitionRequest, RecognizeTextResponse>;
}
export interface TextRecognitionAsyncServiceClient extends Client {
    /** To send the image for asynchronous text recognition. */
    recognize(request: RecognizeTextRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    recognize(request: RecognizeTextRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    recognize(request: RecognizeTextRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** To get recognition results. */
    getRecognition(request: GetRecognitionRequest, options?: Partial<CallOptions>): ClientReadableStream<RecognizeTextResponse>;
    getRecognition(request: GetRecognitionRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<RecognizeTextResponse>;
}
export declare const TextRecognitionAsyncServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TextRecognitionAsyncServiceClient;
    service: typeof TextRecognitionAsyncServiceService;
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
