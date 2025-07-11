/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
/** A payload. */
export interface Payload {
    $type: "yandex.cloud.lockbox.v1.Payload";
    /** ID of the version that the payload belongs to. */
    versionId: string;
    /** Payload entries. */
    entries: Payload_Entry[];
}
export interface Payload_Entry {
    $type: "yandex.cloud.lockbox.v1.Payload.Entry";
    /** Non-confidential key of the entry. */
    key: string;
    /** Text value. */
    textValue: string | undefined;
    /** Binary value. */
    binaryValue: Buffer | undefined;
}
export declare const Payload: {
    $type: "yandex.cloud.lockbox.v1.Payload";
    encode(message: Payload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payload;
    fromJSON(object: any): Payload;
    toJSON(message: Payload): unknown;
    fromPartial<I extends {
        entries?: {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] | undefined;
        versionId?: string | undefined;
    } & {
        entries?: ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[] & ({
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        } & Record<Exclude<keyof I["entries"][number], "$type" | "key" | "textValue" | "binaryValue">, never>)[] & Record<Exclude<keyof I["entries"], "$type" | keyof {
            key?: string | undefined;
            textValue?: string | undefined;
            binaryValue?: Buffer | undefined;
        }[]>, never>) | undefined;
        versionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "entries" | "versionId">, never>>(object: I): Payload;
};
export declare const Payload_Entry: {
    $type: "yandex.cloud.lockbox.v1.Payload.Entry";
    encode(message: Payload_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payload_Entry;
    fromJSON(object: any): Payload_Entry;
    toJSON(message: Payload_Entry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        textValue?: string | undefined;
        binaryValue?: Buffer | undefined;
    } & {
        key?: string | undefined;
        textValue?: string | undefined;
        binaryValue?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "key" | "textValue" | "binaryValue">, never>>(object: I): Payload_Entry;
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
