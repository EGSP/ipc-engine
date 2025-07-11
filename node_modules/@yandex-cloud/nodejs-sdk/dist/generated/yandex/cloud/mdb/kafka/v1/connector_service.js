"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorServiceClient = exports.ConnectorServiceService = exports.PauseConnectorMetadata = exports.PauseConnectorRequest = exports.ResumeConnectorMetadata = exports.ResumeConnectorRequest = exports.DeleteConnectorMetadata = exports.DeleteConnectorRequest = exports.UpdateConnectorMetadata = exports.UpdateConnectorRequest = exports.CreateConnectorMetadata = exports.CreateConnectorRequest = exports.ListConnectorsResponse = exports.ListConnectorsRequest = exports.GetConnectorRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const connector_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/connector");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.mdb.kafka.v1";
const baseGetConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest",
    clusterId: "",
    connectorName: "",
};
exports.GetConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetConnectorRequest.$type, exports.GetConnectorRequest);
const baseListConnectorsRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest",
    clusterId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListConnectorsRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListConnectorsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListConnectorsRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListConnectorsRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListConnectorsRequest.$type, exports.ListConnectorsRequest);
const baseListConnectorsResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse",
    nextPageToken: "",
};
exports.ListConnectorsResponse = {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.connectors) {
            connector_1.Connector.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListConnectorsResponse);
        message.connectors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectors.push(connector_1.Connector.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
        const message = Object.assign({}, baseListConnectorsResponse);
        message.connectors = ((_a = object.connectors) !== null && _a !== void 0 ? _a : []).map((e) => connector_1.Connector.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.connectors) {
            obj.connectors = message.connectors.map((e) => e ? connector_1.Connector.toJSON(e) : undefined);
        }
        else {
            obj.connectors = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListConnectorsResponse);
        message.connectors =
            ((_a = object.connectors) === null || _a === void 0 ? void 0 : _a.map((e) => connector_1.Connector.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListConnectorsResponse.$type, exports.ListConnectorsResponse);
const baseCreateConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest",
    clusterId: "",
};
exports.CreateConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorSpec !== undefined) {
            connector_1.ConnectorSpec.encode(message.connectorSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorSpec = connector_1.ConnectorSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? connector_1.ConnectorSpec.fromJSON(object.connectorSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? connector_1.ConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? connector_1.ConnectorSpec.fromPartial(object.connectorSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateConnectorRequest.$type, exports.CreateConnectorRequest);
const baseCreateConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata",
    clusterId: "",
    connectorName: "",
};
exports.CreateConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateConnectorMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateConnectorMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateConnectorMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateConnectorMetadata.$type, exports.CreateConnectorMetadata);
const baseUpdateConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest",
    clusterId: "",
    connectorName: "",
};
exports.UpdateConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.connectorSpec !== undefined) {
            connector_1.UpdateConnectorSpec.encode(message.connectorSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectorSpec = connector_1.UpdateConnectorSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? connector_1.UpdateConnectorSpec.fromJSON(object.connectorSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.connectorSpec !== undefined &&
            (obj.connectorSpec = message.connectorSpec
                ? connector_1.UpdateConnectorSpec.toJSON(message.connectorSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.connectorSpec =
            object.connectorSpec !== undefined && object.connectorSpec !== null
                ? connector_1.UpdateConnectorSpec.fromPartial(object.connectorSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateConnectorRequest.$type, exports.UpdateConnectorRequest);
const baseUpdateConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata",
    clusterId: "",
    connectorName: "",
};
exports.UpdateConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateConnectorMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateConnectorMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateConnectorMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateConnectorMetadata.$type, exports.UpdateConnectorMetadata);
const baseDeleteConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest",
    clusterId: "",
    connectorName: "",
};
exports.DeleteConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteConnectorRequest.$type, exports.DeleteConnectorRequest);
const baseDeleteConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata",
    clusterId: "",
    connectorName: "",
};
exports.DeleteConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteConnectorMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteConnectorMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDeleteConnectorMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteConnectorMetadata.$type, exports.DeleteConnectorMetadata);
const baseResumeConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest",
    clusterId: "",
    connectorName: "",
};
exports.ResumeConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResumeConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeConnectorRequest.$type, exports.ResumeConnectorRequest);
const baseResumeConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata",
    clusterId: "",
    connectorName: "",
};
exports.ResumeConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseResumeConnectorMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseResumeConnectorMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseResumeConnectorMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResumeConnectorMetadata.$type, exports.ResumeConnectorMetadata);
const basePauseConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest",
    clusterId: "",
    connectorName: "",
};
exports.PauseConnectorRequest = {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseConnectorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseConnectorRequest);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePauseConnectorRequest);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseConnectorRequest.$type, exports.PauseConnectorRequest);
const basePauseConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata",
    clusterId: "",
    connectorName: "",
};
exports.PauseConnectorMetadata = {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== "") {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.connectorName !== "") {
            writer.uint32(18).string(message.connectorName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePauseConnectorMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.connectorName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePauseConnectorMetadata);
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.connectorName =
            object.connectorName !== undefined && object.connectorName !== null
                ? String(object.connectorName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorName !== undefined &&
            (obj.connectorName = message.connectorName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePauseConnectorMetadata);
        message.clusterId = (_a = object.clusterId) !== null && _a !== void 0 ? _a : "";
        message.connectorName = (_b = object.connectorName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PauseConnectorMetadata.$type, exports.PauseConnectorMetadata);
/** A set of methods for managing Apache Kafka® connectors. */
exports.ConnectorServiceService = {
    /** Returns information about an Apache Kafka® connector. */
    get: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(connector_1.Connector.encode(value).finish()),
        responseDeserialize: (value) => connector_1.Connector.decode(value),
    },
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListConnectorsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListConnectorsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListConnectorsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListConnectorsResponse.decode(value),
    },
    /** Creates a new Apache Kafka® connector in a cluster. */
    create: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates an Apache Kafka® connector. */
    update: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes an Apache Kafka® connector. */
    delete: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Resumes an Apache Kafka® connector. */
    resume: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResumeConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResumeConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Pauses an Apache Kafka® connector. */
    pause: {
        path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PauseConnectorRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PauseConnectorRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ConnectorServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ConnectorServiceService, "yandex.cloud.mdb.kafka.v1.ConnectorService");
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
