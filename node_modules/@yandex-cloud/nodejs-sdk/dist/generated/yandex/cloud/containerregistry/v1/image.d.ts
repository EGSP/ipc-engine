import _m0 from "protobufjs/minimal";
import { Blob } from "../../../../yandex/cloud/containerregistry/v1/blob";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
/** An Image resource. For more information, see [Docker image](/docs/container-registry/concepts/docker-image). */
export interface Image {
    $type: "yandex.cloud.containerregistry.v1.Image";
    /** Output only. ID of the Docker image. */
    id: string;
    /**
     * Name of the Docker image.
     * The name is unique within the registry.
     */
    name: string;
    /** Content-addressable identifier of the Docker image. */
    digest: string;
    /** Compressed size of the Docker image, specified in bytes. */
    compressedSize: number;
    /** Configuration of the Docker image. */
    config?: Blob;
    /** Layers of the Docker image. */
    layers: Blob[];
    /**
     * Tags of the Docker image.
     *
     * Each tag is unique within the repository.
     */
    tags: string[];
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
}
export declare const Image: {
    $type: "yandex.cloud.containerregistry.v1.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        config?: {
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        } | undefined;
        digest?: string | undefined;
        compressedSize?: number | undefined;
        tags?: string[] | undefined;
        layers?: {
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        config?: ({
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        } & {
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: (string[] & string[] & Record<Exclude<keyof I["config"]["urls"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "id" | "size" | "digest" | "urls">, never>) | undefined;
        digest?: string | undefined;
        compressedSize?: number | undefined;
        tags?: (string[] & string[] & Record<Exclude<keyof I["tags"], "$type" | keyof string[]>, never>) | undefined;
        layers?: ({
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        } & {
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: (string[] & string[] & Record<Exclude<keyof I["layers"][number]["urls"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["layers"][number], "$type" | "id" | "size" | "digest" | "urls">, never>)[] & Record<Exclude<keyof I["layers"], "$type" | keyof {
            id?: string | undefined;
            size?: number | undefined;
            digest?: string | undefined;
            urls?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "config" | "digest" | "compressedSize" | "tags" | "layers">, never>>(object: I): Image;
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
