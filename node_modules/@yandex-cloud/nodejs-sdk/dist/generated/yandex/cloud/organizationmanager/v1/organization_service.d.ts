/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Organization } from "../../../../yandex/cloud/organizationmanager/v1/organization";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface GetOrganizationRequest {
    $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest";
    /**
     * ID of the Organization resource to return.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
}
export interface ListOrganizationsRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest";
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOrganizationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Organization.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListOrganizationsResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse";
    /** List of Organization resources. */
    organizations: Organization[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListOrganizationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateOrganizationRequest {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest";
    /**
     * ID of the organization to update.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
    /** Field mask that specifies which fields of the organization are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the organization. */
    name: string;
    /** Description of the organization. */
    description: string;
    /** Display name of the organization. */
    title: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateOrganizationRequest_LabelsEntry {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateOrganizationMetadata {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata";
    /** ID of the organization that is being updated. */
    organizationId: string;
}
export interface ListOrganizationOperationsRequest {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest";
    /** ID of the Organization resource to list operations for. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListOrganizationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListOrganizationOperationsResponse {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse";
    /** List of operations for the specified organization. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListOrganizationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetOrganizationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.GetOrganizationRequest";
    encode(message: GetOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrganizationRequest;
    fromJSON(object: any): GetOrganizationRequest;
    toJSON(message: GetOrganizationRequest): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
    } & {
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "organizationId">, never>>(object: I): GetOrganizationRequest;
};
export declare const ListOrganizationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsRequest";
    encode(message: ListOrganizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationsRequest;
    fromJSON(object: any): ListOrganizationsRequest;
    toJSON(message: ListOrganizationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter">, never>>(object: I): ListOrganizationsRequest;
};
export declare const ListOrganizationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationsResponse";
    encode(message: ListOrganizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationsResponse;
    fromJSON(object: any): ListOrganizationsResponse;
    toJSON(message: ListOrganizationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        organizations?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            title?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        organizations?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            title?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            title?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            title?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["organizations"][number]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["organizations"][number], "$type" | "description" | "id" | "name" | "createdAt" | "title" | "labels">, never>)[] & Record<Exclude<keyof I["organizations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            title?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "organizations">, never>>(object: I): ListOrganizationsResponse;
};
export declare const UpdateOrganizationRequest: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest";
    encode(message: UpdateOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationRequest;
    fromJSON(object: any): UpdateOrganizationRequest;
    toJSON(message: UpdateOrganizationRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        organizationId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
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
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "title" | "labels" | "updateMask" | "organizationId">, never>>(object: I): UpdateOrganizationRequest;
};
export declare const UpdateOrganizationRequest_LabelsEntry: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry";
    encode(message: UpdateOrganizationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationRequest_LabelsEntry;
    fromJSON(object: any): UpdateOrganizationRequest_LabelsEntry;
    toJSON(message: UpdateOrganizationRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateOrganizationRequest_LabelsEntry;
};
export declare const UpdateOrganizationMetadata: {
    $type: "yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata";
    encode(message: UpdateOrganizationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationMetadata;
    fromJSON(object: any): UpdateOrganizationMetadata;
    toJSON(message: UpdateOrganizationMetadata): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
    } & {
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "organizationId">, never>>(object: I): UpdateOrganizationMetadata;
};
export declare const ListOrganizationOperationsRequest: {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest";
    encode(message: ListOrganizationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationOperationsRequest;
    fromJSON(object: any): ListOrganizationOperationsRequest;
    toJSON(message: ListOrganizationOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "organizationId">, never>>(object: I): ListOrganizationOperationsRequest;
};
export declare const ListOrganizationOperationsResponse: {
    $type: "yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse";
    encode(message: ListOrganizationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationOperationsResponse;
    fromJSON(object: any): ListOrganizationOperationsResponse;
    toJSON(message: ListOrganizationOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListOrganizationOperationsResponse;
};
/** A set of methods for managing Organization resources. */
export declare const OrganizationServiceService: {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOrganizationRequest;
        readonly responseSerialize: (value: Organization) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Organization;
    };
    /** Retrieves the list of Organization resources. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrganizationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationsRequest;
        readonly responseSerialize: (value: ListOrganizationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOrganizationsResponse;
    };
    /** Updates the specified organization. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOrganizationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified organization. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrganizationOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationOperationsRequest;
        readonly responseSerialize: (value: ListOrganizationOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOrganizationOperationsResponse;
    };
    /** Lists access bindings for the specified organization. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified organization. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified organization. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OrganizationServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: handleUnaryCall<GetOrganizationRequest, Organization>;
    /** Retrieves the list of Organization resources. */
    list: handleUnaryCall<ListOrganizationsRequest, ListOrganizationsResponse>;
    /** Updates the specified organization. */
    update: handleUnaryCall<UpdateOrganizationRequest, Operation>;
    /** Lists operations for the specified organization. */
    listOperations: handleUnaryCall<ListOrganizationOperationsRequest, ListOrganizationOperationsResponse>;
    /** Lists access bindings for the specified organization. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified organization. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface OrganizationServiceClient extends Client {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get(request: GetOrganizationRequest, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    get(request: GetOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    get(request: GetOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    /** Retrieves the list of Organization resources. */
    list(request: ListOrganizationsRequest, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    list(request: ListOrganizationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    list(request: ListOrganizationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    /** Updates the specified organization. */
    update(request: UpdateOrganizationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified organization. */
    listOperations(request: ListOrganizationOperationsRequest, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOrganizationOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOrganizationOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    /** Lists access bindings for the specified organization. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified organization. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OrganizationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): OrganizationServiceClient;
    service: typeof OrganizationServiceService;
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
