"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartWidget_NameHidingSettings = exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings = exports.ChartWidget_SeriesOverrides = exports.ChartWidget_VisualizationSettings_YaxisSettings = exports.ChartWidget_VisualizationSettings_Yaxis = exports.ChartWidget_VisualizationSettings_HeatmapSettings = exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme = exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme = exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme = exports.ChartWidget_VisualizationSettings_ColorSchemeSettings = exports.ChartWidget_VisualizationSettings = exports.ChartWidget_Queries_Target = exports.ChartWidget_Queries = exports.ChartWidget = exports.chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON = exports.chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON = exports.ChartWidget_SeriesOverrides_SeriesVisualizationType = exports.chartWidget_SeriesOverrides_YaxisPositionToJSON = exports.chartWidget_SeriesOverrides_YaxisPositionFromJSON = exports.ChartWidget_SeriesOverrides_YaxisPosition = exports.chartWidget_VisualizationSettings_SeriesAggregationToJSON = exports.chartWidget_VisualizationSettings_SeriesAggregationFromJSON = exports.ChartWidget_VisualizationSettings_SeriesAggregation = exports.chartWidget_VisualizationSettings_YaxisTypeToJSON = exports.chartWidget_VisualizationSettings_YaxisTypeFromJSON = exports.ChartWidget_VisualizationSettings_YaxisType = exports.chartWidget_VisualizationSettings_InterpolateToJSON = exports.chartWidget_VisualizationSettings_InterpolateFromJSON = exports.ChartWidget_VisualizationSettings_Interpolate = exports.chartWidget_VisualizationSettings_VisualizationTypeToJSON = exports.chartWidget_VisualizationSettings_VisualizationTypeFromJSON = exports.ChartWidget_VisualizationSettings_VisualizationType = exports.chartWidget_FreezeDurationToJSON = exports.chartWidget_FreezeDurationFromJSON = exports.ChartWidget_FreezeDuration = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const downsampling_1 = require("../../../../yandex/cloud/monitoring/v3/downsampling");
const unit_format_1 = require("../../../../yandex/cloud/monitoring/v3/unit_format");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.monitoring.v3";
var ChartWidget_FreezeDuration;
(function (ChartWidget_FreezeDuration) {
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["FREEZE_DURATION_UNSPECIFIED"] = 0] = "FREEZE_DURATION_UNSPECIFIED";
    /** FREEZE_DURATION_HOUR - Last hour. */
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["FREEZE_DURATION_HOUR"] = 1] = "FREEZE_DURATION_HOUR";
    /** FREEZE_DURATION_DAY - Last day = last 24 hours. */
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["FREEZE_DURATION_DAY"] = 2] = "FREEZE_DURATION_DAY";
    /** FREEZE_DURATION_WEEK - Last 7 days. */
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["FREEZE_DURATION_WEEK"] = 3] = "FREEZE_DURATION_WEEK";
    /** FREEZE_DURATION_MONTH - Last 31 days. */
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["FREEZE_DURATION_MONTH"] = 4] = "FREEZE_DURATION_MONTH";
    ChartWidget_FreezeDuration[ChartWidget_FreezeDuration["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_FreezeDuration = exports.ChartWidget_FreezeDuration || (exports.ChartWidget_FreezeDuration = {}));
function chartWidget_FreezeDurationFromJSON(object) {
    switch (object) {
        case 0:
        case "FREEZE_DURATION_UNSPECIFIED":
            return ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED;
        case 1:
        case "FREEZE_DURATION_HOUR":
            return ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR;
        case 2:
        case "FREEZE_DURATION_DAY":
            return ChartWidget_FreezeDuration.FREEZE_DURATION_DAY;
        case 3:
        case "FREEZE_DURATION_WEEK":
            return ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK;
        case 4:
        case "FREEZE_DURATION_MONTH":
            return ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_FreezeDuration.UNRECOGNIZED;
    }
}
exports.chartWidget_FreezeDurationFromJSON = chartWidget_FreezeDurationFromJSON;
function chartWidget_FreezeDurationToJSON(object) {
    switch (object) {
        case ChartWidget_FreezeDuration.FREEZE_DURATION_UNSPECIFIED:
            return "FREEZE_DURATION_UNSPECIFIED";
        case ChartWidget_FreezeDuration.FREEZE_DURATION_HOUR:
            return "FREEZE_DURATION_HOUR";
        case ChartWidget_FreezeDuration.FREEZE_DURATION_DAY:
            return "FREEZE_DURATION_DAY";
        case ChartWidget_FreezeDuration.FREEZE_DURATION_WEEK:
            return "FREEZE_DURATION_WEEK";
        case ChartWidget_FreezeDuration.FREEZE_DURATION_MONTH:
            return "FREEZE_DURATION_MONTH";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_FreezeDurationToJSON = chartWidget_FreezeDurationToJSON;
/** Chart visualization type. */
var ChartWidget_VisualizationSettings_VisualizationType;
(function (ChartWidget_VisualizationSettings_VisualizationType) {
    /** VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_UNSPECIFIED"] = 0] = "VISUALIZATION_TYPE_UNSPECIFIED";
    /** VISUALIZATION_TYPE_LINE - Line chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_LINE"] = 1] = "VISUALIZATION_TYPE_LINE";
    /** VISUALIZATION_TYPE_STACK - Stack chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_STACK"] = 2] = "VISUALIZATION_TYPE_STACK";
    /** VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_COLUMN"] = 3] = "VISUALIZATION_TYPE_COLUMN";
    /** VISUALIZATION_TYPE_POINTS - Points. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_POINTS"] = 4] = "VISUALIZATION_TYPE_POINTS";
    /** VISUALIZATION_TYPE_PIE - Pie aggregation chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_PIE"] = 5] = "VISUALIZATION_TYPE_PIE";
    /** VISUALIZATION_TYPE_BARS - Bars aggregation chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_BARS"] = 6] = "VISUALIZATION_TYPE_BARS";
    /** VISUALIZATION_TYPE_DISTRIBUTION - Distribution aggregation chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_DISTRIBUTION"] = 7] = "VISUALIZATION_TYPE_DISTRIBUTION";
    /** VISUALIZATION_TYPE_HEATMAP - Heatmap aggregation chart. */
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["VISUALIZATION_TYPE_HEATMAP"] = 8] = "VISUALIZATION_TYPE_HEATMAP";
    ChartWidget_VisualizationSettings_VisualizationType[ChartWidget_VisualizationSettings_VisualizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_VisualizationSettings_VisualizationType = exports.ChartWidget_VisualizationSettings_VisualizationType || (exports.ChartWidget_VisualizationSettings_VisualizationType = {}));
function chartWidget_VisualizationSettings_VisualizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "VISUALIZATION_TYPE_UNSPECIFIED":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "VISUALIZATION_TYPE_LINE":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE;
        case 2:
        case "VISUALIZATION_TYPE_STACK":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK;
        case 3:
        case "VISUALIZATION_TYPE_COLUMN":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN;
        case 4:
        case "VISUALIZATION_TYPE_POINTS":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS;
        case 5:
        case "VISUALIZATION_TYPE_PIE":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE;
        case 6:
        case "VISUALIZATION_TYPE_BARS":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS;
        case 7:
        case "VISUALIZATION_TYPE_DISTRIBUTION":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION;
        case 8:
        case "VISUALIZATION_TYPE_HEATMAP":
            return ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_VisualizationSettings_VisualizationType.UNRECOGNIZED;
    }
}
exports.chartWidget_VisualizationSettings_VisualizationTypeFromJSON = chartWidget_VisualizationSettings_VisualizationTypeFromJSON;
function chartWidget_VisualizationSettings_VisualizationTypeToJSON(object) {
    switch (object) {
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_UNSPECIFIED:
            return "VISUALIZATION_TYPE_UNSPECIFIED";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_LINE:
            return "VISUALIZATION_TYPE_LINE";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_STACK:
            return "VISUALIZATION_TYPE_STACK";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_COLUMN:
            return "VISUALIZATION_TYPE_COLUMN";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_POINTS:
            return "VISUALIZATION_TYPE_POINTS";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_PIE:
            return "VISUALIZATION_TYPE_PIE";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_BARS:
            return "VISUALIZATION_TYPE_BARS";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_DISTRIBUTION:
            return "VISUALIZATION_TYPE_DISTRIBUTION";
        case ChartWidget_VisualizationSettings_VisualizationType.VISUALIZATION_TYPE_HEATMAP:
            return "VISUALIZATION_TYPE_HEATMAP";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_VisualizationSettings_VisualizationTypeToJSON = chartWidget_VisualizationSettings_VisualizationTypeToJSON;
var ChartWidget_VisualizationSettings_Interpolate;
(function (ChartWidget_VisualizationSettings_Interpolate) {
    /** INTERPOLATE_UNSPECIFIED - Not specified (linear by default). */
    ChartWidget_VisualizationSettings_Interpolate[ChartWidget_VisualizationSettings_Interpolate["INTERPOLATE_UNSPECIFIED"] = 0] = "INTERPOLATE_UNSPECIFIED";
    /** INTERPOLATE_LINEAR - Linear. */
    ChartWidget_VisualizationSettings_Interpolate[ChartWidget_VisualizationSettings_Interpolate["INTERPOLATE_LINEAR"] = 1] = "INTERPOLATE_LINEAR";
    /** INTERPOLATE_LEFT - Left. */
    ChartWidget_VisualizationSettings_Interpolate[ChartWidget_VisualizationSettings_Interpolate["INTERPOLATE_LEFT"] = 2] = "INTERPOLATE_LEFT";
    /** INTERPOLATE_RIGHT - Right. */
    ChartWidget_VisualizationSettings_Interpolate[ChartWidget_VisualizationSettings_Interpolate["INTERPOLATE_RIGHT"] = 3] = "INTERPOLATE_RIGHT";
    ChartWidget_VisualizationSettings_Interpolate[ChartWidget_VisualizationSettings_Interpolate["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_VisualizationSettings_Interpolate = exports.ChartWidget_VisualizationSettings_Interpolate || (exports.ChartWidget_VisualizationSettings_Interpolate = {}));
function chartWidget_VisualizationSettings_InterpolateFromJSON(object) {
    switch (object) {
        case 0:
        case "INTERPOLATE_UNSPECIFIED":
            return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED;
        case 1:
        case "INTERPOLATE_LINEAR":
            return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR;
        case 2:
        case "INTERPOLATE_LEFT":
            return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT;
        case 3:
        case "INTERPOLATE_RIGHT":
            return ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_VisualizationSettings_Interpolate.UNRECOGNIZED;
    }
}
exports.chartWidget_VisualizationSettings_InterpolateFromJSON = chartWidget_VisualizationSettings_InterpolateFromJSON;
function chartWidget_VisualizationSettings_InterpolateToJSON(object) {
    switch (object) {
        case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_UNSPECIFIED:
            return "INTERPOLATE_UNSPECIFIED";
        case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LINEAR:
            return "INTERPOLATE_LINEAR";
        case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_LEFT:
            return "INTERPOLATE_LEFT";
        case ChartWidget_VisualizationSettings_Interpolate.INTERPOLATE_RIGHT:
            return "INTERPOLATE_RIGHT";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_VisualizationSettings_InterpolateToJSON = chartWidget_VisualizationSettings_InterpolateToJSON;
/**
 * Y axis type.
 * N.B. _TYPE prefix is necessary to expect name clash with Interpolate LINEAR value.
 */
var ChartWidget_VisualizationSettings_YaxisType;
(function (ChartWidget_VisualizationSettings_YaxisType) {
    /** YAXIS_TYPE_UNSPECIFIED - Not specified (linear by default). */
    ChartWidget_VisualizationSettings_YaxisType[ChartWidget_VisualizationSettings_YaxisType["YAXIS_TYPE_UNSPECIFIED"] = 0] = "YAXIS_TYPE_UNSPECIFIED";
    /** YAXIS_TYPE_LINEAR - Linear. */
    ChartWidget_VisualizationSettings_YaxisType[ChartWidget_VisualizationSettings_YaxisType["YAXIS_TYPE_LINEAR"] = 1] = "YAXIS_TYPE_LINEAR";
    /** YAXIS_TYPE_LOGARITHMIC - Logarithmic. */
    ChartWidget_VisualizationSettings_YaxisType[ChartWidget_VisualizationSettings_YaxisType["YAXIS_TYPE_LOGARITHMIC"] = 2] = "YAXIS_TYPE_LOGARITHMIC";
    ChartWidget_VisualizationSettings_YaxisType[ChartWidget_VisualizationSettings_YaxisType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_VisualizationSettings_YaxisType = exports.ChartWidget_VisualizationSettings_YaxisType || (exports.ChartWidget_VisualizationSettings_YaxisType = {}));
function chartWidget_VisualizationSettings_YaxisTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "YAXIS_TYPE_UNSPECIFIED":
            return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED;
        case 1:
        case "YAXIS_TYPE_LINEAR":
            return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR;
        case 2:
        case "YAXIS_TYPE_LOGARITHMIC":
            return ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_VisualizationSettings_YaxisType.UNRECOGNIZED;
    }
}
exports.chartWidget_VisualizationSettings_YaxisTypeFromJSON = chartWidget_VisualizationSettings_YaxisTypeFromJSON;
function chartWidget_VisualizationSettings_YaxisTypeToJSON(object) {
    switch (object) {
        case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_UNSPECIFIED:
            return "YAXIS_TYPE_UNSPECIFIED";
        case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LINEAR:
            return "YAXIS_TYPE_LINEAR";
        case ChartWidget_VisualizationSettings_YaxisType.YAXIS_TYPE_LOGARITHMIC:
            return "YAXIS_TYPE_LOGARITHMIC";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_VisualizationSettings_YaxisTypeToJSON = chartWidget_VisualizationSettings_YaxisTypeToJSON;
var ChartWidget_VisualizationSettings_SeriesAggregation;
(function (ChartWidget_VisualizationSettings_SeriesAggregation) {
    /** SERIES_AGGREGATION_UNSPECIFIED - Not specified (avg by default). */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_UNSPECIFIED"] = 0] = "SERIES_AGGREGATION_UNSPECIFIED";
    /** SERIES_AGGREGATION_AVG - Average. */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_AVG"] = 1] = "SERIES_AGGREGATION_AVG";
    /** SERIES_AGGREGATION_MIN - Minimum. */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_MIN"] = 2] = "SERIES_AGGREGATION_MIN";
    /** SERIES_AGGREGATION_MAX - Maximum. */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_MAX"] = 3] = "SERIES_AGGREGATION_MAX";
    /** SERIES_AGGREGATION_LAST - Last non-NaN value. */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_LAST"] = 4] = "SERIES_AGGREGATION_LAST";
    /** SERIES_AGGREGATION_SUM - Sum. */
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["SERIES_AGGREGATION_SUM"] = 5] = "SERIES_AGGREGATION_SUM";
    ChartWidget_VisualizationSettings_SeriesAggregation[ChartWidget_VisualizationSettings_SeriesAggregation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_VisualizationSettings_SeriesAggregation = exports.ChartWidget_VisualizationSettings_SeriesAggregation || (exports.ChartWidget_VisualizationSettings_SeriesAggregation = {}));
function chartWidget_VisualizationSettings_SeriesAggregationFromJSON(object) {
    switch (object) {
        case 0:
        case "SERIES_AGGREGATION_UNSPECIFIED":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED;
        case 1:
        case "SERIES_AGGREGATION_AVG":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG;
        case 2:
        case "SERIES_AGGREGATION_MIN":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN;
        case 3:
        case "SERIES_AGGREGATION_MAX":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX;
        case 4:
        case "SERIES_AGGREGATION_LAST":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST;
        case 5:
        case "SERIES_AGGREGATION_SUM":
            return ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_VisualizationSettings_SeriesAggregation.UNRECOGNIZED;
    }
}
exports.chartWidget_VisualizationSettings_SeriesAggregationFromJSON = chartWidget_VisualizationSettings_SeriesAggregationFromJSON;
function chartWidget_VisualizationSettings_SeriesAggregationToJSON(object) {
    switch (object) {
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_UNSPECIFIED:
            return "SERIES_AGGREGATION_UNSPECIFIED";
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_AVG:
            return "SERIES_AGGREGATION_AVG";
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MIN:
            return "SERIES_AGGREGATION_MIN";
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_MAX:
            return "SERIES_AGGREGATION_MAX";
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_LAST:
            return "SERIES_AGGREGATION_LAST";
        case ChartWidget_VisualizationSettings_SeriesAggregation.SERIES_AGGREGATION_SUM:
            return "SERIES_AGGREGATION_SUM";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_VisualizationSettings_SeriesAggregationToJSON = chartWidget_VisualizationSettings_SeriesAggregationToJSON;
var ChartWidget_SeriesOverrides_YaxisPosition;
(function (ChartWidget_SeriesOverrides_YaxisPosition) {
    /** YAXIS_POSITION_UNSPECIFIED - Not specified (left by default). */
    ChartWidget_SeriesOverrides_YaxisPosition[ChartWidget_SeriesOverrides_YaxisPosition["YAXIS_POSITION_UNSPECIFIED"] = 0] = "YAXIS_POSITION_UNSPECIFIED";
    /** YAXIS_POSITION_LEFT - Left. */
    ChartWidget_SeriesOverrides_YaxisPosition[ChartWidget_SeriesOverrides_YaxisPosition["YAXIS_POSITION_LEFT"] = 1] = "YAXIS_POSITION_LEFT";
    /** YAXIS_POSITION_RIGHT - Right. */
    ChartWidget_SeriesOverrides_YaxisPosition[ChartWidget_SeriesOverrides_YaxisPosition["YAXIS_POSITION_RIGHT"] = 2] = "YAXIS_POSITION_RIGHT";
    ChartWidget_SeriesOverrides_YaxisPosition[ChartWidget_SeriesOverrides_YaxisPosition["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_SeriesOverrides_YaxisPosition = exports.ChartWidget_SeriesOverrides_YaxisPosition || (exports.ChartWidget_SeriesOverrides_YaxisPosition = {}));
function chartWidget_SeriesOverrides_YaxisPositionFromJSON(object) {
    switch (object) {
        case 0:
        case "YAXIS_POSITION_UNSPECIFIED":
            return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED;
        case 1:
        case "YAXIS_POSITION_LEFT":
            return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT;
        case 2:
        case "YAXIS_POSITION_RIGHT":
            return ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_SeriesOverrides_YaxisPosition.UNRECOGNIZED;
    }
}
exports.chartWidget_SeriesOverrides_YaxisPositionFromJSON = chartWidget_SeriesOverrides_YaxisPositionFromJSON;
function chartWidget_SeriesOverrides_YaxisPositionToJSON(object) {
    switch (object) {
        case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_UNSPECIFIED:
            return "YAXIS_POSITION_UNSPECIFIED";
        case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_LEFT:
            return "YAXIS_POSITION_LEFT";
        case ChartWidget_SeriesOverrides_YaxisPosition.YAXIS_POSITION_RIGHT:
            return "YAXIS_POSITION_RIGHT";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_SeriesOverrides_YaxisPositionToJSON = chartWidget_SeriesOverrides_YaxisPositionToJSON;
var ChartWidget_SeriesOverrides_SeriesVisualizationType;
(function (ChartWidget_SeriesOverrides_SeriesVisualizationType) {
    /** SERIES_VISUALIZATION_TYPE_UNSPECIFIED - Not specified (line by default). */
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["SERIES_VISUALIZATION_TYPE_UNSPECIFIED"] = 0] = "SERIES_VISUALIZATION_TYPE_UNSPECIFIED";
    /** SERIES_VISUALIZATION_TYPE_LINE - Line chart. */
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["SERIES_VISUALIZATION_TYPE_LINE"] = 1] = "SERIES_VISUALIZATION_TYPE_LINE";
    /** SERIES_VISUALIZATION_TYPE_STACK - Stack chart. */
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["SERIES_VISUALIZATION_TYPE_STACK"] = 2] = "SERIES_VISUALIZATION_TYPE_STACK";
    /** SERIES_VISUALIZATION_TYPE_COLUMN - Points as columns chart. */
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["SERIES_VISUALIZATION_TYPE_COLUMN"] = 3] = "SERIES_VISUALIZATION_TYPE_COLUMN";
    /** SERIES_VISUALIZATION_TYPE_POINTS - Points. */
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["SERIES_VISUALIZATION_TYPE_POINTS"] = 4] = "SERIES_VISUALIZATION_TYPE_POINTS";
    ChartWidget_SeriesOverrides_SeriesVisualizationType[ChartWidget_SeriesOverrides_SeriesVisualizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChartWidget_SeriesOverrides_SeriesVisualizationType = exports.ChartWidget_SeriesOverrides_SeriesVisualizationType || (exports.ChartWidget_SeriesOverrides_SeriesVisualizationType = {}));
function chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SERIES_VISUALIZATION_TYPE_UNSPECIFIED":
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "SERIES_VISUALIZATION_TYPE_LINE":
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE;
        case 2:
        case "SERIES_VISUALIZATION_TYPE_STACK":
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK;
        case 3:
        case "SERIES_VISUALIZATION_TYPE_COLUMN":
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN;
        case 4:
        case "SERIES_VISUALIZATION_TYPE_POINTS":
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChartWidget_SeriesOverrides_SeriesVisualizationType.UNRECOGNIZED;
    }
}
exports.chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON = chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON;
function chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(object) {
    switch (object) {
        case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_UNSPECIFIED:
            return "SERIES_VISUALIZATION_TYPE_UNSPECIFIED";
        case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_LINE:
            return "SERIES_VISUALIZATION_TYPE_LINE";
        case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_STACK:
            return "SERIES_VISUALIZATION_TYPE_STACK";
        case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_COLUMN:
            return "SERIES_VISUALIZATION_TYPE_COLUMN";
        case ChartWidget_SeriesOverrides_SeriesVisualizationType.SERIES_VISUALIZATION_TYPE_POINTS:
            return "SERIES_VISUALIZATION_TYPE_POINTS";
        default:
            return "UNKNOWN";
    }
}
exports.chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON = chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON;
const baseChartWidget = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget",
    id: "",
    description: "",
    title: "",
    displayLegend: false,
    freeze: 0,
};
exports.ChartWidget = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.queries !== undefined) {
            exports.ChartWidget_Queries.encode(message.queries, writer.uint32(18).fork()).ldelim();
        }
        if (message.visualizationSettings !== undefined) {
            exports.ChartWidget_VisualizationSettings.encode(message.visualizationSettings, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.seriesOverrides) {
            exports.ChartWidget_SeriesOverrides.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.nameHidingSettings !== undefined) {
            exports.ChartWidget_NameHidingSettings.encode(message.nameHidingSettings, writer.uint32(42).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.title !== "") {
            writer.uint32(58).string(message.title);
        }
        if (message.displayLegend === true) {
            writer.uint32(64).bool(message.displayLegend);
        }
        if (message.freeze !== 0) {
            writer.uint32(72).int32(message.freeze);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget);
        message.seriesOverrides = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.queries = exports.ChartWidget_Queries.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.visualizationSettings =
                        exports.ChartWidget_VisualizationSettings.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.seriesOverrides.push(exports.ChartWidget_SeriesOverrides.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.nameHidingSettings = exports.ChartWidget_NameHidingSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.title = reader.string();
                    break;
                case 8:
                    message.displayLegend = reader.bool();
                    break;
                case 9:
                    message.freeze = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseChartWidget);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.queries =
            object.queries !== undefined && object.queries !== null
                ? exports.ChartWidget_Queries.fromJSON(object.queries)
                : undefined;
        message.visualizationSettings =
            object.visualizationSettings !== undefined &&
                object.visualizationSettings !== null
                ? exports.ChartWidget_VisualizationSettings.fromJSON(object.visualizationSettings)
                : undefined;
        message.seriesOverrides = ((_a = object.seriesOverrides) !== null && _a !== void 0 ? _a : []).map((e) => exports.ChartWidget_SeriesOverrides.fromJSON(e));
        message.nameHidingSettings =
            object.nameHidingSettings !== undefined &&
                object.nameHidingSettings !== null
                ? exports.ChartWidget_NameHidingSettings.fromJSON(object.nameHidingSettings)
                : undefined;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.displayLegend =
            object.displayLegend !== undefined && object.displayLegend !== null
                ? Boolean(object.displayLegend)
                : false;
        message.freeze =
            object.freeze !== undefined && object.freeze !== null
                ? chartWidget_FreezeDurationFromJSON(object.freeze)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.queries !== undefined &&
            (obj.queries = message.queries
                ? exports.ChartWidget_Queries.toJSON(message.queries)
                : undefined);
        message.visualizationSettings !== undefined &&
            (obj.visualizationSettings = message.visualizationSettings
                ? exports.ChartWidget_VisualizationSettings.toJSON(message.visualizationSettings)
                : undefined);
        if (message.seriesOverrides) {
            obj.seriesOverrides = message.seriesOverrides.map((e) => e ? exports.ChartWidget_SeriesOverrides.toJSON(e) : undefined);
        }
        else {
            obj.seriesOverrides = [];
        }
        message.nameHidingSettings !== undefined &&
            (obj.nameHidingSettings = message.nameHidingSettings
                ? exports.ChartWidget_NameHidingSettings.toJSON(message.nameHidingSettings)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
        message.displayLegend !== undefined &&
            (obj.displayLegend = message.displayLegend);
        message.freeze !== undefined &&
            (obj.freeze = chartWidget_FreezeDurationToJSON(message.freeze));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseChartWidget);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.queries =
            object.queries !== undefined && object.queries !== null
                ? exports.ChartWidget_Queries.fromPartial(object.queries)
                : undefined;
        message.visualizationSettings =
            object.visualizationSettings !== undefined &&
                object.visualizationSettings !== null
                ? exports.ChartWidget_VisualizationSettings.fromPartial(object.visualizationSettings)
                : undefined;
        message.seriesOverrides =
            ((_b = object.seriesOverrides) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ChartWidget_SeriesOverrides.fromPartial(e))) || [];
        message.nameHidingSettings =
            object.nameHidingSettings !== undefined &&
                object.nameHidingSettings !== null
                ? exports.ChartWidget_NameHidingSettings.fromPartial(object.nameHidingSettings)
                : undefined;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.title = (_d = object.title) !== null && _d !== void 0 ? _d : "";
        message.displayLegend = (_e = object.displayLegend) !== null && _e !== void 0 ? _e : false;
        message.freeze = (_f = object.freeze) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget.$type, exports.ChartWidget);
const baseChartWidget_Queries = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries",
};
exports.ChartWidget_Queries = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.targets) {
            exports.ChartWidget_Queries_Target.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.downsampling !== undefined) {
            downsampling_1.Downsampling.encode(message.downsampling, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_Queries);
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targets.push(exports.ChartWidget_Queries_Target.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.downsampling = downsampling_1.Downsampling.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseChartWidget_Queries);
        message.targets = ((_a = object.targets) !== null && _a !== void 0 ? _a : []).map((e) => exports.ChartWidget_Queries_Target.fromJSON(e));
        message.downsampling =
            object.downsampling !== undefined && object.downsampling !== null
                ? downsampling_1.Downsampling.fromJSON(object.downsampling)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? exports.ChartWidget_Queries_Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        message.downsampling !== undefined &&
            (obj.downsampling = message.downsampling
                ? downsampling_1.Downsampling.toJSON(message.downsampling)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseChartWidget_Queries);
        message.targets =
            ((_a = object.targets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ChartWidget_Queries_Target.fromPartial(e))) ||
                [];
        message.downsampling =
            object.downsampling !== undefined && object.downsampling !== null
                ? downsampling_1.Downsampling.fromPartial(object.downsampling)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_Queries.$type, exports.ChartWidget_Queries);
const baseChartWidget_Queries_Target = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target",
    query: "",
    textMode: false,
    hidden: false,
};
exports.ChartWidget_Queries_Target = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.Queries.Target",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.query !== "") {
            writer.uint32(10).string(message.query);
        }
        if (message.textMode === true) {
            writer.uint32(16).bool(message.textMode);
        }
        if (message.hidden === true) {
            writer.uint32(24).bool(message.hidden);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_Queries_Target);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.query = reader.string();
                    break;
                case 2:
                    message.textMode = reader.bool();
                    break;
                case 3:
                    message.hidden = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_Queries_Target);
        message.query =
            object.query !== undefined && object.query !== null
                ? String(object.query)
                : "";
        message.textMode =
            object.textMode !== undefined && object.textMode !== null
                ? Boolean(object.textMode)
                : false;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null
                ? Boolean(object.hidden)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.query !== undefined && (obj.query = message.query);
        message.textMode !== undefined && (obj.textMode = message.textMode);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseChartWidget_Queries_Target);
        message.query = (_a = object.query) !== null && _a !== void 0 ? _a : "";
        message.textMode = (_b = object.textMode) !== null && _b !== void 0 ? _b : false;
        message.hidden = (_c = object.hidden) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_Queries_Target.$type, exports.ChartWidget_Queries_Target);
const baseChartWidget_VisualizationSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings",
    type: 0,
    normalize: false,
    interpolate: 0,
    aggregation: 0,
    title: "",
    showLabels: false,
};
exports.ChartWidget_VisualizationSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.normalize === true) {
            writer.uint32(16).bool(message.normalize);
        }
        if (message.interpolate !== 0) {
            writer.uint32(24).int32(message.interpolate);
        }
        if (message.aggregation !== 0) {
            writer.uint32(32).int32(message.aggregation);
        }
        if (message.colorSchemeSettings !== undefined) {
            exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.encode(message.colorSchemeSettings, writer.uint32(42).fork()).ldelim();
        }
        if (message.heatmapSettings !== undefined) {
            exports.ChartWidget_VisualizationSettings_HeatmapSettings.encode(message.heatmapSettings, writer.uint32(50).fork()).ldelim();
        }
        if (message.yaxisSettings !== undefined) {
            exports.ChartWidget_VisualizationSettings_YaxisSettings.encode(message.yaxisSettings, writer.uint32(58).fork()).ldelim();
        }
        if (message.title !== "") {
            writer.uint32(66).string(message.title);
        }
        if (message.showLabels === true) {
            writer.uint32(72).bool(message.showLabels);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.normalize = reader.bool();
                    break;
                case 3:
                    message.interpolate = reader.int32();
                    break;
                case 4:
                    message.aggregation = reader.int32();
                    break;
                case 5:
                    message.colorSchemeSettings =
                        exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.heatmapSettings =
                        exports.ChartWidget_VisualizationSettings_HeatmapSettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.yaxisSettings =
                        exports.ChartWidget_VisualizationSettings_YaxisSettings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.title = reader.string();
                    break;
                case 9:
                    message.showLabels = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings);
        message.type =
            object.type !== undefined && object.type !== null
                ? chartWidget_VisualizationSettings_VisualizationTypeFromJSON(object.type)
                : 0;
        message.normalize =
            object.normalize !== undefined && object.normalize !== null
                ? Boolean(object.normalize)
                : false;
        message.interpolate =
            object.interpolate !== undefined && object.interpolate !== null
                ? chartWidget_VisualizationSettings_InterpolateFromJSON(object.interpolate)
                : 0;
        message.aggregation =
            object.aggregation !== undefined && object.aggregation !== null
                ? chartWidget_VisualizationSettings_SeriesAggregationFromJSON(object.aggregation)
                : 0;
        message.colorSchemeSettings =
            object.colorSchemeSettings !== undefined &&
                object.colorSchemeSettings !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.fromJSON(object.colorSchemeSettings)
                : undefined;
        message.heatmapSettings =
            object.heatmapSettings !== undefined && object.heatmapSettings !== null
                ? exports.ChartWidget_VisualizationSettings_HeatmapSettings.fromJSON(object.heatmapSettings)
                : undefined;
        message.yaxisSettings =
            object.yaxisSettings !== undefined && object.yaxisSettings !== null
                ? exports.ChartWidget_VisualizationSettings_YaxisSettings.fromJSON(object.yaxisSettings)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.showLabels =
            object.showLabels !== undefined && object.showLabels !== null
                ? Boolean(object.showLabels)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = chartWidget_VisualizationSettings_VisualizationTypeToJSON(message.type));
        message.normalize !== undefined && (obj.normalize = message.normalize);
        message.interpolate !== undefined &&
            (obj.interpolate = chartWidget_VisualizationSettings_InterpolateToJSON(message.interpolate));
        message.aggregation !== undefined &&
            (obj.aggregation =
                chartWidget_VisualizationSettings_SeriesAggregationToJSON(message.aggregation));
        message.colorSchemeSettings !== undefined &&
            (obj.colorSchemeSettings = message.colorSchemeSettings
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.toJSON(message.colorSchemeSettings)
                : undefined);
        message.heatmapSettings !== undefined &&
            (obj.heatmapSettings = message.heatmapSettings
                ? exports.ChartWidget_VisualizationSettings_HeatmapSettings.toJSON(message.heatmapSettings)
                : undefined);
        message.yaxisSettings !== undefined &&
            (obj.yaxisSettings = message.yaxisSettings
                ? exports.ChartWidget_VisualizationSettings_YaxisSettings.toJSON(message.yaxisSettings)
                : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.showLabels !== undefined && (obj.showLabels = message.showLabels);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.normalize = (_b = object.normalize) !== null && _b !== void 0 ? _b : false;
        message.interpolate = (_c = object.interpolate) !== null && _c !== void 0 ? _c : 0;
        message.aggregation = (_d = object.aggregation) !== null && _d !== void 0 ? _d : 0;
        message.colorSchemeSettings =
            object.colorSchemeSettings !== undefined &&
                object.colorSchemeSettings !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.fromPartial(object.colorSchemeSettings)
                : undefined;
        message.heatmapSettings =
            object.heatmapSettings !== undefined && object.heatmapSettings !== null
                ? exports.ChartWidget_VisualizationSettings_HeatmapSettings.fromPartial(object.heatmapSettings)
                : undefined;
        message.yaxisSettings =
            object.yaxisSettings !== undefined && object.yaxisSettings !== null
                ? exports.ChartWidget_VisualizationSettings_YaxisSettings.fromPartial(object.yaxisSettings)
                : undefined;
        message.title = (_e = object.title) !== null && _e !== void 0 ? _e : "";
        message.showLabels = (_f = object.showLabels) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings.$type, exports.ChartWidget_VisualizationSettings);
const baseChartWidget_VisualizationSettings_ColorSchemeSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings",
};
exports.ChartWidget_VisualizationSettings_ColorSchemeSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.automatic !== undefined) {
            exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.encode(message.automatic, writer.uint32(10).fork()).ldelim();
        }
        if (message.standard !== undefined) {
            exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.encode(message.standard, writer.uint32(18).fork()).ldelim();
        }
        if (message.gradient !== undefined) {
            exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.encode(message.gradient, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.automatic =
                        exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.standard =
                        exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gradient =
                        exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings);
        message.automatic =
            object.automatic !== undefined && object.automatic !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromJSON(object.automatic)
                : undefined;
        message.standard =
            object.standard !== undefined && object.standard !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromJSON(object.standard)
                : undefined;
        message.gradient =
            object.gradient !== undefined && object.gradient !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromJSON(object.gradient)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.automatic !== undefined &&
            (obj.automatic = message.automatic
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.toJSON(message.automatic)
                : undefined);
        message.standard !== undefined &&
            (obj.standard = message.standard
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.toJSON(message.standard)
                : undefined);
        message.gradient !== undefined &&
            (obj.gradient = message.gradient
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.toJSON(message.gradient)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings);
        message.automatic =
            object.automatic !== undefined && object.automatic !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.fromPartial(object.automatic)
                : undefined;
        message.standard =
            object.standard !== undefined && object.standard !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.fromPartial(object.standard)
                : undefined;
        message.gradient =
            object.gradient !== undefined && object.gradient !== null
                ? exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.fromPartial(object.gradient)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_ColorSchemeSettings.$type, exports.ChartWidget_VisualizationSettings_ColorSchemeSettings);
const baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme",
};
exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.AutomaticColorScheme",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme.$type, exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_AutomaticColorScheme);
const baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme",
};
exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.StandardColorScheme",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme.$type, exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_StandardColorScheme);
const baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme",
    greenValue: "",
    yellowValue: "",
    redValue: "",
    violetValue: "",
};
exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.ColorSchemeSettings.GradientColorScheme",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.greenValue !== "") {
            writer.uint32(18).string(message.greenValue);
        }
        if (message.yellowValue !== "") {
            writer.uint32(26).string(message.yellowValue);
        }
        if (message.redValue !== "") {
            writer.uint32(34).string(message.redValue);
        }
        if (message.violetValue !== "") {
            writer.uint32(42).string(message.violetValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.greenValue = reader.string();
                    break;
                case 3:
                    message.yellowValue = reader.string();
                    break;
                case 4:
                    message.redValue = reader.string();
                    break;
                case 5:
                    message.violetValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme);
        message.greenValue =
            object.greenValue !== undefined && object.greenValue !== null
                ? String(object.greenValue)
                : "";
        message.yellowValue =
            object.yellowValue !== undefined && object.yellowValue !== null
                ? String(object.yellowValue)
                : "";
        message.redValue =
            object.redValue !== undefined && object.redValue !== null
                ? String(object.redValue)
                : "";
        message.violetValue =
            object.violetValue !== undefined && object.violetValue !== null
                ? String(object.violetValue)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.greenValue !== undefined && (obj.greenValue = message.greenValue);
        message.yellowValue !== undefined &&
            (obj.yellowValue = message.yellowValue);
        message.redValue !== undefined && (obj.redValue = message.redValue);
        message.violetValue !== undefined &&
            (obj.violetValue = message.violetValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme);
        message.greenValue = (_a = object.greenValue) !== null && _a !== void 0 ? _a : "";
        message.yellowValue = (_b = object.yellowValue) !== null && _b !== void 0 ? _b : "";
        message.redValue = (_c = object.redValue) !== null && _c !== void 0 ? _c : "";
        message.violetValue = (_d = object.violetValue) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme.$type, exports.ChartWidget_VisualizationSettings_ColorSchemeSettings_GradientColorScheme);
