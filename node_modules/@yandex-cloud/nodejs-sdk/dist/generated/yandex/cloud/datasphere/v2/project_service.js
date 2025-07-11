"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceClient = exports.ProjectServiceService = exports.UpdateProjectAccessBindingsMetadata = exports.SetProjectAccessBindingsMetadata = exports.GetStateVariablesResponse = exports.GetStateVariablesRequest = exports.CellOutputsResponse = exports.CellOutputsRequest = exports.ProjectExecutionResponse = exports.ProjectExecutionMetadata = exports.ProjectExecutionRequest = exports.SetUnitBalanceMetadata = exports.SetUnitBalanceRequest = exports.GetUnitBalanceResponse = exports.GetUnitBalanceRequest = exports.ListProjectsResponse = exports.ListProjectsRequest = exports.GetProjectRequest = exports.OpenProjectResponse = exports.OpenProjectMetadata = exports.OpenProjectRequest = exports.DeleteProjectMetadata = exports.DeleteProjectRequest = exports.UpdateProjectMetadata = exports.UpdateProjectRequest_LabelsEntry = exports.UpdateProjectRequest = exports.CreateProjectMetadata = exports.CreateProjectRequest_LabelsEntry = exports.CreateProjectRequest = exports.openProjectMetadata_OpenProjectStatusToJSON = exports.openProjectMetadata_OpenProjectStatusFromJSON = exports.OpenProjectMetadata_OpenProjectStatus = exports.executionStatusToJSON = exports.executionStatusFromJSON = exports.ExecutionStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const project_1 = require("../../../../yandex/cloud/datasphere/v2/project");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const struct_1 = require("../../../../google/protobuf/struct");
exports.protobufPackage = "yandex.cloud.datasphere.v2";
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus[ExecutionStatus["EXECUTION_STATUS_UNSPECIFIED"] = 0] = "EXECUTION_STATUS_UNSPECIFIED";
    /** OK - Execution finished successfully. */
    ExecutionStatus[ExecutionStatus["OK"] = 1] = "OK";
    /** ERROR - Execution ended with error. */
    ExecutionStatus[ExecutionStatus["ERROR"] = 2] = "ERROR";
    /** ABORTED - Execution was aborted. */
    ExecutionStatus[ExecutionStatus["ABORTED"] = 3] = "ABORTED";
    ExecutionStatus[ExecutionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
function executionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "EXECUTION_STATUS_UNSPECIFIED":
            return ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED;
        case 1:
        case "OK":
            return ExecutionStatus.OK;
        case 2:
        case "ERROR":
            return ExecutionStatus.ERROR;
        case 3:
        case "ABORTED":
            return ExecutionStatus.ABORTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionStatus.UNRECOGNIZED;
    }
}
exports.executionStatusFromJSON = executionStatusFromJSON;
function executionStatusToJSON(object) {
    switch (object) {
        case ExecutionStatus.EXECUTION_STATUS_UNSPECIFIED:
            return "EXECUTION_STATUS_UNSPECIFIED";
        case ExecutionStatus.OK:
            return "OK";
        case ExecutionStatus.ERROR:
            return "ERROR";
        case ExecutionStatus.ABORTED:
            return "ABORTED";
        default:
            return "UNKNOWN";
    }
}
exports.executionStatusToJSON = executionStatusToJSON;
var OpenProjectMetadata_OpenProjectStatus;
(function (OpenProjectMetadata_OpenProjectStatus) {
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_UNSPECIFIED"] = 0] = "OPEN_PROJECT_STATUS_UNSPECIFIED";
    /** OPEN_PROJECT_STATUS_CLOSING_IDE - Closing previous IDE instance. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_CLOSING_IDE"] = 1] = "OPEN_PROJECT_STATUS_CLOSING_IDE";
    /** OPEN_PROJECT_STATUS_UNZIPPING_PROJECT - Unzipping project. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_UNZIPPING_PROJECT"] = 2] = "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT";
    /** OPEN_PROJECT_STATUS_ALLOCATING_VM - Allocating VM for the project. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_ALLOCATING_VM"] = 3] = "OPEN_PROJECT_STATUS_ALLOCATING_VM";
    /** OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES - Allocating resources for the project. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES"] = 4] = "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES";
    /** OPEN_PROJECT_STATUS_STARTING_IDE - Starting IDE. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_STARTING_IDE"] = 5] = "OPEN_PROJECT_STATUS_STARTING_IDE";
    /** OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT - Applying checkpoint to project. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT"] = 6] = "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT";
    /** OPEN_PROJECT_STATUS_UNKNOWN - Unknown open project status. */
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["OPEN_PROJECT_STATUS_UNKNOWN"] = 7] = "OPEN_PROJECT_STATUS_UNKNOWN";
    OpenProjectMetadata_OpenProjectStatus[OpenProjectMetadata_OpenProjectStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OpenProjectMetadata_OpenProjectStatus = exports.OpenProjectMetadata_OpenProjectStatus || (exports.OpenProjectMetadata_OpenProjectStatus = {}));
function openProjectMetadata_OpenProjectStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "OPEN_PROJECT_STATUS_UNSPECIFIED":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED;
        case 1:
        case "OPEN_PROJECT_STATUS_CLOSING_IDE":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE;
        case 2:
        case "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT;
        case 3:
        case "OPEN_PROJECT_STATUS_ALLOCATING_VM":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM;
        case 4:
        case "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES;
        case 5:
        case "OPEN_PROJECT_STATUS_STARTING_IDE":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE;
        case 6:
        case "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT;
        case 7:
        case "OPEN_PROJECT_STATUS_UNKNOWN":
            return OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OpenProjectMetadata_OpenProjectStatus.UNRECOGNIZED;
    }
}
exports.openProjectMetadata_OpenProjectStatusFromJSON = openProjectMetadata_OpenProjectStatusFromJSON;
function openProjectMetadata_OpenProjectStatusToJSON(object) {
    switch (object) {
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNSPECIFIED:
            return "OPEN_PROJECT_STATUS_UNSPECIFIED";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_CLOSING_IDE:
            return "OPEN_PROJECT_STATUS_CLOSING_IDE";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNZIPPING_PROJECT:
            return "OPEN_PROJECT_STATUS_UNZIPPING_PROJECT";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_VM:
            return "OPEN_PROJECT_STATUS_ALLOCATING_VM";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES:
            return "OPEN_PROJECT_STATUS_ALLOCATING_RESOURCES";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_STARTING_IDE:
            return "OPEN_PROJECT_STATUS_STARTING_IDE";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT:
            return "OPEN_PROJECT_STATUS_APPLYING_CHECKPOINT";
        case OpenProjectMetadata_OpenProjectStatus.OPEN_PROJECT_STATUS_UNKNOWN:
            return "OPEN_PROJECT_STATUS_UNKNOWN";
        default:
            return "UNKNOWN";
    }
}
exports.openProjectMetadata_OpenProjectStatusToJSON = openProjectMetadata_OpenProjectStatusToJSON;
const baseCreateProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectRequest",
    communityId: "",
    name: "",
    description: "",
};
exports.CreateProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateProjectRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.settings !== undefined) {
            project_1.Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            project_1.Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateProjectRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateProjectRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.settings = project_1.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.limits = project_1.Project_Limits.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseCreateProjectRequest);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? project_1.Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? project_1.Project_Limits.fromJSON(object.limits)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? project_1.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? project_1.Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCreateProjectRequest);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? project_1.Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? project_1.Project_Limits.fromPartial(object.limits)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProjectRequest.$type, exports.CreateProjectRequest);
const baseCreateProjectRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateProjectRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectRequest.LabelsEntry",
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
        const message = Object.assign({}, baseCreateProjectRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateProjectRequest_LabelsEntry);
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
        const message = Object.assign({}, baseCreateProjectRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProjectRequest_LabelsEntry.$type, exports.CreateProjectRequest_LabelsEntry);
const baseCreateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata",
    projectId: "",
};
exports.CreateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.CreateProjectMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateProjectMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateProjectMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateProjectMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProjectMetadata.$type, exports.CreateProjectMetadata);
const baseUpdateProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest",
    projectId: "",
    name: "",
    description: "",
};
exports.UpdateProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateProjectRequest_LabelsEntry.encode({
                $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.settings !== undefined) {
            project_1.Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            project_1.Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateProjectRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateProjectRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.settings = project_1.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.limits = project_1.Project_Limits.decode(reader, reader.uint32());
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
        const message = Object.assign({}, baseUpdateProjectRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
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
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? project_1.Project_Settings.fromJSON(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? project_1.Project_Limits.fromJSON(object.limits)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? project_1.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? project_1.Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseUpdateProjectRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? project_1.Project_Settings.fromPartial(object.settings)
                : undefined;
        message.limits =
            object.limits !== undefined && object.limits !== null
                ? project_1.Project_Limits.fromPartial(object.limits)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectRequest.$type, exports.UpdateProjectRequest);
const baseUpdateProjectRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateProjectRequest_LabelsEntry = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectRequest.LabelsEntry",
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
        const message = Object.assign({}, baseUpdateProjectRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateProjectRequest_LabelsEntry);
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
        const message = Object.assign({}, baseUpdateProjectRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectRequest_LabelsEntry.$type, exports.UpdateProjectRequest_LabelsEntry);
const baseUpdateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata",
    projectId: "",
};
exports.UpdateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateProjectMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateProjectMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateProjectMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectMetadata.$type, exports.UpdateProjectMetadata);
const baseDeleteProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest",
    projectId: "",
};
exports.DeleteProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.DeleteProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteProjectRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteProjectRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteProjectRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProjectRequest.$type, exports.DeleteProjectRequest);
const baseDeleteProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata",
    projectId: "",
};
exports.DeleteProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.DeleteProjectMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteProjectMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteProjectMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteProjectMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProjectMetadata.$type, exports.DeleteProjectMetadata);
const baseOpenProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectRequest",
    projectId: "",
};
exports.OpenProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenProjectRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOpenProjectRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOpenProjectRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectRequest.$type, exports.OpenProjectRequest);
const baseOpenProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata",
    projectId: "",
    status: 0,
};
exports.OpenProjectMetadata = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenProjectMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOpenProjectMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.status =
            object.status !== undefined && object.status !== null
                ? openProjectMetadata_OpenProjectStatusFromJSON(object.status)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.status !== undefined &&
            (obj.status = openProjectMetadata_OpenProjectStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenProjectMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectMetadata.$type, exports.OpenProjectMetadata);
