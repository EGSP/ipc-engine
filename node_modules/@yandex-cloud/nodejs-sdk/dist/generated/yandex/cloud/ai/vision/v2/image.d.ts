/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.vision.v2";
export interface Image {
    $type: "yandex.cloud.ai.vision.v2.Image";
    /** bytes with data */
    content: Buffer | undefined;
    /** type of data */
    imageType: Image_ImageType;
}
/** type of image */
export declare enum Image_ImageType {
    IMAGE_TYPE_UNSPECIFIED = 0,
    JPEG = 1,
    PNG = 2,
    UNRECOGNIZED = -1
}
export declare function image_ImageTypeFromJSON(object: any): Image_ImageType;
export declare function image_ImageTypeToJSON(object: Image_ImageType): string;
export declare const Image: {
    $type: "yandex.cloud.ai.vision.v2.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial<I extends {
        content?: Buffer | undefined;
        imageType?: Image_ImageType | undefined;
    } & {
        content?: Buffer | undefined;
        imageType?: Image_ImageType | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "imageType">, never>>(object: I): Image;
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
