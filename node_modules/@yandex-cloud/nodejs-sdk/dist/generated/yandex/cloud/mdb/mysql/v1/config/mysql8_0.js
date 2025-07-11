"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysqlconfigset80 = exports.Mysqlconfig80 = exports.mysqlconfig80_BinlogTransactionDependencyTrackingToJSON = exports.mysqlconfig80_BinlogTransactionDependencyTrackingFromJSON = exports.Mysqlconfig80_BinlogTransactionDependencyTracking = exports.mysqlconfig80_LogSlowFilterTypeToJSON = exports.mysqlconfig80_LogSlowFilterTypeFromJSON = exports.Mysqlconfig80_LogSlowFilterType = exports.mysqlconfig80_LogSlowRateTypeToJSON = exports.mysqlconfig80_LogSlowRateTypeFromJSON = exports.Mysqlconfig80_LogSlowRateType = exports.mysqlconfig80_SlaveParallelTypeToJSON = exports.mysqlconfig80_SlaveParallelTypeFromJSON = exports.Mysqlconfig80_SlaveParallelType = exports.mysqlconfig80_BinlogRowImageToJSON = exports.mysqlconfig80_BinlogRowImageFromJSON = exports.Mysqlconfig80_BinlogRowImage = exports.mysqlconfig80_TransactionIsolationToJSON = exports.mysqlconfig80_TransactionIsolationFromJSON = exports.Mysqlconfig80_TransactionIsolation = exports.mysqlconfig80_AuthPluginToJSON = exports.mysqlconfig80_AuthPluginFromJSON = exports.Mysqlconfig80_AuthPlugin = exports.mysqlconfig80_SQLModeToJSON = exports.mysqlconfig80_SQLModeFromJSON = exports.Mysqlconfig80_SQLMode = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.mysql.v1.config";
var Mysqlconfig80_SQLMode;
(function (Mysqlconfig80_SQLMode) {
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["SQLMODE_UNSPECIFIED"] = 0] = "SQLMODE_UNSPECIFIED";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ALLOW_INVALID_DATES"] = 1] = "ALLOW_INVALID_DATES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ANSI_QUOTES"] = 2] = "ANSI_QUOTES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ERROR_FOR_DIVISION_BY_ZERO"] = 3] = "ERROR_FOR_DIVISION_BY_ZERO";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["HIGH_NOT_PRECEDENCE"] = 4] = "HIGH_NOT_PRECEDENCE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["IGNORE_SPACE"] = 5] = "IGNORE_SPACE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_AUTO_VALUE_ON_ZERO"] = 6] = "NO_AUTO_VALUE_ON_ZERO";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_BACKSLASH_ESCAPES"] = 7] = "NO_BACKSLASH_ESCAPES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ENGINE_SUBSTITUTION"] = 8] = "NO_ENGINE_SUBSTITUTION";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_UNSIGNED_SUBTRACTION"] = 9] = "NO_UNSIGNED_SUBTRACTION";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ZERO_DATE"] = 10] = "NO_ZERO_DATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ZERO_IN_DATE"] = 11] = "NO_ZERO_IN_DATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ONLY_FULL_GROUP_BY"] = 15] = "ONLY_FULL_GROUP_BY";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["PAD_CHAR_TO_FULL_LENGTH"] = 16] = "PAD_CHAR_TO_FULL_LENGTH";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["PIPES_AS_CONCAT"] = 17] = "PIPES_AS_CONCAT";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["REAL_AS_FLOAT"] = 18] = "REAL_AS_FLOAT";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["STRICT_ALL_TABLES"] = 19] = "STRICT_ALL_TABLES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["STRICT_TRANS_TABLES"] = 20] = "STRICT_TRANS_TABLES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["TIME_TRUNCATE_FRACTIONAL"] = 21] = "TIME_TRUNCATE_FRACTIONAL";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ANSI"] = 22] = "ANSI";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["TRADITIONAL"] = 23] = "TRADITIONAL";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_DIR_IN_CREATE"] = 24] = "NO_DIR_IN_CREATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_SQLMode = exports.Mysqlconfig80_SQLMode || (exports.Mysqlconfig80_SQLMode = {}));
function mysqlconfig80_SQLModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SQLMODE_UNSPECIFIED":
            return Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED;
        case 1:
        case "ALLOW_INVALID_DATES":
            return Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES;
        case 2:
        case "ANSI_QUOTES":
            return Mysqlconfig80_SQLMode.ANSI_QUOTES;
        case 3:
        case "ERROR_FOR_DIVISION_BY_ZERO":
            return Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO;
        case 4:
        case "HIGH_NOT_PRECEDENCE":
            return Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE;
        case 5:
        case "IGNORE_SPACE":
            return Mysqlconfig80_SQLMode.IGNORE_SPACE;
        case 6:
        case "NO_AUTO_VALUE_ON_ZERO":
            return Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO;
        case 7:
        case "NO_BACKSLASH_ESCAPES":
            return Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES;
        case 8:
        case "NO_ENGINE_SUBSTITUTION":
            return Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION;
        case 9:
        case "NO_UNSIGNED_SUBTRACTION":
            return Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION;
        case 10:
        case "NO_ZERO_DATE":
            return Mysqlconfig80_SQLMode.NO_ZERO_DATE;
        case 11:
        case "NO_ZERO_IN_DATE":
            return Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE;
        case 15:
        case "ONLY_FULL_GROUP_BY":
            return Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY;
        case 16:
        case "PAD_CHAR_TO_FULL_LENGTH":
            return Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH;
        case 17:
        case "PIPES_AS_CONCAT":
            return Mysqlconfig80_SQLMode.PIPES_AS_CONCAT;
        case 18:
        case "REAL_AS_FLOAT":
            return Mysqlconfig80_SQLMode.REAL_AS_FLOAT;
        case 19:
        case "STRICT_ALL_TABLES":
            return Mysqlconfig80_SQLMode.STRICT_ALL_TABLES;
        case 20:
        case "STRICT_TRANS_TABLES":
            return Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES;
        case 21:
        case "TIME_TRUNCATE_FRACTIONAL":
            return Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL;
        case 22:
        case "ANSI":
            return Mysqlconfig80_SQLMode.ANSI;
        case 23:
        case "TRADITIONAL":
            return Mysqlconfig80_SQLMode.TRADITIONAL;
        case 24:
        case "NO_DIR_IN_CREATE":
            return Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_SQLMode.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_SQLModeFromJSON = mysqlconfig80_SQLModeFromJSON;
function mysqlconfig80_SQLModeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED:
            return "SQLMODE_UNSPECIFIED";
        case Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES:
            return "ALLOW_INVALID_DATES";
        case Mysqlconfig80_SQLMode.ANSI_QUOTES:
            return "ANSI_QUOTES";
        case Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO:
            return "ERROR_FOR_DIVISION_BY_ZERO";
        case Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE:
            return "HIGH_NOT_PRECEDENCE";
        case Mysqlconfig80_SQLMode.IGNORE_SPACE:
            return "IGNORE_SPACE";
        case Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO:
            return "NO_AUTO_VALUE_ON_ZERO";
        case Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES:
            return "NO_BACKSLASH_ESCAPES";
        case Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION:
            return "NO_ENGINE_SUBSTITUTION";
        case Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION:
            return "NO_UNSIGNED_SUBTRACTION";
        case Mysqlconfig80_SQLMode.NO_ZERO_DATE:
            return "NO_ZERO_DATE";
        case Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE:
            return "NO_ZERO_IN_DATE";
        case Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY:
            return "ONLY_FULL_GROUP_BY";
        case Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH:
            return "PAD_CHAR_TO_FULL_LENGTH";
        case Mysqlconfig80_SQLMode.PIPES_AS_CONCAT:
            return "PIPES_AS_CONCAT";
        case Mysqlconfig80_SQLMode.REAL_AS_FLOAT:
            return "REAL_AS_FLOAT";
        case Mysqlconfig80_SQLMode.STRICT_ALL_TABLES:
            return "STRICT_ALL_TABLES";
        case Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES:
            return "STRICT_TRANS_TABLES";
        case Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL:
            return "TIME_TRUNCATE_FRACTIONAL";
        case Mysqlconfig80_SQLMode.ANSI:
            return "ANSI";
        case Mysqlconfig80_SQLMode.TRADITIONAL:
            return "TRADITIONAL";
        case Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE:
            return "NO_DIR_IN_CREATE";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_SQLModeToJSON = mysqlconfig80_SQLModeToJSON;
