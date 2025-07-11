import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
/** A Project resource. */
export interface Project {
    $type: "yandex.cloud.datasphere.v2.Project";
    /** ID of the project. */
    id: string;
    createdAt?: Date;
    /** Name of the project. 1-63 characters long. */
    name: string;
    /** Description of the project. 0-256 characters long. */
    description: string;
    labels: {
        [key: string]: string;
    };
    createdById: string;
    /** Settings of the project. */
    settings?: Project_Settings;
    /** Limits of the project. */
    limits?: Project_Limits;
    /** ID of the community that the project belongs to. */
    communityId: string;
}
export interface Project_Settings {
    $type: "yandex.cloud.datasphere.v2.Project.Settings";
    /** ID of the service account, on whose behalf all operations with clusters will be performed. */
    serviceAccountId: string;
    /**
     * ID of the subnet where the DataProc cluster resides.
     * Currently only subnets created in the availability zone ru-central1-a are supported.
     */
    subnetId: string;
    /** ID of the DataProc cluster. */
    dataProcClusterId: string;
    /** Commit mode that is assigned to the project. */
    commitMode: Project_Settings_CommitMode;
    /** Network interfaces security groups. */
    securityGroupIds: string[];
    /** Is early access preview enabled for the project. */
    earlyAccess: boolean;
    /** Project IDE. */
    ide: Project_Settings_Ide;
    /** Default project folder ID. */
    defaultFolderId: string;
    /** Timeout to automatically stop stale executions. */
    staleExecTimeoutMode: Project_Settings_StaleExecutionTimeoutMode;
}
export declare enum Project_Settings_CommitMode {
    COMMIT_MODE_UNSPECIFIED = 0,
    /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
    STANDARD = 1,
    /**
     * AUTO - Commit happens periodically.
     * Also, automatic saving of state occurs when switching to another type of computing resource.
     */
    AUTO = 2,
    UNRECOGNIZED = -1
}
export declare function project_Settings_CommitModeFromJSON(object: any): Project_Settings_CommitMode;
export declare function project_Settings_CommitModeToJSON(object: Project_Settings_CommitMode): string;
export declare enum Project_Settings_Ide {
    IDE_UNSPECIFIED = 0,
    /** JUPYTER_LAB - Project running on JupyterLab IDE. */
    JUPYTER_LAB = 1,
    UNRECOGNIZED = -1
}
export declare function project_Settings_IdeFromJSON(object: any): Project_Settings_Ide;
export declare function project_Settings_IdeToJSON(object: Project_Settings_Ide): string;
export declare enum Project_Settings_StaleExecutionTimeoutMode {
    STALE_EXECUTION_TIMEOUT_MODE_UNSPECIFIED = 0,
    /** ONE_HOUR - Setting to automatically stop stale execution after one hour with low consumption. */
    ONE_HOUR = 1,
    /** THREE_HOURS - Setting to automatically stop stale execution after three hours with low consumption. */
    THREE_HOURS = 2,
    /** NO_TIMEOUT - Setting to never automatically stop stale executions. */
    NO_TIMEOUT = 3,
    UNRECOGNIZED = -1
}
export declare function project_Settings_StaleExecutionTimeoutModeFromJSON(object: any): Project_Settings_StaleExecutionTimeoutMode;
export declare function project_Settings_StaleExecutionTimeoutModeToJSON(object: Project_Settings_StaleExecutionTimeoutMode): string;
export interface Project_Limits {
    $type: "yandex.cloud.datasphere.v2.Project.Limits";
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on the one execution. */
    maxUnitsPerExecution?: number;
}
export interface Project_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry";
    key: string;
    value: string;
}
export declare const Project: {
    $type: "yandex.cloud.datasphere.v2.Project";
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        settings?: {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: Project_Settings_CommitMode | undefined;
            earlyAccess?: boolean | undefined;
            ide?: Project_Settings_Ide | undefined;
            defaultFolderId?: string | undefined;
            staleExecTimeoutMode?: Project_Settings_StaleExecutionTimeoutMode | undefined;
        } | undefined;
        createdById?: string | undefined;
        communityId?: string | undefined;
        limits?: {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        settings?: ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: Project_Settings_CommitMode | undefined;
            earlyAccess?: boolean | undefined;
            ide?: Project_Settings_Ide | undefined;
            defaultFolderId?: string | undefined;
            staleExecTimeoutMode?: Project_Settings_StaleExecutionTimeoutMode | undefined;
        } & {
            subnetId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["settings"]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            serviceAccountId?: string | undefined;
            dataProcClusterId?: string | undefined;
            commitMode?: Project_Settings_CommitMode | undefined;
            earlyAccess?: boolean | undefined;
            ide?: Project_Settings_Ide | undefined;
            defaultFolderId?: string | undefined;
            staleExecTimeoutMode?: Project_Settings_StaleExecutionTimeoutMode | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "subnetId" | "securityGroupIds" | "serviceAccountId" | "dataProcClusterId" | "commitMode" | "earlyAccess" | "ide" | "defaultFolderId" | "staleExecTimeoutMode">, never>) | undefined;
        createdById?: string | undefined;
        communityId?: string | undefined;
        limits?: ({
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & {
            maxUnitsPerHour?: number | undefined;
            maxUnitsPerExecution?: number | undefined;
        } & Record<Exclude<keyof I["limits"], "$type" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "settings" | "createdById" | "communityId" | "limits">, never>>(object: I): Project;
};
export declare const Project_Settings: {
    $type: "yandex.cloud.datasphere.v2.Project.Settings";
    encode(message: Project_Settings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project_Settings;
    fromJSON(object: any): Project_Settings;
    toJSON(message: Project_Settings): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        serviceAccountId?: string | undefined;
        dataProcClusterId?: string | undefined;
        commitMode?: Project_Settings_CommitMode | undefined;
        earlyAccess?: boolean | undefined;
        ide?: Project_Settings_Ide | undefined;
        defaultFolderId?: string | undefined;
        staleExecTimeoutMode?: Project_Settings_StaleExecutionTimeoutMode | undefined;
    } & {
        subnetId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        serviceAccountId?: string | undefined;
        dataProcClusterId?: string | undefined;
        commitMode?: Project_Settings_CommitMode | undefined;
        earlyAccess?: boolean | undefined;
        ide?: Project_Settings_Ide | undefined;
        defaultFolderId?: string | undefined;
        staleExecTimeoutMode?: Project_Settings_StaleExecutionTimeoutMode | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "securityGroupIds" | "serviceAccountId" | "dataProcClusterId" | "commitMode" | "earlyAccess" | "ide" | "defaultFolderId" | "staleExecTimeoutMode">, never>>(object: I): Project_Settings;
};
export declare const Project_Limits: {
    $type: "yandex.cloud.datasphere.v2.Project.Limits";
    encode(message: Project_Limits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project_Limits;
    fromJSON(object: any): Project_Limits;
    toJSON(message: Project_Limits): unknown;
    fromPartial<I extends {
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
    } & {
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>>(object: I): Project_Limits;
};
export declare const Project_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.Project.LabelsEntry";
    encode(message: Project_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project_LabelsEntry;
    fromJSON(object: any): Project_LabelsEntry;
    toJSON(message: Project_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Project_LabelsEntry;
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
