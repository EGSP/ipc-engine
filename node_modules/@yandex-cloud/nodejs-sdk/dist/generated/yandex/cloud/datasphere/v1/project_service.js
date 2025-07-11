"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceClient = exports.ProjectServiceService = exports.GetNotebookMetadataResponse = exports.GetNotebookMetadataRequest = exports.GetStateVariablesResponse = exports.GetStateVariablesRequest = exports.CellOutputsResponse = exports.CellOutputsRequest = exports.ProjectExecutionResponse = exports.ProjectExecutionMetadata = exports.ProjectExecutionRequest = exports.SetUnitBalanceRequest = exports.GetUnitBalanceResponse = exports.GetUnitBalanceRequest = exports.ListProjectsResponse = exports.ListProjectsRequest = exports.GetProjectRequest = exports.OpenProjectResponse = exports.OpenProjectMetadata = exports.OpenProjectRequest = exports.DeleteProjectMetadata = exports.DeleteProjectRequest = exports.UpdateProjectMetadata = exports.UpdateProjectRequest = exports.CreateProjectMetadata = exports.CreateProjectRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const project_1 = require("../../../../yandex/cloud/datasphere/v1/project");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const empty_1 = require("../../../../google/protobuf/empty");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const struct_1 = require("../../../../google/protobuf/struct");
exports.protobufPackage = "yandex.cloud.datasphere.v1";
const baseCreateProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.CreateProjectRequest",
    folderId: "",
    name: "",
    description: "",
};
exports.CreateProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.CreateProjectRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.settings !== undefined) {
            project_1.Project_Settings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            project_1.Project_Limits.encode(message.limits, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateProjectRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.settings = project_1.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = Object.assign({}, baseCreateProjectRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
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
        var _a, _b, _c;
        const message = Object.assign({}, baseCreateProjectRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
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
const baseCreateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata",
    projectId: "",
};
exports.CreateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata",
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
    $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest",
    projectId: "",
    name: "",
    description: "",
};
exports.UpdateProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest",
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
        const message = Object.assign({}, baseUpdateProjectRequest);
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
        var _a, _b, _c;
        const message = Object.assign({}, baseUpdateProjectRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
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
const baseUpdateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata",
    projectId: "",
};
exports.UpdateProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata",
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
    $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest",
    projectId: "",
};
exports.DeleteProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest",
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
    $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata",
    projectId: "",
};
exports.DeleteProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata",
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
    $type: "yandex.cloud.datasphere.v1.OpenProjectRequest",
    projectId: "",
};
exports.OpenProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.OpenProjectRequest",
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
    $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata",
    projectId: "",
};
exports.OpenProjectMetadata = {
    $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseOpenProjectMetadata);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectMetadata.$type, exports.OpenProjectMetadata);
const baseOpenProjectResponse = {
    $type: "yandex.cloud.datasphere.v1.OpenProjectResponse",
    projectUrl: "",
    sessionToken: "",
};
exports.OpenProjectResponse = {
    $type: "yandex.cloud.datasphere.v1.OpenProjectResponse",
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
    $type: "yandex.cloud.datasphere.v1.GetProjectRequest",
    projectId: "",
};
exports.GetProjectRequest = {
    $type: "yandex.cloud.datasphere.v1.GetProjectRequest",
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
    $type: "yandex.cloud.datasphere.v1.ListProjectsRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListProjectsRequest = {
    $type: "yandex.cloud.datasphere.v1.ListProjectsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
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
        const message = Object.assign({}, baseListProjectsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
        const message = Object.assign({}, baseListProjectsRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListProjectsRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListProjectsRequest.$type, exports.ListProjectsRequest);
const baseListProjectsResponse = {
    $type: "yandex.cloud.datasphere.v1.ListProjectsResponse",
    nextPageToken: "",
};
exports.ListProjectsResponse = {
    $type: "yandex.cloud.datasphere.v1.ListProjectsResponse",
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
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest",
    projectId: "",
};
exports.GetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest",
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
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse",
};
exports.GetUnitBalanceResponse = {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse",
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
    $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest",
    projectId: "",
};
exports.SetUnitBalanceRequest = {
    $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest",
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
const baseProjectExecutionRequest = {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest",
    projectId: "",
    outputVariableNames: "",
};
exports.ProjectExecutionRequest = {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest",
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
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata",
    projectId: "",
};
exports.ProjectExecutionMetadata = {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata",
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
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse",
    checkpointId: "",
};
exports.ProjectExecutionResponse = {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.checkpointId !== "") {
            writer.uint32(10).string(message.checkpointId);
        }
        if (message.outputVariables !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.outputVariables), writer.uint32(18).fork()).ldelim();
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.outputVariables !== undefined &&
            (obj.outputVariables = message.outputVariables);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseProjectExecutionResponse);
        message.checkpointId = (_a = object.checkpointId) !== null && _a !== void 0 ? _a : "";
        message.outputVariables = (_b = object.outputVariables) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionResponse.$type, exports.ProjectExecutionResponse);
