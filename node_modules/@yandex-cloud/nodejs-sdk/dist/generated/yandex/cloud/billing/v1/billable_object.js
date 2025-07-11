"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillableObjectBinding = exports.BillableObject = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseBillableObject = {
    $type: "yandex.cloud.billing.v1.BillableObject",
    id: "",
    type: "",
};
exports.BillableObject = {
    $type: "yandex.cloud.billing.v1.BillableObject",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBillableObject);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBillableObject);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseBillableObject);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BillableObject.$type, exports.BillableObject);
const baseBillableObjectBinding = {
    $type: "yandex.cloud.billing.v1.BillableObjectBinding",
};
exports.BillableObjectBinding = {
    $type: "yandex.cloud.billing.v1.BillableObjectBinding",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.billableObject !== undefined) {
            exports.BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBillableObjectBinding);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.billableObject = exports.BillableObject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBillableObjectBinding);
        message.effectiveTime =
            object.effectiveTime !== undefined && object.effectiveTime !== null
                ? fromJsonTimestamp(object.effectiveTime)
                : undefined;
        message.billableObject =
            object.billableObject !== undefined && object.billableObject !== null
                ? exports.BillableObject.fromJSON(object.billableObject)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        message.billableObject !== undefined &&
            (obj.billableObject = message.billableObject
                ? exports.BillableObject.toJSON(message.billableObject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseBillableObjectBinding);
        message.effectiveTime = (_a = object.effectiveTime) !== null && _a !== void 0 ? _a : undefined;
        message.billableObject =
            object.billableObject !== undefined && object.billableObject !== null
                ? exports.BillableObject.fromPartial(object.billableObject)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BillableObjectBinding.$type, exports.BillableObjectBinding);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
