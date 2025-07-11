/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Empty } from "../../../../google/protobuf/empty";
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface GetFolderBudgetRequest {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest";
    /** ID of the folder to get a budget for. */
    folderId: string;
}
export interface GetFolderBudgetResponse {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse";
    /** The number of units available in the folder. */
    unitBalance?: number;
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on one execution. */
    maxUnitsPerExecution?: number;
}
export interface SetFolderBudgetRequest {
    $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest";
    /** ID of the folder to set a budget for. */
    folderId: string;
    /** Field mask that specifies which fields of the budget are going to be set. */
    setMask?: FieldMask;
    /** The number of units available in the folder. */
    unitBalance?: number;
    /** The number of units that can be spent per hour. */
    maxUnitsPerHour?: number;
    /** The number of units that can be spent on one execution. */
    maxUnitsPerExecution?: number;
}
export declare const GetFolderBudgetRequest: {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetRequest";
    encode(message: GetFolderBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFolderBudgetRequest;
    fromJSON(object: any): GetFolderBudgetRequest;
    toJSON(message: GetFolderBudgetRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
    } & {
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId">, never>>(object: I): GetFolderBudgetRequest;
};
export declare const GetFolderBudgetResponse: {
    $type: "yandex.cloud.datasphere.v1.GetFolderBudgetResponse";
    encode(message: GetFolderBudgetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFolderBudgetResponse;
    fromJSON(object: any): GetFolderBudgetResponse;
    toJSON(message: GetFolderBudgetResponse): unknown;
    fromPartial<I extends {
        unitBalance?: number | undefined;
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
    } & {
        unitBalance?: number | undefined;
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "unitBalance" | "maxUnitsPerHour" | "maxUnitsPerExecution">, never>>(object: I): GetFolderBudgetResponse;
};
export declare const SetFolderBudgetRequest: {
    $type: "yandex.cloud.datasphere.v1.SetFolderBudgetRequest";
    encode(message: SetFolderBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetFolderBudgetRequest;
    fromJSON(object: any): SetFolderBudgetRequest;
    toJSON(message: SetFolderBudgetRequest): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        unitBalance?: number | undefined;
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
        setMask?: {
            paths?: string[] | undefined;
        } | undefined;
    } & {
        folderId?: string | undefined;
        unitBalance?: number | undefined;
        maxUnitsPerHour?: number | undefined;
        maxUnitsPerExecution?: number | undefined;
        setMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["setMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["setMask"], "$type" | "paths">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "unitBalance" | "maxUnitsPerHour" | "maxUnitsPerExecution" | "setMask">, never>>(object: I): SetFolderBudgetRequest;
};
/** A set of methods for managing Datasphere folder budgets. */
export declare const FolderBudgetServiceService: {
    /** Returns the specified folder budget. */
    readonly get: {
        readonly path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFolderBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFolderBudgetRequest;
        readonly responseSerialize: (value: GetFolderBudgetResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetFolderBudgetResponse;
    };
    /** Sets the unit balance and the limits of the specified folder budget. */
    readonly set: {
        readonly path: "/yandex.cloud.datasphere.v1.FolderBudgetService/Set";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetFolderBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetFolderBudgetRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface FolderBudgetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified folder budget. */
    get: handleUnaryCall<GetFolderBudgetRequest, GetFolderBudgetResponse>;
    /** Sets the unit balance and the limits of the specified folder budget. */
    set: handleUnaryCall<SetFolderBudgetRequest, Empty>;
}
export interface FolderBudgetServiceClient extends Client {
    /** Returns the specified folder budget. */
    get(request: GetFolderBudgetRequest, callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void): ClientUnaryCall;
    get(request: GetFolderBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void): ClientUnaryCall;
    get(request: GetFolderBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetFolderBudgetResponse) => void): ClientUnaryCall;
    /** Sets the unit balance and the limits of the specified folder budget. */
    set(request: SetFolderBudgetRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    set(request: SetFolderBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    set(request: SetFolderBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const FolderBudgetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): FolderBudgetServiceClient;
    service: typeof FolderBudgetServiceService;
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