var Mysqlconfig80_AuthPlugin;
(function (Mysqlconfig80_AuthPlugin) {
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["AUTH_PLUGIN_UNSPECIFIED"] = 0] = "AUTH_PLUGIN_UNSPECIFIED";
    /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["MYSQL_NATIVE_PASSWORD"] = 1] = "MYSQL_NATIVE_PASSWORD";
    /** CACHING_SHA2_PASSWORD - Using [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["CACHING_SHA2_PASSWORD"] = 2] = "CACHING_SHA2_PASSWORD";
    /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["SHA256_PASSWORD"] = 3] = "SHA256_PASSWORD";
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_AuthPlugin = exports.Mysqlconfig80_AuthPlugin || (exports.Mysqlconfig80_AuthPlugin = {}));
function mysqlconfig80_AuthPluginFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTH_PLUGIN_UNSPECIFIED":
            return Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
        case 1:
        case "MYSQL_NATIVE_PASSWORD":
            return Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD;
        case 2:
        case "CACHING_SHA2_PASSWORD":
            return Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD;
        case 3:
        case "SHA256_PASSWORD":
            return Mysqlconfig80_AuthPlugin.SHA256_PASSWORD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_AuthPlugin.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_AuthPluginFromJSON = mysqlconfig80_AuthPluginFromJSON;
function mysqlconfig80_AuthPluginToJSON(object) {
    switch (object) {
        case Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
            return "AUTH_PLUGIN_UNSPECIFIED";
        case Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD:
            return "MYSQL_NATIVE_PASSWORD";
        case Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD:
            return "CACHING_SHA2_PASSWORD";
        case Mysqlconfig80_AuthPlugin.SHA256_PASSWORD:
            return "SHA256_PASSWORD";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_AuthPluginToJSON = mysqlconfig80_AuthPluginToJSON;
var Mysqlconfig80_TransactionIsolation;
(function (Mysqlconfig80_TransactionIsolation) {
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["READ_COMMITTED"] = 1] = "READ_COMMITTED";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["REPEATABLE_READ"] = 2] = "REPEATABLE_READ";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["SERIALIZABLE"] = 3] = "SERIALIZABLE";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_TransactionIsolation = exports.Mysqlconfig80_TransactionIsolation || (exports.Mysqlconfig80_TransactionIsolation = {}));
function mysqlconfig80_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "READ_COMMITTED":
            return Mysqlconfig80_TransactionIsolation.READ_COMMITTED;
        case 2:
        case "REPEATABLE_READ":
            return Mysqlconfig80_TransactionIsolation.REPEATABLE_READ;
        case 3:
        case "SERIALIZABLE":
            return Mysqlconfig80_TransactionIsolation.SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_TransactionIsolationFromJSON = mysqlconfig80_TransactionIsolationFromJSON;
function mysqlconfig80_TransactionIsolationToJSON(object) {
    switch (object) {
        case Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case Mysqlconfig80_TransactionIsolation.READ_COMMITTED:
            return "READ_COMMITTED";
        case Mysqlconfig80_TransactionIsolation.REPEATABLE_READ:
            return "REPEATABLE_READ";
        case Mysqlconfig80_TransactionIsolation.SERIALIZABLE:
            return "SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_TransactionIsolationToJSON = mysqlconfig80_TransactionIsolationToJSON;
var Mysqlconfig80_BinlogRowImage;
(function (Mysqlconfig80_BinlogRowImage) {
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["BINLOG_ROW_IMAGE_UNSPECIFIED"] = 0] = "BINLOG_ROW_IMAGE_UNSPECIFIED";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["FULL"] = 1] = "FULL";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["MINIMAL"] = 2] = "MINIMAL";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["NOBLOB"] = 3] = "NOBLOB";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_BinlogRowImage = exports.Mysqlconfig80_BinlogRowImage || (exports.Mysqlconfig80_BinlogRowImage = {}));
function mysqlconfig80_BinlogRowImageFromJSON(object) {
    switch (object) {
        case 0:
        case "BINLOG_ROW_IMAGE_UNSPECIFIED":
            return Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED;
        case 1:
        case "FULL":
            return Mysqlconfig80_BinlogRowImage.FULL;
        case 2:
        case "MINIMAL":
            return Mysqlconfig80_BinlogRowImage.MINIMAL;
        case 3:
        case "NOBLOB":
            return Mysqlconfig80_BinlogRowImage.NOBLOB;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_BinlogRowImage.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_BinlogRowImageFromJSON = mysqlconfig80_BinlogRowImageFromJSON;
function mysqlconfig80_BinlogRowImageToJSON(object) {
    switch (object) {
        case Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED:
            return "BINLOG_ROW_IMAGE_UNSPECIFIED";
        case Mysqlconfig80_BinlogRowImage.FULL:
            return "FULL";
        case Mysqlconfig80_BinlogRowImage.MINIMAL:
            return "MINIMAL";
        case Mysqlconfig80_BinlogRowImage.NOBLOB:
            return "NOBLOB";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_BinlogRowImageToJSON = mysqlconfig80_BinlogRowImageToJSON;
var Mysqlconfig80_SlaveParallelType;
(function (Mysqlconfig80_SlaveParallelType) {
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["SLAVE_PARALLEL_TYPE_UNSPECIFIED"] = 0] = "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["DATABASE"] = 1] = "DATABASE";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["LOGICAL_CLOCK"] = 2] = "LOGICAL_CLOCK";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_SlaveParallelType = exports.Mysqlconfig80_SlaveParallelType || (exports.Mysqlconfig80_SlaveParallelType = {}));
function mysqlconfig80_SlaveParallelTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SLAVE_PARALLEL_TYPE_UNSPECIFIED":
            return Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED;
        case 1:
        case "DATABASE":
            return Mysqlconfig80_SlaveParallelType.DATABASE;
        case 2:
        case "LOGICAL_CLOCK":
            return Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_SlaveParallelType.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_SlaveParallelTypeFromJSON = mysqlconfig80_SlaveParallelTypeFromJSON;
function mysqlconfig80_SlaveParallelTypeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED:
            return "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
        case Mysqlconfig80_SlaveParallelType.DATABASE:
            return "DATABASE";
        case Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK:
            return "LOGICAL_CLOCK";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_SlaveParallelTypeToJSON = mysqlconfig80_SlaveParallelTypeToJSON;
var Mysqlconfig80_LogSlowRateType;
(function (Mysqlconfig80_LogSlowRateType) {
    Mysqlconfig80_LogSlowRateType[Mysqlconfig80_LogSlowRateType["LOG_SLOW_RATE_TYPE_UNSPECIFIED"] = 0] = "LOG_SLOW_RATE_TYPE_UNSPECIFIED";
    Mysqlconfig80_LogSlowRateType[Mysqlconfig80_LogSlowRateType["SESSION"] = 1] = "SESSION";
    Mysqlconfig80_LogSlowRateType[Mysqlconfig80_LogSlowRateType["QUERY"] = 2] = "QUERY";
    Mysqlconfig80_LogSlowRateType[Mysqlconfig80_LogSlowRateType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_LogSlowRateType = exports.Mysqlconfig80_LogSlowRateType || (exports.Mysqlconfig80_LogSlowRateType = {}));
function mysqlconfig80_LogSlowRateTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_SLOW_RATE_TYPE_UNSPECIFIED":
            return Mysqlconfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED;
        case 1:
        case "SESSION":
            return Mysqlconfig80_LogSlowRateType.SESSION;
        case 2:
        case "QUERY":
            return Mysqlconfig80_LogSlowRateType.QUERY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_LogSlowRateType.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_LogSlowRateTypeFromJSON = mysqlconfig80_LogSlowRateTypeFromJSON;
function mysqlconfig80_LogSlowRateTypeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_LogSlowRateType.LOG_SLOW_RATE_TYPE_UNSPECIFIED:
            return "LOG_SLOW_RATE_TYPE_UNSPECIFIED";
        case Mysqlconfig80_LogSlowRateType.SESSION:
            return "SESSION";
        case Mysqlconfig80_LogSlowRateType.QUERY:
            return "QUERY";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_LogSlowRateTypeToJSON = mysqlconfig80_LogSlowRateTypeToJSON;
var Mysqlconfig80_LogSlowFilterType;
(function (Mysqlconfig80_LogSlowFilterType) {
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["LOG_SLOW_FILTER_TYPE_UNSPECIFIED"] = 0] = "LOG_SLOW_FILTER_TYPE_UNSPECIFIED";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["FULL_SCAN"] = 1] = "FULL_SCAN";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["FULL_JOIN"] = 2] = "FULL_JOIN";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["TMP_TABLE"] = 3] = "TMP_TABLE";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["TMP_TABLE_ON_DISK"] = 4] = "TMP_TABLE_ON_DISK";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["FILESORT"] = 5] = "FILESORT";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["FILESORT_ON_DISK"] = 6] = "FILESORT_ON_DISK";
    Mysqlconfig80_LogSlowFilterType[Mysqlconfig80_LogSlowFilterType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_LogSlowFilterType = exports.Mysqlconfig80_LogSlowFilterType || (exports.Mysqlconfig80_LogSlowFilterType = {}));
function mysqlconfig80_LogSlowFilterTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_SLOW_FILTER_TYPE_UNSPECIFIED":
            return Mysqlconfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED;
        case 1:
        case "FULL_SCAN":
            return Mysqlconfig80_LogSlowFilterType.FULL_SCAN;
        case 2:
        case "FULL_JOIN":
            return Mysqlconfig80_LogSlowFilterType.FULL_JOIN;
        case 3:
        case "TMP_TABLE":
            return Mysqlconfig80_LogSlowFilterType.TMP_TABLE;
        case 4:
        case "TMP_TABLE_ON_DISK":
            return Mysqlconfig80_LogSlowFilterType.TMP_TABLE_ON_DISK;
        case 5:
        case "FILESORT":
            return Mysqlconfig80_LogSlowFilterType.FILESORT;
        case 6:
        case "FILESORT_ON_DISK":
            return Mysqlconfig80_LogSlowFilterType.FILESORT_ON_DISK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_LogSlowFilterType.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_LogSlowFilterTypeFromJSON = mysqlconfig80_LogSlowFilterTypeFromJSON;
function mysqlconfig80_LogSlowFilterTypeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_LogSlowFilterType.LOG_SLOW_FILTER_TYPE_UNSPECIFIED:
            return "LOG_SLOW_FILTER_TYPE_UNSPECIFIED";
        case Mysqlconfig80_LogSlowFilterType.FULL_SCAN:
            return "FULL_SCAN";
        case Mysqlconfig80_LogSlowFilterType.FULL_JOIN:
            return "FULL_JOIN";
        case Mysqlconfig80_LogSlowFilterType.TMP_TABLE:
            return "TMP_TABLE";
        case Mysqlconfig80_LogSlowFilterType.TMP_TABLE_ON_DISK:
            return "TMP_TABLE_ON_DISK";
        case Mysqlconfig80_LogSlowFilterType.FILESORT:
            return "FILESORT";
        case Mysqlconfig80_LogSlowFilterType.FILESORT_ON_DISK:
            return "FILESORT_ON_DISK";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_LogSlowFilterTypeToJSON = mysqlconfig80_LogSlowFilterTypeToJSON;
var Mysqlconfig80_BinlogTransactionDependencyTracking;
(function (Mysqlconfig80_BinlogTransactionDependencyTracking) {
    Mysqlconfig80_BinlogTransactionDependencyTracking[Mysqlconfig80_BinlogTransactionDependencyTracking["BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED"] = 0] = "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED";
    Mysqlconfig80_BinlogTransactionDependencyTracking[Mysqlconfig80_BinlogTransactionDependencyTracking["COMMIT_ORDER"] = 1] = "COMMIT_ORDER";
    Mysqlconfig80_BinlogTransactionDependencyTracking[Mysqlconfig80_BinlogTransactionDependencyTracking["WRITESET"] = 2] = "WRITESET";
    Mysqlconfig80_BinlogTransactionDependencyTracking[Mysqlconfig80_BinlogTransactionDependencyTracking["WRITESET_SESSION"] = 3] = "WRITESET_SESSION";
    Mysqlconfig80_BinlogTransactionDependencyTracking[Mysqlconfig80_BinlogTransactionDependencyTracking["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_BinlogTransactionDependencyTracking = exports.Mysqlconfig80_BinlogTransactionDependencyTracking || (exports.Mysqlconfig80_BinlogTransactionDependencyTracking = {}));
function mysqlconfig80_BinlogTransactionDependencyTrackingFromJSON(object) {
    switch (object) {
        case 0:
        case "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED":
            return Mysqlconfig80_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED;
        case 1:
        case "COMMIT_ORDER":
            return Mysqlconfig80_BinlogTransactionDependencyTracking.COMMIT_ORDER;
        case 2:
        case "WRITESET":
            return Mysqlconfig80_BinlogTransactionDependencyTracking.WRITESET;
        case 3:
        case "WRITESET_SESSION":
            return Mysqlconfig80_BinlogTransactionDependencyTracking.WRITESET_SESSION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Mysqlconfig80_BinlogTransactionDependencyTracking.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_BinlogTransactionDependencyTrackingFromJSON = mysqlconfig80_BinlogTransactionDependencyTrackingFromJSON;
function mysqlconfig80_BinlogTransactionDependencyTrackingToJSON(object) {
    switch (object) {
        case Mysqlconfig80_BinlogTransactionDependencyTracking.BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED:
            return "BINLOG_TRANSACTION_DEPENDENCY_TRACKING_UNSPECIFIED";
        case Mysqlconfig80_BinlogTransactionDependencyTracking.COMMIT_ORDER:
            return "COMMIT_ORDER";
        case Mysqlconfig80_BinlogTransactionDependencyTracking.WRITESET:
            return "WRITESET";
        case Mysqlconfig80_BinlogTransactionDependencyTracking.WRITESET_SESSION:
            return "WRITESET_SESSION";
        default:
            return "UNKNOWN";
    }
}
exports.mysqlconfig80_BinlogTransactionDependencyTrackingToJSON = mysqlconfig80_BinlogTransactionDependencyTrackingToJSON;
const baseMysqlconfig80 = {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0",
    sqlMode: 0,
    defaultAuthenticationPlugin: 0,
    transactionIsolation: 0,
    defaultTimeZone: "",
    characterSetServer: "",
    collationServer: "",
    binlogRowImage: 0,
    slaveParallelType: 0,
    logSlowRateType: 0,
    logSlowFilter: 0,
    binlogTransactionDependencyTracking: 0,
    optimizerSwitch: "",
};
exports.Mysqlconfig80 = {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfig8_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.innodbBufferPoolSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbBufferPoolSize,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(18).fork()).ldelim();
        }
        if (message.longQueryTime !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.longQueryTime }, writer.uint32(26).fork()).ldelim();
        }
        if (message.generalLog !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.generalLog }, writer.uint32(34).fork()).ldelim();
        }
        if (message.auditLog !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.auditLog }, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.sqlMode) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.maxAllowedPacket !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxAllowedPacket,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.defaultAuthenticationPlugin !== 0) {
            writer.uint32(64).int32(message.defaultAuthenticationPlugin);
        }
        if (message.innodbFlushLogAtTrxCommit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbFlushLogAtTrxCommit,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.innodbLockWaitTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbLockWaitTimeout,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.transactionIsolation !== 0) {
            writer.uint32(88).int32(message.transactionIsolation);
        }
        if (message.innodbPrintAllDeadlocks !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbPrintAllDeadlocks,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.netReadTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.netReadTimeout }, writer.uint32(106).fork()).ldelim();
        }
        if (message.netWriteTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.netWriteTimeout,
            }, writer.uint32(114).fork()).ldelim();
        }
        if (message.groupConcatMaxLen !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.groupConcatMaxLen,
            }, writer.uint32(122).fork()).ldelim();
        }
        if (message.tmpTableSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tmpTableSize }, writer.uint32(130).fork()).ldelim();
        }
        if (message.maxHeapTableSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxHeapTableSize,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.defaultTimeZone !== "") {
            writer.uint32(146).string(message.defaultTimeZone);
        }
        if (message.characterSetServer !== "") {
            writer.uint32(154).string(message.characterSetServer);
        }
        if (message.collationServer !== "") {
            writer.uint32(162).string(message.collationServer);
        }
        if (message.innodbAdaptiveHashIndex !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbAdaptiveHashIndex,
            }, writer.uint32(170).fork()).ldelim();
        }
        if (message.innodbNumaInterleave !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbNumaInterleave,
            }, writer.uint32(178).fork()).ldelim();
        }
        if (message.innodbLogBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbLogBufferSize,
            }, writer.uint32(186).fork()).ldelim();
        }
        if (message.innodbLogFileSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbLogFileSize,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.innodbIoCapacity !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbIoCapacity,
            }, writer.uint32(202).fork()).ldelim();
        }
        if (message.innodbIoCapacityMax !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbIoCapacityMax,
            }, writer.uint32(210).fork()).ldelim();
        }
        if (message.innodbReadIoThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbReadIoThreads,
            }, writer.uint32(218).fork()).ldelim();
        }
        if (message.innodbWriteIoThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbWriteIoThreads,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.innodbPurgeThreads !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbPurgeThreads,
            }, writer.uint32(234).fork()).ldelim();
        }
        if (message.innodbThreadConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbThreadConcurrency,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.innodbTempDataFileMaxSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbTempDataFileMaxSize,
            }, writer.uint32(250).fork()).ldelim();
        }
        if (message.threadCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.threadCacheSize,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.threadStack !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.threadStack }, writer.uint32(266).fork()).ldelim();
        }
        if (message.joinBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.joinBufferSize }, writer.uint32(274).fork()).ldelim();
        }
        if (message.sortBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.sortBufferSize }, writer.uint32(282).fork()).ldelim();
        }
        if (message.tableDefinitionCache !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.tableDefinitionCache,
            }, writer.uint32(290).fork()).ldelim();
        }
        if (message.tableOpenCache !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tableOpenCache }, writer.uint32(298).fork()).ldelim();
        }
        if (message.tableOpenCacheInstances !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.tableOpenCacheInstances,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.explicitDefaultsForTimestamp !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.explicitDefaultsForTimestamp,
            }, writer.uint32(314).fork()).ldelim();
        }
        if (message.autoIncrementIncrement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autoIncrementIncrement,
            }, writer.uint32(322).fork()).ldelim();
        }
        if (message.autoIncrementOffset !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autoIncrementOffset,
            }, writer.uint32(330).fork()).ldelim();
        }
        if (message.syncBinlog !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.syncBinlog }, writer.uint32(338).fork()).ldelim();
        }
        if (message.binlogCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.binlogCacheSize,
            }, writer.uint32(346).fork()).ldelim();
        }
        if (message.binlogGroupCommitSyncDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.binlogGroupCommitSyncDelay,
            }, writer.uint32(354).fork()).ldelim();
        }
        if (message.binlogRowImage !== 0) {
            writer.uint32(360).int32(message.binlogRowImage);
        }
        if (message.binlogRowsQueryLogEvents !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.binlogRowsQueryLogEvents,
            }, writer.uint32(370).fork()).ldelim();
        }
        if (message.rplSemiSyncMasterWaitForSlaveCount !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.rplSemiSyncMasterWaitForSlaveCount,
            }, writer.uint32(378).fork()).ldelim();
        }
        if (message.slaveParallelType !== 0) {
            writer.uint32(384).int32(message.slaveParallelType);
        }
        if (message.slaveParallelWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.slaveParallelWorkers,
            }, writer.uint32(394).fork()).ldelim();
        }
        if (message.regexpTimeLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.regexpTimeLimit,
            }, writer.uint32(402).fork()).ldelim();
        }
        if (message.mdbPreserveBinlogBytes !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mdbPreserveBinlogBytes,
            }, writer.uint32(410).fork()).ldelim();
        }
        if (message.interactiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.interactiveTimeout,
            }, writer.uint32(418).fork()).ldelim();
        }
        if (message.waitTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.waitTimeout }, writer.uint32(426).fork()).ldelim();
        }
        if (message.mdbOfflineModeEnableLag !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mdbOfflineModeEnableLag,
            }, writer.uint32(434).fork()).ldelim();
        }
        if (message.mdbOfflineModeDisableLag !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mdbOfflineModeDisableLag,
            }, writer.uint32(442).fork()).ldelim();
        }
        if (message.rangeOptimizerMaxMemSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.rangeOptimizerMaxMemSize,
            }, writer.uint32(450).fork()).ldelim();
        }
        if (message.slowQueryLog !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.slowQueryLog }, writer.uint32(458).fork()).ldelim();
        }
        if (message.slowQueryLogAlwaysWriteTime !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.slowQueryLogAlwaysWriteTime,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.logSlowRateType !== 0) {
            writer.uint32(472).int32(message.logSlowRateType);
        }
        if (message.logSlowRateLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logSlowRateLimit,
            }, writer.uint32(482).fork()).ldelim();
        }
        if (message.logSlowSpStatements !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logSlowSpStatements,
            }, writer.uint32(490).fork()).ldelim();
        }
        writer.uint32(498).fork();
        for (const v of message.logSlowFilter) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.mdbPriorityChoiceMaxLag !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.mdbPriorityChoiceMaxLag,
            }, writer.uint32(506).fork()).ldelim();
        }
        if (message.innodbPageSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.innodbPageSize }, writer.uint32(514).fork()).ldelim();
        }
        if (message.innodbOnlineAlterLogMaxSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbOnlineAlterLogMaxSize,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.innodbFtMinTokenSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbFtMinTokenSize,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.innodbFtMaxTokenSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbFtMaxTokenSize,
            }, writer.uint32(538).fork()).ldelim();
        }
        if (message.lowerCaseTableNames !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.lowerCaseTableNames,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.maxSpRecursionDepth !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSpRecursionDepth,
            }, writer.uint32(554).fork()).ldelim();
        }
        if (message.innodbCompressionLevel !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.innodbCompressionLevel,
            }, writer.uint32(562).fork()).ldelim();
        }
        if (message.binlogTransactionDependencyTracking !== 0) {
            writer.uint32(568).int32(message.binlogTransactionDependencyTracking);
        }
        if (message.autocommit !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.autocommit }, writer.uint32(578).fork()).ldelim();
        }
        if (message.innodbStatusOutput !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbStatusOutput,
            }, writer.uint32(586).fork()).ldelim();
        }
        if (message.innodbStrictMode !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbStrictMode,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.innodbPrintLockWaitTimeoutInfo !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.innodbPrintLockWaitTimeoutInfo,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logErrorVerbosity,
            }, writer.uint32(610).fork()).ldelim();
        }
        if (message.maxDigestLength !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxDigestLength,
            }, writer.uint32(618).fork()).ldelim();
        }
        if (message.lockWaitTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.lockWaitTimeout,
            }, writer.uint32(626).fork()).ldelim();
        }
        if (message.maxPreparedStmtCount !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedStmtCount,
            }, writer.uint32(634).fork()).ldelim();
        }
        if (message.optimizerSwitch !== "") {
            writer.uint32(642).string(message.optimizerSwitch);
        }
        if (message.optimizerSearchDepth !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.optimizerSearchDepth,
            }, writer.uint32(650).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlconfig80);
        message.sqlMode = [];
        message.logSlowFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.innodbBufferPoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.longQueryTime = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.generalLog = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.auditLog = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sqlMode.push(reader.int32());
                        }
                    }
                    else {
                        message.sqlMode.push(reader.int32());
                    }
                    break;
                case 7:
                    message.maxAllowedPacket = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.defaultAuthenticationPlugin = reader.int32();
                    break;
                case 9:
                    message.innodbFlushLogAtTrxCommit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.innodbLockWaitTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.transactionIsolation = reader.int32();
                    break;
                case 12:
                    message.innodbPrintAllDeadlocks = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.netReadTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.netWriteTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.groupConcatMaxLen = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.tmpTableSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.maxHeapTableSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.defaultTimeZone = reader.string();
                    break;
                case 19:
                    message.characterSetServer = reader.string();
                    break;
                case 20:
                    message.collationServer = reader.string();
                    break;
                case 21:
                    message.innodbAdaptiveHashIndex = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.innodbNumaInterleave = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.innodbLogBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.innodbLogFileSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.innodbIoCapacity = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.innodbIoCapacityMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.innodbReadIoThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.innodbWriteIoThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.innodbPurgeThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.innodbThreadConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.innodbTempDataFileMaxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.threadCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.threadStack = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.joinBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 35:
                    message.sortBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.tableDefinitionCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.tableOpenCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.tableOpenCacheInstances = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.explicitDefaultsForTimestamp = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.autoIncrementIncrement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.autoIncrementOffset = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.syncBinlog = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.binlogCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.binlogGroupCommitSyncDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.binlogRowImage = reader.int32();
                    break;
                case 46:
                    message.binlogRowsQueryLogEvents = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.rplSemiSyncMasterWaitForSlaveCount = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.slaveParallelType = reader.int32();
                    break;
                case 49:
                    message.slaveParallelWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.regexpTimeLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.mdbPreserveBinlogBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.interactiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.waitTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.mdbOfflineModeEnableLag = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.mdbOfflineModeDisableLag = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.rangeOptimizerMaxMemSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.slowQueryLog = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.slowQueryLogAlwaysWriteTime = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.logSlowRateType = reader.int32();
                    break;
                case 60:
                    message.logSlowRateLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 61:
                    message.logSlowSpStatements = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.logSlowFilter.push(reader.int32());
                        }
                    }
                    else {
                        message.logSlowFilter.push(reader.int32());
                    }
                    break;
                case 63:
                    message.mdbPriorityChoiceMaxLag = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.innodbPageSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.innodbOnlineAlterLogMaxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.innodbFtMinTokenSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.innodbFtMaxTokenSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.lowerCaseTableNames = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.maxSpRecursionDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.innodbCompressionLevel = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.binlogTransactionDependencyTracking = reader.int32();
                    break;
                case 72:
                    message.autocommit = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.innodbStatusOutput = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.innodbStrictMode = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.innodbPrintLockWaitTimeoutInfo = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.logErrorVerbosity = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.maxDigestLength = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.lockWaitTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.maxPreparedStmtCount = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.optimizerSwitch = reader.string();
                    break;
                case 81:
                    message.optimizerSearchDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, baseMysqlconfig80);
        message.innodbBufferPoolSize =
            object.innodbBufferPoolSize !== undefined &&
                object.innodbBufferPoolSize !== null
                ? Number(object.innodbBufferPoolSize)
                : undefined;
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.longQueryTime =
            object.longQueryTime !== undefined && object.longQueryTime !== null
                ? Number(object.longQueryTime)
                : undefined;
        message.generalLog =
            object.generalLog !== undefined && object.generalLog !== null
                ? Boolean(object.generalLog)
                : undefined;
        message.auditLog =
            object.auditLog !== undefined && object.auditLog !== null
                ? Boolean(object.auditLog)
                : undefined;
        message.sqlMode = ((_a = object.sqlMode) !== null && _a !== void 0 ? _a : []).map((e) => mysqlconfig80_SQLModeFromJSON(e));
        message.maxAllowedPacket =
            object.maxAllowedPacket !== undefined && object.maxAllowedPacket !== null
                ? Number(object.maxAllowedPacket)
                : undefined;
        message.defaultAuthenticationPlugin =
            object.defaultAuthenticationPlugin !== undefined &&
                object.defaultAuthenticationPlugin !== null
                ? mysqlconfig80_AuthPluginFromJSON(object.defaultAuthenticationPlugin)
                : 0;
        message.innodbFlushLogAtTrxCommit =
            object.innodbFlushLogAtTrxCommit !== undefined &&
                object.innodbFlushLogAtTrxCommit !== null
                ? Number(object.innodbFlushLogAtTrxCommit)
                : undefined;
        message.innodbLockWaitTimeout =
            object.innodbLockWaitTimeout !== undefined &&
                object.innodbLockWaitTimeout !== null
                ? Number(object.innodbLockWaitTimeout)
                : undefined;
        message.transactionIsolation =
            object.transactionIsolation !== undefined &&
                object.transactionIsolation !== null
                ? mysqlconfig80_TransactionIsolationFromJSON(object.transactionIsolation)
                : 0;
        message.innodbPrintAllDeadlocks =
            object.innodbPrintAllDeadlocks !== undefined &&
                object.innodbPrintAllDeadlocks !== null
                ? Boolean(object.innodbPrintAllDeadlocks)
                : undefined;
        message.netReadTimeout =
            object.netReadTimeout !== undefined && object.netReadTimeout !== null
                ? Number(object.netReadTimeout)
                : undefined;
        message.netWriteTimeout =
            object.netWriteTimeout !== undefined && object.netWriteTimeout !== null
                ? Number(object.netWriteTimeout)
                : undefined;
        message.groupConcatMaxLen =
            object.groupConcatMaxLen !== undefined &&
                object.groupConcatMaxLen !== null
                ? Number(object.groupConcatMaxLen)
                : undefined;
        message.tmpTableSize =
            object.tmpTableSize !== undefined && object.tmpTableSize !== null
                ? Number(object.tmpTableSize)
                : undefined;
        message.maxHeapTableSize =
            object.maxHeapTableSize !== undefined && object.maxHeapTableSize !== null
                ? Number(object.maxHeapTableSize)
                : undefined;
        message.defaultTimeZone =
            object.defaultTimeZone !== undefined && object.defaultTimeZone !== null
                ? String(object.defaultTimeZone)
                : "";
        message.characterSetServer =
            object.characterSetServer !== undefined &&
                object.characterSetServer !== null
                ? String(object.characterSetServer)
                : "";
        message.collationServer =
            object.collationServer !== undefined && object.collationServer !== null
                ? String(object.collationServer)
                : "";
        message.innodbAdaptiveHashIndex =
            object.innodbAdaptiveHashIndex !== undefined &&
                object.innodbAdaptiveHashIndex !== null
                ? Boolean(object.innodbAdaptiveHashIndex)
                : undefined;
        message.innodbNumaInterleave =
            object.innodbNumaInterleave !== undefined &&
                object.innodbNumaInterleave !== null
                ? Boolean(object.innodbNumaInterleave)
                : undefined;
        message.innodbLogBufferSize =
            object.innodbLogBufferSize !== undefined &&
                object.innodbLogBufferSize !== null
                ? Number(object.innodbLogBufferSize)
                : undefined;
        message.innodbLogFileSize =
            object.innodbLogFileSize !== undefined &&
                object.innodbLogFileSize !== null
                ? Number(object.innodbLogFileSize)
                : undefined;
        message.innodbIoCapacity =
            object.innodbIoCapacity !== undefined && object.innodbIoCapacity !== null
                ? Number(object.innodbIoCapacity)
                : undefined;
        message.innodbIoCapacityMax =
            object.innodbIoCapacityMax !== undefined &&
                object.innodbIoCapacityMax !== null
                ? Number(object.innodbIoCapacityMax)
                : undefined;
        message.innodbReadIoThreads =
            object.innodbReadIoThreads !== undefined &&
                object.innodbReadIoThreads !== null
                ? Number(object.innodbReadIoThreads)
                : undefined;
        message.innodbWriteIoThreads =
            object.innodbWriteIoThreads !== undefined &&
                object.innodbWriteIoThreads !== null
                ? Number(object.innodbWriteIoThreads)
                : undefined;
        message.innodbPurgeThreads =
            object.innodbPurgeThreads !== undefined &&
                object.innodbPurgeThreads !== null
                ? Number(object.innodbPurgeThreads)
                : undefined;
        message.innodbThreadConcurrency =
            object.innodbThreadConcurrency !== undefined &&
                object.innodbThreadConcurrency !== null
                ? Number(object.innodbThreadConcurrency)
                : undefined;
        message.innodbTempDataFileMaxSize =
            object.innodbTempDataFileMaxSize !== undefined &&
                object.innodbTempDataFileMaxSize !== null
                ? Number(object.innodbTempDataFileMaxSize)
                : undefined;
        message.threadCacheSize =
            object.threadCacheSize !== undefined && object.threadCacheSize !== null
                ? Number(object.threadCacheSize)
                : undefined;
        message.threadStack =
            object.threadStack !== undefined && object.threadStack !== null
                ? Number(object.threadStack)
                : undefined;
        message.joinBufferSize =
            object.joinBufferSize !== undefined && object.joinBufferSize !== null
                ? Number(object.joinBufferSize)
                : undefined;
        message.sortBufferSize =
            object.sortBufferSize !== undefined && object.sortBufferSize !== null
                ? Number(object.sortBufferSize)
                : undefined;
        message.tableDefinitionCache =
            object.tableDefinitionCache !== undefined &&
                object.tableDefinitionCache !== null
                ? Number(object.tableDefinitionCache)
                : undefined;
        message.tableOpenCache =
            object.tableOpenCache !== undefined && object.tableOpenCache !== null
                ? Number(object.tableOpenCache)
                : undefined;
        message.tableOpenCacheInstances =
            object.tableOpenCacheInstances !== undefined &&
                object.tableOpenCacheInstances !== null
                ? Number(object.tableOpenCacheInstances)
                : undefined;
        message.explicitDefaultsForTimestamp =
            object.explicitDefaultsForTimestamp !== undefined &&
                object.explicitDefaultsForTimestamp !== null
                ? Boolean(object.explicitDefaultsForTimestamp)
                : undefined;
        message.autoIncrementIncrement =
            object.autoIncrementIncrement !== undefined &&
                object.autoIncrementIncrement !== null
                ? Number(object.autoIncrementIncrement)
                : undefined;
        message.autoIncrementOffset =
            object.autoIncrementOffset !== undefined &&
                object.autoIncrementOffset !== null
                ? Number(object.autoIncrementOffset)
                : undefined;
        message.syncBinlog =
            object.syncBinlog !== undefined && object.syncBinlog !== null
                ? Number(object.syncBinlog)
                : undefined;
        message.binlogCacheSize =
            object.binlogCacheSize !== undefined && object.binlogCacheSize !== null
                ? Number(object.binlogCacheSize)
                : undefined;
        message.binlogGroupCommitSyncDelay =
            object.binlogGroupCommitSyncDelay !== undefined &&
                object.binlogGroupCommitSyncDelay !== null
                ? Number(object.binlogGroupCommitSyncDelay)
                : undefined;
        message.binlogRowImage =
            object.binlogRowImage !== undefined && object.binlogRowImage !== null
                ? mysqlconfig80_BinlogRowImageFromJSON(object.binlogRowImage)
                : 0;
        message.binlogRowsQueryLogEvents =
            object.binlogRowsQueryLogEvents !== undefined &&
                object.binlogRowsQueryLogEvents !== null
                ? Boolean(object.binlogRowsQueryLogEvents)
                : undefined;
        message.rplSemiSyncMasterWaitForSlaveCount =
            object.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
                object.rplSemiSyncMasterWaitForSlaveCount !== null
                ? Number(object.rplSemiSyncMasterWaitForSlaveCount)
                : undefined;
        message.slaveParallelType =
            object.slaveParallelType !== undefined &&
                object.slaveParallelType !== null
                ? mysqlconfig80_SlaveParallelTypeFromJSON(object.slaveParallelType)
                : 0;
        message.slaveParallelWorkers =
            object.slaveParallelWorkers !== undefined &&
                object.slaveParallelWorkers !== null
                ? Number(object.slaveParallelWorkers)
                : undefined;
        message.regexpTimeLimit =
            object.regexpTimeLimit !== undefined && object.regexpTimeLimit !== null
                ? Number(object.regexpTimeLimit)
                : undefined;
        message.mdbPreserveBinlogBytes =
            object.mdbPreserveBinlogBytes !== undefined &&
                object.mdbPreserveBinlogBytes !== null
                ? Number(object.mdbPreserveBinlogBytes)
                : undefined;
        message.interactiveTimeout =
            object.interactiveTimeout !== undefined &&
                object.interactiveTimeout !== null
                ? Number(object.interactiveTimeout)
                : undefined;
        message.waitTimeout =
            object.waitTimeout !== undefined && object.waitTimeout !== null
                ? Number(object.waitTimeout)
                : undefined;
        message.mdbOfflineModeEnableLag =
            object.mdbOfflineModeEnableLag !== undefined &&
                object.mdbOfflineModeEnableLag !== null
                ? Number(object.mdbOfflineModeEnableLag)
                : undefined;
        message.mdbOfflineModeDisableLag =
            object.mdbOfflineModeDisableLag !== undefined &&
                object.mdbOfflineModeDisableLag !== null
                ? Number(object.mdbOfflineModeDisableLag)
                : undefined;
        message.rangeOptimizerMaxMemSize =
            object.rangeOptimizerMaxMemSize !== undefined &&
                object.rangeOptimizerMaxMemSize !== null
                ? Number(object.rangeOptimizerMaxMemSize)
                : undefined;
        message.slowQueryLog =
            object.slowQueryLog !== undefined && object.slowQueryLog !== null
                ? Boolean(object.slowQueryLog)
                : undefined;
        message.slowQueryLogAlwaysWriteTime =
            object.slowQueryLogAlwaysWriteTime !== undefined &&
                object.slowQueryLogAlwaysWriteTime !== null
                ? Number(object.slowQueryLogAlwaysWriteTime)
                : undefined;
        message.logSlowRateType =
            object.logSlowRateType !== undefined && object.logSlowRateType !== null
                ? mysqlconfig80_LogSlowRateTypeFromJSON(object.logSlowRateType)
                : 0;
        message.logSlowRateLimit =
            object.logSlowRateLimit !== undefined && object.logSlowRateLimit !== null
                ? Number(object.logSlowRateLimit)
                : undefined;
        message.logSlowSpStatements =
            object.logSlowSpStatements !== undefined &&
                object.logSlowSpStatements !== null
                ? Boolean(object.logSlowSpStatements)
                : undefined;
        message.logSlowFilter = ((_b = object.logSlowFilter) !== null && _b !== void 0 ? _b : []).map((e) => mysqlconfig80_LogSlowFilterTypeFromJSON(e));
        message.mdbPriorityChoiceMaxLag =
            object.mdbPriorityChoiceMaxLag !== undefined &&
                object.mdbPriorityChoiceMaxLag !== null
                ? Number(object.mdbPriorityChoiceMaxLag)
                : undefined;
        message.innodbPageSize =
            object.innodbPageSize !== undefined && object.innodbPageSize !== null
                ? Number(object.innodbPageSize)
                : undefined;
        message.innodbOnlineAlterLogMaxSize =
            object.innodbOnlineAlterLogMaxSize !== undefined &&
                object.innodbOnlineAlterLogMaxSize !== null
                ? Number(object.innodbOnlineAlterLogMaxSize)
                : undefined;
        message.innodbFtMinTokenSize =
            object.innodbFtMinTokenSize !== undefined &&
                object.innodbFtMinTokenSize !== null
                ? Number(object.innodbFtMinTokenSize)
                : undefined;
        message.innodbFtMaxTokenSize =
            object.innodbFtMaxTokenSize !== undefined &&
                object.innodbFtMaxTokenSize !== null
                ? Number(object.innodbFtMaxTokenSize)
                : undefined;
        message.lowerCaseTableNames =
            object.lowerCaseTableNames !== undefined &&
                object.lowerCaseTableNames !== null
                ? Number(object.lowerCaseTableNames)
                : undefined;
        message.maxSpRecursionDepth =
            object.maxSpRecursionDepth !== undefined &&
                object.maxSpRecursionDepth !== null
                ? Number(object.maxSpRecursionDepth)
                : undefined;
        message.innodbCompressionLevel =
            object.innodbCompressionLevel !== undefined &&
                object.innodbCompressionLevel !== null
                ? Number(object.innodbCompressionLevel)
                : undefined;
        message.binlogTransactionDependencyTracking =
            object.binlogTransactionDependencyTracking !== undefined &&
                object.binlogTransactionDependencyTracking !== null
                ? mysqlconfig80_BinlogTransactionDependencyTrackingFromJSON(object.binlogTransactionDependencyTracking)
                : 0;
        message.autocommit =
            object.autocommit !== undefined && object.autocommit !== null
                ? Boolean(object.autocommit)
                : undefined;
        message.innodbStatusOutput =
            object.innodbStatusOutput !== undefined &&
                object.innodbStatusOutput !== null
                ? Boolean(object.innodbStatusOutput)
                : undefined;
        message.innodbStrictMode =
            object.innodbStrictMode !== undefined && object.innodbStrictMode !== null
                ? Boolean(object.innodbStrictMode)
                : undefined;
        message.innodbPrintLockWaitTimeoutInfo =
            object.innodbPrintLockWaitTimeoutInfo !== undefined &&
                object.innodbPrintLockWaitTimeoutInfo !== null
                ? Boolean(object.innodbPrintLockWaitTimeoutInfo)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined &&
                object.logErrorVerbosity !== null
                ? Number(object.logErrorVerbosity)
                : undefined;
        message.maxDigestLength =
            object.maxDigestLength !== undefined && object.maxDigestLength !== null
                ? Number(object.maxDigestLength)
                : undefined;
        message.lockWaitTimeout =
            object.lockWaitTimeout !== undefined && object.lockWaitTimeout !== null
                ? Number(object.lockWaitTimeout)
                : undefined;
        message.maxPreparedStmtCount =
            object.maxPreparedStmtCount !== undefined &&
                object.maxPreparedStmtCount !== null
                ? Number(object.maxPreparedStmtCount)
                : undefined;
        message.optimizerSwitch =
            object.optimizerSwitch !== undefined && object.optimizerSwitch !== null
                ? String(object.optimizerSwitch)
                : "";
        message.optimizerSearchDepth =
            object.optimizerSearchDepth !== undefined &&
                object.optimizerSearchDepth !== null
                ? Number(object.optimizerSearchDepth)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.innodbBufferPoolSize !== undefined &&
            (obj.innodbBufferPoolSize = message.innodbBufferPoolSize);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.longQueryTime !== undefined &&
            (obj.longQueryTime = message.longQueryTime);
        message.generalLog !== undefined && (obj.generalLog = message.generalLog);
        message.auditLog !== undefined && (obj.auditLog = message.auditLog);
        if (message.sqlMode) {
            obj.sqlMode = message.sqlMode.map((e) => mysqlconfig80_SQLModeToJSON(e));
        }
        else {
            obj.sqlMode = [];
        }
        message.maxAllowedPacket !== undefined &&
            (obj.maxAllowedPacket = message.maxAllowedPacket);
        message.defaultAuthenticationPlugin !== undefined &&
            (obj.defaultAuthenticationPlugin = mysqlconfig80_AuthPluginToJSON(message.defaultAuthenticationPlugin));
        message.innodbFlushLogAtTrxCommit !== undefined &&
            (obj.innodbFlushLogAtTrxCommit = message.innodbFlushLogAtTrxCommit);
        message.innodbLockWaitTimeout !== undefined &&
            (obj.innodbLockWaitTimeout = message.innodbLockWaitTimeout);
        message.transactionIsolation !== undefined &&
            (obj.transactionIsolation = mysqlconfig80_TransactionIsolationToJSON(message.transactionIsolation));
        message.innodbPrintAllDeadlocks !== undefined &&
            (obj.innodbPrintAllDeadlocks = message.innodbPrintAllDeadlocks);
        message.netReadTimeout !== undefined &&
            (obj.netReadTimeout = message.netReadTimeout);
        message.netWriteTimeout !== undefined &&
            (obj.netWriteTimeout = message.netWriteTimeout);
        message.groupConcatMaxLen !== undefined &&
            (obj.groupConcatMaxLen = message.groupConcatMaxLen);
        message.tmpTableSize !== undefined &&
            (obj.tmpTableSize = message.tmpTableSize);
        message.maxHeapTableSize !== undefined &&
            (obj.maxHeapTableSize = message.maxHeapTableSize);
        message.defaultTimeZone !== undefined &&
            (obj.defaultTimeZone = message.defaultTimeZone);
        message.characterSetServer !== undefined &&
            (obj.characterSetServer = message.characterSetServer);
        message.collationServer !== undefined &&
            (obj.collationServer = message.collationServer);
        message.innodbAdaptiveHashIndex !== undefined &&
            (obj.innodbAdaptiveHashIndex = message.innodbAdaptiveHashIndex);
        message.innodbNumaInterleave !== undefined &&
            (obj.innodbNumaInterleave = message.innodbNumaInterleave);
        message.innodbLogBufferSize !== undefined &&
            (obj.innodbLogBufferSize = message.innodbLogBufferSize);
        message.innodbLogFileSize !== undefined &&
            (obj.innodbLogFileSize = message.innodbLogFileSize);
        message.innodbIoCapacity !== undefined &&
            (obj.innodbIoCapacity = message.innodbIoCapacity);
        message.innodbIoCapacityMax !== undefined &&
            (obj.innodbIoCapacityMax = message.innodbIoCapacityMax);
        message.innodbReadIoThreads !== undefined &&
            (obj.innodbReadIoThreads = message.innodbReadIoThreads);
        message.innodbWriteIoThreads !== undefined &&
            (obj.innodbWriteIoThreads = message.innodbWriteIoThreads);
        message.innodbPurgeThreads !== undefined &&
            (obj.innodbPurgeThreads = message.innodbPurgeThreads);
        message.innodbThreadConcurrency !== undefined &&
            (obj.innodbThreadConcurrency = message.innodbThreadConcurrency);
        message.innodbTempDataFileMaxSize !== undefined &&
            (obj.innodbTempDataFileMaxSize = message.innodbTempDataFileMaxSize);
        message.threadCacheSize !== undefined &&
            (obj.threadCacheSize = message.threadCacheSize);
        message.threadStack !== undefined &&
            (obj.threadStack = message.threadStack);
        message.joinBufferSize !== undefined &&
            (obj.joinBufferSize = message.joinBufferSize);
        message.sortBufferSize !== undefined &&
            (obj.sortBufferSize = message.sortBufferSize);
        message.tableDefinitionCache !== undefined &&
            (obj.tableDefinitionCache = message.tableDefinitionCache);
        message.tableOpenCache !== undefined &&
            (obj.tableOpenCache = message.tableOpenCache);
        message.tableOpenCacheInstances !== undefined &&
            (obj.tableOpenCacheInstances = message.tableOpenCacheInstances);
        message.explicitDefaultsForTimestamp !== undefined &&
            (obj.explicitDefaultsForTimestamp = message.explicitDefaultsForTimestamp);
        message.autoIncrementIncrement !== undefined &&
            (obj.autoIncrementIncrement = message.autoIncrementIncrement);
        message.autoIncrementOffset !== undefined &&
            (obj.autoIncrementOffset = message.autoIncrementOffset);
        message.syncBinlog !== undefined && (obj.syncBinlog = message.syncBinlog);
        message.binlogCacheSize !== undefined &&
            (obj.binlogCacheSize = message.binlogCacheSize);
        message.binlogGroupCommitSyncDelay !== undefined &&
            (obj.binlogGroupCommitSyncDelay = message.binlogGroupCommitSyncDelay);
        message.binlogRowImage !== undefined &&
            (obj.binlogRowImage = mysqlconfig80_BinlogRowImageToJSON(message.binlogRowImage));
        message.binlogRowsQueryLogEvents !== undefined &&
            (obj.binlogRowsQueryLogEvents = message.binlogRowsQueryLogEvents);
        message.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
            (obj.rplSemiSyncMasterWaitForSlaveCount =
                message.rplSemiSyncMasterWaitForSlaveCount);
        message.slaveParallelType !== undefined &&
            (obj.slaveParallelType = mysqlconfig80_SlaveParallelTypeToJSON(message.slaveParallelType));
        message.slaveParallelWorkers !== undefined &&
            (obj.slaveParallelWorkers = message.slaveParallelWorkers);
        message.regexpTimeLimit !== undefined &&
            (obj.regexpTimeLimit = message.regexpTimeLimit);
        message.mdbPreserveBinlogBytes !== undefined &&
            (obj.mdbPreserveBinlogBytes = message.mdbPreserveBinlogBytes);
        message.interactiveTimeout !== undefined &&
            (obj.interactiveTimeout = message.interactiveTimeout);
        message.waitTimeout !== undefined &&
            (obj.waitTimeout = message.waitTimeout);
        message.mdbOfflineModeEnableLag !== undefined &&
            (obj.mdbOfflineModeEnableLag = message.mdbOfflineModeEnableLag);
        message.mdbOfflineModeDisableLag !== undefined &&
            (obj.mdbOfflineModeDisableLag = message.mdbOfflineModeDisableLag);
        message.rangeOptimizerMaxMemSize !== undefined &&
            (obj.rangeOptimizerMaxMemSize = message.rangeOptimizerMaxMemSize);
        message.slowQueryLog !== undefined &&
            (obj.slowQueryLog = message.slowQueryLog);
        message.slowQueryLogAlwaysWriteTime !== undefined &&
            (obj.slowQueryLogAlwaysWriteTime = message.slowQueryLogAlwaysWriteTime);
        message.logSlowRateType !== undefined &&
            (obj.logSlowRateType = mysqlconfig80_LogSlowRateTypeToJSON(message.logSlowRateType));
        message.logSlowRateLimit !== undefined &&
            (obj.logSlowRateLimit = message.logSlowRateLimit);
        message.logSlowSpStatements !== undefined &&
            (obj.logSlowSpStatements = message.logSlowSpStatements);
        if (message.logSlowFilter) {
            obj.logSlowFilter = message.logSlowFilter.map((e) => mysqlconfig80_LogSlowFilterTypeToJSON(e));
        }
        else {
            obj.logSlowFilter = [];
        }
        message.mdbPriorityChoiceMaxLag !== undefined &&
            (obj.mdbPriorityChoiceMaxLag = message.mdbPriorityChoiceMaxLag);
        message.innodbPageSize !== undefined &&
            (obj.innodbPageSize = message.innodbPageSize);
        message.innodbOnlineAlterLogMaxSize !== undefined &&
            (obj.innodbOnlineAlterLogMaxSize = message.innodbOnlineAlterLogMaxSize);
        message.innodbFtMinTokenSize !== undefined &&
            (obj.innodbFtMinTokenSize = message.innodbFtMinTokenSize);
        message.innodbFtMaxTokenSize !== undefined &&
            (obj.innodbFtMaxTokenSize = message.innodbFtMaxTokenSize);
        message.lowerCaseTableNames !== undefined &&
            (obj.lowerCaseTableNames = message.lowerCaseTableNames);
        message.maxSpRecursionDepth !== undefined &&
            (obj.maxSpRecursionDepth = message.maxSpRecursionDepth);
        message.innodbCompressionLevel !== undefined &&
            (obj.innodbCompressionLevel = message.innodbCompressionLevel);
        message.binlogTransactionDependencyTracking !== undefined &&
            (obj.binlogTransactionDependencyTracking =
                mysqlconfig80_BinlogTransactionDependencyTrackingToJSON(message.binlogTransactionDependencyTracking));
        message.autocommit !== undefined && (obj.autocommit = message.autocommit);
        message.innodbStatusOutput !== undefined &&
            (obj.innodbStatusOutput = message.innodbStatusOutput);
        message.innodbStrictMode !== undefined &&
            (obj.innodbStrictMode = message.innodbStrictMode);
        message.innodbPrintLockWaitTimeoutInfo !== undefined &&
            (obj.innodbPrintLockWaitTimeoutInfo =
                message.innodbPrintLockWaitTimeoutInfo);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = message.logErrorVerbosity);
        message.maxDigestLength !== undefined &&
            (obj.maxDigestLength = message.maxDigestLength);
        message.lockWaitTimeout !== undefined &&
            (obj.lockWaitTimeout = message.lockWaitTimeout);
        message.maxPreparedStmtCount !== undefined &&
            (obj.maxPreparedStmtCount = message.maxPreparedStmtCount);
        message.optimizerSwitch !== undefined &&
            (obj.optimizerSwitch = message.optimizerSwitch);
        message.optimizerSearchDepth !== undefined &&
            (obj.optimizerSearchDepth = message.optimizerSearchDepth);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56;
        const message = Object.assign({}, baseMysqlconfig80);
        message.innodbBufferPoolSize = (_a = object.innodbBufferPoolSize) !== null && _a !== void 0 ? _a : undefined;
        message.maxConnections = (_b = object.maxConnections) !== null && _b !== void 0 ? _b : undefined;
        message.longQueryTime = (_c = object.longQueryTime) !== null && _c !== void 0 ? _c : undefined;
        message.generalLog = (_d = object.generalLog) !== null && _d !== void 0 ? _d : undefined;
        message.auditLog = (_e = object.auditLog) !== null && _e !== void 0 ? _e : undefined;
        message.sqlMode = ((_f = object.sqlMode) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.maxAllowedPacket = (_g = object.maxAllowedPacket) !== null && _g !== void 0 ? _g : undefined;
        message.defaultAuthenticationPlugin =
            (_h = object.defaultAuthenticationPlugin) !== null && _h !== void 0 ? _h : 0;
        message.innodbFlushLogAtTrxCommit =
            (_j = object.innodbFlushLogAtTrxCommit) !== null && _j !== void 0 ? _j : undefined;
        message.innodbLockWaitTimeout = (_k = object.innodbLockWaitTimeout) !== null && _k !== void 0 ? _k : undefined;
        message.transactionIsolation = (_l = object.transactionIsolation) !== null && _l !== void 0 ? _l : 0;
        message.innodbPrintAllDeadlocks =
            (_m = object.innodbPrintAllDeadlocks) !== null && _m !== void 0 ? _m : undefined;
        message.netReadTimeout = (_o = object.netReadTimeout) !== null && _o !== void 0 ? _o : undefined;
        message.netWriteTimeout = (_p = object.netWriteTimeout) !== null && _p !== void 0 ? _p : undefined;
        message.groupConcatMaxLen = (_q = object.groupConcatMaxLen) !== null && _q !== void 0 ? _q : undefined;
        message.tmpTableSize = (_r = object.tmpTableSize) !== null && _r !== void 0 ? _r : undefined;
        message.maxHeapTableSize = (_s = object.maxHeapTableSize) !== null && _s !== void 0 ? _s : undefined;
        message.defaultTimeZone = (_t = object.defaultTimeZone) !== null && _t !== void 0 ? _t : "";
        message.characterSetServer = (_u = object.characterSetServer) !== null && _u !== void 0 ? _u : "";
        message.collationServer = (_v = object.collationServer) !== null && _v !== void 0 ? _v : "";
        message.innodbAdaptiveHashIndex =
            (_w = object.innodbAdaptiveHashIndex) !== null && _w !== void 0 ? _w : undefined;
        message.innodbNumaInterleave = (_x = object.innodbNumaInterleave) !== null && _x !== void 0 ? _x : undefined;
        message.innodbLogBufferSize = (_y = object.innodbLogBufferSize) !== null && _y !== void 0 ? _y : undefined;
        message.innodbLogFileSize = (_z = object.innodbLogFileSize) !== null && _z !== void 0 ? _z : undefined;
        message.innodbIoCapacity = (_0 = object.innodbIoCapacity) !== null && _0 !== void 0 ? _0 : undefined;
        message.innodbIoCapacityMax = (_1 = object.innodbIoCapacityMax) !== null && _1 !== void 0 ? _1 : undefined;
        message.innodbReadIoThreads = (_2 = object.innodbReadIoThreads) !== null && _2 !== void 0 ? _2 : undefined;
        message.innodbWriteIoThreads = (_3 = object.innodbWriteIoThreads) !== null && _3 !== void 0 ? _3 : undefined;
        message.innodbPurgeThreads = (_4 = object.innodbPurgeThreads) !== null && _4 !== void 0 ? _4 : undefined;
        message.innodbThreadConcurrency =
            (_5 = object.innodbThreadConcurrency) !== null && _5 !== void 0 ? _5 : undefined;
        message.innodbTempDataFileMaxSize =
            (_6 = object.innodbTempDataFileMaxSize) !== null && _6 !== void 0 ? _6 : undefined;
        message.threadCacheSize = (_7 = object.threadCacheSize) !== null && _7 !== void 0 ? _7 : undefined;
        message.threadStack = (_8 = object.threadStack) !== null && _8 !== void 0 ? _8 : undefined;
        message.joinBufferSize = (_9 = object.joinBufferSize) !== null && _9 !== void 0 ? _9 : undefined;
        message.sortBufferSize = (_10 = object.sortBufferSize) !== null && _10 !== void 0 ? _10 : undefined;
        message.tableDefinitionCache = (_11 = object.tableDefinitionCache) !== null && _11 !== void 0 ? _11 : undefined;
        message.tableOpenCache = (_12 = object.tableOpenCache) !== null && _12 !== void 0 ? _12 : undefined;
        message.tableOpenCacheInstances =
            (_13 = object.tableOpenCacheInstances) !== null && _13 !== void 0 ? _13 : undefined;
        message.explicitDefaultsForTimestamp =
            (_14 = object.explicitDefaultsForTimestamp) !== null && _14 !== void 0 ? _14 : undefined;
        message.autoIncrementIncrement = (_15 = object.autoIncrementIncrement) !== null && _15 !== void 0 ? _15 : undefined;
        message.autoIncrementOffset = (_16 = object.autoIncrementOffset) !== null && _16 !== void 0 ? _16 : undefined;
        message.syncBinlog = (_17 = object.syncBinlog) !== null && _17 !== void 0 ? _17 : undefined;
        message.binlogCacheSize = (_18 = object.binlogCacheSize) !== null && _18 !== void 0 ? _18 : undefined;
        message.binlogGroupCommitSyncDelay =
            (_19 = object.binlogGroupCommitSyncDelay) !== null && _19 !== void 0 ? _19 : undefined;
        message.binlogRowImage = (_20 = object.binlogRowImage) !== null && _20 !== void 0 ? _20 : 0;
        message.binlogRowsQueryLogEvents =
            (_21 = object.binlogRowsQueryLogEvents) !== null && _21 !== void 0 ? _21 : undefined;
        message.rplSemiSyncMasterWaitForSlaveCount =
            (_22 = object.rplSemiSyncMasterWaitForSlaveCount) !== null && _22 !== void 0 ? _22 : undefined;
        message.slaveParallelType = (_23 = object.slaveParallelType) !== null && _23 !== void 0 ? _23 : 0;
        message.slaveParallelWorkers = (_24 = object.slaveParallelWorkers) !== null && _24 !== void 0 ? _24 : undefined;
        message.regexpTimeLimit = (_25 = object.regexpTimeLimit) !== null && _25 !== void 0 ? _25 : undefined;
        message.mdbPreserveBinlogBytes = (_26 = object.mdbPreserveBinlogBytes) !== null && _26 !== void 0 ? _26 : undefined;
        message.interactiveTimeout = (_27 = object.interactiveTimeout) !== null && _27 !== void 0 ? _27 : undefined;
        message.waitTimeout = (_28 = object.waitTimeout) !== null && _28 !== void 0 ? _28 : undefined;
        message.mdbOfflineModeEnableLag =
            (_29 = object.mdbOfflineModeEnableLag) !== null && _29 !== void 0 ? _29 : undefined;
        message.mdbOfflineModeDisableLag =
            (_30 = object.mdbOfflineModeDisableLag) !== null && _30 !== void 0 ? _30 : undefined;
        message.rangeOptimizerMaxMemSize =
            (_31 = object.rangeOptimizerMaxMemSize) !== null && _31 !== void 0 ? _31 : undefined;
        message.slowQueryLog = (_32 = object.slowQueryLog) !== null && _32 !== void 0 ? _32 : undefined;
        message.slowQueryLogAlwaysWriteTime =
            (_33 = object.slowQueryLogAlwaysWriteTime) !== null && _33 !== void 0 ? _33 : undefined;
        message.logSlowRateType = (_34 = object.logSlowRateType) !== null && _34 !== void 0 ? _34 : 0;
        message.logSlowRateLimit = (_35 = object.logSlowRateLimit) !== null && _35 !== void 0 ? _35 : undefined;
        message.logSlowSpStatements = (_36 = object.logSlowSpStatements) !== null && _36 !== void 0 ? _36 : undefined;
        message.logSlowFilter = ((_37 = object.logSlowFilter) === null || _37 === void 0 ? void 0 : _37.map((e) => e)) || [];
        message.mdbPriorityChoiceMaxLag =
            (_38 = object.mdbPriorityChoiceMaxLag) !== null && _38 !== void 0 ? _38 : undefined;
        message.innodbPageSize = (_39 = object.innodbPageSize) !== null && _39 !== void 0 ? _39 : undefined;
        message.innodbOnlineAlterLogMaxSize =
            (_40 = object.innodbOnlineAlterLogMaxSize) !== null && _40 !== void 0 ? _40 : undefined;
        message.innodbFtMinTokenSize = (_41 = object.innodbFtMinTokenSize) !== null && _41 !== void 0 ? _41 : undefined;
        message.innodbFtMaxTokenSize = (_42 = object.innodbFtMaxTokenSize) !== null && _42 !== void 0 ? _42 : undefined;
        message.lowerCaseTableNames = (_43 = object.lowerCaseTableNames) !== null && _43 !== void 0 ? _43 : undefined;
        message.maxSpRecursionDepth = (_44 = object.maxSpRecursionDepth) !== null && _44 !== void 0 ? _44 : undefined;
        message.innodbCompressionLevel = (_45 = object.innodbCompressionLevel) !== null && _45 !== void 0 ? _45 : undefined;
        message.binlogTransactionDependencyTracking =
            (_46 = object.binlogTransactionDependencyTracking) !== null && _46 !== void 0 ? _46 : 0;
        message.autocommit = (_47 = object.autocommit) !== null && _47 !== void 0 ? _47 : undefined;
        message.innodbStatusOutput = (_48 = object.innodbStatusOutput) !== null && _48 !== void 0 ? _48 : undefined;
        message.innodbStrictMode = (_49 = object.innodbStrictMode) !== null && _49 !== void 0 ? _49 : undefined;
        message.innodbPrintLockWaitTimeoutInfo =
            (_50 = object.innodbPrintLockWaitTimeoutInfo) !== null && _50 !== void 0 ? _50 : undefined;
        message.logErrorVerbosity = (_51 = object.logErrorVerbosity) !== null && _51 !== void 0 ? _51 : undefined;
        message.maxDigestLength = (_52 = object.maxDigestLength) !== null && _52 !== void 0 ? _52 : undefined;
        message.lockWaitTimeout = (_53 = object.lockWaitTimeout) !== null && _53 !== void 0 ? _53 : undefined;
        message.maxPreparedStmtCount = (_54 = object.maxPreparedStmtCount) !== null && _54 !== void 0 ? _54 : undefined;
        message.optimizerSwitch = (_55 = object.optimizerSwitch) !== null && _55 !== void 0 ? _55 : "";
        message.optimizerSearchDepth = (_56 = object.optimizerSearchDepth) !== null && _56 !== void 0 ? _56 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mysqlconfig80.$type, exports.Mysqlconfig80);
const baseMysqlconfigset80 = {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0",
};
exports.Mysqlconfigset80 = {
    $type: "yandex.cloud.mdb.mysql.v1.config.MysqlConfigSet8_0",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMysqlconfigset80);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMysqlconfigset80);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mysqlconfig80.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mysqlconfig80.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mysqlconfig80.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Mysqlconfig80.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mysqlconfig80.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mysqlconfig80.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMysqlconfigset80);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Mysqlconfig80.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Mysqlconfig80.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Mysqlconfig80.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mysqlconfigset80.$type, exports.Mysqlconfigset80);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
