/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Sink, Sink_Yds, Sink_S3 } from "../../../../yandex/cloud/logging/v1/sink";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface GetSinkRequest {
    $type: "yandex.cloud.logging.v1.GetSinkRequest";
    /**
     * ID of the sink to return.
     *
     * To get a sink ID make a [SinkService.List] request.
     */
    sinkId: string;
}
export interface ListSinksRequest {
    $type: "yandex.cloud.logging.v1.ListSinksRequest";
    /**
     * Folder ID of the sinks to return.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListSinkssResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSinksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters sinks listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Sink.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name="my-sink"`.
     */
    filter: string;
}
export interface ListSinksResponse {
    $type: "yandex.cloud.logging.v1.ListSinksResponse";
    /** List of sinks in the specified folder. */
    sinks: Sink[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListSinksRequest.page_size], use `next_page_token` as the value
     * for the [ListSinksRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSinkRequest {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest";
    /**
     * ID of the folder to create a sink in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the sink.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the sink. */
    description: string;
    /** Sink labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Logs will be written to the sink on behalf of this service account */
    serviceAccountId: string;
    /** Yandex data stream */
    yds?: Sink_Yds | undefined;
    /** Object storage */
    s3?: Sink_S3 | undefined;
}
export interface CreateSinkRequest_LabelsEntry {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSinkMetadata {
    $type: "yandex.cloud.logging.v1.CreateSinkMetadata";
    /** ID of the sink being created. */
    sinkId: string;
}
export interface UpdateSinkRequest {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest";
    /**
     * ID of the sink to update.
     *
     * To get a sink ID make a [SinkService.List] request.
     */
    sinkId: string;
    /** Field mask that specifies which attributes of the function should be updated. */
    updateMask?: FieldMask;
    /**
     * New name of the sink.
     * The name must be unique within the folder.
     */
    name: string;
    /** New Description of the sink. */
    description: string;
    /** New sink labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** new service account to use for logs writing to the sink. */
    serviceAccountId: string;
    /** Yandex data stream */
    yds?: Sink_Yds | undefined;
    /** Object storage */
    s3?: Sink_S3 | undefined;
}
export interface UpdateSinkRequest_LabelsEntry {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSinkMetadata {
    $type: "yandex.cloud.logging.v1.UpdateSinkMetadata";
    /** ID of the sink being updated. */
    sinkId: string;
}
export interface DeleteSinkRequest {
    $type: "yandex.cloud.logging.v1.DeleteSinkRequest";
    /**
     * ID of the sink to delete.
     *
     * To get a sink ID make a [SinkService.List] request.
     */
    sinkId: string;
}
export interface DeleteSinkMetadata {
    $type: "yandex.cloud.logging.v1.DeleteSinkMetadata";
    /** ID of the sink being deleted. */
    sinkId: string;
}
export interface ListSinkOperationsRequest {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest";
    /**
     * ID of the sink to list operations for.
     *
     * To get a sink ID make a [SinkService.List] request.
     */
    sinkId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListSinkOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListSinkOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.description], [operation.Operation.created_at], [operation.Operation.modified_at], [operation.Operation.created_by], [operation.Operation.done] fields.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListSinkOperationsResponse {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse";
    /** List of operations for the specified sink. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOSinkperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListSinkOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetSinkRequest: {
    $type: "yandex.cloud.logging.v1.GetSinkRequest";
    encode(message: GetSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSinkRequest;
    fromJSON(object: any): GetSinkRequest;
    toJSON(message: GetSinkRequest): unknown;
    fromPartial<I extends {
        sinkId?: string | undefined;
    } & {
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sinkId">, never>>(object: I): GetSinkRequest;
};
export declare const ListSinksRequest: {
    $type: "yandex.cloud.logging.v1.ListSinksRequest";
    encode(message: ListSinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSinksRequest;
    fromJSON(object: any): ListSinksRequest;
    toJSON(message: ListSinksRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListSinksRequest;
};
export declare const ListSinksResponse: {
    $type: "yandex.cloud.logging.v1.ListSinksResponse";
    encode(message: ListSinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSinksResponse;
    fromJSON(object: any): ListSinksResponse;
    toJSON(message: ListSinksResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        sinks?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
            serviceAccountId?: string | undefined;
            yds?: {
                streamName?: string | undefined;
            } | undefined;
            s3?: {
                bucket?: string | undefined;
                prefix?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        sinks?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
            serviceAccountId?: string | undefined;
            yds?: {
                streamName?: string | undefined;
            } | undefined;
            s3?: {
                bucket?: string | undefined;
                prefix?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
            serviceAccountId?: string | undefined;
            yds?: {
                streamName?: string | undefined;
            } | undefined;
            s3?: {
                bucket?: string | undefined;
                prefix?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["sinks"][number]["labels"], string | number>, never>) | undefined;
            cloudId?: string | undefined;
            serviceAccountId?: string | undefined;
            yds?: ({
                streamName?: string | undefined;
            } & {
                streamName?: string | undefined;
            } & Record<Exclude<keyof I["sinks"][number]["yds"], "$type" | "streamName">, never>) | undefined;
            s3?: ({
                bucket?: string | undefined;
                prefix?: string | undefined;
            } & {
                bucket?: string | undefined;
                prefix?: string | undefined;
            } & Record<Exclude<keyof I["sinks"][number]["s3"], "$type" | "bucket" | "prefix">, never>) | undefined;
        } & Record<Exclude<keyof I["sinks"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "cloudId" | "serviceAccountId" | "yds" | "s3">, never>)[] & Record<Exclude<keyof I["sinks"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            cloudId?: string | undefined;
            serviceAccountId?: string | undefined;
            yds?: {
                streamName?: string | undefined;
            } | undefined;
            s3?: {
                bucket?: string | undefined;
                prefix?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "sinks">, never>>(object: I): ListSinksResponse;
};
export declare const CreateSinkRequest: {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest";
    encode(message: CreateSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSinkRequest;
    fromJSON(object: any): CreateSinkRequest;
    toJSON(message: CreateSinkRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        serviceAccountId?: string | undefined;
        yds?: {
            streamName?: string | undefined;
        } | undefined;
        s3?: {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        serviceAccountId?: string | undefined;
        yds?: ({
            streamName?: string | undefined;
        } & {
            streamName?: string | undefined;
        } & Record<Exclude<keyof I["yds"], "$type" | "streamName">, never>) | undefined;
        s3?: ({
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & Record<Exclude<keyof I["s3"], "$type" | "bucket" | "prefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "serviceAccountId" | "yds" | "s3">, never>>(object: I): CreateSinkRequest;
};
export declare const CreateSinkRequest_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.CreateSinkRequest.LabelsEntry";
    encode(message: CreateSinkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSinkRequest_LabelsEntry;
    fromJSON(object: any): CreateSinkRequest_LabelsEntry;
    toJSON(message: CreateSinkRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSinkRequest_LabelsEntry;
};
export declare const CreateSinkMetadata: {
    $type: "yandex.cloud.logging.v1.CreateSinkMetadata";
    encode(message: CreateSinkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSinkMetadata;
    fromJSON(object: any): CreateSinkMetadata;
    toJSON(message: CreateSinkMetadata): unknown;
    fromPartial<I extends {
        sinkId?: string | undefined;
    } & {
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sinkId">, never>>(object: I): CreateSinkMetadata;
};
export declare const UpdateSinkRequest: {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest";
    encode(message: UpdateSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSinkRequest;
    fromJSON(object: any): UpdateSinkRequest;
    toJSON(message: UpdateSinkRequest): unknown;
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
        serviceAccountId?: string | undefined;
        sinkId?: string | undefined;
        yds?: {
            streamName?: string | undefined;
        } | undefined;
        s3?: {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } | undefined;
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
        serviceAccountId?: string | undefined;
        sinkId?: string | undefined;
        yds?: ({
            streamName?: string | undefined;
        } & {
            streamName?: string | undefined;
        } & Record<Exclude<keyof I["yds"], "$type" | "streamName">, never>) | undefined;
        s3?: ({
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & {
            bucket?: string | undefined;
            prefix?: string | undefined;
        } & Record<Exclude<keyof I["s3"], "$type" | "bucket" | "prefix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "serviceAccountId" | "sinkId" | "yds" | "s3">, never>>(object: I): UpdateSinkRequest;
};
export declare const UpdateSinkRequest_LabelsEntry: {
    $type: "yandex.cloud.logging.v1.UpdateSinkRequest.LabelsEntry";
    encode(message: UpdateSinkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSinkRequest_LabelsEntry;
    fromJSON(object: any): UpdateSinkRequest_LabelsEntry;
    toJSON(message: UpdateSinkRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSinkRequest_LabelsEntry;
};
export declare const UpdateSinkMetadata: {
    $type: "yandex.cloud.logging.v1.UpdateSinkMetadata";
    encode(message: UpdateSinkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSinkMetadata;
    fromJSON(object: any): UpdateSinkMetadata;
    toJSON(message: UpdateSinkMetadata): unknown;
    fromPartial<I extends {
        sinkId?: string | undefined;
    } & {
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sinkId">, never>>(object: I): UpdateSinkMetadata;
};
export declare const DeleteSinkRequest: {
    $type: "yandex.cloud.logging.v1.DeleteSinkRequest";
    encode(message: DeleteSinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSinkRequest;
    fromJSON(object: any): DeleteSinkRequest;
    toJSON(message: DeleteSinkRequest): unknown;
    fromPartial<I extends {
        sinkId?: string | undefined;
    } & {
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sinkId">, never>>(object: I): DeleteSinkRequest;
};
export declare const DeleteSinkMetadata: {
    $type: "yandex.cloud.logging.v1.DeleteSinkMetadata";
    encode(message: DeleteSinkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSinkMetadata;
    fromJSON(object: any): DeleteSinkMetadata;
    toJSON(message: DeleteSinkMetadata): unknown;
    fromPartial<I extends {
        sinkId?: string | undefined;
    } & {
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sinkId">, never>>(object: I): DeleteSinkMetadata;
};
export declare const ListSinkOperationsRequest: {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsRequest";
    encode(message: ListSinkOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSinkOperationsRequest;
    fromJSON(object: any): ListSinkOperationsRequest;
    toJSON(message: ListSinkOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        sinkId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        sinkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "sinkId">, never>>(object: I): ListSinkOperationsRequest;
};
export declare const ListSinkOperationsResponse: {
    $type: "yandex.cloud.logging.v1.ListSinkOperationsResponse";
    encode(message: ListSinkOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSinkOperationsResponse;
    fromJSON(object: any): ListSinkOperationsResponse;
    toJSON(message: ListSinkOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSinkOperationsResponse;
};
/** A set of methods for managing log sinks. */
export declare const SinkServiceService: {
    /**
     * Returns the specified sink.
     *
     * To get the list of all available sinks, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSinkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSinkRequest;
        readonly responseSerialize: (value: Sink) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Sink;
    };
    /** Retrieves the list of sinks in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSinksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSinksRequest;
        readonly responseSerialize: (value: ListSinksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSinksResponse;
    };
    /** Creates a sink in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSinkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSinkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified sink. */
    readonly update: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSinkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSinkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified sink. */
    readonly delete: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSinkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSinkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified sink. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSinkOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSinkOperationsRequest;
        readonly responseSerialize: (value: ListSinkOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSinkOperationsResponse;
    };
    /** Lists existing access bindings for the specified sink. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified sink. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified sink. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.logging.v1.SinkService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface SinkServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified sink.
     *
     * To get the list of all available sinks, make a [List] request.
     */
    get: handleUnaryCall<GetSinkRequest, Sink>;
    /** Retrieves the list of sinks in the specified folder. */
    list: handleUnaryCall<ListSinksRequest, ListSinksResponse>;
    /** Creates a sink in the specified folder. */
    create: handleUnaryCall<CreateSinkRequest, Operation>;
    /** Updates the specified sink. */
    update: handleUnaryCall<UpdateSinkRequest, Operation>;
    /** Deletes the specified sink. */
    delete: handleUnaryCall<DeleteSinkRequest, Operation>;
    /** Lists operations for the specified sink. */
    listOperations: handleUnaryCall<ListSinkOperationsRequest, ListSinkOperationsResponse>;
    /** Lists existing access bindings for the specified sink. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified sink. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified sink. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface SinkServiceClient extends Client {
    /**
     * Returns the specified sink.
     *
     * To get the list of all available sinks, make a [List] request.
     */
    get(request: GetSinkRequest, callback: (error: ServiceError | null, response: Sink) => void): ClientUnaryCall;
    get(request: GetSinkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Sink) => void): ClientUnaryCall;
    get(request: GetSinkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Sink) => void): ClientUnaryCall;
    /** Retrieves the list of sinks in the specified folder. */
    list(request: ListSinksRequest, callback: (error: ServiceError | null, response: ListSinksResponse) => void): ClientUnaryCall;
    list(request: ListSinksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSinksResponse) => void): ClientUnaryCall;
    list(request: ListSinksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSinksResponse) => void): ClientUnaryCall;
    /** Creates a sink in the specified folder. */
    create(request: CreateSinkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSinkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSinkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified sink. */
    update(request: UpdateSinkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSinkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSinkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified sink. */
    delete(request: DeleteSinkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSinkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSinkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified sink. */
    listOperations(request: ListSinkOperationsRequest, callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSinkOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSinkOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSinkOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified sink. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified sink. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified sink. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const SinkServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SinkServiceClient;
    service: typeof SinkServiceService;
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
