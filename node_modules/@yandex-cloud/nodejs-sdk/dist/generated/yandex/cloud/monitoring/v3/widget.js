"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget_LayoutPosition = exports.Widget = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const text_widget_1 = require("../../../../yandex/cloud/monitoring/v3/text_widget");
const title_widget_1 = require("../../../../yandex/cloud/monitoring/v3/title_widget");
const chart_widget_1 = require("../../../../yandex/cloud/monitoring/v3/chart_widget");
exports.protobufPackage = "yandex.cloud.monitoring.v3";
const baseWidget = { $type: "yandex.cloud.monitoring.v3.Widget" };
exports.Widget = {
    $type: "yandex.cloud.monitoring.v3.Widget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.position !== undefined) {
            exports.Widget_LayoutPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== undefined) {
            text_widget_1.TextWidget.encode(message.text, writer.uint32(18).fork()).ldelim();
        }
        if (message.title !== undefined) {
            title_widget_1.TitleWidget.encode(message.title, writer.uint32(26).fork()).ldelim();
        }
        if (message.chart !== undefined) {
            chart_widget_1.ChartWidget.encode(message.chart, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWidget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.position = exports.Widget_LayoutPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = text_widget_1.TextWidget.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.title = title_widget_1.TitleWidget.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.chart = chart_widget_1.ChartWidget.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWidget);
        message.position =
            object.position !== undefined && object.position !== null
                ? exports.Widget_LayoutPosition.fromJSON(object.position)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? text_widget_1.TextWidget.fromJSON(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? title_widget_1.TitleWidget.fromJSON(object.title)
                : undefined;
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? chart_widget_1.ChartWidget.fromJSON(object.chart)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined &&
            (obj.position = message.position
                ? exports.Widget_LayoutPosition.toJSON(message.position)
                : undefined);
        message.text !== undefined &&
            (obj.text = message.text ? text_widget_1.TextWidget.toJSON(message.text) : undefined);
        message.title !== undefined &&
            (obj.title = message.title
                ? title_widget_1.TitleWidget.toJSON(message.title)
                : undefined);
        message.chart !== undefined &&
            (obj.chart = message.chart
                ? chart_widget_1.ChartWidget.toJSON(message.chart)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseWidget);
        message.position =
            object.position !== undefined && object.position !== null
                ? exports.Widget_LayoutPosition.fromPartial(object.position)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? text_widget_1.TextWidget.fromPartial(object.text)
                : undefined;
        message.title =
            object.title !== undefined && object.title !== null
                ? title_widget_1.TitleWidget.fromPartial(object.title)
                : undefined;
        message.chart =
            object.chart !== undefined && object.chart !== null
                ? chart_widget_1.ChartWidget.fromPartial(object.chart)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Widget.$type, exports.Widget);
const baseWidget_LayoutPosition = {
    $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition",
    x: 0,
    y: 0,
    w: 0,
    h: 0,
};
exports.Widget_LayoutPosition = {
    $type: "yandex.cloud.monitoring.v3.Widget.LayoutPosition",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        if (message.w !== 0) {
            writer.uint32(24).int64(message.w);
        }
        if (message.h !== 0) {
            writer.uint32(32).int64(message.h);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWidget_LayoutPosition);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = longToNumber(reader.int64());
                    break;
                case 2:
                    message.y = longToNumber(reader.int64());
                    break;
                case 3:
                    message.w = longToNumber(reader.int64());
                    break;
                case 4:
                    message.h = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWidget_LayoutPosition);
        message.x =
            object.x !== undefined && object.x !== null ? Number(object.x) : 0;
        message.y =
            object.y !== undefined && object.y !== null ? Number(object.y) : 0;
        message.w =
            object.w !== undefined && object.w !== null ? Number(object.w) : 0;
        message.h =
            object.h !== undefined && object.h !== null ? Number(object.h) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = Math.round(message.x));
        message.y !== undefined && (obj.y = Math.round(message.y));
        message.w !== undefined && (obj.w = Math.round(message.w));
        message.h !== undefined && (obj.h = Math.round(message.h));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseWidget_LayoutPosition);
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.w = (_c = object.w) !== null && _c !== void 0 ? _c : 0;
        message.h = (_d = object.h) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Widget_LayoutPosition.$type, exports.Widget_LayoutPosition);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
