import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
/**
 * Ammo type for generators: phantom.ammo_type,
 * ammo.type in pandora.config_content.pool
 */
export declare enum AmmoType {
    AMMO_TYPE_UNSPECIFIED = 0,
    HTTP_JSON = 1,
    RAW = 2,
    URI = 3,
    URIPOST = 4,
    PHANTOM = 5,
    ACCESS = 6,
    UNRECOGNIZED = -1
}
export declare function ammoTypeFromJSON(object: any): AmmoType;
export declare function ammoTypeToJSON(object: AmmoType): string;
/** Load type: phantom.load_profile.load_type, */
export declare enum LoadType {
    LOAD_TYPE_UNSPECIFIED = 0,
    RPS = 1,
    INSTANCES = 2,
    STPD_FILE = 3,
    UNRECOGNIZED = -1
}
export declare function loadTypeFromJSON(object: any): LoadType;
export declare function loadTypeToJSON(object: LoadType): string;
/**
 * Schedule type: phantom.load_profile.schedule,
 * rps.schedule.type in pandora.config_content.pool
 */
export declare enum ScheduleType {
    SCHEDULE_TYPE_UNSPECIFIED = 0,
    ONCE = 1,
    CONST = 2,
    LINE = 3,
    STEP = 4,
    UNRECOGNIZED = -1
}
export declare function scheduleTypeFromJSON(object: any): ScheduleType;
export declare function scheduleTypeToJSON(object: ScheduleType): string;
export interface Test {
    $type: "yandex.cloud.loadtesting.agent.v1.Test";
    id: string;
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    createdAt?: Date;
    startedAt?: Date;
    finishedAt?: Date;
    updatedAt?: Date;
    generator: Test_Generator;
    /** AgentInstance ID where Test is running. */
    agentInstanceId: string;
    /** Target VM. */
    targetAddress: string;
    targetPort: number;
    /** Version of object under test. */
    targetVersion: string;
    /** Test details */
    config: string;
    ammoUrls: string | undefined;
    ammoId: string | undefined;
    cases: string[];
    status: Test_Status;
    errors: string[];
    favorite: boolean;
}
export declare enum Test_Status {
    STATUS_UNSPECIFIED = 0,
    CREATED = 1,
    INITIATED = 2,
    PREPARING = 3,
    RUNNING = 4,
    FINISHING = 5,
    DONE = 6,
    POST_PROCESSING = 7,
    FAILED = 8,
    STOPPING = 9,
    STOPPED = 10,
    AUTOSTOPPED = 11,
    WAITING = 12,
    DELETING = 13,
    UNRECOGNIZED = -1
}
export declare function test_StatusFromJSON(object: any): Test_Status;
export declare function test_StatusToJSON(object: Test_Status): string;
export declare enum Test_Generator {
    GENERATOR_UNSPECIFIED = 0,
    PANDORA = 1,
    PHANTOM = 2,
    JMETER = 3,
    UNRECOGNIZED = -1
}
export declare function test_GeneratorFromJSON(object: any): Test_Generator;
export declare function test_GeneratorToJSON(object: Test_Generator): string;
export interface Test_LabelsEntry {
    $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry";
    key: string;
    value: string;
}
/**
 * Load schedule string:
 * {duration: 180s, type: line, from: 1, to: 10000} for pandora,
 * step(25, 5, 5, 60) for phantom.
 */
