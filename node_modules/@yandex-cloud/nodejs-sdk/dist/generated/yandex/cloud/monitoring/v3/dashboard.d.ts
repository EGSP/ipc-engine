import _m0 from "protobufjs/minimal";
import { Parametrization } from "../../../../yandex/cloud/monitoring/v3/parametrization";
import { Widget } from "../../../../yandex/cloud/monitoring/v3/widget";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Dashboard resource. */
export interface Dashboard {
    $type: "yandex.cloud.monitoring.v3.Dashboard";
    /** Dashboard ID. */
    id: string;
    /** Folder ID. */
    folderId: string | undefined;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Modification timestamp. */
    modifiedAt?: Date;
    /** ID of the user who created the dashboard. */
    createdBy: string;
    /** ID of the user who modified the dashboard. */
    modifiedBy: string;
    /** Dashboard name. */
    name: string;
    /** Dashboard description. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Dashboard title. */
    title: string;
    /** List of dashboard widgets. */
    widgets: Widget[];
    /** Dashboard parametrization. */
    parametrization?: Parametrization;
    /** Dashboard etag. */
    etag: string;
}
export interface Dashboard_LabelsEntry {
    $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry";
    key: string;
    value: string;
}
export declare const Dashboard: {
    $type: "yandex.cloud.monitoring.v3.Dashboard";
    encode(message: Dashboard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dashboard;
    fromJSON(object: any): Dashboard;
    toJSON(message: Dashboard): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdBy?: string | undefined;
        createdAt?: Date | undefined;
        modifiedAt?: Date | undefined;
        folderId?: string | undefined;
        title?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        modifiedBy?: string | undefined;
        etag?: string | undefined;
        widgets?: {
            text?: {
                text?: string | undefined;
            } | undefined;
            title?: {
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
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
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: {
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                }[] | undefined;
                nameHidingSettings?: {
                    names?: string[] | undefined;
                    positive?: boolean | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        parametrization?: {
            selectors?: string | undefined;
            parameters?: {
                description?: string | undefined;
                name?: string | undefined;
                text?: {
                    defaultValue?: string | undefined;
                } | undefined;
                title?: string | undefined;
                custom?: {
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                hidden?: boolean | undefined;
                labelValues?: {
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                integerParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                doubleParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                textValues?: {
                    defaultValues?: string[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdBy?: string | undefined;
        createdAt?: Date | undefined;
        modifiedAt?: Date | undefined;
        folderId?: string | undefined;
        title?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        modifiedBy?: string | undefined;
        etag?: string | undefined;
        widgets?: ({
            text?: {
                text?: string | undefined;
            } | undefined;
            title?: {
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
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
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: {
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                }[] | undefined;
                nameHidingSettings?: {
                    names?: string[] | undefined;
                    positive?: boolean | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            text?: {
                text?: string | undefined;
            } | undefined;
            title?: {
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
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
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: {
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
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
            } & Record<Exclude<keyof I["widgets"][number]["text"], "$type" | "text">, never>) | undefined;
            title?: ({
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
            } & {
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
            } & Record<Exclude<keyof I["widgets"][number]["title"], "$type" | "text" | "size">, never>) | undefined;
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
            } & Record<Exclude<keyof I["widgets"][number]["position"], "$type" | "x" | "y" | "w" | "h">, never>) | undefined;
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
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: {
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
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
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["queries"]["targets"][number], "$type" | "hidden" | "query" | "textMode">, never>)[] & Record<Exclude<keyof I["widgets"][number]["chart"]["queries"]["targets"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["queries"]["downsampling"], "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>) | undefined;
                } & Record<Exclude<keyof I["widgets"][number]["chart"]["queries"], "$type" | "targets" | "downsampling">, never>) | undefined;
                displayLegend?: boolean | undefined;
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: ({
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                        automatic?: ({} & {} & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["automatic"], "$type">, never>) | undefined;
                        standard?: ({} & {} & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["standard"], "$type">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"], "$type" | "automatic" | "standard" | "gradient">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["heatmapSettings"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
                    yaxisSettings?: ({
                        left?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                    } & {
                        left?: ({
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } & {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"]["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                        right?: ({
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } & {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"]["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"], "$type" | "left" | "right">, never>) | undefined;
                    showLabels?: boolean | undefined;
                } & Record<Exclude<keyof I["widgets"][number]["chart"]["visualizationSettings"], "$type" | "normalize" | "type" | "title" | "interpolate" | "aggregation" | "colorSchemeSettings" | "heatmapSettings" | "yaxisSettings" | "showLabels">, never>) | undefined;
                seriesOverrides?: ({
                    name?: string | undefined;
                    settings?: {
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    settings?: {
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                } & {
                    name?: string | undefined;
                    settings?: ({
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } & {
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } & Record<Exclude<keyof I["widgets"][number]["chart"]["seriesOverrides"][number]["settings"], "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>) | undefined;
                    targetIndex?: string | undefined;
                } & Record<Exclude<keyof I["widgets"][number]["chart"]["seriesOverrides"][number], "$type" | "name" | "settings" | "targetIndex">, never>)[] & Record<Exclude<keyof I["widgets"][number]["chart"]["seriesOverrides"], "$type" | keyof {
                    name?: string | undefined;
                    settings?: {
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                }[]>, never>) | undefined;
                nameHidingSettings?: ({
                    names?: string[] | undefined;
                    positive?: boolean | undefined;
                } & {
                    names?: (string[] & string[] & Record<Exclude<keyof I["widgets"][number]["chart"]["nameHidingSettings"]["names"], "$type" | keyof string[]>, never>) | undefined;
                    positive?: boolean | undefined;
                } & Record<Exclude<keyof I["widgets"][number]["chart"]["nameHidingSettings"], "$type" | "names" | "positive">, never>) | undefined;
            } & Record<Exclude<keyof I["widgets"][number]["chart"], "$type" | "description" | "id" | "title" | "queries" | "displayLegend" | "freeze" | "visualizationSettings" | "seriesOverrides" | "nameHidingSettings">, never>) | undefined;
        } & Record<Exclude<keyof I["widgets"][number], "$type" | "text" | "title" | "position" | "chart">, never>)[] & Record<Exclude<keyof I["widgets"], "$type" | keyof {
            text?: {
                text?: string | undefined;
            } | undefined;
            title?: {
                text?: string | undefined;
                size?: import("./title_widget").TitleWidget_TitleSize | undefined;
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
                freeze?: import("./chart_widget").ChartWidget_FreezeDuration | undefined;
                visualizationSettings?: {
                    normalize?: boolean | undefined;
                    type?: import("./chart_widget").ChartWidget_VisualizationSettings_VisualizationType | undefined;
                    title?: string | undefined;
                    interpolate?: import("./chart_widget").ChartWidget_VisualizationSettings_Interpolate | undefined;
                    aggregation?: import("./chart_widget").ChartWidget_VisualizationSettings_SeriesAggregation | undefined;
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
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
                            title?: string | undefined;
                            min?: string | undefined;
                            max?: string | undefined;
                            precision?: number | undefined;
                            unitFormat?: import("./unit_format").UnitFormat | undefined;
                        } | undefined;
                        right?: {
                            type?: import("./chart_widget").ChartWidget_VisualizationSettings_YaxisType | undefined;
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
                        type?: import("./chart_widget").ChartWidget_SeriesOverrides_SeriesVisualizationType | undefined;
                        name?: string | undefined;
                        color?: string | undefined;
                        stackName?: string | undefined;
                        growDown?: boolean | undefined;
                        yaxisPosition?: import("./chart_widget").ChartWidget_SeriesOverrides_YaxisPosition | undefined;
                    } | undefined;
                    targetIndex?: string | undefined;
                }[] | undefined;
                nameHidingSettings?: {
                    names?: string[] | undefined;
                    positive?: boolean | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        parametrization?: ({
            selectors?: string | undefined;
            parameters?: {
                description?: string | undefined;
                name?: string | undefined;
                text?: {
                    defaultValue?: string | undefined;
                } | undefined;
                title?: string | undefined;
                custom?: {
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                hidden?: boolean | undefined;
                labelValues?: {
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                integerParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                doubleParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                textValues?: {
                    defaultValues?: string[] | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            selectors?: string | undefined;
            parameters?: ({
                description?: string | undefined;
                name?: string | undefined;
                text?: {
                    defaultValue?: string | undefined;
                } | undefined;
                title?: string | undefined;
                custom?: {
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                hidden?: boolean | undefined;
                labelValues?: {
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                integerParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                doubleParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                textValues?: {
                    defaultValues?: string[] | undefined;
                } | undefined;
            }[] & ({
                description?: string | undefined;
                name?: string | undefined;
                text?: {
                    defaultValue?: string | undefined;
                } | undefined;
                title?: string | undefined;
                custom?: {
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                hidden?: boolean | undefined;
                labelValues?: {
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                integerParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                doubleParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                textValues?: {
                    defaultValues?: string[] | undefined;
                } | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                text?: ({
                    defaultValue?: string | undefined;
                } & {
                    defaultValue?: string | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["text"], "$type" | "defaultValue">, never>) | undefined;
                title?: string | undefined;
                custom?: ({
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["parametrization"]["parameters"][number]["custom"]["values"], "$type" | keyof string[]>, never>) | undefined;
                    defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parametrization"]["parameters"][number]["custom"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                    multiselectable?: boolean | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["custom"], "$type" | "values" | "defaultValues" | "multiselectable">, never>) | undefined;
                hidden?: boolean | undefined;
                labelValues?: ({
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } & {
                    folderId?: string | undefined;
                    defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parametrization"]["parameters"][number]["labelValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["labelValues"], "$type" | "folderId" | "defaultValues" | "selectors" | "labelKey" | "multiselectable">, never>) | undefined;
                integerParameter?: ({
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } & {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["integerParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
                doubleParameter?: ({
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } & {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["doubleParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
                textValues?: ({
                    defaultValues?: string[] | undefined;
                } & {
                    defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parametrization"]["parameters"][number]["textValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["parametrization"]["parameters"][number]["textValues"], "$type" | "defaultValues">, never>) | undefined;
            } & Record<Exclude<keyof I["parametrization"]["parameters"][number], "$type" | "description" | "name" | "text" | "title" | "custom" | "hidden" | "labelValues" | "integerParameter" | "doubleParameter" | "textValues">, never>)[] & Record<Exclude<keyof I["parametrization"]["parameters"], "$type" | keyof {
                description?: string | undefined;
                name?: string | undefined;
                text?: {
                    defaultValue?: string | undefined;
                } | undefined;
                title?: string | undefined;
                custom?: {
                    values?: string[] | undefined;
                    defaultValues?: string[] | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                hidden?: boolean | undefined;
                labelValues?: {
                    folderId?: string | undefined;
                    defaultValues?: string[] | undefined;
                    selectors?: string | undefined;
                    labelKey?: string | undefined;
                    multiselectable?: boolean | undefined;
                } | undefined;
                integerParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                doubleParameter?: {
                    defaultValue?: number | undefined;
                    unitFormat?: import("./unit_format").UnitFormat | undefined;
                } | undefined;
                textValues?: {
                    defaultValues?: string[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["parametrization"], "$type" | "selectors" | "parameters">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdBy" | "createdAt" | "modifiedAt" | "folderId" | "title" | "labels" | "modifiedBy" | "etag" | "widgets" | "parametrization">, never>>(object: I): Dashboard;
};
export declare const Dashboard_LabelsEntry: {
    $type: "yandex.cloud.monitoring.v3.Dashboard.LabelsEntry";
    encode(message: Dashboard_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dashboard_LabelsEntry;
    fromJSON(object: any): Dashboard_LabelsEntry;
    toJSON(message: Dashboard_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Dashboard_LabelsEntry;
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
