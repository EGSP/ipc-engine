"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parametrization = exports.Parameter = exports.TextValuesParameter = exports.IntegerParameter = exports.DoubleParameter = exports.TextParameter = exports.CustomParameter = exports.LabelValuesParameter = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const unit_format_1 = require("../../../../yandex/cloud/monitoring/v3/unit_format");
exports.protobufPackage = "yandex.cloud.monitoring.v3";
const baseLabelValuesParameter = {
    $type: "yandex.cloud.monitoring.v3.LabelValuesParameter",
    selectors: "",
    labelKey: "",
    multiselectable: false,
    defaultValues: "",
};
exports.LabelValuesParameter = {
    $type: "yandex.cloud.monitoring.v3.LabelValuesParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.selectors !== "") {
            writer.uint32(154).string(message.selectors);
        }
        if (message.labelKey !== "") {
            writer.uint32(162).string(message.labelKey);
        }
        if (message.multiselectable === true) {
            writer.uint32(168).bool(message.multiselectable);
        }
        for (const v of message.defaultValues) {
            writer.uint32(178).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLabelValuesParameter);
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.folderId = reader.string();
                    break;
                case 19:
                    message.selectors = reader.string();
                    break;
                case 20:
                    message.labelKey = reader.string();
                    break;
                case 21:
                    message.multiselectable = reader.bool();
                    break;
                case 22:
                    message.defaultValues.push(reader.string());
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
        const message = Object.assign({}, baseLabelValuesParameter);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : undefined;
        message.selectors =
            object.selectors !== undefined && object.selectors !== null
                ? String(object.selectors)
                : "";
        message.labelKey =
            object.labelKey !== undefined && object.labelKey !== null
                ? String(object.labelKey)
                : "";
        message.multiselectable =
            object.multiselectable !== undefined && object.multiselectable !== null
                ? Boolean(object.multiselectable)
                : false;
        message.defaultValues = ((_a = object.defaultValues) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.selectors !== undefined && (obj.selectors = message.selectors);
        message.labelKey !== undefined && (obj.labelKey = message.labelKey);
        message.multiselectable !== undefined &&
            (obj.multiselectable = message.multiselectable);
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        }
        else {
            obj.defaultValues = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseLabelValuesParameter);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : undefined;
        message.selectors = (_b = object.selectors) !== null && _b !== void 0 ? _b : "";
        message.labelKey = (_c = object.labelKey) !== null && _c !== void 0 ? _c : "";
        message.multiselectable = (_d = object.multiselectable) !== null && _d !== void 0 ? _d : false;
        message.defaultValues = ((_e = object.defaultValues) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LabelValuesParameter.$type, exports.LabelValuesParameter);
const baseCustomParameter = {
    $type: "yandex.cloud.monitoring.v3.CustomParameter",
    values: "",
    multiselectable: false,
    defaultValues: "",
};
exports.CustomParameter = {
    $type: "yandex.cloud.monitoring.v3.CustomParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            writer.uint32(10).string(v);
        }
        if (message.multiselectable === true) {
            writer.uint32(16).bool(message.multiselectable);
        }
        for (const v of message.defaultValues) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCustomParameter);
        message.values = [];
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(reader.string());
                    break;
                case 2:
                    message.multiselectable = reader.bool();
                    break;
                case 3:
                    message.defaultValues.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseCustomParameter);
        message.values = ((_a = object.values) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.multiselectable =
            object.multiselectable !== undefined && object.multiselectable !== null
                ? Boolean(object.multiselectable)
                : false;
        message.defaultValues = ((_b = object.defaultValues) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        message.multiselectable !== undefined &&
            (obj.multiselectable = message.multiselectable);
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        }
        else {
            obj.defaultValues = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseCustomParameter);
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.multiselectable = (_b = object.multiselectable) !== null && _b !== void 0 ? _b : false;
        message.defaultValues = ((_c = object.defaultValues) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CustomParameter.$type, exports.CustomParameter);
const baseTextParameter = {
    $type: "yandex.cloud.monitoring.v3.TextParameter",
    defaultValue: "",
};
exports.TextParameter = {
    $type: "yandex.cloud.monitoring.v3.TextParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultValue !== "") {
            writer.uint32(10).string(message.defaultValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTextParameter);
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? String(object.defaultValue)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined &&
            (obj.defaultValue = message.defaultValue);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTextParameter);
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextParameter.$type, exports.TextParameter);
const baseDoubleParameter = {
    $type: "yandex.cloud.monitoring.v3.DoubleParameter",
    defaultValue: 0,
    unitFormat: 0,
};
exports.DoubleParameter = {
    $type: "yandex.cloud.monitoring.v3.DoubleParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultValue !== 0) {
            writer.uint32(9).double(message.defaultValue);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(16).int32(message.unitFormat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDoubleParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = reader.double();
                    break;
                case 2:
                    message.unitFormat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDoubleParameter);
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : 0;
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? (0, unit_format_1.unitFormatFromJSON)(object.unitFormat)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined &&
            (obj.defaultValue = message.defaultValue);
        message.unitFormat !== undefined &&
            (obj.unitFormat = (0, unit_format_1.unitFormatToJSON)(message.unitFormat));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDoubleParameter);
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : 0;
        message.unitFormat = (_b = object.unitFormat) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DoubleParameter.$type, exports.DoubleParameter);
