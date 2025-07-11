"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuota = exports.UserSettings = exports.UserSpec = exports.Permission = exports.User = exports.userSettings_RemoteFilesystemReadMethodToJSON = exports.userSettings_RemoteFilesystemReadMethodFromJSON = exports.UserSettings_RemoteFilesystemReadMethod = exports.userSettings_LocalFilesystemReadMethodToJSON = exports.userSettings_LocalFilesystemReadMethodFromJSON = exports.UserSettings_LocalFilesystemReadMethod = exports.userSettings_DateTimeOutputFormatToJSON = exports.userSettings_DateTimeOutputFormatFromJSON = exports.UserSettings_DateTimeOutputFormat = exports.userSettings_DateTimeInputFormatToJSON = exports.userSettings_DateTimeInputFormatFromJSON = exports.UserSettings_DateTimeInputFormat = exports.userSettings_FormatRegexpEscapingRuleToJSON = exports.userSettings_FormatRegexpEscapingRuleFromJSON = exports.UserSettings_FormatRegexpEscapingRule = exports.userSettings_JoinAlgorithmToJSON = exports.userSettings_JoinAlgorithmFromJSON = exports.UserSettings_JoinAlgorithm = exports.userSettings_CountDistinctImplementationToJSON = exports.userSettings_CountDistinctImplementationFromJSON = exports.UserSettings_CountDistinctImplementation = exports.userSettings_QuotaModeToJSON = exports.userSettings_QuotaModeFromJSON = exports.UserSettings_QuotaMode = exports.userSettings_DistributedProductModeToJSON = exports.userSettings_DistributedProductModeFromJSON = exports.UserSettings_DistributedProductMode = exports.userSettings_GroupByOverflowModeToJSON = exports.userSettings_GroupByOverflowModeFromJSON = exports.UserSettings_GroupByOverflowMode = exports.userSettings_OverflowModeToJSON = exports.userSettings_OverflowModeFromJSON = exports.UserSettings_OverflowMode = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
var UserSettings_OverflowMode;
(function (UserSettings_OverflowMode) {
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_UNSPECIFIED"] = 0] = "OVERFLOW_MODE_UNSPECIFIED";
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_THROW"] = 1] = "OVERFLOW_MODE_THROW";
    UserSettings_OverflowMode[UserSettings_OverflowMode["OVERFLOW_MODE_BREAK"] = 2] = "OVERFLOW_MODE_BREAK";
    UserSettings_OverflowMode[UserSettings_OverflowMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_OverflowMode = exports.UserSettings_OverflowMode || (exports.UserSettings_OverflowMode = {}));
function userSettings_OverflowModeFromJSON(object) {
    switch (object) {
        case 0:
        case "OVERFLOW_MODE_UNSPECIFIED":
            return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case "OVERFLOW_MODE_THROW":
            return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
        case 2:
        case "OVERFLOW_MODE_BREAK":
            return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_OverflowMode.UNRECOGNIZED;
    }
}
exports.userSettings_OverflowModeFromJSON = userSettings_OverflowModeFromJSON;
function userSettings_OverflowModeToJSON(object) {
    switch (object) {
        case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
            return "OVERFLOW_MODE_UNSPECIFIED";
        case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
            return "OVERFLOW_MODE_THROW";
        case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
            return "OVERFLOW_MODE_BREAK";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_OverflowModeToJSON = userSettings_OverflowModeToJSON;
var UserSettings_GroupByOverflowMode;
(function (UserSettings_GroupByOverflowMode) {
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_UNSPECIFIED"] = 0] = "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_THROW"] = 1] = "GROUP_BY_OVERFLOW_MODE_THROW";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_BREAK"] = 2] = "GROUP_BY_OVERFLOW_MODE_BREAK";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["GROUP_BY_OVERFLOW_MODE_ANY"] = 3] = "GROUP_BY_OVERFLOW_MODE_ANY";
    UserSettings_GroupByOverflowMode[UserSettings_GroupByOverflowMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_GroupByOverflowMode = exports.UserSettings_GroupByOverflowMode || (exports.UserSettings_GroupByOverflowMode = {}));
function userSettings_GroupByOverflowModeFromJSON(object) {
    switch (object) {
        case 0:
        case "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED":
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case "GROUP_BY_OVERFLOW_MODE_THROW":
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
        case 2:
        case "GROUP_BY_OVERFLOW_MODE_BREAK":
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
        case 3:
        case "GROUP_BY_OVERFLOW_MODE_ANY":
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
    }
}
exports.userSettings_GroupByOverflowModeFromJSON = userSettings_GroupByOverflowModeFromJSON;
function userSettings_GroupByOverflowModeToJSON(object) {
    switch (object) {
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
            return "GROUP_BY_OVERFLOW_MODE_UNSPECIFIED";
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
            return "GROUP_BY_OVERFLOW_MODE_THROW";
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
            return "GROUP_BY_OVERFLOW_MODE_BREAK";
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
            return "GROUP_BY_OVERFLOW_MODE_ANY";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_GroupByOverflowModeToJSON = userSettings_GroupByOverflowModeToJSON;
var UserSettings_DistributedProductMode;
(function (UserSettings_DistributedProductMode) {
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED"] = 0] = "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED";
    /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_DENY"] = 1] = "DISTRIBUTED_PRODUCT_MODE_DENY";
    /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_LOCAL"] = 2] = "DISTRIBUTED_PRODUCT_MODE_LOCAL";
    /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_GLOBAL"] = 3] = "DISTRIBUTED_PRODUCT_MODE_GLOBAL";
    /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["DISTRIBUTED_PRODUCT_MODE_ALLOW"] = 4] = "DISTRIBUTED_PRODUCT_MODE_ALLOW";
    UserSettings_DistributedProductMode[UserSettings_DistributedProductMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_DistributedProductMode = exports.UserSettings_DistributedProductMode || (exports.UserSettings_DistributedProductMode = {}));
function userSettings_DistributedProductModeFromJSON(object) {
    switch (object) {
        case 0:
        case "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED":
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
        case 1:
        case "DISTRIBUTED_PRODUCT_MODE_DENY":
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
        case 2:
        case "DISTRIBUTED_PRODUCT_MODE_LOCAL":
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
        case 3:
        case "DISTRIBUTED_PRODUCT_MODE_GLOBAL":
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
        case 4:
        case "DISTRIBUTED_PRODUCT_MODE_ALLOW":
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_DistributedProductMode.UNRECOGNIZED;
    }
}
exports.userSettings_DistributedProductModeFromJSON = userSettings_DistributedProductModeFromJSON;
function userSettings_DistributedProductModeToJSON(object) {
    switch (object) {
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
            return "DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED";
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
            return "DISTRIBUTED_PRODUCT_MODE_DENY";
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
            return "DISTRIBUTED_PRODUCT_MODE_LOCAL";
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
            return "DISTRIBUTED_PRODUCT_MODE_GLOBAL";
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
            return "DISTRIBUTED_PRODUCT_MODE_ALLOW";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_DistributedProductModeToJSON = userSettings_DistributedProductModeToJSON;
var UserSettings_QuotaMode;
(function (UserSettings_QuotaMode) {
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_UNSPECIFIED"] = 0] = "QUOTA_MODE_UNSPECIFIED";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_DEFAULT"] = 1] = "QUOTA_MODE_DEFAULT";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_KEYED"] = 2] = "QUOTA_MODE_KEYED";
    UserSettings_QuotaMode[UserSettings_QuotaMode["QUOTA_MODE_KEYED_BY_IP"] = 3] = "QUOTA_MODE_KEYED_BY_IP";
    UserSettings_QuotaMode[UserSettings_QuotaMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_QuotaMode = exports.UserSettings_QuotaMode || (exports.UserSettings_QuotaMode = {}));
function userSettings_QuotaModeFromJSON(object) {
    switch (object) {
        case 0:
        case "QUOTA_MODE_UNSPECIFIED":
            return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
        case 1:
        case "QUOTA_MODE_DEFAULT":
            return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
        case 2:
        case "QUOTA_MODE_KEYED":
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
        case 3:
        case "QUOTA_MODE_KEYED_BY_IP":
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_QuotaMode.UNRECOGNIZED;
    }
}
exports.userSettings_QuotaModeFromJSON = userSettings_QuotaModeFromJSON;
function userSettings_QuotaModeToJSON(object) {
    switch (object) {
        case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
            return "QUOTA_MODE_UNSPECIFIED";
        case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
            return "QUOTA_MODE_DEFAULT";
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
            return "QUOTA_MODE_KEYED";
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
            return "QUOTA_MODE_KEYED_BY_IP";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_QuotaModeToJSON = userSettings_QuotaModeToJSON;
var UserSettings_CountDistinctImplementation;
(function (UserSettings_CountDistinctImplementation) {
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED"] = 0] = "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ"] = 1] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED"] = 2] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64"] = 3] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12"] = 4] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT"] = 5] = "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT";
    UserSettings_CountDistinctImplementation[UserSettings_CountDistinctImplementation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_CountDistinctImplementation = exports.UserSettings_CountDistinctImplementation || (exports.UserSettings_CountDistinctImplementation = {}));
function userSettings_CountDistinctImplementationFromJSON(object) {
    switch (object) {
        case 0:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
        case 1:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
        case 2:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
        case 3:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
        case 4:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
        case 5:
        case "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT":
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
    }
}
exports.userSettings_CountDistinctImplementationFromJSON = userSettings_CountDistinctImplementationFromJSON;
function userSettings_CountDistinctImplementationToJSON(object) {
    switch (object) {
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED";
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ";
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED";
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64";
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12";
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
            return "COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_CountDistinctImplementationToJSON = userSettings_CountDistinctImplementationToJSON;
var UserSettings_JoinAlgorithm;
(function (UserSettings_JoinAlgorithm) {
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_UNSPECIFIED"] = 0] = "JOIN_ALGORITHM_UNSPECIFIED";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_HASH"] = 1] = "JOIN_ALGORITHM_HASH";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_PARALLEL_HASH"] = 2] = "JOIN_ALGORITHM_PARALLEL_HASH";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_PARTIAL_MERGE"] = 3] = "JOIN_ALGORITHM_PARTIAL_MERGE";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_DIRECT"] = 4] = "JOIN_ALGORITHM_DIRECT";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_AUTO"] = 5] = "JOIN_ALGORITHM_AUTO";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_FULL_SORTING_MERGE"] = 6] = "JOIN_ALGORITHM_FULL_SORTING_MERGE";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["JOIN_ALGORITHM_PREFER_PARTIAL_MERGE"] = 7] = "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE";
    UserSettings_JoinAlgorithm[UserSettings_JoinAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_JoinAlgorithm = exports.UserSettings_JoinAlgorithm || (exports.UserSettings_JoinAlgorithm = {}));
function userSettings_JoinAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case "JOIN_ALGORITHM_UNSPECIFIED":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED;
        case 1:
        case "JOIN_ALGORITHM_HASH":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH;
        case 2:
        case "JOIN_ALGORITHM_PARALLEL_HASH":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH;
        case 3:
        case "JOIN_ALGORITHM_PARTIAL_MERGE":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE;
        case 4:
        case "JOIN_ALGORITHM_DIRECT":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT;
        case 5:
        case "JOIN_ALGORITHM_AUTO":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO;
        case 6:
        case "JOIN_ALGORITHM_FULL_SORTING_MERGE":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE;
        case 7:
        case "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE":
            return UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_JoinAlgorithm.UNRECOGNIZED;
    }
}
exports.userSettings_JoinAlgorithmFromJSON = userSettings_JoinAlgorithmFromJSON;
function userSettings_JoinAlgorithmToJSON(object) {
    switch (object) {
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_UNSPECIFIED:
            return "JOIN_ALGORITHM_UNSPECIFIED";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_HASH:
            return "JOIN_ALGORITHM_HASH";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARALLEL_HASH:
            return "JOIN_ALGORITHM_PARALLEL_HASH";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PARTIAL_MERGE:
            return "JOIN_ALGORITHM_PARTIAL_MERGE";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_DIRECT:
            return "JOIN_ALGORITHM_DIRECT";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_AUTO:
            return "JOIN_ALGORITHM_AUTO";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_FULL_SORTING_MERGE:
            return "JOIN_ALGORITHM_FULL_SORTING_MERGE";
        case UserSettings_JoinAlgorithm.JOIN_ALGORITHM_PREFER_PARTIAL_MERGE:
            return "JOIN_ALGORITHM_PREFER_PARTIAL_MERGE";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_JoinAlgorithmToJSON = userSettings_JoinAlgorithmToJSON;
var UserSettings_FormatRegexpEscapingRule;
(function (UserSettings_FormatRegexpEscapingRule) {
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED"] = 0] = "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_ESCAPED"] = 1] = "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_QUOTED"] = 2] = "FORMAT_REGEXP_ESCAPING_RULE_QUOTED";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_CSV"] = 3] = "FORMAT_REGEXP_ESCAPING_RULE_CSV";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_JSON"] = 4] = "FORMAT_REGEXP_ESCAPING_RULE_JSON";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_XML"] = 5] = "FORMAT_REGEXP_ESCAPING_RULE_XML";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["FORMAT_REGEXP_ESCAPING_RULE_RAW"] = 6] = "FORMAT_REGEXP_ESCAPING_RULE_RAW";
    UserSettings_FormatRegexpEscapingRule[UserSettings_FormatRegexpEscapingRule["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_FormatRegexpEscapingRule = exports.UserSettings_FormatRegexpEscapingRule || (exports.UserSettings_FormatRegexpEscapingRule = {}));
function userSettings_FormatRegexpEscapingRuleFromJSON(object) {
    switch (object) {
        case 0:
        case "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED;
        case 1:
        case "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED;
        case 2:
        case "FORMAT_REGEXP_ESCAPING_RULE_QUOTED":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED;
        case 3:
        case "FORMAT_REGEXP_ESCAPING_RULE_CSV":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV;
        case 4:
        case "FORMAT_REGEXP_ESCAPING_RULE_JSON":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON;
        case 5:
        case "FORMAT_REGEXP_ESCAPING_RULE_XML":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML;
        case 6:
        case "FORMAT_REGEXP_ESCAPING_RULE_RAW":
            return UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_FormatRegexpEscapingRule.UNRECOGNIZED;
    }
}
exports.userSettings_FormatRegexpEscapingRuleFromJSON = userSettings_FormatRegexpEscapingRuleFromJSON;
function userSettings_FormatRegexpEscapingRuleToJSON(object) {
    switch (object) {
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED:
            return "FORMAT_REGEXP_ESCAPING_RULE_UNSPECIFIED";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_ESCAPED:
            return "FORMAT_REGEXP_ESCAPING_RULE_ESCAPED";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_QUOTED:
            return "FORMAT_REGEXP_ESCAPING_RULE_QUOTED";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_CSV:
            return "FORMAT_REGEXP_ESCAPING_RULE_CSV";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_JSON:
            return "FORMAT_REGEXP_ESCAPING_RULE_JSON";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_XML:
            return "FORMAT_REGEXP_ESCAPING_RULE_XML";
        case UserSettings_FormatRegexpEscapingRule.FORMAT_REGEXP_ESCAPING_RULE_RAW:
            return "FORMAT_REGEXP_ESCAPING_RULE_RAW";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_FormatRegexpEscapingRuleToJSON = userSettings_FormatRegexpEscapingRuleToJSON;
var UserSettings_DateTimeInputFormat;
(function (UserSettings_DateTimeInputFormat) {
    UserSettings_DateTimeInputFormat[UserSettings_DateTimeInputFormat["DATE_TIME_INPUT_FORMAT_UNSPECIFIED"] = 0] = "DATE_TIME_INPUT_FORMAT_UNSPECIFIED";
    UserSettings_DateTimeInputFormat[UserSettings_DateTimeInputFormat["DATE_TIME_INPUT_FORMAT_BEST_EFFORT"] = 1] = "DATE_TIME_INPUT_FORMAT_BEST_EFFORT";
    UserSettings_DateTimeInputFormat[UserSettings_DateTimeInputFormat["DATE_TIME_INPUT_FORMAT_BASIC"] = 2] = "DATE_TIME_INPUT_FORMAT_BASIC";
    UserSettings_DateTimeInputFormat[UserSettings_DateTimeInputFormat["DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US"] = 3] = "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US";
    UserSettings_DateTimeInputFormat[UserSettings_DateTimeInputFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_DateTimeInputFormat = exports.UserSettings_DateTimeInputFormat || (exports.UserSettings_DateTimeInputFormat = {}));
function userSettings_DateTimeInputFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "DATE_TIME_INPUT_FORMAT_UNSPECIFIED":
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED;
        case 1:
        case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT":
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT;
        case 2:
        case "DATE_TIME_INPUT_FORMAT_BASIC":
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC;
        case 3:
        case "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US":
            return UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_DateTimeInputFormat.UNRECOGNIZED;
    }
}
exports.userSettings_DateTimeInputFormatFromJSON = userSettings_DateTimeInputFormatFromJSON;
function userSettings_DateTimeInputFormatToJSON(object) {
    switch (object) {
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_UNSPECIFIED:
            return "DATE_TIME_INPUT_FORMAT_UNSPECIFIED";
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT:
            return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT";
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BASIC:
            return "DATE_TIME_INPUT_FORMAT_BASIC";
        case UserSettings_DateTimeInputFormat.DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US:
            return "DATE_TIME_INPUT_FORMAT_BEST_EFFORT_US";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_DateTimeInputFormatToJSON = userSettings_DateTimeInputFormatToJSON;
var UserSettings_DateTimeOutputFormat;
(function (UserSettings_DateTimeOutputFormat) {
    UserSettings_DateTimeOutputFormat[UserSettings_DateTimeOutputFormat["DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED"] = 0] = "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED";
    UserSettings_DateTimeOutputFormat[UserSettings_DateTimeOutputFormat["DATE_TIME_OUTPUT_FORMAT_SIMPLE"] = 1] = "DATE_TIME_OUTPUT_FORMAT_SIMPLE";
    UserSettings_DateTimeOutputFormat[UserSettings_DateTimeOutputFormat["DATE_TIME_OUTPUT_FORMAT_ISO"] = 2] = "DATE_TIME_OUTPUT_FORMAT_ISO";
    UserSettings_DateTimeOutputFormat[UserSettings_DateTimeOutputFormat["DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP"] = 3] = "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP";
    UserSettings_DateTimeOutputFormat[UserSettings_DateTimeOutputFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_DateTimeOutputFormat = exports.UserSettings_DateTimeOutputFormat || (exports.UserSettings_DateTimeOutputFormat = {}));
function userSettings_DateTimeOutputFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED":
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED;
        case 1:
        case "DATE_TIME_OUTPUT_FORMAT_SIMPLE":
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE;
        case 2:
        case "DATE_TIME_OUTPUT_FORMAT_ISO":
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO;
        case 3:
        case "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP":
            return UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_DateTimeOutputFormat.UNRECOGNIZED;
    }
}
exports.userSettings_DateTimeOutputFormatFromJSON = userSettings_DateTimeOutputFormatFromJSON;
function userSettings_DateTimeOutputFormatToJSON(object) {
    switch (object) {
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED:
            return "DATE_TIME_OUTPUT_FORMAT_UNSPECIFIED";
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_SIMPLE:
            return "DATE_TIME_OUTPUT_FORMAT_SIMPLE";
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_ISO:
            return "DATE_TIME_OUTPUT_FORMAT_ISO";
        case UserSettings_DateTimeOutputFormat.DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP:
            return "DATE_TIME_OUTPUT_FORMAT_UNIX_TIMESTAMP";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_DateTimeOutputFormatToJSON = userSettings_DateTimeOutputFormatToJSON;
var UserSettings_LocalFilesystemReadMethod;
(function (UserSettings_LocalFilesystemReadMethod) {
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED"] = 0] = "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["LOCAL_FILESYSTEM_READ_METHOD_READ"] = 1] = "LOCAL_FILESYSTEM_READ_METHOD_READ";
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL"] = 2] = "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL";
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["LOCAL_FILESYSTEM_READ_METHOD_PREAD"] = 3] = "LOCAL_FILESYSTEM_READ_METHOD_PREAD";
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["LOCAL_FILESYSTEM_READ_METHOD_NMAP"] = 4] = "LOCAL_FILESYSTEM_READ_METHOD_NMAP";
    UserSettings_LocalFilesystemReadMethod[UserSettings_LocalFilesystemReadMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_LocalFilesystemReadMethod = exports.UserSettings_LocalFilesystemReadMethod || (exports.UserSettings_LocalFilesystemReadMethod = {}));
function userSettings_LocalFilesystemReadMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED":
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED;
        case 1:
        case "LOCAL_FILESYSTEM_READ_METHOD_READ":
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ;
        case 2:
        case "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL":
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL;
        case 3:
        case "LOCAL_FILESYSTEM_READ_METHOD_PREAD":
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD;
        case 4:
        case "LOCAL_FILESYSTEM_READ_METHOD_NMAP":
            return UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_LocalFilesystemReadMethod.UNRECOGNIZED;
    }
}
exports.userSettings_LocalFilesystemReadMethodFromJSON = userSettings_LocalFilesystemReadMethodFromJSON;
function userSettings_LocalFilesystemReadMethodToJSON(object) {
    switch (object) {
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED:
            return "LOCAL_FILESYSTEM_READ_METHOD_UNSPECIFIED";
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_READ:
            return "LOCAL_FILESYSTEM_READ_METHOD_READ";
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL:
            return "LOCAL_FILESYSTEM_READ_METHOD_PREAD_THREADPOOL";
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_PREAD:
            return "LOCAL_FILESYSTEM_READ_METHOD_PREAD";
        case UserSettings_LocalFilesystemReadMethod.LOCAL_FILESYSTEM_READ_METHOD_NMAP:
            return "LOCAL_FILESYSTEM_READ_METHOD_NMAP";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_LocalFilesystemReadMethodToJSON = userSettings_LocalFilesystemReadMethodToJSON;
var UserSettings_RemoteFilesystemReadMethod;
(function (UserSettings_RemoteFilesystemReadMethod) {
    UserSettings_RemoteFilesystemReadMethod[UserSettings_RemoteFilesystemReadMethod["REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED"] = 0] = "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED";
    UserSettings_RemoteFilesystemReadMethod[UserSettings_RemoteFilesystemReadMethod["REMOTE_FILESYSTEM_READ_METHOD_READ"] = 1] = "REMOTE_FILESYSTEM_READ_METHOD_READ";
    UserSettings_RemoteFilesystemReadMethod[UserSettings_RemoteFilesystemReadMethod["REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL"] = 2] = "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL";
    UserSettings_RemoteFilesystemReadMethod[UserSettings_RemoteFilesystemReadMethod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_RemoteFilesystemReadMethod = exports.UserSettings_RemoteFilesystemReadMethod || (exports.UserSettings_RemoteFilesystemReadMethod = {}));
function userSettings_RemoteFilesystemReadMethodFromJSON(object) {
    switch (object) {
        case 0:
        case "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED":
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED;
        case 1:
        case "REMOTE_FILESYSTEM_READ_METHOD_READ":
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ;
        case 2:
        case "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL":
            return UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserSettings_RemoteFilesystemReadMethod.UNRECOGNIZED;
    }
}
exports.userSettings_RemoteFilesystemReadMethodFromJSON = userSettings_RemoteFilesystemReadMethodFromJSON;
function userSettings_RemoteFilesystemReadMethodToJSON(object) {
    switch (object) {
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED:
            return "REMOTE_FILESYSTEM_READ_METHOD_UNSPECIFIED";
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_READ:
            return "REMOTE_FILESYSTEM_READ_METHOD_READ";
        case UserSettings_RemoteFilesystemReadMethod.REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL:
            return "REMOTE_FILESYSTEM_READ_METHOD_THREADPOOL";
        default:
            return "UNKNOWN";
    }
}
exports.userSettings_RemoteFilesystemReadMethodToJSON = userSettings_RemoteFilesystemReadMethodToJSON;
const baseUser = {
    $type: "yandex.cloud.mdb.clickhouse.v1.User",
    name: "",
    clusterId: "",
};
exports.User = {
    $type: "yandex.cloud.mdb.clickhouse.v1.User",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== "") {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.quotas) {
            exports.UserQuota.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUser);
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.quotas.push(exports.UserQuota.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUser);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.clusterId =
            object.clusterId !== undefined && object.clusterId !== null
                ? String(object.clusterId)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromJSON(object.settings)
                : undefined;
        message.quotas = ((_b = object.quotas) !== null && _b !== void 0 ? _b : []).map((e) => exports.UserQuota.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => e ? exports.UserQuota.toJSON(e) : undefined);
        }
        else {
            obj.quotas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUser);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.clusterId = (_b = object.clusterId) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromPartial(object.settings)
                : undefined;
        message.quotas = ((_d = object.quotas) === null || _d === void 0 ? void 0 : _d.map((e) => exports.UserQuota.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const basePermission = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Permission",
    databaseName: "",
};
exports.Permission = {
    $type: "yandex.cloud.mdb.clickhouse.v1.Permission",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== "") {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermission);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePermission);
        message.databaseName =
            object.databaseName !== undefined && object.databaseName !== null
                ? String(object.databaseName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePermission);
        message.databaseName = (_a = object.databaseName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
const baseUserSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec",
    name: "",
    password: "",
};
exports.UserSpec = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSpec",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            exports.UserSettings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.quotas) {
            exports.UserQuota.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSpec);
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.settings = exports.UserSettings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.quotas.push(exports.UserQuota.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseUserSpec);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.permissions = ((_a = object.permissions) !== null && _a !== void 0 ? _a : []).map((e) => exports.Permission.fromJSON(e));
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromJSON(object.settings)
                : undefined;
        message.quotas = ((_b = object.quotas) !== null && _b !== void 0 ? _b : []).map((e) => exports.UserQuota.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) => e ? exports.UserQuota.toJSON(e) : undefined);
        }
        else {
            obj.quotas = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUserSpec);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.permissions =
            ((_c = object.permissions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Permission.fromPartial(e))) || [];
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.UserSettings.fromPartial(object.settings)
                : undefined;
        message.quotas = ((_d = object.quotas) === null || _d === void 0 ? void 0 : _d.map((e) => exports.UserQuota.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
const baseUserSettings = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings",
    distributedProductMode: 0,
    readOverflowMode: 0,
    groupByOverflowMode: 0,
    sortOverflowMode: 0,
    resultOverflowMode: 0,
    distinctOverflowMode: 0,
    transferOverflowMode: 0,
    timeoutOverflowMode: 0,
    setOverflowMode: 0,
    joinOverflowMode: 0,
    joinAlgorithm: 0,
    countDistinctImplementation: 0,
    dateTimeInputFormat: 0,
    dateTimeOutputFormat: 0,
    quotaMode: 0,
    formatRegexp: "",
    formatRegexpEscapingRule: 0,
    localFilesystemReadMethod: 0,
    remoteFilesystemReadMethod: 0,
};
exports.UserSettings = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserSettings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.readonly !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.readonly }, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowDdl !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.allowDdl }, writer.uint32(18).fork()).ldelim();
        }
        if (message.allowIntrospectionFunctions !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.allowIntrospectionFunctions,
            }, writer.uint32(770).fork()).ldelim();
        }
        if (message.connectTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.connectTimeout }, writer.uint32(314).fork()).ldelim();
        }
        if (message.connectTimeoutWithFailover !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.connectTimeoutWithFailover,
            }, writer.uint32(778).fork()).ldelim();
        }
        if (message.receiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.receiveTimeout }, writer.uint32(322).fork()).ldelim();
        }
        if (message.sendTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.sendTimeout }, writer.uint32(330).fork()).ldelim();
        }
        if (message.timeoutBeforeCheckingExecutionSpeed !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.timeoutBeforeCheckingExecutionSpeed,
            }, writer.uint32(786).fork()).ldelim();
        }
        if (message.insertQuorum !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.insertQuorum }, writer.uint32(26).fork()).ldelim();
        }
        if (message.insertQuorumTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.insertQuorumTimeout,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.insertQuorumParallel !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.insertQuorumParallel,
            }, writer.uint32(794).fork()).ldelim();
        }
        if (message.insertNullAsDefault !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.insertNullAsDefault,
            }, writer.uint32(802).fork()).ldelim();
        }
        if (message.selectSequentialConsistency !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.selectSequentialConsistency,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.deduplicateBlocksInDependentMaterializedViews !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.deduplicateBlocksInDependentMaterializedViews,
            }, writer.uint32(810).fork()).ldelim();
        }
        if (message.replicationAlterPartitionsSync !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicationAlterPartitionsSync,
            }, writer.uint32(338).fork()).ldelim();
        }
        if (message.maxReplicaDelayForDistributedQueries !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxReplicaDelayForDistributedQueries,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.fallbackToStaleReplicasForDistributedQueries !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.fallbackToStaleReplicasForDistributedQueries,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.distributedProductMode !== 0) {
            writer.uint32(344).int32(message.distributedProductMode);
        }
        if (message.distributedAggregationMemoryEfficient !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.distributedAggregationMemoryEfficient,
            }, writer.uint32(578).fork()).ldelim();
        }
        if (message.distributedDdlTaskTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.distributedDdlTaskTimeout,
            }, writer.uint32(586).fork()).ldelim();
        }
        if (message.skipUnavailableShards !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.skipUnavailableShards,
            }, writer.uint32(650).fork()).ldelim();
        }
        if (message.compileExpressions !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.compileExpressions,
            }, writer.uint32(370).fork()).ldelim();
        }
        if (message.minCountToCompileExpression !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCountToCompileExpression,
            }, writer.uint32(378).fork()).ldelim();
        }
        if (message.maxBlockSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBlockSize }, writer.uint32(74).fork()).ldelim();
        }
        if (message.minInsertBlockSizeRows !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsertBlockSizeRows,
            }, writer.uint32(386).fork()).ldelim();
        }
        if (message.minInsertBlockSizeBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minInsertBlockSizeBytes,
            }, writer.uint32(394).fork()).ldelim();
        }
        if (message.maxInsertBlockSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxInsertBlockSize,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minBytesToUseDirectIo !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minBytesToUseDirectIo,
            }, writer.uint32(402).fork()).ldelim();
        }
        if (message.useUncompressedCache !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.useUncompressedCache,
            }, writer.uint32(410).fork()).ldelim();
        }
        if (message.mergeTreeMaxRowsToUseCache !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mergeTreeMaxRowsToUseCache,
            }, writer.uint32(418).fork()).ldelim();
        }
        if (message.mergeTreeMaxBytesToUseCache !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mergeTreeMaxBytesToUseCache,
            }, writer.uint32(426).fork()).ldelim();
        }
        if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mergeTreeMinRowsForConcurrentRead,
            }, writer.uint32(434).fork()).ldelim();
        }
        if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mergeTreeMinBytesForConcurrentRead,
            }, writer.uint32(442).fork()).ldelim();
        }
        if (message.maxBytesBeforeExternalGroupBy !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesBeforeExternalGroupBy,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.maxBytesBeforeExternalSort !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesBeforeExternalSort,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.groupByTwoLevelThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.groupByTwoLevelThreshold,
            }, writer.uint32(610).fork()).ldelim();
        }
        if (message.groupByTwoLevelThresholdBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.groupByTwoLevelThresholdBytes,
            }, writer.uint32(618).fork()).ldelim();
        }
        if (message.priority !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.priority }, writer.uint32(450).fork()).ldelim();
        }
        if (message.maxThreads !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxThreads }, writer.uint32(66).fork()).ldelim();
        }
        if (message.maxMemoryUsage !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxMemoryUsage }, writer.uint32(90).fork()).ldelim();
        }
        if (message.maxMemoryUsageForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxMemoryUsageForUser,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.maxNetworkBandwidth !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxNetworkBandwidth,
            }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxNetworkBandwidthForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxNetworkBandwidthForUser,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.maxPartitionsPerInsertBlock !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPartitionsPerInsertBlock,
            }, writer.uint32(818).fork()).ldelim();
        }
        if (message.maxConcurrentQueriesForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxConcurrentQueriesForUser,
            }, writer.uint32(826).fork()).ldelim();
        }
        if (message.forceIndexByDate !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.forceIndexByDate,
            }, writer.uint32(474).fork()).ldelim();
        }
        if (message.forcePrimaryKey !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.forcePrimaryKey }, writer.uint32(482).fork()).ldelim();
        }
        if (message.maxRowsToRead !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxRowsToRead }, writer.uint32(106).fork()).ldelim();
        }
        if (message.maxBytesToRead !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBytesToRead }, writer.uint32(114).fork()).ldelim();
        }
        if (message.readOverflowMode !== 0) {
            writer.uint32(120).int32(message.readOverflowMode);
        }
        if (message.maxRowsToGroupBy !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxRowsToGroupBy,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.groupByOverflowMode !== 0) {
            writer.uint32(136).int32(message.groupByOverflowMode);
        }
        if (message.maxRowsToSort !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxRowsToSort }, writer.uint32(146).fork()).ldelim();
        }
        if (message.maxBytesToSort !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBytesToSort }, writer.uint32(154).fork()).ldelim();
        }
        if (message.sortOverflowMode !== 0) {
            writer.uint32(160).int32(message.sortOverflowMode);
        }
        if (message.maxResultRows !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxResultRows }, writer.uint32(170).fork()).ldelim();
        }
        if (message.maxResultBytes !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxResultBytes }, writer.uint32(178).fork()).ldelim();
        }
        if (message.resultOverflowMode !== 0) {
            writer.uint32(184).int32(message.resultOverflowMode);
        }
        if (message.maxRowsInDistinct !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxRowsInDistinct,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.maxBytesInDistinct !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesInDistinct,
            }, writer.uint32(202).fork()).ldelim();
        }
        if (message.distinctOverflowMode !== 0) {
            writer.uint32(208).int32(message.distinctOverflowMode);
        }
        if (message.maxRowsToTransfer !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxRowsToTransfer,
            }, writer.uint32(218).fork()).ldelim();
        }
        if (message.maxBytesToTransfer !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesToTransfer,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.transferOverflowMode !== 0) {
            writer.uint32(232).int32(message.transferOverflowMode);
        }
        if (message.maxExecutionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxExecutionTime,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.timeoutOverflowMode !== 0) {
            writer.uint32(248).int32(message.timeoutOverflowMode);
        }
        if (message.maxRowsInSet !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxRowsInSet }, writer.uint32(698).fork()).ldelim();
        }
        if (message.maxBytesInSet !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBytesInSet }, writer.uint32(706).fork()).ldelim();
        }
        if (message.setOverflowMode !== 0) {
            writer.uint32(712).int32(message.setOverflowMode);
        }
        if (message.maxRowsInJoin !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxRowsInJoin }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxBytesInJoin !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxBytesInJoin }, writer.uint32(730).fork()).ldelim();
        }
        if (message.joinOverflowMode !== 0) {
            writer.uint32(736).int32(message.joinOverflowMode);
        }
        writer.uint32(834).fork();
        for (const v of message.joinAlgorithm) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.anyJoinDistinctRightTableKeys !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.anyJoinDistinctRightTableKeys,
            }, writer.uint32(842).fork()).ldelim();
        }
        if (message.maxColumnsToRead !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxColumnsToRead,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.maxTemporaryColumns !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxTemporaryColumns,
            }, writer.uint32(266).fork()).ldelim();
        }
        if (message.maxTemporaryNonConstColumns !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxTemporaryNonConstColumns,
            }, writer.uint32(274).fork()).ldelim();
        }
        if (message.maxQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxQuerySize }, writer.uint32(282).fork()).ldelim();
        }
        if (message.maxAstDepth !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxAstDepth }, writer.uint32(290).fork()).ldelim();
        }
        if (message.maxAstElements !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxAstElements }, writer.uint32(298).fork()).ldelim();
        }
        if (message.maxExpandedAstElements !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxExpandedAstElements,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.minExecutionSpeed !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minExecutionSpeed,
            }, writer.uint32(674).fork()).ldelim();
        }
        if (message.minExecutionSpeedBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minExecutionSpeedBytes,
            }, writer.uint32(682).fork()).ldelim();
        }
        if (message.countDistinctImplementation !== 0) {
            writer.uint32(688).int32(message.countDistinctImplementation);
        }
        if (message.inputFormatValuesInterpretExpressions !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatValuesInterpretExpressions,
            }, writer.uint32(490).fork()).ldelim();
        }
        if (message.inputFormatDefaultsForOmittedFields !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatDefaultsForOmittedFields,
            }, writer.uint32(498).fork()).ldelim();
        }
        if (message.inputFormatNullAsDefault !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatNullAsDefault,
            }, writer.uint32(850).fork()).ldelim();
        }
        if (message.dateTimeInputFormat !== 0) {
            writer.uint32(856).int32(message.dateTimeInputFormat);
        }
        if (message.inputFormatWithNamesUseHeader !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatWithNamesUseHeader,
            }, writer.uint32(866).fork()).ldelim();
        }
        if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.outputFormatJsonQuote64bitIntegers,
            }, writer.uint32(506).fork()).ldelim();
        }
        if (message.outputFormatJsonQuoteDenormals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.outputFormatJsonQuoteDenormals,
            }, writer.uint32(514).fork()).ldelim();
        }
        if (message.dateTimeOutputFormat !== 0) {
            writer.uint32(872).int32(message.dateTimeOutputFormat);
        }
        if (message.lowCardinalityAllowInNativeFormat !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.lowCardinalityAllowInNativeFormat,
            }, writer.uint32(626).fork()).ldelim();
        }
        if (message.allowSuspiciousLowCardinalityTypes !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.allowSuspiciousLowCardinalityTypes,
            }, writer.uint32(882).fork()).ldelim();
        }
        if (message.emptyResultForAggregationByEmptySet !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.emptyResultForAggregationByEmptySet,
            }, writer.uint32(634).fork()).ldelim();
        }
        if (message.httpConnectionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.httpConnectionTimeout,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.httpReceiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.httpReceiveTimeout,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.httpSendTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.httpSendTimeout,
            }, writer.uint32(538).fork()).ldelim();
        }
        if (message.enableHttpCompression !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableHttpCompression,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.sendProgressInHttpHeaders !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.sendProgressInHttpHeaders,
            }, writer.uint32(554).fork()).ldelim();
        }
        if (message.httpHeadersProgressInterval !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.httpHeadersProgressInterval,
            }, writer.uint32(562).fork()).ldelim();
        }
        if (message.addHttpCorsHeader !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.addHttpCorsHeader,
            }, writer.uint32(570).fork()).ldelim();
        }
        if (message.cancelHttpReadonlyQueriesOnClientClose !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.cancelHttpReadonlyQueriesOnClientClose,
            }, writer.uint32(890).fork()).ldelim();
        }
        if (message.maxHttpGetRedirects !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxHttpGetRedirects,
            }, writer.uint32(898).fork()).ldelim();
        }
        if (message.joinedSubqueryRequiresAlias !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.joinedSubqueryRequiresAlias,
            }, writer.uint32(746).fork()).ldelim();
        }
        if (message.joinUseNulls !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.joinUseNulls }, writer.uint32(754).fork()).ldelim();
        }
        if (message.transformNullIn !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.transformNullIn }, writer.uint32(762).fork()).ldelim();
        }
        if (message.quotaMode !== 0) {
            writer.uint32(640).int32(message.quotaMode);
        }
        if (message.flattenNested !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.flattenNested }, writer.uint32(906).fork()).ldelim();
        }
        if (message.formatRegexp !== "") {
            writer.uint32(914).string(message.formatRegexp);
        }
        if (message.formatRegexpEscapingRule !== 0) {
            writer.uint32(920).int32(message.formatRegexpEscapingRule);
        }
        if (message.formatRegexpSkipUnmatched !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.formatRegexpSkipUnmatched,
            }, writer.uint32(930).fork()).ldelim();
        }
        if (message.asyncInsert !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.asyncInsert }, writer.uint32(938).fork()).ldelim();
        }
        if (message.asyncInsertThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.asyncInsertThreads,
            }, writer.uint32(946).fork()).ldelim();
        }
        if (message.waitForAsyncInsert !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.waitForAsyncInsert,
            }, writer.uint32(954).fork()).ldelim();
        }
        if (message.waitForAsyncInsertTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.waitForAsyncInsertTimeout,
            }, writer.uint32(962).fork()).ldelim();
        }
        if (message.asyncInsertMaxDataSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.asyncInsertMaxDataSize,
            }, writer.uint32(970).fork()).ldelim();
        }
        if (message.asyncInsertBusyTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.asyncInsertBusyTimeout,
            }, writer.uint32(978).fork()).ldelim();
        }
        if (message.asyncInsertStaleTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.asyncInsertStaleTimeout,
            }, writer.uint32(986).fork()).ldelim();
        }
        if (message.memoryProfilerStep !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.memoryProfilerStep,
            }, writer.uint32(994).fork()).ldelim();
        }
        if (message.memoryProfilerSampleProbability !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.memoryProfilerSampleProbability,
            }, writer.uint32(1002).fork()).ldelim();
        }
        if (message.maxFinalThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxFinalThreads,
            }, writer.uint32(1010).fork()).ldelim();
        }
        if (message.inputFormatParallelParsing !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatParallelParsing,
            }, writer.uint32(1018).fork()).ldelim();
        }
        if (message.inputFormatImportNestedJson !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.inputFormatImportNestedJson,
            }, writer.uint32(1026).fork()).ldelim();
        }
        if (message.localFilesystemReadMethod !== 0) {
            writer.uint32(1032).int32(message.localFilesystemReadMethod);
        }
        if (message.maxReadBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxReadBufferSize,
            }, writer.uint32(1042).fork()).ldelim();
        }
        if (message.insertKeeperMaxRetries !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.insertKeeperMaxRetries,
            }, writer.uint32(1050).fork()).ldelim();
        }
        if (message.maxTemporaryDataOnDiskSizeForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxTemporaryDataOnDiskSizeForUser,
            }, writer.uint32(1058).fork()).ldelim();
        }
        if (message.maxTemporaryDataOnDiskSizeForQuery !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxTemporaryDataOnDiskSizeForQuery,
            }, writer.uint32(1066).fork()).ldelim();
        }
        if (message.maxParserDepth !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxParserDepth }, writer.uint32(1074).fork()).ldelim();
        }
        if (message.remoteFilesystemReadMethod !== 0) {
            writer.uint32(1080).int32(message.remoteFilesystemReadMethod);
        }
        if (message.memoryOvercommitRatioDenominator !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.memoryOvercommitRatioDenominator,
            }, writer.uint32(1090).fork()).ldelim();
        }
        if (message.memoryOvercommitRatioDenominatorForUser !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.memoryOvercommitRatioDenominatorForUser,
            }, writer.uint32(1098).fork()).ldelim();
        }
        if (message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.memoryUsageOvercommitMaxWaitMicroseconds,
            }, writer.uint32(1106).fork()).ldelim();
        }
        if (message.compile !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.compile }, writer.uint32(354).fork()).ldelim();
        }
        if (message.minCountToCompile !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.minCountToCompile,
            }, writer.uint32(362).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserSettings);
        message.joinAlgorithm = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.readonly = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.allowDdl = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 96:
                    message.allowIntrospectionFunctions = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.connectTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 97:
                    message.connectTimeoutWithFailover = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.receiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.sendTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 98:
                    message.timeoutBeforeCheckingExecutionSpeed = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.insertQuorum = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.insertQuorumTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.insertQuorumParallel = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.insertNullAsDefault = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.selectSequentialConsistency = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 101:
                    message.deduplicateBlocksInDependentMaterializedViews =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.replicationAlterPartitionsSync = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maxReplicaDelayForDistributedQueries = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.fallbackToStaleReplicasForDistributedQueries =
                        wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.distributedProductMode = reader.int32();
                    break;
                case 72:
                    message.distributedAggregationMemoryEfficient = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.distributedDdlTaskTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.skipUnavailableShards = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.compileExpressions = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.minCountToCompileExpression = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.maxBlockSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.minInsertBlockSizeRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.minInsertBlockSizeBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxInsertBlockSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.minBytesToUseDirectIo = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.useUncompressedCache = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.mergeTreeMaxRowsToUseCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.mergeTreeMaxBytesToUseCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.mergeTreeMinRowsForConcurrentRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.mergeTreeMinBytesForConcurrentRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.maxBytesBeforeExternalGroupBy = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.maxBytesBeforeExternalSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.groupByTwoLevelThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.groupByTwoLevelThresholdBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.priority = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.maxMemoryUsage = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.maxMemoryUsageForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.maxNetworkBandwidth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxNetworkBandwidthForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.maxPartitionsPerInsertBlock = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 103:
                    message.maxConcurrentQueriesForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.forceIndexByDate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.forcePrimaryKey = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.maxRowsToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.maxBytesToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.readOverflowMode = reader.int32();
                    break;
                case 16:
                    message.maxRowsToGroupBy = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.groupByOverflowMode = reader.int32();
                    break;
                case 18:
                    message.maxRowsToSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.maxBytesToSort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.sortOverflowMode = reader.int32();
                    break;
                case 21:
                    message.maxResultRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.maxResultBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.resultOverflowMode = reader.int32();
                    break;
                case 24:
                    message.maxRowsInDistinct = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxBytesInDistinct = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.distinctOverflowMode = reader.int32();
                    break;
                case 27:
                    message.maxRowsToTransfer = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxBytesToTransfer = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.transferOverflowMode = reader.int32();
                    break;
                case 30:
                    message.maxExecutionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.timeoutOverflowMode = reader.int32();
                    break;
                case 87:
                    message.maxRowsInSet = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.maxBytesInSet = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.setOverflowMode = reader.int32();
                    break;
                case 90:
                    message.maxRowsInJoin = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxBytesInJoin = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.joinOverflowMode = reader.int32();
                    break;
                case 104:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.joinAlgorithm.push(reader.int32());
                        }
                    }
                    else {
                        message.joinAlgorithm.push(reader.int32());
                    }
                    break;
                case 105:
                    message.anyJoinDistinctRightTableKeys = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.maxColumnsToRead = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.maxTemporaryColumns = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.maxTemporaryNonConstColumns = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 35:
                    message.maxQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.maxAstDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.maxAstElements = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.maxExpandedAstElements = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.minExecutionSpeed = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.minExecutionSpeedBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.countDistinctImplementation = reader.int32();
                    break;
                case 61:
                    message.inputFormatValuesInterpretExpressions = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.inputFormatDefaultsForOmittedFields = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 106:
                    message.inputFormatNullAsDefault = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 107:
                    message.dateTimeInputFormat = reader.int32();
                    break;
                case 108:
                    message.inputFormatWithNamesUseHeader = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.outputFormatJsonQuote64bitIntegers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.outputFormatJsonQuoteDenormals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 109:
                    message.dateTimeOutputFormat = reader.int32();
                    break;
                case 78:
                    message.lowCardinalityAllowInNativeFormat = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 110:
                    message.allowSuspiciousLowCardinalityTypes = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.emptyResultForAggregationByEmptySet = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.httpConnectionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.httpReceiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.httpSendTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.enableHttpCompression = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.sendProgressInHttpHeaders = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.httpHeadersProgressInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.addHttpCorsHeader = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    message.cancelHttpReadonlyQueriesOnClientClose = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 112:
                    message.maxHttpGetRedirects = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.joinedSubqueryRequiresAlias = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 94:
                    message.joinUseNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.transformNullIn = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.quotaMode = reader.int32();
                    break;
                case 113:
                    message.flattenNested = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.formatRegexp = reader.string();
                    break;
                case 115:
                    message.formatRegexpEscapingRule = reader.int32();
                    break;
                case 116:
                    message.formatRegexpSkipUnmatched = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 117:
                    message.asyncInsert = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 118:
                    message.asyncInsertThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 119:
                    message.waitForAsyncInsert = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 120:
                    message.waitForAsyncInsertTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 121:
                    message.asyncInsertMaxDataSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 122:
                    message.asyncInsertBusyTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 123:
                    message.asyncInsertStaleTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 124:
                    message.memoryProfilerStep = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 125:
                    message.memoryProfilerSampleProbability = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 126:
                    message.maxFinalThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 127:
                    message.inputFormatParallelParsing = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 128:
                    message.inputFormatImportNestedJson = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 129:
                    message.localFilesystemReadMethod = reader.int32();
                    break;
                case 130:
                    message.maxReadBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 131:
                    message.insertKeeperMaxRetries = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 132:
                    message.maxTemporaryDataOnDiskSizeForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 133:
                    message.maxTemporaryDataOnDiskSizeForQuery = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 134:
                    message.maxParserDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 135:
                    message.remoteFilesystemReadMethod = reader.int32();
                    break;
                case 136:
                    message.memoryOvercommitRatioDenominator = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 137:
                    message.memoryOvercommitRatioDenominatorForUser = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 138:
                    message.memoryUsageOvercommitMaxWaitMicroseconds = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.compile = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.minCountToCompile = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseUserSettings);
        message.readonly =
            object.readonly !== undefined && object.readonly !== null
                ? Number(object.readonly)
                : undefined;
        message.allowDdl =
            object.allowDdl !== undefined && object.allowDdl !== null
                ? Boolean(object.allowDdl)
                : undefined;
        message.allowIntrospectionFunctions =
            object.allowIntrospectionFunctions !== undefined &&
                object.allowIntrospectionFunctions !== null
                ? Boolean(object.allowIntrospectionFunctions)
                : undefined;
        message.connectTimeout =
            object.connectTimeout !== undefined && object.connectTimeout !== null
                ? Number(object.connectTimeout)
                : undefined;
        message.connectTimeoutWithFailover =
            object.connectTimeoutWithFailover !== undefined &&
                object.connectTimeoutWithFailover !== null
                ? Number(object.connectTimeoutWithFailover)
                : undefined;
        message.receiveTimeout =
            object.receiveTimeout !== undefined && object.receiveTimeout !== null
                ? Number(object.receiveTimeout)
                : undefined;
        message.sendTimeout =
            object.sendTimeout !== undefined && object.sendTimeout !== null
                ? Number(object.sendTimeout)
                : undefined;
        message.timeoutBeforeCheckingExecutionSpeed =
            object.timeoutBeforeCheckingExecutionSpeed !== undefined &&
                object.timeoutBeforeCheckingExecutionSpeed !== null
                ? Number(object.timeoutBeforeCheckingExecutionSpeed)
                : undefined;
        message.insertQuorum =
            object.insertQuorum !== undefined && object.insertQuorum !== null
                ? Number(object.insertQuorum)
                : undefined;
        message.insertQuorumTimeout =
            object.insertQuorumTimeout !== undefined &&
                object.insertQuorumTimeout !== null
                ? Number(object.insertQuorumTimeout)
                : undefined;
        message.insertQuorumParallel =
            object.insertQuorumParallel !== undefined &&
                object.insertQuorumParallel !== null
                ? Boolean(object.insertQuorumParallel)
                : undefined;
        message.insertNullAsDefault =
            object.insertNullAsDefault !== undefined &&
                object.insertNullAsDefault !== null
                ? Boolean(object.insertNullAsDefault)
                : undefined;
        message.selectSequentialConsistency =
            object.selectSequentialConsistency !== undefined &&
                object.selectSequentialConsistency !== null
                ? Boolean(object.selectSequentialConsistency)
                : undefined;
        message.deduplicateBlocksInDependentMaterializedViews =
            object.deduplicateBlocksInDependentMaterializedViews !== undefined &&
                object.deduplicateBlocksInDependentMaterializedViews !== null
                ? Boolean(object.deduplicateBlocksInDependentMaterializedViews)
                : undefined;
        message.replicationAlterPartitionsSync =
            object.replicationAlterPartitionsSync !== undefined &&
                object.replicationAlterPartitionsSync !== null
                ? Number(object.replicationAlterPartitionsSync)
                : undefined;
        message.maxReplicaDelayForDistributedQueries =
            object.maxReplicaDelayForDistributedQueries !== undefined &&
                object.maxReplicaDelayForDistributedQueries !== null
                ? Number(object.maxReplicaDelayForDistributedQueries)
                : undefined;
        message.fallbackToStaleReplicasForDistributedQueries =
            object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
                object.fallbackToStaleReplicasForDistributedQueries !== null
                ? Boolean(object.fallbackToStaleReplicasForDistributedQueries)
                : undefined;
        message.distributedProductMode =
            object.distributedProductMode !== undefined &&
                object.distributedProductMode !== null
                ? userSettings_DistributedProductModeFromJSON(object.distributedProductMode)
                : 0;
        message.distributedAggregationMemoryEfficient =
            object.distributedAggregationMemoryEfficient !== undefined &&
                object.distributedAggregationMemoryEfficient !== null
                ? Boolean(object.distributedAggregationMemoryEfficient)
                : undefined;
        message.distributedDdlTaskTimeout =
            object.distributedDdlTaskTimeout !== undefined &&
                object.distributedDdlTaskTimeout !== null
                ? Number(object.distributedDdlTaskTimeout)
                : undefined;
        message.skipUnavailableShards =
            object.skipUnavailableShards !== undefined &&
                object.skipUnavailableShards !== null
                ? Boolean(object.skipUnavailableShards)
                : undefined;
        message.compileExpressions =
            object.compileExpressions !== undefined &&
                object.compileExpressions !== null
                ? Boolean(object.compileExpressions)
                : undefined;
        message.minCountToCompileExpression =
            object.minCountToCompileExpression !== undefined &&
                object.minCountToCompileExpression !== null
                ? Number(object.minCountToCompileExpression)
                : undefined;
        message.maxBlockSize =
            object.maxBlockSize !== undefined && object.maxBlockSize !== null
                ? Number(object.maxBlockSize)
                : undefined;
        message.minInsertBlockSizeRows =
            object.minInsertBlockSizeRows !== undefined &&
                object.minInsertBlockSizeRows !== null
                ? Number(object.minInsertBlockSizeRows)
                : undefined;
        message.minInsertBlockSizeBytes =
            object.minInsertBlockSizeBytes !== undefined &&
                object.minInsertBlockSizeBytes !== null
                ? Number(object.minInsertBlockSizeBytes)
                : undefined;
        message.maxInsertBlockSize =
            object.maxInsertBlockSize !== undefined &&
                object.maxInsertBlockSize !== null
                ? Number(object.maxInsertBlockSize)
                : undefined;
        message.minBytesToUseDirectIo =
            object.minBytesToUseDirectIo !== undefined &&
                object.minBytesToUseDirectIo !== null
                ? Number(object.minBytesToUseDirectIo)
                : undefined;
        message.useUncompressedCache =
            object.useUncompressedCache !== undefined &&
                object.useUncompressedCache !== null
                ? Boolean(object.useUncompressedCache)
                : undefined;
        message.mergeTreeMaxRowsToUseCache =
            object.mergeTreeMaxRowsToUseCache !== undefined &&
                object.mergeTreeMaxRowsToUseCache !== null
                ? Number(object.mergeTreeMaxRowsToUseCache)
                : undefined;
        message.mergeTreeMaxBytesToUseCache =
            object.mergeTreeMaxBytesToUseCache !== undefined &&
                object.mergeTreeMaxBytesToUseCache !== null
                ? Number(object.mergeTreeMaxBytesToUseCache)
                : undefined;
        message.mergeTreeMinRowsForConcurrentRead =
            object.mergeTreeMinRowsForConcurrentRead !== undefined &&
                object.mergeTreeMinRowsForConcurrentRead !== null
                ? Number(object.mergeTreeMinRowsForConcurrentRead)
                : undefined;
        message.mergeTreeMinBytesForConcurrentRead =
            object.mergeTreeMinBytesForConcurrentRead !== undefined &&
                object.mergeTreeMinBytesForConcurrentRead !== null
                ? Number(object.mergeTreeMinBytesForConcurrentRead)
                : undefined;
        message.maxBytesBeforeExternalGroupBy =
            object.maxBytesBeforeExternalGroupBy !== undefined &&
                object.maxBytesBeforeExternalGroupBy !== null
                ? Number(object.maxBytesBeforeExternalGroupBy)
                : undefined;
        message.maxBytesBeforeExternalSort =
            object.maxBytesBeforeExternalSort !== undefined &&
                object.maxBytesBeforeExternalSort !== null
                ? Number(object.maxBytesBeforeExternalSort)
                : undefined;
        message.groupByTwoLevelThreshold =
            object.groupByTwoLevelThreshold !== undefined &&
                object.groupByTwoLevelThreshold !== null
                ? Number(object.groupByTwoLevelThreshold)
                : undefined;
        message.groupByTwoLevelThresholdBytes =
            object.groupByTwoLevelThresholdBytes !== undefined &&
                object.groupByTwoLevelThresholdBytes !== null
                ? Number(object.groupByTwoLevelThresholdBytes)
                : undefined;
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : undefined;
        message.maxThreads =
            object.maxThreads !== undefined && object.maxThreads !== null
                ? Number(object.maxThreads)
                : undefined;
        message.maxMemoryUsage =
            object.maxMemoryUsage !== undefined && object.maxMemoryUsage !== null
                ? Number(object.maxMemoryUsage)
                : undefined;
        message.maxMemoryUsageForUser =
            object.maxMemoryUsageForUser !== undefined &&
                object.maxMemoryUsageForUser !== null
                ? Number(object.maxMemoryUsageForUser)
                : undefined;
        message.maxNetworkBandwidth =
            object.maxNetworkBandwidth !== undefined &&
                object.maxNetworkBandwidth !== null
                ? Number(object.maxNetworkBandwidth)
                : undefined;
        message.maxNetworkBandwidthForUser =
            object.maxNetworkBandwidthForUser !== undefined &&
                object.maxNetworkBandwidthForUser !== null
                ? Number(object.maxNetworkBandwidthForUser)
                : undefined;
        message.maxPartitionsPerInsertBlock =
            object.maxPartitionsPerInsertBlock !== undefined &&
                object.maxPartitionsPerInsertBlock !== null
                ? Number(object.maxPartitionsPerInsertBlock)
                : undefined;
        message.maxConcurrentQueriesForUser =
            object.maxConcurrentQueriesForUser !== undefined &&
                object.maxConcurrentQueriesForUser !== null
                ? Number(object.maxConcurrentQueriesForUser)
                : undefined;
        message.forceIndexByDate =
            object.forceIndexByDate !== undefined && object.forceIndexByDate !== null
                ? Boolean(object.forceIndexByDate)
                : undefined;
        message.forcePrimaryKey =
            object.forcePrimaryKey !== undefined && object.forcePrimaryKey !== null
                ? Boolean(object.forcePrimaryKey)
                : undefined;
        message.maxRowsToRead =
            object.maxRowsToRead !== undefined && object.maxRowsToRead !== null
                ? Number(object.maxRowsToRead)
                : undefined;
        message.maxBytesToRead =
            object.maxBytesToRead !== undefined && object.maxBytesToRead !== null
                ? Number(object.maxBytesToRead)
                : undefined;
        message.readOverflowMode =
            object.readOverflowMode !== undefined && object.readOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.readOverflowMode)
                : 0;
        message.maxRowsToGroupBy =
            object.maxRowsToGroupBy !== undefined && object.maxRowsToGroupBy !== null
                ? Number(object.maxRowsToGroupBy)
                : undefined;
        message.groupByOverflowMode =
            object.groupByOverflowMode !== undefined &&
                object.groupByOverflowMode !== null
                ? userSettings_GroupByOverflowModeFromJSON(object.groupByOverflowMode)
                : 0;
        message.maxRowsToSort =
            object.maxRowsToSort !== undefined && object.maxRowsToSort !== null
                ? Number(object.maxRowsToSort)
                : undefined;
        message.maxBytesToSort =
            object.maxBytesToSort !== undefined && object.maxBytesToSort !== null
                ? Number(object.maxBytesToSort)
                : undefined;
        message.sortOverflowMode =
            object.sortOverflowMode !== undefined && object.sortOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.sortOverflowMode)
                : 0;
        message.maxResultRows =
            object.maxResultRows !== undefined && object.maxResultRows !== null
                ? Number(object.maxResultRows)
                : undefined;
        message.maxResultBytes =
            object.maxResultBytes !== undefined && object.maxResultBytes !== null
                ? Number(object.maxResultBytes)
                : undefined;
        message.resultOverflowMode =
            object.resultOverflowMode !== undefined &&
                object.resultOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.resultOverflowMode)
                : 0;
        message.maxRowsInDistinct =
            object.maxRowsInDistinct !== undefined &&
                object.maxRowsInDistinct !== null
                ? Number(object.maxRowsInDistinct)
                : undefined;
        message.maxBytesInDistinct =
            object.maxBytesInDistinct !== undefined &&
                object.maxBytesInDistinct !== null
                ? Number(object.maxBytesInDistinct)
                : undefined;
        message.distinctOverflowMode =
            object.distinctOverflowMode !== undefined &&
                object.distinctOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.distinctOverflowMode)
                : 0;
        message.maxRowsToTransfer =
            object.maxRowsToTransfer !== undefined &&
                object.maxRowsToTransfer !== null
                ? Number(object.maxRowsToTransfer)
                : undefined;
        message.maxBytesToTransfer =
            object.maxBytesToTransfer !== undefined &&
                object.maxBytesToTransfer !== null
                ? Number(object.maxBytesToTransfer)
                : undefined;
        message.transferOverflowMode =
            object.transferOverflowMode !== undefined &&
                object.transferOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.transferOverflowMode)
                : 0;
        message.maxExecutionTime =
            object.maxExecutionTime !== undefined && object.maxExecutionTime !== null
                ? Number(object.maxExecutionTime)
                : undefined;
        message.timeoutOverflowMode =
            object.timeoutOverflowMode !== undefined &&
                object.timeoutOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.timeoutOverflowMode)
                : 0;
        message.maxRowsInSet =
            object.maxRowsInSet !== undefined && object.maxRowsInSet !== null
                ? Number(object.maxRowsInSet)
                : undefined;
        message.maxBytesInSet =
            object.maxBytesInSet !== undefined && object.maxBytesInSet !== null
                ? Number(object.maxBytesInSet)
                : undefined;
        message.setOverflowMode =
            object.setOverflowMode !== undefined && object.setOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.setOverflowMode)
                : 0;
        message.maxRowsInJoin =
            object.maxRowsInJoin !== undefined && object.maxRowsInJoin !== null
                ? Number(object.maxRowsInJoin)
                : undefined;
        message.maxBytesInJoin =
            object.maxBytesInJoin !== undefined && object.maxBytesInJoin !== null
                ? Number(object.maxBytesInJoin)
                : undefined;
        message.joinOverflowMode =
            object.joinOverflowMode !== undefined && object.joinOverflowMode !== null
                ? userSettings_OverflowModeFromJSON(object.joinOverflowMode)
                : 0;
        message.joinAlgorithm = ((_a = object.joinAlgorithm) !== null && _a !== void 0 ? _a : []).map((e) => userSettings_JoinAlgorithmFromJSON(e));
        message.anyJoinDistinctRightTableKeys =
            object.anyJoinDistinctRightTableKeys !== undefined &&
                object.anyJoinDistinctRightTableKeys !== null
                ? Boolean(object.anyJoinDistinctRightTableKeys)
                : undefined;
        message.maxColumnsToRead =
            object.maxColumnsToRead !== undefined && object.maxColumnsToRead !== null
                ? Number(object.maxColumnsToRead)
                : undefined;
        message.maxTemporaryColumns =
            object.maxTemporaryColumns !== undefined &&
                object.maxTemporaryColumns !== null
                ? Number(object.maxTemporaryColumns)
                : undefined;
        message.maxTemporaryNonConstColumns =
            object.maxTemporaryNonConstColumns !== undefined &&
                object.maxTemporaryNonConstColumns !== null
                ? Number(object.maxTemporaryNonConstColumns)
                : undefined;
        message.maxQuerySize =
            object.maxQuerySize !== undefined && object.maxQuerySize !== null
                ? Number(object.maxQuerySize)
                : undefined;
        message.maxAstDepth =
            object.maxAstDepth !== undefined && object.maxAstDepth !== null
                ? Number(object.maxAstDepth)
                : undefined;
        message.maxAstElements =
            object.maxAstElements !== undefined && object.maxAstElements !== null
                ? Number(object.maxAstElements)
                : undefined;
        message.maxExpandedAstElements =
            object.maxExpandedAstElements !== undefined &&
                object.maxExpandedAstElements !== null
                ? Number(object.maxExpandedAstElements)
                : undefined;
        message.minExecutionSpeed =
            object.minExecutionSpeed !== undefined &&
                object.minExecutionSpeed !== null
                ? Number(object.minExecutionSpeed)
                : undefined;
        message.minExecutionSpeedBytes =
            object.minExecutionSpeedBytes !== undefined &&
                object.minExecutionSpeedBytes !== null
                ? Number(object.minExecutionSpeedBytes)
                : undefined;
        message.countDistinctImplementation =
            object.countDistinctImplementation !== undefined &&
                object.countDistinctImplementation !== null
                ? userSettings_CountDistinctImplementationFromJSON(object.countDistinctImplementation)
                : 0;
        message.inputFormatValuesInterpretExpressions =
            object.inputFormatValuesInterpretExpressions !== undefined &&
                object.inputFormatValuesInterpretExpressions !== null
                ? Boolean(object.inputFormatValuesInterpretExpressions)
                : undefined;
        message.inputFormatDefaultsForOmittedFields =
            object.inputFormatDefaultsForOmittedFields !== undefined &&
                object.inputFormatDefaultsForOmittedFields !== null
                ? Boolean(object.inputFormatDefaultsForOmittedFields)
                : undefined;
        message.inputFormatNullAsDefault =
            object.inputFormatNullAsDefault !== undefined &&
                object.inputFormatNullAsDefault !== null
                ? Boolean(object.inputFormatNullAsDefault)
                : undefined;
        message.dateTimeInputFormat =
            object.dateTimeInputFormat !== undefined &&
                object.dateTimeInputFormat !== null
                ? userSettings_DateTimeInputFormatFromJSON(object.dateTimeInputFormat)
                : 0;
        message.inputFormatWithNamesUseHeader =
            object.inputFormatWithNamesUseHeader !== undefined &&
                object.inputFormatWithNamesUseHeader !== null
                ? Boolean(object.inputFormatWithNamesUseHeader)
                : undefined;
        message.outputFormatJsonQuote64bitIntegers =
            object.outputFormatJsonQuote_64bitIntegers !== undefined &&
                object.outputFormatJsonQuote_64bitIntegers !== null
                ? Boolean(object.outputFormatJsonQuote_64bitIntegers)
                : undefined;
        message.outputFormatJsonQuoteDenormals =
            object.outputFormatJsonQuoteDenormals !== undefined &&
                object.outputFormatJsonQuoteDenormals !== null
                ? Boolean(object.outputFormatJsonQuoteDenormals)
                : undefined;
        message.dateTimeOutputFormat =
            object.dateTimeOutputFormat !== undefined &&
                object.dateTimeOutputFormat !== null
                ? userSettings_DateTimeOutputFormatFromJSON(object.dateTimeOutputFormat)
                : 0;
        message.lowCardinalityAllowInNativeFormat =
            object.lowCardinalityAllowInNativeFormat !== undefined &&
                object.lowCardinalityAllowInNativeFormat !== null
                ? Boolean(object.lowCardinalityAllowInNativeFormat)
                : undefined;
        message.allowSuspiciousLowCardinalityTypes =
            object.allowSuspiciousLowCardinalityTypes !== undefined &&
                object.allowSuspiciousLowCardinalityTypes !== null
                ? Boolean(object.allowSuspiciousLowCardinalityTypes)
                : undefined;
        message.emptyResultForAggregationByEmptySet =
            object.emptyResultForAggregationByEmptySet !== undefined &&
                object.emptyResultForAggregationByEmptySet !== null
                ? Boolean(object.emptyResultForAggregationByEmptySet)
                : undefined;
        message.httpConnectionTimeout =
            object.httpConnectionTimeout !== undefined &&
                object.httpConnectionTimeout !== null
                ? Number(object.httpConnectionTimeout)
                : undefined;
        message.httpReceiveTimeout =
            object.httpReceiveTimeout !== undefined &&
                object.httpReceiveTimeout !== null
                ? Number(object.httpReceiveTimeout)
                : undefined;
        message.httpSendTimeout =
            object.httpSendTimeout !== undefined && object.httpSendTimeout !== null
                ? Number(object.httpSendTimeout)
                : undefined;
        message.enableHttpCompression =
            object.enableHttpCompression !== undefined &&
                object.enableHttpCompression !== null
                ? Boolean(object.enableHttpCompression)
                : undefined;
        message.sendProgressInHttpHeaders =
            object.sendProgressInHttpHeaders !== undefined &&
                object.sendProgressInHttpHeaders !== null
                ? Boolean(object.sendProgressInHttpHeaders)
                : undefined;
        message.httpHeadersProgressInterval =
            object.httpHeadersProgressInterval !== undefined &&
                object.httpHeadersProgressInterval !== null
                ? Number(object.httpHeadersProgressInterval)
                : undefined;
        message.addHttpCorsHeader =
            object.addHttpCorsHeader !== undefined &&
                object.addHttpCorsHeader !== null
                ? Boolean(object.addHttpCorsHeader)
                : undefined;
        message.cancelHttpReadonlyQueriesOnClientClose =
            object.cancelHttpReadonlyQueriesOnClientClose !== undefined &&
                object.cancelHttpReadonlyQueriesOnClientClose !== null
                ? Boolean(object.cancelHttpReadonlyQueriesOnClientClose)
                : undefined;
        message.maxHttpGetRedirects =
            object.maxHttpGetRedirects !== undefined &&
                object.maxHttpGetRedirects !== null
                ? Number(object.maxHttpGetRedirects)
                : undefined;
        message.joinedSubqueryRequiresAlias =
            object.joinedSubqueryRequiresAlias !== undefined &&
                object.joinedSubqueryRequiresAlias !== null
                ? Boolean(object.joinedSubqueryRequiresAlias)
                : undefined;
        message.joinUseNulls =
            object.joinUseNulls !== undefined && object.joinUseNulls !== null
                ? Boolean(object.joinUseNulls)
                : undefined;
        message.transformNullIn =
            object.transformNullIn !== undefined && object.transformNullIn !== null
                ? Boolean(object.transformNullIn)
                : undefined;
        message.quotaMode =
            object.quotaMode !== undefined && object.quotaMode !== null
                ? userSettings_QuotaModeFromJSON(object.quotaMode)
                : 0;
        message.flattenNested =
            object.flattenNested !== undefined && object.flattenNested !== null
                ? Boolean(object.flattenNested)
                : undefined;
        message.formatRegexp =
            object.formatRegexp !== undefined && object.formatRegexp !== null
                ? String(object.formatRegexp)
                : "";
        message.formatRegexpEscapingRule =
            object.formatRegexpEscapingRule !== undefined &&
                object.formatRegexpEscapingRule !== null
                ? userSettings_FormatRegexpEscapingRuleFromJSON(object.formatRegexpEscapingRule)
                : 0;
        message.formatRegexpSkipUnmatched =
            object.formatRegexpSkipUnmatched !== undefined &&
                object.formatRegexpSkipUnmatched !== null
                ? Boolean(object.formatRegexpSkipUnmatched)
                : undefined;
        message.asyncInsert =
            object.asyncInsert !== undefined && object.asyncInsert !== null
                ? Boolean(object.asyncInsert)
                : undefined;
        message.asyncInsertThreads =
            object.asyncInsertThreads !== undefined &&
                object.asyncInsertThreads !== null
                ? Number(object.asyncInsertThreads)
                : undefined;
        message.waitForAsyncInsert =
            object.waitForAsyncInsert !== undefined &&
                object.waitForAsyncInsert !== null
                ? Boolean(object.waitForAsyncInsert)
                : undefined;
        message.waitForAsyncInsertTimeout =
            object.waitForAsyncInsertTimeout !== undefined &&
                object.waitForAsyncInsertTimeout !== null
                ? Number(object.waitForAsyncInsertTimeout)
                : undefined;
        message.asyncInsertMaxDataSize =
            object.asyncInsertMaxDataSize !== undefined &&
                object.asyncInsertMaxDataSize !== null
                ? Number(object.asyncInsertMaxDataSize)
                : undefined;
        message.asyncInsertBusyTimeout =
            object.asyncInsertBusyTimeout !== undefined &&
                object.asyncInsertBusyTimeout !== null
                ? Number(object.asyncInsertBusyTimeout)
                : undefined;
        message.asyncInsertStaleTimeout =
            object.asyncInsertStaleTimeout !== undefined &&
                object.asyncInsertStaleTimeout !== null
                ? Number(object.asyncInsertStaleTimeout)
                : undefined;
        message.memoryProfilerStep =
            object.memoryProfilerStep !== undefined &&
                object.memoryProfilerStep !== null
                ? Number(object.memoryProfilerStep)
                : undefined;
        message.memoryProfilerSampleProbability =
            object.memoryProfilerSampleProbability !== undefined &&
                object.memoryProfilerSampleProbability !== null
                ? Number(object.memoryProfilerSampleProbability)
                : undefined;
        message.maxFinalThreads =
            object.maxFinalThreads !== undefined && object.maxFinalThreads !== null
                ? Number(object.maxFinalThreads)
                : undefined;
        message.inputFormatParallelParsing =
            object.inputFormatParallelParsing !== undefined &&
                object.inputFormatParallelParsing !== null
                ? Boolean(object.inputFormatParallelParsing)
                : undefined;
        message.inputFormatImportNestedJson =
            object.inputFormatImportNestedJson !== undefined &&
                object.inputFormatImportNestedJson !== null
                ? Boolean(object.inputFormatImportNestedJson)
                : undefined;
        message.localFilesystemReadMethod =
            object.localFilesystemReadMethod !== undefined &&
                object.localFilesystemReadMethod !== null
                ? userSettings_LocalFilesystemReadMethodFromJSON(object.localFilesystemReadMethod)
                : 0;
        message.maxReadBufferSize =
            object.maxReadBufferSize !== undefined &&
                object.maxReadBufferSize !== null
                ? Number(object.maxReadBufferSize)
                : undefined;
        message.insertKeeperMaxRetries =
            object.insertKeeperMaxRetries !== undefined &&
                object.insertKeeperMaxRetries !== null
                ? Number(object.insertKeeperMaxRetries)
                : undefined;
        message.maxTemporaryDataOnDiskSizeForUser =
            object.maxTemporaryDataOnDiskSizeForUser !== undefined &&
                object.maxTemporaryDataOnDiskSizeForUser !== null
                ? Number(object.maxTemporaryDataOnDiskSizeForUser)
                : undefined;
        message.maxTemporaryDataOnDiskSizeForQuery =
            object.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
                object.maxTemporaryDataOnDiskSizeForQuery !== null
                ? Number(object.maxTemporaryDataOnDiskSizeForQuery)
                : undefined;
        message.maxParserDepth =
            object.maxParserDepth !== undefined && object.maxParserDepth !== null
                ? Number(object.maxParserDepth)
                : undefined;
        message.remoteFilesystemReadMethod =
            object.remoteFilesystemReadMethod !== undefined &&
                object.remoteFilesystemReadMethod !== null
                ? userSettings_RemoteFilesystemReadMethodFromJSON(object.remoteFilesystemReadMethod)
                : 0;
        message.memoryOvercommitRatioDenominator =
            object.memoryOvercommitRatioDenominator !== undefined &&
                object.memoryOvercommitRatioDenominator !== null
                ? Number(object.memoryOvercommitRatioDenominator)
                : undefined;
        message.memoryOvercommitRatioDenominatorForUser =
            object.memoryOvercommitRatioDenominatorForUser !== undefined &&
                object.memoryOvercommitRatioDenominatorForUser !== null
                ? Number(object.memoryOvercommitRatioDenominatorForUser)
                : undefined;
        message.memoryUsageOvercommitMaxWaitMicroseconds =
            object.memoryUsageOvercommitMaxWaitMicroseconds !== undefined &&
                object.memoryUsageOvercommitMaxWaitMicroseconds !== null
                ? Number(object.memoryUsageOvercommitMaxWaitMicroseconds)
                : undefined;
        message.compile =
            object.compile !== undefined && object.compile !== null
                ? Boolean(object.compile)
                : undefined;
        message.minCountToCompile =
            object.minCountToCompile !== undefined &&
                object.minCountToCompile !== null
                ? Number(object.minCountToCompile)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.readonly !== undefined && (obj.readonly = message.readonly);
        message.allowDdl !== undefined && (obj.allowDdl = message.allowDdl);
        message.allowIntrospectionFunctions !== undefined &&
            (obj.allowIntrospectionFunctions = message.allowIntrospectionFunctions);
        message.connectTimeout !== undefined &&
            (obj.connectTimeout = message.connectTimeout);
        message.connectTimeoutWithFailover !== undefined &&
            (obj.connectTimeoutWithFailover = message.connectTimeoutWithFailover);
        message.receiveTimeout !== undefined &&
            (obj.receiveTimeout = message.receiveTimeout);
        message.sendTimeout !== undefined &&
            (obj.sendTimeout = message.sendTimeout);
        message.timeoutBeforeCheckingExecutionSpeed !== undefined &&
            (obj.timeoutBeforeCheckingExecutionSpeed =
                message.timeoutBeforeCheckingExecutionSpeed);
        message.insertQuorum !== undefined &&
            (obj.insertQuorum = message.insertQuorum);
        message.insertQuorumTimeout !== undefined &&
            (obj.insertQuorumTimeout = message.insertQuorumTimeout);
        message.insertQuorumParallel !== undefined &&
            (obj.insertQuorumParallel = message.insertQuorumParallel);
        message.insertNullAsDefault !== undefined &&
            (obj.insertNullAsDefault = message.insertNullAsDefault);
        message.selectSequentialConsistency !== undefined &&
            (obj.selectSequentialConsistency = message.selectSequentialConsistency);
        message.deduplicateBlocksInDependentMaterializedViews !== undefined &&
            (obj.deduplicateBlocksInDependentMaterializedViews =
                message.deduplicateBlocksInDependentMaterializedViews);
        message.replicationAlterPartitionsSync !== undefined &&
            (obj.replicationAlterPartitionsSync =
                message.replicationAlterPartitionsSync);
        message.maxReplicaDelayForDistributedQueries !== undefined &&
            (obj.maxReplicaDelayForDistributedQueries =
                message.maxReplicaDelayForDistributedQueries);
        message.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            (obj.fallbackToStaleReplicasForDistributedQueries =
                message.fallbackToStaleReplicasForDistributedQueries);
        message.distributedProductMode !== undefined &&
            (obj.distributedProductMode = userSettings_DistributedProductModeToJSON(message.distributedProductMode));
        message.distributedAggregationMemoryEfficient !== undefined &&
            (obj.distributedAggregationMemoryEfficient =
                message.distributedAggregationMemoryEfficient);
        message.distributedDdlTaskTimeout !== undefined &&
            (obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout);
        message.skipUnavailableShards !== undefined &&
            (obj.skipUnavailableShards = message.skipUnavailableShards);
        message.compileExpressions !== undefined &&
            (obj.compileExpressions = message.compileExpressions);
        message.minCountToCompileExpression !== undefined &&
            (obj.minCountToCompileExpression = message.minCountToCompileExpression);
        message.maxBlockSize !== undefined &&
            (obj.maxBlockSize = message.maxBlockSize);
        message.minInsertBlockSizeRows !== undefined &&
            (obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows);
        message.minInsertBlockSizeBytes !== undefined &&
            (obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes);
        message.maxInsertBlockSize !== undefined &&
            (obj.maxInsertBlockSize = message.maxInsertBlockSize);
        message.minBytesToUseDirectIo !== undefined &&
            (obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo);
        message.useUncompressedCache !== undefined &&
            (obj.useUncompressedCache = message.useUncompressedCache);
        message.mergeTreeMaxRowsToUseCache !== undefined &&
            (obj.mergeTreeMaxRowsToUseCache = message.mergeTreeMaxRowsToUseCache);
        message.mergeTreeMaxBytesToUseCache !== undefined &&
            (obj.mergeTreeMaxBytesToUseCache = message.mergeTreeMaxBytesToUseCache);
        message.mergeTreeMinRowsForConcurrentRead !== undefined &&
            (obj.mergeTreeMinRowsForConcurrentRead =
                message.mergeTreeMinRowsForConcurrentRead);
        message.mergeTreeMinBytesForConcurrentRead !== undefined &&
            (obj.mergeTreeMinBytesForConcurrentRead =
                message.mergeTreeMinBytesForConcurrentRead);
        message.maxBytesBeforeExternalGroupBy !== undefined &&
            (obj.maxBytesBeforeExternalGroupBy =
                message.maxBytesBeforeExternalGroupBy);
        message.maxBytesBeforeExternalSort !== undefined &&
            (obj.maxBytesBeforeExternalSort = message.maxBytesBeforeExternalSort);
        message.groupByTwoLevelThreshold !== undefined &&
            (obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold);
        message.groupByTwoLevelThresholdBytes !== undefined &&
            (obj.groupByTwoLevelThresholdBytes =
                message.groupByTwoLevelThresholdBytes);
        message.priority !== undefined && (obj.priority = message.priority);
        message.maxThreads !== undefined && (obj.maxThreads = message.maxThreads);
        message.maxMemoryUsage !== undefined &&
            (obj.maxMemoryUsage = message.maxMemoryUsage);
        message.maxMemoryUsageForUser !== undefined &&
            (obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser);
        message.maxNetworkBandwidth !== undefined &&
            (obj.maxNetworkBandwidth = message.maxNetworkBandwidth);
        message.maxNetworkBandwidthForUser !== undefined &&
            (obj.maxNetworkBandwidthForUser = message.maxNetworkBandwidthForUser);
        message.maxPartitionsPerInsertBlock !== undefined &&
            (obj.maxPartitionsPerInsertBlock = message.maxPartitionsPerInsertBlock);
        message.maxConcurrentQueriesForUser !== undefined &&
            (obj.maxConcurrentQueriesForUser = message.maxConcurrentQueriesForUser);
        message.forceIndexByDate !== undefined &&
            (obj.forceIndexByDate = message.forceIndexByDate);
        message.forcePrimaryKey !== undefined &&
            (obj.forcePrimaryKey = message.forcePrimaryKey);
        message.maxRowsToRead !== undefined &&
            (obj.maxRowsToRead = message.maxRowsToRead);
        message.maxBytesToRead !== undefined &&
            (obj.maxBytesToRead = message.maxBytesToRead);
        message.readOverflowMode !== undefined &&
            (obj.readOverflowMode = userSettings_OverflowModeToJSON(message.readOverflowMode));
        message.maxRowsToGroupBy !== undefined &&
            (obj.maxRowsToGroupBy = message.maxRowsToGroupBy);
        message.groupByOverflowMode !== undefined &&
            (obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(message.groupByOverflowMode));
        message.maxRowsToSort !== undefined &&
            (obj.maxRowsToSort = message.maxRowsToSort);
        message.maxBytesToSort !== undefined &&
            (obj.maxBytesToSort = message.maxBytesToSort);
        message.sortOverflowMode !== undefined &&
            (obj.sortOverflowMode = userSettings_OverflowModeToJSON(message.sortOverflowMode));
        message.maxResultRows !== undefined &&
            (obj.maxResultRows = message.maxResultRows);
        message.maxResultBytes !== undefined &&
            (obj.maxResultBytes = message.maxResultBytes);
        message.resultOverflowMode !== undefined &&
            (obj.resultOverflowMode = userSettings_OverflowModeToJSON(message.resultOverflowMode));
        message.maxRowsInDistinct !== undefined &&
            (obj.maxRowsInDistinct = message.maxRowsInDistinct);
        message.maxBytesInDistinct !== undefined &&
            (obj.maxBytesInDistinct = message.maxBytesInDistinct);
        message.distinctOverflowMode !== undefined &&
            (obj.distinctOverflowMode = userSettings_OverflowModeToJSON(message.distinctOverflowMode));
        message.maxRowsToTransfer !== undefined &&
            (obj.maxRowsToTransfer = message.maxRowsToTransfer);
        message.maxBytesToTransfer !== undefined &&
            (obj.maxBytesToTransfer = message.maxBytesToTransfer);
        message.transferOverflowMode !== undefined &&
            (obj.transferOverflowMode = userSettings_OverflowModeToJSON(message.transferOverflowMode));
        message.maxExecutionTime !== undefined &&
            (obj.maxExecutionTime = message.maxExecutionTime);
        message.timeoutOverflowMode !== undefined &&
            (obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(message.timeoutOverflowMode));
        message.maxRowsInSet !== undefined &&
            (obj.maxRowsInSet = message.maxRowsInSet);
        message.maxBytesInSet !== undefined &&
            (obj.maxBytesInSet = message.maxBytesInSet);
        message.setOverflowMode !== undefined &&
            (obj.setOverflowMode = userSettings_OverflowModeToJSON(message.setOverflowMode));
        message.maxRowsInJoin !== undefined &&
            (obj.maxRowsInJoin = message.maxRowsInJoin);
        message.maxBytesInJoin !== undefined &&
            (obj.maxBytesInJoin = message.maxBytesInJoin);
        message.joinOverflowMode !== undefined &&
            (obj.joinOverflowMode = userSettings_OverflowModeToJSON(message.joinOverflowMode));
        if (message.joinAlgorithm) {
            obj.joinAlgorithm = message.joinAlgorithm.map((e) => userSettings_JoinAlgorithmToJSON(e));
        }
        else {
            obj.joinAlgorithm = [];
        }
        message.anyJoinDistinctRightTableKeys !== undefined &&
            (obj.anyJoinDistinctRightTableKeys =
                message.anyJoinDistinctRightTableKeys);
        message.maxColumnsToRead !== undefined &&
            (obj.maxColumnsToRead = message.maxColumnsToRead);
        message.maxTemporaryColumns !== undefined &&
            (obj.maxTemporaryColumns = message.maxTemporaryColumns);
        message.maxTemporaryNonConstColumns !== undefined &&
            (obj.maxTemporaryNonConstColumns = message.maxTemporaryNonConstColumns);
        message.maxQuerySize !== undefined &&
            (obj.maxQuerySize = message.maxQuerySize);
        message.maxAstDepth !== undefined &&
            (obj.maxAstDepth = message.maxAstDepth);
        message.maxAstElements !== undefined &&
            (obj.maxAstElements = message.maxAstElements);
        message.maxExpandedAstElements !== undefined &&
            (obj.maxExpandedAstElements = message.maxExpandedAstElements);
        message.minExecutionSpeed !== undefined &&
            (obj.minExecutionSpeed = message.minExecutionSpeed);
        message.minExecutionSpeedBytes !== undefined &&
            (obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes);
        message.countDistinctImplementation !== undefined &&
            (obj.countDistinctImplementation =
                userSettings_CountDistinctImplementationToJSON(message.countDistinctImplementation));
        message.inputFormatValuesInterpretExpressions !== undefined &&
            (obj.inputFormatValuesInterpretExpressions =
                message.inputFormatValuesInterpretExpressions);
        message.inputFormatDefaultsForOmittedFields !== undefined &&
            (obj.inputFormatDefaultsForOmittedFields =
                message.inputFormatDefaultsForOmittedFields);
        message.inputFormatNullAsDefault !== undefined &&
            (obj.inputFormatNullAsDefault = message.inputFormatNullAsDefault);
        message.dateTimeInputFormat !== undefined &&
            (obj.dateTimeInputFormat = userSettings_DateTimeInputFormatToJSON(message.dateTimeInputFormat));
        message.inputFormatWithNamesUseHeader !== undefined &&
            (obj.inputFormatWithNamesUseHeader =
                message.inputFormatWithNamesUseHeader);
        message.outputFormatJsonQuote64bitIntegers !== undefined &&
            (obj.outputFormatJsonQuote_64bitIntegers =
                message.outputFormatJsonQuote64bitIntegers);
        message.outputFormatJsonQuoteDenormals !== undefined &&
            (obj.outputFormatJsonQuoteDenormals =
                message.outputFormatJsonQuoteDenormals);
        message.dateTimeOutputFormat !== undefined &&
            (obj.dateTimeOutputFormat = userSettings_DateTimeOutputFormatToJSON(message.dateTimeOutputFormat));
        message.lowCardinalityAllowInNativeFormat !== undefined &&
            (obj.lowCardinalityAllowInNativeFormat =
                message.lowCardinalityAllowInNativeFormat);
        message.allowSuspiciousLowCardinalityTypes !== undefined &&
            (obj.allowSuspiciousLowCardinalityTypes =
                message.allowSuspiciousLowCardinalityTypes);
        message.emptyResultForAggregationByEmptySet !== undefined &&
            (obj.emptyResultForAggregationByEmptySet =
                message.emptyResultForAggregationByEmptySet);
        message.httpConnectionTimeout !== undefined &&
            (obj.httpConnectionTimeout = message.httpConnectionTimeout);
        message.httpReceiveTimeout !== undefined &&
            (obj.httpReceiveTimeout = message.httpReceiveTimeout);
        message.httpSendTimeout !== undefined &&
            (obj.httpSendTimeout = message.httpSendTimeout);
        message.enableHttpCompression !== undefined &&
            (obj.enableHttpCompression = message.enableHttpCompression);
        message.sendProgressInHttpHeaders !== undefined &&
            (obj.sendProgressInHttpHeaders = message.sendProgressInHttpHeaders);
        message.httpHeadersProgressInterval !== undefined &&
            (obj.httpHeadersProgressInterval = message.httpHeadersProgressInterval);
        message.addHttpCorsHeader !== undefined &&
            (obj.addHttpCorsHeader = message.addHttpCorsHeader);
        message.cancelHttpReadonlyQueriesOnClientClose !== undefined &&
            (obj.cancelHttpReadonlyQueriesOnClientClose =
                message.cancelHttpReadonlyQueriesOnClientClose);
        message.maxHttpGetRedirects !== undefined &&
            (obj.maxHttpGetRedirects = message.maxHttpGetRedirects);
        message.joinedSubqueryRequiresAlias !== undefined &&
            (obj.joinedSubqueryRequiresAlias = message.joinedSubqueryRequiresAlias);
        message.joinUseNulls !== undefined &&
            (obj.joinUseNulls = message.joinUseNulls);
        message.transformNullIn !== undefined &&
            (obj.transformNullIn = message.transformNullIn);
        message.quotaMode !== undefined &&
            (obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode));
        message.flattenNested !== undefined &&
            (obj.flattenNested = message.flattenNested);
        message.formatRegexp !== undefined &&
            (obj.formatRegexp = message.formatRegexp);
        message.formatRegexpEscapingRule !== undefined &&
            (obj.formatRegexpEscapingRule =
                userSettings_FormatRegexpEscapingRuleToJSON(message.formatRegexpEscapingRule));
        message.formatRegexpSkipUnmatched !== undefined &&
            (obj.formatRegexpSkipUnmatched = message.formatRegexpSkipUnmatched);
        message.asyncInsert !== undefined &&
            (obj.asyncInsert = message.asyncInsert);
        message.asyncInsertThreads !== undefined &&
            (obj.asyncInsertThreads = message.asyncInsertThreads);
        message.waitForAsyncInsert !== undefined &&
            (obj.waitForAsyncInsert = message.waitForAsyncInsert);
        message.waitForAsyncInsertTimeout !== undefined &&
            (obj.waitForAsyncInsertTimeout = message.waitForAsyncInsertTimeout);
        message.asyncInsertMaxDataSize !== undefined &&
            (obj.asyncInsertMaxDataSize = message.asyncInsertMaxDataSize);
        message.asyncInsertBusyTimeout !== undefined &&
            (obj.asyncInsertBusyTimeout = message.asyncInsertBusyTimeout);
        message.asyncInsertStaleTimeout !== undefined &&
            (obj.asyncInsertStaleTimeout = message.asyncInsertStaleTimeout);
        message.memoryProfilerStep !== undefined &&
            (obj.memoryProfilerStep = message.memoryProfilerStep);
        message.memoryProfilerSampleProbability !== undefined &&
            (obj.memoryProfilerSampleProbability =
                message.memoryProfilerSampleProbability);
        message.maxFinalThreads !== undefined &&
            (obj.maxFinalThreads = message.maxFinalThreads);
        message.inputFormatParallelParsing !== undefined &&
            (obj.inputFormatParallelParsing = message.inputFormatParallelParsing);
        message.inputFormatImportNestedJson !== undefined &&
            (obj.inputFormatImportNestedJson = message.inputFormatImportNestedJson);
        message.localFilesystemReadMethod !== undefined &&
            (obj.localFilesystemReadMethod =
                userSettings_LocalFilesystemReadMethodToJSON(message.localFilesystemReadMethod));
        message.maxReadBufferSize !== undefined &&
            (obj.maxReadBufferSize = message.maxReadBufferSize);
        message.insertKeeperMaxRetries !== undefined &&
            (obj.insertKeeperMaxRetries = message.insertKeeperMaxRetries);
        message.maxTemporaryDataOnDiskSizeForUser !== undefined &&
            (obj.maxTemporaryDataOnDiskSizeForUser =
                message.maxTemporaryDataOnDiskSizeForUser);
        message.maxTemporaryDataOnDiskSizeForQuery !== undefined &&
            (obj.maxTemporaryDataOnDiskSizeForQuery =
                message.maxTemporaryDataOnDiskSizeForQuery);
        message.maxParserDepth !== undefined &&
            (obj.maxParserDepth = message.maxParserDepth);
        message.remoteFilesystemReadMethod !== undefined &&
            (obj.remoteFilesystemReadMethod =
                userSettings_RemoteFilesystemReadMethodToJSON(message.remoteFilesystemReadMethod));
        message.memoryOvercommitRatioDenominator !== undefined &&
            (obj.memoryOvercommitRatioDenominator =
                message.memoryOvercommitRatioDenominator);
        message.memoryOvercommitRatioDenominatorForUser !== undefined &&
            (obj.memoryOvercommitRatioDenominatorForUser =
                message.memoryOvercommitRatioDenominatorForUser);
        message.memoryUsageOvercommitMaxWaitMicroseconds !== undefined &&
            (obj.memoryUsageOvercommitMaxWaitMicroseconds =
                message.memoryUsageOvercommitMaxWaitMicroseconds);
        message.compile !== undefined && (obj.compile = message.compile);
        message.minCountToCompile !== undefined &&
            (obj.minCountToCompile = message.minCountToCompile);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111;
        const message = Object.assign({}, baseUserSettings);
        message.readonly = (_a = object.readonly) !== null && _a !== void 0 ? _a : undefined;
        message.allowDdl = (_b = object.allowDdl) !== null && _b !== void 0 ? _b : undefined;
        message.allowIntrospectionFunctions =
            (_c = object.allowIntrospectionFunctions) !== null && _c !== void 0 ? _c : undefined;
        message.connectTimeout = (_d = object.connectTimeout) !== null && _d !== void 0 ? _d : undefined;
        message.connectTimeoutWithFailover =
            (_e = object.connectTimeoutWithFailover) !== null && _e !== void 0 ? _e : undefined;
        message.receiveTimeout = (_f = object.receiveTimeout) !== null && _f !== void 0 ? _f : undefined;
        message.sendTimeout = (_g = object.sendTimeout) !== null && _g !== void 0 ? _g : undefined;
        message.timeoutBeforeCheckingExecutionSpeed =
            (_h = object.timeoutBeforeCheckingExecutionSpeed) !== null && _h !== void 0 ? _h : undefined;
        message.insertQuorum = (_j = object.insertQuorum) !== null && _j !== void 0 ? _j : undefined;
        message.insertQuorumTimeout = (_k = object.insertQuorumTimeout) !== null && _k !== void 0 ? _k : undefined;
        message.insertQuorumParallel = (_l = object.insertQuorumParallel) !== null && _l !== void 0 ? _l : undefined;
        message.insertNullAsDefault = (_m = object.insertNullAsDefault) !== null && _m !== void 0 ? _m : undefined;
        message.selectSequentialConsistency =
            (_o = object.selectSequentialConsistency) !== null && _o !== void 0 ? _o : undefined;
        message.deduplicateBlocksInDependentMaterializedViews =
            (_p = object.deduplicateBlocksInDependentMaterializedViews) !== null && _p !== void 0 ? _p : undefined;
        message.replicationAlterPartitionsSync =
            (_q = object.replicationAlterPartitionsSync) !== null && _q !== void 0 ? _q : undefined;
        message.maxReplicaDelayForDistributedQueries =
            (_r = object.maxReplicaDelayForDistributedQueries) !== null && _r !== void 0 ? _r : undefined;
        message.fallbackToStaleReplicasForDistributedQueries =
            (_s = object.fallbackToStaleReplicasForDistributedQueries) !== null && _s !== void 0 ? _s : undefined;
        message.distributedProductMode = (_t = object.distributedProductMode) !== null && _t !== void 0 ? _t : 0;
        message.distributedAggregationMemoryEfficient =
            (_u = object.distributedAggregationMemoryEfficient) !== null && _u !== void 0 ? _u : undefined;
        message.distributedDdlTaskTimeout =
            (_v = object.distributedDdlTaskTimeout) !== null && _v !== void 0 ? _v : undefined;
        message.skipUnavailableShards = (_w = object.skipUnavailableShards) !== null && _w !== void 0 ? _w : undefined;
        message.compileExpressions = (_x = object.compileExpressions) !== null && _x !== void 0 ? _x : undefined;
        message.minCountToCompileExpression =
            (_y = object.minCountToCompileExpression) !== null && _y !== void 0 ? _y : undefined;
        message.maxBlockSize = (_z = object.maxBlockSize) !== null && _z !== void 0 ? _z : undefined;
        message.minInsertBlockSizeRows = (_0 = object.minInsertBlockSizeRows) !== null && _0 !== void 0 ? _0 : undefined;
        message.minInsertBlockSizeBytes =
            (_1 = object.minInsertBlockSizeBytes) !== null && _1 !== void 0 ? _1 : undefined;
        message.maxInsertBlockSize = (_2 = object.maxInsertBlockSize) !== null && _2 !== void 0 ? _2 : undefined;
        message.minBytesToUseDirectIo = (_3 = object.minBytesToUseDirectIo) !== null && _3 !== void 0 ? _3 : undefined;
        message.useUncompressedCache = (_4 = object.useUncompressedCache) !== null && _4 !== void 0 ? _4 : undefined;
        message.mergeTreeMaxRowsToUseCache =
            (_5 = object.mergeTreeMaxRowsToUseCache) !== null && _5 !== void 0 ? _5 : undefined;
        message.mergeTreeMaxBytesToUseCache =
            (_6 = object.mergeTreeMaxBytesToUseCache) !== null && _6 !== void 0 ? _6 : undefined;
        message.mergeTreeMinRowsForConcurrentRead =
            (_7 = object.mergeTreeMinRowsForConcurrentRead) !== null && _7 !== void 0 ? _7 : undefined;
        message.mergeTreeMinBytesForConcurrentRead =
            (_8 = object.mergeTreeMinBytesForConcurrentRead) !== null && _8 !== void 0 ? _8 : undefined;
        message.maxBytesBeforeExternalGroupBy =
            (_9 = object.maxBytesBeforeExternalGroupBy) !== null && _9 !== void 0 ? _9 : undefined;
        message.maxBytesBeforeExternalSort =
            (_10 = object.maxBytesBeforeExternalSort) !== null && _10 !== void 0 ? _10 : undefined;
        message.groupByTwoLevelThreshold =
            (_11 = object.groupByTwoLevelThreshold) !== null && _11 !== void 0 ? _11 : undefined;
        message.groupByTwoLevelThresholdBytes =
            (_12 = object.groupByTwoLevelThresholdBytes) !== null && _12 !== void 0 ? _12 : undefined;
        message.priority = (_13 = object.priority) !== null && _13 !== void 0 ? _13 : undefined;
        message.maxThreads = (_14 = object.maxThreads) !== null && _14 !== void 0 ? _14 : undefined;
        message.maxMemoryUsage = (_15 = object.maxMemoryUsage) !== null && _15 !== void 0 ? _15 : undefined;
        message.maxMemoryUsageForUser = (_16 = object.maxMemoryUsageForUser) !== null && _16 !== void 0 ? _16 : undefined;
        message.maxNetworkBandwidth = (_17 = object.maxNetworkBandwidth) !== null && _17 !== void 0 ? _17 : undefined;
        message.maxNetworkBandwidthForUser =
            (_18 = object.maxNetworkBandwidthForUser) !== null && _18 !== void 0 ? _18 : undefined;
        message.maxPartitionsPerInsertBlock =
            (_19 = object.maxPartitionsPerInsertBlock) !== null && _19 !== void 0 ? _19 : undefined;
        message.maxConcurrentQueriesForUser =
            (_20 = object.maxConcurrentQueriesForUser) !== null && _20 !== void 0 ? _20 : undefined;
        message.forceIndexByDate = (_21 = object.forceIndexByDate) !== null && _21 !== void 0 ? _21 : undefined;
        message.forcePrimaryKey = (_22 = object.forcePrimaryKey) !== null && _22 !== void 0 ? _22 : undefined;
        message.maxRowsToRead = (_23 = object.maxRowsToRead) !== null && _23 !== void 0 ? _23 : undefined;
        message.maxBytesToRead = (_24 = object.maxBytesToRead) !== null && _24 !== void 0 ? _24 : undefined;
        message.readOverflowMode = (_25 = object.readOverflowMode) !== null && _25 !== void 0 ? _25 : 0;
        message.maxRowsToGroupBy = (_26 = object.maxRowsToGroupBy) !== null && _26 !== void 0 ? _26 : undefined;
        message.groupByOverflowMode = (_27 = object.groupByOverflowMode) !== null && _27 !== void 0 ? _27 : 0;
        message.maxRowsToSort = (_28 = object.maxRowsToSort) !== null && _28 !== void 0 ? _28 : undefined;
        message.maxBytesToSort = (_29 = object.maxBytesToSort) !== null && _29 !== void 0 ? _29 : undefined;
        message.sortOverflowMode = (_30 = object.sortOverflowMode) !== null && _30 !== void 0 ? _30 : 0;
        message.maxResultRows = (_31 = object.maxResultRows) !== null && _31 !== void 0 ? _31 : undefined;
        message.maxResultBytes = (_32 = object.maxResultBytes) !== null && _32 !== void 0 ? _32 : undefined;
        message.resultOverflowMode = (_33 = object.resultOverflowMode) !== null && _33 !== void 0 ? _33 : 0;
        message.maxRowsInDistinct = (_34 = object.maxRowsInDistinct) !== null && _34 !== void 0 ? _34 : undefined;
        message.maxBytesInDistinct = (_35 = object.maxBytesInDistinct) !== null && _35 !== void 0 ? _35 : undefined;
        message.distinctOverflowMode = (_36 = object.distinctOverflowMode) !== null && _36 !== void 0 ? _36 : 0;
        message.maxRowsToTransfer = (_37 = object.maxRowsToTransfer) !== null && _37 !== void 0 ? _37 : undefined;
        message.maxBytesToTransfer = (_38 = object.maxBytesToTransfer) !== null && _38 !== void 0 ? _38 : undefined;
        message.transferOverflowMode = (_39 = object.transferOverflowMode) !== null && _39 !== void 0 ? _39 : 0;
        message.maxExecutionTime = (_40 = object.maxExecutionTime) !== null && _40 !== void 0 ? _40 : undefined;
        message.timeoutOverflowMode = (_41 = object.timeoutOverflowMode) !== null && _41 !== void 0 ? _41 : 0;
        message.maxRowsInSet = (_42 = object.maxRowsInSet) !== null && _42 !== void 0 ? _42 : undefined;
        message.maxBytesInSet = (_43 = object.maxBytesInSet) !== null && _43 !== void 0 ? _43 : undefined;
        message.setOverflowMode = (_44 = object.setOverflowMode) !== null && _44 !== void 0 ? _44 : 0;
        message.maxRowsInJoin = (_45 = object.maxRowsInJoin) !== null && _45 !== void 0 ? _45 : undefined;
        message.maxBytesInJoin = (_46 = object.maxBytesInJoin) !== null && _46 !== void 0 ? _46 : undefined;
        message.joinOverflowMode = (_47 = object.joinOverflowMode) !== null && _47 !== void 0 ? _47 : 0;
        message.joinAlgorithm = ((_48 = object.joinAlgorithm) === null || _48 === void 0 ? void 0 : _48.map((e) => e)) || [];
        message.anyJoinDistinctRightTableKeys =
            (_49 = object.anyJoinDistinctRightTableKeys) !== null && _49 !== void 0 ? _49 : undefined;
        message.maxColumnsToRead = (_50 = object.maxColumnsToRead) !== null && _50 !== void 0 ? _50 : undefined;
        message.maxTemporaryColumns = (_51 = object.maxTemporaryColumns) !== null && _51 !== void 0 ? _51 : undefined;
        message.maxTemporaryNonConstColumns =
            (_52 = object.maxTemporaryNonConstColumns) !== null && _52 !== void 0 ? _52 : undefined;
        message.maxQuerySize = (_53 = object.maxQuerySize) !== null && _53 !== void 0 ? _53 : undefined;
        message.maxAstDepth = (_54 = object.maxAstDepth) !== null && _54 !== void 0 ? _54 : undefined;
        message.maxAstElements = (_55 = object.maxAstElements) !== null && _55 !== void 0 ? _55 : undefined;
        message.maxExpandedAstElements = (_56 = object.maxExpandedAstElements) !== null && _56 !== void 0 ? _56 : undefined;
        message.minExecutionSpeed = (_57 = object.minExecutionSpeed) !== null && _57 !== void 0 ? _57 : undefined;
        message.minExecutionSpeedBytes = (_58 = object.minExecutionSpeedBytes) !== null && _58 !== void 0 ? _58 : undefined;
        message.countDistinctImplementation =
            (_59 = object.countDistinctImplementation) !== null && _59 !== void 0 ? _59 : 0;
        message.inputFormatValuesInterpretExpressions =
            (_60 = object.inputFormatValuesInterpretExpressions) !== null && _60 !== void 0 ? _60 : undefined;
        message.inputFormatDefaultsForOmittedFields =
            (_61 = object.inputFormatDefaultsForOmittedFields) !== null && _61 !== void 0 ? _61 : undefined;
        message.inputFormatNullAsDefault =
            (_62 = object.inputFormatNullAsDefault) !== null && _62 !== void 0 ? _62 : undefined;
        message.dateTimeInputFormat = (_63 = object.dateTimeInputFormat) !== null && _63 !== void 0 ? _63 : 0;
        message.inputFormatWithNamesUseHeader =
            (_64 = object.inputFormatWithNamesUseHeader) !== null && _64 !== void 0 ? _64 : undefined;
        message.outputFormatJsonQuote64bitIntegers =
            (_65 = object.outputFormatJsonQuote64bitIntegers) !== null && _65 !== void 0 ? _65 : undefined;
        message.outputFormatJsonQuoteDenormals =
            (_66 = object.outputFormatJsonQuoteDenormals) !== null && _66 !== void 0 ? _66 : undefined;
        message.dateTimeOutputFormat = (_67 = object.dateTimeOutputFormat) !== null && _67 !== void 0 ? _67 : 0;
        message.lowCardinalityAllowInNativeFormat =
            (_68 = object.lowCardinalityAllowInNativeFormat) !== null && _68 !== void 0 ? _68 : undefined;
        message.allowSuspiciousLowCardinalityTypes =
            (_69 = object.allowSuspiciousLowCardinalityTypes) !== null && _69 !== void 0 ? _69 : undefined;
        message.emptyResultForAggregationByEmptySet =
            (_70 = object.emptyResultForAggregationByEmptySet) !== null && _70 !== void 0 ? _70 : undefined;
        message.httpConnectionTimeout = (_71 = object.httpConnectionTimeout) !== null && _71 !== void 0 ? _71 : undefined;
        message.httpReceiveTimeout = (_72 = object.httpReceiveTimeout) !== null && _72 !== void 0 ? _72 : undefined;
        message.httpSendTimeout = (_73 = object.httpSendTimeout) !== null && _73 !== void 0 ? _73 : undefined;
        message.enableHttpCompression = (_74 = object.enableHttpCompression) !== null && _74 !== void 0 ? _74 : undefined;
        message.sendProgressInHttpHeaders =
            (_75 = object.sendProgressInHttpHeaders) !== null && _75 !== void 0 ? _75 : undefined;
        message.httpHeadersProgressInterval =
            (_76 = object.httpHeadersProgressInterval) !== null && _76 !== void 0 ? _76 : undefined;
        message.addHttpCorsHeader = (_77 = object.addHttpCorsHeader) !== null && _77 !== void 0 ? _77 : undefined;
        message.cancelHttpReadonlyQueriesOnClientClose =
            (_78 = object.cancelHttpReadonlyQueriesOnClientClose) !== null && _78 !== void 0 ? _78 : undefined;
        message.maxHttpGetRedirects = (_79 = object.maxHttpGetRedirects) !== null && _79 !== void 0 ? _79 : undefined;
        message.joinedSubqueryRequiresAlias =
            (_80 = object.joinedSubqueryRequiresAlias) !== null && _80 !== void 0 ? _80 : undefined;
        message.joinUseNulls = (_81 = object.joinUseNulls) !== null && _81 !== void 0 ? _81 : undefined;
        message.transformNullIn = (_82 = object.transformNullIn) !== null && _82 !== void 0 ? _82 : undefined;
        message.quotaMode = (_83 = object.quotaMode) !== null && _83 !== void 0 ? _83 : 0;
        message.flattenNested = (_84 = object.flattenNested) !== null && _84 !== void 0 ? _84 : undefined;
        message.formatRegexp = (_85 = object.formatRegexp) !== null && _85 !== void 0 ? _85 : "";
        message.formatRegexpEscapingRule = (_86 = object.formatRegexpEscapingRule) !== null && _86 !== void 0 ? _86 : 0;
        message.formatRegexpSkipUnmatched =
            (_87 = object.formatRegexpSkipUnmatched) !== null && _87 !== void 0 ? _87 : undefined;
        message.asyncInsert = (_88 = object.asyncInsert) !== null && _88 !== void 0 ? _88 : undefined;
        message.asyncInsertThreads = (_89 = object.asyncInsertThreads) !== null && _89 !== void 0 ? _89 : undefined;
        message.waitForAsyncInsert = (_90 = object.waitForAsyncInsert) !== null && _90 !== void 0 ? _90 : undefined;
        message.waitForAsyncInsertTimeout =
            (_91 = object.waitForAsyncInsertTimeout) !== null && _91 !== void 0 ? _91 : undefined;
        message.asyncInsertMaxDataSize = (_92 = object.asyncInsertMaxDataSize) !== null && _92 !== void 0 ? _92 : undefined;
        message.asyncInsertBusyTimeout = (_93 = object.asyncInsertBusyTimeout) !== null && _93 !== void 0 ? _93 : undefined;
        message.asyncInsertStaleTimeout =
            (_94 = object.asyncInsertStaleTimeout) !== null && _94 !== void 0 ? _94 : undefined;
        message.memoryProfilerStep = (_95 = object.memoryProfilerStep) !== null && _95 !== void 0 ? _95 : undefined;
        message.memoryProfilerSampleProbability =
            (_96 = object.memoryProfilerSampleProbability) !== null && _96 !== void 0 ? _96 : undefined;
        message.maxFinalThreads = (_97 = object.maxFinalThreads) !== null && _97 !== void 0 ? _97 : undefined;
        message.inputFormatParallelParsing =
            (_98 = object.inputFormatParallelParsing) !== null && _98 !== void 0 ? _98 : undefined;
        message.inputFormatImportNestedJson =
            (_99 = object.inputFormatImportNestedJson) !== null && _99 !== void 0 ? _99 : undefined;
        message.localFilesystemReadMethod = (_100 = object.localFilesystemReadMethod) !== null && _100 !== void 0 ? _100 : 0;
        message.maxReadBufferSize = (_101 = object.maxReadBufferSize) !== null && _101 !== void 0 ? _101 : undefined;
        message.insertKeeperMaxRetries = (_102 = object.insertKeeperMaxRetries) !== null && _102 !== void 0 ? _102 : undefined;
        message.maxTemporaryDataOnDiskSizeForUser =
            (_103 = object.maxTemporaryDataOnDiskSizeForUser) !== null && _103 !== void 0 ? _103 : undefined;
        message.maxTemporaryDataOnDiskSizeForQuery =
            (_104 = object.maxTemporaryDataOnDiskSizeForQuery) !== null && _104 !== void 0 ? _104 : undefined;
        message.maxParserDepth = (_105 = object.maxParserDepth) !== null && _105 !== void 0 ? _105 : undefined;
        message.remoteFilesystemReadMethod = (_106 = object.remoteFilesystemReadMethod) !== null && _106 !== void 0 ? _106 : 0;
        message.memoryOvercommitRatioDenominator =
            (_107 = object.memoryOvercommitRatioDenominator) !== null && _107 !== void 0 ? _107 : undefined;
        message.memoryOvercommitRatioDenominatorForUser =
            (_108 = object.memoryOvercommitRatioDenominatorForUser) !== null && _108 !== void 0 ? _108 : undefined;
        message.memoryUsageOvercommitMaxWaitMicroseconds =
            (_109 = object.memoryUsageOvercommitMaxWaitMicroseconds) !== null && _109 !== void 0 ? _109 : undefined;
        message.compile = (_110 = object.compile) !== null && _110 !== void 0 ? _110 : undefined;
        message.minCountToCompile = (_111 = object.minCountToCompile) !== null && _111 !== void 0 ? _111 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserSettings.$type, exports.UserSettings);
