import _m0 from "protobufjs/minimal";
import { Downsampling } from "../../../../yandex/cloud/monitoring/v3/downsampling";
import { UnitFormat } from "../../../../yandex/cloud/monitoring/v3/unit_format";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Chart widget. */
export interface ChartWidget {
    $type: "yandex.cloud.monitoring.v3.ChartWidget";
    /** Required. Chart ID. */
    id: string;
    /** Queries. */
    queries?: ChartWidget_Queries;
    /** Visualization settings. */
    visualizationSettings?: ChartWidget_VisualizationSettings;
    /** Override settings. */
    seriesOverrides: ChartWidget_SeriesOverrides[];
    /** Name hiding settings. */
    nameHidingSettings?: ChartWidget_NameHidingSettings;
    /** Chart description in dashboard (not enabled in UI). */
    description: string;
    /** Chart widget title. */
    title: string;
    /** Enable legend under chart. */
    displayLegend: boolean;
    /** Fixed time interval for chart. */
    freeze: ChartWidget_FreezeDuration;
}
export declare enum ChartWidget_FreezeDuration {
    FREEZE_DURATION_UNSPECIFIED = 0,
    /** FREEZE_DURATION_HOUR - Last hour. */
    FREEZE_DURATION_HOUR = 1,
    /** FREEZE_DURATION_DAY - Last day = last 24 hours. */
    FREEZE_DURATION_DAY = 2,
    /** FREEZE_DURATION_WEEK - Last 7 days. */
    FREEZE_DURATION_WEEK = 3,
    /** FREEZE_DURATION_MONTH - Last 31 days. */
    FREEZE_DURATION_MONTH = 4,
    UNRECOGNIZED = -1
}
export declare function chartWidget_FreezeDurationFromJSON(object: any): ChartWidget_FreezeDuration;
export declare function chartWidget_FreezeDurationToJSON(object: ChartWidget_FreezeDuration): string;
/** Query settings. */
export interface ChartWidget_Queries {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries";
    /** Required. List of targets. */
    targets: ChartWidget_Queries_Target[];
    /** Required. Downsampling settings. */
    downsampling?: Downsampling;
}
/** Query target. */
export interface ChartWidget_Queries_Target {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target";
    /** Required. Query. */
    query: string;
    /** Text mode. */
    textMode: boolean;
    /** Checks that target is visible or invisible. */
    hidden: boolean;
}
/** Visualization settings. */
export interface ChartWidget_VisualizationSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings";
    /** Visualization type. */
    type: ChartWidget_VisualizationSettings_VisualizationType;
    /** Normalize. */
    normalize: boolean;
    /** Interpolate. */
    interpolate: ChartWidget_VisualizationSettings_Interpolate;
    /** Aggregation. */
    aggregation: ChartWidget_VisualizationSettings_SeriesAggregation;
    /** Color scheme settings. */
    colorSchemeSettings?: ChartWidget_VisualizationSettings_ColorSchemeSettings;
    /** Heatmap settings. */
    heatmapSettings?: ChartWidget_VisualizationSettings_HeatmapSettings;
    /** Y axis settings. */
    yaxisSettings?: ChartWidget_VisualizationSettings_YaxisSettings;
    /** Inside chart title. */
    title: string;
    /** Show chart labels. */
    showLabels: boolean;
}
/** Chart visualization type. */
export declare enum ChartWidget_VisualizationSettings_VisualizationType {
    /** VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    VISUALIZATION_TYPE_UNSPECIFIED = 0,
    /** VISUALIZATION_TYPE_LINE - Line chart. */
    VISUALIZATION_TYPE_LINE = 1,
    /** VISUALIZATION_TYPE_STACK - Stack chart. */
    VISUALIZATION_TYPE_STACK = 2,
    /** VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    VISUALIZATION_TYPE_COLUMN = 3,
    /** VISUALIZATION_TYPE_POINTS - Points. */
    VISUALIZATION_TYPE_POINTS = 4,
    /** VISUALIZATION_TYPE_PIE - Pie aggregation chart. */
    VISUALIZATION_TYPE_PIE = 5,
    /** VISUALIZATION_TYPE_BARS - Bars aggregation chart. */
    VISUALIZATION_TYPE_BARS = 6,
    /** VISUALIZATION_TYPE_DISTRIBUTION - Distribution aggregation chart. */
    VISUALIZATION_TYPE_DISTRIBUTION = 7,
    /** VISUALIZATION_TYPE_HEATMAP - Heatmap aggregation chart. */
    VISUALIZATION_TYPE_HEATMAP = 8,
    UNRECOGNIZED = -1
}
export declare function chartWidget_VisualizationSettings_VisualizationTypeFromJSON(object: any): ChartWidget_VisualizationSettings_VisualizationType;
export declare function chartWidget_VisualizationSettings_VisualizationTypeToJSON(object: ChartWidget_VisualizationSettings_VisualizationType): string;
export declare enum ChartWidget_VisualizationSettings_Interpolate {
    /** INTERPOLATE_UNSPECIFIED - Not specified (linear by default). */
    INTERPOLATE_UNSPECIFIED = 0,
    /** INTERPOLATE_LINEAR - Linear. */
    INTERPOLATE_LINEAR = 1,
    /** INTERPOLATE_LEFT - Left. */
    INTERPOLATE_LEFT = 2,
    /** INTERPOLATE_RIGHT - Right. */
    INTERPOLATE_RIGHT = 3,
    UNRECOGNIZED = -1
}
export declare function chartWidget_VisualizationSettings_InterpolateFromJSON(object: any): ChartWidget_VisualizationSettings_Interpolate;
export declare function chartWidget_VisualizationSettings_InterpolateToJSON(object: ChartWidget_VisualizationSettings_Interpolate): string;
/**
 * Y axis type.
 * N.B. _TYPE prefix is necessary to expect name clash with Interpolate LINEAR value.
 */
