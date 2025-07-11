"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionPlacementStrategy = exports.SpreadPlacementStrategy = exports.PlacementGroup_LabelsEntry = exports.PlacementGroup = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.compute.v1";
const basePlacementGroup = {
    $type: "yandex.cloud.compute.v1.PlacementGroup",
    id: "",
    folderId: "",
    name: "",
    description: "",
};
exports.PlacementGroup = {
    $type: "yandex.cloud.compute.v1.PlacementGroup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== "") {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.PlacementGroup_LabelsEntry.encode({
                $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.spreadPlacementStrategy !== undefined) {
            exports.SpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(58).fork()).ldelim();
        }
        if (message.partitionPlacementStrategy !== undefined) {
            exports.PartitionPlacementStrategy.encode(message.partitionPlacementStrategy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementGroup);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.PlacementGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.spreadPlacementStrategy = exports.SpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.partitionPlacementStrategy =
                        exports.PartitionPlacementStrategy.decode(reader, reader.uint32());
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
        const message = Object.assign({}, basePlacementGroup);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? exports.SpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? exports.PartitionPlacementStrategy.fromJSON(object.partitionPlacementStrategy)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? exports.SpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
                : undefined);
        message.partitionPlacementStrategy !== undefined &&
            (obj.partitionPlacementStrategy = message.partitionPlacementStrategy
                ? exports.PartitionPlacementStrategy.toJSON(message.partitionPlacementStrategy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, basePlacementGroup);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.folderId = (_b = object.folderId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.labels = Object.entries((_f = object.labels) !== null && _f !== void 0 ? _f : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.spreadPlacementStrategy =
            object.spreadPlacementStrategy !== undefined &&
                object.spreadPlacementStrategy !== null
                ? exports.SpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy)
                : undefined;
        message.partitionPlacementStrategy =
            object.partitionPlacementStrategy !== undefined &&
                object.partitionPlacementStrategy !== null
                ? exports.PartitionPlacementStrategy.fromPartial(object.partitionPlacementStrategy)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementGroup.$type, exports.PlacementGroup);
const basePlacementGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.PlacementGroup_LabelsEntry = {
    $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePlacementGroup_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePlacementGroup_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePlacementGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PlacementGroup_LabelsEntry.$type, exports.PlacementGroup_LabelsEntry);
const baseSpreadPlacementStrategy = {
    $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy",
};
exports.SpreadPlacementStrategy = {
    $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSpreadPlacementStrategy);
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
        const message = Object.assign({}, baseSpreadPlacementStrategy);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseSpreadPlacementStrategy);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SpreadPlacementStrategy.$type, exports.SpreadPlacementStrategy);
const basePartitionPlacementStrategy = {
    $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy",
    partitions: 0,
};
exports.PartitionPlacementStrategy = {
    $type: "yandex.cloud.compute.v1.PartitionPlacementStrategy",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.partitions !== 0) {
            writer.uint32(8).int64(message.partitions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePartitionPlacementStrategy);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partitions = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePartitionPlacementStrategy);
        message.partitions =
            object.partitions !== undefined && object.partitions !== null
                ? Number(object.partitions)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.partitions !== undefined &&
            (obj.partitions = Math.round(message.partitions));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePartitionPlacementStrategy);
        message.partitions = (_a = object.partitions) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PartitionPlacementStrategy.$type, exports.PartitionPlacementStrategy);
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
