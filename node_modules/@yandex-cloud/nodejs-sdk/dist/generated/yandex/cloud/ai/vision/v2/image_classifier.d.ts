/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { Image } from "../../../../../yandex/cloud/ai/vision/v2/image";
export declare const protobufPackage = "yandex.cloud.ai.vision.v2";
/** Description of single label */
export interface Label {
    $type: "yandex.cloud.ai.vision.v2.Label";
    /** Label name */
    name: string;
    /** human readable description of label */
    description: string;
}
/** Image annotation for specific label */
export interface ClassAnnotation {
    $type: "yandex.cloud.ai.vision.v2.ClassAnnotation";
    /** list of annotated labels */
    label?: Label;
    /** confidence for each label */
    confidence: number;
}
/** Specification of model used for annotation */
export interface ClassifierSpecification {
    $type: "yandex.cloud.ai.vision.v2.ClassifierSpecification";
    /** List of labels, annotated by service */
    labels: Label[];
    /** type of annotation: exclusive (multi-class) or non-exclusive (multi-label) */
    classificationType: ClassifierSpecification_ClassificationType;
}
export declare enum ClassifierSpecification_ClassificationType {
    CLASSIFICATION_TYPE_UNSPECIFIED = 0,
    MULTI_LABEL = 1,
    MULTI_CLASS = 2,
    UNRECOGNIZED = -1
}
export declare function classifierSpecification_ClassificationTypeFromJSON(object: any): ClassifierSpecification_ClassificationType;
export declare function classifierSpecification_ClassificationTypeToJSON(object: ClassifierSpecification_ClassificationType): string;
/**  */
export interface AnnotationResponse {
    $type: "yandex.cloud.ai.vision.v2.AnnotationResponse";
    /** internal service requestId */
    requestId: string;
    /** class specification */
    classifierSpecification?: ClassifierSpecification;
    /** annotations for each class */
    annotations: ClassAnnotation[];
}
/** request for annotation */
export interface AnnotationRequest {
    $type: "yandex.cloud.ai.vision.v2.AnnotationRequest";
    /** image to annotate */
    image?: Image;
}
export declare const Label: {
    $type: "yandex.cloud.ai.vision.v2.Label";
    encode(message: Label, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Label;
    fromJSON(object: any): Label;
    toJSON(message: Label): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name">, never>>(object: I): Label;
};
export declare const ClassAnnotation: {
    $type: "yandex.cloud.ai.vision.v2.ClassAnnotation";
    encode(message: ClassAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClassAnnotation;
    fromJSON(object: any): ClassAnnotation;
    toJSON(message: ClassAnnotation): unknown;
    fromPartial<I extends {
        confidence?: number | undefined;
        label?: {
            description?: string | undefined;
            name?: string | undefined;
        } | undefined;
    } & {
        confidence?: number | undefined;
        label?: ({
            description?: string | undefined;
            name?: string | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["label"], "$type" | "description" | "name">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "confidence" | "label">, never>>(object: I): ClassAnnotation;
};
export declare const ClassifierSpecification: {
    $type: "yandex.cloud.ai.vision.v2.ClassifierSpecification";
    encode(message: ClassifierSpecification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClassifierSpecification;
    fromJSON(object: any): ClassifierSpecification;
    toJSON(message: ClassifierSpecification): unknown;
    fromPartial<I extends {
        classificationType?: ClassifierSpecification_ClassificationType | undefined;
        labels?: {
            description?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
    } & {
        classificationType?: ClassifierSpecification_ClassificationType | undefined;
        labels?: ({
            description?: string | undefined;
            name?: string | undefined;
        }[] & ({
            description?: string | undefined;
            name?: string | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["labels"][number], "$type" | "description" | "name">, never>)[] & Record<Exclude<keyof I["labels"], "$type" | keyof {
            description?: string | undefined;
            name?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "classificationType" | "labels">, never>>(object: I): ClassifierSpecification;
};
export declare const AnnotationResponse: {
    $type: "yandex.cloud.ai.vision.v2.AnnotationResponse";
    encode(message: AnnotationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnnotationResponse;
    fromJSON(object: any): AnnotationResponse;
    toJSON(message: AnnotationResponse): unknown;
    fromPartial<I extends {
        requestId?: string | undefined;
        classifierSpecification?: {
            classificationType?: ClassifierSpecification_ClassificationType | undefined;
            labels?: {
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        } | undefined;
        annotations?: {
            confidence?: number | undefined;
            label?: {
                description?: string | undefined;
                name?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        requestId?: string | undefined;
        classifierSpecification?: ({
            classificationType?: ClassifierSpecification_ClassificationType | undefined;
            labels?: {
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        } & {
            classificationType?: ClassifierSpecification_ClassificationType | undefined;
            labels?: ({
                description?: string | undefined;
                name?: string | undefined;
            }[] & ({
                description?: string | undefined;
                name?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["classifierSpecification"]["labels"][number], "$type" | "description" | "name">, never>)[] & Record<Exclude<keyof I["classifierSpecification"]["labels"], "$type" | keyof {
                description?: string | undefined;
                name?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["classifierSpecification"], "$type" | "classificationType" | "labels">, never>) | undefined;
        annotations?: ({
            confidence?: number | undefined;
            label?: {
                description?: string | undefined;
                name?: string | undefined;
            } | undefined;
        }[] & ({
            confidence?: number | undefined;
            label?: {
                description?: string | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            confidence?: number | undefined;
            label?: ({
                description?: string | undefined;
                name?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["annotations"][number]["label"], "$type" | "description" | "name">, never>) | undefined;
        } & Record<Exclude<keyof I["annotations"][number], "$type" | "confidence" | "label">, never>)[] & Record<Exclude<keyof I["annotations"], "$type" | keyof {
            confidence?: number | undefined;
            label?: {
                description?: string | undefined;
                name?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "requestId" | "classifierSpecification" | "annotations">, never>>(object: I): AnnotationResponse;
};
export declare const AnnotationRequest: {
    $type: "yandex.cloud.ai.vision.v2.AnnotationRequest";
    encode(message: AnnotationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnnotationRequest;
    fromJSON(object: any): AnnotationRequest;
    toJSON(message: AnnotationRequest): unknown;
    fromPartial<I extends {
        image?: {
            content?: Buffer | undefined;
            imageType?: import("../../../../../yandex/cloud/ai/vision/v2/image").Image_ImageType | undefined;
        } | undefined;
    } & {
        image?: ({
            content?: Buffer | undefined;
            imageType?: import("../../../../../yandex/cloud/ai/vision/v2/image").Image_ImageType | undefined;
        } & {
            content?: Buffer | undefined;
            imageType?: import("../../../../../yandex/cloud/ai/vision/v2/image").Image_ImageType | undefined;
        } & Record<Exclude<keyof I["image"], "$type" | "content" | "imageType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "image">, never>>(object: I): AnnotationRequest;
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