const baseOpenProjectResponse = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectResponse",
    projectUrl: "",
    sessionToken: "",
};
exports.OpenProjectResponse = {
    $type: "yandex.cloud.datasphere.v2.OpenProjectResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectUrl !== "") {
            writer.uint32(10).string(message.projectUrl);
        }
        if (message.sessionToken !== "") {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseOpenProjectResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectUrl = reader.string();
                    break;
                case 2:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseOpenProjectResponse);
        message.projectUrl =
            object.projectUrl !== undefined && object.projectUrl !== null
                ? String(object.projectUrl)
                : "";
        message.sessionToken =
            object.sessionToken !== undefined && object.sessionToken !== null
                ? String(object.sessionToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectUrl !== undefined && (obj.projectUrl = message.projectUrl);
        message.sessionToken !== undefined &&
            (obj.sessionToken = message.sessionToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseOpenProjectResponse);
        message.projectUrl = (_a = object.projectUrl) !== null && _a !== void 0 ? _a : "";
        message.sessionToken = (_b = object.sessionToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectResponse.$type, exports.OpenProjectResponse);
const baseGetProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.GetProjectRequest",
    projectId: "",
};
exports.GetProjectRequest = {
    $type: "yandex.cloud.datasphere.v2.GetProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetProjectRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetProjectRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetProjectRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetProjectRequest.$type, exports.GetProjectRequest);
const baseListProjectsRequest = {
    $type: "yandex.cloud.datasphere.v2.ListProjectsRequest",
    communityId: "",
    pageSize: 0,
    pageToken: "",
    projectNamePattern: "",
    ownedById: "",
};
exports.ListProjectsRequest = {
    $type: "yandex.cloud.datasphere.v2.ListProjectsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityId !== "") {
            writer.uint32(10).string(message.communityId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.projectNamePattern !== "") {
            writer.uint32(34).string(message.projectNamePattern);
        }
        if (message.ownedById !== "") {
            writer.uint32(42).string(message.ownedById);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListProjectsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.projectNamePattern = reader.string();
                    break;
                case 5:
                    message.ownedById = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListProjectsRequest);
        message.communityId =
            object.communityId !== undefined && object.communityId !== null
                ? String(object.communityId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.projectNamePattern =
            object.projectNamePattern !== undefined &&
                object.projectNamePattern !== null
                ? String(object.projectNamePattern)
                : "";
        message.ownedById =
            object.ownedById !== undefined && object.ownedById !== null
                ? String(object.ownedById)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.communityId !== undefined &&
            (obj.communityId = message.communityId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.projectNamePattern !== undefined &&
            (obj.projectNamePattern = message.projectNamePattern);
        message.ownedById !== undefined && (obj.ownedById = message.ownedById);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseListProjectsRequest);
        message.communityId = (_a = object.communityId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.projectNamePattern = (_d = object.projectNamePattern) !== null && _d !== void 0 ? _d : "";
        message.ownedById = (_e = object.ownedById) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListProjectsRequest.$type, exports.ListProjectsRequest);
const baseListProjectsResponse = {
    $type: "yandex.cloud.datasphere.v2.ListProjectsResponse",
    nextPageToken: "",
};
exports.ListProjectsResponse = {
    $type: "yandex.cloud.datasphere.v2.ListProjectsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.projects) {
            project_1.Project.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListProjectsResponse);
        message.projects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(project_1.Project.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseListProjectsResponse);
        message.projects = ((_a = object.projects) !== null && _a !== void 0 ? _a : []).map((e) => project_1.Project.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? project_1.Project.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListProjectsResponse);
        message.projects =
            ((_a = object.projects) === null || _a === void 0 ? void 0 : _a.map((e) => project_1.Project.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListProjectsResponse.$type, exports.ListProjectsResponse);
const baseGetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest",
    projectId: "",
};
exports.GetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v2.GetUnitBalanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetUnitBalanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetUnitBalanceRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetUnitBalanceRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUnitBalanceRequest.$type, exports.GetUnitBalanceRequest);
const baseGetUnitBalanceResponse = {
    $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse",
};
exports.GetUnitBalanceResponse = {
    $type: "yandex.cloud.datasphere.v2.GetUnitBalanceResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetUnitBalanceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetUnitBalanceResponse);
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetUnitBalanceResponse);
        message.unitBalance = (_a = object.unitBalance) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUnitBalanceResponse.$type, exports.GetUnitBalanceResponse);
const baseSetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest",
    projectId: "",
};
exports.SetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v2.SetUnitBalanceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.unitBalance }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetUnitBalanceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetUnitBalanceRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.unitBalance =
            object.unitBalance !== undefined && object.unitBalance !== null
                ? Number(object.unitBalance)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSetUnitBalanceRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.unitBalance = (_b = object.unitBalance) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetUnitBalanceRequest.$type, exports.SetUnitBalanceRequest);
const baseSetUnitBalanceMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata",
    projectId: "",
};
exports.SetUnitBalanceMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetUnitBalanceMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetUnitBalanceMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetUnitBalanceMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetUnitBalanceMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetUnitBalanceMetadata.$type, exports.SetUnitBalanceMetadata);
const baseProjectExecutionRequest = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest",
    projectId: "",
    outputVariableNames: "",
};
exports.ProjectExecutionRequest = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        if (message.inputVariables !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.inputVariables), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.outputVariableNames) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProjectExecutionRequest);
        message.outputVariableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                case 4:
                    message.inputVariables = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputVariableNames.push(reader.string());
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
        const message = Object.assign({}, baseProjectExecutionRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : undefined;
        message.cellId =
            object.cellId !== undefined && object.cellId !== null
                ? String(object.cellId)
                : undefined;
        message.inputVariables =
            typeof object.inputVariables === "object"
                ? object.inputVariables
                : undefined;
        message.outputVariableNames = ((_a = object.outputVariableNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.inputVariables !== undefined &&
            (obj.inputVariables = message.inputVariables);
        if (message.outputVariableNames) {
            obj.outputVariableNames = message.outputVariableNames.map((e) => e);
        }
        else {
            obj.outputVariableNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseProjectExecutionRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.notebookId = (_b = object.notebookId) !== null && _b !== void 0 ? _b : undefined;
        message.cellId = (_c = object.cellId) !== null && _c !== void 0 ? _c : undefined;
        message.inputVariables = (_d = object.inputVariables) !== null && _d !== void 0 ? _d : undefined;
        message.outputVariableNames =
            ((_e = object.outputVariableNames) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionRequest.$type, exports.ProjectExecutionRequest);
const baseProjectExecutionMetadata = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata",
    projectId: "",
};
exports.ProjectExecutionMetadata = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProjectExecutionMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProjectExecutionMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : undefined;
        message.cellId =
            object.cellId !== undefined && object.cellId !== null
                ? String(object.cellId)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseProjectExecutionMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.notebookId = (_b = object.notebookId) !== null && _b !== void 0 ? _b : undefined;
        message.cellId = (_c = object.cellId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionMetadata.$type, exports.ProjectExecutionMetadata);
const baseProjectExecutionResponse = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse",
    checkpointId: "",
    executionStatus: 0,
};
exports.ProjectExecutionResponse = {
    $type: "yandex.cloud.datasphere.v2.ProjectExecutionResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.checkpointId !== "") {
            writer.uint32(10).string(message.checkpointId);
        }
        if (message.outputVariables !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.outputVariables), writer.uint32(18).fork()).ldelim();
        }
        if (message.executionStatus !== 0) {
            writer.uint32(24).int32(message.executionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseProjectExecutionResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checkpointId = reader.string();
                    break;
                case 2:
                    message.outputVariables = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.executionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseProjectExecutionResponse);
        message.checkpointId =
            object.checkpointId !== undefined && object.checkpointId !== null
                ? String(object.checkpointId)
                : "";
        message.outputVariables =
            typeof object.outputVariables === "object"
                ? object.outputVariables
                : undefined;
        message.executionStatus =
            object.executionStatus !== undefined && object.executionStatus !== null
                ? executionStatusFromJSON(object.executionStatus)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.outputVariables !== undefined &&
            (obj.outputVariables = message.outputVariables);
        message.executionStatus !== undefined &&
            (obj.executionStatus = executionStatusToJSON(message.executionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseProjectExecutionResponse);
        message.checkpointId = (_a = object.checkpointId) !== null && _a !== void 0 ? _a : "";
        message.outputVariables = (_b = object.outputVariables) !== null && _b !== void 0 ? _b : undefined;
        message.executionStatus = (_c = object.executionStatus) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionResponse.$type, exports.ProjectExecutionResponse);
const baseCellOutputsRequest = {
    $type: "yandex.cloud.datasphere.v2.CellOutputsRequest",
    projectId: "",
    cellId: "",
    checkpointId: "",
};
exports.CellOutputsRequest = {
    $type: "yandex.cloud.datasphere.v2.CellOutputsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.cellId !== "") {
            writer.uint32(18).string(message.cellId);
        }
        if (message.checkpointId !== "") {
            writer.uint32(26).string(message.checkpointId);
        }
        if (message.startAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCellOutputsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.cellId = reader.string();
                    break;
                case 3:
                    message.checkpointId = reader.string();
                    break;
                case 4:
                    message.startAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCellOutputsRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.cellId =
            object.cellId !== undefined && object.cellId !== null
                ? String(object.cellId)
                : "";
        message.checkpointId =
            object.checkpointId !== undefined && object.checkpointId !== null
                ? String(object.checkpointId)
                : "";
        message.startAt =
            object.startAt !== undefined && object.startAt !== null
                ? fromJsonTimestamp(object.startAt)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.startAt !== undefined &&
            (obj.startAt = message.startAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseCellOutputsRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.cellId = (_b = object.cellId) !== null && _b !== void 0 ? _b : "";
        message.checkpointId = (_c = object.checkpointId) !== null && _c !== void 0 ? _c : "";
        message.startAt = (_d = object.startAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CellOutputsRequest.$type, exports.CellOutputsRequest);
const baseCellOutputsResponse = {
    $type: "yandex.cloud.datasphere.v2.CellOutputsResponse",
    outputs: "",
};
exports.CellOutputsResponse = {
    $type: "yandex.cloud.datasphere.v2.CellOutputsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.outputs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCellOutputsResponse);
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outputs.push(reader.string());
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
        const message = Object.assign({}, baseCellOutputsResponse);
        message.outputs = ((_a = object.outputs) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => e);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCellOutputsResponse);
        message.outputs = ((_a = object.outputs) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CellOutputsResponse.$type, exports.CellOutputsResponse);
const baseGetStateVariablesRequest = {
    $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest",
    projectId: "",
    notebookId: "",
    variableNames: "",
    checkpointId: "",
};
exports.GetStateVariablesRequest = {
    $type: "yandex.cloud.datasphere.v2.GetStateVariablesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== "") {
            writer.uint32(18).string(message.notebookId);
        }
        for (const v of message.variableNames) {
            writer.uint32(26).string(v);
        }
        if (message.checkpointId !== "") {
            writer.uint32(34).string(message.checkpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetStateVariablesRequest);
        message.variableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.variableNames.push(reader.string());
                    break;
                case 4:
                    message.checkpointId = reader.string();
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
        const message = Object.assign({}, baseGetStateVariablesRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : "";
        message.variableNames = ((_a = object.variableNames) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.checkpointId =
            object.checkpointId !== undefined && object.checkpointId !== null
                ? String(object.checkpointId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        if (message.variableNames) {
            obj.variableNames = message.variableNames.map((e) => e);
        }
        else {
            obj.variableNames = [];
        }
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseGetStateVariablesRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.notebookId = (_b = object.notebookId) !== null && _b !== void 0 ? _b : "";
        message.variableNames = ((_c = object.variableNames) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.checkpointId = (_d = object.checkpointId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetStateVariablesRequest.$type, exports.GetStateVariablesRequest);
const baseGetStateVariablesResponse = {
    $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse",
};
exports.GetStateVariablesResponse = {
    $type: "yandex.cloud.datasphere.v2.GetStateVariablesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variables !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.variables), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetStateVariablesResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variables = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetStateVariablesResponse);
        message.variables =
            typeof object.variables === "object" ? object.variables : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variables !== undefined && (obj.variables = message.variables);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGetStateVariablesResponse);
        message.variables = (_a = object.variables) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetStateVariablesResponse.$type, exports.GetStateVariablesResponse);
const baseSetProjectAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata",
    projectId: "",
};
exports.SetProjectAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.SetProjectAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSetProjectAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSetProjectAccessBindingsMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSetProjectAccessBindingsMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetProjectAccessBindingsMetadata.$type, exports.SetProjectAccessBindingsMetadata);
const baseUpdateProjectAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata",
    projectId: "",
};
exports.UpdateProjectAccessBindingsMetadata = {
    $type: "yandex.cloud.datasphere.v2.UpdateProjectAccessBindingsMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateProjectAccessBindingsMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateProjectAccessBindingsMetadata);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateProjectAccessBindingsMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectAccessBindingsMetadata.$type, exports.UpdateProjectAccessBindingsMetadata);
/** A set of methods for managing Project resources. */
exports.ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Open",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.OpenProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(project_1.Project.encode(value).finish()),
        responseDeserialize: (value) => project_1.Project.decode(value),
    },
    /** Lists projects for the specified community. */
    list: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProjectsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProjectsResponse.decode(value),
    },
    /** Returns the unit balance of the specified project. */
    getUnitBalance: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/GetUnitBalance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetUnitBalanceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetUnitBalanceResponse.decode(value),
    },
    /** Sets the unit balance of the specified project. */
    setUnitBalance: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/SetUnitBalance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Executes code in the specified cell or notebook. */
    execute: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/Execute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ProjectExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ProjectExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns outputs of the specified cell. */
    getCellOutputs: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/GetCellOutputs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CellOutputsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CellOutputsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CellOutputsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CellOutputsResponse.decode(value),
    },
    /** Returns state variables of the specified notebook. */
    getStateVariables: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/GetStateVariables",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetStateVariablesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetStateVariablesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetStateVariablesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetStateVariablesResponse.decode(value),
    },
    /** Lists access bindings for the project. */
    listAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the project. */
    setAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the project. */
    updateAccessBindings: {
        path: "/yandex.cloud.datasphere.v2.ProjectService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ProjectServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectServiceService, "yandex.cloud.datasphere.v2.ProjectService");
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
