import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.billing.v1";
export declare enum BudgetStatus {
    BUDGET_STATUS_UNSPECIFIED = 0,
    /** CREATING - The budget is being created. */
    CREATING = 1,
    /** ACTIVE - The budget is active. */
    ACTIVE = 2,
    /** FINISHED - The budget is finished. */
    FINISHED = 3,
    UNRECOGNIZED = -1
}
export declare function budgetStatusFromJSON(object: any): BudgetStatus;
export declare function budgetStatusToJSON(object: BudgetStatus): string;
export declare enum ResetPeriodType {
    RESET_PERIOD_TYPE_UNSPECIFIED = 0,
    /** MONTHLY - Reset budget every month. */
    MONTHLY = 1,
    /** QUARTER - Reset budget every quarter. */
    QUARTER = 2,
    /** ANNUALLY - Reset budget every year. */
    ANNUALLY = 3,
    UNRECOGNIZED = -1
}
export declare function resetPeriodTypeFromJSON(object: any): ResetPeriodType;
export declare function resetPeriodTypeToJSON(object: ResetPeriodType): string;
/** Define the unit of the [ThesholdRule.amount]. */
export declare enum ThresholdType {
    THRESHOLD_TYPE_UNSPECIFIED = 0,
    /** PERCENT - Percent. */
    PERCENT = 1,
    /** AMOUNT - The same as budget amount. */
    AMOUNT = 2,
    UNRECOGNIZED = -1
}
export declare function thresholdTypeFromJSON(object: any): ThresholdType;
export declare function thresholdTypeToJSON(object: ThresholdType): string;
/** A Budget resource. For more information, see [/docs/billing/concepts/budget]. */
export interface Budget {
    $type: "yandex.cloud.billing.v1.Budget";
    /** ID of the budget. */
    id: string;
    /** Name of the budget. */
    name: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** ID of the billing account that the budget belongs to. */
    billingAccountId: string;
    /** Status of the budget. */
    status: BudgetStatus;
    /** Cost budget specification. */
    costBudget?: CostBudgetSpec | undefined;
    /** Expense budget specification. */
    expenseBudget?: ExpenseBudgetSpec | undefined;
    /** Balance budget specification. */
    balanceBudget?: BalanceBudgetSpec | undefined;
}
/** Cost budget specification describes budget that can be used to control cost of cloud resources usage. */
export interface CostBudgetSpec {
    $type: "yandex.cloud.billing.v1.CostBudgetSpec";
    /** Max cost threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate cost thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /** Filter that can be used for specific resources selection. Only consumption cost of selected resources are used for the budget calculation. */
    filter?: ConsumptionFilter;
    /**
     * Periodic start type that resets budget after specified period is finished.
     * First time budget is calculated in the current period, i.e. current month, quarter or year.
     */
    resetPeriod: ResetPeriodType | undefined;
    /**
     * Custom start date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string | undefined;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Expense budget specification describes budget that can be used to control expense of cloud resources usage. */
export interface ExpenseBudgetSpec {
    $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec";
    /** Max expense threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate expense thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /** Filter that can be used for specific resources selection. Only consumption expense of selected resources are used for the budget calculation. */
    filter?: ConsumptionFilter;
    /**
     * Periodic start type that resets budget after specified period is finished.
     * First time budget is calculated in the current period, i.e. current month, quarter or year.
     */
    resetPeriod: ResetPeriodType | undefined;
    /**
     * Custom start date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string | undefined;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Balance budget specification describes budget that can be used to control [yandex.cloud.billing.v1.BillingAccount.balance]. */
export interface BalanceBudgetSpec {
    $type: "yandex.cloud.billing.v1.BalanceBudgetSpec";
    /** Max balance threshold of the budget. Amount currency is the same as corresponding [yandex.cloud.billing.v1.BillingAccount.currency]. */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the budget exceeds.
     */
    notificationUserAccountIds: string[];
    /**
     * List of the [ThresholdRule].
     * Rules define intermediate balance thresholds of the budget.
     */
    thresholdRules: ThresholdRule[];
    /**
     * Start_date of the budget.
     * Must be the first day of a month and must be formatted like YYYY-MM-DD.
     */
    startDate: string;
    /**
     * End date of the budget.
     * Must be the last day of a month and must be formatted like YYYY-MM-DD.
     */
    endDate: string;
}
/** Filter that can be used for specific resources selection. */
export interface ConsumptionFilter {
    $type: "yandex.cloud.billing.v1.ConsumptionFilter";
    /**
     * IDs of the [yandex.cloud.billing.v1.Service].
     * Only consumption of resources corresponding to the given services is used for the budget calculation.
     * Empty sequence means no services filters.
     */
    serviceIds: string[];
    /**
     * Cloud and folders consumption filter.
     * Only consumption within specified clouds and folders is used for the budget calculation.
     * Empty sequence means no cloud and folders filters.
     */
    cloudFoldersFilters: CloudFoldersConsumptionFilter[];
}
/** Filter that can be used for specific cloud and its folders selection. */
export interface CloudFoldersConsumptionFilter {
    $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter";
    /**
     * ID of the [yandex.cloud.resourcemanager.v1.Cloud].
     * Only consumption within specified cloud is used for the budget calculation.
     */
    cloudId: string;
    /**
     * IDs of the [yandex.cloud.resourcemanager.v1.Folder].
     * Only consumption within specified folders of the given cloud is used for the budget calculation.
     * Empty sequence means no folders filters and the whole cloud consumption will be used.
     */
    folderIds: string[];
}
/** Rules that define intermediate cost thresholds of the budget. */
export interface ThresholdRule {
    $type: "yandex.cloud.billing.v1.ThresholdRule";
    /** Type of the rule. */
    type: ThresholdType;
    /**
     * Amount of the rule.
     *  * Must be less than 100 if type is PERCENT.
     *  * Must be less than budget's amount if type is AMOUNT.
     */
    amount: string;
    /**
     * IDs of the [yandex.cloud.iam.v1.UserAccount].
     * Specified users will be be notified if the threshold exceeds.
     */
    notificationUserAccountIds: string[];
}
export declare const Budget: {
    $type: "yandex.cloud.billing.v1.Budget";
    encode(message: Budget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Budget;
    fromJSON(object: any): Budget;
    toJSON(message: Budget): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: BudgetStatus | undefined;
        billingAccountId?: string | undefined;
        costBudget?: {
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
        expenseBudget?: {
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
        balanceBudget?: {
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: BudgetStatus | undefined;
        billingAccountId?: string | undefined;
        costBudget?: ({
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            filter?: ({
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } & {
                serviceIds?: (string[] & string[] & Record<Exclude<keyof I["costBudget"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                cloudFoldersFilters?: ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] & ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                } & {
                    cloudId?: string | undefined;
                    folderIds?: (string[] & string[] & Record<Exclude<keyof I["costBudget"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["costBudget"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["costBudget"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["costBudget"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["costBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["costBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["costBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["costBudget"]["thresholdRules"], "$type" | keyof {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["costBudget"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
        expenseBudget?: ({
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            filter?: ({
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } & {
                serviceIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudget"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                cloudFoldersFilters?: ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] & ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                } & {
                    cloudId?: string | undefined;
                    folderIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudget"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["expenseBudget"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["expenseBudget"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["expenseBudget"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["expenseBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["expenseBudget"]["thresholdRules"], "$type" | keyof {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            resetPeriod?: ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["expenseBudget"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
        balanceBudget?: ({
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["balanceBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["balanceBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["balanceBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["balanceBudget"]["thresholdRules"], "$type" | keyof {
                type?: ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["balanceBudget"], "$type" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "startDate" | "endDate">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "status" | "billingAccountId" | "costBudget" | "expenseBudget" | "balanceBudget">, never>>(object: I): Budget;
};
export declare const CostBudgetSpec: {
    $type: "yandex.cloud.billing.v1.CostBudgetSpec";
    encode(message: CostBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CostBudgetSpec;
    fromJSON(object: any): CostBudgetSpec;
    toJSON(message: CostBudgetSpec): unknown;
    fromPartial<I extends {
        filter?: {
            serviceIds?: string[] | undefined;
            cloudFoldersFilters?: {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: string[] | undefined;
        thresholdRules?: {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] | undefined;
        resetPeriod?: ResetPeriodType | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & {
        filter?: ({
            serviceIds?: string[] | undefined;
            cloudFoldersFilters?: {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] | undefined;
        } & {
            serviceIds?: (string[] & string[] & Record<Exclude<keyof I["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
            cloudFoldersFilters?: ({
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] & ({
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            } & {
                cloudId?: string | undefined;
                folderIds?: (string[] & string[] & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"], "$type" | keyof {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        thresholdRules?: ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] & ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        } & {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["thresholdRules"], "$type" | keyof {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[]>, never>) | undefined;
        resetPeriod?: ResetPeriodType | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>>(object: I): CostBudgetSpec;
};
export declare const ExpenseBudgetSpec: {
    $type: "yandex.cloud.billing.v1.ExpenseBudgetSpec";
    encode(message: ExpenseBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExpenseBudgetSpec;
    fromJSON(object: any): ExpenseBudgetSpec;
    toJSON(message: ExpenseBudgetSpec): unknown;
    fromPartial<I extends {
        filter?: {
            serviceIds?: string[] | undefined;
            cloudFoldersFilters?: {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] | undefined;
        } | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: string[] | undefined;
        thresholdRules?: {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] | undefined;
        resetPeriod?: ResetPeriodType | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & {
        filter?: ({
            serviceIds?: string[] | undefined;
            cloudFoldersFilters?: {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] | undefined;
        } & {
            serviceIds?: (string[] & string[] & Record<Exclude<keyof I["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
            cloudFoldersFilters?: ({
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[] & ({
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            } & {
                cloudId?: string | undefined;
                folderIds?: (string[] & string[] & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["filter"]["cloudFoldersFilters"], "$type" | keyof {
                cloudId?: string | undefined;
                folderIds?: string[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        thresholdRules?: ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] & ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        } & {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["thresholdRules"], "$type" | keyof {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[]>, never>) | undefined;
        resetPeriod?: ResetPeriodType | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>>(object: I): ExpenseBudgetSpec;
};
export declare const BalanceBudgetSpec: {
    $type: "yandex.cloud.billing.v1.BalanceBudgetSpec";
    encode(message: BalanceBudgetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BalanceBudgetSpec;
    fromJSON(object: any): BalanceBudgetSpec;
    toJSON(message: BalanceBudgetSpec): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
        notificationUserAccountIds?: string[] | undefined;
        thresholdRules?: {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & {
        amount?: string | undefined;
        notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        thresholdRules?: ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[] & ({
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        } & {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["thresholdRules"], "$type" | keyof {
            type?: ThresholdType | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
        }[]>, never>) | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "startDate" | "endDate">, never>>(object: I): BalanceBudgetSpec;
};
export declare const ConsumptionFilter: {
    $type: "yandex.cloud.billing.v1.ConsumptionFilter";
    encode(message: ConsumptionFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsumptionFilter;
    fromJSON(object: any): ConsumptionFilter;
    toJSON(message: ConsumptionFilter): unknown;
    fromPartial<I extends {
        serviceIds?: string[] | undefined;
        cloudFoldersFilters?: {
            cloudId?: string | undefined;
            folderIds?: string[] | undefined;
        }[] | undefined;
    } & {
        serviceIds?: (string[] & string[] & Record<Exclude<keyof I["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
        cloudFoldersFilters?: ({
            cloudId?: string | undefined;
            folderIds?: string[] | undefined;
        }[] & ({
            cloudId?: string | undefined;
            folderIds?: string[] | undefined;
        } & {
            cloudId?: string | undefined;
            folderIds?: (string[] & string[] & Record<Exclude<keyof I["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["cloudFoldersFilters"], "$type" | keyof {
            cloudId?: string | undefined;
            folderIds?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceIds" | "cloudFoldersFilters">, never>>(object: I): ConsumptionFilter;
};
export declare const CloudFoldersConsumptionFilter: {
    $type: "yandex.cloud.billing.v1.CloudFoldersConsumptionFilter";
    encode(message: CloudFoldersConsumptionFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudFoldersConsumptionFilter;
    fromJSON(object: any): CloudFoldersConsumptionFilter;
    toJSON(message: CloudFoldersConsumptionFilter): unknown;
    fromPartial<I extends {
        cloudId?: string | undefined;
        folderIds?: string[] | undefined;
    } & {
        cloudId?: string | undefined;
        folderIds?: (string[] & string[] & Record<Exclude<keyof I["folderIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "cloudId" | "folderIds">, never>>(object: I): CloudFoldersConsumptionFilter;
};
export declare const ThresholdRule: {
    $type: "yandex.cloud.billing.v1.ThresholdRule";
    encode(message: ThresholdRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThresholdRule;
    fromJSON(object: any): ThresholdRule;
    toJSON(message: ThresholdRule): unknown;
    fromPartial<I extends {
        type?: ThresholdType | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: string[] | undefined;
    } & {
        type?: ThresholdType | undefined;
        amount?: string | undefined;
        notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "amount" | "notificationUserAccountIds">, never>>(object: I): ThresholdRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
