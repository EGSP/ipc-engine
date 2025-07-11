/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Filesystem } from "../../../../yandex/cloud/compute/v1/filesystem";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetFilesystemRequest {
    $type: "yandex.cloud.compute.v1.GetFilesystemRequest";
    /**
     * ID of the filesystem to return.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
}
export interface ListFilesystemsRequest {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest";
    /**
     * ID of the folder to list filesystems in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`,
     * the service returns a [ListFilesystemsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListFilesystemsResponse.next_page_token] returned by a previous list request.
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
export interface ListFilesystemsResponse {
    $type: "yandex.cloud.compute.v1.ListFilesystemsResponse";
    /** List of filesystems in the specified folder. */
    filesystems: Filesystem[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFilesystemsRequest.page_size], use `next_page_token` as the value
     * for the [ListFilesystemsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFilesystemRequest {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest";
    /**
     * ID of the folder to create a filesystem in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the filesystem. The name must be unique within the folder. */
    name: string;
    /** Description of the filesystem. */
    description: string;
    /**
     * Filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the filesystem type.
     *
     * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
     *
     * The filesystem type cannot be updated after the filesystem creation.
     */
    typeId: string;
    /**
     * ID of the availability zone where the filesystem resides.
     *
     * To get a list of available zones, make a [yandex.cloud.compute.v1.ZoneService.List] request.
     *
     * A filesystem can be attached only to virtual machines residing in the same availability zone.
     * The filesystem availability zone cannot be updated after the filesystem creation.
     */
    zoneId: string;
    /**
     * Size of the filesystem, specified in bytes.
     *
     * The size of the filesystem cannot be updated after the filesystem creation.
     */
    size: number;
    /**
     * Block size used for the filesystem, specified in bytes.
     *
     * The block size cannot be updated after the filesystem creation.
     *
     * Default value: 4096.
     */
    blockSize: number;
}
export interface CreateFilesystemRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateFilesystemMetadata {
    $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata";
    /** ID of the filesystem that is being created. */
    filesystemId: string;
}
export interface UpdateFilesystemRequest {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest";
    /**
     * ID of the filesystem to update.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
    /** Field mask that specifies which attributes of the filesystem should be updated. */
    updateMask?: FieldMask;
    /** New name of the filesystem. The name must be unique within the folder. */
    name: string;
    /** New description of the filesystem. */
    description: string;
    /**
     * New filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [FilesystemService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /** Size of the filesystem, specified in bytes. */
    size: number;
}
export interface UpdateFilesystemRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateFilesystemMetadata {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata";
    /** ID of the filesystem that is being updated. */
    filesystemId: string;
}
export interface DeleteFilesystemRequest {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest";
    /**
     * ID of the filesystem to delete.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
}
export interface DeleteFilesystemMetadata {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata";
    /** ID of the filesystem that is being deleted. */
    filesystemId: string;
}
export interface ListFilesystemOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest";
    /**
     * ID of the filesystem to list operations for.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListFilesystemOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListFilesystemOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListFilesystemOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse";
    /** List of operations for the specified filesystem. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFilesystemOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListFilesystemOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.GetFilesystemRequest";
    encode(message: GetFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFilesystemRequest;
    fromJSON(object: any): GetFilesystemRequest;
    toJSON(message: GetFilesystemRequest): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId">, never>>(object: I): GetFilesystemRequest;
};
export declare const ListFilesystemsRequest: {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest";
    encode(message: ListFilesystemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemsRequest;
    fromJSON(object: any): ListFilesystemsRequest;
    toJSON(message: ListFilesystemsRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListFilesystemsRequest;
};
export declare const ListFilesystemsResponse: {
    $type: "yandex.cloud.compute.v1.ListFilesystemsResponse";
    encode(message: ListFilesystemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemsResponse;
    fromJSON(object: any): ListFilesystemsResponse;
    toJSON(message: ListFilesystemsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        filesystems?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/filesystem").Filesystem_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        filesystems?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/filesystem").Filesystem_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/filesystem").Filesystem_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/filesystem").Filesystem_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["filesystems"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
        } & Record<Exclude<keyof I["filesystems"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "zoneId" | "size" | "typeId" | "blockSize">, never>)[] & Record<Exclude<keyof I["filesystems"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/filesystem").Filesystem_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "filesystems">, never>>(object: I): ListFilesystemsResponse;
};
export declare const CreateFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest";
    encode(message: CreateFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemRequest;
    fromJSON(object: any): CreateFilesystemRequest;
    toJSON(message: CreateFilesystemRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
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
        zoneId?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zoneId" | "size" | "typeId" | "blockSize">, never>>(object: I): CreateFilesystemRequest;
};
export declare const CreateFilesystemRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry";
    encode(message: CreateFilesystemRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemRequest_LabelsEntry;
    fromJSON(object: any): CreateFilesystemRequest_LabelsEntry;
    toJSON(message: CreateFilesystemRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateFilesystemRequest_LabelsEntry;
};
export declare const CreateFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata";
    encode(message: CreateFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemMetadata;
    fromJSON(object: any): CreateFilesystemMetadata;
    toJSON(message: CreateFilesystemMetadata): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId">, never>>(object: I): CreateFilesystemMetadata;
};
export declare const UpdateFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest";
    encode(message: UpdateFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemRequest;
    fromJSON(object: any): UpdateFilesystemRequest;
    toJSON(message: UpdateFilesystemRequest): unknown;
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
        size?: number | undefined;
        filesystemId?: string | undefined;
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
        size?: number | undefined;
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "size" | "filesystemId">, never>>(object: I): UpdateFilesystemRequest;
};
export declare const UpdateFilesystemRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry";
    encode(message: UpdateFilesystemRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemRequest_LabelsEntry;
    fromJSON(object: any): UpdateFilesystemRequest_LabelsEntry;
    toJSON(message: UpdateFilesystemRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateFilesystemRequest_LabelsEntry;
};
export declare const UpdateFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata";
    encode(message: UpdateFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemMetadata;
    fromJSON(object: any): UpdateFilesystemMetadata;
    toJSON(message: UpdateFilesystemMetadata): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId">, never>>(object: I): UpdateFilesystemMetadata;
};
export declare const DeleteFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest";
    encode(message: DeleteFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFilesystemRequest;
    fromJSON(object: any): DeleteFilesystemRequest;
    toJSON(message: DeleteFilesystemRequest): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId">, never>>(object: I): DeleteFilesystemRequest;
};
export declare const DeleteFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata";
    encode(message: DeleteFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFilesystemMetadata;
    fromJSON(object: any): DeleteFilesystemMetadata;
    toJSON(message: DeleteFilesystemMetadata): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId">, never>>(object: I): DeleteFilesystemMetadata;
};
export declare const ListFilesystemOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest";
    encode(message: ListFilesystemOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemOperationsRequest;
    fromJSON(object: any): ListFilesystemOperationsRequest;
    toJSON(message: ListFilesystemOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filesystemId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filesystemId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filesystemId">, never>>(object: I): ListFilesystemOperationsRequest;
};
export declare const ListFilesystemOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse";
    encode(message: ListFilesystemOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemOperationsResponse;
    fromJSON(object: any): ListFilesystemOperationsResponse;
    toJSON(message: ListFilesystemOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListFilesystemOperationsResponse;
};
/** A set of methods for managing filesystems. */
export declare const FilesystemServiceService: {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFilesystemRequest;
        readonly responseSerialize: (value: Filesystem) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Filesystem;
    };
    /** Lists filesystems in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFilesystemsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFilesystemsRequest;
        readonly responseSerialize: (value: ListFilesystemsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFilesystemsResponse;
    };
    /** Creates a filesystem in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified filesystem. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified filesystem. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFilesystemOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFilesystemOperationsRequest;
        readonly responseSerialize: (value: ListFilesystemOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFilesystemOperationsResponse;
    };
};
export interface FilesystemServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    get: handleUnaryCall<GetFilesystemRequest, Filesystem>;
    /** Lists filesystems in the specified folder. */
    list: handleUnaryCall<ListFilesystemsRequest, ListFilesystemsResponse>;
    /** Creates a filesystem in the specified folder. */
    create: handleUnaryCall<CreateFilesystemRequest, Operation>;
    /** Updates the specified filesystem. */
    update: handleUnaryCall<UpdateFilesystemRequest, Operation>;
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    delete: handleUnaryCall<DeleteFilesystemRequest, Operation>;
    /** Lists operations for the specified filesystem. */
    listOperations: handleUnaryCall<ListFilesystemOperationsRequest, ListFilesystemOperationsResponse>;
}
export interface FilesystemServiceClient extends Client {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    get(request: GetFilesystemRequest, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    get(request: GetFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    get(request: GetFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    /** Lists filesystems in the specified folder. */
    list(request: ListFilesystemsRequest, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    list(request: ListFilesystemsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    list(request: ListFilesystemsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    /** Creates a filesystem in the specified folder. */
    create(request: CreateFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified filesystem. */
    update(request: UpdateFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    delete(request: DeleteFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified filesystem. */
    listOperations(request: ListFilesystemOperationsRequest, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFilesystemOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFilesystemOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
}
export declare const FilesystemServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): FilesystemServiceClient;
    service: typeof FilesystemServiceService;
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
