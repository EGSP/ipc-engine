/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface Job {
    $type: "yandex.cloud.loadtesting.agent.v1.Job";
    id: string;
    config: string;
    ammo?: File;
    loggingLogGroupId: string;
    testData?: StorageObject;
    dataPayload: TestDataEntry[];
    artifactUploadSettings?: TestArtifactUploadSettings;
}
export interface File {
    $type: "yandex.cloud.loadtesting.agent.v1.File";
    name: string;
    content: Buffer;
}
export interface StorageObject {
    $type: "yandex.cloud.loadtesting.agent.v1.StorageObject";
    objectStorageBucket: string;
    objectStorageFilename: string;
}
export interface TestDataEntry {
    $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry";
    name: string;
    isTransient: boolean;
    storageObject?: StorageObject;
}
export interface TestArtifactUploadSettings {
    $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings";
    outputBucket: string;
    outputName: string;
    isArchive: boolean;
    filterInclude: string[];
    filterExclude: string[];
}
export interface GetJobTransientFile {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile";
    jobId: string;
    name: string;
}
export interface GetJobRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest";
    computeInstanceId: string;
    agentInstanceId: string;
    jobId: string;
}
export interface ClaimJobStatusRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest";
    jobId: string;
    status: ClaimJobStatusRequest_JobStatus;
    error: string;
}
export declare enum ClaimJobStatusRequest_JobStatus {
    JOB_STATUS_UNSPECIFIED = 0,
    POST_PROCESS = 1,
    INITIATED = 2,
    PREPARING = 3,
    NOT_FOUND = 4,
    RUNNING = 5,
    FINISHING = 6,
    FINISHED = 7,
    STOPPED = 8,
    FAILED = 9,
    AUTOSTOPPED = 10,
    WAITING_FOR_A_COMMAND_TO_RUN = 11,
    UNRECOGNIZED = -1
}
export declare function claimJobStatusRequest_JobStatusFromJSON(object: any): ClaimJobStatusRequest_JobStatus;
export declare function claimJobStatusRequest_JobStatusToJSON(object: ClaimJobStatusRequest_JobStatus): string;
export interface ClaimJobStatusResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse";
    code: number;
}
export interface JobSignalRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest";
    jobId: string;
}
export interface JobSignalResponse {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse";
    signal: JobSignalResponse_Signal;
    /** seconds */
    waitDuration: number;
    /** seconds */
    runIn: number;
}
export declare enum JobSignalResponse_Signal {
    SIGNAL_UNSPECIFIED = 0,
    STOP = 1,
    WAIT = 2,
    RUN_IN = 3,
    UNRECOGNIZED = -1
}
export declare function jobSignalResponse_SignalFromJSON(object: any): JobSignalResponse_Signal;
export declare function jobSignalResponse_SignalToJSON(object: JobSignalResponse_Signal): string;
export declare const Job: {
    $type: "yandex.cloud.loadtesting.agent.v1.Job";
    encode(message: Job, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Job;
    fromJSON(object: any): Job;
    toJSON(message: Job): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        config?: string | undefined;
        loggingLogGroupId?: string | undefined;
        ammo?: {
            name?: string | undefined;
            content?: Buffer | undefined;
        } | undefined;
        testData?: {
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } | undefined;
        dataPayload?: {
            name?: string | undefined;
            isTransient?: boolean | undefined;
            storageObject?: {
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } | undefined;
        }[] | undefined;
        artifactUploadSettings?: {
            outputBucket?: string | undefined;
            outputName?: string | undefined;
            isArchive?: boolean | undefined;
            filterInclude?: string[] | undefined;
            filterExclude?: string[] | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        config?: string | undefined;
        loggingLogGroupId?: string | undefined;
        ammo?: ({
            name?: string | undefined;
            content?: Buffer | undefined;
        } & {
            name?: string | undefined;
            content?: Buffer | undefined;
        } & Record<Exclude<keyof I["ammo"], "$type" | "name" | "content">, never>) | undefined;
        testData?: ({
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } & {
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } & Record<Exclude<keyof I["testData"], "$type" | "objectStorageBucket" | "objectStorageFilename">, never>) | undefined;
        dataPayload?: ({
            name?: string | undefined;
            isTransient?: boolean | undefined;
            storageObject?: {
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            isTransient?: boolean | undefined;
            storageObject?: {
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            isTransient?: boolean | undefined;
            storageObject?: ({
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } & {
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } & Record<Exclude<keyof I["dataPayload"][number]["storageObject"], "$type" | "objectStorageBucket" | "objectStorageFilename">, never>) | undefined;
        } & Record<Exclude<keyof I["dataPayload"][number], "$type" | "name" | "isTransient" | "storageObject">, never>)[] & Record<Exclude<keyof I["dataPayload"], "$type" | keyof {
            name?: string | undefined;
            isTransient?: boolean | undefined;
            storageObject?: {
                objectStorageBucket?: string | undefined;
                objectStorageFilename?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        artifactUploadSettings?: ({
            outputBucket?: string | undefined;
            outputName?: string | undefined;
            isArchive?: boolean | undefined;
            filterInclude?: string[] | undefined;
            filterExclude?: string[] | undefined;
        } & {
            outputBucket?: string | undefined;
            outputName?: string | undefined;
            isArchive?: boolean | undefined;
            filterInclude?: (string[] & string[] & Record<Exclude<keyof I["artifactUploadSettings"]["filterInclude"], "$type" | keyof string[]>, never>) | undefined;
            filterExclude?: (string[] & string[] & Record<Exclude<keyof I["artifactUploadSettings"]["filterExclude"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["artifactUploadSettings"], "$type" | "outputBucket" | "outputName" | "isArchive" | "filterInclude" | "filterExclude">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "config" | "loggingLogGroupId" | "ammo" | "testData" | "dataPayload" | "artifactUploadSettings">, never>>(object: I): Job;
};
export declare const File: {
    $type: "yandex.cloud.loadtesting.agent.v1.File";
    encode(message: File, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): File;
    fromJSON(object: any): File;
    toJSON(message: File): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        content?: Buffer | undefined;
    } & {
        name?: string | undefined;
        content?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "content">, never>>(object: I): File;
};
export declare const StorageObject: {
    $type: "yandex.cloud.loadtesting.agent.v1.StorageObject";
    encode(message: StorageObject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageObject;
    fromJSON(object: any): StorageObject;
    toJSON(message: StorageObject): unknown;
    fromPartial<I extends {
        objectStorageBucket?: string | undefined;
        objectStorageFilename?: string | undefined;
    } & {
        objectStorageBucket?: string | undefined;
        objectStorageFilename?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "objectStorageBucket" | "objectStorageFilename">, never>>(object: I): StorageObject;
};
export declare const TestDataEntry: {
    $type: "yandex.cloud.loadtesting.agent.v1.TestDataEntry";
    encode(message: TestDataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TestDataEntry;
    fromJSON(object: any): TestDataEntry;
    toJSON(message: TestDataEntry): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        isTransient?: boolean | undefined;
        storageObject?: {
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        isTransient?: boolean | undefined;
        storageObject?: ({
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } & {
            objectStorageBucket?: string | undefined;
            objectStorageFilename?: string | undefined;
        } & Record<Exclude<keyof I["storageObject"], "$type" | "objectStorageBucket" | "objectStorageFilename">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "isTransient" | "storageObject">, never>>(object: I): TestDataEntry;
};
export declare const TestArtifactUploadSettings: {
    $type: "yandex.cloud.loadtesting.agent.v1.TestArtifactUploadSettings";
    encode(message: TestArtifactUploadSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TestArtifactUploadSettings;
    fromJSON(object: any): TestArtifactUploadSettings;
    toJSON(message: TestArtifactUploadSettings): unknown;
    fromPartial<I extends {
        outputBucket?: string | undefined;
        outputName?: string | undefined;
        isArchive?: boolean | undefined;
        filterInclude?: string[] | undefined;
        filterExclude?: string[] | undefined;
    } & {
        outputBucket?: string | undefined;
        outputName?: string | undefined;
        isArchive?: boolean | undefined;
        filterInclude?: (string[] & string[] & Record<Exclude<keyof I["filterInclude"], "$type" | keyof string[]>, never>) | undefined;
        filterExclude?: (string[] & string[] & Record<Exclude<keyof I["filterExclude"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "outputBucket" | "outputName" | "isArchive" | "filterInclude" | "filterExclude">, never>>(object: I): TestArtifactUploadSettings;
};
export declare const GetJobTransientFile: {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobTransientFile";
    encode(message: GetJobTransientFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetJobTransientFile;
    fromJSON(object: any): GetJobTransientFile;
    toJSON(message: GetJobTransientFile): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        jobId?: string | undefined;
    } & {
        name?: string | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "jobId">, never>>(object: I): GetJobTransientFile;
};
export declare const GetJobRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.GetJobRequest";
    encode(message: GetJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetJobRequest;
    fromJSON(object: any): GetJobRequest;
    toJSON(message: GetJobRequest): unknown;
    fromPartial<I extends {
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & {
        computeInstanceId?: string | undefined;
        jobId?: string | undefined;
        agentInstanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "computeInstanceId" | "jobId" | "agentInstanceId">, never>>(object: I): GetJobRequest;
};
export declare const ClaimJobStatusRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusRequest";
    encode(message: ClaimJobStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimJobStatusRequest;
    fromJSON(object: any): ClaimJobStatusRequest;
    toJSON(message: ClaimJobStatusRequest): unknown;
    fromPartial<I extends {
        error?: string | undefined;
        status?: ClaimJobStatusRequest_JobStatus | undefined;
        jobId?: string | undefined;
    } & {
        error?: string | undefined;
        status?: ClaimJobStatusRequest_JobStatus | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "error" | "status" | "jobId">, never>>(object: I): ClaimJobStatusRequest;
};
export declare const ClaimJobStatusResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.ClaimJobStatusResponse";
    encode(message: ClaimJobStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimJobStatusResponse;
    fromJSON(object: any): ClaimJobStatusResponse;
    toJSON(message: ClaimJobStatusResponse): unknown;
    fromPartial<I extends {
        code?: number | undefined;
    } & {
        code?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "code">, never>>(object: I): ClaimJobStatusResponse;
};
export declare const JobSignalRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalRequest";
    encode(message: JobSignalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JobSignalRequest;
    fromJSON(object: any): JobSignalRequest;
    toJSON(message: JobSignalRequest): unknown;
    fromPartial<I extends {
        jobId?: string | undefined;
    } & {
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "jobId">, never>>(object: I): JobSignalRequest;
};
export declare const JobSignalResponse: {
    $type: "yandex.cloud.loadtesting.agent.v1.JobSignalResponse";
    encode(message: JobSignalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JobSignalResponse;
    fromJSON(object: any): JobSignalResponse;
    toJSON(message: JobSignalResponse): unknown;
    fromPartial<I extends {
        signal?: JobSignalResponse_Signal | undefined;
        waitDuration?: number | undefined;
        runIn?: number | undefined;
    } & {
        signal?: JobSignalResponse_Signal | undefined;
        waitDuration?: number | undefined;
        runIn?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "signal" | "waitDuration" | "runIn">, never>>(object: I): JobSignalResponse;
};
export declare const JobServiceService: {
    /** Claims status for the specified job. */
    readonly claimStatus: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/ClaimStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ClaimJobStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ClaimJobStatusRequest;
        readonly responseSerialize: (value: ClaimJobStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ClaimJobStatusResponse;
    };
    /** Returns the job for the specified agent. */
    readonly get: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetJobRequest;
        readonly responseSerialize: (value: Job) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Job;
    };
    /** Returns the signal for the specified job. */
    readonly getSignal: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetSignal";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JobSignalRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JobSignalRequest;
        readonly responseSerialize: (value: JobSignalResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => JobSignalResponse;
    };
    readonly getTransientFile: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.JobService/GetTransientFile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetJobTransientFile) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetJobTransientFile;
        readonly responseSerialize: (value: File) => Buffer;
        readonly responseDeserialize: (value: Buffer) => File;
    };
};
export interface JobServiceServer extends UntypedServiceImplementation {
    /** Claims status for the specified job. */
    claimStatus: handleUnaryCall<ClaimJobStatusRequest, ClaimJobStatusResponse>;
    /** Returns the job for the specified agent. */
    get: handleUnaryCall<GetJobRequest, Job>;
    /** Returns the signal for the specified job. */
    getSignal: handleUnaryCall<JobSignalRequest, JobSignalResponse>;
    getTransientFile: handleUnaryCall<GetJobTransientFile, File>;
}
export interface JobServiceClient extends Client {
    /** Claims status for the specified job. */
    claimStatus(request: ClaimJobStatusRequest, callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void): ClientUnaryCall;
    claimStatus(request: ClaimJobStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void): ClientUnaryCall;
    claimStatus(request: ClaimJobStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ClaimJobStatusResponse) => void): ClientUnaryCall;
    /** Returns the job for the specified agent. */
    get(request: GetJobRequest, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    /** Returns the signal for the specified job. */
    getSignal(request: JobSignalRequest, callback: (error: ServiceError | null, response: JobSignalResponse) => void): ClientUnaryCall;
    getSignal(request: JobSignalRequest, metadata: Metadata, callback: (error: ServiceError | null, response: JobSignalResponse) => void): ClientUnaryCall;
    getSignal(request: JobSignalRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: JobSignalResponse) => void): ClientUnaryCall;
    getTransientFile(request: GetJobTransientFile, callback: (error: ServiceError | null, response: File) => void): ClientUnaryCall;
    getTransientFile(request: GetJobTransientFile, metadata: Metadata, callback: (error: ServiceError | null, response: File) => void): ClientUnaryCall;
    getTransientFile(request: GetJobTransientFile, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: File) => void): ClientUnaryCall;
}
export declare const JobServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): JobServiceClient;
    service: typeof JobServiceService;
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
