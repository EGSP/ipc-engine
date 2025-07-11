import _m0 from "protobufjs/minimal";
import { Empty } from "../../../../../google/protobuf/empty";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export declare enum ObjectTransferStage {
    OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
    /** BEFORE_DATA - Before data transfer */
    BEFORE_DATA = 1,
    /** AFTER_DATA - After data transfer */
    AFTER_DATA = 2,
    /** NEVER - Don't copy */
    NEVER = 3,
    UNRECOGNIZED = -1
}
export declare function objectTransferStageFromJSON(object: any): ObjectTransferStage;
export declare function objectTransferStageToJSON(object: ObjectTransferStage): string;
export declare enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** DISABLED - Don't cleanup */
    DISABLED = 1,
    /** DROP - Drop */
    DROP = 2,
    /** TRUNCATE - Truncate */
    TRUNCATE = 3,
    UNRECOGNIZED = -1
}
export declare function cleanupPolicyFromJSON(object: any): CleanupPolicy;
export declare function cleanupPolicyToJSON(object: CleanupPolicy): string;
export declare enum ColumnType {
    COLUMN_TYPE_UNSPECIFIED = 0,
    INT64 = 14,
    INT32 = 1,
    INT16 = 2,
    INT8 = 3,
    UINT64 = 4,
    UINT32 = 5,
    UINT16 = 6,
    UINT8 = 7,
    DOUBLE = 8,
    BOOLEAN = 9,
    STRING = 10,
    UTF8 = 11,
    ANY = 12,
    DATETIME = 13,
    UNRECOGNIZED = -1
}
export declare function columnTypeFromJSON(object: any): ColumnType;
export declare function columnTypeToJSON(object: ColumnType): string;
export interface AltName {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
    /** Source table name */
    fromName: string;
    /** Target table name */
    toName: string;
}
export interface Secret {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
    /** Raw secret value */
    raw: string | undefined;
}
export interface ColSchema {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema";
    name: string;
    type: ColumnType;
    key: boolean;
    required: boolean;
    path: string;
}
export interface TLSMode {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
    disabled?: Empty | undefined;
    enabled?: TLSConfig | undefined;
}
export interface TLSConfig {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
    /**
     * CA certificate
     *
     * X.509 certificate of the certificate authority which issued the server's
     * certificate, in PEM format. When CA certificate is specified TLS is used to
     * connect to the server.
     */
    caCertificate: string;
}
export interface ColumnValue {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
    stringValue: string | undefined;
}
export interface DataTransformationOptions {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions";
    /** Cloud function */
    cloudFunction: string;
    /** Service account */
    serviceAccountId: string;
    /** Number of retries */
    numberOfRetries: number;
    /** Buffer size for function */
    bufferSize: string;
    /** Flush interval */
    bufferFlushInterval: string;
    /** Invocation timeout */
    invocationTimeout: string;
}
export interface FieldList {
    $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList";
    /** Column schema */
    fields: ColSchema[];
}
export interface DataSchema {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema";
    fields?: FieldList | undefined;
    jsonFields: string | undefined;
}
/** No authentication */
export interface NoAuth {
    $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth";
}
export declare const AltName: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
    encode(message: AltName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AltName;
    fromJSON(object: any): AltName;
    toJSON(message: AltName): unknown;
    fromPartial<I extends {
        fromName?: string | undefined;
        toName?: string | undefined;
    } & {
        fromName?: string | undefined;
        toName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fromName" | "toName">, never>>(object: I): AltName;
};
export declare const Secret: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        raw?: string | undefined;
    } & {
        raw?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "raw">, never>>(object: I): Secret;
};
export declare const ColSchema: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColSchema";
    encode(message: ColSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColSchema;
    fromJSON(object: any): ColSchema;
    toJSON(message: ColSchema): unknown;
    fromPartial<I extends {
        type?: ColumnType | undefined;
        name?: string | undefined;
        key?: boolean | undefined;
        path?: string | undefined;
        required?: boolean | undefined;
    } & {
        type?: ColumnType | undefined;
        name?: string | undefined;
        key?: boolean | undefined;
        path?: string | undefined;
        required?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "key" | "path" | "required">, never>>(object: I): ColSchema;
};
export declare const TLSMode: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
    encode(message: TLSMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TLSMode;
    fromJSON(object: any): TLSMode;
    toJSON(message: TLSMode): unknown;
    fromPartial<I extends {
        enabled?: {
            caCertificate?: string | undefined;
        } | undefined;
        disabled?: {} | undefined;
    } & {
        enabled?: ({
            caCertificate?: string | undefined;
        } & {
            caCertificate?: string | undefined;
        } & Record<Exclude<keyof I["enabled"], "$type" | "caCertificate">, never>) | undefined;
        disabled?: ({} & {} & Record<Exclude<keyof I["disabled"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "disabled">, never>>(object: I): TLSMode;
};
export declare const TLSConfig: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
    encode(message: TLSConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TLSConfig;
    fromJSON(object: any): TLSConfig;
    toJSON(message: TLSConfig): unknown;
    fromPartial<I extends {
        caCertificate?: string | undefined;
    } & {
        caCertificate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "caCertificate">, never>>(object: I): TLSConfig;
};
export declare const ColumnValue: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
    encode(message: ColumnValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColumnValue;
    fromJSON(object: any): ColumnValue;
    toJSON(message: ColumnValue): unknown;
    fromPartial<I extends {
        stringValue?: string | undefined;
    } & {
        stringValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "stringValue">, never>>(object: I): ColumnValue;
};
export declare const DataTransformationOptions: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataTransformationOptions";
    encode(message: DataTransformationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataTransformationOptions;
    fromJSON(object: any): DataTransformationOptions;
    toJSON(message: DataTransformationOptions): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        cloudFunction?: string | undefined;
        numberOfRetries?: number | undefined;
        bufferSize?: string | undefined;
        bufferFlushInterval?: string | undefined;
        invocationTimeout?: string | undefined;
    } & {
        serviceAccountId?: string | undefined;
        cloudFunction?: string | undefined;
        numberOfRetries?: number | undefined;
        bufferSize?: string | undefined;
        bufferFlushInterval?: string | undefined;
        invocationTimeout?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>>(object: I): DataTransformationOptions;
};
export declare const FieldList: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.FieldList";
    encode(message: FieldList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FieldList;
    fromJSON(object: any): FieldList;
    toJSON(message: FieldList): unknown;
    fromPartial<I extends {
        fields?: {
            type?: ColumnType | undefined;
            name?: string | undefined;
            key?: boolean | undefined;
            path?: string | undefined;
            required?: boolean | undefined;
        }[] | undefined;
    } & {
        fields?: ({
            type?: ColumnType | undefined;
            name?: string | undefined;
            key?: boolean | undefined;
            path?: string | undefined;
            required?: boolean | undefined;
        }[] & ({
            type?: ColumnType | undefined;
            name?: string | undefined;
            key?: boolean | undefined;
            path?: string | undefined;
            required?: boolean | undefined;
        } & {
            type?: ColumnType | undefined;
            name?: string | undefined;
            key?: boolean | undefined;
            path?: string | undefined;
            required?: boolean | undefined;
        } & Record<Exclude<keyof I["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["fields"], "$type" | keyof {
            type?: ColumnType | undefined;
            name?: string | undefined;
            key?: boolean | undefined;
            path?: string | undefined;
            required?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "fields">, never>>(object: I): FieldList;
};
export declare const DataSchema: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.DataSchema";
    encode(message: DataSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataSchema;
    fromJSON(object: any): DataSchema;
    toJSON(message: DataSchema): unknown;
    fromPartial<I extends {
        fields?: {
            fields?: {
                type?: ColumnType | undefined;
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
                type?: ColumnType | undefined;
                name?: string | undefined;
                key?: boolean | undefined;
                path?: string | undefined;
                required?: boolean | undefined;
            }[] | undefined;
        } & {
            fields?: ({
                type?: ColumnType | undefined;
                name?: string | undefined;
                key?: boolean | undefined;
                path?: string | undefined;
                required?: boolean | undefined;
            }[] & ({
                type?: ColumnType | undefined;
                name?: string | undefined;
                key?: boolean | undefined;
                path?: string | undefined;
                required?: boolean | undefined;
            } & {
                type?: ColumnType | undefined;
                name?: string | undefined;
                key?: boolean | undefined;
                path?: string | undefined;
                required?: boolean | undefined;
            } & Record<Exclude<keyof I["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["fields"]["fields"], "$type" | keyof {
                type?: ColumnType | undefined;
                name?: string | undefined;
                key?: boolean | undefined;
                path?: string | undefined;
                required?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["fields"], "$type" | "fields">, never>) | undefined;
        jsonFields?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fields" | "jsonFields">, never>>(object: I): DataSchema;
};
export declare const NoAuth: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.NoAuth";
    encode(_: NoAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NoAuth;
    fromJSON(_: any): NoAuth;
    toJSON(_: NoAuth): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): NoAuth;
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
