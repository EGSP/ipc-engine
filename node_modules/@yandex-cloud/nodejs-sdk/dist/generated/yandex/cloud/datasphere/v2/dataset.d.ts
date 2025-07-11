import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
export interface Dataset {
    $type: "yandex.cloud.datasphere.v2.Dataset";
    /** ID of the dataset. */
    id: string;
    /** ID of the project. */
    projectId: string;
    /** Time the dataset was created. */
    createdAt?: Date;
    /** Name of the dataset. */
    name: string;
    /** Description of the dataset. */
    description: string;
    /** Labels of the dataset. */
    labels: {
        [key: string]: string;
    };
    /** ID of the user who created the dataset. */
    createdById: string;
    /** Code used to create dataset. */
    code: string;
    /** Size of the dataset, Gb. */
    sizeGb: number;
    /** Zone IDs where dataset is available. */
    zoneIds: string[];
    /** Dataset mount path. */
    mountPath: string;
    /** ID of the data capsule object, storing information about dataset storage. */
    dataCapsuleId: string;
}
export interface Dataset_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry";
    key: string;
    value: string;
}
export interface DatasetStatus {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus";
    /** Dataset is activated. */
    statusActive?: DatasetStatus_StatusActive | undefined;
    /** Dataset is inactive. */
    statusInactive?: DatasetStatus_StatusInactive | undefined;
    /** Error while activating dataset. */
    statusError?: DatasetStatus_StatusError | undefined;
}
export interface DatasetStatus_StatusActive {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive";
}
export interface DatasetStatus_StatusInactive {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive";
}
export interface DatasetStatus_StatusError {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError";
    /** Text of the error. */
    error: string;
}
export declare const Dataset: {
    $type: "yandex.cloud.datasphere.v2.Dataset";
    encode(message: Dataset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dataset;
    fromJSON(object: any): Dataset;
    toJSON(message: Dataset): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        code?: string | undefined;
        createdAt?: Date | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneIds?: string[] | undefined;
        projectId?: string | undefined;
        createdById?: string | undefined;
        sizeGb?: number | undefined;
        mountPath?: string | undefined;
        dataCapsuleId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        code?: string | undefined;
        createdAt?: Date | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        projectId?: string | undefined;
        createdById?: string | undefined;
        sizeGb?: number | undefined;
        mountPath?: string | undefined;
        dataCapsuleId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "code" | "createdAt" | "labels" | "zoneIds" | "projectId" | "createdById" | "sizeGb" | "mountPath" | "dataCapsuleId">, never>>(object: I): Dataset;
};
export declare const Dataset_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.Dataset.LabelsEntry";
    encode(message: Dataset_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dataset_LabelsEntry;
    fromJSON(object: any): Dataset_LabelsEntry;
    toJSON(message: Dataset_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Dataset_LabelsEntry;
};
export declare const DatasetStatus: {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus";
    encode(message: DatasetStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatasetStatus;
    fromJSON(object: any): DatasetStatus;
    toJSON(message: DatasetStatus): unknown;
    fromPartial<I extends {
        statusActive?: {} | undefined;
        statusInactive?: {} | undefined;
        statusError?: {
            error?: string | undefined;
        } | undefined;
    } & {
        statusActive?: ({} & {} & Record<Exclude<keyof I["statusActive"], "$type">, never>) | undefined;
        statusInactive?: ({} & {} & Record<Exclude<keyof I["statusInactive"], "$type">, never>) | undefined;
        statusError?: ({
            error?: string | undefined;
        } & {
            error?: string | undefined;
        } & Record<Exclude<keyof I["statusError"], "$type" | "error">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "statusActive" | "statusInactive" | "statusError">, never>>(object: I): DatasetStatus;
};
export declare const DatasetStatus_StatusActive: {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusActive";
    encode(_: DatasetStatus_StatusActive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatasetStatus_StatusActive;
    fromJSON(_: any): DatasetStatus_StatusActive;
    toJSON(_: DatasetStatus_StatusActive): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): DatasetStatus_StatusActive;
};
export declare const DatasetStatus_StatusInactive: {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusInactive";
    encode(_: DatasetStatus_StatusInactive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatasetStatus_StatusInactive;
    fromJSON(_: any): DatasetStatus_StatusInactive;
    toJSON(_: DatasetStatus_StatusInactive): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): DatasetStatus_StatusInactive;
};
export declare const DatasetStatus_StatusError: {
    $type: "yandex.cloud.datasphere.v2.DatasetStatus.StatusError";
    encode(message: DatasetStatus_StatusError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatasetStatus_StatusError;
    fromJSON(object: any): DatasetStatus_StatusError;
    toJSON(message: DatasetStatus_StatusError): unknown;
    fromPartial<I extends {
        error?: string | undefined;
    } & {
        error?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "error">, never>>(object: I): DatasetStatus_StatusError;
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
