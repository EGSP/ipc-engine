import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.logging.v1";
/**
 * Log entry resource specification.
 *
 * May be used either by services and by user.
 */
export interface LogEntryResource {
    $type: "yandex.cloud.logging.v1.LogEntryResource";
    /** Resource type, i.e., `serverless.function` */
    type: string;
    /** Resource ID, i.e., ID of the function producing logs. */
    id: string;
}
/** Log group resource. */
export interface LogGroupResource {
    $type: "yandex.cloud.logging.v1.LogGroupResource";
    /**
     * Resource type.
     *
     * Collected from log entries inside log group.
     */
    type: string;
    /** List of resource IDs with the same resource type. */
    ids: string[];
}
export declare const LogEntryResource: {
    $type: "yandex.cloud.logging.v1.LogEntryResource";
    encode(message: LogEntryResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntryResource;
    fromJSON(object: any): LogEntryResource;
    toJSON(message: LogEntryResource): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: string | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type">, never>>(object: I): LogEntryResource;
};
export declare const LogGroupResource: {
    $type: "yandex.cloud.logging.v1.LogGroupResource";
    encode(message: LogGroupResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroupResource;
    fromJSON(object: any): LogGroupResource;
    toJSON(message: LogGroupResource): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        ids?: string[] | undefined;
    } & {
        type?: string | undefined;
        ids?: (string[] & string[] & Record<Exclude<keyof I["ids"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "ids">, never>>(object: I): LogGroupResource;
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
