"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetServiceClient = exports.BudgetServiceService = exports.CreateBudgetMetadata = exports.CreateBudgetRequest = exports.ListBudgetsResponse = exports.ListBudgetsRequest = exports.GetBudgetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const budget_1 = require("../../../../yandex/cloud/billing/v1/budget");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
exports.protobufPackage = "yandex.cloud.billing.v1";
const baseGetBudgetRequest = {
    $type: "yandex.cloud.billing.v1.GetBudgetRequest",
    id: "",
};
exports.GetBudgetRequest = {
    $type: "yandex.cloud.billing.v1.GetBudgetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetBudgetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetBudgetRequest);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetBudgetRequest);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBudgetRequest.$type, exports.GetBudgetRequest);
const baseListBudgetsRequest = {
    $type: "yandex.cloud.billing.v1.ListBudgetsRequest",
    billingAccountId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListBudgetsRequest = {
    $type: "yandex.cloud.billing.v1.ListBudgetsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.billingAccountId !== "") {
            writer.uint32(10).string(message.billingAccountId);
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
        const message = Object.assign({}, baseListBudgetsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
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
        const message = Object.assign({}, baseListBudgetsRequest);
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
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
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListBudgetsRequest);
        message.billingAccountId = (_a = object.billingAccountId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBudgetsRequest.$type, exports.ListBudgetsRequest);
const baseListBudgetsResponse = {
    $type: "yandex.cloud.billing.v1.ListBudgetsResponse",
    nextPageToken: "",
};
exports.ListBudgetsResponse = {
    $type: "yandex.cloud.billing.v1.ListBudgetsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.budgets) {
            budget_1.Budget.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListBudgetsResponse);
        message.budgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgets.push(budget_1.Budget.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListBudgetsResponse);
        message.budgets = ((_a = object.budgets) !== null && _a !== void 0 ? _a : []).map((e) => budget_1.Budget.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.budgets) {
            obj.budgets = message.budgets.map((e) => e ? budget_1.Budget.toJSON(e) : undefined);
        }
        else {
            obj.budgets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListBudgetsResponse);
        message.budgets = ((_a = object.budgets) === null || _a === void 0 ? void 0 : _a.map((e) => budget_1.Budget.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBudgetsResponse.$type, exports.ListBudgetsResponse);
const baseCreateBudgetRequest = {
    $type: "yandex.cloud.billing.v1.CreateBudgetRequest",
    billingAccountId: "",
    name: "",
};
exports.CreateBudgetRequest = {
    $type: "yandex.cloud.billing.v1.CreateBudgetRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.billingAccountId !== "") {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.costBudgetSpec !== undefined) {
            budget_1.CostBudgetSpec.encode(message.costBudgetSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.expenseBudgetSpec !== undefined) {
            budget_1.ExpenseBudgetSpec.encode(message.expenseBudgetSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.balanceBudgetSpec !== undefined) {
            budget_1.BalanceBudgetSpec.encode(message.balanceBudgetSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBudgetRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.costBudgetSpec = budget_1.CostBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expenseBudgetSpec = budget_1.ExpenseBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.balanceBudgetSpec = budget_1.BalanceBudgetSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateBudgetRequest);
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.costBudgetSpec =
            object.costBudgetSpec !== undefined && object.costBudgetSpec !== null
                ? budget_1.CostBudgetSpec.fromJSON(object.costBudgetSpec)
                : undefined;
        message.expenseBudgetSpec =
            object.expenseBudgetSpec !== undefined &&
                object.expenseBudgetSpec !== null
                ? budget_1.ExpenseBudgetSpec.fromJSON(object.expenseBudgetSpec)
                : undefined;
        message.balanceBudgetSpec =
            object.balanceBudgetSpec !== undefined &&
                object.balanceBudgetSpec !== null
                ? budget_1.BalanceBudgetSpec.fromJSON(object.balanceBudgetSpec)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.name !== undefined && (obj.name = message.name);
        message.costBudgetSpec !== undefined &&
            (obj.costBudgetSpec = message.costBudgetSpec
                ? budget_1.CostBudgetSpec.toJSON(message.costBudgetSpec)
                : undefined);
        message.expenseBudgetSpec !== undefined &&
            (obj.expenseBudgetSpec = message.expenseBudgetSpec
                ? budget_1.ExpenseBudgetSpec.toJSON(message.expenseBudgetSpec)
                : undefined);
        message.balanceBudgetSpec !== undefined &&
            (obj.balanceBudgetSpec = message.balanceBudgetSpec
                ? budget_1.BalanceBudgetSpec.toJSON(message.balanceBudgetSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateBudgetRequest);
        message.billingAccountId = (_a = object.billingAccountId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.costBudgetSpec =
            object.costBudgetSpec !== undefined && object.costBudgetSpec !== null
                ? budget_1.CostBudgetSpec.fromPartial(object.costBudgetSpec)
                : undefined;
        message.expenseBudgetSpec =
            object.expenseBudgetSpec !== undefined &&
                object.expenseBudgetSpec !== null
                ? budget_1.ExpenseBudgetSpec.fromPartial(object.expenseBudgetSpec)
                : undefined;
        message.balanceBudgetSpec =
            object.balanceBudgetSpec !== undefined &&
                object.balanceBudgetSpec !== null
                ? budget_1.BalanceBudgetSpec.fromPartial(object.balanceBudgetSpec)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBudgetRequest.$type, exports.CreateBudgetRequest);
const baseCreateBudgetMetadata = {
    $type: "yandex.cloud.billing.v1.CreateBudgetMetadata",
    budgetId: "",
};
exports.CreateBudgetMetadata = {
    $type: "yandex.cloud.billing.v1.CreateBudgetMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.budgetId !== "") {
            writer.uint32(10).string(message.budgetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateBudgetMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateBudgetMetadata);
        message.budgetId =
            object.budgetId !== undefined && object.budgetId !== null
                ? String(object.budgetId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.budgetId !== undefined && (obj.budgetId = message.budgetId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateBudgetMetadata);
        message.budgetId = (_a = object.budgetId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBudgetMetadata.$type, exports.CreateBudgetMetadata);
/** A set of methods for managing Budget resources. */
exports.BudgetServiceService = {
    /** Returns the specified budget. */
    get: {
        path: "/yandex.cloud.billing.v1.BudgetService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(budget_1.Budget.encode(value).finish()),
        responseDeserialize: (value) => budget_1.Budget.decode(value),
    },
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: {
        path: "/yandex.cloud.billing.v1.BudgetService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBudgetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBudgetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBudgetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBudgetsResponse.decode(value),
    },
    /** Creates a budget for the specified billing account. */
    create: {
        path: "/yandex.cloud.billing.v1.BudgetService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.BudgetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BudgetServiceService, "yandex.cloud.billing.v1.BudgetService");
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