const baseChartWidget_VisualizationSettings_HeatmapSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings",
    greenValue: "",
    yellowValue: "",
    redValue: "",
    violetValue: "",
};
exports.ChartWidget_VisualizationSettings_HeatmapSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.HeatmapSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.greenValue !== "") {
            writer.uint32(18).string(message.greenValue);
        }
        if (message.yellowValue !== "") {
            writer.uint32(26).string(message.yellowValue);
        }
        if (message.redValue !== "") {
            writer.uint32(34).string(message.redValue);
        }
        if (message.violetValue !== "") {
            writer.uint32(42).string(message.violetValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_HeatmapSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.greenValue = reader.string();
                    break;
                case 3:
                    message.yellowValue = reader.string();
                    break;
                case 4:
                    message.redValue = reader.string();
                    break;
                case 5:
                    message.violetValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_HeatmapSettings);
        message.greenValue =
            object.greenValue !== undefined && object.greenValue !== null
                ? String(object.greenValue)
                : "";
        message.yellowValue =
            object.yellowValue !== undefined && object.yellowValue !== null
                ? String(object.yellowValue)
                : "";
        message.redValue =
            object.redValue !== undefined && object.redValue !== null
                ? String(object.redValue)
                : "";
        message.violetValue =
            object.violetValue !== undefined && object.violetValue !== null
                ? String(object.violetValue)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.greenValue !== undefined && (obj.greenValue = message.greenValue);
        message.yellowValue !== undefined &&
            (obj.yellowValue = message.yellowValue);
        message.redValue !== undefined && (obj.redValue = message.redValue);
        message.violetValue !== undefined &&
            (obj.violetValue = message.violetValue);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_HeatmapSettings);
        message.greenValue = (_a = object.greenValue) !== null && _a !== void 0 ? _a : "";
        message.yellowValue = (_b = object.yellowValue) !== null && _b !== void 0 ? _b : "";
        message.redValue = (_c = object.redValue) !== null && _c !== void 0 ? _c : "";
        message.violetValue = (_d = object.violetValue) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_HeatmapSettings.$type, exports.ChartWidget_VisualizationSettings_HeatmapSettings);
