"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPerson = exports.Customer = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseCustomer = {
    $type: "yandex.cloud.billing.v1.Customer",
    id: "",
    billingAccountId: "",
};
exports.Customer = {
    $type: "yandex.cloud.billing.v1.Customer",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.billingAccountId !== "") {
            writer.uint32(18).string(message.billingAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCustomer);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCustomer);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCustomer);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.billingAccountId = (_b = object.billingAccountId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Customer.$type, exports.Customer);
const baseCustomerPerson = {
    $type: "yandex.cloud.billing.v1.CustomerPerson",
    name: "",
    longname: "",
    phone: "",
    email: "",
    postCode: "",
    postAddress: "",
    legalAddress: "",
    tin: "",
};
exports.CustomerPerson = {
    $type: "yandex.cloud.billing.v1.CustomerPerson",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.longname !== "") {
            writer.uint32(18).string(message.longname);
        }
        if (message.phone !== "") {
            writer.uint32(26).string(message.phone);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        if (message.postCode !== "") {
            writer.uint32(42).string(message.postCode);
        }
        if (message.postAddress !== "") {
            writer.uint32(50).string(message.postAddress);
        }
        if (message.legalAddress !== "") {
            writer.uint32(58).string(message.legalAddress);
        }
        if (message.tin !== "") {
            writer.uint32(66).string(message.tin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCustomerPerson);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.longname = reader.string();
                    break;
                case 3:
                    message.phone = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.postCode = reader.string();
                    break;
                case 6:
                    message.postAddress = reader.string();
                    break;
                case 7:
                    message.legalAddress = reader.string();
                    break;
                case 8:
                    message.tin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCustomerPerson);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.longname =
            object.longname !== undefined && object.longname !== null
                ? String(object.longname)
                : "";
        message.phone =
            object.phone !== undefined && object.phone !== null
                ? String(object.phone)
                : "";
        message.email =
            object.email !== undefined && object.email !== null
                ? String(object.email)
                : "";
        message.postCode =
            object.postCode !== undefined && object.postCode !== null
                ? String(object.postCode)
                : "";
        message.postAddress =
            object.postAddress !== undefined && object.postAddress !== null
                ? String(object.postAddress)
                : "";
        message.legalAddress =
            object.legalAddress !== undefined && object.legalAddress !== null
                ? String(object.legalAddress)
                : "";
        message.tin =
            object.tin !== undefined && object.tin !== null ? String(object.tin) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.longname !== undefined && (obj.longname = message.longname);
        message.phone !== undefined && (obj.phone = message.phone);
        message.email !== undefined && (obj.email = message.email);
        message.postCode !== undefined && (obj.postCode = message.postCode);
        message.postAddress !== undefined &&
            (obj.postAddress = message.postAddress);
        message.legalAddress !== undefined &&
            (obj.legalAddress = message.legalAddress);
        message.tin !== undefined && (obj.tin = message.tin);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCustomerPerson);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.longname = (_b = object.longname) !== null && _b !== void 0 ? _b : "";
        message.phone = (_c = object.phone) !== null && _c !== void 0 ? _c : "";
        message.email = (_d = object.email) !== null && _d !== void 0 ? _d : "";
        message.postCode = (_e = object.postCode) !== null && _e !== void 0 ? _e : "";
        message.postAddress = (_f = object.postAddress) !== null && _f !== void 0 ? _f : "";
        message.legalAddress = (_g = object.legalAddress) !== null && _g !== void 0 ? _g : "";
        message.tin = (_h = object.tin) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CustomerPerson.$type, exports.CustomerPerson);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
