/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Status } from "../../../../../google/rpc/status";
import { TextAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/text_detection";
import { ClassAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/classification";
import { FaceAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/face_detection";
import { ImageCopySearchAnnotation } from "../../../../../yandex/cloud/ai/vision/v1/image_copy_search";
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface BatchAnalyzeRequest {
    $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest";
    /**
     * A list of specifications. Each specification contains the file to analyze and features to use for analysis.
     *
     * Restrictions:
     * * Supported file formats: `JPEG`, `PNG`.
     * * Maximum file size: 1 MB.
     * * Image size should not exceed 20M pixels (length x width).
     */
    analyzeSpecs: AnalyzeSpec[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}
export interface AnalyzeSpec {
    $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec";
    /**
     * Image content, represented as a stream of bytes.
     * Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content: Buffer | undefined;
    signature: string | undefined;
    /**
     * Requested features to use for analysis.
     *
     * Max count of requested features for one file is 8.
     */
    features: Feature[];
    /** [MIME type](https://en.wikipedia.org/wiki/Media_type) of content (for example, `` application/pdf ``). */
    mimeType: string;
}
export interface Feature {
    $type: "yandex.cloud.ai.vision.v1.Feature";
    /** Type of requested feature. */
    type: Feature_Type;
    /** Required for the `CLASSIFICATION` type. Specifies configuration for the classification feature. */
    classificationConfig?: FeatureClassificationConfig | undefined;
    /** Required for the `TEXT_DETECTION` type. Specifies configuration for the text detection (OCR) feature. */
    textDetectionConfig?: FeatureTextDetectionConfig | undefined;
}
export declare enum Feature_Type {
    TYPE_UNSPECIFIED = 0,
    /** TEXT_DETECTION - Text detection (OCR) feature. */
    TEXT_DETECTION = 1,
    /** CLASSIFICATION - Classification feature. */
    CLASSIFICATION = 2,
    /** FACE_DETECTION - Face detection feature. */
    FACE_DETECTION = 3,
    /** IMAGE_COPY_SEARCH - Image copy search. */
    IMAGE_COPY_SEARCH = 4,
    UNRECOGNIZED = -1
}
export declare function feature_TypeFromJSON(object: any): Feature_Type;
export declare function feature_TypeToJSON(object: Feature_Type): string;
export interface FeatureClassificationConfig {
    $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig";
    /** Model to use for image classification. */
    model: string;
}
export interface FeatureTextDetectionConfig {
    $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig";
    /**
     * List of the languages to recognize text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `ru`).
     */
    languageCodes: string[];
    /**
     * Model to use for text detection.
     * Possible values:
     * * `page` (default): this model is suitable for detecting multiple text entries in an image.
     * * `line`: this model is suitable for cropped images with one line of text.
     */
    model: string;
}
export interface BatchAnalyzeResponse {
    $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse";
    /**
     * Request results.
     * Results have the same order as specifications in the request.
     */
    results: AnalyzeResult[];
}
export interface AnalyzeResult {
    $type: "yandex.cloud.ai.vision.v1.AnalyzeResult";
    /**
     * Results for each requested feature.
     * Feature results have the same order as in the request.
     */
    results: FeatureResult[];
    /** Return error in case of error with file processing. */
    error?: Status;
}
export interface FeatureResult {
    $type: "yandex.cloud.ai.vision.v1.FeatureResult";
    /** Text detection (OCR) result. */
    textDetection?: TextAnnotation | undefined;
    /** Classification result. */
    classification?: ClassAnnotation | undefined;
    /** Face detection result. */
    faceDetection?: FaceAnnotation | undefined;
    /** Image Copy Search result. */
    imageCopySearch?: ImageCopySearchAnnotation | undefined;
    /** Return error in case of error during the specified feature processing. */
    error?: Status;
}
export declare const BatchAnalyzeRequest: {
    $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeRequest";
    encode(message: BatchAnalyzeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchAnalyzeRequest;
    fromJSON(object: any): BatchAnalyzeRequest;
    toJSON(message: BatchAnalyzeRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        analyzeSpecs?: {
            mimeType?: string | undefined;
            content?: Buffer | undefined;
            signature?: string | undefined;
            features?: {
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        folderId?: string | undefined;
        analyzeSpecs?: ({
            mimeType?: string | undefined;
            content?: Buffer | undefined;
            signature?: string | undefined;
            features?: {
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            mimeType?: string | undefined;
            content?: Buffer | undefined;
            signature?: string | undefined;
            features?: {
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            mimeType?: string | undefined;
            content?: Buffer | undefined;
            signature?: string | undefined;
            features?: ({
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[] & ({
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            } & {
                type?: Feature_Type | undefined;
                classificationConfig?: ({
                    model?: string | undefined;
                } & {
                    model?: string | undefined;
                } & Record<Exclude<keyof I["analyzeSpecs"][number]["features"][number]["classificationConfig"], "$type" | "model">, never>) | undefined;
                textDetectionConfig?: ({
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } & {
                    languageCodes?: (string[] & string[] & Record<Exclude<keyof I["analyzeSpecs"][number]["features"][number]["textDetectionConfig"]["languageCodes"], "$type" | keyof string[]>, never>) | undefined;
                    model?: string | undefined;
                } & Record<Exclude<keyof I["analyzeSpecs"][number]["features"][number]["textDetectionConfig"], "$type" | "languageCodes" | "model">, never>) | undefined;
            } & Record<Exclude<keyof I["analyzeSpecs"][number]["features"][number], "$type" | "type" | "classificationConfig" | "textDetectionConfig">, never>)[] & Record<Exclude<keyof I["analyzeSpecs"][number]["features"], "$type" | keyof {
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["analyzeSpecs"][number], "$type" | "mimeType" | "content" | "signature" | "features">, never>)[] & Record<Exclude<keyof I["analyzeSpecs"], "$type" | keyof {
            mimeType?: string | undefined;
            content?: Buffer | undefined;
            signature?: string | undefined;
            features?: {
                type?: Feature_Type | undefined;
                classificationConfig?: {
                    model?: string | undefined;
                } | undefined;
                textDetectionConfig?: {
                    languageCodes?: string[] | undefined;
                    model?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "analyzeSpecs">, never>>(object: I): BatchAnalyzeRequest;
};
export declare const AnalyzeSpec: {
    $type: "yandex.cloud.ai.vision.v1.AnalyzeSpec";
    encode(message: AnalyzeSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnalyzeSpec;
    fromJSON(object: any): AnalyzeSpec;
    toJSON(message: AnalyzeSpec): unknown;
    fromPartial<I extends {
        mimeType?: string | undefined;
        content?: Buffer | undefined;
        signature?: string | undefined;
        features?: {
            type?: Feature_Type | undefined;
            classificationConfig?: {
                model?: string | undefined;
            } | undefined;
            textDetectionConfig?: {
                languageCodes?: string[] | undefined;
                model?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        mimeType?: string | undefined;
        content?: Buffer | undefined;
        signature?: string | undefined;
        features?: ({
            type?: Feature_Type | undefined;
            classificationConfig?: {
                model?: string | undefined;
            } | undefined;
            textDetectionConfig?: {
                languageCodes?: string[] | undefined;
                model?: string | undefined;
            } | undefined;
        }[] & ({
            type?: Feature_Type | undefined;
            classificationConfig?: {
                model?: string | undefined;
            } | undefined;
            textDetectionConfig?: {
                languageCodes?: string[] | undefined;
                model?: string | undefined;
            } | undefined;
        } & {
            type?: Feature_Type | undefined;
            classificationConfig?: ({
                model?: string | undefined;
            } & {
                model?: string | undefined;
            } & Record<Exclude<keyof I["features"][number]["classificationConfig"], "$type" | "model">, never>) | undefined;
            textDetectionConfig?: ({
                languageCodes?: string[] | undefined;
                model?: string | undefined;
            } & {
                languageCodes?: (string[] & string[] & Record<Exclude<keyof I["features"][number]["textDetectionConfig"]["languageCodes"], "$type" | keyof string[]>, never>) | undefined;
                model?: string | undefined;
            } & Record<Exclude<keyof I["features"][number]["textDetectionConfig"], "$type" | "languageCodes" | "model">, never>) | undefined;
        } & Record<Exclude<keyof I["features"][number], "$type" | "type" | "classificationConfig" | "textDetectionConfig">, never>)[] & Record<Exclude<keyof I["features"], "$type" | keyof {
            type?: Feature_Type | undefined;
            classificationConfig?: {
                model?: string | undefined;
            } | undefined;
            textDetectionConfig?: {
                languageCodes?: string[] | undefined;
                model?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "mimeType" | "content" | "signature" | "features">, never>>(object: I): AnalyzeSpec;
};
export declare const Feature: {
    $type: "yandex.cloud.ai.vision.v1.Feature";
    encode(message: Feature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Feature;
    fromJSON(object: any): Feature;
    toJSON(message: Feature): unknown;
    fromPartial<I extends {
        type?: Feature_Type | undefined;
        classificationConfig?: {
            model?: string | undefined;
        } | undefined;
        textDetectionConfig?: {
            languageCodes?: string[] | undefined;
            model?: string | undefined;
        } | undefined;
    } & {
        type?: Feature_Type | undefined;
        classificationConfig?: ({
            model?: string | undefined;
        } & {
            model?: string | undefined;
        } & Record<Exclude<keyof I["classificationConfig"], "$type" | "model">, never>) | undefined;
        textDetectionConfig?: ({
            languageCodes?: string[] | undefined;
            model?: string | undefined;
        } & {
            languageCodes?: (string[] & string[] & Record<Exclude<keyof I["textDetectionConfig"]["languageCodes"], "$type" | keyof string[]>, never>) | undefined;
            model?: string | undefined;
        } & Record<Exclude<keyof I["textDetectionConfig"], "$type" | "languageCodes" | "model">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "classificationConfig" | "textDetectionConfig">, never>>(object: I): Feature;
};
export declare const FeatureClassificationConfig: {
    $type: "yandex.cloud.ai.vision.v1.FeatureClassificationConfig";
    encode(message: FeatureClassificationConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureClassificationConfig;
    fromJSON(object: any): FeatureClassificationConfig;
    toJSON(message: FeatureClassificationConfig): unknown;
    fromPartial<I extends {
        model?: string | undefined;
    } & {
        model?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "model">, never>>(object: I): FeatureClassificationConfig;
};
export declare const FeatureTextDetectionConfig: {
    $type: "yandex.cloud.ai.vision.v1.FeatureTextDetectionConfig";
    encode(message: FeatureTextDetectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureTextDetectionConfig;
    fromJSON(object: any): FeatureTextDetectionConfig;
    toJSON(message: FeatureTextDetectionConfig): unknown;
    fromPartial<I extends {
        languageCodes?: string[] | undefined;
        model?: string | undefined;
    } & {
        languageCodes?: (string[] & string[] & Record<Exclude<keyof I["languageCodes"], "$type" | keyof string[]>, never>) | undefined;
        model?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCodes" | "model">, never>>(object: I): FeatureTextDetectionConfig;
};
export declare const BatchAnalyzeResponse: {
    $type: "yandex.cloud.ai.vision.v1.BatchAnalyzeResponse";
    encode(message: BatchAnalyzeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchAnalyzeResponse;
    fromJSON(object: any): BatchAnalyzeResponse;
    toJSON(message: BatchAnalyzeResponse): unknown;
    fromPartial<I extends {
        results?: {
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            results?: {
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        results?: ({
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            results?: {
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            results?: {
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["results"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["results"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            results?: ({
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[] & ({
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                error?: ({
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } & {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] & ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & Record<Exclude<keyof I["results"][number]["results"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["error"]["details"], "$type" | keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["results"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
                textDetection?: ({
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } & {
                    pages?: ({
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] & ({
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
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
                                } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                            lines?: ({
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] & ({
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
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
                                    } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                                words?: ({
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] & ({
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
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
                                        } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                                    languages?: ({
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] & ({
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    } & {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"], "$type" | keyof {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[]>, never>) | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[]>, never>) | undefined;
                                confidence?: number | undefined;
                            } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"], "$type" | keyof {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"][number], "$type" | "boundingBox" | "lines">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["blocks"], "$type" | keyof {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
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
                        } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number]["entities"], "$type" | keyof {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"][number], "$type" | "width" | "height" | "blocks" | "entities">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"]["pages"], "$type" | keyof {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["results"][number]["textDetection"], "$type" | "pages">, never>) | undefined;
                classification?: ({
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } & {
                    properties?: ({
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] & ({
                        name?: string | undefined;
                        probability?: number | undefined;
                    } & {
                        name?: string | undefined;
                        probability?: number | undefined;
                    } & Record<Exclude<keyof I["results"][number]["results"][number]["classification"]["properties"][number], "$type" | "name" | "probability">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["classification"]["properties"], "$type" | keyof {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["results"][number]["classification"], "$type" | "properties">, never>) | undefined;
                faceDetection?: ({
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } & {
                    faces?: ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] & ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
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
                            } & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"]["faces"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"]["faces"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"]["faces"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                    } & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"]["faces"][number], "$type" | "boundingBox">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"]["faces"], "$type" | keyof {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["results"][number]["faceDetection"], "$type" | "faces">, never>) | undefined;
                imageCopySearch?: ({
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } & {
                    copyCount?: number | undefined;
                    topResults?: ({
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] & ({
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    } & {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    } & Record<Exclude<keyof I["results"][number]["results"][number]["imageCopySearch"]["topResults"][number], "$type" | "description" | "imageUrl" | "pageUrl" | "title">, never>)[] & Record<Exclude<keyof I["results"][number]["results"][number]["imageCopySearch"]["topResults"], "$type" | keyof {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["results"][number]["imageCopySearch"], "$type" | "copyCount" | "topResults">, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["results"][number], "$type" | "error" | "textDetection" | "classification" | "faceDetection" | "imageCopySearch">, never>)[] & Record<Exclude<keyof I["results"][number]["results"], "$type" | keyof {
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["results"][number], "$type" | "error" | "results">, never>)[] & Record<Exclude<keyof I["results"], "$type" | keyof {
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            results?: {
                error?: {
                    code?: number | undefined;
                    message?: string | undefined;
                    details?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] | undefined;
                } | undefined;
                textDetection?: {
                    pages?: {
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
                                words?: {
                                    boundingBox?: {
                                        vertices?: {
                                            x?: number | undefined;
                                            y?: number | undefined;
                                        }[] | undefined;
                                    } | undefined;
                                    languages?: {
                                        languageCode?: string | undefined;
                                        confidence?: number | undefined;
                                    }[] | undefined;
                                    text?: string | undefined;
                                    entityIndex?: number | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        entities?: {
                            name?: string | undefined;
                            text?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                } | undefined;
                classification?: {
                    properties?: {
                        name?: string | undefined;
                        probability?: number | undefined;
                    }[] | undefined;
                } | undefined;
                faceDetection?: {
                    faces?: {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                } | undefined;
                imageCopySearch?: {
                    copyCount?: number | undefined;
                    topResults?: {
                        description?: string | undefined;
                        imageUrl?: string | undefined;
                        pageUrl?: string | undefined;
                        title?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "results">, never>>(object: I): BatchAnalyzeResponse;
};
export declare const AnalyzeResult: {
    $type: "yandex.cloud.ai.vision.v1.AnalyzeResult";
    encode(message: AnalyzeResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnalyzeResult;
    fromJSON(object: any): AnalyzeResult;
    toJSON(message: AnalyzeResult): unknown;
    fromPartial<I extends {
        error?: {
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        results?: {
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            textDetection?: {
                pages?: {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            classification?: {
                properties?: {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
            } | undefined;
            faceDetection?: {
                faces?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            imageCopySearch?: {
                copyCount?: number | undefined;
                topResults?: {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        error?: ({
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            code?: number | undefined;
            message?: string | undefined;
            details?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["error"]["details"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
        results?: ({
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            textDetection?: {
                pages?: {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            classification?: {
                properties?: {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
            } | undefined;
            faceDetection?: {
                faces?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            imageCopySearch?: {
                copyCount?: number | undefined;
                topResults?: {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            textDetection?: {
                pages?: {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            classification?: {
                properties?: {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
            } | undefined;
            faceDetection?: {
                faces?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            imageCopySearch?: {
                copyCount?: number | undefined;
                topResults?: {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["results"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["results"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            textDetection?: ({
                pages?: {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                pages?: ({
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] & ({
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
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
                            } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                        lines?: ({
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] & ({
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
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
                                } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                            words?: ({
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] & ({
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
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
                                    } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                                languages?: ({
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] & ({
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                } & {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"], "$type" | keyof {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[]>, never>) | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[]>, never>) | undefined;
                            confidence?: number | undefined;
                        } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number]["lines"], "$type" | keyof {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"][number], "$type" | "boundingBox" | "lines">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["blocks"], "$type" | keyof {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
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
                    } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number]["entities"], "$type" | keyof {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"][number], "$type" | "width" | "height" | "blocks" | "entities">, never>)[] & Record<Exclude<keyof I["results"][number]["textDetection"]["pages"], "$type" | keyof {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["textDetection"], "$type" | "pages">, never>) | undefined;
            classification?: ({
                properties?: {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
            } & {
                properties?: ({
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] & ({
                    name?: string | undefined;
                    probability?: number | undefined;
                } & {
                    name?: string | undefined;
                    probability?: number | undefined;
                } & Record<Exclude<keyof I["results"][number]["classification"]["properties"][number], "$type" | "name" | "probability">, never>)[] & Record<Exclude<keyof I["results"][number]["classification"]["properties"], "$type" | keyof {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["classification"], "$type" | "properties">, never>) | undefined;
            faceDetection?: ({
                faces?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                faces?: ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] & ({
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
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
                        } & Record<Exclude<keyof I["results"][number]["faceDetection"]["faces"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["results"][number]["faceDetection"]["faces"][number]["boundingBox"]["vertices"], "$type" | keyof {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["results"][number]["faceDetection"]["faces"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                } & Record<Exclude<keyof I["results"][number]["faceDetection"]["faces"][number], "$type" | "boundingBox">, never>)[] & Record<Exclude<keyof I["results"][number]["faceDetection"]["faces"], "$type" | keyof {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["faceDetection"], "$type" | "faces">, never>) | undefined;
            imageCopySearch?: ({
                copyCount?: number | undefined;
                topResults?: {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] | undefined;
            } & {
                copyCount?: number | undefined;
                topResults?: ({
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] & ({
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                } & {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                } & Record<Exclude<keyof I["results"][number]["imageCopySearch"]["topResults"][number], "$type" | "description" | "imageUrl" | "pageUrl" | "title">, never>)[] & Record<Exclude<keyof I["results"][number]["imageCopySearch"]["topResults"], "$type" | keyof {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["results"][number]["imageCopySearch"], "$type" | "copyCount" | "topResults">, never>) | undefined;
        } & Record<Exclude<keyof I["results"][number], "$type" | "error" | "textDetection" | "classification" | "faceDetection" | "imageCopySearch">, never>)[] & Record<Exclude<keyof I["results"], "$type" | keyof {
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            textDetection?: {
                pages?: {
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
                            words?: {
                                boundingBox?: {
                                    vertices?: {
                                        x?: number | undefined;
                                        y?: number | undefined;
                                    }[] | undefined;
                                } | undefined;
                                languages?: {
                                    languageCode?: string | undefined;
                                    confidence?: number | undefined;
                                }[] | undefined;
                                text?: string | undefined;
                                entityIndex?: number | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    entities?: {
                        name?: string | undefined;
                        text?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            classification?: {
                properties?: {
                    name?: string | undefined;
                    probability?: number | undefined;
                }[] | undefined;
            } | undefined;
            faceDetection?: {
                faces?: {
                    boundingBox?: {
                        vertices?: {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            imageCopySearch?: {
                copyCount?: number | undefined;
                topResults?: {
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    pageUrl?: string | undefined;
                    title?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "error" | "results">, never>>(object: I): AnalyzeResult;
};
export declare const FeatureResult: {
    $type: "yandex.cloud.ai.vision.v1.FeatureResult";
    encode(message: FeatureResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureResult;
    fromJSON(object: any): FeatureResult;
    toJSON(message: FeatureResult): unknown;
    fromPartial<I extends {
        error?: {
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        textDetection?: {
            pages?: {
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                entities?: {
                    name?: string | undefined;
                    text?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        classification?: {
            properties?: {
                name?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
        } | undefined;
        faceDetection?: {
            faces?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        imageCopySearch?: {
            copyCount?: number | undefined;
            topResults?: {
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        error?: ({
            code?: number | undefined;
            message?: string | undefined;
            details?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            code?: number | undefined;
            message?: string | undefined;
            details?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["error"]["details"], "$type" | keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
        textDetection?: ({
            pages?: {
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                entities?: {
                    name?: string | undefined;
                    text?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            pages?: ({
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                entities?: {
                    name?: string | undefined;
                    text?: string | undefined;
                }[] | undefined;
            }[] & ({
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
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
                        } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["boundingBox"]["vertices"], "$type" | keyof {
                            x?: number | undefined;
                            y?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                    lines?: ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[] & ({
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
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
                            } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                        words?: ({
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] & ({
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
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
                                } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"]["vertices"], "$type" | keyof {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
                            languages?: ({
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] & ({
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            } & {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"][number], "$type" | "languageCode" | "confidence">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number]["languages"], "$type" | keyof {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[]>, never>) | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"][number], "$type" | "boundingBox" | "languages" | "text" | "entityIndex" | "confidence">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number]["words"], "$type" | keyof {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[]>, never>) | undefined;
                        confidence?: number | undefined;
                    } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"][number], "$type" | "boundingBox" | "words" | "confidence">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number]["lines"], "$type" | keyof {
                        boundingBox?: {
                            vertices?: {
                                x?: number | undefined;
                                y?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"][number], "$type" | "boundingBox" | "lines">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["blocks"], "$type" | keyof {
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
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
                } & Record<Exclude<keyof I["textDetection"]["pages"][number]["entities"][number], "$type" | "name" | "text">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"][number]["entities"], "$type" | keyof {
                    name?: string | undefined;
                    text?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["textDetection"]["pages"][number], "$type" | "width" | "height" | "blocks" | "entities">, never>)[] & Record<Exclude<keyof I["textDetection"]["pages"], "$type" | keyof {
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
                        words?: {
                            boundingBox?: {
                                vertices?: {
                                    x?: number | undefined;
                                    y?: number | undefined;
                                }[] | undefined;
                            } | undefined;
                            languages?: {
                                languageCode?: string | undefined;
                                confidence?: number | undefined;
                            }[] | undefined;
                            text?: string | undefined;
                            entityIndex?: number | undefined;
                            confidence?: number | undefined;
                        }[] | undefined;
                        confidence?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                entities?: {
                    name?: string | undefined;
                    text?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["textDetection"], "$type" | "pages">, never>) | undefined;
        classification?: ({
            properties?: {
                name?: string | undefined;
                probability?: number | undefined;
            }[] | undefined;
        } & {
            properties?: ({
                name?: string | undefined;
                probability?: number | undefined;
            }[] & ({
                name?: string | undefined;
                probability?: number | undefined;
            } & {
                name?: string | undefined;
                probability?: number | undefined;
            } & Record<Exclude<keyof I["classification"]["properties"][number], "$type" | "name" | "probability">, never>)[] & Record<Exclude<keyof I["classification"]["properties"], "$type" | keyof {
                name?: string | undefined;
                probability?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["classification"], "$type" | "properties">, never>) | undefined;
        faceDetection?: ({
            faces?: {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            faces?: ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }[] & ({
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
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
                    } & Record<Exclude<keyof I["faceDetection"]["faces"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["faceDetection"]["faces"][number]["boundingBox"]["vertices"], "$type" | keyof {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["faceDetection"]["faces"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
            } & Record<Exclude<keyof I["faceDetection"]["faces"][number], "$type" | "boundingBox">, never>)[] & Record<Exclude<keyof I["faceDetection"]["faces"], "$type" | keyof {
                boundingBox?: {
                    vertices?: {
                        x?: number | undefined;
                        y?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["faceDetection"], "$type" | "faces">, never>) | undefined;
        imageCopySearch?: ({
            copyCount?: number | undefined;
            topResults?: {
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            }[] | undefined;
        } & {
            copyCount?: number | undefined;
            topResults?: ({
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            }[] & ({
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            } & {
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            } & Record<Exclude<keyof I["imageCopySearch"]["topResults"][number], "$type" | "description" | "imageUrl" | "pageUrl" | "title">, never>)[] & Record<Exclude<keyof I["imageCopySearch"]["topResults"], "$type" | keyof {
                description?: string | undefined;
                imageUrl?: string | undefined;
                pageUrl?: string | undefined;
                title?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["imageCopySearch"], "$type" | "copyCount" | "topResults">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "error" | "textDetection" | "classification" | "faceDetection" | "imageCopySearch">, never>>(object: I): FeatureResult;
};
/** A set of methods for the Vision service. */
export declare const VisionServiceService: {
    /** Analyzes a batch of images and returns results with annotations. */
    readonly batchAnalyze: {
        readonly path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BatchAnalyzeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BatchAnalyzeRequest;
        readonly responseSerialize: (value: BatchAnalyzeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BatchAnalyzeResponse;
    };
};
export interface VisionServiceServer extends UntypedServiceImplementation {
    /** Analyzes a batch of images and returns results with annotations. */
    batchAnalyze: handleUnaryCall<BatchAnalyzeRequest, BatchAnalyzeResponse>;
}
export interface VisionServiceClient extends Client {
    /** Analyzes a batch of images and returns results with annotations. */
    batchAnalyze(request: BatchAnalyzeRequest, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
    batchAnalyze(request: BatchAnalyzeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
    batchAnalyze(request: BatchAnalyzeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
}
export declare const VisionServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): VisionServiceClient;
    service: typeof VisionServiceService;
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
