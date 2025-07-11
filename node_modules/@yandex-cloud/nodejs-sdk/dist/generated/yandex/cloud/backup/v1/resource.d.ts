import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.backup.v1";
export interface Resource {
    $type: "yandex.cloud.backup.v1.Resource";
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
    createdAt?: Date;
    updatedAt?: Date;
    /** If this field is true, it means that instance is online. */
    online: boolean;
    /** If this field is true, it means that backup is enabled to instance. */
    enabled: boolean;
    status: Resource_Status;
    /**
     * If status value is one of `OTHER` or `FAILED`,
     * detailed info might be stored here.
     */
    statusDetails: string;
    /**
     * In case status is one of `BACKUPING` or `RECOVERING`,
     * progress value might be found here.
     */
    statusProgress: number;
    lastBackupTime?: Date;
    nextBackupTime?: Date;
    /** Resource ID is used to identify Compute Cloud instance in backup service. */
    resourceId: string;
    /**
     * Status `is_active` shows whether current Compute Cloud instance controls Cloud Backup resource.
     * If status `is_active` is false it means Compute Cloud instance is not able to manipulate
     * Cloud Backup resource.
     */
    isActive: boolean;
}
export declare enum Resource_Status {
    STATUS_UNSPECIFIED = 0,
    /** IDLE - Compute Cloud instance is doing nothing right now. */
    IDLE = 1,
    /** BACKUPING - Compute Cloud instance is currently backing up itself. */
    BACKUPING = 2,
    /** RECOVERING - Compute Cloud instance is currently recovering itself. */
    RECOVERING = 3,
    /**
     * FAILED - Compute Cloud instance is in failure state, check content of
     * `status_details` field for more information.
     */
    FAILED = 4,
    /**
     * OTHER - Unspecified state, check `status_details` field
     * for more information.
     */
    OTHER = 5,
    UNRECOGNIZED = -1
}
export declare function resource_StatusFromJSON(object: any): Resource_Status;
export declare function resource_StatusToJSON(object: Resource_Status): string;
export interface Progress {
    $type: "yandex.cloud.backup.v1.Progress";
    current: number;
    total: number;
}
export interface Task {
    $type: "yandex.cloud.backup.v1.Task";
    /** Task ID. */
    id: number;
    /**
     * Shows whether the task is cancellable.
     * Note: task cancellation is not supported yet.
     */
    cancellable: boolean;
    /** Policy ID. */
    policyId: string;
    /** Type of the task. */
    type: Task_Type;
    /** Task progress. */
    progress?: Progress;
    /** Task status. */
    status: Task_Status;
    enqueuedAt?: Date;
    startedAt?: Date;
    updatedAt?: Date;
    completedAt?: Date;
    /** Compute Cloud instance ID. */
    computeInstanceId: string;
}
export declare enum Task_Type {
    TYPE_UNSPECIFIED = 0,
    BACKUP = 1,
    RETENTION = 2,
    RECOVERY = 3,
    UNRECOGNIZED = -1
}
export declare function task_TypeFromJSON(object: any): Task_Type;
export declare function task_TypeToJSON(object: Task_Type): string;
/** Status of task. */
export declare enum Task_Status {
    STATUS_UNSPECIFIED = 0,
    ENQUEUED = 1,
    ASSIGNED = 2,
    STARTED = 3,
    PAUSED = 4,
    COMPLETED = 5,
    UNRECOGNIZED = -1
}
export declare function task_StatusFromJSON(object: any): Task_Status;
export declare function task_StatusToJSON(object: Task_Status): string;
export declare const Resource: {
    $type: "yandex.cloud.backup.v1.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        status?: Resource_Status | undefined;
        enabled?: boolean | undefined;
        updatedAt?: Date | undefined;
        computeInstanceId?: string | undefined;
        online?: boolean | undefined;
        statusDetails?: string | undefined;
        statusProgress?: number | undefined;
        isActive?: boolean | undefined;
        lastBackupTime?: Date | undefined;
        nextBackupTime?: Date | undefined;
    } & {
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        status?: Resource_Status | undefined;
        enabled?: boolean | undefined;
        updatedAt?: Date | undefined;
        computeInstanceId?: string | undefined;
        online?: boolean | undefined;
        statusDetails?: string | undefined;
        statusProgress?: number | undefined;
        isActive?: boolean | undefined;
        lastBackupTime?: Date | undefined;
        nextBackupTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "createdAt" | "status" | "enabled" | "updatedAt" | "computeInstanceId" | "online" | "statusDetails" | "statusProgress" | "isActive" | "lastBackupTime" | "nextBackupTime">, never>>(object: I): Resource;
};
export declare const Progress: {
    $type: "yandex.cloud.backup.v1.Progress";
    encode(message: Progress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Progress;
    fromJSON(object: any): Progress;
    toJSON(message: Progress): unknown;
    fromPartial<I extends {
        current?: number | undefined;
        total?: number | undefined;
    } & {
        current?: number | undefined;
        total?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "current" | "total">, never>>(object: I): Progress;
};
export declare const Task: {
    $type: "yandex.cloud.backup.v1.Task";
    encode(message: Task, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Task;
    fromJSON(object: any): Task;
    toJSON(message: Task): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        type?: Task_Type | undefined;
        status?: Task_Status | undefined;
        updatedAt?: Date | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        cancellable?: boolean | undefined;
        progress?: {
            current?: number | undefined;
            total?: number | undefined;
        } | undefined;
        enqueuedAt?: Date | undefined;
        startedAt?: Date | undefined;
        completedAt?: Date | undefined;
    } & {
        id?: number | undefined;
        type?: Task_Type | undefined;
        status?: Task_Status | undefined;
        updatedAt?: Date | undefined;
        policyId?: string | undefined;
        computeInstanceId?: string | undefined;
        cancellable?: boolean | undefined;
        progress?: ({
            current?: number | undefined;
            total?: number | undefined;
        } & {
            current?: number | undefined;
            total?: number | undefined;
        } & Record<Exclude<keyof I["progress"], "$type" | "current" | "total">, never>) | undefined;
        enqueuedAt?: Date | undefined;
        startedAt?: Date | undefined;
        completedAt?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type" | "status" | "updatedAt" | "policyId" | "computeInstanceId" | "cancellable" | "progress" | "enqueuedAt" | "startedAt" | "completedAt">, never>>(object: I): Task;
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
