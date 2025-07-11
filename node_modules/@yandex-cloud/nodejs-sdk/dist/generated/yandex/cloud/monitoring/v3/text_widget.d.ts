import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Text widget. */
export interface TextWidget {
    $type: "yandex.cloud.monitoring.v3.TextWidget";
    /** Text. */
    text: string;
}
export declare const TextWidget: {
    $type: "yandex.cloud.monitoring.v3.TextWidget";
    encode(message: TextWidget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextWidget;
    fromJSON(object: any): TextWidget;
    toJSON(message: TextWidget): unknown;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "text">, never>>(object: I): TextWidget;
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
