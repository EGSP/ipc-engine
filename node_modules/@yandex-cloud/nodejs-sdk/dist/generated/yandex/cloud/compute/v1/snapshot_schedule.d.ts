import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.compute.v1";
/** A snapshot schedule. For details about the concept, see [documentation](/docs/compute/concepts/snapshot-schedule). */
export interface SnapshotSchedule {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule";
    /** ID of the snapshot schedule. */
    id: string;
    /** ID of the folder that the snapshot schedule belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the snapshot schedule.
     *
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the snapshot schedule. */
    description: string;
    /** Snapshot schedule labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Status of the snapshot schedule. */
    status: SnapshotSchedule_Status;
    /** Frequency settings of the snapshot schedule. */
    schedulePolicy?: SchedulePolicy;
    /**
     * Retention period of the snapshot schedule. Once a snapshot created by the schedule reaches this age, it is
     * automatically deleted.
     */
    retentionPeriod?: Duration | undefined;
    /**
     * Retention count of the snapshot schedule. Once the number of snapshots created by the schedule exceeds this
     * number, the oldest ones are automatically deleted. E.g. if the number is 5, the first snapshot is deleted
     * after the sixth one is created, the second is deleted after the seventh one is created, and so on.
     */
    snapshotCount: number | undefined;
    /** Attributes of snapshots created by the snapshot schedule. */
    snapshotSpec?: SnapshotSpec;
}
export declare enum SnapshotSchedule_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The snapshot schedule is being created. */
    CREATING = 1,
    /**
     * ACTIVE - The snapshot schedule is on: new disk snapshots will be created, old ones deleted
     * (if [SnapshotSchedule.retention_policy] is specified).
     */
    ACTIVE = 2,
    /** INACTIVE - The schedule is interrupted, snapshots won't be created or deleted. */
    INACTIVE = 3,
    /** DELETING - The schedule is being deleted. */
    DELETING = 4,
    /** UPDATING - Changes are being made to snapshot schedule settings or a list of attached disks. */
    UPDATING = 5,
    UNRECOGNIZED = -1
}
export declare function snapshotSchedule_StatusFromJSON(object: any): SnapshotSchedule_Status;
export declare function snapshotSchedule_StatusToJSON(object: SnapshotSchedule_Status): string;
export interface SnapshotSchedule_LabelsEntry {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
    key: string;
    value: string;
}
/** A resource for frequency settings of a snapshot schedule. */
export interface SchedulePolicy {
    $type: "yandex.cloud.compute.v1.SchedulePolicy";
    /** Timestamp for creating the first snapshot. */
    startAt?: Date;
    /**
     * Cron expression for the snapshot schedule (UTC+0).
     *
     * The expression must consist of five fields (`Minutes Hours Day-of-month Month Day-of-week`) or be one of
     * nonstandard predefined expressions (e.g. `@hourly`). For details about the format,
     * see [documentation](/docs/compute/concepts/snapshot-schedule#cron)
     */
    expression: string;
}
/** A resource for attributes of snapshots created by the snapshot schedule. */
export interface SnapshotSpec {
    $type: "yandex.cloud.compute.v1.SnapshotSpec";
    /** Description of the created snapshot. */
    description: string;
    /** Snapshot labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface SnapshotSpec_LabelsEntry {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
    key: string;
    value: string;
}
export declare const SnapshotSchedule: {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule";
    encode(message: SnapshotSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSchedule;
    fromJSON(object: any): SnapshotSchedule;
    toJSON(message: SnapshotSchedule): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: SnapshotSchedule_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        schedulePolicy?: {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } | undefined;
        retentionPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: SnapshotSchedule_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        schedulePolicy?: ({
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & Record<Exclude<keyof I["schedulePolicy"], "$type" | "startAt" | "expression">, never>) | undefined;
        retentionPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshotSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["snapshotSpec"], "$type" | "description" | "labels">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "schedulePolicy" | "retentionPeriod" | "snapshotCount" | "snapshotSpec">, never>>(object: I): SnapshotSchedule;
};
export declare const SnapshotSchedule_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
    encode(message: SnapshotSchedule_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSchedule_LabelsEntry;
    fromJSON(object: any): SnapshotSchedule_LabelsEntry;
    toJSON(message: SnapshotSchedule_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SnapshotSchedule_LabelsEntry;
};
export declare const SchedulePolicy: {
    $type: "yandex.cloud.compute.v1.SchedulePolicy";
    encode(message: SchedulePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulePolicy;
    fromJSON(object: any): SchedulePolicy;
    toJSON(message: SchedulePolicy): unknown;
    fromPartial<I extends {
        startAt?: Date | undefined;
        expression?: string | undefined;
    } & {
        startAt?: Date | undefined;
        expression?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "startAt" | "expression">, never>>(object: I): SchedulePolicy;
};
export declare const SnapshotSpec: {
    $type: "yandex.cloud.compute.v1.SnapshotSpec";
    encode(message: SnapshotSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSpec;
    fromJSON(object: any): SnapshotSpec;
    toJSON(message: SnapshotSpec): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "labels">, never>>(object: I): SnapshotSpec;
};
export declare const SnapshotSpec_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
    encode(message: SnapshotSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSpec_LabelsEntry;
    fromJSON(object: any): SnapshotSpec_LabelsEntry;
    toJSON(message: SnapshotSpec_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SnapshotSpec_LabelsEntry;
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
