"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidrBlocks = exports.PortRange = exports.SecurityGroupRule_LabelsEntry = exports.SecurityGroupRule = exports.SecurityGroup_LabelsEntry = exports.SecurityGroup = exports.securityGroupRule_DirectionToJSON = exports.securityGroupRule_DirectionFromJSON = exports.SecurityGroupRule_Direction = exports.securityGroup_StatusToJSON = exports.securityGroup_StatusFromJSON = exports.SecurityGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.vpc.v1";
var SecurityGroup_Status;
(function (SecurityGroup_Status) {
    SecurityGroup_Status[SecurityGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    SecurityGroup_Status[SecurityGroup_Status["CREATING"] = 1] = "CREATING";
    SecurityGroup_Status[SecurityGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /** UPDATING - updating is a long operation because we must update all instances in SG */
    SecurityGroup_Status[SecurityGroup_Status["UPDATING"] = 3] = "UPDATING";
    SecurityGroup_Status[SecurityGroup_Status["DELETING"] = 4] = "DELETING";
    SecurityGroup_Status[SecurityGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityGroup_Status = exports.SecurityGroup_Status || (exports.SecurityGroup_Status = {}));
function securityGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return SecurityGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return SecurityGroup_Status.CREATING;
        case 2:
        case "ACTIVE":
            return SecurityGroup_Status.ACTIVE;
        case 3:
        case "UPDATING":
            return SecurityGroup_Status.UPDATING;
        case 4:
        case "DELETING":
            return SecurityGroup_Status.DELETING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityGroup_Status.UNRECOGNIZED;
    }
}
exports.securityGroup_StatusFromJSON = securityGroup_StatusFromJSON;
function securityGroup_StatusToJSON(object) {
    switch (object) {
        case SecurityGroup_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case SecurityGroup_Status.CREATING:
            return "CREATING";
        case SecurityGroup_Status.ACTIVE:
            return "ACTIVE";
        case SecurityGroup_Status.UPDATING:
            return "UPDATING";
        case SecurityGroup_Status.DELETING:
            return "DELETING";
        default:
            return "UNKNOWN";
    }
}
exports.securityGroup_StatusToJSON = securityGroup_StatusToJSON;
var SecurityGroupRule_Direction;
(function (SecurityGroupRule_Direction) {
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["DIRECTION_UNSPECIFIED"] = 0] = "DIRECTION_UNSPECIFIED";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["INGRESS"] = 1] = "INGRESS";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["EGRESS"] = 2] = "EGRESS";
    SecurityGroupRule_Direction[SecurityGroupRule_Direction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityGroupRule_Direction = exports.SecurityGroupRule_Direction || (exports.SecurityGroupRule_Direction = {}));
function securityGroupRule_DirectionFromJSON(object) {
    switch (object) {
        case 0:
        case "DIRECTION_UNSPECIFIED":
            return SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED;
        case 1:
        case "INGRESS":
            return SecurityGroupRule_Direction.INGRESS;
        case 2:
        case "EGRESS":
            return SecurityGroupRule_Direction.EGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityGroupRule_Direction.UNRECOGNIZED;
    }
}
exports.securityGroupRule_DirectionFromJSON = securityGroupRule_DirectionFromJSON;
function securityGroupRule_DirectionToJSON(object) {
    switch (object) {
        case SecurityGroupRule_Direction.DIRECTION_UNSPECIFIED:
            return "DIRECTION_UNSPECIFIED";
        case SecurityGroupRule_Direction.INGRESS:
            return "INGRESS";
        case SecurityGroupRule_Direction.EGRESS:
            return "EGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.securityGroupRule_DirectionToJSON = securityGroupRule_DirectionToJSON;
const baseSecurityGroup = {
    $type: "yandex.cloud.vpc.v1.SecurityGroup",
    id: "",
    folderId: "",
    name: "",
    description: "",
    networkId: "",
    status: 0,
    defaultForNetwork: false,
};
exports.SecurityGroup = {
    $type: "yandex.cloud.vpc.v1.SecurityGroup",
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
            exports.SecurityGroup_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.networkId !== "") {
            writer.uint32(58).string(message.networkId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        for (const v of message.rules) {
            exports.SecurityGroupRule.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.defaultForNetwork === true) {
            writer.uint32(80).bool(message.defaultForNetwork);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecurityGroup);
        message.labels = {};
        message.rules = [];
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
                    const entry6 = exports.SecurityGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.rules.push(exports.SecurityGroupRule.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.defaultForNetwork = reader.bool();
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
        const message = Object.assign({}, baseSecurityGroup);
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
        message.networkId =
            object.networkId !== undefined && object.networkId !== null
                ? String(object.networkId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? securityGroup_StatusFromJSON(object.status)
                : 0;
        message.rules = ((_b = object.rules) !== null && _b !== void 0 ? _b : []).map((e) => exports.SecurityGroupRule.fromJSON(e));
        message.defaultForNetwork =
            object.defaultForNetwork !== undefined &&
                object.defaultForNetwork !== null
                ? Boolean(object.defaultForNetwork)
                : false;
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.status !== undefined &&
            (obj.status = securityGroup_StatusToJSON(message.status));
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? exports.SecurityGroupRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.defaultForNetwork !== undefined &&
            (obj.defaultForNetwork = message.defaultForNetwork);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseSecurityGroup);
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
        message.networkId = (_g = object.networkId) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.rules =
            ((_j = object.rules) === null || _j === void 0 ? void 0 : _j.map((e) => exports.SecurityGroupRule.fromPartial(e))) || [];
        message.defaultForNetwork = (_k = object.defaultForNetwork) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroup.$type, exports.SecurityGroup);
const baseSecurityGroup_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry",
    key: "",
    value: "",
};
exports.SecurityGroup_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroup.LabelsEntry",
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
        const message = Object.assign({}, baseSecurityGroup_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroup_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroup_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroup_LabelsEntry.$type, exports.SecurityGroup_LabelsEntry);
const baseSecurityGroupRule = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule",
    id: "",
    description: "",
    direction: 0,
    protocolName: "",
    protocolNumber: 0,
};
exports.SecurityGroupRule = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.SecurityGroupRule_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.ports !== undefined) {
            exports.PortRange.encode(message.ports, writer.uint32(42).fork()).ldelim();
        }
        if (message.protocolName !== "") {
            writer.uint32(50).string(message.protocolName);
        }
        if (message.protocolNumber !== 0) {
            writer.uint32(56).int64(message.protocolNumber);
        }
        if (message.cidrBlocks !== undefined) {
            exports.CidrBlocks.encode(message.cidrBlocks, writer.uint32(66).fork()).ldelim();
        }
        if (message.securityGroupId !== undefined) {
            writer.uint32(74).string(message.securityGroupId);
        }
        if (message.predefinedTarget !== undefined) {
            writer.uint32(82).string(message.predefinedTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecurityGroupRule);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    const entry3 = exports.SecurityGroupRule_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.ports = exports.PortRange.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.protocolName = reader.string();
                    break;
                case 7:
                    message.protocolNumber = longToNumber(reader.int64());
                    break;
                case 8:
                    message.cidrBlocks = exports.CidrBlocks.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.securityGroupId = reader.string();
                    break;
                case 10:
                    message.predefinedTarget = reader.string();
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
        const message = Object.assign({}, baseSecurityGroupRule);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.direction =
            object.direction !== undefined && object.direction !== null
                ? securityGroupRule_DirectionFromJSON(object.direction)
                : 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? exports.PortRange.fromJSON(object.ports)
                : undefined;
        message.protocolName =
            object.protocolName !== undefined && object.protocolName !== null
                ? String(object.protocolName)
                : "";
        message.protocolNumber =
            object.protocolNumber !== undefined && object.protocolNumber !== null
                ? Number(object.protocolNumber)
                : 0;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? exports.CidrBlocks.fromJSON(object.cidrBlocks)
                : undefined;
        message.securityGroupId =
            object.securityGroupId !== undefined && object.securityGroupId !== null
                ? String(object.securityGroupId)
                : undefined;
        message.predefinedTarget =
            object.predefinedTarget !== undefined && object.predefinedTarget !== null
                ? String(object.predefinedTarget)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.direction !== undefined &&
            (obj.direction = securityGroupRule_DirectionToJSON(message.direction));
        message.ports !== undefined &&
            (obj.ports = message.ports ? exports.PortRange.toJSON(message.ports) : undefined);
        message.protocolName !== undefined &&
            (obj.protocolName = message.protocolName);
        message.protocolNumber !== undefined &&
            (obj.protocolNumber = Math.round(message.protocolNumber));
        message.cidrBlocks !== undefined &&
            (obj.cidrBlocks = message.cidrBlocks
                ? exports.CidrBlocks.toJSON(message.cidrBlocks)
                : undefined);
        message.securityGroupId !== undefined &&
            (obj.securityGroupId = message.securityGroupId);
        message.predefinedTarget !== undefined &&
            (obj.predefinedTarget = message.predefinedTarget);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseSecurityGroupRule);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.labels = Object.entries((_c = object.labels) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.direction = (_d = object.direction) !== null && _d !== void 0 ? _d : 0;
        message.ports =
            object.ports !== undefined && object.ports !== null
                ? exports.PortRange.fromPartial(object.ports)
                : undefined;
        message.protocolName = (_e = object.protocolName) !== null && _e !== void 0 ? _e : "";
        message.protocolNumber = (_f = object.protocolNumber) !== null && _f !== void 0 ? _f : 0;
        message.cidrBlocks =
            object.cidrBlocks !== undefined && object.cidrBlocks !== null
                ? exports.CidrBlocks.fromPartial(object.cidrBlocks)
                : undefined;
        message.securityGroupId = (_g = object.securityGroupId) !== null && _g !== void 0 ? _g : undefined;
        message.predefinedTarget = (_h = object.predefinedTarget) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRule.$type, exports.SecurityGroupRule);
const baseSecurityGroupRule_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry",
    key: "",
    value: "",
};
exports.SecurityGroupRule_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.SecurityGroupRule.LabelsEntry",
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
        const message = Object.assign({}, baseSecurityGroupRule_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroupRule_LabelsEntry);
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
        const message = Object.assign({}, baseSecurityGroupRule_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SecurityGroupRule_LabelsEntry.$type, exports.SecurityGroupRule_LabelsEntry);
const basePortRange = {
    $type: "yandex.cloud.vpc.v1.PortRange",
    fromPort: 0,
    toPort: 0,
};
exports.PortRange = {
    $type: "yandex.cloud.vpc.v1.PortRange",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromPort !== 0) {
            writer.uint32(8).int64(message.fromPort);
        }
        if (message.toPort !== 0) {
            writer.uint32(16).int64(message.toPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePortRange);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromPort = longToNumber(reader.int64());
                    break;
                case 2:
                    message.toPort = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePortRange);
        message.fromPort =
            object.fromPort !== undefined && object.fromPort !== null
                ? Number(object.fromPort)
                : 0;
        message.toPort =
            object.toPort !== undefined && object.toPort !== null
                ? Number(object.toPort)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fromPort !== undefined &&
            (obj.fromPort = Math.round(message.fromPort));
        message.toPort !== undefined && (obj.toPort = Math.round(message.toPort));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, basePortRange);
        message.fromPort = (_a = object.fromPort) !== null && _a !== void 0 ? _a : 0;
        message.toPort = (_b = object.toPort) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PortRange.$type, exports.PortRange);
const baseCidrBlocks = {
    $type: "yandex.cloud.vpc.v1.CidrBlocks",
    v4CidrBlocks: "",
    v6CidrBlocks: "",
};
exports.CidrBlocks = {
    $type: "yandex.cloud.vpc.v1.CidrBlocks",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.v4CidrBlocks) {
            writer.uint32(10).string(v);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCidrBlocks);
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 2:
                    message.v6CidrBlocks.push(reader.string());
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
        const message = Object.assign({}, baseCidrBlocks);
        message.v4CidrBlocks = ((_a = object.v4CidrBlocks) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.v6CidrBlocks = ((_b = object.v6CidrBlocks) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        if (message.v6CidrBlocks) {
            obj.v6CidrBlocks = message.v6CidrBlocks.map((e) => e);
        }
        else {
            obj.v6CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCidrBlocks);
        message.v4CidrBlocks = ((_a = object.v4CidrBlocks) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.v6CidrBlocks = ((_b = object.v6CidrBlocks) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CidrBlocks.$type, exports.CidrBlocks);
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
