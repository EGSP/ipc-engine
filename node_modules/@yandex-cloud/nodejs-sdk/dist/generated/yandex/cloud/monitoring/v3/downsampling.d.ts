import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** List of available aggregate functions for downsampling. */
export interface Downsampling {
    $type: "yandex.cloud.monitoring.v3.Downsampling";
    /** Maximum number of points to be returned. */
    maxPoints: number | undefined;
    /**
     * Time interval (grid) for downsampling in milliseconds.
     * Points in the specified range are aggregated into one time point.
     */
    gridInterval: number | undefined;
    /** Disable downsampling. */
    disabled: boolean | undefined;
    /** Function that is used for downsampling. */
    gridAggregation: Downsampling_GridAggregation;
    /** Parameters for filling gaps in data. */
    gapFilling: Downsampling_GapFilling;
}
/** List of available aggregate functions for downsampling. */
export declare enum Downsampling_GridAggregation {
    GRID_AGGREGATION_UNSPECIFIED = 0,
    /** GRID_AGGREGATION_MAX - Max value. */
    GRID_AGGREGATION_MAX = 1,
    /** GRID_AGGREGATION_MIN - Min value. */
    GRID_AGGREGATION_MIN = 2,
    /** GRID_AGGREGATION_SUM - Sum of values. */
    GRID_AGGREGATION_SUM = 3,
    /** GRID_AGGREGATION_AVG - Average value. */
    GRID_AGGREGATION_AVG = 4,
    /** GRID_AGGREGATION_LAST - Last value. */
    GRID_AGGREGATION_LAST = 5,
    /** GRID_AGGREGATION_COUNT - Total count of points. */
    GRID_AGGREGATION_COUNT = 6,
    UNRECOGNIZED = -1
}
export declare function downsampling_GridAggregationFromJSON(object: any): Downsampling_GridAggregation;
export declare function downsampling_GridAggregationToJSON(object: Downsampling_GridAggregation): string;
/** List of available gap filling policy for downsampling. */
export declare enum Downsampling_GapFilling {
    GAP_FILLING_UNSPECIFIED = 0,
    /** GAP_FILLING_NULL - Returns `null` as a metric value and `timestamp` as a time series value. */
    GAP_FILLING_NULL = 1,
    /** GAP_FILLING_NONE - Returns no value and no timestamp. */
    GAP_FILLING_NONE = 2,
    /** GAP_FILLING_PREVIOUS - Returns the value from the previous time interval. */
    GAP_FILLING_PREVIOUS = 3,
    UNRECOGNIZED = -1
}
export declare function downsampling_GapFillingFromJSON(object: any): Downsampling_GapFilling;
export declare function downsampling_GapFillingToJSON(object: Downsampling_GapFilling): string;
export declare const Downsampling: {
    $type: "yandex.cloud.monitoring.v3.Downsampling";
    encode(message: Downsampling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Downsampling;
    fromJSON(object: any): Downsampling;
    toJSON(message: Downsampling): unknown;
    fromPartial<I extends {
        disabled?: boolean | undefined;
        gridAggregation?: Downsampling_GridAggregation | undefined;
        gapFilling?: Downsampling_GapFilling | undefined;
        maxPoints?: number | undefined;
        gridInterval?: number | undefined;
    } & {
        disabled?: boolean | undefined;
        gridAggregation?: Downsampling_GridAggregation | undefined;
        gapFilling?: Downsampling_GapFilling | undefined;
        maxPoints?: number | undefined;
        gridInterval?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>>(object: I): Downsampling;
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
