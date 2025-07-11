"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThresholdRule = exports.CloudFoldersConsumptionFilter = exports.ConsumptionFilter = exports.BalanceBudgetSpec = exports.ExpenseBudgetSpec = exports.CostBudgetSpec = exports.Budget = exports.thresholdTypeToJSON = exports.thresholdTypeFromJSON = exports.ThresholdType = exports.resetPeriodTypeToJSON = exports.resetPeriodTypeFromJSON = exports.ResetPeriodType = exports.budgetStatusToJSON = exports.budgetStatusFromJSON = exports.BudgetStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "yandex.cloud.billing.v1";
var BudgetStatus;
(function (BudgetStatus) {
    BudgetStatus[BudgetStatus["BUDGET_STATUS_UNSPECIFIED"] = 0] = "BUDGET_STATUS_UNSPECIFIED";
    /** CREATING - The budget is being created. */
    BudgetStatus[BudgetStatus["CREATING"] = 1] = "CREATING";
    /** ACTIVE - The budget is active. */
    BudgetStatus[BudgetStatus["ACTIVE"] = 2] = "ACTIVE";
    /** FINISHED - The budget is finished. */
    BudgetStatus[BudgetStatus["FINISHED"] = 3] = "FINISHED";
    BudgetStatus[BudgetStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BudgetStatus = exports.BudgetStatus || (exports.BudgetStatus = {}));
function budgetStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BUDGET_STATUS_UNSPECIFIED":
            return BudgetStatus.BUDGET_STATUS_UNSPECIFIED;
        case 1:
        case "CREATING":
            return BudgetStatus.CREATING;
        case 2:
        case "ACTIVE":
            return BudgetStatus.ACTIVE;
        case 3:
        case "FINISHED":
            return BudgetStatus.FINISHED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BudgetStatus.UNRECOGNIZED;
    }
}
exports.budgetStatusFromJSON = budgetStatusFromJSON;
function budgetStatusToJSON(object) {
    switch (object) {
        case BudgetStatus.BUDGET_STATUS_UNSPECIFIED:
            return "BUDGET_STATUS_UNSPECIFIED";
        case BudgetStatus.CREATING:
            return "CREATING";
        case BudgetStatus.ACTIVE:
            return "ACTIVE";
        case BudgetStatus.FINISHED:
            return "FINISHED";
        default:
            return "UNKNOWN";
    }
}
exports.budgetStatusToJSON = budgetStatusToJSON;
var ResetPeriodType;
(function (ResetPeriodType) {
    ResetPeriodType[ResetPeriodType["RESET_PERIOD_TYPE_UNSPECIFIED"] = 0] = "RESET_PERIOD_TYPE_UNSPECIFIED";
    /** MONTHLY - Reset budget every month. */
    ResetPeriodType[ResetPeriodType["MONTHLY"] = 1] = "MONTHLY";
    /** QUARTER - Reset budget every quarter. */
    ResetPeriodType[ResetPeriodType["QUARTER"] = 2] = "QUARTER";
    /** ANNUALLY - Reset budget every year. */
    ResetPeriodType[ResetPeriodType["ANNUALLY"] = 3] = "ANNUALLY";
    ResetPeriodType[ResetPeriodType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResetPeriodType = exports.ResetPeriodType || (exports.ResetPeriodType = {}));
function resetPeriodTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESET_PERIOD_TYPE_UNSPECIFIED":
            return ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED;
        case 1:
        case "MONTHLY":
            return ResetPeriodType.MONTHLY;
        case 2:
        case "QUARTER":
            return ResetPeriodType.QUARTER;
        case 3:
        case "ANNUALLY":
            return ResetPeriodType.ANNUALLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResetPeriodType.UNRECOGNIZED;
    }
}
exports.resetPeriodTypeFromJSON = resetPeriodTypeFromJSON;
function resetPeriodTypeToJSON(object) {
    switch (object) {
        case ResetPeriodType.RESET_PERIOD_TYPE_UNSPECIFIED:
            return "RESET_PERIOD_TYPE_UNSPECIFIED";
        case ResetPeriodType.MONTHLY:
            return "MONTHLY";
        case ResetPeriodType.QUARTER:
            return "QUARTER";
        case ResetPeriodType.ANNUALLY:
            return "ANNUALLY";
        default:
            return "UNKNOWN";
    }
}
exports.resetPeriodTypeToJSON = resetPeriodTypeToJSON;
/** Define the unit of the [ThesholdRule.amount]. */
var ThresholdType;
(function (ThresholdType) {
    ThresholdType[ThresholdType["THRESHOLD_TYPE_UNSPECIFIED"] = 0] = "THRESHOLD_TYPE_UNSPECIFIED";
    /** PERCENT - Percent. */
    ThresholdType[ThresholdType["PERCENT"] = 1] = "PERCENT";
    /** AMOUNT - The same as budget amount. */
    ThresholdType[ThresholdType["AMOUNT"] = 2] = "AMOUNT";
    ThresholdType[ThresholdType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ThresholdType = exports.ThresholdType || (exports.ThresholdType = {}));
function thresholdTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "THRESHOLD_TYPE_UNSPECIFIED":
            return ThresholdType.THRESHOLD_TYPE_UNSPECIFIED;
        case 1:
        case "PERCENT":
            return ThresholdType.PERCENT;
        case 2:
        case "AMOUNT":
            return ThresholdType.AMOUNT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ThresholdType.UNRECOGNIZED;
    }
}
exports.thresholdTypeFromJSON = thresholdTypeFromJSON;
function thresholdTypeToJSON(object) {
    switch (object) {
        case ThresholdType.THRESHOLD_TYPE_UNSPECIFIED:
            return "THRESHOLD_TYPE_UNSPECIFIED";
        case ThresholdType.PERCENT:
            return "PERCENT";
        case ThresholdType.AMOUNT:
            return "AMOUNT";
        default:
            return "UNKNOWN";
    }
}
exports.thresholdTypeToJSON = thresholdTypeToJSON;
const baseBudget = {
    $type: "yandex.cloud.billing.v1.Budget",
    id: "",
    name: "",
    billingAccountId: "",
    status: 0,
};
exports.Budget = {
    $type: "yandex.cloud.billing.v1.Budget",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.billingAccountId !== "") {
            writer.uint32(34).string(message.billingAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.costBudget !== undefined) {
            exports.CostBudgetSpec.encode(message.costBudget, writer.uint32(50).fork()).ldelim();
        }
        if (message.expenseBudget !== undefined) {
            exports.ExpenseBudgetSpec.encode(message.expenseBudget, writer.uint32(58).fork()).ldelim();
        }
        if (message.balanceBudget !== undefined) {
            exports.BalanceBudgetSpec.encode(message.balanceBudget, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBudget);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.billingAccountId = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.costBudget = exports.CostBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.expenseBudget = exports.ExpenseBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.balanceBudget = exports.BalanceBudgetSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBudget);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.billingAccountId =
            object.billingAccountId !== undefined && object.billingAccountId !== null
                ? String(object.billingAccountId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? budgetStatusFromJSON(object.status)
                : 0;
        message.costBudget =
            object.costBudget !== undefined && object.costBudget !== null
                ? exports.CostBudgetSpec.fromJSON(object.costBudget)
                : undefined;
        message.expenseBudget =
            object.expenseBudget !== undefined && object.expenseBudget !== null
                ? exports.ExpenseBudgetSpec.fromJSON(object.expenseBudget)
                : undefined;
        message.balanceBudget =
            object.balanceBudget !== undefined && object.balanceBudget !== null
                ? exports.BalanceBudgetSpec.fromJSON(object.balanceBudget)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.status !== undefined &&
            (obj.status = budgetStatusToJSON(message.status));
        message.costBudget !== undefined &&
            (obj.costBudget = message.costBudget
                ? exports.CostBudgetSpec.toJSON(message.costBudget)
                : undefined);
        message.expenseBudget !== undefined &&
            (obj.expenseBudget = message.expenseBudget
                ? exports.ExpenseBudgetSpec.toJSON(message.expenseBudget)
                : undefined);
        message.balanceBudget !== undefined &&
            (obj.balanceBudget = message.balanceBudget
                ? exports.BalanceBudgetSpec.toJSON(message.balanceBudget)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseBudget);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.billingAccountId = (_d = object.billingAccountId) !== null && _d !== void 0 ? _d : "";
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.costBudget =
            object.costBudget !== undefined && object.costBudget !== null
                ? exports.CostBudgetSpec.fromPartial(object.costBudget)
                : undefined;
        message.expenseBudget =
            object.expenseBudget !== undefined && object.expenseBudget !== null
                ? exports.ExpenseBudgetSpec.fromPartial(object.expenseBudget)
                : undefined;
        message.balanceBudget =
            object.balanceBudget !== undefined && object.balanceBudget !== null
                ? exports.BalanceBudgetSpec.fromPartial(object.balanceBudget)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Budget.$type, exports.Budget);
const baseCostBudgetSpec = {
    $type: "yandex.cloud.billing.v1.CostBudgetSpec",
    amount: "",
    notificationUserAccountIds: "",
    endDate: "",
};
exports.CostBudgetSpec = {
    $type: "yandex.cloud.billing.v1.CostBudgetSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            exports.ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            exports.ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
        }
        if (message.resetPeriod !== undefined) {
            writer.uint32(40).int32(message.resetPeriod);
        }
        if (message.startDate !== undefined) {
            writer.uint32(50).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(58).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCostBudgetSpec);
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(exports.ThresholdRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.filter = exports.ConsumptionFilter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resetPeriod = reader.int32();
                    break;
                case 6:
                    message.startDate = reader.string();
                    break;
                case 7:
                    message.endDate = reader.string();
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
        const message = Object.assign({}, baseCostBudgetSpec);
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : "";
        message.notificationUserAccountIds = ((_a = object.notificationUserAccountIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.thresholdRules = ((_b = object.thresholdRules) !== null && _b !== void 0 ? _b : []).map((e) => exports.ThresholdRule.fromJSON(e));
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.ConsumptionFilter.fromJSON(object.filter)
                : undefined;
        message.resetPeriod =
            object.resetPeriod !== undefined && object.resetPeriod !== null
                ? resetPeriodTypeFromJSON(object.resetPeriod)
                : undefined;
        message.startDate =
            object.startDate !== undefined && object.startDate !== null
                ? String(object.startDate)
                : undefined;
        message.endDate =
            object.endDate !== undefined && object.endDate !== null
                ? String(object.endDate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds = message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? exports.ThresholdRule.toJSON(e) : undefined);
        }
        else {
            obj.thresholdRules = [];
        }
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? exports.ConsumptionFilter.toJSON(message.filter)
                : undefined);
        message.resetPeriod !== undefined &&
            (obj.resetPeriod =
                message.resetPeriod !== undefined
                    ? resetPeriodTypeToJSON(message.resetPeriod)
                    : undefined);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseCostBudgetSpec);
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.notificationUserAccountIds =
            ((_b = object.notificationUserAccountIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.thresholdRules =
            ((_c = object.thresholdRules) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ThresholdRule.fromPartial(e))) || [];
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.ConsumptionFilter.fromPartial(object.filter)
                : undefined;
        message.resetPeriod = (_d = object.resetPeriod) !== null && _d !== void 0 ? _d : undefined;
        message.startDate = (_e = object.startDate) !== null && _e !== void 0 ? _e : undefined;
        message.endDate = (_f = object.endDate) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CostBudgetSpec.$type, exports.CostBudgetSpec);
const baseExpenseBudgetSpec = {
    $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec",
    amount: "",
    notificationUserAccountIds: "",
    endDate: "",
};
exports.ExpenseBudgetSpec = {
    $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            exports.ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            exports.ConsumptionFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
        }
        if (message.resetPeriod !== undefined) {
            writer.uint32(40).int32(message.resetPeriod);
        }
        if (message.startDate !== undefined) {
            writer.uint32(50).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(58).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExpenseBudgetSpec);
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(exports.ThresholdRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.filter = exports.ConsumptionFilter.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.resetPeriod = reader.int32();
                    break;
                case 6:
                    message.startDate = reader.string();
                    break;
                case 7:
                    message.endDate = reader.string();
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
        const message = Object.assign({}, baseExpenseBudgetSpec);
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : "";
        message.notificationUserAccountIds = ((_a = object.notificationUserAccountIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.thresholdRules = ((_b = object.thresholdRules) !== null && _b !== void 0 ? _b : []).map((e) => exports.ThresholdRule.fromJSON(e));
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.ConsumptionFilter.fromJSON(object.filter)
                : undefined;
        message.resetPeriod =
            object.resetPeriod !== undefined && object.resetPeriod !== null
                ? resetPeriodTypeFromJSON(object.resetPeriod)
                : undefined;
        message.startDate =
            object.startDate !== undefined && object.startDate !== null
                ? String(object.startDate)
                : undefined;
        message.endDate =
            object.endDate !== undefined && object.endDate !== null
                ? String(object.endDate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds = message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? exports.ThresholdRule.toJSON(e) : undefined);
        }
        else {
            obj.thresholdRules = [];
        }
        message.filter !== undefined &&
            (obj.filter = message.filter
                ? exports.ConsumptionFilter.toJSON(message.filter)
                : undefined);
        message.resetPeriod !== undefined &&
            (obj.resetPeriod =
                message.resetPeriod !== undefined
                    ? resetPeriodTypeToJSON(message.resetPeriod)
                    : undefined);
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseExpenseBudgetSpec);
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.notificationUserAccountIds =
            ((_b = object.notificationUserAccountIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.thresholdRules =
            ((_c = object.thresholdRules) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ThresholdRule.fromPartial(e))) || [];
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? exports.ConsumptionFilter.fromPartial(object.filter)
                : undefined;
        message.resetPeriod = (_d = object.resetPeriod) !== null && _d !== void 0 ? _d : undefined;
        message.startDate = (_e = object.startDate) !== null && _e !== void 0 ? _e : undefined;
        message.endDate = (_f = object.endDate) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExpenseBudgetSpec.$type, exports.ExpenseBudgetSpec);
const baseBalanceBudgetSpec = {
    $type: "yandex.cloud.billing.v1.BalanceBudgetSpec",
    amount: "",
    notificationUserAccountIds: "",
    startDate: "",
    endDate: "",
};
exports.BalanceBudgetSpec = {
    $type: "yandex.cloud.billing.v1.BalanceBudgetSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(18).string(v);
        }
        for (const v of message.thresholdRules) {
            exports.ThresholdRule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.startDate !== "") {
            writer.uint32(34).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(42).string(message.endDate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBalanceBudgetSpec);
        message.notificationUserAccountIds = [];
        message.thresholdRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.notificationUserAccountIds.push(reader.string());
                    break;
                case 3:
                    message.thresholdRules.push(exports.ThresholdRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startDate = reader.string();
                    break;
                case 5:
                    message.endDate = reader.string();
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
        const message = Object.assign({}, baseBalanceBudgetSpec);
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : "";
        message.notificationUserAccountIds = ((_a = object.notificationUserAccountIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.thresholdRules = ((_b = object.thresholdRules) !== null && _b !== void 0 ? _b : []).map((e) => exports.ThresholdRule.fromJSON(e));
        message.startDate =
            object.startDate !== undefined && object.startDate !== null
                ? String(object.startDate)
                : "";
        message.endDate =
            object.endDate !== undefined && object.endDate !== null
                ? String(object.endDate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds = message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        if (message.thresholdRules) {
            obj.thresholdRules = message.thresholdRules.map((e) => e ? exports.ThresholdRule.toJSON(e) : undefined);
        }
        else {
            obj.thresholdRules = [];
        }
        message.startDate !== undefined && (obj.startDate = message.startDate);
        message.endDate !== undefined && (obj.endDate = message.endDate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseBalanceBudgetSpec);
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.notificationUserAccountIds =
            ((_b = object.notificationUserAccountIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.thresholdRules =
            ((_c = object.thresholdRules) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ThresholdRule.fromPartial(e))) || [];
        message.startDate = (_d = object.startDate) !== null && _d !== void 0 ? _d : "";
        message.endDate = (_e = object.endDate) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BalanceBudgetSpec.$type, exports.BalanceBudgetSpec);
const baseConsumptionFilter = {
    $type: "yandex.cloud.billing.v1.ConsumptionFilter",
    serviceIds: "",
};
exports.ConsumptionFilter = {
    $type: "yandex.cloud.billing.v1.ConsumptionFilter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.serviceIds) {
            writer.uint32(10).string(v);
        }
        for (const v of message.cloudFoldersFilters) {
            exports.CloudFoldersConsumptionFilter.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseConsumptionFilter);
        message.serviceIds = [];
        message.cloudFoldersFilters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceIds.push(reader.string());
                    break;
                case 2:
                    message.cloudFoldersFilters.push(exports.CloudFoldersConsumptionFilter.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseConsumptionFilter);
        message.serviceIds = ((_a = object.serviceIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.cloudFoldersFilters = ((_b = object.cloudFoldersFilters) !== null && _b !== void 0 ? _b : []).map((e) => exports.CloudFoldersConsumptionFilter.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.serviceIds) {
            obj.serviceIds = message.serviceIds.map((e) => e);
        }
        else {
            obj.serviceIds = [];
        }
        if (message.cloudFoldersFilters) {
            obj.cloudFoldersFilters = message.cloudFoldersFilters.map((e) => e ? exports.CloudFoldersConsumptionFilter.toJSON(e) : undefined);
        }
        else {
            obj.cloudFoldersFilters = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseConsumptionFilter);
        message.serviceIds = ((_a = object.serviceIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.cloudFoldersFilters =
            ((_b = object.cloudFoldersFilters) === null || _b === void 0 ? void 0 : _b.map((e) => exports.CloudFoldersConsumptionFilter.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ConsumptionFilter.$type, exports.ConsumptionFilter);
const baseCloudFoldersConsumptionFilter = {
    $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter",
    cloudId: "",
    folderIds: "",
};
exports.CloudFoldersConsumptionFilter = {
    $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cloudId !== "") {
            writer.uint32(10).string(message.cloudId);
        }
        for (const v of message.folderIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCloudFoldersConsumptionFilter);
        message.folderIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.folderIds.push(reader.string());
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
        const message = Object.assign({}, baseCloudFoldersConsumptionFilter);
        message.cloudId =
            object.cloudId !== undefined && object.cloudId !== null
                ? String(object.cloudId)
                : "";
        message.folderIds = ((_a = object.folderIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        if (message.folderIds) {
            obj.folderIds = message.folderIds.map((e) => e);
        }
        else {
            obj.folderIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCloudFoldersConsumptionFilter);
        message.cloudId = (_a = object.cloudId) !== null && _a !== void 0 ? _a : "";
        message.folderIds = ((_b = object.folderIds) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CloudFoldersConsumptionFilter.$type, exports.CloudFoldersConsumptionFilter);
const baseThresholdRule = {
    $type: "yandex.cloud.billing.v1.ThresholdRule",
    type: 0,
    amount: "",
    notificationUserAccountIds: "",
};
exports.ThresholdRule = {
    $type: "yandex.cloud.billing.v1.ThresholdRule",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        for (const v of message.notificationUserAccountIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseThresholdRule);
        message.notificationUserAccountIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.notificationUserAccountIds.push(reader.string());
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
        const message = Object.assign({}, baseThresholdRule);
        message.type =
            object.type !== undefined && object.type !== null
                ? thresholdTypeFromJSON(object.type)
                : 0;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? String(object.amount)
                : "";
        message.notificationUserAccountIds = ((_a = object.notificationUserAccountIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = thresholdTypeToJSON(message.type));
        message.amount !== undefined && (obj.amount = message.amount);
        if (message.notificationUserAccountIds) {
            obj.notificationUserAccountIds = message.notificationUserAccountIds.map((e) => e);
        }
        else {
            obj.notificationUserAccountIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseThresholdRule);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.notificationUserAccountIds =
            ((_c = object.notificationUserAccountIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ThresholdRule.$type, exports.ThresholdRule);
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
