import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface Sink {
    $type: "yandex.cloud.logging.v1.Sink";
    /** Sink ID. */
    id: string;
    /** Sink folder ID. */
    folderId: string;
    /** Sink cloud ID. */
    cloudId: string;
    /** Sink creation time. */
    createdAt?: Date;
    /** Sink name. */
    name: string;
    /** Sink description. */
    description: string;
    /** Sink labels. */
    labels: {
        [key: string]: string;
    };
    /** Logs will be written to the sink on behalf of this service account */
    serviceAccountId: string;
    /** Yandex data stream */
    yds?: Sink_Yds | undefined;
    /** Object storage */
    s3?: Sink_S3 | undefined;
}
export interface Sink_LabelsEntry {
    $type: "yandex.cloud.logging.v1.Sink.LabelsEntry";
    key: string;
    value: string;
}
export interface Sink_Yds {
    $type: "yandex.cloud.logging.v1.Sink.Yds";
    /** Fully qualified name of data stream */
    streamName: string;
}
export interface Sink_S3 {
    $type: "yandex.cloud.logging.v1.Sink.S3";
    /** Object storage bucket */
    bucket: string;
    /** Prefix to use for saved log object names */
    prefix: string;
}
export declare const Sink: {
    $type: "yandex.cloud.logging.v1.Sink";
    encode(message: Sink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sink;
    fromJSON(object: any): Sink;
    toJSON(message: Sink): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        cloudId?: string | undefined;
        serviceAccountId?: string | undefined;
        yds?: {
            streamName?: string | undefined;
        } | undefined;
        s3?: {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        cloudId?: string | undefined;
        serviceAccountId?: string | undefined;
        yds?: ({
            streamName?: string | undefined;
        } & {
            streamName?: string | undefined;
        } & Record<Exclude<keyof I["yds"], "$type" | "streamName">, never>) | undefined;
        s3?: ({
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & Record<Exclude<keyof I["s3"], "$type" | "bucket" | "prefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "cloudId" | "serviceAccountId" | "yds" | "s3">, never>>(object: I): Sink;
};
export declare const Sink_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.Sink.LabelsEntry";
    encode(message: Sink_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sink_LabelsEntry;
    fromJSON(object: any): Sink_LabelsEntry;
    toJSON(message: Sink_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Sink_LabelsEntry;
};
export declare const Sink_Yds: {
    $type: "yandex.cloud.logging.v1.Sink.Yds";
    encode(message: Sink_Yds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sink_Yds;
    fromJSON(object: any): Sink_Yds;
    toJSON(message: Sink_Yds): unknown;
    fromPartial<I extends {
        streamName?: string | undefined;
    } & {
        streamName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "streamName">, never>>(object: I): Sink_Yds;
};
export declare const Sink_S3: {
    $type: "yandex.cloud.logging.v1.Sink.S3";
    encode(message: Sink_S3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sink_S3;
    fromJSON(object: any): Sink_S3;
    toJSON(message: Sink_S3): unknown;
    fromPartial<I extends {
        bucket?: string | undefined;
        prefix?: string | undefined;
    } & {
        bucket?: string | undefined;
        prefix?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "bucket" | "prefix">, never>>(object: I): Sink_S3;
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
