/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Registry } from "../../../../yandex/cloud/containerregistry/v1/registry";
import { IpPermission, IpPermissionDelta } from "../../../../yandex/cloud/containerregistry/v1/ip_permission";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetRegistryRequest {
    $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest";
    /**
     * ID of the Registry resource to return.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
}
export interface ListRegistriesRequest {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest";
    /**
     * ID of the folder to list registries in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Registry.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListRegistriesResponse {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse";
    /** List of Registry resources. */
    registries: Registry[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRegistriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRegistriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateRegistryRequest {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest";
    /**
     * ID of the folder to create a registry in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateRegistryRequest_LabelsEntry {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateRegistryMetadata {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata";
    /** ID of the registry that is being created. */
    registryId: string;
}
export interface UpdateRegistryRequest {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest";
    /**
     * ID of the Registry resource to update.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /** Field mask that specifies which fields of the Registry resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateRegistryRequest_LabelsEntry {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateRegistryMetadata {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata";
    /** ID of the Registry resource that is being updated. */
    registryId: string;
}
export interface DeleteRegistryRequest {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest";
    /** ID of the registry to delete. */
    registryId: string;
}
export interface DeleteRegistryMetadata {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata";
    /** ID of the registry that is being deleted. */
    registryId: string;
}
export interface SetIpPermissionRequest {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest";
    /** ID of the registry for which ip permissions are being set. */
    registryId: string;
    /** IP permission to be set. */
    ipPermission: IpPermission[];
}
export interface UpdateIpPermissionRequest {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest";
    /** ID of the registry for which ip permissions are being updated. */
    registryId: string;
    /** Updates to IP permissions. */
    ipPermissionDeltas: IpPermissionDelta[];
}
export interface ListIpPermissionRequest {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest";
    /** ID of the Registry to return ip permission list. */
    registryId: string;
}
export interface ListIpPermissionsResponse {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse";
    /** List of ip permissions for registry */
    permissions: IpPermission[];
}
export interface SetIpPermissionMetadata {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata";
    /** ID of the registry that ip permission is being set. */
    registryId: string;
}
export interface UpdateIpPermissionMetadata {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata";
    /** ID of the registry that ip permission is being updated. */
    registryId: string;
}
export declare const GetRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetRegistryRequest";
    encode(message: GetRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRegistryRequest;
    fromJSON(object: any): GetRegistryRequest;
    toJSON(message: GetRegistryRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): GetRegistryRequest;
};
export declare const ListRegistriesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesRequest";
    encode(message: ListRegistriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesRequest;
    fromJSON(object: any): ListRegistriesRequest;
    toJSON(message: ListRegistriesRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListRegistriesRequest;
};
export declare const ListRegistriesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListRegistriesResponse";
    encode(message: ListRegistriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRegistriesResponse;
    fromJSON(object: any): ListRegistriesResponse;
    toJSON(message: ListRegistriesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        registries?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/registry").Registry_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        registries?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/registry").Registry_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/registry").Registry_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/registry").Registry_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["registries"][number]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["registries"][number], "$type" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels">, never>)[] & Record<Exclude<keyof I["registries"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/registry").Registry_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "registries">, never>>(object: I): ListRegistriesResponse;
};
export declare const CreateRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest";
    encode(message: CreateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest;
    fromJSON(object: any): CreateRegistryRequest;
    toJSON(message: CreateRegistryRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "folderId" | "labels">, never>>(object: I): CreateRegistryRequest;
};
export declare const CreateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryRequest.LabelsEntry";
    encode(message: CreateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryRequest_LabelsEntry;
    fromJSON(object: any): CreateRegistryRequest_LabelsEntry;
    toJSON(message: CreateRegistryRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateRegistryRequest_LabelsEntry;
};
export declare const CreateRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.CreateRegistryMetadata";
    encode(message: CreateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRegistryMetadata;
    fromJSON(object: any): CreateRegistryMetadata;
    toJSON(message: CreateRegistryMetadata): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): CreateRegistryMetadata;
};
export declare const UpdateRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest";
    encode(message: UpdateRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest;
    fromJSON(object: any): UpdateRegistryRequest;
    toJSON(message: UpdateRegistryRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        registryId?: string | undefined;
    } & {
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
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "labels" | "updateMask" | "registryId">, never>>(object: I): UpdateRegistryRequest;
};
export declare const UpdateRegistryRequest_LabelsEntry: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryRequest.LabelsEntry";
    encode(message: UpdateRegistryRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryRequest_LabelsEntry;
    fromJSON(object: any): UpdateRegistryRequest_LabelsEntry;
    toJSON(message: UpdateRegistryRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateRegistryRequest_LabelsEntry;
};
export declare const UpdateRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateRegistryMetadata";
    encode(message: UpdateRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRegistryMetadata;
    fromJSON(object: any): UpdateRegistryMetadata;
    toJSON(message: UpdateRegistryMetadata): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): UpdateRegistryMetadata;
};
export declare const DeleteRegistryRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryRequest";
    encode(message: DeleteRegistryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryRequest;
    fromJSON(object: any): DeleteRegistryRequest;
    toJSON(message: DeleteRegistryRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): DeleteRegistryRequest;
};
export declare const DeleteRegistryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRegistryMetadata";
    encode(message: DeleteRegistryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRegistryMetadata;
    fromJSON(object: any): DeleteRegistryMetadata;
    toJSON(message: DeleteRegistryMetadata): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): DeleteRegistryMetadata;
};
export declare const SetIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionRequest";
    encode(message: SetIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetIpPermissionRequest;
    fromJSON(object: any): SetIpPermissionRequest;
    toJSON(message: SetIpPermissionRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
        ipPermission?: {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[] | undefined;
    } & {
        registryId?: string | undefined;
        ipPermission?: ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[] & ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        } & {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        } & Record<Exclude<keyof I["ipPermission"][number], "$type" | "action" | "ip">, never>)[] & Record<Exclude<keyof I["ipPermission"], "$type" | keyof {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId" | "ipPermission">, never>>(object: I): SetIpPermissionRequest;
};
export declare const UpdateIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest";
    encode(message: UpdateIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateIpPermissionRequest;
    fromJSON(object: any): UpdateIpPermissionRequest;
    toJSON(message: UpdateIpPermissionRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
        ipPermissionDeltas?: {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermissionAction | undefined;
            ipPermission?: {
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        registryId?: string | undefined;
        ipPermissionDeltas?: ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermissionAction | undefined;
            ipPermission?: {
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } | undefined;
        }[] & ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermissionAction | undefined;
            ipPermission?: {
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } | undefined;
        } & {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermissionAction | undefined;
            ipPermission?: ({
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } & {
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } & Record<Exclude<keyof I["ipPermissionDeltas"][number]["ipPermission"], "$type" | "action" | "ip">, never>) | undefined;
        } & Record<Exclude<keyof I["ipPermissionDeltas"][number], "$type" | "action" | "ipPermission">, never>)[] & Record<Exclude<keyof I["ipPermissionDeltas"], "$type" | keyof {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermissionAction | undefined;
            ipPermission?: {
                action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
                ip?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId" | "ipPermissionDeltas">, never>>(object: I): UpdateIpPermissionRequest;
};
export declare const ListIpPermissionRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionRequest";
    encode(message: ListIpPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIpPermissionRequest;
    fromJSON(object: any): ListIpPermissionRequest;
    toJSON(message: ListIpPermissionRequest): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): ListIpPermissionRequest;
};
export declare const ListIpPermissionsResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListIpPermissionsResponse";
    encode(message: ListIpPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIpPermissionsResponse;
    fromJSON(object: any): ListIpPermissionsResponse;
    toJSON(message: ListIpPermissionsResponse): unknown;
    fromPartial<I extends {
        permissions?: {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[] | undefined;
    } & {
        permissions?: ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[] & ({
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        } & {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "action" | "ip">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            action?: import("../../../../yandex/cloud/containerregistry/v1/ip_permission").IpPermission_Action | undefined;
            ip?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "permissions">, never>>(object: I): ListIpPermissionsResponse;
};
export declare const SetIpPermissionMetadata: {
    $type: "yandex.cloud.containerregistry.v1.SetIpPermissionMetadata";
    encode(message: SetIpPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetIpPermissionMetadata;
    fromJSON(object: any): SetIpPermissionMetadata;
    toJSON(message: SetIpPermissionMetadata): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): SetIpPermissionMetadata;
};
export declare const UpdateIpPermissionMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpdateIpPermissionMetadata";
    encode(message: UpdateIpPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateIpPermissionMetadata;
    fromJSON(object: any): UpdateIpPermissionMetadata;
    toJSON(message: UpdateIpPermissionMetadata): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
    } & {
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId">, never>>(object: I): UpdateIpPermissionMetadata;
};
/** A set of methods for managing Registry resources. */
export declare const RegistryServiceService: {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRegistryRequest;
        readonly responseSerialize: (value: Registry) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Registry;
    };
    /** Retrieves the list of Registry resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRegistriesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRegistriesRequest;
        readonly responseSerialize: (value: ListRegistriesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRegistriesResponse;
    };
    /** Creates a registry in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified registry. */
    readonly update: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified registry. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRegistryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRegistryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the specified registry. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified registry. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified registry. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List ip permissions for the specified registry. */
    readonly listIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListIpPermissionRequest;
        readonly responseSerialize: (value: ListIpPermissionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListIpPermissionsResponse;
    };
    /** Set ip permissions for the specified registry. */
    readonly setIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetIpPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Update ip permissions for the specified registry. */
    readonly updateIpPermission: {
        readonly path: "/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateIpPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateIpPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RegistryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get: handleUnaryCall<GetRegistryRequest, Registry>;
    /** Retrieves the list of Registry resources in the specified folder. */
    list: handleUnaryCall<ListRegistriesRequest, ListRegistriesResponse>;
    /** Creates a registry in the specified folder. */
    create: handleUnaryCall<CreateRegistryRequest, Operation>;
    /** Updates the specified registry. */
    update: handleUnaryCall<UpdateRegistryRequest, Operation>;
    /** Deletes the specified registry. */
    delete: handleUnaryCall<DeleteRegistryRequest, Operation>;
    /** Lists access bindings for the specified registry. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified registry. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** List ip permissions for the specified registry. */
    listIpPermission: handleUnaryCall<ListIpPermissionRequest, ListIpPermissionsResponse>;
    /** Set ip permissions for the specified registry. */
    setIpPermission: handleUnaryCall<SetIpPermissionRequest, Operation>;
    /** Update ip permissions for the specified registry. */
    updateIpPermission: handleUnaryCall<UpdateIpPermissionRequest, Operation>;
}
export interface RegistryServiceClient extends Client {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get(request: GetRegistryRequest, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    get(request: GetRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Registry) => void): ClientUnaryCall;
    /** Retrieves the list of Registry resources in the specified folder. */
    list(request: ListRegistriesRequest, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    list(request: ListRegistriesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    list(request: ListRegistriesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRegistriesResponse) => void): ClientUnaryCall;
    /** Creates a registry in the specified folder. */
    create(request: CreateRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified registry. */
    update(request: UpdateRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified registry. */
    delete(request: DeleteRegistryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRegistryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRegistryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists access bindings for the specified registry. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified registry. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified registry. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List ip permissions for the specified registry. */
    listIpPermission(request: ListIpPermissionRequest, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    listIpPermission(request: ListIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    listIpPermission(request: ListIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListIpPermissionsResponse) => void): ClientUnaryCall;
    /** Set ip permissions for the specified registry. */
    setIpPermission(request: SetIpPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setIpPermission(request: SetIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setIpPermission(request: SetIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Update ip permissions for the specified registry. */
    updateIpPermission(request: UpdateIpPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateIpPermission(request: UpdateIpPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateIpPermission(request: UpdateIpPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RegistryServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): RegistryServiceClient;
    service: typeof RegistryServiceService;
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
