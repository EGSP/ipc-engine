"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresqlConfigSet10 = exports.PostgresqlConfig10 = exports.postgresqlConfig10_SharedPreloadLibrariesToJSON = exports.postgresqlConfig10_SharedPreloadLibrariesFromJSON = exports.PostgresqlConfig10_SharedPreloadLibraries = exports.postgresqlConfig10_PgHintPlanDebugPrintToJSON = exports.postgresqlConfig10_PgHintPlanDebugPrintFromJSON = exports.PostgresqlConfig10_PgHintPlanDebugPrint = exports.postgresqlConfig10_BackslashQuoteToJSON = exports.postgresqlConfig10_BackslashQuoteFromJSON = exports.PostgresqlConfig10_BackslashQuote = exports.postgresqlConfig10_XmlOptionToJSON = exports.postgresqlConfig10_XmlOptionFromJSON = exports.PostgresqlConfig10_XmlOption = exports.postgresqlConfig10_XmlBinaryToJSON = exports.postgresqlConfig10_XmlBinaryFromJSON = exports.PostgresqlConfig10_XmlBinary = exports.postgresqlConfig10_ByteaOutputToJSON = exports.postgresqlConfig10_ByteaOutputFromJSON = exports.PostgresqlConfig10_ByteaOutput = exports.postgresqlConfig10_TransactionIsolationToJSON = exports.postgresqlConfig10_TransactionIsolationFromJSON = exports.PostgresqlConfig10_TransactionIsolation = exports.postgresqlConfig10_LogStatementToJSON = exports.postgresqlConfig10_LogStatementFromJSON = exports.PostgresqlConfig10_LogStatement = exports.postgresqlConfig10_LogLevelToJSON = exports.postgresqlConfig10_LogLevelFromJSON = exports.PostgresqlConfig10_LogLevel = exports.postgresqlConfig10_LogErrorVerbosityToJSON = exports.postgresqlConfig10_LogErrorVerbosityFromJSON = exports.PostgresqlConfig10_LogErrorVerbosity = exports.postgresqlConfig10_ForceParallelModeToJSON = exports.postgresqlConfig10_ForceParallelModeFromJSON = exports.PostgresqlConfig10_ForceParallelMode = exports.postgresqlConfig10_ConstraintExclusionToJSON = exports.postgresqlConfig10_ConstraintExclusionFromJSON = exports.PostgresqlConfig10_ConstraintExclusion = exports.postgresqlConfig10_SynchronousCommitToJSON = exports.postgresqlConfig10_SynchronousCommitFromJSON = exports.PostgresqlConfig10_SynchronousCommit = exports.postgresqlConfig10_WalLevelToJSON = exports.postgresqlConfig10_WalLevelFromJSON = exports.PostgresqlConfig10_WalLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
var PostgresqlConfig10_WalLevel;
(function (PostgresqlConfig10_WalLevel) {
    PostgresqlConfig10_WalLevel[PostgresqlConfig10_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    PostgresqlConfig10_WalLevel[PostgresqlConfig10_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    PostgresqlConfig10_WalLevel[PostgresqlConfig10_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    PostgresqlConfig10_WalLevel[PostgresqlConfig10_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_WalLevel = exports.PostgresqlConfig10_WalLevel || (exports.PostgresqlConfig10_WalLevel = {}));
function postgresqlConfig10_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "WAL_LEVEL_UNSPECIFIED":
            return PostgresqlConfig10_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case "WAL_LEVEL_REPLICA":
            return PostgresqlConfig10_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case "WAL_LEVEL_LOGICAL":
            return PostgresqlConfig10_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_WalLevel.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_WalLevelFromJSON = postgresqlConfig10_WalLevelFromJSON;
function postgresqlConfig10_WalLevelToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return "WAL_LEVEL_UNSPECIFIED";
        case PostgresqlConfig10_WalLevel.WAL_LEVEL_REPLICA:
            return "WAL_LEVEL_REPLICA";
        case PostgresqlConfig10_WalLevel.WAL_LEVEL_LOGICAL:
            return "WAL_LEVEL_LOGICAL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_WalLevelToJSON = postgresqlConfig10_WalLevelToJSON;
var PostgresqlConfig10_SynchronousCommit;
(function (PostgresqlConfig10_SynchronousCommit) {
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    PostgresqlConfig10_SynchronousCommit[PostgresqlConfig10_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_SynchronousCommit = exports.PostgresqlConfig10_SynchronousCommit || (exports.PostgresqlConfig10_SynchronousCommit = {}));
function postgresqlConfig10_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case "SYNCHRONOUS_COMMIT_ON":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case "SYNCHRONOUS_COMMIT_OFF":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case "SYNCHRONOUS_COMMIT_LOCAL":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
            return PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_SynchronousCommit.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_SynchronousCommitFromJSON = postgresqlConfig10_SynchronousCommitFromJSON;
function postgresqlConfig10_SynchronousCommitToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return "SYNCHRONOUS_COMMIT_ON";
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return "SYNCHRONOUS_COMMIT_OFF";
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return "SYNCHRONOUS_COMMIT_LOCAL";
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
        case PostgresqlConfig10_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_SynchronousCommitToJSON = postgresqlConfig10_SynchronousCommitToJSON;
var PostgresqlConfig10_ConstraintExclusion;
(function (PostgresqlConfig10_ConstraintExclusion) {
    PostgresqlConfig10_ConstraintExclusion[PostgresqlConfig10_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    PostgresqlConfig10_ConstraintExclusion[PostgresqlConfig10_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    PostgresqlConfig10_ConstraintExclusion[PostgresqlConfig10_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    PostgresqlConfig10_ConstraintExclusion[PostgresqlConfig10_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    PostgresqlConfig10_ConstraintExclusion[PostgresqlConfig10_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_ConstraintExclusion = exports.PostgresqlConfig10_ConstraintExclusion || (exports.PostgresqlConfig10_ConstraintExclusion = {}));
function postgresqlConfig10_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
            return PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case "CONSTRAINT_EXCLUSION_ON":
            return PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case "CONSTRAINT_EXCLUSION_OFF":
            return PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case "CONSTRAINT_EXCLUSION_PARTITION":
            return PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_ConstraintExclusionFromJSON = postgresqlConfig10_ConstraintExclusionFromJSON;
function postgresqlConfig10_ConstraintExclusionToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
        case PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return "CONSTRAINT_EXCLUSION_ON";
        case PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return "CONSTRAINT_EXCLUSION_OFF";
        case PostgresqlConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return "CONSTRAINT_EXCLUSION_PARTITION";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_ConstraintExclusionToJSON = postgresqlConfig10_ConstraintExclusionToJSON;
var PostgresqlConfig10_ForceParallelMode;
(function (PostgresqlConfig10_ForceParallelMode) {
    PostgresqlConfig10_ForceParallelMode[PostgresqlConfig10_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    PostgresqlConfig10_ForceParallelMode[PostgresqlConfig10_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    PostgresqlConfig10_ForceParallelMode[PostgresqlConfig10_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    PostgresqlConfig10_ForceParallelMode[PostgresqlConfig10_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    PostgresqlConfig10_ForceParallelMode[PostgresqlConfig10_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_ForceParallelMode = exports.PostgresqlConfig10_ForceParallelMode || (exports.PostgresqlConfig10_ForceParallelMode = {}));
function postgresqlConfig10_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORCE_PARALLEL_MODE_UNSPECIFIED":
            return PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case "FORCE_PARALLEL_MODE_ON":
            return PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case "FORCE_PARALLEL_MODE_OFF":
            return PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case "FORCE_PARALLEL_MODE_REGRESS":
            return PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_ForceParallelModeFromJSON = postgresqlConfig10_ForceParallelModeFromJSON;
function postgresqlConfig10_ForceParallelModeToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return "FORCE_PARALLEL_MODE_UNSPECIFIED";
        case PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return "FORCE_PARALLEL_MODE_ON";
        case PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return "FORCE_PARALLEL_MODE_OFF";
        case PostgresqlConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return "FORCE_PARALLEL_MODE_REGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_ForceParallelModeToJSON = postgresqlConfig10_ForceParallelModeToJSON;
var PostgresqlConfig10_LogErrorVerbosity;
(function (PostgresqlConfig10_LogErrorVerbosity) {
    PostgresqlConfig10_LogErrorVerbosity[PostgresqlConfig10_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    PostgresqlConfig10_LogErrorVerbosity[PostgresqlConfig10_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    PostgresqlConfig10_LogErrorVerbosity[PostgresqlConfig10_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    PostgresqlConfig10_LogErrorVerbosity[PostgresqlConfig10_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    PostgresqlConfig10_LogErrorVerbosity[PostgresqlConfig10_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_LogErrorVerbosity = exports.PostgresqlConfig10_LogErrorVerbosity || (exports.PostgresqlConfig10_LogErrorVerbosity = {}));
function postgresqlConfig10_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
            return PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case "LOG_ERROR_VERBOSITY_TERSE":
            return PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case "LOG_ERROR_VERBOSITY_DEFAULT":
            return PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case "LOG_ERROR_VERBOSITY_VERBOSE":
            return PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_LogErrorVerbosityFromJSON = postgresqlConfig10_LogErrorVerbosityFromJSON;
function postgresqlConfig10_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
        case PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return "LOG_ERROR_VERBOSITY_TERSE";
        case PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return "LOG_ERROR_VERBOSITY_DEFAULT";
        case PostgresqlConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return "LOG_ERROR_VERBOSITY_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_LogErrorVerbosityToJSON = postgresqlConfig10_LogErrorVerbosityToJSON;
var PostgresqlConfig10_LogLevel;
(function (PostgresqlConfig10_LogLevel) {
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    PostgresqlConfig10_LogLevel[PostgresqlConfig10_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_LogLevel = exports.PostgresqlConfig10_LogLevel || (exports.PostgresqlConfig10_LogLevel = {}));
function postgresqlConfig10_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "LOG_LEVEL_DEBUG5":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case "LOG_LEVEL_DEBUG4":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case "LOG_LEVEL_DEBUG3":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case "LOG_LEVEL_DEBUG2":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case "LOG_LEVEL_DEBUG1":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case "LOG_LEVEL_LOG":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case "LOG_LEVEL_NOTICE":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case "LOG_LEVEL_WARNING":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case "LOG_LEVEL_ERROR":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case "LOG_LEVEL_FATAL":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case "LOG_LEVEL_PANIC":
            return PostgresqlConfig10_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_LogLevelFromJSON = postgresqlConfig10_LogLevelFromJSON;
function postgresqlConfig10_LogLevelToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG5:
            return "LOG_LEVEL_DEBUG5";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG4:
            return "LOG_LEVEL_DEBUG4";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG3:
            return "LOG_LEVEL_DEBUG3";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG2:
            return "LOG_LEVEL_DEBUG2";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_DEBUG1:
            return "LOG_LEVEL_DEBUG1";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_LOG:
            return "LOG_LEVEL_LOG";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_NOTICE:
            return "LOG_LEVEL_NOTICE";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_WARNING:
            return "LOG_LEVEL_WARNING";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_ERROR:
            return "LOG_LEVEL_ERROR";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_FATAL:
            return "LOG_LEVEL_FATAL";
        case PostgresqlConfig10_LogLevel.LOG_LEVEL_PANIC:
            return "LOG_LEVEL_PANIC";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_LogLevelToJSON = postgresqlConfig10_LogLevelToJSON;
var PostgresqlConfig10_LogStatement;
(function (PostgresqlConfig10_LogStatement) {
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    PostgresqlConfig10_LogStatement[PostgresqlConfig10_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_LogStatement = exports.PostgresqlConfig10_LogStatement || (exports.PostgresqlConfig10_LogStatement = {}));
function postgresqlConfig10_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return PostgresqlConfig10_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return PostgresqlConfig10_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return PostgresqlConfig10_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return PostgresqlConfig10_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return PostgresqlConfig10_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_LogStatementFromJSON = postgresqlConfig10_LogStatementFromJSON;
function postgresqlConfig10_LogStatementToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case PostgresqlConfig10_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case PostgresqlConfig10_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case PostgresqlConfig10_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case PostgresqlConfig10_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_LogStatementToJSON = postgresqlConfig10_LogStatementToJSON;
var PostgresqlConfig10_TransactionIsolation;
(function (PostgresqlConfig10_TransactionIsolation) {
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    PostgresqlConfig10_TransactionIsolation[PostgresqlConfig10_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_TransactionIsolation = exports.PostgresqlConfig10_TransactionIsolation || (exports.PostgresqlConfig10_TransactionIsolation = {}));
function postgresqlConfig10_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_TransactionIsolationFromJSON = postgresqlConfig10_TransactionIsolationFromJSON;
function postgresqlConfig10_TransactionIsolationToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case PostgresqlConfig10_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_TransactionIsolationToJSON = postgresqlConfig10_TransactionIsolationToJSON;
var PostgresqlConfig10_ByteaOutput;
(function (PostgresqlConfig10_ByteaOutput) {
    PostgresqlConfig10_ByteaOutput[PostgresqlConfig10_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    PostgresqlConfig10_ByteaOutput[PostgresqlConfig10_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    PostgresqlConfig10_ByteaOutput[PostgresqlConfig10_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    PostgresqlConfig10_ByteaOutput[PostgresqlConfig10_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_ByteaOutput = exports.PostgresqlConfig10_ByteaOutput || (exports.PostgresqlConfig10_ByteaOutput = {}));
function postgresqlConfig10_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case "BYTEA_OUTPUT_UNSPECIFIED":
            return PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case "BYTEA_OUTPUT_HEX":
            return PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case "BYTEA_OUTPUT_ESCAPED":
            return PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_ByteaOutputFromJSON = postgresqlConfig10_ByteaOutputFromJSON;
function postgresqlConfig10_ByteaOutputToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return "BYTEA_OUTPUT_UNSPECIFIED";
        case PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_HEX:
            return "BYTEA_OUTPUT_HEX";
        case PostgresqlConfig10_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return "BYTEA_OUTPUT_ESCAPED";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_ByteaOutputToJSON = postgresqlConfig10_ByteaOutputToJSON;
var PostgresqlConfig10_XmlBinary;
(function (PostgresqlConfig10_XmlBinary) {
    PostgresqlConfig10_XmlBinary[PostgresqlConfig10_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    PostgresqlConfig10_XmlBinary[PostgresqlConfig10_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    PostgresqlConfig10_XmlBinary[PostgresqlConfig10_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    PostgresqlConfig10_XmlBinary[PostgresqlConfig10_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_XmlBinary = exports.PostgresqlConfig10_XmlBinary || (exports.PostgresqlConfig10_XmlBinary = {}));
function postgresqlConfig10_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_BINARY_UNSPECIFIED":
            return PostgresqlConfig10_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case "XML_BINARY_BASE64":
            return PostgresqlConfig10_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case "XML_BINARY_HEX":
            return PostgresqlConfig10_XmlBinary.XML_BINARY_HEX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_XmlBinaryFromJSON = postgresqlConfig10_XmlBinaryFromJSON;
function postgresqlConfig10_XmlBinaryToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_XmlBinary.XML_BINARY_UNSPECIFIED:
            return "XML_BINARY_UNSPECIFIED";
        case PostgresqlConfig10_XmlBinary.XML_BINARY_BASE64:
            return "XML_BINARY_BASE64";
        case PostgresqlConfig10_XmlBinary.XML_BINARY_HEX:
            return "XML_BINARY_HEX";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_XmlBinaryToJSON = postgresqlConfig10_XmlBinaryToJSON;
var PostgresqlConfig10_XmlOption;
(function (PostgresqlConfig10_XmlOption) {
    PostgresqlConfig10_XmlOption[PostgresqlConfig10_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    PostgresqlConfig10_XmlOption[PostgresqlConfig10_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    PostgresqlConfig10_XmlOption[PostgresqlConfig10_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    PostgresqlConfig10_XmlOption[PostgresqlConfig10_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_XmlOption = exports.PostgresqlConfig10_XmlOption || (exports.PostgresqlConfig10_XmlOption = {}));
function postgresqlConfig10_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_OPTION_UNSPECIFIED":
            return PostgresqlConfig10_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case "XML_OPTION_DOCUMENT":
            return PostgresqlConfig10_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case "XML_OPTION_CONTENT":
            return PostgresqlConfig10_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_XmlOptionFromJSON = postgresqlConfig10_XmlOptionFromJSON;
function postgresqlConfig10_XmlOptionToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_XmlOption.XML_OPTION_UNSPECIFIED:
            return "XML_OPTION_UNSPECIFIED";
        case PostgresqlConfig10_XmlOption.XML_OPTION_DOCUMENT:
            return "XML_OPTION_DOCUMENT";
        case PostgresqlConfig10_XmlOption.XML_OPTION_CONTENT:
            return "XML_OPTION_CONTENT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_XmlOptionToJSON = postgresqlConfig10_XmlOptionToJSON;
var PostgresqlConfig10_BackslashQuote;
(function (PostgresqlConfig10_BackslashQuote) {
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    PostgresqlConfig10_BackslashQuote[PostgresqlConfig10_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_BackslashQuote = exports.PostgresqlConfig10_BackslashQuote || (exports.PostgresqlConfig10_BackslashQuote = {}));
function postgresqlConfig10_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKSLASH_QUOTE_UNSPECIFIED":
            return PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case "BACKSLASH_QUOTE":
            return PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case "BACKSLASH_QUOTE_ON":
            return PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case "BACKSLASH_QUOTE_OFF":
            return PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case "BACKSLASH_QUOTE_SAFE_ENCODING":
            return PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_BackslashQuoteFromJSON = postgresqlConfig10_BackslashQuoteFromJSON;
function postgresqlConfig10_BackslashQuoteToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return "BACKSLASH_QUOTE_UNSPECIFIED";
        case PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE:
            return "BACKSLASH_QUOTE";
        case PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_ON:
            return "BACKSLASH_QUOTE_ON";
        case PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return "BACKSLASH_QUOTE_OFF";
        case PostgresqlConfig10_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return "BACKSLASH_QUOTE_SAFE_ENCODING";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_BackslashQuoteToJSON = postgresqlConfig10_BackslashQuoteToJSON;
var PostgresqlConfig10_PgHintPlanDebugPrint;
(function (PostgresqlConfig10_PgHintPlanDebugPrint) {
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED"] = 0] = "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_OFF"] = 1] = "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_ON"] = 2] = "PG_HINT_PLAN_DEBUG_PRINT_ON";
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_DETAILED"] = 3] = "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_VERBOSE"] = 4] = "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    PostgresqlConfig10_PgHintPlanDebugPrint[PostgresqlConfig10_PgHintPlanDebugPrint["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_PgHintPlanDebugPrint = exports.PostgresqlConfig10_PgHintPlanDebugPrint || (exports.PostgresqlConfig10_PgHintPlanDebugPrint = {}));
function postgresqlConfig10_PgHintPlanDebugPrintFromJSON(object) {
    switch (object) {
        case 0:
        case "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED":
            return PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
        case 1:
        case "PG_HINT_PLAN_DEBUG_PRINT_OFF":
            return PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
        case 2:
        case "PG_HINT_PLAN_DEBUG_PRINT_ON":
            return PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
        case 3:
        case "PG_HINT_PLAN_DEBUG_PRINT_DETAILED":
            return PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
        case 4:
        case "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE":
            return PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_PgHintPlanDebugPrint.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_PgHintPlanDebugPrintFromJSON = postgresqlConfig10_PgHintPlanDebugPrintFromJSON;
function postgresqlConfig10_PgHintPlanDebugPrintToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
            return "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
        case PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
            return "PG_HINT_PLAN_DEBUG_PRINT_OFF";
        case PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
            return "PG_HINT_PLAN_DEBUG_PRINT_ON";
        case PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
            return "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
        case PostgresqlConfig10_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
            return "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_PgHintPlanDebugPrintToJSON = postgresqlConfig10_PgHintPlanDebugPrintToJSON;
var PostgresqlConfig10_SharedPreloadLibraries;
(function (PostgresqlConfig10_SharedPreloadLibraries) {
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_UNSPECIFIED"] = 0] = "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN"] = 1] = "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN"] = 2] = "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_TIMESCALEDB"] = 3] = "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS"] = 4] = "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_CRON"] = 5] = "SHARED_PRELOAD_LIBRARIES_PG_CRON";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PGLOGICAL"] = 6] = "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_PREWARM"] = 7] = "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PGAUDIT"] = 8] = "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
    PostgresqlConfig10_SharedPreloadLibraries[PostgresqlConfig10_SharedPreloadLibraries["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig10_SharedPreloadLibraries = exports.PostgresqlConfig10_SharedPreloadLibraries || (exports.PostgresqlConfig10_SharedPreloadLibraries = {}));
function postgresqlConfig10_SharedPreloadLibrariesFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
        case 1:
        case "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
        case 2:
        case "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
        case 3:
        case "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB;
        case 4:
        case "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS;
        case 5:
        case "SHARED_PRELOAD_LIBRARIES_PG_CRON":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON;
        case 6:
        case "SHARED_PRELOAD_LIBRARIES_PGLOGICAL":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL;
        case 7:
        case "SHARED_PRELOAD_LIBRARIES_PG_PREWARM":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM;
        case 8:
        case "SHARED_PRELOAD_LIBRARIES_PGAUDIT":
            return PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PostgresqlConfig10_SharedPreloadLibraries.UNRECOGNIZED;
    }
}
exports.postgresqlConfig10_SharedPreloadLibrariesFromJSON = postgresqlConfig10_SharedPreloadLibrariesFromJSON;
function postgresqlConfig10_SharedPreloadLibrariesToJSON(object) {
    switch (object) {
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
            return "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
            return "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
            return "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_TIMESCALEDB:
            return "SHARED_PRELOAD_LIBRARIES_TIMESCALEDB";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS:
            return "SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_CRON:
            return "SHARED_PRELOAD_LIBRARIES_PG_CRON";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGLOGICAL:
            return "SHARED_PRELOAD_LIBRARIES_PGLOGICAL";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_PREWARM:
            return "SHARED_PRELOAD_LIBRARIES_PG_PREWARM";
        case PostgresqlConfig10_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PGAUDIT:
            return "SHARED_PRELOAD_LIBRARIES_PGAUDIT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlConfig10_SharedPreloadLibrariesToJSON = postgresqlConfig10_SharedPreloadLibrariesToJSON;
const basePostgresqlConfig10 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10",
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
    sharedPreloadLibraries: 0,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
};
exports.PostgresqlConfig10 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig10",
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
        if (message.replacementSortTuples !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replacementSortTuples,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumWorkMem,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.tempFileLimit }, writer.uint32(74).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostDelay,
            }, writer.uint32(82).fork()).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageHit,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageMiss,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostPageDirty,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.vacuumCostLimit,
            }, writer.uint32(114).fork()).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.bgwriterDelay }, writer.uint32(122).fork()).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.bgwriterLruMaxpages,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.bgwriterLruMultiplier,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.bgwriterFlushAfter,
            }, writer.uint32(146).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backendFlushAfter,
            }, writer.uint32(154).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.oldSnapshotThreshold,
            }, writer.uint32(162).fork()).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(168).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(176).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.checkpointTimeout,
            }, writer.uint32(186).fork()).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.checkpointCompletionTarget,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.checkpointFlushAfter,
            }, writer.uint32(202).fork()).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxWalSize }, writer.uint32(210).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.minWalSize }, writer.uint32(218).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxStandbyStreamingDelay,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.defaultStatisticsTarget,
            }, writer.uint32(234).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(240).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.cursorTupleFraction,
            }, writer.uint32(250).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.fromCollapseLimit,
            }, writer.uint32(258).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.joinCollapseLimit,
            }, writer.uint32(266).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(272).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(280).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(288).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(296).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.logMinDurationStatement,
            }, writer.uint32(306).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logCheckpoints }, writer.uint32(314).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logConnections }, writer.uint32(322).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.logDisconnections,
            }, writer.uint32(330).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logDuration }, writer.uint32(338).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(344).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.logLockWaits }, writer.uint32(354).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(360).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.logTempFiles }, writer.uint32(370).fork()).ldelim();
        }
        if (message.searchPath !== "") {
            writer.uint32(378).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.rowSecurity }, writer.uint32(386).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(392).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.statementTimeout,
            }, writer.uint32(402).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.lockTimeout }, writer.uint32(410).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.idleInTransactionSessionTimeout,
            }, writer.uint32(418).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(424).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(432).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(440).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.ginPendingListLimit,
            }, writer.uint32(450).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.deadlockTimeout,
            }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxLocksPerTransaction,
            }, writer.uint32(466).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPredLocksPerTransaction,
            }, writer.uint32(474).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.arrayNulls }, writer.uint32(482).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(488).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.defaultWithOids }, writer.uint32(498).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.escapeStringWarning,
            }, writer.uint32(506).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.loCompatPrivileges,
            }, writer.uint32(514).fork()).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.operatorPrecedenceWarning,
            }, writer.uint32(522).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.quoteAllIdentifiers,
            }, writer.uint32(530).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.standardConformingStrings,
            }, writer.uint32(538).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.synchronizeSeqscans,
            }, writer.uint32(546).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.transformNullEquals,
            }, writer.uint32(554).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.exitOnError }, writer.uint32(562).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ $type: "google.protobuf.DoubleValue", value: message.seqPageCost }, writer.uint32(570).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.randomPageCost,
            }, writer.uint32(578).fork()).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumMaxWorkers,
            }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostDelay,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostLimit,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumNaptime,
            }, writer.uint32(610).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.archiveTimeout }, writer.uint32(618).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.trackActivityQuerySize,
            }, writer.uint32(626).fork()).ldelim();
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
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveIoConcurrency,
            }, writer.uint32(786).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveCacheSize,
            }, writer.uint32(794).fork()).ldelim();
        }
        writer.uint32(802).fork();
        for (const v of message.sharedPreloadLibraries) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.autoExplainLogMinDuration !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autoExplainLogMinDuration,
            }, writer.uint32(810).fork()).ldelim();
        }
        if (message.autoExplainLogAnalyze !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogAnalyze,
            }, writer.uint32(818).fork()).ldelim();
        }
        if (message.autoExplainLogBuffers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogBuffers,
            }, writer.uint32(826).fork()).ldelim();
        }
        if (message.autoExplainLogTiming !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogTiming,
            }, writer.uint32(834).fork()).ldelim();
        }
        if (message.autoExplainLogTriggers !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogTriggers,
            }, writer.uint32(842).fork()).ldelim();
        }
        if (message.autoExplainLogVerbose !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogVerbose,
            }, writer.uint32(850).fork()).ldelim();
        }
        if (message.autoExplainLogNestedStatements !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.autoExplainLogNestedStatements,
            }, writer.uint32(858).fork()).ldelim();
        }
        if (message.autoExplainSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.autoExplainSampleRate,
            }, writer.uint32(866).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHint !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgHintPlanEnableHint,
            }, writer.uint32(874).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHintTable !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgHintPlanEnableHintTable,
            }, writer.uint32(882).fork()).ldelim();
        }
        if (message.pgHintPlanDebugPrint !== 0) {
            writer.uint32(888).int32(message.pgHintPlanDebugPrint);
        }
        if (message.pgHintPlanMessageLevel !== 0) {
            writer.uint32(896).int32(message.pgHintPlanMessageLevel);
        }
        if (message.pgQualstatsEnabled !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsEnabled,
            }, writer.uint32(906).fork()).ldelim();
        }
        if (message.pgQualstatsTrackConstants !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsTrackConstants,
            }, writer.uint32(914).fork()).ldelim();
        }
        if (message.pgQualstatsMax !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.pgQualstatsMax }, writer.uint32(922).fork()).ldelim();
        }
        if (message.pgQualstatsResolveOids !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.pgQualstatsResolveOids,
            }, writer.uint32(930).fork()).ldelim();
        }
        if (message.pgQualstatsSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: "google.protobuf.DoubleValue",
                value: message.pgQualstatsSampleRate,
            }, writer.uint32(938).fork()).ldelim();
        }
        if (message.maxStackDepth !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxStackDepth }, writer.uint32(1202).fork()).ldelim();
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
        const message = Object.assign({}, basePostgresqlConfig10);
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
                    message.replacementSortTuples = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.autovacuumWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageHit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageMiss = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostPageDirty = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.vacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMaxpages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.bgwriterLruMultiplier = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.bgwriterFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.backendFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.oldSnapshotThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.walLevel = reader.int32();
                    break;
                case 22:
                    message.synchronousCommit = reader.int32();
                    break;
                case 23:
                    message.checkpointTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.checkpointCompletionTarget = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.checkpointFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.maxWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.minWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxStandbyStreamingDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.defaultStatisticsTarget = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.constraintExclusion = reader.int32();
                    break;
                case 31:
                    message.cursorTupleFraction = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.fromCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.joinCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.forceParallelMode = reader.int32();
                    break;
                case 35:
                    message.clientMinMessages = reader.int32();
                    break;
                case 36:
                    message.logMinMessages = reader.int32();
                    break;
                case 37:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 38:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.logCheckpoints = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logConnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDisconnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logDuration = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 44:
                    message.logLockWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.logStatement = reader.int32();
                    break;
                case 46:
                    message.logTempFiles = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.searchPath = reader.string();
                    break;
                case 48:
                    message.rowSecurity = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 50:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.byteaOutput = reader.int32();
                    break;
                case 54:
                    message.xmlbinary = reader.int32();
                    break;
                case 55:
                    message.xmloption = reader.int32();
                    break;
                case 56:
                    message.ginPendingListLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.deadlockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.maxPredLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.arrayNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 61:
                    message.backslashQuote = reader.int32();
                    break;
                case 62:
                    message.defaultWithOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.escapeStringWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.loCompatPrivileges = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.operatorPrecedenceWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.quoteAllIdentifiers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.standardConformingStrings = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.synchronizeSeqscans = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.transformNullEquals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.exitOnError = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.seqPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.randomPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.autovacuumMaxWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumVacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumVacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.autovacuumNaptime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.archiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.trackActivityQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.effectiveCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 100:
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
                case 101:
                    message.autoExplainLogMinDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.autoExplainLogAnalyze = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 103:
                    message.autoExplainLogBuffers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 104:
                    message.autoExplainLogTiming = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 105:
                    message.autoExplainLogTriggers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 106:
                    message.autoExplainLogVerbose = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 107:
                    message.autoExplainLogNestedStatements = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 108:
                    message.autoExplainSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 109:
                    message.pgHintPlanEnableHint = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 110:
                    message.pgHintPlanEnableHintTable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    message.pgHintPlanDebugPrint = reader.int32();
                    break;
                case 112:
                    message.pgHintPlanMessageLevel = reader.int32();
                    break;
                case 113:
                    message.pgQualstatsEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.pgQualstatsTrackConstants = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 115:
                    message.pgQualstatsMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 116:
                    message.pgQualstatsResolveOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 117:
                    message.pgQualstatsSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 150:
                    message.maxStackDepth = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
        const message = Object.assign({}, basePostgresqlConfig10);
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
        message.replacementSortTuples =
            object.replacementSortTuples !== undefined &&
                object.replacementSortTuples !== null
                ? Number(object.replacementSortTuples)
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
                ? postgresqlConfig10_WalLevelFromJSON(object.walLevel)
                : 0;
        message.synchronousCommit =
            object.synchronousCommit !== undefined &&
                object.synchronousCommit !== null
                ? postgresqlConfig10_SynchronousCommitFromJSON(object.synchronousCommit)
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
                ? postgresqlConfig10_ConstraintExclusionFromJSON(object.constraintExclusion)
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
                ? postgresqlConfig10_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined &&
                object.clientMinMessages !== null
                ? postgresqlConfig10_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlConfig10_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined &&
                object.logMinErrorStatement !== null
                ? postgresqlConfig10_LogLevelFromJSON(object.logMinErrorStatement)
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
                ? postgresqlConfig10_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlConfig10_LogStatementFromJSON(object.logStatement)
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
                ? postgresqlConfig10_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
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
                ? postgresqlConfig10_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlConfig10_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlConfig10_XmlOptionFromJSON(object.xmloption)
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
                ? postgresqlConfig10_BackslashQuoteFromJSON(object.backslashQuote)
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
        message.operatorPrecedenceWarning =
            object.operatorPrecedenceWarning !== undefined &&
                object.operatorPrecedenceWarning !== null
                ? Boolean(object.operatorPrecedenceWarning)
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
        message.sharedPreloadLibraries = ((_a = object.sharedPreloadLibraries) !== null && _a !== void 0 ? _a : []).map((e) => postgresqlConfig10_SharedPreloadLibrariesFromJSON(e));
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
                ? postgresqlConfig10_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint)
                : 0;
        message.pgHintPlanMessageLevel =
            object.pgHintPlanMessageLevel !== undefined &&
                object.pgHintPlanMessageLevel !== null
                ? postgresqlConfig10_LogLevelFromJSON(object.pgHintPlanMessageLevel)
                : 0;
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
        message.maxStackDepth =
            object.maxStackDepth !== undefined && object.maxStackDepth !== null
                ? Number(object.maxStackDepth)
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
        message.replacementSortTuples !== undefined &&
            (obj.replacementSortTuples = message.replacementSortTuples);
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
            (obj.walLevel = postgresqlConfig10_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlConfig10_SynchronousCommitToJSON(message.synchronousCommit));
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
            (obj.constraintExclusion = postgresqlConfig10_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlConfig10_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlConfig10_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlConfig10_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlConfig10_LogLevelToJSON(message.logMinErrorStatement));
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
            (obj.logErrorVerbosity = postgresqlConfig10_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlConfig10_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlConfig10_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlConfig10_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlConfig10_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlConfig10_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlConfig10_BackslashQuoteToJSON(message.backslashQuote));
        message.defaultWithOids !== undefined &&
            (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.operatorPrecedenceWarning !== undefined &&
            (obj.operatorPrecedenceWarning = message.operatorPrecedenceWarning);
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
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        if (message.sharedPreloadLibraries) {
            obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) => postgresqlConfig10_SharedPreloadLibrariesToJSON(e));
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
            (obj.pgHintPlanDebugPrint = postgresqlConfig10_PgHintPlanDebugPrintToJSON(message.pgHintPlanDebugPrint));
        message.pgHintPlanMessageLevel !== undefined &&
            (obj.pgHintPlanMessageLevel = postgresqlConfig10_LogLevelToJSON(message.pgHintPlanMessageLevel));
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
        message.maxStackDepth !== undefined &&
            (obj.maxStackDepth = message.maxStackDepth);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103;
        const message = Object.assign({}, basePostgresqlConfig10);
        message.maxConnections = (_a = object.maxConnections) !== null && _a !== void 0 ? _a : undefined;
        message.sharedBuffers = (_b = object.sharedBuffers) !== null && _b !== void 0 ? _b : undefined;
        message.tempBuffers = (_c = object.tempBuffers) !== null && _c !== void 0 ? _c : undefined;
        message.maxPreparedTransactions =
            (_d = object.maxPreparedTransactions) !== null && _d !== void 0 ? _d : undefined;
        message.workMem = (_e = object.workMem) !== null && _e !== void 0 ? _e : undefined;
        message.maintenanceWorkMem = (_f = object.maintenanceWorkMem) !== null && _f !== void 0 ? _f : undefined;
        message.replacementSortTuples = (_g = object.replacementSortTuples) !== null && _g !== void 0 ? _g : undefined;
        message.autovacuumWorkMem = (_h = object.autovacuumWorkMem) !== null && _h !== void 0 ? _h : undefined;
        message.tempFileLimit = (_j = object.tempFileLimit) !== null && _j !== void 0 ? _j : undefined;
        message.vacuumCostDelay = (_k = object.vacuumCostDelay) !== null && _k !== void 0 ? _k : undefined;
        message.vacuumCostPageHit = (_l = object.vacuumCostPageHit) !== null && _l !== void 0 ? _l : undefined;
        message.vacuumCostPageMiss = (_m = object.vacuumCostPageMiss) !== null && _m !== void 0 ? _m : undefined;
        message.vacuumCostPageDirty = (_o = object.vacuumCostPageDirty) !== null && _o !== void 0 ? _o : undefined;
        message.vacuumCostLimit = (_p = object.vacuumCostLimit) !== null && _p !== void 0 ? _p : undefined;
        message.bgwriterDelay = (_q = object.bgwriterDelay) !== null && _q !== void 0 ? _q : undefined;
        message.bgwriterLruMaxpages = (_r = object.bgwriterLruMaxpages) !== null && _r !== void 0 ? _r : undefined;
        message.bgwriterLruMultiplier = (_s = object.bgwriterLruMultiplier) !== null && _s !== void 0 ? _s : undefined;
        message.bgwriterFlushAfter = (_t = object.bgwriterFlushAfter) !== null && _t !== void 0 ? _t : undefined;
        message.backendFlushAfter = (_u = object.backendFlushAfter) !== null && _u !== void 0 ? _u : undefined;
        message.oldSnapshotThreshold = (_v = object.oldSnapshotThreshold) !== null && _v !== void 0 ? _v : undefined;
        message.walLevel = (_w = object.walLevel) !== null && _w !== void 0 ? _w : 0;
        message.synchronousCommit = (_x = object.synchronousCommit) !== null && _x !== void 0 ? _x : 0;
        message.checkpointTimeout = (_y = object.checkpointTimeout) !== null && _y !== void 0 ? _y : undefined;
        message.checkpointCompletionTarget =
            (_z = object.checkpointCompletionTarget) !== null && _z !== void 0 ? _z : undefined;
        message.checkpointFlushAfter = (_0 = object.checkpointFlushAfter) !== null && _0 !== void 0 ? _0 : undefined;
        message.maxWalSize = (_1 = object.maxWalSize) !== null && _1 !== void 0 ? _1 : undefined;
        message.minWalSize = (_2 = object.minWalSize) !== null && _2 !== void 0 ? _2 : undefined;
        message.maxStandbyStreamingDelay =
            (_3 = object.maxStandbyStreamingDelay) !== null && _3 !== void 0 ? _3 : undefined;
        message.defaultStatisticsTarget =
            (_4 = object.defaultStatisticsTarget) !== null && _4 !== void 0 ? _4 : undefined;
        message.constraintExclusion = (_5 = object.constraintExclusion) !== null && _5 !== void 0 ? _5 : 0;
        message.cursorTupleFraction = (_6 = object.cursorTupleFraction) !== null && _6 !== void 0 ? _6 : undefined;
        message.fromCollapseLimit = (_7 = object.fromCollapseLimit) !== null && _7 !== void 0 ? _7 : undefined;
        message.joinCollapseLimit = (_8 = object.joinCollapseLimit) !== null && _8 !== void 0 ? _8 : undefined;
        message.forceParallelMode = (_9 = object.forceParallelMode) !== null && _9 !== void 0 ? _9 : 0;
        message.clientMinMessages = (_10 = object.clientMinMessages) !== null && _10 !== void 0 ? _10 : 0;
        message.logMinMessages = (_11 = object.logMinMessages) !== null && _11 !== void 0 ? _11 : 0;
        message.logMinErrorStatement = (_12 = object.logMinErrorStatement) !== null && _12 !== void 0 ? _12 : 0;
        message.logMinDurationStatement =
            (_13 = object.logMinDurationStatement) !== null && _13 !== void 0 ? _13 : undefined;
        message.logCheckpoints = (_14 = object.logCheckpoints) !== null && _14 !== void 0 ? _14 : undefined;
        message.logConnections = (_15 = object.logConnections) !== null && _15 !== void 0 ? _15 : undefined;
        message.logDisconnections = (_16 = object.logDisconnections) !== null && _16 !== void 0 ? _16 : undefined;
        message.logDuration = (_17 = object.logDuration) !== null && _17 !== void 0 ? _17 : undefined;
        message.logErrorVerbosity = (_18 = object.logErrorVerbosity) !== null && _18 !== void 0 ? _18 : 0;
        message.logLockWaits = (_19 = object.logLockWaits) !== null && _19 !== void 0 ? _19 : undefined;
        message.logStatement = (_20 = object.logStatement) !== null && _20 !== void 0 ? _20 : 0;
        message.logTempFiles = (_21 = object.logTempFiles) !== null && _21 !== void 0 ? _21 : undefined;
        message.searchPath = (_22 = object.searchPath) !== null && _22 !== void 0 ? _22 : "";
        message.rowSecurity = (_23 = object.rowSecurity) !== null && _23 !== void 0 ? _23 : undefined;
        message.defaultTransactionIsolation =
            (_24 = object.defaultTransactionIsolation) !== null && _24 !== void 0 ? _24 : 0;
        message.statementTimeout = (_25 = object.statementTimeout) !== null && _25 !== void 0 ? _25 : undefined;
        message.lockTimeout = (_26 = object.lockTimeout) !== null && _26 !== void 0 ? _26 : undefined;
        message.idleInTransactionSessionTimeout =
            (_27 = object.idleInTransactionSessionTimeout) !== null && _27 !== void 0 ? _27 : undefined;
        message.byteaOutput = (_28 = object.byteaOutput) !== null && _28 !== void 0 ? _28 : 0;
        message.xmlbinary = (_29 = object.xmlbinary) !== null && _29 !== void 0 ? _29 : 0;
        message.xmloption = (_30 = object.xmloption) !== null && _30 !== void 0 ? _30 : 0;
        message.ginPendingListLimit = (_31 = object.ginPendingListLimit) !== null && _31 !== void 0 ? _31 : undefined;
        message.deadlockTimeout = (_32 = object.deadlockTimeout) !== null && _32 !== void 0 ? _32 : undefined;
        message.maxLocksPerTransaction = (_33 = object.maxLocksPerTransaction) !== null && _33 !== void 0 ? _33 : undefined;
        message.maxPredLocksPerTransaction =
            (_34 = object.maxPredLocksPerTransaction) !== null && _34 !== void 0 ? _34 : undefined;
        message.arrayNulls = (_35 = object.arrayNulls) !== null && _35 !== void 0 ? _35 : undefined;
        message.backslashQuote = (_36 = object.backslashQuote) !== null && _36 !== void 0 ? _36 : 0;
        message.defaultWithOids = (_37 = object.defaultWithOids) !== null && _37 !== void 0 ? _37 : undefined;
        message.escapeStringWarning = (_38 = object.escapeStringWarning) !== null && _38 !== void 0 ? _38 : undefined;
        message.loCompatPrivileges = (_39 = object.loCompatPrivileges) !== null && _39 !== void 0 ? _39 : undefined;
        message.operatorPrecedenceWarning =
            (_40 = object.operatorPrecedenceWarning) !== null && _40 !== void 0 ? _40 : undefined;
        message.quoteAllIdentifiers = (_41 = object.quoteAllIdentifiers) !== null && _41 !== void 0 ? _41 : undefined;
        message.standardConformingStrings =
            (_42 = object.standardConformingStrings) !== null && _42 !== void 0 ? _42 : undefined;
        message.synchronizeSeqscans = (_43 = object.synchronizeSeqscans) !== null && _43 !== void 0 ? _43 : undefined;
        message.transformNullEquals = (_44 = object.transformNullEquals) !== null && _44 !== void 0 ? _44 : undefined;
        message.exitOnError = (_45 = object.exitOnError) !== null && _45 !== void 0 ? _45 : undefined;
        message.seqPageCost = (_46 = object.seqPageCost) !== null && _46 !== void 0 ? _46 : undefined;
        message.randomPageCost = (_47 = object.randomPageCost) !== null && _47 !== void 0 ? _47 : undefined;
        message.autovacuumMaxWorkers = (_48 = object.autovacuumMaxWorkers) !== null && _48 !== void 0 ? _48 : undefined;
        message.autovacuumVacuumCostDelay =
            (_49 = object.autovacuumVacuumCostDelay) !== null && _49 !== void 0 ? _49 : undefined;
        message.autovacuumVacuumCostLimit =
            (_50 = object.autovacuumVacuumCostLimit) !== null && _50 !== void 0 ? _50 : undefined;
        message.autovacuumNaptime = (_51 = object.autovacuumNaptime) !== null && _51 !== void 0 ? _51 : undefined;
        message.archiveTimeout = (_52 = object.archiveTimeout) !== null && _52 !== void 0 ? _52 : undefined;
        message.trackActivityQuerySize = (_53 = object.trackActivityQuerySize) !== null && _53 !== void 0 ? _53 : undefined;
        message.enableBitmapscan = (_54 = object.enableBitmapscan) !== null && _54 !== void 0 ? _54 : undefined;
        message.enableHashagg = (_55 = object.enableHashagg) !== null && _55 !== void 0 ? _55 : undefined;
        message.enableHashjoin = (_56 = object.enableHashjoin) !== null && _56 !== void 0 ? _56 : undefined;
        message.enableIndexscan = (_57 = object.enableIndexscan) !== null && _57 !== void 0 ? _57 : undefined;
        message.enableIndexonlyscan = (_58 = object.enableIndexonlyscan) !== null && _58 !== void 0 ? _58 : undefined;
        message.enableMaterial = (_59 = object.enableMaterial) !== null && _59 !== void 0 ? _59 : undefined;
        message.enableMergejoin = (_60 = object.enableMergejoin) !== null && _60 !== void 0 ? _60 : undefined;
        message.enableNestloop = (_61 = object.enableNestloop) !== null && _61 !== void 0 ? _61 : undefined;
        message.enableSeqscan = (_62 = object.enableSeqscan) !== null && _62 !== void 0 ? _62 : undefined;
        message.enableSort = (_63 = object.enableSort) !== null && _63 !== void 0 ? _63 : undefined;
        message.enableTidscan = (_64 = object.enableTidscan) !== null && _64 !== void 0 ? _64 : undefined;
        message.maxWorkerProcesses = (_65 = object.maxWorkerProcesses) !== null && _65 !== void 0 ? _65 : undefined;
        message.maxParallelWorkers = (_66 = object.maxParallelWorkers) !== null && _66 !== void 0 ? _66 : undefined;
        message.maxParallelWorkersPerGather =
            (_67 = object.maxParallelWorkersPerGather) !== null && _67 !== void 0 ? _67 : undefined;
        message.autovacuumVacuumScaleFactor =
            (_68 = object.autovacuumVacuumScaleFactor) !== null && _68 !== void 0 ? _68 : undefined;
        message.autovacuumAnalyzeScaleFactor =
            (_69 = object.autovacuumAnalyzeScaleFactor) !== null && _69 !== void 0 ? _69 : undefined;
        message.defaultTransactionReadOnly =
            (_70 = object.defaultTransactionReadOnly) !== null && _70 !== void 0 ? _70 : undefined;
        message.timezone = (_71 = object.timezone) !== null && _71 !== void 0 ? _71 : "";
        message.effectiveIoConcurrency = (_72 = object.effectiveIoConcurrency) !== null && _72 !== void 0 ? _72 : undefined;
        message.effectiveCacheSize = (_73 = object.effectiveCacheSize) !== null && _73 !== void 0 ? _73 : undefined;
        message.sharedPreloadLibraries =
            ((_74 = object.sharedPreloadLibraries) === null || _74 === void 0 ? void 0 : _74.map((e) => e)) || [];
        message.autoExplainLogMinDuration =
            (_75 = object.autoExplainLogMinDuration) !== null && _75 !== void 0 ? _75 : undefined;
        message.autoExplainLogAnalyze = (_76 = object.autoExplainLogAnalyze) !== null && _76 !== void 0 ? _76 : undefined;
        message.autoExplainLogBuffers = (_77 = object.autoExplainLogBuffers) !== null && _77 !== void 0 ? _77 : undefined;
        message.autoExplainLogTiming = (_78 = object.autoExplainLogTiming) !== null && _78 !== void 0 ? _78 : undefined;
        message.autoExplainLogTriggers = (_79 = object.autoExplainLogTriggers) !== null && _79 !== void 0 ? _79 : undefined;
        message.autoExplainLogVerbose = (_80 = object.autoExplainLogVerbose) !== null && _80 !== void 0 ? _80 : undefined;
        message.autoExplainLogNestedStatements =
            (_81 = object.autoExplainLogNestedStatements) !== null && _81 !== void 0 ? _81 : undefined;
        message.autoExplainSampleRate = (_82 = object.autoExplainSampleRate) !== null && _82 !== void 0 ? _82 : undefined;
        message.pgHintPlanEnableHint = (_83 = object.pgHintPlanEnableHint) !== null && _83 !== void 0 ? _83 : undefined;
        message.pgHintPlanEnableHintTable =
            (_84 = object.pgHintPlanEnableHintTable) !== null && _84 !== void 0 ? _84 : undefined;
        message.pgHintPlanDebugPrint = (_85 = object.pgHintPlanDebugPrint) !== null && _85 !== void 0 ? _85 : 0;
        message.pgHintPlanMessageLevel = (_86 = object.pgHintPlanMessageLevel) !== null && _86 !== void 0 ? _86 : 0;
        message.pgQualstatsEnabled = (_87 = object.pgQualstatsEnabled) !== null && _87 !== void 0 ? _87 : undefined;
        message.pgQualstatsTrackConstants =
            (_88 = object.pgQualstatsTrackConstants) !== null && _88 !== void 0 ? _88 : undefined;
        message.pgQualstatsMax = (_89 = object.pgQualstatsMax) !== null && _89 !== void 0 ? _89 : undefined;
        message.pgQualstatsResolveOids = (_90 = object.pgQualstatsResolveOids) !== null && _90 !== void 0 ? _90 : undefined;
        message.pgQualstatsSampleRate = (_91 = object.pgQualstatsSampleRate) !== null && _91 !== void 0 ? _91 : undefined;
        message.maxStackDepth = (_92 = object.maxStackDepth) !== null && _92 !== void 0 ? _92 : undefined;
        message.geqo = (_93 = object.geqo) !== null && _93 !== void 0 ? _93 : undefined;
        message.geqoThreshold = (_94 = object.geqoThreshold) !== null && _94 !== void 0 ? _94 : undefined;
        message.geqoEffort = (_95 = object.geqoEffort) !== null && _95 !== void 0 ? _95 : undefined;
        message.geqoPoolSize = (_96 = object.geqoPoolSize) !== null && _96 !== void 0 ? _96 : undefined;
        message.geqoGenerations = (_97 = object.geqoGenerations) !== null && _97 !== void 0 ? _97 : undefined;
        message.geqoSelectionBias = (_98 = object.geqoSelectionBias) !== null && _98 !== void 0 ? _98 : undefined;
        message.geqoSeed = (_99 = object.geqoSeed) !== null && _99 !== void 0 ? _99 : undefined;
        message.maxStandbyArchiveDelay = (_100 = object.maxStandbyArchiveDelay) !== null && _100 !== void 0 ? _100 : undefined;
        message.sessionDurationTimeout = (_101 = object.sessionDurationTimeout) !== null && _101 !== void 0 ? _101 : undefined;
        message.logReplicationCommands = (_102 = object.logReplicationCommands) !== null && _102 !== void 0 ? _102 : undefined;
        message.logAutovacuumMinDuration =
            (_103 = object.logAutovacuumMinDuration) !== null && _103 !== void 0 ? _103 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresqlConfig10.$type, exports.PostgresqlConfig10);
const basePostgresqlConfigSet10 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10",
};
exports.PostgresqlConfigSet10 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet10",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.PostgresqlConfig10.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.PostgresqlConfig10.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.PostgresqlConfig10.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlConfigSet10);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.PostgresqlConfig10.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.PostgresqlConfig10.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.PostgresqlConfig10.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresqlConfigSet10);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.PostgresqlConfig10.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.PostgresqlConfig10.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.PostgresqlConfig10.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.PostgresqlConfig10.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.PostgresqlConfig10.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.PostgresqlConfig10.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePostgresqlConfigSet10);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.PostgresqlConfig10.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.PostgresqlConfig10.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.PostgresqlConfig10.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PostgresqlConfigSet10.$type, exports.PostgresqlConfigSet10);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
