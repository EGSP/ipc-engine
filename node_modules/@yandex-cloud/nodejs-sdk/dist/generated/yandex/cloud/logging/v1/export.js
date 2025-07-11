"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportParams = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const log_entry_1 = require("../../../../yandex/cloud/logging/v1/log_entry");
exports.protobufPackage = "yandex.cloud.logging.v1";
const baseExportParams = {
    $type: "yandex.cloud.logging.v1.ExportParams",
    resourceTypes: "",
    resourceIds: "",
    streamNames: "",
    levels: 0,
    filter: "",
};
exports.ExportParams = {
    $type: "yandex.cloud.logging.v1.ExportParams",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resourceTypes) {
            writer.uint32(10).string(v);
        }
        for (const v of message.resourceIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.streamNames) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.levels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.filter !== "") {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExportParams);
        message.resourceTypes = [];
        message.resourceIds = [];
        message.streamNames = [];
        message.levels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceTypes.push(reader.string());
                    break;
                case 2:
                    message.resourceIds.push(reader.string());
                    break;
                case 3:
                    message.streamNames.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.levels.push(reader.int32());
                        }
                    }
                    else {
                        message.levels.push(reader.int32());
                    }
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseExportParams);
        message.resourceTypes = ((_a = object.resourceTypes) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.resourceIds = ((_b = object.resourceIds) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.streamNames = ((_c = object.streamNames) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.levels = ((_d = object.levels) !== null && _d !== void 0 ? _d : []).map((e) => (0, log_entry_1.logLevel_LevelFromJSON)(e));
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? String(object.filter)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceTypes) {
            obj.resourceTypes = message.resourceTypes.map((e) => e);
        }
        else {
            obj.resourceTypes = [];
        }
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        }
        else {
            obj.resourceIds = [];
        }
        if (message.streamNames) {
            obj.streamNames = message.streamNames.map((e) => e);
        }
        else {
            obj.streamNames = [];
        }
        if (message.levels) {
            obj.levels = message.levels.map((e) => (0, log_entry_1.logLevel_LevelToJSON)(e));
        }
        else {
            obj.levels = [];
        }
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseExportParams);
        message.resourceTypes = ((_a = object.resourceTypes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.resourceIds = ((_b = object.resourceIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.streamNames = ((_c = object.streamNames) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.levels = ((_d = object.levels) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.filter = (_e = object.filter) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExportParams.$type, exports.ExportParams);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
