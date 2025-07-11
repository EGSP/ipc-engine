"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postgresqlconfigset141c = exports.Postgresqlconfig141c = exports.postgresqlconfig141c_XmlOptionToJSON = exports.postgresqlconfig141c_XmlOptionFromJSON = exports.Postgresqlconfig141c_XmlOption = exports.postgresqlconfig141c_XmlBinaryToJSON = exports.postgresqlconfig141c_XmlBinaryFromJSON = exports.Postgresqlconfig141c_XmlBinary = exports.postgresqlconfig141c_WalLevelToJSON = exports.postgresqlconfig141c_WalLevelFromJSON = exports.Postgresqlconfig141c_WalLevel = exports.postgresqlconfig141c_TransactionIsolationToJSON = exports.postgresqlconfig141c_TransactionIsolationFromJSON = exports.Postgresqlconfig141c_TransactionIsolation = exports.postgresqlconfig141c_SynchronousCommitToJSON = exports.postgresqlconfig141c_SynchronousCommitFromJSON = exports.Postgresqlconfig141c_SynchronousCommit = exports.postgresqlconfig141c_SharedPreloadLibrariesToJSON = exports.postgresqlconfig141c_SharedPreloadLibrariesFromJSON = exports.Postgresqlconfig141c_SharedPreloadLibraries = exports.postgresqlconfig141c_PlanCacheModeToJSON = exports.postgresqlconfig141c_PlanCacheModeFromJSON = exports.Postgresqlconfig141c_PlanCacheMode = exports.postgresqlconfig141c_PgHintPlanDebugPrintToJSON = exports.postgresqlconfig141c_PgHintPlanDebugPrintFromJSON = exports.Postgresqlconfig141c_PgHintPlanDebugPrint = exports.postgresqlconfig141c_LogStatementToJSON = exports.postgresqlconfig141c_LogStatementFromJSON = exports.Postgresqlconfig141c_LogStatement = exports.postgresqlconfig141c_LogLevelToJSON = exports.postgresqlconfig141c_LogLevelFromJSON = exports.Postgresqlconfig141c_LogLevel = exports.postgresqlconfig141c_LogErrorVerbosityToJSON = exports.postgresqlconfig141c_LogErrorVerbosityFromJSON = exports.Postgresqlconfig141c_LogErrorVerbosity = exports.postgresqlconfig141c_ForceParallelModeToJSON = exports.postgresqlconfig141c_ForceParallelModeFromJSON = exports.Postgresqlconfig141c_ForceParallelMode = exports.postgresqlconfig141c_ConstraintExclusionToJSON = exports.postgresqlconfig141c_ConstraintExclusionFromJSON = exports.Postgresqlconfig141c_ConstraintExclusion = exports.postgresqlconfig141c_ByteaOutputToJSON = exports.postgresqlconfig141c_ByteaOutputFromJSON = exports.Postgresqlconfig141c_ByteaOutput = exports.postgresqlconfig141c_BackslashQuoteToJSON = exports.postgresqlconfig141c_BackslashQuoteFromJSON = exports.Postgresqlconfig141c_BackslashQuote = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
var Postgresqlconfig141c_BackslashQuote;
(function (Postgresqlconfig141c_BackslashQuote) {
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    Postgresqlconfig141c_BackslashQuote[Postgresqlconfig141c_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_BackslashQuote = exports.Postgresqlconfig141c_BackslashQuote || (exports.Postgresqlconfig141c_BackslashQuote = {}));
function postgresqlconfig141c_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKSLASH_QUOTE_UNSPECIFIED":
            return Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case "BACKSLASH_QUOTE":
            return Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case "BACKSLASH_QUOTE_ON":
            return Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case "BACKSLASH_QUOTE_OFF":
            return Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case "BACKSLASH_QUOTE_SAFE_ENCODING":
            return Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_BackslashQuoteFromJSON = postgresqlconfig141c_BackslashQuoteFromJSON;
function postgresqlconfig141c_BackslashQuoteToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return "BACKSLASH_QUOTE_UNSPECIFIED";
        case Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE:
            return "BACKSLASH_QUOTE";
        case Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_ON:
            return "BACKSLASH_QUOTE_ON";
        case Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return "BACKSLASH_QUOTE_OFF";
        case Postgresqlconfig141c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return "BACKSLASH_QUOTE_SAFE_ENCODING";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_BackslashQuoteToJSON = postgresqlconfig141c_BackslashQuoteToJSON;
var Postgresqlconfig141c_ByteaOutput;
(function (Postgresqlconfig141c_ByteaOutput) {
    Postgresqlconfig141c_ByteaOutput[Postgresqlconfig141c_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    Postgresqlconfig141c_ByteaOutput[Postgresqlconfig141c_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    Postgresqlconfig141c_ByteaOutput[Postgresqlconfig141c_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    Postgresqlconfig141c_ByteaOutput[Postgresqlconfig141c_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_ByteaOutput = exports.Postgresqlconfig141c_ByteaOutput || (exports.Postgresqlconfig141c_ByteaOutput = {}));
function postgresqlconfig141c_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case "BYTEA_OUTPUT_UNSPECIFIED":
            return Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case "BYTEA_OUTPUT_HEX":
            return Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case "BYTEA_OUTPUT_ESCAPED":
            return Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_ByteaOutputFromJSON = postgresqlconfig141c_ByteaOutputFromJSON;
function postgresqlconfig141c_ByteaOutputToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return "BYTEA_OUTPUT_UNSPECIFIED";
        case Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_HEX:
            return "BYTEA_OUTPUT_HEX";
        case Postgresqlconfig141c_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return "BYTEA_OUTPUT_ESCAPED";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_ByteaOutputToJSON = postgresqlconfig141c_ByteaOutputToJSON;
var Postgresqlconfig141c_ConstraintExclusion;
(function (Postgresqlconfig141c_ConstraintExclusion) {
    Postgresqlconfig141c_ConstraintExclusion[Postgresqlconfig141c_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    Postgresqlconfig141c_ConstraintExclusion[Postgresqlconfig141c_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    Postgresqlconfig141c_ConstraintExclusion[Postgresqlconfig141c_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    Postgresqlconfig141c_ConstraintExclusion[Postgresqlconfig141c_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    Postgresqlconfig141c_ConstraintExclusion[Postgresqlconfig141c_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_ConstraintExclusion = exports.Postgresqlconfig141c_ConstraintExclusion || (exports.Postgresqlconfig141c_ConstraintExclusion = {}));
function postgresqlconfig141c_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
            return Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case "CONSTRAINT_EXCLUSION_ON":
            return Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case "CONSTRAINT_EXCLUSION_OFF":
            return Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case "CONSTRAINT_EXCLUSION_PARTITION":
            return Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_ConstraintExclusionFromJSON = postgresqlconfig141c_ConstraintExclusionFromJSON;
function postgresqlconfig141c_ConstraintExclusionToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
        case Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return "CONSTRAINT_EXCLUSION_ON";
        case Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return "CONSTRAINT_EXCLUSION_OFF";
        case Postgresqlconfig141c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return "CONSTRAINT_EXCLUSION_PARTITION";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_ConstraintExclusionToJSON = postgresqlconfig141c_ConstraintExclusionToJSON;
var Postgresqlconfig141c_ForceParallelMode;
(function (Postgresqlconfig141c_ForceParallelMode) {
    Postgresqlconfig141c_ForceParallelMode[Postgresqlconfig141c_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    Postgresqlconfig141c_ForceParallelMode[Postgresqlconfig141c_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    Postgresqlconfig141c_ForceParallelMode[Postgresqlconfig141c_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    Postgresqlconfig141c_ForceParallelMode[Postgresqlconfig141c_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    Postgresqlconfig141c_ForceParallelMode[Postgresqlconfig141c_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_ForceParallelMode = exports.Postgresqlconfig141c_ForceParallelMode || (exports.Postgresqlconfig141c_ForceParallelMode = {}));
function postgresqlconfig141c_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORCE_PARALLEL_MODE_UNSPECIFIED":
            return Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case "FORCE_PARALLEL_MODE_ON":
            return Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case "FORCE_PARALLEL_MODE_OFF":
            return Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case "FORCE_PARALLEL_MODE_REGRESS":
            return Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_ForceParallelModeFromJSON = postgresqlconfig141c_ForceParallelModeFromJSON;
function postgresqlconfig141c_ForceParallelModeToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return "FORCE_PARALLEL_MODE_UNSPECIFIED";
        case Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return "FORCE_PARALLEL_MODE_ON";
        case Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return "FORCE_PARALLEL_MODE_OFF";
        case Postgresqlconfig141c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return "FORCE_PARALLEL_MODE_REGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_ForceParallelModeToJSON = postgresqlconfig141c_ForceParallelModeToJSON;
var Postgresqlconfig141c_LogErrorVerbosity;
(function (Postgresqlconfig141c_LogErrorVerbosity) {
    Postgresqlconfig141c_LogErrorVerbosity[Postgresqlconfig141c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    Postgresqlconfig141c_LogErrorVerbosity[Postgresqlconfig141c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    Postgresqlconfig141c_LogErrorVerbosity[Postgresqlconfig141c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    Postgresqlconfig141c_LogErrorVerbosity[Postgresqlconfig141c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    Postgresqlconfig141c_LogErrorVerbosity[Postgresqlconfig141c_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_LogErrorVerbosity = exports.Postgresqlconfig141c_LogErrorVerbosity || (exports.Postgresqlconfig141c_LogErrorVerbosity = {}));
function postgresqlconfig141c_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
            return Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case "LOG_ERROR_VERBOSITY_TERSE":
            return Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case "LOG_ERROR_VERBOSITY_DEFAULT":
            return Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case "LOG_ERROR_VERBOSITY_VERBOSE":
            return Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_LogErrorVerbosityFromJSON = postgresqlconfig141c_LogErrorVerbosityFromJSON;
function postgresqlconfig141c_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
        case Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return "LOG_ERROR_VERBOSITY_TERSE";
        case Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return "LOG_ERROR_VERBOSITY_DEFAULT";
        case Postgresqlconfig141c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return "LOG_ERROR_VERBOSITY_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_LogErrorVerbosityToJSON = postgresqlconfig141c_LogErrorVerbosityToJSON;
var Postgresqlconfig141c_LogLevel;
(function (Postgresqlconfig141c_LogLevel) {
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    Postgresqlconfig141c_LogLevel[Postgresqlconfig141c_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_LogLevel = exports.Postgresqlconfig141c_LogLevel || (exports.Postgresqlconfig141c_LogLevel = {}));
function postgresqlconfig141c_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "LOG_LEVEL_DEBUG5":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case "LOG_LEVEL_DEBUG4":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case "LOG_LEVEL_DEBUG3":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case "LOG_LEVEL_DEBUG2":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case "LOG_LEVEL_DEBUG1":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case "LOG_LEVEL_LOG":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case "LOG_LEVEL_NOTICE":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case "LOG_LEVEL_WARNING":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case "LOG_LEVEL_ERROR":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case "LOG_LEVEL_FATAL":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case "LOG_LEVEL_PANIC":
            return Postgresqlconfig141c_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_LogLevelFromJSON = postgresqlconfig141c_LogLevelFromJSON;
function postgresqlconfig141c_LogLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG5:
            return "LOG_LEVEL_DEBUG5";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG4:
            return "LOG_LEVEL_DEBUG4";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG3:
            return "LOG_LEVEL_DEBUG3";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG2:
            return "LOG_LEVEL_DEBUG2";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_DEBUG1:
            return "LOG_LEVEL_DEBUG1";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_LOG:
            return "LOG_LEVEL_LOG";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_NOTICE:
            return "LOG_LEVEL_NOTICE";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_WARNING:
            return "LOG_LEVEL_WARNING";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_ERROR:
            return "LOG_LEVEL_ERROR";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_FATAL:
            return "LOG_LEVEL_FATAL";
        case Postgresqlconfig141c_LogLevel.LOG_LEVEL_PANIC:
            return "LOG_LEVEL_PANIC";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_LogLevelToJSON = postgresqlconfig141c_LogLevelToJSON;
var Postgresqlconfig141c_LogStatement;
(function (Postgresqlconfig141c_LogStatement) {
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    Postgresqlconfig141c_LogStatement[Postgresqlconfig141c_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_LogStatement = exports.Postgresqlconfig141c_LogStatement || (exports.Postgresqlconfig141c_LogStatement = {}));
function postgresqlconfig141c_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return Postgresqlconfig141c_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return Postgresqlconfig141c_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return Postgresqlconfig141c_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return Postgresqlconfig141c_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return Postgresqlconfig141c_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_LogStatementFromJSON = postgresqlconfig141c_LogStatementFromJSON;
function postgresqlconfig141c_LogStatementToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case Postgresqlconfig141c_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case Postgresqlconfig141c_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case Postgresqlconfig141c_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case Postgresqlconfig141c_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_LogStatementToJSON = postgresqlconfig141c_LogStatementToJSON;
var Postgresqlconfig141c_PgHintPlanDebugPrint;
(function (Postgresqlconfig141c_PgHintPlanDebugPrint) {
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED"] = 0] = "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_OFF"] = 1] = "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_ON"] = 2] = "PG_HINT_PLAN_DEBUG_PRINT_ON";
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_DETAILED"] = 3] = "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_VERBOSE"] = 4] = "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    Postgresqlconfig141c_PgHintPlanDebugPrint[Postgresqlconfig141c_PgHintPlanDebugPrint["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_PgHintPlanDebugPrint = exports.Postgresqlconfig141c_PgHintPlanDebugPrint || (exports.Postgresqlconfig141c_PgHintPlanDebugPrint = {}));
function postgresqlconfig141c_PgHintPlanDebugPrintFromJSON(object) {
    switch (object) {
        case 0:
        case "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED":
            return Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
        case 1:
        case "PG_HINT_PLAN_DEBUG_PRINT_OFF":
            return Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
        case 2:
        case "PG_HINT_PLAN_DEBUG_PRINT_ON":
            return Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
        case 3:
        case "PG_HINT_PLAN_DEBUG_PRINT_DETAILED":
            return Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
        case 4:
        case "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE":
            return Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_PgHintPlanDebugPrint.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_PgHintPlanDebugPrintFromJSON = postgresqlconfig141c_PgHintPlanDebugPrintFromJSON;
function postgresqlconfig141c_PgHintPlanDebugPrintToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
            return "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
        case Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
            return "PG_HINT_PLAN_DEBUG_PRINT_OFF";
        case Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
            return "PG_HINT_PLAN_DEBUG_PRINT_ON";
        case Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
            return "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
        case Postgresqlconfig141c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
            return "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_PgHintPlanDebugPrintToJSON = postgresqlconfig141c_PgHintPlanDebugPrintToJSON;
var Postgresqlconfig141c_PlanCacheMode;
(function (Postgresqlconfig141c_PlanCacheMode) {
    Postgresqlconfig141c_PlanCacheMode[Postgresqlconfig141c_PlanCacheMode["PLAN_CACHE_MODE_UNSPECIFIED"] = 0] = "PLAN_CACHE_MODE_UNSPECIFIED";
    Postgresqlconfig141c_PlanCacheMode[Postgresqlconfig141c_PlanCacheMode["PLAN_CACHE_MODE_AUTO"] = 1] = "PLAN_CACHE_MODE_AUTO";
    Postgresqlconfig141c_PlanCacheMode[Postgresqlconfig141c_PlanCacheMode["PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN"] = 2] = "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN";
    Postgresqlconfig141c_PlanCacheMode[Postgresqlconfig141c_PlanCacheMode["PLAN_CACHE_MODE_FORCE_GENERIC_PLAN"] = 3] = "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN";
    Postgresqlconfig141c_PlanCacheMode[Postgresqlconfig141c_PlanCacheMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_PlanCacheMode = exports.Postgresqlconfig141c_PlanCacheMode || (exports.Postgresqlconfig141c_PlanCacheMode = {}));
function postgresqlconfig141c_PlanCacheModeFromJSON(object) {
    switch (object) {
        case 0:
        case "PLAN_CACHE_MODE_UNSPECIFIED":
            return Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED;
        case 1:
        case "PLAN_CACHE_MODE_AUTO":
            return Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_AUTO;
        case 2:
        case "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN":
            return Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN;
        case 3:
        case "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN":
            return Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_PlanCacheMode.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_PlanCacheModeFromJSON = postgresqlconfig141c_PlanCacheModeFromJSON;
function postgresqlconfig141c_PlanCacheModeToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED:
            return "PLAN_CACHE_MODE_UNSPECIFIED";
        case Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_AUTO:
            return "PLAN_CACHE_MODE_AUTO";
        case Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN:
            return "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN";
        case Postgresqlconfig141c_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN:
            return "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_PlanCacheModeToJSON = postgresqlconfig141c_PlanCacheModeToJSON;
var Postgresqlconfig141c_SharedPreloadLibraries;
(function (Postgresqlconfig141c_SharedPreloadLibraries) {
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_UNSPECIFIED"] = 0] = "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN"] = 1] = "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN"] = 2] = "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_TIMESCALEDB"] = 3] = "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS"] = 4] = "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_CRON"] = 5] = "SHARED_PRELOAD_LIBRARIES_PG_CRON";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PGLOGICAL"] = 6] = "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_PREWARM"] = 7] = "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PGAUDIT"] = 8] = "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
    Postgresqlconfig141c_SharedPreloadLibraries[Postgresqlconfig141c_SharedPreloadLibraries["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_SharedPreloadLibraries = exports.Postgresqlconfig141c_SharedPreloadLibraries || (exports.Postgresqlconfig141c_SharedPreloadLibraries = {}));
function postgresqlconfig141c_SharedPreloadLibrariesFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
        case 1:
        case "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
        case 2:
        case "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
        case 3:
        case "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB;
        case 4:
        case "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS;
        case 5:
        case "SHARED_PRELOAD_LIBRARIES_PG_CRON":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON;
        case 6:
        case "SHARED_PRELOAD_LIBRARIES_PGLOGICAL":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL;
        case 7:
        case "SHARED_PRELOAD_LIBRARIES_PG_PREWARM":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM;
        case 8:
        case "SHARED_PRELOAD_LIBRARIES_PGAUDIT":
            return Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_SharedPreloadLibraries.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_SharedPreloadLibrariesFromJSON = postgresqlconfig141c_SharedPreloadLibrariesFromJSON;
function postgresqlconfig141c_SharedPreloadLibrariesToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
            return "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
            return "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
            return "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB:
            return "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS:
            return "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON:
            return "SHARED_PRELOAD_LIBRARIES_PG_CRON";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL:
            return "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM:
            return "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
        case Postgresqlconfig141c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT:
            return "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_SharedPreloadLibrariesToJSON = postgresqlconfig141c_SharedPreloadLibrariesToJSON;
var Postgresqlconfig141c_SynchronousCommit;
(function (Postgresqlconfig141c_SynchronousCommit) {
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    Postgresqlconfig141c_SynchronousCommit[Postgresqlconfig141c_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_SynchronousCommit = exports.Postgresqlconfig141c_SynchronousCommit || (exports.Postgresqlconfig141c_SynchronousCommit = {}));
function postgresqlconfig141c_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case "SYNCHRONOUS_COMMIT_ON":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case "SYNCHRONOUS_COMMIT_OFF":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case "SYNCHRONOUS_COMMIT_LOCAL":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
            return Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_SynchronousCommit.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_SynchronousCommitFromJSON = postgresqlconfig141c_SynchronousCommitFromJSON;
function postgresqlconfig141c_SynchronousCommitToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return "SYNCHRONOUS_COMMIT_ON";
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return "SYNCHRONOUS_COMMIT_OFF";
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return "SYNCHRONOUS_COMMIT_LOCAL";
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
        case Postgresqlconfig141c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_SynchronousCommitToJSON = postgresqlconfig141c_SynchronousCommitToJSON;
var Postgresqlconfig141c_TransactionIsolation;
(function (Postgresqlconfig141c_TransactionIsolation) {
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    Postgresqlconfig141c_TransactionIsolation[Postgresqlconfig141c_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_TransactionIsolation = exports.Postgresqlconfig141c_TransactionIsolation || (exports.Postgresqlconfig141c_TransactionIsolation = {}));
function postgresqlconfig141c_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_TransactionIsolationFromJSON = postgresqlconfig141c_TransactionIsolationFromJSON;
function postgresqlconfig141c_TransactionIsolationToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case Postgresqlconfig141c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_TransactionIsolationToJSON = postgresqlconfig141c_TransactionIsolationToJSON;
var Postgresqlconfig141c_WalLevel;
(function (Postgresqlconfig141c_WalLevel) {
    Postgresqlconfig141c_WalLevel[Postgresqlconfig141c_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    Postgresqlconfig141c_WalLevel[Postgresqlconfig141c_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    Postgresqlconfig141c_WalLevel[Postgresqlconfig141c_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    Postgresqlconfig141c_WalLevel[Postgresqlconfig141c_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_WalLevel = exports.Postgresqlconfig141c_WalLevel || (exports.Postgresqlconfig141c_WalLevel = {}));
function postgresqlconfig141c_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "WAL_LEVEL_UNSPECIFIED":
            return Postgresqlconfig141c_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case "WAL_LEVEL_REPLICA":
            return Postgresqlconfig141c_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case "WAL_LEVEL_LOGICAL":
            return Postgresqlconfig141c_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_WalLevel.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_WalLevelFromJSON = postgresqlconfig141c_WalLevelFromJSON;
function postgresqlconfig141c_WalLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return "WAL_LEVEL_UNSPECIFIED";
        case Postgresqlconfig141c_WalLevel.WAL_LEVEL_REPLICA:
            return "WAL_LEVEL_REPLICA";
        case Postgresqlconfig141c_WalLevel.WAL_LEVEL_LOGICAL:
            return "WAL_LEVEL_LOGICAL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_WalLevelToJSON = postgresqlconfig141c_WalLevelToJSON;
var Postgresqlconfig141c_XmlBinary;
(function (Postgresqlconfig141c_XmlBinary) {
    Postgresqlconfig141c_XmlBinary[Postgresqlconfig141c_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    Postgresqlconfig141c_XmlBinary[Postgresqlconfig141c_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    Postgresqlconfig141c_XmlBinary[Postgresqlconfig141c_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    Postgresqlconfig141c_XmlBinary[Postgresqlconfig141c_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_XmlBinary = exports.Postgresqlconfig141c_XmlBinary || (exports.Postgresqlconfig141c_XmlBinary = {}));
function postgresqlconfig141c_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_BINARY_UNSPECIFIED":
            return Postgresqlconfig141c_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case "XML_BINARY_BASE64":
            return Postgresqlconfig141c_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case "XML_BINARY_HEX":
            return Postgresqlconfig141c_XmlBinary.XML_BINARY_HEX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_XmlBinaryFromJSON = postgresqlconfig141c_XmlBinaryFromJSON;
function postgresqlconfig141c_XmlBinaryToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_XmlBinary.XML_BINARY_UNSPECIFIED:
            return "XML_BINARY_UNSPECIFIED";
        case Postgresqlconfig141c_XmlBinary.XML_BINARY_BASE64:
            return "XML_BINARY_BASE64";
        case Postgresqlconfig141c_XmlBinary.XML_BINARY_HEX:
            return "XML_BINARY_HEX";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_XmlBinaryToJSON = postgresqlconfig141c_XmlBinaryToJSON;
var Postgresqlconfig141c_XmlOption;
(function (Postgresqlconfig141c_XmlOption) {
    Postgresqlconfig141c_XmlOption[Postgresqlconfig141c_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    Postgresqlconfig141c_XmlOption[Postgresqlconfig141c_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    Postgresqlconfig141c_XmlOption[Postgresqlconfig141c_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    Postgresqlconfig141c_XmlOption[Postgresqlconfig141c_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig141c_XmlOption = exports.Postgresqlconfig141c_XmlOption || (exports.Postgresqlconfig141c_XmlOption = {}));
function postgresqlconfig141c_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_OPTION_UNSPECIFIED":
            return Postgresqlconfig141c_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case "XML_OPTION_DOCUMENT":
            return Postgresqlconfig141c_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case "XML_OPTION_CONTENT":
            return Postgresqlconfig141c_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig141c_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlconfig141c_XmlOptionFromJSON = postgresqlconfig141c_XmlOptionFromJSON;
function postgresqlconfig141c_XmlOptionToJSON(object) {
    switch (object) {
        case Postgresqlconfig141c_XmlOption.XML_OPTION_UNSPECIFIED:
            return "XML_OPTION_UNSPECIFIED";
        case Postgresqlconfig141c_XmlOption.XML_OPTION_DOCUMENT:
            return "XML_OPTION_DOCUMENT";
        case Postgresqlconfig141c_XmlOption.XML_OPTION_CONTENT:
            return "XML_OPTION_CONTENT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig141c_XmlOptionToJSON = postgresqlconfig141c_XmlOptionToJSON;
const basePostgresqlconfig141c = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig14_1C",
    walLevel: 0,
    synchronousCommit: 0,
    constraintExclusion: 0,
    forceParallelMode: 0,
    clientMinMessages: 0,
    logMinMessages: 0,
    logMinErrorStatement: 0,
    logErrorVerbosity: 0,
    logStatement: 0,
    searchPath: "",
    defaultTransactionIsolation: 0,
    byteaOutput: 0,
    xmlbinary: 0,
    xmloption: 0,
    backslashQuote: 0,
    timezone: "",
    planCacheMode: 0,
    sharedPreloadLibraries: 0,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
};
exports.Postgresqlconfig141c = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig14_1C",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.sharedBuffers }, writer.uint32(18).fork()).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempBuffers }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPreparedTransactions,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.workMem !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.workMem }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenanceWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maintenanceWorkMem,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumWorkMem,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempFileLimit }, writer.uint32(66).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostDelay,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageHit,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageMiss,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageDirty,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostLimit,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.bgwriterDelay }, writer.uint32(114).fork()).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.bgwriterLruMaxpages,
            }, writer.uint32(122).fork()).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.bgwriterLruMultiplier,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.bgwriterFlushAfter,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backendFlushAfter,
            }, writer.uint32(146).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.oldSnapshotThreshold,
            }, writer.uint32(154).fork()).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(160).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(168).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.checkpointTimeout,
            }, writer.uint32(178).fork()).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.checkpointCompletionTarget,
            }, writer.uint32(186).fork()).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.checkpointFlushAfter,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxWalSize }, writer.uint32(202).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.minWalSize }, writer.uint32(210).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStandbyStreamingDelay,
            }, writer.uint32(218).fork()).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.defaultStatisticsTarget,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(232).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.cursorTupleFraction,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fromCollapseLimit,
            }, writer.uint32(250).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.joinCollapseLimit,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(264).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(272).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(280).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(288).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationStatement,
            }, writer.uint32(298).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logCheckpoints }, writer.uint32(306).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logConnections }, writer.uint32(314).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logDisconnections,
            }, writer.uint32(322).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration }, writer.uint32(330).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(336).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits }, writer.uint32(346).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(352).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logTempFiles }, writer.uint32(362).fork()).ldelim();
        }
        if (message.searchPath !== "") {
            writer.uint32(370).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity }, writer.uint32(378).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(384).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.statementTimeout,
            }, writer.uint32(394).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout }, writer.uint32(402).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.idleInTransactionSessionTimeout,
            }, writer.uint32(410).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(416).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(424).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(432).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.ginPendingListLimit,
            }, writer.uint32(442).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deadlockTimeout,
            }, writer.uint32(450).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxLocksPerTransaction,
            }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPredLocksPerTransaction,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls }, writer.uint32(474).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(480).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.defaultWithOids }, writer.uint32(490).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.escapeStringWarning,
            }, writer.uint32(498).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.loCompatPrivileges,
            }, writer.uint32(506).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.quoteAllIdentifiers,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.standardConformingStrings,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.synchronizeSeqscans,
            }, writer.uint32(538).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.transformNullEquals,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError }, writer.uint32(554).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.seqPageCost }, writer.uint32(562).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.randomPageCost,
            }, writer.uint32(570).fork()).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumMaxWorkers,
            }, writer.uint32(578).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostDelay,
            }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostLimit,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumNaptime,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.archiveTimeout }, writer.uint32(610).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.trackActivityQuerySize,
            }, writer.uint32(618).fork()).ldelim();
        }
        if (message.onlineAnalyzeEnable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.onlineAnalyzeEnable,
            }, writer.uint32(634).fork()).ldelim();
        }
        if (message.enableBitmapscan !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableBitmapscan,
            }, writer.uint32(642).fork()).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashagg }, writer.uint32(650).fork()).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableHashjoin }, writer.uint32(658).fork()).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableIndexscan }, writer.uint32(666).fork()).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableIndexonlyscan,
            }, writer.uint32(674).fork()).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableMaterial }, writer.uint32(682).fork()).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableMergejoin }, writer.uint32(690).fork()).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableNestloop }, writer.uint32(698).fork()).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSeqscan }, writer.uint32(706).fork()).ldelim();
        }
        if (message.enableSort !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableSort }, writer.uint32(714).fork()).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableTidscan }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxWorkerProcesses !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxWorkerProcesses,
            }, writer.uint32(730).fork()).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxParallelWorkers,
            }, writer.uint32(738).fork()).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxParallelWorkersPerGather,
            }, writer.uint32(746).fork()).ldelim();
        }
        if (message.autovacuumVacuumScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.autovacuumVacuumScaleFactor,
            }, writer.uint32(754).fork()).ldelim();
        }
        if (message.autovacuumAnalyzeScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.autovacuumAnalyzeScaleFactor,
            }, writer.uint32(762).fork()).ldelim();
        }
        if (message.defaultTransactionReadOnly !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.defaultTransactionReadOnly,
            }, writer.uint32(770).fork()).ldelim();
        }
        if (message.timezone !== "") {
            writer.uint32(778).string(message.timezone);
        }
        if (message.enableParallelAppend !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableParallelAppend,
            }, writer.uint32(786).fork()).ldelim();
        }
        if (message.enableParallelHash !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableParallelHash,
            }, writer.uint32(794).fork()).ldelim();
        }
        if (message.enablePartitionPruning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enablePartitionPruning,
            }, writer.uint32(802).fork()).ldelim();
        }
        if (message.enablePartitionwiseAggregate !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enablePartitionwiseAggregate,
            }, writer.uint32(810).fork()).ldelim();
        }
        if (message.enablePartitionwiseJoin !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enablePartitionwiseJoin,
            }, writer.uint32(818).fork()).ldelim();
        }
        if (message.jit !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.jit }, writer.uint32(826).fork()).ldelim();
        }
        if (message.maxParallelMaintenanceWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxParallelMaintenanceWorkers,
            }, writer.uint32(834).fork()).ldelim();
        }
        if (message.parallelLeaderParticipation !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.parallelLeaderParticipation,
            }, writer.uint32(842).fork()).ldelim();
        }
        if (message.logTransactionSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.logTransactionSampleRate,
            }, writer.uint32(858).fork()).ldelim();
        }
        if (message.planCacheMode !== 0) {
            writer.uint32(864).int32(message.planCacheMode);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveIoConcurrency,
            }, writer.uint32(874).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveCacheSize,
            }, writer.uint32(882).fork()).ldelim();
        }
        writer.uint32(890).fork();
        for (const v of message.sharedPreloadLibraries) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.autoExplainLogMinDuration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autoExplainLogMinDuration,
            }, writer.uint32(898).fork()).ldelim();
        }
        if (message.autoExplainLogAnalyze !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogAnalyze,
            }, writer.uint32(906).fork()).ldelim();
        }
        if (message.autoExplainLogBuffers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogBuffers,
            }, writer.uint32(914).fork()).ldelim();
        }
        if (message.autoExplainLogTiming !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogTiming,
            }, writer.uint32(922).fork()).ldelim();
        }
        if (message.autoExplainLogTriggers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogTriggers,
            }, writer.uint32(930).fork()).ldelim();
        }
        if (message.autoExplainLogVerbose !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogVerbose,
            }, writer.uint32(938).fork()).ldelim();
        }
        if (message.autoExplainLogNestedStatements !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogNestedStatements,
            }, writer.uint32(946).fork()).ldelim();
        }
        if (message.autoExplainSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.autoExplainSampleRate,
            }, writer.uint32(954).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHint !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgHintPlanEnableHint,
            }, writer.uint32(962).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHintTable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgHintPlanEnableHintTable,
            }, writer.uint32(970).fork()).ldelim();
        }
        if (message.pgHintPlanDebugPrint !== 0) {
            writer.uint32(976).int32(message.pgHintPlanDebugPrint);
        }
        if (message.pgHintPlanMessageLevel !== 0) {
            writer.uint32(984).int32(message.pgHintPlanMessageLevel);
        }
        if (message.hashMemMultiplier !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.hashMemMultiplier,
            }, writer.uint32(994).fork()).ldelim();
        }
        if (message.logicalDecodingWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logicalDecodingWorkMem,
            }, writer.uint32(1010).fork()).ldelim();
        }
        if (message.maintenanceIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maintenanceIoConcurrency,
            }, writer.uint32(1018).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxSlotWalKeepSize,
            }, writer.uint32(1026).fork()).ldelim();
        }
        if (message.walKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.walKeepSize }, writer.uint32(1034).fork()).ldelim();
        }
        if (message.enableIncrementalSort !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableIncrementalSort,
            }, writer.uint32(1042).fork()).ldelim();
        }
        if (message.autovacuumVacuumInsertThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumInsertThreshold,
            }, writer.uint32(1050).fork()).ldelim();
        }
        if (message.autovacuumVacuumInsertScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.autovacuumVacuumInsertScaleFactor,
            }, writer.uint32(1058).fork()).ldelim();
        }
        if (message.logMinDurationSample !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationSample,
            }, writer.uint32(1066).fork()).ldelim();
        }
        if (message.logStatementSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.logStatementSampleRate,
            }, writer.uint32(1074).fork()).ldelim();
        }
        if (message.logParameterMaxLength !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logParameterMaxLength,
            }, writer.uint32(1082).fork()).ldelim();
        }
        if (message.logParameterMaxLengthOnError !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logParameterMaxLengthOnError,
            }, writer.uint32(1090).fork()).ldelim();
        }
        if (message.clientConnectionCheckInterval !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.clientConnectionCheckInterval,
            }, writer.uint32(1098).fork()).ldelim();
        }
        if (message.enableAsyncAppend !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableAsyncAppend,
            }, writer.uint32(1106).fork()).ldelim();
        }
        if (message.enableGathermerge !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.enableGathermerge,
            }, writer.uint32(1114).fork()).ldelim();
        }
        if (message.enableMemoize !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.enableMemoize }, writer.uint32(1122).fork()).ldelim();
        }
        if (message.logRecoveryConflictWaits !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logRecoveryConflictWaits,
            }, writer.uint32(1130).fork()).ldelim();
        }
        if (message.vacuumFailsafeAge !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumFailsafeAge,
            }, writer.uint32(1138).fork()).ldelim();
        }
        if (message.vacuumMultixactFailsafeAge !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumMultixactFailsafeAge,
            }, writer.uint32(1146).fork()).ldelim();
        }
        if (message.pgQualstatsEnabled !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsEnabled,
            }, writer.uint32(1154).fork()).ldelim();
        }
        if (message.pgQualstatsTrackConstants !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsTrackConstants,
            }, writer.uint32(1162).fork()).ldelim();
        }
        if (message.pgQualstatsMax !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.pgQualstatsMax }, writer.uint32(1170).fork()).ldelim();
        }
        if (message.pgQualstatsResolveOids !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsResolveOids,
            }, writer.uint32(1178).fork()).ldelim();
        }
        if (message.pgQualstatsSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.pgQualstatsSampleRate,
            }, writer.uint32(1186).fork()).ldelim();
        }
        if (message.plantunerFixEmptyTable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.plantunerFixEmptyTable,
            }, writer.uint32(1194).fork()).ldelim();
        }
        if (message.geqo !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.geqo }, writer.uint32(1218).fork()).ldelim();
        }
        if (message.geqoThreshold !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.geqoThreshold }, writer.uint32(1226).fork()).ldelim();
        }
        if (message.geqoEffort !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.geqoEffort }, writer.uint32(1234).fork()).ldelim();
        }
        if (message.geqoPoolSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.geqoPoolSize }, writer.uint32(1242).fork()).ldelim();
        }
        if (message.geqoGenerations !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.geqoGenerations,
            }, writer.uint32(1250).fork()).ldelim();
        }
        if (message.geqoSelectionBias !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.geqoSelectionBias,
            }, writer.uint32(1258).fork()).ldelim();
        }
        if (message.geqoSeed !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.geqoSeed }, writer.uint32(1266).fork()).ldelim();
        }
        if (message.pgTrgmSimilarityThreshold !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.pgTrgmSimilarityThreshold,
            }, writer.uint32(1274).fork()).ldelim();
        }
        if (message.pgTrgmWordSimilarityThreshold !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.pgTrgmWordSimilarityThreshold,
            }, writer.uint32(1282).fork()).ldelim();
        }
        if (message.pgTrgmStrictWordSimilarityThreshold !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.pgTrgmStrictWordSimilarityThreshold,
            }, writer.uint32(1290).fork()).ldelim();
        }
        if (message.maxStandbyArchiveDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStandbyArchiveDelay,
            }, writer.uint32(1298).fork()).ldelim();
        }
        if (message.sessionDurationTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.sessionDurationTimeout,
            }, writer.uint32(1306).fork()).ldelim();
        }
        if (message.logReplicationCommands !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logReplicationCommands,
            }, writer.uint32(1314).fork()).ldelim();
        }
        if (message.logAutovacuumMinDuration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logAutovacuumMinDuration,
            }, writer.uint32(1322).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlconfig141c);
        message.sharedPreloadLibraries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.sharedBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.tempBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.workMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maintenanceWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.autovacuumWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.vacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostPageHit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageMiss = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageDirty = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.bgwriterDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterLruMaxpages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMultiplier = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.bgwriterFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.backendFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.oldSnapshotThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.walLevel = reader.int32();
                    break;
                case 21:
                    message.synchronousCommit = reader.int32();
                    break;
                case 22:
                    message.checkpointTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.checkpointCompletionTarget = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.checkpointFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.minWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.maxStandbyStreamingDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.defaultStatisticsTarget = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.constraintExclusion = reader.int32();
                    break;
                case 30:
                    message.cursorTupleFraction = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.fromCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.joinCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.forceParallelMode = reader.int32();
                    break;
                case 34:
                    message.clientMinMessages = reader.int32();
                    break;
                case 35:
                    message.logMinMessages = reader.int32();
                    break;
                case 36:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 37:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.logCheckpoints = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.logConnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logDisconnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDuration = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 43:
                    message.logLockWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.logStatement = reader.int32();
                    break;
                case 45:
                    message.logTempFiles = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.searchPath = reader.string();
                    break;
                case 47:
                    message.rowSecurity = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 49:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.byteaOutput = reader.int32();
                    break;
                case 53:
                    message.xmlbinary = reader.int32();
                    break;
                case 54:
                    message.xmloption = reader.int32();
                    break;
                case 55:
                    message.ginPendingListLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.deadlockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.maxLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxPredLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.arrayNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.backslashQuote = reader.int32();
                    break;
                case 61:
                    message.defaultWithOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.escapeStringWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.loCompatPrivileges = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.quoteAllIdentifiers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.standardConformingStrings = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.synchronizeSeqscans = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.transformNullEquals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.exitOnError = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.seqPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.randomPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.autovacuumMaxWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.autovacuumVacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumVacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumNaptime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.archiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.trackActivityQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.onlineAnalyzeEnable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.enableBitmapscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.enableHashagg = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 82:
                    message.enableHashjoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 83:
                    message.enableIndexscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.enableIndexonlyscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.enableMaterial = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.enableMergejoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 87:
                    message.enableNestloop = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.enableSeqscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.enableSort = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 90:
                    message.enableTidscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxWorkerProcesses = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.maxParallelWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.maxParallelWorkersPerGather = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 94:
                    message.autovacuumVacuumScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.autovacuumAnalyzeScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 96:
                    message.defaultTransactionReadOnly = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 97:
                    message.timezone = reader.string();
                    break;
                case 98:
                    message.enableParallelAppend = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.enableParallelHash = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.enablePartitionPruning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 101:
                    message.enablePartitionwiseAggregate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.enablePartitionwiseJoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 103:
                    message.jit = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 104:
                    message.maxParallelMaintenanceWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 105:
                    message.parallelLeaderParticipation = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 107:
                    message.logTransactionSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 108:
                    message.planCacheMode = reader.int32();
                    break;
                case 109:
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 110:
                    message.effectiveCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sharedPreloadLibraries.push(reader.int32());
                        }
                    }
                    else {
                        message.sharedPreloadLibraries.push(reader.int32());
                    }
                    break;
                case 112:
                    message.autoExplainLogMinDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 113:
                    message.autoExplainLogAnalyze = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.autoExplainLogBuffers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 115:
                    message.autoExplainLogTiming = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 116:
                    message.autoExplainLogTriggers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 117:
                    message.autoExplainLogVerbose = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 118:
                    message.autoExplainLogNestedStatements = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 119:
                    message.autoExplainSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 120:
                    message.pgHintPlanEnableHint = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 121:
                    message.pgHintPlanEnableHintTable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 122:
                    message.pgHintPlanDebugPrint = reader.int32();
                    break;
                case 123:
                    message.pgHintPlanMessageLevel = reader.int32();
                    break;
                case 124:
                    message.hashMemMultiplier = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 126:
                    message.logicalDecodingWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 127:
                    message.maintenanceIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 128:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 129:
                    message.walKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 130:
                    message.enableIncrementalSort = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 131:
                    message.autovacuumVacuumInsertThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 132:
                    message.autovacuumVacuumInsertScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 133:
                    message.logMinDurationSample = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 134:
                    message.logStatementSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 135:
                    message.logParameterMaxLength = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 136:
                    message.logParameterMaxLengthOnError = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 137:
                    message.clientConnectionCheckInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 138:
                    message.enableAsyncAppend = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 139:
                    message.enableGathermerge = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 140:
                    message.enableMemoize = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 141:
                    message.logRecoveryConflictWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 142:
                    message.vacuumFailsafeAge = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 143:
                    message.vacuumMultixactFailsafeAge = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 144:
                    message.pgQualstatsEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 145:
                    message.pgQualstatsTrackConstants = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 146:
                    message.pgQualstatsMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 147:
                    message.pgQualstatsResolveOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 148:
                    message.pgQualstatsSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 149:
                    message.plantunerFixEmptyTable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 152:
                    message.geqo = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 153:
                    message.geqoThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 154:
                    message.geqoEffort = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 155:
                    message.geqoPoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 156:
                    message.geqoGenerations = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 157:
                    message.geqoSelectionBias = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 158:
                    message.geqoSeed = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 159:
                    message.pgTrgmSimilarityThreshold = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 160:
                    message.pgTrgmWordSimilarityThreshold = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 161:
                    message.pgTrgmStrictWordSimilarityThreshold = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 162:
                    message.maxStandbyArchiveDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 163:
                    message.sessionDurationTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 164:
                    message.logReplicationCommands = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 165:
                    message.logAutovacuumMinDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, basePostgresqlconfig141c);
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.sharedBuffers =
            object.sharedBuffers !== undefined && object.sharedBuffers !== null
                ? Number(object.sharedBuffers)
                : undefined;
        message.tempBuffers =
            object.tempBuffers !== undefined && object.tempBuffers !== null
                ? Number(object.tempBuffers)
                : undefined;
        message.maxPreparedTransactions =
            object.maxPreparedTransactions !== undefined &&
                object.maxPreparedTransactions !== null
                ? Number(object.maxPreparedTransactions)
                : undefined;
        message.workMem =
            object.workMem !== undefined && object.workMem !== null
                ? Number(object.workMem)
                : undefined;
        message.maintenanceWorkMem =
            object.maintenanceWorkMem !== undefined &&
                object.maintenanceWorkMem !== null
                ? Number(object.maintenanceWorkMem)
                : undefined;
        message.autovacuumWorkMem =
            object.autovacuumWorkMem !== undefined &&
                object.autovacuumWorkMem !== null
                ? Number(object.autovacuumWorkMem)
                : undefined;
        message.tempFileLimit =
            object.tempFileLimit !== undefined && object.tempFileLimit !== null
                ? Number(object.tempFileLimit)
                : undefined;
        message.vacuumCostDelay =
            object.vacuumCostDelay !== undefined && object.vacuumCostDelay !== null
                ? Number(object.vacuumCostDelay)
                : undefined;
        message.vacuumCostPageHit =
            object.vacuumCostPageHit !== undefined &&
                object.vacuumCostPageHit !== null
                ? Number(object.vacuumCostPageHit)
                : undefined;
        message.vacuumCostPageMiss =
            object.vacuumCostPageMiss !== undefined &&
                object.vacuumCostPageMiss !== null
                ? Number(object.vacuumCostPageMiss)
                : undefined;
        message.vacuumCostPageDirty =
            object.vacuumCostPageDirty !== undefined &&
                object.vacuumCostPageDirty !== null
                ? Number(object.vacuumCostPageDirty)
                : undefined;
        message.vacuumCostLimit =
            object.vacuumCostLimit !== undefined && object.vacuumCostLimit !== null
                ? Number(object.vacuumCostLimit)
                : undefined;
        message.bgwriterDelay =
            object.bgwriterDelay !== undefined && object.bgwriterDelay !== null
                ? Number(object.bgwriterDelay)
                : undefined;
        message.bgwriterLruMaxpages =
            object.bgwriterLruMaxpages !== undefined &&
                object.bgwriterLruMaxpages !== null
                ? Number(object.bgwriterLruMaxpages)
                : undefined;
        message.bgwriterLruMultiplier =
            object.bgwriterLruMultiplier !== undefined &&
                object.bgwriterLruMultiplier !== null
                ? Number(object.bgwriterLruMultiplier)
                : undefined;
        message.bgwriterFlushAfter =
            object.bgwriterFlushAfter !== undefined &&
                object.bgwriterFlushAfter !== null
                ? Number(object.bgwriterFlushAfter)
                : undefined;
        message.backendFlushAfter =
            object.backendFlushAfter !== undefined &&
                object.backendFlushAfter !== null
                ? Number(object.backendFlushAfter)
                : undefined;
        message.oldSnapshotThreshold =
            object.oldSnapshotThreshold !== undefined &&
                object.oldSnapshotThreshold !== null
                ? Number(object.oldSnapshotThreshold)
                : undefined;
        message.walLevel =
            object.walLevel !== undefined && object.walLevel !== null
                ? postgresqlconfig141c_WalLevelFromJSON(object.walLevel)
                : 0;
        message.synchronousCommit =
            object.synchronousCommit !== undefined &&
                object.synchronousCommit !== null
                ? postgresqlconfig141c_SynchronousCommitFromJSON(object.synchronousCommit)
                : 0;
        message.checkpointTimeout =
            object.checkpointTimeout !== undefined &&
                object.checkpointTimeout !== null
                ? Number(object.checkpointTimeout)
                : undefined;
        message.checkpointCompletionTarget =
            object.checkpointCompletionTarget !== undefined &&
                object.checkpointCompletionTarget !== null
                ? Number(object.checkpointCompletionTarget)
                : undefined;
        message.checkpointFlushAfter =
            object.checkpointFlushAfter !== undefined &&
                object.checkpointFlushAfter !== null
                ? Number(object.checkpointFlushAfter)
                : undefined;
        message.maxWalSize =
            object.maxWalSize !== undefined && object.maxWalSize !== null
                ? Number(object.maxWalSize)
                : undefined;
        message.minWalSize =
            object.minWalSize !== undefined && object.minWalSize !== null
                ? Number(object.minWalSize)
                : undefined;
        message.maxStandbyStreamingDelay =
            object.maxStandbyStreamingDelay !== undefined &&
                object.maxStandbyStreamingDelay !== null
                ? Number(object.maxStandbyStreamingDelay)
                : undefined;
        message.defaultStatisticsTarget =
            object.defaultStatisticsTarget !== undefined &&
                object.defaultStatisticsTarget !== null
                ? Number(object.defaultStatisticsTarget)
                : undefined;
        message.constraintExclusion =
            object.constraintExclusion !== undefined &&
                object.constraintExclusion !== null
                ? postgresqlconfig141c_ConstraintExclusionFromJSON(object.constraintExclusion)
                : 0;
        message.cursorTupleFraction =
            object.cursorTupleFraction !== undefined &&
                object.cursorTupleFraction !== null
                ? Number(object.cursorTupleFraction)
                : undefined;
        message.fromCollapseLimit =
            object.fromCollapseLimit !== undefined &&
                object.fromCollapseLimit !== null
                ? Number(object.fromCollapseLimit)
                : undefined;
        message.joinCollapseLimit =
            object.joinCollapseLimit !== undefined &&
                object.joinCollapseLimit !== null
                ? Number(object.joinCollapseLimit)
                : undefined;
        message.forceParallelMode =
            object.forceParallelMode !== undefined &&
                object.forceParallelMode !== null
                ? postgresqlconfig141c_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined &&
                object.clientMinMessages !== null
                ? postgresqlconfig141c_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlconfig141c_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined &&
                object.logMinErrorStatement !== null
                ? postgresqlconfig141c_LogLevelFromJSON(object.logMinErrorStatement)
                : 0;
        message.logMinDurationStatement =
            object.logMinDurationStatement !== undefined &&
                object.logMinDurationStatement !== null
                ? Number(object.logMinDurationStatement)
                : undefined;
        message.logCheckpoints =
            object.logCheckpoints !== undefined && object.logCheckpoints !== null
                ? Boolean(object.logCheckpoints)
                : undefined;
        message.logConnections =
            object.logConnections !== undefined && object.logConnections !== null
                ? Boolean(object.logConnections)
                : undefined;
        message.logDisconnections =
            object.logDisconnections !== undefined &&
                object.logDisconnections !== null
                ? Boolean(object.logDisconnections)
                : undefined;
        message.logDuration =
            object.logDuration !== undefined && object.logDuration !== null
                ? Boolean(object.logDuration)
                : undefined;
        message.logErrorVerbosity =
            object.logErrorVerbosity !== undefined &&
                object.logErrorVerbosity !== null
                ? postgresqlconfig141c_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlconfig141c_LogStatementFromJSON(object.logStatement)
                : 0;
        message.logTempFiles =
            object.logTempFiles !== undefined && object.logTempFiles !== null
                ? Number(object.logTempFiles)
                : undefined;
        message.searchPath =
            object.searchPath !== undefined && object.searchPath !== null
                ? String(object.searchPath)
                : "";
        message.rowSecurity =
            object.rowSecurity !== undefined && object.rowSecurity !== null
                ? Boolean(object.rowSecurity)
                : undefined;
        message.defaultTransactionIsolation =
            object.defaultTransactionIsolation !== undefined &&
                object.defaultTransactionIsolation !== null
                ? postgresqlconfig141c_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
                : 0;
        message.statementTimeout =
            object.statementTimeout !== undefined && object.statementTimeout !== null
                ? Number(object.statementTimeout)
                : undefined;
        message.lockTimeout =
            object.lockTimeout !== undefined && object.lockTimeout !== null
                ? Number(object.lockTimeout)
                : undefined;
        message.idleInTransactionSessionTimeout =
            object.idleInTransactionSessionTimeout !== undefined &&
                object.idleInTransactionSessionTimeout !== null
                ? Number(object.idleInTransactionSessionTimeout)
                : undefined;
        message.byteaOutput =
            object.byteaOutput !== undefined && object.byteaOutput !== null
                ? postgresqlconfig141c_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlconfig141c_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlconfig141c_XmlOptionFromJSON(object.xmloption)
                : 0;
        message.ginPendingListLimit =
            object.ginPendingListLimit !== undefined &&
                object.ginPendingListLimit !== null
                ? Number(object.ginPendingListLimit)
                : undefined;
        message.deadlockTimeout =
            object.deadlockTimeout !== undefined && object.deadlockTimeout !== null
                ? Number(object.deadlockTimeout)
                : undefined;
        message.maxLocksPerTransaction =
            object.maxLocksPerTransaction !== undefined &&
                object.maxLocksPerTransaction !== null
                ? Number(object.maxLocksPerTransaction)
                : undefined;
        message.maxPredLocksPerTransaction =
            object.maxPredLocksPerTransaction !== undefined &&
                object.maxPredLocksPerTransaction !== null
                ? Number(object.maxPredLocksPerTransaction)
                : undefined;
        message.arrayNulls =
            object.arrayNulls !== undefined && object.arrayNulls !== null
                ? Boolean(object.arrayNulls)
                : undefined;
        message.backslashQuote =
            object.backslashQuote !== undefined && object.backslashQuote !== null
                ? postgresqlconfig141c_BackslashQuoteFromJSON(object.backslashQuote)
                : 0;
        message.defaultWithOids =
            object.defaultWithOids !== undefined && object.defaultWithOids !== null
                ? Boolean(object.defaultWithOids)
                : undefined;
        message.escapeStringWarning =
            object.escapeStringWarning !== undefined &&
                object.escapeStringWarning !== null
                ? Boolean(object.escapeStringWarning)
                : undefined;
        message.loCompatPrivileges =
            object.loCompatPrivileges !== undefined &&
                object.loCompatPrivileges !== null
                ? Boolean(object.loCompatPrivileges)
                : undefined;
        message.quoteAllIdentifiers =
            object.quoteAllIdentifiers !== undefined &&
                object.quoteAllIdentifiers !== null
                ? Boolean(object.quoteAllIdentifiers)
                : undefined;
        message.standardConformingStrings =
            object.standardConformingStrings !== undefined &&
                object.standardConformingStrings !== null
                ? Boolean(object.standardConformingStrings)
                : undefined;
        message.synchronizeSeqscans =
            object.synchronizeSeqscans !== undefined &&
                object.synchronizeSeqscans !== null
                ? Boolean(object.synchronizeSeqscans)
                : undefined;
        message.transformNullEquals =
            object.transformNullEquals !== undefined &&
                object.transformNullEquals !== null
                ? Boolean(object.transformNullEquals)
                : undefined;
        message.exitOnError =
            object.exitOnError !== undefined && object.exitOnError !== null
                ? Boolean(object.exitOnError)
                : undefined;
        message.seqPageCost =
            object.seqPageCost !== undefined && object.seqPageCost !== null
                ? Number(object.seqPageCost)
                : undefined;
        message.randomPageCost =
            object.randomPageCost !== undefined && object.randomPageCost !== null
                ? Number(object.randomPageCost)
                : undefined;
        message.autovacuumMaxWorkers =
            object.autovacuumMaxWorkers !== undefined &&
                object.autovacuumMaxWorkers !== null
                ? Number(object.autovacuumMaxWorkers)
                : undefined;
        message.autovacuumVacuumCostDelay =
            object.autovacuumVacuumCostDelay !== undefined &&
                object.autovacuumVacuumCostDelay !== null
                ? Number(object.autovacuumVacuumCostDelay)
                : undefined;
        message.autovacuumVacuumCostLimit =
            object.autovacuumVacuumCostLimit !== undefined &&
                object.autovacuumVacuumCostLimit !== null
                ? Number(object.autovacuumVacuumCostLimit)
                : undefined;
        message.autovacuumNaptime =
            object.autovacuumNaptime !== undefined &&
                object.autovacuumNaptime !== null
                ? Number(object.autovacuumNaptime)
                : undefined;
        message.archiveTimeout =
            object.archiveTimeout !== undefined && object.archiveTimeout !== null
                ? Number(object.archiveTimeout)
                : undefined;
        message.trackActivityQuerySize =
            object.trackActivityQuerySize !== undefined &&
                object.trackActivityQuerySize !== null
                ? Number(object.trackActivityQuerySize)
                : undefined;
        message.onlineAnalyzeEnable =
            object.onlineAnalyzeEnable !== undefined &&
                object.onlineAnalyzeEnable !== null
                ? Boolean(object.onlineAnalyzeEnable)
                : undefined;
        message.enableBitmapscan =
            object.enableBitmapscan !== undefined && object.enableBitmapscan !== null
                ? Boolean(object.enableBitmapscan)
                : undefined;
        message.enableHashagg =
            object.enableHashagg !== undefined && object.enableHashagg !== null
                ? Boolean(object.enableHashagg)
                : undefined;
        message.enableHashjoin =
            object.enableHashjoin !== undefined && object.enableHashjoin !== null
                ? Boolean(object.enableHashjoin)
                : undefined;
        message.enableIndexscan =
            object.enableIndexscan !== undefined && object.enableIndexscan !== null
                ? Boolean(object.enableIndexscan)
                : undefined;
        message.enableIndexonlyscan =
            object.enableIndexonlyscan !== undefined &&
                object.enableIndexonlyscan !== null
                ? Boolean(object.enableIndexonlyscan)
                : undefined;
        message.enableMaterial =
            object.enableMaterial !== undefined && object.enableMaterial !== null
                ? Boolean(object.enableMaterial)
                : undefined;
        message.enableMergejoin =
            object.enableMergejoin !== undefined && object.enableMergejoin !== null
                ? Boolean(object.enableMergejoin)
                : undefined;
        message.enableNestloop =
            object.enableNestloop !== undefined && object.enableNestloop !== null
                ? Boolean(object.enableNestloop)
                : undefined;
        message.enableSeqscan =
            object.enableSeqscan !== undefined && object.enableSeqscan !== null
                ? Boolean(object.enableSeqscan)
                : undefined;
        message.enableSort =
            object.enableSort !== undefined && object.enableSort !== null
                ? Boolean(object.enableSort)
                : undefined;
        message.enableTidscan =
            object.enableTidscan !== undefined && object.enableTidscan !== null
                ? Boolean(object.enableTidscan)
                : undefined;
        message.maxWorkerProcesses =
            object.maxWorkerProcesses !== undefined &&
                object.maxWorkerProcesses !== null
                ? Number(object.maxWorkerProcesses)
                : undefined;
        message.maxParallelWorkers =
            object.maxParallelWorkers !== undefined &&
                object.maxParallelWorkers !== null
                ? Number(object.maxParallelWorkers)
                : undefined;
        message.maxParallelWorkersPerGather =
            object.maxParallelWorkersPerGather !== undefined &&
                object.maxParallelWorkersPerGather !== null
                ? Number(object.maxParallelWorkersPerGather)
                : undefined;
        message.autovacuumVacuumScaleFactor =
            object.autovacuumVacuumScaleFactor !== undefined &&
                object.autovacuumVacuumScaleFactor !== null
                ? Number(object.autovacuumVacuumScaleFactor)
                : undefined;
        message.autovacuumAnalyzeScaleFactor =
            object.autovacuumAnalyzeScaleFactor !== undefined &&
                object.autovacuumAnalyzeScaleFactor !== null
                ? Number(object.autovacuumAnalyzeScaleFactor)
                : undefined;
        message.defaultTransactionReadOnly =
            object.defaultTransactionReadOnly !== undefined &&
                object.defaultTransactionReadOnly !== null
                ? Boolean(object.defaultTransactionReadOnly)
                : undefined;
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : "";
        message.enableParallelAppend =
            object.enableParallelAppend !== undefined &&
                object.enableParallelAppend !== null
                ? Boolean(object.enableParallelAppend)
                : undefined;
        message.enableParallelHash =
            object.enableParallelHash !== undefined &&
                object.enableParallelHash !== null
                ? Boolean(object.enableParallelHash)
                : undefined;
        message.enablePartitionPruning =
            object.enablePartitionPruning !== undefined &&
                object.enablePartitionPruning !== null
                ? Boolean(object.enablePartitionPruning)
                : undefined;
        message.enablePartitionwiseAggregate =
            object.enablePartitionwiseAggregate !== undefined &&
                object.enablePartitionwiseAggregate !== null
                ? Boolean(object.enablePartitionwiseAggregate)
                : undefined;
        message.enablePartitionwiseJoin =
            object.enablePartitionwiseJoin !== undefined &&
                object.enablePartitionwiseJoin !== null
                ? Boolean(object.enablePartitionwiseJoin)
                : undefined;
        message.jit =
            object.jit !== undefined && object.jit !== null
                ? Boolean(object.jit)
                : undefined;
        message.maxParallelMaintenanceWorkers =
            object.maxParallelMaintenanceWorkers !== undefined &&
                object.maxParallelMaintenanceWorkers !== null
                ? Number(object.maxParallelMaintenanceWorkers)
                : undefined;
        message.parallelLeaderParticipation =
            object.parallelLeaderParticipation !== undefined &&
                object.parallelLeaderParticipation !== null
                ? Boolean(object.parallelLeaderParticipation)
                : undefined;
        message.logTransactionSampleRate =
            object.logTransactionSampleRate !== undefined &&
                object.logTransactionSampleRate !== null
                ? Number(object.logTransactionSampleRate)
                : undefined;
        message.planCacheMode =
            object.planCacheMode !== undefined && object.planCacheMode !== null
                ? postgresqlconfig141c_PlanCacheModeFromJSON(object.planCacheMode)
                : 0;
        message.effectiveIoConcurrency =
            object.effectiveIoConcurrency !== undefined &&
                object.effectiveIoConcurrency !== null
                ? Number(object.effectiveIoConcurrency)
                : undefined;
        message.effectiveCacheSize =
            object.effectiveCacheSize !== undefined &&
                object.effectiveCacheSize !== null
                ? Number(object.effectiveCacheSize)
                : undefined;
        message.sharedPreloadLibraries = ((_a = object.sharedPreloadLibraries) !== null && _a !== void 0 ? _a : []).map((e) => postgresqlconfig141c_SharedPreloadLibrariesFromJSON(e));
        message.autoExplainLogMinDuration =
            object.autoExplainLogMinDuration !== undefined &&
                object.autoExplainLogMinDuration !== null
                ? Number(object.autoExplainLogMinDuration)
                : undefined;
        message.autoExplainLogAnalyze =
            object.autoExplainLogAnalyze !== undefined &&
                object.autoExplainLogAnalyze !== null
                ? Boolean(object.autoExplainLogAnalyze)
                : undefined;
        message.autoExplainLogBuffers =
            object.autoExplainLogBuffers !== undefined &&
                object.autoExplainLogBuffers !== null
                ? Boolean(object.autoExplainLogBuffers)
                : undefined;
        message.autoExplainLogTiming =
            object.autoExplainLogTiming !== undefined &&
                object.autoExplainLogTiming !== null
                ? Boolean(object.autoExplainLogTiming)
                : undefined;
        message.autoExplainLogTriggers =
            object.autoExplainLogTriggers !== undefined &&
                object.autoExplainLogTriggers !== null
                ? Boolean(object.autoExplainLogTriggers)
                : undefined;
        message.autoExplainLogVerbose =
            object.autoExplainLogVerbose !== undefined &&
                object.autoExplainLogVerbose !== null
                ? Boolean(object.autoExplainLogVerbose)
                : undefined;
        message.autoExplainLogNestedStatements =
            object.autoExplainLogNestedStatements !== undefined &&
                object.autoExplainLogNestedStatements !== null
                ? Boolean(object.autoExplainLogNestedStatements)
                : undefined;
        message.autoExplainSampleRate =
            object.autoExplainSampleRate !== undefined &&
                object.autoExplainSampleRate !== null
                ? Number(object.autoExplainSampleRate)
                : undefined;
        message.pgHintPlanEnableHint =
            object.pgHintPlanEnableHint !== undefined &&
                object.pgHintPlanEnableHint !== null
                ? Boolean(object.pgHintPlanEnableHint)
                : undefined;
        message.pgHintPlanEnableHintTable =
            object.pgHintPlanEnableHintTable !== undefined &&
                object.pgHintPlanEnableHintTable !== null
                ? Boolean(object.pgHintPlanEnableHintTable)
                : undefined;
        message.pgHintPlanDebugPrint =
            object.pgHintPlanDebugPrint !== undefined &&
                object.pgHintPlanDebugPrint !== null
                ? postgresqlconfig141c_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint)
                : 0;
        message.pgHintPlanMessageLevel =
            object.pgHintPlanMessageLevel !== undefined &&
                object.pgHintPlanMessageLevel !== null
                ? postgresqlconfig141c_LogLevelFromJSON(object.pgHintPlanMessageLevel)
                : 0;
        message.hashMemMultiplier =
            object.hashMemMultiplier !== undefined &&
                object.hashMemMultiplier !== null
                ? Number(object.hashMemMultiplier)
                : undefined;
        message.logicalDecodingWorkMem =
            object.logicalDecodingWorkMem !== undefined &&
                object.logicalDecodingWorkMem !== null
                ? Number(object.logicalDecodingWorkMem)
                : undefined;
        message.maintenanceIoConcurrency =
            object.maintenanceIoConcurrency !== undefined &&
                object.maintenanceIoConcurrency !== null
                ? Number(object.maintenanceIoConcurrency)
                : undefined;
        message.maxSlotWalKeepSize =
            object.maxSlotWalKeepSize !== undefined &&
                object.maxSlotWalKeepSize !== null
                ? Number(object.maxSlotWalKeepSize)
                : undefined;
        message.walKeepSize =
            object.walKeepSize !== undefined && object.walKeepSize !== null
                ? Number(object.walKeepSize)
                : undefined;
        message.enableIncrementalSort =
            object.enableIncrementalSort !== undefined &&
                object.enableIncrementalSort !== null
                ? Boolean(object.enableIncrementalSort)
                : undefined;
        message.autovacuumVacuumInsertThreshold =
            object.autovacuumVacuumInsertThreshold !== undefined &&
                object.autovacuumVacuumInsertThreshold !== null
                ? Number(object.autovacuumVacuumInsertThreshold)
                : undefined;
        message.autovacuumVacuumInsertScaleFactor =
            object.autovacuumVacuumInsertScaleFactor !== undefined &&
                object.autovacuumVacuumInsertScaleFactor !== null
                ? Number(object.autovacuumVacuumInsertScaleFactor)
                : undefined;
        message.logMinDurationSample =
            object.logMinDurationSample !== undefined &&
                object.logMinDurationSample !== null
                ? Number(object.logMinDurationSample)
                : undefined;
        message.logStatementSampleRate =
            object.logStatementSampleRate !== undefined &&
                object.logStatementSampleRate !== null
                ? Number(object.logStatementSampleRate)
                : undefined;
        message.logParameterMaxLength =
            object.logParameterMaxLength !== undefined &&
                object.logParameterMaxLength !== null
                ? Number(object.logParameterMaxLength)
                : undefined;
        message.logParameterMaxLengthOnError =
            object.logParameterMaxLengthOnError !== undefined &&
                object.logParameterMaxLengthOnError !== null
                ? Number(object.logParameterMaxLengthOnError)
                : undefined;
        message.clientConnectionCheckInterval =
            object.clientConnectionCheckInterval !== undefined &&
                object.clientConnectionCheckInterval !== null
                ? Number(object.clientConnectionCheckInterval)
                : undefined;
        message.enableAsyncAppend =
            object.enableAsyncAppend !== undefined &&
                object.enableAsyncAppend !== null
                ? Boolean(object.enableAsyncAppend)
                : undefined;
        message.enableGathermerge =
            object.enableGathermerge !== undefined &&
                object.enableGathermerge !== null
                ? Boolean(object.enableGathermerge)
                : undefined;
        message.enableMemoize =
            object.enableMemoize !== undefined && object.enableMemoize !== null
                ? Boolean(object.enableMemoize)
                : undefined;
        message.logRecoveryConflictWaits =
            object.logRecoveryConflictWaits !== undefined &&
                object.logRecoveryConflictWaits !== null
                ? Boolean(object.logRecoveryConflictWaits)
                : undefined;
        message.vacuumFailsafeAge =
            object.vacuumFailsafeAge !== undefined &&
                object.vacuumFailsafeAge !== null
                ? Number(object.vacuumFailsafeAge)
                : undefined;
        message.vacuumMultixactFailsafeAge =
            object.vacuumMultixactFailsafeAge !== undefined &&
                object.vacuumMultixactFailsafeAge !== null
                ? Number(object.vacuumMultixactFailsafeAge)
                : undefined;
        message.pgQualstatsEnabled =
            object.pgQualstatsEnabled !== undefined &&
                object.pgQualstatsEnabled !== null
                ? Boolean(object.pgQualstatsEnabled)
                : undefined;
        message.pgQualstatsTrackConstants =
            object.pgQualstatsTrackConstants !== undefined &&
                object.pgQualstatsTrackConstants !== null
                ? Boolean(object.pgQualstatsTrackConstants)
                : undefined;
        message.pgQualstatsMax =
            object.pgQualstatsMax !== undefined && object.pgQualstatsMax !== null
                ? Number(object.pgQualstatsMax)
                : undefined;
        message.pgQualstatsResolveOids =
            object.pgQualstatsResolveOids !== undefined &&
                object.pgQualstatsResolveOids !== null
                ? Boolean(object.pgQualstatsResolveOids)
                : undefined;
        message.pgQualstatsSampleRate =
            object.pgQualstatsSampleRate !== undefined &&
                object.pgQualstatsSampleRate !== null
                ? Number(object.pgQualstatsSampleRate)
                : undefined;
        message.plantunerFixEmptyTable =
            object.plantunerFixEmptyTable !== undefined &&
                object.plantunerFixEmptyTable !== null
                ? Boolean(object.plantunerFixEmptyTable)
                : undefined;
        message.geqo =
            object.geqo !== undefined && object.geqo !== null
                ? Boolean(object.geqo)
                : undefined;
        message.geqoThreshold =
            object.geqoThreshold !== undefined && object.geqoThreshold !== null
                ? Number(object.geqoThreshold)
                : undefined;
        message.geqoEffort =
            object.geqoEffort !== undefined && object.geqoEffort !== null
                ? Number(object.geqoEffort)
                : undefined;
        message.geqoPoolSize =
            object.geqoPoolSize !== undefined && object.geqoPoolSize !== null
                ? Number(object.geqoPoolSize)
                : undefined;
        message.geqoGenerations =
            object.geqoGenerations !== undefined && object.geqoGenerations !== null
                ? Number(object.geqoGenerations)
                : undefined;
        message.geqoSelectionBias =
            object.geqoSelectionBias !== undefined &&
                object.geqoSelectionBias !== null
                ? Number(object.geqoSelectionBias)
                : undefined;
        message.geqoSeed =
            object.geqoSeed !== undefined && object.geqoSeed !== null
                ? Number(object.geqoSeed)
                : undefined;
        message.pgTrgmSimilarityThreshold =
            object.pgTrgmSimilarityThreshold !== undefined &&
                object.pgTrgmSimilarityThreshold !== null
                ? Number(object.pgTrgmSimilarityThreshold)
                : undefined;
        message.pgTrgmWordSimilarityThreshold =
            object.pgTrgmWordSimilarityThreshold !== undefined &&
                object.pgTrgmWordSimilarityThreshold !== null
                ? Number(object.pgTrgmWordSimilarityThreshold)
                : undefined;
        message.pgTrgmStrictWordSimilarityThreshold =
            object.pgTrgmStrictWordSimilarityThreshold !== undefined &&
                object.pgTrgmStrictWordSimilarityThreshold !== null
                ? Number(object.pgTrgmStrictWordSimilarityThreshold)
                : undefined;
        message.maxStandbyArchiveDelay =
            object.maxStandbyArchiveDelay !== undefined &&
                object.maxStandbyArchiveDelay !== null
                ? Number(object.maxStandbyArchiveDelay)
                : undefined;
        message.sessionDurationTimeout =
            object.sessionDurationTimeout !== undefined &&
                object.sessionDurationTimeout !== null
                ? Number(object.sessionDurationTimeout)
                : undefined;
        message.logReplicationCommands =
            object.logReplicationCommands !== undefined &&
                object.logReplicationCommands !== null
                ? Boolean(object.logReplicationCommands)
                : undefined;
        message.logAutovacuumMinDuration =
            object.logAutovacuumMinDuration !== undefined &&
                object.logAutovacuumMinDuration !== null
                ? Number(object.logAutovacuumMinDuration)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.sharedBuffers !== undefined &&
            (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined &&
            (obj.tempBuffers = message.tempBuffers);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.maintenanceWorkMem !== undefined &&
            (obj.maintenanceWorkMem = message.maintenanceWorkMem);
        message.autovacuumWorkMem !== undefined &&
            (obj.autovacuumWorkMem = message.autovacuumWorkMem);
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.vacuumCostDelay !== undefined &&
            (obj.vacuumCostDelay = message.vacuumCostDelay);
        message.vacuumCostPageHit !== undefined &&
            (obj.vacuumCostPageHit = message.vacuumCostPageHit);
        message.vacuumCostPageMiss !== undefined &&
            (obj.vacuumCostPageMiss = message.vacuumCostPageMiss);
        message.vacuumCostPageDirty !== undefined &&
            (obj.vacuumCostPageDirty = message.vacuumCostPageDirty);
        message.vacuumCostLimit !== undefined &&
            (obj.vacuumCostLimit = message.vacuumCostLimit);
        message.bgwriterDelay !== undefined &&
            (obj.bgwriterDelay = message.bgwriterDelay);
        message.bgwriterLruMaxpages !== undefined &&
            (obj.bgwriterLruMaxpages = message.bgwriterLruMaxpages);
        message.bgwriterLruMultiplier !== undefined &&
            (obj.bgwriterLruMultiplier = message.bgwriterLruMultiplier);
        message.bgwriterFlushAfter !== undefined &&
            (obj.bgwriterFlushAfter = message.bgwriterFlushAfter);
        message.backendFlushAfter !== undefined &&
            (obj.backendFlushAfter = message.backendFlushAfter);
        message.oldSnapshotThreshold !== undefined &&
            (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
        message.walLevel !== undefined &&
            (obj.walLevel = postgresqlconfig141c_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlconfig141c_SynchronousCommitToJSON(message.synchronousCommit));
        message.checkpointTimeout !== undefined &&
            (obj.checkpointTimeout = message.checkpointTimeout);
        message.checkpointCompletionTarget !== undefined &&
            (obj.checkpointCompletionTarget = message.checkpointCompletionTarget);
        message.checkpointFlushAfter !== undefined &&
            (obj.checkpointFlushAfter = message.checkpointFlushAfter);
        message.maxWalSize !== undefined && (obj.maxWalSize = message.maxWalSize);
        message.minWalSize !== undefined && (obj.minWalSize = message.minWalSize);
        message.maxStandbyStreamingDelay !== undefined &&
            (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
        message.defaultStatisticsTarget !== undefined &&
            (obj.defaultStatisticsTarget = message.defaultStatisticsTarget);
        message.constraintExclusion !== undefined &&
            (obj.constraintExclusion = postgresqlconfig141c_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlconfig141c_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlconfig141c_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlconfig141c_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlconfig141c_LogLevelToJSON(message.logMinErrorStatement));
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.logCheckpoints !== undefined &&
            (obj.logCheckpoints = message.logCheckpoints);
        message.logConnections !== undefined &&
            (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logDuration !== undefined &&
            (obj.logDuration = message.logDuration);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity = postgresqlconfig141c_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlconfig141c_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlconfig141c_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlconfig141c_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlconfig141c_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlconfig141c_XmlOptionToJSON(message.xmloption));
        message.ginPendingListLimit !== undefined &&
            (obj.ginPendingListLimit = message.ginPendingListLimit);
        message.deadlockTimeout !== undefined &&
            (obj.deadlockTimeout = message.deadlockTimeout);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.maxPredLocksPerTransaction !== undefined &&
            (obj.maxPredLocksPerTransaction = message.maxPredLocksPerTransaction);
        message.arrayNulls !== undefined && (obj.arrayNulls = message.arrayNulls);
        message.backslashQuote !== undefined &&
            (obj.backslashQuote = postgresqlconfig141c_BackslashQuoteToJSON(message.backslashQuote));
        message.defaultWithOids !== undefined &&
            (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.quoteAllIdentifiers !== undefined &&
            (obj.quoteAllIdentifiers = message.quoteAllIdentifiers);
        message.standardConformingStrings !== undefined &&
            (obj.standardConformingStrings = message.standardConformingStrings);
        message.synchronizeSeqscans !== undefined &&
            (obj.synchronizeSeqscans = message.synchronizeSeqscans);
        message.transformNullEquals !== undefined &&
            (obj.transformNullEquals = message.transformNullEquals);
        message.exitOnError !== undefined &&
            (obj.exitOnError = message.exitOnError);
        message.seqPageCost !== undefined &&
            (obj.seqPageCost = message.seqPageCost);
        message.randomPageCost !== undefined &&
            (obj.randomPageCost = message.randomPageCost);
        message.autovacuumMaxWorkers !== undefined &&
            (obj.autovacuumMaxWorkers = message.autovacuumMaxWorkers);
        message.autovacuumVacuumCostDelay !== undefined &&
            (obj.autovacuumVacuumCostDelay = message.autovacuumVacuumCostDelay);
        message.autovacuumVacuumCostLimit !== undefined &&
            (obj.autovacuumVacuumCostLimit = message.autovacuumVacuumCostLimit);
        message.autovacuumNaptime !== undefined &&
            (obj.autovacuumNaptime = message.autovacuumNaptime);
        message.archiveTimeout !== undefined &&
            (obj.archiveTimeout = message.archiveTimeout);
        message.trackActivityQuerySize !== undefined &&
            (obj.trackActivityQuerySize = message.trackActivityQuerySize);
        message.onlineAnalyzeEnable !== undefined &&
            (obj.onlineAnalyzeEnable = message.onlineAnalyzeEnable);
        message.enableBitmapscan !== undefined &&
            (obj.enableBitmapscan = message.enableBitmapscan);
        message.enableHashagg !== undefined &&
            (obj.enableHashagg = message.enableHashagg);
        message.enableHashjoin !== undefined &&
            (obj.enableHashjoin = message.enableHashjoin);
        message.enableIndexscan !== undefined &&
            (obj.enableIndexscan = message.enableIndexscan);
        message.enableIndexonlyscan !== undefined &&
            (obj.enableIndexonlyscan = message.enableIndexonlyscan);
        message.enableMaterial !== undefined &&
            (obj.enableMaterial = message.enableMaterial);
        message.enableMergejoin !== undefined &&
            (obj.enableMergejoin = message.enableMergejoin);
        message.enableNestloop !== undefined &&
            (obj.enableNestloop = message.enableNestloop);
        message.enableSeqscan !== undefined &&
            (obj.enableSeqscan = message.enableSeqscan);
        message.enableSort !== undefined && (obj.enableSort = message.enableSort);
        message.enableTidscan !== undefined &&
            (obj.enableTidscan = message.enableTidscan);
        message.maxWorkerProcesses !== undefined &&
            (obj.maxWorkerProcesses = message.maxWorkerProcesses);
        message.maxParallelWorkers !== undefined &&
            (obj.maxParallelWorkers = message.maxParallelWorkers);
        message.maxParallelWorkersPerGather !== undefined &&
            (obj.maxParallelWorkersPerGather = message.maxParallelWorkersPerGather);
        message.autovacuumVacuumScaleFactor !== undefined &&
            (obj.autovacuumVacuumScaleFactor = message.autovacuumVacuumScaleFactor);
        message.autovacuumAnalyzeScaleFactor !== undefined &&
            (obj.autovacuumAnalyzeScaleFactor = message.autovacuumAnalyzeScaleFactor);
        message.defaultTransactionReadOnly !== undefined &&
            (obj.defaultTransactionReadOnly = message.defaultTransactionReadOnly);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.enableParallelAppend !== undefined &&
            (obj.enableParallelAppend = message.enableParallelAppend);
        message.enableParallelHash !== undefined &&
            (obj.enableParallelHash = message.enableParallelHash);
        message.enablePartitionPruning !== undefined &&
            (obj.enablePartitionPruning = message.enablePartitionPruning);
        message.enablePartitionwiseAggregate !== undefined &&
            (obj.enablePartitionwiseAggregate = message.enablePartitionwiseAggregate);
        message.enablePartitionwiseJoin !== undefined &&
            (obj.enablePartitionwiseJoin = message.enablePartitionwiseJoin);
        message.jit !== undefined && (obj.jit = message.jit);
        message.maxParallelMaintenanceWorkers !== undefined &&
            (obj.maxParallelMaintenanceWorkers =
                message.maxParallelMaintenanceWorkers);
        message.parallelLeaderParticipation !== undefined &&
            (obj.parallelLeaderParticipation = message.parallelLeaderParticipation);
        message.logTransactionSampleRate !== undefined &&
            (obj.logTransactionSampleRate = message.logTransactionSampleRate);
        message.planCacheMode !== undefined &&
            (obj.planCacheMode = postgresqlconfig141c_PlanCacheModeToJSON(message.planCacheMode));
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        if (message.sharedPreloadLibraries) {
            obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) => postgresqlconfig141c_SharedPreloadLibrariesToJSON(e));
        }
        else {
            obj.sharedPreloadLibraries = [];
        }
        message.autoExplainLogMinDuration !== undefined &&
            (obj.autoExplainLogMinDuration = message.autoExplainLogMinDuration);
        message.autoExplainLogAnalyze !== undefined &&
            (obj.autoExplainLogAnalyze = message.autoExplainLogAnalyze);
        message.autoExplainLogBuffers !== undefined &&
            (obj.autoExplainLogBuffers = message.autoExplainLogBuffers);
        message.autoExplainLogTiming !== undefined &&
            (obj.autoExplainLogTiming = message.autoExplainLogTiming);
        message.autoExplainLogTriggers !== undefined &&
            (obj.autoExplainLogTriggers = message.autoExplainLogTriggers);
        message.autoExplainLogVerbose !== undefined &&
            (obj.autoExplainLogVerbose = message.autoExplainLogVerbose);
        message.autoExplainLogNestedStatements !== undefined &&
            (obj.autoExplainLogNestedStatements =
                message.autoExplainLogNestedStatements);
        message.autoExplainSampleRate !== undefined &&
            (obj.autoExplainSampleRate = message.autoExplainSampleRate);
        message.pgHintPlanEnableHint !== undefined &&
            (obj.pgHintPlanEnableHint = message.pgHintPlanEnableHint);
        message.pgHintPlanEnableHintTable !== undefined &&
            (obj.pgHintPlanEnableHintTable = message.pgHintPlanEnableHintTable);
        message.pgHintPlanDebugPrint !== undefined &&
            (obj.pgHintPlanDebugPrint =
                postgresqlconfig141c_PgHintPlanDebugPrintToJSON(message.pgHintPlanDebugPrint));
        message.pgHintPlanMessageLevel !== undefined &&
            (obj.pgHintPlanMessageLevel = postgresqlconfig141c_LogLevelToJSON(message.pgHintPlanMessageLevel));
        message.hashMemMultiplier !== undefined &&
            (obj.hashMemMultiplier = message.hashMemMultiplier);
        message.logicalDecodingWorkMem !== undefined &&
            (obj.logicalDecodingWorkMem = message.logicalDecodingWorkMem);
        message.maintenanceIoConcurrency !== undefined &&
            (obj.maintenanceIoConcurrency = message.maintenanceIoConcurrency);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.walKeepSize !== undefined &&
            (obj.walKeepSize = message.walKeepSize);
        message.enableIncrementalSort !== undefined &&
            (obj.enableIncrementalSort = message.enableIncrementalSort);
        message.autovacuumVacuumInsertThreshold !== undefined &&
            (obj.autovacuumVacuumInsertThreshold =
                message.autovacuumVacuumInsertThreshold);
        message.autovacuumVacuumInsertScaleFactor !== undefined &&
            (obj.autovacuumVacuumInsertScaleFactor =
                message.autovacuumVacuumInsertScaleFactor);
        message.logMinDurationSample !== undefined &&
            (obj.logMinDurationSample = message.logMinDurationSample);
        message.logStatementSampleRate !== undefined &&
            (obj.logStatementSampleRate = message.logStatementSampleRate);
        message.logParameterMaxLength !== undefined &&
            (obj.logParameterMaxLength = message.logParameterMaxLength);
        message.logParameterMaxLengthOnError !== undefined &&
            (obj.logParameterMaxLengthOnError = message.logParameterMaxLengthOnError);
        message.clientConnectionCheckInterval !== undefined &&
            (obj.clientConnectionCheckInterval =
                message.clientConnectionCheckInterval);
        message.enableAsyncAppend !== undefined &&
            (obj.enableAsyncAppend = message.enableAsyncAppend);
        message.enableGathermerge !== undefined &&
            (obj.enableGathermerge = message.enableGathermerge);
        message.enableMemoize !== undefined &&
            (obj.enableMemoize = message.enableMemoize);
        message.logRecoveryConflictWaits !== undefined &&
            (obj.logRecoveryConflictWaits = message.logRecoveryConflictWaits);
        message.vacuumFailsafeAge !== undefined &&
            (obj.vacuumFailsafeAge = message.vacuumFailsafeAge);
        message.vacuumMultixactFailsafeAge !== undefined &&
            (obj.vacuumMultixactFailsafeAge = message.vacuumMultixactFailsafeAge);
        message.pgQualstatsEnabled !== undefined &&
            (obj.pgQualstatsEnabled = message.pgQualstatsEnabled);
        message.pgQualstatsTrackConstants !== undefined &&
            (obj.pgQualstatsTrackConstants = message.pgQualstatsTrackConstants);
        message.pgQualstatsMax !== undefined &&
            (obj.pgQualstatsMax = message.pgQualstatsMax);
        message.pgQualstatsResolveOids !== undefined &&
            (obj.pgQualstatsResolveOids = message.pgQualstatsResolveOids);
        message.pgQualstatsSampleRate !== undefined &&
            (obj.pgQualstatsSampleRate = message.pgQualstatsSampleRate);
        message.plantunerFixEmptyTable !== undefined &&
            (obj.plantunerFixEmptyTable = message.plantunerFixEmptyTable);
        message.geqo !== undefined && (obj.geqo = message.geqo);
        message.geqoThreshold !== undefined &&
            (obj.geqoThreshold = message.geqoThreshold);
        message.geqoEffort !== undefined && (obj.geqoEffort = message.geqoEffort);
        message.geqoPoolSize !== undefined &&
            (obj.geqoPoolSize = message.geqoPoolSize);
        message.geqoGenerations !== undefined &&
            (obj.geqoGenerations = message.geqoGenerations);
        message.geqoSelectionBias !== undefined &&
            (obj.geqoSelectionBias = message.geqoSelectionBias);
        message.geqoSeed !== undefined && (obj.geqoSeed = message.geqoSeed);
        message.pgTrgmSimilarityThreshold !== undefined &&
            (obj.pgTrgmSimilarityThreshold = message.pgTrgmSimilarityThreshold);
        message.pgTrgmWordSimilarityThreshold !== undefined &&
            (obj.pgTrgmWordSimilarityThreshold =
                message.pgTrgmWordSimilarityThreshold);
        message.pgTrgmStrictWordSimilarityThreshold !== undefined &&
            (obj.pgTrgmStrictWordSimilarityThreshold =
                message.pgTrgmStrictWordSimilarityThreshold);
        message.maxStandbyArchiveDelay !== undefined &&
            (obj.maxStandbyArchiveDelay = message.maxStandbyArchiveDelay);
        message.sessionDurationTimeout !== undefined &&
            (obj.sessionDurationTimeout = message.sessionDurationTimeout);
        message.logReplicationCommands !== undefined &&
            (obj.logReplicationCommands = message.logReplicationCommands);
        message.logAutovacuumMinDuration !== undefined &&
            (obj.logAutovacuumMinDuration = message.logAutovacuumMinDuration);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134;
        const message = Object.assign({}, basePostgresqlconfig141c);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.sharedBuffers = (_b = object.sharedBuffers) !== null && _b !== void 0 ? _b : undefined;
        message.tempBuffers = (_c = object.tempBuffers) !== null && _c !== void 0 ? _c : undefined;
        message.maxPreparedTransactions =
            (_d = object.maxPreparedTransactions) !== null && _d !== void 0 ? _d : undefined;
        message.workMem = (_e = object.workMem) !== null && _e !== void 0 ? _e : undefined;
        message.maintenanceWorkMem = (_f = object.maintenanceWorkMem) !== null && _f !== void 0 ? _f : undefined;
        message.autovacuumWorkMem = (_g = object.autovacuumWorkMem) !== null && _g !== void 0 ? _g : undefined;
        message.tempFileLimit = (_h = object.tempFileLimit) !== null && _h !== void 0 ? _h : undefined;
        message.vacuumCostDelay = (_j = object.vacuumCostDelay) !== null && _j !== void 0 ? _j : undefined;
        message.vacuumCostPageHit = (_k = object.vacuumCostPageHit) !== null && _k !== void 0 ? _k : undefined;
        message.vacuumCostPageMiss = (_l = object.vacuumCostPageMiss) !== null && _l !== void 0 ? _l : undefined;
        message.vacuumCostPageDirty = (_m = object.vacuumCostPageDirty) !== null && _m !== void 0 ? _m : undefined;
        message.vacuumCostLimit = (_o = object.vacuumCostLimit) !== null && _o !== void 0 ? _o : undefined;
        message.bgwriterDelay = (_p = object.bgwriterDelay) !== null && _p !== void 0 ? _p : undefined;
        message.bgwriterLruMaxpages = (_q = object.bgwriterLruMaxpages) !== null && _q !== void 0 ? _q : undefined;
        message.bgwriterLruMultiplier = (_r = object.bgwriterLruMultiplier) !== null && _r !== void 0 ? _r : undefined;
        message.bgwriterFlushAfter = (_s = object.bgwriterFlushAfter) !== null && _s !== void 0 ? _s : undefined;
        message.backendFlushAfter = (_t = object.backendFlushAfter) !== null && _t !== void 0 ? _t : undefined;
        message.oldSnapshotThreshold = (_u = object.oldSnapshotThreshold) !== null && _u !== void 0 ? _u : undefined;
        message.walLevel = (_v = object.walLevel) !== null && _v !== void 0 ? _v : 0;
        message.synchronousCommit = (_w = object.synchronousCommit) !== null && _w !== void 0 ? _w : 0;
        message.checkpointTimeout = (_x = object.checkpointTimeout) !== null && _x !== void 0 ? _x : undefined;
        message.checkpointCompletionTarget =
            (_y = object.checkpointCompletionTarget) !== null && _y !== void 0 ? _y : undefined;
        message.checkpointFlushAfter = (_z = object.checkpointFlushAfter) !== null && _z !== void 0 ? _z : undefined;
        message.maxWalSize = (_0 = object.maxWalSize) !== null && _0 !== void 0 ? _0 : undefined;
        message.minWalSize = (_1 = object.minWalSize) !== null && _1 !== void 0 ? _1 : undefined;
        message.maxStandbyStreamingDelay =
            (_2 = object.maxStandbyStreamingDelay) !== null && _2 !== void 0 ? _2 : undefined;
        message.defaultStatisticsTarget =
            (_3 = object.defaultStatisticsTarget) !== null && _3 !== void 0 ? _3 : undefined;
        message.constraintExclusion = (_4 = object.constraintExclusion) !== null && _4 !== void 0 ? _4 : 0;
        message.cursorTupleFraction = (_5 = object.cursorTupleFraction) !== null && _5 !== void 0 ? _5 : undefined;
        message.fromCollapseLimit = (_6 = object.fromCollapseLimit) !== null && _6 !== void 0 ? _6 : undefined;
        message.joinCollapseLimit = (_7 = object.joinCollapseLimit) !== null && _7 !== void 0 ? _7 : undefined;
        message.forceParallelMode = (_8 = object.forceParallelMode) !== null && _8 !== void 0 ? _8 : 0;
        message.clientMinMessages = (_9 = object.clientMinMessages) !== null && _9 !== void 0 ? _9 : 0;
        message.logMinMessages = (_10 = object.logMinMessages) !== null && _10 !== void 0 ? _10 : 0;
        message.logMinErrorStatement = (_11 = object.logMinErrorStatement) !== null && _11 !== void 0 ? _11 : 0;
        message.logMinDurationStatement =
            (_12 = object.logMinDurationStatement) !== null && _12 !== void 0 ? _12 : undefined;
        message.logCheckpoints = (_13 = object.logCheckpoints) !== null && _13 !== void 0 ? _13 : undefined;
        message.logConnections = (_14 = object.logConnections) !== null && _14 !== void 0 ? _14 : undefined;
        message.logDisconnections = (_15 = object.logDisconnections) !== null && _15 !== void 0 ? _15 : undefined;
        message.logDuration = (_16 = object.logDuration) !== null && _16 !== void 0 ? _16 : undefined;
        message.logErrorVerbosity = (_17 = object.logErrorVerbosity) !== null && _17 !== void 0 ? _17 : 0;
        message.logLockWaits = (_18 = object.logLockWaits) !== null && _18 !== void 0 ? _18 : undefined;
        message.logStatement = (_19 = object.logStatement) !== null && _19 !== void 0 ? _19 : 0;
        message.logTempFiles = (_20 = object.logTempFiles) !== null && _20 !== void 0 ? _20 : undefined;
        message.searchPath = (_21 = object.searchPath) !== null && _21 !== void 0 ? _21 : "";
        message.rowSecurity = (_22 = object.rowSecurity) !== null && _22 !== void 0 ? _22 : undefined;
        message.defaultTransactionIsolation =
            (_23 = object.defaultTransactionIsolation) !== null && _23 !== void 0 ? _23 : 0;
        message.statementTimeout = (_24 = object.statementTimeout) !== null && _24 !== void 0 ? _24 : undefined;
        message.lockTimeout = (_25 = object.lockTimeout) !== null && _25 !== void 0 ? _25 : undefined;
        message.idleInTransactionSessionTimeout =
            (_26 = object.idleInTransactionSessionTimeout) !== null && _26 !== void 0 ? _26 : undefined;
        message.byteaOutput = (_27 = object.byteaOutput) !== null && _27 !== void 0 ? _27 : 0;
        message.xmlbinary = (_28 = object.xmlbinary) !== null && _28 !== void 0 ? _28 : 0;
        message.xmloption = (_29 = object.xmloption) !== null && _29 !== void 0 ? _29 : 0;
        message.ginPendingListLimit = (_30 = object.ginPendingListLimit) !== null && _30 !== void 0 ? _30 : undefined;
        message.deadlockTimeout = (_31 = object.deadlockTimeout) !== null && _31 !== void 0 ? _31 : undefined;
        message.maxLocksPerTransaction = (_32 = object.maxLocksPerTransaction) !== null && _32 !== void 0 ? _32 : undefined;
        message.maxPredLocksPerTransaction =
            (_33 = object.maxPredLocksPerTransaction) !== null && _33 !== void 0 ? _33 : undefined;
        message.arrayNulls = (_34 = object.arrayNulls) !== null && _34 !== void 0 ? _34 : undefined;
        message.backslashQuote = (_35 = object.backslashQuote) !== null && _35 !== void 0 ? _35 : 0;
        message.defaultWithOids = (_36 = object.defaultWithOids) !== null && _36 !== void 0 ? _36 : undefined;
        message.escapeStringWarning = (_37 = object.escapeStringWarning) !== null && _37 !== void 0 ? _37 : undefined;
        message.loCompatPrivileges = (_38 = object.loCompatPrivileges) !== null && _38 !== void 0 ? _38 : undefined;
        message.quoteAllIdentifiers = (_39 = object.quoteAllIdentifiers) !== null && _39 !== void 0 ? _39 : undefined;
        message.standardConformingStrings =
            (_40 = object.standardConformingStrings) !== null && _40 !== void 0 ? _40 : undefined;
        message.synchronizeSeqscans = (_41 = object.synchronizeSeqscans) !== null && _41 !== void 0 ? _41 : undefined;
        message.transformNullEquals = (_42 = object.transformNullEquals) !== null && _42 !== void 0 ? _42 : undefined;
        message.exitOnError = (_43 = object.exitOnError) !== null && _43 !== void 0 ? _43 : undefined;
        message.seqPageCost = (_44 = object.seqPageCost) !== null && _44 !== void 0 ? _44 : undefined;
        message.randomPageCost = (_45 = object.randomPageCost) !== null && _45 !== void 0 ? _45 : undefined;
        message.autovacuumMaxWorkers = (_46 = object.autovacuumMaxWorkers) !== null && _46 !== void 0 ? _46 : undefined;
        message.autovacuumVacuumCostDelay =
            (_47 = object.autovacuumVacuumCostDelay) !== null && _47 !== void 0 ? _47 : undefined;
        message.autovacuumVacuumCostLimit =
            (_48 = object.autovacuumVacuumCostLimit) !== null && _48 !== void 0 ? _48 : undefined;
        message.autovacuumNaptime = (_49 = object.autovacuumNaptime) !== null && _49 !== void 0 ? _49 : undefined;
        message.archiveTimeout = (_50 = object.archiveTimeout) !== null && _50 !== void 0 ? _50 : undefined;
        message.trackActivityQuerySize = (_51 = object.trackActivityQuerySize) !== null && _51 !== void 0 ? _51 : undefined;
        message.onlineAnalyzeEnable = (_52 = object.onlineAnalyzeEnable) !== null && _52 !== void 0 ? _52 : undefined;
        message.enableBitmapscan = (_53 = object.enableBitmapscan) !== null && _53 !== void 0 ? _53 : undefined;
        message.enableHashagg = (_54 = object.enableHashagg) !== null && _54 !== void 0 ? _54 : undefined;
        message.enableHashjoin = (_55 = object.enableHashjoin) !== null && _55 !== void 0 ? _55 : undefined;
        message.enableIndexscan = (_56 = object.enableIndexscan) !== null && _56 !== void 0 ? _56 : undefined;
        message.enableIndexonlyscan = (_57 = object.enableIndexonlyscan) !== null && _57 !== void 0 ? _57 : undefined;
        message.enableMaterial = (_58 = object.enableMaterial) !== null && _58 !== void 0 ? _58 : undefined;
        message.enableMergejoin = (_59 = object.enableMergejoin) !== null && _59 !== void 0 ? _59 : undefined;
        message.enableNestloop = (_60 = object.enableNestloop) !== null && _60 !== void 0 ? _60 : undefined;
        message.enableSeqscan = (_61 = object.enableSeqscan) !== null && _61 !== void 0 ? _61 : undefined;
        message.enableSort = (_62 = object.enableSort) !== null && _62 !== void 0 ? _62 : undefined;
        message.enableTidscan = (_63 = object.enableTidscan) !== null && _63 !== void 0 ? _63 : undefined;
        message.maxWorkerProcesses = (_64 = object.maxWorkerProcesses) !== null && _64 !== void 0 ? _64 : undefined;
        message.maxParallelWorkers = (_65 = object.maxParallelWorkers) !== null && _65 !== void 0 ? _65 : undefined;
        message.maxParallelWorkersPerGather =
            (_66 = object.maxParallelWorkersPerGather) !== null && _66 !== void 0 ? _66 : undefined;
        message.autovacuumVacuumScaleFactor =
            (_67 = object.autovacuumVacuumScaleFactor) !== null && _67 !== void 0 ? _67 : undefined;
        message.autovacuumAnalyzeScaleFactor =
            (_68 = object.autovacuumAnalyzeScaleFactor) !== null && _68 !== void 0 ? _68 : undefined;
        message.defaultTransactionReadOnly =
            (_69 = object.defaultTransactionReadOnly) !== null && _69 !== void 0 ? _69 : undefined;
        message.timezone = (_70 = object.timezone) !== null && _70 !== void 0 ? _70 : "";
        message.enableParallelAppend = (_71 = object.enableParallelAppend) !== null && _71 !== void 0 ? _71 : undefined;
        message.enableParallelHash = (_72 = object.enableParallelHash) !== null && _72 !== void 0 ? _72 : undefined;
        message.enablePartitionPruning = (_73 = object.enablePartitionPruning) !== null && _73 !== void 0 ? _73 : undefined;
        message.enablePartitionwiseAggregate =
            (_74 = object.enablePartitionwiseAggregate) !== null && _74 !== void 0 ? _74 : undefined;
        message.enablePartitionwiseJoin =
            (_75 = object.enablePartitionwiseJoin) !== null && _75 !== void 0 ? _75 : undefined;
        message.jit = (_76 = object.jit) !== null && _76 !== void 0 ? _76 : undefined;
        message.maxParallelMaintenanceWorkers =
            (_77 = object.maxParallelMaintenanceWorkers) !== null && _77 !== void 0 ? _77 : undefined;
        message.parallelLeaderParticipation =
            (_78 = object.parallelLeaderParticipation) !== null && _78 !== void 0 ? _78 : undefined;
        message.logTransactionSampleRate =
            (_79 = object.logTransactionSampleRate) !== null && _79 !== void 0 ? _79 : undefined;
        message.planCacheMode = (_80 = object.planCacheMode) !== null && _80 !== void 0 ? _80 : 0;
        message.effectiveIoConcurrency = (_81 = object.effectiveIoConcurrency) !== null && _81 !== void 0 ? _81 : undefined;
        message.effectiveCacheSize = (_82 = object.effectiveCacheSize) !== null && _82 !== void 0 ? _82 : undefined;
        message.sharedPreloadLibraries =
            ((_83 = object.sharedPreloadLibraries) === null || _83 === void 0 ? void 0 : _83.map((e) => e)) || [];
        message.autoExplainLogMinDuration =
            (_84 = object.autoExplainLogMinDuration) !== null && _84 !== void 0 ? _84 : undefined;
        message.autoExplainLogAnalyze = (_85 = object.autoExplainLogAnalyze) !== null && _85 !== void 0 ? _85 : undefined;
        message.autoExplainLogBuffers = (_86 = object.autoExplainLogBuffers) !== null && _86 !== void 0 ? _86 : undefined;
        message.autoExplainLogTiming = (_87 = object.autoExplainLogTiming) !== null && _87 !== void 0 ? _87 : undefined;
        message.autoExplainLogTriggers = (_88 = object.autoExplainLogTriggers) !== null && _88 !== void 0 ? _88 : undefined;
        message.autoExplainLogVerbose = (_89 = object.autoExplainLogVerbose) !== null && _89 !== void 0 ? _89 : undefined;
        message.autoExplainLogNestedStatements =
            (_90 = object.autoExplainLogNestedStatements) !== null && _90 !== void 0 ? _90 : undefined;
        message.autoExplainSampleRate = (_91 = object.autoExplainSampleRate) !== null && _91 !== void 0 ? _91 : undefined;
        message.pgHintPlanEnableHint = (_92 = object.pgHintPlanEnableHint) !== null && _92 !== void 0 ? _92 : undefined;
        message.pgHintPlanEnableHintTable =
            (_93 = object.pgHintPlanEnableHintTable) !== null && _93 !== void 0 ? _93 : undefined;
        message.pgHintPlanDebugPrint = (_94 = object.pgHintPlanDebugPrint) !== null && _94 !== void 0 ? _94 : 0;
        message.pgHintPlanMessageLevel = (_95 = object.pgHintPlanMessageLevel) !== null && _95 !== void 0 ? _95 : 0;
        message.hashMemMultiplier = (_96 = object.hashMemMultiplier) !== null && _96 !== void 0 ? _96 : undefined;
        message.logicalDecodingWorkMem = (_97 = object.logicalDecodingWorkMem) !== null && _97 !== void 0 ? _97 : undefined;
        message.maintenanceIoConcurrency =
            (_98 = object.maintenanceIoConcurrency) !== null && _98 !== void 0 ? _98 : undefined;
        message.maxSlotWalKeepSize = (_99 = object.maxSlotWalKeepSize) !== null && _99 !== void 0 ? _99 : undefined;
        message.walKeepSize = (_100 = object.walKeepSize) !== null && _100 !== void 0 ? _100 : undefined;
        message.enableIncrementalSort = (_101 = object.enableIncrementalSort) !== null && _101 !== void 0 ? _101 : undefined;
        message.autovacuumVacuumInsertThreshold =
            (_102 = object.autovacuumVacuumInsertThreshold) !== null && _102 !== void 0 ? _102 : undefined;
        message.autovacuumVacuumInsertScaleFactor =
            (_103 = object.autovacuumVacuumInsertScaleFactor) !== null && _103 !== void 0 ? _103 : undefined;
        message.logMinDurationSample = (_104 = object.logMinDurationSample) !== null && _104 !== void 0 ? _104 : undefined;
        message.logStatementSampleRate = (_105 = object.logStatementSampleRate) !== null && _105 !== void 0 ? _105 : undefined;
        message.logParameterMaxLength = (_106 = object.logParameterMaxLength) !== null && _106 !== void 0 ? _106 : undefined;
        message.logParameterMaxLengthOnError =
            (_107 = object.logParameterMaxLengthOnError) !== null && _107 !== void 0 ? _107 : undefined;
        message.clientConnectionCheckInterval =
            (_108 = object.clientConnectionCheckInterval) !== null && _108 !== void 0 ? _108 : undefined;
        message.enableAsyncAppend = (_109 = object.enableAsyncAppend) !== null && _109 !== void 0 ? _109 : undefined;
        message.enableGathermerge = (_110 = object.enableGathermerge) !== null && _110 !== void 0 ? _110 : undefined;
        message.enableMemoize = (_111 = object.enableMemoize) !== null && _111 !== void 0 ? _111 : undefined;
        message.logRecoveryConflictWaits =
            (_112 = object.logRecoveryConflictWaits) !== null && _112 !== void 0 ? _112 : undefined;
        message.vacuumFailsafeAge = (_113 = object.vacuumFailsafeAge) !== null && _113 !== void 0 ? _113 : undefined;
        message.vacuumMultixactFailsafeAge =
            (_114 = object.vacuumMultixactFailsafeAge) !== null && _114 !== void 0 ? _114 : undefined;
        message.pgQualstatsEnabled = (_115 = object.pgQualstatsEnabled) !== null && _115 !== void 0 ? _115 : undefined;
        message.pgQualstatsTrackConstants =
            (_116 = object.pgQualstatsTrackConstants) !== null && _116 !== void 0 ? _116 : undefined;
        message.pgQualstatsMax = (_117 = object.pgQualstatsMax) !== null && _117 !== void 0 ? _117 : undefined;
        message.pgQualstatsResolveOids = (_118 = object.pgQualstatsResolveOids) !== null && _118 !== void 0 ? _118 : undefined;
        message.pgQualstatsSampleRate = (_119 = object.pgQualstatsSampleRate) !== null && _119 !== void 0 ? _119 : undefined;
        message.plantunerFixEmptyTable = (_120 = object.plantunerFixEmptyTable) !== null && _120 !== void 0 ? _120 : undefined;
        message.geqo = (_121 = object.geqo) !== null && _121 !== void 0 ? _121 : undefined;
        message.geqoThreshold = (_122 = object.geqoThreshold) !== null && _122 !== void 0 ? _122 : undefined;
        message.geqoEffort = (_123 = object.geqoEffort) !== null && _123 !== void 0 ? _123 : undefined;
        message.geqoPoolSize = (_124 = object.geqoPoolSize) !== null && _124 !== void 0 ? _124 : undefined;
        message.geqoGenerations = (_125 = object.geqoGenerations) !== null && _125 !== void 0 ? _125 : undefined;
        message.geqoSelectionBias = (_126 = object.geqoSelectionBias) !== null && _126 !== void 0 ? _126 : undefined;
        message.geqoSeed = (_127 = object.geqoSeed) !== null && _127 !== void 0 ? _127 : undefined;
        message.pgTrgmSimilarityThreshold =
            (_128 = object.pgTrgmSimilarityThreshold) !== null && _128 !== void 0 ? _128 : undefined;
        message.pgTrgmWordSimilarityThreshold =
            (_129 = object.pgTrgmWordSimilarityThreshold) !== null && _129 !== void 0 ? _129 : undefined;
        message.pgTrgmStrictWordSimilarityThreshold =
            (_130 = object.pgTrgmStrictWordSimilarityThreshold) !== null && _130 !== void 0 ? _130 : undefined;
        message.maxStandbyArchiveDelay = (_131 = object.maxStandbyArchiveDelay) !== null && _131 !== void 0 ? _131 : undefined;
        message.sessionDurationTimeout = (_132 = object.sessionDurationTimeout) !== null && _132 !== void 0 ? _132 : undefined;
        message.logReplicationCommands = (_133 = object.logReplicationCommands) !== null && _133 !== void 0 ? _133 : undefined;
        message.logAutovacuumMinDuration =
            (_134 = object.logAutovacuumMinDuration) !== null && _134 !== void 0 ? _134 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Postgresqlconfig141c.$type, exports.Postgresqlconfig141c);
const basePostgresqlconfigset141c = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet14_1C",
};
exports.Postgresqlconfigset141c = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet14_1C",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Postgresqlconfig141c.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Postgresqlconfig141c.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Postgresqlconfig141c.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlconfigset141c);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Postgresqlconfig141c.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Postgresqlconfig141c.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Postgresqlconfig141c.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresqlconfigset141c);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Postgresqlconfig141c.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Postgresqlconfig141c.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Postgresqlconfig141c.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Postgresqlconfig141c.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Postgresqlconfig141c.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Postgresqlconfig141c.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePostgresqlconfigset141c);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Postgresqlconfig141c.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Postgresqlconfig141c.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Postgresqlconfig141c.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Postgresqlconfigset141c.$type, exports.Postgresqlconfigset141c);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