export interface LoadSchedule {
    $type: "yandex.cloud.loadtesting.agent.v1.LoadSchedule";
    type: ScheduleType;
    /** times for pandora */
    instances: number;
    duration: string;
    rpsFrom: number;
    rpsTo: number;
    step: number;
    ops: number;
    stpdPath: string;
}
/** Load profile in general: phantom.load_profile, pool schedule for pandora */
export interface Schedule {
    $type: "yandex.cloud.loadtesting.agent.v1.Schedule";
    loadType: LoadType;
    loadSchedule: LoadSchedule[];
    loadProfile: string[];
}
export declare const Test: {
    $type: "yandex.cloud.loadtesting.agent.v1.Test";
    encode(message: Test, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Test;
    fromJSON(object: any): Test;
    toJSON(message: Test): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Test_Status | undefined;
        config?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        startedAt?: Date | undefined;
        finishedAt?: Date | undefined;
        targetPort?: number | undefined;
        agentInstanceId?: string | undefined;
        generator?: Test_Generator | undefined;
        targetAddress?: string | undefined;
        targetVersion?: string | undefined;
        cases?: string[] | undefined;
        errors?: string[] | undefined;
        favorite?: boolean | undefined;
        ammoUrls?: string | undefined;
        ammoId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Test_Status | undefined;
        config?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updatedAt?: Date | undefined;
        startedAt?: Date | undefined;
        finishedAt?: Date | undefined;
        targetPort?: number | undefined;
        agentInstanceId?: string | undefined;
        generator?: Test_Generator | undefined;
        targetAddress?: string | undefined;
        targetVersion?: string | undefined;
        cases?: (string[] & string[] & Record<Exclude<keyof I["cases"], "$type" | keyof string[]>, never>) | undefined;
        errors?: (string[] & string[] & Record<Exclude<keyof I["errors"], "$type" | keyof string[]>, never>) | undefined;
        favorite?: boolean | undefined;
        ammoUrls?: string | undefined;
        ammoId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "updatedAt" | "startedAt" | "finishedAt" | "targetPort" | "agentInstanceId" | "generator" | "targetAddress" | "targetVersion" | "cases" | "errors" | "favorite" | "ammoUrls" | "ammoId">, never>>(object: I): Test;
};
export declare const Test_LabelsEntry: {
    $type: "yandex.cloud.loadtesting.agent.v1.Test.LabelsEntry";
    encode(message: Test_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Test_LabelsEntry;
    fromJSON(object: any): Test_LabelsEntry;
    toJSON(message: Test_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Test_LabelsEntry;
};
export declare const LoadSchedule: {
    $type: "yandex.cloud.loadtesting.agent.v1.LoadSchedule";
    encode(message: LoadSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadSchedule;
    fromJSON(object: any): LoadSchedule;
    toJSON(message: LoadSchedule): unknown;
    fromPartial<I extends {
        type?: ScheduleType | undefined;
        instances?: number | undefined;
        duration?: string | undefined;
        rpsFrom?: number | undefined;
        rpsTo?: number | undefined;
        step?: number | undefined;
        ops?: number | undefined;
        stpdPath?: string | undefined;
    } & {
        type?: ScheduleType | undefined;
        instances?: number | undefined;
        duration?: string | undefined;
        rpsFrom?: number | undefined;
        rpsTo?: number | undefined;
        step?: number | undefined;
        ops?: number | undefined;
        stpdPath?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "instances" | "duration" | "rpsFrom" | "rpsTo" | "step" | "ops" | "stpdPath">, never>>(object: I): LoadSchedule;
};
export declare const Schedule: {
    $type: "yandex.cloud.loadtesting.agent.v1.Schedule";
    encode(message: Schedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Schedule;
    fromJSON(object: any): Schedule;
    toJSON(message: Schedule): unknown;
    fromPartial<I extends {
        loadType?: LoadType | undefined;
        loadProfile?: string[] | undefined;
        loadSchedule?: {
            type?: ScheduleType | undefined;
            instances?: number | undefined;
            duration?: string | undefined;
            rpsFrom?: number | undefined;
            rpsTo?: number | undefined;
            step?: number | undefined;
            ops?: number | undefined;
            stpdPath?: string | undefined;
        }[] | undefined;
    } & {
        loadType?: LoadType | undefined;
        loadProfile?: (string[] & string[] & Record<Exclude<keyof I["loadProfile"], "$type" | keyof string[]>, never>) | undefined;
        loadSchedule?: ({
            type?: ScheduleType | undefined;
            instances?: number | undefined;
            duration?: string | undefined;
            rpsFrom?: number | undefined;
            rpsTo?: number | undefined;
            step?: number | undefined;
            ops?: number | undefined;
            stpdPath?: string | undefined;
        }[] & ({
            type?: ScheduleType | undefined;
            instances?: number | undefined;
            duration?: string | undefined;
            rpsFrom?: number | undefined;
            rpsTo?: number | undefined;
            step?: number | undefined;
            ops?: number | undefined;
            stpdPath?: string | undefined;
        } & {
            type?: ScheduleType | undefined;
            instances?: number | undefined;
            duration?: string | undefined;
            rpsFrom?: number | undefined;
            rpsTo?: number | undefined;
            step?: number | undefined;
            ops?: number | undefined;
            stpdPath?: string | undefined;
        } & Record<Exclude<keyof I["loadSchedule"][number], "$type" | "type" | "instances" | "duration" | "rpsFrom" | "rpsTo" | "step" | "ops" | "stpdPath">, never>)[] & Record<Exclude<keyof I["loadSchedule"], "$type" | keyof {
            type?: ScheduleType | undefined;
            instances?: number | undefined;
            duration?: string | undefined;
            rpsFrom?: number | undefined;
            rpsTo?: number | undefined;
            step?: number | undefined;
            ops?: number | undefined;
            stpdPath?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "loadType" | "loadProfile" | "loadSchedule">, never>>(object: I): Schedule;
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