const baseChartWidget_VisualizationSettings_Yaxis = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis",
    type: 0,
    title: "",
    min: "",
    max: "",
    unitFormat: 0,
};
exports.ChartWidget_VisualizationSettings_Yaxis = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.Yaxis",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.min !== "") {
            writer.uint32(26).string(message.min);
        }
        if (message.max !== "") {
            writer.uint32(34).string(message.max);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(40).int32(message.unitFormat);
        }
        if (message.precision !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.precision }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_Yaxis);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.min = reader.string();
                    break;
                case 4:
                    message.max = reader.string();
                    break;
                case 5:
                    message.unitFormat = reader.int32();
                    break;
                case 6:
                    message.precision = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_Yaxis);
        message.type =
            object.type !== undefined && object.type !== null
                ? chartWidget_VisualizationSettings_YaxisTypeFromJSON(object.type)
                : 0;
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.min =
            object.min !== undefined && object.min !== null ? String(object.min) : "";
        message.max =
            object.max !== undefined && object.max !== null ? String(object.max) : "";
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? (0, unit_format_1.unitFormatFromJSON)(object.unitFormat)
                : 0;
        message.precision =
            object.precision !== undefined && object.precision !== null
                ? Number(object.precision)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = chartWidget_VisualizationSettings_YaxisTypeToJSON(message.type));
        message.title !== undefined && (obj.title = message.title);
        message.min !== undefined && (obj.min = message.min);
        message.max !== undefined && (obj.max = message.max);
        message.unitFormat !== undefined &&
            (obj.unitFormat = (0, unit_format_1.unitFormatToJSON)(message.unitFormat));
        message.precision !== undefined && (obj.precision = message.precision);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_Yaxis);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.min = (_c = object.min) !== null && _c !== void 0 ? _c : "";
        message.max = (_d = object.max) !== null && _d !== void 0 ? _d : "";
        message.unitFormat = (_e = object.unitFormat) !== null && _e !== void 0 ? _e : 0;
        message.precision = (_f = object.precision) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_Yaxis.$type, exports.ChartWidget_VisualizationSettings_Yaxis);
