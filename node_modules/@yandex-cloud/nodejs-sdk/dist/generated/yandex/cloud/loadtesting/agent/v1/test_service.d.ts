/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Test_Generator, Schedule, AmmoType, Test } from "../../../../../yandex/cloud/loadtesting/agent/v1/test";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.loadtesting.agent.v1";
export interface GetTestRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest";
    testId: string;
}
export interface CreateTestRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest";
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    generator: Test_Generator;
    agentInstanceId: string;
    /**
     * Fields for TestConfig creation. These fields have the higher priority than yaml config.
     * These fields are taken from Form
     */
    targetAddress: string;
    targetPort: number;
    targetVersion: string;
    instances: number;
    loadSchedule?: Schedule;
    config: string;
    ammoId: string;
    ammoUrls: string[];
    ammoHeaders: string[];
    ammoType: AmmoType;
    ssl: boolean;
    imbalancePoint: number;
    imbalanceTs: number;
    loggingLogGroupId: string;
}
export interface CreateTestRequest_LabelsEntry {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateTestMetadata {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata";
    testId: string;
}
export interface UpdateTestRequest {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest";
    testId: string;
    updateMask?: FieldMask;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    favorite: boolean;
    targetVersion: string;
    imbalancePoint: number;
    imbalanceTs: number;
    imbalanceComment: string;
}
export interface UpdateTestRequest_LabelsEntry {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateTestMetadata {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata";
    testId: string;
}
export declare const GetTestRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.GetTestRequest";
    encode(message: GetTestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTestRequest;
    fromJSON(object: any): GetTestRequest;
    toJSON(message: GetTestRequest): unknown;
    fromPartial<I extends {
        testId?: string | undefined;
    } & {
        testId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "testId">, never>>(object: I): GetTestRequest;
};
export declare const CreateTestRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest";
    encode(message: CreateTestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTestRequest;
    fromJSON(object: any): CreateTestRequest;
    toJSON(message: CreateTestRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        config?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        instances?: number | undefined;
        targetPort?: number | undefined;
        agentInstanceId?: string | undefined;
        loggingLogGroupId?: string | undefined;
        generator?: Test_Generator | undefined;
        targetAddress?: string | undefined;
        targetVersion?: string | undefined;
        ammoUrls?: string[] | undefined;
        ammoId?: string | undefined;
        loadSchedule?: {
            loadType?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").LoadType | undefined;
            loadProfile?: string[] | undefined;
            loadSchedule?: {
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            }[] | undefined;
        } | undefined;
        ammoHeaders?: string[] | undefined;
        ammoType?: AmmoType | undefined;
        ssl?: boolean | undefined;
        imbalancePoint?: number | undefined;
        imbalanceTs?: number | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        config?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        instances?: number | undefined;
        targetPort?: number | undefined;
        agentInstanceId?: string | undefined;
        loggingLogGroupId?: string | undefined;
        generator?: Test_Generator | undefined;
        targetAddress?: string | undefined;
        targetVersion?: string | undefined;
        ammoUrls?: (string[] & string[] & Record<Exclude<keyof I["ammoUrls"], "$type" | keyof string[]>, never>) | undefined;
        ammoId?: string | undefined;
        loadSchedule?: ({
            loadType?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").LoadType | undefined;
            loadProfile?: string[] | undefined;
            loadSchedule?: {
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            }[] | undefined;
        } & {
            loadType?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").LoadType | undefined;
            loadProfile?: (string[] & string[] & Record<Exclude<keyof I["loadSchedule"]["loadProfile"], "$type" | keyof string[]>, never>) | undefined;
            loadSchedule?: ({
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            } & Record<Exclude<keyof I["loadSchedule"]["loadSchedule"][number], "$type" | "type" | "instances" | "duration" | "rpsFrom" | "rpsTo" | "step" | "ops" | "stpdPath">, never>)[] & Record<Exclude<keyof I["loadSchedule"]["loadSchedule"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/loadtesting/agent/v1/test").ScheduleType | undefined;
                instances?: number | undefined;
                duration?: string | undefined;
                rpsFrom?: number | undefined;
                rpsTo?: number | undefined;
                step?: number | undefined;
                ops?: number | undefined;
                stpdPath?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["loadSchedule"], "$type" | "loadType" | "loadProfile" | "loadSchedule">, never>) | undefined;
        ammoHeaders?: (string[] & string[] & Record<Exclude<keyof I["ammoHeaders"], "$type" | keyof string[]>, never>) | undefined;
        ammoType?: AmmoType | undefined;
        ssl?: boolean | undefined;
        imbalancePoint?: number | undefined;
        imbalanceTs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "config" | "folderId" | "labels" | "instances" | "targetPort" | "agentInstanceId" | "loggingLogGroupId" | "generator" | "targetAddress" | "targetVersion" | "ammoUrls" | "ammoId" | "loadSchedule" | "ammoHeaders" | "ammoType" | "ssl" | "imbalancePoint" | "imbalanceTs">, never>>(object: I): CreateTestRequest;
};
export declare const CreateTestRequest_LabelsEntry: {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestRequest.LabelsEntry";
    encode(message: CreateTestRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTestRequest_LabelsEntry;
    fromJSON(object: any): CreateTestRequest_LabelsEntry;
    toJSON(message: CreateTestRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateTestRequest_LabelsEntry;
};
export declare const CreateTestMetadata: {
    $type: "yandex.cloud.loadtesting.agent.v1.CreateTestMetadata";
    encode(message: CreateTestMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTestMetadata;
    fromJSON(object: any): CreateTestMetadata;
    toJSON(message: CreateTestMetadata): unknown;
    fromPartial<I extends {
        testId?: string | undefined;
    } & {
        testId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "testId">, never>>(object: I): CreateTestMetadata;
};
export declare const UpdateTestRequest: {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest";
    encode(message: UpdateTestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTestRequest;
    fromJSON(object: any): UpdateTestRequest;
    toJSON(message: UpdateTestRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        targetVersion?: string | undefined;
        favorite?: boolean | undefined;
        testId?: string | undefined;
        imbalancePoint?: number | undefined;
        imbalanceTs?: number | undefined;
        imbalanceComment?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        targetVersion?: string | undefined;
        favorite?: boolean | undefined;
        testId?: string | undefined;
        imbalancePoint?: number | undefined;
        imbalanceTs?: number | undefined;
        imbalanceComment?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "targetVersion" | "favorite" | "testId" | "imbalancePoint" | "imbalanceTs" | "imbalanceComment">, never>>(object: I): UpdateTestRequest;
};
export declare const UpdateTestRequest_LabelsEntry: {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestRequest.LabelsEntry";
    encode(message: UpdateTestRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTestRequest_LabelsEntry;
    fromJSON(object: any): UpdateTestRequest_LabelsEntry;
    toJSON(message: UpdateTestRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateTestRequest_LabelsEntry;
};
export declare const UpdateTestMetadata: {
    $type: "yandex.cloud.loadtesting.agent.v1.UpdateTestMetadata";
    encode(message: UpdateTestMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTestMetadata;
    fromJSON(object: any): UpdateTestMetadata;
    toJSON(message: UpdateTestMetadata): unknown;
    fromPartial<I extends {
        testId?: string | undefined;
    } & {
        testId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "testId">, never>>(object: I): UpdateTestMetadata;
};
export declare const TestServiceService: {
    /** Returns test by test id. */
    readonly get: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTestRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTestRequest;
        readonly responseSerialize: (value: Test) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Test;
    };
    /** Creates test for the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTestRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTestRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified test. */
    readonly update: {
        readonly path: "/yandex.cloud.loadtesting.agent.v1.TestService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTestRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTestRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface TestServiceServer extends UntypedServiceImplementation {
    /** Returns test by test id. */
    get: handleUnaryCall<GetTestRequest, Test>;
    /** Creates test for the specified folder. */
    create: handleUnaryCall<CreateTestRequest, Operation>;
    /** Updates the specified test. */
    update: handleUnaryCall<UpdateTestRequest, Operation>;
}
export interface TestServiceClient extends Client {
    /** Returns test by test id. */
    get(request: GetTestRequest, callback: (error: ServiceError | null, response: Test) => void): ClientUnaryCall;
    get(request: GetTestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Test) => void): ClientUnaryCall;
    get(request: GetTestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Test) => void): ClientUnaryCall;
    /** Creates test for the specified folder. */
    create(request: CreateTestRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified test. */
    update(request: UpdateTestRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const TestServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TestServiceClient;
    service: typeof TestServiceService;
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
