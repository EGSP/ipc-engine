"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServiceClient = exports.CustomerServiceService = exports.CustomerMetadata = exports.SuspendCustomerRequest = exports.ActivateCustomerRequest = exports.CreateResellerServedCustomerRequest = exports.InviteCustomerRequest = exports.ListCustomersResponse = exports.ListCustomersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const customer_1 = require("../../../../yandex/cloud/billing/v1/customer");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseListCustomersRequest = {
    $type: "yandex.cloud.billing.v1.ListCustomersRequest",
    resellerId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListCustomersRequest = {
    $type: "yandex.cloud.billing.v1.ListCustomersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resellerId !== "") {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCustomersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
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
        const message = Object.assign({}, baseListCustomersRequest);
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
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
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListCustomersRequest);
        message.resellerId = (_a = object.resellerId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCustomersRequest.$type, exports.ListCustomersRequest);
const baseListCustomersResponse = {
    $type: "yandex.cloud.billing.v1.ListCustomersResponse",
    nextPageToken: "",
};
exports.ListCustomersResponse = {
    $type: "yandex.cloud.billing.v1.ListCustomersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.customers) {
            customer_1.Customer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCustomersResponse);
        message.customers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customers.push(customer_1.Customer.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListCustomersResponse);
        message.customers = ((_a = object.customers) !== null && _a !== void 0 ? _a : []).map((e) => customer_1.Customer.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.customers) {
            obj.customers = message.customers.map((e) => e ? customer_1.Customer.toJSON(e) : undefined);
        }
        else {
            obj.customers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListCustomersResponse);
        message.customers =
            ((_a = object.customers) === null || _a === void 0 ? void 0 : _a.map((e) => customer_1.Customer.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCustomersResponse.$type, exports.ListCustomersResponse);
const baseInviteCustomerRequest = {
    $type: "yandex.cloud.billing.v1.InviteCustomerRequest",
    resellerId: "",
    name: "",
    invitationEmail: "",
};
exports.InviteCustomerRequest = {
    $type: "yandex.cloud.billing.v1.InviteCustomerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resellerId !== "") {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.invitationEmail !== "") {
            writer.uint32(26).string(message.invitationEmail);
        }
        if (message.person !== undefined) {
            customer_1.CustomerPerson.encode(message.person, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseInviteCustomerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.invitationEmail = reader.string();
                    break;
                case 4:
                    message.person = customer_1.CustomerPerson.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseInviteCustomerRequest);
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.invitationEmail =
            object.invitationEmail !== undefined && object.invitationEmail !== null
                ? String(object.invitationEmail)
                : "";
        message.person =
            object.person !== undefined && object.person !== null
                ? customer_1.CustomerPerson.fromJSON(object.person)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.name !== undefined && (obj.name = message.name);
        message.invitationEmail !== undefined &&
            (obj.invitationEmail = message.invitationEmail);
        message.person !== undefined &&
            (obj.person = message.person
                ? customer_1.CustomerPerson.toJSON(message.person)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseInviteCustomerRequest);
        message.resellerId = (_a = object.resellerId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.invitationEmail = (_c = object.invitationEmail) !== null && _c !== void 0 ? _c : "";
        message.person =
            object.person !== undefined && object.person !== null
                ? customer_1.CustomerPerson.fromPartial(object.person)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InviteCustomerRequest.$type, exports.InviteCustomerRequest);
const baseCreateResellerServedCustomerRequest = {
    $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest",
    resellerId: "",
    name: "",
};
exports.CreateResellerServedCustomerRequest = {
    $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resellerId !== "") {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.person !== undefined) {
            customer_1.CustomerPerson.encode(message.person, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateResellerServedCustomerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.person = customer_1.CustomerPerson.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateResellerServedCustomerRequest);
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.person =
            object.person !== undefined && object.person !== null
                ? customer_1.CustomerPerson.fromJSON(object.person)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.name !== undefined && (obj.name = message.name);
        message.person !== undefined &&
            (obj.person = message.person
                ? customer_1.CustomerPerson.toJSON(message.person)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateResellerServedCustomerRequest);
        message.resellerId = (_a = object.resellerId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.person =
            object.person !== undefined && object.person !== null
                ? customer_1.CustomerPerson.fromPartial(object.person)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateResellerServedCustomerRequest.$type, exports.CreateResellerServedCustomerRequest);
const baseActivateCustomerRequest = {
    $type: "yandex.cloud.billing.v1.ActivateCustomerRequest",
    customerId: "",
};
exports.ActivateCustomerRequest = {
    $type: "yandex.cloud.billing.v1.ActivateCustomerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.customerId !== "") {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseActivateCustomerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseActivateCustomerRequest);
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseActivateCustomerRequest);
        message.customerId = (_a = object.customerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ActivateCustomerRequest.$type, exports.ActivateCustomerRequest);
const baseSuspendCustomerRequest = {
    $type: "yandex.cloud.billing.v1.SuspendCustomerRequest",
    customerId: "",
};
exports.SuspendCustomerRequest = {
    $type: "yandex.cloud.billing.v1.SuspendCustomerRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.customerId !== "") {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSuspendCustomerRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSuspendCustomerRequest);
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSuspendCustomerRequest);
        message.customerId = (_a = object.customerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SuspendCustomerRequest.$type, exports.SuspendCustomerRequest);
const baseCustomerMetadata = {
    $type: "yandex.cloud.billing.v1.CustomerMetadata",
    resellerId: "",
    customerId: "",
};
exports.CustomerMetadata = {
    $type: "yandex.cloud.billing.v1.CustomerMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resellerId !== "") {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.customerId !== "") {
            writer.uint32(18).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCustomerMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCustomerMetadata);
        message.resellerId =
            object.resellerId !== undefined && object.resellerId !== null
                ? String(object.resellerId)
                : "";
        message.customerId =
            object.customerId !== undefined && object.customerId !== null
                ? String(object.customerId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resellerId !== undefined && (obj.resellerId = message.resellerId);
        message.customerId !== undefined && (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCustomerMetadata);
        message.resellerId = (_a = object.resellerId) !== null && _a !== void 0 ? _a : "";
        message.customerId = (_b = object.customerId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CustomerMetadata.$type, exports.CustomerMetadata);
/** A set of methods for managing Customer resources. */
exports.CustomerServiceService = {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: {
        path: "/yandex.cloud.billing.v1.CustomerService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCustomersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCustomersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCustomersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCustomersResponse.decode(value),
    },
    /** Invites customer to the specified reseller. */
    invite: {
        path: "/yandex.cloud.billing.v1.CustomerService/Invite",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.InviteCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.InviteCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Creates new reseller-served customer. */
    createResellerServed: {
        path: "/yandex.cloud.billing.v1.CustomerService/CreateResellerServed",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateResellerServedCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateResellerServedCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: {
        path: "/yandex.cloud.billing.v1.CustomerService/Activate",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: {
        path: "/yandex.cloud.billing.v1.CustomerService/Suspend",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SuspendCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SuspendCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CustomerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CustomerServiceService, "yandex.cloud.billing.v1.CustomerService");
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