const baseChartWidget_VisualizationSettings_YaxisSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings",
};
exports.ChartWidget_VisualizationSettings_YaxisSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.VisualizationSettings.YaxisSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.left !== undefined) {
            exports.ChartWidget_VisualizationSettings_Yaxis.encode(message.left, writer.uint32(10).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ChartWidget_VisualizationSettings_Yaxis.encode(message.right, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_YaxisSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.left = exports.ChartWidget_VisualizationSettings_Yaxis.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.right = exports.ChartWidget_VisualizationSettings_Yaxis.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_YaxisSettings);
        message.left =
            object.left !== undefined && object.left !== null
                ? exports.ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? exports.ChartWidget_VisualizationSettings_Yaxis.fromJSON(object.right)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.left !== undefined &&
            (obj.left = message.left
                ? exports.ChartWidget_VisualizationSettings_Yaxis.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? exports.ChartWidget_VisualizationSettings_Yaxis.toJSON(message.right)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseChartWidget_VisualizationSettings_YaxisSettings);
        message.left =
            object.left !== undefined && object.left !== null
                ? exports.ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? exports.ChartWidget_VisualizationSettings_Yaxis.fromPartial(object.right)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_VisualizationSettings_YaxisSettings.$type, exports.ChartWidget_VisualizationSettings_YaxisSettings);
const baseChartWidget_SeriesOverrides = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides",
};
exports.ChartWidget_SeriesOverrides = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined) {
            writer.uint32(10).string(message.name);
        }
        if (message.targetIndex !== undefined) {
            writer.uint32(18).string(message.targetIndex);
        }
        if (message.settings !== undefined) {
            exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.encode(message.settings, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_SeriesOverrides);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.targetIndex = reader.string();
                    break;
                case 3:
                    message.settings =
                        exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_SeriesOverrides);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : undefined;
        message.targetIndex =
            object.targetIndex !== undefined && object.targetIndex !== null
                ? String(object.targetIndex)
                : undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.targetIndex !== undefined &&
            (obj.targetIndex = message.targetIndex);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseChartWidget_SeriesOverrides);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : undefined;
        message.targetIndex = (_b = object.targetIndex) !== null && _b !== void 0 ? _b : undefined;
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_SeriesOverrides.$type, exports.ChartWidget_SeriesOverrides);
const baseChartWidget_SeriesOverrides_SeriesOverrideSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings",
    name: "",
    color: "",
    type: 0,
    stackName: "",
    growDown: false,
    yaxisPosition: 0,
};
exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.SeriesOverrides.SeriesOverrideSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.color !== "") {
            writer.uint32(18).string(message.color);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.stackName !== "") {
            writer.uint32(34).string(message.stackName);
        }
        if (message.growDown === true) {
            writer.uint32(40).bool(message.growDown);
        }
        if (message.yaxisPosition !== 0) {
            writer.uint32(48).int32(message.yaxisPosition);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_SeriesOverrides_SeriesOverrideSettings);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.color = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.stackName = reader.string();
                    break;
                case 5:
                    message.growDown = reader.bool();
                    break;
                case 6:
                    message.yaxisPosition = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChartWidget_SeriesOverrides_SeriesOverrideSettings);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.color =
            object.color !== undefined && object.color !== null
                ? String(object.color)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? chartWidget_SeriesOverrides_SeriesVisualizationTypeFromJSON(object.type)
                : 0;
        message.stackName =
            object.stackName !== undefined && object.stackName !== null
                ? String(object.stackName)
                : "";
        message.growDown =
            object.growDown !== undefined && object.growDown !== null
                ? Boolean(object.growDown)
                : false;
        message.yaxisPosition =
            object.yaxisPosition !== undefined && object.yaxisPosition !== null
                ? chartWidget_SeriesOverrides_YaxisPositionFromJSON(object.yaxisPosition)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.color !== undefined && (obj.color = message.color);
        message.type !== undefined &&
            (obj.type = chartWidget_SeriesOverrides_SeriesVisualizationTypeToJSON(message.type));
        message.stackName !== undefined && (obj.stackName = message.stackName);
        message.growDown !== undefined && (obj.growDown = message.growDown);
        message.yaxisPosition !== undefined &&
            (obj.yaxisPosition = chartWidget_SeriesOverrides_YaxisPositionToJSON(message.yaxisPosition));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseChartWidget_SeriesOverrides_SeriesOverrideSettings);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.color = (_b = object.color) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.stackName = (_d = object.stackName) !== null && _d !== void 0 ? _d : "";
        message.growDown = (_e = object.growDown) !== null && _e !== void 0 ? _e : false;
        message.yaxisPosition = (_f = object.yaxisPosition) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings.$type, exports.ChartWidget_SeriesOverrides_SeriesOverrideSettings);
const baseChartWidget_NameHidingSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings",
    positive: false,
    names: "",
};
exports.ChartWidget_NameHidingSettings = {
    $type: "yandex.cloud.monitoring.v3.ChartWidget.NameHidingSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.positive === true) {
            writer.uint32(8).bool(message.positive);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChartWidget_NameHidingSettings);
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.positive = reader.bool();
                    break;
                case 2:
                    message.names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseChartWidget_NameHidingSettings);
        message.positive =
            object.positive !== undefined && object.positive !== null
                ? Boolean(object.positive)
                : false;
        message.names = ((_a = object.names) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.positive !== undefined && (obj.positive = message.positive);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseChartWidget_NameHidingSettings);
        message.positive = (_a = object.positive) !== null && _a !== void 0 ? _a : false;
        message.names = ((_b = object.names) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ChartWidget_NameHidingSettings.$type, exports.ChartWidget_NameHidingSettings);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