const baseCellOutputsRequest = {
    $type: "yandex.cloud.datasphere.v1.CellOutputsRequest",
    projectId: "",
    cellId: "",
    checkpointId: "",
};
exports.CellOutputsRequest = {
    $type: "yandex.cloud.datasphere.v1.CellOutputsRequest",
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
    $type: "yandex.cloud.datasphere.v1.CellOutputsResponse",
    outputs: "",
};
exports.CellOutputsResponse = {
    $type: "yandex.cloud.datasphere.v1.CellOutputsResponse",
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
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest",
    projectId: "",
    notebookId: "",
    variableNames: "",
    checkpointId: "",
};
exports.GetStateVariablesRequest = {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest",
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
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse",
};
exports.GetStateVariablesResponse = {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse",
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
const baseGetNotebookMetadataRequest = {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest",
    projectId: "",
    notebookPath: "",
};
exports.GetNotebookMetadataRequest = {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookPath !== "") {
            writer.uint32(18).string(message.notebookPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNotebookMetadataRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetNotebookMetadataRequest);
        message.projectId =
            object.projectId !== undefined && object.projectId !== null
                ? String(object.projectId)
                : "";
        message.notebookPath =
            object.notebookPath !== undefined && object.notebookPath !== null
                ? String(object.notebookPath)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookPath !== undefined &&
            (obj.notebookPath = message.notebookPath);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetNotebookMetadataRequest);
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.notebookPath = (_b = object.notebookPath) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetNotebookMetadataRequest.$type, exports.GetNotebookMetadataRequest);
const baseGetNotebookMetadataResponse = {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse",
    notebookId: "",
    contentLength: 0,
    cellIds: "",
};
exports.GetNotebookMetadataResponse = {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.notebookId !== "") {
            writer.uint32(10).string(message.notebookId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.contentLength !== 0) {
            writer.uint32(32).int64(message.contentLength);
        }
        for (const v of message.cellIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetNotebookMetadataResponse);
        message.cellIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notebookId = reader.string();
                    break;
                case 2:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.contentLength = longToNumber(reader.int64());
                    break;
                case 5:
                    message.cellIds.push(reader.string());
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
        const message = Object.assign({}, baseGetNotebookMetadataResponse);
        message.notebookId =
            object.notebookId !== undefined && object.notebookId !== null
                ? String(object.notebookId)
                : "";
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? fromJsonTimestamp(object.createdAt)
                : undefined;
        message.modifiedAt =
            object.modifiedAt !== undefined && object.modifiedAt !== null
                ? fromJsonTimestamp(object.modifiedAt)
                : undefined;
        message.contentLength =
            object.contentLength !== undefined && object.contentLength !== null
                ? Number(object.contentLength)
                : 0;
        message.cellIds = ((_a = object.cellIds) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.notebookId !== undefined && (obj.notebookId = message.notebookId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.contentLength !== undefined &&
            (obj.contentLength = Math.round(message.contentLength));
        if (message.cellIds) {
            obj.cellIds = message.cellIds.map((e) => e);
        }
        else {
            obj.cellIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseGetNotebookMetadataResponse);
        message.notebookId = (_a = object.notebookId) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.modifiedAt = (_c = object.modifiedAt) !== null && _c !== void 0 ? _c : undefined;
        message.contentLength = (_d = object.contentLength) !== null && _d !== void 0 ? _d : 0;
        message.cellIds = ((_e = object.cellIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetNotebookMetadataResponse.$type, exports.GetNotebookMetadataResponse);
/** A set of methods for managing Project resources. */
exports.ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Open",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.OpenProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(project_1.Project.encode(value).finish()),
        responseDeserialize: (value) => project_1.Project.decode(value),
    },
    /** Lists projects for the specified folder. */
    list: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProjectsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProjectsResponse.decode(value),
    },
    /** Returns the unit balance of the specified project. */
    getUnitBalance: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetUnitBalanceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetUnitBalanceResponse.decode(value),
    },
    /** Sets the unit balance of the specified project. */
    setUnitBalance: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
    /** Executes code in the specified cell or notebook. */
    execute: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/Execute",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ProjectExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ProjectExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns outputs of the specified cell. */
    getCellOutputs: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CellOutputsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CellOutputsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CellOutputsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CellOutputsResponse.decode(value),
    },
    /** Returns state variables of the specified notebook. */
    getStateVariables: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetStateVariablesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetStateVariablesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetStateVariablesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetStateVariablesResponse.decode(value),
    },
    /** Returns metadata of the specified notebook. */
    getNotebookMetadata: {
        path: "/yandex.cloud.datasphere.v1.ProjectService/GetNotebookMetadata",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetNotebookMetadataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetNotebookMetadataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetNotebookMetadataResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetNotebookMetadataResponse.decode(value),
    },
};
exports.ProjectServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectServiceService, "yandex.cloud.datasphere.v1.ProjectService");
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
