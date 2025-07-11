import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface Polygon {
    $type: "yandex.cloud.ai.vision.v1.Polygon";
    /** The bounding polygon vertices. */
    vertices: Vertex[];
}
export interface Vertex {
    $type: "yandex.cloud.ai.vision.v1.Vertex";
    /** X coordinate in pixels. */
    x: number;
    /** Y coordinate in pixels. */
    y: number;
}
export declare const Polygon: {
    $type: "yandex.cloud.ai.vision.v1.Polygon";
    encode(message: Polygon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Polygon;
    fromJSON(object: any): Polygon;
    toJSON(message: Polygon): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["vertices"][number], "$type" | "x" | "y">, never>)[] & Record<Exclude<keyof I["vertices"], "$type" | keyof {
            x?: number | undefined;
            y?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "vertices">, never>>(object: I): Polygon;
};
export declare const Vertex: {
    $type: "yandex.cloud.ai.vision.v1.Vertex";
    encode(message: Vertex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vertex;
    fromJSON(object: any): Vertex;
    toJSON(message: Vertex): unknown;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "x" | "y">, never>>(object: I): Vertex;
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