const baseIntegerParameter = {
    $type: "yandex.cloud.monitoring.v3.IntegerParameter",
    defaultValue: 0,
    unitFormat: 0,
};
exports.IntegerParameter = {
    $type: "yandex.cloud.monitoring.v3.IntegerParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultValue !== 0) {
            writer.uint32(8).int64(message.defaultValue);
        }
        if (message.unitFormat !== 0) {
            writer.uint32(16).int32(message.unitFormat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseIntegerParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValue = longToNumber(reader.int64());
                    break;
                case 2:
                    message.unitFormat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseIntegerParameter);
        message.defaultValue =
            object.defaultValue !== undefined && object.defaultValue !== null
                ? Number(object.defaultValue)
                : 0;
        message.unitFormat =
            object.unitFormat !== undefined && object.unitFormat !== null
                ? (0, unit_format_1.unitFormatFromJSON)(object.unitFormat)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultValue !== undefined &&
            (obj.defaultValue = Math.round(message.defaultValue));
        message.unitFormat !== undefined &&
            (obj.unitFormat = (0, unit_format_1.unitFormatToJSON)(message.unitFormat));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseIntegerParameter);
        message.defaultValue = (_a = object.defaultValue) !== null && _a !== void 0 ? _a : 0;
        message.unitFormat = (_b = object.unitFormat) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IntegerParameter.$type, exports.IntegerParameter);