const baseUserQuota = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota",
};
exports.UserQuota = {
    $type: "yandex.cloud.mdb.clickhouse.v1.UserQuota",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.intervalDuration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.intervalDuration,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.queries !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.queries }, writer.uint32(18).fork()).ldelim();
        }
        if (message.errors !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.errors }, writer.uint32(26).fork()).ldelim();
        }
        if (message.resultRows !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.resultRows }, writer.uint32(34).fork()).ldelim();
        }
        if (message.readRows !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.readRows }, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTime !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.executionTime }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserQuota);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.intervalDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.queries = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.errors = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.resultRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.readRows = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.executionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserQuota);
        message.intervalDuration =
            object.intervalDuration !== undefined && object.intervalDuration !== null
                ? Number(object.intervalDuration)
                : undefined;
        message.queries =
            object.queries !== undefined && object.queries !== null
                ? Number(object.queries)
                : undefined;
        message.errors =
            object.errors !== undefined && object.errors !== null
                ? Number(object.errors)
                : undefined;
        message.resultRows =
            object.resultRows !== undefined && object.resultRows !== null
                ? Number(object.resultRows)
                : undefined;
        message.readRows =
            object.readRows !== undefined && object.readRows !== null
                ? Number(object.readRows)
                : undefined;
        message.executionTime =
            object.executionTime !== undefined && object.executionTime !== null
                ? Number(object.executionTime)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.intervalDuration !== undefined &&
            (obj.intervalDuration = message.intervalDuration);
        message.queries !== undefined && (obj.queries = message.queries);
        message.errors !== undefined && (obj.errors = message.errors);
        message.resultRows !== undefined && (obj.resultRows = message.resultRows);
        message.readRows !== undefined && (obj.readRows = message.readRows);
        message.executionTime !== undefined &&
            (obj.executionTime = message.executionTime);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseUserQuota);
        message.intervalDuration = (_a = object.intervalDuration) !== null && _a !== void 0 ? _a : undefined;
        message.queries = (_b = object.queries) !== null && _b !== void 0 ? _b : undefined;
        message.errors = (_c = object.errors) !== null && _c !== void 0 ? _c : undefined;
        message.resultRows = (_d = object.resultRows) !== null && _d !== void 0 ? _d : undefined;
        message.readRows = (_e = object.readRows) !== null && _e !== void 0 ? _e : undefined;
        message.executionTime = (_f = object.executionTime) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserQuota.$type, exports.UserQuota);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
