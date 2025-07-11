import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
    $type: "google.protobuf.Struct";
    /** Unordered map of dynamically typed values. */
    fields: {
        [key: string]: any;
    };
}
export interface Struct_FieldsEntry {
    $type: "google.protobuf.Struct.FieldsEntry";
    key: string;
    value?: any;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
    $type: "google.protobuf.Value";
    /** Represents a null value. */
    nullValue: NullValue | undefined;
    /** Represents a double value. */
    numberValue: number | undefined;
    /** Represents a string value. */
    stringValue: string | undefined;
    /** Represents a boolean value. */
    boolValue: boolean | undefined;
    /** Represents a structured value. */
    structValue?: {
        [key: string]: any;
    };
    /** Represents a repeated `Value`. */
    listValue?: Array<any>;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
    $type: "google.protobuf.ListValue";
    /** Repeated field of dynamically typed values. */
    values: any[];
}
export declare const Struct: {
    $type: "google.protobuf.Struct";
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    fromPartial<I extends {
        fields?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        fields?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["fields"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fields">, never>>(object: I): Struct;
    wrap(object: {
        [key: string]: any;
    } | undefined): Struct;
    unwrap(message: Struct): {
        [key: string]: any;
    };
};
export declare const Struct_FieldsEntry: {
    $type: "google.protobuf.Struct.FieldsEntry";
    encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
    fromPartial<I extends {
        value?: any;
        key?: string | undefined;
    } & {
        value?: any;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Struct_FieldsEntry;
};
export declare const Value: {
    $type: "google.protobuf.Value";
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial<I extends {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
        listValue?: any[] | undefined;
    } & {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["structValue"], string | number>, never>) | undefined;
        listValue?: (any[] & any[] & Record<Exclude<keyof I["listValue"], "$type" | keyof any[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nullValue" | "numberValue" | "stringValue" | "boolValue" | "structValue" | "listValue">, never>>(object: I): Value;
    wrap(value: any): Value;
    unwrap(message: Value): string | number | boolean | Object | null | Array<any> | undefined;
};
export declare const ListValue: {
    $type: "google.protobuf.ListValue";
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial<I extends {
        values?: any[] | undefined;
    } & {
        values?: (any[] & any[] & Record<Exclude<keyof I["values"], "$type" | keyof any[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "values">, never>>(object: I): ListValue;
    wrap(value: Array<any>): ListValue;
    unwrap(message: ListValue): Array<any>;
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
