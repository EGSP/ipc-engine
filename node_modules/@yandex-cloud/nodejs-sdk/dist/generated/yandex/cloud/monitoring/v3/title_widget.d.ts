import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Title widget. */
export interface TitleWidget {
    $type: "yandex.cloud.monitoring.v3.TitleWidget";
    /** Title text. */
    text: string;
    /** Title size. */
    size: TitleWidget_TitleSize;
}
/** Title size. */
export declare enum TitleWidget_TitleSize {
    TITLE_SIZE_UNSPECIFIED = 0,
    /** TITLE_SIZE_XS - Extra small size. */
    TITLE_SIZE_XS = 1,
    /** TITLE_SIZE_S - Small size. */
    TITLE_SIZE_S = 2,
    /** TITLE_SIZE_M - Middle size. */
    TITLE_SIZE_M = 3,
    /** TITLE_SIZE_L - Large size. */
    TITLE_SIZE_L = 4,
    UNRECOGNIZED = -1
}
export declare function titleWidget_TitleSizeFromJSON(object: any): TitleWidget_TitleSize;
export declare function titleWidget_TitleSizeToJSON(object: TitleWidget_TitleSize): string;
export declare const TitleWidget: {
    $type: "yandex.cloud.monitoring.v3.TitleWidget";
    encode(message: TitleWidget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TitleWidget;
    fromJSON(object: any): TitleWidget;
    toJSON(message: TitleWidget): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        size?: TitleWidget_TitleSize | undefined;
    } & {
        text?: string | undefined;
        size?: TitleWidget_TitleSize | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "size">, never>>(object: I): TitleWidget;
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
