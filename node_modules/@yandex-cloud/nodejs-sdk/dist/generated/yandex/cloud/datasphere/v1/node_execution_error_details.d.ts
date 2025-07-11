import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
/** User code python execution's error details */
export interface NodeExecutionErrorDetails {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails";
    /** Error name */
    errorName: string;
    /** Error message */
    errorMessage: string;
    /** Error traceback */
    traceback: string[];
}
export declare const NodeExecutionErrorDetails: {
    $type: "yandex.cloud.datasphere.v1.NodeExecutionErrorDetails";
    encode(message: NodeExecutionErrorDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeExecutionErrorDetails;
    fromJSON(object: any): NodeExecutionErrorDetails;
    toJSON(message: NodeExecutionErrorDetails): unknown;
    fromPartial<I extends {
        errorName?: string | undefined;
        errorMessage?: string | undefined;
        traceback?: string[] | undefined;
    } & {
        errorName?: string | undefined;
        errorMessage?: string | undefined;
        traceback?: (string[] & string[] & Record<Exclude<keyof I["traceback"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "errorName" | "errorMessage" | "traceback">, never>>(object: I): NodeExecutionErrorDetails;
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
