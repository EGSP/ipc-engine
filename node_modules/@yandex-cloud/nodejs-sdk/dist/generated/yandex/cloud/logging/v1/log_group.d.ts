import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogGroup {
    $type: "yandex.cloud.logging.v1.LogGroup";
    /** Log group ID. */
    id: string;
    /** Log group folder ID. */
    folderId: string;
    /** Log group cloud ID. */
    cloudId: string;
    /** Log group creation time. */
    createdAt?: Date;
    /** Log group name. */
    name: string;
    /** Log group description. */
    description: string;
    /** Log group labels. */
    labels: {
        [key: string]: string;
    };
    /** Status of the log group. */
    status: LogGroup_Status;
    /**
     * Log group entry retention period.
     *
     * Entries will be present in group during this period.
     */
    retentionPeriod?: Duration;
    /** Data stream name */
    dataStream: string;
}
/** Possible log group statuses. */
export declare enum LogGroup_Status {
    /**
     * STATUS_UNSPECIFIED - Unknown status.
     *
     * Should never occur.
     */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Log group is creating. */
    CREATING = 1,
    /** ACTIVE - Log group is ready to accept messages, */
    ACTIVE = 2,
    /**
     * DELETING - Log group is being deleted.
     *
     * No messages will be accepted.
     */
    DELETING = 3,
    /** ERROR - Log group is in failed state. */
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function logGroup_StatusFromJSON(object: any): LogGroup_Status;
export declare function logGroup_StatusToJSON(object: LogGroup_Status): string;
export interface LogGroup_LabelsEntry {
    $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry";
    key: string;
    value: string;
}
export declare const LogGroup: {
    $type: "yandex.cloud.logging.v1.LogGroup";
    encode(message: LogGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroup;
    fromJSON(object: any): LogGroup;
    toJSON(message: LogGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LogGroup_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        cloudId?: string | undefined;
        retentionPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        dataStream?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LogGroup_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        cloudId?: string | undefined;
        retentionPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        dataStream?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "cloudId" | "retentionPeriod" | "dataStream">, never>>(object: I): LogGroup;
};
export declare const LogGroup_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.LogGroup.LabelsEntry";
    encode(message: LogGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroup_LabelsEntry;
    fromJSON(object: any): LogGroup_LabelsEntry;
    toJSON(message: LogGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): LogGroup_LabelsEntry;
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
