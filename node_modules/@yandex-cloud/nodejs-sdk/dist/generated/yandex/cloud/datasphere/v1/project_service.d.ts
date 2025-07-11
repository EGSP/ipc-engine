/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Project_Settings, Project_Limits, Project } from "../../../../yandex/cloud/datasphere/v1/project";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { Empty } from "../../../../google/protobuf/empty";
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface CreateProjectRequest {
    $type: "yandex.cloud.datasphere.v1.CreateProjectRequest";
    /**
     * ID of the folder to create a project in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
}
export interface CreateProjectMetadata {
    $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata";
    /** ID of the project that is being created. */
    projectId: string;
}
export interface UpdateProjectRequest {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest";
    /**
     * ID of the Project resource to update.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
    /** Field mask that specifies which fields of the Project resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the project. */
    name: string;
    /** Description of the project. */
    description: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
}
export interface UpdateProjectMetadata {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata";
    /** ID of the project that is being updated. */
    projectId: string;
}
export interface DeleteProjectRequest {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest";
    /**
     * ID of the Project resource to delete.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}
export interface DeleteProjectMetadata {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata";
    /** ID of the project that is being deleted. */
    projectId: string;
}
export interface OpenProjectRequest {
    $type: "yandex.cloud.datasphere.v1.OpenProjectRequest";
    /**
     * ID of the Project resource to open.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}
export interface OpenProjectMetadata {
    $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata";
    /** ID of the project that is being opened. */
    projectId: string;
}
export interface OpenProjectResponse {
    $type: "yandex.cloud.datasphere.v1.OpenProjectResponse";
    /**
     * URL of the project that is being opened.
     * Make GET request to [project_url] with sessionToken query parameter equals to [session_token]
     * or POST request to [project_url] with sessionToken body parameter equals to [session_token]
     * to fetch Datasphere web interface.
     */
    projectUrl: string;
    /** Session token of the project that is being opened. */
    sessionToken: string;
}
export interface GetProjectRequest {
    $type: "yandex.cloud.datasphere.v1.GetProjectRequest";
    /**
     * ID of the Project resource to return.
     * To get the project ID use a [ProjectService.List] request.
     */
    projectId: string;
}
export interface ListProjectsRequest {
    $type: "yandex.cloud.datasphere.v1.ListProjectsRequest";
    /**
     * ID of the folder to list projects in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListProjectsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListProjectsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListProjectsResponse {
    $type: "yandex.cloud.datasphere.v1.ListProjectsResponse";
    /** List of Project resources. */
    projects: Project[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListProjectsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListProjectsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetUnitBalanceRequest {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest";
    /** ID of the project to return the unit balance for. */
    projectId: string;
}
export interface GetUnitBalanceResponse {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse";
    /** The number of units available to the project. */
    unitBalance?: number;
}
export interface SetUnitBalanceRequest {
    $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest";
    /** ID of the project to set the unit balance for. */
    projectId: string;
    /** The number of units available to the project. */
    unitBalance?: number;
}
export interface ProjectExecutionRequest {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest";
    /** ID of the project to execute notebook/cell in. */
    projectId: string;
    /** ID of the notebook to execute. */
    notebookId: string | undefined;
    /** ID of the cell to execute. */
    cellId: string | undefined;
    /** Values of input variables. */
    inputVariables?: {
        [key: string]: any;
    };
    /** Names of output variables. */
    outputVariableNames: string[];
}
export interface ProjectExecutionMetadata {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata";
    /** ID of the project in which notebook is being executed. */
    projectId: string;
    /** ID of the notebook that is being executed */
    notebookId: string | undefined;
    /** ID of the cell that is being executed */
    cellId: string | undefined;
}
export interface ProjectExecutionResponse {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse";
    /** ID of the checkpoint resulting from the execution. */
    checkpointId: string;
    /** Values of output variables resulting from the execution. */
    outputVariables?: {
        [key: string]: any;
    };
}
export interface CellOutputsRequest {
    $type: "yandex.cloud.datasphere.v1.CellOutputsRequest";
    /** ID of the project to return cell outputs for. */
    projectId: string;
    /** ID of the cell to return outputs for. */
    cellId: string;
    /** ID of the checkpoint to return cell outputs for. */
    checkpointId: string;
    /** Timestamp from which to return outputs. */
    startAt?: Date;
}
export interface CellOutputsResponse {
    $type: "yandex.cloud.datasphere.v1.CellOutputsResponse";
    /** List of outputs. */
    outputs: string[];
}
export interface GetStateVariablesRequest {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest";
    /** ID of the project, for which to return state variables. */
    projectId: string;
    /** ID of the notebook, for which to return state variables. */
    notebookId: string;
    /** Names of variables to return. */
    variableNames: string[];
    /** ID of the checkpoint, for which to return state variables. */
    checkpointId: string;
}
export interface GetStateVariablesResponse {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse";
    /** Values of the specified variables. */
    variables?: {
        [key: string]: any;
    };
}
export interface GetNotebookMetadataRequest {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest";
    /** ID of the project, for which to return notebook metadata. */
    projectId: string;
    /** Path of the notebook to get metadata. */
    notebookPath: string;
}
export interface GetNotebookMetadataResponse {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse";
    /** ID of the specified notebook. */
    notebookId: string;
    /** The time the notebook was created. */
    createdAt?: Date;
    /** The time the notebook was modified last time. */
    modifiedAt?: Date;
    /** Content length of the specified notebook. */
    contentLength: number;
    /** Cell ids of the specified notebook. */
    cellIds: string[];
}
export declare const CreateProjectRequest: {
    $type: "yandex.cloud.datasphere.v1.CreateProjectRequest";
    encode(message: CreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectRequest;
    fromJSON(object: any): CreateProjectRequest;
    toJSON(message: CreateProjectRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        settings?: {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } | undefined;
        limits?: {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        settings?: ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } & {
            subnetId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["settings"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "subnetId" | "securityGroupIds" | "serviceAccountId" | "dataProcClusterId" | "commitMode">, never>) | undefined;
        limits?: ({
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & Record<Exclude<keyof I["limits"], "$type" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "settings" | "limits">, never>>(object: I): CreateProjectRequest;
};
export declare const CreateProjectMetadata: {
    $type: "yandex.cloud.datasphere.v1.CreateProjectMetadata";
    encode(message: CreateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectMetadata;
    fromJSON(object: any): CreateProjectMetadata;
    toJSON(message: CreateProjectMetadata): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): CreateProjectMetadata;
};
export declare const UpdateProjectRequest: {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectRequest";
    encode(message: UpdateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProjectRequest;
    fromJSON(object: any): UpdateProjectRequest;
    toJSON(message: UpdateProjectRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        settings?: {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } | undefined;
        projectId?: string | undefined;
        limits?: {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        settings?: ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } & {
            subnetId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["settings"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "subnetId" | "securityGroupIds" | "serviceAccountId" | "dataProcClusterId" | "commitMode">, never>) | undefined;
        projectId?: string | undefined;
        limits?: ({
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & Record<Exclude<keyof I["limits"], "$type" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "updateMask" | "settings" | "projectId" | "limits">, never>>(object: I): UpdateProjectRequest;
};
export declare const UpdateProjectMetadata: {
    $type: "yandex.cloud.datasphere.v1.UpdateProjectMetadata";
    encode(message: UpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProjectMetadata;
    fromJSON(object: any): UpdateProjectMetadata;
    toJSON(message: UpdateProjectMetadata): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): UpdateProjectMetadata;
};
export declare const DeleteProjectRequest: {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectRequest";
    encode(message: DeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectRequest;
    fromJSON(object: any): DeleteProjectRequest;
    toJSON(message: DeleteProjectRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): DeleteProjectRequest;
};
export declare const DeleteProjectMetadata: {
    $type: "yandex.cloud.datasphere.v1.DeleteProjectMetadata";
    encode(message: DeleteProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectMetadata;
    fromJSON(object: any): DeleteProjectMetadata;
    toJSON(message: DeleteProjectMetadata): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): DeleteProjectMetadata;
};
export declare const OpenProjectRequest: {
    $type: "yandex.cloud.datasphere.v1.OpenProjectRequest";
    encode(message: OpenProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectRequest;
    fromJSON(object: any): OpenProjectRequest;
    toJSON(message: OpenProjectRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): OpenProjectRequest;
};
export declare const OpenProjectMetadata: {
    $type: "yandex.cloud.datasphere.v1.OpenProjectMetadata";
    encode(message: OpenProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectMetadata;
    fromJSON(object: any): OpenProjectMetadata;
    toJSON(message: OpenProjectMetadata): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): OpenProjectMetadata;
};
export declare const OpenProjectResponse: {
    $type: "yandex.cloud.datasphere.v1.OpenProjectResponse";
    encode(message: OpenProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenProjectResponse;
    fromJSON(object: any): OpenProjectResponse;
    toJSON(message: OpenProjectResponse): unknown;
    fromPartial<I extends {
        projectUrl?: string | undefined;
        sessionToken?: string | undefined;
    } & {
        projectUrl?: string | undefined;
        sessionToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectUrl" | "sessionToken">, never>>(object: I): OpenProjectResponse;
};
export declare const GetProjectRequest: {
    $type: "yandex.cloud.datasphere.v1.GetProjectRequest";
    encode(message: GetProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProjectRequest;
    fromJSON(object: any): GetProjectRequest;
    toJSON(message: GetProjectRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): GetProjectRequest;
};
export declare const ListProjectsRequest: {
    $type: "yandex.cloud.datasphere.v1.ListProjectsRequest";
    encode(message: ListProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsRequest;
    fromJSON(object: any): ListProjectsRequest;
    toJSON(message: ListProjectsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListProjectsRequest;
};
export declare const ListProjectsResponse: {
    $type: "yandex.cloud.datasphere.v1.ListProjectsResponse";
    encode(message: ListProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsResponse;
    fromJSON(object: any): ListProjectsResponse;
    toJSON(message: ListProjectsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        projects?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            settings?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } | undefined;
            limits?: {
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        projects?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            settings?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } | undefined;
            limits?: {
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            settings?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } | undefined;
            limits?: {
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            settings?: ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } & {
                subnetId?: string | undefined;
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["projects"][number]["settings"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } & Record<Exclude<keyof I["projects"][number]["settings"], "$type" | "subnetId" | "securityGroupIds" | "serviceAccountId" | "dataProcClusterId" | "commitMode">, never>) | undefined;
            limits?: ({
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } & {
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } & Record<Exclude<keyof I["projects"][number]["limits"], "$type" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>) | undefined;
        } & Record<Exclude<keyof I["projects"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "settings" | "limits">, never>)[] & Record<Exclude<keyof I["projects"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            settings?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                serviceAccountId?: string | undefined;
                dataProcClusterId?: string | undefined;
                commitMode?: import("../../../../yandex/cloud/datasphere/v1/project").Project_Settings_CommitMode | undefined;
            } | undefined;
            limits?: {
                maxUnitsPerHour?: number | undefined;
                maxUnitsPerExecution?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "projects">, never>>(object: I): ListProjectsResponse;
};
export declare const GetUnitBalanceRequest: {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceRequest";
    encode(message: GetUnitBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUnitBalanceRequest;
    fromJSON(object: any): GetUnitBalanceRequest;
    toJSON(message: GetUnitBalanceRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId">, never>>(object: I): GetUnitBalanceRequest;
};
export declare const GetUnitBalanceResponse: {
    $type: "yandex.cloud.datasphere.v1.GetUnitBalanceResponse";
    encode(message: GetUnitBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUnitBalanceResponse;
    fromJSON(object: any): GetUnitBalanceResponse;
    toJSON(message: GetUnitBalanceResponse): unknown;
    fromPartial<I extends {
        unitBalance?: number | undefined;
    } & {
        unitBalance?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "unitBalance">, never>>(object: I): GetUnitBalanceResponse;
};
export declare const SetUnitBalanceRequest: {
    $type: "yandex.cloud.datasphere.v1.SetUnitBalanceRequest";
    encode(message: SetUnitBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetUnitBalanceRequest;
    fromJSON(object: any): SetUnitBalanceRequest;
    toJSON(message: SetUnitBalanceRequest): unknown;
    fromPartial<I extends {
        unitBalance?: number | undefined;
        projectId?: string | undefined;
    } & {
        unitBalance?: number | undefined;
        projectId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "unitBalance" | "projectId">, never>>(object: I): SetUnitBalanceRequest;
};
export declare const ProjectExecutionRequest: {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionRequest";
    encode(message: ProjectExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProjectExecutionRequest;
    fromJSON(object: any): ProjectExecutionRequest;
    toJSON(message: ProjectExecutionRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
        outputVariableNames?: string[] | undefined;
        notebookId?: string | undefined;
        cellId?: string | undefined;
        inputVariables?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        projectId?: string | undefined;
        outputVariableNames?: (string[] & string[] & Record<Exclude<keyof I["outputVariableNames"], "$type" | keyof string[]>, never>) | undefined;
        notebookId?: string | undefined;
        cellId?: string | undefined;
        inputVariables?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["inputVariables"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId" | "outputVariableNames" | "notebookId" | "cellId" | "inputVariables">, never>>(object: I): ProjectExecutionRequest;
};
export declare const ProjectExecutionMetadata: {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionMetadata";
    encode(message: ProjectExecutionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProjectExecutionMetadata;
    fromJSON(object: any): ProjectExecutionMetadata;
    toJSON(message: ProjectExecutionMetadata): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
        notebookId?: string | undefined;
        cellId?: string | undefined;
    } & {
        projectId?: string | undefined;
        notebookId?: string | undefined;
        cellId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId" | "notebookId" | "cellId">, never>>(object: I): ProjectExecutionMetadata;
};
export declare const ProjectExecutionResponse: {
    $type: "yandex.cloud.datasphere.v1.ProjectExecutionResponse";
    encode(message: ProjectExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProjectExecutionResponse;
    fromJSON(object: any): ProjectExecutionResponse;
    toJSON(message: ProjectExecutionResponse): unknown;
    fromPartial<I extends {
        checkpointId?: string | undefined;
        outputVariables?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        checkpointId?: string | undefined;
        outputVariables?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["outputVariables"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "checkpointId" | "outputVariables">, never>>(object: I): ProjectExecutionResponse;
};
export declare const CellOutputsRequest: {
    $type: "yandex.cloud.datasphere.v1.CellOutputsRequest";
    encode(message: CellOutputsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CellOutputsRequest;
    fromJSON(object: any): CellOutputsRequest;
    toJSON(message: CellOutputsRequest): unknown;
    fromPartial<I extends {
        startAt?: Date | undefined;
        projectId?: string | undefined;
        cellId?: string | undefined;
        checkpointId?: string | undefined;
    } & {
        startAt?: Date | undefined;
        projectId?: string | undefined;
        cellId?: string | undefined;
        checkpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "startAt" | "projectId" | "cellId" | "checkpointId">, never>>(object: I): CellOutputsRequest;
};
export declare const CellOutputsResponse: {
    $type: "yandex.cloud.datasphere.v1.CellOutputsResponse";
    encode(message: CellOutputsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CellOutputsResponse;
    fromJSON(object: any): CellOutputsResponse;
    toJSON(message: CellOutputsResponse): unknown;
    fromPartial<I extends {
        outputs?: string[] | undefined;
    } & {
        outputs?: (string[] & string[] & Record<Exclude<keyof I["outputs"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "outputs">, never>>(object: I): CellOutputsResponse;
};
export declare const GetStateVariablesRequest: {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesRequest";
    encode(message: GetStateVariablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStateVariablesRequest;
    fromJSON(object: any): GetStateVariablesRequest;
    toJSON(message: GetStateVariablesRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
        notebookId?: string | undefined;
        checkpointId?: string | undefined;
        variableNames?: string[] | undefined;
    } & {
        projectId?: string | undefined;
        notebookId?: string | undefined;
        checkpointId?: string | undefined;
        variableNames?: (string[] & string[] & Record<Exclude<keyof I["variableNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId" | "notebookId" | "checkpointId" | "variableNames">, never>>(object: I): GetStateVariablesRequest;
};
export declare const GetStateVariablesResponse: {
    $type: "yandex.cloud.datasphere.v1.GetStateVariablesResponse";
    encode(message: GetStateVariablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStateVariablesResponse;
    fromJSON(object: any): GetStateVariablesResponse;
    toJSON(message: GetStateVariablesResponse): unknown;
    fromPartial<I extends {
        variables?: {
            [x: string]: any;
            [x: number]: any;
        } | undefined;
    } & {
        variables?: ({
            [x: string]: any;
            [x: number]: any;
        } & {
            [x: string]: any;
            [x: number]: any;
        } & Record<Exclude<keyof I["variables"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "variables">, never>>(object: I): GetStateVariablesResponse;
};
export declare const GetNotebookMetadataRequest: {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataRequest";
    encode(message: GetNotebookMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNotebookMetadataRequest;
    fromJSON(object: any): GetNotebookMetadataRequest;
    toJSON(message: GetNotebookMetadataRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
        notebookPath?: string | undefined;
    } & {
        projectId?: string | undefined;
        notebookPath?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId" | "notebookPath">, never>>(object: I): GetNotebookMetadataRequest;
};
export declare const GetNotebookMetadataResponse: {
    $type: "yandex.cloud.datasphere.v1.GetNotebookMetadataResponse";
    encode(message: GetNotebookMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNotebookMetadataResponse;
    fromJSON(object: any): GetNotebookMetadataResponse;
    toJSON(message: GetNotebookMetadataResponse): unknown;
    fromPartial<I extends {
        createdAt?: Date | undefined;
        modifiedAt?: Date | undefined;
        notebookId?: string | undefined;
        contentLength?: number | undefined;
        cellIds?: string[] | undefined;
    } & {
        createdAt?: Date | undefined;
        modifiedAt?: Date | undefined;
        notebookId?: string | undefined;
        contentLength?: number | undefined;
        cellIds?: (string[] & string[] & Record<Exclude<keyof I["cellIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "createdAt" | "modifiedAt" | "notebookId" | "contentLength" | "cellIds">, never>>(object: I): GetNotebookMetadataResponse;
};
/** A set of methods for managing Project resources. */
export declare const ProjectServiceService: {
    /** Creates a project in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified project. */
    readonly update: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified project. */
    readonly delete: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Opens the specified project. */
    readonly open: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Open";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OpenProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OpenProjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified project. */
    readonly get: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: Project) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Project;
    };
    /** Lists projects for the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: ListProjectsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProjectsResponse;
    };
    /** Returns the unit balance of the specified project. */
    readonly getUnitBalance: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUnitBalanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUnitBalanceRequest;
        readonly responseSerialize: (value: GetUnitBalanceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUnitBalanceResponse;
    };
    /** Sets the unit balance of the specified project. */
    readonly setUnitBalance: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetUnitBalanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetUnitBalanceRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Executes code in the specified cell or notebook. */
    readonly execute: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/Execute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ProjectExecutionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ProjectExecutionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns outputs of the specified cell. */
    readonly getCellOutputs: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CellOutputsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CellOutputsRequest;
        readonly responseSerialize: (value: CellOutputsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CellOutputsResponse;
    };
    /** Returns state variables of the specified notebook. */
    readonly getStateVariables: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetStateVariablesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetStateVariablesRequest;
        readonly responseSerialize: (value: GetStateVariablesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetStateVariablesResponse;
    };
    /** Returns metadata of the specified notebook. */
    readonly getNotebookMetadata: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectService/GetNotebookMetadata";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetNotebookMetadataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetNotebookMetadataRequest;
        readonly responseSerialize: (value: GetNotebookMetadataResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetNotebookMetadataResponse;
    };
};
export interface ProjectServiceServer extends UntypedServiceImplementation {
    /** Creates a project in the specified folder. */
    create: handleUnaryCall<CreateProjectRequest, Operation>;
    /** Updates the specified project. */
    update: handleUnaryCall<UpdateProjectRequest, Operation>;
    /** Deletes the specified project. */
    delete: handleUnaryCall<DeleteProjectRequest, Operation>;
    /** Opens the specified project. */
    open: handleUnaryCall<OpenProjectRequest, Operation>;
    /** Returns the specified project. */
    get: handleUnaryCall<GetProjectRequest, Project>;
    /** Lists projects for the specified folder. */
    list: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
    /** Returns the unit balance of the specified project. */
    getUnitBalance: handleUnaryCall<GetUnitBalanceRequest, GetUnitBalanceResponse>;
    /** Sets the unit balance of the specified project. */
    setUnitBalance: handleUnaryCall<SetUnitBalanceRequest, Empty>;
    /** Executes code in the specified cell or notebook. */
    execute: handleUnaryCall<ProjectExecutionRequest, Operation>;
    /** Returns outputs of the specified cell. */
    getCellOutputs: handleUnaryCall<CellOutputsRequest, CellOutputsResponse>;
    /** Returns state variables of the specified notebook. */
    getStateVariables: handleUnaryCall<GetStateVariablesRequest, GetStateVariablesResponse>;
    /** Returns metadata of the specified notebook. */
    getNotebookMetadata: handleUnaryCall<GetNotebookMetadataRequest, GetNotebookMetadataResponse>;
}
export interface ProjectServiceClient extends Client {
    /** Creates a project in the specified folder. */
    create(request: CreateProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified project. */
    update(request: UpdateProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified project. */
    delete(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Opens the specified project. */
    open(request: OpenProjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    open(request: OpenProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    open(request: OpenProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified project. */
    get(request: GetProjectRequest, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    get(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    get(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Project) => void): ClientUnaryCall;
    /** Lists projects for the specified folder. */
    list(request: ListProjectsRequest, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    list(request: ListProjectsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    list(request: ListProjectsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    /** Returns the unit balance of the specified project. */
    getUnitBalance(request: GetUnitBalanceRequest, callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void): ClientUnaryCall;
    getUnitBalance(request: GetUnitBalanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void): ClientUnaryCall;
    getUnitBalance(request: GetUnitBalanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUnitBalanceResponse) => void): ClientUnaryCall;
    /** Sets the unit balance of the specified project. */
    setUnitBalance(request: SetUnitBalanceRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setUnitBalance(request: SetUnitBalanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setUnitBalance(request: SetUnitBalanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Executes code in the specified cell or notebook. */
    execute(request: ProjectExecutionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    execute(request: ProjectExecutionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    execute(request: ProjectExecutionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns outputs of the specified cell. */
    getCellOutputs(request: CellOutputsRequest, callback: (error: ServiceError | null, response: CellOutputsResponse) => void): ClientUnaryCall;
    getCellOutputs(request: CellOutputsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CellOutputsResponse) => void): ClientUnaryCall;
    getCellOutputs(request: CellOutputsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CellOutputsResponse) => void): ClientUnaryCall;
    /** Returns state variables of the specified notebook. */
    getStateVariables(request: GetStateVariablesRequest, callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void): ClientUnaryCall;
    getStateVariables(request: GetStateVariablesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void): ClientUnaryCall;
    getStateVariables(request: GetStateVariablesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetStateVariablesResponse) => void): ClientUnaryCall;
    /** Returns metadata of the specified notebook. */
    getNotebookMetadata(request: GetNotebookMetadataRequest, callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void): ClientUnaryCall;
    getNotebookMetadata(request: GetNotebookMetadataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void): ClientUnaryCall;
    getNotebookMetadata(request: GetNotebookMetadataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetNotebookMetadataResponse) => void): ClientUnaryCall;
}
export declare const ProjectServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ProjectServiceClient;
    service: typeof ProjectServiceService;
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
