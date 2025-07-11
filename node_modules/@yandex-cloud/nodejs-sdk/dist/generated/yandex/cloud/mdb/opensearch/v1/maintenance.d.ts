import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1";
/** An OpenSearch cluster maintenance window. Should be defined by either one of the two options. */
export interface MaintenanceWindow {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow";
    /** An any-time maintenance window. */
    anytime?: AnytimeMaintenanceWindow | undefined;
    /** A weekly maintenance window. */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow | undefined;
}
/** An any-time maintenance window. */
export interface AnytimeMaintenanceWindow {
    $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow";
}
/** A weekly maintenance window. */
export interface WeeklyMaintenanceWindow {
    $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow";
    /** Day of the week. */
    day: WeeklyMaintenanceWindow_WeekDay;
    /** Hour of the day in the UTC timezone. */
    hour: number;
}
export declare enum WeeklyMaintenanceWindow_WeekDay {
    WEEK_DAY_UNSPECIFIED = 0,
    /** MON - Monday */
    MON = 1,
    /** TUE - Tuesday */
    TUE = 2,
    /** WED - Wednesday */
    WED = 3,
    /** THU - Thursday */
    THU = 4,
    /** FRI - Friday */
    FRI = 5,
    /** SAT - Saturday */
    SAT = 6,
    /** SUN - Sunday */
    SUN = 7,
    UNRECOGNIZED = -1
}
export declare function weeklyMaintenanceWindow_WeekDayFromJSON(object: any): WeeklyMaintenanceWindow_WeekDay;
export declare function weeklyMaintenanceWindow_WeekDayToJSON(object: WeeklyMaintenanceWindow_WeekDay): string;
export interface MaintenanceOperation {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation";
    /** The description of the operation. */
    info: string;
    /** Delay time for the maintenance operation. */
    delayedUntil?: Date;
    /** Time of the last maintenance window. */
    latestMaintenanceTime?: Date;
    /** Time of the next maintenance window. */
    nextMaintenanceWindowTime?: Date;
}
export declare const MaintenanceWindow: {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceWindow";
    encode(message: MaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceWindow;
    fromJSON(object: any): MaintenanceWindow;
    toJSON(message: MaintenanceWindow): unknown;
    fromPartial<I extends {
        anytime?: {} | undefined;
        weeklyMaintenanceWindow?: {
            hour?: number | undefined;
            day?: WeeklyMaintenanceWindow_WeekDay | undefined;
        } | undefined;
    } & {
        anytime?: ({} & {} & Record<Exclude<keyof I["anytime"], "$type">, never>) | undefined;
        weeklyMaintenanceWindow?: ({
            hour?: number | undefined;
            day?: WeeklyMaintenanceWindow_WeekDay | undefined;
        } & {
            hour?: number | undefined;
            day?: WeeklyMaintenanceWindow_WeekDay | undefined;
        } & Record<Exclude<keyof I["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "anytime" | "weeklyMaintenanceWindow">, never>>(object: I): MaintenanceWindow;
};
export declare const AnytimeMaintenanceWindow: {
    $type: "yandex.cloud.mdb.opensearch.v1.AnytimeMaintenanceWindow";
    encode(_: AnytimeMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnytimeMaintenanceWindow;
    fromJSON(_: any): AnytimeMaintenanceWindow;
    toJSON(_: AnytimeMaintenanceWindow): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): AnytimeMaintenanceWindow;
};
export declare const WeeklyMaintenanceWindow: {
    $type: "yandex.cloud.mdb.opensearch.v1.WeeklyMaintenanceWindow";
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial<I extends {
        hour?: number | undefined;
        day?: WeeklyMaintenanceWindow_WeekDay | undefined;
    } & {
        hour?: number | undefined;
        day?: WeeklyMaintenanceWindow_WeekDay | undefined;
    } & Record<Exclude<keyof I, "$type" | "hour" | "day">, never>>(object: I): WeeklyMaintenanceWindow;
};
export declare const MaintenanceOperation: {
    $type: "yandex.cloud.mdb.opensearch.v1.MaintenanceOperation";
    encode(message: MaintenanceOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceOperation;
    fromJSON(object: any): MaintenanceOperation;
    toJSON(message: MaintenanceOperation): unknown;
    fromPartial<I extends {
        info?: string | undefined;
        delayedUntil?: Date | undefined;
        latestMaintenanceTime?: Date | undefined;
        nextMaintenanceWindowTime?: Date | undefined;
    } & {
        info?: string | undefined;
        delayedUntil?: Date | undefined;
        latestMaintenanceTime?: Date | undefined;
        nextMaintenanceWindowTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "info" | "delayedUntil" | "latestMaintenanceTime" | "nextMaintenanceWindowTime">, never>>(object: I): MaintenanceOperation;
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
