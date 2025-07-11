"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postgresqlconfigset96 = exports.Postgresqlconfig96 = exports.postgresqlconfig96_BackslashQuoteToJSON = exports.postgresqlconfig96_BackslashQuoteFromJSON = exports.Postgresqlconfig96_BackslashQuote = exports.postgresqlconfig96_XmlOptionToJSON = exports.postgresqlconfig96_XmlOptionFromJSON = exports.Postgresqlconfig96_XmlOption = exports.postgresqlconfig96_XmlBinaryToJSON = exports.postgresqlconfig96_XmlBinaryFromJSON = exports.Postgresqlconfig96_XmlBinary = exports.postgresqlconfig96_ByteaOutputToJSON = exports.postgresqlconfig96_ByteaOutputFromJSON = exports.Postgresqlconfig96_ByteaOutput = exports.postgresqlconfig96_TransactionIsolationToJSON = exports.postgresqlconfig96_TransactionIsolationFromJSON = exports.Postgresqlconfig96_TransactionIsolation = exports.postgresqlconfig96_LogStatementToJSON = exports.postgresqlconfig96_LogStatementFromJSON = exports.Postgresqlconfig96_LogStatement = exports.postgresqlconfig96_LogErrorVerbosityToJSON = exports.postgresqlconfig96_LogErrorVerbosityFromJSON = exports.Postgresqlconfig96_LogErrorVerbosity = exports.postgresqlconfig96_LogLevelToJSON = exports.postgresqlconfig96_LogLevelFromJSON = exports.Postgresqlconfig96_LogLevel = exports.postgresqlconfig96_ForceParallelModeToJSON = exports.postgresqlconfig96_ForceParallelModeFromJSON = exports.Postgresqlconfig96_ForceParallelMode = exports.postgresqlconfig96_ConstraintExclusionToJSON = exports.postgresqlconfig96_ConstraintExclusionFromJSON = exports.Postgresqlconfig96_ConstraintExclusion = exports.postgresqlconfig96_SynchronousCommitToJSON = exports.postgresqlconfig96_SynchronousCommitFromJSON = exports.Postgresqlconfig96_SynchronousCommit = exports.postgresqlconfig96_WalLevelToJSON = exports.postgresqlconfig96_WalLevelFromJSON = exports.Postgresqlconfig96_WalLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
var Postgresqlconfig96_WalLevel;
(function (Postgresqlconfig96_WalLevel) {
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_WalLevel = exports.Postgresqlconfig96_WalLevel || (exports.Postgresqlconfig96_WalLevel = {}));
function postgresqlconfig96_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "WAL_LEVEL_UNSPECIFIED":
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case "WAL_LEVEL_REPLICA":
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case "WAL_LEVEL_LOGICAL":
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_WalLevel.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_WalLevelFromJSON = postgresqlconfig96_WalLevelFromJSON;
function postgresqlconfig96_WalLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return "WAL_LEVEL_UNSPECIFIED";
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA:
            return "WAL_LEVEL_REPLICA";
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL:
            return "WAL_LEVEL_LOGICAL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_WalLevelToJSON = postgresqlconfig96_WalLevelToJSON;
var Postgresqlconfig96_SynchronousCommit;
(function (Postgresqlconfig96_SynchronousCommit) {
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_SynchronousCommit = exports.Postgresqlconfig96_SynchronousCommit || (exports.Postgresqlconfig96_SynchronousCommit = {}));
function postgresqlconfig96_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case "SYNCHRONOUS_COMMIT_UNSPECIFIED":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case "SYNCHRONOUS_COMMIT_ON":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case "SYNCHRONOUS_COMMIT_OFF":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case "SYNCHRONOUS_COMMIT_LOCAL":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case "SYNCHRONOUS_COMMIT_REMOTE_WRITE":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case "SYNCHRONOUS_COMMIT_REMOTE_APPLY":
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_SynchronousCommit.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_SynchronousCommitFromJSON = postgresqlconfig96_SynchronousCommitFromJSON;
function postgresqlconfig96_SynchronousCommitToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return "SYNCHRONOUS_COMMIT_UNSPECIFIED";
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return "SYNCHRONOUS_COMMIT_ON";
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return "SYNCHRONOUS_COMMIT_OFF";
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return "SYNCHRONOUS_COMMIT_LOCAL";
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_SynchronousCommitToJSON = postgresqlconfig96_SynchronousCommitToJSON;
var Postgresqlconfig96_ConstraintExclusion;
(function (Postgresqlconfig96_ConstraintExclusion) {
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ConstraintExclusion = exports.Postgresqlconfig96_ConstraintExclusion || (exports.Postgresqlconfig96_ConstraintExclusion = {}));
function postgresqlconfig96_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case "CONSTRAINT_EXCLUSION_UNSPECIFIED":
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case "CONSTRAINT_EXCLUSION_ON":
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case "CONSTRAINT_EXCLUSION_OFF":
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case "CONSTRAINT_EXCLUSION_PARTITION":
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_ConstraintExclusionFromJSON = postgresqlconfig96_ConstraintExclusionFromJSON;
function postgresqlconfig96_ConstraintExclusionToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return "CONSTRAINT_EXCLUSION_UNSPECIFIED";
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return "CONSTRAINT_EXCLUSION_ON";
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return "CONSTRAINT_EXCLUSION_OFF";
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return "CONSTRAINT_EXCLUSION_PARTITION";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_ConstraintExclusionToJSON = postgresqlconfig96_ConstraintExclusionToJSON;
var Postgresqlconfig96_ForceParallelMode;
(function (Postgresqlconfig96_ForceParallelMode) {
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ForceParallelMode = exports.Postgresqlconfig96_ForceParallelMode || (exports.Postgresqlconfig96_ForceParallelMode = {}));
function postgresqlconfig96_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case "FORCE_PARALLEL_MODE_UNSPECIFIED":
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case "FORCE_PARALLEL_MODE_ON":
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case "FORCE_PARALLEL_MODE_OFF":
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case "FORCE_PARALLEL_MODE_REGRESS":
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_ForceParallelModeFromJSON = postgresqlconfig96_ForceParallelModeFromJSON;
function postgresqlconfig96_ForceParallelModeToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return "FORCE_PARALLEL_MODE_UNSPECIFIED";
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return "FORCE_PARALLEL_MODE_ON";
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return "FORCE_PARALLEL_MODE_OFF";
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return "FORCE_PARALLEL_MODE_REGRESS";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_ForceParallelModeToJSON = postgresqlconfig96_ForceParallelModeToJSON;
var Postgresqlconfig96_LogLevel;
(function (Postgresqlconfig96_LogLevel) {
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogLevel = exports.Postgresqlconfig96_LogLevel || (exports.Postgresqlconfig96_LogLevel = {}));
function postgresqlconfig96_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "LOG_LEVEL_DEBUG5":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case "LOG_LEVEL_DEBUG4":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case "LOG_LEVEL_DEBUG3":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case "LOG_LEVEL_DEBUG2":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case "LOG_LEVEL_DEBUG1":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case "LOG_LEVEL_LOG":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case "LOG_LEVEL_NOTICE":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case "LOG_LEVEL_WARNING":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case "LOG_LEVEL_ERROR":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case "LOG_LEVEL_FATAL":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case "LOG_LEVEL_PANIC":
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_LogLevelFromJSON = postgresqlconfig96_LogLevelFromJSON;
function postgresqlconfig96_LogLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5:
            return "LOG_LEVEL_DEBUG5";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4:
            return "LOG_LEVEL_DEBUG4";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3:
            return "LOG_LEVEL_DEBUG3";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2:
            return "LOG_LEVEL_DEBUG2";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1:
            return "LOG_LEVEL_DEBUG1";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG:
            return "LOG_LEVEL_LOG";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE:
            return "LOG_LEVEL_NOTICE";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING:
            return "LOG_LEVEL_WARNING";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR:
            return "LOG_LEVEL_ERROR";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL:
            return "LOG_LEVEL_FATAL";
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC:
            return "LOG_LEVEL_PANIC";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_LogLevelToJSON = postgresqlconfig96_LogLevelToJSON;
var Postgresqlconfig96_LogErrorVerbosity;
(function (Postgresqlconfig96_LogErrorVerbosity) {
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogErrorVerbosity = exports.Postgresqlconfig96_LogErrorVerbosity || (exports.Postgresqlconfig96_LogErrorVerbosity = {}));
function postgresqlconfig96_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_ERROR_VERBOSITY_UNSPECIFIED":
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case "LOG_ERROR_VERBOSITY_TERSE":
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case "LOG_ERROR_VERBOSITY_DEFAULT":
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case "LOG_ERROR_VERBOSITY_VERBOSE":
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_LogErrorVerbosityFromJSON = postgresqlconfig96_LogErrorVerbosityFromJSON;
function postgresqlconfig96_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return "LOG_ERROR_VERBOSITY_UNSPECIFIED";
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return "LOG_ERROR_VERBOSITY_TERSE";
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return "LOG_ERROR_VERBOSITY_DEFAULT";
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return "LOG_ERROR_VERBOSITY_VERBOSE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_LogErrorVerbosityToJSON = postgresqlconfig96_LogErrorVerbosityToJSON;
var Postgresqlconfig96_LogStatement;
(function (Postgresqlconfig96_LogStatement) {
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogStatement = exports.Postgresqlconfig96_LogStatement || (exports.Postgresqlconfig96_LogStatement = {}));
function postgresqlconfig96_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_STATEMENT_UNSPECIFIED":
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case "LOG_STATEMENT_NONE":
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case "LOG_STATEMENT_DDL":
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case "LOG_STATEMENT_MOD":
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case "LOG_STATEMENT_ALL":
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_LogStatementFromJSON = postgresqlconfig96_LogStatementFromJSON;
function postgresqlconfig96_LogStatementToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return "LOG_STATEMENT_UNSPECIFIED";
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE:
            return "LOG_STATEMENT_NONE";
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL:
            return "LOG_STATEMENT_DDL";
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD:
            return "LOG_STATEMENT_MOD";
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL:
            return "LOG_STATEMENT_ALL";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_LogStatementToJSON = postgresqlconfig96_LogStatementToJSON;
var Postgresqlconfig96_TransactionIsolation;
(function (Postgresqlconfig96_TransactionIsolation) {
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_TransactionIsolation = exports.Postgresqlconfig96_TransactionIsolation || (exports.Postgresqlconfig96_TransactionIsolation = {}));
function postgresqlconfig96_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case "TRANSACTION_ISOLATION_UNSPECIFIED":
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case "TRANSACTION_ISOLATION_READ_UNCOMMITTED":
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case "TRANSACTION_ISOLATION_READ_COMMITTED":
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case "TRANSACTION_ISOLATION_REPEATABLE_READ":
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case "TRANSACTION_ISOLATION_SERIALIZABLE":
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_TransactionIsolationFromJSON = postgresqlconfig96_TransactionIsolationFromJSON;
function postgresqlconfig96_TransactionIsolationToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return "TRANSACTION_ISOLATION_UNSPECIFIED";
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return "TRANSACTION_ISOLATION_READ_COMMITTED";
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return "TRANSACTION_ISOLATION_REPEATABLE_READ";
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return "TRANSACTION_ISOLATION_SERIALIZABLE";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_TransactionIsolationToJSON = postgresqlconfig96_TransactionIsolationToJSON;
var Postgresqlconfig96_ByteaOutput;
(function (Postgresqlconfig96_ByteaOutput) {
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ByteaOutput = exports.Postgresqlconfig96_ByteaOutput || (exports.Postgresqlconfig96_ByteaOutput = {}));
function postgresqlconfig96_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case "BYTEA_OUTPUT_UNSPECIFIED":
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case "BYTEA_OUTPUT_HEX":
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case "BYTEA_OUTPUT_ESCAPED":
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_ByteaOutputFromJSON = postgresqlconfig96_ByteaOutputFromJSON;
function postgresqlconfig96_ByteaOutputToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return "BYTEA_OUTPUT_UNSPECIFIED";
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
            return "BYTEA_OUTPUT_HEX";
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return "BYTEA_OUTPUT_ESCAPED";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_ByteaOutputToJSON = postgresqlconfig96_ByteaOutputToJSON;
var Postgresqlconfig96_XmlBinary;
(function (Postgresqlconfig96_XmlBinary) {
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_XmlBinary = exports.Postgresqlconfig96_XmlBinary || (exports.Postgresqlconfig96_XmlBinary = {}));
function postgresqlconfig96_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_BINARY_UNSPECIFIED":
            return Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case "XML_BINARY_BASE64":
            return Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case "XML_BINARY_HEX":
            return Postgresqlconfig96_XmlBinary.XML_BINARY_HEX;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_XmlBinaryFromJSON = postgresqlconfig96_XmlBinaryFromJSON;
function postgresqlconfig96_XmlBinaryToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
            return "XML_BINARY_UNSPECIFIED";
        case Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64:
            return "XML_BINARY_BASE64";
        case Postgresqlconfig96_XmlBinary.XML_BINARY_HEX:
            return "XML_BINARY_HEX";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_XmlBinaryToJSON = postgresqlconfig96_XmlBinaryToJSON;
var Postgresqlconfig96_XmlOption;
(function (Postgresqlconfig96_XmlOption) {
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_XmlOption = exports.Postgresqlconfig96_XmlOption || (exports.Postgresqlconfig96_XmlOption = {}));
function postgresqlconfig96_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "XML_OPTION_UNSPECIFIED":
            return Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case "XML_OPTION_DOCUMENT":
            return Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case "XML_OPTION_CONTENT":
            return Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_XmlOptionFromJSON = postgresqlconfig96_XmlOptionFromJSON;
function postgresqlconfig96_XmlOptionToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED:
            return "XML_OPTION_UNSPECIFIED";
        case Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT:
            return "XML_OPTION_DOCUMENT";
        case Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT:
            return "XML_OPTION_CONTENT";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_XmlOptionToJSON = postgresqlconfig96_XmlOptionToJSON;
var Postgresqlconfig96_BackslashQuote;
(function (Postgresqlconfig96_BackslashQuote) {
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_BackslashQuote = exports.Postgresqlconfig96_BackslashQuote || (exports.Postgresqlconfig96_BackslashQuote = {}));
function postgresqlconfig96_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case "BACKSLASH_QUOTE_UNSPECIFIED":
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case "BACKSLASH_QUOTE":
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case "BACKSLASH_QUOTE_ON":
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case "BACKSLASH_QUOTE_OFF":
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case "BACKSLASH_QUOTE_SAFE_ENCODING":
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Postgresqlconfig96_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlconfig96_BackslashQuoteFromJSON = postgresqlconfig96_BackslashQuoteFromJSON;
function postgresqlconfig96_BackslashQuoteToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return "BACKSLASH_QUOTE_UNSPECIFIED";
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE:
            return "BACKSLASH_QUOTE";
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
            return "BACKSLASH_QUOTE_ON";
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return "BACKSLASH_QUOTE_OFF";
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return "BACKSLASH_QUOTE_SAFE_ENCODING";
        default:
            return "UNKNOWN";
    }
}
exports.postgresqlconfig96_BackslashQuoteToJSON = postgresqlconfig96_BackslashQuoteToJSON;
const basePostgresqlconfig96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6",
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
};
exports.Postgresqlconfig96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig9_6",
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
        if (message.sqlInheritance !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.sqlInheritance }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumMaxWorkers,
            }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostDelay,
            }, writer.uint32(602).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumVacuumCostLimit,
            }, writer.uint32(610).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.autovacuumNaptime,
            }, writer.uint32(618).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.archiveTimeout }, writer.uint32(626).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.trackActivityQuerySize,
            }, writer.uint32(634).fork()).ldelim();
        }
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveIoConcurrency,
            }, writer.uint32(642).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.effectiveCacheSize,
            }, writer.uint32(650).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlconfig96);
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
                    message.sqlInheritance = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumMaxWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumVacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.autovacuumVacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.autovacuumNaptime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.archiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.trackActivityQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.effectiveCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresqlconfig96);
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
                ? postgresqlconfig96_WalLevelFromJSON(object.walLevel)
                : 0;
        message.synchronousCommit =
            object.synchronousCommit !== undefined &&
                object.synchronousCommit !== null
                ? postgresqlconfig96_SynchronousCommitFromJSON(object.synchronousCommit)
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
                ? postgresqlconfig96_ConstraintExclusionFromJSON(object.constraintExclusion)
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
                ? postgresqlconfig96_ForceParallelModeFromJSON(object.forceParallelMode)
                : 0;
        message.clientMinMessages =
            object.clientMinMessages !== undefined &&
                object.clientMinMessages !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.clientMinMessages)
                : 0;
        message.logMinMessages =
            object.logMinMessages !== undefined && object.logMinMessages !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.logMinMessages)
                : 0;
        message.logMinErrorStatement =
            object.logMinErrorStatement !== undefined &&
                object.logMinErrorStatement !== null
                ? postgresqlconfig96_LogLevelFromJSON(object.logMinErrorStatement)
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
                ? postgresqlconfig96_LogErrorVerbosityFromJSON(object.logErrorVerbosity)
                : 0;
        message.logLockWaits =
            object.logLockWaits !== undefined && object.logLockWaits !== null
                ? Boolean(object.logLockWaits)
                : undefined;
        message.logStatement =
            object.logStatement !== undefined && object.logStatement !== null
                ? postgresqlconfig96_LogStatementFromJSON(object.logStatement)
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
                ? postgresqlconfig96_TransactionIsolationFromJSON(object.defaultTransactionIsolation)
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
                ? postgresqlconfig96_ByteaOutputFromJSON(object.byteaOutput)
                : 0;
        message.xmlbinary =
            object.xmlbinary !== undefined && object.xmlbinary !== null
                ? postgresqlconfig96_XmlBinaryFromJSON(object.xmlbinary)
                : 0;
        message.xmloption =
            object.xmloption !== undefined && object.xmloption !== null
                ? postgresqlconfig96_XmlOptionFromJSON(object.xmloption)
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
                ? postgresqlconfig96_BackslashQuoteFromJSON(object.backslashQuote)
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
        message.sqlInheritance =
            object.sqlInheritance !== undefined && object.sqlInheritance !== null
                ? Boolean(object.sqlInheritance)
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
            (obj.walLevel = postgresqlconfig96_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlconfig96_SynchronousCommitToJSON(message.synchronousCommit));
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
            (obj.constraintExclusion = postgresqlconfig96_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlconfig96_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlconfig96_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlconfig96_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlconfig96_LogLevelToJSON(message.logMinErrorStatement));
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
            (obj.logErrorVerbosity = postgresqlconfig96_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlconfig96_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined && (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlconfig96_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlconfig96_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlconfig96_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlconfig96_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlconfig96_BackslashQuoteToJSON(message.backslashQuote));
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
        message.sqlInheritance !== undefined &&
            (obj.sqlInheritance = message.sqlInheritance);
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
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56;
        const message = Object.assign({}, basePostgresqlconfig96);
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
        message.sqlInheritance = (_48 = object.sqlInheritance) !== null && _48 !== void 0 ? _48 : undefined;
        message.autovacuumMaxWorkers = (_49 = object.autovacuumMaxWorkers) !== null && _49 !== void 0 ? _49 : undefined;
        message.autovacuumVacuumCostDelay =
            (_50 = object.autovacuumVacuumCostDelay) !== null && _50 !== void 0 ? _50 : undefined;
        message.autovacuumVacuumCostLimit =
            (_51 = object.autovacuumVacuumCostLimit) !== null && _51 !== void 0 ? _51 : undefined;
        message.autovacuumNaptime = (_52 = object.autovacuumNaptime) !== null && _52 !== void 0 ? _52 : undefined;
        message.archiveTimeout = (_53 = object.archiveTimeout) !== null && _53 !== void 0 ? _53 : undefined;
        message.trackActivityQuerySize = (_54 = object.trackActivityQuerySize) !== null && _54 !== void 0 ? _54 : undefined;
        message.effectiveIoConcurrency = (_55 = object.effectiveIoConcurrency) !== null && _55 !== void 0 ? _55 : undefined;
        message.effectiveCacheSize = (_56 = object.effectiveCacheSize) !== null && _56 !== void 0 ? _56 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Postgresqlconfig96.$type, exports.Postgresqlconfig96);
const basePostgresqlconfigset96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6",
};
exports.Postgresqlconfigset96 = {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet9_6",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Postgresqlconfig96.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Postgresqlconfig96.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Postgresqlconfig96.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePostgresqlconfigset96);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePostgresqlconfigset96);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Postgresqlconfig96.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Postgresqlconfig96.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Postgresqlconfig96.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.Postgresqlconfig96.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Postgresqlconfig96.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Postgresqlconfig96.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePostgresqlconfigset96);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.Postgresqlconfig96.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.Postgresqlconfig96.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.Postgresqlconfig96.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Postgresqlconfigset96.$type, exports.Postgresqlconfigset96);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
