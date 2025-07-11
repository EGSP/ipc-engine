import _m0 from "protobufjs/minimal";
import { TextWidget } from "../../../../yandex/cloud/monitoring/v3/text_widget";
import { TitleWidget } from "../../../../yandex/cloud/monitoring/v3/title_widget";
import { ChartWidget } from "../../../../yandex/cloud/monitoring/v3/chart_widget";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Widget. */
export interface Widget {
    $type: "yandex.cloud.monitoring.v3.Widget";
    /** Required. Widget layout position. */
    position?: Widget_LayoutPosition;
    /** Text widget. */
    text?: TextWidget | undefined;
    /** Title widget. */
    title?: TitleWidget | undefined;
    /** Chart widget. */
    chart?: ChartWidget | undefined;
}
/** Layout item for widget item positioning. */
export interface Widget_LayoutPosition {
    $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition";
    /** Required. X-axis top-left corner coordinate. */
    x: number;
    /** Required. Y-axis top-left corner coordinate. */
    y: number;
    /** Required. Weight. */
    w: number;
    /** Required. Height. */
    h: number;
}
export declare const Widget: {
    $type: "yandex.cloud.monitoring.v3.Widget";
    encode(message: Widget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Widget;
    fromJSON(object: any): Widget;
    toJSON(message: Widget): unknown;
    fromPartial<I extends {
        text?: {
            text?: string | undefined;
        } | undefined;
        title?: {
            text?: string | undefined;
            size?: import("../../../../yandex/cloud/monitoring/v3/title_widget").TitleWidget_TitleSize | undefined;
        } | undefined;
        position?: {
            x?: number | undefined;
            y?: number | undefined;
            w?: number | undefined;
            h?: number | undefined;
        } | undefined;
        chart?: {
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
                    gridAggregation?: import("./downsampling").Downsampling_GridAggregation | undefined;
                    gapFilling?: import("./downsampling").Downsampling_GapFilling | undefined;
                    maxPoints?: number | undefined;
                    gridInterval?: number | undefined;
                } | undefined;
            } | undefined;
            displayLegend?: boolean | undefined;
            freeze?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_FreezeDuration | undefined;
            visualizationSettings?: {
                normalize?: boolean | undefined;
                type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                title?: string | undefined;
                interpolate?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                aggregation?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                    right?: {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                } | undefined;
                showLabels?: boolean | undefined;
            } | undefined;
            seriesOverrides?: {
                name?: string | undefined;
                settings?: {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } | undefined;
                targetIndex?: string | undefined;
            }[] | undefined;
            nameHidingSettings?: {
                names?: string[] | undefined;
                positive?: boolean | undefined;
            } | undefined;
        } | undefined;
    } & {
        text?: ({
            text?: string | undefined;
        } & {
            text?: string | undefined;
        } & Record<Exclude<keyof I["text"], "$type" | "text">, never>) | undefined;
        title?: ({
            text?: string | undefined;
            size?: import("../../../../yandex/cloud/monitoring/v3/title_widget").TitleWidget_TitleSize | undefined;
        } & {
            text?: string | undefined;
            size?: import("../../../../yandex/cloud/monitoring/v3/title_widget").TitleWidget_TitleSize | undefined;
        } & Record<Exclude<keyof I["title"], "$type" | "text" | "size">, never>) | undefined;
        position?: ({
            x?: number | undefined;
            y?: number | undefined;
            w?: number | undefined;
            h?: number | undefined;
        } & {
            x?: number | undefined;
            y?: number | undefined;
            w?: number | undefined;
            h?: number | undefined;
        } & Record<Exclude<keyof I["position"], "$type" | "x" | "y" | "w" | "h">, never>) | undefined;
        chart?: ({
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
                    gridAggregation?: import("./downsampling").Downsampling_GridAggregation | undefined;
                    gapFilling?: import("./downsampling").Downsampling_GapFilling | undefined;
                    maxPoints?: number | undefined;
                    gridInterval?: number | undefined;
                } | undefined;
            } | undefined;
            displayLegend?: boolean | undefined;
            freeze?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_FreezeDuration | undefined;
            visualizationSettings?: {
                normalize?: boolean | undefined;
                type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                title?: string | undefined;
                interpolate?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                aggregation?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                    right?: {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                } | undefined;
                showLabels?: boolean | undefined;
            } | undefined;
            seriesOverrides?: {
                name?: string | undefined;
                settings?: {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
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
                    gridAggregation?: import("./downsampling").Downsampling_GridAggregation | undefined;
                    gapFilling?: import("./downsampling").Downsampling_GapFilling | undefined;
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
                } & Record<Exclude<keyof I["chart"]["queries"]["targets"][number], "$type" | "hidden" | "query" | "textMode">, never>)[] & Record<Exclude<keyof I["chart"]["queries"]["targets"], "$type" | keyof {
                    hidden?: boolean | undefined;
                    query?: string | undefined;
                    textMode?: boolean | undefined;
                }[]>, never>) | undefined;
                downsampling?: ({
                    disabled?: boolean | undefined;
                    gridAggregation?: import("./downsampling").Downsampling_GridAggregation | undefined;
                    gapFilling?: import("./downsampling").Downsampling_GapFilling | undefined;
                    maxPoints?: number | undefined;
                    gridInterval?: number | undefined;
                } & {
                    disabled?: boolean | undefined;
                    gridAggregation?: import("./downsampling").Downsampling_GridAggregation | undefined;
                    gapFilling?: import("./downsampling").Downsampling_GapFilling | undefined;
                    maxPoints?: number | undefined;
                    gridInterval?: number | undefined;
                } & Record<Exclude<keyof I["chart"]["queries"]["downsampling"], "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>) | undefined;
            } & Record<Exclude<keyof I["chart"]["queries"], "$type" | "targets" | "downsampling">, never>) | undefined;
            displayLegend?: boolean | undefined;
            freeze?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_FreezeDuration | undefined;
            visualizationSettings?: ({
                normalize?: boolean | undefined;
                type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                title?: string | undefined;
                interpolate?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                aggregation?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                    right?: {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                } | undefined;
                showLabels?: boolean | undefined;
            } & {
                normalize?: boolean | undefined;
                type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                title?: string | undefined;
                interpolate?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                aggregation?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                    automatic?: ({} & {} & Record<Exclude<keyof I["chart"]["visualizationSettings"]["colorSchemeSettings"]["automatic"], "$type">, never>) | undefined;
                    standard?: ({} & {} & Record<Exclude<keyof I["chart"]["visualizationSettings"]["colorSchemeSettings"]["standard"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["colorSchemeSettings"]["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
                } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["colorSchemeSettings"], "$type" | "automatic" | "standard" | "gradient">, never>) | undefined;
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
                } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["heatmapSettings"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
                yaxisSettings?: ({
                    left?: {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                    right?: {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } | undefined;
                } & {
                    left?: ({
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["yaxisSettings"]["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                    right?: ({
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & {
                        type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                        title?: string | undefined;
                        min?: string | undefined;
                        max?: string | undefined;
                        precision?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["yaxisSettings"]["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                } & Record<Exclude<keyof I["chart"]["visualizationSettings"]["yaxisSettings"], "$type" | "left" | "right">, never>) | undefined;
                showLabels?: boolean | undefined;
            } & Record<Exclude<keyof I["chart"]["visualizationSettings"], "$type" | "normalize" | "type" | "title" | "interpolate" | "aggregation" | "colorSchemeSettings" | "heatmapSettings" | "yaxisSettings" | "showLabels">, never>) | undefined;
            seriesOverrides?: ({
                name?: string | undefined;
                settings?: {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } | undefined;
                targetIndex?: string | undefined;
            }[] & ({
                name?: string | undefined;
                settings?: {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } | undefined;
                targetIndex?: string | undefined;
            } & {
                name?: string | undefined;
                settings?: ({
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } & Record<Exclude<keyof I["chart"]["seriesOverrides"][number]["settings"], "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>) | undefined;
                targetIndex?: string | undefined;
            } & Record<Exclude<keyof I["chart"]["seriesOverrides"][number], "$type" | "name" | "settings" | "targetIndex">, never>)[] & Record<Exclude<keyof I["chart"]["seriesOverrides"], "$type" | keyof {
                name?: string | undefined;
                settings?: {
                    type?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                    name?: string | undefined;
                    color?: string | undefined;
                    stackName?: string | undefined;
                    growDown?: boolean | undefined;
                    yaxisPosition?: import("../../../../yandex/cloud/monitoring/v3/chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                } | undefined;
                targetIndex?: string | undefined;
            }[]>, never>) | undefined;
            nameHidingSettings?: ({
                names?: string[] | undefined;
                positive?: boolean | undefined;
            } & {
                names?: (string[] & string[] & Record<Exclude<keyof I["chart"]["nameHidingSettings"]["names"], "$type" | keyof string[]>, never>) | undefined;
                positive?: boolean | undefined;
            } & Record<Exclude<keyof I["chart"]["nameHidingSettings"], "$type" | "names" | "positive">, never>) | undefined;
        } & Record<Exclude<keyof I["chart"], "$type" | "description" | "id" | "title" | "queries" | "displayLegend" | "freeze" | "visualizationSettings" | "seriesOverrides" | "nameHidingSettings">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "title" | "position" | "chart">, never>>(object: I): Widget;
};
export declare const Widget_LayoutPosition: {
    $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition";
    encode(message: Widget_LayoutPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Widget_LayoutPosition;
    fromJSON(object: any): Widget_LayoutPosition;
    toJSON(message: Widget_LayoutPosition): unknown;
    fromPartial<I extends {
        x?: number | undefined;
        y?: number | undefined;
        w?: number | undefined;
        h?: number | undefined;
    } & {
        x?: number | undefined;
        y?: number | undefined;
        w?: number | undefined;
        h?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "x" | "y" | "w" | "h">, never>>(object: I): Widget_LayoutPosition;
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
