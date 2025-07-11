"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRequirements = exports.ExternalIpv4Address = exports.Address_LabelsEntry = exports.Address = exports.address_IpVersionToJSON = exports.address_IpVersionFromJSON = exports.Address_IpVersion = exports.address_TypeToJSON = exports.address_TypeFromJSON = exports.Address_Type = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.vpc.v1";
var Address_Type;
(function (Address_Type) {
    Address_Type[Address_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** INTERNAL - Internal IP address. */
    Address_Type[Address_Type["INTERNAL"] = 1] = "INTERNAL";
    /** EXTERNAL - Public IP address. */
    Address_Type[Address_Type["EXTERNAL"] = 2] = "EXTERNAL";
    Address_Type[Address_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Address_Type = exports.Address_Type || (exports.Address_Type = {}));
function address_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Address_Type.TYPE_UNSPECIFIED;
        case 1:
        case "INTERNAL":
            return Address_Type.INTERNAL;
        case 2:
        case "EXTERNAL":
            return Address_Type.EXTERNAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Address_Type.UNRECOGNIZED;
    }
}
exports.address_TypeFromJSON = address_TypeFromJSON;
function address_TypeToJSON(object) {
    switch (object) {
        case Address_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Address_Type.INTERNAL:
            return "INTERNAL";
        case Address_Type.EXTERNAL:
            return "EXTERNAL";
        default:
            return "UNKNOWN";
    }
}
exports.address_TypeToJSON = address_TypeToJSON;
var Address_IpVersion;
(function (Address_IpVersion) {
    Address_IpVersion[Address_IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address. */
    Address_IpVersion[Address_IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address. */
    Address_IpVersion[Address_IpVersion["IPV6"] = 2] = "IPV6";
    Address_IpVersion[Address_IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Address_IpVersion = exports.Address_IpVersion || (exports.Address_IpVersion = {}));
function address_IpVersionFromJSON(object) {
    switch (object) {
        case 0:
        case "IP_VERSION_UNSPECIFIED":
            return Address_IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case "IPV4":
            return Address_IpVersion.IPV4;
        case 2:
        case "IPV6":
            return Address_IpVersion.IPV6;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Address_IpVersion.UNRECOGNIZED;
    }
}
exports.address_IpVersionFromJSON = address_IpVersionFromJSON;
function address_IpVersionToJSON(object) {
    switch (object) {
        case Address_IpVersion.IP_VERSION_UNSPECIFIED:
            return "IP_VERSION_UNSPECIFIED";
        case Address_IpVersion.IPV4:
            return "IPV4";
        case Address_IpVersion.IPV6:
            return "IPV6";
        default:
            return "UNKNOWN";
    }
}
exports.address_IpVersionToJSON = address_IpVersionToJSON;
const baseAddress = {
    $type: "yandex.cloud.vpc.v1.Address",
    id: "",
    folderId: "",
    name: "",
    description: "",
    reserved: false,
    used: false,
    type: 0,
    ipVersion: 0,
    deletionProtection: false,
};
exports.Address = {
    $type: "yandex.cloud.vpc.v1.Address",
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
            exports.Address_LabelsEntry.encode({
                $type: "yandex.cloud.vpc.v1.Address.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.externalIpv4Address !== undefined) {
            exports.ExternalIpv4Address.encode(message.externalIpv4Address, writer.uint32(58).fork()).ldelim();
        }
        if (message.reserved === true) {
            writer.uint32(120).bool(message.reserved);
        }
        if (message.used === true) {
            writer.uint32(128).bool(message.used);
        }
        if (message.type !== 0) {
            writer.uint32(136).int32(message.type);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(144).int32(message.ipVersion);
        }
        if (message.deletionProtection === true) {
            writer.uint32(152).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddress);
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
                    const entry6 = exports.Address_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.externalIpv4Address = exports.ExternalIpv4Address.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.reserved = reader.bool();
                    break;
                case 16:
                    message.used = reader.bool();
                    break;
                case 17:
                    message.type = reader.int32();
                    break;
                case 18:
                    message.ipVersion = reader.int32();
                    break;
                case 19:
                    message.deletionProtection = reader.bool();
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
        const message = Object.assign({}, baseAddress);
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
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined &&
                object.externalIpv4Address !== null
                ? exports.ExternalIpv4Address.fromJSON(object.externalIpv4Address)
                : undefined;
        message.reserved =
            object.reserved !== undefined && object.reserved !== null
                ? Boolean(object.reserved)
                : false;
        message.used =
            object.used !== undefined && object.used !== null
                ? Boolean(object.used)
                : false;
        message.type =
            object.type !== undefined && object.type !== null
                ? address_TypeFromJSON(object.type)
                : 0;
        message.ipVersion =
            object.ipVersion !== undefined && object.ipVersion !== null
                ? address_IpVersionFromJSON(object.ipVersion)
                : 0;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
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
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address
                ? exports.ExternalIpv4Address.toJSON(message.externalIpv4Address)
                : undefined);
        message.reserved !== undefined && (obj.reserved = message.reserved);
        message.used !== undefined && (obj.used = message.used);
        message.type !== undefined && (obj.type = address_TypeToJSON(message.type));
        message.ipVersion !== undefined &&
            (obj.ipVersion = address_IpVersionToJSON(message.ipVersion));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = Object.assign({}, baseAddress);
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
        message.externalIpv4Address =
            object.externalIpv4Address !== undefined &&
                object.externalIpv4Address !== null
                ? exports.ExternalIpv4Address.fromPartial(object.externalIpv4Address)
                : undefined;
        message.reserved = (_g = object.reserved) !== null && _g !== void 0 ? _g : false;
        message.used = (_h = object.used) !== null && _h !== void 0 ? _h : false;
        message.type = (_j = object.type) !== null && _j !== void 0 ? _j : 0;
        message.ipVersion = (_k = object.ipVersion) !== null && _k !== void 0 ? _k : 0;
        message.deletionProtection = (_l = object.deletionProtection) !== null && _l !== void 0 ? _l : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Address.$type, exports.Address);
const baseAddress_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.Address.LabelsEntry",
    key: "",
    value: "",
};
exports.Address_LabelsEntry = {
    $type: "yandex.cloud.vpc.v1.Address.LabelsEntry",
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
        const message = Object.assign({}, baseAddress_LabelsEntry);
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
        const message = Object.assign({}, baseAddress_LabelsEntry);
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
        const message = Object.assign({}, baseAddress_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Address_LabelsEntry.$type, exports.Address_LabelsEntry);
const baseExternalIpv4Address = {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4Address",
    address: "",
    zoneId: "",
};
exports.ExternalIpv4Address = {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4Address",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== "") {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            exports.AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalIpv4Address);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = exports.AddressRequirements.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseExternalIpv4Address);
        message.address =
            object.address !== undefined && object.address !== null
                ? String(object.address)
                : "";
        message.zoneId =
            object.zoneId !== undefined && object.zoneId !== null
                ? String(object.zoneId)
                : "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? exports.AddressRequirements.fromJSON(object.requirements)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? exports.AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseExternalIpv4Address);
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.zoneId = (_b = object.zoneId) !== null && _b !== void 0 ? _b : "";
        message.requirements =
            object.requirements !== undefined && object.requirements !== null
                ? exports.AddressRequirements.fromPartial(object.requirements)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalIpv4Address.$type, exports.ExternalIpv4Address);
const baseAddressRequirements = {
    $type: "yandex.cloud.vpc.v1.AddressRequirements",
    ddosProtectionProvider: "",
    outgoingSmtpCapability: "",
};
exports.AddressRequirements = {
    $type: "yandex.cloud.vpc.v1.AddressRequirements",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ddosProtectionProvider !== "") {
            writer.uint32(10).string(message.ddosProtectionProvider);
        }
        if (message.outgoingSmtpCapability !== "") {
            writer.uint32(18).string(message.outgoingSmtpCapability);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAddressRequirements);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ddosProtectionProvider = reader.string();
                    break;
                case 2:
                    message.outgoingSmtpCapability = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAddressRequirements);
        message.ddosProtectionProvider =
            object.ddosProtectionProvider !== undefined &&
                object.ddosProtectionProvider !== null
                ? String(object.ddosProtectionProvider)
                : "";
        message.outgoingSmtpCapability =
            object.outgoingSmtpCapability !== undefined &&
                object.outgoingSmtpCapability !== null
                ? String(object.outgoingSmtpCapability)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ddosProtectionProvider !== undefined &&
            (obj.ddosProtectionProvider = message.ddosProtectionProvider);
        message.outgoingSmtpCapability !== undefined &&
            (obj.outgoingSmtpCapability = message.outgoingSmtpCapability);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAddressRequirements);
        message.ddosProtectionProvider = (_a = object.ddosProtectionProvider) !== null && _a !== void 0 ? _a : "";
        message.outgoingSmtpCapability = (_b = object.outgoingSmtpCapability) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddressRequirements.$type, exports.AddressRequirements);
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
