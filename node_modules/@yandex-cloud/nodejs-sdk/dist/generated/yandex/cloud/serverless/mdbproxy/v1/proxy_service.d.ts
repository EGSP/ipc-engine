/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Target, Proxy } from "../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
export interface GetProxyRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest";
    /**
     * ID of the proxy to return.
     *
     * To get a proxy ID make a [ProxyService.List] request.
     */
    proxyId: string;
}
export interface ListProxyRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest";
    /**
     * ID of the folder to list proxies in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters proxies listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Proxy.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-proxy`.
     */
    filter: string;
}
export interface ListProxyResponse {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse";
    /** List of proxies in the specified folder. */
    proxies: Proxy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateProxyRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest";
    /**
     * ID of the folder to create a proxy in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Proxy target. */
    target?: Target;
}
export interface CreateProxyRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateProxyMetadata {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata";
    /** ID of the proxy. */
    proxyId: string;
}
export interface UpdateProxyRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest";
    /** ID of the proxy to update. */
    proxyId: string;
    /** Field mask that specifies which attributes of the proxy should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the proxy. */
    description: string;
    /** Proxy labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Proxy target. */
    target?: Target;
}
export interface UpdateProxyRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateProxyMetadata {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata";
    /** ID of the proxy. */
    proxyId: string;
}
export interface DeleteProxyRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest";
    /** ID of the proxy. */
    proxyId: string;
}
export interface DeleteProxyMetadata {
    $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata";
    /** ID of the proxy. */
    proxyId: string;
}
export interface ListProxyOperationsRequest {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest";
    /** ID of the proxy to list operations for. */
    proxyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListProxyOperationsResponse {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse";
    /** List of operations for the specified proxy. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetProxyRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest";
    encode(message: GetProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProxyRequest;
    fromJSON(object: any): GetProxyRequest;
    toJSON(message: GetProxyRequest): unknown;
    fromPartial<I extends {
        proxyId?: string | undefined;
    } & {
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "proxyId">, never>>(object: I): GetProxyRequest;
};
export declare const ListProxyRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest";
    encode(message: ListProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyRequest;
    fromJSON(object: any): ListProxyRequest;
    toJSON(message: ListProxyRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListProxyRequest;
};
export declare const ListProxyResponse: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse";
    encode(message: ListProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyResponse;
    fromJSON(object: any): ListProxyResponse;
    toJSON(message: ListProxyResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        proxies?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
                clickhouse?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
                postgresql?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        proxies?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
                clickhouse?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
                postgresql?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
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
            target?: {
                clickhouse?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
                postgresql?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
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
            } & Record<Exclude<keyof I["proxies"][number]["labels"], string | number>, never>) | undefined;
            target?: ({
                clickhouse?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
                postgresql?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
            } & {
                clickhouse?: ({
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } & {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } & Record<Exclude<keyof I["proxies"][number]["target"]["clickhouse"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
                postgresql?: ({
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } & {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } & Record<Exclude<keyof I["proxies"][number]["target"]["postgresql"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
            } & Record<Exclude<keyof I["proxies"][number]["target"], "$type" | "clickhouse" | "postgresql">, never>) | undefined;
        } & Record<Exclude<keyof I["proxies"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "target">, never>)[] & Record<Exclude<keyof I["proxies"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
                clickhouse?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
                postgresql?: {
                    clusterId?: string | undefined;
                    user?: string | undefined;
                    password?: string | undefined;
                    db?: string | undefined;
                    endpoint?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "proxies">, never>>(object: I): ListProxyResponse;
};
export declare const CreateProxyRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest";
    encode(message: CreateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyRequest;
    fromJSON(object: any): CreateProxyRequest;
    toJSON(message: CreateProxyRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        target?: {
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
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
        target?: ({
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
        } & {
            clickhouse?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["clickhouse"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
            postgresql?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["postgresql"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
        } & Record<Exclude<keyof I["target"], "$type" | "clickhouse" | "postgresql">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "target">, never>>(object: I): CreateProxyRequest;
};
export declare const CreateProxyRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry";
    encode(message: CreateProxyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyRequest_LabelsEntry;
    fromJSON(object: any): CreateProxyRequest_LabelsEntry;
    toJSON(message: CreateProxyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateProxyRequest_LabelsEntry;
};
export declare const CreateProxyMetadata: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata";
    encode(message: CreateProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyMetadata;
    fromJSON(object: any): CreateProxyMetadata;
    toJSON(message: CreateProxyMetadata): unknown;
    fromPartial<I extends {
        proxyId?: string | undefined;
    } & {
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "proxyId">, never>>(object: I): CreateProxyMetadata;
};
export declare const UpdateProxyRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest";
    encode(message: UpdateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyRequest;
    fromJSON(object: any): UpdateProxyRequest;
    toJSON(message: UpdateProxyRequest): unknown;
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
        target?: {
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
        } | undefined;
        proxyId?: string | undefined;
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
        target?: ({
            clickhouse?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
            postgresql?: {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } | undefined;
        } & {
            clickhouse?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["clickhouse"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
            postgresql?: ({
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & {
                clusterId?: string | undefined;
                user?: string | undefined;
                password?: string | undefined;
                db?: string | undefined;
                endpoint?: string | undefined;
            } & Record<Exclude<keyof I["target"]["postgresql"], "$type" | "clusterId" | "user" | "password" | "db" | "endpoint">, never>) | undefined;
        } & Record<Exclude<keyof I["target"], "$type" | "clickhouse" | "postgresql">, never>) | undefined;
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "target" | "proxyId">, never>>(object: I): UpdateProxyRequest;
};
export declare const UpdateProxyRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry";
    encode(message: UpdateProxyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyRequest_LabelsEntry;
    fromJSON(object: any): UpdateProxyRequest_LabelsEntry;
    toJSON(message: UpdateProxyRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateProxyRequest_LabelsEntry;
};
export declare const UpdateProxyMetadata: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata";
    encode(message: UpdateProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyMetadata;
    fromJSON(object: any): UpdateProxyMetadata;
    toJSON(message: UpdateProxyMetadata): unknown;
    fromPartial<I extends {
        proxyId?: string | undefined;
    } & {
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "proxyId">, never>>(object: I): UpdateProxyMetadata;
};
export declare const DeleteProxyRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest";
    encode(message: DeleteProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProxyRequest;
    fromJSON(object: any): DeleteProxyRequest;
    toJSON(message: DeleteProxyRequest): unknown;
    fromPartial<I extends {
        proxyId?: string | undefined;
    } & {
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "proxyId">, never>>(object: I): DeleteProxyRequest;
};
export declare const DeleteProxyMetadata: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata";
    encode(message: DeleteProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProxyMetadata;
    fromJSON(object: any): DeleteProxyMetadata;
    toJSON(message: DeleteProxyMetadata): unknown;
    fromPartial<I extends {
        proxyId?: string | undefined;
    } & {
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "proxyId">, never>>(object: I): DeleteProxyMetadata;
};
export declare const ListProxyOperationsRequest: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest";
    encode(message: ListProxyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyOperationsRequest;
    fromJSON(object: any): ListProxyOperationsRequest;
    toJSON(message: ListProxyOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        proxyId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        proxyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "proxyId">, never>>(object: I): ListProxyOperationsRequest;
};
export declare const ListProxyOperationsResponse: {
    $type: "yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse";
    encode(message: ListProxyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyOperationsResponse;
    fromJSON(object: any): ListProxyOperationsResponse;
    toJSON(message: ListProxyOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListProxyOperationsResponse;
};
/** A set of methods for managing serverless MDB proxy. */
export declare const ProxyServiceService: {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProxyRequest;
        readonly responseSerialize: (value: Proxy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Proxy;
    };
    /** Retrieves the list of proxies in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProxyRequest;
        readonly responseSerialize: (value: ListProxyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProxyResponse;
    };
    /** Creates a proxy in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified proxy. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified proxy. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified proxy. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProxyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProxyOperationsRequest;
        readonly responseSerialize: (value: ListProxyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProxyOperationsResponse;
    };
    /** Lists existing access bindings for the specified proxy. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the proxy. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified proxy. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ProxyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: handleUnaryCall<GetProxyRequest, Proxy>;
    /** Retrieves the list of proxies in the specified folder. */
    list: handleUnaryCall<ListProxyRequest, ListProxyResponse>;
    /** Creates a proxy in the specified folder. */
    create: handleUnaryCall<CreateProxyRequest, Operation>;
    /** Updates the specified proxy. */
    update: handleUnaryCall<UpdateProxyRequest, Operation>;
    /** Deletes the specified proxy. */
    delete: handleUnaryCall<DeleteProxyRequest, Operation>;
    /** Lists operations for the specified proxy. */
    listOperations: handleUnaryCall<ListProxyOperationsRequest, ListProxyOperationsResponse>;
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the proxy. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface ProxyServiceClient extends Client {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get(request: GetProxyRequest, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    get(request: GetProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    get(request: GetProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    /** Retrieves the list of proxies in the specified folder. */
    list(request: ListProxyRequest, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    list(request: ListProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    list(request: ListProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    /** Creates a proxy in the specified folder. */
    create(request: CreateProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified proxy. */
    update(request: UpdateProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified proxy. */
    delete(request: DeleteProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified proxy. */
    listOperations(request: ListProxyOperationsRequest, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListProxyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListProxyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the proxy. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ProxyServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ProxyServiceClient;
    service: typeof ProxyServiceService;
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
