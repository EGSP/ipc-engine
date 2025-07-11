/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Snapshot } from "../../../../yandex/cloud/compute/v1/snapshot";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetSnapshotRequest {
    $type: "yandex.cloud.compute.v1.GetSnapshotRequest";
    /**
     * ID of the Snapshot resource to return.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}
export interface ListSnapshotsRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotsRequest";
    /**
     * ID of the folder to list snapshots in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSnapshotsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     */
    filter: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * The default sorting order is ascending
     */
    orderBy: string;
}
export interface ListSnapshotsResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotsResponse";
    /** List of snapshots. */
    snapshots: Snapshot[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSnapshotsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSnapshotRequest {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest";
    /**
     * ID of the folder to create a snapshot in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * ID of the disk to create the snapshot from.
     * To get the disk ID use a [yandex.cloud.compute.v1.DiskService.List] request.
     */
    diskId: string;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateSnapshotRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateSnapshotMetadata {
    $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata";
    /** ID of the snapshot that is being created. */
    snapshotId: string;
    /** ID of the source disk used to create this snapshot. */
    diskId: string;
}
export interface UpdateSnapshotRequest {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest";
    /**
     * ID of the Snapshot resource to update.
     * To get the snapshot ID use a [SnapshotService.List] request.
     */
    snapshotId: string;
    /** Field mask that specifies which fields of the Snapshot resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateSnapshotRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateSnapshotMetadata {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata";
    /** ID of the Snapshot resource that is being updated. */
    snapshotId: string;
}
export interface DeleteSnapshotRequest {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest";
    /**
     * ID of the snapshot to delete.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}
export interface DeleteSnapshotMetadata {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata";
    /** ID of the snapshot that is being deleted. */
    snapshotId: string;
}
export interface ListSnapshotOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest";
    /** ID of the Snapshot resource to list operations for. */
    snapshotId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSnapshotOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse";
    /** List of operations for the specified snapshot. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSnapshotOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetSnapshotRequest: {
    $type: "yandex.cloud.compute.v1.GetSnapshotRequest";
    encode(message: GetSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSnapshotRequest;
    fromJSON(object: any): GetSnapshotRequest;
    toJSON(message: GetSnapshotRequest): unknown;
    fromPartial<I extends {
        snapshotId?: string | undefined;
    } & {
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotId">, never>>(object: I): GetSnapshotRequest;
};
export declare const ListSnapshotsRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotsRequest";
    encode(message: ListSnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotsRequest;
    fromJSON(object: any): ListSnapshotsRequest;
    toJSON(message: ListSnapshotsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListSnapshotsRequest;
};
export declare const ListSnapshotsResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotsResponse";
    encode(message: ListSnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotsResponse;
    fromJSON(object: any): ListSnapshotsResponse;
    toJSON(message: ListSnapshotsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        snapshots?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        snapshots?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshots"][number]["labels"], string | number>, never>) | undefined;
            productIds?: (string[] & string[] & Record<Exclude<keyof I["snapshots"][number]["productIds"], "$type" | keyof string[]>, never>) | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        } & Record<Exclude<keyof I["snapshots"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "productIds" | "diskSize" | "storageSize" | "sourceDiskId">, never>)[] & Record<Exclude<keyof I["snapshots"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/snapshot").Snapshot_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            productIds?: string[] | undefined;
            diskSize?: number | undefined;
            storageSize?: number | undefined;
            sourceDiskId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "snapshots">, never>>(object: I): ListSnapshotsResponse;
};
export declare const CreateSnapshotRequest: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest";
    encode(message: CreateSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotRequest;
    fromJSON(object: any): CreateSnapshotRequest;
    toJSON(message: CreateSnapshotRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        diskId?: string | undefined;
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
        diskId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "diskId">, never>>(object: I): CreateSnapshotRequest;
};
export declare const CreateSnapshotRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotRequest.LabelsEntry";
    encode(message: CreateSnapshotRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotRequest_LabelsEntry;
    fromJSON(object: any): CreateSnapshotRequest_LabelsEntry;
    toJSON(message: CreateSnapshotRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateSnapshotRequest_LabelsEntry;
};
export declare const CreateSnapshotMetadata: {
    $type: "yandex.cloud.compute.v1.CreateSnapshotMetadata";
    encode(message: CreateSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotMetadata;
    fromJSON(object: any): CreateSnapshotMetadata;
    toJSON(message: CreateSnapshotMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        snapshotId?: string | undefined;
    } & {
        diskId?: string | undefined;
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "snapshotId">, never>>(object: I): CreateSnapshotMetadata;
};
export declare const UpdateSnapshotRequest: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest";
    encode(message: UpdateSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotRequest;
    fromJSON(object: any): UpdateSnapshotRequest;
    toJSON(message: UpdateSnapshotRequest): unknown;
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
        snapshotId?: string | undefined;
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
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "snapshotId">, never>>(object: I): UpdateSnapshotRequest;
};
export declare const UpdateSnapshotRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotRequest.LabelsEntry";
    encode(message: UpdateSnapshotRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotRequest_LabelsEntry;
    fromJSON(object: any): UpdateSnapshotRequest_LabelsEntry;
    toJSON(message: UpdateSnapshotRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateSnapshotRequest_LabelsEntry;
};
export declare const UpdateSnapshotMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateSnapshotMetadata";
    encode(message: UpdateSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotMetadata;
    fromJSON(object: any): UpdateSnapshotMetadata;
    toJSON(message: UpdateSnapshotMetadata): unknown;
    fromPartial<I extends {
        snapshotId?: string | undefined;
    } & {
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotId">, never>>(object: I): UpdateSnapshotMetadata;
};
export declare const DeleteSnapshotRequest: {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotRequest";
    encode(message: DeleteSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotRequest;
    fromJSON(object: any): DeleteSnapshotRequest;
    toJSON(message: DeleteSnapshotRequest): unknown;
    fromPartial<I extends {
        snapshotId?: string | undefined;
    } & {
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotId">, never>>(object: I): DeleteSnapshotRequest;
};
export declare const DeleteSnapshotMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteSnapshotMetadata";
    encode(message: DeleteSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotMetadata;
    fromJSON(object: any): DeleteSnapshotMetadata;
    toJSON(message: DeleteSnapshotMetadata): unknown;
    fromPartial<I extends {
        snapshotId?: string | undefined;
    } & {
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "snapshotId">, never>>(object: I): DeleteSnapshotMetadata;
};
export declare const ListSnapshotOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsRequest";
    encode(message: ListSnapshotOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotOperationsRequest;
    fromJSON(object: any): ListSnapshotOperationsRequest;
    toJSON(message: ListSnapshotOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "snapshotId">, never>>(object: I): ListSnapshotOperationsRequest;
};
export declare const ListSnapshotOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListSnapshotOperationsResponse";
    encode(message: ListSnapshotOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotOperationsResponse;
    fromJSON(object: any): ListSnapshotOperationsResponse;
    toJSON(message: ListSnapshotOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListSnapshotOperationsResponse;
};
/** A set of methods for managing Snapshot resources. */
export declare const SnapshotServiceService: {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSnapshotRequest;
        readonly responseSerialize: (value: Snapshot) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Snapshot;
    };
    /** Retrieves the list of Snapshot resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotsRequest;
        readonly responseSerialize: (value: ListSnapshotsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotsResponse;
    };
    /** Creates a snapshot of the specified disk. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified snapshot. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotOperationsRequest;
        readonly responseSerialize: (value: ListSnapshotOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotOperationsResponse;
    };
};
export interface SnapshotServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: handleUnaryCall<GetSnapshotRequest, Snapshot>;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: handleUnaryCall<ListSnapshotsRequest, ListSnapshotsResponse>;
    /** Creates a snapshot of the specified disk. */
    create: handleUnaryCall<CreateSnapshotRequest, Operation>;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: handleUnaryCall<UpdateSnapshotRequest, Operation>;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteSnapshotRequest, Operation>;
    /** Lists operations for the specified snapshot. */
    listOperations: handleUnaryCall<ListSnapshotOperationsRequest, ListSnapshotOperationsResponse>;
}
export interface SnapshotServiceClient extends Client {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get(request: GetSnapshotRequest, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    get(request: GetSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    get(request: GetSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list(request: ListSnapshotsRequest, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    /** Creates a snapshot of the specified disk. */
    create(request: CreateSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update(request: UpdateSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete(request: DeleteSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified snapshot. */
    listOperations(request: ListSnapshotOperationsRequest, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
}
export declare const SnapshotServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): SnapshotServiceClient;
    service: typeof SnapshotServiceService;
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
