"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_LabelsEntry = exports.Project_Limits = exports.Project_Settings = exports.Project = exports.project_Settings_StaleExecutionTimeoutModeToJSON = exports.project_Settings_StaleExecutionTimeoutModeFromJSON = exports.Project_Settings_StaleExecutionTimeoutMode = exports.project_Settings_IdeToJSON = exports.project_Settings_IdeFromJSON = exports.Project_Settings_Ide = exports.project_Settings_CommitModeToJSON = exports.project_Settings_CommitModeFromJSON = exports.Project_Settings_CommitMode = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.datasphere.v2";
var Project_Settings_CommitMode;
(function (Project_Settings_CommitMode) {
    Project_Settings_CommitMode[Project_Settings_CommitMode["COMMIT_MODE_UNSPECIFIED"] = 0] = "COMMIT_MODE_UNSPECIFIED";
    /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
    Project_Settings_CommitMode[Project_Settings_CommitMode["STANDARD"] = 1] = "STANDARD";
    /**
     * AUTO - Commit happens periodically.
     * Also, automatic saving of state occurs when switching to another type of computing resource.
     */
    Project_Settings_CommitMode[Project_Settings_CommitMode["AUTO"] = 2] = "AUTO";
    Project_Settings_CommitMode[Project_Settings_CommitMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Project_Settings_CommitMode = exports.Project_Settings_CommitMode || (exports.Project_Settings_CommitMode = {}));
function project_Settings_CommitModeFromJSON(object) {
    switch (object) {
        case 0:
        case "COMMIT_MODE_UNSPECIFIED":
            return Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED;
        case 1:
        case "STANDARD":
            return Project_Settings_CommitMode.STANDARD;
        case 2:
        case "AUTO":
            return Project_Settings_CommitMode.AUTO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Project_Settings_CommitMode.UNRECOGNIZED;
    }
}
exports.project_Settings_CommitModeFromJSON = project_Settings_CommitModeFromJSON;
function project_Settings_CommitModeToJSON(object) {
    switch (object) {
        case Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED:
            return "COMMIT_MODE_UNSPECIFIED";
        case Project_Settings_CommitMode.STANDARD:
            return "STANDARD";
        case Project_Settings_CommitMode.AUTO:
            return "AUTO";
        default:
            return "UNKNOWN";
    }
}
exports.project_Settings_CommitModeToJSON = project_Settings_CommitModeToJSON;
var Project_Settings_Ide;
(function (Project_Settings_Ide) {
    Project_Settings_Ide[Project_Settings_Ide["IDE_UNSPECIFIED"] = 0] = "IDE_UNSPECIFIED";
    /** JUPYTER_LAB - Project running on JupyterLab IDE. */
    Project_Settings_Ide[Project_Settings_Ide["JUPYTER_LAB"] = 1] = "JUPYTER_LAB";
    Project_Settings_Ide[Project_Settings_Ide["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Project_Settings_Ide = exports.Project_Settings_Ide || (exports.Project_Settings_Ide = {}));
function project_Settings_IdeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDE_UNSPECIFIED":
            return Project_Settings_Ide.IDE_UNSPECIFIED;
        case 1:
        case "JUPYTER_LAB":
            return Project_Settings_Ide.JUPYTER_LAB;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Project_Settings_Ide.UNRECOGNIZED;
    }
}
exports.project_Settings_IdeFromJSON = project_Settings_IdeFromJSON;
function project_Settings_IdeToJSON(object) {
    switch (object) {
        case Project_Settings_Ide.IDE_UNSPECIFIED:
            return "IDE_UNSPECIFIED";
        case Project_Settings_Ide.JUPYTER_LAB:
            return "JUPYTER_LAB";
        default:
            return "UNKNOWN";
    }
}
exports.project_Settings_IdeToJSON = project_Settings_IdeToJSON;
var Project_Settings_StaleExecutionTimeoutMode;
(function (Project_Settings_StaleExecutionTimeoutMode) {
    Project_Settings_StaleExecutionTimeoutMode[Project_Settings_StaleExecutionTimeoutMode["STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED"] = 0] = "STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED";
    /** ONE_HOUR - Setting to automatically stop stale execution after one hour with low consumption. */
    Project_Settings_StaleExecutionTimeoutMode[Project_Settings_StaleExecutionTimeoutMode["ONE_HOUR"] = 1] = "ONE_HOUR";
    /** THREE_HOURS - Setting to automatically stop stale execution after three hours with low consumption. */
    Project_Settings_StaleExecutionTimeoutMode[Project_Settings_StaleExecutionTimeoutMode["THREE_HOURS"] = 2] = "THREE_HOURS";
    /** NO_TIMEOUT - Setting to never automatically stop stale executions. */
    Project_Settings_StaleExecutionTimeoutMode[Project_Settings_StaleExecutionTimeoutMode["NO_TIMEOUT"] = 3] = "NO_TIMEOUT";
    Project_Settings_StaleExecutionTimeoutMode[Project_Settings_StaleExecutionTimeoutMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Project_Settings_StaleExecutionTimeoutMode = exports.Project_Settings_StaleExecutionTimeoutMode || (exports.Project_Settings_StaleExecutionTimeoutMode = {}));
function project_Settings_StaleExecutionTimeoutModeFromJSON(object) {
    switch (object) {
        case 0:
        case "STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED":
            return Project_Settings_StaleExecutionTimeoutMode.STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED;
        case 1:
        case "ONE_HOUR":
            return Project_Settings_StaleExecutionTimeoutMode.ONE_HOUR;
        case 2:
        case "THREE_HOURS":
            return Project_Settings_StaleExecutionTimeoutMode.THREE_HOURS;
        case 3:
        case "NO_TIMEOUT":
            return Project_Settings_StaleExecutionTimeoutMode.NO_TIMEOUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Project_Settings_StaleExecutionTimeoutMode.UNRECOGNIZED;
    }
}
exports.project_Settings_StaleExecutionTimeoutModeFromJSON = project_Settings_StaleExecutionTimeoutModeFromJSON;
function project_Settings_StaleExecutionTimeoutModeToJSON(object) {
    switch (object) {
        case Project_Settings_StaleExecutionTimeoutMode.STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED:
            return "STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED";
        case Project_Settings_StaleExecutionTimeoutMode.ONE_HOUR:
            return "ONE_HOUR";
        case Project_Settings_StaleExecutionTimeoutMode.THREE_HOURS:
            return "THREE_HOURS";
        case Project_Settings_StaleExecutionTimeoutMode.NO_TIMEOUT:
            return "NO_TIMEOUT";
        default:
            return "UNKNOWN";
    }
}
exports.project_Settings_StaleExecutionTimeoutModeToJSON = project_Settings_StaleExecutionTimeoutModeToJSON;
const baseProject = {
    $type: "yandex.cloud.datasphere.v2.Project",
    id: "",
    name: "",
    description: "",
    createdById: "",
    communityId: "",
};
exports.Project = {
    $type: "yandex.cloud.datasphere.v2.Project",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Project_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.createdById !== "") {
            writer.uint32(50).string(message.createdById);
        }
        if (message.settings !== undefined) {
            exports.Project_Settings.encode(message.settings, writer.uint32(58).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            exports.Project_Limits.encode(message.limits, writer.uint32(66).fork()).ldelim();
        }
        if (message.communityId !== "") {
            writer.uint32(90).string(message.communityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProject);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.Project_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.createdById = reader.string();
                    break;
                case 7:
                    message.settings = exports.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.limits = exports.Project_Limits.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.communityId = reader.string();
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
        const message = Object.assign({}, baseProject);
        message.id =
            object.id !== undefined && object.id !== null ? String(object.id) : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.createdById =
            object.createdById !== undefined && object.createdById !== null
                ? String(object.createdById)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? exports.Project_Limits.fromJSON(object.limits)
                : undefined;
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.createdById !== undefined &&
            (obj.createdById = message.createdById);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? exports.Project_Limits.toJSON(message.limits)
                : undefined);
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseProject);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.labels = Object.entries((_e = object.labels) !== null && _e !== void 0 ? _e : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.createdById = (_f = object.createdById) !== null && _f !== void 0 ? _f : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? exports.Project_Limits.fromPartial(object.limits)
                : undefined;
        message.communityId = (_g = object.communityId) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project.$type, exports.Project);
const baseProject_Settings = {
    $type: "yandex.cloud.datasphere.v2.Project.Settings",
    serviceAccountId: "",
    subnetId: "",
    dataProcClusterId: "",
    commitMode: 0,
    securityGroupIds: "",
    earlyAccess: false,
    ide: 0,
    defaultFolderId: "",
    staleExecTimeoutMode: 0,
};
exports.Project_Settings = {
    $type: "yandex.cloud.datasphere.v2.Project.Settings",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== "") {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.subnetId !== "") {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.dataProcClusterId !== "") {
            writer.uint32(26).string(message.dataProcClusterId);
        }
        if (message.commitMode !== 0) {
            writer.uint32(32).int32(message.commitMode);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v);
        }
        if (message.earlyAccess === true) {
            writer.uint32(48).bool(message.earlyAccess);
        }
        if (message.ide !== 0) {
            writer.uint32(56).int32(message.ide);
        }
        if (message.defaultFolderId !== "") {
            writer.uint32(66).string(message.defaultFolderId);
        }
        if (message.staleExecTimeoutMode !== 0) {
            writer.uint32(72).int32(message.staleExecTimeoutMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProject_Settings);
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.dataProcClusterId = reader.string();
                    break;
                case 4:
                    message.commitMode = reader.int32();
                    break;
                case 5:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 6:
                    message.earlyAccess = reader.bool();
                    break;
                case 7:
                    message.ide = reader.int32();
                    break;
                case 8:
                    message.defaultFolderId = reader.string();
                    break;
                case 9:
                    message.staleExecTimeoutMode = reader.int32();
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
        const message = Object.assign({}, baseProject_Settings);
        message.serviceAccountId =
            object.serviceAccountId !== undefined && object.serviceAccountId !== null
                ? String(object.serviceAccountId)
                : "";
        message.subnetId =
            object.subnetId !== undefined && object.subnetId !== null
                ? String(object.subnetId)
                : "";
        message.dataProcClusterId =
            object.dataProcClusterId !== undefined &&
                object.dataProcClusterId !== null
                ? String(object.dataProcClusterId)
                : "";
        message.commitMode =
            object.commitMode !== undefined && object.commitMode !== null
                ? project_Settings_CommitModeFromJSON(object.commitMode)
                : 0;
        message.securityGroupIds = ((_a = object.securityGroupIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.earlyAccess =
            object.earlyAccess !== undefined && object.earlyAccess !== null
                ? Boolean(object.earlyAccess)
                : false;
        message.ide =
            object.ide !== undefined && object.ide !== null
                ? project_Settings_IdeFromJSON(object.ide)
                : 0;
        message.defaultFolderId =
            object.defaultFolderId !== undefined && object.defaultFolderId !== null
                ? String(object.defaultFolderId)
                : "";
        message.staleExecTimeoutMode =
            object.staleExecTimeoutMode !== undefined &&
                object.staleExecTimeoutMode !== null
                ? project_Settings_StaleExecutionTimeoutModeFromJSON(object.staleExecTimeoutMode)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.dataProcClusterId !== undefined &&
            (obj.dataProcClusterId = message.dataProcClusterId);
        message.commitMode !== undefined &&
            (obj.commitMode = project_Settings_CommitModeToJSON(message.commitMode));
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.earlyAccess !== undefined &&
            (obj.earlyAccess = message.earlyAccess);
        message.ide !== undefined &&
            (obj.ide = project_Settings_IdeToJSON(message.ide));
        message.defaultFolderId !== undefined &&
            (obj.defaultFolderId = message.defaultFolderId);
        message.staleExecTimeoutMode !== undefined &&
            (obj.staleExecTimeoutMode =
                project_Settings_StaleExecutionTimeoutModeToJSON(message.staleExecTimeoutMode));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = Object.assign({}, baseProject_Settings);
        message.serviceAccountId = (_a = object.serviceAccountId) !== null && _a !== void 0 ? _a : "";
        message.subnetId = (_b = object.subnetId) !== null && _b !== void 0 ? _b : "";
        message.dataProcClusterId = (_c = object.dataProcClusterId) !== null && _c !== void 0 ? _c : "";
        message.commitMode = (_d = object.commitMode) !== null && _d !== void 0 ? _d : 0;
        message.securityGroupIds = ((_e = object.securityGroupIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.earlyAccess = (_f = object.earlyAccess) !== null && _f !== void 0 ? _f : false;
        message.ide = (_g = object.ide) !== null && _g !== void 0 ? _g : 0;
        message.defaultFolderId = (_h = object.defaultFolderId) !== null && _h !== void 0 ? _h : "";
        message.staleExecTimeoutMode = (_j = object.staleExecTimeoutMode) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project_Settings.$type, exports.Project_Settings);
const baseProject_Limits = {
    $type: "yandex.cloud.datasphere.v2.Project.Limits",
};
exports.Project_Limits = {
    $type: "yandex.cloud.datasphere.v2.Project.Limits",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxUnitsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerHour,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxUnitsPerExecution,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProject_Limits);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxUnitsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxUnitsPerExecution = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProject_Limits);
        message.maxUnitsPerHour =
            object.maxUnitsPerHour !== undefined && object.maxUnitsPerHour !== null
                ? Number(object.maxUnitsPerHour)
                : undefined;
        message.maxUnitsPerExecution =
            object.maxUnitsPerExecution !== undefined &&
                object.maxUnitsPerExecution !== null
                ? Number(object.maxUnitsPerExecution)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxUnitsPerHour !== undefined &&
            (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseProject_Limits);
        message.maxUnitsPerHour = (_a = object.maxUnitsPerHour) !== null && _a !== void 0 ? _a : undefined;
        message.maxUnitsPerExecution = (_b = object.maxUnitsPerExecution) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project_Limits.$type, exports.Project_Limits);
const baseProject_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry",
    key: "",
    value: "",
};
exports.Project_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProject_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProject_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseProject_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project_LabelsEntry.$type, exports.Project_LabelsEntry);
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
