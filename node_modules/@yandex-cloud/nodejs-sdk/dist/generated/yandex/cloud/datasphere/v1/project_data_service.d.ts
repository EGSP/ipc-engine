/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleClientStreamingCall, handleServerStreamingCall, Client, ClientWritableStream, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface FileMetadata {
    $type: "yandex.cloud.datasphere.v1.FileMetadata";
    /** ID of the Project resource associated with the file. */
    projectId: string;
    /** File path. */
    path: string;
    /** File size in bytes. */
    sizeBytes: number;
}
export interface UploadFileRequest {
    $type: "yandex.cloud.datasphere.v1.UploadFileRequest";
    /** Metadata of the file to upload. */
    metadata?: FileMetadata | undefined;
    /** Byte chunk of the file to upload. */
    chunk: Buffer | undefined;
}
export interface UploadFileResponse {
    $type: "yandex.cloud.datasphere.v1.UploadFileResponse";
    /** Metadata of the uploaded file. */
    metadata?: FileMetadata;
}
export interface DownloadFileRequest {
    $type: "yandex.cloud.datasphere.v1.DownloadFileRequest";
    /** ID of the Project resource to download the file from. */
    projectId: string;
    /** Path of the file to download. */
    filePath: string;
}
export interface DownloadFileResponse {
    $type: "yandex.cloud.datasphere.v1.DownloadFileResponse";
    /** Metadata of the downloaded file. */
    metadata?: FileMetadata | undefined;
    /** Byte chunk of the downloaded file. */
    chunk: Buffer | undefined;
}
export declare const FileMetadata: {
    $type: "yandex.cloud.datasphere.v1.FileMetadata";
    encode(message: FileMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FileMetadata;
    fromJSON(object: any): FileMetadata;
    toJSON(message: FileMetadata): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        projectId?: string | undefined;
        sizeBytes?: number | undefined;
    } & {
        path?: string | undefined;
        projectId?: string | undefined;
        sizeBytes?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "projectId" | "sizeBytes">, never>>(object: I): FileMetadata;
};
export declare const UploadFileRequest: {
    $type: "yandex.cloud.datasphere.v1.UploadFileRequest";
    encode(message: UploadFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UploadFileRequest;
    fromJSON(object: any): UploadFileRequest;
    toJSON(message: UploadFileRequest): unknown;
    fromPartial<I extends {
        metadata?: {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } | undefined;
        chunk?: Buffer | undefined;
    } & {
        metadata?: ({
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & Record<Exclude<keyof I["metadata"], "$type" | "path" | "projectId" | "sizeBytes">, never>) | undefined;
        chunk?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "metadata" | "chunk">, never>>(object: I): UploadFileRequest;
};
export declare const UploadFileResponse: {
    $type: "yandex.cloud.datasphere.v1.UploadFileResponse";
    encode(message: UploadFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UploadFileResponse;
    fromJSON(object: any): UploadFileResponse;
    toJSON(message: UploadFileResponse): unknown;
    fromPartial<I extends {
        metadata?: {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } | undefined;
    } & {
        metadata?: ({
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & Record<Exclude<keyof I["metadata"], "$type" | "path" | "projectId" | "sizeBytes">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "metadata">, never>>(object: I): UploadFileResponse;
};
export declare const DownloadFileRequest: {
    $type: "yandex.cloud.datasphere.v1.DownloadFileRequest";
    encode(message: DownloadFileRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DownloadFileRequest;
    fromJSON(object: any): DownloadFileRequest;
    toJSON(message: DownloadFileRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
        filePath?: string | undefined;
    } & {
        projectId?: string | undefined;
        filePath?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "projectId" | "filePath">, never>>(object: I): DownloadFileRequest;
};
export declare const DownloadFileResponse: {
    $type: "yandex.cloud.datasphere.v1.DownloadFileResponse";
    encode(message: DownloadFileResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DownloadFileResponse;
    fromJSON(object: any): DownloadFileResponse;
    toJSON(message: DownloadFileResponse): unknown;
    fromPartial<I extends {
        metadata?: {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } | undefined;
        chunk?: Buffer | undefined;
    } & {
        metadata?: ({
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & {
            path?: string | undefined;
            projectId?: string | undefined;
            sizeBytes?: number | undefined;
        } & Record<Exclude<keyof I["metadata"], "$type" | "path" | "projectId" | "sizeBytes">, never>) | undefined;
        chunk?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "metadata" | "chunk">, never>>(object: I): DownloadFileResponse;
};
/** A set of methods for managing data of the Project resource. */
export declare const ProjectDataServiceService: {
    /** Uploads a file to the specified project. */
    readonly uploadFile: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile";
        readonly requestStream: true;
        readonly responseStream: false;
        readonly requestSerialize: (value: UploadFileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UploadFileRequest;
        readonly responseSerialize: (value: UploadFileResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UploadFileResponse;
    };
    /** Downloads the specified file from the specified project. */
    readonly downloadFile: {
        readonly path: "/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: DownloadFileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DownloadFileRequest;
        readonly responseSerialize: (value: DownloadFileResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DownloadFileResponse;
    };
};
export interface ProjectDataServiceServer extends UntypedServiceImplementation {
    /** Uploads a file to the specified project. */
    uploadFile: handleClientStreamingCall<UploadFileRequest, UploadFileResponse>;
    /** Downloads the specified file from the specified project. */
    downloadFile: handleServerStreamingCall<DownloadFileRequest, DownloadFileResponse>;
}
export interface ProjectDataServiceClient extends Client {
    /** Uploads a file to the specified project. */
    uploadFile(callback: (error: ServiceError | null, response: UploadFileResponse) => void): ClientWritableStream<UploadFileRequest>;
    uploadFile(metadata: Metadata, callback: (error: ServiceError | null, response: UploadFileResponse) => void): ClientWritableStream<UploadFileRequest>;
    uploadFile(options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UploadFileResponse) => void): ClientWritableStream<UploadFileRequest>;
    uploadFile(metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UploadFileResponse) => void): ClientWritableStream<UploadFileRequest>;
    /** Downloads the specified file from the specified project. */
    downloadFile(request: DownloadFileRequest, options?: Partial<CallOptions>): ClientReadableStream<DownloadFileResponse>;
    downloadFile(request: DownloadFileRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<DownloadFileResponse>;
}
export declare const ProjectDataServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ProjectDataServiceClient;
    service: typeof ProjectDataServiceService;
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
