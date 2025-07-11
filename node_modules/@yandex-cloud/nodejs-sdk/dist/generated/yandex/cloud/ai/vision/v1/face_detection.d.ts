import _m0 from "protobufjs/minimal";
import { Polygon } from "../../../../../yandex/cloud/ai/vision/v1/primitives";
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface FaceAnnotation {
    $type: "yandex.cloud.ai.vision.v1.FaceAnnotation";
    /** An array of detected faces for the specified image. */
    faces: Face[];
}
export interface Face {
    $type: "yandex.cloud.ai.vision.v1.Face";
    /** Area on the image where the face is located. */
    boundingBox?: Polygon;
}
export declare const FaceAnnotation: {
    $type: "yandex.cloud.ai.vision.v1.FaceAnnotation";
    encode(message: FaceAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FaceAnnotation;
    fromJSON(object: any): FaceAnnotation;
    toJSON(message: FaceAnnotation): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["faces"][number]["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["faces"][number]["boundingBox"]["vertices"], "$type" | keyof {
                    x?: number | undefined;
                    y?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["faces"][number]["boundingBox"], "$type" | "vertices">, never>) | undefined;
        } & Record<Exclude<keyof I["faces"][number], "$type" | "boundingBox">, never>)[] & Record<Exclude<keyof I["faces"], "$type" | keyof {
            boundingBox?: {
                vertices?: {
                    x?: number | undefined;
                    y?: number | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "faces">, never>>(object: I): FaceAnnotation;
};
export declare const Face: {
    $type: "yandex.cloud.ai.vision.v1.Face";
    encode(message: Face, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Face;
    fromJSON(object: any): Face;
    toJSON(message: Face): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["boundingBox"]["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["boundingBox"]["vertices"], "$type" | keyof {
                x?: number | undefined;
                y?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["boundingBox"], "$type" | "vertices">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "boundingBox">, never>>(object: I): Face;
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
