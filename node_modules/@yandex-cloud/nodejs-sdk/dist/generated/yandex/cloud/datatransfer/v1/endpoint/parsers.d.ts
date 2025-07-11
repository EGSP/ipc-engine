import _m0 from "protobufjs/minimal";
import { DataSchema } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export interface Parser {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Parser";
    jsonParser?: GenericParserCommon | undefined;
    auditTrailsV1Parser?: AuditTrailsV1Parser | undefined;
    cloudLoggingParser?: CloudLoggingParser | undefined;
    tskvParser?: GenericParserCommon | undefined;
}
export interface GenericParserCommon {
    $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon";
    dataSchema?: DataSchema;
    /** Allow null keys, if no - null keys will be putted to unparsed data */
    nullKeysAllowed: boolean;
    /** Will add _rest column for all unknown fields */
    addRestColumn: boolean;
}
export interface AuditTrailsV1Parser {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser";
}
export interface CloudLoggingParser {
    $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser";
}
export declare const Parser: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Parser";
    encode(message: Parser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Parser;
    fromJSON(object: any): Parser;
    toJSON(message: Parser): unknown;
    fromPartial<I extends {
        jsonParser?: {
            dataSchema?: {
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } | undefined;
        auditTrailsV1Parser?: {} | undefined;
        cloudLoggingParser?: {} | undefined;
        tskvParser?: {
            dataSchema?: {
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } | undefined;
    } & {
        jsonParser?: ({
            dataSchema?: {
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } & {
            dataSchema?: ({
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } & {
                fields?: ({
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } & {
                    fields?: ({
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] & ({
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    } & {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    } & Record<Exclude<keyof I["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                jsonFields?: string | undefined;
            } & Record<Exclude<keyof I["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } & Record<Exclude<keyof I["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
        auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["auditTrailsV1Parser"], "$type">, never>) | undefined;
        cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["cloudLoggingParser"], "$type">, never>) | undefined;
        tskvParser?: ({
            dataSchema?: {
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } & {
            dataSchema?: ({
                fields?: {
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                jsonFields?: string | undefined;
            } & {
                fields?: ({
                    fields?: {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] | undefined;
                } & {
                    fields?: ({
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[] & ({
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    } & {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    } & Record<Exclude<keyof I["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                        type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                        name?: string | undefined;
                        key?: boolean | undefined;
                        path?: string | undefined;
                        required?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                jsonFields?: string | undefined;
            } & Record<Exclude<keyof I["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
            nullKeysAllowed?: boolean | undefined;
            addRestColumn?: boolean | undefined;
        } & Record<Exclude<keyof I["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>>(object: I): Parser;
};
export declare const GenericParserCommon: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.GenericParserCommon";
    encode(message: GenericParserCommon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenericParserCommon;
    fromJSON(object: any): GenericParserCommon;
    toJSON(message: GenericParserCommon): unknown;
    fromPartial<I extends {
        dataSchema?: {
            fields?: {
                fields?: {
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            jsonFields?: string | undefined;
        } | undefined;
        nullKeysAllowed?: boolean | undefined;
        addRestColumn?: boolean | undefined;
    } & {
        dataSchema?: ({
            fields?: {
                fields?: {
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            jsonFields?: string | undefined;
        } & {
            fields?: ({
                fields?: {
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                }[] | undefined;
            } & {
                fields?: ({
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                }[] & ({
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                } & {
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                } & Record<Exclude<keyof I["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["dataSchema"]["fields"]["fields"], "$type" | keyof {
                    type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                    name?: string | undefined;
                    key?: boolean | undefined;
                    path?: string | undefined;
                    required?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
            jsonFields?: string | undefined;
        } & Record<Exclude<keyof I["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
        nullKeysAllowed?: boolean | undefined;
        addRestColumn?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>>(object: I): GenericParserCommon;
};
export declare const AuditTrailsV1Parser: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AuditTrailsV1Parser";
    encode(_: AuditTrailsV1Parser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuditTrailsV1Parser;
    fromJSON(_: any): AuditTrailsV1Parser;
    toJSON(_: AuditTrailsV1Parser): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): AuditTrailsV1Parser;
};
export declare const CloudLoggingParser: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.CloudLoggingParser";
    encode(_: CloudLoggingParser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudLoggingParser;
    fromJSON(_: any): CloudLoggingParser;
    toJSON(_: CloudLoggingParser): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): CloudLoggingParser;
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