const baseTextValuesParameter = {
    $type: "yandex.cloud.monitoring.v3.TextValuesParameter",
    defaultValues: "",
};
exports.TextValuesParameter = {
    $type: "yandex.cloud.monitoring.v3.TextValuesParameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.defaultValues) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextValuesParameter);
        message.defaultValues = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultValues.push(reader.string());
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
        const message = Object.assign({}, baseTextValuesParameter);
        message.defaultValues = ((_a = object.defaultValues) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.defaultValues) {
            obj.defaultValues = message.defaultValues.map((e) => e);
        }
        else {
            obj.defaultValues = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTextValuesParameter);
        message.defaultValues = ((_a = object.defaultValues) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextValuesParameter.$type, exports.TextValuesParameter);
const baseParameter = {
    $type: "yandex.cloud.monitoring.v3.Parameter",
    name: "",
    title: "",
    hidden: false,
    description: "",
};
exports.Parameter = {
    $type: "yandex.cloud.monitoring.v3.Parameter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.labelValues !== undefined) {
            exports.LabelValuesParameter.encode(message.labelValues, writer.uint32(26).fork()).ldelim();
        }
        if (message.custom !== undefined) {
            exports.CustomParameter.encode(message.custom, writer.uint32(34).fork()).ldelim();
        }
        if (message.text !== undefined) {
            exports.TextParameter.encode(message.text, writer.uint32(42).fork()).ldelim();
        }
        if (message.integerParameter !== undefined) {
            exports.IntegerParameter.encode(message.integerParameter, writer.uint32(58).fork()).ldelim();
        }
        if (message.doubleParameter !== undefined) {
            exports.DoubleParameter.encode(message.doubleParameter, writer.uint32(66).fork()).ldelim();
        }
        if (message.textValues !== undefined) {
            exports.TextValuesParameter.encode(message.textValues, writer.uint32(74).fork()).ldelim();
        }
        if (message.hidden === true) {
            writer.uint32(48).bool(message.hidden);
        }
        if (message.description !== "") {
            writer.uint32(82).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParameter);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.labelValues = exports.LabelValuesParameter.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.custom = exports.CustomParameter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.text = exports.TextParameter.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.integerParameter = exports.IntegerParameter.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.doubleParameter = exports.DoubleParameter.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.textValues = exports.TextValuesParameter.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.hidden = reader.bool();
                    break;
                case 10:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseParameter);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.labelValues =
            object.labelValues !== undefined && object.labelValues !== null
                ? exports.LabelValuesParameter.fromJSON(object.labelValues)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? exports.CustomParameter.fromJSON(object.custom)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? exports.TextParameter.fromJSON(object.text)
                : undefined;
        message.integerParameter =
            object.integerParameter !== undefined && object.integerParameter !== null
                ? exports.IntegerParameter.fromJSON(object.integerParameter)
                : undefined;
        message.doubleParameter =
            object.doubleParameter !== undefined && object.doubleParameter !== null
                ? exports.DoubleParameter.fromJSON(object.doubleParameter)
                : undefined;
        message.textValues =
            object.textValues !== undefined && object.textValues !== null
                ? exports.TextValuesParameter.fromJSON(object.textValues)
                : undefined;
        message.hidden =
            object.hidden !== undefined && object.hidden !== null
                ? Boolean(object.hidden)
                : false;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.title !== undefined && (obj.title = message.title);
        message.labelValues !== undefined &&
            (obj.labelValues = message.labelValues
                ? exports.LabelValuesParameter.toJSON(message.labelValues)
                : undefined);
        message.custom !== undefined &&
            (obj.custom = message.custom
                ? exports.CustomParameter.toJSON(message.custom)
                : undefined);
        message.text !== undefined &&
            (obj.text = message.text
                ? exports.TextParameter.toJSON(message.text)
                : undefined);
        message.integerParameter !== undefined &&
            (obj.integerParameter = message.integerParameter
                ? exports.IntegerParameter.toJSON(message.integerParameter)
                : undefined);
        message.doubleParameter !== undefined &&
            (obj.doubleParameter = message.doubleParameter
                ? exports.DoubleParameter.toJSON(message.doubleParameter)
                : undefined);
        message.textValues !== undefined &&
            (obj.textValues = message.textValues
                ? exports.TextValuesParameter.toJSON(message.textValues)
                : undefined);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseParameter);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : "";
        message.labelValues =
            object.labelValues !== undefined && object.labelValues !== null
                ? exports.LabelValuesParameter.fromPartial(object.labelValues)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? exports.CustomParameter.fromPartial(object.custom)
                : undefined;
        message.text =
            object.text !== undefined && object.text !== null
                ? exports.TextParameter.fromPartial(object.text)
                : undefined;
        message.integerParameter =
            object.integerParameter !== undefined && object.integerParameter !== null
                ? exports.IntegerParameter.fromPartial(object.integerParameter)
                : undefined;
        message.doubleParameter =
            object.doubleParameter !== undefined && object.doubleParameter !== null
                ? exports.DoubleParameter.fromPartial(object.doubleParameter)
                : undefined;
        message.textValues =
            object.textValues !== undefined && object.textValues !== null
                ? exports.TextValuesParameter.fromPartial(object.textValues)
                : undefined;
        message.hidden = (_c = object.hidden) !== null && _c !== void 0 ? _c : false;
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Parameter.$type, exports.Parameter);
const baseParametrization = {
    $type: "yandex.cloud.monitoring.v3.Parametrization",
    selectors: "",
};
exports.Parametrization = {
    $type: "yandex.cloud.monitoring.v3.Parametrization",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.parameters) {
            exports.Parameter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.selectors !== "") {
            writer.uint32(18).string(message.selectors);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParametrization);
        message.parameters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.parameters.push(exports.Parameter.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.selectors = reader.string();
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
        const message = Object.assign({}, baseParametrization);
        message.parameters = ((_a = object.parameters) !== null && _a !== void 0 ? _a : []).map((e) => exports.Parameter.fromJSON(e));
        message.selectors =
            object.selectors !== undefined && object.selectors !== null
                ? String(object.selectors)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.parameters) {
            obj.parameters = message.parameters.map((e) => e ? exports.Parameter.toJSON(e) : undefined);
        }
        else {
            obj.parameters = [];
        }
        message.selectors !== undefined && (obj.selectors = message.selectors);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseParametrization);
        message.parameters =
            ((_a = object.parameters) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Parameter.fromPartial(e))) || [];
        message.selectors = (_b = object.selectors) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Parametrization.$type, exports.Parametrization);
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
