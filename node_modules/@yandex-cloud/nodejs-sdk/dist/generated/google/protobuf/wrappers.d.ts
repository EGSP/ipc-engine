/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "google.protobuf";
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    $type: "google.protobuf.DoubleValue";
    /** The double value. */
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    $type: "google.protobuf.FloatValue";
    /** The float value. */
    value: number;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    $type: "google.protobuf.Int64Value";
    /** The int64 value. */
    value: number;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    $type: "google.protobuf.UInt64Value";
    /** The uint64 value. */
    value: number;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    $type: "google.protobuf.Int32Value";
    /** The int32 value. */
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    $type: "google.protobuf.UInt32Value";
    /** The uint32 value. */
    value: number;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    $type: "google.protobuf.BoolValue";
    /** The bool value. */
    value: boolean;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    $type: "google.protobuf.StringValue";
    /** The string value. */
    value: string;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    $type: "google.protobuf.BytesValue";
    /** The bytes value. */
    value: Buffer;
}
export declare const DoubleValue: {
    $type: "google.protobuf.DoubleValue";
    encode(message: DoubleValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DoubleValue;
    fromJSON(object: any): DoubleValue;
    toJSON(message: DoubleValue): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): DoubleValue;
};
export declare const FloatValue: {
    $type: "google.protobuf.FloatValue";
    encode(message: FloatValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FloatValue;
    fromJSON(object: any): FloatValue;
    toJSON(message: FloatValue): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): FloatValue;
};
export declare const Int64Value: {
    $type: "google.protobuf.Int64Value";
    encode(message: Int64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Int64Value;
    fromJSON(object: any): Int64Value;
    toJSON(message: Int64Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): Int64Value;
};
export declare const UInt64Value: {
    $type: "google.protobuf.UInt64Value";
    encode(message: UInt64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UInt64Value;
    fromJSON(object: any): UInt64Value;
    toJSON(message: UInt64Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): UInt64Value;
};
export declare const Int32Value: {
    $type: "google.protobuf.Int32Value";
    encode(message: Int32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Int32Value;
    fromJSON(object: any): Int32Value;
    toJSON(message: Int32Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): Int32Value;
};
export declare const UInt32Value: {
    $type: "google.protobuf.UInt32Value";
    encode(message: UInt32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UInt32Value;
    fromJSON(object: any): UInt32Value;
    toJSON(message: UInt32Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): UInt32Value;
};
export declare const BoolValue: {
    $type: "google.protobuf.BoolValue";
    encode(message: BoolValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BoolValue;
    fromJSON(object: any): BoolValue;
    toJSON(message: BoolValue): unknown;
    fromPartial<I extends {
        value?: boolean | undefined;
    } & {
        value?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): BoolValue;
};
export declare const StringValue: {
    $type: "google.protobuf.StringValue";
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringValue;
    fromJSON(object: any): StringValue;
    toJSON(message: StringValue): unknown;
    fromPartial<I extends {
        value?: string | undefined;
    } & {
        value?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): StringValue;
};
export declare const BytesValue: {
    $type: "google.protobuf.BytesValue";
    encode(message: BytesValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytesValue;
    fromJSON(object: any): BytesValue;
    toJSON(message: BytesValue): unknown;
    fromPartial<I extends {
        value?: Buffer | undefined;
    } & {
        value?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): BytesValue;
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
