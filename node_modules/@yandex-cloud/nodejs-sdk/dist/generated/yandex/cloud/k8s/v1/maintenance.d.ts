import _m0 from "protobufjs/minimal";
import { TimeOfDay } from "../../../../google/type/timeofday";
import { Duration } from "../../../../google/protobuf/duration";
import { DayOfWeek } from "../../../../google/type/dayofweek";
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface MaintenanceWindow {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow";
    /** Updating the master at any time. */
    anytime?: AnytimeMaintenanceWindow | undefined;
    /** Updating the master on any day during the specified time window. */
    dailyMaintenanceWindow?: DailyMaintenanceWindow | undefined;
    /** Updating the master on selected days during the specified time window. */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}
export interface AnytimeMaintenanceWindow {
    $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow";
}
export interface DailyMaintenanceWindow {
    $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow";
    /** Window start time, in the UTC timezone. */
    startTime?: TimeOfDay;
    /** Window duration. */
    duration?: Duration;
}
export interface DaysOfWeekMaintenanceWindow {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow";
    /** Days of the week when automatic updates are allowed. */
    days: DayOfWeek[];
    /** Window start time, in the UTC timezone. */
    startTime?: TimeOfDay;
    /** Window duration. */
    duration?: Duration;
}
export interface WeeklyMaintenanceWindow {
    $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow";
    /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
    daysOfWeek: DaysOfWeekMaintenanceWindow[];
}
export declare const MaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow";
    encode(message: MaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceWindow;
    fromJSON(object: any): MaintenanceWindow;
    toJSON(message: MaintenanceWindow): unknown;
    fromPartial<I extends {
        anytime?: {} | undefined;
        dailyMaintenanceWindow?: {
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        weeklyMaintenanceWindow?: {
            daysOfWeek?: {
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                days?: DayOfWeek[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        anytime?: ({} & {} & Record<Exclude<keyof I["anytime"], "$type">, never>) | undefined;
        dailyMaintenanceWindow?: ({
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            startTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["dailyMaintenanceWindow"]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            duration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["dailyMaintenanceWindow"]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["dailyMaintenanceWindow"], "$type" | "startTime" | "duration">, never>) | undefined;
        weeklyMaintenanceWindow?: ({
            daysOfWeek?: {
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                days?: DayOfWeek[] | undefined;
            }[] | undefined;
        } & {
            daysOfWeek?: ({
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                days?: DayOfWeek[] | undefined;
            }[] & ({
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                days?: DayOfWeek[] | undefined;
            } & {
                startTime?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["weeklyMaintenanceWindow"]["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                duration?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["weeklyMaintenanceWindow"]["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
                days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["weeklyMaintenanceWindow"]["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
            } & Record<Exclude<keyof I["weeklyMaintenanceWindow"]["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["weeklyMaintenanceWindow"]["daysOfWeek"], "$type" | keyof {
                startTime?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                days?: DayOfWeek[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["weeklyMaintenanceWindow"], "$type" | "daysOfWeek">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "anytime" | "dailyMaintenanceWindow" | "weeklyMaintenanceWindow">, never>>(object: I): MaintenanceWindow;
};
export declare const AnytimeMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow";
    encode(_: AnytimeMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnytimeMaintenanceWindow;
    fromJSON(_: any): AnytimeMaintenanceWindow;
    toJSON(_: AnytimeMaintenanceWindow): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): AnytimeMaintenanceWindow;
};
export declare const DailyMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow";
    encode(message: DailyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DailyMaintenanceWindow;
    fromJSON(object: any): DailyMaintenanceWindow;
    toJSON(message: DailyMaintenanceWindow): unknown;
    fromPartial<I extends {
        startTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        duration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        startTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        duration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "startTime" | "duration">, never>>(object: I): DailyMaintenanceWindow;
};
export declare const DaysOfWeekMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow";
    encode(message: DaysOfWeekMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DaysOfWeekMaintenanceWindow;
    fromJSON(object: any): DaysOfWeekMaintenanceWindow;
    toJSON(message: DaysOfWeekMaintenanceWindow): unknown;
    fromPartial<I extends {
        startTime?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        duration?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        days?: DayOfWeek[] | undefined;
    } & {
        startTime?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        duration?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
        days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "startTime" | "duration" | "days">, never>>(object: I): DaysOfWeekMaintenanceWindow;
};
export declare const WeeklyMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow";
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial<I extends {
        daysOfWeek?: {
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            days?: DayOfWeek[] | undefined;
        }[] | undefined;
    } & {
        daysOfWeek?: ({
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            days?: DayOfWeek[] | undefined;
        }[] & ({
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            days?: DayOfWeek[] | undefined;
        } & {
            startTime?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["daysOfWeek"][number]["startTime"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            duration?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["daysOfWeek"][number]["duration"], "$type" | "seconds" | "nanos">, never>) | undefined;
            days?: (DayOfWeek[] & DayOfWeek[] & Record<Exclude<keyof I["daysOfWeek"][number]["days"], "$type" | keyof DayOfWeek[]>, never>) | undefined;
        } & Record<Exclude<keyof I["daysOfWeek"][number], "$type" | "startTime" | "duration" | "days">, never>)[] & Record<Exclude<keyof I["daysOfWeek"], "$type" | keyof {
            startTime?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            duration?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            days?: DayOfWeek[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "daysOfWeek">, never>>(object: I): WeeklyMaintenanceWindow;
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