export declare enum ChartWidget_VisualizationSettings_YaxisType {
    /** YAXIS_TYPE_UNSPECIFIED - Not specified (linear by default). */
    YAXIS_TYPE_UNSPECIFIED = 0,
    /** YAXIS_TYPE_LINEAR - Linear. */
    YAXIS_TYPE_LINEAR = 1,
    /** YAXIS_TYPE_LOGARITHMIC - Logarithmic. */
    YAXIS_TYPE_LOGARITHMIC = 2,
    UNRECOGNIZED = -1
}
export declare function chartWidget_VisualizationSettings_YaxisTypeFromJSON(object: any): ChartWidget_VisualizationSettings_YaxisType;
export declare function chartWidget_VisualizationSettings_YaxisTypeToJSON(object: ChartWidget_VisualizationSettings_YaxisType): string;
export declare enum ChartWidget_VisualizationSettings_SeriesAggregation {
    /** SERIES_AGGREGATION_UNSPECIFIED - Not specified (avg by default). */
    SERIES_AGGREGATION_UNSPECIFIED = 0,
    /** SERIES_AGGREGATION_AVG - Average. */
    SERIES_AGGREGATION_AVG = 1,
    /** SERIES_AGGREGATION_MIN - Minimum. */
    SERIES_AGGREGATION_MIN = 2,
    /** SERIES_AGGREGATION_MAX - Maximum. */
    SERIES_AGGREGATION_MAX = 3,
    /** SERIES_AGGREGATION_LAST - Last non-NaN value. */
    SERIES_AGGREGATION_LAST = 4,
    /** SERIES_AGGREGATION_SUM - Sum. */
    SERIES_AGGREGATION_SUM = 5,
    UNRECOGNIZED = -1
}
export declare function chartWidget_VisualizationSettings_SeriesAggregationFromJSON(object: any): ChartWidget_VisualizationSettings_SeriesAggregation;
export declare function chartWidget_VisualizationSettings_SeriesAggregationToJSON(object: ChartWidget_VisualizationSettings_SeriesAggregation): string;
export interface ChartWidget_VisualizationSettings_ColorSchemeSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings";
    /** Automatic color scheme. */
    automatic?: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme | undefined;
    /** Standard color scheme. */
    standard?: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme | undefined;
    /** Gradient color scheme. */
    gradient?: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme | undefined;
}
export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme";
}
export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme";
}
export interface ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme";
    /** Gradient green value. */
    greenValue: string;
    /** Gradient yellow value. */
    yellowValue: string;
    /** Gradient red value. */
    redValue: string;
    /** Gradient violet_value. */
    violetValue: string;
}
export interface ChartWidget_VisualizationSettings_HeatmapSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings";
    /** Heatmap green value. */
    greenValue: string;
    /** Heatmap yellow value. */
    yellowValue: string;
    /** Heatmap red value. */
    redValue: string;
    /** Heatmap violet_value. */
    violetValue: string;
}
/** Y axis settings. */
export interface ChartWidget_VisualizationSettings_Yaxis {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis";
    /** Type. */
    type: ChartWidget_VisualizationSettings_YaxisType;
    /** Title or empty. */
    title: string;
    /** Min value in extended number format or empty. */
    min: string;
    /** Max value in extended number format or empty. */
    max: string;
    /** Unit format. */
    unitFormat: UnitFormat;
    /** Tick value precision (null as default, 0-7 in other cases). */
    precision?: number;
}
export interface ChartWidget_VisualizationSettings_YaxisSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings";
    /** Left Y axis settings. */
    left?: ChartWidget_VisualizationSettings_Yaxis;
    /** Right Y axis settings. */
    right?: ChartWidget_VisualizationSettings_Yaxis;
}
/** Series override settings. */
export interface ChartWidget_SeriesOverrides {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides";
    /** Series name. */
    name: string | undefined;
    /** Target index. */
    targetIndex: string | undefined;
    /** Required. Override settings. */
    settings?: ChartWidget_SeriesOverrides_SeriesOverrideSettings;
}
export declare enum ChartWidget_SeriesOverrides_YaxisPosition {
    /** YAXIS_POSITION_UNSPECIFIED - Not specified (left by default). */
    YAXIS_POSITION_UNSPECIFIED = 0,
    /** YAXIS_POSITION_LEFT - Left. */
    YAXIS_POSITION_LEFT = 1,
    /** YAXIS_POSITION_RIGHT - Right. */
    YAXIS_POSITION_RIGHT = 2,
    UNRECOGNIZED = -1
}
export declare function chartWidget_SeriesOverrides_YaxisPositionFromJSON(object: any): ChartWidget_SeriesOverrides_YaxisPosition;
export declare function chartWidget_SeriesOverrides_YaxisPositionToJSON(object: ChartWidget_SeriesOverrides_YaxisPosition): string;
export declare enum ChartWidget_SeriesOverrides_SeriesVisualizationType {
    /** SERIES_VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    SERIES_VISUALIZATION_TYPE_UNSPECIFIED = 0,
    /** SERIES_VISUALIZATION_TYPE_LINE - Line chart. */
    SERIES_VISUALIZATION_TYPE_LINE = 1,
    /** SERIES_VISUALIZATION_TYPE_STACK - Stack chart. */
    SERIES_VISUALIZATION_TYPE_STACK = 2,
    /** SERIES_VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    SERIES_VISUALIZATION_TYPE_COLUMN = 3,
    /** SERIES_VISUALIZATION_TYPE_POINTS - Points. */
    SERIES_VISUALIZATION_TYPE_POINTS = 4,
    UNRECOGNIZED = -1
}
export declare function chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(object: any): ChartWidget_SeriesOverrides_SeriesVisualizationType;
export declare function chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(object: ChartWidget_SeriesOverrides_SeriesVisualizationType): string;
export interface ChartWidget_SeriesOverrides_SeriesOverrideSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings";
    /** Series name or empty. */
    name: string;
    /** Series color or empty. */
    color: string;
    /** Type. */
    type: ChartWidget_SeriesOverrides_SeriesVisualizationType;
    /** Stack name or empty. */
    stackName: string;
    /** Stack grow down. */
    growDown: boolean;
    /** Yaxis position. */
    yaxisPosition: ChartWidget_SeriesOverrides_YaxisPosition;
}
/** Name hiding settings. */
export interface ChartWidget_NameHidingSettings {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings";
    /** True if we want to show concrete series names only, false if we want to hide concrete series names. */
    positive: boolean;
    /** Series names to show or hide. */
    names: string[];
}
export declare const ChartWidget: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget";
    encode(message: ChartWidget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget;
    fromJSON(object: any): ChartWidget;
    toJSON(message: ChartWidget): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        title?: string | undefined;
        queries?: {
            targets?: {
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            }[] | undefined;
            downsampling?: {
                disabled?: boolean | undefined;
                gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
                gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
                maxPoints?: number | undefined;
                gridInterval?: number | undefined;
            } | undefined;
        } | undefined;
        displayLegend?: boolean | undefined;
        freeze?: ChartWidget_FreezeDuration | undefined;
        visualizationSettings?: {
            normalize?: boolean | undefined;
            type?: ChartWidget_VisualizationSettings_VisualizationType | undefined;
            title?: string | undefined;
            interpolate?: ChartWidget_VisualizationSettings_Interpolate | undefined;
            aggregation?: ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
            colorSchemeSettings?: {
                automatic?: {} | undefined;
                standard?: {} | undefined;
                gradient?: {
                    greenValue?: string | undefined;
                    yellowValue?: string | undefined;
                    redValue?: string | undefined;
                    violetValue?: string | undefined;
                } | undefined;
            } | undefined;
            heatmapSettings?: {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } | undefined;
            yaxisSettings?: {
                left?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
                right?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
            } | undefined;
            showLabels?: boolean | undefined;
        } | undefined;
        seriesOverrides?: {
            name?: string | undefined;
            settings?: {
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } | undefined;
            targetIndex?: string | undefined;
        }[] | undefined;
        nameHidingSettings?: {
            names?: string[] | undefined;
            positive?: boolean | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        title?: string | undefined;
        queries?: ({
            targets?: {
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            }[] | undefined;
            downsampling?: {
                disabled?: boolean | undefined;
                gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
                gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
                maxPoints?: number | undefined;
                gridInterval?: number | undefined;
            } | undefined;
        } & {
            targets?: ({
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            }[] & ({
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            } & {
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            } & Record<Exclude<keyof I["queries"]["targets"][number], "$type" | "hidden" | "query" | "textMode">, never>)[] & Record<Exclude<keyof I["queries"]["targets"], "$type" | keyof {
                hidden?: boolean | undefined;
                query?: string | undefined;
                textMode?: boolean | undefined;
            }[]>, never>) | undefined;
            downsampling?: ({
                disabled?: boolean | undefined;
                gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
                gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
                maxPoints?: number | undefined;
                gridInterval?: number | undefined;
            } & {
                disabled?: boolean | undefined;
                gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
                gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
                maxPoints?: number | undefined;
                gridInterval?: number | undefined;
            } & Record<Exclude<keyof I["queries"]["downsampling"], "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>) | undefined;
        } & Record<Exclude<keyof I["queries"], "$type" | "targets" | "downsampling">, never>) | undefined;
        displayLegend?: boolean | undefined;
        freeze?: ChartWidget_FreezeDuration | undefined;
        visualizationSettings?: ({
            normalize?: boolean | undefined;
            type?: ChartWidget_VisualizationSettings_VisualizationType | undefined;
            title?: string | undefined;
            interpolate?: ChartWidget_VisualizationSettings_Interpolate | undefined;
            aggregation?: ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
            colorSchemeSettings?: {
                automatic?: {} | undefined;
                standard?: {} | undefined;
                gradient?: {
                    greenValue?: string | undefined;
                    yellowValue?: string | undefined;
                    redValue?: string | undefined;
                    violetValue?: string | undefined;
                } | undefined;
            } | undefined;
            heatmapSettings?: {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } | undefined;
            yaxisSettings?: {
                left?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
                right?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
            } | undefined;
            showLabels?: boolean | undefined;
        } & {
            normalize?: boolean | undefined;
            type?: ChartWidget_VisualizationSettings_VisualizationType | undefined;
            title?: string | undefined;
            interpolate?: ChartWidget_VisualizationSettings_Interpolate | undefined;
            aggregation?: ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
            colorSchemeSettings?: ({
                automatic?: {} | undefined;
                standard?: {} | undefined;
                gradient?: {
                    greenValue?: string | undefined;
                    yellowValue?: string | undefined;
                    redValue?: string | undefined;
                    violetValue?: string | undefined;
                } | undefined;
            } & {
                automatic?: ({} & {} & Record<Exclude<keyof I["visualizationSettings"]["colorSchemeSettings"]["automatic"], "$type">, never>) | undefined;
                standard?: ({} & {} & Record<Exclude<keyof I["visualizationSettings"]["colorSchemeSettings"]["standard"], "$type">, never>) | undefined;
                gradient?: ({
                    greenValue?: string | undefined;
                    yellowValue?: string | undefined;
                    redValue?: string | undefined;
                    violetValue?: string | undefined;
                } & {
                    greenValue?: string | undefined;
                    yellowValue?: string | undefined;
                    redValue?: string | undefined;
                    violetValue?: string | undefined;
                } & Record<Exclude<keyof I["visualizationSettings"]["colorSchemeSettings"]["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
            } & Record<Exclude<keyof I["visualizationSettings"]["colorSchemeSettings"], "$type" | "automatic" | "standard" | "gradient">, never>) | undefined;
            heatmapSettings?: ({
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } & {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } & Record<Exclude<keyof I["visualizationSettings"]["heatmapSettings"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
            yaxisSettings?: ({
                left?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
                right?: {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } | undefined;
            } & {
                left?: ({
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } & {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } & Record<Exclude<keyof I["visualizationSettings"]["yaxisSettings"]["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                right?: ({
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } & {
                    type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                    title?: string | undefined;
                    min?: string | undefined;
                    max?: string | undefined;
                    precision?: number | undefined;
                    unitFormat?: UnitFormat | undefined;
                } & Record<Exclude<keyof I["visualizationSettings"]["yaxisSettings"]["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
            } & Record<Exclude<keyof I["visualizationSettings"]["yaxisSettings"], "$type" | "left" | "right">, never>) | undefined;
            showLabels?: boolean | undefined;
        } & Record<Exclude<keyof I["visualizationSettings"], "$type" | "normalize" | "type" | "title" | "interpolate" | "aggregation" | "colorSchemeSettings" | "heatmapSettings" | "yaxisSettings" | "showLabels">, never>) | undefined;
        seriesOverrides?: ({
            name?: string | undefined;
            settings?: {
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } | undefined;
            targetIndex?: string | undefined;
        }[] & ({
            name?: string | undefined;
            settings?: {
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } | undefined;
            targetIndex?: string | undefined;
        } & {
            name?: string | undefined;
            settings?: ({
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } & {
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } & Record<Exclude<keyof I["seriesOverrides"][number]["settings"], "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>) | undefined;
            targetIndex?: string | undefined;
        } & Record<Exclude<keyof I["seriesOverrides"][number], "$type" | "name" | "settings" | "targetIndex">, never>)[] & Record<Exclude<keyof I["seriesOverrides"], "$type" | keyof {
            name?: string | undefined;
            settings?: {
                type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                name?: string | undefined;
                color?: string | undefined;
                stackName?: string | undefined;
                growDown?: boolean | undefined;
                yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
            } | undefined;
            targetIndex?: string | undefined;
        }[]>, never>) | undefined;
        nameHidingSettings?: ({
            names?: string[] | undefined;
            positive?: boolean | undefined;
        } & {
            names?: (string[] & string[] & Record<Exclude<keyof I["nameHidingSettings"]["names"], "$type" | keyof string[]>, never>) | undefined;
            positive?: boolean | undefined;
        } & Record<Exclude<keyof I["nameHidingSettings"], "$type" | "names" | "positive">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "title" | "queries" | "displayLegend" | "freeze" | "visualizationSettings" | "seriesOverrides" | "nameHidingSettings">, never>>(object: I): ChartWidget;
};
export declare const ChartWidget_Queries: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries";
    encode(message: ChartWidget_Queries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_Queries;
    fromJSON(object: any): ChartWidget_Queries;
    toJSON(message: ChartWidget_Queries): unknown;
    fromPartial<I extends {
        targets?: {
            hidden?: boolean | undefined;
            query?: string | undefined;
            textMode?: boolean | undefined;
        }[] | undefined;
        downsampling?: {
            disabled?: boolean | undefined;
            gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
            gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
            maxPoints?: number | undefined;
            gridInterval?: number | undefined;
        } | undefined;
    } & {
        targets?: ({
            hidden?: boolean | undefined;
            query?: string | undefined;
            textMode?: boolean | undefined;
        }[] & ({
            hidden?: boolean | undefined;
            query?: string | undefined;
            textMode?: boolean | undefined;
        } & {
            hidden?: boolean | undefined;
            query?: string | undefined;
            textMode?: boolean | undefined;
        } & Record<Exclude<keyof I["targets"][number], "$type" | "hidden" | "query" | "textMode">, never>)[] & Record<Exclude<keyof I["targets"], "$type" | keyof {
            hidden?: boolean | undefined;
            query?: string | undefined;
            textMode?: boolean | undefined;
        }[]>, never>) | undefined;
        downsampling?: ({
            disabled?: boolean | undefined;
            gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
            gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
            maxPoints?: number | undefined;
            gridInterval?: number | undefined;
        } & {
            disabled?: boolean | undefined;
            gridAggregation?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GridAggregation | undefined;
            gapFilling?: import("../../../../yandex/cloud/monitoring/v3/downsampling").Downsampling_GapFilling | undefined;
            maxPoints?: number | undefined;
            gridInterval?: number | undefined;
        } & Record<Exclude<keyof I["downsampling"], "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "targets" | "downsampling">, never>>(object: I): ChartWidget_Queries;
};
export declare const ChartWidget_Queries_Target: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target";
    encode(message: ChartWidget_Queries_Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_Queries_Target;
    fromJSON(object: any): ChartWidget_Queries_Target;
    toJSON(message: ChartWidget_Queries_Target): unknown;
    fromPartial<I extends {
        hidden?: boolean | undefined;
        query?: string | undefined;
        textMode?: boolean | undefined;
    } & {
        hidden?: boolean | undefined;
        query?: string | undefined;
        textMode?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "hidden" | "query" | "textMode">, never>>(object: I): ChartWidget_Queries_Target;
};
export declare const ChartWidget_VisualizationSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings";
    encode(message: ChartWidget_VisualizationSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings;
    fromJSON(object: any): ChartWidget_VisualizationSettings;
    toJSON(message: ChartWidget_VisualizationSettings): unknown;
    fromPartial<I extends {
        normalize?: boolean | undefined;
        type?: ChartWidget_VisualizationSettings_VisualizationType | undefined;
        title?: string | undefined;
        interpolate?: ChartWidget_VisualizationSettings_Interpolate | undefined;
        aggregation?: ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
        colorSchemeSettings?: {
            automatic?: {} | undefined;
            standard?: {} | undefined;
            gradient?: {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } | undefined;
        } | undefined;
        heatmapSettings?: {
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } | undefined;
        yaxisSettings?: {
            left?: {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            right?: {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
        } | undefined;
        showLabels?: boolean | undefined;
    } & {
        normalize?: boolean | undefined;
        type?: ChartWidget_VisualizationSettings_VisualizationType | undefined;
        title?: string | undefined;
        interpolate?: ChartWidget_VisualizationSettings_Interpolate | undefined;
        aggregation?: ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
        colorSchemeSettings?: ({
            automatic?: {} | undefined;
            standard?: {} | undefined;
            gradient?: {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } | undefined;
        } & {
            automatic?: ({} & {} & Record<Exclude<keyof I["colorSchemeSettings"]["automatic"], "$type">, never>) | undefined;
            standard?: ({} & {} & Record<Exclude<keyof I["colorSchemeSettings"]["standard"], "$type">, never>) | undefined;
            gradient?: ({
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } & {
                greenValue?: string | undefined;
                yellowValue?: string | undefined;
                redValue?: string | undefined;
                violetValue?: string | undefined;
            } & Record<Exclude<keyof I["colorSchemeSettings"]["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
        } & Record<Exclude<keyof I["colorSchemeSettings"], "$type" | "automatic" | "standard" | "gradient">, never>) | undefined;
        heatmapSettings?: ({
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } & {
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } & Record<Exclude<keyof I["heatmapSettings"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
        yaxisSettings?: ({
            left?: {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            right?: {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
        } & {
            left?: ({
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & Record<Exclude<keyof I["yaxisSettings"]["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
            right?: ({
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & {
                type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
                title?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
                precision?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & Record<Exclude<keyof I["yaxisSettings"]["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
        } & Record<Exclude<keyof I["yaxisSettings"], "$type" | "left" | "right">, never>) | undefined;
        showLabels?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "normalize" | "type" | "title" | "interpolate" | "aggregation" | "colorSchemeSettings" | "heatmapSettings" | "yaxisSettings" | "showLabels">, never>>(object: I): ChartWidget_VisualizationSettings;
};
export declare const ChartWidget_VisualizationSettings_ColorSchemeSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings";
    encode(message: ChartWidget_VisualizationSettings_ColorSchemeSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_ColorSchemeSettings;
    fromJSON(object: any): ChartWidget_VisualizationSettings_ColorSchemeSettings;
    toJSON(message: ChartWidget_VisualizationSettings_ColorSchemeSettings): unknown;
    fromPartial<I extends {
        automatic?: {} | undefined;
        standard?: {} | undefined;
        gradient?: {
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } | undefined;
    } & {
        automatic?: ({} & {} & Record<Exclude<keyof I["automatic"], "$type">, never>) | undefined;
        standard?: ({} & {} & Record<Exclude<keyof I["standard"], "$type">, never>) | undefined;
        gradient?: ({
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } & {
            greenValue?: string | undefined;
            yellowValue?: string | undefined;
            redValue?: string | undefined;
            violetValue?: string | undefined;
        } & Record<Exclude<keyof I["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "automatic" | "standard" | "gradient">, never>>(object: I): ChartWidget_VisualizationSettings_ColorSchemeSettings;
};
export declare const ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme";
    encode(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
    fromJSON(_: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
    toJSON(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme;
};
export declare const ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme";
    encode(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
    fromJSON(_: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
    toJSON(_: ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme;
};
export declare const ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme";
    encode(message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
    fromJSON(object: any): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
    toJSON(message: ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme): unknown;
    fromPartial<I extends {
        greenValue?: string | undefined;
        yellowValue?: string | undefined;
        redValue?: string | undefined;
        violetValue?: string | undefined;
    } & {
        greenValue?: string | undefined;
        yellowValue?: string | undefined;
        redValue?: string | undefined;
        violetValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>>(object: I): ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme;
};
export declare const ChartWidget_VisualizationSettings_HeatmapSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings";
    encode(message: ChartWidget_VisualizationSettings_HeatmapSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_HeatmapSettings;
    fromJSON(object: any): ChartWidget_VisualizationSettings_HeatmapSettings;
    toJSON(message: ChartWidget_VisualizationSettings_HeatmapSettings): unknown;
    fromPartial<I extends {
        greenValue?: string | undefined;
        yellowValue?: string | undefined;
        redValue?: string | undefined;
        violetValue?: string | undefined;
    } & {
        greenValue?: string | undefined;
        yellowValue?: string | undefined;
        redValue?: string | undefined;
        violetValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>>(object: I): ChartWidget_VisualizationSettings_HeatmapSettings;
};
export declare const ChartWidget_VisualizationSettings_Yaxis: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis";
    encode(message: ChartWidget_VisualizationSettings_Yaxis, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_Yaxis;
    fromJSON(object: any): ChartWidget_VisualizationSettings_Yaxis;
    toJSON(message: ChartWidget_VisualizationSettings_Yaxis): unknown;
    fromPartial<I extends {
        type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
        title?: string | undefined;
        min?: string | undefined;
        max?: string | undefined;
        precision?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & {
        type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
        title?: string | undefined;
        min?: string | undefined;
        max?: string | undefined;
        precision?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>>(object: I): ChartWidget_VisualizationSettings_Yaxis;
};
export declare const ChartWidget_VisualizationSettings_YaxisSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings";
    encode(message: ChartWidget_VisualizationSettings_YaxisSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_VisualizationSettings_YaxisSettings;
    fromJSON(object: any): ChartWidget_VisualizationSettings_YaxisSettings;
    toJSON(message: ChartWidget_VisualizationSettings_YaxisSettings): unknown;
    fromPartial<I extends {
        left?: {
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } | undefined;
        right?: {
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } | undefined;
    } & {
        left?: ({
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & {
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & Record<Exclude<keyof I["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
        right?: ({
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & {
            type?: ChartWidget_VisualizationSettings_YaxisType | undefined;
            title?: string | undefined;
            min?: string | undefined;
            max?: string | undefined;
            precision?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & Record<Exclude<keyof I["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "left" | "right">, never>>(object: I): ChartWidget_VisualizationSettings_YaxisSettings;
};
export declare const ChartWidget_SeriesOverrides: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides";
    encode(message: ChartWidget_SeriesOverrides, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_SeriesOverrides;
    fromJSON(object: any): ChartWidget_SeriesOverrides;
    toJSON(message: ChartWidget_SeriesOverrides): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        settings?: {
            type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
            name?: string | undefined;
            color?: string | undefined;
            stackName?: string | undefined;
            growDown?: boolean | undefined;
            yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
        } | undefined;
        targetIndex?: string | undefined;
    } & {
        name?: string | undefined;
        settings?: ({
            type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
            name?: string | undefined;
            color?: string | undefined;
            stackName?: string | undefined;
            growDown?: boolean | undefined;
            yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
        } & {
            type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
            name?: string | undefined;
            color?: string | undefined;
            stackName?: string | undefined;
            growDown?: boolean | undefined;
            yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>) | undefined;
        targetIndex?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "settings" | "targetIndex">, never>>(object: I): ChartWidget_SeriesOverrides;
};
export declare const ChartWidget_SeriesOverrides_SeriesOverrideSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings";
    encode(message: ChartWidget_SeriesOverrides_SeriesOverrideSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_SeriesOverrides_SeriesOverrideSettings;
    fromJSON(object: any): ChartWidget_SeriesOverrides_SeriesOverrideSettings;
    toJSON(message: ChartWidget_SeriesOverrides_SeriesOverrideSettings): unknown;
    fromPartial<I extends {
        type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
        name?: string | undefined;
        color?: string | undefined;
        stackName?: string | undefined;
        growDown?: boolean | undefined;
        yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
    } & {
        type?: ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
        name?: string | undefined;
        color?: string | undefined;
        stackName?: string | undefined;
        growDown?: boolean | undefined;
        yaxisPosition?: ChartWidget_SeriesOverrides_YaxisPosition | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>>(object: I): ChartWidget_SeriesOverrides_SeriesOverrideSettings;
};
export declare const ChartWidget_NameHidingSettings: {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings";
    encode(message: ChartWidget_NameHidingSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChartWidget_NameHidingSettings;
    fromJSON(object: any): ChartWidget_NameHidingSettings;
    toJSON(message: ChartWidget_NameHidingSettings): unknown;
    fromPartial<I extends {
        names?: string[] | undefined;
        positive?: boolean | undefined;
    } & {
        names?: (string[] & string[] & Record<Exclude<keyof I["names"], "$type" | keyof string[]>, never>) | undefined;
        positive?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "names" | "positive">, never>>(object: I): ChartWidget_NameHidingSettings;
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
