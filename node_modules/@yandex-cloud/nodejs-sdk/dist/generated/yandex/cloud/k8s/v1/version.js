"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVersionSpec = exports.VersionInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.k8s.v1";
const baseVersionInfo = {
    $type: "yandex.cloud.k8s.v1.VersionInfo",
    currentVersion: "",
    newRevisionAvailable: false,
    newRevisionSummary: "",
    versionDeprecated: false,
};
exports.VersionInfo = {
    $type: "yandex.cloud.k8s.v1.VersionInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currentVersion !== "") {
            writer.uint32(10).string(message.currentVersion);
        }
        if (message.newRevisionAvailable === true) {
            writer.uint32(16).bool(message.newRevisionAvailable);
        }
        if (message.newRevisionSummary !== "") {
            writer.uint32(26).string(message.newRevisionSummary);
        }
        if (message.versionDeprecated === true) {
            writer.uint32(32).bool(message.versionDeprecated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersionInfo);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentVersion = reader.string();
                    break;
                case 2:
                    message.newRevisionAvailable = reader.bool();
                    break;
                case 3:
                    message.newRevisionSummary = reader.string();
                    break;
                case 4:
                    message.versionDeprecated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersionInfo);
        message.currentVersion =
            object.currentVersion !== undefined && object.currentVersion !== null
                ? String(object.currentVersion)
                : "";
        message.newRevisionAvailable =
            object.newRevisionAvailable !== undefined &&
                object.newRevisionAvailable !== null
                ? Boolean(object.newRevisionAvailable)
                : false;
        message.newRevisionSummary =
            object.newRevisionSummary !== undefined &&
                object.newRevisionSummary !== null
                ? String(object.newRevisionSummary)
                : "";
        message.versionDeprecated =
            object.versionDeprecated !== undefined &&
                object.versionDeprecated !== null
                ? Boolean(object.versionDeprecated)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.currentVersion !== undefined &&
            (obj.currentVersion = message.currentVersion);
        message.newRevisionAvailable !== undefined &&
            (obj.newRevisionAvailable = message.newRevisionAvailable);
        message.newRevisionSummary !== undefined &&
            (obj.newRevisionSummary = message.newRevisionSummary);
        message.versionDeprecated !== undefined &&
            (obj.versionDeprecated = message.versionDeprecated);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseVersionInfo);
        message.currentVersion = (_a = object.currentVersion) !== null && _a !== void 0 ? _a : "";
        message.newRevisionAvailable = (_b = object.newRevisionAvailable) !== null && _b !== void 0 ? _b : false;
        message.newRevisionSummary = (_c = object.newRevisionSummary) !== null && _c !== void 0 ? _c : "";
        message.versionDeprecated = (_d = object.versionDeprecated) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.VersionInfo.$type, exports.VersionInfo);
const baseUpdateVersionSpec = {
    $type: "yandex.cloud.k8s.v1.UpdateVersionSpec",
};
exports.UpdateVersionSpec = {
    $type: "yandex.cloud.k8s.v1.UpdateVersionSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            writer.uint32(10).string(message.version);
        }
        if (message.latestRevision !== undefined) {
            writer.uint32(16).bool(message.latestRevision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateVersionSpec);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.latestRevision = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateVersionSpec);
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : undefined;
        message.latestRevision =
            object.latestRevision !== undefined && object.latestRevision !== null
                ? Boolean(object.latestRevision)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.latestRevision !== undefined &&
            (obj.latestRevision = message.latestRevision);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateVersionSpec);
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : undefined;
        message.latestRevision = (_b = object.latestRevision) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateVersionSpec.$type, exports.UpdateVersionSpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
