/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Parametrization } from "../../../../yandex/cloud/monitoring/v3/parametrization";
import { Dashboard } from "../../../../yandex/cloud/monitoring/v3/dashboard";
import { Widget } from "../../../../yandex/cloud/monitoring/v3/widget";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
export interface GetDashboardRequest {
    $type: "yandex.cloud.monitoring.v3.GetDashboardRequest";
    /** Required. Dashboard ID. */
    dashboardId: string;
}
export interface ListDashboardsRequest {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest";
    /** Required. Folder ID. */
    folderId: string | undefined;
    /**
     * The maximum number of dashboards to return.
     * If unspecified, at most 100 dashboards will be returned.
     * The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDashboardResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Dashboard.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example: name="abc"
     */
    filter: string;
}
export interface ListDashboardsResponse {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse";
    /** List of dashboards. */
    dashboards: Dashboard[];
    /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
    nextPageToken: string;
}
export interface CreateDashboardRequest {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest";
    /** Required. Folder ID. */
    folderId: string | undefined;
    /** Required. Dashboard name. */
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
}
export interface CreateDashboardRequest_LabelsEntry {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateDashboardMetadata {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata";
    /** Dashboard ID. */
    dashboardId: string;
}
export interface UpdateDashboardRequest {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest";
    /** Required. Dashboard ID. */
    dashboardId: string;
    /** Required. Dashboard name. */
    name: string;
    /** Dashboard description. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Dashboard title. */
    title: string;
    /** List of dashboard widgets. */
    widgets: Widget[];
    /** Dashboard parametrization. */
    parametrization?: Parametrization;
    /** The current etag of the dashboard. */
    etag: string;
}
export interface UpdateDashboardRequest_LabelsEntry {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateDashboardMetadata {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata";
    /** Dashboard ID. */
    dashboardId: string;
}
export interface DeleteDashboardRequest {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest";
    /** Required. Dashboard ID. */
    dashboardId: string;
    /** The current etag of the dashboard. */
    etag: string;
}
export interface DeleteDashboardMetadata {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata";
    /** Dashboard ID. */
    dashboardId: string;
}
export interface ListDashboardOperationsRequest {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest";
    /** ID of the dashboard to list operations for. */
    dashboardId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDashboardOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDashboardOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDashboardOperationsResponse {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse";
    /** List of operations for the specified dashboard. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDashboardOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDashboardOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDashboardRequest: {
    $type: "yandex.cloud.monitoring.v3.GetDashboardRequest";
    encode(message: GetDashboardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDashboardRequest;
    fromJSON(object: any): GetDashboardRequest;
    toJSON(message: GetDashboardRequest): unknown;
    fromPartial<I extends {
        dashboardId?: string | undefined;
    } & {
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dashboardId">, never>>(object: I): GetDashboardRequest;
};
export declare const ListDashboardsRequest: {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsRequest";
    encode(message: ListDashboardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDashboardsRequest;
    fromJSON(object: any): ListDashboardsRequest;
    toJSON(message: ListDashboardsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListDashboardsRequest;
};
export declare const ListDashboardsResponse: {
    $type: "yandex.cloud.monitoring.v3.ListDashboardsResponse";
    encode(message: ListDashboardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDashboardsResponse;
    fromJSON(object: any): ListDashboardsResponse;
    toJSON(message: ListDashboardsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        dashboards?: {
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        dashboards?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["dashboards"][number]["labels"], string | number>, never>) | undefined;
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
                } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["text"], "$type" | "text">, never>) | undefined;
                title?: ({
                    text?: string | undefined;
                    size?: import("./title_widget").TitleWidget_TitleSize | undefined;
                } & {
                    text?: string | undefined;
                    size?: import("./title_widget").TitleWidget_TitleSize | undefined;
                } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["title"], "$type" | "text" | "size">, never>) | undefined;
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
                } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["position"], "$type" | "x" | "y" | "w" | "h">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["queries"]["targets"][number], "$type" | "hidden" | "query" | "textMode">, never>)[] & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["queries"]["targets"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["queries"]["downsampling"], "$type" | "disabled" | "gridAggregation" | "gapFilling" | "maxPoints" | "gridInterval">, never>) | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["queries"], "$type" | "targets" | "downsampling">, never>) | undefined;
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
                            automatic?: ({} & {} & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["automatic"], "$type">, never>) | undefined;
                            standard?: ({} & {} & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["standard"], "$type">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"]["gradient"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["colorSchemeSettings"], "$type" | "automatic" | "standard" | "gradient">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["heatmapSettings"], "$type" | "greenValue" | "yellowValue" | "redValue" | "violetValue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"]["left"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"]["right"], "$type" | "type" | "title" | "min" | "max" | "precision" | "unitFormat">, never>) | undefined;
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"]["yaxisSettings"], "$type" | "left" | "right">, never>) | undefined;
                        showLabels?: boolean | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["visualizationSettings"], "$type" | "normalize" | "type" | "title" | "interpolate" | "aggregation" | "colorSchemeSettings" | "heatmapSettings" | "yaxisSettings" | "showLabels">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["seriesOverrides"][number]["settings"], "$type" | "type" | "name" | "color" | "stackName" | "growDown" | "yaxisPosition">, never>) | undefined;
                        targetIndex?: string | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["seriesOverrides"][number], "$type" | "name" | "settings" | "targetIndex">, never>)[] & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["seriesOverrides"], "$type" | keyof {
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
                        names?: (string[] & string[] & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["nameHidingSettings"]["names"], "$type" | keyof string[]>, never>) | undefined;
                        positive?: boolean | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"]["nameHidingSettings"], "$type" | "names" | "positive">, never>) | undefined;
                } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number]["chart"], "$type" | "description" | "id" | "title" | "queries" | "displayLegend" | "freeze" | "visualizationSettings" | "seriesOverrides" | "nameHidingSettings">, never>) | undefined;
            } & Record<Exclude<keyof I["dashboards"][number]["widgets"][number], "$type" | "text" | "title" | "position" | "chart">, never>)[] & Record<Exclude<keyof I["dashboards"][number]["widgets"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["text"], "$type" | "defaultValue">, never>) | undefined;
                    title?: string | undefined;
                    custom?: ({
                        values?: string[] | undefined;
                        defaultValues?: string[] | undefined;
                        multiselectable?: boolean | undefined;
                    } & {
                        values?: (string[] & string[] & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["custom"]["values"], "$type" | keyof string[]>, never>) | undefined;
                        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["custom"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                        multiselectable?: boolean | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["custom"], "$type" | "values" | "defaultValues" | "multiselectable">, never>) | undefined;
                    hidden?: boolean | undefined;
                    labelValues?: ({
                        folderId?: string | undefined;
                        defaultValues?: string[] | undefined;
                        selectors?: string | undefined;
                        labelKey?: string | undefined;
                        multiselectable?: boolean | undefined;
                    } & {
                        folderId?: string | undefined;
                        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["labelValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                        selectors?: string | undefined;
                        labelKey?: string | undefined;
                        multiselectable?: boolean | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["labelValues"], "$type" | "folderId" | "defaultValues" | "selectors" | "labelKey" | "multiselectable">, never>) | undefined;
                    integerParameter?: ({
                        defaultValue?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & {
                        defaultValue?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["integerParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
                    doubleParameter?: ({
                        defaultValue?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & {
                        defaultValue?: number | undefined;
                        unitFormat?: import("./unit_format").UnitFormat | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["doubleParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
                    textValues?: ({
                        defaultValues?: string[] | undefined;
                    } & {
                        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["textValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number]["textValues"], "$type" | "defaultValues">, never>) | undefined;
                } & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"][number], "$type" | "description" | "name" | "text" | "title" | "custom" | "hidden" | "labelValues" | "integerParameter" | "doubleParameter" | "textValues">, never>)[] & Record<Exclude<keyof I["dashboards"][number]["parametrization"]["parameters"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["dashboards"][number]["parametrization"], "$type" | "selectors" | "parameters">, never>) | undefined;
        } & Record<Exclude<keyof I["dashboards"][number], "$type" | "description" | "id" | "name" | "createdBy" | "createdAt" | "modifiedAt" | "folderId" | "title" | "labels" | "modifiedBy" | "etag" | "widgets" | "parametrization">, never>)[] & Record<Exclude<keyof I["dashboards"], "$type" | keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "dashboards">, never>>(object: I): ListDashboardsResponse;
};
export declare const CreateDashboardRequest: {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest";
    encode(message: CreateDashboardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDashboardRequest;
    fromJSON(object: any): CreateDashboardRequest;
    toJSON(message: CreateDashboardRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        title?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
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
        name?: string | undefined;
        folderId?: string | undefined;
        title?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "title" | "labels" | "widgets" | "parametrization">, never>>(object: I): CreateDashboardRequest;
};
export declare const CreateDashboardRequest_LabelsEntry: {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardRequest.LabelsEntry";
    encode(message: CreateDashboardRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDashboardRequest_LabelsEntry;
    fromJSON(object: any): CreateDashboardRequest_LabelsEntry;
    toJSON(message: CreateDashboardRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDashboardRequest_LabelsEntry;
};
export declare const CreateDashboardMetadata: {
    $type: "yandex.cloud.monitoring.v3.CreateDashboardMetadata";
    encode(message: CreateDashboardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDashboardMetadata;
    fromJSON(object: any): CreateDashboardMetadata;
    toJSON(message: CreateDashboardMetadata): unknown;
    fromPartial<I extends {
        dashboardId?: string | undefined;
    } & {
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dashboardId">, never>>(object: I): CreateDashboardMetadata;
};
export declare const UpdateDashboardRequest: {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest";
    encode(message: UpdateDashboardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDashboardRequest;
    fromJSON(object: any): UpdateDashboardRequest;
    toJSON(message: UpdateDashboardRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
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
        dashboardId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
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
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "title" | "labels" | "etag" | "widgets" | "parametrization" | "dashboardId">, never>>(object: I): UpdateDashboardRequest;
};
export declare const UpdateDashboardRequest_LabelsEntry: {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardRequest.LabelsEntry";
    encode(message: UpdateDashboardRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDashboardRequest_LabelsEntry;
    fromJSON(object: any): UpdateDashboardRequest_LabelsEntry;
    toJSON(message: UpdateDashboardRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDashboardRequest_LabelsEntry;
};
export declare const UpdateDashboardMetadata: {
    $type: "yandex.cloud.monitoring.v3.UpdateDashboardMetadata";
    encode(message: UpdateDashboardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDashboardMetadata;
    fromJSON(object: any): UpdateDashboardMetadata;
    toJSON(message: UpdateDashboardMetadata): unknown;
    fromPartial<I extends {
        dashboardId?: string | undefined;
    } & {
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dashboardId">, never>>(object: I): UpdateDashboardMetadata;
};
export declare const DeleteDashboardRequest: {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardRequest";
    encode(message: DeleteDashboardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDashboardRequest;
    fromJSON(object: any): DeleteDashboardRequest;
    toJSON(message: DeleteDashboardRequest): unknown;
    fromPartial<I extends {
        etag?: string | undefined;
        dashboardId?: string | undefined;
    } & {
        etag?: string | undefined;
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "etag" | "dashboardId">, never>>(object: I): DeleteDashboardRequest;
};
export declare const DeleteDashboardMetadata: {
    $type: "yandex.cloud.monitoring.v3.DeleteDashboardMetadata";
    encode(message: DeleteDashboardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDashboardMetadata;
    fromJSON(object: any): DeleteDashboardMetadata;
    toJSON(message: DeleteDashboardMetadata): unknown;
    fromPartial<I extends {
        dashboardId?: string | undefined;
    } & {
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dashboardId">, never>>(object: I): DeleteDashboardMetadata;
};
export declare const ListDashboardOperationsRequest: {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsRequest";
    encode(message: ListDashboardOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDashboardOperationsRequest;
    fromJSON(object: any): ListDashboardOperationsRequest;
    toJSON(message: ListDashboardOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        dashboardId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        dashboardId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "dashboardId">, never>>(object: I): ListDashboardOperationsRequest;
};
export declare const ListDashboardOperationsResponse: {
    $type: "yandex.cloud.monitoring.v3.ListDashboardOperationsResponse";
    encode(message: ListDashboardOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDashboardOperationsResponse;
    fromJSON(object: any): ListDashboardOperationsResponse;
    toJSON(message: ListDashboardOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListDashboardOperationsResponse;
};
/** A set of methods for managing dashboards. */
export declare const DashboardServiceService: {
    /** Returns the specified dashboard. */
    readonly get: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDashboardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDashboardRequest;
        readonly responseSerialize: (value: Dashboard) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Dashboard;
    };
    /** Retrieves the list of dashboards in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDashboardsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDashboardsRequest;
        readonly responseSerialize: (value: ListDashboardsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDashboardsResponse;
    };
    /** Creates a new dashboard in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDashboardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDashboardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified dashboard. */
    readonly update: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDashboardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDashboardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified dashboard. */
    readonly delete: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDashboardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDashboardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified dashboard. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.monitoring.v3.DashboardService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDashboardOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDashboardOperationsRequest;
        readonly responseSerialize: (value: ListDashboardOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDashboardOperationsResponse;
    };
};
export interface DashboardServiceServer extends UntypedServiceImplementation {
    /** Returns the specified dashboard. */
    get: handleUnaryCall<GetDashboardRequest, Dashboard>;
    /** Retrieves the list of dashboards in the specified folder. */
    list: handleUnaryCall<ListDashboardsRequest, ListDashboardsResponse>;
    /** Creates a new dashboard in the specified folder. */
    create: handleUnaryCall<CreateDashboardRequest, Operation>;
    /** Updates the specified dashboard. */
    update: handleUnaryCall<UpdateDashboardRequest, Operation>;
    /** Deletes the specified dashboard. */
    delete: handleUnaryCall<DeleteDashboardRequest, Operation>;
    /** Lists operations for the specified dashboard. */
    listOperations: handleUnaryCall<ListDashboardOperationsRequest, ListDashboardOperationsResponse>;
}
export interface DashboardServiceClient extends Client {
    /** Returns the specified dashboard. */
    get(request: GetDashboardRequest, callback: (error: ServiceError | null, response: Dashboard) => void): ClientUnaryCall;
    get(request: GetDashboardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Dashboard) => void): ClientUnaryCall;
    get(request: GetDashboardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Dashboard) => void): ClientUnaryCall;
    /** Retrieves the list of dashboards in the specified folder. */
    list(request: ListDashboardsRequest, callback: (error: ServiceError | null, response: ListDashboardsResponse) => void): ClientUnaryCall;
    list(request: ListDashboardsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDashboardsResponse) => void): ClientUnaryCall;
    list(request: ListDashboardsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDashboardsResponse) => void): ClientUnaryCall;
    /** Creates a new dashboard in the specified folder. */
    create(request: CreateDashboardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDashboardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDashboardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified dashboard. */
    update(request: UpdateDashboardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDashboardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDashboardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified dashboard. */
    delete(request: DeleteDashboardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDashboardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDashboardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified dashboard. */
    listOperations(request: ListDashboardOperationsRequest, callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDashboardOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDashboardOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDashboardOperationsResponse) => void): ClientUnaryCall;
}
export declare const DashboardServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DashboardServiceClient;
    service: typeof DashboardServiceService;
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
