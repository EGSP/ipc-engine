"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhcpOptions = exports.Subnet_LabelsEntry = exports.Subnet = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.vpc.v1";
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "IP_VERSION_UNSPECIFIED":
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case "IPV4":
            return IpVersion.IPV4;
        case 2:
        case "IPV6":
            return IpVersion.IPV6;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return "IP_VERSION_UNSPECIFIED";
        case IpVersion.IPV4:
            return "IPV4";
        case IpVersion.IPV6:
            return "IPV6";
        default:
            return "UNKNOWN";
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
const baseSubnet = {
    $type: "yandex.cloud.vpc.v1.Subnet",
    id: "",
    folderId: "",
    name: "",
    description: "",
    networkId: "",
    zoneId: "",
    v4CidrBlocks: "",
    v6CidrBlocks: "",
    routeTableId: "",
};
exports.Subnet = {
    $type: "yandex.cloud.vpc.v1.Subnet",
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
            exports.Subnet_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.networkId !== "") {
            writer.uint32(58).string(message.networkId);
        }
        if (message.zoneId !== "") {
            writer.uint32(66).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(82).string(v);
        }
        for (const v of message.v6CidrBlocks) {
            writer.uint32(90).string(v);
        }
        if (message.routeTableId !== "") {
            writer.uint32(98).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            exports.DhcpOptions.encode(message.dhcpOptions, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSubnet);
        message.labels = {};
        message.v4CidrBlocks = [];
        message.v6CidrBlocks = [];
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
                    const entry6 = exports.Subnet_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.networkId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 10:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 11:
                    message.v6CidrBlocks.push(reader.string());
                    break;
                case 12:
                    message.routeTableId = reader.string();
                    break;
                case 13:
                    message.dhcpOptions = exports.DhcpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSubnet);
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
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.v4CidrBlocks = ((_b = object.v4CidrBlocks) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.v6CidrBlocks = ((_c = object.v6CidrBlocks) !== null && _c !== void 0 ? _c : []).map((e) => String(e));
        message.routeTableId =
            object.routeTableId !== undefined && object.routeTableId !== null
                ? String(object.routeTableId)
                : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? exports.DhcpOptions.fromJSON(object.dhcpOptions)
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? exports.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseSubnet);
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
        message.zoneId = (_h = object.zoneId) !== null && _h !== void 0 ? _h : "";
        message.v4CidrBlocks = ((_j = object.v4CidrBlocks) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.v6CidrBlocks = ((_k = object.v6CidrBlocks) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.routeTableId = (_l = object.routeTableId) !== null && _l !== void 0 ? _l : "";
        message.dhcpOptions =
            object.dhcpOptions !== undefined && object.dhcpOptions !== null
                ? exports.DhcpOptions.fromPartial(object.dhcpOptions)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subnet.$type, exports.Subnet);
const baseSubnet_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry",
    key: "",
    value: "",
};
exports.Subnet_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry",
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
        const message = Object.assign({}, baseSubnet_LabelsEntry);
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
        const message = Object.assign({}, baseSubnet_LabelsEntry);
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
        const message = Object.assign({}, baseSubnet_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Subnet_LabelsEntry.$type, exports.Subnet_LabelsEntry);
const baseDhcpOptions = {
    $type: "yandex.cloud.vpc.v1.DhcpOptions",
    domainNameServers: "",
    domainName: "",
    ntpServers: "",
};
exports.DhcpOptions = {
    $type: "yandex.cloud.vpc.v1.DhcpOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.domainNameServers) {
            writer.uint32(10).string(v);
        }
        if (message.domainName !== "") {
            writer.uint32(18).string(message.domainName);
        }
        for (const v of message.ntpServers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDhcpOptions);
        message.domainNameServers = [];
        message.ntpServers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainNameServers.push(reader.string());
                    break;
                case 2:
                    message.domainName = reader.string();
                    break;
                case 3:
                    message.ntpServers.push(reader.string());
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
        const message = Object.assign({}, baseDhcpOptions);
        message.domainNameServers = ((_a = object.domainNameServers) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.domainName =
            object.domainName !== undefined && object.domainName !== null
                ? String(object.domainName)
                : "";
        message.ntpServers = ((_b = object.ntpServers) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.domainNameServers) {
            obj.domainNameServers = message.domainNameServers.map((e) => e);
        }
        else {
            obj.domainNameServers = [];
        }
        message.domainName !== undefined && (obj.domainName = message.domainName);
        if (message.ntpServers) {
            obj.ntpServers = message.ntpServers.map((e) => e);
        }
        else {
            obj.ntpServers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDhcpOptions);
        message.domainNameServers = ((_a = object.domainNameServers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.domainName = (_b = object.domainName) !== null && _b !== void 0 ? _b : "";
        message.ntpServers = ((_c = object.ntpServers) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DhcpOptions.$type, exports.DhcpOptions);
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
