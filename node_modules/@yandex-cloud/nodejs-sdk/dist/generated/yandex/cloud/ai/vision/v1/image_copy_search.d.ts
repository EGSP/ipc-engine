import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface ImageCopySearchAnnotation {
    $type: "yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation";
    /** Number of image copies */
    copyCount: number;
    /** Top relevance result of image copy search */
    topResults: CopyMatch[];
}
export interface CopyMatch {
    $type: "yandex.cloud.ai.vision.v1.CopyMatch";
    /** url of image */
    imageUrl: string;
    /** url of page that contains image */
    pageUrl: string;
    /** page title that contains image */
    title: string;
    /** image description */
    description: string;
}
export declare const ImageCopySearchAnnotation: {
    $type: "yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation";
    encode(message: ImageCopySearchAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageCopySearchAnnotation;
    fromJSON(object: any): ImageCopySearchAnnotation;
    toJSON(message: ImageCopySearchAnnotation): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["topResults"][number], "$type" | "description" | "imageUrl" | "pageUrl" | "title">, never>)[] & Record<Exclude<keyof I["topResults"], "$type" | keyof {
            description?: string | undefined;
            imageUrl?: string | undefined;
            pageUrl?: string | undefined;
            title?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "copyCount" | "topResults">, never>>(object: I): ImageCopySearchAnnotation;
};
export declare const CopyMatch: {
    $type: "yandex.cloud.ai.vision.v1.CopyMatch";
    encode(message: CopyMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CopyMatch;
    fromJSON(object: any): CopyMatch;
    toJSON(message: CopyMatch): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        imageUrl?: string | undefined;
        pageUrl?: string | undefined;
        title?: string | undefined;
    } & {
        description?: string | undefined;
        imageUrl?: string | undefined;
        pageUrl?: string | undefined;
        title?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "imageUrl" | "pageUrl" | "title">, never>>(object: I): CopyMatch;
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
