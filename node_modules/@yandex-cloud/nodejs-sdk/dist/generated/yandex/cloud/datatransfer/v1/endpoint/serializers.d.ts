import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export interface SerializerAuto {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto";
}
export interface SerializerJSON {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON";
}
export interface DebeziumSerializerParameter {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter";
    /** Name of the serializer parameter */
    key: string;
    /** Value of the serializer parameter */
    value: string;
}
export interface SerializerDebezium {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium";
    /** Settings of sterilization parameters as key-value pairs */
    serializerParameters: DebeziumSerializerParameter[];
}
/** Data serialization format */
export interface Serializer {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer";
    /** Select the serialization format automatically */
    serializerAuto?: SerializerAuto | undefined;
    /** Serialize data in json format */
    serializerJson?: SerializerJSON | undefined;
    /** Serialize data in debezium format */
    serializerDebezium?: SerializerDebezium | undefined;
}
export declare const SerializerAuto: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerAuto";
    encode(_: SerializerAuto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SerializerAuto;
    fromJSON(_: any): SerializerAuto;
    toJSON(_: SerializerAuto): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SerializerAuto;
};
export declare const SerializerJSON: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerJSON";
    encode(_: SerializerJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SerializerJSON;
    fromJSON(_: any): SerializerJSON;
    toJSON(_: SerializerJSON): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SerializerJSON;
};
export declare const DebeziumSerializerParameter: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DebeziumSerializerParameter";
    encode(message: DebeziumSerializerParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DebeziumSerializerParameter;
    fromJSON(object: any): DebeziumSerializerParameter;
    toJSON(message: DebeziumSerializerParameter): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): DebeziumSerializerParameter;
};
export declare const SerializerDebezium: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.SerializerDebezium";
    encode(message: SerializerDebezium, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SerializerDebezium;
    fromJSON(object: any): SerializerDebezium;
    toJSON(message: SerializerDebezium): unknown;
    fromPartial<I extends {
        serializerParameters?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
    } & {
        serializerParameters?: ({
            value?: string | undefined;
            key?: string | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
        } & Record<Exclude<keyof I["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["serializerParameters"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "serializerParameters">, never>>(object: I): SerializerDebezium;
};
export declare const Serializer: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Serializer";
    encode(message: Serializer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Serializer;
    fromJSON(object: any): Serializer;
    toJSON(message: Serializer): unknown;
    fromPartial<I extends {
        serializerAuto?: {} | undefined;
        serializerJson?: {} | undefined;
        serializerDebezium?: {
            serializerParameters?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        serializerAuto?: ({} & {} & Record<Exclude<keyof I["serializerAuto"], "$type">, never>) | undefined;
        serializerJson?: ({} & {} & Record<Exclude<keyof I["serializerJson"], "$type">, never>) | undefined;
        serializerDebezium?: ({
            serializerParameters?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
        } & {
            serializerParameters?: ({
                value?: string | undefined;
                key?: string | undefined;
            }[] & ({
                value?: string | undefined;
                key?: string | undefined;
            } & {
                value?: string | undefined;
                key?: string | undefined;
            } & Record<Exclude<keyof I["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>>(object: I): Serializer;
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
